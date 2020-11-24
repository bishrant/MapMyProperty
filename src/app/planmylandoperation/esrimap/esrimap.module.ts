import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SensAreasComponent } from '../sidebar/sens-areas/sens-areas.component';
import { SoilsComponent } from '../sidebar/soils/soils.component';
import { ElevationProfileModule } from '../sidebar/elevation-profile/elevation-profile.module';
import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { ModalModule } from 'src/app/shared/lib/angular-modal/modal/modal-module';
import { SoilsTableComponent } from '../sidebar/soils/soils-table/soils-table.component';
import { HarvestOperationsComponent } from '../sidebar/harvest-operations/harvest-operations.component';
import { OperationLegendComponent } from '../operation-legend/operation-legend.component';
import { CulvertSizeModule } from '../sidebar/culvert-size/culvert-size.module';
import { RegenerationOperationsComponent } from '../sidebar/regeneration-operations/regeneration-operations.component';
import { PrintToolModule } from 'src/app/shared/components/print-tool/print-tool.module';
import { BasemapWidgetModule } from 'src/app/shared/components/basemap-widget/basemap-widget.module';
import { ImportExportModule } from 'src/app/shared/components/import-export/ImportExport.module';
import { SoilsHelpComponent } from '../help-templates/soils-help/soils-help.component';
import { SensAreasHelpComponent } from '../help-templates/sens-areas-help/sens-areas-help.component';
import { HarvestOperationsHelpComponent } from '../help-templates/harvest-operations-help/harvest-operations-help.component';
import { RegenerationOperationsHelpComponent } from '../help-templates/regeneration-operations-help/regeneration-operations-help.component';
import { CulvertHelpComponent } from '../help-templates/culvert-help/culvert-help.component';
import { ElevationHelpModule } from 'src/app/shared/components/help-components/elevation-help/elevation-help.module';
import { DrawHelpModule } from 'src/app/shared/components/help-components/draw-help/draw-help.module';
import { ImportExportHelpModule } from 'src/app/shared/components/help-components/import-export-help/import-export-help.module';
import { ExportMapHelpModule } from 'src/app/shared/components/help-components/export-map-help/export-map-help.module';
import { OverlayLayersWidgetModule } from 'src/app/shared/components/overlay-layers-widget/overlay-layers-widget.module';
import { LayersHelpModule } from 'src/app/shared/components/help-components/layers-help/layers-help.module';
import { SwipeWidgetModule } from 'src/app/shared/components/swipe-widget/swipe-widget.module';
import { HelpbuttonModule } from 'src/app/shared/components/help-button/help-button.module';
import { ScaleTextModule } from 'src/app/shared/components/scale-text/scale-text.module';
@NgModule({
  declarations: [
    EsrimapComponent,
    SensAreasComponent,
    SoilsComponent,
    SoilsTableComponent,
    HarvestOperationsComponent,
    OperationLegendComponent,
    RegenerationOperationsComponent,
    SoilsHelpComponent,
    SensAreasHelpComponent,
    HarvestOperationsHelpComponent,
    RegenerationOperationsHelpComponent,
    CulvertHelpComponent
  ],
  imports: [
    CommonModule,
    GraphicsStoreModule,
    SidebarModule,
    DrawtoolsModule,
    MatSliderModule,
    MatButtonModule,
    FormsModule,
    ElevationProfileModule,
    AccordionPanelModule,
    ModalModule,
    CulvertSizeModule,
    PrintToolModule,
    BasemapWidgetModule,
    SwipeWidgetModule,
    ImportExportModule,
    ElevationHelpModule,
    DrawHelpModule,
    ImportExportHelpModule,
    ExportMapHelpModule,
    OverlayLayersWidgetModule,
    LayersHelpModule,
    HelpbuttonModule,
    ScaleTextModule
  ],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
