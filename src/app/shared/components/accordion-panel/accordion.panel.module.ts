import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';
import { AccordionPanelComponent } from './accordion-panel.component';

@NgModule({
  declarations: [AccordionComponent, AccordionPanelComponent],
  imports: [
    CommonModule
  ],
  exports: [AccordionComponent, AccordionPanelComponent]
})
export class AccordionPanelModule { }
