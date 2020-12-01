import { Injectable, EventEmitter } from '@angular/core';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import ElevationProfileViewModel from './ElevationProfileViewModel';
import { ElevationProfileProperties } from './interfaces';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import Graphic from 'esri/Graphic';
import { ReplaySubject } from 'rxjs';
import { AppConfiguration } from 'src/config';
import { LoaderService } from '../Loader.service';

@Injectable()
export class ElevationProfileService {
  chartData$: ReplaySubject<any> = new ReplaySubject(1);
  state: EventEmitter<any> = new EventEmitter();

  public mapView: __esri.MapView;
  public sketchVM: __esri.SketchViewModel;
  public plot: any;
  public Plotly: any;
  viewModel: ElevationProfileViewModel = new ElevationProfileViewModel();
  private reveresed = false;
  private graphicsLayer = new GraphicsLayer();
  private popup: any;
  private lineGraphicsLayer = new GraphicsLayer({ id: 'lineElevation' });

  constructor(private config: AppConfiguration, private loaderService: LoaderService) { }

  public initialize(props: ElevationProfileProperties) {
    this.mapView = props.mapView;
    this.popup = props.popup;
    this.viewModel.divId = props.divId;
    this.viewModel.isMSL = props.isMSL;
    this.viewModel.unit = props.unit;
    this.viewModel.slopeThreshold = props.slopeThreshold;
    this.mapView.map.addMany([this.graphicsLayer, this.lineGraphicsLayer]);
    this.sketchVM = new SketchViewModel({
      layer: this.lineGraphicsLayer,
      view: this.mapView,
      polylineSymbol: {
        type: 'simple-line',
        color: [0, 0, 255],
        width: 2,
      },
    });

    this._DrawingComplete();
    import('../../../shared/services/elevation-profile/lib/plotly.js').then((_plotly: any) => {
      this.Plotly = _plotly;
    });
    return this;
  }

  public reverseProfile() {
    this.reveresed = !this.reveresed;
    const div = document.getElementById(this.viewModel.divId) as any;
    const _h = div.clientHeight;
    const _w = div.clientWidth;
    this.Plotly.purge(this.viewModel.divId);
    div.outerHTML = div.outerHTML;
    document.getElementById(this.viewModel.divId).style.height = _h + 'px';
    document.getElementById(this.viewModel.divId).style.width = _w + 'px';
    let reversedPtArray = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
    let reveresedArrayNew;
    if (this.reveresed) {
      reveresedArrayNew = JSON.parse(JSON.stringify(reversedPtArray.reverse()));
    } else {
      reveresedArrayNew = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
    }
    const [data, options, ptArrayNew] = this.viewModel.getChartData(reveresedArrayNew, this.viewModel.unit);
    this._renderChart(data, options);
    this.viewModel.initializeHover(this.Plotly, ptArrayNew, this.mapView, this.graphicsLayer);
    reveresedArrayNew = undefined;
    reversedPtArray = undefined;
  }

  public resizeChart(_width: number, _height: number) {
    this.Plotly.relayout(this.viewModel.divId, { width: _width, height: _height });
  }

  public start(tool: 'polyline' | 'freehand') {
    this.sketchVM.create('polyline', { mode: tool === 'freehand' ? 'freehand' : 'click' });
  }

  public close() {
    this.graphicsLayer.removeAll();
    this.lineGraphicsLayer.removeAll();
    this.sketchVM.destroy();
  }

  async createReport() {
    this.loaderService.isLoading.next(true);
    await this.mapView.goTo(this.sketchVM.layer.graphics);
    this.viewModel
      .printReport(this.mapView, this.config.elevationProfileReportURL, this.config.exportMapGPServiceURL)
      .then((response: any) => {
        window.open(response.fileName, '_blank');
      })
      .catch((e: any) => {
        console.error(e);
      })
      .finally(() => {
        this.loaderService.isLoading.next(false);
      });
  }

  protected _renderChart(data: any[], options: any): any {
    this.chartData$.next({ data, options });
    this.Plotly.react(this.viewModel.divId, data, options, { displayModeBar: false, responsive: true, autosize: true });
  }

  private _DrawingComplete() {
    const that = this;
    this.sketchVM.on('create', (evt: any) => {
      if (evt.state === 'complete') {
        this.viewModel.userGraphic = evt.graphic;
        this.loaderService.isLoading.next(true);
        that.displayLineChart(evt.graphic);
      }
    });
  }

  get isReversed(): boolean {
    return this.reveresed;
  }

  private async displayLineChart(graphic: Graphic) {
    this.viewModel.state = 'loading';
    try {
      const elevationData = await this.viewModel.GetElevationData(graphic, this.config.elevationGPServiceURL);
      const result = await elevationData.text();
      const resultJson = JSON.parse(result);
      this.state.emit({ visible: true });

      this.popup.show();
      this.loaderService.isLoading.next(false);
      this.viewModel.showWidget = true;

      const ptArray = resultJson.results[0].value.features[0].geometry.paths[0];
      this.viewModel.ptArrayOriginal = ptArray.slice();
      this.createChart(ptArray.slice());
    } catch (error) {
      this.state.emit({ visible: true });
      this.viewModel.showWidget = true;
      this.popup.show();

      this.loaderService.isLoading.next(false);
      this.viewModel.state = 'error';
      this.viewModel.error = 'Error getting elevation data. ' + error;
      console.error(error);
    }
  }

  private createChart(dd: any) {
    this.viewModel.state = 'ready';
    let d = JSON.parse(JSON.stringify(dd));
    let [data, options, ptArrayNew] = this.viewModel.getChartData(d, this.viewModel.unit);
    this._renderChart(data, options);
    this.viewModel.initializeHover(this.Plotly, ptArrayNew, this.mapView, this.graphicsLayer);
    d = null;
    [data, options, ptArrayNew] = [null, null, null];
  }


}
