import { Component, OnInit, Input } from '@angular/core';
import { SoilsService } from './soils.service';
import { PMLOSoil } from '../../models/pmloSoil.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetPMLOSoilPopupContent } from '../../pmloUtils/popupContent';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'pmlo-soils',
  templateUrl: './soils.component.html',
  styleUrls: ['./soils.component.scss']
})
export class SoilsComponent implements OnInit {

  @Input() mapView: any;

  faQuestionCircle = faQuestionCircle;

  private soilsDynamicLayer: __esri.WMSLayer;
  private soilsIdentifyClickEvent: any;

  constructor(
    private soilsService: SoilsService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.soilsDynamicLayer = this.mapView.map.findLayerById('soilsDynamicLayer');
  }

  soilsVisibleChanged(isChecked: boolean)
  {
    this.soilsDynamicLayer.visible = isChecked;
  }

  soilsIdentifyChanged(isChecked: boolean)
  {

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
    } else {
      this.soilsIdentifyClickEvent.remove();
    }
  }
}