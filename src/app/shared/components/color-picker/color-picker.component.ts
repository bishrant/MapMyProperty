import { HexToRGB, RGBObjectToHex } from 'src/app/shared/utils/Colors';
import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import { ColorsPopoverService } from '../../services/ColorsPopover.service';
import { ColorPickerPopoverComponent } from './color-picker.popover.component';
import { ComponentPortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Input() heading: string;
  @Input() color: any;
  @Input() opacity: number;
  @Output() colorSelected: EventEmitter<any> = new EventEmitter<any>();

  constructor(public colorsPopoverService: ColorsPopoverService, private viewContainerRef: ViewContainerRef) {}

  unsubscribeFromObservable = (colorObervable$) => {
    colorObervable$.unsubscribe();
  }
  openColorSelector(origin: any) {
    const componentPortal = new ComponentPortal(ColorPickerPopoverComponent, this.viewContainerRef);
    const colorsPopoverService$ = this.colorsPopoverService
      .open(origin, componentPortal, { color: RGBObjectToHex(this.color), opacity: this.opacity });

     const colorObervable$ = colorsPopoverService$.subscribe((colorInfo) => {
       if (colorInfo) {
         //convert hex to rgb
         this.color = colorInfo.color;
         this.opacity = colorInfo.opacity;
         if (colorInfo.closePopup) {
           this.colorSelected.emit(this.ConvertColorToRGBA(this.color, this.opacity));
         }
         // Needed to fix #52 
         this.unsubscribeFromObservable(colorObervable$);
       }
     });
  }

  GetCircleColor = (_color) => {
    if (_color !== null) {
      let color = _color;
      if (typeof color.r === undefined) {
        color = HexToRGB(_color);
      }
      return `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`;
    }
  };

  ConvertColorToRGBA = (_color, opacity) => {
    if (_color !== null) {
      let color = _color;
      if (typeof color.r === 'undefined') {
        color = HexToRGB(_color);
      }
      color.a = opacity / 100;
      return { r: color.r, g: color.g, b: color.b, a: color.a };
    }
  };
}
