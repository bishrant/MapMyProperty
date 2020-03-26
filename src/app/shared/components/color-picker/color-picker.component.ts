import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, ViewContainerRef, TemplateRef, ContentChild } from "@angular/core";
import { MenuContextualService } from '../../services/Popover.service';
import { ColorPickerPopoverComponent } from "./color-picker.popover.component";
import { OverlayConfig, Overlay, PositionStrategy, ConnectionPositionPair, FlexibleConnectedPositionStrategy } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"]
})
export class ColorPickerComponent {
  @Input() heading: string;
  @Input() color: string;
  @Output() colorSelected: EventEmitter<string> = new EventEmitter<string>();

  public show = true;
  constructor(
    public popupService: MenuContextualService,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  open(origin: any) {
    console.log(1);
    console.log(this.popupService);
    // if (this.popupService.isOpen) {
    //   console.log(this.popupService);
    //   this.popupService.close(null);
    // } else {
    // const temp = new TemplatePortal(this.hello, this.viewContainerRef);
    // this.popupService
    //   .open(origin, ColorPickerPopoverComponent, this.viewContainerRef, {
    //     color: this.color
    //   })
    //   .subscribe(_color => {
    //     if (_color) {
    //       this.colorSelected.emit(_color);
    //     }
    //   });
    // }
  }

  openRotiniPanel(origin: any) {
    const componentPortal = new ComponentPortal(
      ColorPickerPopoverComponent,
      this.viewContainerRef
    );
    this.popupService.openRotiniPanel(origin, componentPortal, { color: this.color })
      .subscribe(_color => {
        if (_color) {
          this.colorSelected.emit(_color);
      }
    })
  }

  nextPosition: number = 0;
  // private getOverlayPosition(origin: any): PositionStrategy {
  //   const positionStrategy: FlexibleConnectedPositionStrategy = this.overlay
  //     .position()
  //     .flexibleConnectedTo(origin)
  //     .withPositions(this.getPositions())
  //     .withFlexibleDimensions(true)
  //     .withPush(true);

  //   return positionStrategy;
  // }
  // private getPositions(): ConnectionPositionPair[] {
  //   return [
  //     {
  //       originX: "center",
  //       originY: "bottom",
  //       overlayX: "center",
  //       overlayY: "top"
  //     },
  //     {
  //       originX: "start",
  //       originY: "bottom",
  //       overlayX: "start",
  //       overlayY: "top"
  //     },
  //     {
  //       originX: "end",
  //       originY: "bottom",
  //       overlayX: "end",
  //       overlayY: "top"
  //     }
  //   ];
  // }
  // openRotiniPanel(origin: any) {
  //   let config = new OverlayConfig({
  //     positionStrategy: this.getOverlayPosition(origin),
  //     scrollStrategy: this.overlay.scrollStrategies.close(),
  //     hasBackdrop: true,
  //     backdropClass: 'transparentBackDropPopup'
  //     // flexibleDimensions: true
  //   });

  //   let overlayRef = this.overlay.create(config);

  //   overlayRef.backdropClick().subscribe(() => {
  //     overlayRef.dispose();
  //   });

  //   overlayRef.attach(
  //     new ComponentPortal(ColorPickerPopoverComponent, this.viewContainerRef)
  //   );
  // }
}