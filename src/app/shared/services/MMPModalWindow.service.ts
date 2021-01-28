import { EventEmitter, Injectable, Output } from '@angular/core';
interface ModalStatus {
  name: string,
  visible: boolean
}

@Injectable({
  providedIn: 'root'
})
export class MMPModalWindowService {
  @Output() modalVisibilityChanged: EventEmitter<ModalStatus> = new EventEmitter<ModalStatus>();
  constructor () { }

  changeModalVisibility (name: string, visible: boolean) {
    this.modalVisibilityChanged.next({ name, visible });
  }
}
