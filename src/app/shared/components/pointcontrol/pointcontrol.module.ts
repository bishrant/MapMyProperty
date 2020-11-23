import { MatSliderModule } from '@angular/material/slider';
import { InfobuttonModule } from './../infobutton/infobutton.module';
import { PointcontrolComponent } from './pointcontrol.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [PointcontrolComponent],
  imports: [CommonModule, InfobuttonModule, MatSliderModule, FormsModule, MatFormFieldModule,
    ColorPickerModule, AngularSvgIconModule],
  exports: [PointcontrolComponent]
})
export class PointcontrolModule {}
