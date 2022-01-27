interface culvertSizeReport {
  reportURL: string,
  gpServiceURL: string
}

interface Vegetation {
  mapserverURL: string,
  clipGPService: string
}
export class AppConfiguration {
  culvertSize: culvertSizeReport;
  loggingURL: string;
  backendURL: string;
  printGPServiceURL: string;
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
  plotLayoutGPServiceURL: string;
  ssurgoTabularURL: string;
  ssurgoWMSURL: string;
  geologyMapServerURL: string;
  vegetation: Vegetation;
  others: any;
}
