import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';
import { Project } from '../../common/models/projects';

@Component({
  selector: 'app-bridal',
  imports: [GalleryComponent],
  templateUrl: './bridal.component.html',
  styleUrl: './bridal.component.css'
})
export class BridalComponent {
  projects: Project[]|undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ projects }) => {
      this.projects = projects; 
    });
  }
}
