import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  images = [
    'https://placehold.co/600x1000/yellow/white',
    'https://placehold.co/600x900/orange/white',
    'https://placehold.co/600x1200/blue/white',
    'https://placehold.co/700x1000/green/white',
    'https://placehold.co/600x900/orange/white',
    'https://placehold.co/600x1200/orange/white',
    'https://placehold.co/600x900/green/white',
    'https://placehold.co/600x1200/blue/white',
  ];
}
