import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from "@angular/core";
import { GraphicsState } from "src/app/shared/store/graphics.state";
import { Store } from "@ngrx/store";
import { updateGraphics } from "src/app/shared/store/graphics.actions";
import { RGBToHex } from 'src/app/shared/utils/Colors';

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit, OnChanges {
  @Output() startDrawing = new EventEmitter<any>();
  @Input() selectedGraphics: any[];
  lineStyle = "solid";
  lineStyles = {
    esriSLSSolid: "solid",
    esriSLSDash: "dash",
    esriSLSShortDot: "short-dot",
    esriSLSDot: "dot",
    esriSLSDashDot: "dash-dot",
    esriSLSShortDashDotDot: "short-dash-dot-dot",
    esriSLSLongDash: "long-dash",
    esriSLSLongDashDot: "long-dash-dot",
    esriSLSShortDash: "short-dash",
    // esriSLSDashDotDot: "dash-dot-dot",
    esriSLSShortDashDot: "short-dash-dot",
      esriSLSNull: "none"
  };

  lineColor = "#f9ac26";
  lineColors: any = [
    "#49483e",
    "#6a81f9",
    "#00cccc",
    "#f9ac26",
    "#ac26f9",
    "#26f9ad",
    "#f92672"
  ];


  constructor(private store: Store<GraphicsState>) {}

  changeColor = (color: string) => {
    this.lineColor = color;
    this.changeStyle('lineColor', color);
    // console.log('color selected ', $event);
  }
  changeStyle = (type: string, event$: any) => {
    // console.log(type, event$.value);
    if (this.selectedGraphics) {
      const j = this.selectedGraphics[0];
      const symbol = {
        type: "simple-fill",
        color: "transparent",
        style: "solid",
        outline: {
          color: this.lineColor,
          width: 2,
          style: this.lineStyle
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
      this.lineStyle = this.lineStyles[
        this.selectedGraphics[0].attributes.symbol.outline.style
      ];

      this.lineColor = !this.selectedGraphics
        ? "red"
        : RGBToHex(
            this.selectedGraphics[0].attributes.symbol.outline.color
          );
      console.log(this.lineColor);
      // );
    }
  }

  ngOnInit(): void {
    this.lineStyle = !this.selectedGraphics
      ? "solid"
      : this.selectedGraphics[0].attributes.symbol.outline.style;

    this.lineColor = !this.selectedGraphics
      ? this.lineColors[4]
      : RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);
    console.log(this.lineColor);
  }

  startDrawingGraphics = (toolName: string = "polygon") => {
    const symbol = {
      type: "simple-fill",
      color: "transparent",
      style: "solid",
      outline: {
        color: this.lineColor,
        width: 2,
        style: this.lineStyle
      }
    };
    this.startDrawing.emit({ tool: toolName, symbol: symbol });
  };
}
