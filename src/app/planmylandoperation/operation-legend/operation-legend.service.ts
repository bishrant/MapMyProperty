import { EventEmitter, Injectable, Output } from '@angular/core';
import { FillProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { HexToRGB, RGBToHex } from 'src/app/shared/utils/Colors';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { PMLOOperationLegItem } from '../models/pmloOperationLegend.model';
import { excessDr, moderate, modSuited, modWellDr, notRated, poorDr, poorSuited, severe, slight, someExcessDr, somePoorDr, veryPoorDr, verySevere, wellDr, wellSuited } from '../pmloUtils/OperationValues';
import { GetDrainageClassColors } from '../pmloUtils/pmloColors';
import { GetDefaultSoilsLineProps } from '../pmloUtils/SoilsStyles';

@Injectable({
  providedIn: 'root'
})
export class OperationLegendService {

  @Output() GetOperationLegend:EventEmitter<PMLOOperationLegItem[]> = new EventEmitter<PMLOOperationLegItem[]>();
  @Output() SetActiveOperationLegenRadio:EventEmitter<string> = new EventEmitter<string>();

  private operationLegend:any = {
    excessDr: {label: excessDr, color: {r: 140, g: 81, b: 10}},
    someExcessDr: {label: someExcessDr, color:{r: 216, g: 179, b: 101}},
    wellDr: {label: wellDr, color: {r: 246, g: 232, b: 195}},
    modWellDr: {label: modWellDr, color:{r: 255, g: 255, b: 255}},
    somePoorDr: {label: somePoorDr, color:{r: 199, g: 234, b: 229}},
    poorDr: {label: poorDr, color:{r: 90, g: 180, b: 172}},
    veryPoorDr: {label: veryPoorDr, color:{r: 1, g: 102, b: 94}},
    verySevere: {label: verySevere, color:{r: 215, g: 25, b: 28}},
    severe: {label: severe, color:{r: 252, g: 141, b: 89}},
    moderate5: {label: moderate, color:{r: 145, g: 207, b: 96}},
    moderate4: {label: moderate, color:{r: 255, g: 255, b: 191}},
    slight5: {label: slight, color:{r: 26, g: 150, b: 65}},
    slight4: {label: slight, color:{r: 145, g: 207, b: 96}},
    poorSuited: {label: poorSuited, color:{r: 252, g: 141, b: 89}},
    modSuited: {label: modSuited, color:{r: 255, g: 255, b: 191}},
    wellSuited: {label: wellSuited, color:{r: 145, g: 207, b: 96}},
    notRated: {label: notRated, color:{r: 192, g: 192, b: 192}}
  };

  constructor() { }

  setOperationLegendSymbols(value:string, pmloSoilsGL: __esri.GraphicsLayer, sliderValue:number):void {
    pmloSoilsGL.graphics.forEach((g:__esri.Graphic) => {
      let symbolColor:any = {};
      if (['drclassdcd'].includes(value))
      {
        switch (g.attributes[value]) {
          case excessDr:
            symbolColor = this.operationLegend.excessDr.color;
            break;

          case someExcessDr:
            symbolColor = this.operationLegend.someExcessDr.color;
            break;

          case wellDr:
            symbolColor = this.operationLegend.wellDr.color;
            break;

          case modWellDr:
            symbolColor = this.operationLegend.modWellDr.color;
            break;

          case somePoorDr:
            symbolColor = this.operationLegend.somePoorDr.color;
            break;

          case poorDr:
            symbolColor = this.operationLegend.poorDr.color;
            break;

          case veryPoorDr:
            symbolColor = this.operationLegend.veryPoorDr.color;
            break;

          default:
            symbolColor = this.operationLegend.notRated.color;
            break;
        }
      } else if (['RoadSuitNS', 'HEquipOp'].includes(value)) {
        switch (g.attributes[value]) {
          case poorSuited:
            symbolColor = this.operationLegend.poorSuited.color;
            break;

          case modSuited:
            symbolColor = this.operationLegend.modSuited.color;
            break;

          case wellSuited:
            symbolColor = this.operationLegend.wellSuited.color;
            break;

          default:
            symbolColor = this.operationLegend.notRated.color;
            break;
        }
      } else if (['EroHzdORT'].includes(value)) {
        switch (g.attributes[value]) {
          case verySevere:
            symbolColor = this.operationLegend.verySevere.color;
            break;

          case severe:
            symbolColor = this.operationLegend.severe.color;
            break;

          case moderate:
            symbolColor = this.operationLegend.moderate5.color;
            break;

          case slight:
            symbolColor = this.operationLegend.slight5.color;
            break;

          default:
            symbolColor = this.operationLegend.notRated.color;
            break;
        }
      } else if (['CLRoadLndg', 'EroHzdRT', 'SoilRutHzd'].includes(value)) {
        switch (g.attributes[value]) {
          case severe:
            symbolColor = this.operationLegend.severe.color;
            break;

          case moderate:
            symbolColor = this.operationLegend.moderate4.color;
            break;

          case slight:
            symbolColor = this.operationLegend.slight4.color;
            break;

          default:
            symbolColor = this.operationLegend.notRated.color;
            break;
        }
      }
      const opac:number = (100 - sliderValue) / 100;
      symbolColor.a = opac
      const lineProps = GetDefaultSoilsLineProps(opac);
      const fillProps:FillProps = {
        color: symbolColor,
        style: (g.symbol as any).style,
        opacity: 1
      };
      (g.symbol as any) = CreatePolygonSymbol(lineProps, fillProps);
    });
  }

  setOperationLegend(value:string):void {
    const operationLegItems:PMLOOperationLegItem[] = [];
    if (['drclassdcd'].includes(value))
    {      
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.excessDr.color), this.operationLegend.excessDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.someExcessDr.color), this.operationLegend.someExcessDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.wellDr.color), this.operationLegend.wellDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.modWellDr.color), this.operationLegend.modWellDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.somePoorDr.color), this.operationLegend.somePoorDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.poorDr.color), this.operationLegend.poorDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.veryPoorDr.color), this.operationLegend.veryPoorDr.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.notRated.color), this.operationLegend.notRated.label));
    } else if (['RoadSuitNS', 'HEquipOp'].includes(value))
    {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.poorSuited.color), this.operationLegend.poorSuited.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.modSuited.color), this.operationLegend.modSuited.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.wellSuited.color), this.operationLegend.wellSuited.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.notRated.color), this.operationLegend.notRated.label));
    } else if (['EroHzdORT'].includes(value))
    {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.verySevere.color), this.operationLegend.verySevere.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.severe.color), this.operationLegend.severe.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.moderate5.color), this.operationLegend.moderate5.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.slight5.color), this.operationLegend.slight5.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.notRated.color), this.operationLegend.notRated.label));
    } else if (['CLRoadLndg', 'EroHzdRT', 'SoilRutHzd'].includes(value)) {
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.severe.color), this.operationLegend.severe.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.moderate4.color), this.operationLegend.moderate4.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.slight4.color), this.operationLegend.slight4.label));
      operationLegItems.push(new PMLOOperationLegItem(this.GetLegendHexColor(this.operationLegend.notRated.color), this.operationLegend.notRated.label));
    }
    this.SetActiveOperationLegenRadio.emit(value);
    this.GetOperationLegend.emit(operationLegItems);
  }

  private GetLegendHexColor(legendColor:any):string {    
    return RGBToHex([legendColor.r, legendColor.g, legendColor.b]);
  }
}
