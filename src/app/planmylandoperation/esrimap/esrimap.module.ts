import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SensAreasComponent } from '../sidebar/sens-areas/sens-areas.component';
import { SoilsComponent } from '../sidebar/soils/soils.component';
import { ElevationProfileModule } from '../sidebar/elevation-profile/elevation-profile.module';
import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
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
import { ElevationHelpComponent } from '../help-templates/elevation-help/elevation-help.component';
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
    CulvertHelpComponent,
    ElevationHelpComponent
  ],
  imports: [
    CommonModule,
    GraphicsStoreModule,
    SidebarModule,
    DrawtoolsModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ElevationProfileModule,
    AccordionPanelModule,
    FontAwesomeModule,
    ModalModule,
    CulvertSizeModule,
    PrintToolModule,
    BasemapWidgetModule,
    ImportExportModule
  ],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
