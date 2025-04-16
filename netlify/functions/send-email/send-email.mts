import { Handler } from '@netlify/functions';

interface EmailRequest {
  email: string;
  message: string;
  honeypot: string;
}

const handler: Handler = async (event) => {
  // Vérification que la méthode HTTP est POST
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Extraction du corps de la requête
    const { email, message, honeypot }: EmailRequest = JSON.parse(event.body || '{}');

    // Validation des données
    if (!email || !message || honeypot) {
      return { statusCode: 400, body: 'Missing required fields or honeypot detected' };
    }

    // Envoi de la requête à EmailJS
    const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: process.env['EMAILJS_SERVICE_ID'],
        template_id: process.env['EMAILJS_TEMPLATE_ID'],
        user_id: process.env['EMAILJS_PUBLIC_KEY'],
        template_params: { email, message }
      })
    });

    // Gestion des erreurs de l'API EmailJS
    if (!res.ok) {
      const error = await res.text();
      return { statusCode: 500, body: `Error sending email: ${error}` };
    }

    // Retour si l'email a été envoyé avec succès
    return { statusCode: 200, body: 'Email sent successfully' };

  } catch (error) {
    // Gestion des erreurs serveur
    return { statusCode: 500, body: `Server error: ${(error as Error).message}` };
  }
};

export { handler };