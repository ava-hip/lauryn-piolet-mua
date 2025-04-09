import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';

@Component({
  selector: 'app-bridal',
  imports: [GalleryComponent],
  templateUrl: './bridal.component.html',
  styleUrl: './bridal.component.css'
})
export class BridalComponent {
  images: Image[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }
}
