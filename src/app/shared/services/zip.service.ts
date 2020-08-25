import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ZipEntry, ZipTask, ZipTaskProgress } from '../interfaces/zip.interface';

// This is added globally by the zip.js library
declare const zip: any;

@Injectable()
export class ZipService {
  constructor () {
    zip.workerScriptsPath = 'scripts/';
  }

  getEntries (file: any): Observable<Array<ZipEntry>> {
    return new Observable((subscriber) => {
      const reader = new zip.BlobReader(file);
      zip.createReader(
        reader,
        (zipReader: any) => {
          zipReader.getEntries((entries: any) => {
            subscriber.next(entries);
            subscriber.complete();
          });
        },
        (message: any) => {
          subscriber.error({ message });
        }
      );
    });
  }

  getData (entry: ZipEntry): ZipTask {
    const progress = new Subject<ZipTaskProgress>();
    const data = new Observable<Blob>((subscriber) => {
      const writer = new zip.BlobWriter();

      // Using `as any` because we don't want to expose this
      // method in the interface
      (entry as any).getData(
        writer,
        (blob: any) => {
          subscriber.next(blob);
          subscriber.complete();
          progress.next(undefined);
        },
        (current: any, total: any) => {
          progress.next({ active: true, current, total });
        }
      );
    });
    return { progress, data };
  }

  getWriter = (entry: ZipEntry) => {
    const writer = new zip.BlobWriter();
    return new Promise(function (resolve: any, reject: any) {
      try {
        (entry as any).getData(writer, (blob: any) => {
          resolve(blob);
        });
      } catch (e) {
        reject(e);
      }
    })
  }

  createFile (blob: any, fileName: any): File {
    blob.lastModifiedDate = new Date();
    blob.name = fileName;
    return blob;
  }
}
