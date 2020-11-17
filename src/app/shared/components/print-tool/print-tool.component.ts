import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, FormGroupDirective, NgForm, ValidatorFn } from '@angular/forms';
import PrintTask from 'esri/tasks/PrintTask';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import { AppConfiguration } from 'src/config';

@Component({
  selector: 'app-print-tool',
  templateUrl: './print-tool.component.html',
  styleUrls: ['./print-tool.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PrintToolComponent implements OnInit {
  @ViewChild('printMapModal') printMapModal: any;
  @ViewChild('mapViewNode', { static: true }) private mapViewEl: ElementRef;
  @Input() map: any;
  printForm: FormGroup;
  MAX: number = 200;
  MAXLINES: number = 5;
  showCurrentDate = true;
  faQuestionCircle = faQuestionCircle;
  constructor(
    private formBuilder: FormBuilder,
    private config: AppConfiguration,
    private loaderService: LoaderService,
    private helpService: HelpService
  ) {}
  matcher = new MyErrorStateMatcher();
  popupMapView: any;
  printTask = new PrintTask({ url: this.config.printGPServiceURL });
  showPrintMapPreview(): void {
    this.printMapModal.closeOnEscape = false;
    this.printMapModal.show();
    setTimeout(() => {
      this.initializeMap();
    }, 10);
  }

  async initializeMap() {
    try {
      const mapProperties: any = {
        basemap: this.map.map.basemap.id,
        layers: this.map.map.layers,
      };

      let ESRIMap = await import('arcgis-js-api/Map');
      const map = new ESRIMap.default(mapProperties);
      const mapViewProperties: any = {
        container: this.mapViewEl.nativeElement,
        map: map,
      };

      const ESRIMapView = await import('arcgis-js-api/views/MapView');
      this.popupMapView = new ESRIMapView.default(mapViewProperties);
      this.popupMapView.extent = this.map.extent;
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

    console.log((this.printTask as any)._getPrintDefinition(this.popupMapView, printParameters));

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

  openHelp(): void {
    this.helpService.openHelp.emit({ header: 'Export Map to PDF', itemName: 'exportMap' });
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

import { ErrorStateMatcher } from '@angular/material/core';
import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { TraceGPError } from '../../services/error/GPServiceError';
import { LoaderService } from '../../services/Loader.service';
import { HelpService } from '../../services/help/help.service';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}
