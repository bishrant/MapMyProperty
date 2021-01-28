import { ImportExportModule } from './../../shared/components/import-export/ImportExport.module';
import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { NgModule } from '@angular/core';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { PrintToolModule } from 'src/app/shared/components/print-tool/print-tool.module';
import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';
import { MMPThemesModule } from '../sidebar/themes/themes.module';
import { BasemapWidgetModule } from 'src/app/shared/components/basemap-widget/basemap-widget.module';
import { SwipeWidgetModule } from 'src/app/shared/components/swipe-widget/swipe-widget.module';
import { GraphicsStoreModule } from 'src/app/shared/components/graphics-store/GraphicsStore.module';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';
import { SitePoliciesModule } from 'src/app/shared/components/site-policies/site-policies.module';
import { OverlayLayersWidgetModule } from 'src/app/shared/components/overlay-layers-widget/overlay-layers-widget.module';
import { MeasurementWidgetModule } from 'src/app/shared/components/measurement-widget/measurement-widget.module';
import { ScaleTextModule } from 'src/app/shared/components/scale-text/scale-text.module';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { VegetationTableModule } from '../sidebar/vegetation/vegetation-table.module';

@NgModule({
  declarations: [EsrimapComponent],
  imports: [CommonModule, GraphicsStoreModule, DrawtoolsModule,
    SliderModule, MMPThemesModule,
    ImportExportModule, PrintToolModule, AccordionPanelModule, BasemapWidgetModule, SwipeWidgetModule,
    SitePoliciesModule, HelpbuttonModule, OverlayLayersWidgetModule,
    MeasurementWidgetModule, ScaleTextModule, ModalModule, VegetationTableModule

  ],
  exports: [EsrimapComponent]
})
export class EsriMapModule { }
