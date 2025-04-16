import { Context } from '@netlify/functions'
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../../src/environments/environment';

const supabaseUrl = environment.SUPABASE_URL!;
const supabaseKey = environment.SUPABASE_KEY!;
const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);


export default async (request: Request, context: Context) => {
  try {
    const url = new URL(request.url)
    const sub = url.searchParams.get('sub')

    const { data, error } = await supabase.storage.from('images').list(sub!);
    

    return new Response(JSON.stringify(
      data!
      .filter(file => file.name.includes('.'))
      .map(file => `${supabaseUrl}/storage/v1/object/public/images/${sub}/${file.name}`)
    ), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    })
  } catch (error: any) {
    return new Response(JSON.stringify(error), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    })
  }
}
