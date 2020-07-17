import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-textcontrols',
  templateUrl: './textcontrols.component.html',
  styleUrls: ['./textcontrols.component.scss']
})
export class TextcontrolsComponent implements OnInit {
  private _selectedTextGraphics: any[];

  @Input() set selectedTextGraphics (value: any[]) {
    this._selectedTextGraphics = value;
    if (value.length > 0) {
      const _symbol = value[0].graphic.attributes.symbol;
      this.fontSize = _symbol.font.size.split('px')[0];
      this.textProps.font.size = this.fontSize + 'px';
      this.textProps.font.weight = _symbol.font.weight;
      this.textProps.font.decoration = _symbol.font.decoration;
      this.textProps.font.style = _symbol.font.style;
      this.textProps.color = _symbol.color;
    }
  }

  get selectedTextGraphics (): any[] {
    return this._selectedTextGraphics;
  }

  fontFamilyOptions: any[] = ['Arial', 'Montserrat'];
  fontSize: number = 18;
  public textProps: any = {
    color: { r: 100, g: 20, b: 5, a: 1 },
    font: {
      size: this.fontSize + 'px',
      family: 'Arial',
      weight: 'normal',
      decoration: 'none',
      style: 'normal'
    }
  };

  public textStyle = {
    type: 'simple-marker',
    style: 'circle',
    size: 6,
    color: [0, 255, 255, 1],
    outline: {
      color: [50, 50, 50, 1],
      width: 1
    }
  };

  bold: boolean = true;

  changeFontSize = () => {
    if (this.selectedTextGraphics.length > 0) {
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('fontSize', this.fontSize + 'px');
      _input.style.fontSize = this.fontSize + 'px';
    }
    this.textProps.font.size = this.fontSize + 'px';
  };

  _textSymbol = {
    type: 'text', // autocasts as new TextSymbol()Tex
    color: 'white',
    haloColor: 'black',
    haloSize: '1px',
    text: 'test',
    xoffset: 0,
    yoffset: 0,
    font: this.textProps.font
  };

  changeFontFamily = () => {
    if (this.selectedTextGraphics.length > 0) {
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('fontFamily', this.textProps.font.family);
      _input.style.fontFamily = this.textProps.font.family;
    }
  };

  changeTextColor = (colorInfo: any) => {
    this.textProps.color = colorInfo;
    if (this.selectedTextGraphics.length > 0) {
      const color = this.textProps.color;
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('fontColor', JSON.stringify(this.textProps.color));
      _input.style.color = `rgba(${color.r},${color.g},${color.b},${color.a})`;
    }
  };

  toggleFontWeight = () => {
    this.textProps.font.weight = this.textProps.font.weight === 'bold' ? 'normal' : 'bold';
    if (this.selectedTextGraphics.length > 0) {
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('fontWeight', this.textProps.font.weight);
      _input.style.fontWeight = this.textProps.font.weight;
    }
  };

  toggleFontDecoration = () => {
    this.textProps.font.decoration = this.textProps.font.decoration === 'underline' ? 'none' : 'underline';
    if (this.selectedTextGraphics.length > 0) {
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('textDecoration', this.textProps.font.decoration);
      _input.style.textDecoration = this.textProps.font.decoration;
    }
  };

  toggleFontStyle = () => {
    this.textProps.font.style = this.textProps.font.style === 'italic' ? 'none' : 'italic';
    if (this.selectedTextGraphics.length > 0) {
      const _input = document.getElementById(this.selectedTextGraphics[0].graphic.attributes.id) as any;
      _input.setAttribute('textStyle', this.textProps.font.style);
      _input.style.fontStyle = this.textProps.font.style;
    }
  };

  constructor () {}

  ngOnInit (): void {}
}
