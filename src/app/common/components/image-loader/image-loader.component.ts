import { Component, EventEmitter, Input, Output } from '@angular/core';

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
  @Output() loadedEvent = new EventEmitter<void>();

  loaded: boolean = false

  onLoad() {
    this.loaded = true;
    this.loadedEvent.emit();
  }
}
