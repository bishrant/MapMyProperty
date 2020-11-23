import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, AbstractControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import PrintTask from 'esri/tasks/PrintTask';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import { AppConfiguration } from 'src/config';
import { ErrorStateMatcher } from '@angular/material/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TraceGPError } from '../../services/error/GPServiceError';
import { LoaderService } from '../../services/Loader.service';
import GraphicsLayer from 'esri/layers/GraphicsLayer';
import Graphic from 'esri/Graphic';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import VectorLayer from 'esri/layers/VectorTileLayer';
import ImageryLayer from 'esri/layers/ImageryLayer';
import WMSLayer from 'esri/layers/WMSLayer';
import BingMapsLayer from 'esri/layers/BingMapsLayer';

@Component({
  selector: 'app-print-tool',
  templateUrl: './print-tool.component.html',
  styleUrls: ['./print-tool.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrintToolComponent implements OnInit {
  @ViewChild('printMapModal') printMapModal: any;
  @ViewChild('modalMapViewNode', { static: true }) private mapViewEl: ElementRef;
  @Input() mapView: __esri.MapView;
  printForm: FormGroup;
  MAX: number = 200;
  MAXLINES: number = 5;
  showCurrentDate = true;
  constructor(
    private formBuilder: FormBuilder,
    private config: AppConfiguration,
    private loaderService: LoaderService,
  ) { }
  matcher = new MyErrorStateMatcher();
  popupMapView: __esri.MapView;
  printTask = new PrintTask({ url: this.config.printGPServiceURL });
  showPrintMapPreview(): void {
    this.printMapModal.closeOnEscape = false;
    this.printMapModal.show();
    setTimeout(() => {
      this.initializeMap();
    }, 10);
  }


  private createLayer(layer: __esri.Layer): any
  {
    const _id = layer.id;
    const _minScale = (layer as any).minScale;
    let lyr:any;
    switch(layer.type)
    {
      case 'map-image':
        lyr = new MapImageLayer();
        break;

      case 'feature':
        lyr = new FeatureLayer();
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

    lyr.id = _id +'popup';
    if (layer.type !== 'bing-maps') {
      lyr.url = (layer as any).url;
    }

    lyr.visible = layer.visible;
    if (_minScale !== null)
    {
      lyr.minScale = _minScale;
    }

    return lyr;
  }

  copyLayers() {
    const lrArray: any = [];
    this.mapView.map.layers.forEach((lrs: __esri.Layer) => {
      if (lrs.type === 'graphics') {
          const grs = (lrs as any).graphics;
          if (grs.length > 0) {
            const grLr = new GraphicsLayer({ id: lrs.id + 'popup' });
            grs.forEach((graphic: __esri.Graphic) => {
              grLr.add(Graphic.fromJSON(graphic.toJSON()));
            });
            lrArray.push(grLr);
          }
        }
        else if (['map-image', 'feature', 'vector-tile', 'imagery', 'wms', 'bing-maps'].includes(lrs.type)) {
          const l = this.createLayer(lrs);
          console.log(l);
          lrArray.push(l);
        }
       else {
          lrArray.push(lrs);
      }

    });
    return lrArray;
  }
  async initializeMap() {

    try {
      const lrArray = this.copyLayers();
      const mapProperties: any = {
        basemap: this.mapView.map.basemap,
        layers: lrArray,
      };

      let ESRIMap = await import('arcgis-js-api/Map');
      const map = new ESRIMap.default(mapProperties);
      const mapViewProperties: any = {
        container: this.mapViewEl.nativeElement,
        map: map,
        snapToZoom: false,
        constraints: {
          rotationEnabled: false
        },
        center: this.mapView.center,
        zoom: this.mapView.zoom,
        spatialReference: this.mapView.spatialReference
      };

      const ESRIMapView = await import('arcgis-js-api/views/MapView');
      this.popupMapView = new ESRIMapView.default(mapViewProperties);
      return this.popupMapView;
    } catch (error) {
      console.log('Esri: ', error);
    }
  }

  async generatePDF() {
    this.loaderService.isLoading.next(true);
    const printParameters = new PrintParameters({
      view: this.popupMapView,
      extraParameters: {
        comments: this.printForm.get('comments')?.value,
        title: this.printForm.get('title')?.value,
        Layout_Template: 'MMP',
        Format: 'PDF',
        showCurrentDate: this.showCurrentDate,
      },
    });

    this.printTask
      .execute(printParameters)
      .then((success: any) => {
        console.log(success.url);
        window.open(success.url, '_blank');
        this.loaderService.isLoading.next(false);
        this.printMapModal.hide();
      })
      .catch((error: any) => {
        console.error(error);
        let gpError = TraceGPError(this.config.printGPServiceURL, error);
        throw gpError;
      });
  }

  previewClosed() {
    this.popupMapView.map.layers.forEach(lrs => {
      this.popupMapView.map.remove(lrs);
    });
  }

  ngOnInit(): void {
    this.printForm = this.formBuilder.group({
      title: [''],
      comments: [
        '',
        { validators: [ValidateCommentsLength(this.MAX), ValidateLineBreaks(this.MAXLINES)], updateOn: 'change' },
      ],
    });
  }

  get comments() {
    return this.printForm.get('comments');
  }
}

export function ValidateCommentsLength(MAX: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.length > MAX) {
      return { 'commentsInvalid': true }; // return object if the validation is not passed.
    }
    return null;
  }
}

export function ValidateLineBreaks(MAXLINES: number): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value && control.value.split("\n").length > MAXLINES) {
      return { 'commentsLineBreaksInvalid': true }; // return object if the validation is not passed.
    }
    return null;
  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}
