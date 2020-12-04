import { addGraphics } from '../../store/graphics.actions';
import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/internal/operators/take';
import { kmlToGeoJson, createKMLForExport } from '../../utils/KMLUtils';
import { createGPXForExport, gpxToGeoJson } from '../../utils/GPXUtils';
import { convertSHPToGraphics, downloadSHP } from '../../utils/SHPUtils';
import { downloadFile } from '../../utils/DownloadFile';
import { GetGraphicsForExtentUsingString } from '../../utils/DrawUtils';
import { convertMMPJSONToGraphics } from './OldMMPUtils';

@Component({
  selector: 'app-import-export',
  templateUrl: './ImportExport.component.html',
  styleUrls: ['./ImportExport.component.scss']
})
export class ImportExportComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  @Input() mapView: __esri.MapView;
  files: any = [];
  format = 'mmp';
  graphicsSub$: any;
  exportEnabled: boolean = false;
  fileUploadError = '';
  constructor (private store: Store<AppState>) { }

  ngOnInit () {
    // convertMMPJSONToGraphics(null, this.mapView, this.store);
    this.graphicsSub$ = this.store
      .select((state: any) => state.app.graphics)
      .subscribe((x: any) => {
        this.exportEnabled = x.length > 0;
      });
  }

  parseUploadedFiles (file: any) {
    const fileReader: any = new FileReader();
    fileReader.onload = () => {
      const r = fileReader.result as any;
      let _temp;
      let _jsn;
      switch (this.format) {
        case 'kml':
          _temp = kmlToGeoJson(r);
          this.store.dispatch(addGraphics({ graphics: _temp }));
          this.mapView.goTo(GetGraphicsForExtentUsingString(_temp));
          break;
        case 'gpx':
          _temp = gpxToGeoJson(r);
          this.store.dispatch(addGraphics({ graphics: _temp }));
          this.mapView.goTo(GetGraphicsForExtentUsingString(_temp));
          break;
        case 'shp':
          convertSHPToGraphics(file, this.store, this.mapView);
          break;
        case 'mmp':
          _jsn = JSON.parse(r);
          if (typeof _jsn.length === 'undefined') {
            // old mmp
            const oldMMP = convertMMPJSONToGraphics(_jsn);
            this.store.dispatch(addGraphics({ graphics: oldMMP }));
            this.mapView.goTo(GetGraphicsForExtentUsingString(JSON.stringify(oldMMP)));
          } else {
            this.store.dispatch(addGraphics({ graphics: _jsn }));
            this.mapView.goTo(GetGraphicsForExtentUsingString(r));
          }

          break;
        default:
          break;
      }
    };
    fileReader.readAsText(file);
  }

  chooseFile () {
    const fileInput = this.fileInput.nativeElement;
    this.files = [];
    fileInput.accept = '.' + this.format;
    if (this.format === 'shp') fileInput.accept = '.zip';

    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        const file: any = fileInput.files[index];
        this.files.push(file);
      }
      this.fileInput.nativeElement.value = '';
      this.parseUploadedFiles(this.files[0]);
    };
    fileInput.click();
  }

  export () {
    const graphics$: any = this.store.select(
      (state: any) => state.app.graphics
    );
    graphics$.pipe(take(1)).subscribe((dt: any) => {
      // @todo need to check whether there are any features or not before proceeding
      switch (this.format) {
        case 'kml':
          downloadFile('userGraphics.kml', createKMLForExport(dt), 'application/xml');
          break;
        case 'mmp':
          downloadFile('UserGraphics.mmp', JSON.stringify(dt), 'application/json');
          break;
        case 'gpx':
          downloadFile('userGraphics.gpx', createGPXForExport(dt), 'application/xml');
          break;
        case 'shp':
          downloadSHP(dt, 'MapMyProperty.zip');
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy () {
    this.graphicsSub$.unsubscribe();
  }
}
