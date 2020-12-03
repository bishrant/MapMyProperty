import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw-help',
  templateUrl: './draw-help.component.html',
  styleUrls: ['./draw-help.component.scss']
})
export class DrawHelpComponent implements OnInit {
  isDrawActive:boolean = true;

  constructor () { }

  ngOnInit (): void {
  }

  setActiveTab (draw:boolean):void {
    if (this.isDrawActive && !draw || !this.isDrawActive && draw) {
      this.isDrawActive = !this.isDrawActive;
    }
  }
}
