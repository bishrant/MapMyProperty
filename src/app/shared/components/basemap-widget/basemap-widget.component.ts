import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input, OnDestroy } from '@angular/core';
import Basemap from '@arcgis/core/Basemap';
import Layer from '@arcgis/core/layers/Layer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import { createBingBasemap } from '../../utils/CreateMapView';
import { googleWMSlayer, infraredBasemapsDict, nationalNaip, naturalColorBasemapsDict } from '../../layers/NAIPLayers';
import { WidgetToggleService } from '../../services/WidgetToggleService';
import { Subscription } from 'rxjs';
import MapView from '@arcgis/core/views/MapView';
import ImageryTileLayer from '@arcgis/core/layers/ImageryTileLayer';
const watchUtils = require('@arcgis/core/core/watchUtils');

@Component({
  selector: 'app-basemap-widget',
  templateUrl: './basemap-widget.component.html',
  styleUrls: ['./basemap-widget.component.scss']
})
export class BasemapWidgetComponent implements AfterViewInit, OnDestroy {
  basemapObject: Basemap;
  loadingBaseLayer: Layer;
  @Input() mapView: MapView;
  naturalColorImageryVisible = false;
  infraredImageryVisible = false;
  updatedDate: Date;
  loading = false;
  showBasemapLabel = true;
  naturalColorBasemaps= Object.keys(naturalColorBasemapsDict);
  naturalColorBasemapsDict = naturalColorBasemapsDict;
  infraredBasemaps= Object.keys(infraredBasemapsDict);
  infraredBasemapsDict = infraredBasemapsDict;

  googleWMSlayer = googleWMSlayer;
  subscriptions$ : Subscription;

  basemaps: any = [
    { label: 'Bing Hybrid', value: 'bing', image: 'bing' },
    { label: 'Aerial', value: 'satellite', image: 'aerial' },
    { label: 'NAIP', value: 'naip', image: 'naip' },
    { label: 'Streets', value: 'streets', image: 'streets' },
    { label: 'USA Topo', value: 'usa-topo', image: 'usa-topo' },
    { label: 'USGS', value: 'usgs', image: 'usgs' }
  ];

  state: any = {
    open: false,
    basemap: this.basemaps[0]
  };

  selectedNaturalColorBasemap = this.naturalColorBasemaps[0];
  selectedInfraredBasemap = this.infraredBasemaps[0];

  toggle () {
    this.widgetToggleService.changeWidgetView('basemap', this.state.open);
    this.state.open = !this.state.open;
  }

  toggleNaturalColorImagery () {
    this.infraredImageryVisible = false;
    this.naturalColorImageryVisible = !this.naturalColorImageryVisible;
    this.changeNaturalColorBasemap(!this.naturalColorImageryVisible);
  }

  toggleInfraredImagery () {
    this.naturalColorImageryVisible = false;
    this.infraredImageryVisible = !this.infraredImageryVisible;
    this.changeInfraredBasemap(!this.infraredImageryVisible);
  }

  changeNaturalColorBasemap (removeAll: boolean) {
    this.mapView.map.basemap.baseLayers.forEach(b => {
      if (this.naturalColorBasemaps.includes(b.id) || this.infraredBasemaps.includes(b.id)) {
        this.mapView.map.basemap.baseLayers.remove(b);
      }
    });

    if (!removeAll) {
      const _b = this.naturalColorBasemapsDict[this.selectedNaturalColorBasemap];
      this.state.basemap = { ..._b, label: this.selectedNaturalColorBasemap };
      this.mapView.map.basemap.baseLayers.add(this.naturalColorBasemapsDict[this.selectedNaturalColorBasemap]);
      this.basemapObject = this.mapView.map.basemap;
      this.loadingBaseLayer = this.mapView.map.basemap.baseLayers.getItemAt(1);
    } else {
      this.state.basemap = this.basemaps[0];
    }
  }

