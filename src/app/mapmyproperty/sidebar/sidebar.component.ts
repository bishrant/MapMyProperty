import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from "@angular/core";
import { FormControl } from '@angular/forms';

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
    esriSLSDashDot: "dash-dot",
    esriSLSLongDash: "long-dash",
    esriSLSShortDash: "short-dash",
    esriSLSDashDotDot: "dash-dot-dot",
    esriSLSDot: "dot",
    esriSLSShortDot: "short-dot",
    esriSLSShortDashDot: "short-dash-dot",
    esriSLSShortDashDotDot: "short-dash-dot-dot",
    esriSLSLongDashDot: "long-dash-dot",
    esriSLSNull: 'none'
  };

  constructor() {}

  changeStyle = (type: string, event$: any) => {
    console.log(type, event$.value);
  };
  ngOnChanges() {
    if (this.selectedGraphics) {
      // this.lineStyle.setValue(
      this.lineStyle = this.lineStyles[
        this.selectedGraphics[0].attributes.symbol.outline.style
      ];
      // );
    }
  }

  ngOnInit(): void {
    this.lineStyle = !this.selectedGraphics
      ? "solid"
      : this.selectedGraphics[0].attributes.symbol.outline.style;
  }

  startDrawingGraphics = (toolName: string = "polygon") => {
    const symbol = {
      type: "simple-fill",
      color: "transparent",
      style: "solid",
      outline: {
        color: "red",
        width: 2,
        style: this.lineStyle
      }
    };
    this.startDrawing.emit({ tool: toolName, symbol: symbol });
  };
}
