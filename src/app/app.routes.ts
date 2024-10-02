import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '',
    component: HomeComponent,
    data: { title: 'Planos odontológicos para você, família e empresa | W.Dental' }
  },
];
