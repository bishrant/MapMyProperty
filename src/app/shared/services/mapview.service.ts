import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapviewService {

  @Output() soilsDisabled: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsGLHasPolygons: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() clearSensAreasGraphics: EventEmitter<void> = new EventEmitter<void>();
  @Output() scaleChanged: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  // Sets the scale dependency for the soils checkboxes
  public pushMapScale(scale: number):void {
    let isSoilsDisabled:boolean = true;
    if (scale <= 37000) {
      isSoilsDisabled = false;
    }
    this.soilsDisabled.emit(isSoilsDisabled);
    this.scaleChanged.emit(scale);
  }
}
