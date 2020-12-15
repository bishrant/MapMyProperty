import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpbuttonComponent } from './help-button.component';
import { AngularSvgIconModule } from 'angular-svg-icon';

@NgModule({
  declarations: [HelpbuttonComponent],
  imports: [CommonModule, AngularSvgIconModule],
  exports: [HelpbuttonComponent]
})
export class HelpbuttonModule {}
