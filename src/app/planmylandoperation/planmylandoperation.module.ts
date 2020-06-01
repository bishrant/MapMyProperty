import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PmloComponent } from './pmlo/pmlo.component';
import { HeaderModule } from '../shared/components/header/header.module';
import { EsrimapComponent } from './esrimap/esrimap.component';
import { DrawtoolsModule } from '../shared/modules/drawtools/drawtools.module';
import { SidebarModule } from '../mapmyproperty/sidebar/sidebar.module';
import { GraphicsStoreModule } from '../shared/store/GraphicsStore.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';

const routes: Routes = [
  {
    path: '',
    component: PmloComponent,
  },
];
@NgModule({
  declarations: [
    PmloComponent,
    EsrimapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    FlexLayoutModule,
    GraphicsStoreModule,
    HeaderModule,
    DrawtoolsModule,
    SidebarModule,
  ]
})
export class PlanmylandoperationModule { }
