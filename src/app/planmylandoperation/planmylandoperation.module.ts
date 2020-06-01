import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { PmloComponent } from './pmlo/pmlo.component';
import { NgModule } from '@angular/core';
import { EsriMapModule } from './esrimap/esrimap.module';

const routes: Routes = [
  {
    path: '',
    component: PmloComponent,
  },
];
@NgModule({
  declarations: [
    PmloComponent],
  imports: [
    CommonModule,
    EsriMapModule,
    RouterModule.forChild(routes),
    FlexLayoutModule,
    HeaderModule
  ]
})
export class PlanmylandoperationModule { }
