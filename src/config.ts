interface culvertSizeReport {
  reportURL: string,
  gpServiceURL: string
}
export class AppConfiguration {
  culvertSize: culvertSizeReport;
  loggingURL: string;
  printGPServiceURL: string;
  exportMapGPServiceURL: string;
  elevationProfileReportURL: string;
  elevationGPServiceURL: string;
  geometryServiceURL: string;
  clipSoilsGPServiceURL: string;
  usCountyLayerURL: string;
  usWatershedLayerURL: string;
  soilsReportHydroParamsGPServiceURL: string;
  sensAreasGPServiceURL: string;
  bufferSensAreasGPServiceURL: string;
  severeSlopesGPServiceURL: string;
  ssurgoTabularURL: string;
  ssurgoWMSURL: string;
}
