import { Component, OnInit } from '@angular/core';
import { SupabaseService } from '../services/supabase.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  images: string[] = [];

  constructor(private supabase: SupabaseService) {
  }

  async ngOnInit() {
    this.images = await this.supabase.getImages();
  }
}
