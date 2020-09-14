import { InfobuttonModule } from './../infobutton/infobutton.module';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
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
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatButtonToggleModule,
    MatTooltipModule,
    ToggleButtonModule,
    InfobuttonModule
  ],
  exports: [TextcontrolsComponent]
})
export class TextcontrolsModule {}
