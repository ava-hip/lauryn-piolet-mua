import {Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';;
import { HorizontalGalleryComponent } from '../common/components/gallery/horizontal-gallery/horizontal-gallery.component';
import { Project } from '../common/models/projects';


@Component({
  selector: 'app-home',
  imports: [HorizontalGalleryComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  project: Project | undefined;


  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ project }) => {
      this.project = project;
    });
  }

}
