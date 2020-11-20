import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayLayersWidgetComponent } from './overlay-layers-widget.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [OverlayLayersWidgetComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [OverlayLayersWidgetComponent]
})
export class OverlayLayersWidgetModule { }
