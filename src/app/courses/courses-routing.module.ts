import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularMaterialModule } from '../shared/angular-material.module';
import { CatalogComponent } from './catalog/catalog.component';
import { CoursesComponent } from './courses.component';
const routes: Routes = [
  {
    path: '',
    component: CoursesComponent
  },
  {
    path: 'catalogo/:id',
    component: CatalogComponent
  }
];

@NgModule({
  declarations: [CoursesComponent, CatalogComponent],
  imports: [
    RouterModule.forChild(routes),
    AngularMaterialModule,
    FormsModule,
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class CoursesRoutingModule {}
