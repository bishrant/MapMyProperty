import { Component, OnInit, Input } from '@angular/core';
import { CreateSensAreasGL } from '../../utils/pmloUtils';

@Component({
  selector: 'pmlo-sens-areas',
  templateUrl: './sens-areas.component.html',
  styleUrls: ['./sens-areas.component.scss']
})
export class SensAreasComponent implements OnInit {

  state: string = "noBoundary";
  streamCollapsed:  boolean = true;
  slopeCollapsed: boolean = true;
  wetCollapsed: boolean = true;

  @Input() mapView:any;

  constructor() { }

  ngOnInit(): void {
    this.mapView.map.add(CreateSensAreasGL());
    debugger
    console.log(this.mapView.map);
  }
}
