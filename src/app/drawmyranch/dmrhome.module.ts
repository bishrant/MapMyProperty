import { RouterModule, Routes } from '@angular/router';

import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from '../shared/components/color-picker/color-picker.module';
import { CommonModule } from '@angular/common';
import { DMRHomeComponent } from './dmrhome.component';
import { EsrimapComponent } from './esrimap/esrimap.component';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/components/header/header.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';
import { GraphicsStoreModule } from '../shared/components/graphics-store/GraphicsStore.module';

const routes: Routes = [
  {
    path: '',
    component: DMRHomeComponent
  }
];

@NgModule({
  declarations: [EsrimapComponent, DMRHomeComponent],
  imports: [
    CommonModule,
    // BrowserAnimationsModule,
    RouterModule.forChild(routes),
    MatIconModule,
    MatButtonModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    AngularSvgIconModule,
    ColorPickerModule,
    GraphicsStoreModule,
    HeaderModule
  ],
  exports: [RouterModule]
})
export class DMRHomepageModule {}
