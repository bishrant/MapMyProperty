(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/LRUCache":"./node_modules/arcgis-js-api/core/LRUCache.js",
	"arcgis-js-api/core/MemCache":"./node_modules/arcgis-js-api/core/MemCache.js",
	"arcgis-js-api/layers/VectorTileLayer":"./node_modules/arcgis-js-api/layers/VectorTileLayer.js",
	"arcgis-js-api/layers/mixins/ArcGISCachedService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js",
	"arcgis-js-api/layers/mixins/ArcGISService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"arcgis-js-api/layers/support/SpriteSource":"./node_modules/arcgis-js-api/layers/support/SpriteSource.js",
	"arcgis-js-api/layers/support/serviceTileInfoProperty":"./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js",
	"arcgis-js-api/layers/support/vectorTileLayerLoader":"./node_modules/arcgis-js-api/layers/support/vectorTileLayerLoader.js",
	"arcgis-js-api/portal/support/jsonContext":"./node_modules/arcgis-js-api/portal/support/jsonContext.js",
	"esri/views/2d/engine/vectorTiles/GeometryUtils":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/SchemaHelper":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SchemaHelper.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/TileIndex":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/style/VectorTileSource":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/VectorTileSource.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/tileInfoUtils":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/tileInfoUtils.js",
	"esri/views/2d/engine/webgl/definitions":"./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js",
	"arcgis-js-api/views/2d/engine/webgl/definitions":"./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/arcgis-js-api/core/LRUCache.js":
/*!*****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/LRUCache.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./MemCache */ "./node_modules/arcgis-js-api/core/MemCache.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,o){return function(){function t(t,e){this._storage=new o.MemCacheStorage,this._storage.maxSize=t,e&&this._storage.registerRemoveFunc("",e)}return t.prototype.put=function(t,e,o){this._storage.put(t,e,o,1)},t.prototype.pop=function(t){return this._storage.pop(t)},t.prototype.get=function(t){return this._storage.get(t)},t.prototype.clear=function(){this._storage.clearAll()},t.prototype.destroy=function(){this._storage.clearAll()},Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._storage.maxSize},set:function(t){this._storage.maxSize=t},enumerable:!0,configurable:!0}),t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/MemCache.js":
/*!*****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/MemCache.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ./PooledArray */ "./node_modules/arcgis-js-api/core/PooledArray.js"),__webpack_require__(/*! ./string */ "./node_modules/arcgis-js-api/core/string.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,s,r){Object.defineProperty(e,"__esModule",{value:!0}),e.MIN_PRIORITY=-3;var o=function(){function t(t,e,i){this._namespace=t,this._storage=e,this._removeFunc=!1,this._hit=0,this._miss=0,this._storage.register(this),this._namespace+=":",i&&(this._storage.registerRemoveFunc(this._namespace,i),this._removeFunc=!0)}return Object.defineProperty(t.prototype,"namespace",{get:function(){return this._namespace.slice(0,-1)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"hitRate",{get:function(){return this._hit/(this._hit+this._miss)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this._storage.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._storage.maxSize},enumerable:!0,configurable:!0}),t.prototype.resetHitRate=function(){this._hit=this._miss=0},t.prototype.destroy=function(){this._storage.clear(this._namespace),this._removeFunc&&this._storage.deregisterRemoveFunc(this._namespace),this._storage.deregister(this)},t.prototype.put=function(t,e,i,s){void 0===s&&(s=0),this._storage.put(this._namespace+t,e,i,s)},t.prototype.get=function(t){var e=this._storage.get(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.pop=function(t){var e=this._storage.pop(this._namespace+t);return void 0===e?++this._miss:++this._hit,e},t.prototype.updateSize=function(t,e,i){this._storage.updateSize(this._namespace+t,e,i)},t.prototype.clear=function(){this._storage.clear(this._namespace)},t.prototype.clearAll=function(){this._storage.clearAll()},t.prototype.getStats=function(){return this._storage.getStats()},t.prototype.resetStats=function(){this._storage.resetStats()},t}();e.MemCache=o;var n=function(){function t(t){void 0===t&&(t=10485760),this._maxSize=t,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=[],this._users=new s}return t.prototype.register=function(t){this._users.push(t)},t.prototype.deregister=function(t){this._users.removeUnordered(t)},t.prototype.registerRemoveFunc=function(t,e){this._removeFuncs.push([t,e])},t.prototype.deregisterRemoveFunc=function(t){this._removeFuncs=this._removeFuncs.filter(function(e){return e[0]!==t})},Object.defineProperty(t.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{get:function(){return this._maxSize},set:function(t){this._maxSize=Math.max(t,0),this._checkSizeLimit()},enumerable:!0,configurable:!0}),t.prototype.put=function(t,i,s,r){var o=this._db.get(t);if(o&&(this._size-=o.size,this._db.delete(t),o.entry!==i&&this._notifyRemoved(t,o.entry)),s>this._maxSize)return void this._notifyRemoved(t,i);if(void 0===i)return void console.warn("Refusing to cache undefined entry ");if(!s||s<0)return void console.warn("Refusing to cache entry with invalid size "+s);var n=1+Math.max(r,e.MIN_PRIORITY)-e.MIN_PRIORITY;this._db.set(t,{entry:i,size:s,lifetime:n,lives:n}),this._size+=s,this._checkSizeLimit()},t.prototype.updateSize=function(t,e,i){var s=this._db.get(t);if(s&&s.entry===e){if(this._size-=s.size,i>this._maxSize)return void this._notifyRemoved(t,e);s.size=i,this._size+=i,this._checkSizeLimit()}},t.prototype.pop=function(t){var e=this._db.get(t);if(e)return this._size-=e.size,this._db.delete(t),++this._hit,e.entry;++this._miss},t.prototype.get=function(t){var e=this._db.get(t);return void 0===e?void++this._miss:(this._db.delete(t),e.lives=e.lifetime,this._db.set(t,e),++this._hit,e.entry)},t.prototype.getStats=function(){var t=this,i={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},s={},o=new Array;this._db.forEach(function(e,i){var n=e.lifetime;o[n]=(o[n]||0)+e.size,t._users.forEach(function(t){var o=t.namespace;if(r.startsWith(i,o)){var n=s[o]||0;s[o]=n+e.size}})});var n={};this._users.forEach(function(t){var e=t.namespace;if(!isNaN(t.hitRate)&&t.hitRate>0){var i=s[e]||0;s[e]=i,n[e]=Math.round(100*t.hitRate)+"%"}else n[e]="0%"});var h=Object.keys(s);h.forEach(function(e){return s[e]=s[e]/t._size*100}),h.sort(function(t,e){return s[e]-s[t]}),h.forEach(function(t){return i[t]=Math.round(s[t])+"% / "+n[t]});for(var a=o.length-1;a>=0;--a){var u=o[a];u&&(i["Priority "+(a+e.MIN_PRIORITY-1)]=Math.round(u/this.size*100)+"%")}return i},t.prototype.resetStats=function(){this._hit=this._miss=0,this._users.forEach(function(t){return t.resetHitRate()})},t.prototype.clear=function(t){var e=this;this._db.forEach(function(i,s){r.startsWith(s,t)&&(e._size-=i.size,e._db.delete(s),e._notifyRemoved(s,i.entry))})},t.prototype.clearAll=function(){var t=this;this._db.forEach(function(e,i){t._notifyRemoved(i,e.entry)}),this._size=0,this._db.clear()},t.prototype._getHitRate=function(){return this._hit/(this._hit+this._miss)},t.prototype._notifyRemoved=function(t,e){this._removeFuncs.forEach(function(i){r.startsWith(t,i[0])&&i[1](e)})},t.prototype._checkSizeLimit=function(){var t=this;this._size<=this._maxSize||i.someMap(this._db,function(e,i){return t._db.delete(i),e.lives<=1?(t._size-=e.size,t._notifyRemoved(i,e.entry)):(--e.lives,t._db.set(i,e)),t._size<=.9*t.maxSize})},t}();e.MemCacheStorage=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/VectorTileLayer.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/VectorTileLayer.js ***!
  \**************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/global */ "./node_modules/arcgis-js-api/core/global.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISCachedService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./support/SpriteSource */ "./node_modules/arcgis-js-api/layers/support/SpriteSource.js"),__webpack_require__(/*! ./support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ./support/TilemapCache */ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js"),__webpack_require__(/*! ./support/vectorTileLayerLoader */ "./node_modules/arcgis-js-api/layers/support/vectorTileLayerLoader.js"),__webpack_require__(/*! ../portal/support/jsonContext */ "./node_modules/arcgis-js-api/portal/support/jsonContext.js"),__webpack_require__(/*! ../views/2d/engine/vectorTiles/SchemaHelper */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SchemaHelper.js"),__webpack_require__(/*! ../views/2d/engine/vectorTiles/tileInfoUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/tileInfoUtils.js"),__webpack_require__(/*! ../views/2d/engine/vectorTiles/style/StyleRepository */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,l,p,a,s,u,c,y,d,f,h,m,S,v,g,b,O,_,P,T,I,U,j,w,N,x){return function(e){function r(r,t){var o=e.call(this,r)||this;return o._spriteSourceMap=new Map,o.currentStyleInfo=null,o.style=null,o.isReference=null,o.operationalLayerType="VectorTileLayer",o.type="vector-tile",o.url=null,o}return o(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},r.prototype.prefetchResources=function(e){return l(this,void 0,void 0,function(){return n(this,function(r){switch(r.label){case 0:return[4,this.loadSpriteSource(s.devicePixelRatio||1,e)];case 1:return r.sent(),[2]}})})},r.prototype.load=function(e){var r=this,o=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).then(function(){return l(r,void 0,void 0,function(){var r,o;return n(this,function(i){switch(i.label){case 0:return this.portalItem&&this.portalItem.id?(r=this.portalItem.itemUrl+"/resources/styles/root.json",[4,p(r,t({},e,{query:{f:"json"}}))]):[2];case 1:return o=i.sent(),o.data&&this.read({url:r},j.createForItem(this.portalItem)),[2]}})})}).then(function(){return r._loadStyle(e)},function(){return r._loadStyle(e)});return this.addResolvingPromise(o),this.when()},Object.defineProperty(r.prototype,"attributionDataUrl",{get:function(){var e=this.currentStyleInfo,r=e&&e.serviceUrl&&d.urlToObject(e.serviceUrl);return r?this._getDefaultAttribution(r.path):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"capabilities",{get:function(){var e=this._getPrimarySource();return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"fullExtent",{get:function(){var e=this._getPrimarySource();return e?e.fullExtent:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"parsedUrl",{get:function(){return this.serviceUrl?y.urlToObject(this.serviceUrl):null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"serviceUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"spatialReference",{get:function(){return this.tileInfo&&this.tileInfo.spatialReference||null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"styleUrl",{get:function(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null},enumerable:!0,configurable:!0}),r.prototype.writeStyleUrl=function(e,r){e&&d.isProtocolRelative(e)&&(e="https:"+e),r.styleUrl=e},Object.defineProperty(r.prototype,"tileIndexType",{get:function(){var e=this._getPrimarySource();return e?e.type:""},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"tileIndexUrl",{get:function(){var e=this._getPrimarySource();return e?e.tileMapURL:""},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"tileInfo",{get:function(){var e=[];for(var r in this.sourceNameToSource)e.push(this.sourceNameToSource[r]);var t=this._getPrimarySource().tileInfo;if(e.length>1)for(var o=0;o<e.length;o++)N.areSchemasOverlapping(t,e[o].tileInfo)&&(t=N.unionTileInfos(t,e[o].tileInfo));return t},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"tilemapCache",{get:function(){var e=this._getPrimarySource();return e&&e.capabilities.operations.supportsTileMap?e.tilemapCache:null},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"tileServers",{get:function(){var e=this._getPrimarySource();return e?e.tileServers:[]},enumerable:!0,configurable:!0}),r.prototype.readVersion=function(e,r){return r.version?parseFloat(r.version):parseFloat(r.currentVersion)},Object.defineProperty(r.prototype,"compatibleTileInfo256",{get:function(){return w.create256x256CompatibleTileInfo(this.tileInfo)},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"compatibleTileInfo512",{get:function(){return w.create512x512CompatibleTileInfo(this.tileInfo)},enumerable:!0,configurable:!0}),r.prototype.loadSpriteSource=function(e,r){return void 0===e&&(e=1),l(this,void 0,void 0,function(){var t,o;return n(this,function(i){return this._spriteSourceMap.has(e)||(t=new P.default(this.styleRepository.sprite,e),this._spriteSourceMap.set(e,t.load())),o=this._spriteSourceMap.get(e),[2,c.create(function(e,t){o.then(e,t),c.onAbortOrThrow(r,t)})]})})},r.prototype.loadStyle=function(e,r){return l(this,void 0,void 0,function(){var t,o,i,l=this;return n(this,function(n){return t=e||this.style||this.url,this._loadingPromise&&"string"==typeof t&&this.url===t&&!c.isAborted(this._abortController)?[2,this._loadingPromise]:(o=this._abortController,o&&o.abort(),i=c.createAbortController(),this._loadingPromise=c.create(function(e,o){var n={signal:i.signal};l._spriteSourceMap.clear(),l._getSourceAndStyle(t,n).then(e,o),c.onAbort(r,function(){i.abort()})}),this._abortController=i,[2,this._loadingPromise])})})},r.prototype.getStyleLayerId=function(e){return this.styleRepository.getStyleLayerId(e)},r.prototype.getPaintProperties=function(e){return this.styleRepository.getPaintProperties(e)},r.prototype.setPaintProperties=function(e,r){var t=this.styleRepository.isPainterDataDriven(e),o=this.styleRepository.setPaintProperties(e,r),i=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:o,paint:r}),(t||i)&&this.emit("layout-change",{layer:o,layout:this.styleRepository.getLayoutProperties(e)})},r.prototype.getLayoutProperties=function(e){return this.styleRepository.getLayoutProperties(e)},r.prototype.setLayoutProperties=function(e,r){var t=this.styleRepository.setLayoutProperties(e,r);this.emit("layout-change",{layer:t,layout:r})},r.prototype.getTileUrl=function(e,r,t){var o=this.tileServers[r%this.tileServers.length];return o=o.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,t.toString())},r.prototype.write=function(e,r){return r&&r.origin&&!this.styleUrl?(r.messages&&r.messages.push(new a("vectortilelayer:unsupported","VectorTileLayer ("+this.title+", "+this.id+") with style defined by JSON only are not supported",{layer:this})),null):this.inherited(arguments,[e,r])},r.prototype._getSourceAndStyle=function(e,r){return l(this,void 0,void 0,function(){var t;return n(this,function(o){switch(o.label){case 0:if(!e)throw new Error("invalid style!");return[4,U.loadMetadata(e,r)];case 1:return t=o.sent(),this._set("currentStyleInfo",{serviceUrl:t.serviceUrl,styleUrl:t.styleUrl,spriteUrl:t.spriteUrl,glyphsUrl:t.glyphsUrl,style:t.style,layerDefinition:t.layerDefinition}),"string"==typeof e?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",t.sourceNameToSource),this._set("primarySourceName",t.primarySourceName),this._set("styleRepository",new x(t.style,t)),this.read(t.layerDefinition,{origin:"service"}),[2]}})})},r.prototype._getDefaultAttribution=function(e){var r=e.match(/^https?:\/\/(basemaps|basemapsbeta|basemapsdev)\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),t=["OpenStreetMap_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84"];if(r){var o=r[3]&&r[3].toLowerCase();if(o)for(var i=r[2]||"",n=0,l=t;n<l.length;n++){var p=l[n];if(p.toLowerCase().indexOf(o)>-1)return d.normalize("//static.arcgis.com/attribution/Vector"+i+"/"+p)}}},r.prototype._getPrimarySource=function(){return this.sourceNameToSource&&this.primarySourceName in this.sourceNameToSource?this.sourceNameToSource[this.primarySourceName]:null},r.prototype._loadStyle=function(e){return l(this,void 0,void 0,function(){return n(this,function(r){return this._loadingPromise?[2,this._loadingPromise]:[2,this.loadStyle(null,e)]})})},i([f.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],r.prototype,"attributionDataUrl",null),i([f.property({type:["show","hide"]})],r.prototype,"listMode",void 0),i([f.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"capabilities",null),i([f.property({readOnly:!0})],r.prototype,"currentStyleInfo",void 0),i([f.property({json:{read:!1},readOnly:!0,type:h,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"fullExtent",null),i([f.property()],r.prototype,"style",void 0),i([f.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),i([f.property({type:["VectorTileLayer"]})],r.prototype,"operationalLayerType",void 0),i([f.property({readOnly:!0,dependsOn:["serviceUrl"]})],r.prototype,"parsedUrl",null),i([f.property({readOnly:!0,dependsOn:["currentStyleInfo"]})],r.prototype,"serviceUrl",null),i([f.property({type:m,dependsOn:["tileInfo"],readOnly:!0})],r.prototype,"spatialReference",null),i([f.property({readOnly:!0})],r.prototype,"styleRepository",void 0),i([f.property({readOnly:!0})],r.prototype,"sourceNameToSource",void 0),i([f.property({readOnly:!0})],r.prototype,"primarySourceName",void 0),i([f.property({type:String,readOnly:!0,dependsOn:["currentStyleInfo"],json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],r.prototype,"styleUrl",null),i([f.writer(["portal-item","web-document"],"styleUrl")],r.prototype,"writeStyleUrl",null),i([f.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"tileIndexType",null),i([f.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"tileIndexUrl",null),i([f.property({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:T,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"tileInfo",null),i([f.property({json:{read:!1},readOnly:!0,type:I.TilemapCache,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"tilemapCache",null),i([f.property({json:{read:!1},readOnly:!0,dependsOn:["sourceNameToSource","primarySourceName"]})],r.prototype,"tileServers",null),i([f.property({json:{read:!1},readOnly:!0,value:"vector-tile"})],r.prototype,"type",void 0),i([f.property({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],r.prototype,"url",void 0),i([f.property({readOnly:!0})],r.prototype,"version",void 0),i([f.reader("version",["version","currentVersion"])],r.prototype,"readVersion",null),i([f.property({readOnly:!0,dependsOn:["tileInfo"]})],r.prototype,"compatibleTileInfo256",null),i([f.property({readOnly:!0,dependsOn:["tileInfo"]})],r.prototype,"compatibleTileInfo512",null),r=i([f.subclass("esri.layers.VectorTileLayer")],r)}(f.declared(_.ScaleRangeLayer(v.ArcGISCachedService(g.ArcGISService(b.OperationalLayer(O.PortalLayer(u.MultiOriginJSONMixin(S))))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../support/arcgisLayerUrl */ "./node_modules/arcgis-js-api/layers/support/arcgisLayerUrl.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,o,l){Object.defineProperty(t,"__esModule",{value:!0});var s=n.getLogger("esri.layers.mixins.ArcGISService");t.ArcGISService=function(e){return function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r(t,e),Object.defineProperty(t.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");if(this.url){var e=l.parse(this.url);if(e&&e.title)return e.title}return this._get("title")||""},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{set:function(e){this._set("url",l.sanitizeUrl(e,s))},enumerable:!0,configurable:!0}),i([o.property({dependsOn:["url"]})],t.prototype,"title",null),i([o.property({type:String})],t.prototype,"url",null),t=i([o.subclass("esri.layers.mixins.ArcGISService")],t)}(o.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../portal/Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ../../portal/PortalItem */ "./node_modules/arcgis-js-api/portal/PortalItem.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,a,i,s,l,p,n,u,c,d){Object.defineProperty(e,"__esModule",{value:!0});var h=l.getLogger("esri.layers.mixins.PortalLayer");e.PortalLayer=function(e){return function(e){function l(){return null!==e&&e.apply(this,arguments)||this}return r(l,e),Object.defineProperty(l.prototype,"portalItem",{set:function(t){t!==this._get("portalItem")&&(this.removeOrigin("portal-item"),this._set("portalItem",t))},enumerable:!0,configurable:!0}),l.prototype.readPortalItem=function(t,e,r){if(e.itemId)return new d({id:e.itemId,portal:r&&r.portal})},l.prototype.writePortalItem=function(t,e){t&&t.id&&(e.itemId=t.id)},l.prototype.loadFromPortal=function(e,r){return i(this,void 0,void 0,function(){var o,i;return a(this,function(a){switch(a.label){case 0:if(!this.portalItem||!this.portalItem.id)return[2];a.label=1;case 1:return a.trys.push([1,4,,5]),[4,p.create(function(e){return Promise.all(/*! AMD require */[__webpack_require__.e("common"), __webpack_require__.e(104)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../../portal/support/layersLoader */ "./node_modules/arcgis-js-api/portal/support/layersLoader.js")]; (e).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})];case 2:return o=a.sent(),p.throwIfAborted(r),[4,o.load({instance:this,supportedTypes:e.supportedTypes,validateItem:e.validateItem,supportsData:e.supportsData},r)];case 3:return[2,a.sent()];case 4:throw i=a.sent(),h.warn("Failed to load layer ("+this.title+", "+this.id+") portal item ("+this.portalItem.id+")\n  "+i),i;case 5:return[2]}})})},l.prototype.read=function(t,e){var r=arguments;e&&(e.layer=this),this.inherited(r)},l.prototype.write=function(t,e){var r=e&&e.portal,o=this.portalItem&&this.portalItem.id&&(this.portalItem.portal||c.getDefault());return r&&o&&!n.hasSamePortal(o.restUrl,r.restUrl)?(e.messages&&e.messages.push(new s("layer:cross-portal","The layer '"+this.title+" ("+this.id+")' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer",{layer:this})),null):this.inherited(arguments)},o([u.property({type:d})],l.prototype,"portalItem",null),o([u.reader("web-document","portalItem",["itemId"])],l.prototype,"readPortalItem",null),o([u.writer("portalItem",{itemId:{type:String}})],l.prototype,"writePortalItem",null),l=o([u.subclass("esri.layers.mixins.PortalLayer")],l)}(u.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/SpriteSource.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/SpriteSource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,a,s,o,n,h,l,u,p){Object.defineProperty(t,"__esModule",{value:!0});var d=u.getLogger("esri.layers.support.SpriteSource"),c=function(){function e(e,t){this.baseURL=e,this.devicePixelRatio=t,this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded"}return Object.defineProperty(e.prototype,"spriteNames",{get:function(){var e=[];for(var t in this._spritesData)e.push(t);return e.sort(),e},enumerable:!0,configurable:!0}),e.prototype.getSpriteInfo=function(e){return this._spritesData[e]},e.prototype.load=function(e){return o(this,void 0,void 0,function(){var t;return s(this,function(r){switch(r.label){case 0:if(p.throwIfAborted(e),this.loadStatus="loading",!this.baseURL)return[2,p.resolve(this)];r.label=1;case 1:return r.trys.push([1,3,,4]),[4,this._loadSprites(e)];case 2:return r.sent(),this.loadStatus="loaded",[3,4];case 3:return t=r.sent(),this.loadStatus="failed",[3,4];case 4:return[2,this]}})})},e.prototype._loadSprites=function(e){var t=this;this._isRetina=this.devicePixelRatio>1.15;var r=this.baseURL,i=this._isRetina?"@2x":"",s=""+r+i+".png";return p.all([n(r+i+".json",e),n(s,a({responseType:"image"},e))]).then(function(e){var i=e[0],a=e[1],s=Object.keys(i.data);if(!s||0===s.length||1===s.length&&"_ssl"===s[0]||!a||!a.data)return t._spritesData=t.image=null,t.width=t.height=0,p.resolve(null);t._spritesData=i.data;var o=a.data,n=Math.max(l("esri-webgl-max-texture-size"),4096);if(o.width>n||o.height>n){var u="Sprite resource for style "+r+" is bigger than the maximum allowed of "+n+" pixels}";throw d.error(u),new h("SpriteSource",u)}t.width=o.width,t.height=o.height;var c=document.createElement("canvas"),g=c.getContext("2d");c.width=o.width,c.height=o.height,g.drawImage(o,0,0,o.width,o.height);for(var f,v=g.getImageData(0,0,o.width,o.height),w=new Uint8Array(v.data),S=0;S<w.length;S+=4)f=w[S+3]/255,w[S]=w[S]*f,w[S+1]=w[S+1]*f,w[S+2]=w[S+2]*f;t.image=w})},e}();t.default=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/vectorTileLayerLoader.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/vectorTileLayerLoader.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../config */ "./node_modules/arcgis-js-api/config.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../views/2d/engine/vectorTiles/style/VectorTileSource */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/VectorTileSource.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,l,s,o,n,i,u,a){function c(e,r){return s(this,void 0,void 0,function(){var t,s,o,n,i,a;return l(this,function(l){switch(l.label){case 0:return t={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:""},s="string"==typeof e?[e,null]:[null,e.jsonUrl],o=s[0],n=s[1],i=o?u.urlToObject(o):null,[4,y(t,"esri",e,n,r)];case 1:return l.sent(),a={layerDefinition:t.validatedSource,url:o,parsedUrl:i,serviceUrl:t.sourceUrl,style:t.style,styleUrl:t.styleUrl,spriteUrl:t.style.sprite&&p(t.styleBase,t.style.sprite),glyphsUrl:t.style.glyphs&&p(t.styleBase,t.style.glyphs),sourceNameToSource:t.sourceNameToSource,primarySourceName:t.primarySourceName},f(a.spriteUrl),f(a.glyphsUrl),[2,a]}})})}function f(e){if(e){var r=u.getOrigin(e);U&&-1===U.indexOf(r)&&U.push(r)}}function p(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];for(var t=void 0,l=0;l<e.length;++l)if(u.isProtocolRelative(e[l])){if(t){var s=t.split("://")[0];t=s+":"+e[l].trim()}}else t=u.isAbsolute(e[l])?e[l]:u.join(t,e[l]);return u.removeTrailingSlash(t)}function y(e,r,o,a,c){return s(this,void 0,void 0,function(){var s,p,y,S,U,g;return l(this,function(l){switch(l.label){case 0:return i.throwIfAborted(c),"string"!=typeof o?[3,2]:(S=u.normalize(o),f(S),U=u.urlToObject(S),[4,n(U.path,t({query:{f:"json"},responseType:"json"},c))]);case 1:return y=l.sent(),s=S,p=S,[3,3];case 2:y={data:o},s=o.jsonUrl||null,p=a,l.label=3;case 3:return g=y.data,y.ssl&&(s&&(s=s.replace(/^http:/i,"https:")),p&&(p=p.replace(/^http:/i,"https:"))),d(g)?(e.styleUrl=s||null,[2,m(e,g,p,c)]):h(g)?e.sourceUrl?[2,v(e,g,p,!1,r,c)]:(e.sourceUrl=s||null,[2,v(e,g,p,!0,r,c)]):[2,i.reject("You must specify the URL or the JSON for a service or for a style.")]}})})}function d(e){return!!e.sources}function h(e){return!d(e)}function m(e,r,t,o){return s(this,void 0,void 0,function(){var s,n,a,c,d,h;return l(this,function(l){switch(l.label){case 0:return s=t?u.removeFile(t):u.appBaseUrl,(e.styleBase=s,e.style=r,e.styleUrl&&f(e.styleUrl),n=[],r.sources&&r.sources.esri)?(a=r.sources.esri,a.url?[4,y(e,"esri",p(s,a.url),void 0,o)]:[3,2]):[3,3];case 1:return l.sent(),[3,3];case 2:n.push(y(e,"esri",a,s,o)),l.label=3;case 3:for(c=0,d=Object.keys(r.sources);c<d.length;c++)"esri"!==(h=d[c])&&"vector"===r.sources[h].type&&(r.sources[h].url?n.push(y(e,h,p(s,r.sources[h].url),void 0,o)):n.push(y(e,h,r.sources[h],s,o)));return[4,i.all(n)];case 4:return l.sent(),[2]}})})}function v(e,r,t,o,n,c){return s(this,void 0,void 0,function(){var s,d,h,m;return l(this,function(l){if(s=t?u.removeTrailingSlash(t)+"/":u.appBaseUrl,d=S(r,s),h=new a(n,s,d),!o&&e.primarySourceName in e.sourceNameToSource){if(m=e.sourceNameToSource[e.primarySourceName],!m.isCompatibleWith(h))return[2,i.resolve()];null!=h.fullExtent&&(null!=m.fullExtent?m.fullExtent.union(h.fullExtent):m.fullExtent=h.fullExtent.clone()),m.tileInfo.lods.length<h.tileInfo.lods.length&&(m.tileInfo=h.tileInfo)}return o?(e.sourceBase=s,e.source=r,e.validatedSource=d,e.primarySourceName=n,e.sourceUrl&&f(e.sourceUrl)):f(s),e.sourceNameToSource[n]=h,e.style?[2]:null==r.defaultStyles?[2,i.reject()]:"string"==typeof r.defaultStyles?[2,y(e,"",p(s,r.defaultStyles,"root.json"),void 0,c)]:[2,y(e,"",r.defaultStyles,p(s,"root.json"),c)]})})}function S(e,r){if(e.hasOwnProperty("tileInfo"))return e;for(var t={xmin:-20037507.067161843,ymin:-20037507.067161843,xmax:20037507.067161843,ymax:20037507.067161843,spatialReference:{wkid:102100}},l=78271.51696400007,s=295828763.7957775,o=[],n=e.hasOwnProperty("minzoom")?parseFloat(e.minzoom):0,i=e.hasOwnProperty("maxzoom")?parseFloat(e.maxzoom):16,u=0;u<=i;u++)u>=n&&o.push({level:u,scale:s,resolution:l}),l/=2,s/=2;for(var a=0,c=e.tiles;a<c.length;a++){f(p(r,c[a]))}return{capabilities:"TilesOnly",initialExtent:t,fullExtent:t,minScale:o[0].scale,maxScale:o[o.length-1].scale,tiles:e.tiles,tileInfo:{rows:512,cols:512,dpi:96,format:"pbf",origin:{x:-20037508.342787,y:20037508.342787},lods:o,spatialReference:{wkid:102100}}}}Object.defineProperty(r,"__esModule",{value:!0});var U=o.defaults&&o.defaults.io.corsEnabledServers;r.loadMetadata=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/portal/support/jsonContext.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/jsonContext.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../Portal */ "./node_modules/arcgis-js-api/portal/Portal.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o){function l(e){return{origin:"portal-item",url:t.urlToObject(e.itemUrl),portal:e.portal||o.getDefault()}}Object.defineProperty(r,"__esModule",{value:!0}),r.createForItem=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js ***!
  \*********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_,e){function n(_,e){return _%=e,_>=0?_:_+e}function t(_){return n(_*e.C_RAD_TO_256,256)}function r(_){return n(_*e.C_DEG_TO_256,256)}function u(_){return Math.log(_)*i}function o(_){return _*_}function C(_,e,n){return _*(1-n)+e*n}function I(_,e,n){return _>=e&&_<=n||_>=n&&_<=e}Object.defineProperty(e,"__esModule",{value:!0}),e.C_INFINITY=Number.POSITIVE_INFINITY,e.C_PI=Math.PI,e.C_2PI=2*e.C_PI,e.C_PI_BY_2=e.C_PI/2,e.C_RAD_TO_256=128/e.C_PI,e.C_256_TO_RAD=e.C_PI/128,e.C_DEG_TO_256=256/360,e.C_DEG_TO_RAD=e.C_PI/180,e.C_SQRT2=1.414213562,e.C_SQRT2_INV=1/e.C_SQRT2;var i=1/Math.LN2;e.positiveMod=n,e.radToByte=t,e.degToByte=r,e.log2=u,e.sqr=o,e.interpolate=C,e.between=I}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SchemaHelper.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/SchemaHelper.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../layers/support/LOD */ "./node_modules/arcgis-js-api/layers/support/LOD.js"),__webpack_require__(/*! ../../../../layers/support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,t,r){return function(){function e(e,i){this.lockedSchemaPixelSize=e,this.isGCS=i}return e.prototype.getLevelRowColumn=function(e){return this.isGCS?[e[0],e[1]>>1,e[2]>>1]:256===this.lockedSchemaPixelSize&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e},e.prototype.adjustLevel=function(e){return this.isGCS?e:256===this.lockedSchemaPixelSize?e>0?e-1:0:e},e.prototype.getShift=function(e,i){var t=0,r=0;return(256===this.lockedSchemaPixelSize||this.isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(r=i)),[t,r]},e.prototype.getScale=function(e){if(this.isGCS){if(512===this.lockedSchemaPixelSize)return 4}else if(256===this.lockedSchemaPixelSize&&0===e)return 1;return 2},e.create256x256CompatibleTileInfo=function(e){if(!e)return null;if(256===e.size[0]&&256===e.size[1])return e;for(var i=e.spatialReference.isGeographic,o=[],l=e.lods.length,n=0;n<l;n++){var s=e.lods[n],a=i?s.resolution:2*s.resolution;o.push(new t({level:s.level,scale:s.scale,resolution:a}))}return new r({size:[256,256],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:o})},e.create512x512CompatibleTileInfo=function(e){if(!e)return null;if(256===e.size[0]||256===e.size[1])return null;for(var i=[],o=e.lods.length,l=0;l<o;l++){var n=e.lods[l],s=.5*n.resolution;i.push(new t({level:n.level,scale:n.scale,resolution:s}))}return new r({size:[512,512],dpi:e.dpi,format:e.format,compressionQuality:e.compressionQuality,origin:e.origin,spatialReference:e.spatialReference,lods:i})},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../layers/support/TilemapCache */ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js"),__webpack_require__(/*! ../../tiling/TileKey */ "./node_modules/arcgis-js-api/views/2d/tiling/TileKey.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o){return function(){function e(e){if(e instanceof i.TilemapCache)this._tilemapCache=e;else{if(!(e&&"index"in e))throw new Error("Invalid tilemap!");this._tilemap=e.index}}return e.prototype.dataKey=function(e,t){if(this._tilemapCache){var i=e.level,l=e.row,a=e.col,n=new o(e);return this._tilemapCache.fetchAvailabilityUpsample(i,l,a,n,t).then(function(){return n}).catch(function(e){if(r.isAbortError(e))throw e;return n.level=i,n.row=l,n.col=a,n})}return this._getIndexedDataKey(e)},e.prototype.forEach=function(e,t,r,i,o){this._callback=o,this._maxLevel=t+e,this._forEach(this._tilemap,t,r,i)},e.prototype._forEach=function(e,t,r,i){0!==e&&(this._callback(t,r,i),t!==this._maxLevel&&"object"==typeof e&&(this._forEach(e[0],t+1,2*r,2*i),this._forEach(e[1],t+1,2*r,2*i+1),this._forEach(e[2],t+1,2*r+1,2*i),this._forEach(e[3],t+1,2*r+1,2*i+1)))},e.prototype._getIndexedDataKey=function(e){var t=[e];if(e.level<0||e.row<0||e.col<0||e.row>>e.level>0||e.col>>e.level>0)return r.resolve(null);for(var i=e;0!==i.level;)i=new o(i.level-1,i.row>>1,i.col>>1,i.world),t.push(i);var l,a,n=this._tilemap,c=t.pop();if(1===n)return r.resolve(c);for(;t.length;)if(l=t.pop(),a=(1&l.col)+((1&l.row)<<1),n){if(0===n[a]){c=null;break}if(1===n[a]){c=l;break}c=l,n=n[a]}return r.resolve(c)},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/VectorTileSource.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/VectorTileSource.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../../../../layers/support/serviceTileInfoProperty */ "./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js"),__webpack_require__(/*! ../../../../../layers/support/TilemapCache */ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js"),__webpack_require__(/*! ../TileIndex */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/TileIndex.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,l,n,o,s,a,p){return function(){function e(e,t,i){this.tileMapURL="",this.tilemapCache=null,this.parsedUrl=null,this.tileInfo=null,this.capabilities=null,this.tileIndex=null,this.fullExtent=null,this.name=e,this.sourceUrl=t,t&&(this.parsedUrl=n.urlToObject(this.sourceUrl));var r=l.clone(i),u=r.tiles;t&&u.forEach(function(e,i){n.isAbsolute(e)||(u[i]=n.join(t,e))}),this.tileServers=u,i.tileMap&&(this.tileMapURL=n.join(t,i.tileMap));var h=i.capabilities&&i.capabilities.split(",").map(function(e){return e.toLowerCase().trim()}),c=!!i.exportTilesAllowed,f=!!h&&-1!==h.indexOf("tilemap"),d=c&&i.hasOwnProperty("maxExportTilesCount")?i.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:c,supportsTileMap:f},exportTiles:c?{maxExportTilesCount:+d}:null},this.tileInfo=s.readServiceTileInfo(r.tileInfo,r,null,{ignoreMinMaxLOD:!0}),f&&(this.type="vector-tile",this.tilemapCache=new a.TilemapCache({layer:this}),this.tilemapCache&&(this.tileIndex=new p(this.tilemapCache))),this.fullExtent=o.fromJSON(i.fullExtent)}return e.prototype.getRefKey=function(e,t){return r(this,void 0,void 0,function(){return i(this,function(i){return this.tileIndex?[2,this.tileIndex.dataKey(e,t)]:[2,e]})})},e.prototype.getSourceTileUrl=function(e,t,i){var r=this.tileServers[t%this.tileServers.length];return r=r.replace(/\{z\}/gi,e.toString()).replace(/\{y\}/gi,t.toString()).replace(/\{x\}/gi,i.toString())},e.prototype.isCompatibleWith=function(e){var t=this.tileInfo,i=e.tileInfo;if(!t.spatialReference.equals(i.spatialReference))return!1;if(!t.origin.equals(i.origin))return!1;if(Math.round(t.dpi)!==Math.round(i.dpi))return!1;for(var r=t.lods,l=i.lods,n=Math.min(r.length,l.length),o=0;o<n;o++){var s=r[o],a=l[o];if(s.level!==a.level||Math.round(s.scale)!==Math.round(a.scale))return!1}return!0},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/tileInfoUtils.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/tileInfoUtils.js ***!
  \*********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../layers/support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,r){function s(e,l){if(e===l)return!0;if(!e&&null!=l)return!1;if(null!=e&&!l)return!1;if(!e.spatialReference.equals(l.spatialReference)||e.dpi!==l.dpi)return!1;var r=e.origin,s=l.origin;if(Math.abs(r.x-s.x)>=o||Math.abs(r.y-s.y)>=o)return!1;var n,i,a=e.lods[0].scale,t=l.lods[0].scale;a>t?(n=e,i=l):(i=e,n=l);for(var u=n.lods[0].scale;u>=i.lods[i.lods.length-1].scale-o;u/=2)if(Math.abs(u-i.lods[0].scale)<o)return!0;return!1}function n(e,l){if(e===l)return e;if(!e&&null!=l)return l;if(null!=e&&!l)return e;for(var s=e.size[0],n=e.format,o=e.dpi,i={x:e.origin.x,y:e.origin.y},a=e.spatialReference.toJSON(),t=e.lods[0].scale>l.lods[0].scale?e.lods[0]:l.lods[0],u=e.lods[e.lods.length-1].scale<=l.lods[l.lods.length-1].scale?e.lods[e.lods.length-1]:l.lods[l.lods.length-1],d=t.scale,f=t.resolution,c=u.scale,p=[],g=d,h=f,v=0;g>c;)p.push({level:v,resolution:h,scale:g}),v++,g/=2,h/=2;return new r({size:[s,s],dpi:o,format:n||"pbf",origin:i,lods:p,spatialReference:a})}Object.defineProperty(l,"__esModule",{value:!0});var o=1e-6;l.areSchemasOverlapping=s,l.unionTileInfos=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_,T){Object.defineProperty(T,"__esModule",{value:!0}),T.WEBGL_MAX_STOPS=8,T.WEBGL_MAX_INNER_STOPS=T.WEBGL_MAX_STOPS-2,T.NAN_MAGIC_NUMBER=1e-30,T.EXTRUDE_SCALE=64,T.PICTURE_FILL_COLOR=4294967295,T.TILE_SIZE=512,T.RASTER_TILE_SIZE=256,T.ANGLE_FACTOR_256=256/360,T.DEBUG_LABELS=!1,T.COLLISION_BUCKET_SIZE=128,T.DOT_DENSITY_MAX_FIELDS=8,T.COLLISION_MAX_ZOOM_DELTA=3,T.COLLISION_EARLY_REJECT_BUCKET_SIZE=16,T.COLLISION_BOX_PADDING=16,T.COLLISION_TILE_BOX_SIZE=T.TILE_SIZE/T.COLLISION_BUCKET_SIZE,T.COLLISION_PLACEMENT_PADDING=8,T.HEURISTIC_GLYPHS_PER_LINE=50,T.HEURISTIC_GLYPHS_PER_FEATURE=10,T.GLYPH_SIZE=24,T.TEXT_LINE_HEIGHT=1.2*T.GLYPH_SIZE,T.TEXT_MAX_WIDTH=10*T.GLYPH_SIZE,T.TEXT_SPACING=0,T.AVERAGE_GLYPH_MOSAIC_ITEM={metrics:{width:15,height:17,left:0,top:-7,advance:14}},T.ATTRIBUTE_STORE_TEXTURE_SIZE=1024,T.TEXTURE_BINDING_SPRITE_ATLAS=0,T.TEXTURE_BINDING_GLYPH_ATLAS=0,T.TEXTURE_BINDING_BITMAP=0,T.TEXTURE_BINDING_ATTRIBUTE_DATA_0=1,T.TEXTURE_BINDING_ATTRIBUTE_DATA_1=2,T.TEXTURE_BINDING_ATTRIBUTE_DATA_2=3,T.TEXTURE_BINDING_ATTRIBUTE_DATA_3=4,T.TEXTURE_BINDING_HIGHLIGHT_0=5,T.TEXTURE_BINDING_HIGHLIGHT_1=6,T.TEXTURE_BINDING_RENDERER_0=5,T.TEXTURE_BINDING_RENDERER_1=6,T.ATTRIBUTE_DATA_FILTER_FLAGS=0,T.ATTRIBUTE_DATA_ANIMATION=1,T.ATTRIBUTE_DATA_VV=2,T.ATTRIBUTE_DATA_DD0=3,T.ATTRIBUTE_DATA_DD1=3,T.MAX_FILTERS=2,T.HIGHLIGHT_FLAG=1,T.FILTER_FLAG_0=2,T.EFFECT_FLAG_0=4,T.THIN_LINE_THRESHOLD=2.5,T.HITTEST_SEARCH_SIZE=24,T.MAX_ANIMATION_TIME_MS=2e3,T.VTL_TEXTURE_BINDING_UNIT_SPRITES=5,T.VTL_TEXTURE_BINDING_UNIT_GLYPHS=6,T.VTL_HIGH_RES_CUTOFF=1.15,T.MAX_GPU_UPLOADS_PER_FRAME=2}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=53.js.map