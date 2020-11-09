import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasemapWidgetComponent } from './basemap-widget.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BasemapWidgetComponent],
  imports: [CommonModule, FormsModule],
  exports: [BasemapWidgetComponent]
})
export class BasemapWidgetModule {}
