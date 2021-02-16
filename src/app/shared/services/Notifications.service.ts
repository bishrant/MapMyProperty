import { EventEmitter, Injectable, Output } from '@angular/core';
import { NotificationModel } from '../models/Notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  @Output() openNotificationsModal:EventEmitter<NotificationModel> = new EventEmitter<NotificationModel>();

  constructor () { }
}
