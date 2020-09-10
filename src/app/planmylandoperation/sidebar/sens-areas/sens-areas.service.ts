import { GetTxStateUrl, GetSensAreasGpUrl, GetBufferSensAreasGpUrl, GetSevereSlopesGpUrl } from '../../pmloUtils/arcgisURLs';
import { Injectable, Output, EventEmitter, Directive } from '@angular/core';
import Query from 'esri/tasks/support/Query';
import QueryTask from 'esri/tasks/QueryTask';
import FeatureSet from 'esri/tasks/support/FeatureSet';
import Geoprocessor from 'esri/tasks/Geoprocessor';
import { LineProps, FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { CreatePolygonSymbol, CreatePolylineSymbol } from 'src/app/shared/utils/GraphicStyles';
import {
  GetWetlandsProps,
  GetSlopeProps,
  GetStreamsLineProps,
  GetDefaultLineProps,
  GetWetlandsBufferProps,
  GetSMZProps
} from '../../pmloUtils/SensAreasStyles';

@Directive()
@Injectable({
  providedIn: 'root'
})
export class SensAreasService {
  @Output() updateState: EventEmitter<string> = new EventEmitter();

  constructor() {}

  isWithinTexas(geo: __esri.Geometry): Promise<boolean> {
    return new Promise((resolve) => {
      const _queryTask = new QueryTask({
        url: GetTxStateUrl()
      });
      const query = new Query();
      query.spatialRelationship = 'within';
      query.returnGeometry = false;
      query.geometry = geo;

      _queryTask.execute(query).then((results: any) => {
        if (results.features.length === 0) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }

  getSensAreas(graph: __esri.Graphic): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet
      };

      const gp: __esri.Geoprocessor = new Geoprocessor({
        url: GetSensAreasGpUrl()
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              Promise.all([
                gp.getResultData(jobInfo2.jobId, 'outputWetlands'),
                gp.getResultData(jobInfo2.jobId, 'outputSevereSlopes'),
                gp.getResultData(jobInfo2.jobId, 'outputSMZ'),
                gp.getResultData(jobInfo2.jobId, 'outputStreams'),
              ]).then((value) => {
                resolve(value);
              });
            }
          },
          (error) => {
            resolve([]);
          }
        );
      });
    });
  }

  addSensAreasToMap(gl: __esri.GraphicsLayer, areas: any[], sliderValue: number): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    areas.forEach((area, index) => {
      let symbol: any;
      let fillProps: FillProps;
      let lineProps: LineProps = GetDefaultLineProps();
      let origin = '';
      let isSlope: boolean = false;

      switch (index) {
        case 0:
          fillProps = GetWetlandsProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'wetlands';
          break;

        case 1:
          fillProps = GetSlopeProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'slopes';
          isSlope = true;
          break;

        case 2:
          fillProps = GetSMZProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'smz';
          break;

        case 3:
          lineProps = GetStreamsLineProps(graphicTransparency);
          symbol = CreatePolylineSymbol(lineProps);
          origin = 'streams';
          break;
      }

      this.addGraphicsToGL(gl, area.value, isSlope, symbol, origin, index, false);
    });
  }

  updateOpacity(gl: __esri.GraphicsLayer, origin: string, visible: boolean): void {
    gl.graphics.forEach((g) => {
      if (g.attributes.origin === origin) {
        g.visible = visible;
      }
      if (origin === 'wetlands' && g.attributes.origin === 'wetlandsBuffer')
      {
        g.visible = visible;
      }
    });
  }

  bufferGraphic(origin: string, graph: __esri.Graphic, inputFeet: number): Promise<any> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet,
        origin: origin,
        inputFeet: inputFeet.toString()
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: GetBufferSensAreasGpUrl(),
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              gp.getResultData(jobInfo2.jobId, 'outputBufferFeatures').then((value) => {
                resolve(value);
              });
            }
          },
          (error) => {
            resolve(null);
          }
        );
      });
    });
  }

  addBuffersOrSlopeToMap(gl: __esri.GraphicsLayer, fs: FeatureSet, origin: string, sliderValue: number): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    let fillProps: FillProps = GetSMZProps(graphicTransparency);
    let lineProps: LineProps = GetDefaultLineProps();
    let isSlope: boolean = false;
    let groupOrder: number = 0;

    if (origin === 'smz') {
      fillProps = GetSMZProps(graphicTransparency);
      groupOrder = 2;
    } else if (origin === 'wetlandsBuffer') {
      fillProps = GetWetlandsBufferProps(graphicTransparency);
      groupOrder = 0;
    } else if (origin === 'slopes') {
      fillProps = GetSlopeProps(graphicTransparency);
      groupOrder = 1;
      isSlope = true;
    }

    const symbol: any = CreatePolygonSymbol(lineProps, fillProps);

    this.addGraphicsToGL(gl, fs, isSlope, symbol, origin, groupOrder, true);
  }

  updateGraphicsOpacity(gl: __esri.GraphicsLayer, sliderValue: number): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    gl.graphics.forEach(g => {
      let symbol: any;
      let fillProps: FillProps;
      let lineProps: LineProps = GetDefaultLineProps();

      switch (g.attributes.origin) {
        case 'wetlands':
          fillProps = GetWetlandsProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          break;

        case 'wetlandsBuffer':
          fillProps = GetWetlandsBufferProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          break;

        case 'slopes':
          fillProps = GetSlopeProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          break;

        case 'smz':
          fillProps = GetSMZProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          break;

        case 'streams':
          lineProps = GetStreamsLineProps(graphicTransparency);
          symbol = CreatePolylineSymbol(lineProps);
          break;
      }
      g.symbol = symbol;
    });
  }

  setSlope(graph: __esri.Graphic, inputSlope: number): Promise<any>  {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
         inputPolygon: featureSet,
         minSlopeValue: inputSlope.toString()
       };

      const gp: Geoprocessor = new Geoprocessor({
        url: GetSevereSlopesGpUrl(),
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              gp.getResultData(jobInfo2.jobId, 'outputSevereSlopes').then((value) => {
                resolve(value);
              });
            }
          },
          (error) => {
            resolve(null);
          }
        );
      });
    });
  }

  removeGraphicsByAttribute(gl: __esri.GraphicsLayer, attribute: string): void {
    const graphicsToRemove: any = gl.graphics.filter((gra: __esri.Graphic) => {
      return (gra.attributes.origin === attribute);
    });

    gl.removeMany(graphicsToRemove);
  }

  private addGraphicsToGL(
    gl: __esri.GraphicsLayer,
    fs: FeatureSet,
    isSlope: boolean,
    symbol: any,
    origin: string,
    groupOrder: number,
    isFromBufferOrSlope: boolean
  ): void {
    if (isFromBufferOrSlope) {
      if (origin === 'smz' || origin === 'wetlandsBuffer' || origin === 'slopes') {
        this.removeGraphicsByAttribute(gl, origin);
      }
    }

    if (fs.features.length > 0) {
      const graphicsCollection: __esri.Graphic[] = [];
        fs.features.forEach((element) => {
          element.symbol = symbol;
          element.attributes.origin = origin;
          element.attributes.groupOrder = groupOrder;
          if (isSlope) {
            if (element.attributes.gridcode === 1) {
              graphicsCollection.push(element);
            }
          } else {
            graphicsCollection.push(element);
          }
        });

      gl.addMany(graphicsCollection);

      if (isFromBufferOrSlope)
      {
        gl.graphics.sort((a, b) => {
          if(a.attributes.groupOrder > b.attributes.groupOrder){
            return 1;
          }
          else if (a.attributes.groupOrder < b.attributes.groupOrder){
            return -1;
          }
          else {
            return 0;
          }
        });
      }
    }
  }
}