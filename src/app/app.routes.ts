import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';
import { ContatoPage } from './pages/contato/contato.page';

export const routes: Routes = [
  { path: '',
    component: HomePage,
    data: { title: 'Projeto Angular' }
  },

  { path: 'contato',
    component: ContatoPage,
    data: { title: 'Contato' }
  },
];
