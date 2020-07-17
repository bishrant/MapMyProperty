import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorPickerComponent } from './color-picker.component';
import { MatSliderModule } from '@angular/material/slider';
import { ColorPickerPopoverComponent } from './color-picker.popover.component';

@NgModule({
  declarations: [ColorPickerComponent, ColorPickerPopoverComponent],
  imports: [CommonModule, MatSliderModule],
  exports: [ColorPickerComponent, ColorPickerPopoverComponent]
})
export class ColorPickerModule {}
