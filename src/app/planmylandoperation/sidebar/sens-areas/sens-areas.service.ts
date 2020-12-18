import { Injectable, Directive } from '@angular/core';
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
import { AppConfiguration } from 'src/config';

@Directive()
@Injectable({
  providedIn: 'root'
})
export class SensAreasService {
  constructor (
    private appConfig: AppConfiguration
  ) { }

  async isWithinTexas (geo: __esri.Geometry): Promise<boolean> {
    return new Promise((resolve) => {
      const _queryTask = new QueryTask({
        url: this.appConfig.usCountyLayerURL
      });
      const query = new Query();
      query.spatialRelationship = 'intersects';
      query.returnGeometry = false;
      query.geometry = geo;
      query.outFields = ['STATE'];

      _queryTask.execute(query).then((result: any) => {
        if (result.features.length === 0) {
          resolve(false);
        } else {
          let isInTexas: boolean = true;
          result.features.forEach((co: __esri.Graphic) => {
            if (co.attributes.STATE !== '48') {
              isInTexas = false;
            }
          });
          resolve(isInTexas);
        }
      }).catch((error:any) => {
        resolve(null);
      });
    });
  }

  getSensAreas (graph: __esri.Graphic, isInTexas: boolean, smzValue: number, wetAreasBufferValue: number, severeSlopesValue: number): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet,
        isOnlyTexas: isInTexas,
        smzValue: smzValue,
        wetAreasBufferValue: wetAreasBufferValue,
        severeSlopesValue: severeSlopesValue
      };

      const gp: __esri.Geoprocessor = new Geoprocessor({
        url: this.appConfig.sensAreasGPServiceURL
      });

      gp.submitJob(params).then((jobInfo) => {
        gp.waitForJobCompletion(jobInfo.jobId).then(
          (jobInfo2) => {
            if (jobInfo2.jobStatus === 'job-succeeded') {
              Promise.all([
                gp.getResultData(jobInfo2.jobId, 'outputWetlands'),
                gp.getResultData(jobInfo2.jobId, 'outputWetlandsBuffer'),
                gp.getResultData(jobInfo2.jobId, 'outputSevereSlopes'),
                gp.getResultData(jobInfo2.jobId, 'outputSMZ'),
                gp.getResultData(jobInfo2.jobId, 'outputStreams')
              ]).then((value) => {
                resolve(value);
              }).catch((error:any) => {
                console.log(error);
                resolve([]);
              });
            }
          },
          (error) => {
            console.error(error);
            resolve([]);
          }
        );
      });
    });
  }

  addSensAreasToMap (gl: __esri.GraphicsLayer, areas: any[], boundaryId: string, sliderValue: number): void {
    const graphicTransparency: number = (100 - sliderValue) / 100;
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
          fillProps = GetWetlandsBufferProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'wetlandsBuffer';
          break;

        case 2:
          fillProps = GetSlopeProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'slopes';
          isSlope = true;
          break;

        case 3:
          fillProps = GetSMZProps(graphicTransparency);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          origin = 'smz';
          break;

        case 4:
          lineProps = GetStreamsLineProps(graphicTransparency);
          symbol = CreatePolylineSymbol(lineProps);
          origin = 'streams';
          break;
      }

      this.addGraphicsToGL(gl, area.value, isSlope, symbol, origin, index, false, boundaryId);
    });
  }

  updateOpacity (gl: __esri.GraphicsLayer, origin: string, visible: boolean): void {
    gl.graphics.forEach((g) => {
      if (g.attributes.origin === origin) {
        g.visible = visible;
      }
      if (origin === 'wetlands' && g.attributes.origin === 'wetlandsBuffer') {
        g.visible = visible;
      }
    });
  }

  async bufferGraphic (origin: string, graph: __esri.Graphic, inputFeet: number): Promise<any> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet,
        origin: origin,
        inputFeet: inputFeet.toString()
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.bufferSensAreasGPServiceURL
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
            console.error(error);
            resolve(null);
          }
        );
      });
    });
  }

  addBuffersOrSlopeToMap (gl: __esri.GraphicsLayer, fs: FeatureSet, origin: string, sliderValue: number, boundaryId: string): void {
    const graphicTransparency: number = (100 - sliderValue) / 100;
    let fillProps: FillProps = GetSMZProps(graphicTransparency);
    const lineProps: LineProps = GetDefaultLineProps();
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

    this.addGraphicsToGL(gl, fs, isSlope, symbol, origin, groupOrder, true, boundaryId);
  }

  updateGraphicsOpacity (gl: __esri.GraphicsLayer, sliderValue: number): void {
    const graphicTransparency: number = (100 - sliderValue) / 100;
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

  async setSlope (graph: __esri.Graphic, inputSlope: number, isInTexas: boolean): Promise<any> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        inputPolygon: featureSet,
        minSlopeValue: inputSlope.toString(),
        isOnlyTexas: isInTexas
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.severeSlopesGPServiceURL
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
            console.error(error);
            resolve(null);
          }
        );
      });
    });
  }

  removeGraphicsByAttribute (gl: __esri.GraphicsLayer, attribute: string): void {
    const graphicsToRemove: any = gl.graphics.filter((gra: __esri.Graphic) => {
      return (gra.attributes.origin === attribute);
    });

    gl.removeMany(graphicsToRemove);
  }

  private addGraphicsToGL (
    gl: __esri.GraphicsLayer,
    fs: FeatureSet,
    isSlope: boolean,
    symbol: any,
    origin: string,
    groupOrder: number,
    isFromBufferOrSlope: boolean,
    boundaryId: string
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
        element.setAttribute('origin', origin);
        element.setAttribute('groupOrder', groupOrder);
        element.setAttribute('boundaryId', boundaryId);
        if (isSlope) {
          if (element.attributes.gridcode !== undefined) {
            if (element.attributes.gridcode === 1) {
              graphicsCollection.push(element);
            }
          } else {
            graphicsCollection.push(element);
          }
        } else {
          graphicsCollection.push(element);
        }
      });

      gl.addMany(graphicsCollection);

      if (isFromBufferOrSlope) {
        gl.graphics.sort((a, b) => {
          if (a.attributes.groupOrder > b.attributes.groupOrder) {
            return 1;
          } else if (a.attributes.groupOrder < b.attributes.groupOrder) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    }
  }
}
