import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { NewsPageComponent } from './news-page.component';

const routes: Routes = [{ path: '', component: NewsPageComponent }];

@NgModule({
  declarations: [NewsPageComponent],
  imports: [RouterModule.forChild(routes), AngularMaterialModule, FormsModule],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
