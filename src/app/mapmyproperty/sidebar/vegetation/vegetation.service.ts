import { EventEmitter, Injectable, Output } from '@angular/core';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import Graphic from 'esri/Graphic';
import { AppConfiguration } from 'src/config';
import { outputVegetationMultipart } from './dummydata';
import Point from 'esri/geometry/Point';
import Polygon from 'esri/geometry/Polygon';
import GeometryService from 'esri/tasks/GeometryService';
import { GetVegetationTextSymbol } from './VegetationUtils';

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

  addVegetationLabelsToMap (gl: __esri.GraphicsLayer, vegetationSingle: any, sliderValue:number): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    const geometryService: GeometryService = new GeometryService({
      url: this.appConfig.geometryServiceURL
    });
    if (vegetationSingle.value.features.length > 0) {
      const geometries:Polygon[] = vegetationSingle.value.features.map((feature:Graphic) => {
        return feature.geometry;
      });
      const alpha:number = graphicTransparency;
      geometryService.labelPoints(geometries).then((labelPoints:any) => {
        const labelGraphics = labelPoints.map((labelPoint:Point, i:number) => {
          const labelPointGraphic = new Graphic({
            geometry: labelPoint,
            symbol: GetVegetationTextSymbol(vegetationSingle.value.features[i].attributes.VegID, alpha)
          });
          return labelPointGraphic;
        });

        // add the labels to the map
        gl.addMany(labelGraphics);
      });
    }
  }


  mockVegetationData (graphic: Graphic): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve(outputVegetationMultipart)
      this.vegetationDataChanged.emit(outputVegetationMultipart);
      this.vegetationDataStatus.emit('');
    })
  }
}
