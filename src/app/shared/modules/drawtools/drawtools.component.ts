import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';
import { RGBToHex } from 'src/app/shared/utils/Colors';
import { LineStyles, CheckIfColorIsHollow, CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-drawtools',
  templateUrl: './drawtools.component.html',
  styleUrls: ['./drawtools.component.scss'],
})
export class DrawtoolsComponent implements OnInit, OnChanges {
  @Output() startDrawing = new EventEmitter<any>();
  @Output() radiusChanged = new EventEmitter<any>();
  @Input() selectedGraphics: any[];
  @Input() sketchVM: any;
  lineStyle = 'solid';
  lineColor = '#c1800b';
  lineOpacity = 40;
  fillColor = 'transparent';
  fillStyle = 'solid';
  lineStyles = LineStyles;
  lineWidth = 2;
  radius: number;

  constructor(private store: Store<GraphicsState>) {}

  changeColor = (colorInfo: any) => {
    this.lineColor = colorInfo.color;
    this.lineOpacity = colorInfo.opacity;
    this.changeGraphicsStyle();
  };

  changeGraphicsStyle = () => {
    if (this.selectedGraphics) {
      const j = this.selectedGraphics[0];
      const symbol = CreatePolygonSymbol(
        { color: this.lineColor, opacity: this.lineOpacity },
        { color: this.fillColor, style: this.fillStyle, width: this.lineWidth, opacity: this.lineOpacity }
      );

      j.symbol = symbol;
      j.attributes.symbol = j.symbol;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
    }
  };

  private _radiusChanged = ($event: any) => {
    this.radiusChanged.emit($event);
  };
  ngOnChanges() {
    if (this.selectedGraphics) {
      if (this.selectedGraphics.length === 1) {
        const _g = this.selectedGraphics[0];
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

  ngOnInit(): void {
    this.lineStyle = !this.selectedGraphics ? this.lineStyle : this.selectedGraphics[0].attributes.symbol.outline.style;

    this.lineColor = !this.selectedGraphics
      ? this.lineColor
      : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);
  }

  startDrawingGraphics = (toolName: string = 'polygon') => {
    const symbol = CreatePolygonSymbol(
      { color: this.lineColor, opacity: this.lineOpacity, width: this.lineWidth, style: this.lineStyle },
      { color: this.fillColor, style: this.fillStyle }
    );
    this.startDrawing.emit({ tool: toolName, symbol: symbol, radius: this.radius });
  };
}
