import {Component} from '@angular/core';
import {HorizontalGalleryComponent} from '../common/horizontal-gallery/horizontal-gallery.component';

@Component({
  selector: 'app-home',
  imports: [
    HorizontalGalleryComponent
  ],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images = [
    'https://placehold.co/600x900/yellow/white',
    'https://placehold.co/600x900/green/white',
    'https://placehold.co/600x900/orange/white',
    'https://placehold.co/600x900/blue/white',
    'https://placehold.co/600x900',
    'https://placehold.co/600x900/orange/white',
    'https://placehold.co/600x900/green/white',
  ];

}
