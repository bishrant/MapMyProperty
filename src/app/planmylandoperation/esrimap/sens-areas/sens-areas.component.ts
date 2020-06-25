import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CreateSensAreasGL } from '../../pmloUtils/layers';
import GraphicsLayer from 'arcgis-js-api/layers/GraphicsLayer';
import Graphic from 'arcgis-js-api/geometry';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { GreaterThanMaxArea } from 'src/app/shared/utils/GeometryEngine';
import { DecimalPipe } from '@angular/common';
import { MatExpansionPanel } from '@angular/material/expansion';
import { SensAreasService } from './sens-areas.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss'],
})
export class SensAreasComponent implements OnInit {
  @ViewChild('sensAreaToolHeader') sensAreaToolHeader: MatExpansionPanel;

  state: string = 'noBoundary';
  streamCollapsed: boolean = true;
  slopeCollapsed: boolean = true;
  wetCollapsed: boolean = true;

  sliderValue: number = 50;
  streamsChkboxValue: boolean = true;
  smzChkboxValue: boolean = true;
  slopesChkboxValue: boolean = true;
  wetAreasChkboxValue: boolean = true;
  smzBufferValue: number = 50;
  wetlandsBufferValue:number = 0;
  slopeValue:number = 8;

  @Input() mapView: any;

  private boundaryLayer: GraphicsLayer;
  private sensAreaGL: GraphicsLayer = CreateSensAreasGL('sensAreasGL', 1);

  private opt = {
    message: '',
  };

  constructor(
    private dialogService: DialogService, 
    private decimalPipe: DecimalPipe,
    private sensAreasService: SensAreasService,
    private spinner: NgxSpinnerService) {}

  ngOnInit(): void {
    this.sensAreasService.updateState.subscribe(st => {
      this.state = st;
    });
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.boundaryLayer.graphics.on('change', function (evt: any) {
      const graphNumber: number = evt.target.length;
      if (graphNumber === 0) {
        this.state = 'noBoundary';
      }
    });
    this.mapView.map.add(this.sensAreaGL);
  }

  opened(): void {
    const maxAcres: number = 10000;

    if (this.boundaryLayer.graphics.length === 0) {
      this.state = 'noBoundary';
    } else if (this.boundaryLayer.graphics.length > 1) {
      this.sensAreaToolHeader.close();
      this.opt.message = 'You can only display sensitive areas from one polygon at a time.';
      this.dialogService.open(this.opt);
    } else if (GreaterThanMaxArea(this.boundaryLayer.graphics.getItemAt(0).geometry, maxAcres, 'acres')) {
      this.sensAreaToolHeader.close();
      this.opt.message = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(maxAcres) + ' acres';
      this.dialogService.open(this.opt);
    } else if (this.sensAreaGL.graphics.length === 0) {
      this.state = 'clipping';
      this.spinner.show();

      const inputBoundary: Graphic = this.boundaryLayer.graphics.getItemAt(0);

      this.sensAreasService.isWithinTexas(inputBoundary.geometry).then((val) => {
        if (val)
        {
          this.sensAreasService.getSensAreas(inputBoundary).then((result) => {
            if (result.length === 0)
            {
              this.spinner.hide();
              this.sensAreaToolHeader.close();
              this.opt.message = 'There was an error calculating "Sensitive Areas". Please try again and, if the problem persists, contact the administrator.';
              this.dialogService.open(this.opt);
            } else {
              this.sensAreasService.addSensAreasToMap(this.sensAreaGL, result, this.sliderValue);
              this.state = "clipped";
              this.spinner.hide();
            }
          });
        } else {
          this.spinner.hide();
          this.sensAreaToolHeader.close();
          this.opt.message = 'Please make sure that your project area is totally within Texas.';
          this.dialogService.open(this.opt);
        }
      });
    } else {
      this.state = 'clipped';
    }
  }

  updateSliderValue(value: number):void {
    // this.sensAreaGL.opacity = (100 - value) / 100;
    this.sensAreasService.updateGraphicsOpacity(this.sensAreaGL, value);
  }

  updateGraphicOpacity(isChecked: boolean, origin: string) {
    this.sensAreasService.updateOpacity(this.sensAreaGL, origin, isChecked);
  }

  bufferGraphic(origin: string):void {
    this.spinner.show();
    const inputBoundary: Graphic = this.boundaryLayer.graphics.getItemAt(0);
    const inputFeet: number = origin === 'smz' ? this.smzBufferValue : this.wetlandsBufferValue;
    this.sensAreasService.bufferGraphic(origin, inputBoundary, inputFeet).then(result => {
      if (result === null)
      {
        this.spinner.hide();
        this.opt.message = 'There was an error creating the buffer. Please try again and, if the problem persists, contact the administrator.';
        this.dialogService.open(this.opt);
      } else {
        this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue);
        this.spinner.hide();
      }
    });
  }

  setSlope(origin: string):void {
    this.spinner.show();
    const inputBoundary: Graphic = this.boundaryLayer.graphics.getItemAt(0);
    this.sensAreasService.setSlope(inputBoundary, this.slopeValue).then(result => {
      if (result === null)
      {
        this.spinner.hide();
        this.opt.message = 'There was an error setting the severe slope. Please try again and, if the problem persists, contact the administrator.';
        this.dialogService.open(this.opt);
      } else {
        this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue);
        this.spinner.hide();
      }
    });
  }

  clearSMZGraphics(): void {
    this.sensAreaGL.removeAll();
    this.sensAreaToolHeader.close();
  }
}
