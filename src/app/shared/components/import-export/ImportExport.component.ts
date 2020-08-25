import { addGraphics } from '../../store/graphics.actions';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/internal/operators/take';
import { kmlToGeoJson, createKMLForExport } from './KMLUtils';
import { createGPXForExport, gpxToGeoJson } from './GPXUtils';

@Component({
  selector: 'app-import-export',
  templateUrl: './ImportExport.component.html',
  styleUrls: ['./ImportExport.component.scss']
})
export class ImportExportComponent {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  files: any = [];
  format = 'mmp';
  constructor (private store: Store<AppState>) { }

  downloadFile (name: any, contents: any, mime_type: string) {
    mime_type = mime_type || 'text/plain';
    const blob = new Blob([contents], { type: mime_type });
    const dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function (e) {
      // revokeObjectURL needs a delay to work properly
      setTimeout(function () {
        window.URL.revokeObjectURL(dlink.href);
      }, 100);
    };
    dlink.click();
    dlink.remove();
  }

  parseUploadedFiles (file: any) {
    const fileReader: any = new FileReader();
    fileReader.onload = (e: any) => {
      const r = fileReader.result as any;
      switch (this.format) {
        case 'kml':
          this.store.dispatch(addGraphics({ graphics: kmlToGeoJson(r) }));
          break;
        case 'gpx':
          this.store.dispatch(addGraphics({ graphics: gpxToGeoJson(r) }));
          break;
        default:
          break;
      }
    }
    fileReader.readAsText(file);
  }

  chooseFile () {
    const fileInput = this.fileInput.nativeElement;
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
    const graphics$: any = this.store.select((state: any) => state.app.graphics);
    graphics$.pipe(take(1)).subscribe((dt: any) => {
      switch (this.format) {
        case 'kml':
          this.downloadFile('userGraphics.kml', createKMLForExport(dt), 'application/xml');
          break;
        case 'mmp':
          this.downloadFile('UserGraphics.mmp', JSON.stringify(dt), 'application/json');
          break;
        case 'gpx':
          this.downloadFile('userGraphics.gpx', createGPXForExport(dt), 'application/xml');
          break;
        default:
          break;
      }
    });
  }
}
