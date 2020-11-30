import { InfobuttonModule } from './../infobutton/infobutton.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ToggleButtonModule } from '../togglebutton/togglebutton';
import { TextcontrolsComponent } from './textcontrols.component';

@NgModule({
  declarations: [TextcontrolsComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    ColorPickerModule,
    AngularSvgIconModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    MatTooltipModule,
    ToggleButtonModule,
    InfobuttonModule
  ],
  exports: [TextcontrolsComponent]
})
export class TextcontrolsModule {}
