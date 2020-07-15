import { addGraphics } from '../../store/graphics.actions';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/internal/operators/take';
import { Point } from 'esri/geometry';
import Graphic from 'esri/Graphic';
import { mergePlacemarksToKML, pointGraphicToKML, lineGraphicsToKML, areaGraphicsToKML } from './KMLUtils';

@Component({
  selector: "app-import-export",
  templateUrl: "./ImportExport.component.html",
  styleUrls: ["./ImportExport.component.scss"],
})
export class ImportExportComponent implements OnInit {
  @ViewChild("fileInput", { static: false }) fileInput: ElementRef;
  files = [];
  format = 'mmp';
  constructor(private store: Store<AppState>) { }
  ngOnInit() { }

  downloadFile(name, contents, mime_type) {
    mime_type = mime_type || "text/plain";
    var blob = new Blob([contents], { type: mime_type });
    var dlink = document.createElement('a');
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

  parseUploadedFiles(file) {
    let fileReader = new FileReader();
    fileReader.onload = (e) => {
      const r = fileReader.result as any;
      this.store.dispatch(addGraphics({ graphics: JSON.parse(r) }))
    }
    fileReader.readAsText(file);

  }

  chooseFile() {
    const fileInput = this.fileInput.nativeElement;
    fileInput.onchange = () => {
      for (let index = 0; index < fileInput.files.length; index++) {
        const file = fileInput.files[index];
        this.files.push(file);
      }
      this.fileInput.nativeElement.value = '';
      this.parseUploadedFiles(this.files[0]);
    };
    fileInput.click();
  }

  export() {
    const graphics$: any = this.store.select((state: any) => state.app.graphics);
    let placeMarksArray = [];
    graphics$.pipe(take(1)).subscribe(dt => {
      dt.forEach((g: any) => {
        const _gJson = JSON.parse(g);
        switch (_gJson.geometry.type) {
          case 'point':
            placeMarksArray.push(pointGraphicToKML(_gJson));
            break;
          case 'polyline':
            placeMarksArray.push(lineGraphicsToKML(_gJson));
            break;
          case 'polygon':
            placeMarksArray.push(areaGraphicsToKML(_gJson));
            break;
          default:
            break;
        }
      });

      switch (this.format) {
        case 'kml':
          this.downloadFile("userGraphics.kml", mergePlacemarksToKML(placeMarksArray), "application/xml");
          break;
        case 'mmp':
          this.downloadFile("UserGraphics.mmp", JSON.stringify(dt), "application/json");
          break;
        default:
          break;
      }

    });
  }
}
