import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {

  @Output() toggleHarvOp:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() toggleSoilsAccordion:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
