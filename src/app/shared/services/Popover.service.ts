import { Injectable, ViewContainerRef, Host, Optional } from "@angular/core";
import {
  Overlay,
  ConnectionPositionPair,
  PositionStrategy,
  OverlayConfig
} from "@angular/cdk/overlay";
import {
  PortalInjector,
  ComponentPortal,
  TemplatePortal
} from "@angular/cdk/portal";
import { fromEvent, Subscription, Subject } from "rxjs";
import { filter, take } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class MenuContextualService {
  overlayRef: any;
  sub: Subscription;
  isOpen = false;
  private afterClosed = new Subject<any>();
  onClosed = this.afterClosed.asObservable();

  constructor(private overlay: Overlay) {}

  open(
    origin: any,
    component: any,
    viewContainerRef: ViewContainerRef,
    data: any
  ) {
      if (this.isOpen) {
        console.log('opne already')
      this.close(null);
      return;
    }
    this.isOpen = true;
    this.close(null);
    this.overlayRef = this.overlay.create(
      this.getOverlayConfig({ origin: origin })
    );

    const ref = this.overlayRef.attach(
      new ComponentPortal(component, viewContainerRef)
    );
    for (let key in data) ref.instance[key] = data[key];

    this.sub = fromEvent<MouseEvent>(document, "click")
      .pipe(
        filter(event => {
          const clickTarget = event.target as any;
          return (
            clickTarget != origin &&
            !!this.overlayRef &&
            !this.overlayRef.overlayElement.contains(clickTarget)
          );
        }),
        take(1)
      )
      .subscribe(() => {
        this.close(null);
      });
    return this.onClosed.pipe(take(1));
  }

  close = (data: any) => {
    this.isOpen = false;
    this.sub && this.sub.unsubscribe();
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null;
      this.afterClosed.next(data);
    }
  };
  private getOverlayPosition(origin: any): PositionStrategy {
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withPush(false);

    return positionStrategy;
  }
  private getOverlayConfig({ origin }): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: false,
      backdropClass: "popover-backdrop",
      positionStrategy: this.getOverlayPosition(origin),
      
    });
  }
  private getPositions(): ConnectionPositionPair[] {
    return [
      {
        originX: "center",
        originY: "bottom",
        overlayX: "center",
        overlayY: "top"
      },
      {
        originX: "start",
        originY: "bottom",
        overlayX: "start",
        overlayY: "top"
      },
      {
        originX: "end",
        originY: "bottom",
        overlayX: "end",
        overlayY: "top"
      }
    ];
  }
}
