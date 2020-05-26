import { updateGraphics, addGraphics } from './../../store/graphics.actions';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { RGBToHex, RGBObjectToHex } from 'src/app/shared/utils/Colors';
import { LineStyles, CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import { CreateCircleFromPoint, CreateCircleWithGeometry } from '../../maputils/SketchViewModelUitls';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit, OnChanges {
  @Input() selectedGraphics: any[] = [];
  @Input() sketchVM: any;
  lineStyle = 'solid';
  lineColor: any = { r: 100, g: 20, b: 5, a: 1 };
  lineSvgStyle = {
    'width.px': 150,
    fill: RGBObjectToHex(this.lineColor),
  };
  lineOpacity = 100;
  fillColor = 'transparent';
  fillStyle = 'solid';
  lineStyles = LineStyles;
  lineWidth = 2;
  radius: number;
  drawingMode: string = 'click';
  drawingTool: string = '';
  selectedGraphicsGeometry = this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
  @ViewChild('radiusInput') radiusElmRef: ElementRef;
  constructor(private store: Store<GraphicsState>) {}
  id = (): string => Math.random().toString(36).substr(2, 9);
  changeColor = (colorInfo: any) => {
    this.lineColor = colorInfo;
    this.lineOpacity = colorInfo.a * 100;
    this.setLineSVGStyle();
    this.changeGraphicsStyle();
  };
  getPolygonSymbol = () => {
    return CreatePolygonSymbol(
      { color: this.lineColor, opacity: this.lineOpacity, style: this.lineStyle, width: this.lineWidth },
      { color: this.fillColor, style: this.fillStyle }
    );
  };
  changeGraphicsStyle = () => {
    if (this.selectedGraphics) {
      if (this.selectedGraphics[0].attributes.geometryType === 'circle') {
        let circleJSON = this.selectedGraphics[0].toJSON();
        circleJSON = this.createPolygonGraphicWithSymbology(circleJSON);
        circleJSON.toJSON = undefined;
        circleJSON.geometry = CreateCircleWithGeometry(this.selectedGraphics[0]).asJSON();
        circleJSON.attributes.radius = circleJSON.geometry.radius;
        this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
        this.sketchVM.cancel();
      }
    }
  };

  setLineSVGStyle = () => {
    this.lineSvgStyle.fill = RGBObjectToHex(this.lineColor);
  };
  createPolygonGraphicWithSymbology = (graphic: any) => {
    const _symbol = this.getPolygonSymbol();
    graphic.symbol = _symbol;
    graphic.symbol.outline.color = _symbol.outline.color;
    graphic.attributes.symbol = _symbol;
    return graphic;
  };

  initSketchVMCreate = () => {
    this.sketchVM.on(['create'], (evt: any) => {
      if (evt.state === 'complete') {
        let _g;

        if (evt.tool === 'circle') {
          _g = evt.graphic.toJSON();
          _g.attributes = { gid: this.id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
          _g.geometry = CreateCircleWithGeometry(evt.graphic).asJSON();
          _g = this.createPolygonGraphicWithSymbology(_g);
          _g.attributes.radius = _g.geometry.radius;
          // _g.symbol = this.sketchVM.polygonSymbol;
          // _g.attributes.symbol = this.sketchVM.polygonSymbol;
        }
        if (evt.tool === 'polygon') {
          _g = evt.graphic;
          _g.attributes = { gid: this.id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
          _g = _g.toJSON();
        }
        if (this.sketchVM.createCircleFromPoint) {
          _g = evt.graphic.toJSON();
          _g.attributes = { gid: this.id(), symbol: _g.symbol, geometryType: evt.tool, radius: 0 };
          _g.geometry = CreateCircleFromPoint(evt.graphic.geometry, this.radius).asJSON();
          _g = this.createPolygonGraphicWithSymbology(_g);
          // const _symbol = this.getPolygonSymbol();
          // _g.attributes.symbol = _symbol;
          // _g.symbol = this.getPolygonSymbol();
          _g.attributes.geometryType = 'circle';
          _g.attributes.radius = _g.geometry.radius;
        }
        // this.store.dispatch({type: 'ADD'});
        const graphicString = JSON.stringify(_g);
        this.store.dispatch(addGraphics({ payload: graphicString }));
        // polygonGraphicsLayer.add(evt.graphic);
      }
    });
  };

  initSketchVMUpdate = () => {
    this.sketchVM.on('update', (gg: any) => {
      if (gg.state === 'start' || gg.state === 'active') {
        this.selectedGraphics = gg.graphics;
        this.selectedGraphicsChanged();
      } else if (gg.state === 'cancel') {
        this.selectedGraphics = undefined;
      } else if (gg.aborted) {
        this.selectedGraphics = undefined;
      } else if (gg.state === 'complete') {
        // send update to the store once the editing is complete
        if (gg.graphics[0].attributes.geometryType === 'circle') {
          // @todo fix this
          let circleJSON = this.selectedGraphics[0].toJSON();
          circleJSON = this.createPolygonGraphicWithSymbology(circleJSON);
          circleJSON.toJSON = undefined;
          circleJSON.geometry = CreateCircleWithGeometry(this.selectedGraphics[0]).asJSON();
          circleJSON.attributes.radius = circleJSON.geometry.radius;
          this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
        }
        this.store.dispatch(updateGraphics({ graphics: JSON.stringify(gg.graphics) }));
        this.selectedGraphics = undefined;
      }
      // console.log(this.selectedGraphics, gg, ' enable editing for this');
    });
  };

  updateCircleRadius = () => {
    if (this.selectedGraphics.length > 0) {

      let circleJSON = this.selectedGraphics[0].toJSON();
      circleJSON = this.createPolygonGraphicWithSymbology(circleJSON);
      circleJSON.toJSON = undefined;
      
      circleJSON.geometry = CreateCircleFromPoint(this.selectedGraphics[0].geometry.centroid, this.radius).asJSON();
      circleJSON.attributes.radius = circleJSON.geometry.radius;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([circleJSON]) }));
      this.sketchVM.cancel();
      this.radiusElmRef.nativeElement.blur();


      // const j = this.selectedGraphics[0];
      // const newCircle = CreateCircleFromPoint(j.geometry.centroid, this.radius).asJSON();
      // j.attributes.radius = this.radius;
      // j.geometry = newCircle;
      // this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
      // this.radiusElmRef.nativeElement.blur();
    }
  };
  radiusChangedEnter = ($event: any) => {
    this.updateCircleRadius();
  };

  selectedGraphicsChanged = () => {
      if (this.selectedGraphics.length === 1) {
        this.setLineSVGStyle();
        const _g = this.selectedGraphics[0];
        this.selectedGraphicsGeometry =
          this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
        if (this.selectedGraphicsGeometry === 'circle') {
          this.radius = _g.attributes.radius;
          this.lineStyle = _g.attributes.symbol.outline.style;
          const _graphicsOutlineColor = this.selectedGraphics[0].attributes.symbol.outline.color;
          this.lineColor = _graphicsOutlineColor;

          this.lineWidth = _g.attributes.symbol.outline.width;
          this.lineOpacity = _graphicsOutlineColor.a * 100;
          this.setLineSVGStyle();
        } else {
        }
      }
  }
  ngOnChanges() {
    if (this.selectedGraphics) {

    }
  }

  ngOnInit(): void {
    this.lineStyle = !this.selectedGraphics ? this.lineStyle : this.selectedGraphics[0].attributes.symbol.outline.style;

    this.lineColor = !this.selectedGraphics
      ? this.lineColor
      : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);

    if (this.sketchVM) {
      this.sketchVM.on('update', (event: any) => {
        if (event.state === 'complete') {
          this.drawingTool = '';
          this.drawingMode = '';
        }
      });
      this.sketchVM.on('create', (event: any) => {
        if (event.state === 'complete') {
          this.drawingTool = '';
          this.drawingMode = '';
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
      const polygonSymbol = CreatePolygonSymbol(
        { color: this.lineColor, opacity: this.lineOpacity, width: this.lineWidth, style: this.lineStyle },
        { color: this.fillColor, style: this.fillStyle }
      );
      this.sketchVM.polygonSymbol = polygonSymbol;
      this.sketchVM.polylineSymbol = CreatePolylineSymbol({
        color: this.lineColor,
        opacity: this.lineOpacity,
        width: this.lineWidth,
        style: this.lineStyle,
      });
      this.sketchVM.createCircleFromPoint = false;

      if (toolName === 'circle') {
        if (this.drawingMode === 'click') {
          if (this.radius && this.radius > 0) {
            this.sketchVM.createCircleFromPoint = true;
            this.sketchVM.create('point');
            // this.startDrawing.emit({ tool: toolName, symbol: polygonSymbol, radius: this.radius, mode: this.drawingMode });
          }
        } else {
          this.sketchVM.create(toolName, { mode: this.drawingMode, type: toolName });
        }
      } else {
        this.sketchVM.create(toolName, { mode: this.drawingMode, type: toolName });
      }
    }
    return;
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
