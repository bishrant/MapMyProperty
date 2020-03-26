import { Injectable } from "@angular/core";
import {
  Overlay,
  ConnectionPositionPair,
  PositionStrategy,
  OverlayConfig,
  FlexibleConnectedPositionStrategy
} from "@angular/cdk/overlay";
import { Subscription, Subject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class ColorsPopoverService {
  overlayRef: any;
  sub: Subscription;
  private afterClosed = new Subject<any>();
  onClosed = this.afterClosed.asObservable();

  constructor(private overlay: Overlay) {}

  openRotiniPanel(origin: any, componentPortal: any, data: any) {
    let config = new OverlayConfig({
      positionStrategy: this.getOverlayPosition(origin),
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: true,
      backdropClass: "transparentBackDropPopup"
      // flexibleDimensions: true
    });

    this.overlayRef = this.overlay.create(config);

    this.overlayRef.backdropClick().subscribe(() => {
      this.close({ color: ref.instance['color'], opacity: ref.instance['opacity'] }, true);
    });

    const ref = this.overlayRef.attach(componentPortal);
    for (let key in data) ref.instance[key] = data[key];

    //   this.sub = fromEvent<MouseEvent>(document, "click")
    //     .pipe(
    //       filter(event => {
    //         const clickTarget = event.target as any;
    //         return (
    //           clickTarget != origin &&
    //           !!this.overlayRef &&
    //           !this.overlayRef.overlayElement.contains(clickTarget)
    //         );
    //       }),
    //       take(1)
    //     )
    //     .subscribe(() => {
    //       this.close(null);
    //     });
    return this.onClosed;//.pipe(take(1));
  }

  private getOverlayPosition(origin: any): PositionStrategy {
    const positionStrategy: FlexibleConnectedPositionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(origin)
      .withPositions(this.getPositions())
      .withFlexibleDimensions(true)
      .withPush(true);

    return positionStrategy;
  }

  // open(
  //   origin: any,
  //   component: any,
  //   viewContainerRef: ViewContainerRef,
  //   data: any
  // ) {
  //   if (this.isOpen) {
  //     console.log("opne already");
  //     this.close(null);
  //     return;
  //   }
  //   this.isOpen = true;
  //   this.close(null);
  //   this.overlayRef = this.overlay.create(
  //     this.getOverlayConfig({ origin: origin })
  //   );

  //   const ref = this.overlayRef.attach(
  //     new ComponentPortal(component, viewContainerRef)
  //   );
  //   for (let key in data) ref.instance[key] = data[key];

  //   this.sub = fromEvent<MouseEvent>(document, "click")
  //     .pipe(
  //       filter(event => {
  //         const clickTarget = event.target as any;
  //         return (
  //           clickTarget != origin &&
  //           !!this.overlayRef &&
  //           !this.overlayRef.overlayElement.contains(clickTarget)
  //         );
  //       }),
  //       take(1)
  //     )
  //     .subscribe(() => {
  //       this.close(null);
  //     });
  //   return this.onClosed.pipe(take(1));
  // }

  close = (data: any, closePopup = true) => {
    // console.log(data);
    if (!closePopup) {
      // just send the data without closing the popup
      // console.log(data);
      this.afterClosed.next(data);
    } else {
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
