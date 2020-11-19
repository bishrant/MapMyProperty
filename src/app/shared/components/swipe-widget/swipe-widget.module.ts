import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SwipeWidgetComponent } from './swipe-widget.component';

@NgModule({
  declarations: [SwipeWidgetComponent],
  imports: [CommonModule, FormsModule],
  exports: [SwipeWidgetComponent]
})
export class SwipeWidgetModule {}
