import { AfterViewInit, Component, Input } from '@angular/core';
import Collection from 'esri/core/Collection';
import Layer from 'esri/layers/Layer';
import Swipe from 'esri/widgets/Swipe';
import { googleWMSlayer, texasBasemaps, texasBasemapsDict } from '../../layers/NAIPLayers';
import { LoaderService } from '../../services/Loader.service';

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
    open: false
  };

  swipeWidget: Swipe;
  firstLayer = this.texasBasemaps[0];
  secondLayer = this.texasBasemaps[this.texasBasemaps.length - 1];
  swipeMode = 'horizontal';

  setSwipeMode (e) {
    this.swipeMode = e;
    this.swipeWidget.direction = e;
  }

  ngAfterViewInit () { (<any>window).mapView = this.mapView; }

  changeSwipeLayers (order: string) {
    const newLayer = (order === 'leading') ? this.texasBasemapsDict[this.firstLayer] : this.texasBasemapsDict[this.secondLayer];
    const existing = (order === 'leading') ? this.swipeWidget.leadingLayers.getItemAt(0) : this.swipeWidget.trailingLayers.getItemAt(0);
    if (existing.id !== newLayer.id) {
      this.mapView.map.remove(existing);
      this.addLayersIfNotExists(newLayer, order);
    }
  }

  getNewSwipeLayerCollection (_layer: any): Collection {
    if (!this.mapView.map.layers.includes(_layer)) {
      this.mapView.map.layers.add(_layer, this.mapView.map.layers.length - 3);
      this.loadingService.isLoading.next(true);
      this.mapView.whenLayerView(_layer).then(l => this.loadingService.isLoading.next(false))
    };
    const col = new Collection();
    col.add(_layer);
    return col;
  }

  moveSwipeCursor () {
    this.swipeWidget.position = Math.min(this.swipeWidget.position +
      (-1 * (Math.random() > 0.5 ? 1 : -1)), 60);
  }

  addLayersIfNotExists (layer1, order) {
    if (order === 'leading') {
      this.swipeWidget.leadingLayers = this.getNewSwipeLayerCollection(layer1);
    } else {
      this.swipeWidget.trailingLayers = this.getNewSwipeLayerCollection(layer1);
    }
    this.moveSwipeCursor();
  }

  toggle () {
    this.state.open = !this.state.open;
    if (this.state.open) {
      if (this.swipeWidget) { this.swipeWidget.destroy() }
      const _first = this.texasBasemapsDict[this.firstLayer];
      const _second = this.texasBasemapsDict[this.secondLayer];
      this.mapView.map.addMany([_first, _second], this.mapView.map.layers.length - 3);

      this.loadingService.isLoading.next(true);

      Promise.all([this.mapView.whenLayerView(_first), this.mapView.whenLayerView(_first)]).then(() => this.loadingService.isLoading.next(false))
      this.swipeWidget = new Swipe({
        leadingLayers: [_first],
        trailingLayers: [_second],
        position: 35,
        view: this.mapView
      });
      this.mapView.ui.add(this.swipeWidget);
    } else {
      if (this.swipeWidget) { this.swipeWidget.destroy() }
      this.mapView.map.removeMany([this.texasBasemapsDict[this.firstLayer], this.texasBasemapsDict[this.secondLayer]])
    }
  }

  ngOnDestroy () { }

  public close () {
    this.state.open = false;
    if (this.swipeWidget) { this.swipeWidget.destroy() }
  }

  constructor (private loadingService: LoaderService) { }
}
