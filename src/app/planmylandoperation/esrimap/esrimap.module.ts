import { CommonModule } from '@angular/common';
import { EsrimapComponent } from './esrimap.component';
import { GraphicsStoreModule } from 'src/app/shared/store/GraphicsStore.module';
import { NgModule } from '@angular/core';
import { SidebarModule } from '../sidebar/sidebar.module';
import { DrawtoolsModule } from 'src/app/shared/components/drawtools/drawtools.module';
import { MatSliderModule } from '@angular/material/slider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { SensAreasComponent } from '../sidebar/sens-areas/sens-areas.component';
import { SoilsComponent } from '../sidebar/soils/soils.component';
import { ElevationProfileModule } from '../sidebar/elevation-profile/elevation-profile.module';
import { AccordionPanelModule } from 'src/app/shared/components/accordion-panel/accordion.panel.module';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    EsrimapComponent,
    SensAreasComponent,
    SoilsComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule,
    GraphicsStoreModule,
    SidebarModule,
    DrawtoolsModule,
    MatSliderModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ElevationProfileModule,
    AccordionPanelModule
  ],
  exports: [EsrimapComponent]
})
export class EsriMapModule {}
