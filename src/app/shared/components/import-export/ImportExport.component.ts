import { ZipService } from './../../services/zip.service';
import { addGraphics } from '../../store/graphics.actions';
import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { AppState } from 'src/app/shared/store/graphics.state';
import { Store } from '@ngrx/store';
import { take } from 'rxjs/internal/operators/take';
import { kmlToGeoJson, createKMLForExport } from './KMLUtils';
import { createGPXForExport, gpxToGeoJson } from './GPXUtils';
import { ZipTask } from '../../interfaces/zip.interface';
import { HttpClient } from '@angular/common/http';
import * as shp from 'shpjs';

@Component({
  selector: 'app-import-export',
  templateUrl: './ImportExport.component.html',
  styleUrls: ['./ImportExport.component.scss'],
})
export class ImportExportComponent implements OnInit {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;
  files: any = [];
  format = 'mmp';
  graphicsSub$: any;
  exportEnabled: boolean = false;
  fileUploadError = '';
  constructor(
    private store: Store<AppState>,
    private zipService: ZipService,
    private http: HttpClient
  ) {}

  downloadFile(name: any, contents: any, mime_type: string) {
    mime_type = mime_type || 'text/plain';
    const blob = new Blob([contents], { type: mime_type });
    const dlink = document.createElement('a');
    dlink.download = name;
    dlink.href = window.URL.createObjectURL(blob);
    dlink.onclick = function () {
      // revokeObjectURL needs a delay to work properly
      setTimeout(function () {
        window.URL.revokeObjectURL(dlink.href);
      }, 100);
    };
    dlink.click();
    dlink.remove();
  }

  ngOnInit() {
    this.graphicsSub$ = this.store
      .select((state: any) => state.app.graphics)
      .subscribe((x: any) => {
        this.exportEnabled = x.length > 0;
      });
  }

  fileToArrayBuffer = (file: any) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });

  pp = (s: any) => {
    const y = shp.parseZip(s);
    console.log(y);
  };

  parseSHPZip = (file: any) => {
    const that = this;
    // count the number of nested zip folders
    this.zipService.getEntries(file).subscribe((entries: any) => {
      const nestedZips = entries.filter((e: any) =>
        /^.*\.(zip)$/gi.test(e.filename)
      );

      if (nestedZips.length > 0) {
        const nestedZip = nestedZips[0];

        const createFile: ZipTask = this.zipService.getData(nestedZip);
        createFile.data.subscribe((blob) => {
          const _file = new File([blob], nestedZip.filename, {
            type: 'application/zip',
            lastModified: Date.now()
          });
          that.downloadFile('test.zip', _file, 'application/zip');
          this.fileToArrayBuffer(_file).then((s: any) => {
            console.log(s);
            that.pp(s);
            // const y = shp.parseZip(s);
            // console.log(y);
          });
        });
      } else {
        this.fileToArrayBuffer(file).then((s: any) => {
          console.log(s);
          const y = shp.parseZip(s);
          console.log(y);
        });
      }
      //   if (mmpAreaPolygons.length > 0) {
      //     const createFile: ZipTask = this.zipService.getData(mmpAreaPolygons[0]);
      //     createFile.data.subscribe((blob) => {
      //       _file = new File([blob], mmpAreaPolygons[0].filename, {
      //         lastModified: Date.now()
      //       });
      //       this.generateGraphicsFromSHP(_file);
      //     });
      //   } else {
      //     this.generateGraphicsFromSHP(_file);
      //   }
      // });
    });
  };
  // if there are any recursively convert them to feature collection and store them in array

  // else: convert in batch and add to the same master array

  // this.fileToArrayBuffer(file).then((s: any) => {
  //   console.log(s);
  //   const y = shp.parseZip(s);
  //   console.log(y);
  // });
  // console.log(shp);

  // const t = shp.parseZip(file);
  // shp.parseZip(file).then((g: any) => {
  //   console.log(g);
  // });
  // return;
  // this.zipService.getEntries(file).subscribe((entries: any) => {
  //   const mmpAreaPolygons = entries.filter(
  //     (e: any) => e.filename.toLowerCase().indexOf('.zip') > -1
  //   );
  //   if (mmpAreaPolygons.length > 0) {
  //     const createFile: ZipTask = this.zipService.getData(mmpAreaPolygons[0]);
  //     createFile.data.subscribe((blob) => {
  //       _file = new File([blob], mmpAreaPolygons[0].filename, {
  //         lastModified: Date.now()
  //       });
  //       this.generateGraphicsFromSHP(_file);
  //     });
  //   } else {
  //     this.generateGraphicsFromSHP(_file);
  //   }
  // });

  generateGraphicsFromSHP = (file: File) => {
    const form = new FormData();
    const publishParams: any = {
      targetSR: { wkid: 102100 },
      maxRecordCount: 1000,
      enforceInputFileSizeLimit: true,
      enforceOutputJsonSizeLimit: true,
    };
    publishParams.generalize = false;
    publishParams.reducePrecision = false;
    publishParams.numberOfDigitsAfterDecimal = 0;
    form.append('publishParameters', JSON.stringify(publishParams));
    form.append('filetype', 'shapefile');
    form.append('f', 'json');
    form.append('file', file);

    this.http
      .post(
        'https://www.arcgis.com/sharing/rest/content/features/generate',
        form
      )
      .subscribe(
        (result: any) => {
          if (typeof result.error !== 'undefined') {
            this.fileUploadError = 'Error parsing shapefile.';
          } else {
            this.fileUploadError = '';
            const features: any[] = [];
            result.featureCollection.layers.forEach((layer: any) => {
              const type = layer.layerDefinition.geometryType;
              if (type === 'esriGeometryPolygon') {
                layer.featureSet.features.forEach((feature: any) => {
                  features.push(feature);
                });
              }
            });
            if (features.length > 0) {
              console.log(features);
            } else {
              this.fileUploadError =
                'Error parsing shapefile. Please make sure the zipped file consists valid polygon geometry.';
            }
          }
        },
        (e: any) => {
          this.fileUploadError = 'Error parsing shapefile.';
        }
      );
  };

  parseUploadedFiles(file: any) {
    const fileReader: any = new FileReader();
    fileReader.onload = () => {
      const r = fileReader.result as any;
      switch (this.format) {
        case 'kml':
          this.store.dispatch(addGraphics({ graphics: kmlToGeoJson(r) }));
          break;
        case 'gpx':
          this.store.dispatch(addGraphics({ graphics: gpxToGeoJson(r) }));
          break;
        case 'shp':
          this.parseSHPZip(file);
          break;
        default:
          break;
      }
    };
    fileReader.readAsText(file);
  }

  chooseFile() {
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

  export() {
    const graphics$: any = this.store.select(
      (state: any) => state.app.graphics
    );
    graphics$.pipe(take(1)).subscribe((dt: any) => {
      // @todo need to check whether there are any features or not before proceeding
      switch (this.format) {
        case 'kml':
          this.downloadFile(
            'userGraphics.kml',
            createKMLForExport(dt),
            'application/xml'
          );
          break;
        case 'mmp':
          this.downloadFile(
            'UserGraphics.mmp',
            JSON.stringify(dt),
            'application/json'
          );
          break;
        case 'gpx':
          this.downloadFile(
            'userGraphics.gpx',
            createGPXForExport(dt),
            'application/xml'
          );
          break;
        default:
          break;
      }
    });
  }

  ngOnDestroy() {
    this.graphicsSub$.unsubscribe();
  }
}
