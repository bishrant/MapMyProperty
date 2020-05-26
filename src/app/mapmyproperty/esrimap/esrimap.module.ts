import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/modules/drawtools/drawtools.module';

@NgModule({
  declarations: [EsrimapComponent],
  imports: [CommonModule, GraphicsStoreModule, SidebarModule, DrawtoolsModule],
  exports: [EsrimapComponent],
})
export class EsriMapModule {}
