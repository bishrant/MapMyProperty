import { ElementRef } from '@angular/core';
import Map from 'arcgis-js-api/Map';
import MapView from 'arcgis-js-api/views/MapView';
import Search from 'esri/widgets/Search';
import SpatialReference from 'arcgis-js-api/geometry/SpatialReference';
import Home from 'arcgis-js-api/widgets/Home';
import Basemap from 'esri/Basemap';
import BingMapsLayer from 'esri/layers/BingMapsLayer';
import Expand from 'esri/widgets/Expand';

const createBingBasemap = () => {
  return new Basemap({
    baseLayers: [new BingMapsLayer({
      style: 'hybrid',
      key: 'Aku2yja6DA8XcPp4uuD5IPad0jmIj1kYl1pS9u6B3xp9lL3jbVTIArEw9W4bnoPM'
    })],
    id: 'bing'
  });
}
const createMapView = (mapViewEl: ElementRef, searchBarDiv: ElementRef): __esri.MapView => {
  const bing_hybrid = createBingBasemap();

  const mapProperties = {
    basemap: bing_hybrid,
    spatialReference: new SpatialReference({ wkid: 4326 })
  };

  const map = new Map(mapProperties);

  // Initialize the MapView
  const mapViewProperties = {
    container: mapViewEl.nativeElement,
    center: [-99.5, 31.2],
    zoom: 6.5,
    snapToZoom: false,
    map,
    constraints: {
      rotationEnabled: false
    }
  };
  const view = new MapView(mapViewProperties);
  view.popup.autoOpenEnabled = false;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const search = new Search({ view: view, container: searchBarDiv.nativeElement });

  const searchInsideMap = new Search({
    view: view,
    container: document.createElement('div'),
    popupEnabled: false,
    id: 'sss'
  });


  const searchExpand = new Expand({
    id: 'searchExpand',
    view: view,
    content: searchInsideMap,
    expandTooltip: 'Search',
  })
  const homeWidget = new Home({ view });
  view.ui.move('zoom', 'bottom-right');
  view.ui.add(homeWidget, 'bottom-right');
  view.ui.add(searchExpand, 'bottom-right');

  searchInsideMap.on('select-result', () => {
    searchExpand.collapse();
  })
  return view;
};

export { createBingBasemap, createMapView };
