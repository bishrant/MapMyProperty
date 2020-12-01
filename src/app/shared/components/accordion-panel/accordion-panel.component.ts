import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion-panel',
  template: `<div class="mypanel" >
    <div class="title" (click)="toggle.emit()" [style.color]="textColor" [style.backgroundColor]="backgroundColor">
      {{panelTitle}}
      <svg  [style.fill]="textColor" class="svg" [class.rotate]="opened" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down"role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </div>
    <div class="body" [hidden]="!opened">
      <ng-content></ng-content>
    </div>
  <div>
  `,
  styleUrls: ['./accordion-component.scss']
})
export class AccordionPanelComponent implements OnInit {
  @Input() opened = false;
  @Input() panelTitle: string;
  @Input() backgroundColor: String = 'lightgray';
  @Input() textColor: String = 'black';
  @Output() toggle: EventEmitter<any> = new EventEmitter<any>();

  public toggleOthers() {
    if (!this.opened) this.toggle.emit();
  }
  ngOnInit() { }
}
