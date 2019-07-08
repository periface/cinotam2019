import { Routes } from '@angular/router';

import { NotFoundComponent } from './not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./welcome/welcome.module').then(m => m.WelcomeModule)
  },
  {
    path: 'noticias',
    loadChildren: () => import('./news/news.module').then(m => m.NewsModule)
  },
  { path: '**', component: NotFoundComponent }
];
