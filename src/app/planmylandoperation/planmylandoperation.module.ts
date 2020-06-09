import { RouterModule, Routes } from '@angular/router';
import { CommonModule, DecimalPipe } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { PmloComponent } from './pmlo/pmlo.component';
import { NgModule } from '@angular/core';
import { EsriMapModule } from './esrimap/esrimap.module';
import { DialogService } from '../shared/components/dialogs/dialog.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { OverlayContainer } from '@angular/cdk/overlay';

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
    HeaderModule,
    MatDialogModule
  ],
  providers:[DialogService, MatDialog, DecimalPipe]
})
export class PlanmylandoperationModule { 
  constructor(overlayContainer: OverlayContainer) {
    overlayContainer.getContainerElement().classList.add('pmlo-theme');
  }
}