import { Component } from '@angular/core';
import { GalleryComponent } from "../../common/gallery/gallery.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bridal',
  imports: [GalleryComponent],
  templateUrl: './bridal.component.html',
  styleUrl: './bridal.component.css'
})
export class BridalComponent {
  images: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }
}
