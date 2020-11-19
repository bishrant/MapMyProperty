import { AfterViewInit, Component, Input } from '@angular/core';
import Layer from 'esri/layers/Layer';
import Swipe from 'esri/widgets/Swipe';
import { googleWMSlayer, texasBasemaps, texasBasemapsDict } from '../../layers/NAIPLayers';

@Component({
  selector: 'app-swipe-widget',
  templateUrl: './swipe-widget.component.html',
  styleUrls: ['./swipe-widget.component.scss']
})
export class SwipeWidgetComponent implements AfterViewInit {
  loadingBaseLayer: Layer;
  @Input() mapView: __esri.MapView;
  texasBasemaps = texasBasemaps;
  texasBasemapsDict = texasBasemapsDict;
  googleWMSlayer = googleWMSlayer;
  state: any = {
    open: false,
    basemap: null
  };
  swipeWidget: Swipe;

  changeFirstLayer(e) {
    this.addLayersIfNotExists(this.texasBasemapsDict[this.firstLayer], 'leading');
  }

  changeSecondLayer(e) {
    this.addLayersIfNotExists(this.texasBasemapsDict[this.secondLayer], 'trailing');
  }

  firstLayer = this.texasBasemaps[0];
  secondLayer = this.texasBasemaps[this.texasBasemaps.length - 1];
  swipeMode = 'horizontal';

  setSwipeMode(e) {
    this.swipeMode = e;
  }

  ngAfterViewInit() {}

  addLayersIfNotExists(layer1, order) {
    if (order === 'leading') {
      if (!this.swipeWidget.leadingLayers.includes(layer1)){
        if (!this.mapView.map.layers.includes(layer1)) {
          this.mapView.map.layers.add(layer1);
        };
        this.swipeWidget.leadingLayers as any = [layer1];
      }
    } else {
      if (!this.swipeWidget.trailingLayers.includes(layer1)){
        if (!this.mapView.map.layers.includes(layer1)) {
          this.mapView.map.layers.add(layer1);
        }
      }
    }
  }

  toggle() {
    this.state.open = !this.state.open;
    if (this.state.open) {
      if (this.swipeWidget) { this.swipeWidget.destroy() }
      const _first = this.texasBasemapsDict[this.firstLayer];
      const _second = this.texasBasemapsDict[this.secondLayer];
      this.mapView.map.addMany([_first, _second]);
      this.swipeWidget = new Swipe({
        leadingLayers: [_first],
        trailingLayers: [_second],
        position: 35,
        view: this.mapView
      });
      this.mapView.ui.add(this.swipeWidget);
    } else {
      if (this.swipeWidget) {this.swipeWidget.destroy()}
    }
  }

  ngOnDestroy() { }

  public close() {
    this.state.open = false;
    if (this.swipeWidget) { this.swipeWidget.destroy() }
  }

  constructor() { }
}
