import { Component } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';
import { faTree, faFlag, faParking,  faExclamationTriangle, faTint, faThumbtack, faToriiGate, faHome } from '@fortawesome/free-solid-svg-icons';
import { getPointSvg } from './pointSymbols';
@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss'],
})
export class PointcontrolComponent {
  constructor() { }

  markerStyles = [
    { name: 'circle', type: 'simple-marker', asp: 1 },
    { name: 'cross', type: 'simple-marker', asp: 1 },
    { name: 'triangle', type: 'simple-marker', asp: 1 },
    { name: 'x', type: 'simple-marker', asp: 1 },
    { name: 'diamond', type: 'simple-marker', asp: 1 },
    { name: 'square', type: 'simple-marker', asp: 1 },
    { name: faTree, type: 'picture-marker', asp: 0.75 },
    { name: faFlag, type: 'picture-marker', asp: 1 },
    { name: faExclamationTriangle, type: 'picture-marker', asp: 1.125 },
    { name: faParking, type: 'picture-marker', asp: 0.875 },
    { name: faTint, type: 'picture-marker', asp: 0.687 },
    { name: faThumbtack, type: 'picture-marker', asp: 0.75 },
    { name: faToriiGate, type: 'picture-marker', asp: 1 },
    { name: faHome, type: 'picture-marker', asp: 1.125 },
  ];

  iconName: any;
  markerSize: number = 12;
  pointSymbol: any = this.markerStyles[0];

  public markerProps: any = {
    type: this.pointSymbol.type,
    size: this.markerSize + 'px',
    url: '',
    width: this.markerSize + 'px',
    height: this.markerSize / this.pointSymbol.asp + 'px',
    style: 'circle',
    contentType: 'image/svg',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };

  fillSvgStyle = {
    'width.px': 30,
    fill: RGBObjectToHexA(this.markerProps.color),
  };

  changeMarkerSize = () => {
    const size = this.markerSize + 'px';
    this.markerProps.size = size;
    this.markerProps.width = size;
    this.markerProps.height = this.markerSize/this.pointSymbol.asp + 'px';
    console.log(this.markerProps);
    this.updateMarkerShape();
  };

  updateMarkerShape = () => {
    if (this.pointSymbol.type === 'picture-marker') {
      console.log(this.pointSymbol);
      this.markerProps.url = getPointSvg(this.pointSymbol.name.iconName, this.markerProps.color);;
      this.markerProps.contentType = 'image/svg';
    }
  }

  changePointShapeEvt = (evt: any) => {
    this.pointSymbol = evt.value;
    this.markerProps.type = evt.value.type;
    if (evt.value.type === 'picture-marker') {
      this.markerProps.height = this.markerSize / this.pointSymbol.asp + 'px';
      this.updateMarkerShape();
      console.log(this.markerProps);
    } else {
      this.markerProps.url = '';
    }
  };

  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  };

}
