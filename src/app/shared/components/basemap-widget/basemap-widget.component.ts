import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, Input } from '@angular/core';
import Basemap from 'esri/Basemap';
import Layer from 'esri/layers/Layer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import { createBingBasemap } from '../../utils/CreateMapView';
const watchUtils = require('esri/core/watchUtils');
import { googleWMSlayer, texasBasemaps, texasBasemapsDict } from '../../layers/NAIPLayers';

@Component({
  selector: 'app-basemap-widget',
  templateUrl: './basemap-widget.component.html',
  styleUrls: ['./basemap-widget.component.scss']
})
export class BasemapWidgetComponent implements AfterViewInit {
  basemapObject: Basemap;
  loadingBaseLayer: Layer;
  @Input() mapView: __esri.MapView;
  texasImageryVisible = false;
  updatedDate: Date;
  loading = false;
  _tnrisURL = "https://webservices.tnris.org/arcgis/rest/services/";
  texasBasemaps= texasBasemaps;
  texasBasemapsDict = texasBasemapsDict;
  googleWMSlayer = googleWMSlayer;

  basemaps: any = [
    { label: 'Bing Hybrid', value: 'bing', image: 'bing' },
    { label: 'Aerial', value: 'satellite', image: 'aerial' },
    { label: 'Streets', value: 'streets', image: 'streets' },
    { label: 'Topographic', value: 'topo', image: 'topo' },
    { label: 'USA Topo', value: 'usa-topo', image: 'usa-topo' },
    { label: 'USGS', value: 'usgs', image: 'usgs' },
  ];

  state: any = {
    open: false,
    basemap: this.basemaps[0]
  };

  selectedTexasBasemap = this.texasBasemaps[0];

  toggle() {
    this.state.open = !this.state.open;
  }

  toggleTexasImagery() {
    this.texasImageryVisible = !this.texasImageryVisible;
    this.changeTexasBasemap(!this.texasImageryVisible);

  }

  changeTexasBasemap(removeAll: boolean) {
    this.mapView.map.basemap.baseLayers.forEach(b => {
      if (this.texasBasemaps.includes(b.id)) {
        this.mapView.map.basemap.baseLayers.remove(b);
      }
    });

    if (!removeAll) {
      this.mapView.map.basemap.baseLayers.add(this.texasBasemapsDict[this.selectedTexasBasemap]);
      this.basemapObject = this.mapView.map.basemap;
      this.loadingBaseLayer = this.mapView.map.basemap.baseLayers.getItemAt(1);
    }
  }


  createBasemap(baseLayer, id) {
    return new Basemap({
      baseLayers: [baseLayer],
      id: id
    });
  }

  usa_topo = this.createBasemap(new MapImageLayer({ url: 'https://services.arcgisonline.com/ArcGIS/rest/services/USA_Topo_Maps/MapServer', id: 'usa-topo' }), 'usa-topo');
  usgs = this.createBasemap(new MapImageLayer({ url: 'https://basemap.nationalmap.gov/arcgis/rest/services/USGSTopo/MapServer' }), 'usgs');
  google = this.createBasemap(this.googleWMSlayer, 'texas');
  bing = createBingBasemap();


  _basemapObj = {
    'bing': this.bing,
    'usa-topo': this.usa_topo,
    'usgs': this.usgs,
    'texas': this.google
  }

  setBasemap(basemap: any) {
    if (this.state.basemap !== basemap) {
      this.state.basemap = basemap;
      this.texasImageryVisible = false;

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

  updateImageryDate() {
    if (this.state.basemap.value === 'satellite') {
      const params: any = {
        returnGeometry: false,
        returnDistinctValues: false,
        outFields: 'SRC_DATE2',
        spatialRel: 'esriSpatialRelIntersects',
        f: 'json',
        geometryType: 'esriGeometryPoint',
        inSR: 4326,
        geometry: JSON.stringify({ "x": this.mapView.center.longitude, "y": this.mapView.center.latitude })
      }
      this.http.get('https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/0/query', { params: params })
        .subscribe((d: any) => {
          if (d.features.length > 0) {
            const f = d.features[0];
            this.updatedDate = f.attributes['SRC_DATE2'];
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

  ngAfterViewInit() {
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

  ngOnDestroy() {
    this.mapViewListener.remove();
    this.layerViewEvent.remove();
  }

  constructor(private http: HttpClient) { }
}
