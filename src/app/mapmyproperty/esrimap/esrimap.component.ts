import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import SketchViewModel from 'arcgis-js-api/widgets/Sketch/SketchViewModel';
import createMapView from './CreateMapView';
import { SetupSketchViewModel } from './SketchViewModelUitls';
import {CreatePolygonGraphicsLayer} from './CreateGraphicsLayer';
import E = __esri;
import { redPolygon } from './Renderers';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit {
  @ViewChild('mapViewNode', {static: true}) private mapViewEl: ElementRef;
  @ViewChild('graphicsStore', {static: true}) private graphicsStoreEl: ElementRef;
  mapView: any;
  sketchVM: E.SketchViewModel = new SketchViewModel();
  du = "ttttttt";
  constructor(private store: Store) { }

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl);
      const polygonGraphicsLayer = CreatePolygonGraphicsLayer();
      this.mapView.map.add(polygonGraphicsLayer);
      this.sketchVM = SetupSketchViewModel(polygonGraphicsLayer, this.mapView);
      this.sketchVM.on(['create'], (evt) => {
        if (evt.state === 'complete') {
          console.log(evt);
          evt.graphic.symbol = redPolygon.symbol;
          this.store.dispatch({type: 'ADD'});
          polygonGraphicsLayer.add(evt.graphic);
        }
      });
    } catch (error) {
      console.error('Map load error ', error);
    }
  }


  startDrawing = (tool: string = 'polygon') => {
    this.sketchVM.create(tool);
  }

  undo = () => {

  }

  redo = () => {
    this.sketchVM.redo();
  }

  ngOnInit() {
    this.initializeMap();
  }

}
