import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  @ViewChild('menuMobile') menuMobile!: ElementRef;
  @ViewChild('menuToggle') menuToggle!: ElementRef;

  toggleMobileMenu() {
    this.isMobileShow =! this.isMobileShow
  }

  closeMenu() {
    this.isMobileShow = false;
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (!this.menuMobile?.nativeElement.contains(event.target) && !this.menuToggle?.nativeElement.contains(event.target)) {
      this.closeMenu();
    }
  }
}
