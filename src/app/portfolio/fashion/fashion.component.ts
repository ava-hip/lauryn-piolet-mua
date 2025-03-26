import { Component } from '@angular/core';
import { SupabaseService } from '../../services/supabase.service';
import { GalleryComponent } from "../../common/gallery/gallery.component";

@Component({
  selector: 'app-fashion',
  imports: [GalleryComponent],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
    images: string[] = [];
  
    constructor(private supabase: SupabaseService) {
    }
  
    async ngOnInit() {
      this.images = await this.supabase.getImages("fashion");
    }
}
