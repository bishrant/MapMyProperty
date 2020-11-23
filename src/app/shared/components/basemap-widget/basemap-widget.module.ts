import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasemapWidgetComponent } from './basemap-widget.component';
import { FormsModule } from '@angular/forms';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  declarations: [BasemapWidgetComponent],
  imports: [CommonModule, FormsModule, HelpbuttonModule],
  exports: [BasemapWidgetComponent]
})
export class BasemapWidgetModule {}
