import { updateGraphics, addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef, Output, EventEmitter, OnDestroy, AfterViewInit } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/operators';
import {
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatecircleFromPoint,
  CreateCircleFromGraphic,
  CreatePolygonFromGraphic,
  CreatePolylineFromGraphic,
  CreatePointFromGraphic
} from 'src/app/shared/utils/DrawUtils';
import { CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreateCircleFromPoint } from 'src/app/shared/utils/SketchViewModelUitls';
import { id } from '../../store/todo';
import { dragElement } from './drag';
import { AreGraphicsEqual } from '../../utils/GeometryEngine';
import { TextControlService } from '../../services/TextControl-service';
import { TextControlSelectionService } from '../../services/TextControlSelection-service';
import { Subscription } from 'rxjs';
import Graphic from 'esri/Graphic';
import Point from 'esri/geometry/Point';
import { CreateTextSymbolForLabels } from './DrawToolUtils';
import { HelpService } from '../../services/help/help.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() sketchVM: any;
  @Input() geomLabelsSketchVM: __esri.SketchViewModel;
  @Input() geomLabelsGraphicsLayer: __esri.GraphicsLayer;

  @Input() mapView: any;
  @Input() textGraphicsLayer: any;
  @Input() polygonGraphicsLayer: __esri.GraphicsLayer;
  @Output() selectedTextGraphicsChanged: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('radiusInput') radiusElmRef: ElementRef;
  @ViewChild('textcontrols') textcontrolsElmRef: any;
  @ViewChild('pointcontrol') pointControlElmRef: any;
  @ViewChild('fillstyle') fillStyleElmRef: any;
  @ViewChild('linestyle') lineStyleElmRef: any;
  id = (): string => Math.random().toString(36).substr(2, 9);

  faQuestionCircle = faQuestionCircle;

  selectedGraphics: any[] = [];
  selectedTextGraphics: any = [];
  selectedLabelsGraphics: any = [];

  selectedInputBox: any;
  textSubscription: Subscription;
  radius: number;
  drawingMode: string = 'click';
  drawingTool: string = '';
  clickToAddTextboxHandler: any;
  private graphicsSubcription$: any;
  selectedGraphicsGeometry = this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';

  readonly graphics$ = this.store.select((state) => state.app.graphics);

  constructor(
    private store: Store<AppState>,
    private textService: TextControlService,
    private TextSelectionService: TextControlSelectionService,
    private helpService: HelpService
  ) {}

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

      this.syncLabelsToGeometry();
    });
  };

  changeLabelsColor = (e: any) => {
    const txt = this.selectedLabelsGraphics[0].graphic;
    const _color = e;
    _color.a = _color.a * 100;
    txt.symbol.color = _color;
    txt.attributes.symbol.color = _color;

    this.geomLabelsGraphicsLayer.add(txt);

    const _input = document.getElementById(txt.attributes.id);
    this.selectedInputBox.CleanupListenerForInputFrame(_input);
    this.selectedLabelsGraphics = [];
  };

  private ClickToAddTextbox = () => {
    if (this.clickToAddTextboxHandler) {
      this.clickToAddTextboxHandler = undefined;
    }
    this.clickToAddTextboxHandler = this.mapView.on('click', (mapEvt: any) => {
      const textboxes = document.getElementById('textboxes') as any;
      const input = this.textService.createInput(mapEvt, id(), this.store, this.textcontrolsElmRef.textProps);
      textboxes.appendChild(input);
      input.focus();
      this.clickToAddTextboxHandler.remove();
      this.ResetDrawControls();
    });
  };

  toggleLabels() {
    this.geomLabelsGraphicsLayer.visible = !this.geomLabelsGraphicsLayer.visible;
  }

  cleanupSelection = () => {
    this.selectedLabelsGraphics = [];
    this.selectedTextGraphics = [];
  };

  private CreateDraggableTextbox = (textGraphic: any, graphicsLayer: __esri.GraphicsLayer) => {
    const graphicCenter = this.mapView.toScreen(textGraphic.geometry);
    this.selectedInputBox = this.TextSelectionService.createInputWithFrame(
      graphicCenter,
      textGraphic,
      textGraphic.attributes.symbol,
      this.store,
      this.mapView,
      graphicsLayer,
      this.cleanupSelection
    );

    graphicsLayer.remove(textGraphic);
    (document.getElementById('textboxes') as any).appendChild((this.selectedInputBox as any).frame);
    dragElement(textGraphic.attributes.id, 'parent');
  };

  private detectTextGraphics = () => {
    this.mapView.on('click', (evt: any) => {
      if (this.sketchVM.state === 'active') return;

      this.mapView.hitTest(evt).then((response: any) => {
        if (response.results.length < 1) {
          if (this.selectedGraphics.length > 0) {
            this.selectedTextGraphics = [];
          }
          return;
        }

        this.selectedTextGraphics = response.results.filter((res: any) => res.graphic.layer === this.textGraphicsLayer);

        this.selectedLabelsGraphics = response.results.filter(
          (res: any) => res.graphic.layer === this.geomLabelsGraphicsLayer
        );

        if (this.selectedLabelsGraphics.length > 0) {
          this.CreateDraggableTextbox(this.selectedLabelsGraphics[0].graphic, this.geomLabelsGraphicsLayer);
        }

        if (this.selectedTextGraphics.length > 0) {
          const textGraphic = this.selectedTextGraphics[0].graphic;
          const extent = this.mapView.extent.clone().expand(0.85);
          const isPointInside = extent.contains(textGraphic.geometry);
          if (!isPointInside) {
            // @todo maake it so that the textbox just pans the map just enough to fit it in frame
            this.mapView.goTo(textGraphic).then(() => {
              this.CreateDraggableTextbox(textGraphic, this.textGraphicsLayer);
            });
          } else {
            this.CreateDraggableTextbox(textGraphic, this.textGraphicsLayer);
          }
        }
      });
    });
  };

  onGraphicsStyleChange = () => {
    this.changeGraphicsStyle();
  };

  changeGraphicsStyle = () => {
    if (!this.selectedGraphics) return;

    if (this.selectedGraphics.length > 0) {
      const _geomType = this.selectedGraphics[0].attributes.geometryType;
      let geomJSON;
      if (_geomType === 'circle') {
        geomJSON = CreateCircleFromGraphic(
          this.selectedGraphics[0],
          this.lineStyleElmRef.lineProps,
          this.fillStyleElmRef.fillProps
        );
      }
      if (['polygon', 'polyline'].indexOf(_geomType) > -1) {
      }
      if (_geomType === 'polygon') {
        geomJSON = CreatePolygonFromGraphic(
          this.selectedGraphics[0],
          this.lineStyleElmRef.lineProps,
          this.fillStyleElmRef.fillProps
        );
      } else if (_geomType === 'polyline') {
        geomJSON = CreatePolylineFromGraphic(this.selectedGraphics[0], this.lineStyleElmRef.lineProps);
      }

      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([geomJSON]) }));
      this.sketchVM.cancel();
    }
  };

  initSketchVMCreate = () => {
    this.sketchVM.on(['create'], (evt: any) => {
      if (evt.state === 'complete') {
        let createdGraphic;
        if (evt.tool === 'circle') {
          createdGraphic = CreateCircleFromEvent(evt, this.lineStyleElmRef.lineProps, this.fillStyleElmRef.fillProps);
        }
        if (['polygon', 'polyline'].indexOf(evt.tool) > -1) {
          createdGraphic = evt.graphic;
          createdGraphic.attributes = {
            id: this.id(),
            symbol: createdGraphic.symbol,
            geometryType: evt.tool,
            radius: 0,
          };
          if (evt.tool === 'polygon') {
            createdGraphic = CreatePolygonFromGraphic(
              createdGraphic,
              this.lineStyleElmRef.lineProps,
              this.fillStyleElmRef.fillProps
            );
          } else {
            createdGraphic = CreatePolylineFromGraphic(createdGraphic, this.lineStyleElmRef.lineProps);
          }
        }
        if (evt.tool === 'point') {
          createdGraphic = CreatePointFromGraphic(evt.graphic, this.pointControlElmRef.markerProps);
        }
        if (this.sketchVM.createCircleFromPoint) {
          createdGraphic = CreatecircleFromPoint(
            evt,
            this.radius,
            this.lineStyleElmRef.lineProps,
            this.fillStyleElmRef.fillProps
          );
        }

        this.store.dispatch(addGraphics({ graphics: [JSON.stringify(createdGraphic)] }));
      }
    });
  };

  initSketchVMUpdate = () => {
    this.sketchVM.on('update', (gg: any) => {
      if (gg.state === 'cancel' || gg.aborted) {
        this.selectedGraphics = [];
        return;
      }
      if (gg.graphics[0].attributes.geometryType === 'text') {
        this.sketchVM.cancel();
        this.sketchVM.complete();
        return;
      }
      if (gg.state === 'start' || gg.state === 'active') {
        const _temp = gg.graphics[0].clone();
        const p = {
          type: 'simple-marker', // autocasts as new SimpleMarkerSymbol()
          style: 'square',
          color: 'transparent',
          size: _temp.attributes.symbol.size, // pixels
          outline: {
            color: [255, 0, 255],
            width: 3,
          },
        };
        this.selectedGraphics = gg.graphics;
        dragElement('mydiv', 'parent');
        this.selectedGraphicsChanged();
      } else if (gg.state === 'complete') {
        this.mapView.graphics.removeAll();
        let _updatedGraphics = gg.graphics;
        if (_updatedGraphics[0].attributes.geometryType === 'circle') {
          _updatedGraphics = [
            CreateCircleFromGraphic(gg.graphics[0], this.lineStyleElmRef.lineProps, this.fillStyleElmRef.fillProps),
          ];
        }
        if (_updatedGraphics[0].attributes.geometryType === 'polygon') {
          _updatedGraphics = [
            CreatePolygonFromGraphic(gg.graphics[0], this.lineStyleElmRef.lineProps, this.fillStyleElmRef.fillProps),
          ];
        }
        if (_updatedGraphics[0].attributes.geometryType === 'polyline') {
          _updatedGraphics = [CreatePolylineFromGraphic(gg.graphics[0], this.lineStyleElmRef.lineProps)];
        }
        if (_updatedGraphics[0].attributes.geometryType === 'point') {
          _updatedGraphics = [CreatePointFromGraphic(gg.graphics[0], this.pointControlElmRef.markerProps)];
        }
        const graphicsStore$ = this.store.select((state) => state.app.graphics);
        graphicsStore$.pipe(take(1)).subscribe((graphics) => {
          if (graphics.length < 1) return;
          let areEqual = false;
          for (let i = 0; i < graphics.length; i++) {
            const _existing = JSON.parse(graphics[i]);
            if (_updatedGraphics[0].attributes.id === _existing.attributes.id) {
              areEqual = AreGraphicsEqual(_existing, _updatedGraphics[0]);
              break;
            }
          }
          if (!areEqual) {
            this.store.dispatch(updateGraphics({ graphics: JSON.stringify(_updatedGraphics) }));
          }
          this.selectedGraphics = [];
        });
      }
    });
  };

  updateCircleRadius = () => {
    if (this.selectedGraphics.length > 0) {
      let circleJSON = this.selectedGraphics[0].toJSON();
      circleJSON = CreatePolygonGraphicWithSymbology(
        circleJSON,
        this.lineStyleElmRef.lineProps,
        this.fillStyleElmRef.fillProps
      );
      circleJSON.toJSON = undefined;
      circleJSON.geometry = CreateCircleFromPoint(this.selectedGraphics[0].geometry.centroid, this.radius).asJSON();
      circleJSON.attributes.radius = circleJSON.geometry.radius;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
      this.sketchVM.cancel();
      this.radiusElmRef.nativeElement.blur();
      this.selectedGraphicsGeometry = '';
      this.selectedGraphics = [];
    }
  };

  radiusChangedEnter = () => {
    this.updateCircleRadius();
  };

  selectedGraphicsChanged = () => {
    if (this.selectedGraphics.length === 1) {
      const _g = this.selectedGraphics[0];
      this.selectedGraphicsGeometry =
        this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
      if (this.selectedGraphicsGeometry === 'circle') {
        this.radius = _g.attributes.radius;
        this.lineStyleElmRef.lineProps.style = _g.attributes.symbol.outline.style;
        const _graphicsOutlineColor = this.selectedGraphics[0].attributes.symbol.outline.color;
        this.lineStyleElmRef.lineProps.color = _graphicsOutlineColor;

        this.lineStyleElmRef.lineProps.width = _g.attributes.symbol.outline.width;
        this.lineStyleElmRef.lineProps.opacity = _graphicsOutlineColor.a * 100;
        // this.setLineSVGStyle();
      } else {
      }
    }
  };

  ResetDrawControls = () => {
    this.drawingTool = '';
    this.drawingMode = '';
  };

  clearDrawTools = () => {
    this.sketchVM.cancel();
    if (this.clickToAddTextboxHandler) {
      console.log(this.clickToAddTextboxHandler);
      this.clickToAddTextboxHandler = undefined;
    }
    this.ResetDrawControls();
  };

  ngOnInit(): void {
    if (this.sketchVM) {
      this.sketchVM.on('update', (e: any) => {
        if (e.state === 'complete') {
          this.ResetDrawControls();
        }
      });
      this.sketchVM.on('create', (e: any) => {
        if (e.state === 'complete') {
          this.ResetDrawControls();
        }
      });
      this.initSketchVMCreate();
      this.initSketchVMUpdate();
      this.detectTextGraphics();
    }
    this.textSubscription = this.textService.textGraphicState$.subscribe((t) => {
      console.log(t);
      if (t === null) {
        this.selectedTextGraphics = [];
        this.selectedLabelsGraphics = [];
        this.clearDrawTools();
      }
    });
  }

  ngAfterViewInit(): void {
    this.graphicsSubcription$ = this.listenToGraphicsStore();
  }

  startDrawingGraphics = (toolName: string, initial: boolean) => {
    this.sketchVM.cancel();
    this.sketchVM.createCircleFromPoint = false;
    this.sketchVM.pointSymbol = this.pointControlElmRef.markerProps;
    // this.sketchVM.activePointSymbol = this.textcontrolsElmRef.textStyle;
    if (toolName === 'circle' && initial) {
      this.drawingMode = 'freehand';
    }
    if (['circle', 'polygon', 'polyline'].indexOf(toolName) > -1) {
      this.sketchVM.polylineSymbol = CreatePolylineSymbol(this.lineStyleElmRef.lineProps);
    }
    if (['circle', 'polygon'].indexOf(toolName) > -1) {
      const polygonSymbol = CreatePolygonSymbol(this.lineStyleElmRef.lineProps, this.fillStyleElmRef.fillProps);
      this.sketchVM.polygonSymbol = polygonSymbol;
      if (toolName === 'circle') {
        if (this.drawingMode === 'click') {
          if (this.radius && this.radius > 0) {
            this.sketchVM.createCircleFromPoint = true;
            this.sketchVM.create('point');
            return;
          }
        }
      }
    }
    if (toolName === 'text') {
      console.log(this.mapView);
      this.ClickToAddTextbox();
    } else {
      this.sketchVM.create(toolName, { mode: this.drawingMode, type: toolName });
    }
  };

  radiusBlurred = () => {
    if (this.selectedGraphics) {
      this.updateCircleRadius();
    }
    if (this.radius > 0 && this.drawingTool === 'circle') {
      this.startDrawingGraphics('circle', false);
    }
  };

  changeDrawingMode = () => {
    console.log(this.drawingMode);
    if (this.drawingTool !== '') {
      this.startDrawingGraphics(this.drawingTool, false);
    }
  };

  ngOnDestroy() {
    this.textSubscription.unsubscribe();
    this.graphicsSubcription$.unsubscribe();
  }

  syncLabelsToGeometry = () => {
    const labels = [];

    if (this.polygonGraphicsLayer.graphics.length < 1) {
      this.geomLabelsGraphicsLayer.removeAll();
      return;
    }

    this.polygonGraphicsLayer.graphics.forEach((parent: Graphic) => {
      let anchorPt: Point;
      if (!['polygon', 'polyline'].includes(parent.geometry.type)) return;

      if (parent.geometry.type === 'polygon') {
        anchorPt = (parent.geometry as any).centroid;
      } else {
        const firstPt = (parent.geometry as any).paths[0][0];
        anchorPt = new Point({
          x: firstPt[0],
          y: firstPt[1],
          spatialReference: this.mapView.spatialReference,
        });
      }
      // need to check if the user has deleted the graphic themselves
      // check if the graphics with that parent id already exists
      const specificLabels = this.geomLabelsGraphicsLayer.graphics.filter(
        (gg) => gg.attributes.parentId === parent.attributes.id
      );

      if (specificLabels.length < 1) {
        const _symbol = CreateTextSymbolForLabels(parent);
        const a = this.textService.creatGeomLabelGraphic(anchorPt, _symbol, parent);
        labels.push(a);
      } else {
        // check if it was previously deleted
        const _specific = specificLabels.getItemAt(0);
        if (typeof _specific.geometry === 'undefined') {
          labels.push(_specific);
        } else {
          let a = this.textService.creatGeomLabelGraphic(anchorPt, _specific.attributes.symbol, parent);
          console.log((a.symbol as any).text, (_specific.symbol as any).text);
          if ((a.symbol as any).text === (_specific.symbol as any).text) {
            console.log('***');
            labels.push(_specific);
          } else {
            labels.push(a);
          }
        }
      }
    });

    this.geomLabelsGraphicsLayer.removeAll();
    this.geomLabelsGraphicsLayer.addMany(labels);
  };

  openHelp(): void {
    this.helpService.openHelp.emit({ header: 'Draw', itemName: 'draw' });
  }
}
