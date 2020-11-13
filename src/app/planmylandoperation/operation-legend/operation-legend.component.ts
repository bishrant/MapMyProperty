import { Component, Input, OnInit } from '@angular/core';
import { PMLOOperationLegItem } from '../models/pmloOperationLegend.model';
import { OperationLegendService } from './operation-legend.service';

@Component({
  selector: 'pmlo-operation-legend',
  templateUrl: './operation-legend.component.html',
  styleUrls: ['./operation-legend.component.scss']
})
export class OperationLegendComponent implements OnInit {

  @Input() initialValue:string;
  @Input() isFromHarvest:boolean;

  legendItems: PMLOOperationLegItem[] = [];

  constructor(
    private operationLegendService:OperationLegendService
  ) { }

  ngOnInit(): void {
    this.operationLegendService.GetOperationLegend.subscribe((items:PMLOOperationLegItem[]) => {
      this.legendItems = items;
    });
    this.operationLegendService.setOperationLegend(this.initialValue, this.isFromHarvest);
  }
}