  changeInfraredBasemap (removeAll: boolean) {
    this.mapView.map.basemap.baseLayers.forEach(b => {
      if (this.naturalColorBasemaps.includes(b.id) || this.infraredBasemaps.includes(b.id)) {
        this.mapView.map.basemap.baseLayers.remove(b);
      }
    });

    if (!removeAll) {
      const _b = this.infraredBasemapsDict[this.selectedInfraredBasemap];
      this.state.basemap = { ..._b, label: this.selectedInfraredBasemap };
      this.mapView.map.basemap.baseLayers.add(this.infraredBasemapsDict[this.selectedInfraredBasemap]);
      this.basemapObject = this.mapView.map.basemap;
      this.loadingBaseLayer = this.mapView.map.basemap.baseLayers.getItemAt(1);
    } else {
      this.state.basemap = this.basemaps[0];
    }
  }

  createBasemap (baseLayer, id) {
    return new Basemap({
      baseLayers: [baseLayer],
      id: id
    });
  }

  usa_topo = this.createBasemap(new MapImageLayer({ url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer', id: 'usa-topo' }), 'usa-topo');
  usgs = this.createBasemap(new MapImageLayer({ url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer' }), 'usgs');
  naip = this.createBasemap(nationalNaip, 'naip');

  google = this.createBasemap(this.googleWMSlayer, 'texas');
  bing = createBingBasemap();

  _basemapObj = {
    bing: this.bing,
    'usa-topo': this.usa_topo,
    usgs: this.usgs,
    texas: this.google,
    naip: this.naip
  }

  setBasemap (basemap: any) {
    if (this.state.basemap !== basemap) {
      this.state.basemap = basemap;
      this.naturalColorImageryVisible = false;
      this.infraredImageryVisible = false;

      if (['satellite', 'topo', 'streets'].includes(basemap.value)) {
        this.basemapObject = Basemap.fromId(basemap.value);
      } else {
        this.basemapObject = this._basemapObj[basemap.value];
      }
      this.basemapObject.load();

      this.mapView.map.basemap = this.basemapObject;

      this.loadingBaseLayer = this.mapView.map.basemap.baseLayers.getItemAt(0);
      this.updateImageryDate();
    }
  }

  updateImageryDate () {
    if (this.state.basemap.value === 'satellite') {
      const params: any = {
        returnGeometry: false,
        returnDistinctValues: false,
        outFields: 'SRC_DATE2',
        spatialRel: 'esriSpatialRelIntersects',
        f: 'json',
        geometryType: 'esriGeometryPoint',
        inSR: 4326,
        geometry: JSON.stringify({ x: this.mapView.center.longitude, y: this.mapView.center.latitude })
      }
      this.http.get('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/0/query', { params: params })
        .subscribe((d: any) => {
          if (d.features.length > 0) {
            const f = d.features[0];
            this.updatedDate = f.attributes.SRC_DATE2;
          } else {
            this.updatedDate = null;
          }
        });
    } else {
      this.updatedDate = undefined;
    }
  }

  layerViewEvent: any;
  mapViewListener: any;

  ngAfterViewInit () {
    this.mapViewListener = watchUtils.whenTrue(this.mapView, 'stationary', () => {
      if (this.mapView.center) {
        if (this.mapView.scale < 4000000) {
          this.updateImageryDate();
        }
      }
    });

    this.layerViewEvent = this.mapView.on('layerview-create', (evt: any) => {
      this.loading = true;
      if (evt.layer.loadStatus === 'loaded') {
        this.loading = false;
      }
    })
  }

  ngOnDestroy () {
    this.mapViewListener.remove();
    this.layerViewEvent.remove();
    this.subscriptions$.unsubscribe();
  }

  constructor (private http: HttpClient, private widgetToggleService: WidgetToggleService) {
    this.subscriptions$ = this.widgetToggleService.widgetViewChanged.subscribe((widgetInfo: any) => {
      this.showBasemapLabel = true;
      if (widgetInfo.name !== 'basemap' && this.state.open) {
        this.toggle();
      }
      if (widgetInfo.name === 'swipe' && widgetInfo.visible) {
        this.showBasemapLabel = false;
      }
    })
  }
}
