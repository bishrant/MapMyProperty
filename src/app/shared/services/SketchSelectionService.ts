import { EventEmitter, Injectable, Output } from '@angular/core';
interface SketchSelectionMode{
  toolName: string,
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class SketchSelectionService {
  @Output() disableSketchSelection: EventEmitter<SketchSelectionMode> = new EventEmitter<SketchSelectionMode>();
  constructor () { }

  changeSketchSelectionMode (toolName: string, status: boolean) {
    this.disableSketchSelection.emit({ toolName, status });
  }
}
