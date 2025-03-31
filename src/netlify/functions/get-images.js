const { createClient } = require('@supabase/supabase-js');

exports.handler = async (event) => {
  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const sub = event.queryStringParameters.sub;

  if (!sub) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Le paramètre "sub" est requis' }),
    };
  }

  const { data, error } = await supabase.storage
    .from('images')
    .list(sub);

  if (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Erreur lors du chargement des images' }),
    };
  }

  const images = data.map(file => `${supabaseUrl}/storage/v1/object/public/images/${sub}/${file.name}`);

  return {
    statusCode: 200,
    body: JSON.stringify(images),
  };
};