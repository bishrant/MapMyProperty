import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapviewService {

  @Output() soilsDisabled: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  public pushMapScale(scale: number):void {
    let isSoilsDisabled:boolean = true;
    if (scale <= 37000) {
      isSoilsDisabled = false;
    }
    this.soilsDisabled.emit(isSoilsDisabled);
  }
}
