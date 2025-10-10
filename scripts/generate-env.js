const fs = require('fs');
const path = require('path');

const envFile = path.join(__dirname, '../src/environments/environment.prod.ts');

if (fs.existsSync(envFile)) {
  let content = fs.readFileSync(envFile, 'utf8');

  content = content.replace('${EMAILJS_SERVICE_ID}', process.env.EMAILJS_SERVICE_ID || '');
  content = content.replace('${EMAILJS_TEMPLATE_ID}', process.env.EMAILJS_TEMPLATE_ID || '');
  content = content.replace('${EMAILJS_PUBLIC_KEY}', process.env.EMAILJS_PUBLIC_KEY || '');

  fs.writeFileSync(envFile, content);
  console.log('✅ Variables d\'environnement injectées dans environment.prod.ts');
} else {
  console.error('❌ Fichier environment.prod.ts introuvable');
  process.exit(1);
}
