import { Injectable } from '@angular/core';
import MapView from '@arcgis/core/views/MapView';
import { AppConfiguration } from 'src/config';
import Geoprocessor from '@arcgis/core/tasks/Geoprocessor';
import { GetWebMapAsJsonString } from '../utils/WebMapAsJsonUtils';
import { Extent } from '@arcgis/core/geometry';

@Injectable({
  providedIn: 'root'
})
export class PrintTaskService {
  constructor (private appConfig: AppConfiguration) {}

  exportWebMap (mv: MapView, layout: any, format: any, boundaryExtent:Extent): Promise<string> {
    return new Promise((resolve) => {
      const printParameters = {
        Web_Map_as_JSON: GetWebMapAsJsonString(mv, boundaryExtent),
        Format: format,
        Layout_Template: layout
      };

      const printGP: Geoprocessor = new Geoprocessor({
        url: this.appConfig.printGPServiceURL
      });
      printGP.submitJob(printParameters).then((jobInfo) => {
        printGP.waitForJobCompletion(jobInfo.jobId).then((jobInfo2) => {
          if (jobInfo2.jobStatus === 'job-succeeded') {
            printGP.getResultData(jobInfo2.jobId, 'Output_File').then((response) => {
              resolve(response.value.url);
            });
          }
        });
      });
    });
  }
}
