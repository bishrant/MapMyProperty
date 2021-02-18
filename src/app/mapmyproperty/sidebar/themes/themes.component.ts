import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Point } from 'esri/geometry';
import Graphic from 'esri/Graphic';
import FeatureLayer from 'esri/layers/FeatureLayer';
import IdentifyTask from 'esri/tasks/IdentifyTask';
import IdentifyParameters from 'esri/tasks/support/IdentifyParameters';
import { CreateGL } from 'src/app/planmylandoperation/pmloUtils/layers';
import { GetMMPGeologyPopupContent, GetMMPSoilPopupContent, GetMMPVegetationPopupContent } from 'src/app/planmylandoperation/pmloUtils/popupContent';
import { SoilsService } from 'src/app/planmylandoperation/sidebar/soils/soils.service';
import { NotificationModel } from 'src/app/shared/models/Notification.model';
import { TraceMMPError } from 'src/app/shared/services/error/GPServiceError';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { MMPModalWindowService } from 'src/app/shared/services/MMPModalWindow.service';
import { NotificationsService } from 'src/app/shared/services/Notifications.service';
import { CreateMapLayer, CreateSoilsLayer } from 'src/app/shared/utils/CreateDynamicLayers';
import { GetPolygonGraphics } from 'src/app/shared/utils/CreateGraphicsLayer';
import { serialUnsubscriber, SubscriptionCollection } from 'src/app/shared/utils/SubscriptionUtils';
import { AppConfiguration } from 'src/config';
import { MMPSoil } from '../../models/mmpSoil.model';
import { VegetationService } from '../vegetation/vegetation.service';
import { getVegetationBackgroundColor, getVegetationHighlightSymbol, getVegetationSymbol } from '../vegetation/VegetationUtils';

