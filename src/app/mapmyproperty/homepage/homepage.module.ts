import { NgModule } from '@angular/core';
import { HomepageComponent } from './homepage.component';
import { Routes, RouterModule } from '@angular/router';
import { EsrimapComponent } from '../esrimap/esrimap.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
    // loadChildren: () => import('../esrimap/esrimap.module').then(m => m.EsrimapModule)
  }
];

@NgModule({
  declarations: [EsrimapComponent, HomepageComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, EsrimapComponent],
})
export class HomepageModule { }

