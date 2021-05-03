import { Injectable, EventEmitter } from '@angular/core';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import Graphic from '@arcgis/core/Graphic';
import { ReplaySubject } from 'rxjs';
import { AppConfiguration } from 'src/config';
import { LoaderService } from './Loader.service';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import JobInfo from '@arcgis/core/tasks/support/JobInfo';
import PrintTask from '@arcgis/core/tasks/PrintTask';
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters';
import { HttpClient } from '@angular/common/http';
import { Polygon } from '@arcgis/core/geometry';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapView from '@arcgis/core/views/MapView';

interface CulvertSizeReportParams {
  watershedImageURL: string,
  zzProjName: string,
  zzLatitude: string,
  zzLongitude: string,
  zzAcresDrained: string,
  zzSlope: string,
  zzTexture: string,
  zzSilt: string,
  zzSand: string,
  zzClay: string,
  zzCulvertDiam: string,
}

@Injectable()
export class CulvertSizeService {
  chartData$: ReplaySubject<any> = new ReplaySubject(1);
  drawingComplete: EventEmitter<any> = new EventEmitter();
  state: EventEmitter<any> = new EventEmitter();

  public mapView: MapView;
  public sketchVM: SketchViewModel;
  private reveresed: boolean = false;
  public plot: any;
  public Plotly: any;
  private _graphicsLayer: GraphicsLayer;

  constructor (private config: AppConfiguration, private loaderService: LoaderService, private http: HttpClient) { }

  public initialize (props: any) {
    this.mapView = props.mapView;
    this._graphicsLayer = props.graphicsLayer;
    this.mapView.map.add(props.graphicsLayer);
    this.sketchVM = new SketchViewModel({
      layer: props.graphicsLayer,
      view: this.mapView,
      updateOnGraphicClick: false,
      pointSymbol: {
        type: 'simple-marker',
        style: 'circle',
        color: 'blue',
        size: '8px'
      }
    });

    this._DrawingComplete();
    return this;
  }

  private _DrawingComplete () {
    this.sketchVM.on('create', (evt: any) => {
      if (evt.state === 'complete') {
        this._graphicsLayer.add(evt.graphic);
        this.drawingComplete.emit(evt.graphic);
        // that.displayLineChart(evt.graphic);
      }
    })
  }

  get isReversed (): boolean {
    return this.reveresed;
  }

  GetCulvertData (graphic: Graphic): [Geoprocessor, any] {
    const featureSet = new FeatureSet({
      features: [graphic],
      geometryType: 'point',
      spatialReference: { wkid: 3857 }
    });
    // featureSet.features[0].symbol = null;
    const geoprocessor: Geoprocessor = new Geoprocessor({
      url: (this.config.culvertSize.gpServiceURL)
    });
    const params = {
      Input_Pour_Point: featureSet,
      'env:outSR': 3857
    }
    return [geoprocessor, params];
  }

  public start () {
    if (this._graphicsLayer.graphics.length > 1) {
      this._graphicsLayer.graphics.removeAll();
    }
    this.sketchVM.create('point');
  }

  public close () {
    this._graphicsLayer.removeAll();
    this.sketchVM.destroy();
  }

  async GeneratePDFReport (params: CulvertSizeReportParams, errorModal: any) {
    this.http.post(this.config.backendURL + this.config.culvertSize.reportURL, params).subscribe((d: any) => {
      window.open(d.fileName);
      this.loaderService.isLoading.next(false);
    }, (error : any) => {
      this.loaderService.isLoading.next(false);
      errorModal.show();
      console.error(error);
    })
  }

  async createReport (watershedGeometry: Polygon, culvertData, errorModal: any) {
    try {
      this.loaderService.isLoading.next(true);
      const printTask: PrintTask = new PrintTask({
        url: this.config.printGPServiceURL
      });

      const printParameters: PrintParameters = new PrintParameters({
        view: this.mapView,
        extraParameters: {
          Format: 'PDF'
        }
      });

      const printMapGpService = new Geoprocessor({
        url: this.config.printGPServiceURL
      })

      await this.mapView.goTo(watershedGeometry.extent.expand(1.5));
      (printTask as any)._getPrintDefinition(printParameters, this.mapView)
        .then(async (webmapJson: any) => {
          const usa_topo = {
            id: 'ArcGISTiledMapServiceLayer1661',
            url: 'http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer',
            title: 'ArcGISTiledMapServiceLayer1659',
            minScale: 0,
            maxScale: 0
          }

          const operationalLayers = [usa_topo];
          const culvertLr = webmapJson.operationalLayers.filter((lr) => lr.id === 'culvertGraphics')[0];

          operationalLayers.push(culvertLr);

          webmapJson.operationalLayers = operationalLayers;

          const gpParams = {
            Web_Map_as_JSON: webmapJson,
            Format: 'jpg',
            Layout_Template: 'CulvertSize',
            f: 'json'
          };

          const gp: JobInfo = await printMapGpService.submitJob(gpParams);
          const jobDetails = await printMapGpService.waitForJobCompletion(gp.jobId);
          if (jobDetails.jobStatus === 'job-succeeded') {
            const file = await printMapGpService.getResultData(gp.jobId, 'Output_File');
            const _culvertData = culvertData;
            _culvertData.watershedImageURL = file.value.url;
            this.GeneratePDFReport(_culvertData, errorModal);
          }
        }, (e: any) => console.error(e));
    } catch (error) {
      console.error(error);
      this.loaderService.isLoading.next(false);
      errorModal.show();
    }
  }
}
