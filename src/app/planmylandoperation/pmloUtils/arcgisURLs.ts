const GetTxStateUrl = () => {
  return 'https://tfsgis02.tfs.tamu.edu/arcgis/rest/services/Shared/Boundaries/MapServer/5';
};

const GetSensAreasGpUrl = () => {
  return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/PMLO/ClipSensitiveAreas/GPServer/Clip%20Sensitive%20Areas';
};

const GetBufferSensAreasGpUrl = () => {
    return "https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/PMLO/BufferSensAreas/GPServer/Buffer%20Sensitive%20Areas";
};

const GetSevereSlopesGpUrl = () => {
    return "https://tfsgis02.tfs.tamu.edu/arcgis/rest/services/PMLO/GetSlope/GPServer/Get%20Slope";
};

const GetClipSoilsGpUrl = () => {
  return "https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Shared/ClipSoils/GPServer/Clip%20Soils";
};

export { GetTxStateUrl, GetSensAreasGpUrl, GetBufferSensAreasGpUrl, GetSevereSlopesGpUrl, GetClipSoilsGpUrl }
