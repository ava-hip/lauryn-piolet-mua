import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { BridalComponent } from './portfolio/bridal/bridal.component';
import { FilmComponent } from './portfolio/film/film.component';
import { FashionComponent } from './portfolio/fashion/fashion.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'film', component: FilmComponent},
  {path: 'fashion', component: FashionComponent},
  {path: 'bridal', component: BridalComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];
