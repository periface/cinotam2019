import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { MasterComponent } from './master.component';
const routes: Routes = [
  {
    path: '',
    component: MasterComponent
  }
];

@NgModule({
  declarations: [MasterComponent],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class MasterRoutingModule {}
