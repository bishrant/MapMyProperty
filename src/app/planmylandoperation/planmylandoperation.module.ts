import { RouterModule, Routes } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { PmloComponent } from './pmlo/pmlo.component';
import { NgModule } from '@angular/core';
import { EsriMapModule } from './esrimap/esrimap.module';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SensareasHelpComponent } from './help-templates/sensareas-help/sensareas-help.component';

const routes: Routes = [
  {
    path: '',
    component: PmloComponent
  }
];
@NgModule({
  declarations: [
    PmloComponent,
    SensareasHelpComponent],
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
