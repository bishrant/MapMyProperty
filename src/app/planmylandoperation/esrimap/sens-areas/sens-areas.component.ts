import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CreateSensAreasGL } from '../../pmloUtils/layers';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { GreaterThanMaxArea } from 'src/app/shared/utils/GeometryEngine';
import { DecimalPipe } from '@angular/common';
import { MatExpansionPanel } from '@angular/material/expansion';
import { SensAreasService } from './sens-areas.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss']
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

  @Input() mapView: any;

  private boundaryLayer: __esri.GraphicsLayer;
  private sensAreaGL: __esri.GraphicsLayer = CreateSensAreasGL(
    'sensAreasGL',
    0.5
  );

  constructor (
    private dialogService: DialogService,
    private decimalPipe: DecimalPipe,
    private sensAreasService: SensAreasService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit (): void {
    this.sensAreasService.updateState.subscribe((st: any) => {
      this.state = st;
    });
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.boundaryLayer.graphics.on('change', (evt: any) => {
      const graphNumber: number = evt.target.length;
      if (graphNumber === 0) {
        this.state = 'noBoundary';
      }
    });
    this.mapView.map.add(this.sensAreaGL);
  }

  opened (): void {
    const opt = {
      message: ''
    };
    const maxAcres: number = 10000;

    if (this.boundaryLayer.graphics.length === 0) {
      this.state = 'noBoundary';
    } else if (this.boundaryLayer.graphics.length > 1) {
      this.sensAreaToolHeader.close();
      opt.message =
        'You can only display sensitive areas from one polygon at a time.';
      this.dialogService.open(opt);
    } else if (
      GreaterThanMaxArea(
        this.boundaryLayer.graphics.getItemAt(0).geometry,
        maxAcres,
        'acres'
      )
    ) {
      this.sensAreaToolHeader.close();
      opt.message =
        'Please make sure the boundary is less than ' +
        this.decimalPipe.transform(maxAcres) +
        ' acres';
      this.dialogService.open(opt);
    } else if (this.sensAreaGL.graphics.length === 0) {
      this.state = 'clipping';
      this.spinner.show();

      const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.getItemAt(0);

      this.sensAreasService
        .isWithinTexas(inputBoundary.geometry)
        .then((val) => {
          if (val) {
            this.sensAreasService.getSensAreas(inputBoundary).then((result) => {
              if (result.length === 0) {
                this.spinner.hide();
                this.sensAreaToolHeader.close();
                opt.message =
                  'There was an error calculating "Sensitive Areas". Please try again and, if the problem persists, contact the administrator.';
                this.dialogService.open(opt);
              } else {
                this.sensAreasService.addSensAreasToMap(
                  this.sensAreaGL,
                  result
                );
                this.state = 'clipped';
                this.spinner.hide();
              }
            });
          } else {
            this.spinner.hide();
            this.sensAreaToolHeader.close();
            opt.message =
              'Please make sure that your project area is totally within Texas.';
            this.dialogService.open(opt);
          }
        });
    } else {
      this.state = 'clipped';
    }
  }

  updateSliderValue (value: number): void {
    this.sensAreaGL.opacity = (100 - value) / 100;
  }

  updateGraphicOpacity (isChecked: boolean, origin: string) {
    this.sensAreasService.updateOpacity(this.sensAreaGL, origin, isChecked);
  }
}
