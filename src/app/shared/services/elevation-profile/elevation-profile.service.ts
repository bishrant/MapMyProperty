import { Injectable, EventEmitter } from '@angular/core';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import ElevationProfileViewModel from './ElevationProfileViewModel';
import { ElevationProfileProperties } from './interfaces';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import Graphic from 'esri/Graphic';
import * as Plotly from './lib/plotly-basic-1.55.2.min.js';
import { BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable()
export class ElevationProfileService {
  chartData$: ReplaySubject<any> = new ReplaySubject(1);
  drawingComplete: EventEmitter<any> = new EventEmitter();
  state: EventEmitter<any> = new EventEmitter();

  public mapView: __esri.MapView;
  public sketchVM: any;
  private reveresed: boolean = false;
  public reportURL: string = 'https://localhost:44358/api/CreateElevationProfileReport';
  public plot: any;
  private graphicsLayer = new GraphicsLayer();
  viewModel: ElevationProfileViewModel = new ElevationProfileViewModel();

  constructor() { }

  public initialize(props: ElevationProfileProperties) {
    this.mapView = props.mapView;
    this.viewModel.unit = props.unit;
    this.viewModel.slopeThreshold = props.slopeThreshold;
    this.mapView.map.add(this.graphicsLayer);
    this.sketchVM = new SketchViewModel({
      layer: this.graphicsLayer,
      view: this.mapView,
      polylineSymbol: {
        type: "simple-line",
        color: [0, 0, 255],
        width: 2
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
        this.viewModel.userGraphic = evt.graphic;
        console.log(evt.graphic);
      
        that.displayLineChart(evt.graphic);
      }
    })
  }
//  this.drawingComplete.emit(evt.graphic);

  private async displayLineChart(graphic: Graphic) {
    this.viewModel.state = "loading";
    this.state.emit({'visible': true});

    this.viewModel.showWidget = true;
    try {
      let elevationData = await this.viewModel.GetElevationData(graphic);
      const result = await elevationData.text();
      const resultJson = JSON.parse(result);
      const ptArray = resultJson.results[0].value.features[0].geometry.paths[0]
      this.viewModel.ptArrayOriginal = ptArray.slice();
      this.createChart(ptArray.slice());
    } catch (error) {
      this.viewModel.state = "error";
      this.viewModel.error = "Error getting elevation data. " + error;
      console.error(error);
    }
  }

  private createChart(dd: any) {
    this.viewModel.state = 'ready';
    let d = JSON.parse(JSON.stringify(dd));
    let [data, options, ptArrayNew] = this.viewModel.getChartData(d, this.viewModel.unit);
    this._renderChart(data, options);
    // this.viewModel.initializeHover(Plotly, ptArrayNew, this.mapView);
    // this.viewModel.state = 'idle';
    d = null;
    [data, options, ptArrayNew] = [null, null, null];
  }


  protected _renderChart(data: any[], options: any): any {
    console.log(data, options);
    this.chartData$.next({data, options});
    
  }

  public start(tool: 'polyline' | 'freehand') {
    this.sketchVM.create('polyline', { mode: tool === 'freehand' ? 'freehand' : 'click' });
  }
}
