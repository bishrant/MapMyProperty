import { Component, Input, ViewChild, ElementRef } from "@angular/core";

import { MenuContextualService } from "../../services/Popover.service";

@Component({
  selector: "app-color-popover",
  templateUrl: "./color-picker.popover.component.html",
  styleUrls: ["./color-picker.component.scss"]
  // template: `
  //   <div>
  //     Hello {{ name }}
  //     <button (click)="obj.count = obj.count + 1">click</button>
  //     <button (click)="popupService.close(10)">close</button>
  //   </div>
  // `,
})
export class ColorPickerPopoverComponent {
  @Input() color: any;
  @ViewChild("customColorInput") customColorInput: ElementRef;
  public defaultColors: string[] = [
    "#c1800b",
    "#ffffff",
    "#000105",
    "#3e6158",
    "#3f7a89",
    "#96c582",
    "#b7d5c4",
    "#bcd6e7",
    "#7c90c1",
    "#9d8594",
    "#dad0d8",
    "#4b4fce",
    "#4e0a77",
    "#a367b5",
    "#ee3e6d",
    "#d63d62",
    "#c6a670",
    "#f46600",
    "#cf0500",
    "#efabbd",
    "#8e0622",
    "#f0b89a",
    "#f0ca68",
    "#62382f",
    "#c97545"
  ];

  /**
   * Change color from default colors
   * @param {string} color
   */
  public changeColor(color: string): void {
    this.color = color;
    this.closePopupWithColor(color);
  }

  public changeColorCustom(color: string): void {
    console.log(color);
    this.color = color;
    this.popupService.close(color, false);

  }

  /**
   * Change color from input
   * @param {string} color
   */
  public changeColorManual(color: string): void {
    const isValid = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);

    if (isValid) {
      this.color = color;
      //   this.colorSelected.emit(this.color);
    }
  }
  openColorPalettee = () => {
    this.customColorInput.nativeElement.click();
  };

  closePopupWithColor = (color: any) => {
    console.log(color);
    this.popupService.close(color);
  };
  constructor(public popupService: MenuContextualService) {}
}
