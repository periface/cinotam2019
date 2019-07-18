import { Routes } from '@angular/router';
import { ErrorComponent } from './error.component';
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
    path: 'ventanillaunica',
    loadChildren: () =>
      import('./contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'maestria',
    loadChildren: () =>
      import('./master/master.module').then(m => m.MasterModule)
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./courses/courses.module').then(m => m.CoursesModule)
  },
  {
    path: 'gracias',
    component: ThanksComponent
  },
  {
    path: 'noencontrado',
    component: NotFoundComponent
  },
  {
    path: 'error',
    component: ErrorComponent
  },
  { path: '**', component: NotFoundComponent }
];
