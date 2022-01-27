import { EventEmitter, Injectable, Output } from '@angular/core';
import { Extent } from '@arcgis/core/geometry';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import MapView from '@arcgis/core/views/MapView';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import { CreatePointSymbol } from 'src/app/shared/utils/GraphicStyles';
import { AppConfiguration } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class PlotLayoutService {
  @Output() updatePlotsInMapState: EventEmitter<boolean> = new EventEmitter();

  constructor (private appConfig: AppConfiguration, private printTaskService: PrintTaskService) {}

  generatePlotLayout (graph: Graphic, within_row: number, between_rows: number, rotation_angle: number): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        input_polygon: featureSet,
        within_row: within_row,
        between_rows: between_rows,
        rotation_angle: rotation_angle
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.plotLayoutGPServiceURL
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              gp.getResultData(jobInfo2.jobId, 'sample_plots').then((value) => {
                resolve([value]);
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

  addPlotsToMap (gl: GraphicsLayer, labelsgl: GraphicsLayer, plots: any, boundaryId: string): void {
    const graphicsCollection: Graphic[] = [];
    const labelGraphicsCollection: Graphic[] = [];
    plots.value.features.forEach((feature: any) => {
      feature.symbol = CreatePointSymbol({ size: 8, style: 'circle', color: 'white' });
      feature.setAttribute('boundaryId', boundaryId);
      graphicsCollection.push(feature);
      labelGraphicsCollection.push(this.createPlotLabel(feature));
    });

    gl.addMany(graphicsCollection);
    labelsgl.addMany(labelGraphicsCollection);
  }

  async printMap (mapView: MapView, boundaryExtent: Extent): Promise<any> {
    return new Promise((resolve, reject) => {
      this.printTaskService
        .exportWebMap(mapView, 'SamplePlotsTemplate', 'jpg', boundaryExtent)
        .then((printedMapUrl: string) => {
          resolve({
            mapImage: printedMapUrl
          });
        })
        .catch(() => {
          reject(new Error('Error printing plot layout'));
        });
    })
  }

  private createPlotLabel (feature: any): any {
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
