(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/portal/support/layersCreator":"./node_modules/arcgis-js-api/portal/support/layersCreator.js",
	"arcgis-js-api/renderers/support/styleUtils":"./node_modules/arcgis-js-api/renderers/support/styleUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[66],{

/***/ "./node_modules/arcgis-js-api/portal/support/layersCreator.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/layersCreator.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../layers/support/lazyLayerLoader */ "./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js"),__webpack_require__(/*! ../PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js"),__webpack_require__(/*! ./mapNotesUtils */ "./node_modules/arcgis-js-api/portal/support/mapNotesUtils.js"),__webpack_require__(/*! ./portalLayers */ "./node_modules/arcgis-js-api/portal/support/portalLayers.js"),__webpack_require__(/*! ../../renderers/support/styleUtils */ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,a,t,i,n,y,o,l,c,L,s){function u(e,r,i){return t(this,void 0,void 0,function(){var t;return a(this,function(a){switch(a.label){case 0:return t=new e,t.read(r,i.context),"group"===t.type&&d(r)?[4,I(t,r,i.context)]:[3,2];case 1:a.sent(),a.label=2;case 2:return[4,s.loadStyleRenderer(t,i.context)];case 3:return a.sent(),[2,t]}})})}function p(e,r){return t(this,void 0,void 0,function(){var t;return a(this,function(a){switch(a.label){case 0:return[4,S(e,r)];case 1:return t=a.sent(),[2,u(t,e,r)]}})})}function S(e,r){return t(this,void 0,void 0,function(){var t,i,n,y,s,u,p,S;return a(this,function(a){switch(a.label){case 0:return t=r.context,(i=M(t),n=e.layerType||e.type,!n&&r&&r.defaultLayerType&&(n=r.defaultLayerType),y=i[n],s=y?o.layerLookupMap[y]:o.layerLookupMap.UnknownLayer,v(e))?e.itemId?(u=new l({id:e.itemId,portal:t&&t.portal}),[4,u.load()]):[3,3]:[3,4];case 1:return a.sent(),[4,L.selectLayerClassPath(u)];case 2:p=a.sent(),S=p.className||"UnknownLayer",s=o.layerLookupMap[S],a.label=3;case 3:return[3,5];case 4:"ArcGISFeatureLayer"===n&&(c.isMapNotesLayer(e)?s=o.layerLookupMap.MapNotesLayer:d(e)&&(s=o.layerLookupMap.GroupLayer)),a.label=5;case 5:return e.wmtsInfo&&(s=o.layerLookupMap.WMTSLayer),[2,s()]}})})}function d(e){if("ArcGISFeatureLayer"!==e.layerType||v(e))return!1;var r=e.featureCollection;return!!(r&&r.layers&&r.layers.length>1)}function v(e){return"Feature Collection"===e.type}function M(e){var r;switch(e.origin){case"web-scene":switch(e.layerContainerType){case"basemap":r=m;break;case"ground":r=A;break;default:r=G}break;default:switch(e.layerContainerType){case"basemap":r=w;break;default:r=b}}return r}function T(e,r,n){return t(this,void 0,void 0,function(){var t,y,o;return a(this,function(a){switch(a.label){case 0:return t=new i,y=f(t,Array.isArray(r.layers)?r.layers:[],n),[4,e];case 1:return o=a.sent(),[4,y];case 2:return a.sent(),"group"===o.type?(o.layers.addMany(t),[2,o]):[2,void 0]}})})}function I(e,r,i){return t(this,void 0,void 0,function(){var t,n,y,l,c;return a(this,function(a){switch(a.label){case 0:return t=o.layerLookupMap.FeatureLayer,[4,t()];case 1:return n=a.sent(),y=r.featureCollection,l=y.showLegend,c=y.layers.map(function(e){var r=new n;return r.read(e,i),null!=l&&r.read({showLegend:l},i),r}),e.layers.addMany(c),[2]}})})}function f(e,r,i){return t(this,void 0,void 0,function(){var t,n,o,l,c,L,s,u,S;return a(this,function(a){switch(a.label){case 0:if(!r)return[2];for(t=[],n=0,o=r;n<o.length;n++)l=o[n],c=p(l,i),"GroupLayer"===l.layerType?t.push(T(c,l,i)):t.push(c);return[4,y.eachAlways(t)];case 1:for(L=a.sent(),s=0,u=L;s<u.length;s++)S=u[s],h&&S.error?console.error(S.error.toString?S.error.toString():S.error):!S.value||i.filter&&!i.filter(S.value)||e.add(S.value);return[2]}})})}function g(e,r,i){return t(this,void 0,void 0,function(){return a(this,function(a){return[2,f(e,r,i)]})})}Object.defineProperty(r,"__esModule",{value:!0});var h=n("dojo-debug-messages"),G={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISMapServiceLayer:"MapImageLayer",PointCloudLayer:"PointCloudLayer",ArcGISSceneServiceLayer:"SceneLayer",IntegratedMeshLayer:"IntegratedMeshLayer",BuildingSceneLayer:"BuildingSceneLayer",ArcGISTiledElevationServiceLayer:"ElevationLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",GroupLayer:"GroupLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",VectorTileLayer:"VectorTileLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer",KML:"KMLLayer",RasterDataLayer:"UnsupportedLayer"},A={ArcGISTiledElevationServiceLayer:"ElevationLayer",DefaultTileLayer:"ElevationLayer"},m={ArcGISTiledMapServiceLayer:"TileLayer",ArcGISTiledImageServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",WebTiledLayer:"WebTileLayer",VectorTileLayer:"VectorTileLayer",ArcGISImageServiceLayer:"UnsupportedLayer",WMS:"UnsupportedLayer",ArcGISMapServiceLayer:"UnsupportedLayer",DefaultTileLayer:"TileLayer"},b={ArcGISFeatureLayer:"FeatureLayer",ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISStreamLayer:"StreamLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",CSV:"CSVLayer",GeoRSS:"GeoRSSLayer",KML:"KMLLayer",WFS:"UnsupportedLayer",WMS:"WMSLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",DefaultTileLayer:"TileLayer"},w={ArcGISImageServiceLayer:"ImageryLayer",ArcGISImageServiceVectorLayer:"UnsupportedLayer",ArcGISMapServiceLayer:"MapImageLayer",ArcGISTiledImageServiceLayer:"TileLayer",ArcGISTiledMapServiceLayer:"TileLayer",OpenStreetMap:"OpenStreetMapLayer",VectorTileLayer:"VectorTileLayer",WebTiledLayer:"WebTileLayer",BingMapsAerial:"BingMapsLayer",BingMapsRoad:"BingMapsLayer",BingMapsHybrid:"BingMapsLayer",WMS:"WMSLayer",DefaultTileLayer:"TileLayer"};r.createLayer=p,r.populateOperationalLayers=g}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/styleUtils.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/asyncUtils */ "./node_modules/arcgis-js-api/core/asyncUtils.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,i,s){function a(e,r,a){return n(this,void 0,void 0,function(){var n,l,u;return t(this,function(t){switch(t.label){case 0:return n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin),n&&"unique-value"===n.type&&n.styleOrigin?[4,o.result(n.populateFromStyle())]:[3,2];case 1:l=t.sent(),i.throwIfAborted(a),!1===l.ok&&(u=l.error,r&&r.messages&&r.messages.push(new s("renderer:style-reference","Failed to create unique value renderer from style reference: "+u.message,{error:u,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=66.js.map