const fs = require('fs');
const path = require('path');

const envPath = path.join(__dirname, '../src/environments/environment.ts');

let content = fs.readFileSync(envPath, 'utf8');

// Remplace les placeholders par les variables d'environnement
content = content.replace('__SUPABASE_URL__', process.env.SUPABASE_URL || '');
content = content.replace('__SUPABASE_ANON_KEY__', process.env.SUPABASE_ANON_KEY || '');
content = content.replace('__EMAILJS_SERVICE_ID__', process.env.EMAILJS_SERVICE_ID || '');
content = content.replace('__EMAILJS_TEMPLATE_ID__', process.env.EMAILJS_TEMPLATE_ID || '');
content = content.replace('__EMAILJS_PUBLIC_KEY__', process.env.EMAILJS_PUBLIC_KEY || '');

// Écrit le fichier final
fs.writeFileSync(envPath, content);

console.log('✅ environment.ts mis à jour avec les variables d\'environnement');