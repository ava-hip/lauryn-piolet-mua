import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';

@Component({
  selector: 'app-film',
  imports: [GalleryComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  images: Image[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }
}
