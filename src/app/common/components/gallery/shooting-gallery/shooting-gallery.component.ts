import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageLoaderComponent } from "../../image-loader/image-loader.component";
import { Project } from '../../../models/projects';

@Component({
  selector: 'app-shooting-gallery',
  imports: [
    ImageLoaderComponent
],
  templateUrl: './shooting-gallery.component.html',
  styleUrl: './shooting-gallery.component.css',
  providers: [
    
  ]
})
export class ShootingGalleryComponent {
  project: Project | undefined;
  
  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ project }) => {
      this.project = project; 
    });
  }
}
