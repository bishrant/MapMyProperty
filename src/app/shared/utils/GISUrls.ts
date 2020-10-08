const GetCustomExportWebMapUrl = () => {
    return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Shared/CustomExportWebMap/GPServer/Export%20Web%20Map';
};

const GetGeometryServiceUrl = () => {
    return 'https://tfsgis-dfe02.tfs.tamu.edu/arcgis/rest/services/Utilities/Geometry/GeometryServer';
};

export { GetCustomExportWebMapUrl, GetGeometryServiceUrl }