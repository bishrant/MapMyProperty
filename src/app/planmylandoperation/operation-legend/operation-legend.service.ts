import { EventEmitter, Injectable, Output } from '@angular/core';
import { FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { RGBToHex } from 'src/app/shared/utils/Colors';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { PMLOOperationLegItem } from '../models/pmloOperationLegend.model';
import { OperationValues } from '../pmloUtils/OperationValues';
import { GetDefaultSoilsLineProps } from '../pmloUtils/SoilsStyles';

@Injectable({
  providedIn: 'root'
})
export class OperationLegendService {
  @Output() GetOperationLegend: EventEmitter<PMLOOperationLegItem[]> = new EventEmitter<PMLOOperationLegItem[]>();
  @Output() SetActiveHarvOperationLegenRadio: EventEmitter<string> = new EventEmitter<string>();
  @Output() SetActiveRegOperationLegenRadio: EventEmitter<string> = new EventEmitter<string>();

  constructor () { }

  setOperationLegendSymbols (value: string, pmloSoilsGL: __esri.GraphicsLayer, sliderValue: number): void {
    pmloSoilsGL.graphics.forEach((g: __esri.Graphic) => {
      let symbolColor: any = {};
      switch (g.attributes[value]) {
        case OperationValues.excessDr:
          symbolColor = OperationValues.darkBrownLegColor;
          break;

        case OperationValues.someExcessDr:
          symbolColor = OperationValues.mediumBrownLegColor;
          break;

        case OperationValues.wellDr:
          symbolColor = OperationValues.lightBrownLegColor;
          break;

        case OperationValues.modWellDr:
          symbolColor = OperationValues.whiteLegColor;
          break;

        case OperationValues.somePoorDr:
          symbolColor = OperationValues.lightBlueLegColor;
          break;

        case OperationValues.poorDr:
          symbolColor = OperationValues.mediumBlueLegColor;
          break;

        case OperationValues.veryPoorDr:
          symbolColor = OperationValues.darkBlueLegColor;
          break;

        case OperationValues.verySevere:
          symbolColor = OperationValues.darkRedLegColor;
          break;

        case OperationValues.severe:
          symbolColor = OperationValues.orangeLegColor;
          break;

        case OperationValues.moderate:
          symbolColor = OperationValues.yellowLegColor;
          break;

        case OperationValues.slight:
          symbolColor = OperationValues.greenLegColor;
          break;

        case OperationValues.poorSuited:
          symbolColor = OperationValues.orangeLegColor;
          break;

        case OperationValues.modSuited:
          symbolColor = OperationValues.yellowLegColor;
          break;

        case OperationValues.wellSuited:
          symbolColor = OperationValues.greenLegColor;
          break;

        case OperationValues.high:
          symbolColor = OperationValues.orangeLegColor;
          break;

        case OperationValues.low:
          symbolColor = OperationValues.greenLegColor;
          break;

        case OperationValues.unsuited:
          symbolColor = OperationValues.darkRedLegColor;
          break;

        default:
          symbolColor = OperationValues.greyLegColor;
          break;
      }

      const opac: number = (100 - sliderValue) / 100;
      symbolColor.a = opac
      const lineProps = GetDefaultSoilsLineProps(opac);
      const fillProps: FillProps = {
        color: symbolColor,
        style: (g.symbol as any).style,
        opacity: 1
      };
      (g.symbol as any) = CreatePolygonSymbol(lineProps, fillProps);
    });
  }

  setOperationLegend (value: string, isFromHarvest: boolean): void {
    const operationLegItems: PMLOOperationLegItem[] = [];
    if (['drclassdcd'].includes(value)) {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.darkBrownLegColor), OperationValues.excessDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.mediumBrownLegColor), OperationValues.someExcessDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.lightBrownLegColor), OperationValues.wellDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.whiteLegColor), OperationValues.modWellDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.lightBlueLegColor), OperationValues.somePoorDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.mediumBlueLegColor), OperationValues.poorDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.darkBlueLegColor), OperationValues.veryPoorDr));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greyLegColor), OperationValues.notRated));
    } else if (['RoadSuitNS', 'HEquipOp', 'MechPlant', 'HandPlant', 'SitePrepS', 'SitePrepD'].includes(value)) {
      if (['MechPlant', 'HandPlant', 'SitePrepS', 'SitePrepD'].includes(value)) {
        operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.darkRedLegColor), OperationValues.unsuited));
      }
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.orangeLegColor), OperationValues.poorSuited));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.yellowLegColor), OperationValues.modSuited));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greenLegColor), OperationValues.wellSuited));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greyLegColor), OperationValues.notRated));
    } else if (['EroHzdORT'].includes(value)) {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.darkRedLegColor), OperationValues.verySevere));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.orangeLegColor), OperationValues.severe));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.yellowLegColor), OperationValues.moderate));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greenLegColor), OperationValues.slight));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greyLegColor), OperationValues.notRated));
    } else if (['CLRoadLndg', 'EroHzdRT', 'SoilRutHzd'].includes(value)) {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.orangeLegColor), OperationValues.severe));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.yellowLegColor), OperationValues.moderate));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greenLegColor), OperationValues.slight));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greyLegColor), OperationValues.notRated));
    } else if (['SeedMortal', 'FireDamage'].includes(value)) {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.orangeLegColor), OperationValues.high));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.yellowLegColor), OperationValues.moderate));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greenLegColor), OperationValues.low));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(OperationValues.greyLegColor), OperationValues.notRated));
    }
    if (isFromHarvest) {
      this.SetActiveHarvOperationLegenRadio.emit(value);
    } else {
      this.SetActiveRegOperationLegenRadio.emit(value);
    }
    this.GetOperationLegend.emit(operationLegItems);
  }

  private GetLegendHexColor (legendColor: any): string {
    return RGBToHex([legendColor.r, legendColor.g, legendColor.b]);
  }
}
