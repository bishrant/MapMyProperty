import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CreatePolygonGraphicsLayer } from 'src/app/shared/maputils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/maputils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import createMapView from 'src/app/shared/maputils/CreateMapView';
import E = __esri;

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss'],
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true })
  private graphicsStoreEl!: GraphicsStoreComponent;
  private graphicsSubcription$: any;
  mapView!: E.MapView;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  mapCoords: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  constructor(private store: Store<GraphicsState>) {}
  @Input('se') se!: ElementRef;
  @HostListener('keydown.control.z') undoFromKeyboard() {
    this.graphicsStoreEl.undo();
  }
  @HostListener('keydown.control.y') redoFromKeyboard() {
    this.graphicsStoreEl.redo();
  }
  @HostListener('keydown.meta.shift.z') redoFromKeyboardMac() {
    this.graphicsStoreEl.redo();
  }

  @HostListener('keydown.meta.z') undoFromKeyboardMac() {
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

      this.mapView.on('pointer-move', (evt) => {
        this.showCoordinates(this.mapView.toMap({ x: evt.x, y: evt.y }));
      });
    }
  };

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      this.mapView.map.add(this.polygonGraphicsLayer);
      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      this.showMapCoordinates();
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  private listenToGraphicsStore = () => {
    return this.graphics$.subscribe((g: any) => {
      if (g.length > 0) {
        const graphicsArray = g.map((_g) => {
          const __g = JSON.parse(_g);
          return new Graphic(__g);
        });
        this.polygonGraphicsLayer.graphics = graphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
      }
    });
  };

  ngOnInit() {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
  }

  ngOnDestroy(): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
