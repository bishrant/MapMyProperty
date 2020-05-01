import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';

import { CreateLineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreatePolygonGraphicsLayer } from 'src/app/shared/maputils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/maputils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import createMapView from 'src/app/shared/maputils/CreateMapView';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';

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
  symbolProps: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  id = (): string => Math.random().toString(36).substr(2, 9);

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
      this.sketchVM.on(['create'], (evt: any) => {
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