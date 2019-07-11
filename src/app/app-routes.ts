import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { ThanksComponent } from './shared/thanks.component';

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
  {
    path: 'account',
    loadChildren: () =>
      import('./account/account.module').then(m => m.AccountModule)
  },
  {
    path: 'ventanillaunica',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'gracias',
    component: ThanksComponent
  },
  { path: '**', component: NotFoundComponent }
];
