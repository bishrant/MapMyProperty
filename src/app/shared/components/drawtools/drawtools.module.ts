import { LinestyleModule } from './linestyle/linestyle.module';
import { FillstyleModule } from './fillstyle/fillstyle.module';
import { PointcontrolModule } from './../pointcontrol/pointcontrol.module';
import { InfobuttonModule } from './../infobutton/infobutton.module';
import { RGBtoHEX } from '../../utils/Colors.pipe';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawtoolsComponent } from './drawtools.component';
import { ColorPickerModule } from '../color-picker/color-picker.module';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { ToggleButtonModule } from '../togglebutton/togglebutton';
import { TextcontrolsModule } from '../textcontrols/textcontrols.module';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  declarations: [DrawtoolsComponent, RGBtoHEX],
  imports: [
    CommonModule,
    ColorPickerModule,
    AngularSvgIconModule,
    MatSelectModule,
    FormsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    MatButtonToggleModule,
    ToggleButtonModule,
    TextcontrolsModule,
    InfobuttonModule,
    PointcontrolModule,
    FillstyleModule,
    LinestyleModule,
    ColorPickerModule,
    HelpbuttonModule
  ],
  exports: [DrawtoolsComponent]
})
export class DrawtoolsModule {}
