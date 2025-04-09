import {AfterViewInit, Component} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ActivatedRoute } from '@angular/router';
import { Image } from '../common/models/image';
import { HorizontalGalleryComponent } from '../common/components/gallery/horizontal-gallery/horizontal-gallery.component';


@Component({
  selector: 'app-home',
  imports: [HorizontalGalleryComponent],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {

  images: Image[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }

}
