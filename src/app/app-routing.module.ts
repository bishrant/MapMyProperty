import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'mapmyproperty',
    loadChildren: () => import('./mapmyproperty/mmphome.module').then((m) => m.MMPHomepageModule)
  },
  { path: 'pmlo', loadChildren: () => import('./planmylandoperation/planmylandoperation.module').then(m => m.PlanmylandoperationModule) },
  {
    path: 'drawmyranch',
    loadChildren: () => import('./drawmyranch/dmrhome.module').then((m) => m.DMRHomepageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
