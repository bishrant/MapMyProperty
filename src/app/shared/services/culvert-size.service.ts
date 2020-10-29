import { Injectable, EventEmitter } from '@angular/core';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import Graphic from 'esri/Graphic';
import { ReplaySubject } from 'rxjs';
import { AppConfiguration } from 'src/config';
import { LoaderService } from './Loader.service';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import JobInfo from 'esri/tasks/support/JobInfo';

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
  private graphicsLayer: any;

  constructor(private config: AppConfiguration, private loaderService: LoaderService) { }

  public initialize(props: any) {
    this.graphicsLayer = new GraphicsLayer({ id: "culvertGraphics" });
    this.mapView = props.mapView;
    this.mapView.map.add(this.graphicsLayer);
    this.sketchVM = new SketchViewModel({
      layer: this.graphicsLayer,
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
    var that = this;
    this.sketchVM.on('create', (evt: any) => {
      if (evt.state === 'complete') {
        console.log(evt.graphic);
        this.graphicsLayer.add(evt.graphic);
        this.drawingComplete.emit(evt.graphic);
        // that.displayLineChart(evt.graphic);
      }
    })
  }

  get isReversed(): boolean {
    return this.reveresed;
  }

  GetCulvertData(graphic: Graphic) : [Geoprocessor, any, GraphicsLayer]  {
      let featureSet = new FeatureSet({
        features: [graphic],
        geometryType: 'point',
        spatialReference: {wkid: 3857}
      });
      const geoprocessor: Geoprocessor = new Geoprocessor({
        url: this.config.culvertSizeGPServiceURL
      });
      const params = {
        inPourPoint: featureSet
      }
      console.log(featureSet.toJSON());
     return [geoprocessor, params, this.graphicsLayer];
  }

  public start() {
    if (this.graphicsLayer.graphics.length > 1) {
      this.graphicsLayer.graphics.removeAll();
    }
    this.sketchVM.create('point');
  }

  public close() {
    this.graphicsLayer.removeAll();
    this.sketchVM.destroy();
  }

  async createReport() {
    this.loaderService.isLoading.next(true);
    await this.mapView.goTo(this.sketchVM.layer.graphics);
    // this.viewModel.printReport(this.mapView, this.config.elevationProfileReportURL, this.config.exportMapGPServiceURL)
    // .then((response: any) => {
    //   console.log(response);
    //   window.open(response.fileName, "_blank");
    // })
    // .catch((e:any) => {
    //   console.error(e);
    // })
    // .finally(() => {
    //   this.loaderService.isLoading.next(false);
    // })

  }
}
