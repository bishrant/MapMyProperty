
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer } from 'src/app/shared/utils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { AppState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import createMapView from 'src/app/shared/utils/CreateMapView';
// import E = __esri;

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true })
  private graphicsStoreEl!: GraphicsStoreComponent;

  private graphicsSubcription$: any;
  mapView!: __esri.MapView; // = createMapView(this.mapViewEl, this.searchBarDiv);
  clickToAddText = false;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  mapCoords: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();
  constructor (private store: Store<AppState>) { }
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

  private showMapCoordinates = () => {
    if (this.mapView) {
      this.mapView.watch('stationary', () => {
        this.showCoordinates(this.mapView.center);
      });

      this.mapView.on('pointer-move', (evt: any) => {
        this.showCoordinates(this.mapView.toMap({ x: evt.x, y: evt.y }));
      });
    }
  };

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      this.mapView.map.addMany([this.polygonGraphicsLayer, this.textGraphicsLayer]);
      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      const p = {
        type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
        style: 'circle',
        color: 'cyan',
        size: '20px', // pixels
        outline: { // autocasts as new SimpleLineSymbol()
          color: [0, 0, 0],
          width: 1 // points
        }
      };
      this.sketchVM.updatePointSymbol = p;
      this.sketchVM.activePointSymbol = p;
      this.showMapCoordinates();
      // console.log(window['lo']);
      this.mapView.on('layerview-create-error', (ee)=>{
        console.log(ee);
        let error = new Error();
        error.message = ee.error.message;
        error.name = ee.error.name;
        throw error;
      });
      
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  private listenToGraphicsStore = () => {
    return this.graphics$.subscribe((g: any) => {
      if (g.length > 0) {
        const graphicsArray = g.map((_g: any) => {
          const gr = JSON.parse(_g);
          return new Graphic(gr);
        });
        const allExcepttext = graphicsArray.filter((graphic: any) => graphic.attributes.geometryType !== 'text');

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
  }

  ngOnDestroy (): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
