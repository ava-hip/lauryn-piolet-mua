import {AfterViewInit, Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-horizontal-gallery',
  imports: [],
  templateUrl: './horizontal-gallery.component.html',
  standalone: true,
  styleUrl: './horizontal-gallery.component.css'
})
export class HorizontalGalleryComponent implements OnChanges{
  @Input() images?: string[];
  isLoading: boolean = true;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['images'] && this.images?.length) {
      setTimeout(() => this.initGSAP(), 0);
    }
  }

  private initGSAP() {
    gsap.registerPlugin(ScrollTrigger);
    const contents: any = gsap.utils.toArray("#galleryContent");
    gsap.to(contents, {
      x: () => window.innerWidth - (contents[0].offsetWidth * contents.length),
      ease: "power1",
      scrollTrigger: {
        trigger: "#gallery",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + contents[0].offsetWidth,
      }
    });
  }
}
