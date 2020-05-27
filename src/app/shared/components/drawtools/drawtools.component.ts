import { updateGraphics, addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { RGBObjectToHex } from 'src/app/shared/utils/Colors';
import {
  CreatePolygonGraphicWithSymbology,
  CreateCircleFromEvent,
  CreatecircleFromPoint,
  CreateCircleFromGraphic,
} from 'src/app/shared/utils/DrawUtils';
import { LineStyles, FillStyles, CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreateCircleFromPoint, CreateCircleWithGeometry } from 'src/app/shared/utils/SketchViewModelUitls';
import { LineProps, FillProps } from './DrawTools.interface';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit {
  @Input() sketchVM: any;
  selectedGraphics: any[] = [];
  lineProps: LineProps = {
    style: 'solid',
    color: { r: 100, g: 20, b: 5, a: 1 },
    opacity: 100,
    width: 2,
  };
  fillProps: FillProps = {
    color: {r:0, g: 0, b: 0, a: 0.5},
    style: 'solid',
    opacity: 50
  };
  lineSvgStyle = {
    'width.px': 150,
    fill: RGBObjectToHex(this.lineProps.color),
  };
  lineStyles = LineStyles;
  fillStyles = FillStyles;
  radius: number;
  drawingMode: string = 'click';
  drawingTool: string = '';
  selectedGraphicsGeometry = this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
  @ViewChild('radiusInput') radiusElmRef: ElementRef;
  constructor(private store: Store<GraphicsState>) {}
  id = (): string => Math.random().toString(36).substr(2, 9);

  changeColor = (colorInfo: any) => {
    this.lineProps.color = colorInfo;
    this.lineProps.opacity = colorInfo.a * 100;
    this.setLineSVGStyle();
    this.changeGraphicsStyle();
  };

  changeFillColor = (colorInfo: any) => {
    this.fillProps.color = colorInfo;
    this.fillProps.opacity = colorInfo.a * 100;
    this.setLineSVGStyle();
    this.changeGraphicsStyle();
  };
  changeGraphicsStyle = () => {
    if (!this.selectedGraphics) {
      return;
    }
    if (this.selectedGraphics.length > 0) {
      if (this.selectedGraphics[0].attributes.geometryType === 'circle') {
        let circleJSON = this.selectedGraphics[0].toJSON();
        circleJSON = CreatePolygonGraphicWithSymbology(circleJSON, this.lineProps, this.fillProps);
        circleJSON.toJSON = undefined;
        circleJSON.geometry = CreateCircleWithGeometry(this.selectedGraphics[0]).asJSON();
        circleJSON.attributes.radius = circleJSON.geometry.radius;
        this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
        this.sketchVM.cancel();
      }
    }
  };

  setLineSVGStyle = () => {
    this.lineSvgStyle.fill = RGBObjectToHex(this.lineProps.color);
  };

  initSketchVMCreate = () => {
    this.sketchVM.on(['create'], (evt: any) => {
      if (evt.state === 'complete') {
        let createdGraphic;
        if (evt.tool === 'circle') {
          createdGraphic = CreateCircleFromEvent(evt, this.lineProps, this.fillProps);
        }
        if (evt.tool === 'polygon') {
          createdGraphic = evt.graphic;
          createdGraphic.attributes = {
            gid: this.id(),
            symbol: createdGraphic.symbol,
            geometryType: evt.tool,
            radius: 0,
          };
          createdGraphic = createdGraphic.toJSON();
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
      if (gg.state === 'cancel' || gg.aborted) {
        this.selectedGraphics = undefined;
        return;
      }
      if (gg.state === 'start' || gg.state === 'active') {
        this.selectedGraphics = gg.graphics;
        this.selectedGraphicsChanged();
      } else if (gg.state === 'complete') {
        let updatedGraphics = gg.graphics;
        if (gg.graphics[0].attributes.geometryType === 'circle') {
          updatedGraphics = CreateCircleFromGraphic(gg.graphics[0], this.lineProps, this.fillProps);
        }
        this.store.dispatch(updateGraphics({ graphics: JSON.stringify(updatedGraphics) }));
        this.selectedGraphics = undefined;
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
    }
  }

  startDrawingGraphics = (toolName: string) => {
    this.sketchVM.cancel();
    if (toolName === 'circle' && this.drawingMode === 'hybrid') {
      this.drawingMode = 'click';
    }
    if (['circle', 'polygon'].indexOf(toolName) > -1) {
      const polygonSymbol = CreatePolygonSymbol(this.lineProps, this.fillProps);
      this.sketchVM.polygonSymbol = polygonSymbol;
      this.sketchVM.polylineSymbol = CreatePolylineSymbol(this.lineProps);
      this.sketchVM.createCircleFromPoint = false;

      if (toolName === 'circle') {
        if (this.drawingMode === 'click') {
          if (this.radius && this.radius > 0) {
            this.sketchVM.createCircleFromPoint = true;
            this.sketchVM.create('point');
            return;
          }
        }
      }
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
