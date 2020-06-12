import { updateGraphics, addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { RGBObjectToHex, RGBObjectToHexA } from 'src/app/shared/utils/Colors';
import { take } from 'rxjs/operators';
import {
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatecircleFromPoint,
  CreateCircleFromGraphic,
  CreatePolygonFromGraphic,
  CreatePolylineFromGraphic,
  CreatePointFromGraphic,
} from 'src/app/shared/utils/DrawUtils';
import { LineStyles, FillStyles, CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreateCircleFromPoint } from 'src/app/shared/utils/SketchViewModelUitls';
import { LineProps, FillProps } from './DrawTools.interface';
import { equals } from 'esri/geometry/geometryEngine';
import { id } from '../../store/todo';
import { dragElement } from './drag';
import { createInput, createInputWithFrame } from './TextUtils';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit {
  @Input() sketchVM: any;
  @Input() mapView: any;
  @Input() textGraphicsLayer: any;
  @ViewChild('radiusInput') radiusElmRef: ElementRef;
  @ViewChild('textcontrols') textcontrolsElmRef: any;
  @ViewChild('pointcontrol') pointControlElmRef: any;
  id = (): string => Math.random().toString(36).substr(2, 9);

  selectedGraphics: any[] = [];
  selectedTextGraphics: any = [];

  lineProps: LineProps = {
    style: 'solid',
    color: { r: 100, g: 20, b: 5, a: 1 },
    opacity: 100,
    width: 2,
  };
  fillProps: FillProps = {
    color: { r: 0, g: 0, b: 0, a: 0.5 },
    style: 'solid',
    opacity: 50,
  };

  lineSvgStyle = {
    'width.px': 150,
    fill: RGBObjectToHex(this.lineProps.color),
  };
  fillSvgStyle = {
    'width.px': 150,
    fill: RGBObjectToHexA(this.fillProps.color),
  };
  lineStyles = LineStyles;
  fillStyles = FillStyles;
  radius: number;
  drawingMode: string = 'click';
  drawingTool: string = '';
  clickToAddTextboxHandler: any;

  selectedGraphicsGeometry = this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';

  constructor(private store: Store<AppState>) {}

  setLineSVGStyle = () => {
    this.lineSvgStyle.fill = RGBObjectToHex(this.lineProps.color);
  };
  setFillSvgStyle = () => {
    this.fillSvgStyle.fill = RGBObjectToHexA(this.fillProps.color);
  };
  changeLineColor = (colorInfo: any) => {
    this.lineProps.color = colorInfo;
    this.lineProps.opacity = colorInfo.a * 100;
    this.setLineSVGStyle();
    this.changeGraphicsStyle();
  };

  changeFillColor = (colorInfo: any) => {
    this.fillProps.color = colorInfo;
    this.fillProps.opacity = colorInfo.a * 100;
    this.setFillSvgStyle();
    this.changeGraphicsStyle();
  };

  private ClickToAddTextbox = () => {
    if (this.clickToAddTextboxHandler) {
      this.clickToAddTextboxHandler = undefined;
    }
    this.clickToAddTextboxHandler = this.mapView.on('click', (mapEvt: any) => {
      const textboxes = document.getElementById('textboxes');
      const input = createInput(mapEvt, id(), this.store, this.textcontrolsElmRef.textProps);
      textboxes.appendChild(input);
      input.focus();
      this.clickToAddTextboxHandler.remove();
      this.ResetDrawControls();
    });
  };
  private CreateDraggableTextbox = (textGraphic) => {
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
  };
  private detectTextGraphics = () => {
    this.mapView.on('click', (evt: any) => {
      if (this.sketchVM.state === 'active') return;

      this.mapView.hitTest(evt).then((response: any) => {
        if (response.results.length < 1) {
          this.selectedTextGraphics = [];
          return;
        }

        this.selectedTextGraphics = response.results.filter((res) => res.graphic.layer === this.textGraphicsLayer);
        if (this.selectedTextGraphics.length > 0) {
          const textGraphic = this.selectedTextGraphics[0].graphic;
          const extent = this.mapView.extent.clone().expand(0.85);
          const isPointInside = extent.contains(textGraphic.geometry);
          if (!isPointInside) {
            // @todo maake it so that the textbox just pans the map just enough to fit it in frame
            this.mapView.goTo(textGraphic).then(() => {
              this.CreateDraggableTextbox(textGraphic);
            });
          } else {
            this.CreateDraggableTextbox(textGraphic);
          }
        }
      });
    });
  };

  changeGraphicsStyle = () => {
    if (!this.selectedGraphics) return;

    if (this.selectedGraphics.length > 0) {
      const _geomType = this.selectedGraphics[0].attributes.geometryType;
      let geomJSON;
      if (_geomType === 'circle') {
        geomJSON = CreateCircleFromGraphic(this.selectedGraphics[0], this.lineProps, this.fillProps);
      }
      if (['polygon', 'polyline'].indexOf(_geomType) > -1) {
      }
      if (_geomType === 'polygon') {
        geomJSON = CreatePolygonFromGraphic(this.selectedGraphics[0], this.lineProps, this.fillProps);
      } else if (_geomType === 'polyline') {
        geomJSON = CreatePolylineFromGraphic(this.selectedGraphics[0], this.lineProps);
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
          createdGraphic = CreateCircleFromEvent(evt, this.lineProps, this.fillProps);
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
            createdGraphic = CreatePolygonFromGraphic(createdGraphic, this.lineProps, this.fillProps);
          } else {
            createdGraphic = CreatePolylineFromGraphic(createdGraphic, this.lineProps);
          }
        }
        if (evt.tool === 'point') {
          createdGraphic = CreatePointFromGraphic(evt.graphic, this.pointControlElmRef.markerProps);
        }
        if (this.sketchVM.createCircleFromPoint) {
          createdGraphic = CreatecircleFromPoint(evt, this.radius, this.lineProps, this.fillProps);
        }
        this.store.dispatch(addGraphics({ graphics: JSON.stringify(createdGraphic) }));
      }
    });
  };

  initSketchVMUpdate = () => {
    this.sketchVM.on('update', (gg: any) => {
      console.log(gg);
      if (gg.state === 'cancel' || gg.aborted) {
        this.selectedGraphics = undefined;
        return;
      }
      if (gg.graphics[0].attributes.geometryType === 'text') {
        // this.editMapText(gg.graphics[0]);
        // this.selectedGraphics = gg.graphics[0];
        this.sketchVM.cancel();
        this.sketchVM.complete();
        return;
      }
      if (gg.state === 'start' || gg.state === 'active') {
        this.mapView.graphics.removeAll();
        let _temp = gg.graphics[0].clone();
        _temp.symbol = _temp.attributes.symbol;
        this.mapView.graphics.add(_temp);
        this.selectedGraphics = gg.graphics;
        dragElement('mydiv', 'parent');
        this.selectedGraphicsChanged();
      } else if (gg.state === 'complete') {
        this.mapView.graphics.removeAll();
        let _updatedGraphics = gg.graphics;
        if (_updatedGraphics[0].attributes.geometryType === 'circle') {
          _updatedGraphics = [CreateCircleFromGraphic(gg.graphics[0], this.lineProps, this.fillProps)];
        }
        if (_updatedGraphics[0].attributes.geometryType === 'polygon') {
          _updatedGraphics = [CreatePolygonFromGraphic(gg.graphics[0], this.lineProps, this.fillProps)];
        }
        if (_updatedGraphics[0].attributes.geometryType === 'polyline') {
          _updatedGraphics = [CreatePolylineFromGraphic(gg.graphics[0], this.lineProps)];
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
              areEqual = equals(_updatedGraphics[0].geometry, _existing.geometry);
              break;
            }
          }
          if (!areEqual) {
            this.store.dispatch(updateGraphics({ graphics: JSON.stringify(_updatedGraphics) }));
          }
          this.selectedGraphics = undefined;
        });
      }
    });
  };

  updateCircleRadius = () => {
    if (this.selectedGraphics.length > 0) {
      let circleJSON = this.selectedGraphics[0].toJSON();
      circleJSON = CreatePolygonGraphicWithSymbology(circleJSON, this.lineProps, this.fillProps);
      circleJSON.toJSON = undefined;
      circleJSON.geometry = CreateCircleFromPoint(this.selectedGraphics[0].geometry.centroid, this.radius).asJSON();
      circleJSON.attributes.radius = circleJSON.geometry.radius;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
      this.sketchVM.cancel();
      this.radiusElmRef.nativeElement.blur();
    }
  };
  radiusChangedEnter = ($event: any) => {
    this.updateCircleRadius();
  };

  selectedGraphicsChanged = () => {
    if (this.selectedGraphics.length === 1) {
      const _g = this.selectedGraphics[0];
      this.selectedGraphicsGeometry =
        this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
      if (this.selectedGraphicsGeometry === 'circle') {
        this.radius = _g.attributes.radius;
        this.lineProps.style = _g.attributes.symbol.outline.style;
        const _graphicsOutlineColor = this.selectedGraphics[0].attributes.symbol.outline.color;
        this.lineProps.color = _graphicsOutlineColor;

        this.lineProps.width = _g.attributes.symbol.outline.width;
        this.lineProps.opacity = _graphicsOutlineColor.a * 100;
        this.setLineSVGStyle();
      } else {
      }
    }
  };
  ResetDrawControls = () => {
    this.drawingTool = '';
    this.drawingMode = '';
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
  }

  startDrawingGraphics = (toolName: string) => {
    this.sketchVM.cancel();
    this.sketchVM.createCircleFromPoint = false;
    this.sketchVM.pointSymbol = this.pointControlElmRef.markerProps;
    // this.sketchVM.activePointSymbol = this.textcontrolsElmRef.textStyle;
    if (toolName === 'circle' && this.drawingMode === 'hybrid') {
      this.drawingMode = 'click';
    }
    if (['circle', 'polygon', 'polyline'].indexOf(toolName) > -1) {
      this.sketchVM.polylineSymbol = CreatePolylineSymbol(this.lineProps);
    }
    if (['circle', 'polygon'].indexOf(toolName) > -1) {
      const polygonSymbol = CreatePolygonSymbol(this.lineProps, this.fillProps);
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

  radiusBlurred = ($evt) => {
    if (this.selectedGraphics) {
      this.updateCircleRadius();
    }
    if (this.radius > 0 && this.drawingTool === 'circle') {
      this.startDrawingGraphics('circle');
    }
  };
  changeDrawingMode = ($evt) => {
    if (this.drawingTool !== '') {
      this.startDrawingGraphics(this.drawingTool);
    }
  };
}
