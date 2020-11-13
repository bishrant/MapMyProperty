
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer } from 'src/app/shared/utils/CreateGraphicsLayer';
import Graphic from 'esri/Graphic';
import { AppState } from 'src/app/shared/store/graphics.state';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { Store } from '@ngrx/store';
import { createMapView } from 'src/app/shared/utils/CreateMapView';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import { TextControlService } from 'src/app/shared/services/TextControl-service';
import { createAreaLabels } from 'src/app/shared/components/drawtools/GeometryEngineUtils';
import { Point } from 'esri/geometry';


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
  selectedTextGraphics: any[] = [];
  mapCoords: any;

  geomLabelsSketchVM: __esri.SketchViewModel = new SketchViewModel();
  geomLabelsGraphicsLayer: __esri.GraphicsLayer = new GraphicsLayer({ id: "geomlabels" });


  readonly graphics$ = this.store.select((state) => state.app.graphics);
  polygonGraphicsLayer: GraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();
  constructor(private store: Store<AppState>, private TextService: TextControlService) { }
  @HostListener('keydown.control.z') undoFromKeyboard() {
    this.graphicsStoreEl.undo();
  }

  @HostListener('keydown.control.y') redoFromKeyboard() {
    this.graphicsStoreEl.redo();
  }

  textGraphicsChanged = ($event: any) => {
    this.selectedTextGraphics = $event;
    console.log('text graphics selection changed ', $event)
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

      this.mapView.on('pointer-move', (evt: any) => {
        this.showCoordinates(this.mapView.toMap({ x: evt.x, y: evt.y }));
      });
    }
  };

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      this.mapView.map.addMany([this.polygonGraphicsLayer, this.textGraphicsLayer, this.geomLabelsGraphicsLayer]);
      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);

      // this.geomLabelsSketchVM = SetupSketchViewModel(this.geomLabelsGraphicsLayer, this.mapView);

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
      this.mapView.on('layerview-create-error', (ee) => {
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

      console.log(g);

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

      this.syncLabelsToGeometry();

    });
  };

  ngOnInit() {
    this.initializeMap();
    this.graphicsSubcription$ = this.listenToGraphicsStore();
  }

  ngOnDestroy(): void {
    this.graphicsSubcription$.unsubscribe();
  }


  syncLabelsToGeometry = () => {
    const labels = [];
    this.polygonGraphicsLayer.graphics.forEach((parent: Graphic) => {
      let anchorPt: Point;
      const parentType = parent.geometry.type;
      if (['polygon', 'polyline'].includes(parent.geometry.type)) {
        if (parent.geometry.type === 'polygon') {
          anchorPt = (parent.geometry as any).centroid
        } else {
          const firstPt = (parent.geometry as any).paths[0][0];
          anchorPt = new Point({
            x: firstPt[0],
            y: firstPt[1],
            spatialReference: this.mapView.spatialReference
          });
        }
        // need to check if the user has deleted the graphic themselves
        // check if the graphics with that parent id already exists
        const specificLabel = [];
        this.geomLabelsGraphicsLayer.graphics.forEach((graphic: Graphic) => {
          if (graphic.attributes.parentId === parent.attributes.id) {
            specificLabel.push(graphic);
          }
        });
        if (specificLabel.length >= 1) {
          // graphic exists
          const _g = specificLabel[0]
          // check if it was previously deleted
          if (typeof _g.geometry === 'undefined') {
            labels.push(specificLabel[0]);
          } else {
            let a = this.TextService.creatGeomLabelGraphic(anchorPt, specificLabel[0].attributes.symbol, parent);
            labels.push(a);
          }

        } else {
          const _symbol = {
            type: "text",
            color: (parent.geometry.type === 'polyline') ? parent.attributes.symbol.color: parent.attributes.symbol.outline.color,
            text: '0',
            xoffset: 3,
            yoffset: 3,
            font: {
              decoration: "none",
              family: "Arial",
              size: "18px",
              style: "normal",
              weight: "normal",
            }
          }
          let a = this.TextService.creatGeomLabelGraphic(anchorPt, _symbol, parent);
          labels.push(a);
        }


      }

    });
    console.log(labels);
    this.geomLabelsGraphicsLayer.removeAll();
    this.geomLabelsGraphicsLayer.addMany(labels);
  }
}
