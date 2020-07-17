/* eslint-disable no-unused-expressions */
/* eslint-disable space-before-function-paren */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import { GetTxStateUrl, GetSensAreasGpUrl } from '../../pmloUtils/arcgisURLs';
import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import Query from 'esri/tasks/support/Query';
import QueryTask from 'esri/tasks/QueryTask';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Graphic from 'esri/Graphic';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import { NgxSpinnerService } from 'ngx-spinner';
import { LineProps, FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';

@Directive()
@Injectable({
  providedIn: 'root'
})
export class SensAreasService {
  @Output() updateState: EventEmitter<string> = new EventEmitter();

  constructor(
    private spinner: NgxSpinnerService
  ) {}

  isWithinTexas(geo: __esri.Geometry): Promise<boolean> {
    return new Promise((resolve) => {
      const _queryTask = new QueryTask({
        url: GetTxStateUrl()
      });

      const query = new Query();
      query.spatialRelationship = 'within';
      query.returnGeometry = false;
      query.geometry = geo;

      -_queryTask.execute(query).then((results) => {
        if (results.features.length === 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

  getSensAreas(graph: Graphic): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: GetSensAreasGpUrl()
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then((jobInfo2) => {
          if (jobInfo2.jobStatus === 'job-succeeded') {
            Promise.all([
              gp.getResultData(jobInfo2.jobId, 'outputWetlands'),
              gp.getResultData(jobInfo2.jobId, 'outputSevereSlopes'),
              gp.getResultData(jobInfo2.jobId, 'outputSMZ'),
              gp.getResultData(jobInfo2.jobId, 'outputStreams')
            ]).then((value) => {
              resolve(value);
            });
          }
        },
        (_error: any) => {
          resolve([]);
        });
      });
    });
  }

  addSensAreasToMap(gl: __esri.GraphicsLayer, areas: any[]): void {
    areas.forEach((area, index) => {
      let symbol: any;
      let fillProps: FillProps;
      const lineProps: LineProps = {
        style: 'dash',
        color: null,
        opacity: 100,
        width: 0
      };
      let origin = '';
      switch (index) {
        case 0:
          fillProps = {
            color: { r: 102, g: 153, b: 205, a: 1 },
            style: 'solid',
            opacity: 100
          };
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'wetlands';
          break;

        case 1:
          fillProps = {
            color: { r: 255, g: 0, b: 0, a: 1 },
            style: 'solid',
            opacity: 100
          };
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'slopes';
          break;

        case 2:
          fillProps = {
            color: { r: 255, g: 255, b: 0, a: 1 },
            style: 'solid',
            opacity: 100
          };
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'smz';
          break;

        case 3:
          lineProps.color = { r: 51, g: 102, b: 255, a: 1 };
          lineProps.width = 3;
          symbol = CreatePolylineSymbol(lineProps);
          origin = 'streams';
          break;
      }

      this.addGraphicsToGL(gl, area.value, index, symbol, origin);
    });
  }

  private addGraphicsToGL(gl: __esri.GraphicsLayer, fs: FeatureSet, index: number, symbol: any, origin:string): void {
    if (fs.features.length > 0) {
      const graphicsCollection: Graphic[] = [];
      fs.features.forEach(element => {
        element.symbol = symbol;
        element.attributes.origin = origin;
        if (index === 1) {
          if (element.attributes.gridcode === 1) {
            graphicsCollection.push(element);
          }
        } else {
          graphicsCollection.push(element);
        }
      });
      gl.addMany(graphicsCollection);
    }
  }

  updateOpacity(gl: __esri.GraphicsLayer, origin:string, visible:boolean):void {
    gl.graphics.forEach((g: any) => {
      if (g.attributes.origin === origin) {
        g.visible = visible;
      }
    });
  }
}
