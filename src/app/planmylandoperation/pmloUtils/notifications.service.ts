import { EventEmitter, Injectable, Output } from '@angular/core';
import { PMLONotification } from '../models/pmloNotification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  @Output() openNotificationsModal:EventEmitter<PMLONotification> = new EventEmitter<PMLONotification>();

  constructor () { }
}
