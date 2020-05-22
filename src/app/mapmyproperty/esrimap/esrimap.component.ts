import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { CreateLineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreatePolygonGraphicsLayer } from 'src/app/shared/maputils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import {
  SetupSketchViewModel,
  CreateCircleWithGeometry,
  CreateCircleFromPoint,
} from 'src/app/shared/maputils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import createMapView from 'src/app/shared/maputils/CreateMapView';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';
import Symbol from 'esri/symbols/Symbol';

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
  private circleRadius: number;
  mapView!: E.MapView;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  mapCoords: any;
  symbolProps: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  id = (): string => Math.random().toString(36).substr(2, 9);
  activeDrawingTool = '';
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


      this.sketchVM.on('update', (gg: any) => {
        // console.log(gg);
        if (gg.state === 'start' || gg.state === 'active') {
          // gg.graphics.symbol =
          this.selectedGraphics = gg.graphics;
        } else if (gg.state === 'cancel') {
          this.selectedGraphics = undefined;
        }
        else if (gg.aborted) {
          this.selectedGraphics = undefined;
        }else if (gg.state === 'complete' ) {
          // send update to the store once the editing is complete
          this.store.dispatch(updateGraphics({ graphics: JSON.stringify(gg.graphics) }));
          this.selectedGraphics = undefined;
        }
        // console.log(this.selectedGraphics, gg, ' enable editing for this');
      });
      this.showMapCoordinates();
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  private listenToGraphicsStore = () => {
    return this.graphics$.subscribe((g: any) => {
      // const allGraphics = JSON.parse(g);
      if (g.length > 0) {
        const graphicsArray = g.map((_g) => {
          const __g = JSON.parse(_g);
          // console.log(__g);
          const cc = new Graphic(__g);
          const gr = Graphic.fromJSON(__g);
          // gr.symbol = Symbol.fromJSON(__g.symbol);
          return cc;
        });
        this.polygonGraphicsLayer.graphics = graphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
      }
    });
  };

  startDrawing = ($event: any) => {
    const _symbol = $event.symbol;
    this.sketchVM.cancel();
    const _tool = $event.tool;
    // this.sketchVM.defaultCreateOptions.mode = $event.mode;
    this.symbolProps = _symbol;
    if (_tool === 'polygon' || _tool === 'circle') {
      this.sketchVM.polygonSymbol = _symbol;
    }
    if (_tool === 'polygon' || _tool === 'polyline' || _tool === 'circle') {
      let y = CreateLineSymbol(_symbol.outline);
      // this.sketchVM.activeLineSymbol = y;
      this.sketchVM.polylineSymbol = y;
    }
    this.circleRadius = $event.radius;
    console.log($event);
    if (_tool === 'circle' && $event.mode === 'click') {
      this.sketchVM.createCircleFromPoint = true;
      this.sketchVM.create('point');
    } else {
      this.sketchVM.createCircleFromPoint = false;
      this.sketchVM.create(_tool, { mode: $event.mode, type: 'circle' });
    }
  };

  changeDrawingMode = (mode: string, drawEvent: any) => {
    this.sketchVM.cancel();
    // this.sketchVM.defaultCreateOptions.mode = mode;
    this.startDrawing(drawEvent);
  };

  ngOnInit() {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
  }

  ngOnDestroy(): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
