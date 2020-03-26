import { HexToRGBA } from 'src/app/shared/utils/Colors';
import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { ColorsPopoverService } from '../../services/ColorsPopover.service';
import { ColorPickerPopoverComponent } from './color-picker.popover.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent {
  @Input() heading: string;
  @Input() color: string;
  @Input() opacity: number;
  @Output() colorSelected: EventEmitter<string> = new EventEmitter<string>();

  public show = true;
  constructor(public colorsPopoverService: ColorsPopoverService, private viewContainerRef: ViewContainerRef) {}

  openColorSelector(origin: any) {
    const componentPortal = new ComponentPortal(ColorPickerPopoverComponent, this.viewContainerRef);
    this.colorsPopoverService
      .open(origin, componentPortal, { color: this.color, opacity: this.opacity })
      .subscribe(colorInfo => {
        if (colorInfo) {
          this.color = colorInfo.color;
          this.opacity = colorInfo.opacity;
          if (colorInfo.closePopup) {
            this.colorSelected.emit(colorInfo);
          }
        }
      });
  }

  getCircleColor = (color) => {
    
    if (color) {
      const h = HexToRGBA(color, this.opacity);
      return `rgba(${h.r}, ${h.g}, ${h.b}, ${h.a})`;
    }
    // } else {
    //   return 'rgb(255, 255, 255)';
    // }
  }
}
