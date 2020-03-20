(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/TileLayer":"./node_modules/arcgis-js-api/layers/TileLayer.js",
	"arcgis-js-api/layers/mixins/ArcGISCachedService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js",
	"arcgis-js-api/layers/support/serviceTileInfoProperty":"./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js",
	"esri/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils":"./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js",
	"esri/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js",
	"arcgis-js-api/tasks/support/QuantizationParameters":"./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

/***/ "./node_modules/arcgis-js-api/layers/TileLayer.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/TileLayer.js ***!
  \********************************************************/
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

/**
 * The TileLayer allows you work with a cached [map service](http://server.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm) exposed by the ArcGIS Server REST API and add it to
 * a {@link module:esri/Map} as a tile layer.
 * A cached service accesses tiles from a cache instead of dynamically rendering images.
 * Because they are cached, tiled layers render faster than
 * {@link module:esri/layers/MapImageLayer MapImageLayers}. To create an
 * instance of TileLayer, you must reference the URL of the cached map service.
 *
 * ```js
 * require(["esri/layers/TileLayer"], function(TileLayer) {
 *   var layer = new TileLayer({
 *     url: "https://services.arcgisonline.com/arcgis/rest/services/World_Terrain_Base/MapServer"
 *   });
 *   // Add layer to map
 * });
 * ```
 *
 * If the image is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required.
 *
 * To display a non-cached map service as a dynamic layer, see {@link module:esri/layers/MapImageLayer MapImageLayer}.
 *
 * ::: esri-md class="panel trailer-1"
 * **Known Limitations**
 *
 * When adding a TileLayer to a map in a {@link module:esri/views/SceneView},
 * the following limitations exist:
 * * This layer needs to be published from ArcGIS Server 10.3 and later or ArcGIS Server 10.2.2 with [this applied fix](http://support.esri.com/download/2146).
 * * If {@link module:esri/views/SceneView#viewingMode viewingMode} is `global`, then
 * only services with ArcGIS Online/Bing Maps/Google Maps (Web Mercator) or WGS84 Geographic Coordinate System,
 * Version 2 tiling scheme are supported.
 * * If {@link module:esri/views/SceneView#viewingMode viewingMode} is `local`, then
 * only services with projected coordinate systems are supported.
 * * When adding layers via the API: raster {@link module:esri/layers/TileLayer TileLayers} can only be added when all other TileLayers in the map have the same tile size. {@link module:esri/layers/VectorTileLayer VectorTileLayers} can adapt to 512 or 256 tiles, with 256 being selected by default for empty maps.
 *
 * Only Tile layers with the following tiling scheme specifications are supported:
 * * 256x256 or 512x512 pixel tiles
 * * Scale levels must increase or decrease by a power of two
 * * At level `0` there shouldn't be more than 30 root tiles.
 * * All tiled layers must have the same tiling scheme and {@link module:esri/geometry/SpatialReference}.
 * :::
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/TileLayer
 * @since 4.0
 * @see module:esri/layers/MapImageLayer
 * @see module:esri/Map
 * @see [Intro to layers](../sample-code/intro-layers/index.html)
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISCachedService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js"),__webpack_require__(/*! ./mixins/ArcGISMapService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISMapService.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SublayersOwner */ "./node_modules/arcgis-js-api/layers/mixins/SublayersOwner.js"),__webpack_require__(/*! ./support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js"),__webpack_require__(/*! ./support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,o,a,n,s,p,l,c,u,y,d,f,v,h,S,g,m,_,b,O,T,L,R,I){var A=["Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Elevation/World_Hillshade","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Ocean_Basemap","Reference/World_Boundaries_and_Places","Reference/World_Boundaries_and_Places_Alternate","Reference/World_Transportation","World_Imagery","World_Street_Map","World_Topo_Map"];return function(e){function r(r,t){var i=e.call(this,r)||this;return i.listMode="show",i.isReference=null,i.resampling=!0,i.sourceJSON=null,i.spatialReference=null,i.path=null,i.sublayers=null,i.type="tile",i.url=null,i}return i(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service","Map Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)})),this.when()},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){return this._getDefaultAttribution(this._getMapName(this.parsedUrl.path.toLowerCase()))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"operationalLayerType",{get:function(){if(this.capabilities&&this.capabilities.operations)return this.capabilities.operations.supportsExportMap?"ArcGISTiledMapServiceLayer":"ArcGISTiledImageServiceLayer";var e=this.url||this.portalItem&&this.portalItem.url;return e&&/\/ImageServer(\/|\/?$)/i.test(e)?"ArcGISTiledImageServiceLayer":"ArcGISTiledMapServiceLayer"},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return(e=e||r.tileInfo&&r.tileInfo.spatialReference)&&s.SpatialReference.fromJSON(e)},Object.defineProperty(r.prototype,"tileServers",{get:function(){return this._getDefaultTileServers(this.parsedUrl.path)},enumerable:!0,configurable:!0}),r.prototype.castTileServers=function(e){return Array.isArray(e)?e.map(function(e){return d.urlToObject(e).path}):null},r.prototype.fetchTile=function(e,r,t,i){void 0===i&&(i={});var o=i.signal,a=i.timestamp,n=this.getTileUrl(e,r,t),s={responseType:"image",signal:o};return null!=a&&(s.query={_ts:i.timestamp}),p(n,s).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,r,i){var o=!this.tilemapCache&&this.supportsBlankTile,a=d.objectToQuery(t({},this.parsedUrl.query,{blankTile:!o&&null})),n=this.tileServers;return(n&&n.length?n[r%n.length]:this.parsedUrl.path)+"/tile/"+e+"/"+r+"/"+i+(a?"?"+a:"")},r.prototype._fetchService=function(e){var r=this;return y.create(function(i,o){if(r.sourceJSON){return void i({data:r.sourceJSON})}if(!r.parsedUrl)throw new l("tile-layer:undefined-url","layer's url is not defined");p(r.parsedUrl.path,{query:t({f:"json"},r.parsedUrl.query),responseType:"json",signal:e}).then(i,o)}).then(function(t){if(t.ssl&&(r.url=r.url.replace(/^http:/i,"https:")),r.sourceJSON=t.data,r.read(t.data,{origin:"service",url:r.parsedUrl}),10.1===r.version&&!R.isHostedAgolService(r.url))return r._fetchServerVersion(r.url,e).then(function(e){r.read({currentVersion:e})}).catch(function(){})})},r.prototype._fetchServerVersion=function(e,r){if(!L.isArcGISUrl(e))return y.reject();var t=e.replace(/(.*\/rest)\/.*/i,"$1")+"/info";return p(t,{query:{f:"json"},responseType:"json",signal:r}).then(function(e){if(e.data&&e.data.currentVersion)return e.data.currentVersion;throw new l("tile-layer:version-not-available")})},r.prototype._getMapName=function(e){var r=e.match(/^(?:https?:)?\/\/(server|services)\.arcgisonline\.com\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/mapserver/i);return r&&r[2]},r.prototype._getDefaultAttribution=function(e){if(e){var r;e=e.toLowerCase();for(var t=0,i=A.length;t<i;t++)if(r=A[t],r.toLowerCase().indexOf(e)>-1)return d.makeAbsolute("//static.arcgis.com/attribution/"+r)}},r.prototype._getDefaultTileServers=function(e){var r=-1!==e.search(/^(?:https?:)?\/\/server\.arcgisonline\.com/i),t=-1!==e.search(/^(?:https?:)?\/\/services\.arcgisonline\.com/i);return r||t?[e,e.replace(r?/server\.arcgisonline/i:/services\.arcgisonline/i,r?"services.arcgisonline":"server.arcgisonline")]:[]},o([f.property({readOnly:!0,dependsOn:["parsedUrl"]})],r.prototype,"attributionDataUrl",null),o([f.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),o([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),o([f.property({readOnly:!0})],r.prototype,"operationalLayerType",null),o([f.property()],r.prototype,"popupTemplates",void 0),o([f.property({type:Boolean})],r.prototype,"resampling",void 0),o([f.property()],r.prototype,"sourceJSON",void 0),o([f.property({type:s.SpatialReference})],r.prototype,"spatialReference",void 0),o([f.reader("spatialReference",["spatialReference","tileInfo"])],r.prototype,"readSpatialReference",null),o([f.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),o([f.property({readOnly:!0})],r.prototype,"sublayers",void 0),o([f.property({dependsOn:["parsedUrl"]})],r.prototype,"tileServers",null),o([f.cast("tileServers")],r.prototype,"castTileServers",null),o([f.property({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),o([f.property(I.url)],r.prototype,"url",void 0),r=o([f.subclass("esri.layers.TileLayer")],r)}(f.declared(T.SublayersOwner(O.ScaleRangeLayer(b.RefreshableLayer(m.OperationalLayer(_.PortalLayer(h.ArcGISCachedService(S.ArcGISMapService(g.ArcGISService(u.MultiOriginJSONMixin(v)))))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js ***!
  \*************************************************************************/
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

//  copyright

/**
                 * The copyright text as defined by the service.
                 *
                 * @name copyright
                 * @type {string}
                 *
                 * @memberof module:esri/layers/mixins/ArcGISCachedService
                 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../support/serviceTileInfoProperty */ "./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js"),__webpack_require__(/*! ../support/TilemapCache */ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,p,o,i,l,a,n){Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISCachedService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.copyright=null,r.minScale=0,r.maxScale=0,r.spatialReference=null,r.tileInfo=null,r.tilemapCache=null,r}return p(r,e),r.prototype.readMinScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},r.prototype.readMaxScale=function(e,r){return null!=r.minLOD&&null!=r.maxLOD?e:0},Object.defineProperty(r.prototype,"supportsBlankTile",{get:function(){return this.version>=10.2},enumerable:!0,configurable:!0}),r.prototype.readTilemapCache=function(e,r){return r.capabilities&&r.capabilities.indexOf("Tilemap")>-1?new n.TilemapCache({layer:this}):null},o([l.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),o([l.property()],r.prototype,"minScale",void 0),o([l.reader("service","minScale")],r.prototype,"readMinScale",null),o([l.property()],r.prototype,"maxScale",void 0),o([l.reader("service","maxScale")],r.prototype,"readMaxScale",null),o([l.property({type:i.SpatialReference})],r.prototype,"spatialReference",void 0),o([l.property({readOnly:!0,dependsOn:["version"]})],r.prototype,"supportsBlankTile",null),o([l.property(a.serviceTileInfoProperty)],r.prototype,"tileInfo",void 0),o([l.property()],r.prototype,"tilemapCache",void 0),o([l.reader("service","tilemapCache",["capabilities"])],r.prototype,"readTilemapCache",null),o([l.property()],r.prototype,"version",void 0),r=o([l.subclass("esri.layers.mixins.ArcGISCachedService")],r)}(l.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js ***!
  \******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ./TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,i){function l(e,r,l,o){if(!e)return null;var t=r.minScale,u=r.maxScale,a=r.minLOD,f=r.maxLOD;if(null!=a&&null!=f)return o&&o.ignoreMinMaxLOD?i.fromJSON(e):i.fromJSON(n({},e,{lods:e.lods.filter(function(e){var r=e.level;return null!=r&&r>=a&&r<=f})}));if(0!==t&&0!==u){var c=function(e){return Math.round(1e4*e)/1e4},s=t?c(t):1/0,m=u?c(u):-1/0;return i.fromJSON(n({},e,{lods:e.lods.filter(function(e){var r=c(e.scale);return r<=s&&r>=m})}))}return i.fromJSON(e)}Object.defineProperty(r,"__esModule",{value:!0}),r.serviceTileInfoProperty={type:i,json:{origins:{service:{read:{source:["tileInfo","minScale","maxScale","minLOD","maxLOD"],reader:l}}}}},r.readServiceTileInfo=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js ***!
  \*******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function i(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}function a(e){return null!=e&&!isNaN(e)&&isFinite(e)}function l(e){return e.valueExpression?"expression":e.field&&"string"==typeof e.field?"field":"unknown"}function r(e,n){var i=n||l(e),a=e.valueUnit||"unknown";return"unknown"===i?"constant":e.stops?"stops":null!=e.minSize&&null!=e.maxSize&&null!=e.minDataValue&&null!=e.maxDataValue?"clamped-linear":"unknown"===a?null!=e.minSize&&null!=e.minDataValue?e.minSize&&e.minDataValue?"proportional":"additive":"identity":"real-world-size"}Object.defineProperty(n,"__esModule",{value:!0}),n.isSizeVariable=i,n.isValidNumber=a,n.getInputValueType=l,n.getTransformationType=r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/QuantizationParameters.js ***!
  \****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,s,a){Object.defineProperty(t,"__esModule",{value:!0});var c=new n.default({upperLeft:"upper-left",lowerLeft:"lower-left"}),l=function(e){function t(t){var r=e.call(this,t)||this;return r.extent=null,r.mode="view",r.originPosition="upper-left",r.tolerance=1,r}r(t,e),n=t,t.prototype.clone=function(){return new n(s.clone({extent:this.extent,mode:this.mode,originPosition:this.originPosition,tolerance:this.tolerance}))};var n;return o([a.property({type:i.Extent,json:{write:!0}})],t.prototype,"extent",void 0),o([a.property({type:["view","edit"],json:{write:!0}})],t.prototype,"mode",void 0),o([a.property({type:String,json:{read:c.read,write:c.write}})],t.prototype,"originPosition",void 0),o([a.property({type:Number,json:{write:!0}})],t.prototype,"tolerance",void 0),t=n=o([a.subclass("esri.tasks.support.QuantizationParameters")],t)}(a.declared(p.JSONSupport));t.default=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=41.js.map