import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WidgetToggleService } from '../../services/WidgetToggleService';
import Measurement from 'esri/widgets/Measurement';

@Component({
  selector: 'app-measurement-widget',
  templateUrl: './measurement-widget.component.html',
  styleUrls: ['./measurement-widget.component.scss']
})
export class MeasurementWidgetComponent implements OnInit, OnDestroy {
  @Input() mapView: __esri.MapView;

  @ViewChild('widgetContainer', { static: true }) private widgetContainerDiv!: ElementRef;

  isOpen: boolean = false;
  subscriptions$ : Subscription;

  isAreaActive:boolean = null;

  private measurement:Measurement = new Measurement();

  constructor(
    private widgetToggleService:WidgetToggleService
  ) {
    this.subscriptions$ = this.widgetToggleService.widgetViewChanged.subscribe((widgetInfo: any) => {
      if (widgetInfo.name !== 'measurement' && this.isOpen) {
        this.clearMeasurements();
        this.toggle();
      }
    })
  }

  ngOnInit(): void {
    this.measurement.view = this.mapView;
    this.measurement.container = this.widgetContainerDiv.nativeElement;
    this.measurement.linearUnit = 'imperial';
    this.measurement.areaUnit = 'imperial';
  }

  ngOnDestroy () {
    this.subscriptions$.unsubscribe();
  }

  distanceMeasurement():void {
    this.measurement.activeTool = 'distance';
    this.isAreaActive = false;
  }

  areaMeasurement():void {
    this.measurement.activeTool = 'area';
    this.isAreaActive = true;
  }

  clearMeasurements():void {
    this.measurement.clear();
    this.isAreaActive = null;
  }

  toggle (): void {
    this.widgetToggleService.changeWidgetView('measurement', this.isOpen);
    this.isOpen = !this.isOpen;
  }
}
