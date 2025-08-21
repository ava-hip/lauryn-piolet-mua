import { ActivatedRouteSnapshot, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BridalComponent } from './portfolio/bridal/bridal.component';
import { FilmComponent } from './portfolio/film/film.component';
import { FashionComponent } from './portfolio/fashion/fashion.component';
import { SupabaseService } from './services/supabase.service';
import { inject } from '@angular/core';
import { ShootingGalleryComponent } from './common/components/gallery/shooting-gallery/shooting-gallery.component';
import { ProjectService } from './services/project.service';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    resolve: {
      project: () => inject(ProjectService).getProjectBySlug("home")
    }
  },
  { path: 'film', 
    component: FilmComponent,     
    resolve: {
      projects: () => inject(ProjectService).getProjectByCategory("film")
    }
  },
  { 
    path: 'film/:id', 
    component: ShootingGalleryComponent,
    resolve: {
      images: (route: ActivatedRouteSnapshot) => {
        return inject(SupabaseService).getImages("film/" + route.paramMap.get("id"))
      }
    }
  },
  { 
    path: 'fashion', 
    component: FashionComponent,
    resolve: {
      projects: () => inject(ProjectService).getProjectByCategory("fashion")
    }
  },
  { 
    path: 'fashion/:id', 
    component: ShootingGalleryComponent,
    resolve: {
      images: (route: ActivatedRouteSnapshot) => {
        return inject(SupabaseService).getImages("fashion/" + route.paramMap.get("id"))
      }
    }
  },
  {
    path: 'bridal', 
    component: BridalComponent,
    resolve: {
      projects: () => inject(ProjectService).getProjectByCategory("bridal")
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'},
];
