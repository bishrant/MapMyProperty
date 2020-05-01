import { GraphicsStoreComponent } from './../../shared/store/GraphicsStore.component';
import { Component, OnInit, ViewChild, ElementRef, HostListener, Input } from '@angular/core';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import createMapView from 'src/app/shared/maputils/CreateMapView';
import { SetupSketchViewModel } from 'src/app/shared/maputils/SketchViewModelUitls';
import { CreatePolygonGraphicsLayer } from '../../shared/maputils/CreateGraphicsLayer';
import E = __esri;
import { Store } from '@ngrx/store';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import Graphic from 'arcgis-js-api/Graphic';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';
import { CreateLineSymbol } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss'],
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv: ElementRef;
  @ViewChild('graphicsStore', { static: true })
  private graphicsStoreEl: GraphicsStoreComponent;
  private graphicsSubcription$: any;
  mapView: E.MapView;
  sketchVM: any = new SketchViewModel();
  selectedGraphics: any[];
  mapCoords: any;
  symbolProps: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  id = (): string => Math.random().toString(36).substr(2, 9);

  constructor(private store: Store<GraphicsState>) {}
  @Input('se') se: ElementRef;
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
      this.sketchVM.on(['create'], (evt) => {
        if (evt.state === 'complete') {
          const _g = evt.graphic;
          evt.graphic.attributes = { gid: this.id(), symbol: _g.symbol };
          // this.polygonGraphicsLayer.add(Graphic.fromJSON(evt.graphic.toJSON()))
          // this.store.dispatch({type: 'ADD'});
          this.store.dispatch(addGraphics({ payload: JSON.stringify(_g.toJSON()) }));
          // polygonGraphicsLayer.add(evt.graphic);
        }
      });
      // to know if a graphic is selected
      // this.mapView.on('click', (evt) => {
      //   // if (this.sketchVM.state !== 'active') {
      //   this.mapView.hitTest(evt).then((r) => {
      //     const _graphic = r.results.filter((result) => {
      //       return result.graphic.layer === this.polygonGraphicsLayer;
      //     });
      //     this.selectedGraphics = _graphic;
      //   })
      // });

      //       this.mapView.on('click', ['Shift'], (evt) => {
      //         console.log('click shift')
      //   // if (this.sketchVM.state !== 'active') {
      //   this.mapView.hitTest(evt).then((r) => {
      //     const _graphic = r.results.filter((result) => {
      //       return result.graphic.layer === this.polygonGraphicsLayer;
      //     });
      //     this.selectedGraphics = this.selectedGraphics ? this.selectedGraphics.concat(_graphic): _graphic;
      //   })
      // })

      this.sketchVM.on('update', (gg: any) => {
        // console.log(gg);
        if (gg.state === 'start' || gg.state === 'active') {
          // gg.graphics.symbol =
          this.selectedGraphics = gg.graphics;
        } else if (gg.state === 'cancel') {
          this.selectedGraphics = undefined;
        } else if (gg.state === 'complete') {
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
    return this.graphics$.subscribe((g) => {
      if (g.length > 0) {
        const graphicsArray = g.map((_g) => {
          const __g = JSON.parse(_g);
          return Graphic.fromJSON(__g);
        });
        this.polygonGraphicsLayer.graphics = graphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
      }
    });
  };

  startDrawing = ($event: any) => {
    const _symbol = $event.symbol;
    this.symbolProps = _symbol;
    if ($event.tool === 'polygon') {
      this.sketchVM.polygonSymbol = _symbol;
    }
    if ($event.tool === 'polygon' || $event.tool === 'polyline') {
      this.sketchVM.activeLineSymbol = CreateLineSymbol(_symbol.outline);
    }

    this.sketchVM.create($event.tool);
  };

  ngOnInit() {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
  }

  ngOnDestroy(): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
