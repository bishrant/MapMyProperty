import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import MapImageLayer from 'esri/layers/MapImageLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import VectorLayer from 'esri/layers/VectorTileLayer';
import { HttpClient } from '@angular/common/http';
import { MapviewService } from '../../services/mapview.service';
import { WidgetToggleService } from '../../services/WidgetToggleService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-overlay-layers-widget',
  templateUrl: './overlay-layers-widget.component.html',
  styleUrls: ['./overlay-layers-widget.component.scss']
})
export class OverlayLayersWidgetComponent implements OnInit, OnDestroy {
  @Input() mapView: __esri.MapView;
  @Input() colorPrefix: string;
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  isOpen: boolean = false;
  subscriptions$ : Subscription;

  wetAreasId = 'wetAreas';
  floodZonesId = 'floodZones';
  private contoursId = 'contours';
  private hydroId = 'hydro';
  private watershedId = 'watershed';
  private parcelsId = 'parcels';

  contoursEnabled = false;
  wetAreasEnabled = false;
  floodZonesEnabled = false;
  parcelsEnabled = false;

  layersList: any[] = [
    { id: this.contoursId, label: 'Contours', enabled: false },
    { id: this.floodZonesId, label: 'Flood Zones', enabled: false },
    { id: this.hydroId, label: 'Hydrology', enabled: true },
    { id: this.watershedId, label: 'Watersheds', enabled: true },
    { id: this.wetAreasId, label: 'Wet Areas', enabled: false },
    { id: this.parcelsId, label: 'Parcels', enabled: false }
  ];

  wetAreasLegendList: any[] = [];

  private wetAreasUrl = 'https://fwspublicservices.wim.usgs.gov/server/rest/services/Wetlands/MapServer';

  contoursLayer: MapImageLayer = this.createLayer(
    'mapImage',
    this.contoursId,
    null,
    'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer'
  );

  floodZonesLayer: FeatureLayer = this.createLayer(
    'feature',
    this.floodZonesId,
    72000,
    'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_Flood_Hazard_Reduced_Set_gdb/FeatureServer/0'
  );

  hydroLayer: MapImageLayer = this.createLayer(
    'mapImage',
    this.hydroId,
    null,
    'https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer'
  );

  watershedLayer: MapImageLayer = this.createLayer(
    'mapImage',
    this.watershedId,
    null,
    'https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer'
  );

  wetAreasLayer: MapImageLayer = this.createLayer(
    'mapImage',
    this.wetAreasId,
    null,
    this.wetAreasUrl
  );

  parcelsLayer: VectorLayer = this.createLayer(
    'vector',
    this.parcelsId,
    72000,
    'https://tiles.arcgis.com/tiles/jIL9msH9OI208GCb/arcgis/rest/services/VectorTiles_parcels/VectorTileServer'
  );

  constructor (
    private http: HttpClient,
    private mapviewService: MapviewService, private widgetToggleService: WidgetToggleService) {
    this.subscriptions$ = this.widgetToggleService.widgetViewChanged.subscribe((widgetInfo: any) => {
      if (widgetInfo.name !== 'layers' && this.isOpen) {
        this.toggle();
      }
    })
  }

  ngOnDestroy () {
    this.subscriptions$.unsubscribe();
  }

  ngOnInit (): void {
    this.mapView.map.addMany([
      this.contoursLayer,
      this.floodZonesLayer,
      this.hydroLayer,
      this.watershedLayer,
      this.wetAreasLayer,
      this.parcelsLayer
    ]);

    this.http.get(this.wetAreasUrl + '/Legend?f=pjson').subscribe((pjson: any) => {
      this.wetAreasLegendList = pjson.layers[0].legend;
    });

    this.mapviewService.scaleChanged.subscribe((scale: number) => {
      if (scale <= 3000000) {
        this.layersList.find(l => l.id === this.contoursId).enabled = true;
      } else {
        this.layersList.find(l => l.id === this.contoursId).enabled = false;
      }

      if (scale <= 250000) {
        this.layersList.find(l => l.id === this.wetAreasId).enabled = true;
      } else {
        this.layersList.find(l => l.id === this.wetAreasId).enabled = false;
      }

      if (scale <= 72000) {
        this.layersList.find(l => l.id === this.floodZonesId).enabled = true;
        this.layersList.find(l => l.id === this.parcelsId).enabled = true;
      } else {
        this.layersList.find(l => l.id === this.floodZonesId).enabled = false;
        this.layersList.find(l => l.id === this.parcelsId).enabled = false;
      }
    });
  }

  toggle (): void {
    this.widgetToggleService.changeWidgetView('layers', this.isOpen);
    this.isOpen = !this.isOpen;
  }

  updateVisibility (id: string) {
    switch (id) {
      case this.contoursId:
        this.contoursLayer.visible = !this.contoursLayer.visible;
        break;

      case this.floodZonesId:
        this.floodZonesLayer.visible = !this.floodZonesLayer.visible;
        break;

      case this.hydroId:
        this.hydroLayer.visible = !this.hydroLayer.visible;
        break;

      case this.watershedId:
        this.watershedLayer.visible = !this.watershedLayer.visible;
        break;

      case this.wetAreasId:
        this.wetAreasLayer.visible = !this.wetAreasLayer.visible;
        break;

      case this.parcelsId:
        this.parcelsLayer.visible = !this.parcelsLayer.visible;
        break;
    }
  }

  private createLayer (layerType: string, id: string, minScale: number, url: string): any {
    let lyr: any;
    switch (layerType) {
      case 'mapImage':
        lyr = new MapImageLayer();
        break;

      case 'feature':
        lyr = new FeatureLayer();
        break;

      case 'vector':
        lyr = new VectorLayer();
        break;
    }

    lyr.id = id;
    lyr.url = url;
    lyr.visible = false;
    if (minScale !== null) {
      lyr.minScale = minScale;
    }

    return lyr;
  }
}
