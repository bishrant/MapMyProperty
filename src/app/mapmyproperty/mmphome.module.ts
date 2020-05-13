import { SidebarModule } from './sidebar/sidebar.module';
import { DrawtoolsModule } from './../shared/modules/drawtools/drawtools.module';
import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap/esrimap.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { HeaderModule } from 'src/app/shared/components/header/header.module';
import { MMPHomeComponent } from './mmphome.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MMPHomeComponent,
  },
];

@NgModule({
  declarations: [EsrimapComponent, MMPHomeComponent],
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
  ],
  exports: [RouterModule],
})
export class MMPHomepageModule {}
