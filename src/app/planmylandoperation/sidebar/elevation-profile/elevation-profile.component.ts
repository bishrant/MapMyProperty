import { Component, Input } from '@angular/core';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss']
})
export class ElevationProfileComponent {
  @ViewChild('elevationProfileModal') elevationProfileModal: any;
  @Input() mapView: any;
  @Input() slopeThreshold: number = 8;

  headerBgColor = '#353535'
  drawTool: String;
  isMSL = false;
  isElevationProfileToolActive = false;
  faQuestionCircle = faQuestionCircle;
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
    console.log("REISE ", $event, $event.height);
    this.elevationService.resizeChart($event.width - 30, $event.height - 90);
  }
  startDrawingGraphics(value: any) {

    import('../../../shared/services/elevation-profile/lib/plotly.js').then((_plotly: any) => {
      this.Plotly = _plotly;
    });

    this.elvUtils = undefined;
    this.elvUtils = this.elevationService.initialize({ mapView: this.mapView, slopeThreshold: this.slopeThreshold, unit: 'feet', divId: 'gd', isMSL: this.isMSL });
    this.elvUtils.start(value);

    this.drawingObservable$ = this.elevationService.drawingComplete.subscribe((graphics: any) => {
      this.loaderService.isLoading.next(true);
      this.chartDataObservable$ = this.elevationService.chartData$.subscribe(async (d: any) => {
        this.elevationService.Plotly = this.Plotly;
        this.elevationProfileModal.show();
        this.loaderService.isLoading.next(false);
      });
    })
  }

  modelClosed() {
    this.elevationService.close();
    this.drawTool = undefined;
  }

  clearElevationProfile() {
    console.log('clear profile');
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
    // this.loaderService.isLoading.next(true);
    this.elevationService.createReport();
  }
}
