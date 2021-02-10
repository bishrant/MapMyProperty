import { Injectable } from '@angular/core';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import Graphic from 'esri/Graphic';
import { AppConfiguration } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class VegetationService {
  constructor (private appConfig:AppConfiguration) { }

  getVegetation (graph: Graphic): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = { inputPolygon: featureSet };

      const gp: __esri.Geoprocessor = new Geoprocessor({
        url: this.appConfig.vegetation.clipGPService
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              Promise.all([
                gp.getResultData(jobInfo2.jobId, 'outputVegetationMultipart'),
                gp.getResultData(jobInfo2.jobId, 'outputClipVegetation')
              ]).then((value) => {
                resolve(value);
              });
            }
          },
          (error) => {
            reject(error);
          });
      });
    });
  }
}
