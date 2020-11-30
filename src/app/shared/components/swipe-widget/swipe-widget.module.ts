import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwipeWidgetComponent } from './swipe-widget.component';
import { HelpbuttonModule } from '../help-button/help-button.module';

@NgModule({
  declarations: [SwipeWidgetComponent],
  imports: [CommonModule, FormsModule, HelpbuttonModule],
  exports: [SwipeWidgetComponent]
})
export class SwipeWidgetModule {}
