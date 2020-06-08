import { MapView } from 'arcgis-js-api/views/MapView';
import { id } from './../../shared/store/todo';
import { Component, ElementRef, HostListener, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer } from 'src/app/shared/utils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { AppState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import createMapView from 'src/app/shared/utils/CreateMapView';
import E = __esri;
import Geometry = require('esri/geometry/Geometry');
import { createInput, htmlToElement, createInputWithFrame } from 'src/app/shared/components/drawtools/TextUtils';
import { dragElement } from 'src/app/shared/components/drawtools/drag';

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
  mapView!: E.MapView; // = createMapView(this.mapViewEl, this.searchBarDiv);
  clickToAddText = false;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  mapCoords: any;
  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();
  constructor(private store: Store<AppState>, private renderer: Renderer2) { }
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
      this.mapView.map.addMany([this.polygonGraphicsLayer, this.textGraphicsLayer]);
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
          let gr = JSON.parse(_g);
          return gr.attributes.geometryType === 'text' ? Graphic.fromJSON(gr) : new Graphic(gr);
        });
        const allExcepttext = graphicsArray.filter((graphic) => graphic.attributes.geometryType != 'text');

        const textGraphicsArray = graphicsArray.filter((graphic) => graphic.attributes.geometryType === 'text');
        this.polygonGraphicsLayer.graphics = allExcepttext;
        this.textGraphicsLayer.graphics = textGraphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
      }
    });
  };

  ngOnInit() {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
    this.detectTextGraphics();
  }

  private detectTextGraphics = () => {
    this.mapView.on('click', (evt: any) => {
      if (this.sketchVM.state === 'active') return;

      this.mapView.hitTest(evt).then((response: any) => {
        if (response.results.length < 1) return;
        const _textGraphics = response.results.filter((res) => res.graphic.layer === this.textGraphicsLayer);

        if (_textGraphics.length > 0) {
          const textGraphic = _textGraphics[0].graphic;
          let graphicCenter = this.mapView.toScreen(textGraphic.geometry);
          const input = createInputWithFrame(
            graphicCenter,
            textGraphic,
            textGraphic.attributes.symbol,
            this.store,
            this.mapView
          );

          this.textGraphicsLayer.remove(textGraphic);
          document.getElementById('textboxes').appendChild(input);
          dragElement(textGraphic.attributes.id, 'parent');
        }

      });
    });

  };
  ngOnDestroy(): void {
    this.graphicsSubcription$.unsubscribe();
  }
}
