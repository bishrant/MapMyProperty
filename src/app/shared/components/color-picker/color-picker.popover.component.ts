import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { ColorsPopoverService } from '../../services/ColorsPopover.service';
import { ColorPallete } from './ColorPallete'
@Component({
  selector: 'app-color-popover',
  templateUrl: './color-picker.popover.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerPopoverComponent {
  @Input() color: any;
  @Input() opacity: number;
  @ViewChild('customColorInput') customColorInput: ElementRef;
  colorPallete = ColorPallete;

  public changeColor (color: string): void {
    this.color = color;
    this.closePopupWithColor(false);
  }

  public changeColorCustom (color: string): void {
    this.color = color;
    this.closePopupWithColor(true);
  }

  public changeColorManual (color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    if (isValid) {
      this.color = color;
      this.closePopupWithColor(false);
    }
  }

  openColorPalettee = () => {
    this.customColorInput.nativeElement.click();
  };

  changeOpacity = (transparency: any) => {
    this.opacity = 100 - transparency;
    this.closePopupWithColor(false);
  }

  closePopupWithColor = (closePopup: any) => {
    const colorInfo = { color: this.color, opacity: this.opacity, closePopup: closePopup };
    this.colorsPopoverService.close(colorInfo, closePopup);
  };

  constructor (public colorsPopoverService: ColorsPopoverService) {
  }
}
