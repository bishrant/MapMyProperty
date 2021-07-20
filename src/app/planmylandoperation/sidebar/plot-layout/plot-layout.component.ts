import { Component, Input, OnInit } from '@angular/core';
import { MapviewService } from 'src/app/shared/services/mapview.service';

@Component({
  selector: 'app-plot-layout',
  templateUrl: './plot-layout.component.html',
  styleUrls: ['./plot-layout.component.scss']
})
export class PlotLayoutComponent implements OnInit {
  @Input() mapView: any;

  boundaryHasPolygons: boolean;

  plotDirections: any[] = [
    { orientation: 'SW' },
    { orientation: 'NW' },
    { orientation: 'NE' },
    { orientation: 'SE' }
  ];

  selectedImage: string = 'SW';
  plotSpacingValue: number = 5.5;
  selectedRadio: string = 'chains';
  waypointPrefixValue: string = 'A';
  initialPlotValue: number = 1;

  constructor (
    private mapViewService: MapviewService
  ) { }

  ngOnInit (): void {
    this.mapViewService.boundaryHasPolygons.subscribe(
      hasPolygons => { this.boundaryHasPolygons = hasPolygons });
  }

  updateSelection (direction: string): void {
    this.selectedImage = direction;
  }

  radioChanged (unit: string): void {
    this.selectedRadio = unit;
  }

  runPlotLayout (): void {
    console.log('run');
  }
}
