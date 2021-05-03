import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import JobInfo from '@arcgis/core/tasks/support/JobInfo';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Graphic from '@arcgis/core/Graphic';
import { Point, Polygon, SpatialReference } from '@arcgis/core/geometry';
import { SimpleFillSymbol, SimpleMarkerSymbol } from '@arcgis/core/symbols';
import { getSoilTextureClass, getCulvertSize } from './CulvertDetailsUtils';
import { SketchSelectionService } from 'src/app/shared/services/SketchSelectionService';
import * as projection from '@arcgis/core/geometry/projection';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-culvert-size',
  templateUrl: './culvert-size.component.html',
  styleUrls: ['./culvert-size.component.scss']
})
export class CulvertSizeComponent implements AfterViewInit {
  @ViewChild('culvertModal') culvertModal: any;
  @ViewChild('errorModal') errorModal: any;
  @Input() mapView: MapView;
  culvertReportTitle = '';
  culvertData: any = {
    Avg_Slope: 5,
    Clay_WA: 28,
    OBJECTID: 1,
    POLY_AREA: 0,
    Sand_WA: 34,
    Shape_Area: 1416,
    Shape_Length: 194,
    Silt_WA: 37,
    Soil_Texture: 'Clay Loam',
    CulvertSize: '12 inches'
  };

  graphicsLayer: GraphicsLayer = new GraphicsLayer({ id: 'culvertGraphics' });

  isActive = false;
  headerBgColor = '#353535';
  drawTool: string;
  isCulvertToolActive = false;
  isPopupVisible = false;
  culvertUtils: any;

  drawingObservable$: Subscription;
  closePopup$: Subscription;
  watershedGeometry: Polygon;
  pourPointReportWGS: Point;

  constructor (private culvertService: CulvertSizeService, private loaderService: LoaderService,
    private sketchSelectionService: SketchSelectionService) { }

  ngAfterViewInit () { }

  updateSketchState (status: boolean) {
    this.sketchSelectionService.changeSketchSelectionMode('culvert', status);
  }

  drawPourPoint () {
    if (this.isCulvertToolActive || this.isActive) {
      this.clearCulvertTool();
      return;
    }
    this.updateSketchState(false);
    this.isCulvertToolActive = true;
    this.isActive = true;
    this.culvertUtils = this.culvertService.initialize({ mapView: this.mapView, graphicsLayer: this.graphicsLayer });
    this.culvertUtils.start();

    this.drawingObservable$ = this.culvertService.drawingComplete.subscribe(async (graphics: any) => {
      this.isCulvertToolActive = false;
      this.loaderService.isLoading.next(true);
      try {
        const gp: [Geoprocessor, any] = this.culvertService.GetCulvertData(graphics);
        const jobInfo: JobInfo = await gp[0].submitJob(gp[1]);
        await gp[0].waitForJobCompletion(jobInfo.jobId);
        const finalPourPoint = await gp[0].getResultData(jobInfo.jobId, 'Final_Pour_Point');
        const outFeatureWatershed = await gp[0].getResultData(jobInfo.jobId, 'Watershed_Feature');
        const pourPt0: any = finalPourPoint.value.toJSON();
        const wsJSON = outFeatureWatershed.value.toJSON();

        const pourPt = new Point({
          x: pourPt0.features[0].geometry.x,
          y: pourPt0.features[0].geometry.y,
          spatialReference: { wkid: pourPt0.spatialReference.wkid }
        });

        const waterShedPolygon = new Polygon({
          rings: wsJSON.features[0].geometry.rings,
          spatialReference: { wkid: wsJSON.spatialReference.wkid }
        });

        this.culvertData = wsJSON.features[0].attributes;

        this.culvertData.SoilTexture = getSoilTextureClass(
          this.culvertData.Clay_WA,
          this.culvertData.Sand_WA,
          this.culvertData.Silt_WA
        );
        this.culvertData.CulvertSize = getCulvertSize(
          this.culvertData.SoilTexture,
          this.culvertData.Avg_Slope,
          this.culvertData.POLY_AREA
        );
        await projection.load();

        this.pourPointReportWGS = projection.project(pourPt, new SpatialReference({ wkid: 4326 })) as any;

        this.watershedGeometry = projection.project(waterShedPolygon, new SpatialReference({ wkid: 102100 })) as any;
        const watershedGraphics = new Graphic({
          geometry: this.watershedGeometry,
          symbol: new SimpleFillSymbol({
            color: [218, 47, 47, 0.25]
          }),
          attributes: wsJSON.features[0].attributes
        });

        const pourPtWGS = projection.project(pourPt, new SpatialReference({ wkid: 102100 })) as any;
        const pourPtGraphics = new Graphic({
          geometry: pourPtWGS,
          symbol: new SimpleMarkerSymbol({ style: 'cross', outline: { width: 1.5 } })
        });

        this.graphicsLayer.addMany([pourPtGraphics, watershedGraphics]);

        this.mapView.goTo(this.watershedGeometry.extent.expand(1.5));
        if (this.errorModal.visible) this.errorModal.hide();
        this.culvertModal.show();
        this.isPopupVisible = true;
      } catch (err: any) {
        this.errorModal.show();
      } finally {
        this.loaderService.isLoading.next(false);
      }
    });
  }

  public cleanup () {
    this.culvertModal.hide();
  }

  public clearCulvertTool () {
    this.culvertService.close();
    this.isCulvertToolActive = false;
    this.isActive = false;
    this.drawTool = undefined;
    this.drawingObservable$.unsubscribe();
    this.isPopupVisible = false;
    this.errorModal.hide();
    this.updateSketchState(true);
  }

  closeError () {
    this.culvertService.close();
    this.isCulvertToolActive = false;
    this.isActive = false;
    this.drawTool = undefined;
    this.drawingObservable$.unsubscribe();
    this.isPopupVisible = false;
  }

  ngOnDestroy () {
    this.drawingObservable$.unsubscribe();
  }

  createReport () {
    const c = this.culvertData;
    const culvertData = {
      watershedImageURL: '',
      zzProjName: this.culvertReportTitle,
      zzLatitude: Math.round(this.pourPointReportWGS.latitude * 1000000) / 1000000,
      zzLongitude: Math.round(this.pourPointReportWGS.longitude * 1000000) / 1000000,
      zzAcresDrained: c.POLY_AREA.toFixed(2),
      zzSlope: c.Avg_Slope.toFixed(2),
      zzTexture: c.SoilTexture,
      zzSilt: c.Silt_WA.toFixed(2),
      zzSand: c.Sand_WA.toFixed(2),
      zzClay: c.Clay_WA.toFixed(2),
      zzCulvertDiam: c.CulvertSize
    };
    this.culvertService.createReport(this.watershedGeometry, culvertData, this.errorModal);
  }
}
