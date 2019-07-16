import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule } from '@angular/forms';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { HomeButtonsComponent } from './components/home-buttons/home-buttons.component';
import { WelcomeComponent } from './welcome.component';

const routes: Routes = [{ path: '', component: WelcomeComponent }];

@NgModule({
  declarations: [WelcomeComponent, HomeButtonsComponent],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    LazyLoadImageModule
  ],
  exports: [RouterModule]
})
export class WelcomeRoutingModule {}
