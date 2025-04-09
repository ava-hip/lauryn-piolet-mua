import { Component } from '@angular/core';
import { Image } from '../../../models/image';
import { ActivatedRoute } from '@angular/router';
import { NgOptimizedImage } from '@angular/common';
import { ImageLoaderComponent } from "../../image-loader/image-loader.component";

@Component({
  selector: 'app-shooting-gallery',
  imports: [
    NgOptimizedImage,
    ImageLoaderComponent
],
  templateUrl: './shooting-gallery.component.html',
  styleUrl: './shooting-gallery.component.css',
  providers: [
    
  ]
})
export class ShootingGalleryComponent {
  images: Image[] = [];
  loaded: boolean[] = [];
  
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
      this.loaded = this.images.map(() => false);
    });
  }
}
