import { AfterViewInit, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import JobInfo from 'esri/tasks/support/JobInfo';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Graphic from 'esri/Graphic';
import { Point, Polygon, SpatialReference } from 'esri/geometry';
import { SimpleFillSymbol, SimpleMarkerSymbol } from 'esri/symbols';
import { getSoilTextureClass } from './CulvertDetailsUtils';
const projection = require('arcgis-js-api/geometry/projection');

@Component({
  selector: 'app-culvert-size',
  templateUrl: './culvert-size.component.html',
  styleUrls: ['./culvert-size.component.scss']
})
export class CulvertSizeComponent implements AfterViewInit {
  @ViewChild('culvertModal') culvertModal: any;
  @Input() mapView: __esri.MapView;
  culvertReportTitle = "";

  culvertData: any = {
    Avg_Slope: 5,
    Clay_WA: 28,
    OBJECTID: 1,
    POLY_AREA: 0,
    Sand_WA: 34,
    Shape_Area: 1416,
    Shape_Length: 194,
    Silt_WA: 37
  };

  graphicsLayer: GraphicsLayer = new GraphicsLayer({ id: "culvertGraphics" });

  headerBgColor = '#353535'
  drawTool: String;
  isElevationProfileToolActive = false;
  faQuestionCircle = faQuestionCircle;
  culvertUtils: any;

  drawingObservable$: Subscription;
  closePopup$: Subscription;
  watershedGeometry: Polygon;
  pourPointReportWGS: Point;

  constructor(private culvertService: CulvertSizeService, private loaderService: LoaderService) { }

  ngAfterViewInit() {
    console.log(projection);
    this.culvertUtils = this.culvertService.initialize({ mapView: this.mapView, graphicsLayer: this.graphicsLayer });
  }

  drawPourPoint() {
    this.culvertUtils.start();

    this.drawingObservable$ = this.culvertService.drawingComplete.subscribe(async (graphics: any) => {
      this.loaderService.isLoading.next(true);
      // console.time('graph')
      try {
        const gp: [Geoprocessor, any] = this.culvertService.GetCulvertData(graphics);
        const jobInfo: JobInfo = await gp[0].submitJob(gp[1]);
        await gp[0].waitForJobCompletion(jobInfo.jobId);
        const finalPourPoint = await gp[0].getResultData(jobInfo.jobId, 'Final_Pour_Point')
        const outFeatureWatershed = await gp[0].getResultData(jobInfo.jobId, 'Watershed_Feature')
        const pourPt0: any = finalPourPoint.value.toJSON();
        const wsJSON = outFeatureWatershed.value.toJSON();


        // simulate the data for now
        // const pourPt0: any = {
        //   "displayFieldName": "", "features":
        //     [{
        //       "geometry": { "spatialReference": { "latestWkid": 3665, "wkid": 3665 }, "x": 1497452.9382958077, "y": 7607725.866491848 },
        //       "symbol": null, "attributes": { "OBJECTID": 1, "pointid": 1, "grid_code": 1 }, "popupTemplate": null
        //     }],
        //   "fields": [{ "alias": "OBJECTID", "editable": true, "length": -1, "name": "OBJECTID", "nullable": true, "type": "esriFieldTypeOID" },
        //   { "alias": "pointid", "editable": true, "length": -1, "name": "pointid", "nullable": true, "type": "esriFieldTypeInteger" },
        //   { "alias": "grid_code", "editable": true, "length": -1, "name": "grid_code", "nullable": true, "type": "esriFieldTypeInteger" }],
        //   "geometryType": "esriGeometryPoint", "spatialReference": { "latestWkid": 3665, "wkid": 3665 }
        // };

        // console.log(finalPourPoint.value.toJSON(), outFeatureWatershed.value.toJSON());
        const pourPt = new Point({
          x: pourPt0.features[0].geometry.x,
          y: pourPt0.features[0].geometry.y,
          spatialReference: { wkid: pourPt0.spatialReference.wkid }
        });

        // const wsJSON = { "displayFieldName": "", "features": [{ "geometry": { "spatialReference": { "latestWkid": 3665, "wkid": 3665 }, "rings": [[[1497517.9382999986, 7607170.8665], [1497443.3381000012, 7607181.2809], [1497439.2840999998, 7607379.9204], [1497453.2221000008, 7607735.7664], [1497463.0384000018, 7607715.9666], [1497477.4085000008, 7607495.7182], [1497503.0384000018, 7607445.9666], [1497512.8381999992, 7607365.7664], [1497526.4448000006, 7607352.6933], [1497522.8381999992, 7607175.9666], [1497517.9382999986, 7607170.8665]]] }, "symbol": null, "attributes": { "OBJECTID": 1, "Sand_WA": 46.20000076293945, "Silt_WA": 29.600000381469727, "Clay_WA": 24.200000762939453, "Avg_Slope": 1.7000000476837158, "POLY_AREA": 7.033543813283964, "Shape_Length": 1212.4067848757138, "Shape_Area": 28463.767116226343 }, "popupTemplate": null }], "fields": [{ "alias": "OBJECTID", "editable": true, "length": -1, "name": "OBJECTID", "nullable": true, "type": "esriFieldTypeOID" }, { "alias": "Sand_WA", "editable": true, "length": -1, "name": "Sand_WA", "nullable": true, "type": "esriFieldTypeSingle" }, { "alias": "Silt_WA", "editable": true, "length": -1, "name": "Silt_WA", "nullable": true, "type": "esriFieldTypeSingle" }, { "alias": "Clay_WA", "editable": true, "length": -1, "name": "Clay_WA", "nullable": true, "type": "esriFieldTypeSingle" }, { "alias": "Avg_Slope", "editable": true, "length": -1, "name": "Avg_Slope", "nullable": true, "type": "esriFieldTypeSingle" }, { "alias": "POLY_AREA", "editable": true, "length": -1, "name": "POLY_AREA", "nullable": true, "type": "esriFieldTypeDouble" }, { "alias": "Shape_Length", "editable": true, "length": -1, "name": "Shape_Length", "nullable": true, "type": "esriFieldTypeDouble" }, { "alias": "Shape_Area", "editable": true, "length": -1, "name": "Shape_Area", "nullable": true, "type": "esriFieldTypeDouble" }], "geometryType": "esriGeometryPolygon", "spatialReference": { "latestWkid": 3665, "wkid": 3665 } };

        const waterShedPolygon = new Polygon({
          rings: wsJSON.features[0].geometry.rings,
          spatialReference: { wkid: wsJSON.spatialReference.wkid }
        });

        this.culvertData = wsJSON.features[0].attributes;
        await projection.load();

        this.pourPointReportWGS = projection.project(pourPt, new SpatialReference({wkid: 4326}));

        this.watershedGeometry = projection.project(waterShedPolygon, new SpatialReference({ wkid: 102100 }));
        const watershedGraphics = new Graphic({
          geometry: this.watershedGeometry,
          symbol: new SimpleFillSymbol({
            color: [218, 47, 47, 0.25]
          }),
          attributes: wsJSON.features[0].attributes
        })

        const pourPtWGS = projection.project(pourPt, new SpatialReference({ wkid: 102100 }));
        const pourPtGraphics = new Graphic({
          geometry: pourPtWGS,
          symbol: new SimpleMarkerSymbol({ style: "cross", outline: { width: 1.5 } })
        })

        this.graphicsLayer.addMany([pourPtGraphics, watershedGraphics]);

        this.mapView.goTo(this.watershedGeometry.extent.expand(1.5));

        this.culvertModal.show();
      } catch (err) {
        console.error(err)
      } finally {
        this.loaderService.isLoading.next(false);
      }
    })
  }

  modelClosed() {
    this.culvertService.close();
    this.drawTool = undefined;
  }

  clearElevationProfile() {
    console.log('clear profile');
    this.culvertModal.hide();
  }

  ngOnDestroy() {
    this.drawingObservable$.unsubscribe();
  }


  createReport() {
    const c = this.culvertData;
    const culvertData = {
      watershedImageURL: "",
      zzProjName: this.culvertReportTitle,
      zzLatitude: Math.round(this.pourPointReportWGS.latitude * 1000000)/1000000,
      zzLongitude: Math.round(this.pourPointReportWGS.longitude * 1000000)/1000000,
      zzAcresDrained: c.POLY_AREA.toFixed(2),
      zzSlope: c.Avg_Slope.toFixed(2),
      zzTexture: getSoilTextureClass(c.Clay_WA, c.Sand_WA, c.Silt_WA),
      zzSilt: c.Silt_WA.toFixed(2),
      zzSand: c.Sand_WA.toFixed(2),
      zzClay: c.Clay_WA.toFixed(2),
      zzCulvertDiam: 'test',
    };
    this.culvertService.createReport(this.watershedGeometry,  this.graphicsLayer, culvertData);
  }
}
