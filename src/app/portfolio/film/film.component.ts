import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Image } from '../../common/models/image';
import { GalleryComponent } from '../../common/components/gallery/gallery.component';
import { Project } from '../../common/models/projects';

@Component({
  selector: 'app-film',
  imports: [GalleryComponent],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css'
})
export class FilmComponent {
  projects: Project[] | undefined;

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ projects }) => {
      this.projects = projects;
      console.log(projects)
    });
  }
}
