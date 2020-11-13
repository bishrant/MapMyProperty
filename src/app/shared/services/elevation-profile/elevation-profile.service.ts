import { Injectable, EventEmitter } from '@angular/core';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import ElevationProfileViewModel from './ElevationProfileViewModel';
import { ElevationProfileProperties } from './interfaces';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import Graphic from 'esri/Graphic';
import { ReplaySubject } from 'rxjs';
import { AppConfiguration } from 'src/config';
import { LoaderService } from '../Loader.service';
import { EsrimapService } from 'src/app/planmylandoperation/esrimap/esrimap.service';

@Injectable()
export class ElevationProfileService {
  chartData$: ReplaySubject<any> = new ReplaySubject(1);
  drawingComplete: EventEmitter<any> = new EventEmitter();
  state: EventEmitter<any> = new EventEmitter();

  public mapView: __esri.MapView;
  public sketchVM: __esri.SketchViewModel;
  private reveresed: boolean = false;
  public plot: any;
  public Plotly: any;
  private graphicsLayer = new GraphicsLayer();
  viewModel: ElevationProfileViewModel = new ElevationProfileViewModel();

  constructor(private config: AppConfiguration, private loaderService: LoaderService, private esriMapService:EsrimapService) {  }

  public initialize(props: ElevationProfileProperties) {
    this.mapView = props.mapView;
    this.viewModel.divId = props.divId;
    this.viewModel.isMSL = props.isMSL;
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
        this.drawingComplete.emit(evt.graphic);
        that.displayLineChart(evt.graphic);
      }
    })
  }

  get isReversed(): boolean {
    return this.reveresed;
  }

  private async displayLineChart(graphic: Graphic) {
    this.viewModel.state = "loading";
    this.state.emit({'visible': true});

    this.viewModel.showWidget = true;
    try {

      // let elevationData = await this.viewModel.GetElevationData(graphic, this.config.elevationGPServiceURL);
      // const result = await elevationData.text();
      // const resultJson = JSON.parse(result);
      // console.log(resultJson);
      const resultJson = {"results":[{"paramName":"OutputProfile","dataType":"GPFeatureRecordSetLayer","value":{"displayFieldName":"","hasZ":true,"geometryType":"esriGeometryPolyline","spatialReference":{"wkid":102100,"latestWkid":3857},"fields":[{"name":"OBJECTID","type":"esriFieldTypeOID","alias":"OBJECTID"},{"name":"DEMResolution","type":"esriFieldTypeString","alias":"DEM Resolution","length":50},{"name":"ProductName","type":"esriFieldTypeString","alias":"Product Name","length":50},{"name":"Source","type":"esriFieldTypeString","alias":"Source","length":50},{"name":"Source_URL","type":"esriFieldTypeString","alias":"Source URL","length":84},{"name":"ProfileLength","type":"esriFieldTypeDouble","alias":"Length Meters"},{"name":"Shape_Length","type":"esriFieldTypeDouble","alias":"Shape_Length"}],"features":[{"attributes":{"OBJECTID":1,"DEMResolution":"10m","ProductName":"NED_1r3_arcsec","Source":"USGS","Source_URL":"http://ned.usgs.gov","ProfileLength":65729.323023081204,"Shape_Length":78772.219289705346},"geometry":{"hasZ":true,"paths":[[[-11405274.3037,3962052.4086000025,1081.6061999999947],[-11404575.4509,3960564.7743000016,1077.9612000000052],[-11403876.597999999,3959077.3312999979,1078.0779999999941],[-11403177.745300001,3957590.0798000023,1074.8199000000022],[-11402478.8924,3956103.0195000023,1073.8304999999964],[-11401780.0396,3954616.1501000002,1070.122000000003],[-11401081.186699999,3953129.4720000029,1067.3089999999938],[-11400382.333799999,3951642.9847000018,1064.0920999999944],[-11399683.481000001,3950156.6881000027,1059.9536999999982],[-11398984.6282,3948670.5824000016,1058.879700000005],[-11398285.7754,3947184.6671999991,1055.3003000000026],[-11397586.922499999,3945698.942400001,1051.9712],[-11396888.069700001,3944213.4081000015,1050.1705999999976],[-11396189.216800001,3942728.0640999973,1045.2624999999971],[-11395490.364,3941242.9101999998,1042.5651000000071],[-11394791.5112,3939757.9463,1045.2140000000072],[-11394092.658399999,3938273.1724999994,1039.1201000000001],[-11393393.805500001,3936788.5885000005,1037.770199999999],[-11392694.9527,3935304.1942000017,1032.7684000000008],[-11391996.0998,3933819.9896000028,1033.5515000000014],[-11391297.247099999,3932335.9746000022,1029.649900000004],[-11390598.394200001,3930852.1489000022,1028.0215000000026],[-11389899.5414,3929368.5126999989,1024.7017999999953],[-11389200.6885,3927885.0656000003,1023.2550000000047],[-11388501.8357,3926401.807599999,1023.4766999999993],[-11387802.982799999,3924918.7387999967,1018.1842999999935],[-11387104.130100001,3923435.8588000014,1017.1582000000053],[-11386405.2772,3921953.1674999967,1013.2725999999966],[-11385706.4244,3920470.6651000008,1089.9376000000047],[-11384372.250800001,3921137.3506999984,1012.0595999999932],[-11383038.077199999,3921804.0742999986,1011.596000000005],[-11381703.9036,3922470.8360999972,1009.4055999999982],[-11380369.73,3923137.6362000033,1004.8525999999983],[-11379035.556500001,3923804.4742999971,1005.3307000000059],[-11377701.3829,3924471.3506999984,1001.2137999999977],[-11376367.2093,3925138.2652999982,997.75560000000405],[-11375033.035800001,3925805.2180000022,994.93399999999383],[-11373698.8621,3926472.2089999989,992.89040000000386],[-11372364.6885,3927139.2383000031,995.41629999999714],[-11371030.515000001,3927806.3057999983,1002.5446999999986],[-11369696.341399999,3928473.4114999995,996.43880000000354],[-11368362.1679,3929140.5555000007,996.95239999999467],[-11367027.994200001,3929807.7378000021,992.84530000000086],[-11365693.820599999,3930474.9582000002,988.47849999999744],[-11364359.6471,3931142.2171000019,984.07259999999951],[-11363025.4735,3931809.5143000036,985.06339999999909],[-11361691.300000001,3932476.8496000022,990.80419999999867],[-11360357.126399999,3933144.2233999968,991.02120000000286],[-11359022.9527,3933811.6354999989,989.73149999999441],[-11357688.779200001,3934479.0857999995,989.78479999999399],[-11356354.605599999,3935146.5746000037,989.66959999999381]]]}}],"exceededTransferLimit":false}}],"messages":[]};
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
    this.viewModel.initializeHover(this.Plotly, ptArrayNew, this.mapView, this.graphicsLayer);
    // this.viewModel.state = 'idle';
    d = null;
    [data, options, ptArrayNew] = [null, null, null];
  }

 public reverseProfile() {
    this.reveresed = !this.reveresed;
    const div = document.getElementById(this.viewModel.divId) as any;
    const _h = div.clientHeight;
    const _w = div.clientWidth;
    this.Plotly.purge(this.viewModel.divId);
    div.outerHTML = div.outerHTML;
    document.getElementById(this.viewModel.divId).style.height = _h+'px';
    document.getElementById(this.viewModel.divId).style.width = _w+'px';
    let reversedPtArray = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
    let reveresedArrayNew;
    if (this.reveresed) {
      reveresedArrayNew = JSON.parse(JSON.stringify(reversedPtArray.reverse()));
    } else {
      reveresedArrayNew = JSON.parse(JSON.stringify(this.viewModel.ptArrayOriginal));
    }
    const [data, options, ptArrayNew] = this.viewModel.getChartData(reveresedArrayNew, this.viewModel.unit);
    this._renderChart(data, options);
    // console.log(reveresedArrayNew);
    this.viewModel.initializeHover(this.Plotly, ptArrayNew, this.mapView, this.graphicsLayer);
    reveresedArrayNew = undefined;
    reversedPtArray = undefined;
  }



  protected _renderChart(data: any[], options: any): any {
    console.log(data, options);
    this.chartData$.next({data, options});
    console.log(this.viewModel.divId, data, options, { displayModeBar: false, responsive: true, autosize: true });

    this.Plotly.react(this.viewModel.divId, data, options, { displayModeBar: false, responsive: true, autosize: true });
  }

  public resizeChart(width: number, height: number) {
    this.Plotly.relayout(this.viewModel.divId, {width: width, height: height})
  }

  public start(tool: 'polyline' | 'freehand') {
    this.sketchVM.create('polyline', { mode: tool === 'freehand' ? 'freehand' : 'click' });
  }

  public close() {
    this.graphicsLayer.removeAll();
    this.sketchVM.destroy();
  }

  async createReport() {
    this.loaderService.isLoading.next(true);
    await this.mapView.goTo(this.sketchVM.layer.graphics);
    this.viewModel.printReport(this.mapView, this.config.elevationProfileReportURL, this.config.exportMapGPServiceURL)
    .then((response: any) => {
      console.log(response);
      window.open(response.fileName, "_blank");
    })
    .catch((e:any) => {
      console.error(e);
    })
    .finally(() => {
      this.loaderService.isLoading.next(false);
    })

  }

  public openHelp():void {
    this.esriMapService.openHelp.emit({header: 'Elevation Profiles', itemName: 'elevation'});
  }
}
