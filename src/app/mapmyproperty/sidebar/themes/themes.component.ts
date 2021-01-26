import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import IdentifyTask from 'esri/tasks/IdentifyTask';
import IdentifyParameters from 'esri/tasks/support/IdentifyParameters';
import { LoaderService } from 'src/app/shared/services/Loader.service';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { CreateMapLayer, CreateSoilsLayer } from 'src/app/shared/utils/CreateDynamicLayers';
import { AppConfiguration } from 'src/config';

@Component({
  selector: 'app-mmp-themes',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.scss']
})
export class MMPThemesComponent implements OnInit {
  isIdentifyChecked: boolean = false;
  isIdentifyDisabled: boolean = true;
  isVisibleDisabled: boolean = false;
  isVisibleChecked: boolean = false;
  isSoilsDisabled = true;
  selectedTheme: string = 'soils';

  @Input() mapView: any;
  transparency = 10;
  transparencyChanged ($e) {
    this.transparency = $e;
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

  constructor (private mapViewService: MapviewService, private appConfig: AppConfiguration,
    private http: HttpClient,
    private loaderService: LoaderService) { }

  ngOnInit () {
    this.mapViewService.soilsDisabled.subscribe((isDisabled: boolean) => {
      this.isSoilsDisabled = isDisabled;
    });
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
        console.log(_ref, layerName);
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
          this.vegetationLayer = CreateMapLayer('mapImage', 'vegetationLayer', null, this.appConfig.vegetationMapServerURL);
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
  }

  themeVisibleChanged (isChecked: boolean) {
    this.isVisibleChecked = isChecked;
    this.activeLayer.visible = isChecked;
    this.isIdentifyDisabled = !this.isVisibleChecked;
    // this.soilsDynamicLayer.visible = isChecked;
    // this.isIdentifyDisabled = !isChecked;
    // if (!isChecked && this.isIdentifyChecked) {
    //   this.identifyCheckbox.nativeElement.checked = false;
    //   this.soilsIdentifyChanged(false);
    // }
    // this.createSoilsIdentifyClickEvent(this.isIdentifyChecked);
  }

  queryRelatedFeaturesForGeology = (featureId:number, oid: number, pt: any) => {
    this.http.get(`${this.appConfig.geologyMapServerURL}/${featureId}/queryRelatedRecords?f=json&relationshipid=1&returnGeometry=false&objectids=${oid}&outFields=*`)
      .subscribe((results: any) => {
        console.log(results);
        if (results.relatedRecordGroups.length > 0) {
          const relatedRecords = results.relatedRecordGroups[0].relatedRecords;
          if (relatedRecords.length > 0) {
            const attr = relatedRecords[0].attributes;
            const popupContent = `<b>Rock Unit Name: </b>${attr.LONG_NM}<br>
            <b>Rock Unit Code:</b> ${attr.ROCKUNIT_CD}<br>
            <b>Sheet Name: </b>${attr.SHEET_NM}<br>
            <b>Period: </b>${attr.Period}<br>
            <b>Epoch or Series: </b>${attr.Epoch_or_Series}<br>
            <b>Group: </b>${attr.Group_}<br>
            <b>Description: </b>${attr.Description}<br>
            <b>Geo-Order Number: </b>${attr.GEOORDER_NO}`;
            this.mapView.popup.dockOptions = {
              buttonEnabled: true,
              position: 'top-left'
            }
            this.mapView.popup.open({
              title: attr.ROCKUNIT_CD,
              content: popupContent,
              location: pt,
              overwriteActions: true,
              actions: []
            });
          }
        }
      })
  }

  executeIdentifyTask = async (iTask: __esri.IdentifyTask, geometry: __esri.Geometry) => {
    this.identifyParams.width = this.mapView.width;
    this.identifyParams.height = this.mapView.height;
    this.identifyParams.mapExtent = this.mapView.extent;
    this.identifyParams.geometry = geometry;
    this.identifyParams.returnGeometry = false;
    this.loaderService.isLoading.next(true);
    try {
      const iResults = await iTask.execute(this.identifyParams);
      console.log(iResults);
      if (iResults.results.length > 0) {
        const oID = parseInt(iResults.results[0].feature.attributes.OBJECTID);
        const layerId = iResults.results[0].layerId;
        this.queryRelatedFeaturesForGeology(layerId, oID, geometry);
        console.log(iResults.results[0].feature, iResults.results[0].layerId, iResults.results[0].feature.attributes.OBJECTID);
      }
    } catch (err: any) {
      console.error(err);
    } finally {
      this.loaderService.isLoading.next(false);
    }
  }

  private createLayerIdentifyEvent (isChecked:boolean):void {
    if (isChecked && this.activeLayer.visible && this.identifyEvent === null) {
      this.identifyEvent = this.mapView.on('click', (evt: any) => {
        // const subLayer = this.activeLayer.findSublayerById(1);
        const identifyTask = new IdentifyTask(this.activeLayer.url);
        this.executeIdentifyTask(identifyTask, evt.mapPoint);

        // const layerQuery: __esri.Query = subLayer.createQuery();
        // layerQuery.geometry = evt.mapPoint;
        // layerQuery.spatialRelationship = 'intersects'
        // layerQuery.outFields = ['*'];

        // subLayer.queryFeatures(layerQuery).then(d => {
        // console.log(d);
        // this.soilsService.identifySoil(evt.mapPoint, 'pmlo').then((result) => {
        //   const resulstTable = result.Table[0];
        //   const pmloSoil: PMLOSoil = new PMLOSoil();
        //   let index: number = 0;
        //   for (const key of Object.keys(pmloSoil)) {
        //     if (resulstTable[index] !== null) {
        //       pmloSoil[key] = resulstTable[index];
        //     }
        //     index += 1;
        //   }
        //   this.mapView.popup.dockOptions = {
        //     buttonEnabled: true,
        //     position: 'top-left'
        //   }
        //   this.mapView.popup.open({
        //     title: pmloSoil.musym,
        //     location: evt.mapPoint,
        //     content: GetPMLOSoilPopupContent(pmloSoil),
        //     overwriteActions: true,
        //     actions: []
        //   });

        // this.loaderService.isLoading.next(false);
        // })
      });
    } else if (!isChecked && this.identifyEvent !== null) {
      this.identifyEvent.remove();
      this.identifyEvent = null;
    }
  }

  themeIdentifyChanged (isChecked: boolean) {
    this.isIdentifyChecked = isChecked;
    this.createLayerIdentifyEvent(isChecked);
  }
}
