import { Injectable } from '@angular/core';
import { Extent } from '@arcgis/core/geometry';
import Graphic from '@arcgis/core/Graphic';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import MapView from '@arcgis/core/views/MapView';
import { FillProps, LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { PrintTaskService } from 'src/app/shared/services/PrintTask.service';
import { SquareMetersToAcres } from 'src/app/shared/utils/ConversionTools';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { ReportsService } from '../../pmloUtils/reports.service';
import { GetDefaultSoilsLineProps, GetDrainageClassFillProps } from '../../pmloUtils/SoilsStyles';

@Injectable({
  providedIn: 'root'
})
export class HarvestOperationsService {
  constructor (
    private printTaskService: PrintTaskService,
    private reportsService: ReportsService
  ) {}

  addSoilsToMap (soilsGl: GraphicsLayer, soilMulti: any, boundaryId: string, sliderValue: number): void {
    const graphicOpacity: number = (100 - sliderValue) / 100;
    const graphicsCollection: Graphic[] = [];
    const lineProps: LineProps = GetDefaultSoilsLineProps(graphicOpacity);
    soilMulti.value.features.forEach((feature: any) => {
      const fillProps: FillProps = GetDrainageClassFillProps(feature, graphicOpacity);
      feature.symbol = CreatePolygonSymbol(lineProps, fillProps);
      feature.setAttribute('boundaryId', boundaryId);
      graphicsCollection.push(feature);
    });
    soilsGl.addMany(graphicsCollection);
  }

  createOperationsReport (selectedRadio: string, mv: MapView, soilsGl: GraphicsLayer, boundaryExtent: Extent, reportTitle:string): Promise<string> {
    return new Promise((resolve) => {
      this.printTaskService.exportWebMap(mv, 'PMLOSensAreasTemplate', 'jpg', boundaryExtent).then((mapImageUrl: string) => {
        const soilsAttributes:any = soilsGl.graphics.map((soil:Graphic) => {
          soil.attributes.Acres = SquareMetersToAcres(soil.attributes.Shape_Area);
          return soil.attributes;
        });
        const reportParams:any = {
          projName: reportTitle,
          imageUrl: mapImageUrl,
          operation: selectedRadio,
          soils: soilsAttributes
        };
        this.reportsService
          .getOperationalConsiderationsReport({ content: JSON.stringify(reportParams) })
          .subscribe((response:any) => {
            resolve(response.fileName);
          });
      });
    });
  }
}
