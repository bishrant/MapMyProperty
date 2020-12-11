import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementWidgetComponent } from './measurement-widget.component';
import { HelpbuttonModule } from '../help-button/help-button.module';



@NgModule({
  declarations: [MeasurementWidgetComponent],
  imports: [
    CommonModule,
    HelpbuttonModule
  ],
  exports: [ MeasurementWidgetComponent ]
})
export class MeasurementWidgetModule { }
