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
  closeMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav');
    const button = document.getElementById('dropdownDefaultButton');
    if (mobileNav && button) {
      mobileNav.classList.add('hidden');
      button.setAttribute('aria-expanded', 'false');
    }
  }
}
