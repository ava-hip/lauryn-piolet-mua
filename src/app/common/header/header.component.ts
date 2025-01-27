import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMobileShow: boolean = false;

  toggleMobileMenu() {
    this.isMobileShow =! this.isMobileShow
  }
}
