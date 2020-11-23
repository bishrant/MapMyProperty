import { Component, OnInit, Input } from '@angular/core';
import { CreateGL } from '../../pmloUtils/layers';
import { GreaterThanMaxArea, GetFeaturesLength, GetFeaturesAreaAcres } from 'src/app/shared/utils/GeometryEngine';
import { DecimalPipe } from '@angular/common';
import { SensAreasService } from './sens-areas.service';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import { ReportsService } from '../../pmloUtils/reports.service';
import { SquareMetersToAcres, FormatRoundNumber } from 'src/app/shared/utils/ConversionTools';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { EsrimapService } from '../../esrimap/esrimap.service';
import { PMLONotification } from '../../models/pmloNotification.model';
import { NotificationsService } from '../../pmloUtils/notifications.service';
import { MapviewService } from 'src/app/shared/services/mapview.service';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss']
})
export class SensAreasComponent implements OnInit {
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
  slopeLabelValue:number = 8;

  reportTitle = '';

  @Input() mapView: any;

  private boundaryLayer: __esri.GraphicsLayer;
  private sensAreaGL: __esri.GraphicsLayer = CreateGL('sensAreasGL', 1);

  private pmloNote:PMLONotification = new PMLONotification();

  constructor (
    private decimalPipe: DecimalPipe,
    private sensAreasService: SensAreasService,
    private loaderService: LoaderService,
    private printTaskService: PrintTaskService,
    private reportsService: ReportsService,
    private esrimapService:EsrimapService,
    private notificationsService:NotificationsService,
    private mapViewService:MapviewService,
    ) {}

  ngOnInit (): void {
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.mapView.map.add(this.sensAreaGL);

    this.mapViewService.clearSensAreasGraphics.subscribe(() => {
      this.sensAreaGL.removeAll();
    });

    this.esrimapService.sensAreasAccordionOpen.subscribe((opened:boolean) => {
      if (opened)
      {
        const maxAcres: number = 100000;
        this.slopeValue = 8;
        this.slopeLabelValue = this.slopeValue;

        if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length === 0) {
          this.esrimapService.sensAreasAccordionOpen.emit(false);
          this.pmloNote.body = 'A drawn boundary is needed to be able to calculate sensitive areas.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else if (this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').length > 1) {
          this.esrimapService.sensAreasAccordionOpen.emit(false);
          this.pmloNote.body = 'You can only display sensitive areas from one polygon at a time.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else if (GreaterThanMaxArea(this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry, maxAcres, 'acres')) {
          this.esrimapService.sensAreasAccordionOpen.emit(false);
          this.pmloNote.body = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(maxAcres) + ' acres.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else if (this.sensAreaGL.graphics.length === 0) {
          this.loaderService.isLoading.next(true);

          const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);

          this.sensAreasService.isWithinTexas(inputBoundary.geometry).then((isInTexas:boolean) => {
            this.sensAreasService.getSensAreas(inputBoundary, isInTexas).then((result) => {
              if (result.length === 0)
              {
                this.loaderService.isLoading.next(false);
                this.esrimapService.sensAreasAccordionOpen.emit(false);
                this.pmloNote.body = 'There was an error calculating "Sensitive Areas". Please try again and, if the problem persists, contact the administrator.';
                this.notificationsService.openNotificationsModal.emit(this.pmloNote);
              } else {
                const boundaryId: string = inputBoundary.attributes.id;
                this.sensAreasService.addSensAreasToMap(this.sensAreaGL, result, boundaryId, this.sliderValue);
                this.loaderService.isLoading.next(false);
              }
            });
          });
        }
      }
    });
  }

  updateSliderValue(value: number):void {
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
          this.pmloNote.body = 'There was an error creating the buffer. Please try again and, if the problem persists, contact the administrator.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else {
          const boundaryId: string = inputBoundary.attributes.id;
          this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue, boundaryId);
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
    this.sensAreasService.isWithinTexas(inputBoundary.geometry).then((isInTexas:boolean) => {
      this.sensAreasService.setSlope(inputBoundary, this.slopeValue, isInTexas).then(result => {
        if (result === null)
        {
          this.loaderService.isLoading.next(false);
          this.pmloNote.body = 'There was an error setting the severe slope. Please try again and, if the problem persists, contact the administrator.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else {
          this.slopeLabelValue = this.slopeValue;
          const boundaryId: string = inputBoundary.attributes.id;
          this.sensAreasService.addBuffersOrSlopeToMap(this.sensAreaGL, result.value, origin, this.sliderValue, boundaryId);
          this.loaderService.isLoading.next(false);
        }
      });
    });
  }

  clearSMZGraphics(): void {
    this.sensAreaGL.removeAll();
    this.esrimapService.sensAreasAccordionOpen.emit(false);
  }

  buildSMZReport(): void {
    this.loaderService.isLoading.next(true);
    this.printTaskService.exportWebMap(this.mapView, 'PMLOSensAreasTemplate', 'jpg', this.boundaryLayer.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry.extent.clone().expand(1.05)).then((url) => {
      if (url === 'error')
      {
        this.loaderService.isLoading.next(false);
        this.pmloNote.body = 'There was an error creating the report. Please try again and, if the problem persists, contact the administrator.';
        this.notificationsService.openNotificationsModal.emit(this.pmloNote);
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
