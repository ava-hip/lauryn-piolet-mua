import { Component, Input } from '@angular/core';
import { Image } from '../models/image';
import { TitleCasePipe } from '@angular/common';


    

@Component({
  selector: 'app-gallery',
  imports: [TitleCasePipe],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() images: Image[] = [];
}
