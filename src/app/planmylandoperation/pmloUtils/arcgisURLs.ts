const GetSensAreasGpUrl = () => {
  return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/PMLO/ClipSensitiveAreas/GPServer/Clip%20Sensitive%20Areas';
};

const GetBufferSensAreasGpUrl = () => {
  return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/PMLO/BufferSensAreas/GPServer/Buffer%20Sensitive%20Areas';
};

const GetSevereSlopesGpUrl = () => {
  return 'https://tfsgis02.tfs.tamu.edu/arcgis/rest/services/PMLO/GetSlope/GPServer/Get%20Slope';
};

const GetClipSoilsGpUrl = () => {
  return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Shared/ClipSoils/GPServer/Clip%20Soils';
};

const GetCountyQueryUrl = () => {
  return 'https://carto.nationalmap.gov/arcgis/rest/services/govunits/MapServer/35';
};

const GetWatershedQueryUrl = () => {
  return 'https://hydro.nationalmap.gov/arcgis/rest/services/wbd/MapServer/4';
};

const GetSoilsReportHydroParamsUrl = () => {
  return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/PMLO/SoilsReportHydroParams/GPServer/Soils%20Report%20Hydrology%20Parameters';
};

export {
  GetSensAreasGpUrl,
  GetBufferSensAreasGpUrl,
  GetSevereSlopesGpUrl,
  GetClipSoilsGpUrl,
  GetCountyQueryUrl,
  GetWatershedQueryUrl,
  GetSoilsReportHydroParamsUrl
};
