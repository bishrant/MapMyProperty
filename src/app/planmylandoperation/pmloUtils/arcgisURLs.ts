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
    return "http://tfsgis02.tfs.tamu.edu/arcgis/rest/services/PMLO/GetSlope/GPServer/Get%20Slope";
};

export { GetTxStateUrl, GetSensAreasGpUrl, GetBufferSensAreasGpUrl, GetSevereSlopesGpUrl }
