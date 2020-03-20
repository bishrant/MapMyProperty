(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/LRUCache":"./node_modules/arcgis-js-api/core/LRUCache.js",
	"arcgis-js-api/core/MemCache":"./node_modules/arcgis-js-api/core/MemCache.js",
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/layers/ElevationLayer":"./node_modules/arcgis-js-api/layers/ElevationLayer.js",
	"arcgis-js-api/layers/mixins/ArcGISCachedService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js",
	"arcgis-js-api/layers/mixins/ArcGISService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"esri/layers/support/LercWorker":"./node_modules/arcgis-js-api/layers/support/LercWorker.js",
	"arcgis-js-api/layers/support/LercWorker":"./node_modules/arcgis-js-api/layers/support/LercWorker.js",
	"arcgis-js-api/layers/support/serviceTileInfoProperty":"./node_modules/arcgis-js-api/layers/support/serviceTileInfoProperty.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "./node_modules/arcgis-js-api/core/requireUtils.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/requireUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./deprecate */ "./node_modules/arcgis-js-api/core/deprecate.js"),__webpack_require__(/*! ./Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ./promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i){function o(e,r){return t.deprecatedFunction(s,"when",{moduleName:"requireUtils",replacement:"Use `promiseUtils.create()` instead.",version:"4.10",warnOnce:!0}),Array.isArray(r)?i.create(function(t){e(r,function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];t(e)})}):o(e,[r]).then(function(e){return e[0]})}function c(e,r,t){return r.toAbsMid?r.toAbsMid(e):t.id.replace(/\/[^\/]*$/gi,"/")+e}Object.defineProperty(r,"__esModule",{value:!0});var s=n.getLogger("esri.core.requireUtils");r.when=o,r.getAbsMid=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/ElevationLayer.js":
/*!*************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/ElevationLayer.js ***!
  \*************************************************************/
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
             * @instance
             * @ignore
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/deprecate */ "./node_modules/arcgis-js-api/core/deprecate.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/HeightModelInfo */ "./node_modules/arcgis-js-api/geometry/HeightModelInfo.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/ArcGISCachedService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISCachedService.js"),__webpack_require__(/*! ./mixins/ArcGISService */ "./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./support/LercWorker */ "./node_modules/arcgis-js-api/layers/support/LercWorker.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,a,p,l,s,c,u,y,d,h,v,f,m,g,S,w,b,I,x){var T=c.getLogger("esri.layers.ElevationLayer");return function(r){function c(e){var t=r.call(this,e)||this;return t.copyright=null,t.heightModelInfo=null,t.path=null,t.opacity=1,t.operationalLayerType="ArcGISTiledElevationServiceLayer",t.sourceJSON=null,t.type="elevation",t.url=null,t.version=null,t._lercWorker=x.acquireInstance(),t}return o(c,r),c.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?t({url:e},r):e},c.prototype.destroy=function(){x.releaseInstance(this._lercWorker),this._lercWorker=null},Object.defineProperty(c.prototype,"minScale",{get:function(){},set:function(e){this.constructed&&T.warn(this.declaredClass+".minScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),Object.defineProperty(c.prototype,"maxScale",{get:function(){},set:function(e){this.constructed&&T.warn(this.declaredClass+".maxScale support has been removed (since 4.5)")},enumerable:!0,configurable:!0}),c.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=9.3),t},c.prototype.load=function(e){var r=this,t=u.isSome(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:function(e){for(var r=0;r<e.typeKeywords.length;r++)if("elevation 3d layer"===e.typeKeywords[r].toLowerCase())return!0;throw new s("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).then(function(){return r._fetchImageService(t)},function(){return r._fetchImageService(t)})),this.when()},c.prototype.fetchTile=function(e,r,t,o){var i=this;void 0===o&&(o={}),null!=o&&"number"==typeof o&&(l.deprecated(T,"Passing 'noDataValue' directly as a parameter",{replacement:"use { noDataValue } options object instead",version:"4.12"}),o={noDataValue:o});var n={responseType:"array-buffer",signal:o.signal},a={noDataValue:o.noDataValue,returnFileInfo:!0};return this.load().then(function(){return i._fetchTileAvailability(e,r,t,o)}).then(function(){return p(i.getTileUrl(e,r,t),n)}).then(function(e){return i._lercWorker.decode(e.data,a,o.signal)}).then(function(e){return{values:e.pixelData,width:e.width,height:e.height,maxZError:e.fileInfo.maxZError,noDataValue:e.noDataValue,minValue:e.minValue,maxValue:e.maxValue}})},c.prototype.getTileUrl=function(e,r,o){var i=!this.tilemapCache&&this.supportsBlankTile,n=h.objectToQuery(t({},this.parsedUrl.query,{blankTile:!i&&null}));return this.parsedUrl.path+"/tile/"+e+"/"+r+"/"+o+(n?"?"+n:"")},c.prototype.queryElevation=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).query(t,e,r)})},c.prototype.createElevationSampler=function(e,r){var t=this;return this._importElevationQuery().then(function(o){return(new o.ElevationQuery).createSampler(t,e,r)})},c.prototype._fetchTileAvailability=function(e,r,t,o){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,o):d.resolve("unknown")},c.prototype._fetchImageService=function(e){return a(this,void 0,void 0,function(){var r,o;return n(this,function(i){switch(i.label){case 0:return this.sourceJSON?[2,this.sourceJSON]:(r={query:t({f:"json"},this.parsedUrl.query),responseType:"json",signal:e},[4,p(this.parsedUrl.path,r)]);case 1:return o=i.sent(),o.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=o.data,this.read(o.data,{origin:"service",url:this.parsedUrl}),[2]}})})},c.prototype._importElevationQuery=function(){return d.create(function(r){__webpack_require__.e(/*! AMD require */ 64).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./support/ElevationQuery */ "./node_modules/arcgis-js-api/layers/support/ElevationQuery.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})},i([v.property({json:{read:{source:"copyrightText"}}})],c.prototype,"copyright",void 0),i([v.property({readOnly:!0,type:f})],c.prototype,"heightModelInfo",void 0),i([v.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),i([v.property({type:["show","hide"]})],c.prototype,"listMode",void 0),i([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],c.prototype,"minScale",null),i([v.property({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],c.prototype,"maxScale",null),i([v.property({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],c.prototype,"opacity",void 0),i([v.property({type:["ArcGISTiledElevationServiceLayer"]})],c.prototype,"operationalLayerType",void 0),i([v.property()],c.prototype,"sourceJSON",void 0),i([v.property({json:{read:!1},value:"elevation",readOnly:!0})],c.prototype,"type",void 0),i([v.property(I.url)],c.prototype,"url",void 0),i([v.property()],c.prototype,"version",void 0),i([v.reader("version",["currentVersion"])],c.prototype,"readVersion",null),c=i([v.subclass("esri.layers.ElevationLayer")],c)}(v.declared(g.ArcGISCachedService(S.ArcGISService(w.OperationalLayer(b.PortalLayer(y.MultiOriginJSONMixin(m)))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/LercWorker.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/LercWorker.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,o,i,u,c){function s(){return o.create(function(t){return __webpack_require__.e(/*! AMD require */ 127).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./rasterFormats/LercCodec */ "./node_modules/arcgis-js-api/layers/support/rasterFormats/LercCodec.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})}function a(e){var t=p.get(e);return t||(t={instance:new h(e),ref:0},p.set(e,t)),++t.ref,t.instance}function d(e){if(null!=e){var t=e.scheduler,r=p.get(t);r&&--r.ref<=0&&(r.instance.destroy(),p.delete(t))}}function f(){return new l}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(){}return e.prototype._decode=function(e){return s().then(function(t){var r=t.decode,n=r(e.buffer,e.options);return{result:n,transferList:[n.pixelData.buffer]}})},e}(),h=function(t){function r(r){var n=t.call(this)||this;return n.scheduler=r,n._threadInitialized=o.create(function(t){u.open(i.getAbsMid("./LercWorker",e,c),{strategy:"dedicated",scheduler:r}).then(function(e){void 0===n._thread?(n._thread=e,t()):(e.close(),t())},function(){return t()})}),n}return n(r,t),r.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},Object.defineProperty(r.prototype,"test",{get:function(){return{threadInitialized:this._threadInitialized}},enumerable:!0,configurable:!0}),r.prototype.decode=function(e,t,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_decode",{buffer:e,options:t},{transferList:[e],signal:r}):s().then(function(n){var i=n.decode;return o.throwIfAborted(r),i(e,t)}):o.resolve(null)},r}(l);t.LercWorkerMaster=h;var p=new Map;t.acquireInstance=a,t.releaseInstance=d,t.default=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ })

}]);
//# sourceMappingURL=39.js.map