import { Component, Input } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';
import { faTree, faMapPin, faFlag, faParking, faChurch, faUtensils, faFire } from '@fortawesome/free-solid-svg-icons';
import {getPointSvg} from './pointSymbols';
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
    width: this.markerSize+'px',
    height: this.markerSize+'px',
    style: 'circle',
    contentType: 'image/svg',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };
  fillSvgStyle = {
    'width.px': 30,
    fill: RGBObjectToHexA(this.markerProps.color),
  };

  sv = `<svg role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M349.565 98.783C295.978 98.783 251.721 64 184.348 64c-24.955 0-47.309 4.384-68.045 12.013a55.947 55.947 0 0 0 3.586-23.562C118.117 24.015 94.806 1.206 66.338.048 34.345-1.254 8 24.296 8 56c0 19.026 9.497 35.825 24 45.945V488c0 13.255 10.745 24 24 24h16c13.255 0 24-10.745 24-24v-94.4c28.311-12.064 63.582-22.122 114.435-22.122 53.588 0 97.844 34.783 165.217 34.783 48.169 0 86.667-16.294 122.505-40.858C506.84 359.452 512 349.571 512 339.045v-243.1c0-23.393-24.269-38.87-45.485-29.016-34.338 15.948-76.454 31.854-116.95 31.854z"></path></svg>`;
  base64 = window.btoa(this.sv);
  
  changeMarkerSize = () => {
    const size = this.markerSize + 'px';
    this.markerProps.size = size;
    this.markerProps.width = size;
    this.markerProps.height = size;
    console.log(this.markerProps);
  };

  changePointShape = (evt: any) => {
    console.log(evt);
    this.pointSymbol = evt.value;
    this.markerProps.type = evt.value.type;
    if (evt.value.type === 'picture-marker') {
      const iconName = evt.value.name.iconName;
      const bs = getPointSvg(iconName, 'red');
      console.log(bs);
      this.markerProps.url = bs;
      this.markerProps.contentType = 'image/svg';
    } else {
      this.markerProps.url = '';
    }
    console.log(this.markerProps);
  };
  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  };
}
