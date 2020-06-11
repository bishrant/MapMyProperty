import { Component, Input } from '@angular/core';
import { RGBObjectToHexA } from '../../utils/Colors';

@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss'],
})
export class PointcontrolComponent {
  constructor() {}
  markerStyles = ['circle', 'cross']
  markerSize: number = 8;
  public markerProps: any = {
    type: 'simple-marker',
    size: this.markerSize + 'px',
    style: 'square',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };
  fillSvgStyle = {
    'width.px': 50,
    fill: RGBObjectToHexA(this.markerProps.color),
  };

  changeMarkerSize = () => {
    this.markerProps.size = this.markerSize + 'px';
  }

  changePointShape = (evt) => {
    console.log(evt);
  }
  changePointColor = (colorInfo: any) => {
    this.markerProps.color = colorInfo;
    this.fillSvgStyle.fill = RGBObjectToHexA(this.markerProps.color);
  }
}
