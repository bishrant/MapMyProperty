import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { BasemapsHelpModule } from 'src/app/shared/components/help-components/basemaps-help/basemaps-help.module';
import { BasemapWidgetModule } from 'src/app/shared/components/basemap-widget/basemap-widget.module';
import { CommonModule } from '@angular/common';
import { CulvertHelpComponent } from '../help-templates/culvert-help/culvert-help.component';
import { CulvertSizeModule } from '../sidebar/culvert-size/culvert-size.module';
import { DrawHelpModule } from 'src/app/shared/components/help-components/draw-help/draw-help.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { ElevationHelpModule } from 'src/app/shared/components/help-components/elevation-help/elevation-help.module';
import { ElevationProfileModule } from '../sidebar/elevation-profile/elevation-profile.module';
import { EsrimapComponent } from './esrimap.component';
import { ExportMapHelpModule } from 'src/app/shared/components/help-components/export-map-help/export-map-help.module';
import { FormsModule } from '@angular/forms';
import { GraphicsStoreModule } from 'src/app/shared/components/graphics-store/GraphicsStore.module';
import { HarvestOperationsComponent } from '../sidebar/harvest-operations/harvest-operations.component';
import { HarvestOperationsHelpComponent } from '../help-templates/harvest-operations-help/harvest-operations-help.component';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';
import { ImportExportHelpModule } from 'src/app/shared/components/help-components/import-export-help/import-export-help.module';
import { ImportExportModule } from 'src/app/shared/components/import-export/ImportExport.module';
import { LayersHelpModule } from 'src/app/shared/components/help-components/layers-help/layers-help.module';
import { MatButtonModule } from '@angular/material/button';
import { MeasurementWidgetHelpModule } from 'src/app/shared/components/help-components/measurement-widget-help/measurement-widget-help.module';
import { MeasurementWidgetModule } from 'src/app/shared/components/measurement-widget/measurement-widget.module';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { NgModule } from '@angular/core';
import { OperationLegendComponent } from '../operation-legend/operation-legend.component';
import { OverallHelpComponent } from '../help-templates/overall-help/overall-help.component';
import { OverlayLayersWidgetModule } from 'src/app/shared/components/overlay-layers-widget/overlay-layers-widget.module';
import { PrintToolModule } from 'src/app/shared/components/print-tool/print-tool.module';
import { RegenerationOperationsComponent } from '../sidebar/regeneration-operations/regeneration-operations.component';
import { RegenerationOperationsHelpComponent } from '../help-templates/regeneration-operations-help/regeneration-operations-help.component';
import { ScaleTextModule } from 'src/app/shared/components/scale-text/scale-text.module';
import { SearchWidgetHelpModule } from 'src/app/shared/components/help-components/search-widget-help/search-widget-help.module';
import { SensAreasComponent } from '../sidebar/sens-areas/sens-areas.component';
import { SensAreasHelpComponent } from '../help-templates/sens-areas-help/sens-areas-help.component';
import { SitePoliciesModule } from 'src/app/shared/components/site-policies/site-policies.module';
import { SliderModule } from 'src/app/shared/components/slider/slider.module';
import { SoilsComponent } from '../sidebar/soils/soils.component';
import { SoilsHelpComponent } from '../help-templates/soils-help/soils-help.component';
import { SoilsTableComponent } from '../sidebar/soils/soils-table/soils-table.component';
import { SwipeHelpModule } from 'src/app/shared/components/help-components/swipe-help/swipe-help.module';
import { SwipeWidgetModule } from 'src/app/shared/components/swipe-widget/swipe-widget.module';
import { PlotLayoutModule } from '../sidebar/plot-layout/plot-layout.module';
import { PlotLayoutHelpComponent } from '../help-templates/plot-layout-help/plot-layout-help.component';

@NgModule({
  declarations: [
    CulvertHelpComponent,
    EsrimapComponent,
    HarvestOperationsComponent,
    HarvestOperationsHelpComponent,
    OperationLegendComponent,
    OverallHelpComponent,
    RegenerationOperationsComponent,
    RegenerationOperationsHelpComponent,
    SensAreasComponent,
    SensAreasHelpComponent,
    SoilsComponent,
    SoilsHelpComponent,
    SoilsTableComponent,
    PlotLayoutHelpComponent
  ],
  imports: [
    AccordionPanelModule,
    BasemapsHelpModule,
    BasemapWidgetModule,
    CommonModule,
    CulvertSizeModule,
    DrawHelpModule,
    DrawtoolsModule,
    ElevationHelpModule,
    ElevationProfileModule,
    ExportMapHelpModule,
    FormsModule,
    GraphicsStoreModule,
    HelpbuttonModule,
    ImportExportHelpModule,
    ImportExportModule,
    LayersHelpModule,
    MatButtonModule,
    MeasurementWidgetHelpModule,
    MeasurementWidgetModule,
    ModalModule,
    OverlayLayersWidgetModule,
    PrintToolModule,
    ScaleTextModule,
    SearchWidgetHelpModule,
    SitePoliciesModule,
    SliderModule,
    SwipeHelpModule,
    SwipeWidgetModule,
    PlotLayoutModule
  ],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
