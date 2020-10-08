import WMSLayer from 'arcgis-js-api/layers/WMSLayer';

const CreateSoilsLayer = (Id: string = 'soilsDynamicLayer', ssurgoWMSURL:string) => {
    const soilsLayer = new WMSLayer({
        id: Id,
        url: ssurgoWMSURL,
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