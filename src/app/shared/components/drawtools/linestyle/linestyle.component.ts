import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LinePropsRGBA } from '../DrawTools.interface';
import { LineStyles } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-linestyle',
  templateUrl: './linestyle.component.html',
  styleUrls: ['./linestyle.component.scss']
})
export class LinestyleComponent {
  _selectedGraphics: any;
  geomType: string = '';
  lineStyles = LineStyles;
  @Input('drawingTool') drawingTool: any;
  @Output() changedGraphicsStyle = new EventEmitter();
  @Input('selectedGraphics')
  get selectedGraphics (): any {
    return this._selectedGraphics;
  }

  set selectedGraphics (value: any) {
    this._selectedGraphics = value;
    this.geomType = ''
    if (typeof value === 'undefined') return;
    if (value.length < 1) return;
    this.geomType = value[0].geometry.type

    if (this.geomType !== 'circle' && this.geomType !== 'polygon' && this.geomType !== 'polyline') return;

    const s = this.geomType === 'polyline' ? value[0].attributes.symbol : value[0].attributes.symbol.outline;
    this.lineProps.style = s.style;
    this.lineProps.color = s.color;
    this.lineProps.width = s.width;
  }

  lineProps: LinePropsRGBA = {
    style: 'solid',
    color: { r: 255, g: 255, b: 0, a: 1 },
    width: 2
  };

  lineSvgStyle = {
    'width.px': 150,
    fill: 'black'
  };

  changeLineColor = (colorInfo: any) => {
    this.lineProps.color = colorInfo;
    this.changedGraphicsStyle.emit();
  };

  changeGraphicsStyle = () => {
    this.changedGraphicsStyle.emit();
  };

  changeLineWidth = (width: any) => {
    this.lineProps.width = width;
    this.changeGraphicsStyle();
  }

  changeLineWidthComplete = (width: any) => {
    this.lineProps.width = width;
    this.changeGraphicsStyle();
  }

  constructor () {}
}
