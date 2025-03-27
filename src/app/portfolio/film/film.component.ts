import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { GalleryComponent } from "../../common/gallery/gallery.component";

@Component({
  selector: 'app-film',
  imports: [GalleryComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  images: string[] = [];

  constructor(private supabase: SupabaseService) {
  }

  async ngOnInit() {
    this.images = await this.supabase.getImages("film");
  }
}
