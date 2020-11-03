import { Injectable } from '@angular/core';
import { FillProps, LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { GetDefaultSoilsLineProps, GetDrainageClassFillProps } from '../../pmloUtils/SoilsStyles';

@Injectable({
  providedIn: 'root'
})
export class HarvestOperationsService {

  constructor() { }

  addSoilsToMap(soilsGl: __esri.GraphicsLayer, soilMulti: any, boundaryId:string, sliderValue: number): void {
    const graphicOpacity:number = (100 - sliderValue) / 100;
    const graphicsCollection: __esri.Graphic[] = [];
    let lineProps: LineProps = GetDefaultSoilsLineProps(graphicOpacity);
    soilMulti.value.features.forEach((feature: any) => {
      const fillProps: FillProps = GetDrainageClassFillProps(feature, graphicOpacity);
      feature.symbol = CreatePolygonSymbol(lineProps, fillProps);
      feature.setAttribute('boundaryId', boundaryId);
      graphicsCollection.push(feature);
    });
    soilsGl.addMany(graphicsCollection);
  }
}
