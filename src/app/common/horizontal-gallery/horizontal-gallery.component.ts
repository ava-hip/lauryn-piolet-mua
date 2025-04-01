import {AfterViewInit, Component, Input} from '@angular/core';
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

@Component({
  selector: 'app-horizontal-gallery',
  imports: [],
  templateUrl: './horizontal-gallery.component.html',
  standalone: true,
  styleUrl: './horizontal-gallery.component.css'
})
export class HorizontalGalleryComponent implements AfterViewInit{
  @Input() images?: string[];

  ngAfterViewInit(): void {
    const firstContent = document.querySelector<HTMLElement>("#galleryContent");
    if (firstContent) {
      const observer = new ResizeObserver(() => {
        if (firstContent.offsetWidth > 0) {
          observer.disconnect(); 
          this.initGSAP(); 
        }
      });
      observer.observe(firstContent); 
    }
  }

  private initGSAP() {
    gsap.registerPlugin(ScrollTrigger);

    const contents = gsap.utils.toArray<HTMLElement>("#galleryContent"); 
    let maxWidth = 0;
    contents.forEach((content) => {
      maxWidth += content.offsetWidth;
    });

    gsap.to(contents, {
      x: () => `-${maxWidth - window.innerWidth}`, 
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#gallery",
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
        end: `+=${maxWidth}`, 
      }
    });

  }
}
