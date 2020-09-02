import { ImportExportModule } from './../../shared/components/import-export/ImportExport.module';
import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { PrintToolModule } from 'src/app/shared/components/print-tool/print-tool.module';

@NgModule({
  declarations: [EsrimapComponent],
  imports: [CommonModule, GraphicsStoreModule, SidebarModule, DrawtoolsModule, ImportExportModule, PrintToolModule],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
