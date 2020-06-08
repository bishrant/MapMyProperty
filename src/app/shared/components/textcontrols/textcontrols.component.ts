import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-textcontrols',
  templateUrl: './textcontrols.component.html',
  styleUrls: ['./textcontrols.component.scss']
})
export class TextcontrolsComponent implements OnInit {
  fontFamilyOptions: any[] = ['Arial', 'Montserrat'];
  fontSize: number = 18;
  public textProps: any = {
    color: { r: 100, g: 20, b: 5, a: 1 },
    font: {
      size: this.fontSize +'px',
      family: 'Arial',
      weight: 'normal',
      decoration: 'none',
      style: 'normal',
    },
  };
  public   textStyle = {
    type: 'simple-marker',
    style: 'circle',
    size: 6,
    color: [0, 255, 255, 1],
    outline: {
      color: [50, 50, 50, 1],
      width: 1,
    },
  };
  bold: boolean = true;

  changeFontSize = () => {
    this.textProps.font.size = this.fontSize + 'px';
  }

  _textSymbol = {
    type: 'text', // autocasts as new TextSymbol()Tex
    color: 'white',
    haloColor: 'black',
    haloSize: '1px',
    text: 'test',
    xoffset: 0,
    yoffset: 0,
    font: this.textProps.font,
  };

  changeFillColor = (evt) => {

  }
  changeGraphicsStyle =() => {

  }

  constructor() { }

  ngOnInit(): void {
  }

}
