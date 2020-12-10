import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MeasurementWidgetComponent } from './measurement-widget.component';



@NgModule({
  declarations: [MeasurementWidgetComponent],
  imports: [
    CommonModule
  ],
  exports: [ MeasurementWidgetComponent ]
})
export class MeasurementWidgetModule { }
