import { Component, EventEmitter, Input, Output, ViewChild, ElementRef, ViewContainerRef, TemplateRef, ContentChild } from "@angular/core";
import { ColorsPopoverService } from "../../services/ColorsPopover.service";
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
    public colorsPopoverService: ColorsPopoverService,
    private viewContainerRef: ViewContainerRef,
    private overlay: Overlay
  ) {}

  openRotiniPanel(origin: any) {
    const componentPortal = new ComponentPortal(
      ColorPickerPopoverComponent,
      this.viewContainerRef
    );
    this.colorsPopoverService
      .openRotiniPanel(origin, componentPortal, { color: this.color })
      .subscribe(_color => {
        if (_color) {
          this.colorSelected.emit(_color);
        }
      });
  }
}