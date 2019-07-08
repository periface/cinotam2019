import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from '../angular-material.module';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  exports: [TopMenuComponent],
  declarations: [TopMenuComponent],
  imports: [AngularMaterialModule, CommonModule, RouterModule]
})
export class LayoutModule {}
