import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, EventEmitter, Input, Output, ViewContainerRef } from '@angular/core';
import Basemap from 'esri/Basemap';
import BingMapsLayer from 'esri/layers/BingMapsLayer';
import ImageryLayer from 'esri/layers/ImageryLayer';
import Layer from 'esri/layers/Layer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import WMSLayer from 'esri/layers/WMSLayer';
const watchUtils = require('esri/core/watchUtils');

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


  bing = new BingMapsLayer({ style: 'hybrid', key: '' })
  basemaps: any = [
    { label: 'Bing Hybrid', value: 'hybrid', image: 'bing' },
    { label: 'Aerial', value: 'satellite', image: 'aerial' },
    { label: 'Streets', value: 'streets', image: 'streets' },
    { label: 'Topographic', value: 'topo', image: 'topo' },
    { label: 'USA Topo', value: 'usa-topo', image: 'usa-topo' },
    { label: 'USGS', value: 'usgs', image: 'usgs' },
  ];

  _tnrisURL = "https://webservices.tnris.org/arcgis/rest/services/";
  topo1996 = new ImageryLayer({ url: this._tnrisURL + "TOP/TOP96_CIR_1m/ImageServer", id: 'topo1996' });
  naip2004 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP04_CIR_1m/ImageServer", id: 'TX NAIP 2004' });
  topo2008 = new ImageryLayer({ url: this._tnrisURL + "TOP/TOP08_NC_50cm/ImageServer", id: 'TX TOPO 2008' });
  topo2009 = new ImageryLayer({ url: this._tnrisURL + "TOP/TOP09_NC_50cm/ImageServer", id: 'TX TOPO 2009' });
  naip2010 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP10_NC_CIR_1m/ImageServer", id: 'TX NAIP 2010' });
  naip2012 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP12_NC_CIR_1m/ImageServer", id: 'TX NAIP 2012' });
  naip2014 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP14_NC_CIR_1m/ImageServer", id: 'TX NAIP 2014' });
  topo2015 = new ImageryLayer({ url: this._tnrisURL + "TOP/TOP15_NC_CIR_50cm/ImageServer", id: 'TX TOPO 2015' });
  naip2016 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP16_NC_CIR_1m/ImageServer", id: 'TX NAIP 2016' });
  naip2018 = new ImageryLayer({ url: this._tnrisURL + "NAIP/NAIP18_NC_CIR_60cm/ImageServer", id: 'TX NAIP 2018' });


  googleWMSlayer = new WMSLayer({
    url: "https://txgi.tnris.org/login/path/normal-citizen-medical-trick/wms?",
    id: 'TX Google 6-inch',
    customParameters: { version: "1.1.1", visibleLayers: ["texas"] }
  });

  texasBasemaps = ["TX Google 6-inch", "TX NAIP 2016", "TX TOPO 2015", "TX NAIP 2014",
    "TX NAIP 2012", "TX NAIP 2010",
    "TXe TOPO 2009", "TXw TOPO 2008", "TX NAIP 2004", "TX TOPO 1996"];

  texasBasemapsDict = {
    "TX Google 6-inch": this.googleWMSlayer,
    "TX NAIP 2016": this.naip2016,
    "TX TOPO 2015": this.topo2015,
    "TX NAIP 2014": this.naip2014,
    "TX NAIP 2012": this.naip2012,
    "TX NAIP 2010": this.naip2010,
    "TXe TOPO 2009": this.topo2009,
    "TXw TOPO 2008": this.topo2008,
    "TX NAIP 2004": this.naip2004,
    "TX TOPO 1996": this.topo1996,
  }

  selectedTexasBasemap = this.texasBasemaps[0];

  state: any = {
    open: true,
    basemap: this.basemaps[0]
  }

  toggle() {
    this.state.open = !this.state.open;
  }

  getLabel() {
    return '';
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
    // this.basemapObject = this.createBasemap(this.texasBasemapsDict[$e], $e);
    // this.basemapObject.load();
    // this.mapView.map.basemap = this.basemapObject;
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


  _basemapObj = {
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
      // this.updateImageryDate();
    }
  }

  updateImageryDate() {
    if (this.state.basemap.value === 'aerial') {
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
          console.log(d)
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



  ngAfterViewInit() {
    // watchUtils.whenTrue(this.mapView, 'stationary', () => {
    //   if (this.mapView.center) {
    //     if (this.mapView.scale < 4000000) {
    //       this.updateImageryDate();
    //     }
    //   }
    // })

    watchUtils.watch(this.mapView.map.basemap, "loadStatus", (a: any) => {
      console.log(a)
    })

    console.log(this.mapView.scale)
  }

  constructor(private http: HttpClient) { }
}
