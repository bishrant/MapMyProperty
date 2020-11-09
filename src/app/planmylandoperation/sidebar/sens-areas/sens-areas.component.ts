import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CreateGL } from '../../pmloUtils/layers';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { GreaterThanMaxArea, GetFeaturesLength, GetFeaturesAreaAcres } from 'src/app/shared/utils/GeometryEngine';
import { DecimalPipe } from '@angular/common';
import { SensAreasService } from './sens-areas.service';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import { ReportsService } from '../../pmloUtils/reports.service';
import { SquareMetersToAcres, FormatRoundNumber } from 'src/app/shared/utils/ConversionTools';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { EsrimapService } from '../../esrimap/esrimap.service';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss']
})
export class SensAreasComponent implements OnInit {
  @ViewChild('sensAreaToolHeader') sensAreaToolHeader: any;

  faQuestionCircle = faQuestionCircle;

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

  reportTitle = '';

  @Input() mapView: any;

  private boundaryLayer: __esri.GraphicsLayer;
  private sensAreaGL: __esri.GraphicsLayer = CreateGL('sensAreasGL', 1);

  private opt = {
    message: ''
  };

  constructor (
    private dialogService: DialogService,
    private decimalPipe: DecimalPipe,
    private sensAreasService: SensAreasService,
    private loaderService: LoaderService,
    private printTaskService: PrintTaskService,
    private reportsService: ReportsService,
    private esrimapService:EsrimapService
    ) {}

