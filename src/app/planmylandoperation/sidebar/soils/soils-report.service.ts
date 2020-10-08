import { Injectable } from '@angular/core';
import { Point } from 'esri/geometry';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import { GetCountyQueryUrl, GetSoilsReportHydroParamsUrl, GetWatershedQueryUrl } from '../../pmloUtils/arcgisURLs';
import QueryTask from 'esri/tasks/QueryTask';
import Query from 'esri/tasks/support/Query';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';

@Injectable({
  providedIn: 'root'
})
export class SoilsReportService {

  constructor(
    private printTaskService:PrintTaskService
  ) { }

  async printMaps(mapView:__esri.MapView, pmloSoilsGL:__esri.GraphicsLayer, pmloSoilLabelsGL:__esri.GraphicsLayer):Promise<any> {
    pmloSoilLabelsGL.visible = false;
    pmloSoilsGL.visible = false;
    return this.printTaskService.exportWebMap(mapView,'PMLOTemplate', 'jpg').then((boundaryMapUrl:string) => {
      pmloSoilsGL.visible = true;
      pmloSoilLabelsGL.visible = true;
      return new Promise((resolve) => {
        this.printTaskService.exportWebMap(mapView,'PMLOTemplate', 'jpg').then((soilsMapUrl:string) => {
          resolve({
            boundaryImage: boundaryMapUrl,
            soilsImage: soilsMapUrl
          });
        });
      });
    });
  }

  async getCountyFromCentroid(aoiCentroid:Point):Promise<any> {
    return new Promise<any>((resolve) => {
      const countyQT = new QueryTask({
        url: GetCountyQueryUrl()
      });
      const query = new Query({
        spatialRelationship: 'intersects',
        returnGeometry: false,
        geometry: aoiCentroid,
        outFields: ['COUNTY_NAME', 'COUNTY_FIPSCODE']
      });

      countyQT.execute(query).then((results:any) => {
        resolve({
          countyName: results.features[0].attributes.COUNTY_NAME,
          countyFips: results.features[0].attributes.COUNTY_FIPSCODE
        });
      });
    });
  }

  async getWatershedFromCentroid(aoiCentroid:Point):Promise<string> {
    return new Promise<string>((resolve) => {
      const watershedQT = new QueryTask({
        url: GetWatershedQueryUrl()
      });
      const query = new Query({
        spatialRelationship: 'intersects',
        returnGeometry: false,
        geometry: aoiCentroid,
        outFields: ['huc8', 'name']
      });

      watershedQT.execute(query).then((results:any) => {
        if (results.features.length === 0) {
          resolve('');
        } else {
          const hucNumber:string = results.features[0].attributes.huc8;
          const hucName:string = results.features[0].attributes.name;
          resolve(hucNumber + ' ' + hucName);
        }
      });
    });
  }

  async getSoilsReportHydroParams(boundary:__esri.Graphic):Promise<any> {
    return new Promise<any>((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [boundary];
      const params = {
        Input_Polygon: featureSet
      };
      const gp: Geoprocessor = new Geoprocessor({
        url: GetSoilsReportHydroParamsUrl()
      });

      gp.execute(params).then((response) => {
        resolve({
          perennialFeet: response.results[0].value,
          intermittentFeet: response.results[1].value,
          ephemeralFeet: response.results[2].value,
          wetlandsAcres: response.results[3].value,
        });
      });
    });
  }

  createReport(reportParams:any):string {
    return '';
  }
}
