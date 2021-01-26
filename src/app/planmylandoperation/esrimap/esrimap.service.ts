import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {
  @Output() sensAreasAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() harvOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeAllPanelsExcept:EventEmitter<string> = new EventEmitter<string>();

  public setActivePanel (panelTitle: String, panelOpened: boolean) {
    switch (panelTitle) {
      case 'Sensitive Areas':
        this.sensAreasAccordionOpen.emit(panelOpened);
        break;

      case 'Operational Considerations':
        this.harvOpAccordionOpen.emit(panelOpened);
        break;

      case 'Regeneration':
        this.regOpAccordionOpen.emit(panelOpened);
        break;

      case 'Soils':
        this.soilsAccordionOpen.emit(panelOpened);
        break;
    }
  }

  constructor () { }
}
