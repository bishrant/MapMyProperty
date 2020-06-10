import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pointcontrol',
  templateUrl: './pointcontrol.component.html',
  styleUrls: ['./pointcontrol.component.scss'],
})
export class PointcontrolComponent {
  constructor() {}

  markerSize: number = 8;
  public markerProps: any = {
    type: 'simple-marker',
    size: this.markerSize + 'px',
    style: 'square',
    color: { r: 100, g: 20, b: 5, a: 1 },
  };

  changeMarkerSize = () => {
    this.markerProps.size = this.markerSize + 'px';
  }
}
