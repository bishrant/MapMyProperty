import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MMPHomeComponent } from './mmphome.component';
import { NgModule } from '@angular/core';
import { EsriMapModule } from './esrimap/esrimap.module';

const routes: Routes = [
  {
    path: '',
    component: MMPHomeComponent,
  },
];

@NgModule({
  declarations: [MMPHomeComponent],
  imports: [CommonModule, EsriMapModule, RouterModule.forChild(routes), FlexLayoutModule, HeaderModule],
  exports: [RouterModule],
})
export class MMPHomepageModule {}
