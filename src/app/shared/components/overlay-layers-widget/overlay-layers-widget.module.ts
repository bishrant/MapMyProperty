import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLayersWidgetComponent } from './overlay-layers-widget.component';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  declarations: [OverlayLayersWidgetComponent],
  imports: [
    CommonModule,
    HelpbuttonModule
  ],
  exports: [OverlayLayersWidgetComponent]
})
export class OverlayLayersWidgetModule { }
