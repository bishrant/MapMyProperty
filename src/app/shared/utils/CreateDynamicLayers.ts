import WMSLayer from 'arcgis-js-api/layers/WMSLayer';

const CreateSoilsLayer = (Id: string = 'soilsDynamicLayer') => {
    const soilsLayer = new WMSLayer({
        id: Id,
        url: 'https://sdmdataaccess.nrcs.usda.gov/Spatial/sdm.wms?',
        sublayers: [
            {
                name: 'mapunitpoly'
            }
        ],
        minScale: 37000,
        visible: false
    });
    return soilsLayer;
}

export { CreateSoilsLayer };