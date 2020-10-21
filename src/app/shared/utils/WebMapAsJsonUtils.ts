import MapView from 'esri/views/MapView';
import Map from 'esri/Map';
import Collection from 'esri/core/Collection';
import WMSLayer from 'esri/layers/WMSLayer';
import GraphicsLayer from 'esri/layers/GraphicsLayer';

const GetWebMapAsJsonString = (mv: MapView, boundaryExtent:__esri.Extent) => {
  console.log(mv);
  const webMapAsJson = {
    operationalLayers: GetOperationalLayers(mv.map),
    baseMap: GetBasemap(mv.map),
    mapOptions: GetMapOptions(mv, boundaryExtent),
    exportOptions: {
      dpi: 96,
      outputSize: [800, 1100],
    },
  };
  return JSON.stringify(webMapAsJson);
};

const GetMapOptions = (mv: MapView, boudaryExtent:__esri.Extent) => {
  return {
    extent: boudaryExtent === null ? mv.extent : boudaryExtent,
    spatialReference: {
      latestWkid: 3857,
      wkid: 102100,
    },
    showAttribution: false,
    scale: boudaryExtent === null ? mv.scale : null
  };
};

const GetBasemap = (map: Map) => {
  const baseMapLayers = [];
  (map.basemap.baseLayers as Collection<any>).forEach((lyr) => {
    let lyrUrl: string = lyr.url;
    if (!lyr.url.includes('http')) {
      lyrUrl = 'https:' + lyrUrl;
    }
    baseMapLayers.push({ url: lyrUrl });
  });

  (map.basemap.referenceLayers as Collection<any>).forEach((lyr) => {
    let lyrUrl: string = lyr.url;
    if (!lyr.url.includes('http')) {
      lyrUrl = 'https:' + lyrUrl;
    }
    baseMapLayers.push({ url: lyrUrl });
  });

  const basemaps = {
    baseMapLayers: baseMapLayers,
  };
  return basemaps;
};

const GetOperationalLayers = (map: Map) => {
  const operationalLayers = [];

  (map.layers as Collection<any>).forEach((lyr) => {
    let opLayer = null;
    if (lyr.visible) {
      switch (lyr.type) {
        case 'wms':
          opLayer = FormatWMSLayerJson(lyr);
          break;

        case 'graphics':
          opLayer = FormatGraphicsLayerJson(lyr);
          break;
      }
      if (opLayer !== null) {
        operationalLayers.push(opLayer);
      }
    }
  });
  return operationalLayers;
};

const FormatWMSLayerJson = (wmsLyr: WMSLayer) => {
  return {
    type: 'wms',
    url: wmsLyr.url,
    opacity: wmsLyr.opacity,
    version: wmsLyr.version,
    layers: wmsLyr.sublayers.map((sublyr) => {
      return { name: sublyr.name };
    }),
    visibleLayers: wmsLyr.sublayers.map((sublyr) => {
      return sublyr.visible ? sublyr.name : '';
    }),
  };
};

const FormatGraphicsLayerJson = (graphLyr: GraphicsLayer) => {
  const polygons = graphLyr.graphics
    .filter((x) => x.geometry.type === 'polygon')
    .map((gra) => {
      return { geometry: gra.geometry, symbol: gra.symbol };
    });
  const polylines = graphLyr.graphics
    .filter((x) => x.geometry.type === 'polyline')
    .map((gra) => {
      return { geometry: gra.geometry, symbol: gra.symbol };
    });
  const points = graphLyr.graphics
    .filter((x) => x.geometry.type === 'point')
    .map((gra) => {
      return { geometry: gra.geometry, symbol: gra.symbol };
    });

  return {
    opacity: graphLyr.opacity,
    minScale: graphLyr.minScale,
    maxScale: graphLyr.maxScale,
    featureCollection: {
      layers: [
        {
          layerDefinition: {
            geometryType: 'esriGeometryPolygon',
          },
          featureSet: {
            geometryType: 'esriGeometryPolygon',
            features: polygons,
          }
        },
        {
          layerDefinition: {
            geometryType: 'esriGeometryPolyline',
          },
          featureSet: {
            geometryType: 'esriGeometryPolyline',
            features: polylines,
          }
        },
        {
          layerDefinition: {
            geometryType: 'esriGeometryPoint',
          },
          featureSet: {
            geometryType: 'esriGeometryPoint',
            features: points,
          }
        }
      ]
    }
  };
};

export { GetWebMapAsJsonString };
