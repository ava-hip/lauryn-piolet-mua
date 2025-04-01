import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  constructor(private http: HttpClient) {}

  async getImages(sub: string): Promise<string[]> {
    const url = `/.netlify/functions/supabase-images?sub=${sub}`;

    try {
      const response = await firstValueFrom(this.http.get<string[]>(url));
      return response;
    } catch (error) {
      console.error('Erreur lors du chargement des images', error);
      return [];
    }
  }
}