
import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { CreatePolygonGraphicsLayer, CreateTextGraphicsLayer } from 'src/app/shared/utils/CreateGraphicsLayer';
import { CreateGeneralSketchViewModel, SetupSketchViewModel } from 'src/app/shared/utils/SketchViewModelUitls';
import SketchViewModel from 'esri/widgets/Sketch/SketchViewModel';
import { createMapView } from 'src/app/shared/utils/CreateMapView';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import { AccordionPanelComponent } from 'src/app/shared/components/accordion-panel/accordion-panel.component';
import { EsrimapService } from 'src/app/planmylandoperation/esrimap/esrimap.service';
import { GraphicsStoreComponent } from 'src/app/shared/components/graphics-store/GraphicsStore.component';
import { Subscription } from 'rxjs';
import { ListenToKeyboard } from 'src/app/shared/utils/MapViewUtils';
import { addGraphics } from 'src/app/shared/store/graphics.actions';
import { getSavedState, setSavedState, clearLocalStorage } from 'src/app/shared/store/storage.metareducer';
import { ModalComponent } from 'src/app/shared/lib/angular-modal/modal/modal.component';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/shared/store/graphics.state';
import { MapviewService } from 'src/app/shared/services/mapview.service';
import { InitializeArcGISWorkers } from 'src/app/shared/utils/ArcGISWorkersUtil';
import { reorderGraphicsLayer } from 'src/app/shared/utils/LayerUtils';
import { defaultPointCircleSymbol } from 'src/app/shared/utils/DefaultSymbols';
import { SubscriptionCollection, serialUnsubscriber } from 'src/app/shared/utils/SubscriptionUtils';
import { MMPModalWindowService } from 'src/app/shared/services/MMPModalWindow.service';
import { NotificationsService } from 'src/app/shared/services/Notifications.service';
import { NotificationModel } from 'src/app/shared/models/Notification.model';

@Component({
  selector: 'app-esrimap',
  templateUrl: './esrimap.component.html',
  styleUrls: ['./esrimap.component.scss']
})
export class EsrimapComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(AccordionPanelComponent) accordionPanels: QueryList<AccordionPanelComponent>;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl!: ElementRef;
  @ViewChild('searchBar', { static: true }) private searchBarDiv!: ElementRef;
  @ViewChild('graphicsStore', { static: true }) private graphicsStoreEl!: GraphicsStoreComponent;
  @ViewChild('sessionModal') sessionModal: ModalComponent;
  @ViewChild('vegetationTableModal') vegetationTableModal: ModalComponent;
  @ViewChild('notificationsModal') notificationsModal: ModalComponent;

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

  notification: NotificationModel = new NotificationModel('', '');
  helpHeader = 'Getting Started Tour';
  helpItem = 'gettingStartedTour';
  savedData: any;

  keyboardSub$: any;
  graphicsStoreSub$: Subscription;
  private subscriptions: SubscriptionCollection = {};

  constructor (private store: Store<AppState>, private esrimapService: EsrimapService,
    private mapViewService: MapviewService,
    private notificationsService: NotificationsService,
    private mmpModalWindowService: MMPModalWindowService,
    private renderer: Renderer2) { }

  ngAfterViewInit (): void {
    setTimeout(() => this.closeOtherPanels('Draw'), 100);
    this.keyboardSub$ = ListenToKeyboard(this.graphicsStoreEl, this.mapViewEl, this.renderer);

    this.subscriptions.notificationsModal = this.notificationsService.openNotificationsModal.subscribe((_: NotificationModel) => {
      this.notification = _;
      this.notificationsModal.show();
    });
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

  closeOtherPanels = ((panelTitle: string): void => {
    const panelToOpen: AccordionPanelComponent[] = this.accordionPanels.filter((panel: any) => panel.title === panelTitle);
    if (panelToOpen.length > 0) panelToOpen[0].toggleOthers();
  });

  ngOnInit (): void {
    this.initializeMap();
    this.esrimapService.closeAllPanelsExcept.subscribe((panelTitle: string) => this.closeOtherPanels(panelTitle));
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

  private startSubscriptions = () => {
    this.subscriptions.showTableModal = this.mmpModalWindowService.modalVisibilityChanged.subscribe((status: any) => {
      if (status.visible) {
        this.vegetationTableModal.show();
      } else {
        this.vegetationTableModal.hide();
      }
    });
  }

  private initializeMap = async () => {
    try {
      InitializeArcGISWorkers();
      this.mapView = createMapView(this.mapViewEl, this.searchBarDiv);
      reorderGraphicsLayer(this.mapView.map);

      this.mapView.map.addMany([this.polygonGraphicsLayer, this.textGraphicsLayer, this.geomLabelsGraphicsLayer, this.generalGraphicsLayer]);

      this.sketchVM = SetupSketchViewModel(this.polygonGraphicsLayer, this.mapView);
      this.generalSketchVM = CreateGeneralSketchViewModel(this.generalGraphicsLayer, this.mapView);
      this.sketchVM.updatePointSymbol = defaultPointCircleSymbol;
      this.sketchVM.activePointSymbol = defaultPointCircleSymbol;
      this.setMapEvents();
      this.startSubscriptions();
    } catch (error) {
      console.error('Map load error ', error);
    }
  };

  ngOnDestroy (): void {
    serialUnsubscriber(...Object.values(this.subscriptions));
    if (this.keyboardSub$) this.keyboardSub$();
    if (this.graphicsStoreSub$) this.graphicsStoreSub$.unsubscribe();
  }
}
