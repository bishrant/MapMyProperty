import { EventEmitter, Injectable, Output } from '@angular/core';
interface WidgetView {
  name: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class WidgetToggleService {
  @Output() widgetViewChanged: EventEmitter<WidgetView> = new EventEmitter<WidgetView>();
  constructor () { }

  changeWidgetView (name: string, visible: boolean) {
    this.widgetViewChanged.next({ name, visible });
  }
}
