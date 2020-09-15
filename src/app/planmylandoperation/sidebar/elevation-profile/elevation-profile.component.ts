import { Component, OnInit, Input, Inject } from '@angular/core';
import { ElevationProfile } from './ElevationProfileUtils';
import { ElevationProfileService } from 'src/app/shared/services/elevation-profile/elevation-profile.service';
import { Subscriber, Observable, Subscription } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core';
// import ElevationProfile from 'src/app/shared/utils/ElevationProfile/ElevationProfile.js'
// import HelloWorld from 'src/app/shared/utils/ElevationProfile/HelloWorld.js';

@Component({
  selector: 'app-elevation-profile',
  templateUrl: './elevation-profile.component.html',
  styleUrls: ['./elevation-profile.component.scss']
})
export class ElevationProfileComponent implements OnInit {

  baseMSL = false;
  isElevationProfileToolActive = false;
  @Input() mapView: any;

  elvUtils: any;
  Plotly: any;
  chartDataObservable$: Subscription;
  constructor(private elevationService: ElevationProfileService, private dialog: MatDialog) { }

  ngOnInit(): void { }

  startDrawingGraphics(value: any) {
    import('../../../shared/services/elevation-profile/lib/plotly.js').then((_plotly: any) => { this.Plotly = _plotly;

      this.openDialog()
    });
    return;
    console.log("Draw this ", value, this.elvUtils);
    this.elvUtils = undefined;
    this.elvUtils = this.elevationService.initialize({ mapView: this.mapView, slopeThreshold: 4, unit: 'feet' });
    this.elvUtils.start(value);

    this.chartDataObservable$ = this.elevationService.chartData$.subscribe(async (d: any) => {
      this.openDialog();

    });
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(ElevationProfileDialog, {
      width: '250px',
      data: { PlotLy: this.Plotly, name: 'test' },
      hasBackdrop: false,
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  clearElevationProfile() {
    console.log('clear profile');

  }

  ngOnDestroy() {
    this.chartDataObservable$.unsubscribe();
  }


}


@Component({
  selector: 'elevation-profile-dialog',
  templateUrl: 'elevation-profile-dialog.html',
})
export class ElevationProfileDialog implements OnInit {

  constructor(public dialogRef: MatDialogRef<ElevationProfileDialog>, @Inject(MAT_DIALOG_DATA) public data: any) { }
  async init() {
    let Plotly = this.data.Plotly;
    if (typeof Plotly === 'undefined') {
      // need to wait
      console.log('plotly not loaded yet')
      Plotly = await import('../../../shared/services/elevation-profile/lib/plotly.js') as any;
    }
    Plotly.plot('gd', [{ x: [0, 1], y: [0, 1] }]);
  }

  ngOnInit() {
    this.init();
  }

  close(): void {
    this.dialogRef.close();
  }


}
