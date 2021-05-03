import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren, OnDestroy } from '@angular/core';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import VectorLayer from '@arcgis/core/layers/VectorTileLayer';
import { HttpClient } from '@angular/common/http';
import { MapviewService } from '../../services/mapview.service';
import { WidgetToggleService } from '../../services/WidgetToggleService';
import { Subscription } from 'rxjs';
import { CreateMapLayer } from '../../utils/CreateDynamicLayers';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-overlay-layers-widget',
  templateUrl: './overlay-layers-widget.component.html',
  styleUrls: ['./overlay-layers-widget.component.scss']
})
export class OverlayLayersWidgetComponent implements OnInit, OnDestroy {
  @Input() mapView: MapView;
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
  isFirstTime = true;

  layersList: any[] = [
    { id: this.contoursId, label: 'Contours', enabled: false },
    { id: this.floodZonesId, label: 'Flood Zones', enabled: false },
    { id: this.hydroId, label: 'Hydrology', enabled: true },
    { id: this.watershedId, label: 'Watersheds', enabled: true },
    { id: this.wetAreasId, label: 'Wet Areas', enabled: false },
    { id: this.parcelsId, label: 'Parcels', enabled: false }
  ];

  contoursLayer: MapImageLayer
  floodZonesLayer: FeatureLayer
  hydroLayer: MapImageLayer
  watershedLayer: MapImageLayer
  wetAreasLayer: MapImageLayer
  parcelsLayer: VectorLayer

  wetAreasLegendList: any[] = [];

  private wetAreasUrl = 'https://www.fws.gov/wetlands/arcgis/rest/services/Wetlands/MapServer';

  initializeAllLayers = () => {
    this.contoursLayer = CreateMapLayer(
      'mapImage',
      this.contoursId,
      null,
      'https://carto.nationalmap.gov/arcgis/rest/services/contours/MapServer'
    );

    this.floodZonesLayer = CreateMapLayer(
      'feature',
      this.floodZonesId,
      72000,
      'https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_Flood_Hazard_Reduced_Set_gdb/FeatureServer/0'
    );

    this.hydroLayer = CreateMapLayer(
      'mapImage',
      this.hydroId,
      null,
      'https://basemap.nationalmap.gov/arcgis/rest/services/USGSHydroCached/MapServer'
    );

    this.watershedLayer = CreateMapLayer(
      'mapImage',
      this.watershedId,
      null,
      'https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer'
    );

    this.wetAreasLayer = CreateMapLayer(
      'mapImage',
      this.wetAreasId,
      null,
      this.wetAreasUrl
    );

    this.parcelsLayer = CreateMapLayer(
      'vector',
      this.parcelsId,
      72000,
      'https://tiles.arcgis.com/tiles/jIL9msH9OI208GCb/arcgis/rest/services/VectorTiles_parcels/VectorTileServer'
    );

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

  ngOnInit (): void { }

  toggle (): void {
    this.widgetToggleService.changeWidgetView('layers', this.isOpen);
    this.isOpen = !this.isOpen;
    if (this.isOpen && this.isFirstTime) {
      this.isFirstTime = false;
      this.initializeAllLayers();
    }
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
}
