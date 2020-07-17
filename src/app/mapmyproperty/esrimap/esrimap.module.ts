import { ImportExportModule } from './../../shared/components/import-export/ImportExport.module';
import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';

@NgModule({
  declarations: [EsrimapComponent],
  imports: [CommonModule, GraphicsStoreModule, SidebarModule, DrawtoolsModule, ImportExportModule],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
