import { EventEmitter, Injectable, Output } from '@angular/core';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import { CreatePointSymbol } from 'src/app/shared/utils/GraphicStyles';
import { AppConfiguration } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class PlotLayoutService {
  @Output() updatePlotsInMapState:EventEmitter<boolean> = new EventEmitter();

  constructor (
    private appConfig: AppConfiguration
  ) {}

  generatePlotLayout (graph: Graphic, within_row: number, between_rows: number, rotation_angle: number): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        input_polygon: featureSet,
        within_row: within_row,
        between_rows: between_rows,
        rotation_angle: rotation_angle
      }

      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.plotLayoutGPServiceURL
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              Promise.all([
                gp.getResultData(jobInfo2.jobId, 'sample_plots')
              ]).then((value) => {
                resolve(value);
              });
            }
          },
          (error) => {
            resolve([]);
            console.log(error);
          }
        );
      });
    });
  }

  addPlotsToMap (gl: GraphicsLayer, plots: any, boundaryId: string): void {
    const graphicsCollection: Graphic[] = [];
    plots.value.features.forEach((feature: any) => {
      feature.symbol = CreatePointSymbol({ size: 8, style: 'circle', color: 'white' });
      feature.setAttribute('boundaryId', boundaryId);
      graphicsCollection.push(feature);
      graphicsCollection.push(this.createPlotLabel(feature));
    });

    gl.addMany(graphicsCollection);
  }

  private createPlotLabel (feature: any):any {
    const textSymbol = {
      type: 'text',
      color: 'white',
      haloColor: 'black',
      haloSize: '1px',
      text: feature.getAttribute('OBJECTID'),
      yoffset: 10,
      font: {
        size: 12
      }
    };

    const textSymbolGraphic = feature.clone();
    textSymbolGraphic.symbol = textSymbol;

    return textSymbolGraphic;
  }
}
