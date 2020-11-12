import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {

  @Output() sensAreasAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() harvOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() openHelp:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
