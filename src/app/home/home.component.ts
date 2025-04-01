import {Component, OnInit} from '@angular/core';
import {HorizontalGalleryComponent} from '../common/horizontal-gallery/horizontal-gallery.component';
import { SupabaseService } from '../services/supabase.service';


@Component({
  selector: 'app-home',
  imports: [
    HorizontalGalleryComponent,
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  images: string[] = [];

  constructor(private supabase: SupabaseService) {
  }

  async ngOnInit() {
    console.log('Appel de getImages dans ngOnInit');
    try {
      this.images = await this.supabase.getImages("home");
      console.log('Images récupérées :', this.images);
    } catch (error) {
      console.error('Erreur lors de la récupération des images', error);
    }  }

}
