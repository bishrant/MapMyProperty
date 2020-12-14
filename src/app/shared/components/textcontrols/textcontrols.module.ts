import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToggleButtonModule } from '../togglebutton/togglebutton';
import { TextcontrolsComponent } from './textcontrols.component';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  declarations: [TextcontrolsComponent],
  imports: [
    CommonModule,
    ColorPickerModule,
    AngularSvgIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatButtonToggleModule,
    ToggleButtonModule,
    SliderModule
  ],
  exports: [TextcontrolsComponent]
})
export class TextcontrolsModule {}
