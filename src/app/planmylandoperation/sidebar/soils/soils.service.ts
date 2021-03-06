import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import FeatureSet from '@arcgis/core/tasks/support/FeatureSet';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import GeometryService from '@arcgis/core/tasks/GeometryService';
import { FillProps, LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { GetDefaultSoilsLineProps, GetOrageLineProps, GetSoilFillProps, GetSoilTextSymbol } from '../../pmloUtils/SoilsStyles';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { Point, Polygon } from '@arcgis/core/geometry';
import Graphic from '@arcgis/core/Graphic';
import { TextSymbol } from '@arcgis/core/symbols';
import { AppConfiguration } from 'src/config';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

@Injectable({
  providedIn: 'root'
})
export class SoilsService {
  @Output() showTableModal:EventEmitter<boolean> = new EventEmitter();
  @Output() shareMultiSoils:EventEmitter<Graphic[]> = new EventEmitter();
  @Output() selectPolygonFromTable:EventEmitter<Graphic> = new EventEmitter();
  @Output() updateSliderValue:EventEmitter<any> = new EventEmitter();
  @Output() soilsGLHasPolygons:EventEmitter<boolean> = new EventEmitter();

  constructor (
    private http: HttpClient,
    private appConfig:AppConfiguration
  ) { }

  identifySoil (mapPoint: Point, origin: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const queryFile:string = 'assets/soilQueries/' + origin + 'SoilQuery.txt';

      this.http.get(queryFile, { responseType: 'text' as 'json' }).subscribe(data => {
        const queryString = data.toString().replace('zzLon', mapPoint.longitude.toString()).replace('zzLat', mapPoint.latitude.toString());
        try {
          this.http.post(this.appConfig.ssurgoTabularURL, {
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

  getSoils (graph: Graphic): Promise<any[]> {
    return new Promise((resolve) => {
      const featureSet: FeatureSet = new FeatureSet();
      featureSet.features = [graph];
      const params = {
        'Area of interest': featureSet,
        queryFileName: 'PMLOSoilsQuery'
      };

      const gp: Geoprocessor = new Geoprocessor({
        url: this.appConfig.clipSoilsGPServiceURL
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
            console.error(error);
          });
      });
    });
  }

  addSoilsToMap (gl: GraphicsLayer, soilMulti: any, boundaryId:string, sliderValue:number, isOrange:boolean): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    const graphicsCollection: Graphic[] = [];
    let lineProps: LineProps = GetDefaultSoilsLineProps(graphicTransparency);
    this.shareMultiSoils.emit(soilMulti.value.features);
    soilMulti.value.features.forEach((feature: any) => {
      let fillProps: FillProps;
      if (!isOrange) {
        fillProps = GetSoilFillProps(feature, graphicTransparency);
      } else {
        lineProps = GetOrageLineProps();
        fillProps = GetSoilFillProps(feature, 0);
      }
      feature.symbol = CreatePolygonSymbol(lineProps, fillProps);
      feature.setAttribute('boundaryId', boundaryId);
      graphicsCollection.push(feature);
    });

    gl.addMany(graphicsCollection);
  }

  addSoilLabelsToMap (gl: GraphicsLayer, soilSingle: any, boundaryId:string, sliderValue:number, isOrange:boolean): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    const geometryService: GeometryService = new GeometryService({
      url: this.appConfig.geometryServiceURL
    });
    if (soilSingle.value.features.length > 0) {
      const geometries:Polygon[] = soilSingle.value.features.map((feature:Graphic) => {
        return feature.geometry;
      });
      let alpha:number = graphicTransparency;
      if (isOrange) {
        alpha = 1;
      }
      geometryService.labelPoints(geometries).then((labelPoints:any) => {
        const labelGraphics = labelPoints.map((labelPoint:Point, i:number) => {
          const labelPointGraphic = new Graphic({
            geometry: labelPoint,
            symbol: GetSoilTextSymbol(soilSingle.value.features[i].attributes.musym, isOrange, alpha),
            attributes: {
              boundaryId: boundaryId
            }
          });
          return labelPointGraphic;
        });

        // add the labels to the map
        gl.addMany(labelGraphics);
      });
    }
  }

  updateGraphicsOpacity (soilsgl: GraphicsLayer, labelsgl: GraphicsLayer, sliderValue: number, isOrange:boolean, isFromSoils:boolean): void {
    const graphicTransparency:number = (100 - sliderValue) / 100;
    if (isFromSoils) {
      if (isOrange === false) {
        this.setSymbolColor(soilsgl, false, graphicTransparency);
        this.setSymbolColor(labelsgl, false, graphicTransparency);
      } else {
        this.setSymbolColor(soilsgl, true, 0);
        this.setSymbolColor(labelsgl, true, graphicTransparency);
      }
    } else {
      this.setSymbolColor(soilsgl, false, graphicTransparency);
      this.setSymbolColor(labelsgl, true, 0);
    }
  }

  setSymbolColor (gl: GraphicsLayer, isOrange:boolean, alpha: number): void {
    gl.graphics.forEach((g: Graphic) => {
      let symbol: any;
      let lineProps: LineProps;
      let fillProps: FillProps
      switch (g.geometry.type) {
        case 'polygon':
          if (isOrange === false) {
            lineProps = GetDefaultSoilsLineProps(alpha);
          } else {
            lineProps = GetOrageLineProps();
          }
          fillProps = GetSoilFillProps(g, alpha);
          symbol = CreatePolygonSymbol(lineProps, fillProps);
          break;

        case 'point':
          if (isOrange === true) {
            alpha = 1;
          }
          symbol = GetSoilTextSymbol((g.symbol as TextSymbol).text, isOrange, alpha)
          break;
      }

      g.symbol = symbol;
    });
  }

  clearSoilGLayers (soilsgl: GraphicsLayer, labelsgl: GraphicsLayer): void {
    labelsgl.removeAll();
    soilsgl.removeAll();
    this.showTableModal.emit(false);
    this.shareMultiSoils.emit([]);
  }
}
