import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { NewsPageDetailComponent } from './components/news-page-detail.component';
import { NewsPageComponent } from './news-page.component';
import { NewsDetailsResolver } from './resolvers/news-detail.resolver';

const routes: Routes = [
  { path: '', component: NewsPageComponent },
  {
    path: 'detalle/:slug',
    component: NewsPageDetailComponent
    // resolve: { newsDetail: NewsDetailsResolver }
  }
];

@NgModule({
  declarations: [NewsPageComponent, NewsPageDetailComponent],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [NewsDetailsResolver],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
