import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AngularMaterialModule } from '../angular-material.module';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

@NgModule({
  exports: [TopMenuComponent, FooterComponent],
  declarations: [TopMenuComponent, FooterComponent],
  imports: [AngularMaterialModule, CommonModule, RouterModule]
})
export class LayoutModule {}
