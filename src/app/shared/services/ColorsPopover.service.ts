import { Injectable } from '@angular/core';
import {
  Overlay,
  ConnectionPositionPair,
  OverlayConfig,
  FlexibleConnectedPositionStrategy
} from '@angular/cdk/overlay';
import { Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorsPopoverService {
  overlayRef: any;
  sub: Subscription;
  private afterClosed = new Subject<any>();
  onClosed = this.afterClosed.asObservable();

  constructor(private overlay: Overlay) {}

  open(origin: any, componentPortal: any, data: any) {
    let config = new OverlayConfig({
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: 'transparentBackDropPopup'
    });

    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.close({ color: ref.instance['color'], opacity: ref.instance['opacity'], closePopup: true }, true);
    });

    const ref = this.overlayRef.attach(componentPortal);
    for (let key in data) ref.instance[key] = data[key];
    return this.onClosed;
  }

  private getOverlayPosition(origin: any): any {
    const positionStrategy: FlexibleConnectedPositionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withFlexibleDimensions(true)
      .withPush(true);
    return positionStrategy;
  }

  close = (data: any, closePopup = true) => {
    if (closePopup) {
    //   this.afterClosed.next(data);
    // } else {
      this.sub && this.sub.unsubscribe();
      if (this.overlayRef) {
        this.overlayRef.dispose();
        this.overlayRef = null;
        this.afterClosed.next(data);
      }
    }
  };

  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top'
      },
      {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top'
      },
      {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top'
      }
    ];
  }
}
