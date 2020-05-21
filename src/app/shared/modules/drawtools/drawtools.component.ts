import { updateGraphics } from './../../store/graphics.actions';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { RGBToHex } from 'src/app/shared/utils/Colors';
import { LineStyles, CheckIfColorIsHollow, CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { MatFormField } from '@angular/material/form-field';
import { CreateCircleFromPoint } from '../../maputils/SketchViewModelUitls';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit, OnChanges {
  @Output() startDrawing = new EventEmitter<any>();
  @Input() selectedGraphics: any[] = [];
  @Input() sketchVM: any;
  lineStyle = 'solid';
  lineColor = '#c1800b';
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

  changeColor = (colorInfo: any) => {
    this.lineColor = colorInfo.color;
    this.lineOpacity = colorInfo.opacity;
    this.changeGraphicsStyle();
  };

  changeGraphicsStyle = () => {
    if (this.selectedGraphics) {
      const j = this.selectedGraphics[0].toJSON();
      const _symbol = CreatePolygonSymbol(
        { color: this.lineColor, opacity: this.lineOpacity, style: this.lineStyle, width: this.lineWidth },
        { color: this.fillColor, style: this.fillStyle }
      );

      j.symbol = _symbol;
      j.symbol.outline.color = _symbol.outline.color;
      j.attributes.symbol = _symbol;
      let l = JSON.stringify([j]);
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
      this.sketchVM.cancel();
    }
  };

  updateCircleRadius = () => {
    if (this.selectedGraphics.length > 0) {
      const j = this.selectedGraphics[0];
      const newCircle = CreateCircleFromPoint(j.geometry.centroid, this.radius);
      j.attributes.radius = this.radius;
      j.geometry = newCircle;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
      this.radiusElmRef.nativeElement.blur();
      
      // if (this.drawingMode === 'click' && this.drawingTool === 'circle' && this.radius > 0) {
      //   this.startDrawingGraphics('circle');
      // }
    }
  };
  radiusChangedEnter = ($event: any) => {
    this.updateCircleRadius();
  };
  ngOnChanges() {
    if (this.selectedGraphics) {
      if (this.selectedGraphics.length === 1) {
        const _g = this.selectedGraphics[0];
        this.selectedGraphicsGeometry =
          this.selectedGraphics.length > 0 ? this.selectedGraphics[0].attributes.geometryType : '';
        if (this.selectedGraphicsGeometry === 'circle') {
          this.radius = _g.attributes.radius;
          this.lineStyle = this.lineStyles[_g.attributes.symbol.outline.style];
          const _graphicsOutlineColor = this.selectedGraphics[0].attributes.symbol.outline.color;
          this.lineColor = CheckIfColorIsHollow(_graphicsOutlineColor) ? null : RGBToHex(_graphicsOutlineColor);
          // console.log(this.lineColor);
          this.lineWidth = _g.attributes.symbol.outline.width;
          this.lineOpacity = CheckIfColorIsHollow(_graphicsOutlineColor)
            ? 100
            : parseInt('' + (_g.attributes.symbol.outline.color[3] * 100) / 255);
        } else {
          this.lineStyle = this.lineStyles[_g.attributes.symbol.outline.style];
          const _graphicsOutlineColor = this.selectedGraphics[0].attributes.symbol.outline.color;
          this.lineColor = CheckIfColorIsHollow(_graphicsOutlineColor) ? null : RGBToHex(_graphicsOutlineColor);
          // console.log(this.lineColor);
          this.lineWidth = _g.attributes.symbol.outline.width;
          this.lineOpacity = CheckIfColorIsHollow(_graphicsOutlineColor)
            ? 100
            : parseInt('' + (_g.attributes.symbol.outline.color[3] * 100) / 255);
        }
      }
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
    }
  }

  startDrawingGraphics = (toolName: string) => {
    if (toolName === 'circle' && this.drawingMode === 'hybrid') {
      this.drawingMode = 'click';
    }
    if (['circle', 'polygon'].indexOf(toolName) > -1) {
      const symbol = CreatePolygonSymbol(
        { color: this.lineColor, opacity: this.lineOpacity, width: this.lineWidth, style: this.lineStyle },
        { color: this.fillColor, style: this.fillStyle }
      );
      if (toolName === 'circle') {
        if (this.drawingMode === 'click') {
          if (this.radius && this.radius > 0) {
            this.startDrawing.emit({ tool: toolName, symbol: symbol, radius: this.radius, mode: this.drawingMode });
          }
        } else {
          this.startDrawing.emit({ tool: toolName, symbol: symbol, radius: this.radius, mode: this.drawingMode });
        }
      } else {
        this.startDrawing.emit({ tool: toolName, symbol: symbol, radius: this.radius, mode: this.drawingMode });
      }
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
