import { Component, OnInit, Input } from '@angular/core';
import { CreateSensAreasGL } from '../../pmloUtils/layers';
import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss']
})
export class SensAreasComponent implements OnInit {

  state: string = "noBoundary";
  streamCollapsed:  boolean = true;
  slopeCollapsed: boolean = true;
  wetCollapsed: boolean = true;

  @Input() mapView:any;

  private boundaryLayer: GraphicsLayer;
  private sensAreaGL: GraphicsLayer = CreateSensAreasGL();

  constructor() { }

  ngOnInit(): void {
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.boundaryLayer.graphics.on('change', function (evt: any){
      const graphNumber:number = evt.target.length;
      debugger
      if (graphNumber === 0)
      {
        this.state = "noBoundary";
      }
    });
    this.mapView.map.add(this.sensAreaGL);
  }

  opened(): void {
    const opt = {
      title: "test",
      message: "message",
      cancelText: "cancel",
      confirmText: "confirm"
    };

    if (this.boundaryLayer.graphics.length === 0)
    {
      this.state = "noBoundary";
    } else if (this.sensAreaGL.graphics.length === 0) {
      this.state = 'clipping';
    } else {
      this.state = 'clipped';
    }
  }
}
