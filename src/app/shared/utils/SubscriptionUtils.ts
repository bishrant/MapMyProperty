import { Subscription } from 'rxjs';

export interface SubscriptionCollection {
  [key: string]: Subscription;
}

export const serialUnsubscriber = (...subs: Subscription[]) =>
  subs.filter(sub => sub instanceof Subscription && typeof sub.unsubscribe === 'function')
    .forEach(sub => sub.unsubscribe());
