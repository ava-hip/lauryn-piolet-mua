import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-loader',
  imports: [],
  templateUrl: './image-loader.component.html',
  styleUrl: './image-loader.component.css',
  standalone: true
})
export class ImageLoaderComponent {
  @Input() src!: string;
  @Input() class!: string;

  loaded = false; 

  simulateDelay() {
    setTimeout(() => this.loaded = true, 1000); // Simule 1s de chargement
  }
}
