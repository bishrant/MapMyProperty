import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawHelpComponent } from './draw-help.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [DrawHelpComponent],
  imports: [
    CommonModule,
    AngularSvgIconModule
  ],
  exports: [DrawHelpComponent]
})
export class DrawHelpModule { }
