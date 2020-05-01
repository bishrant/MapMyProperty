import { RouterModule, Routes } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from '../shared/components/color-picker/color-picker.module';
import { CommonModule } from '@angular/common';
import { DMRHomeComponent } from './dmrhome.component';
import { EsrimapComponent } from './esrimap/esrimap.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { GraphicsStoreModule } from '../shared/store/GraphicsStore.module';
import { HeaderModule } from '../shared/components/header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: '',
    component: DMRHomeComponent,
  },
];

@NgModule({
  declarations: [EsrimapComponent, DMRHomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatTooltipModule,
    MatSliderModule,
    FlexLayoutModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    AngularSvgIconModule,
    ColorPickerModule,
    GraphicsStoreModule,
    HeaderModule,
  ],
  exports: [RouterModule],
})
export class DMRHomepageModule {}
