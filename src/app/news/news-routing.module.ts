import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { AddNewsPostComponent } from './components/add-newspost/add-newspost.component';
import { NewsPageDetailComponent } from './components/news-detail/news-page-detail.component';
import { NewsPageComponent } from './news-page.component';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['account']);
const routes: Routes = [
  { path: '', component: NewsPageComponent },
  {
    path: 'detalle/:slug',
    component: NewsPageDetailComponent
    // resolve: { newsDetail: NewsDetailsResolver }
  },
  {
    path: 'add',
    component: AddNewsPostComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin }
  }
];

@NgModule({
  declarations: [
    NewsPageComponent,
    NewsPageDetailComponent,
    AddNewsPostComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
