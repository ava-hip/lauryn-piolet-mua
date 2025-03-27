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
export class HorizontalGalleryComponent implements AfterViewInit, OnChanges{
  @Input() images?: string[];

   ngAfterViewInit(): void {
    this.initGSAP();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initGSAP(); 
  }

  private initGSAP() {
    if (!this.images?.length) return;

    gsap.registerPlugin(ScrollTrigger);
    
    setTimeout(() => {
      const contents: any = gsap.utils.toArray("#galleryContent");
      if (!contents.length) return;

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
    }, 100); 
  }
}
