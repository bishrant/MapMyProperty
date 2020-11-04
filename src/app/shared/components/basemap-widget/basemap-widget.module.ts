import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasemapWidgetComponent } from './basemap-widget.component';

@NgModule({
  declarations: [BasemapWidgetComponent],
  imports: [CommonModule],
  exports: [BasemapWidgetComponent]
})
export class BasemapWidgetModule {}
