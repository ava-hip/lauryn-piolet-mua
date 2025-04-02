import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BridalComponent } from './portfolio/bridal/bridal.component';
import { FilmComponent } from './portfolio/film/film.component';
import { FashionComponent } from './portfolio/fashion/fashion.component';
import { SupabaseService } from './services/supabase.service';
import { inject } from '@angular/core';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    resolve: {
      images: () => inject(SupabaseService).getImages("home")
    }
  },
  { path: 'film', 
    component: FilmComponent,     
    resolve: {
      images: () => inject(SupabaseService).getImages("film")
    }
  },
  { 
    path: 'fashion', 
    component: FashionComponent,
    resolve: {
      images: () => inject(SupabaseService).getImages("fashion")
    }
  },
  {
    path: 'bridal', 
    component: BridalComponent,
    resolve: {
      images: () => inject(SupabaseService).getImages("bridal")
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
