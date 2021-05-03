import { EventEmitter, Injectable, Output } from '@angular/core';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import Graphic from '@arcgis/core/Graphic';
import { AppConfiguration } from 'src/config';
import { outputVegetationMultipart } from './dummydata';
@Injectable({
  providedIn: 'root'
})
export class VegetationService {
  @Output() vegetationDataStatus = new EventEmitter<string>();
  @Output() vegetationDataChanged = new EventEmitter<any>();
  @Output() selectPolygonFromTable:EventEmitter<Graphic> = new EventEmitter();
  constructor (private appConfig:AppConfiguration) { }

  getVegetationData (graphic: Graphic): Promise<any[]> {
    this.vegetationDataStatus.emit('Loading... Please wait.')
    return new Promise((resolve, reject) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graphic];
      const params = { inputPolygon: featureSet };

      const gp: Geoprocessor = new Geoprocessor({
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
                this.vegetationDataChanged.emit(value);
                this.vegetationDataStatus.emit('');
              });
            }
          },
          (error) => {
            reject(error);
            this.vegetationDataStatus.emit('An error occured. Please try again.')
          });
      });
    });
  }

  mockVegetationData (): Promise<any> {
    return new Promise((resolve) => {
      resolve(outputVegetationMultipart)
      this.vegetationDataChanged.emit(outputVegetationMultipart);
      this.vegetationDataStatus.emit('');
    })
  }
}