  ngOnInit (): void {
    this.sensAreasService.updateState.subscribe((st: any) => {
      this.state = st;
    });
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.boundaryLayer.graphics.on('change', (evt: any) => {
      const graphNumber: number = evt.target.filter(g => g.geometry.type === 'polygon').length;
      if (graphNumber === 0) {
        this.state = 'noBoundary';
      }
    });
    this.mapView.map.add(this.sensAreaGL);

    this.esrimapService.toggleSensAreasAccordion.subscribe((opened) => {
      if (opened)
      {
        const maxAcres: number = 10000;

        if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length === 0) {
          this.state = 'noBoundary';
        } else if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length > 1) {
          this.sensAreaToolHeader.close();
          this.opt.message = 'You can only display sensitive areas from one polygon at a time.';
          this.dialogService.open(this.opt);
        } else if (GreaterThanMaxArea(this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry, maxAcres, 'acres')) {
          this.sensAreaToolHeader.close();
          this.opt.message = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(maxAcres) + ' acres';
          this.dialogService.open(this.opt);
        } else if (this.sensAreaGL.graphics.length === 0) {
          this.state = 'clipping';
          this.loaderService.isLoading.next(true);
    
          const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
    
          this.sensAreasService.isWithinTexas(inputBoundary.geometry).then((isInTexas:boolean) => {
            if (isInTexas)
            {
              this.sensAreasService.getSensAreas(inputBoundary).then((result) => {
                if (result.length === 0)
                {
                  this.loaderService.isLoading.next(false);
                  this.sensAreaToolHeader.close();
                  this.opt.message = 'There was an error calculating "Sensitive Areas". Please try again and, if the problem persists, contact the administrator.';
                  this.dialogService.open(this.opt);
                } else {
                  this.sensAreasService.addSensAreasToMap(this.sensAreaGL, result, this.sliderValue);
                  this.state = 'clipped';
                  this.loaderService.isLoading.next(false);
                }
              });
            } else {
              this.loaderService.isLoading.next(false);
              this.sensAreaToolHeader.close();
              this.opt.message = 'Please make sure that your project area is totally within Texas.';
              this.dialogService.open(this.opt);
            }
          });
        } else {
          this.state = 'clipped';
        }
      }
    });
  }

  // opened(): void {
  //   const maxAcres: number = 10000;

  //   if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length === 0) {
  //     this.state = 'noBoundary';
  //   } else if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length > 1) {
  //     this.sensAreaToolHeader.close();
  //     this.opt.message = 'You can only display sensitive areas from one polygon at a time.';
  //     this.dialogService.open(this.opt);
  //   } else if (GreaterThanMaxArea(this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry, maxAcres, 'acres')) {
  //     this.sensAreaToolHeader.close();
  //     this.opt.message = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(maxAcres) + ' acres';
  //     this.dialogService.open(this.opt);
  //   } else if (this.sensAreaGL.graphics.length === 0) {
  //     this.state = 'clipping';
  //     this.loaderService.isLoading.next(true);

  //     const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);

  //     this.sensAreasService.isWithinTexas(inputBoundary.geometry).then((isInTexas:boolean) => {
  //       if (isInTexas)
  //       {
  //         this.sensAreasService.getSensAreas(inputBoundary).then((result) => {
  //           if (result.length === 0)
  //           {
  //             this.loaderService.isLoading.next(false);
  //             this.sensAreaToolHeader.close();
  //             this.opt.message = 'There was an error calculating "Sensitive Areas". Please try again and, if the problem persists, contact the administrator.';
  //             this.dialogService.open(this.opt);
  //           } else {
  //             this.sensAreasService.addSensAreasToMap(this.sensAreaGL, result, this.sliderValue);
  //             this.state = 'clipped';
  //             this.loaderService.isLoading.next(false);
  //           }
  //         });
  //       } else {
  //         this.loaderService.isLoading.next(false);
  //         this.sensAreaToolHeader.close();
  //         this.opt.message = 'Please make sure that your project area is totally within Texas.';
  //         this.dialogService.open(this.opt);
  //       }
  //     });
  //   } else {
  //     this.state = 'clipped';
  //   }
  // }

  updateSliderValue(value: number):void {
    // this.sensAreaGL.opacity = (100 - value) / 100;
    this.sensAreasService.updateGraphicsOpacity(this.sensAreaGL, value);
  }

  updateGraphicOpacity (isChecked: boolean, origin: string) {
    this.sensAreasService.updateOpacity(this.sensAreaGL, origin, isChecked);
  }

  bufferGraphic(origin: string):void {
    this.loaderService.isLoading.next(true);
    const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
    const inputFeet: number = origin === 'smz' ? this.smzBufferValue : this.wetlandsBufferValue;
    if (inputFeet > 0) {
      this.sensAreasService.bufferGraphic(origin, inputBoundary, inputFeet).then(result => {
        if (result === null)
        {
          this.loaderService.isLoading.next(false);
          this.opt.message = 'There was an error creating the buffer. Please try again and, if the problem persists, contact the administrator.';
          this.dialogService.open(this.opt);
        } else {
          this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue);
          this.loaderService.isLoading.next(false);
        }
      });
    } else {
      if (origin === 'smz' || origin === 'wetlandsBuffer')
      {
        this.sensAreasService.removeGraphicsByAttribute(this.sensAreaGL, origin);
        this.loaderService.isLoading.next(false);
      }
    }

  }

  setSlope(origin: string):void {
    this.loaderService.isLoading.next(true);
    const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
    this.sensAreasService.setSlope(inputBoundary, this.slopeValue).then(result => {
      if (result === null)
      {
        this.loaderService.isLoading.next(false);
        this.opt.message = 'There was an error setting the severe slope. Please try again and, if the problem persists, contact the administrator.';
        this.dialogService.open(this.opt);
      } else {
        this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue);
        this.loaderService.isLoading.next(false);
      }
    });
  }

  clearSMZGraphics(): void {
    this.sensAreaGL.removeAll();
    this.sensAreaToolHeader.close();
  }

  buildSMZReport(): void {
    this.loaderService.isLoading.next(true);
    this.printTaskService.exportWebMap(this.mapView, 'PMLOSensAreasTemplate', 'jpg', this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry.extent.clone().expand(1.05)).then((url) => {
      if (url === 'error')
      {
        this.loaderService.isLoading.next(false);
        this.opt.message = 'There was an error creating the report. Please try again and, if the problem persists, contact the administrator.';
        this.dialogService.open(this.opt);
      } else {
        let severeSlopeArea: number = 0;
        if(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'slopes').length > 0)
        {
          severeSlopeArea = SquareMetersToAcres(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'slopes').getItemAt(0).attributes['Shape_Area']);
        }
        const reportParams = {
          zzProjNamezz: this.reportTitle,
          imageUrl: url,
          zzStreamsLengthzz: FormatRoundNumber(GetFeaturesLength(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'streams')), 0) + ' feet',
          zzSmzAreazz: FormatRoundNumber(GetFeaturesAreaAcres(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'smz')), 1) + ' acres',
          zzSevereSlopezz: this.slopeValue,
          zzSevereSlopesAreazz: FormatRoundNumber(severeSlopeArea, 1) + ' acres',
          zzWetAreasAreazz: FormatRoundNumber(GetFeaturesAreaAcres(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'wetlands')), 1) + ' acres',
          zzWetAreasBufferAreazz: FormatRoundNumber(GetFeaturesAreaAcres(this.sensAreaGL.graphics.filter(item => item.attributes['origin'] === 'wetlandsBuffer')), 1) + ' acres'
        };
        this.reportsService.getSMZReports({content: JSON.stringify(reportParams)}).subscribe(
        (response:any) => {
            this.loaderService.isLoading.next(false);
            window.open(response.fileName, '_blank', 'noopener');
          }
        );
      }
    });
  }
}
