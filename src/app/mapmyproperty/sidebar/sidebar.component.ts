import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnChanges
} from "@angular/core";
import { FormControl } from "@angular/forms";
import { GraphicsState } from "src/app/shared/store/graphics.state";
import { Store } from "@ngrx/store";
import { updateGraphics } from "src/app/shared/store/graphics.actions";

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
    esriSLSShortDot: "short-dot"
  };
  //   esriSLSDashDot: "dash-dot",
  //   esriSLSLongDash: "long-dash",
  //   esriSLSShortDash: "short-dash",
  //   esriSLSDashDotDot: "dash-dot-dot",
  //   esriSLSDot: "dot",

  //   esriSLSShortDashDot: "short-dash-dot",
  //   esriSLSShortDashDotDot: "short-dash-dot-dot",
  //   esriSLSLongDashDot: "long-dash-dot",
  //   esriSLSNull: "none"
  // };

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

  RGBToHex = rgba => {
    let r = rgba[0].toString(16);
    let g = rgba[1].toString(16);
    let b = rgba[2].toString(16);

    if (r.length == 1) r = "0" + r;
    if (g.length == 1) g = "0" + g;
    if (b.length == 1) b = "0" + b;

    return "#" + r + g + b;
  };
  constructor(private store: Store<GraphicsState>) {}

  changeStyle = (type: string, event$: any) => {
    console.log(type, event$.value);
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
            : this.RGBToHex(
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
      ? "red"
      : this.RGBToHex(this.selectedGraphics[0].attributes.symbol.outline.color);
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
