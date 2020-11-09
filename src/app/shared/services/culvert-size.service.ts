import { Injectable, EventEmitter } from '@angular/core';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import Graphic from 'esri/Graphic';
import { ReplaySubject } from 'rxjs';
import { AppConfiguration } from 'src/config';
import { LoaderService } from './Loader.service';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import JobInfo from 'esri/tasks/support/JobInfo';
import PrintTask from 'esri/tasks/PrintTask';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import { HttpClient } from '@angular/common/http';

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

  public mapView: __esri.MapView;
  public sketchVM: __esri.SketchViewModel;
  private reveresed: boolean = false;
  public plot: any;
  public Plotly: any;
  private _graphicsLayer: __esri.GraphicsLayer;

  constructor(private config: AppConfiguration, private loaderService: LoaderService, private http: HttpClient) { }

  public initialize(props: any) {
    this.mapView = props.mapView;
    this._graphicsLayer = props.graphicsLayer;
    this.mapView.map.add(props.graphicsLayer);
    this.sketchVM = new SketchViewModel({
      layer: props.graphicsLayer,
      view: this.mapView,
      pointSymbol: {
        type: "simple-marker",
        style: "circle",
        color: "blue",
        size: "8px",
      }
    });

    this._DrawingComplete();
    return this;
  }

  private _DrawingComplete() {
    this.sketchVM.on('create', (evt: any) => {
      if (evt.state === 'complete') {
        console.log(evt.graphic);
        this._graphicsLayer.add(evt.graphic);
        this.drawingComplete.emit(evt.graphic);
        // that.displayLineChart(evt.graphic);
      }
    })
  }

  get isReversed(): boolean {
    return this.reveresed;
  }

  GetCulvertData(graphic: Graphic): [Geoprocessor, any] {
    let featureSet = new FeatureSet({
      features: [graphic],
      geometryType: 'point',
      spatialReference: { wkid: 3857 }
    });
    const geoprocessor: Geoprocessor = new Geoprocessor({
      url: this.config.culvertSize.gpServiceURL
    });
    const params = {
      Input_Pour_Point: featureSet
    }
    console.log(featureSet.toJSON());
    return [geoprocessor, params];
  }

  public start() {
    if (this._graphicsLayer.graphics.length > 1) {
      this._graphicsLayer.graphics.removeAll();
    }
    this.sketchVM.create('point');
  }

  public close() {
    this._graphicsLayer.removeAll();
    this.sketchVM.destroy();
  }


  async GeneratePDFReport(params: CulvertSizeReportParams) {
    this.http.post(this.config.culvertSize.reportURL, params).subscribe((d: any) => {
      window.open(d.fileName);
      this.loaderService.isLoading.next(false);
    }, (error : any) =>  {
      this.loaderService.isLoading.next(false);
      throw new Error("Failed to generate report. Please try again");
    })
  }

  async createReport(watershedGeometry: __esri.Polygon, culvertData) {
    try {
      this.loaderService.isLoading.next(true);
      const printTask: PrintTask = new PrintTask({
        url: 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Shared/PrintUsingPro/GPServer/PrintUsingPro'
      });

      const printParameters: PrintParameters = new PrintParameters({
        view: this.mapView,
        extraParameters: {
          Format: 'PDF',
        }
      });

      const printMapGpService = new Geoprocessor({
        url: this.config.printGPServiceURL
      })

      await this.mapView.goTo(watershedGeometry.extent.expand(1.5));
      (printTask as any)._getPrintDefinition(printParameters, this.mapView)
        .then(async (webmapJson: any) => {
          const usa_topo = {
            "id": "ArcGISTiledMapServiceLayer1661",
            "url": "http://server.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer",
            "title": "ArcGISTiledMapServiceLayer1659", "minScale": 0, "maxScale": 0
          }

          const operationalLayers = [usa_topo];
          const culvertLr = webmapJson.operationalLayers.filter((lr) => lr.id === 'culvertGraphics')[0];

          operationalLayers.push(culvertLr);

          webmapJson.operationalLayers = operationalLayers;
          console.log(webmapJson);

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
            this.GeneratePDFReport(_culvertData);
          }
        }, (e: any) => console.error(e));
    } catch (error) {
      console.error(error);
      this.loaderService.isLoading.next(false);
    }


  }
}
