import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ImageLoaderComponent } from '../image-loader/image-loader.component';
import { Image } from '../../models/image';

@Component({
  selector: 'app-gallery',
  imports: [
    TitleCasePipe,
    RouterLink,
    ImageLoaderComponent
],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() images: Image[] = [];
}
