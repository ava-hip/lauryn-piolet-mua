import {Component, OnInit} from '@angular/core';
import {HorizontalGalleryComponent} from '../common/horizontal-gallery/horizontal-gallery.component';
import { SupabaseService } from '../services/supabase.service';

@Component({
  selector: 'app-home',
  imports: [
    HorizontalGalleryComponent
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
    this.images = await this.supabase.getImages("home");
  }

}
