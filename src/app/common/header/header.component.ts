import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import { ToggleComponent } from '../tools/toggle-component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent extends ToggleComponent{
  override toggleId: string = "menu-toggle";
}
