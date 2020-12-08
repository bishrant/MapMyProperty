import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  @Output() closedFromButton:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
}
