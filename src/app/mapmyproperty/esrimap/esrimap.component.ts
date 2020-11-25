
import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer } from 'src/app/shared/utils/CreateGraphicsLayer';
import { GraphicsStoreComponent } from 'src/app/shared/store/GraphicsStore.component';
import { SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { createMapView } from 'src/app/shared/utils/CreateMapView';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

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

  mapView!: __esri.MapView;
  clickToAddText = false;
  sketchVM: any = new SketchViewModel();
  selectedGraphics!: any[] | undefined;
  sidebarVisible = window.innerWidth > 640;

  mapCoords: any;
  geomLabelsSketchVM: __esri.SketchViewModel = new SketchViewModel();
  geomLabelsGraphicsLayer: __esri.GraphicsLayer = new GraphicsLayer({ id: "geomlabels" });
  polygonGraphicsLayer: GraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();

  constructor() { }
  @HostListener('keydown.control.z') undoFromKeyboard() {
    this.graphicsStoreEl.undo();
  }

  @HostListener('keydown.control.y') redoFromKeyboard() {
    this.graphicsStoreEl.redo();
  }
  @HostListener('document:keydown.delete') deleteFromKeyboard(){
    this.graphicsStoreEl.delete();
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
      const p = {
        type: 'simple-marker',
        style: 'circle',
        color: 'cyan',
        size: '20px',
        outline: {
          color: [0, 0, 0],
          width: 1
        }
      };
      this.sketchVM.updatePointSymbol = p;
      this.sketchVM.activePointSymbol = p;
      this.showMapCoordinates();
      this.mapView.on('layerview-create-error', (ee) => {
        let error = new Error();
        error.message = ee.error.message;
        error.name = ee.error.name;
        throw error;
      });
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  ngOnInit() {
    this.initializeMap();
  }
}
