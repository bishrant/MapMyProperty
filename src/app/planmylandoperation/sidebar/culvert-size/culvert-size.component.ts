import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';

@Component({
  selector: 'app-culvert-size',
  templateUrl: './culvert-size.component.html',
  styleUrls: ['./culvert-size.component.scss']
})
export class CulvertSizeComponent {
  @ViewChild('elevationProfileModal') elevationProfileModal: any;
  @Input() mapView: any;

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

  constructor(private culvertService: CulvertSizeService, private loaderService: LoaderService) {  }

  drawPourPoint() {
    this.elvUtils = this.culvertService.initialize({ mapView: this.mapView });
    this.elvUtils.start();

    this.drawingObservable$ = this.culvertService.drawingComplete.subscribe((graphics: any) => {
      // this.loaderService.isLoading.next(true);
      // console.time('graph')
      this.culvertService.GetCulvertData(graphics)
      .then(x => console.log(x));
      // this.chartDataObservable$ = this.culvertService.chartData$.subscribe(async (d: any) => {
      //   this.culvertService.Plotly = this.Plotly;
      //   this.elevationProfileModal.show();
      //   this.loaderService.isLoading.next(false);
      //   console.timeEnd('graph')
      // });
    })
  }

  modelClosed() {
    this.culvertService.close();
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


  createReport() {
    this.culvertService.createReport();
  }
}
