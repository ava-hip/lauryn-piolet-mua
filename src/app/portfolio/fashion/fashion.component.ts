import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';

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
