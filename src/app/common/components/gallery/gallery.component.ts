import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageLoaderComponent } from '../image-loader/image-loader.component';
import { Project } from '../../models/projects';

@Component({
  selector: 'app-gallery',
  imports: [
    RouterLink,
    ImageLoaderComponent
  ],
  templateUrl: './gallery.component.html',
  standalone: true,
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() projects: Project[] | undefined;
  @ViewChild('masonry', { static: false }) masonryRef?: ElementRef<HTMLElement>;
  isMobile = window.innerWidth < 768;

  onImageLoaded() {
    requestAnimationFrame(() => {
      const masonry = this.masonryRef?.nativeElement;
      if (!masonry) return;
      masonry.style.display = 'none';
      masonry.offsetHeight;
      masonry.style.display = '';
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobile = window.innerWidth < 768;
  }
}
