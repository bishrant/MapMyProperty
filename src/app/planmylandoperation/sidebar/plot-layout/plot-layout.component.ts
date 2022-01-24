import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { GetPolygonGraphics } from 'src/app/shared/utils/CreateGraphicsLayer';
import { CreateGL } from '../../pmloUtils/layers';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import { NotificationModel } from 'src/app/shared/models/Notification.model';
import { NotificationsService } from 'src/app/shared/services/Notifications.service';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { PlotLayoutService } from './plot-layout.service';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import Graphic from '@arcgis/core/Graphic';
import { EsrimapService } from '../../esrimap/esrimap.service';
import { GetFeaturesAreaAcres } from 'src/app/shared/utils/GeometryEngine';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { downloadFile } from 'src/app/shared/utils/DownloadFile';
import { createGPXForExport } from 'src/app/shared/utils/GPXUtils';
import Collection from '@arcgis/core/core/Collection';

@Component({
  selector: 'pmlo-plot-layout',
  templateUrl: './plot-layout.component.html',
  styleUrls: ['./plot-layout.component.scss']
})
export class PlotLayoutComponent implements OnInit {
  @ViewChild('plotDirectionImg', { static: true }) plotDirectionImgEl: ElementRef;
  @Input() mapView: any;

  accordionOpened: boolean = false;
  plotsInMap:boolean = false;

  plotWithinRowValue: number = 0;
  plotBetweenRowValue: number = 0;
  selectedRadio: string = 'feet';
  rotationAngleValue: number = 0;
  gpxPrefixValue: string = 'A';

  private plotsGL: GraphicsLayer = CreateGL('plotsGL', 1);
  private userGL: GraphicsLayer;
  private pmloNote:NotificationModel = new NotificationModel();

  constructor (
    private notificationsService: NotificationsService,
    private loaderService: LoaderService,
    private plotLayoutService: PlotLayoutService,
    private esrimapService: EsrimapService,
    private mapViewService: MapviewService
  ) {}

  ngOnInit (): void {
    this.mapViewService.boundaryHasPolygons.subscribe((val:boolean) => {
      if (val === false) {
        this.plotsGL.removeAll();
        this.plotLayoutService.updatePlotsInMapState.emit(false);
      } else {
        if (this.plotsGL.graphics.length > 0) {
          const firstGraphic: Graphic = this.plotsGL.graphics.getItemAt(0);
          const boundaryId = firstGraphic.getAttribute('boundaryId');

          const boundary = this.userGL.graphics.find((boundary:Graphic) => { return boundary.attributes.id === boundaryId });
          console.log(boundary);

          if (!boundary) {
            this.plotsGL.removeAll();
            this.plotLayoutService.updatePlotsInMapState.emit(false);
          }
        }
      }
    });

    this.esrimapService.plotLayoutAccordionOpen.subscribe((opened: boolean) => {
      this.accordionOpened = opened;
      if (opened) {
        const polygonGraphics = GetPolygonGraphics(this.userGL);
        if (polygonGraphics.length === 1) {
          const polygonAcres: number = GetFeaturesAreaAcres(polygonGraphics);
          if (polygonAcres < 50) {
            this.plotWithinRowValue = 467;
            this.plotBetweenRowValue = 467;
          } else if (polygonAcres > 100) {
            this.plotWithinRowValue = 660;
            this.plotBetweenRowValue = 660;
          } else {
            this.plotWithinRowValue = 572;
            this.plotBetweenRowValue = 572;
          }
        }
      }
    });
    this.userGL = this.mapView.map.findLayerById('userGraphicsLayer');
    this.mapView.map.add(this.plotsGL);

    this.plotLayoutService.updatePlotsInMapState.subscribe((value:boolean) => {
      this.plotsInMap = value;

      if (value === false) {
        this.plotsGL.removeAll();
      }
    });
  }

  radioChanged (unit: string): void {
    this.selectedRadio = unit;

    if (unit === 'chains') {
      this.plotWithinRowValue /= 66;
      this.plotBetweenRowValue /= 66;
    } else {
      this.plotWithinRowValue *= 66;
      this.plotBetweenRowValue *= 66;
    }
  }

  runPlotLayout (): void {
    this.plotsGL.removeAll();
    if (!this.plotsInMap) {
      const polygonGraphics = GetPolygonGraphics(this.userGL);
      if (polygonGraphics.length > 1) {
        this.pmloNote.body = 'You can only run plot layout tool for one polygon at a time.';
        this.notificationsService.openNotificationsModal.emit(this.pmloNote);
      } else {
        this.loaderService.isLoading.next(true);
        const inputBoundary: Graphic = polygonGraphics.getItemAt(0);
        this.plotLayoutService.generatePlotLayout(inputBoundary, this.convertToMeters(this.plotWithinRowValue), this.convertToMeters(this.plotBetweenRowValue), this.rotationAngleValue).then(
          (result: FeatureSet[]) => {
            if (result.length === 0) {
              this.loaderService.isLoading.next(false);
              this.pmloNote.body = 'There was an error while generating the plots. Please try again and, if the problem persists, contact the administrator.'
              this.plotLayoutService.updatePlotsInMapState.emit(false);
              this.notificationsService.openNotificationsModal.emit(this.pmloNote);
            } else {
              const boundaryId: string = inputBoundary.attributes.id;
              this.plotLayoutService.addPlotsToMap(this.plotsGL, result[0], boundaryId);
              this.plotLayoutService.updatePlotsInMapState.emit(true);
              this.loaderService.isLoading.next(false);
            }
          }
        );
      }
    } else {
      this.plotLayoutService.updatePlotsInMapState.emit(false);
    }
  }

  createGPSReport (): void {
    const plotGraphics: Collection<Graphic> = this.plotsGL.graphics;
    const exportJSon = this.convertToExportJson(plotGraphics.filter((g: Graphic) => g.symbol.type === 'simple-marker'));

    downloadFile('PMLO_Plots.gpx', createGPXForExport(exportJSon, true), 'application/xml');
  }

  validateRotationAngle (): void {
    if (this.rotationAngleValue === null) {
      this.rotationAngleValue = 0;
    }

    this.plotDirectionImgEl.nativeElement.style.transform = `rotate(${this.rotationAngleValue.toString()}deg)`;
  }

  private convertToExportJson (plotGraphics: Collection<Graphic>): any {
    console.log(plotGraphics);
    const jsonGraphics = [];
    plotGraphics.forEach((g: Graphic) => {
      g.setAttribute('plotName', this.gpxPrefixValue + ('000' + g.attributes.OBJECTID.toString()).slice(-3));
      jsonGraphics.push(JSON.stringify(g.toJSON()));
    });
    return jsonGraphics;
  }

  private convertToMeters (value: number): number {
    return this.selectedRadio === 'chains' ? value * 20.1168 : value * 0.3048;
  }
}
