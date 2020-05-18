import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawtoolsComponent } from './drawtools.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from '../../components/color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations: [DrawtoolsComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    ColorPickerModule,
    AngularSvgIconModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonToggleModule,
  ],
  exports: [DrawtoolsComponent],
})
export class DrawtoolsModule {}
