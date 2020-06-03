import { updateGraphics, addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { RGBObjectToHex, RGBObjectToHexA } from 'src/app/shared/utils/Colors';
import { take, map } from 'rxjs/operators';
import {
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatecircleFromPoint,
  CreateCircleFromGraphic,
  CreatePolygonFromGraphic,
  CreatePolylineFromGraphic,
} from 'src/app/shared/utils/DrawUtils';
import { LineStyles, FillStyles, CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreateCircleFromPoint } from 'src/app/shared/utils/SketchViewModelUitls';
import { LineProps, FillProps } from './DrawTools.interface';
import { equals } from 'esri/geometry/geometryEngine';
import Graphic from 'esri/Graphic';
import { id } from '../../store/todo';
import { dragElement } from './drag';
import { createInput } from './TextUtils';
import { id } from '../../store/todo';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit {
  @Input() sketchVM: any;
  @Input() mapView: any;
  selectedGraphics: any[] = [];
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

  fontProps: any = {
    size: 12,
    weight: 'normal',
    decoration: 'none',
    style: 'none',
  };
  textProps: any = {
    color: { r: 100, g: 20, b: 5, a: 1 },
    font: this.fontProps,
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
  bold: boolean = true;
  selectedGraphicsGeometry = this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
  @ViewChild('radiusInput') radiusElmRef: ElementRef;
  constructor(private store: Store<AppState>, private renderer: Renderer2) {}
  id = (): string => Math.random().toString(36).substr(2, 9);

  textStyle = {
    type: 'simple-marker',
    style: 'circle',
    size: 6,
    color: [0, 255, 255, 1],
    outline: {
      color: [50, 50, 50, 1],
      width: 1,
    },
  };

  _textSymbol = {
    type: 'text', // autocasts as new TextSymbol()Tex
    color: 'white',
    haloColor: 'black',
    haloSize: '1px',
    text: 'test',
    xoffset: 0,
    yoffset: 0,
    font: this.textProps.font,
  };

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

  private addTextToMap = (targetElement) => {
    const mapX = targetElement.getAttribute('mapX');
    const mapY = targetElement.getAttribute('mapY');
    var textSymbol = {
      type: 'text', // autocasts as new TextSymbol()
      color: 'white',
      haloColor: 'black',
      haloSize: '1px',
      text: targetElement.value,
      xoffset: 3,
      yoffset: 3,
      font: {
        // autocasts as new Font()
        size: 12,
        weight: 'bold',
      },
    };

    const point: any = {
      type: 'point',
      x: mapX,
      y: mapY,
      spatialReference: { wkid: 102100 },
    };
    const gr = new Graphic({
      geometry: point,
      symbol: textSymbol,
      attributes: {
        id: targetElement.id,
        symbol: textSymbol,
        geometryType: 'text',
      },
    });
    this.store.dispatch(addGraphics({ payload: JSON.stringify(gr.toJSON()) }));
    // this.mapView.graphics.add(gr);
    console.log(targetElement, mapX);
  };

  
  private ClickToAddTextbox = () => {
    let clickHandler = this.mapView.on('click', (mapEvt: any) => {
      const input = createInput(this.renderer, mapEvt, false, id()); // this.renderer.createElement('input');
     
      // let windowListener = this.renderer.listen('window', 'click', (e: Event) => {
      //   const ii = document.getElementById(inputId);
      //   if (e.target === ii) {
      //     console.log('do not close');
      //   } else {
      //     if (ii) {
      //       this.renderer.removeChild(textboxes, ii);
      //     }
      //     windowListener = undefined;
      //   }
      // })

      this.renderer.listen(input, 'keyup.enter', (ev: any) => {
        console.log('evt entered ', ev);
        const ii = document.getElementById(ev.target.id);
        this.renderer.removeChild(textboxes, ev.target);
        this.addTextToMap(ev.target);
      });

      const textboxes = document.getElementById('textboxes');
      this.renderer.appendChild(textboxes, input);
      input.focus();
      clickHandler.remove();
      this.ResetDrawControls();
    });
  };
  changeGraphicsStyle = () => {
    if (!this.selectedGraphics) {
      return;
    }
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
            gid: this.id(),
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
        if (this.sketchVM.createCircleFromPoint) {
          createdGraphic = CreatecircleFromPoint(evt, this.radius, this.lineProps, this.fillProps);
        }
        this.store.dispatch(addGraphics({ payload: JSON.stringify(createdGraphic) }));
      }
    });
  };

  initSketchVMUpdate = () => {
    this.sketchVM.on('update', (gg: any) => {
      console.log(gg);

      // this.sketchVM.pointSymbol = this.textStyle;
      if (gg.state === 'cancel' || gg.aborted) {
        this.selectedGraphics = undefined;
        return;
      }
      if (gg.graphics[0].attributes.geometryType === 'text') {
        this.editMapText(gg.graphics[0]);
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
        const graphicsStore$ = this.store.select((state) => state.app.graphics);
        graphicsStore$.pipe(take(1)).subscribe((graphics) => {
          if (graphics.length < 1) return;
          let areEqual = false;
          for (let i = 0; i < graphics.length; i++) {
            const _existing = JSON.parse(graphics[i]);
            if (_updatedGraphics[0].attributes.gid === _existing.attributes.gid) {
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

  editMapText = (graphic: any) => {
    console.log('need to edit this');
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
    }
  }

  startDrawingGraphics = (toolName: string) => {
    this.sketchVM.cancel();
    this.sketchVM.createCircleFromPoint = false;
    this.sketchVM.pointSymbol = this.textStyle;
    this.sketchVM.activePointSymbol = this.textStyle;
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

  changeFontWeight = ($evt) => {
    let _evtValue = $evt.source.value;
    // if (_evtValue === '')
  };
}
