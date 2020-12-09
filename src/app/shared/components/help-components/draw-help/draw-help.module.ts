import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawHelpComponent } from './draw-help.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [DrawHelpComponent],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [DrawHelpComponent]
})
export class DrawHelpModule { }
