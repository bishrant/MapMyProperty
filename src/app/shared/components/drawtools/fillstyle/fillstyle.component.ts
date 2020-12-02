import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RGBObjectToHexA } from '../../../utils/Colors';
import { FillPropsRGBA } from '../DrawTools.interface';
import { FillStyles } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-fillstyle',
  templateUrl: './fillstyle.component.html',
  styleUrls: ['./fillstyle.component.scss']
})
export class FillstyleComponent {
  _selectedGraphics: any;
  fillStyles = FillStyles;
  geomType: string = '';
  @Input('drawingTool') drawingTool: any;
  @Output() changedGraphicsStyle = new EventEmitter();
  @Input('selectedGraphics')
  get selectedGraphics (): any {
    return this._selectedGraphics;
  }

  set selectedGraphics (value: any) {
    this._selectedGraphics = value;
    if (typeof value === 'undefined') return;
    if (value.length < 1) return;
    this.geomType = value[0].geometry.type;
    if (this.geomType !== 'circle' && this.geomType !== 'polygon') return;

    const s = value[0].attributes.symbol;
    this.fillProps.style = s.style;
    this.fillProps.color = s.color;
    this.setFillSvgStyle();
  }

  public fillProps: FillPropsRGBA = {
    color: { r: 255, g: 255, b: 0, a: 0.5 },
    style: 'none'
  };

  fillSvgStyle = {
    'width.px': 150,
    fill: RGBObjectToHexA(this.fillProps.color)
  };

  setFillSvgStyle = () => {
    this.fillSvgStyle.fill = RGBObjectToHexA(this.fillProps.color);
  };

  changeFillColor = (colorInfo: any) => {
    this.fillProps.color = colorInfo;
    this.setFillSvgStyle();
    this.changedGraphicsStyle.emit();
  };

  changeGraphicsStyle = () => {
    this.changedGraphicsStyle.emit();
  };

  constructor () {}
}
