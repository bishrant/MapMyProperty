import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PmloComponent } from './pmlo/pmlo.component';
import { HeaderModule } from '../shared/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: PmloComponent,
  },
];
@NgModule({
  declarations: [PmloComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HeaderModule
  ]
})
export class PlanmylandoperationModule { }
