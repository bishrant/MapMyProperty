import { Component, Input, ViewChild } from '@angular/core';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { Subscription } from 'rxjs';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { SketchSelectionService } from 'src/app/shared/services/SketchSelectionService';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss']
})
export class ElevationProfileComponent {
  @ViewChild('elevationProfileModal') elevationProfileModal: any;
  @Input() mapView: any;
  @Input() slopeThreshold: number = 8;
  @Input() sketchVM: __esri.SketchViewModel;
  @Input() generalSketchVM: __esri.SketchViewModel;

  isActive = false;
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

  constructor(private elevationService: ElevationProfileService, private loaderService: LoaderService,
    private sketchSelectionService: SketchSelectionService) {
    this.isReversed = elevationService.isReversed;
  }

  onResizeEnd($event) {
    this.elevationService.resizeChart($event.width - 30, $event.height - 90);
  }

  startDrawingGraphics (value: any) {
    if (this.drawTool === value) {
      this.modelClosed();
    } else {
      if (this.drawTool !== '') {
        this.modelClosed();
      }
      this.updateSketchState(false);
      this.drawTool = value;
      this.isActive = true;
      if (this.sketchVM) this.sketchVM.cancel();

      if (this.elevationProfileModal.visible) {
        this.elevationProfileModal.hide();
      }
      this.elvUtils = undefined;
      this.elvUtils = this.elevationService.initialize({
        mapView: this.mapView,
        slopeThreshold: this.slopeThreshold,
        unit: 'feet',
        divId: 'gd',
        isMSL: this.isMSL,
        popup: this.elevationProfileModal
      }, this.generalSketchVM);
      this.elvUtils.start(value);
    }
  }

  public cleanup() {
    this.elevationProfileModal.hide();
  }

  modelClosed() {
    this.elevationService.close();
    if (this.generalSketchVM) {
      this.generalSketchVM.layer.removeAll();
      this.generalSketchVM.layer.graphics.removeAll();
      this.generalSketchVM.cancel();
    }
    this.drawTool = '';
    this.isActive = false;
    this.updateSketchState(true);
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

  updateSketchState(status: boolean) {
    this.sketchSelectionService.changeSketchSelectionMode('elevationprofile', status);
  }
}
