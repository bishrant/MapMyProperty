import { Component, Input } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';
import { faTree, faMapPin, faFlag, faParking, faChurch, faUtensils, faFire } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss'],
})
export class PointcontrolComponent {
  constructor() {}
  markerStyles = [
    { name: 'circle', type: 'simple-marker' },
    { name: 'cross', type: 'simple-marker' },
    { name: 'triangle', type: 'simple-marker' },
    { name: 'x', type: 'simple-marker' },
    { name: 'diamond', type: 'simple-marker' },
    { name: 'square', type: 'simple-marker' },
    { name: faTree, type: 'picture-marker' },
    { name: faMapPin, type: 'picture-marker' },
    { name: faFlag, type: 'picture-marker' },
    { name: faParking, type: 'picture-marker' },
    { name: faChurch, type: 'picture-marker' },
    { name: faUtensils, type: 'picture-marker' },
    { name: faFire, type: 'picture-marker' }
  ];
  markerSize: number = 12;
  pointSymbol = this.markerStyles[0];
  public markerProps: any = {
    type: this.pointSymbol.type,
    size: this.markerSize + 'px',
    url: '',
    width: '64px',
    height: '64px',
    style: 'circle',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };
  fillSvgStyle = {
    'width.px': 30,
    fill: RGBObjectToHexA(this.markerProps.color),
  };

  changeMarkerSize = () => {
    this.markerProps.size = this.markerSize + 'px';
  };

  changePointShape = (evt: any) => {
    this.pointSymbol = evt.value;
    this.markerProps.type = evt.value.type;
    this.markerProps.url = evt.value.type === 'picture-marker' ?
      'https://static.arcgis.com/images/Symbols/Shapes/BlackStarLargeB.png' : '';
    console.log(this.markerProps);
  };
  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  };
}
