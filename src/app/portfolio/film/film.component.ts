import { Component } from '@angular/core';
import { GalleryComponent } from "../../common/gallery/gallery.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film',
  imports: [GalleryComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  images: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }
}
