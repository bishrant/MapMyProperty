import { Component, OnInit, Input } from '@angular/core';
import { CreateSensAreasGL } from '../../pmloUtils/layers';
import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { GreaterThanMaxArea } from 'src/app/shared/utils/GeometryEngine';
import { DecimalPipe } from '@angular/common';

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

  constructor(
    private dialogService: DialogService,
    private decimalPipe: DecimalPipe
  ) { }

  ngOnInit(): void {
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.boundaryLayer.graphics.on('change', function (evt: any){
      const graphNumber:number = evt.target.length;
      if (graphNumber === 0)
      {
        this.state = "noBoundary";
      }
    });
    this.mapView.map.add(this.sensAreaGL);
  }

  opened(): void {
    const opt = {
      message: ""
    };
    const maxAcres:number = 10000;

    debugger

    if (this.boundaryLayer.graphics.length === 0) {
      this.state = 'noBoundary';
    } else if (this.boundaryLayer.graphics.length > 1) {
      opt.message = 'You can only display sensitive areas from one polygon at a time.';
      this.dialogService.open(opt);
    } else if (GreaterThanMaxArea(this.boundaryLayer.graphics.items[0].geometry, maxAcres, "acres")) {
      opt.message = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(maxAcres) + ' acres';
      this.dialogService.open(opt);
    } else if (this.sensAreaGL.graphics.length === 0) {
      this.state = 'clipping';
    } else {
      this.state = 'clipped';
    }
  }
}
