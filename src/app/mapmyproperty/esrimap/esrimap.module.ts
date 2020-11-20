import { ImportExportModule } from './../../shared/components/import-export/ImportExport.module';
import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { PrintToolModule } from 'src/app/shared/components/print-tool/print-tool.module';
import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';
import { MMPThemesModule } from '../sidebar/themes/themes.module';
import { BasemapWidgetModule } from 'src/app/shared/components/basemap-widget/basemap-widget.module';
import { SwipeWidgetModule } from 'src/app/shared/components/swipe-widget/swipe-widget.module';

@NgModule({
  declarations: [EsrimapComponent],
  imports: [CommonModule, GraphicsStoreModule,  DrawtoolsModule,
    SliderModule, MMPThemesModule,
    ImportExportModule, PrintToolModule, AccordionPanelModule, BasemapWidgetModule, SwipeWidgetModule],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
