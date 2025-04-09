import { Component } from '@angular/core';
import { GalleryComponent } from "../../common/gallery/gallery.component";
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';

@Component({
  selector: 'app-fashion',
  imports: [GalleryComponent],
  templateUrl: './fashion.component.html',
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
    images: Image[] = [];
  
    constructor(private route: ActivatedRoute) {
      this.route.data.subscribe(({ images }) => {
        this.images = images; 
      });
    }
}
