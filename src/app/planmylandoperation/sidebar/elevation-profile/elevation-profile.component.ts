import { Component, Input } from '@angular/core';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss'],
})
export class ElevationProfileComponent {
  @ViewChild('elevationProfileModal') elevationProfileModal: any;
  @Input() mapView: any;
  @Input() slopeThreshold: number = 8;

  headerBgColor = '#353535';
  drawTool: String;
  isMSL = false;
  isElevationProfileToolActive = false;
  elvUtils: any;
  Plotly: any;
  isReversed: boolean = false;

  chartDataObservable$: Subscription;
  drawingObservable$: Subscription;
  closePopup$: Subscription;

  constructor(private elevationService: ElevationProfileService, private loaderService: LoaderService) {
    this.isReversed = elevationService.isReversed;
  }

  onResizeEnd($event) {
    this.elevationService.resizeChart($event.width - 30, $event.height - 90);
  }
  startDrawingGraphics(value: any) {
    this.elvUtils = undefined;
    this.elvUtils = this.elevationService.initialize({
      mapView: this.mapView,
      slopeThreshold: this.slopeThreshold,
      unit: 'feet',
      divId: 'gd',
      isMSL: this.isMSL,
      popup: this.elevationProfileModal
    });
    this.elvUtils.start(value);
  }

  modelClosed() {
    this.elevationService.close();
    this.drawTool = undefined;
  }

  clearElevationProfile() {
    this.elevationProfileModal.hide();
  }

  ngOnDestroy() {
    this.chartDataObservable$.unsubscribe();
    this.drawingObservable$.unsubscribe();
  }

  reverseProfile() {
    this.isReversed = !this.isReversed;
    this.elevationService.reverseProfile();
  }

  createReport() {
    this.elevationService.createReport();
  }
}
