import { AngularSvgIconModule } from 'angular-svg-icon';
import { ColorPickerModule } from '../../color-picker/color-picker.module';
import { CommonModule } from '@angular/common';
import { FillstyleComponent } from './fillstyle.component';
import { FormsModule } from '@angular/forms';
import { InfobuttonModule } from './../../infobutton/infobutton.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [FillstyleComponent],
  imports: [
    AngularSvgIconModule,
    ColorPickerModule,
    CommonModule,
    FormsModule,
    InfobuttonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [FillstyleComponent]
})
export class FillstyleModule {}
