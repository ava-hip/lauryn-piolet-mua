import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  async getImages(sub: string): Promise<string[]> {
    const { data, error } = await this.supabase.storage
      .from('images')
      .list(sub);
      console.log(data, error);
    if (error) {
      console.error('Erreur lors du chargement des images', error);
      return [];
    }
    return data.map(file => `${environment.supabaseUrl}/storage/v1/object/public/images/${sub}/${file.name}`);
  }
}