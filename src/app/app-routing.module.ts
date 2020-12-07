import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const pmlochildren = () => import('./planmylandoperation/planmylandoperation.module').then(m => m.PlanmylandoperationModule);
const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/dashboard/dashboard.module').then((m) => m.DashboardModule),
    pathMatch: 'full',
    data: { title: 'Map My Property Dashboard' }
  },
  {
    path: 'mapmyproperty',
    loadChildren: () => import('./mapmyproperty/mmphome.module').then((m) => m.MMPHomepageModule),
    data: { title: 'Map My Property' }
  },
  {
    path: '',
    loadChildren: pmlochildren,
    data: { title: 'Plan My Land Operation' }
  },
  {
    path: 'drawmyranch',
    loadChildren: () => import('./drawmyranch/dmrhome.module').then((m) => m.DMRHomepageModule),
    data: { title: 'Draw My Ranch' }
  },
  { redirectTo: 'mapmyproperty', path: 'mmp' },
  { redirectTo: '/', path: '**' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
