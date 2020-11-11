import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { GreaterThanMaxArea } from 'src/app/shared/utils/GeometryEngine';
import { EsrimapService } from '../../esrimap/esrimap.service';
import { PMLONotification } from '../../models/pmloNotification.model';
import { OperationLegendService } from '../../operation-legend/operation-legend.service';
import { NotificationsService } from '../../pmloUtils/notifications.service';
import { HarvestOperationsService } from '../harvest-operations/harvest-operations.service';
import { SoilsService } from '../soils/soils.service';

@Component({
  selector: 'pmlo-regeneration-operations',
  templateUrl: './regeneration-operations.component.html',
  styleUrls: ['./regeneration-operations.component.scss']
})
export class RegenerationOperationsComponent implements OnInit {

  @Input() mapView: __esri.MapView;

  faQuestionCircle = faQuestionCircle;
  hasBoundary:boolean = false;
  sliderValue: number = 0;
  selectedRadio: string = 'SeedMortal';

  roReportTitle:string = '';

  private pmloSoilsGL: __esri.GraphicsLayer;
  private pmloSoilLabelsGL: __esri.GraphicsLayer;
  private userGL: __esri.GraphicsLayer;

  private pmloNote:PMLONotification = new PMLONotification();

  constructor(
    private soilsService:SoilsService,
    private loaderService:LoaderService,
    private operationLegendService:OperationLegendService,
    private harvestOperationsService:HarvestOperationsService,
    private esrimapService:EsrimapService,
    private decimalPipe:DecimalPipe,
    private notificationsService:NotificationsService
  ) { }

  ngOnInit(): void {
    this.pmloSoilsGL = this.mapView.map.findLayerById('pmloSoilsGL') as __esri.GraphicsLayer;
    this.pmloSoilLabelsGL = this.mapView.map.findLayerById('pmloSoilLabelsGL') as __esri.GraphicsLayer;
    this.userGL = this.mapView.map.findLayerById('userGraphicsLayer') as __esri.GraphicsLayer;

    this.esrimapService.regOpAccordionOpen.subscribe((opened) => {
      if (opened)
      {
        if (this.pmloSoilsGL.graphics.length > 0)
        {
          this.soilsService.showTableModal.emit(false);
          this.pmloSoilLabelsGL.visible = false;
          this.operationLegendService.setOperationLegendSymbols(this.selectedRadio, this.pmloSoilsGL, this.sliderValue);
          this.operationLegendService.setOperationLegend(this.selectedRadio, false);
          this.hasBoundary = true;
        } else if (this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').length === 0) {
          this.esrimapService.regOpAccordionOpen.emit(false);
          this.pmloNote.body = 'A drawn boundary is needed to get regeneration operations.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
          this.hasBoundary = false;
        } else if (this.userGL.graphics.filter(g => g.geometry.type === 'polygon').length > 1) {
          this.esrimapService.regOpAccordionOpen.emit(false);
          this.pmloNote.body = 'You can only get regeneration operations information from one polygon at a time.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else if (this.userGL.graphics.filter(g => g.geometry.type === 'polygon').length > 0) {
          if (GreaterThanMaxArea(this.userGL.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0).geometry, 100000, 'acres'))
          {
            this.esrimapService.regOpAccordionOpen.emit(false);
            this.pmloNote.body = 'Please make sure the boundary is less than ' + this.decimalPipe.transform(100000) + ' acres';
            this.notificationsService.openNotificationsModal.emit(this.pmloNote);
          } else {
            this.loaderService.isLoading.next(true);
            this.hasBoundary = true;
            const inputBoundary: __esri.Graphic = this.userGL.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
            this.soilsService.getSoils(inputBoundary).then((result:__esri.FeatureSet[]) => {
              if (result.length === 0)
              {
                this.loaderService.isLoading.next(false);
                this.esrimapService.regOpAccordionOpen.emit(false);
                this.pmloNote.body = 'There was an error while getting harvest operations information. Please try again and, if the problem persists, contact the administrator.';
                this.notificationsService.openNotificationsModal.emit(this.pmloNote);
              } else {
                const boundaryId:string = inputBoundary.attributes.id;
                this.harvestOperationsService.addSoilsToMap(this.pmloSoilsGL, result[0], boundaryId, this.sliderValue);
                this.soilsService.addSoilLabelsToMap(this.pmloSoilLabelsGL, result[1], boundaryId, 100, false);
                this.soilsService.shareMultiSoils.emit((result[0] as any).value.features);
                this.loaderService.isLoading.next(false);
              }
            });
          }
        }
      }
    });

    // Sync with soils slider
    this.soilsService.updateSliderValue.subscribe((res:any) => {
      this.sliderValue = res.sliderVal;
      if (!res.isFromSoils)
      {
        this.operationLegendService.setOperationLegendSymbols(res.selectedRadioVal, this.pmloSoilsGL, res.sliderVal);
        this.pmloSoilLabelsGL.visible = false;
      }
    });

    this.operationLegendService.SetActiveRegOperationLegenRadio.subscribe((radioBtnValue:string) => {
      this.selectedRadio = radioBtnValue;
    });
  }

  updateSliderValue(value: number):void {
    this.soilsService.updateSliderValue.emit({sliderVal: value, isFromSoils:false, selectedRadioVal: this.selectedRadio});
  }

  radioChanged(value: string): void {
    this.operationLegendService.setOperationLegendSymbols(value, this.pmloSoilsGL, this.sliderValue);
    this.operationLegendService.setOperationLegend(value, false);
  }

  clearSoilGLayers():void {
    this.soilsService.clearSoilGLayers(this.pmloSoilsGL, this.pmloSoilLabelsGL);
  }

  buildOperationsReport():void {
    this.loaderService.isLoading.next(true);
    const boundary:__esri.Graphic= this.userGL.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
    this.harvestOperationsService.createOperationsReport(this.selectedRadio, this.mapView, this.pmloSoilsGL, boundary.geometry.extent.clone().expand(1.05), this.roReportTitle).then((reportUrl:string) => {
      this.loaderService.isLoading.next(false);
      window.open(reportUrl, '_blank', 'noopener');
    });
  }
}
