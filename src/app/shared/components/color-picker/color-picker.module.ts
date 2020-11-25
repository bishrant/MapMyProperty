import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { ColorPickerPopoverComponent } from './color-picker.popover.component';
import { SliderModule } from '../slider/slider.module';

@NgModule({
  declarations: [ColorPickerComponent, ColorPickerPopoverComponent],
  imports: [CommonModule, SliderModule],
  exports: [ColorPickerComponent, ColorPickerPopoverComponent]
})
export class ColorPickerModule {}
