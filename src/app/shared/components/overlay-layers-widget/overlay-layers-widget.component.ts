import { Component, ElementRef, Input, OnInit, QueryList, ViewChildren } from '@angular/core';
import MapImageLayer from 'esri/layers/MapImageLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import VectorLayer from 'esri/layers/VectorTileLayer';
import { faQuestionCircle, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HttpClient } from '@angular/common/http';
import { HelpService } from '../../services/help/help.service';
@Component({
  selector: 'app-overlay-layers-widget',
  templateUrl: './overlay-layers-widget.component.html',
  styleUrls: ['./overlay-layers-widget.component.scss'],
})
export class OverlayLayersWidgetComponent implements OnInit {
  @Input() mapView: __esri.MapView;
  @Input() colorPrefix: string;
  @ViewChildren('checkboxes') checkboxes: QueryList<ElementRef>;
  isOpen: boolean = false;
  faQuestionCircle:IconDefinition = faQuestionCircle;

  wetAreasId = 'wetAreas';
  floodZonesId = 'floodZones';
  private contoursId = 'contours';
  private hydroId = 'hydro';
  private watershedId = 'watershed';
  private parcelsId = 'parcels';

  layersList: any[] = [
    {id: this.contoursId, label:'Contours'},
    {id: this.floodZonesId, label: 'Flood Zones'},
    {id: this.hydroId, label: 'Hydrology'},
    {id: this.watershedId, label: 'Watersheds'},
    {id: this.wetAreasId, label: 'Wet Areas'},
    {id: this.parcelsId, label: 'Parcels'}
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

  constructor(
    private http:HttpClient,
    private helpService:HelpService
  ) {}

  ngOnInit(): void {
    this.mapView.map.addMany([
      this.contoursLayer,
      this.floodZonesLayer,
      this.hydroLayer,
      this.watershedLayer,
      this.wetAreasLayer,
      this.parcelsLayer,
    ]);

    this.http.get(this.wetAreasUrl + '/Legend?f=pjson').subscribe((pjson:any) => {
      this.wetAreasLegendList = pjson.layers[0].legend;
    });
  }

  toggle(): void {
    this.isOpen = !this.isOpen;
  }

  updateVisibility(id:string) {
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

  openHelp():void {
    this.helpService.openHelp.emit({header: 'Layers', itemName: 'layers'});
  }

  private createLayer(layerType:string, id:string, minScale:number, url:string): any
  {
    let lyr:any;
    switch(layerType)
    {
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
    if (minScale !== null)
    {
      lyr.minScale = minScale;
    }

    return lyr;
  }
}