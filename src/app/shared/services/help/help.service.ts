import { EventEmitter, Injectable, Output } from '@angular/core';
import { HelpObj } from './HelpObj.model';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  @Output() openHelp:EventEmitter<HelpObj> = new EventEmitter<HelpObj>();

  constructor () { }
}
