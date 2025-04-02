import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }
  
  title = 'lauryn-piolet-mua';

}
