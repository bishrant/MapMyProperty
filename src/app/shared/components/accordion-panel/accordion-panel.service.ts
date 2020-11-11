import { EventEmitter, Injectable, Output } from '@angular/core';
import { AccordionPanelComponent } from './accordion-panel.component';

@Injectable({
  providedIn: 'root'
})
export class AccordionPanelService {

  @Output() setActivePanel:EventEmitter<AccordionPanelComponent> = new EventEmitter<AccordionPanelComponent>();

  constructor() { }
}
