import { Component, OnInit } from '@angular/core';
import { GalleryComponent } from "../../common/gallery/gallery.component";
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-bridal',
  imports: [GalleryComponent],
  templateUrl: './bridal.component.html',
  styleUrl: './bridal.component.css'
})
export class BridalComponent implements OnInit {
  images: string[] = [];

  constructor(private supabase: SupabaseService) {
  }

  async ngOnInit() {
    this.images = await this.supabase.getImages("bridal");
  }
}
