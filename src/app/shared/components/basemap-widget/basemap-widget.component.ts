import { Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import BingMapsLayer from 'esri/layers/BingMapsLayer';


@Component({
  selector: 'app-basemap-widget',
  templateUrl: './basemap-widget.component.html',
  styleUrls: ['./basemap-widget.component.scss']
})
export class BasemapWidgetComponent {
  @Input() mapView: __esri.MapView;

  state: any = {
    open: true,
    basemap: 'Bing Hybrid'
  }

  bing = new BingMapsLayer({ style: 'hybrid', key: '' })
  basemaps: any = [
    { label: 'Bing Hybrid', value: 'bing', image: 'bing' },
    { label: 'Aerial', value: 'bing', image: 'aerial' },
    { label: 'Streets', value: 'bing', image: 'streets' },
    { label: 'Topographic', value: 'bing', image: 'topo' },
    { label: 'USA Topo', value: 'bing', image: 'usa-topo' },
    { label: 'USGS', value: 'bing', image: 'usgs' },
    { label: this.getLabel(), value: 'bing', image: 'texas' },
  ];
  toggle() {
    this.state.open = !this.state.open;
  }

  getLabel() {
    return '';
  }
}
