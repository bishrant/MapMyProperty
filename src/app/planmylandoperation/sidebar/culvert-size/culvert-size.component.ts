import { AfterViewInit, Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ViewChild } from '@angular/core';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { CulvertSizeService } from 'src/app/shared/services/culvert-size.service';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import JobInfo from 'esri/tasks/support/JobInfo';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

@Component({
  selector: 'app-culvert-size',
  templateUrl: './culvert-size.component.html',
  styleUrls: ['./culvert-size.component.scss']
})
export class CulvertSizeComponent implements AfterViewInit {
  @ViewChild('culvertModal') culvertModal: any;
  @Input() mapView: any;

  culvertData: any = {
    Avg_Slope: 5,
    Clay_WA: 28,
    OBJECTID: 1,
    POLY_AREA: 0,
    Sand_WA: 34,
    Shape_Area: 1416,
    Shape_Length: 194,
    Silt_WA: 37
  };

  headerBgColor = '#353535'
  drawTool: String;
  isElevationProfileToolActive = false;
  faQuestionCircle = faQuestionCircle;
  culvertUtils: any;

  drawingObservable$: Subscription;
  closePopup$: Subscription;

  constructor(private culvertService: CulvertSizeService, private loaderService: LoaderService) { }

  ngAfterViewInit() {
    this.culvertUtils = this.culvertService.initialize({ mapView: this.mapView });
  }

  drawPourPoint() {

    this.culvertUtils.start();

    this.drawingObservable$ = this.culvertService.drawingComplete.subscribe(async (graphics: any) => {
      this.loaderService.isLoading.next(true);
      // console.time('graph')
      try {
        const gp: [Geoprocessor, any, GraphicsLayer] = this.culvertService.GetCulvertData(graphics);

        const jobInfo: JobInfo = await gp[0].submitJob(gp[1]);
        await gp[0].waitForJobCompletion(jobInfo.jobId);

        const finalPourPoint = await gp[0].getResultData(jobInfo.jobId, 'finalPourPoint')
        const outFeatureWatershed = await gp[0].getResultData(jobInfo.jobId, 'outFeatureWatershed')
        console.log(finalPourPoint, outFeatureWatershed);
        const pourPt = finalPourPoint.value.features[0];
        pourPt.symbol = { type: "simple-marker", style: "cross", outline: { width: 1.25 } };

        const watershed = outFeatureWatershed.value.features[0]
        watershed.symbol = { type: "simple-fill", color: [218, 47, 47, 0.25] };
        gp[2].addMany([watershed, pourPt]);

        this.culvertData = watershed.attributes;

        this.culvertModal.show();
      } catch (err) {
        console.error(err)
      } finally {
        this.loaderService.isLoading.next(false);
      }
    })
  }

  modelClosed() {
    this.culvertService.close();
    this.drawTool = undefined;
  }

  clearElevationProfile() {
    console.log('clear profile');
    this.culvertModal.hide();
  }

  ngOnDestroy() {
    this.drawingObservable$.unsubscribe();
  }


  createReport() {
    this.culvertService.createReport();
  }
}
