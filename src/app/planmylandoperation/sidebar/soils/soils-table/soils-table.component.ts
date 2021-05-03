import { Component, OnInit } from '@angular/core';
import { WaterBlueHexColor } from 'src/app/planmylandoperation/pmloUtils/SoilsStyles';
import { FormatRoundNumber } from 'src/app/shared/utils/ConversionTools';
import { ConvertSquareMetersToAcres } from 'src/app/shared/utils/GeometryEngine';
import { SoilsService } from '../soils.service';
import { TableHeader } from './table-header';

@Component({
  selector: 'pmlo-soils-table',
  templateUrl: './soils-table.component.html',
  styleUrls: ['./soils-table.component.scss']
})
export class SoilsTableComponent implements OnInit {
  soils:Graphic[];
  headElements: TableHeader[] = [];
  totalAcres:string;

  selectedSoil:Graphic;

  private totalAreaSqMt = 0;

  constructor (
    private soilsService:SoilsService
  ) { }

  ngOnInit (): void {
    this.soilsService.shareMultiSoils.subscribe((multiSoils:Graphic[]) => {
      const reducer = (accumulator, currentValue) => accumulator + currentValue.attributes.Shape_Area;
      this.totalAreaSqMt = multiSoils.reduce(reducer, 0)
      this.totalAcres = FormatRoundNumber(ConvertSquareMetersToAcres(this.totalAreaSqMt), 1);
      this.soils = multiSoils;
      this.resetHeadElements();
      this.sortByAttribute('Shape_Area', false);
    });
  }

  getsoilAcres (area:number):string {
    return FormatRoundNumber(ConvertSquareMetersToAcres(area), 1);
  }

  getsoilPercentage (area:number): string {
    return FormatRoundNumber(area / this.totalAreaSqMt * 100, 1)
  }

  getBackgroundColor (soilAttributes:any):string {
    let hexColor = soilAttributes.HexColor;
    if (soilAttributes.musym === 'W') {
      hexColor = WaterBlueHexColor;
    }

    return hexColor;
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

  selectSoil (soil:Graphic):void {
    if (this.selectedSoil === soil) {
      this.selectedSoil = undefined;
      this.soilsService.selectPolygonFromTable.emit(null);
    } else {
      this.selectedSoil = soil;
      this.soilsService.selectPolygonFromTable.emit(soil);
    }
  }

  private sortByAttribute (attr:string, sortedAsc:boolean):void {
    if (sortedAsc) {
      this.soils.sort((a, b) => (a.attributes[attr] > b.attributes[attr]) ? 1 : -1);
    } else {
      this.soils.sort((a, b) => (b.attributes[attr] > a.attributes[attr]) ? 1 : -1);
    }
  }

  private resetHeadElements (): void {
    this.headElements = [
      new TableHeader('Symbol', 'musym', true, false),
      new TableHeader('Soil Name', 'muname', true, false),
      new TableHeader('Acres', 'Shape_Area', false, true),
      new TableHeader('Percentage', 'Shape_Area', true, false)
    ];
  }
}
