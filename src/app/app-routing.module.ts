import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'mapmyproperty',
    loadChildren: './mapmyproperty/mmphome.module#MMPHomepageModule',
  },
  {
    path: 'drawmyranch',
    loadChildren: './drawmyranch/dmrhome.module#DMRHomepageModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
