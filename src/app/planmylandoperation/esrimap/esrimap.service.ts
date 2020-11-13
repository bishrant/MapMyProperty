import { EventEmitter, Injectable, Output } from '@angular/core';
import { PMLOHelpObj } from '../models/pmoHelpObj.model';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {

  @Output() sensAreasAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() harvOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openHelp:EventEmitter<PMLOHelpObj> = new EventEmitter<PMLOHelpObj>();

  constructor() { }
}
