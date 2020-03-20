(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/support/Tilemap":"./node_modules/arcgis-js-api/layers/support/Tilemap.js",
	"arcgis-js-api/layers/support/TilemapCache":"./node_modules/arcgis-js-api/layers/support/TilemapCache.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

/***/ "./node_modules/arcgis-js-api/layers/support/Tilemap.js":
/*!**************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/Tilemap.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,e,a,n,o,l){function r(t){return t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}function h(t){var i;if("vector-tile"===t.service.type)i=t.service.url+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height;else{var e=t.service.tileServers;i=(e&&e.length?e[t.row%e.length]:t.service.url)+"/tilemap/"+t.level+"/"+t.row+"/"+t.col+"/"+t.width+"/"+t.height}var a=t.service.query;return a&&(i=i+"?"+a),i}Object.defineProperty(i,"__esModule",{value:!0});var s=function(){function t(){this.location={left:0,top:0,width:0,height:0},this._allAvailability="unknown",this.byteSize=40}return t.prototype.getAvailability=function(t,i){if("unknown"!==this._allAvailability)return this._allAvailability;var e=(t-this.location.top)*this.location.width+(i-this.location.left),a=e%8,n=e>>3,o=this._tileAvailabilityBitSet;return n<0||n>o.length?"unknown":o[n]&1<<a?"available":"unavailable"},t.prototype._updateFromData=function(t){for(var i=this.location.width,e=this.location.height,a=!0,n=!0,o=Math.ceil(i*e/8),l=new Uint8Array(o),r=0,h=0;h<t.length;h++){var s=h%8;t[h]?(n=!1,l[r]|=1<<s):a=!1,7===s&&++r}n?this._allAvailability="unavailable":a?this._allAvailability="available":(this._allAvailability="unknown",this._tileAvailabilityBitSet=l,this.byteSize+=l.length)},t.fromDefinition=function(i,l){var r=i.service.request||a,s=i.row,c=i.col,f=i.width,u=i.height,d={query:{f:"json"}};return l=l?e({},d,l):d,r(h(i),l).then(function(t){return t.data}).catch(function(t){if(t&&t.details&&422===t.details.httpStatus)return{location:{top:s,left:c,width:f,height:u},valid:!0,data:function(){return n.constant(f*u,0)}()};throw t}).then(function(i){if(i.location&&(i.location.top!==s||i.location.left!==c||i.location.width!==f||i.location.height!==u))throw new o("tilemap:location-mismatch","Tilemap response for different location than requested",{response:i,definition:{top:s,left:c,width:f,height:u}});return t.fromJSON(i)})},t.fromJSON=function(i){t.validateJSON(i);var e=new t;return e.location=Object.freeze(l.clone(i.location)),e._updateFromData(i.data),Object.freeze(e)},t.validateJSON=function(t){if(!t||!t.location)throw new o("tilemap:missing-location","Location missing from tilemap response");if(!1===t.valid)throw new o("tilemap:invalid","Tilemap response was marked as invalid");if(!t.data)throw new o("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(t.data))throw new o("tilemap:data-mismatch","Data must be an array of numbers");if(t.data.length!==t.location.width*t.location.height)throw new o("tilemap:data-mismatch","Number of data items does not match width/height of tilemap")},t}();i.Tilemap=s,i.tilemapDefinitionId=r,i.tilemapDefinitionUrl=h,i.default=s}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/TilemapCache.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/TilemapCache.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/LRUCache */ "./node_modules/arcgis-js-api/core/LRUCache.js"),__webpack_require__(/*! ../../core/PooledArray */ "./node_modules/arcgis-js-api/core/PooledArray.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/scheduling */ "./node_modules/arcgis-js-api/core/scheduling.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Tilemap */ "./node_modules/arcgis-js-api/layers/support/Tilemap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,l,a,n,o,s,c,p,u,h,f,v,y,m,b,d,_){Object.defineProperty(t,"__esModule",{value:!0}),t.TILEMAP_SIZE_EXP=5;var g=u.getLogger("esri.layers.support.TilemapCache"),T=function(e){function s(t){var i=e.call(this,t)||this;return i._handles=new p,i._pendingTilemapRequests={},i._availableLevels={},i.levels=5,i.cacheByteSize=2097152,i.request=o,i._prefetchingEnabled=!0,i}r(s,e),u=s,s.prototype.initialize=function(){var e=this;this._tilemapCache=new h(this.cacheByteSize),this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],function(){return e._initializeTilemapDefinition()}),b.init(this,"layer.tileInfo.lods",function(t){return e._initializeAvailableLevels(t)},!0)]),this._initializeTilemapDefinition()},s.prototype.destroy=function(){this._handles&&(this._handles.destroy(),this._handles=null)},s.prototype.castLevels=function(e){return e<=2?(g.error("Minimum levels for Tilemap is 3, but got ",e),3):e},Object.defineProperty(s.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0}),s.prototype.fetchTilemap=function(e,t,r,l){var a=this;if(!this._availableLevels[e])return v.reject(new c("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"));var n=this._tmpTilemapDefinition,o=this._tilemapFromCache(e,t,r,n);if(o)return v.resolve(o);var s=l&&l.signal;return l=i({},l,{signal:null}),v.create(function(e,t){v.onAbort(s,function(){return t(v.createAbortError())});var i=_.tilemapDefinitionId(n),r=a._pendingTilemapRequests[i];if(!r){r=_.Tilemap.fromDefinition(n,l).then(function(e){return a._tilemapCache.put(i,e,e.byteSize),e});var o=function(){return delete a._pendingTilemapRequests[i]};a._pendingTilemapRequests[i]=r,r.then(o,o)}r.then(e,t)})},s.prototype.getAvailability=function(e,t,i){if(!this._availableLevels[e])return"unavailable";var r=this._tilemapFromCache(e,t,i,this._tmpTilemapDefinition);return r?r.getAvailability(t,i):"unknown"},s.prototype.getAvailabilityUpsample=function(e,t,i,r){r.level=e,r.row=t,r.col=i;var l=this.layer.tileInfo;for(l.updateTileInfo(r);;){var a=this.getAvailability(r.level,r.row,r.col);if("unavailable"!==a)return a;if(!l.upsampleTile(r))return"unavailable"}},s.prototype.fetchAvailability=function(e,t,i,r){return this._availableLevels[e]?this.fetchTilemap(e,t,i,r).catch(function(e){return e}).then(function(r){if(r instanceof _.Tilemap){var l=r.getAvailability(t,i);return"unavailable"===l?v.reject(new c("tile-map:tile-unavailable","Tile is not available",{level:e,row:t,col:i})):l}if(v.isAbortError(r))throw r;return"unknown"}):v.reject(new c("tilemap-cache:level-unavailable","Level "+e+" is unavailable in the service"))},s.prototype.fetchAvailabilityUpsample=function(e,t,i,r,l){var a=this;r.level=e,r.row=t,r.col=i;var n=this.layer.tileInfo;n.updateTileInfo(r);var o=this.fetchAvailability(e,t,i,l).catch(function(e){if(v.isAbortError(e))throw e;if(n.upsampleTile(r))return a.fetchAvailabilityUpsample(r.level,r.row,r.col,r);throw e});return this._fetchAvailabilityUpsamplePrefetch(r.id,e,t,i,l,o),o},s.prototype._fetchAvailabilityUpsamplePrefetch=function(e,t,r,l,o,s){return n(this,void 0,void 0,function(){var n,c,p,h,f,m,b,d,_,g,T;return a(this,function(a){switch(a.label){case 0:if(!this._prefetchingEnabled)return[2];if(n="prefetch-"+e,this._handles.has(n))return[2];c=v.createAbortController(),s.then(function(){return c.abort()},function(){return c.abort()}),p=!1,h={remove:function(){p||(p=!0,c.abort())}},this._handles.add(h,n),a.label=1;case 1:return a.trys.push([1,3,,4]),[4,y.waitTicks(10,c.signal)];case 2:return a.sent(),[3,4];case 3:return f=a.sent(),[3,4];case 4:if(p||(p=!0,this._handles.remove(n)),v.isAborted(c))return[2];for(m={id:e,level:t,row:r,col:l},b=i({},o,{signal:c.signal}),d=this.layer.tileInfo,_=function(e){var t=g.fetchAvailability(m.level,m.row,m.col,b);u._prefetches.push(t);var i=function(){u._prefetches.removeUnordered(t)};t.then(i,i)},g=this,T=0;u._prefetches.length<u._maxPrefetch&&d.upsampleTile(m);++T)_(T);return[2]}})})},s.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var e=this.layer.parsedUrl,t=e.query;this._tilemapCache.clear(),this._tmpTilemapDefinition={service:{url:e.path,query:t?m.objectToQuery(t):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}},s.prototype._tilemapFromCache=function(e,t,i,r){var l=this._getTilemapDefinition(e,t,i,r),a=_.tilemapDefinitionId(l);return this._tilemapCache.get(a)},s.prototype._getTilemapDefinition=function(e,i,r,l){l.level=e;var a=e>t.TILEMAP_SIZE_EXP;return l.row=a?i-i%this.size:i,l.col=a?r-r%this.size:r,l},s.prototype._initializeAvailableLevels=function(e){var t=this;this._availableLevels={},e&&e.forEach(function(e){return t._availableLevels[e.level]=!0})},Object.defineProperty(s.prototype,"test",{get:function(){var e=this;return{get prefetchingEnabled(){return e._prefetchingEnabled},set prefetchingEnabled(t){e._prefetchingEnabled=t},hasTilemap:function(t,i,r){return!!e._tilemapFromCache(t,i,r,e._tmpTilemapDefinition)}}},enumerable:!0,configurable:!0});var u;return s._maxPrefetch=4,s._prefetches=new f({initialSize:u._maxPrefetch}),l([d.property({constructOnly:!0,type:Number})],s.prototype,"levels",void 0),l([d.cast("levels")],s.prototype,"castLevels",null),l([d.property({readOnly:!0,dependsOn:["levels"],type:Number})],s.prototype,"size",null),l([d.property({constructOnly:!0,type:Number})],s.prototype,"cacheByteSize",void 0),l([d.property({constructOnly:!0})],s.prototype,"layer",void 0),l([d.property({constructOnly:!0})],s.prototype,"request",void 0),s=u=l([d.subclass("esri.layers.support.TilemapCache")],s)}(d.declared(s));t.TilemapCache=T}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=21.js.map