import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {

  @Output() toggleSoilsAccordion:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleHarvOpAccordion:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleRegOpAccordion:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
