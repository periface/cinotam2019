import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { ContactComponent } from './contact.component';
const routes: Routes = [{ path: '', component: ContactComponent }];
@NgModule({
  declarations: [ContactComponent],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    CommonModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    NgxCaptchaModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class ContactRoutingModule {}
