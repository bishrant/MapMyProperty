import { RouterModule, Routes } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { PmloComponent } from './pmlo/pmlo.component';
import { NgModule } from '@angular/core';
import { EsriMapModule } from './esrimap/esrimap.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { PmloAboutComponent } from './pmlo/pmlo-about/pmlo-about.component';

const routes: Routes = [
  {
    path: '',
    component: PmloComponent
  },
  {
    path: 'about',
    component: PmloAboutComponent
  }
];
@NgModule({
  declarations: [
    PmloComponent,
    PmloAboutComponent],
  imports: [
    CommonModule,
    EsriMapModule,
    RouterModule.forChild(routes),
    HeaderModule
  ],
  providers: [DecimalPipe]
})
export class PlanmylandoperationModule {
  constructor (overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('pmlo-theme');
  }
}
