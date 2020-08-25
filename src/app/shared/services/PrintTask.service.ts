import { Injectable } from '@angular/core';
import PrintTask from "esri/tasks/PrintTask";
import MapView from 'esri/views/MapView';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import PrintTemplate from 'arcgis-js-api/tasks/support/PrintTemplate';
import { GetCustomExportWebMapUrl } from '../utils/GISUrls';

@Injectable({
  providedIn: 'root'
})

export class PrintTaskService {

    printTask: PrintTask = new PrintTask ({
        url: GetCustomExportWebMapUrl()
    });

  constructor() {}

  exportWebMap(mv: MapView, layout: any, format: any): Promise<string> {
    return new Promise((resolve) => {
        const printParameters: PrintParameters = new PrintParameters({
            template: new PrintTemplate ({
                layout: layout,
                format: format
            }),
            view: mv,
            extraParameters: {
                Final_Map_WKID: ''
            }
        });

        this.printTask.execute(printParameters).then((response) => {
            resolve(response.url);
        }, (error: any) => {
            resolve(error);
        });
    });
  }
}
