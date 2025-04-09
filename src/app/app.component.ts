import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FooterComponent} from './common/components/footer/footer.component';
import { initFlowbite } from 'flowbite';
import { HeaderComponent } from './common/components/header/header.component';

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
