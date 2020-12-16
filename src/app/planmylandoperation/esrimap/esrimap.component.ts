import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer, FindGraphicById, GetPolygonGraphics } from 'src/app/shared/utils/CreateGraphicsLayer';
import { CreateGeneralSketchViewModel, SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { createMapView } from 'src/app/shared/utils/CreateMapView';
import { CreateSoilsLayer } from 'src/app/shared/utils/CreateDynamicLayers';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { SoilsService } from '../sidebar/soils/soils.service';
import { AppConfiguration } from 'src/config';
import { AccordionPanelComponent } from 'src/app/shared/components/accordion-panel/accordion-panel.component';
import { EsrimapService } from './esrimap.service';
import { NotificationsService } from '../pmloUtils/notifications.service';
import { ModalComponent } from 'src/app/shared/lib/angular-modal/modal/modal.component';
import { PMLONotification } from '../models/pmloNotification.model';
import { AccordionPanelService } from 'src/app/shared/components/accordion-panel/accordion-panel.service';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import { clearLocalStorage, getSavedState, setSavedState } from 'src/app/shared/store/storage.metareducer';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import { Subscription } from 'rxjs';
import { HelpService } from 'src/app/shared/services/help/help.service';
import { HelpObj } from 'src/app/shared/services/help/HelpObj.model';
import { InitializeArcGISWorkers } from 'src/app/shared/utils/ArcGISWorkersUtil';
import { isMapViewActive } from 'src/app/shared/ScreenUtils';
import { GraphicsStoreComponent } from 'src/app/shared/components/graphics-store/GraphicsStore.component';
import { defaultPointCircleSymbol } from 'src/app/shared/utils/DefaultSymbols';
import { ElevationProfileComponent } from '../sidebar/elevation-profile/elevation-profile.component';
import { CulvertSizeComponent } from '../sidebar/culvert-size/culvert-size.component';

@Component({
  selector: 'pmlo-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit, AfterViewInit {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true }) private graphicsStoreEl!: GraphicsStoreComponent;
  @ViewChild('drawAccPanel') drawAccPanel: AccordionPanelComponent;
  @ViewChild('soilsTableModal') soilsTableModal: ModalComponent;
  @ViewChild('sensAreasAccPanel') sensAreasAccPanel: AccordionPanelComponent;
  @ViewChild('soilsAccPanel') soilsAccPanel: AccordionPanelComponent;
  @ViewChild('harvestAccPanel') harvestAccPanel: AccordionPanelComponent;
  @ViewChild('regenerationAccPanel') regenerationAccPanel: AccordionPanelComponent;
  @ViewChild('notificationsModal') notificationsModal: ModalComponent;
  @ViewChild('helpModal') helpModal: ModalComponent;
  @ViewChild('sessionModal') sessionModal: ModalComponent;
  @ViewChild('elevationProfileComponent') elevationProfileComponent: ElevationProfileComponent;
  @ViewChild('culvertSizeComponent') culvertSizeComponent: CulvertSizeComponent;
  @ViewChildren(AccordionPanelComponent) accordionPanels: QueryList<AccordionPanelComponent>;

  mapView!: __esri.MapView;
  clickToAddText = false;
  sketchVM: any = new SketchViewModel();
  generalSketchVM: __esri.SketchViewModel;
  selectedGraphics!: any[] | undefined;
  sidebarVisible = window.innerWidth > 640;
  mapCoords: any;

  geomLabelsSketchVM: __esri.SketchViewModel = new SketchViewModel();
  geomLabelsGraphicsLayer: __esri.GraphicsLayer = new GraphicsLayer({ id: 'geomlabels' });
  polygonGraphicsLayer: __esri.GraphicsLayer = CreatePolygonGraphicsLayer();
  textGraphicsLayer = CreateTextGraphicsLayer();
  generalGraphicsLayer = CreatePolygonGraphicsLayer('generalGraphicsLayer');

  notificationHeader = '';
  notificationBody = '';
  helpHeader = 'Getting Started Tour';
  helpItem = 'gettingStartedTour';
  savedData: any;

  clearOtherPanelOnDrawOpen = () => {
    if (this.elevationProfileComponent.isActive) {
      this.elevationProfileComponent.cleanup();
    }
    if (this.culvertSizeComponent.isActive) {
      this.culvertSizeComponent.cleanup();
    }
  }

  closeOtherPanels = ((panelTitle: string) => {
    const panelToOpen: AccordionPanelComponent[] = this.accordionPanels.filter((panel: any) => panel.panelTitle === panelTitle);
    if (panelToOpen.length > 0) {
      panelToOpen[0].toggleOthers();
      this.clearOtherPanelOnDrawOpen();
    }
  });

  constructor (
    private store: Store<AppState>,
    private mapViewService: MapviewService,
    private soilsService: SoilsService,
    private appConfig: AppConfiguration,
    private esrimapService: EsrimapService,
    private notificationsService: NotificationsService,
    private accordionPanelService: AccordionPanelService,
    private helpService: HelpService
  ) { }

  checkIfSavedGraphicsExists () {
    this.savedData = getSavedState();
    if (this.savedData) {
      if (this.savedData.length > 0) {
        this.sessionModal.show();
      }
      this.listenToGraphicsStore();
    } else {
      this.listenToGraphicsStore();
    }
  }

  graphicsStoreSub: Subscription;

  listenToGraphicsStore () {
    const graphics$ = this.store.select((state) => state.app.graphics);
    if (this.graphicsStoreSub) { this.graphicsStoreSub.unsubscribe() }
    this.graphicsStoreSub = graphics$.subscribe((g: any) => {
      setSavedState(g);
    });
  }

  ngAfterViewInit (): void {
    setTimeout(() => {
      this.closeOtherPanels('Draw');
    }, 100);
  }

  restoreSession (e: any) {
    if (e !== null) this.sessionModal.hide();
    if (e) {
      this.store.dispatch(addGraphics({ graphics: this.savedData }));
      setTimeout(() => {
        this.mapView.goTo(this.polygonGraphicsLayer.graphics);
      }, 500);
    } else {
      clearLocalStorage();
    }
    this.listenToGraphicsStore();
  }

  @HostListener('keydown.control.z') undoFromKeyboard (): void {
    if (isMapViewActive()) { this.graphicsStoreEl.undo(); }
  }

  @HostListener('keydown.control.y') redoFromKeyboard (): void {
    if (isMapViewActive()) { this.graphicsStoreEl.redo(); }
  }

  @HostListener('document:keydown.delete') deleteFromKeyboard (): void {
    if (isMapViewActive()) { this.graphicsStoreEl.delete(); }
  }

  @HostListener('keydown.meta.shift.z') redoFromKeyboardMac (): void {
    if (isMapViewActive()) { this.graphicsStoreEl.redo(); }
  }

  @HostListener('keydown.meta.z') undoFromKeyboardMac (): void {
    if (isMapViewActive()) { this.graphicsStoreEl.undo(); }
  }

  showCoordinates = (pt: any) => {
    this.mapCoords = 'Lat: ' + pt.latitude.toFixed(5) + ' &nbsp; Long: ' + pt.longitude.toFixed(5);
  };

  private setMapEvents = () => {
    if (this.mapView) {
      this.mapView.watch('stationary', () => {
        this.showCoordinates(this.mapView.center);
      });

      this.mapView.watch('scale', (value) => {
        this.mapViewService.pushMapScale(value);
      });

      this.mapView.on('pointer-move', (evt: any) => {
        this.showCoordinates(this.mapView.toMap({ x: evt.x, y: evt.y }));
      });

      this.mapView.when(() => {
        setTimeout(() => {
          this.checkIfSavedGraphicsExists();
        }, 2000);
      })
    }
  };

  private initializeMap = async () => {
    try {
      InitializeArcGISWorkers();
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      this.mapView.map.allLayers.on('change', (evt) => {
        // Pull user graphics layers to the end of the array
        if (evt.added.length > 0) {
          const userGraphicsLayer = evt.added.find(l => l.id === 'userGraphicsLayer');
          const userTextGraphicsLayer = evt.added.find(l => l.id === 'userTextGraphicsLayer');
          const geomlabels = evt.added.find(l => l.id === 'geomlabels');
          const generalGraphics = evt.added.find(l => l.id === 'generalGraphicsLayer');

          if (userGraphicsLayer !== null) this.mapView.map.reorder(userGraphicsLayer, this.mapView.map.layers.length - 1);
          if (userTextGraphicsLayer !== null) this.mapView.map.reorder(userTextGraphicsLayer, this.mapView.map.layers.length - 1);
          if (geomlabels !== null) this.mapView.map.reorder(geomlabels, this.mapView.map.layers.length - 1);
          if (generalGraphics !== null) this.mapView.map.reorder(generalGraphics, this.mapView.map.layers.length - 1);
        }
      });
      const soilsLayer: __esri.WMSLayer = CreateSoilsLayer('soilsDynamicLayer', this.appConfig.ssurgoWMSURL);
      this.mapView.map.addMany([soilsLayer, this.polygonGraphicsLayer, this.textGraphicsLayer, this.geomLabelsGraphicsLayer, this.generalGraphicsLayer]);
      this.mapView.whenLayerView(this.polygonGraphicsLayer).then((boundaryLayerView) => {
        boundaryLayerView.watch('updating', (val) => {
          if (val) {
            let soilsGLHasPolygons: boolean = true;
            let sensAreasGLHasPolygons: boolean = true;
            const pmloSoilsGL: __esri.GraphicsLayer = this.mapView.map.findLayerById('pmloSoilsGL') as __esri.GraphicsLayer;
            const sensAreasGL: __esri.GraphicsLayer = this.mapView.map.findLayerById('sensAreasGL') as __esri.GraphicsLayer;

            if (GetPolygonGraphics(boundaryLayerView.layer as __esri.GraphicsLayer).length === 0) {
              soilsGLHasPolygons = false;
              sensAreasGLHasPolygons = false;
            } else {
              if (pmloSoilsGL.graphics.length === 0 || (pmloSoilsGL.graphics.length > 0 && FindGraphicById(boundaryLayerView.layer as __esri.GraphicsLayer, pmloSoilsGL.graphics.getItemAt(0).attributes.boundaryId) === undefined)) {
                soilsGLHasPolygons = false;
              }

              if (sensAreasGL.graphics.length === 0 || (sensAreasGL.graphics.length > 0 && FindGraphicById(boundaryLayerView.layer as __esri.GraphicsLayer, sensAreasGL.graphics.getItemAt(0).attributes.boundaryId) === undefined)) {
                sensAreasGLHasPolygons = false;
              }
            }
            this.mapViewService.boundaryHasPolygons.emit(soilsGLHasPolygons);
            this.mapViewService.sensAreasGLHasPolygons.emit(sensAreasGLHasPolygons);
          }
        });
      });
      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      this.generalSketchVM = CreateGeneralSketchViewModel(this.generalGraphicsLayer, this.mapView);
      this.sketchVM.updatePointSymbol = defaultPointCircleSymbol;
      this.sketchVM.activePointSymbol = defaultPointCircleSymbol;

      this.setMapEvents();
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  ngOnInit () {
    this.initializeMap();
    this.soilsService.showTableModal.subscribe((show: boolean) => {
      if (show) {
        this.soilsTableModal.show();
      } else {
        this.soilsTableModal.hide();
      }
    });
    this.notificationsService.openNotificationsModal.subscribe((notification: PMLONotification) => {
      this.notificationHeader = notification.header;
      this.notificationBody = notification.body;
      this.notificationsModal.show();
    });

    this.accordionPanelService.setActivePanel.subscribe((panel: AccordionPanelComponent) => {
      switch (panel) {
        case this.sensAreasAccPanel:
          this.esrimapService.sensAreasAccordionOpen.emit(panel.opened);
          break;

        case this.harvestAccPanel:
          this.esrimapService.harvOpAccordionOpen.emit(panel.opened);
          break;

        case this.regenerationAccPanel:
          this.esrimapService.regOpAccordionOpen.emit(panel.opened);
          break;

        case this.soilsAccPanel:
          this.esrimapService.soilsAccordionOpen.emit(panel.opened);
          break;

        case this.drawAccPanel:
          this.clearOtherPanelOnDrawOpen();
          break;
      }
    });

    this.esrimapService.sensAreasAccordionOpen.subscribe((open: boolean) => {
      this.sensAreasAccPanel.opened = open;
    });

    this.esrimapService.harvOpAccordionOpen.subscribe((open: boolean) => {
      this.harvestAccPanel.opened = open;
    });

    this.esrimapService.regOpAccordionOpen.subscribe((open: boolean) => {
      this.regenerationAccPanel.opened = open;
    });

    this.esrimapService.closeAllPanelsExcept.subscribe((panelTitle: string) => this.closeOtherPanels(panelTitle));

    this.helpService.openHelp.subscribe((helpObj: HelpObj) => {
      this.helpHeader = helpObj.header;
      this.helpItem = helpObj.itemName;
      this.helpModal.show();
    });
  }
}
