import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { GraphicsState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { updateGraphics } from 'src/app/shared/store/graphics.actions';
import { RGBToHex, HexToRGBA } from 'src/app/shared/utils/Colors';
import { LineStyles } from 'src/app/shared/utils/GraphicStyles';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() startDrawing = new EventEmitter<any>();
  @Input() selectedGraphics: any[];
  lineStyle = 'solid';
  lineColor = '#f9ac26';
  lineOpacity = 40;
  lineStyles = LineStyles;

  constructor(private store: Store<GraphicsState>) {}

  changeColor = (colorInfo: any) => {
    this.lineColor = colorInfo.color;
    this.lineOpacity = colorInfo.opacity;
    this.changeStyle('lineColor', colorInfo.color);
  };
  changeStyle = (type: string, event$: any) => {
    if (this.selectedGraphics) {
      const j = this.selectedGraphics[0];
      const symbol = {
        type: 'simple-fill',
        color: 'transparent',
        style: 'solid',
        outline: {
          color: HexToRGBA(this.lineColor, this.lineOpacity),
          width: 2,
          style: this.lineStyle
          // opacity: this.lineOpacity
        }
      };
      j.symbol = symbol;
      j.attributes.symbol = j.symbol;
      this.store.dispatch(updateGraphics({ graphics: JSON.stringify([j]) }));
    }
  };
  ngOnChanges() {
    if (this.selectedGraphics) {
      // this.lineStyle.setValue(
      console.log(this.selectedGraphics);
      this.lineStyle = this.lineStyles[this.selectedGraphics[0].attributes.symbol.outline.style];

      this.lineColor = !this.selectedGraphics
        ? 'red'
        : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);

      this.lineOpacity = !this.selectedGraphics
        ? 100
        : parseInt('' + (this.selectedGraphics[0].attributes.symbol.outline.color[3] * 100) / 255);
      console.log((this.selectedGraphics[0].attributes.symbol.outline.color[3] * 100) / 255);
    }
  }

  ngOnInit(): void {
    this.lineStyle = !this.selectedGraphics ? 'solid' : this.selectedGraphics[0].attributes.symbol.outline.style;

    this.lineColor = !this.selectedGraphics
      ? this.lineColor
      : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);
  }

  startDrawingGraphics = (toolName: string = 'polygon') => {
    const symbol = {
      type: 'simple-fill',
      color: 'transparent',
      style: 'solid',
      outline: {
        color: HexToRGBA(this.lineColor, this.lineOpacity),
        width: 2,
        style: this.lineStyle
      }
    };
    console.log(symbol);
    this.startDrawing.emit({ tool: toolName, symbol: symbol });
  };
}
