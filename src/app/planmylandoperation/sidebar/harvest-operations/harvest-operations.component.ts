import { DecimalPipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { GreaterThanMaxArea } from 'src/app/shared/utils/GeometryEngine';
import { EsrimapService } from '../../esrimap/esrimap.service';
import { PMLONotification } from '../../models/pmloNotification.model';
import { OperationLegendService } from '../../operation-legend/operation-legend.service';
import { NotificationsService } from '../../pmloUtils/notifications.service';
import { SoilsService } from '../soils/soils.service';
import { HarvestOperationsService } from './harvest-operations.service';

@Component({
  selector: 'pmlo-harvest-operations',
  templateUrl: './harvest-operations.component.html',
  styleUrls: ['./harvest-operations.component.scss']
})
export class HarvestOperationsComponent implements OnInit {
  @Input() mapView: __esri.MapView;

  sliderValue: number = 0;
  selectedRadio: string = 'drclassdcd';
  areSoilsClipped:boolean = false;

  hoReportTitle: string = '';

  accordionOpened:boolean = false;

  private pmloSoilsGL: __esri.GraphicsLayer;
  private pmloSoilLabelsGL: __esri.GraphicsLayer;
  private userGL: __esri.GraphicsLayer;

  private pmloNote: PMLONotification = new PMLONotification();

  constructor (
    private esrimapService: EsrimapService,
    private soilsService: SoilsService,
    private loaderService: LoaderService,
    private harvestOperationsService: HarvestOperationsService,
    private decimalPipe: DecimalPipe,
    private operationLegendService: OperationLegendService,
    private notificationsService: NotificationsService,
    private mapViewService: MapviewService
  ) {}

  ngOnInit (): void {
    this.pmloSoilsGL = this.mapView.map.findLayerById('pmloSoilsGL') as __esri.GraphicsLayer;
    this.pmloSoilLabelsGL = this.mapView.map.findLayerById('pmloSoilLabelsGL') as __esri.GraphicsLayer;
    this.userGL = this.mapView.map.findLayerById('userGraphicsLayer') as __esri.GraphicsLayer;

    this.esrimapService.harvOpAccordionOpen.subscribe((opened: boolean) => {
      this.accordionOpened = opened;
      if (opened) {
        if (this.pmloSoilLabelsGL.graphics.length > 0)
        {
          this.soilsService.showTableModal.emit(false);
          this.pmloSoilLabelsGL.visible = false;
          this.operationLegendService.setOperationLegendSymbols(this.selectedRadio, this.pmloSoilsGL, this.sliderValue);
        }
        this.operationLegendService.setOperationLegend(this.selectedRadio, true);
      }
    });

    this.mapViewService.boundaryHasPolygons.subscribe((val:boolean) => {
      if (!val) {
        this.clipClearSoils(true);
      }
    });

    this.soilsService.soilsGLHasPolygons.subscribe((soilsHasPolygons:boolean) => {
      this.areSoilsClipped = soilsHasPolygons;
    });

    // Sync with soils slider
    this.soilsService.updateSliderValue.subscribe((res: any) => {
      this.sliderValue = res.sliderVal;
      if (!res.isFromSoils) {
        this.operationLegendService.setOperationLegendSymbols(res.selectedRadioVal, this.pmloSoilsGL, res.sliderVal);
        this.pmloSoilLabelsGL.visible = false;
      }
    });

    this.operationLegendService.SetActiveHarvOperationLegenRadio.subscribe((radioBtnValue: string) => {
      this.selectedRadio = radioBtnValue;
    });
  }

  updateSliderValue (value: any): void {
    this.soilsService.updateSliderValue.emit({
      sliderVal: parseInt(value),
      isFromSoils: false,
      selectedRadioVal: this.selectedRadio
    });
  }

  radioChanged (value: string): void {
    this.operationLegendService.setOperationLegendSymbols(value, this.pmloSoilsGL, this.sliderValue);
    this.operationLegendService.setOperationLegend(value, true);
  }

  clipClearSoils(clear:boolean = null): void {
    if (this.areSoilsClipped || clear === true)
    {
      this.soilsService.clearSoilGLayers(this.pmloSoilsGL, this.pmloSoilLabelsGL);
    } else {
      this.clipSoils();
    }
  }

  buildOperationsReport (): void {
    this.loaderService.isLoading.next(true);
    const boundary: __esri.Graphic = this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').getItemAt(0);
    this.harvestOperationsService
      .createOperationsReport(
        this.selectedRadio,
        this.mapView,
        this.pmloSoilsGL,
        boundary.geometry.extent.clone().expand(1.05),
        this.hoReportTitle
      )
      .then((reportUrl: string) => {
        this.loaderService.isLoading.next(false);
        window.open(reportUrl, '_blank', 'noopener');
      });
  }

  private clipSoils(): void {
    if (this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').length === 0) {
      this.pmloNote.body = 'A drawn boundary is needed to get harvest operations.';
      this.notificationsService.openNotificationsModal.emit(this.pmloNote);
    } else if (this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').length > 1) {
      this.pmloNote.body = 'You can only get harvest operations information from one polygon at a time.';
      this.notificationsService.openNotificationsModal.emit(this.pmloNote);
    } else if (this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').length > 0) {
      if (
        GreaterThanMaxArea(
          this.userGL.graphics.filter((g) => g.geometry.type === 'polygon').getItemAt(0).geometry,
          100000,
          'acres'
        )
      ) {
        this.pmloNote.body =
          'Please make sure the boundary is less than ' + this.decimalPipe.transform(100000) + ' acres.';
        this.notificationsService.openNotificationsModal.emit(this.pmloNote);
      } else {
        this.loaderService.isLoading.next(true);
        const inputBoundary: __esri.Graphic = this.userGL.graphics
          .filter((g) => g.geometry.type === 'polygon')
          .getItemAt(0);
        this.soilsService.getSoils(inputBoundary).then((result: __esri.FeatureSet[]) => {
          if (result.length === 0) {
            this.loaderService.isLoading.next(false);
            this.pmloNote.body =
              'There was an error while getting harvest operations information. Please try again and, if the problem persists, contact the administrator.';
            this.notificationsService.openNotificationsModal.emit(this.pmloNote);
          } else {
            const boundaryId: string = inputBoundary.attributes.id;
            this.harvestOperationsService.addSoilsToMap(this.pmloSoilsGL, result[0], boundaryId, this.sliderValue);
            this.operationLegendService.setOperationLegendSymbols(this.selectedRadio, this.pmloSoilsGL, this.sliderValue);
            this.soilsService.addSoilLabelsToMap(this.pmloSoilLabelsGL, result[1], boundaryId, 100, false);
            this.soilsService.shareMultiSoils.emit((result[0] as any).value.features);
            this.areSoilsClipped = true;
            this.loaderService.isLoading.next(false);
          }
        });
      }
    }
  }
}
