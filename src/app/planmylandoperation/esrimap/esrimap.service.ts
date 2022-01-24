import { EventEmitter, Injectable, Output } from '@angular/core';
import { AccordionPanelComponent } from 'src/app/shared/components/accordion-panel/accordion-panel.component';

@Injectable({
  providedIn: 'root'
})
export class EsrimapService {
  @Output() sensAreasAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() soilsAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() harvOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() regOpAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() plotLayoutAccordionOpen:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() closeAllPanelsExcept:EventEmitter<string> = new EventEmitter<string>();

  public setActivePanel (panel: AccordionPanelComponent) {
    if (!panel || panel === null) return;

    const panelTitle = panel.panelTitle;
    const panelOpened = panel.opened;

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

      case 'Plot Layout':
        this.plotLayoutAccordionOpen.emit(panelOpened);
    }
  }

  constructor () { }
}
