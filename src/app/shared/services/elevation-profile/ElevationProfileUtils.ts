import SketchViewModel from "esri/widgets/Sketch/SketchViewModel";
import GraphicsLayer from "esri/layers/GraphicsLayer";
import { ElevationProfileProperties } from "./interfaces";
import ElevationProfileViewModel from "./ElevationProfileViewModel";
import { EventEmitter } from 'events';


class ElevationProfile {
    mapView: __esri.MapView;
    public sketchVM: any;
    public event = new EventEmitter();
    private reveresed: boolean = false;
    public reportURL: string = 'https://localhost:44358/api/CreateElevationProfileReport';
    public plot: any;
    private graphicsLayer = new GraphicsLayer();
    viewModel: ElevationProfileViewModel = new ElevationProfileViewModel();

    constructor(props: ElevationProfileProperties) {
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
    }

    private _DrawingComplete() {
        var that = this;
        this.sketchVM.on('create', function (evt: any) {
          if (evt.state === 'complete') {
            console.log(evt.graphic);
            that.viewModel.userGraphic = evt.graphic;
            console.log(evt.graphic);
            
            // that.displayLineChart(evt.graphic);
          }
        })
      }
    
      public start(tool: 'polyline' | 'freehand') {
        this.sketchVM.create('polyline', {mode: tool === 'freehand' ? 'freehand': 'click'});
      }


}

export { ElevationProfile };