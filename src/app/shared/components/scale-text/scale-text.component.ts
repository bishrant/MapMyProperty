import { Component, OnInit } from '@angular/core';
import { MapviewService } from '../../services/mapview.service';
import { FormatRoundNumber } from '../../utils/ConversionTools';

@Component({
  selector: 'app-scale-text',
  templateUrl: './scale-text.component.html',
  styleUrls: ['./scale-text.component.scss']
})
export class ScaleTextComponent implements OnInit {
  scaleText:string = null;

  constructor (
    private mapViewService:MapviewService
  ) { }

  ngOnInit (): void {
    this.mapViewService.scaleChanged.subscribe((scale:number) => {
      this.scaleText = FormatRoundNumber(scale, 0);
    });
  }
}
