import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import SketchViewModel from "arcgis-js-api/widgets/Sketch/SketchViewModel";
import createMapView from "./CreateMapView";
import { SetupSketchViewModel } from "./SketchViewModelUitls";
import { CreatePolygonGraphicsLayer } from "./CreateGraphicsLayer";
import E = __esri;
import { redPolygon } from "./Renderers";
import { Store } from "@ngrx/store";
import { addGraphics } from "src/app/shared/store/graphics.actions";
import { GraphicsState } from "src/app/shared/store/graphics.state";
import Graphic from "arcgis-js-api/Graphic";
import { updateGraphics } from '../../shared/store/graphics.actions';

@Component({
  selector: "app-esrimap",
  templateUrl: "./esrimap.component.html",
  styleUrls: ["./esrimap.component.scss"]
})
export class EsrimapComponent implements OnInit {
  @ViewChild("mapViewNode", { static: true }) private mapViewEl: ElementRef;
  @ViewChild("graphicsStore", { static: true })
  private graphicsStoreEl: ElementRef;
  mapView: E.MapView;
  sketchVM: E.SketchViewModel = new SketchViewModel();
  selectedGraphics: any[];
  readonly graphics$ = this.store.select(state => state.app.graphics);
  polygonGraphicsLayer = CreatePolygonGraphicsLayer();
  id = (): string => Math.random().toString(36).substr(2, 9);
  
  constructor(private store: Store<GraphicsState>) {}

  private initializeMap = async () => {
    try {
      this.mapView = createMapView(this.mapViewEl);
      this.mapView.map.add(this.polygonGraphicsLayer);
      this.sketchVM = SetupSketchViewModel(
        this.polygonGraphicsLayer,
        this.mapView
      );
      this.sketchVM.on(["create"], evt => {
        if (evt.state === "complete") {
          console.log(evt);
          evt.graphic.symbol = redPolygon.symbol;
          const _g = evt.graphic;
          evt.graphic.attributes = {gid: this.id()};
          console.log(JSON.stringify(_g.toJSON()));
          console.log(evt);
          // this.polygonGraphicsLayer.add(Graphic.fromJSON(evt.graphic.toJSON()))
          // this.store.dispatch({type: 'ADD'});
          this.store.dispatch(
            addGraphics({ payload: JSON.stringify(_g.toJSON()) })
          );
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

      this.sketchVM.on('update', gg => {
        console.log(gg)
        if (gg.state === 'start' || gg.state === 'active') {
          this.selectedGraphics = gg.graphics;
        } else if (gg.state === 'cancel') {
          this.selectedGraphics = undefined;
        } else if (gg.state === 'complete'){
          // send update to the store once the editing is complete
          this.store.dispatch(updateGraphics({graphics: JSON.stringify(gg.graphics)}))
        }
        console.log(this.selectedGraphics, gg, ' enable editing for this');

      

      });


    } catch (error) {
      console.error("Map load error ", error);
    }
  };

  private listenToGraphicsStore = () => {
    this.graphics$.subscribe(g => {
      if (g.length > 0) {
        // console.log(g)
        const graphicsArray = g.map(_g => {
          const __g = JSON.parse(_g);
          return Graphic.fromJSON(__g);
        })
        
        this.polygonGraphicsLayer.graphics = graphicsArray;
      } else {
        this.polygonGraphicsLayer.removeAll();
      }
    });

    
  };



  startDrawing = (tool: string = "polygon") => {
    this.sketchVM.create(tool);
  };

  undo = () => {};

  redo = () => {
    this.sketchVM.redo();
  };

  ngOnInit() {
    this.initializeMap();
    this.listenToGraphicsStore();
  }
}
