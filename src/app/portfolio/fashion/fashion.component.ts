import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';
import { Project } from '../../common/models/projects';

@Component({
  selector: 'app-fashion',
  imports: [GalleryComponent],
  templateUrl: './fashion.component.html',
  standalone: true,
  styleUrl: './fashion.component.css'
})
export class FashionComponent {
    projects: Project[] | undefined;

    constructor(private route: ActivatedRoute) {
      this.route.data.subscribe(({ projects }) => {
        this.projects = projects;
      });
    }
}
