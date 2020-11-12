import { Component, OnInit, Input } from '@angular/core';
import { SoilsService } from './soils.service';
import { PMLOSoil } from '../../models/pmloSoil.model';
import { GetPMLOSoilPopupContent } from '../../pmloUtils/popupContent';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { CreateGL } from '../../pmloUtils/layers';
import { GetPolygonGraphics } from 'src/app/shared/utils/CreateGraphicsLayer';
import { CreatePolygonSymbol } from 'src/app/shared/utils/GraphicStyles';
import { FillProps, LineProps } from 'src/app/shared/components/drawtools/DrawTools.interface';
import { GetSelectedSoilFillProps, GetSelectedSoilLineProps } from '../../pmloUtils/SoilsStyles';
import { SoilsReportService } from './soils-report.service';
import { SensAreasService } from '../sens-areas/sens-areas.service';
import { GetFeaturesAreaAcres } from 'src/app/shared/utils/GeometryEngine';
import Collection from 'esri/core/Collection';
import { SquareMetersToAcres } from 'src/app/shared/utils/ConversionTools';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { TraceGPError } from 'src/app/shared/services/error/GPServiceError';
import { AppConfiguration } from 'src/config';
import { ReportsService } from '../../pmloUtils/reports.service';
import { EsrimapService } from '../../esrimap/esrimap.service';
import { PMLONotification } from '../../models/pmloNotification.model';
import { NotificationsService } from '../../pmloUtils/notifications.service';

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
  areSoilsClipped:boolean = false;
  polygonGraphicsInBoundary:boolean = false;
  isTableVisible:boolean = false;

  sliderValue: number = 0;
  isOrangeSymbol:boolean = false;

  soReportTitle:string = '';

  private soilsDynamicLayer: __esri.WMSLayer;
  private soilsIdentifyClickEvent: any = null;
  private userGL: __esri.GraphicsLayer;
  private pmloSoilsGL: __esri.GraphicsLayer = CreateGL('pmloSoilsGL', 1);
  private pmloSoilLabelsGL: __esri.GraphicsLayer = CreateGL('pmloSoilLabelsGL', 1);

  private pmloNote:PMLONotification = new PMLONotification();

  constructor(
    private soilsService: SoilsService,
    private loaderService: LoaderService,
    private mapViewService: MapviewService,
    private soilsReportService: SoilsReportService,
    private sensAreasService: SensAreasService,
    private appConfig: AppConfiguration,
    private reportsService: ReportsService,
    private esriMapService: EsrimapService,
    private notificationsService:NotificationsService
  ) { }

  ngOnInit(): void {
    this.pmloSoilLabelsGL.minScale = 37000;
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
        if (this.soilsIdentifyClickEvent !== null)
        {
          this.soilsIdentifyClickEvent.remove();
          this.soilsIdentifyClickEvent = null;
        }
      } else {
        this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
      }
    });
    this.mapViewService.soilsGLHasPolygons.subscribe((val:boolean) => {
      this.polygonGraphicsInBoundary = val;
      if (!val)
      {
        this.clearSoilGLayers();
        this.areSoilsClipped = false;
      }
    });
    this.userGL = this.mapView.map.findLayerById('userGraphicsLayer');
    this.mapView.map.add(this.pmloSoilsGL);
    this.mapView.map.add(this.pmloSoilLabelsGL);
    this.mapView.whenLayerView(this.pmloSoilsGL).then((pmloSoilsGLLayerView) => {
      pmloSoilsGLLayerView.watch('updating', (val:boolean) => {
        if (val)
        {
          let soilsGLHasPolygons: boolean = true;
          if (pmloSoilsGLLayerView.layer.graphics.length === 0)
          {
            soilsGLHasPolygons = false;
          }
          this.areSoilsClipped = soilsGLHasPolygons;
        }
      });
    });

    this.soilsService.showTableModal.subscribe((show:boolean) => {
      if (show) {
        this.isTableVisible = true;
      } else {
        this.isTableVisible = false;
      }
    });

    this.soilsService.selectPolygonFromTable.subscribe((soil:any) => {
      if (soil === null)
      {
        this.pmloSoilsGL.graphics.pop();
      } else {
        const prevSelectedGraphic:__esri.Graphic = this.pmloSoilsGL.graphics.find(el => el.attributes.isFromSelection);
        if (prevSelectedGraphic !== undefined)
        {
          this.pmloSoilsGL.graphics.pop();
        }
        const fillProps:FillProps = GetSelectedSoilFillProps();
        const lineProps:LineProps = GetSelectedSoilLineProps();
        const clonedGrahic: any = soil.clone();
        clonedGrahic.attributes.isFromSelection = true;
        clonedGrahic.symbol = CreatePolygonSymbol(lineProps, fillProps);
        this.pmloSoilsGL.add(clonedGrahic);
      }
    });

    this.soilsService.updateSliderValue.subscribe((res:any) => {
      this.checkIfOrange(res.sliderVal);
      if (res.isFromSoils)
      {
        this.soilsService.updateGraphicsOpacity(this.pmloSoilsGL, this.pmloSoilLabelsGL, res.sliderVal, this.isOrangeSymbol, true);
      }
      this.sliderValue = res.sliderVal;
    });

    this.esriMapService.soilsAccordionOpen.subscribe((opened) => {
      if (opened)
      {
        if (this.pmloSoilsGL.graphics.length > 0)
        {
          this.soilsService.updateGraphicsOpacity(this.pmloSoilsGL, this.pmloSoilLabelsGL, this.sliderValue, this.isOrangeSymbol, true);
        }
        this.pmloSoilLabelsGL.visible = true;
      }
    });
  }

  soilsVisibleChanged(isChecked: boolean)
  {
    this.isVisibleChecked = isChecked;
    this.soilsDynamicLayer.visible = isChecked;
    this.isIdentifyDisabled = !isChecked;
    this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
  }

  clipSoils():void {
    this.clearSoilGLayers();
    const polygonGraphics = GetPolygonGraphics(this.userGL);
    if (polygonGraphics.length === 0)
    {
      this.pmloNote.body = 'Please make sure you draw a boundary or load a file using the tools in the previous toolbox before running this tool.';
      this.notificationsService.openNotificationsModal.emit(this.pmloNote);
    } else if (polygonGraphics.length > 1)
    {
      this.pmloNote.body = 'You can only clip soils areas from one polygon at a time.';
      this.notificationsService.openNotificationsModal.emit(this.pmloNote);
    } else {
      this.loaderService.isLoading.next(true);
      const inputBoundary: __esri.Graphic = polygonGraphics.getItemAt(0);
      this.soilsService.getSoils(inputBoundary).then((result: __esri.FeatureSet[]) => {
        if (result.length === 0)
        {
          this.loaderService.isLoading.next(false);
          this.pmloNote.body = 'There was an error while clipping the soils. Please try again and, if the problem persists, contact the administrator.';
          this.notificationsService.openNotificationsModal.emit(this.pmloNote);
        } else {
          const boundaryId:string = inputBoundary.attributes.id;
          this.soilsService.addSoilsToMap(this.pmloSoilsGL, result[0], boundaryId, this.sliderValue, this.isOrangeSymbol);
          this.soilsService.addSoilLabelsToMap(this.pmloSoilLabelsGL, result[1], boundaryId, this.sliderValue, this.isOrangeSymbol);
          this.soilsService.showTableModal.emit(true);
          this.loaderService.isLoading.next(false);
        }
      });
    }
  }

  private createSoilsIdentifyClickEvent(isChecked:boolean):void {
    if (isChecked && this.soilsDynamicLayer.visible && this.soilsIdentifyClickEvent === null)
    {
      this.soilsIdentifyClickEvent = this.mapView.on('click', (evt: any) => {
        this.loaderService.isLoading.next(true);
        this.soilsService.identifySoil(evt.mapPoint, 'pmlo').then((result) => {
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
          this.loaderService.isLoading.next(false);
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

  clearSoilGLayers():void {
    this.soilsService.clearSoilGLayers(this.pmloSoilsGL, this.pmloSoilLabelsGL);
  }

  updateSliderValue(value: number):void {
    this.soilsService.updateSliderValue.emit({sliderVal: value, isFromSoils:true, selectedRadioVal: null});
  }

  toggleTable():void {
    if (this.isTableVisible)
    {
      this.soilsService.showTableModal.emit(false);
    } else {
      this.soilsService.showTableModal.emit(true);
    }
  }

  buildSoilsReport():void {
    this.loaderService.isLoading.next(true);
    const boundary:__esri.Graphic= this.userGL.graphics.filter(g => g.geometry.type === 'polygon').getItemAt(0);
    const boundaryCollection:Collection<__esri.Graphic> = new Collection<__esri.Graphic>();
    boundaryCollection.add(boundary);
    const soilsAttributes:any = this.pmloSoilsGL.graphics.map((soil:__esri.Graphic) => {
      soil.attributes.Acres = SquareMetersToAcres(soil.attributes.Shape_Area);
      return soil.attributes;
    });
    Promise.all([
      this.soilsReportService.printMaps(this.mapView, this.pmloSoilsGL, this.pmloSoilLabelsGL, boundary.geometry.extent.clone().expand(1.05)),
      this.soilsReportService.getCountyFromCentroid((boundary.geometry as __esri.Polygon).centroid),
      this.soilsReportService.getWatershedFromCentroid((boundary.geometry as __esri.Polygon).centroid),
      this.soilsReportService.getSoilsReportHydroParams(boundary),
      this.sensAreasService.isWithinTexas(boundary.geometry)
    ]).then((value) => {
      const reportParams:any = {
        projectName: this.soReportTitle,
        boundaryImageUrl: value[0].boundaryImage,
        soilsImageUrl: value[0].soilsImage,
        countyName: value[1].countyName,
        countyFips: value[1].countyFips,
        watershed: value[2],
        ephemeralFeet: value[3].ephemeralFeet,
        intermittentFeet: value[3].intermittentFeet,
        perennialFeet: value[3].perennialFeet,
        wetlandsAcres: value[3].wetlandsAcres,
        isWithinTexas: value[4],
        projectAcres: GetFeaturesAreaAcres(boundaryCollection),
        latitude: (boundary.geometry as __esri.Polygon).centroid.latitude,
        longitude: (boundary.geometry as __esri.Polygon).centroid.longitude,
        soils: soilsAttributes.items
      };

      console.log(reportParams);

      this.reportsService.getSoilsReport({content: JSON.stringify(reportParams)}).subscribe(
        (response:any) => {
          this.loaderService.isLoading.next(false);
          window.open(response.fileName, '_blank', 'noopener');
        },
        (error:any) => {
          this.loaderService.isLoading.next(false);
          const gpError = TraceGPError(this.appConfig.printGPServiceURL, error);
          throw gpError;
        }
      );
    })
    .catch((error:any) => {
      this.loaderService.isLoading.next(false);
      const gpError = TraceGPError(this.appConfig.printGPServiceURL, error);
      throw gpError;
    });
  }

  private checkIfOrange(val:number):void {
    if (val < 75 || val === 100) {
      this.isOrangeSymbol = false;
    } else {
      this.isOrangeSymbol = true;
    }
  }
}