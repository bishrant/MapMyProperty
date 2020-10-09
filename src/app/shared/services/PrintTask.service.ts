import { Injectable } from '@angular/core';
import PrintTask from "esri/tasks/PrintTask";
import MapView from 'esri/views/MapView';
import PrintParameters from 'esri/tasks/support/PrintParameters';
import { AppConfiguration } from 'src/config';
import { TraceGPError } from './error/GPServiceError';

@Injectable({
  providedIn: 'root'
})

export class PrintTaskService {

  constructor(
      private appConfig:AppConfiguration
  ) {}

  exportWebMap(mv: MapView, layout: any, format: any): Promise<string> {
    return new Promise((resolve) => {
        const printParameters: PrintParameters = new PrintParameters({
            view: mv,
            extraParameters: {
                Final_Map_WKID: '',
                Layout_Template: layout,
                Format: format
            }
        });

        const printTask:PrintTask = new PrintTask({
            url: this.appConfig.printGPServiceURL
        });

        printTask.execute(printParameters).then((response) => {
            resolve(response.url);
        }, (error: any) => {
            resolve(error);
        })
        .catch((error: any) => {
            const gpError = TraceGPError(this.appConfig.printGPServiceURL, error);
            throw gpError;
        });
    });
  }
}
