(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/MapImageLayer":"./node_modules/arcgis-js-api/layers/MapImageLayer.js",
	"arcgis-js-api/layers/support/ExportImageParameters":"./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/arcgis-js-api/layers/MapImageLayer.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/MapImageLayer.js ***!
  \************************************************************/
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
 * ## Overview
 *
 * MapImageLayer allows you to display and analyze data from
 * [sublayers](#sublayers) defined in a
 * [map service](http://server.arcgis.com/en/server/latest/publish-services/windows/what-is-a-map-service.htm), exporting images
 * instead of features. Map service images are
 * dynamically generated on the server based on a request, which includes an
 * LOD (level of detail), a bounding box, dpi, spatial reference and other
 * options. The exported image is of the entire map extent specified.
 *
 * ::: esri-md class="panel trailer-1"
 * Unlike {@link module:esri/layers/FeatureLayer}, MapImageLayer processing
 * is handled by the server, not the client. Offloading the processing to the
 * server allows MapImageLayer to render more features with a higher level
 * of performance in some cases.
 * :::
 *
 * MapImageLayer does not display tiled images. To display
 * tiled map service layers, see {@link module:esri/layers/TileLayer}.
 *
 * ## Creating a MapImageLayer
 *
 * MapImageLayer may be created in one of two ways: from a [service URL](#url) or from an ArcGIS
 * Portal [item ID](#portalItem).
 *
 * ### Reference a service URL
 *
 * To create a MapImageLayer instance from a service, you must set the [url](#url) property
 * to the REST endpoint of a layer in a Map Service. The URL will typically look
 * like the following.
 *
 * ```js
 * https://<hostname>/arcgis/rest/services/<service-name>/MapServer
 * ```
 *
 * For a layer to be visible in a view, it must be added to the {@link module:esri/Map}
 * referenced by the view. See {@link module:esri/Map#add Map.add()} for information about adding layers to a map.
 *
 * ```js
 * require(["esri/layers/MapImageLayer"], function(MapImageLayer){
 *   // points to the states layer in a service storing U.S. census data
 *   var layer = new MapImageLayer({
 *     url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/Census/MapServer"
 *   });
 *   map.add(layer);  // adds the layer to the map
 * });
 * ```
 *
 * If the map service is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required.
 *
 * ### Reference an ArcGIS portal Item ID
 *
 * You can also create a MapImageLayer from its ID if it exists as an item in ArcGIS Online or ArcGIS Enterprise.
 * For example, the following snippet shows how to add a new MapImageLayer instance to a map using the
 * [portalItem](#portalItem) property.
 *
 * ```js
 * // references an ArcGIS Online item pointing to a Map Service Layer
 * var layer = new MapImageLayer({
 *   portalItem: {  // autocasts as esri/portal/PortalItem
 *     id: "8444e275037549c1acab02d2626daaee"
 *   }
 * });
 * map.add(layer);  // adds the layer to the map
 * ```
 *
 * ## Sublayers
 *
 * Map services contain one or more sublayers. Sublayers may even contain nested sublayers.
 * When the [sublayers](#sublayers) property of the MapImageLayer is not specified, then an image of all sublayers
 * in the service is exported to the client. If a subset of sublayers from the service are
 * specified, then only the subset of sublayers are rendered on the client.
 * Sublayers have default rendering, scale visibility, labels, and other properties saved to the server. However, these properties may be dynamically
 * changed so a new map image is exported to the view. Sublayers of a MapImageLayer can only be styled with 2D symbology even if they are rendered in
 * a {@link module:esri/WebScene}.
 * To learn more about working with sublayers, see the {@link module:esri/layers/support/Sublayer} API
 * documentation.
 *
 * [![mapimagelayer-renderer](../../assets/img/apiref/layers/mapimagelayer-renderer.png)](../sample-code/layers-mapimagelayer-renderers/index.html)
 *
 * <a name="dynamic-layers"></a>
 * ## Dynamic layers
 *
 * Sublayers may be rendered on the fly as dynamic layers. There are two types of dynamic layers:
 * {@link module:esri/layers/support/Sublayer#source DynamicMapLayer} and
 * {@link module:esri/layers/support/Sublayer#source DynamicDataLayer}.
 *
 * {@link module:esri/layers/support/Sublayer#source Dynamic map layers} allow you
 * to override sublayers in the map service with new renderers,
 * definition expressions, opacity, scale visibility, etc. Multiple dynamic map layers may exist
 * for a single map service layer.
 *
 * {@link module:esri/layers/support/Sublayer#source Dynamic data layers} provide
 * the ability to create layers on the fly from data referenced in
 * registered workspaces.
 * The data may be tables with or without geometries, feature classes, and
 * rasters. These data sources are not directly visible to the services directory, but may be
 * published and configured with the ArcGIS Server Manager.
 * Data from tables may be joined to other tables or dynamic map layers.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/MapImageLayer
 * @since 4.0
 * @see module:esri/layers/support/Sublayer
 * @see module:esri/layers/TileLayer
 * @see [Sample - MapImageLayer](../sample-code/layers-mapimagelayer/index.html)
 * @see [Sample - MapImageLayer: toggle sublayer visibility](../sample-code/layers-mapimagelayer-sublayers/index.html)
 * @see [Sample - MapImageLayer: set definition expression](../sample-code/layers-mapimagelayer-definitionexpression/index.html)
 * @see [Sample - MapImageLayer: set renderers on sublayers](../sample-code/layers-mapimagelayer-renderers/index.html)
 * @see [Sample - MapImageLayer: label sublayer features](../sample-code/layers-mapimagelayer-dynamic-labels/index.html)
 * @see [Sample - MapImageLayer: create dynamic map layers](../sample-code/layers-dynamicmaplayer/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with table join](../sample-code/layers-dynamicdatalayer-table-join/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with query table](../sample-code/layers-dynamicdatalayer-query-table/index.html)
 * @see [Sample - MapImageLayer: dynamic data layer with raster](../sample-code/layers-dynamicdatalayer-raster/index.html)
 *
 * @example
 * var layer = new MapImageLayer({
 * url: "https://sampleserver6.arcgisonline.com/arcgis/rest/services/USA/MapServer",
 *   sublayers: [
 *    {
 *      id: 3,
 *      visible: false
 *    }, {
 *      id: 2,
 *      visible: true
 *    }, {
 *      id: 1,
 *      visible: true
 *    }, {
 *      id: 0,
 *      visible: true,
 *      definitionExpression: "pop2000 > 100000"
 *    }
 *  ]
 * });
 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/support/scaleUtils */ "./node_modules/arcgis-js-api/geometry/support/scaleUtils.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISMapService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISMapService.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SublayersOwner */ "./node_modules/arcgis-js-api/layers/mixins/SublayersOwner.js"),__webpack_require__(/*! ./mixins/TemporalLayer */ "./node_modules/arcgis-js-api/layers/mixins/TemporalLayer.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/ExportImageParameters */ "./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,a,i,p,s,n,l,y,u,c,d,m,h,g,v,S,f,x,b,w,O,I,L){return function(e){function r(r,t){var o=e.call(this,r)||this;return o.alwaysRefetch=!1,o.dpi=96,o.gdbVersion=null,o.imageFormat="png24",o.imageMaxHeight=2048,o.imageMaxWidth=2048,o.imageTransparency=!0,o.labelsVisible=!1,o.isReference=null,o.operationalLayerType="ArcGISMapServiceLayer",o.sourceJSON=null,o.sublayers=null,o.type="map-image",o.url=null,o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=y.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).then(function(){return r._fetchService(t)})),this.when()},r.prototype.readImageFormat=function(e,r){var t=r.supportedImageFormatTypes;return t&&t.indexOf("PNG32")>-1?"png32":"png24"},r.prototype.createExportImageParameters=function(e,r,o,a){var i=a&&a.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());var p=new L.ExportImageParameters({layer:this,scale:m.getScale({extent:e,width:r})*i}),s=p.toJSON();p.layer=null,p.destroy();var n=!a||!a.rotation||this.version<10.3?{}:{rotation:-a.rotation},l=e&&e.spatialReference,y=l.wkid||JSON.stringify(l.toJSON());s.dpi*=i;var u={};if(a&&a.timeExtent){var c=a.timeExtent.toJSON(),d=c.start,h=c.end;d&&h&&d===h?u.time=""+d:null==d&&null==h||(u.time=(null==d?"null":d)+","+(null==h?"null":h))}return t({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:y,imageSR:y,size:r+","+o},s,n,u)},r.prototype.fetchImage=function(e,r,o,a){var i={responseType:"image"};a&&a.timestamp&&(i.query={_ts:a.timestamp}),a&&a.signal&&(i.signal=a.signal);var p=this.parsedUrl.path+"/export",s=t({},this.parsedUrl.query,this.createExportImageParameters(e,r,o,a),{f:"image",_ts:this.alwaysRefetch?Date.now():null});return null==s.dynamicLayers||this.capabilities.exportMap.supportsDynamicLayers?(i.query?i.query=t({},s,i.query):i.query=s,n(p,i).then(function(e){return e.data}).catch(function(e){if(c.isAbortError(e))throw e;throw new l("mapimagelayer:image-fetch-error","Unable to load image: "+p,{error:e})})):c.reject(new l("mapimagelayer:dynamiclayer-not-supported","service "+this.url+" doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.",{query:s}))},r.prototype._fetchService=function(e){return s(this,void 0,void 0,function(){var r,o,a;return p(this,function(i){switch(i.label){case 0:return this.sourceJSON?(this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl}),[2]):[4,n(this.parsedUrl.path,{query:t({f:"json"},this.parsedUrl.query),signal:e})];case 1:return r=i.sent(),o=r.data,a=r.ssl,a&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o,this.read(o,{origin:"service",url:this.parsedUrl}),[2]}})})},a([d.property()],r.prototype,"alwaysRefetch",void 0),a([d.property()],r.prototype,"dpi",void 0),a([d.property()],r.prototype,"gdbVersion",void 0),a([d.property({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),a([d.property()],r.prototype,"imageFormat",void 0),a([d.reader("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),a([d.property({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),a([d.property({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),a([d.property()],r.prototype,"imageTransparency",void 0),a([d.property({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),a([d.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),a([d.property({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),a([d.property()],r.prototype,"sourceJSON",void 0),a([d.property()],r.prototype,"sublayers",void 0),a([d.property({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),a([d.property({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),a([d.property(I.url)],r.prototype,"url",void 0),r=a([d.subclass("esri.layers.MapImageLayer")],r)}(d.declared(O.TemporalLayer(b.ScaleRangeLayer(x.RefreshableLayer(w.SublayersOwner(g.ArcGISMapService(v.ArcGISService(S.OperationalLayer(f.PortalLayer(u.MultiOriginJSONMixin(h)))))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/ExportImageParameters.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./sublayerUtils */ "./node_modules/arcgis-js-api/layers/support/sublayerUtils.js"),__webpack_require__(/*! ./timeUtils */ "./node_modules/arcgis-js-api/layers/support/timeUtils.js"),__webpack_require__(/*! ../../views/View */ "./node_modules/arcgis-js-api/views/View.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,i,n,s,l,y,o){Object.defineProperty(r,"__esModule",{value:!0});var u={visible:"visibleSublayers",definitionExpression:"layerDefs",labelingInfo:"hasDynamicLayers",labelsVisible:"hasDynamicLayers",opacity:"hasDynamicLayers",minScale:"visibleSublayers",maxScale:"visibleSublayers",renderer:"hasDynamicLayers",source:"hasDynamicLayers"},p=function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._scale=null,r.view=null,r}return a(r,e),Object.defineProperty(r.prototype,"dynamicLayers",{get:function(){if(!this.hasDynamicLayers)return null;var e=this.visibleSublayers.map(function(e){return e.toExportImageJSON()});return e.length?JSON.stringify(e):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"hasDynamicLayers",{get:function(){return this.layer&&l.isExportDynamic(this.visibleSublayers,this.layer.serviceSublayers,this.layer)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.forEach(function(e){return e.remove()}),this._layerHandles.length=0),e&&(this._layerHandles=[e.allSublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("sublayer-update",function(e){return r.notifyChange(u[e.propertyName])})]))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){var e=this.visibleSublayers;return e?e.length?"show:"+e.map(function(e){return e.id}).join(","):"show:-1":null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layerDefs",{get:function(){var e=this.visibleSublayers.filter(function(e){return null!=e.definitionExpression});return e.length?JSON.stringify(e.reduce(function(e,r){return e[r.id]=r.definitionExpression,e},{})):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){var e=this;e.layers,e.layerDefs,e.dynamicLayers,e.timeExtent;var r=e.layer;return r&&(r.dpi,r.imageFormat,r.imageTransparency,r.gdbVersion),(this._get("version")||0)+1},set:function(e){this._set("version",e)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=[];if(!this.layer)return r;var t=this.layer.sublayers,a=function(t){var i=e.scale,n=0===i,s=0===t.minScale||i<=t.minScale,l=0===t.maxScale||i>=t.maxScale;t.visible&&(n||s&&l)&&(t.sublayers?t.sublayers.forEach(a):r.unshift(t))};t&&t.forEach(a);var i=this._get("visibleSublayers");return!i||i.length!==r.length||i.some(function(e,t){return r[t]!==e})?r:i},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this.layer,r={dpi:e.dpi,format:e.imageFormat,transparent:e.imageTransparency,gdbVersion:e.gdbVersion||null};return this.hasDynamicLayers&&this.dynamicLayers?r.dynamicLayers=this.dynamicLayers:r=t({},r,{layers:this.layers,layerDefs:this.layerDefs}),r},i([s.property({readOnly:!0,dependsOn:["hasDynamicLayers","visibleSublayers"]})],r.prototype,"dynamicLayers",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers","layer.serviceSublayers","layer.capabilities"]})],r.prototype,"hasDynamicLayers",null),i([s.property()],r.prototype,"layer",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),i([s.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layerDefs",null),i([s.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),i([s.property(y.combinedViewLayerTimeExtentProperty)],r.prototype,"timeExtent",void 0),i([s.property({dependsOn:["layers","layerDefs","dynamicLayers","layer.dpi","layer.imageFormat","layer.imageTransparency","layer.gdbVersion","timeExtent"]})],r.prototype,"version",null),i([s.property({type:o})],r.prototype,"view",void 0),i([s.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),r=i([s.subclass("esri.layers.mixins.ExportImageParameters")],r)}(s.declared(n));r.ExportImageParameters=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=47.js.map