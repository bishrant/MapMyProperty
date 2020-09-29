import { Component, OnInit, Input } from '@angular/core';
import { SoilsService } from './soils.service';
import { PMLOSoil } from '../../models/pmloSoil.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { GetPMLOSoilPopupContent } from '../../pmloUtils/popupContent';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { DialogService } from 'src/app/shared/components/dialogs/dialog.service';
import { CreateGL } from '../../pmloUtils/layers';

@Component({
  selector: 'pmlo-soils',
  templateUrl: './soils.component.html',
  styleUrls: ['./soils.component.scss']
})
export class SoilsComponent implements OnInit {

  @Input() mapView: any;

  faQuestionCircle = faQuestionCircle;
  isIdentifyChecked:boolean = false;
  isIdentifyDisabled:boolean = true;
  isVisibleDisabled:boolean = true;
  isVisibleChecked:boolean = false;
  isReportBtnDisabled:boolean = false;
  sliderValue: number = 80;

  private soilsDynamicLayer: __esri.WMSLayer;
  private soilsIdentifyClickEvent: any = null;
  private boundaryLayer: __esri.GraphicsLayer;
  private pmloSoilsGL: __esri.GraphicsLayer = CreateGL('pmloSoilsGL', 1);
  private pmloSoilLabelsGL: __esri.GraphicsLayer = CreateGL('pmloSoilLabelsGL', 1);

  private opt = {
    message: ''
  };

  constructor(
    private soilsService: SoilsService,
    private spinner: NgxSpinnerService,
    private mapViewService: MapviewService,
    private dialogService: DialogService
  ) { }

  ngOnInit(): void {
    this.soilsDynamicLayer = this.mapView.map.findLayerById('soilsDynamicLayer');
    this.mapViewService.soilsDisabled.subscribe((isDisabled:boolean) => {
      this.isVisibleDisabled = isDisabled;
      if (!isDisabled && this.isVisibleChecked)
      {
        this.isIdentifyDisabled = false;
      } else {
        this.isIdentifyDisabled = true;
      }
      if(isDisabled)
      {
        this.pmloSoilLabelsGL.visible = false;
        if (this.soilsIdentifyClickEvent !== undefined)
        {
          this.soilsIdentifyClickEvent.remove();
        }
      } else {
        this.pmloSoilLabelsGL.visible = true;
        this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
      }
    });
    this.boundaryLayer = this.mapView.map.findLayerById('userGraphicsLayer');
    this.mapView.map.add(this.pmloSoilsGL);
    this.mapView.map.add(this.pmloSoilLabelsGL);
  }

  soilsVisibleChanged(isChecked: boolean)
  {
    this.isVisibleChecked = isChecked;
    this.soilsDynamicLayer.visible = isChecked;
    this.isIdentifyDisabled = !isChecked;
    this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
  }

  clipSoils():void {

    if (this.boundaryLayer.graphics.length === 0)
    {
      this.opt.message = 'Please make sure you draw a boundary or load a file using the tools in the previous toolbox before running this tool.';
      this.dialogService.open(this.opt);
    } else if (this.boundaryLayer.graphics.length > 1)
    {
      this.opt.message = 'You can only clip soils areas from one polygon at a time.';
      this.dialogService.open(this.opt);
    } else {
      this.spinner.show();
      const inputBoundary: __esri.Graphic = this.boundaryLayer.graphics.getItemAt(0);

      this.soilsService.getSoils(inputBoundary).then((result: __esri.FeatureSet[]) => {
        if (result.length === 0)
        {
          this.spinner.hide();
          this.opt.message = 'There was an error while clipping the soils. Please try again and, if the problem persists, contact the administrator.';
          this.dialogService.open(this.opt);
        } else {
          this.soilsService.addSoilsToMap(this.pmloSoilsGL, result[0]);
          this.soilsService.addSoilLabelsToMap(this.pmloSoilLabelsGL, result[1]);
          this.spinner.hide();
        }
      });
    }
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
    } else if (this.soilsIdentifyClickEvent !== null) {
      this.soilsIdentifyClickEvent.remove();
      this.soilsIdentifyClickEvent = null;
    }
  }

  soilsIdentifyChanged(isChecked: boolean)
  {
    this.isIdentifyChecked = isChecked;
    this.createSoilsIdentifyClickEvent(isChecked);
  }
}