@Component({
  selector: 'app-mmp-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class MMPThemesComponent implements OnInit, OnDestroy {
  isIdentifyChecked: boolean = false;
  isIdentifyDisabled: boolean = true;
  isVisibleDisabled: boolean = false;
  isVisibleChecked: boolean = false;
  isSoilsDisabled = true;
  selectedTheme: string = 'soils';
  notification: NotificationModel = new NotificationModel();
  userGL;
  private themesUserGL: __esri.GraphicsLayer = CreateGL('themesGL', 1);

  @Input() mapView: __esri.MapView;
  transparency = 0;
  transparencyChanged ($e) {
    this.transparency = $e;
    if (this.selectedTheme === 'geology' || this.selectedTheme === 'vegetation') {
      this.activeLayer.opacity = 1 - ($e / 100);
    }
  }

  private identifyEvent: any = null;
  private identifyParams = new IdentifyParameters({
    tolerance: 0,
    layerOption: 'top:10' as any
  });

  soilsLayer;
  geologyLayer;
  vegetationLayer;
  activeLayer;
  private subscriptions: SubscriptionCollection = {};
  constructor (private mapViewService: MapviewService,
    private appConfig: AppConfiguration,
    private http: HttpClient, private soilsService: SoilsService,
    private notificationsService:NotificationsService,
    private mmpModalWindowService: MMPModalWindowService,
    private vegetationService: VegetationService,
    private loaderService: LoaderService) { }

  ngOnInit () {
    this.subscriptions.soilsDisabled$ = this.mapViewService.soilsDisabled.subscribe((isDisabled: boolean) => {
      this.isSoilsDisabled = isDisabled;
    });
    this.userGL = this.mapView.map.findLayerById('userGraphicsLayer');
    this.mapView.map.add(this.themesUserGL);
    this.subscriptions.selectPolygonFromTableSub$ = this.vegetationService.selectPolygonFromTable
      .subscribe((veg: any) => {
        this.themesUserGL.graphics.forEach((gr: any) => {
          if (gr.attributes.FID === veg.attributes.FID) {
            gr.symbol = getVegetationHighlightSymbol(gr);
          } else {
            gr.symbol = getVegetationSymbol(gr);
          }
        })
        // if (veg === null) {
        //   this.themesUserGL.graphics.pop();
        // }
      })
  }

  getLayerRef (layerId: string) {
    return this.mapView.map.findLayerById(layerId);
  }

  createGeologyLayer = () => {
    return CreateMapLayer(
      'mapImage',
      'geologyLayer',
      null,
      this.appConfig.geologyMapServerURL
    );
  }

  hideLayersExcept = (layerName: string) => {
    const layers = ['soilsLayer', 'vegetationLayer', 'geologyLayer'];
    layers.forEach(layer => {
      if (layer !== layerName) {
        const _ref = this.getLayerRef(layer);
        if (typeof _ref !== 'undefined') {
          _ref.visible = false;
        }
      }
    })
  }

  themeChanged (theme: string) {
    const ref = this.getLayerRef(theme + 'Layer');
    if (typeof ref === 'undefined') {
      switch (theme) {
        case 'vegetation':
          this.vegetationLayer = CreateMapLayer('mapImage', 'vegetationLayer', null, this.appConfig.vegetation.mapserverURL);
          this.activeLayer = this.vegetationLayer;
          break;
        case 'geology':
          this.geologyLayer = CreateMapLayer('mapImage', 'geologyLayer', null, this.appConfig.geologyMapServerURL);
          this.activeLayer = this.geologyLayer;
          break;
        case 'soils':
          this.soilsLayer = CreateSoilsLayer('soilsLayer', this.appConfig.ssurgoWMSURL);
          this.activeLayer = this.soilsLayer;
          break;
        default:
          break;
      }

      this.mapView.map.add(this.activeLayer);
    } else {
      this.activeLayer = theme === 'soils' ? this.soilsLayer : (theme === 'vegetation' ? this.vegetationLayer : this.geologyLayer);
    }
    this.hideLayersExcept(theme + 'Layer');
    this.activeLayer.visible = this.isVisibleChecked;
    if (this.mapView.popup.visible) this.mapView.popup.close();
  }

  themeVisibleChanged (isChecked: boolean) {
    this.isVisibleChecked = isChecked;
    this.themeChanged(this.selectedTheme);
    this.activeLayer.visible = isChecked;
    this.isIdentifyDisabled = !this.isVisibleChecked;
  }

  queryRelatedFeaturesForGeology = (featureId:number, oid: number, geometry: any) => {
    this.http.get(`${this.appConfig.geologyMapServerURL}/${featureId}/queryRelatedRecords?f=json&relationshipid=1&returnGeometry=false&objectids=${oid}&outFields=*`)
      .subscribe((results: any) => {
        if (results.relatedRecordGroups.length > 0) {
          const relatedRecords = results.relatedRecordGroups[0].relatedRecords;
          if (relatedRecords.length > 0) {
            const attr = relatedRecords[0].attributes;
            this.showPopup(attr.ROCKUNIT_CD, GetMMPGeologyPopupContent(attr), geometry);
          }
        }
      })
  }

  clipSelectedTheme = () => {
    const polygonGraphics = GetPolygonGraphics(this.userGL);
    if (polygonGraphics.length === 0) {
      this.notification.body = `A drawn boundary is needed to be able to clip ${this.selectedTheme}.`;
      this.notificationsService.openNotificationsModal.emit(this.notification);
    } else if (polygonGraphics.length > 1) {
      this.notification.body = `You can only clip ${this.selectedTheme} areas from one polygon at a time.`;
      this.notificationsService.openNotificationsModal.emit(this.notification);
    } else {
      this.loaderService.isLoading.next(true);
      const inputBoundary: __esri.Graphic = polygonGraphics.getItemAt(0);
      this.vegetationService.mockVegetationData(inputBoundary).then(d => {
        const t = d[0].value.features.map(f => {
          f.symbol = getVegetationSymbol(f);
          return f;
        });

        const gr = t.forEach(tt => {
          return new Graphic(tt);
        });

        const fLayer = new FeatureLayer({
          source: t,
          objectIdField: 'FID',
          popupTemplate: { content: '{FID} Test' }
        })

        this.mapView.map.add(fLayer);

        console.log(d[0].value.features, t);
        // this.themesUserGL.addMany(t);
        this.mmpModalWindowService.changeModalVisibility(this.selectedTheme, true);
      }).catch(e => {
        throw TraceMMPError('failed to clip selected theme', e.message, 'Themes.component');
      }).finally(() => {
        this.loaderService.isLoading.next(false);
      })
    }
  }

  identifyFeatures = async (geometry: __esri.Point) => {
    this.loaderService.isLoading.next(true);
    const iTask = new IdentifyTask(this.activeLayer.url);
    this.identifyParams.width = this.mapView.width;
    this.identifyParams.height = this.mapView.height;
    this.identifyParams.mapExtent = this.mapView.extent;
    this.identifyParams.geometry = geometry;
    this.identifyParams.returnGeometry = false;
    this.identifyParams.layerOption = 'top:10' as any;
    try {
      if (this.selectedTheme === 'geology') {
        this.identifyGeology(iTask, geometry)
      } else if (this.selectedTheme === 'vegetation') {
        this.identifyVegetation(iTask, geometry)
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      this.loaderService.isLoading.next(false);
    }
  }

  identifySoils = (mapPoint: __esri.Point) => {
    this.loaderService.isLoading.next(true);
    this.soilsService.identifySoil(mapPoint, 'mmp').then((result) => {
      const resulstTable = result.Table[0];
      const mmpSoil: MMPSoil = new MMPSoil();
      let index: number = 0;
      for (const key of Object.keys(mmpSoil)) {
        if (resulstTable[index] !== null) {
          mmpSoil[key] = resulstTable[index];
        }
        index += 1;
      }
      this.showPopup(mmpSoil.musym, GetMMPSoilPopupContent(mmpSoil), mapPoint)
    })
  }

  identifyVegetation = async (iTask: IdentifyTask, geometry: Point) => {
    this.identifyParams.layerOption = 'top:0' as any;
    const iResults = await iTask.execute(this.identifyParams);
    if (iResults.results.length > 0) {
      const attr = iResults.results[0].feature.attributes;
      const _title = 'ID: ' + attr.VegID;
      this.showPopup(_title, GetMMPVegetationPopupContent(attr), geometry);
    }
  }

  showPopup = (popupTitle: string, popupContent: any, popupLocation: __esri.Point) => {
    this.mapView.popup.dockOptions = {
      buttonEnabled: true,
      position: 'top-left'
    }
    this.mapView.popup.actions = null;
    this.mapView.popup.open({
      title: popupTitle,
      location: popupLocation,
      content: popupContent
    });

    this.loaderService.isLoading.next(false);
  }

  identifyGeology = async (iTask: IdentifyTask, geometry: Point) => {
    const iResults = await iTask.execute(this.identifyParams);
    if (iResults.results.length > 0) {
      const oID = parseInt(iResults.results[0].feature.attributes.OBJECTID);
      const layerId = iResults.results[0].layerId;
      this.queryRelatedFeaturesForGeology(layerId, oID, geometry);
    }
  }

  private createLayerIdentifyEvent (isChecked:boolean):void {
    if (isChecked && this.activeLayer.visible && this.identifyEvent === null) {
      this.identifyEvent = this.mapView.on('click', (evt: any) => {
        if (['vegetation', 'geology'].includes(this.selectedTheme)) {
          this.identifyFeatures(evt.mapPoint);
        } else {
          this.identifySoils(evt.mapPoint);
        }
      });
    } else if (!isChecked && this.identifyEvent !== null) {
      this.identifyEvent.remove();
      this.identifyEvent = null;
    }
  }

  themeIdentifyChanged (isChecked: boolean) {
    this.isIdentifyChecked = isChecked;
    this.createLayerIdentifyEvent(isChecked);
    if (this.mapView.popup.visible) this.mapView.popup.close();
  }

  ngOnDestroy (): void {
    serialUnsubscriber(...Object.values(this.subscriptions));
  }
}
