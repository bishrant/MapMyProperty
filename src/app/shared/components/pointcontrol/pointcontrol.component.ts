import { Component, Input } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';
import { faTree, faFlag, faParking, faExclamationTriangle, faTint, faThumbtack, faToriiGate, faHome } from '@fortawesome/free-solid-svg-icons';
import { getPointSvg } from './pointSymbols';

@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss']
})
export class PointcontrolComponent {
  _selectedGraphics: any;
  @Input('selectedGraphics')
  get selectedGraphics ():any {
    return this._selectedGraphics
  }

  set selectedGraphics (value: any) {
    this._selectedGraphics = value;
    if (typeof value === 'undefined') return;
    if (value.length < 1) return;
    if (value[0].geometry.type !== 'point') return;

    const s = value[0].attributes.symbol;
    this.markerProps.type = s.type;
    this.markerProps.style = s.style;
    this.markerProps.name = s.name;
    this.markerSize = parseInt(s.size.split('px')[0]);
    this.pointSymbol = this.markerStyles.filter((m : any) => m.name === s.name)[0];
  }

  constructor () {}

  markerStyles: any = [
    { name: 'circle', type: 'simple-marker', asp: 1 },
    { name: 'cross', type: 'simple-marker', asp: 1 },
    { name: 'triangle', type: 'simple-marker', asp: 1 },
    { name: 'x', type: 'simple-marker', asp: 1 },
    { name: 'diamond', type: 'simple-marker', asp: 1 },
    { name: 'square', type: 'simple-marker', asp: 1 },
    { name: 'tree', type: 'picture-marker', asp: 0.75 },
    { name: 'flag', type: 'picture-marker', asp: 1 },
    { name: 'exclamation-triangle', type: 'picture-marker', asp: 1.125 },
    { name: 'parking', type: 'picture-marker', asp: 0.875 },
    { name: 'tint', type: 'picture-marker', asp: 0.687 },
    { name: 'thumbtack', type: 'picture-marker', asp: 0.75 },
    { name: 'torii-gate', type: 'picture-marker', asp: 1 },
    { name: 'home', type: 'picture-marker', asp: 1.125 }
  ];

  pictureMarkers: any = {
    flag: faFlag,
    tree: faTree,
    'exclamation-triangle': faExclamationTriangle,
    parking: faParking,
    tint: faTint,
    thumbtack: faThumbtack,
    'torii-gate': faToriiGate,
    home: faHome
  };

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
    name: 'circle',
    color: { r: 255, g: 255, b: 0, a: 1 }
  };

  fillSvgStyle = {
    'width.px': 30,
    fill: RGBObjectToHexA(this.markerProps.color)
  };

  changeMarkerSize = () => {
    const size = this.markerSize + 'px';
    this.markerProps.size = size;
    this.markerProps.width = size;
    this.markerProps.height = this.markerSize / this.pointSymbol.asp + 'px';
    this.updateMarkerShape();
  };

  updateMarkerShape = () => {
    if (this.pointSymbol.type === 'picture-marker') {
      this.markerProps.url = getPointSvg(this.pointSymbol.name, this.markerProps.color);
      this.markerProps.contentType = 'image/svg';
    }
  };

  changePointShapeEvt = (evt: any) => {
    this.pointSymbol = evt.value;
    this.markerProps.type = evt.value.type;
    if (evt.value.type === 'picture-marker') {
      this.markerProps.height = this.markerSize / this.pointSymbol.asp + 'px';
      this.markerProps.name = evt.value.name;
      this.updateMarkerShape();
    } else {
      this.markerProps.url = '';
      this.markerProps.style = evt.value.name;
      this.markerProps.name = evt.value.name;
    }
  };

  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.updateMarkerShape();
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  };
}
