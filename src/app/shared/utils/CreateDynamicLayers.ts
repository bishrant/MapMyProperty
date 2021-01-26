import WMSLayer from 'arcgis-js-api/layers/WMSLayer';
import FeatureLayer from 'esri/layers/FeatureLayer';
import MapImageLayer from 'esri/layers/MapImageLayer';
import VectorTileLayer from 'esri/layers/VectorTileLayer';

const CreateSoilsLayer = (Id = 'soilsDynamicLayer', ssurgoWMSURL: string) => {
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

const CreateMapLayer = (layerType: string, id: string, minScale: number, url: string): any => {
  let lyr: any;
  switch (layerType) {
    case 'mapImage':
      lyr = new MapImageLayer();
      break;

    case 'feature':
      lyr = new FeatureLayer();
      break;

    case 'vector':
      lyr = new VectorTileLayer();
      break;
  }

  lyr.id = id;
  lyr.url = url;
  lyr.visible = false;
  if (minScale !== null) {
    lyr.minScale = minScale;
  }

  return lyr;
}

export { CreateSoilsLayer, CreateMapLayer };
