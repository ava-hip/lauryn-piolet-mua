import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { Image } from '../common/models/image';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  constructor(private http: HttpClient) {}
  
  async getImages(sub: string): Promise<Image[]> {
    const url = `/.netlify/functions/supabase-images?sub=${sub}`;

    try {
      return firstValueFrom(this.http.get<string[]>(url)).then(imageUrls =>
        imageUrls.map(imageUrl => ({
          image: imageUrl,
          shooting: imageUrl.split('/').pop()!.split('-')[0]
        }))
      );
    } catch (error) {
      console.error('Erreur lors du chargement des images', error);
      return [];
    }
  }
}