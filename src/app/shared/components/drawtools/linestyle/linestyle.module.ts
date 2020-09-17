import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { InfobuttonModule } from '../../infobutton/infobutton.module';
import { MatButtonModule } from '@angular/material/button';
import { LinestyleComponent } from './linestyle.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ColorPickerModule } from '../../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [LinestyleComponent],
  imports: [
    CommonModule,
    InfobuttonModule,
    MatSliderModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    FontAwesomeModule,
    ColorPickerModule,
    AngularSvgIconModule,
    MatButtonModule,
    MatSelectModule,
    MatButtonToggleModule
  ],
  exports: [LinestyleComponent]
})
export class LinestyleModule {}
