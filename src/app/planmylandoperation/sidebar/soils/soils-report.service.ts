import { Injectable } from '@angular/core';
import { Point } from 'esri/geometry';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/support/Query';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import { AppConfiguration } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class SoilsReportService {
  constructor (
    private printTaskService: PrintTaskService,
    private appConfig: AppConfiguration
  ) {}

  async printMaps (
    mapView: __esri.MapView,
    pmloSoilsGL: __esri.GraphicsLayer,
    pmloSoilLabelsGL: __esri.GraphicsLayer,
    boundaryExtent: __esri.Extent
  ): Promise<any> {
    pmloSoilLabelsGL.visible = false;
    pmloSoilsGL.visible = false;
    return this.printTaskService
      .exportWebMap(mapView, 'PMLOSensAreasTemplate', 'jpg', boundaryExtent)
      .then((boundaryMapUrl: string) => {
        pmloSoilsGL.visible = true;
        pmloSoilLabelsGL.visible = true;
        return new Promise((resolve, reject) => {
          this.printTaskService.exportWebMap(mapView, 'PMLOSoilsTemplate', 'jpg', boundaryExtent).then((soilsMapUrl: string) => {
            resolve({
              boundaryImage: boundaryMapUrl,
              soilsImage: soilsMapUrl
            });
          })
            .catch(() => {
              reject(new Error('Error printing'));
            });
        });
      });
  }

  async getCountyFromCentroid (aoiCentroid: Point): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const countyQT = new QueryTask({
        url: this.appConfig.usCountyLayerURL
      });
      const query = new Query({
        spatialRelationship: 'intersects',
        returnGeometry: false,
        geometry: aoiCentroid,
        outFields: ['COUNTY_NAME', 'COUNTY_FIPSCODE']
      });

      countyQT.execute(query).then((results: any) => {
        resolve({
          countyName: results.features[0].attributes.COUNTY_NAME,
          countyFips: results.features[0].attributes.COUNTY_FIPSCODE
        });
      })
        .catch(() => {
          resolve({
            countyName: '',
            countyFips: ''
          });
        // reject('Error getting county from Centroid');
        });
    });
  }

  async getWatershedFromCentroid (aoiCentroid: Point): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const watershedQT = new QueryTask({
        url: this.appConfig.usWatershedLayerURL
      });
      const query = new Query({
        spatialRelationship: 'intersects',
        returnGeometry: false,
        geometry: aoiCentroid,
        outFields: ['huc8', 'name']
      });

      watershedQT.execute(query).then((results: any) => {
        if (results.features.length === 0) {
          resolve('');
        } else {
          const hucNumber: string = results.features[0].attributes.huc8;
          const hucName: string = results.features[0].attributes.name;
          resolve(hucNumber + ' ' + hucName);
        }
      })
        .catch(() => {
          resolve('');
        // reject('Error querying watershed');
        });
    });
  }

  async getSoilsReportHydroParams (boundary: __esri.Graphic): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [boundary];
      const params = {
        Input_Polygon: featureSet
      };
      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.soilsReportHydroParamsGPServiceURL
      });

      gp.execute(params).then((response) => {
        resolve({
          perennialFeet: response.results[0].value,
          intermittentFeet: response.results[1].value,
          ephemeralFeet: response.results[2].value,
          wetlandsAcres: response.results[3].value
        });
      })
        .catch(() => {
          resolve({
            perennialFeet: null,
            intermittentFeet: null,
            ephemeralFeet: null,
            wetlandsAcres: null
          });
        // reject('Error getting soils report hydro parameters');
        });
    });
  }
}
