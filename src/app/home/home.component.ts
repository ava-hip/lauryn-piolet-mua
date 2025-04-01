import {AfterViewInit, Component} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {

  images: string[] = [];

  constructor(private route: ActivatedRoute) {
    this.route.data.subscribe(({ images }) => {
      this.images = images; 
    });
  }
  ngAfterViewInit(): void {
    this.initGSAP()
  }


  private initGSAP() {
    console.log("la méthode est appelée")
    gsap.registerPlugin(ScrollTrigger);
    const contents: any = gsap.utils.toArray("#galleryContent");
    gsap.to(contents, {
      x: () => window.innerWidth - (contents[0].offsetWidth * contents.length),
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#gallery",
        start: 'top top',
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + contents[0].offsetWidth,
      }
    });
  }

}
