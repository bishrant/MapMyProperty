import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer, FindGraphicById, GetPolygonGraphics  } from 'src/app/shared/utils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { AppState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import createMapView from 'src/app/shared/utils/CreateMapView';
import { CreateSoilsLayer } from 'src/app/shared/utils/CreateDynamicLayers';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { SoilsService } from '../sidebar/soils/soils.service';
import { AppConfiguration } from 'src/config';

@Component({
  selector: 'pmlo-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true }) private graphicsStoreEl!: GraphicsStoreComponent;
  @ViewChild('soilsTableModal') soilsTableModal: any;

  private graphicsSubcription$: any;
  mapView!: __esri.MapView // = createMapView(this.mapViewEl, this.searchBarDiv);
  clickToAddText = false;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  mapCoords: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer:__esri.GraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();

  constructor (
    private store: Store<AppState>,
    private mapViewService: MapviewService,
    private soilsService:SoilsService,
    private appConfig:AppConfiguration
    ) {}
  @HostListener('keydown.control.z') undoFromKeyboard () {
    this.graphicsStoreEl.undo();
  }

  @HostListener('keydown.control.y') redoFromKeyboard () {
    this.graphicsStoreEl.redo();
  }

  @HostListener('keydown.meta.shift.z') redoFromKeyboardMac () {
    this.graphicsStoreEl.redo();
  }

  @HostListener('keydown.meta.z') undoFromKeyboardMac () {
    this.graphicsStoreEl.undo();
  }

  showCoordinates = (pt: any) => {
    this.mapCoords = 'Lat: ' + pt.latitude.toFixed(5) + '  Long:' + pt.longitude.toFixed(5);
  };

  private setMapEvents = () => {
    if (this.mapView) {
      this.mapView.watch('stationary', () => {
        this.showCoordinates(this.mapView.center);
      });

      this.mapView.watch('scale', (value) => {
        this.mapViewService.pushMapScale(value);
      });

      this.mapView.on('pointer-move', (evt: any) => {
        this.showCoordinates(this.mapView.toMap({ x: evt.x, y: evt.y }));
      });
    }
  };

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      const soilsLayer:__esri.WMSLayer = CreateSoilsLayer('soilsDynamicLayer', this.appConfig.ssurgoWMSURL);
      this.mapView.map.addMany([soilsLayer, this.polygonGraphicsLayer, this.textGraphicsLayer]);
      this.mapView.whenLayerView(this.polygonGraphicsLayer).then((boundaryLayerView) => {
        boundaryLayerView.watch('updating', (val) => {
          if (val)
          {
            let glHasPolygons: boolean = true;
            const pmloSoilsGL:__esri.GraphicsLayer = this.mapView.map.findLayerById('pmloSoilsGL') as __esri.GraphicsLayer;
            
            if (GetPolygonGraphics(boundaryLayerView.layer as __esri.GraphicsLayer).length === 0 || (pmloSoilsGL.graphics.length > 0 && FindGraphicById(boundaryLayerView.layer as __esri.GraphicsLayer, pmloSoilsGL.graphics.getItemAt(0).attributes.boundaryId) === undefined))
            {
              glHasPolygons = false;
            }
            this.mapViewService.glHasPolygons.emit(glHasPolygons);
          }
        });
      });
      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      const p = {
        type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
        style: "circle",
        color: "cyan",
        size: "20px",  // pixels
        outline: {  // autocasts as new SimpleLineSymbol()
          color: [ 0, 0, 0 ],
          width: 1  // points
        }
      };
      this.sketchVM.updatePointSymbol = p;
      this.sketchVM.activePointSymbol = p;
      this.setMapEvents();
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  private listenToGraphicsStore = () => {
    return this.graphics$.subscribe((g: any) => {
      if (g.length > 0) {
        const graphicsArray = g.map((_g: any) => {
          const gr = JSON.parse(_g);
          return gr.attributes.geometryType === 'text' ? Graphic.fromJSON(gr) : new Graphic(gr);
        });
        const allExcepttext = graphicsArray.filter((graphic: any) => graphic.attributes.geometryType != 'text');

        const textGraphicsArray = graphicsArray.filter((graphic: any) => graphic.attributes.geometryType === 'text');
        this.polygonGraphicsLayer.graphics = allExcepttext;
        this.textGraphicsLayer.graphics = textGraphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
        this.textGraphicsLayer.removeAll();
      }
    });
  };

  ngOnInit () {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
    this.soilsService.showTableModal.subscribe((show:boolean) => {
      if (show)
      {
        this.soilsTableModal.show();
      } else {
        this.soilsTableModal.hide();
      }
    });
  }

  ngOnDestroy (): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
