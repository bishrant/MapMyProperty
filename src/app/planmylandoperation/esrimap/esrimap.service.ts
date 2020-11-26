import { EventEmitter, Injectable, Output } from '@angular/core';
import { AccordionPanelComponent } from 'src/app/shared/components/accordion-panel/accordion-panel.component';
import { PMLOHelpObj } from '../models/pmoHelpObj.model';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {

  @Output() sensAreasAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() harvOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeAllPanelsExcept:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
