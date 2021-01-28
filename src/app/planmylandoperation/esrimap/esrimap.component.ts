import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
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
import { GraphicsStoreComponent } from 'src/app/shared/components/graphics-store/GraphicsStore.component';
import { defaultPointCircleSymbol } from 'src/app/shared/utils/DefaultSymbols';
import { ElevationProfileComponent } from '../sidebar/elevation-profile/elevation-profile.component';
import { CulvertSizeComponent } from '../sidebar/culvert-size/culvert-size.component';
import { SoilsComponent } from '../sidebar/soils/soils.component';
import { reorderGraphicsLayer } from 'src/app/shared/utils/LayerUtils';
import { ListenToKeyboard } from 'src/app/shared/utils/MapViewUtils';
import { serialUnsubscriber, SubscriptionCollection } from 'src/app/shared/utils/SubscriptionUtils';

@Component({
  selector: 'pmlo-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true }) private graphicsStoreEl!: GraphicsStoreComponent;
  @ViewChild('drawAccPanel') drawAccPanel: AccordionPanelComponent;
  @ViewChild('soilsTableModal') soilsTableModal: ModalComponent;
  @ViewChild('sensAreasAccPanel') sensAreasAccPanel: AccordionPanelComponent;
  @ViewChild('soilsAccPanel') soilsAccPanel: AccordionPanelComponent;
  @ViewChild('harvestAccPanel') harvestAccPanel: AccordionPanelComponent;
  @ViewChild('regenerationAccPanel') regenerationAccPanel: AccordionPanelComponent;
  @ViewChild('culvertAccPanel') culvertAccPanel: AccordionPanelComponent;
  @ViewChild('elevationAccPanel') elevationAccPanel: AccordionPanelComponent;
  @ViewChild('notificationsModal') notificationsModal: ModalComponent;
  @ViewChild('helpModal') helpModal: ModalComponent;
  @ViewChild('sessionModal') sessionModal: ModalComponent;
  @ViewChild('soilsComponent') soilsComponent: SoilsComponent;
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

  keyboardSub$: any;
  graphicsStoreSub$: Subscription;
  private subscriptions: SubscriptionCollection = {};

  constructor (
    private store: Store<AppState>,
    private mapViewService: MapviewService,
    private soilsService: SoilsService,
    private appConfig: AppConfiguration,
    private esrimapService: EsrimapService,
    private notificationsService: NotificationsService,
    private accordionPanelService: AccordionPanelService,
    private helpService: HelpService,
    private renderer: Renderer2
  ) { }

  ngAfterViewInit (): void {
    setTimeout(() => this.closeOtherPanels('Draw'), 100);
    this.subscriptions.keyboard = ListenToKeyboard(this.graphicsStoreEl, this.mapViewEl, this.renderer)
  }

  ngOnDestroy (): void {
    serialUnsubscriber(...Object.values(this.subscriptions));
    if (this.graphicsStoreSub$) this.graphicsStoreSub$.unsubscribe();
  }

  /* session management */
  checkIfSavedGraphicsExists = () => {
    this.savedData = getSavedState();
    if (this.savedData && this.savedData.length > 0) {
      this.sessionModal.show();
    }
    this.listenToGraphicsStore();
  }

  listenToGraphicsStore = () => {
    const graphics$ = this.store.select((state) => state.app.graphics);
    if (this.graphicsStoreSub$) { this.graphicsStoreSub$.unsubscribe() }
    this.graphicsStoreSub$ = graphics$.subscribe((g: any) => {
      setSavedState(g);
    });
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

  /* map events and initializers */
  showCoordinates = () => {
    const pt = this.mapView.center;
    this.mapCoords = 'Lat: ' + pt.latitude.toFixed(5) + ' &nbsp; Long: ' + pt.longitude.toFixed(5);
  };

  private setMapEvents = () => {
    if (this.mapView) {
      this.mapView.watch('stationary', this.showCoordinates);
      this.mapView.on('pointer-move', this.showCoordinates);
      this.mapView.watch('scale', (value) => this.mapViewService.pushMapScale(value));
      this.mapView.when(() => {
        setTimeout(() => this.checkIfSavedGraphicsExists(), 2000);
      })
    }
  };

  private initializeMap = async () => {
    try {
      InitializeArcGISWorkers();
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      reorderGraphicsLayer(this.mapView.map);

      const soilsLayer: __esri.WMSLayer = CreateSoilsLayer('soilsDynamicLayer', this.appConfig.ssurgoWMSURL);
      this.mapView.map.addMany([soilsLayer, this.polygonGraphicsLayer, this.textGraphicsLayer, this.geomLabelsGraphicsLayer, this.generalGraphicsLayer]);

      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      this.generalSketchVM = CreateGeneralSketchViewModel(this.generalGraphicsLayer, this.mapView);
      this.sketchVM.updatePointSymbol = defaultPointCircleSymbol;
      this.sketchVM.activePointSymbol = defaultPointCircleSymbol;
      this.setMapEvents();

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
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  ngOnInit () {
    this.initializeMap();
    this.subscriptions.showTableModal = this.soilsService.showTableModal.subscribe((show: boolean) => {
      if (show) {
        this.soilsTableModal.show();
      } else {
        this.soilsTableModal.hide();
      }
    });
    this.subscriptions.notificationsModal = this.notificationsService.openNotificationsModal.subscribe((notification: PMLONotification) => {
      this.notificationHeader = notification.header;
      this.notificationBody = notification.body;
      this.notificationsModal.show();
    });

    this.accordionPanelService.setActivePanel.subscribe((panel: AccordionPanelComponent) => {
      this.esrimapService.setActivePanel(panel.panelTitle, panel.opened);
      if (panel !== this.culvertAccPanel) {
        if (this.culvertSizeComponent.isActive) {
          this.culvertSizeComponent.cleanup();
        }
      }

      if (panel !== this.elevationAccPanel) {
        if (this.elevationProfileComponent.isActive) {
          this.elevationProfileComponent.cleanup();
        }
      }

      if (panel !== this.soilsAccPanel) {
        if (this.soilsComponent.isIdentifyChecked) {
          this.soilsComponent.disableSoilsIdentify();
        }
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

  /* handle panel open/close interactions */
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
}
