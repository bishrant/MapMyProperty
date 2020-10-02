import { Component, OnInit, Input, Inject } from '@angular/core';
import { ElevationProfile } from './ElevationProfileUtils';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { Subscriber, Observable, Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { cons } from 'fp-ts/lib/ReadonlyArray';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss']
})
export class ElevationProfileComponent implements OnInit {
  @ViewChild('elevationProfileModal') elevationProfileModal: any;
  drawTool: String;
  baseMSL = false;
  isElevationProfileToolActive = false;
  @Input() mapView: any;

  elvUtils: any;
  Plotly: any;
  chartDataObservable$: Subscription;
  drawingObservable$: Subscription;
  closePopup$: Subscription;
  constructor(private elevationService: ElevationProfileService, private dialog: MatDialog, private loaderService: LoaderService) { }

  ngOnInit(): void { }

  startDrawingGraphics(value: any) {
    import('../../../shared/services/elevation-profile/lib/plotly.js').then((_plotly: any) => {
      this.Plotly = _plotly;
    });



    this.elvUtils = undefined;
    this.elvUtils = this.elevationService.initialize({ mapView: this.mapView, slopeThreshold: 4, unit: 'feet', divId: 'gd' });
    this.elvUtils.start(value);

    this.drawingObservable$ = this.elevationService.drawingComplete.subscribe((graphics: any) => {
      this.loaderService.isLoading.next(true);
    })
    this.chartDataObservable$ = this.elevationService.chartData$.subscribe(async (d: any) => {
      this.initChart();
      this.elevationService.Plotly = this.Plotly;
      this.elevationProfileModal.show();
      this.loaderService.isLoading.next(false);


    });


  }

  modelClosed() {
    this.elevationService.close();
    this.drawTool = undefined;
  }

  clearElevationProfile() {
    console.log('clear profile');
    this.elevationProfileModal.hide();

  }

  async initChart() {
    if (typeof this.Plotly === 'undefined') {
      // need to wait
      console.log('plotly not loaded yet')
      this.Plotly = await import('../../../shared/services/elevation-profile/lib/plotly.js') as any;
    }
    // this.Plotly.plot('gd', [{ x: [0, 1], y: [0, 1] }]);
  }

  ngOnDestroy() {
    this.chartDataObservable$.unsubscribe();
    this.drawingObservable$.unsubscribe();
  }

  reverseProfile() {
    this.elevationService.reverseProfile();
  }

  createReport() {
    this.elevationService.createReport();
  }
}
