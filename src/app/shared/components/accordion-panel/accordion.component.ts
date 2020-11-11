import { Component, ContentChildren, QueryList, AfterContentInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AccordionPanelComponent } from './accordion-panel.component';
import { AccordionPanelService } from './accordion-panel.service';

@Component({
  selector: 'app-accordion',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./accordion-component.scss']
})
export class AccordionComponent implements AfterContentInit, OnDestroy {
  private subscription$: Subscription[] = [];
  @ContentChildren(AccordionPanelComponent)
  accordionPanels: QueryList<AccordionPanelComponent>;

  constructor(
    private accordionPanelService:AccordionPanelService
  ){}

  ngAfterContentInit() {
    this.accordionPanels.toArray().forEach((t) => {
      this.subscription$.push(t.toggle.subscribe(() => {
        this.togglePanelVisibility(t);
      }));
    });
  }

  togglePanelVisibility(panel: AccordionPanelComponent) {
    let activePanel:AccordionPanelComponent = null;
    this.accordionPanels.toArray().forEach((t) => {      
      if (t !== panel) {
        t.opened = false;
      } else {
        panel.opened = !panel.opened;
        if (panel.opened)
        {
          activePanel = panel;
        }
      }      
    });
    this.accordionPanelService.setActivePanel.emit(activePanel);
  }

  ngOnDestroy() {
    this.subscription$.forEach(subscription => subscription.unsubscribe());
  }
}
