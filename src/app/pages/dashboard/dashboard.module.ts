import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HeaderModule } from '../../shared/components/header/header.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    // loadChildren: () => import('../esrimap/esrimap.module').then(m => m.EsrimapModule)
  },
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(routes), MatIconModule, HeaderModule],
  exports: [DashboardComponent],
})
export class DashboardModule {}
