import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';
import { RGBToHex, HexToRGBA } from 'src/app/shared/utils/Colors';
import { LineStyles, CheckIfColorIsHollow } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() startDrawing = new EventEmitter<any>();
  @Input() selectedGraphics: any[];
  lineStyle = 'solid';
  lineColor = null;
  lineOpacity = 40;
  lineStyles = LineStyles;
  lineWidth = 2;

  constructor(private store: Store<GraphicsState>) {}

  changeColor = (colorInfo: any) => {
    this.lineColor = colorInfo.color;
    this.lineOpacity = colorInfo.opacity;
    this.changeStyle('lineColor', colorInfo.color);
  };
  changeLineStyle = ($event) => {
    this.lineWidth = $event.value;
    this.changeStyle('lineWidth', $event);
  }
  changeStyle = (type: string, event$: any) => {
    if (this.selectedGraphics) {
      const j = this.selectedGraphics[0];
      const symbol = this.createLineSymbol();
      j.symbol = symbol;
      j.attributes.symbol = j.symbol;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
    }
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
    this.lineStyle = !this.selectedGraphics ? 'solid' : this.selectedGraphics[0].attributes.symbol.outline.style;

    this.lineColor = !this.selectedGraphics
      ? this.lineColor
      : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);
  }

  startDrawingGraphics = (toolName: string = 'polygon') => {
    const symbol = this.createLineSymbol();
    this.startDrawing.emit({ tool: toolName, symbol: symbol });
  };

  createLineSymbol = () => {
    return {
      type: 'simple-fill',
      color: 'transparent',
      style: 'solid',
      outline: {
        color: this.lineColor ? HexToRGBA(this.lineColor, this.lineOpacity) : 'transparent',
        width: this.lineWidth,
        style: this.lineStyle
      }
    };
  };
}
