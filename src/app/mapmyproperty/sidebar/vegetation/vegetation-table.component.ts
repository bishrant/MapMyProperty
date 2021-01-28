import { Component, OnInit } from '@angular/core';
import { TableHeader } from 'src/app/planmylandoperation/sidebar/soils/soils-table/table-header';
import { FormatRoundNumber } from 'src/app/shared/utils/ConversionTools';
import { ConvertSquareMetersToAcres } from 'src/app/shared/utils/GeometryEngine';
import { outputVegetationMultipart } from './dummydata';
@Component({
  selector: 'mmp-vegetation-table',
  templateUrl: './vegetation-table.component.html',
  styleUrls: ['./vegetation-table.component.scss']
})
export class VegetationTableComponent implements OnInit {
  headElements: TableHeader[] = [];
  vegList;
  totalAcres:string;
  selectedVegetation:__esri.Graphic;
  private totalAreaSqMt = 0;

  constructor () { }
  ngOnInit (): void {
    this.resetHeadElements();
    this.getVegetationData(outputVegetationMultipart.value.features);
  }

  updateSortImages (selectedHead: TableHeader): void {
    this.headElements.forEach(
      head => {
        if (head === selectedHead) {
          head.isSortActive = true;
          head.sortedAsc = !head.sortedAsc;
          this.sortByAttribute(head.sortField, head.sortedAsc);
        } else {
          head.isSortActive = false;
        }
      }
    );
  }

  getVegetationData = (data: any) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.attributes.Shape_Area;
    this.totalAreaSqMt = data.reduce(reducer, 0)
    this.totalAcres = FormatRoundNumber(ConvertSquareMetersToAcres(this.totalAreaSqMt), 1);
    this.vegList = data;
  }

  private sortByAttribute (attr:string, sortedAsc:boolean):void {
    if (sortedAsc) {
      this.vegList.sort((a, b) => (a.attributes[attr] > b.attributes[attr]) ? 1 : -1);
    } else {
      this.vegList.sort((a, b) => (b.attributes[attr] > a.attributes[attr]) ? 1 : -1);
    }
  }

  getBackgroundColor = (veg: any) => {
    const _h: string = veg.attributes.HEXColor;
    if (_h.length >= 7) {
      return '#' + _h.slice(2, _h.length)
    }
    return _h;
  }

  getsoilAcres (area:number):string {
    return FormatRoundNumber(ConvertSquareMetersToAcres(area), 1);
  }

  getsoilPercentage (area:number): string {
    return FormatRoundNumber(area / this.totalAreaSqMt * 100, 1)
  }

  selectVegetation = (veg: any) => {
    if (this.selectedVegetation === veg) {
      this.selectedVegetation = undefined;
      // this.soilsService.selectPolygonFromTable.emit(null);
    } else {
      this.selectedVegetation = veg;
      // this.soilsService.selectPolygonFromTable.emit(soil);
    }
  }

  private resetHeadElements (): void {
    this.headElements = [
      new TableHeader('Symbol', 'musym', true, false),
      new TableHeader('Name', 'muname', true, false),
      new TableHeader('Acres', 'Shape_Area', false, true),
      new TableHeader('Percentage', 'Shape_Area', true, false)
    ];
  }
}
