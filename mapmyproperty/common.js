(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/throttle":"./node_modules/arcgis-js-api/core/throttle.js",
	"esri/geometry/support/meshUtils/deduplicate":"./node_modules/arcgis-js-api/geometry/support/meshUtils/deduplicate.js",
	"arcgis-js-api/layers/GeoRSSLayer":"./node_modules/arcgis-js-api/layers/GeoRSSLayer.js",
	"arcgis-js-api/layers/GroupLayer":"./node_modules/arcgis-js-api/layers/GroupLayer.js",
	"arcgis-js-api/layers/IntegratedMeshLayer":"./node_modules/arcgis-js-api/layers/IntegratedMeshLayer.js",
	"arcgis-js-api/layers/OpenStreetMapLayer":"./node_modules/arcgis-js-api/layers/OpenStreetMapLayer.js",
	"arcgis-js-api/layers/support/lazyLayerLoader":"./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js",
	"arcgis-js-api/portal/support/mapNotesUtils":"./node_modules/arcgis-js-api/portal/support/mapNotesUtils.js",
	"arcgis-js-api/portal/support/portalLayers":"./node_modules/arcgis-js-api/portal/support/portalLayers.js",
	"arcgis-js-api/renderers/support/heatmapUtils":"./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js",
	"esri/renderers/support/heatmapUtils":"./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js",
	"arcgis-js-api/views/2d/layers/BitmapLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js",
	"arcgis-js-api/views/2d/layers/BitmapTileLayerView2D":"./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js",
	"esri/views/2d/layers/features/processors/BaseProcessor":"./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js",
	"arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer":"./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer.js",
	"arcgis-js-api/views/2d/layers/support/ExportStrategy":"./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js",
	"arcgis-js-api/views/2d/viewStateUtils":"./node_modules/arcgis-js-api/views/2d/viewStateUtils.js"
	// "fs" = "./node_modules/node-libs-browser/mock/empty.js"
	// "path" = "./node_modules/path-browserify/index.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/arcgis-js-api/core/throttle.js":
/*!*****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/throttle.js ***!
  \*****************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){function n(e,t,n,r){var o=null,u=1e3;"number"==typeof t?(u=t,r=n):(o=t,u=n);var i,f=0,a=function(){f=0,e.apply(r,i)},c=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];o&&o.apply(r,e),i=e,u?f||(f=setTimeout(a,u)):a()};return c.remove=function(){f&&(clearTimeout(f),f=0)},c.forceUpdate=function(){f&&(clearTimeout(f),a())},c.hasPendingUpdates=function(){return!!f},c}Object.defineProperty(t,"__esModule",{value:!0}),t.throttle=n,t.default=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/geometry/support/meshUtils/deduplicate.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/meshUtils/deduplicate.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,n,e){function t(r,n,t){var u=r.byteLength/(4*n),l=new Uint32Array(r,0,u*n),v=new Uint32Array(u),c=t&&t.minReduction||0,h=t&&t.originalIndices||null,s=t&&t.componentOffsets||null,d=0;if(s)for(var g=0;g<s.length-1;g++){var w=s[g+1]-s[g];w>d&&(d=w)}else d=u;var y=Math.floor(1.1*d)+1;(null==o||o.length<2*y)&&(o=new Uint32Array(e.nextHighestPowerOfTwo(2*y)));for(var g=0;g<2*y;g++)o[g]=0;for(var U=0,b=1.96,A=0!==c?Math.ceil(4*b*b/(c*c)*c*(1-c)):u,p=1,M=s?s[1]:u,g=0;g<u;g++){if(g===A){var m=1-U/g;if(m+b*Math.sqrt(m*(1-m)/g)<c)return null;A*=2}if(g===M){for(var q=0;q<2*y;q++)o[q]=0;M=s[++p]}for(var O=g*n,x=a(l,O,n),P=x%y,_=U;0!==o[2*P+1];){if(o[2*P]===x){var j=o[2*P+1]-1;if(f(l,O,j*n,n)){_=v[j];break}}P++,P>=y&&(P-=y)}_===U&&(o[2*P]=x,o[2*P+1]=g+1,U++),v[g]=_}if(0!==c&&1-U/u<c)return null;var k=new Uint32Array(n*U);U=0;for(var g=0;g<u;g++)v[g]===U&&(i(l,g*n,k,U*n,n),U++);if(h){for(var C=new Uint32Array(h.length),g=0;g<C.length;g++)C[g]=v[h[g]];v=C}return{buffer:k.buffer,indices:v,uniqueCount:U}}function f(r,n,e,t){for(var f=0;f<t;f++)if(r[n+f]!==r[e+f])return!1;return!0}function i(r,n,e,t,f){for(var i=0;i<f;i++)e[t+i]=r[n+i]}function a(r,n,e){for(var t=0,f=0;f<e;f++)t=r[n+f]+t|0,t=t+(t<<11)+(t>>>2)|0;return t>>>0}Object.defineProperty(n,"__esModule",{value:!0}),n.deduplicate=t;var o=null;n.default=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/GeoRSSLayer.js":
/*!**********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/GeoRSSLayer.js ***!
  \**********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ../symbols/SimpleFillSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleFillSymbol.js"),__webpack_require__(/*! ../symbols/SimpleLineSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleLineSymbol.js"),__webpack_require__(/*! ../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,i,l,n,p,s,a,u,y,c,S,d,f,v,m,h,g,b,L){return function(e){function r(r,o){var t=e.call(this,r)||this;return t.description=null,t.title=null,t.lineSymbol=null,t.pointSymbol=null,t.polygonSymbol=null,t.outSpatialReference=null,t.url=null,t.type="geo-rss",t}return t(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?o({url:e},r):e},r.prototype.readFeatureCollections=function(e,r){return r.featureCollection.layers.forEach(function(e){var r=e.layerDefinition.drawingInfo.renderer.symbol;r&&"esriSFS"===r.type&&r.outline&&-1!==r.outline.style.indexOf("esriSFS")&&(r.outline.style="esriSLSSolid")}),r.featureCollection.layers},r.prototype.load=function(e){var r=this,o=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).then(function(){return r._fetchService(o)},function(){return r._fetchService(o)})),this.when()},r.prototype._fetchService=function(e){return n(this,void 0,void 0,function(){var r;return l(this,function(o){switch(o.label){case 0:return[4,s(p.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:this.outSpatialReference?JSON.stringify(this.outSpatialReference.toJSON()):void 0},signal:e})];case 1:return r=o.sent().data,this.read(r,{origin:"service"}),[2]}})})},i([c.property()],r.prototype,"description",void 0),i([c.property()],r.prototype,"title",void 0),i([c.property()],r.prototype,"featureCollections",void 0),i([c.reader("service","featureCollections",["featureCollection.layers"])],r.prototype,"readFeatureCollections",null),i([c.property({type:b})],r.prototype,"lineSymbol",void 0),i([c.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([c.property({types:a.symbolTypes,json:{read:L.read}})],r.prototype,"pointSymbol",void 0),i([c.property({type:g})],r.prototype,"polygonSymbol",void 0),i([c.property()],r.prototype,"outSpatialReference",void 0),i([c.property(h.url)],r.prototype,"url",void 0),i([c.property({readOnly:!0,json:{read:!1},value:"geo-rss"})],r.prototype,"type",void 0),r=i([c.subclass("esri.layers.GeoRSSLayer")],r)}(c.declared(v.RefreshableLayer(d.OperationalLayer(f.PortalLayer(m.ScaleRangeLayer(y.MultiOriginJSONMixin(S)))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/GroupLayer.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/GroupLayer.js ***!
  \*********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/loadAll */ "./node_modules/arcgis-js-api/core/loadAll.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../core/accessorSupport/utils */ "./node_modules/arcgis-js-api/core/accessorSupport/utils.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ../support/LayersMixin */ "./node_modules/arcgis-js-api/support/LayersMixin.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(i,e,t,r,o,s,n,l,a,p,y,c,u,h){return function(i){function e(e){var t=i.call(this,e)||this;return t._visibilityHandles={},t.fullExtent=void 0,t.operationalLayerType="GroupLayer",t.spatialReference=void 0,t.type="group",t._visibilityWatcher=t._visibilityWatcher.bind(t),t}return t(e,i),e.prototype.initialize=function(){this._enforceVisibility(this.visibilityMode,this.visible),this.watch("visible",this._visibleWatcher.bind(this),!0)},e.prototype._writeLayers=function(i,e,t,r){var o=[];if(!i)return o;i.forEach(function(i){if("write"in i&&i.write){var e=i.write(null,r);e&&e.layerType&&o.push(e)}}),e.layers=o},Object.defineProperty(e.prototype,"portalItem",{set:function(i){this._set("portalItem",i)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"visibilityMode",{set:function(i){var e=this._get("visibilityMode")!==i;this._set("visibilityMode",i),e&&this._enforceVisibility(i,this.visible)},enumerable:!0,configurable:!0}),e.prototype.load=function(i){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Feature Service","Feature Collection","Scene Service"]},i)),this.when()},e.prototype.loadAll=function(){var i=this;return n.loadAll(this,function(e){e(i.layers)})},e.prototype.layerAdded=function(i){i.visible&&"exclusive"===this.visibilityMode?this._turnOffOtherLayers(i):"inherited"===this.visibilityMode&&(i.visible=this.visible),this._visibilityHandles[i.uid]=i.watch("visible",this._visibilityWatcher,!0)},e.prototype.layerRemoved=function(i){var e=this._visibilityHandles[i.uid];e&&(e.remove(),delete this._visibilityHandles[i.uid]),this._enforceVisibility(this.visibilityMode,this.visible)},e.prototype._turnOffOtherLayers=function(i){this.layers.forEach(function(e){e!==i&&(e.visible=!1)})},e.prototype._enforceVisibility=function(i,e){if(p.getProperties(this).initialized){var t=this.layers,r=t.find(function(i){return i.visible});switch(i){case"exclusive":t.length&&!r&&(r=t.getItemAt(0),r.visible=!0),this._turnOffOtherLayers(r);break;case"inherited":t.forEach(function(i){i.visible=e})}}},e.prototype._visibleWatcher=function(i){"inherited"===this.visibilityMode&&this.layers.forEach(function(e){e.visible=i})},e.prototype._visibilityWatcher=function(i,e,t,r){var o=r;switch(this.visibilityMode){case"exclusive":i?this._turnOffOtherLayers(o):this._isAnyLayerVisible()||(o.visible=!0);break;case"inherited":o.visible=this.visible}},e.prototype._isAnyLayerVisible=function(){return this.layers.some(function(i){return i.visible})},r([a.property()],e.prototype,"fullExtent",void 0),r([a.property({json:{read:!1,write:{ignoreOrigin:!0}}})],e.prototype,"layers",void 0),r([a.writer("layers")],e.prototype,"_writeLayers",null),r([a.property({type:["GroupLayer"]})],e.prototype,"operationalLayerType",void 0),r([a.property({json:{origins:{"web-scene":{read:!1,write:!1}}}})],e.prototype,"portalItem",null),r([a.property()],e.prototype,"spatialReference",void 0),r([a.property({json:{read:!1},readOnly:!0,value:"group"})],e.prototype,"type",void 0),r([a.property({type:String,value:"independent",json:{write:!0}})],e.prototype,"visibilityMode",null),e=r([a.subclass("esri.layers.GroupLayer")],e)}(a.declared(c.OperationalLayer(u.PortalLayer(h.LayersMixin(l.MultiOriginJSONMixin(y))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/IntegratedMeshLayer.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/IntegratedMeshLayer.js ***!
  \******************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./mixins/SceneService */ "./node_modules/arcgis-js-api/layers/mixins/SceneService.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/I3SLayerDefinitions */ "./node_modules/arcgis-js-api/layers/support/I3SLayerDefinitions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,p,s,a,y,l,d,c,u,v,S,h,f,m){return function(e){function r(r,t){var o=e.call(this,r)||this;return o.geometryType="mesh",o.operationalLayerType="IntegratedMeshLayer",o.type="integrated-mesh",o.nodePages=null,o.materialDefinitions=null,o.textureSetDefinitions=null,o.geometryDefinitions=null,o.serviceUpdateTimeStamp=null,o.profile="mesh-pyramids",o.elevationInfo=null,o.path=null,o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.load=function(e){var r=this,t=a.isSome(e)?e.signal:null,o=this.loadFromPortal({supportedTypes:["Scene Service"]},e).then(function(){return r._fetchService(t)},function(){return r._fetchService(t)}).then(function(){return r._verifyRootNodeAndUpdateExtent(r.nodePages,t)});return this.addResolvingPromise(o),this.when()},r.prototype.validateLayer=function(e){if(e.layerType&&"IntegratedMesh"!==e.layerType)throw new s("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new s("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new s("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})},i([l.property({type:String,readOnly:!0})],r.prototype,"geometryType",void 0),i([l.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([l.property({type:["IntegratedMeshLayer"]})],r.prototype,"operationalLayerType",void 0),i([l.property({json:{read:!1},readOnly:!0})],r.prototype,"type",void 0),i([l.property({type:m.I3SNodePageDefinition,readOnly:!0})],r.prototype,"nodePages",void 0),i([l.property({type:[m.I3SMaterialDefinition],readOnly:!0})],r.prototype,"materialDefinitions",void 0),i([l.property({type:[m.I3STextureSetDefinition],readOnly:!0})],r.prototype,"textureSetDefinitions",void 0),i([l.property({type:[m.I3SGeometryDefinition],readOnly:!0})],r.prototype,"geometryDefinitions",void 0),i([l.property({readOnly:!0})],r.prototype,"serviceUpdateTimeStamp",void 0),i([l.property(f.elevationInfo)],r.prototype,"elevationInfo",void 0),i([l.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],r.prototype,"path",void 0),r=i([l.subclass("esri.layers.IntegratedMeshLayer")],r)}(l.declared(S.ScaleRangeLayer(h.SceneService(c.ArcGISService(u.OperationalLayer(v.PortalLayer(y.MultiOriginJSONMixin(d))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/OpenStreetMapLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/OpenStreetMapLayer.js ***!
  \*****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./WebTileLayer */ "./node_modules/arcgis-js-api/layers/WebTileLayer.js"),__webpack_require__(/*! ./support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ../portal/PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,n,a,i,y,l){return function(e){function r(){var r=e.call(this)||this;return r.portalItem=null,r.isReference=null,r.subDomains=["a","b","c"],r.fullExtent=new n.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,n.SpatialReference.WebMercator),r.urlTemplate="https://{subDomain}.tile.openstreetmap.org/{level}/{col}/{row}.png",r.operationalLayerType="OpenStreetMap",r.type="open-street-map",r.copyright="Map data &copy; OpenStreetMap contributors, CC-BY-SA",r}return o(r,e),Object.defineProperty(r.prototype,"refreshInterval",{get:function(){return 0},enumerable:!0,configurable:!0}),p([a.property({type:l,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"portalItem",void 0),p([a.property({type:Boolean,json:{read:!1,write:!1}})],r.prototype,"isReference",void 0),p([a.property({type:Number,readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],r.prototype,"refreshInterval",null),p([a.property({type:y,json:{write:!1}})],r.prototype,"tileInfo",void 0),p([a.property({type:["show","hide"]})],r.prototype,"listMode",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"subDomains",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"fullExtent",void 0),p([a.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"urlTemplate",void 0),p([a.property({type:["OpenStreetMap"]})],r.prototype,"operationalLayerType",void 0),p([a.property({json:{read:!1}})],r.prototype,"type",void 0),p([a.property({json:{read:!1,write:!1}})],r.prototype,"copyright",void 0),p([a.property({json:{read:!1,write:!1}})],r.prototype,"wmtsInfo",void 0),r=p([a.subclass("esri.layers.OpenStreetMapLayer")],r)}(a.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js ***!
  \**********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n){Object.defineProperty(r,"__esModule",{value:!0}),r.layerLookupMap={CSVLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(56)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../CSVLayer */ "./node_modules/arcgis-js-api/layers/CSVLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},ElevationLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(21), __webpack_require__.e(39)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../ElevationLayer */ "./node_modules/arcgis-js-api/layers/ElevationLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},FeatureLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(89)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../FeatureLayer */ "./node_modules/arcgis-js-api/layers/FeatureLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},GroupLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(69)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../GroupLayer */ "./node_modules/arcgis-js-api/layers/GroupLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},GeoRSSLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e("common"), __webpack_require__.e(114)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../GeoRSSLayer */ "./node_modules/arcgis-js-api/layers/GeoRSSLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},ImageryLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(7), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(14), __webpack_require__.e(19), __webpack_require__.e(23), __webpack_require__.e(43), __webpack_require__.e(49)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../ImageryLayer */ "./node_modules/arcgis-js-api/layers/ImageryLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},KMLLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(2), __webpack_require__.e(46), __webpack_require__.e(62)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../KMLLayer */ "./node_modules/arcgis-js-api/layers/KMLLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},MapImageLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(25), __webpack_require__.e(47), __webpack_require__.e(116)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../MapImageLayer */ "./node_modules/arcgis-js-api/layers/MapImageLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},MapNotesLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(85)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../MapNotesLayer */ "./node_modules/arcgis-js-api/layers/MapNotesLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},OpenStreetMapLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(32), __webpack_require__.e("common")]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../OpenStreetMapLayer */ "./node_modules/arcgis-js-api/layers/OpenStreetMapLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},PointCloudLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(38), __webpack_require__.e(54)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../PointCloudLayer */ "./node_modules/arcgis-js-api/layers/PointCloudLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},SceneLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(28), __webpack_require__.e(57)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../SceneLayer */ "./node_modules/arcgis-js-api/layers/SceneLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},BuildingSceneLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(28), __webpack_require__.e(52)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../BuildingSceneLayer */ "./node_modules/arcgis-js-api/layers/BuildingSceneLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},IntegratedMeshLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(28), __webpack_require__.e("common"), __webpack_require__.e(112)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../IntegratedMeshLayer */ "./node_modules/arcgis-js-api/layers/IntegratedMeshLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},StreamLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(12), __webpack_require__.e(17), __webpack_require__.e(58)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../StreamLayer */ "./node_modules/arcgis-js-api/layers/StreamLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},TileLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(0), __webpack_require__.e(1), __webpack_require__.e(4), __webpack_require__.e(2), __webpack_require__.e(12), __webpack_require__.e(21), __webpack_require__.e(25), __webpack_require__.e(41)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../TileLayer */ "./node_modules/arcgis-js-api/layers/TileLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},UnknownLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 96).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../UnknownLayer */ "./node_modules/arcgis-js-api/layers/UnknownLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},UnsupportedLayer:function(){return n.create(function(r){return __webpack_require__.e(/*! AMD require */ 97).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../UnsupportedLayer */ "./node_modules/arcgis-js-api/layers/UnsupportedLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},VectorTileLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(21), __webpack_require__.e(42), __webpack_require__.e(53)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../VectorTileLayer */ "./node_modules/arcgis-js-api/layers/VectorTileLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WebTileLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(32)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WebTileLayer */ "./node_modules/arcgis-js-api/layers/WebTileLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WMSLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(48), __webpack_require__.e(63)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WMSLayer */ "./node_modules/arcgis-js-api/layers/WMSLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},WMTSLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(32), __webpack_require__.e(94)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../WMTSLayer */ "./node_modules/arcgis-js-api/layers/WMTSLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},BingMapsLayer:function(){return n.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(2), __webpack_require__.e(36)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../BingMapsLayer */ "./node_modules/arcgis-js-api/layers/BingMapsLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/portal/support/mapNotesUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/mapNotesUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){function i(e){var r=["TITLE","DESCRIPTION","IMAGE_URL","IMAGE_LINK_URL"],i=e.layers||e.featureCollection&&e.featureCollection.layers;if(i&&Array.isArray(i)){var n=i[0];return n.layerDefinition&&Array.isArray(n.layerDefinition.fields)&&n.layerDefinition.fields.forEach(function(e){var i=r.indexOf(e.name);i>-1&&r.splice(i,1)}),!r.length}}Object.defineProperty(r,"__esModule",{value:!0}),r.isMapNotesLayer=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/portal/support/portalLayers.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/portalLayers.js ***!
  \*******************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../layers/support/lazyLayerLoader */ "./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js"),__webpack_require__(/*! ../PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js"),__webpack_require__(/*! ./mapNotesUtils */ "./node_modules/arcgis-js-api/portal/support/mapNotesUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,a,o,u,s,c,i){function l(e){return!e.portalItem||e.portalItem instanceof c||e.portalItem.constructor&&e.portalItem.constructor._meta||(e=t({},e,{portalItem:new c(e.portalItem)})),y(e.portalItem).then(function(r){var n=t({portalItem:e.portalItem},r.properties),a=r.constructor;return u.resolve(new a(n))})}function y(e){return e.load().then(p).then(f)}function p(e){switch(e.type){case"Map Service":return m(e);case"Feature Service":return d(e);case"Feature Collection":return h(e);case"Scene Service":return L(e);case"Image Service":return N(e);case"Stream Service":return I();case"Vector Tile Service":return S();case"KML":return v();case"WMTS":return M();case"WMS":return g();default:return u.reject(new o("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type}))}}function f(e){return(0,s.layerLookupMap[e.className])().then(function(r){return{constructor:r,properties:e.properties}})}function m(e){return w(e).then(function(e){return e?{className:"TileLayer"}:{className:"MapImageLayer"}})}function d(e){return T(e).then(function(e){if("object"==typeof e){var r={};return null!=e.id&&(r.layerId=e.id),{className:"FeatureLayer",properties:r}}return{className:"GroupLayer"}})}function L(e){return T(e).then(function(r){if("object"==typeof r){var t={},n=void 0;if(null!=r.id?(t.layerId=r.id,n=e.url+"/layers/"+r.id):n=e.url,Array.isArray(e.typeKeywords)&&e.typeKeywords.length>0)for(var a={IntegratedMesh:"IntegratedMeshLayer","3DObject":"SceneLayer",Point:"SceneLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"},o=0,u=Object.keys(a);o<u.length;o++){var s=u[o];if(-1!==e.typeKeywords.indexOf(s))return{className:a[s]}}return j(n).then(function(e){var r="SceneLayer",n={Point:"SceneLayer","3DObject":"SceneLayer",IntegratedMesh:"IntegratedMeshLayer",PointCloud:"PointCloudLayer",Building:"BuildingSceneLayer"};return e&&e.layerType&&n[e.layerType]&&(r=n[e.layerType]),{className:r,properties:t}})}return{className:"GroupLayer"}})}function h(e){return e.load().then(function(){return e.fetchData()}).then(function(e){if(e&&Array.isArray(e.layers)){if(i.isMapNotesLayer(e))return{className:"MapNotesLayer"};if(1===e.layers.length)return{className:"FeatureLayer"}}return{className:"GroupLayer"}})}function N(e){return w(e).then(function(r){var t=new a(e.typeKeywords);return r?t.find(function(e){return"elevation 3d layer"===e.toLowerCase()})?{className:"ElevationLayer"}:{className:"TileLayer"}:{className:"ImageryLayer"}})}function I(){return{className:"StreamLayer"}}function S(){return{className:"VectorTileLayer"}}function v(){return{className:"KMLLayer"}}function g(){return{className:"WMSLayer"}}function M(){return{className:"WMTSLayer"}}function w(e){return j(e.url).then(function(e){return e.tileInfo})}function T(e){return!e.url||e.url.match(/\/\d+$/)?u.resolve({}):e.load().then(function(){return e.fetchData()}).then(function(r){return r&&Array.isArray(r.layers)?1===r.layers.length&&{id:r.layers[0].id}:j(e.url).then(function(e){return e&&Array.isArray(e.layers)?1===e.layers.length&&{id:e.layers[0].id}:{}})})}function j(e){return n(e,{responseType:"json",query:{f:"json"}}).then(function(e){return e.data})}Object.defineProperty(r,"__esModule",{value:!0}),r.fromItem=l,r.selectLayerClassPath=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/heatmapUtils.js ***!
  \**********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/global */ "./node_modules/arcgis-js-api/core/global.js"),__webpack_require__(/*! ../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,a){function n(t,e,r,a){for(var n,i=e.blurRadius,o=e.fieldOffset,c=e.field,l=new Float64Array(r*a),h=u(i),g=Math.round(3*i),m=Number.NEGATIVE_INFINITY,d=f(c,o),y=0,v=t;y<v.length;y++)for(var p=v[y],s=p.geometry,M=p.attributes,b=s.x-g,w=s.y-g,I=Math.max(0,b),x=Math.max(0,w),A=Math.min(a,s.y+g),U=Math.min(r,s.x+g),F=+d(M),D=x;D<A;D++)for(var N=h[D-w],R=I;R<U;R++){var C=h[R-b],E=D*r+R;n=l[E]+=N*C*F,n>m&&(m=n)}return{matrix:l.buffer,max:m}}function i(t,e,r,a,n,i){t.canvas.width=t.canvas.height=e,t.clearRect(0,0,e,e);var u=t.getImageData(0,0,e,e);r&&a&&u.data.set(new Uint8ClampedArray(o(e,r,a,n,i))),t.putImageData(u,0,0)}function o(t,e,r,n,i){for(var o=new Uint32Array(t*t),u=("buffer"in e?e:new Float64Array(e)),f=("buffer"in r?new Uint32Array(r.buffer):new Uint32Array(new Uint8Array(r).buffer)),c=f.length/(i-n),l=0;l<u.length;l++){var h=u[l],g=Math.floor((h-n)*c);o[l]=f[a.clamp(g,0,f.length-1)]}return o.buffer}function u(t){for(var e=Math.round(3*t),r=2*t*t,a=new Float64Array(2*e+1),n=0;n<=a.length;n++)a[n]=Math.exp(-Math.pow(n-e,2)/r)/Math.sqrt(2*Math.PI)*(t/2);return a}function f(t,e){return"function"==typeof t?t:t?"string"==typeof e?function(e){return-1*+e[t]}:function(r){return+r[t]+e}:function(){return 1}}Object.defineProperty(e,"__esModule",{value:!0}),e.generateGradient=function(){if(!("document"in r))return function(){return null};var t=document.createElement("canvas"),e=t.getContext("2d");return t.height=512,t.width=1,function(r){e.clearRect(0,0,1,t.height);for(var a=e.createLinearGradient(0,0,0,t.height),n=0,i=r.colorStops;n<i.length;n++){var o=i[n],u=o.ratio,f=o.color;a.addColorStop(Math.max(u,.001),"rgba("+f[0]+", "+f[1]+", "+f[2]+", "+f[3]+")")}return e.fillStyle=a,e.fillRect(0,0,1,t.height),e.getImageData(0,0,1,t.height).data}}(),e.calculateHeatmapIntensityInfo=n,e.drawHeatmap=i,e.createHeatmapImageData=o,e.createKernel=u,e.createValueFunction=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/BitmapLayerView2D.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../engine/BitmapContainer */ "./node_modules/arcgis-js-api/views/2d/engine/BitmapContainer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,n,o){Object.defineProperty(r,"__esModule",{value:!0}),r.BitmapLayerView2D=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.container=new o.BitmapContainer(r.clips),r}return i(r,e),r.prototype.initialize=function(){var e=this;this.handles.add(this.clips.on("change",function(){return e.container.setClips(e.clips)}))},r=t([n.subclass("esri.views.2d.layers.BitmapLayerView2D")],r)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/BitmapTileLayerView2D.js ***!
  \*****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../engine/BitmapTileContainer */ "./node_modules/arcgis-js-api/views/2d/engine/BitmapTileContainer.js"),__webpack_require__(/*! ../engine/Container */ "./node_modules/arcgis-js-api/views/2d/engine/Container.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,r,n,a,o){Object.defineProperty(i,"__esModule",{value:!0}),i.BitmapTileLayerView2D=function(e){return function(e){function i(){var i=null!==e&&e.apply(this,arguments)||this;return i.container=new o.Container,i}return r(i,e),i.prototype.attach=function(){var e=this;this.view.timeline.record(this.layer.title+" (BitmapTileLayer) Attach"),this._bitmapView=new a.BitmapTileContainer(this._tileInfoView,this.clips),this.handles.add(this.clips.on("change",function(){return e._bitmapView.setClips(e.clips)})),this.container.addChild(this._bitmapView)},i.prototype.detatch=function(){this.container.removeChild(this._bitmapView),this._bitmapView.removeAllChildren()},i=t([n.subclass("esri.views.2d.layers.BitmapTileLayerView2D")],i)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/processors/BaseProcessor.js ***!
  \*****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,p,n,l,s){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),t.prototype.initialize=function(){},t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"supportsTileUpdates",{get:function(){return!1},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"spatialReference",{get:function(){var e=this.get("tileStore.tileScheme.spatialReference");return e&&e.toJSON()||null},enumerable:!0,configurable:!0}),o([s.property({readOnly:!0})],t.prototype,"supportsTileUpdates",null),o([s.property({constructOnly:!0})],t.prototype,"remoteClient",void 0),o([s.property({constructOnly:!0})],t.prototype,"service",void 0),o([s.property({dependsOn:["tileStore.tileScheme.spatialReference"]})],t.prototype,"spatialReference",null),o([s.property({constructOnly:!0})],t.prototype,"tileInfo",void 0),o([s.property({constructOnly:!0})],t.prototype,"tileStore",void 0),t=o([s.subclass("esri.views.2d.layers.features.processors.BaseProcessor")],t)}(s.declared(l.HandleOwner));t.default=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/tileRenderers/BaseTileRenderer.js ***!
  \***********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/HandleOwner */ "./node_modules/arcgis-js-api/core/HandleOwner.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n){Object.defineProperty(t,"__esModule",{value:!0});var p=function(e){function t(t){var r=e.call(this,t)||this;return r.tiles=new Map,r}return r(t,e),t.prototype.destroy=function(){this.tiles.clear(),this.layer=this.layerView=this.tileInfoView=this.tiles=null},Object.defineProperty(t.prototype,"updating",{get:function(){return this.isUpdating()},enumerable:!0,configurable:!0}),t.prototype.acquireTile=function(e){var t=this,r=this.createTile(e);return r.once("isReady",function(){return t.notifyChange("updating")}),this.tiles.set(e.id,r),r},t.prototype.lockAttributeTextureUpload=function(){},t.prototype.unlockAttributeTextureUpload=function(){},t.prototype.forceAttributeTextureUpload=function(){},t.prototype.forEachTile=function(e){this.tiles.forEach(e)},t.prototype.releaseTile=function(e){this.tiles.delete(e.key.id),this.disposeTile(e)},t.prototype.isUpdating=function(){var e=!0;return this.tiles.forEach(function(t){e=e&&t.isReady}),!e},t.prototype.setHighlight=function(){},t.prototype.invalidateLabels=function(){},t.prototype.requestUpdate=function(){this.layerView.requestUpdate()},o([n.property()],t.prototype,"layer",void 0),o([n.property()],t.prototype,"layerView",void 0),o([n.property()],t.prototype,"tileInfoView",void 0),o([n.property()],t.prototype,"updating",null),t=o([n.subclass("esri.views.2d.layers.features.tileRenderers.BaseTileRenderer")],t)}(n.declared(i.HandleOwner));t.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/support/ExportStrategy.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../../../geometry/support/aaBoundingRect */ "./node_modules/arcgis-js-api/geometry/support/aaBoundingRect.js"),__webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ../../../../layers/support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ../../viewStateUtils */ "./node_modules/arcgis-js-api/views/2d/viewStateUtils.js"),__webpack_require__(/*! ../../tiling/TileInfoView */ "./node_modules/arcgis-js-api/views/2d/tiling/TileInfoView.js"),__webpack_require__(/*! ../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,a,n,p,s,u,l,c,d,h,g,m,f,y){var x=c.create(),v=[0,0],S=new y(0,0,0,0),M={container:null,fetchSource:null,requestUpdate:null,imageMaxWidth:2048,imageMaxHeight:2048,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1};return function(e){function t(t){var r=e.call(this,t)||this;return r._imagePromise=null,r.hidpi=M.hidpi,r.imageMaxWidth=M.imageMaxWidth,r.imageMaxHeight=M.imageMaxHeight,r.imageRotationSupported=M.imageRotationSupported,r.imageNormalizationSupported=M.imageNormalizationSupported,r.update=s.debounce(function(e,t){return i(r,void 0,void 0,function(){var r,i,a,n,p,s,u,l,c,h=this;return o(this,function(o){return r=e.state,i=d.getInfo(r.spatialReference),a=this.hidpi?e.pixelRatio:1,!e.stationary||this.destroyed?[2]:(this.imageRotationSupported?(v[0]=r.size[0],v[1]=r.size[1]):m.getOuterSize(v,r),n=Math.floor(v[0]*a)>this.imageMaxWidth||Math.floor(v[1]*a)>this.imageMaxHeight,p=i&&(r.extent.xmin<i.valid[0]||r.extent.xmax>i.valid[1]),s=!this.imageNormalizationSupported&&p,u=!n&&!s,l=this.imageRotationSupported?r.rotation:0,u?this._imagePromise=this._singleExport(r,v,l,a,t):(c=Math.min(this.imageMaxWidth,this.imageMaxHeight),s&&(c=Math.min(r.worldScreenWidth,c)),this._imagePromise=this._tiledExport(r,c,l,a,t)),[2,this._imagePromise.then(function(e){h._imagePromise=null;var t=h.container.children.slice();h.container.removeAllChildren(),e.forEach(h.container.addChild,h.container),h.disposeSource&&t.forEach(function(e){h.disposeSource(e.source)},h)}).catch(function(e){throw h._imagePromise=null,e})])})})},5e3),r}return a(t,e),t.prototype.destroy=function(){},Object.defineProperty(t.prototype,"updating",{get:function(){return null!==this._imagePromise},enumerable:!0,configurable:!0}),t.prototype.updateExports=function(e){for(var t=0,r=this.container.children;t<r.length;t++){var o=r[t];if(!o.visible||!o.attached)return;e(o)?console.error("ExportStrategy.updateExports doesn't support promise yet"):(o.invalidateTexture(),o.requestRender())}},t.prototype._export=function(e,t,r,o,i,a){var n=this;return s.resolve().then(function(){return n.fetchSource(e,Math.floor(t*i),Math.floor(r*i),{rotation:o,pixelRatio:i,signal:a})}).then(function(r){var a=new g.Bitmap(r);return a.x=e.xmin,a.y=e.ymax,a.resolution=e.width/t,a.rotation=o,a.pixelRatio=i,a})},t.prototype._singleExport=function(e,t,r,o,i){m.getBBox(x,e.center,e.resolution,t);var a=new l(x[0],x[1],x[2],x[3],e.spatialReference);return this._export(a,t[0],t[1],r,o,i).then(function(e){return[e]})},t.prototype._tiledExport=function(e,t,r,o,i){var a=this,n=h.create({size:t,spatialReference:e.spatialReference,scales:[e.scale]}),p=new f(n),u=p.getTileCoverage(e);if(!u)return null;var c=[];return u.forEach(function(n,s,u,d){S.set(n,s,u,d),p.getTileBounds(x,S);var h=new l(x[0],x[1],x[2],x[3],e.spatialReference);c.push(a._export(h,t,t,r,o,i))}),s.all(c)},n([u.property()],t.prototype,"_imagePromise",void 0),n([u.property()],t.prototype,"container",void 0),n([u.property()],t.prototype,"disposeSource",void 0),n([u.property()],t.prototype,"fetchSource",void 0),n([u.property()],t.prototype,"hidpi",void 0),n([u.property()],t.prototype,"imageMaxWidth",void 0),n([u.property()],t.prototype,"imageMaxHeight",void 0),n([u.property()],t.prototype,"imageRotationSupported",void 0),n([u.property()],t.prototype,"imageNormalizationSupported",void 0),n([u.property()],t.prototype,"requestUpdate",void 0),n([u.property({dependsOn:["_imagePromise"]})],t.prototype,"updating",null),t=n([u.subclass("esri.views.2d.layers.support.ExportStrategy")],t)}(u.declared(p))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/viewStateUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/viewStateUtils.js ***!
  \***************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,n){function r(t){return t*i}function e(t,n,r){var e=r.resolution,o=r.size;return t[0]=e*(Math.round(n[0]/e)+o[0]%2*.5),t[1]=e*(Math.round(n[1]/e)+o[1]%2*.5),t}function o(t,n){var e=r(n.rotation),o=Math.abs(Math.cos(e)),u=Math.abs(Math.sin(e)),a=n.size,i=a[0],s=a[1];return t[0]=Math.round(s*u+i*o),t[1]=Math.round(s*o+i*u),t}function u(t,n,r,e){var o=n[0],u=n[1],a=e[0],i=e[1],s=.5*r;return t[0]=o-s*a,t[1]=u-s*i,t[2]=o+s*a,t[3]=u+s*i,t}function a(t,n){var r=t[0],e=t[1],o=t[2],u=t[3],a=n[0],i=n[1],s=n[2],M=n[3];return!(r>s||o<a||e>M||u<i)}Object.defineProperty(n,"__esModule",{value:!0});var i=Math.PI/180;n.snapToPixel=e,n.getOuterSize=o,n.getBBox=u,n.bboxIntersects=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/node-libs-browser/mock/empty.js":
/*!******************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/empty.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/path-browserify/index.js":
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;


/***/ })

}]);
//# sourceMappingURL=common.js.map