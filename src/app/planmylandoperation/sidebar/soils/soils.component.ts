import { Component, OnInit, Input } from '@angular/core';
import { SoilsService } from './soils.service';
import { PMLOSoil } from '../../models/pmloSoil.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetPMLOSoilPopupContent } from '../../pmloUtils/popupContent';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MapviewService } from 'src/app/shared/services/mapview.service';

@Component({
  selector: 'pmlo-soils',
  templateUrl: './soils.component.html',
  styleUrls: ['./soils.component.scss']
})
export class SoilsComponent implements OnInit {

  @Input() mapView: any;

  faQuestionCircle = faQuestionCircle;
  isIdentifyChecked:boolean = false;
  isVisibleDisabled:boolean = true;

  private soilsDynamicLayer: __esri.WMSLayer;
  private soilsIdentifyClickEvent: any;

  constructor(
    private soilsService: SoilsService,
    private spinner: NgxSpinnerService,
    private mapViewService: MapviewService
  ) { }

  ngOnInit(): void {
    this.soilsDynamicLayer = this.mapView.map.findLayerById('soilsDynamicLayer');
    this.mapViewService.soilsDisabled.subscribe((isDisabled:boolean) => {
      this.isVisibleDisabled = isDisabled;
      if (isDisabled && this.soilsIdentifyClickEvent !== undefined)
      {
        this.soilsIdentifyClickEvent.remove();
      } else if (!isDisabled) {
        this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
      }
    });
  }

  soilsVisibleChanged(isChecked: boolean)
  {
    this.soilsDynamicLayer.visible = isChecked;
    this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
  }

  private createSoilsIdentifyClickEvent(isChecked:boolean):void {
    if (isChecked && this.soilsDynamicLayer.visible)
    {
      this.soilsIdentifyClickEvent = this.mapView.on('click', (evt: any) => {
        this.spinner.show();
        this.soilsService.identifySoil(this.mapView, evt.mapPoint, 'pmlo').then((result) => {
          const resulstTable = result.Table[0];
          const pmloSoil: PMLOSoil = new PMLOSoil();
          let index: number = 0;
          for (let key of Object.keys(pmloSoil))
          {
            if (resulstTable[index] !== null)
            {
              pmloSoil[key] = resulstTable[index];
            }
            index += 1;
          }
          this.mapView.popup.open({
            title: pmloSoil.musym,
            location: evt.mapPoint,
            content: GetPMLOSoilPopupContent(pmloSoil),
            overwriteActions: true,
            actions: []
          });
          this.spinner.hide();
        })
      });
    } else if (this.soilsIdentifyClickEvent !== undefined) {
      this.soilsIdentifyClickEvent.remove();
    }
  }

  soilsIdentifyChanged(isChecked: boolean)
  {
    this.isIdentifyChecked = isChecked;
    this.createSoilsIdentifyClickEvent(isChecked);
  }
}