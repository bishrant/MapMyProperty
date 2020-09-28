import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import { GetClipSoilsGpUrl } from '../../pmloUtils/arcgisURLs';
import { LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { GetDefaultLineProps } from '../../pmloUtils/SensAreasStyles';
import { GetSoilFillProps } from '../../pmloUtils/SoilsStyles';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';

@Injectable({
  providedIn: 'root'
})
export class SoilsService {

  private ssurgoTabularUrl = 'https://SDMDataAccess.sc.egov.usda.gov/Tabular/post.rest';

  constructor(
    private http: HttpClient
  ) { }

  identifySoil(mapView: __esri.MapView, mapPoint: __esri.Point, origin: string): Promise<any>
  {
    return new Promise((resolve, reject) => {
      const queryFile:string = 'assets/soilQueries/' + origin + 'SoilQuery.txt';

      this.http.get(queryFile, { responseType: 'text' as 'json' }).subscribe(data => {
        const queryString = data.toString().replace('zzLon', mapPoint.longitude.toString()).replace('zzLat', mapPoint.latitude.toString());
        console.log(queryString);
        try {
          this.http.post(this.ssurgoTabularUrl, {
            query: queryString,
            format: 'json'
        }).subscribe(response => {
          resolve(response);
        });
        } catch (e) {
          reject(e);
        }
      })
    });
  }

  getSoils(graph: __esri.Graphic): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        'Area of interest': featureSet,
        queryFileName: 'PMLOSoilsQuery'
      };

      const gp: __esri.Geoprocessor = new Geoprocessor({
        url: GetClipSoilsGpUrl()
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              Promise.all([
                gp.getResultData(jobInfo2.jobId, 'out_multipartSoils'),
                gp.getResultData(jobInfo2.jobId, 'out_singlepartSoils')
              ]).then((value) => {
                resolve(value);
              });
            }
          },
        (error) => {
          resolve([]);
        });
      });
    });
  }

  addSoilsToMap(gl: __esri.GraphicsLayer, soilMp: any, sliderValue: number): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    const graphicsCollection: __esri.Graphic[] = [];
    const lineProps: LineProps = GetDefaultLineProps();
    soilMp.value.features.forEach((feature: any) => {
      let hexcolor: string = feature.getAttribute('HexColor');
      if (feature.getAttribute('musym') === 'W')
      {
        hexcolor = '#7ab6f5'
      }
      const fillProps = GetSoilFillProps(hexcolor);
      feature.symbol = CreatePolygonSymbol(lineProps, fillProps);
      graphicsCollection.push(feature);
    });

    gl.addMany(graphicsCollection);
  }
}
