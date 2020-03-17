import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { EsrimapComponent } from '../esrimap/esrimap.component';
import { StoreComponent } from '../../shared/store/Store.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // loadChildren: () => import('../esrimap/esrimap.module').then(m => m.EsrimapModule)
  }
];

@NgModule({
  declarations: [EsrimapComponent, HomepageComponent, StoreComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageModule { }

