import { Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';
import PrintTask from '@arcgis/core/tasks/PrintTask';
import PrintParameters from '@arcgis/core/tasks/support/PrintParameters';
import { AppConfiguration } from 'src/config';
import { ErrorStateMatcher } from '@angular/material/core';
import { TraceMMPError } from '../../services/error/GPServiceError';
import { LoaderService } from '../../services/Loader.service';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import FeatureLayer from '@arcgis/core/layers/FeatureLayer';
import MapImageLayer from '@arcgis/core/layers/MapImageLayer';
import VectorLayer from '@arcgis/core/layers/VectorTileLayer';
import ImageryLayer from '@arcgis/core/layers/ImageryLayer';
import WMSLayer from '@arcgis/core/layers/WMSLayer';
import BingMapsLayer from '@arcgis/core/layers/BingMapsLayer';
import { NotificationService } from '../../services/error/notification.service';
import Graphic from '@arcgis/core/Graphic';
import Layer from '@arcgis/core/layers/Layer';
import MapView from '@arcgis/core/views/MapView';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState (control: FormControl | null): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}

@Component({
  selector: 'app-print-tool',
  templateUrl: './print-tool.component.html',
  styleUrls: ['./print-tool.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PrintToolComponent implements OnInit {
  @ViewChild('printMapModal') printMapModal: any;
  @ViewChild('errorModal') errorModal: any;
  @ViewChild('modalMapViewNode', { static: true }) private mapViewEl: ElementRef;
  @Input() mapView: MapView;
  @Input() sketchVM: SketchViewModel;
  printForm: FormGroup;
  MAX: number = 200;
  MAXLINES: number = 5;
  showCurrentDate = true;
  constructor (
    private formBuilder: FormBuilder,
    private config: AppConfiguration,
    private loaderService: LoaderService,
    private notificationService: NotificationService
  ) { }

  matcher = new MyErrorStateMatcher();
  popupMapView: MapView;
  printTask = new PrintTask({ url: this.config.printGPServiceURL });
  showPrintMapPreview (): void {
    this.printMapModal.closeOnEscape = false;
    this.printMapModal.show();
    setTimeout(() => {
      this.initializeMap();
    }, 10);
  }

  private createLayer (layer: Layer): any {
    const _id = layer.id;
    const _minScale = (layer as any).minScale;
    let lyr:any;
    switch (layer.type) {
      case 'map-image':
        lyr = new MapImageLayer();
        break;

      case 'feature':
        lyr = new FeatureLayer({
          source: (layer as any)?.source,
          url: (layer as any)?.url,
          objectIdField: (layer as any)?.objectIdField,
          fields: (layer as any)?.fields,
          renderer: (layer as any)?.renderer,
          labelingInfo: (layer as any)?.labelingInfo,
          labelsVisible: true,
          outFields: ['*']
        });
        break;

      case 'vector-tile':
        lyr = new VectorLayer();
        break;
      case 'imagery':
        lyr = new ImageryLayer();
        break;
      case 'wms':
        lyr = new WMSLayer({
          customParameters: (layer as any).customParameters
        });
        break;
      case 'bing-maps':
        lyr = new BingMapsLayer({
          style: (layer as any).style,
          key: (layer as any).key
        });
        break;
    }

    lyr.id = _id + 'popup';
    if (layer.type !== 'bing-maps') {
      lyr.url = (layer as any).url;
    }

    lyr.visible = layer.visible;
    if (_minScale !== null) {
      lyr.minScale = _minScale;
    }

    return lyr;
  }

  copyLayers () {
    const lrArray: any = [];
    this.mapView.map.layers.forEach((lrs: Layer) => {
      if (lrs.type === 'graphics') {
        const grs = (lrs as any).graphics;
        if (grs.length > 0) {
          const grLr = new GraphicsLayer({ id: lrs.id + 'popup' });
          grs.forEach((graphic: Graphic) => {
            grLr.add(graphic.clone());
          });
          lrArray.push(grLr);
        }
      } else if (['map-image', 'feature', 'vector-tile', 'imagery', 'wms', 'bing-maps'].includes(lrs.type)) {
        const l = this.createLayer(lrs);
        lrArray.push(l);
      } else {
        lrArray.push(lrs);
      }
    });
    return lrArray;
  }

  async initializeMap () {
    try {
      if (this.sketchVM.state === 'active') {
        this.sketchVM.cancel();
      }
      const lrArray = this.copyLayers();
      const mapProperties: any = {
        basemap: this.mapView.map.basemap,
        layers: lrArray
      };

      const ESRIMap = await import('@arcgis/core/Map');
      const map = new ESRIMap.default(mapProperties);
      const mapViewProperties: any = {
        container: this.mapViewEl.nativeElement,
        map: map,
        snapToZoom: false,
        constraints: {
          rotationEnabled: false
        },
        center: this.mapView.center.clone(),
        zoom: parseInt('' + this.mapView.zoom),
        spatialReference: this.mapView.spatialReference.clone()
      };

      const ESRIMapView = await import('@arcgis/core/views/MapView');
      this.popupMapView = new ESRIMapView.default(mapViewProperties);
      setTimeout(() => {
        this.popupMapView.extent = this.mapView.extent.clone();
      }, 20)

      return this.popupMapView;
    } catch (error) {
      console.error('Esri: ', error);
    }
  }

  async generatePDF (format: string) {
    try {
      this.loaderService.isLoading.next(true);
      const printParameters = new PrintParameters({
        view: this.popupMapView,
        extraParameters: {
          comments: this.printForm.get('comments')?.value,
          title: this.printForm.get('title')?.value,
          Layout_Template: 'MMP',
          Format: format,
          showCurrentDate: '' + this.showCurrentDate
        }
      });

      const { url } = await this.printTask.execute(printParameters);
      window.open(url, '_blank');
      this.printMapModal.hide();
    } catch (error) {
      throw TraceMMPError('Failed to print your map. Please try again.', error.message, 'print-tool:165');
    } finally {
      this.loaderService.isLoading.next(false);
    }
  }

  previewClosed () {
    this.popupMapView.map.layers.forEach(lrs => {
      this.popupMapView.map.remove(lrs);
    });
  }

  ngOnInit (): void {
    this.printForm = this.formBuilder.group({
      title: [''],
      comments: [
        '',
        { validators: [ValidateCommentsLength(this.MAX), ValidateLineBreaks(this.MAXLINES)], updateOn: 'change' }
      ]
    });
  }

  get comments () {
    return this.printForm.get('comments');
  }
}

export function ValidateCommentsLength (MAX: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.length > MAX) {
      return { commentsInvalid: true }; // return object if the validation is not passed.
    }
    return null;
  }
}

export function ValidateLineBreaks (MAXLINES: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.split('\n').length > MAXLINES) {
      return { commentsLineBreaksInvalid: true }; // return object if the validation is not passed.
    }
    return null;
  }
}
