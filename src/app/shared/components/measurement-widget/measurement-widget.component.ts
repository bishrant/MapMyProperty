import { Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { WidgetToggleService } from '../../services/WidgetToggleService';
import Measurement from '@arcgis/core/widgets/Measurement';
import { SketchSelectionService } from '../../services/SketchSelectionService';
import MapView from '@arcgis/core/views/MapView';

@Component({
  selector: 'app-measurement-widget',
  templateUrl: './measurement-widget.component.html',
  styleUrls: ['./measurement-widget.component.scss']
})
export class MeasurementWidgetComponent implements OnInit, OnDestroy {
  @Input() mapView: MapView;

  @ViewChild('widgetContainer', { static: true }) private widgetContainerDiv!: ElementRef;

  isOpen: boolean = false;
  subscriptions$ : Subscription;

  isAreaActive:boolean = null;

  private measurement:Measurement = new Measurement();

  constructor (private widgetToggleService:WidgetToggleService,
    private sketchSelectionService: SketchSelectionService) {
    this.subscriptions$ = this.widgetToggleService.widgetViewChanged.subscribe((widgetInfo: any) => {
      if (widgetInfo.name !== 'measurement' && this.isOpen) {
        this.clearMeasurements();
        this.toggle();
      }
    })
  }

  ngOnInit (): void {
    this.measurement.view = this.mapView;
    this.measurement.container = this.widgetContainerDiv.nativeElement;
    this.measurement.linearUnit = 'us-feet';
    this.measurement.areaUnit = 'acres';
  }

  ngOnDestroy () {
    this.subscriptions$.unsubscribe();
  }

  distanceMeasurement ():void {
    this.measurement.activeTool = 'distance';
    this.isAreaActive = false;
    this.updateSketchState(false);
  }

  areaMeasurement ():void {
    this.measurement.activeTool = 'area';
    this.isAreaActive = true;
    this.updateSketchState(false);
  }

  clearMeasurements ():void {
    this.measurement.clear();
    this.isAreaActive = null;
    this.updateSketchState(true);
  }

  updateSketchState (status: boolean) {
    this.sketchSelectionService.changeSketchSelectionMode('measure', status);
  }

  toggle (): void {
    if (!this.isOpen) {
      this.widgetToggleService.changeWidgetView('measurement', this.isOpen);
      this.updateSketchState(!this.isOpen);
    } else {
      this.clearMeasurements();
    }

    this.isOpen = !this.isOpen;
  }
}
