(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/LRUCache":"./node_modules/arcgis-js-api/core/LRUCache.js",
	"arcgis-js-api/core/MemCache":"./node_modules/arcgis-js-api/core/MemCache.js",
	"arcgis-js-api/renderers/DictionaryRenderer":"./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js",
	"arcgis-js-api/renderers/DotDensityRenderer":"./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js",
	"arcgis-js-api/renderers/HeatmapRenderer":"./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js",
	"arcgis-js-api/renderers/SimpleRenderer":"./node_modules/arcgis-js-api/renderers/SimpleRenderer.js",
	"arcgis-js-api/renderers/support/AttributeColorInfo":"./node_modules/arcgis-js-api/renderers/support/AttributeColorInfo.js",
	"arcgis-js-api/renderers/support/DotDensityLegendOptions":"./node_modules/arcgis-js-api/renderers/support/DotDensityLegendOptions.js",
	"arcgis-js-api/renderers/support/HeatmapColorStop":"./node_modules/arcgis-js-api/renderers/support/HeatmapColorStop.js",
	"esri/renderers/support/jsonUtils":"./node_modules/arcgis-js-api/renderers/support/jsonUtils.js",
	"arcgis-js-api/renderers/support/jsonUtils":"./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

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

/***/ "./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/LRUCache */ "./node_modules/arcgis-js-api/core/LRUCache.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./mixins/VisualVariablesMixin */ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js"),__webpack_require__(/*! ../support/arcadeOnDemand */ "./node_modules/arcgis-js-api/support/arcadeOnDemand.js"),__webpack_require__(/*! ../symbols/CIMSymbol */ "./node_modules/arcgis-js-api/symbols/CIMSymbol.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,o,s,n,a,l,u,c,p,h,f,y,d,m,b,g,v,S,_){var w=h.getLogger("esri.renderers.DictionaryRenderer");return function(e){function t(t){var r=e.call(this,t)||this;return r._ongoingRequests=new Map,r._symbolCache=new f(100),r.config=null,r.description=null,r.fieldMap=null,r.label=null,r.scaleExpression=null,r.url=null,r.type="dictionary",r}r(t,e),h=t,t.prototype.clone=function(){return new h({config:p.clone(this.config),scaleExpression:p.clone(this.scaleExpression),description:p.clone(this.description),fieldMap:p.clone(this.fieldMap),label:p.clone(this.label),url:p.clone(this.url),visualVariables:p.clone(this.visualVariables)})},t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,function(){var r,i;return s(this,function(o){switch(o.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:return o.sent(),this.scaleExpression?[4,b.collectArcadeFieldNames(e,t,this.scaleExpression)]:[3,3];case 2:o.sent(),o.label=3;case 3:r=t.map(function(e){return e.name});for(i in this.fieldMap)r.indexOf(this.fieldMap[i])<0||e.add(this.fieldMap[i]);return[2]}})})},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!0},enumerable:!0,configurable:!0}),t.prototype.fetchResources=function(e){return n(this,void 0,void 0,function(){var t,r,i,n,a,p,h,f,m,b,f,g,v,_,R,M,f,x,j;return s(this,function(s){switch(s.label){case 0:return this.url?(t=y.isSome(e)?e.abortOptions:null,r=l(this.url+"/resources/styles/dictionary-info.json",o({responseType:"json",query:{f:"json"}},t)),[4,d.all([r,S.loadArcade()])]):(w.error("no valid URL!"),[2,void 0]);case 1:if(!(i=s.sent()[0].data))throw new u("esri.renderers.DictionaryRenderer","Bad dictionary data!");if(n=i.expression,a=i.authoringInfo,this._refSymbolUrlTemplate=this.url+"/"+i.cimRefTemplateUrl,this._itemNames=c.createSetFromValues(i.itemsNames),this._symbolAttributes=a.symbol,p={},this.config){h=this.config;for(f in h)p[f]=h[f]}for(m=0,b=a.configuration;m<b.length;m++)f=b[m],p.hasOwnProperty(f.name)||(p[f.name]=f.value);if(g=[],y.isSome(e)&&e.fields)for(v=function(t){var r=_.fieldMap[t],i=e.fields.filter(function(e){return e.name===r});i.length>0&&g.push(o({},i[0],{name:t}))},_=this,R=0,M=this._symbolAttributes;R<M.length;R++)f=M[R],v(f);return[4,S.createDictionaryExpression(n,y.isSome(e)?e.spatialReference:null,g,p)];case 2:return x=s.sent(),j={scale:0},[2,function(e,t){var r=x.repurposeFeature({geometry:null,attributes:e});return j.scale=y.isSome(t)?t.scale:void 0,x.evaluate({$feature:r,$view:j})}]}})})},t.prototype.getSymbol=function(){return null},t.prototype.getSymbolAsync=function(e,t){return n(this,void 0,void 0,function(){var r,i,o,n,l,u,c,p,h,f,y,d,m,b,g,v,S,_,w,R,M,x,j,N,O;return s(this,function(s){switch(s.label){case 0:return this._dictionaryPromise||(this._dictionaryPromise=this.fetchResources(t)),[4,this._dictionaryPromise];case 1:for(r=s.sent(),i={},o=0,n=this._symbolAttributes;o<n.length;o++)l=n[o],u=this.fieldMap[l],u&&null!==e.attributes[u]&&void 0!==e.attributes[u]?(c=""+e.attributes[u],i[l]=c):i[l]="";if(!(p=r(i,t))||"string"!=typeof p)return[2,null];for(h=p.split(";"),f=[],y=[],d=0,m=h;d<m.length;d++)if((b=m[d])&&0!==b.length)if(-1===b.indexOf("po:"))if(-1!==b.indexOf("|"))for(R=0,M=b.split("|");R<M.length;R++)x=M[R],this._itemNames.has(x)&&f.push(x);else this._itemNames.has(b)&&f.push(b);else g=b.substr(3).split("|"),3===g.length&&(v=g[0],S=g[1],_=g[2],"DashTemplate"===S?_=_.split(" ").map(function(e){return Number(e)}):"Color"===S?(w=new a(_).toRgba(),_=[w[0],w[1],w[2],255*w[3]]):_=Number(_),y.push({primitiveName:v,propertyName:S,value:_}));return j=f.join(";")+y.map(function(e){return e.primitiveName+";"+e.propertyName+";"+e.value}),(N=this._symbolCache.get(j))?[2,N]:(O=this._cimPartsToCIMSymbol(f,y,t),this._symbolCache.put(j,O,1),[2,O])}})})},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(e,t){return e+t.getAttributeHash()},"")},t.prototype.getMeshHash=function(){return this.url+"-"+JSON.stringify(this.fieldMap)},t.prototype._getSymbolPart=function(e,t){return n(this,void 0,void 0,function(){var r,i,n;return s(this,function(s){switch(s.label){case 0:return this._ongoingRequests.has(e)?[2,this._ongoingRequests.get(e).then(function(e){return e.data})]:(r=this._refSymbolUrlTemplate.replace(/\{itemName\}/gi,e),i=l(r,o({responseType:"json",query:{f:"json"}},t)),this._ongoingRequests.set(e,i),[4,i]);case 1:return n=s.sent(),[2,n.data]}})})},t.prototype._combineSymbolParts=function(e,t){var r;if(!e||0===e.length)return null;if(1===e.length)return{type:"CIMSymbolReference",symbol:e[0],primitiveOverrides:t};var i=o({},e[0]);i.symbolLayers=[];for(var s=0,n=e;s<n.length;s++){var a=n[s],l=a;(r=i.symbolLayers).unshift.apply(r,l.symbolLayers)}return{type:"CIMSymbolReference",symbol:i,primitiveOverrides:t}},t.prototype._cimPartsToCIMSymbol=function(e,t,r){return n(this,void 0,void 0,function(){var i,o,n;return s(this,function(s){switch(s.label){case 0:for(i=new Array(e.length),o=0;o<e.length;o++)i[o]=this._getSymbolPart(e[o],r);return[4,d.eachAlwaysValues(i)];case 1:return n=s.sent(),[2,new _({data:this._combineSymbolParts(n,t)})]}})})};var h;return i([m.property({type:Object,json:{write:!0}})],t.prototype,"config",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),i([m.property({type:Object,json:{write:!0}})],t.prototype,"fieldMap",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"scaleExpression",void 0),i([m.property({type:String,json:{write:!0}})],t.prototype,"url",void 0),t=h=i([m.subclass("esri.renderers.DictionaryRenderer")],t)}(m.declared(v.VisualVariablesMixin(g)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./mixins/VisualVariablesMixin */ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js"),__webpack_require__(/*! ./support/AttributeColorInfo */ "./node_modules/arcgis-js-api/renderers/support/AttributeColorInfo.js"),__webpack_require__(/*! ./support/DotDensityLegendOptions */ "./node_modules/arcgis-js-api/renderers/support/DotDensityLegendOptions.js"),__webpack_require__(/*! ../symbols/SimpleFillSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleFillSymbol.js"),__webpack_require__(/*! ../symbols/SimpleLineSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleLineSymbol.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,o,r,n,i,l,s,p,u,a,d,c,y,h,b,f){return function(e){function t(t){var o=e.call(this,t)||this;return o.attributes=null,o.backgroundColor=new s([0,0,0,0]),o.blendDots=!0,o.dotBlendingEnabled=!0,o.dotShape="square",o.dotSize=1,o.legendOptions=null,o.outline=new f,o.dotValue=null,o.referenceDotValue=null,o.referenceScale=null,o.seed=1,o.type="dot-density",o}o(t,e),n=t,t.prototype.calculateDotValue=function(e){if(null==this.referenceScale)return this.dotValue;var t=e/this.referenceScale*this.dotValue;return t<1?1:t},t.prototype.getSymbol=function(){return new b({outline:this.outline})},t.prototype.getSymbolAsync=function(){return l(this,void 0,void 0,function(){return i(this,function(e){return[2,this.getSymbol()]})})},t.prototype.getSymbols=function(){return[this.getSymbol()]},t.prototype.getAttributeHash=function(){return this.attributes&&this.attributes.reduce(function(e,t){return e+t.getAttributeHash()},"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.outline)},t.prototype.clone=function(){return new n({attributes:p.clone(this.attributes),backgroundColor:p.clone(this.backgroundColor),dotBlendingEnabled:p.clone(this.dotBlendingEnabled),dotShape:p.clone(this.dotShape),dotSize:p.clone(this.dotSize),dotValue:p.clone(this.dotValue),legendOptions:p.clone(this.legendOptions),outline:p.clone(this.outline),referenceScale:p.clone(this.referenceScale),visualVariables:p.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.getControllerHash=function(){return this.attributes.map(function(e){return e.field||e.valueExpression||""})+"-"+(this.outline&&JSON.stringify(this.outline.toJSON())||"")},t.prototype.collectRequiredFields=function(e,t){return l(this,void 0,void 0,function(){var o,r,n;return i(this,function(i){switch(i.label){case 0:return[4,this.collectVVRequiredFields(e,t)];case 1:i.sent(),o=0,r=this.attributes,i.label=2;case 2:return o<r.length?(n=r[o],n.valueExpression?[4,a.collectArcadeFieldNames(e,t,n.valueExpression)]:[3,4]):[3,6];case 3:i.sent(),i.label=4;case 4:n.field&&e.add(n.field),i.label=5;case 5:return o++,[3,2];case 6:return[2]}})})};var n;return r([u.property({type:[y],json:{write:!0}})],t.prototype,"attributes",void 0),r([u.property({type:s,json:{write:!0}})],t.prototype,"backgroundColor",void 0),r([u.property({type:Boolean}),u.aliasOf("dotBlendingEnabled")],t.prototype,"blendDots",void 0),r([u.property({type:Boolean,json:{write:!0}})],t.prototype,"dotBlendingEnabled",void 0),r([u.property({type:String,json:{write:!0}})],t.prototype,"dotShape",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"dotSize",void 0),r([u.property({type:h,json:{write:!0}})],t.prototype,"legendOptions",void 0),r([u.property({type:f,json:{default:null,write:!0}})],t.prototype,"outline",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"dotValue",void 0),r([u.property({type:Number}),u.aliasOf("dotValue")],t.prototype,"referenceDotValue",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"referenceScale",void 0),r([u.property({type:Number,json:{write:!0}})],t.prototype,"seed",void 0),r([u.enumeration.serializable()({dotDensity:"dot-density"})],t.prototype,"type",void 0),t=n=r([u.subclass("esri.renderers.DotDensityRenderer")],t)}(u.declared(c.VisualVariablesMixin(d)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./support/HeatmapColorStop */ "./node_modules/arcgis-js-api/renderers/support/HeatmapColorStop.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,p,l,s,a,u,c){return function(e){function t(t){var r=e.call(this,t)||this;return r.blurRadius=10,r.colorStops=[new c.HeatmapColorStop({ratio:0,color:new p("rgba(255, 140, 0, 0)")}),new c.HeatmapColorStop({ratio:.75,color:new p("rgba(255, 140, 0, 1)")}),new c.HeatmapColorStop({ratio:.9,color:new p("rgba(255, 0,   0, 1)")})],r.field=null,r.fieldOffset=0,r.maxPixelIntensity=100,r.minPixelIntensity=0,r.type="heatmap",r}r(t,e),u=t,t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,function(){var r;return i(this,function(o){return r=this.field,r&&"string"==typeof r&&a.collectField(e,t,r),[2]})})},t.prototype.getAttributeHash=function(){return null},t.prototype.getMeshHash=function(){return JSON.stringify(this.colorStops)+"."+this.blurRadius},t.prototype.clone=function(){return new u({blurRadius:this.blurRadius,colorStops:l.clone(this.colorStops),field:this.field,maxPixelIntensity:this.maxPixelIntensity,minPixelIntensity:this.minPixelIntensity})};var u;return o([s.property({type:Number,json:{write:!0}})],t.prototype,"blurRadius",void 0),o([s.property({type:[c.HeatmapColorStop],json:{write:!0}})],t.prototype,"colorStops",void 0),o([s.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),o([s.property({type:Number,json:{write:{overridePolicy:function(e,t,r){return{enabled:null==r}}}}})],t.prototype,"fieldOffset",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"maxPixelIntensity",void 0),o([s.property({type:Number,json:{write:!0}})],t.prototype,"minPixelIntensity",void 0),o([s.enumeration.serializable()({heatmap:"heatmap"})],t.prototype,"type",void 0),t=u=o([s.subclass("esri.renderers.HeatmapRenderer")],t)}(s.declared(u))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/SimpleRenderer.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/SimpleRenderer.js ***!
  \****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./mixins/VisualVariablesMixin */ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js"),__webpack_require__(/*! ../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,n,s,l,u,p,c,a,y){return function(e){function t(t){var r=e.call(this,t)||this;return r.description=null,r.label=null,r.symbol=null,r.type="simple",r}r(t,e),c=t,t.prototype.writeSymbolWebScene=function(e,t,r,o){y.writeTarget(e,t,r,o)},t.prototype.writeSymbol=function(e,t,r,o){y.writeTarget(e,t,r,o)},t.prototype.readSymbol=function(e,t,r){return y.read(e,t,r)},t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,u.all([this.collectSymbolFields(e,t),this.collectVVRequiredFields(e,t)])];case 1:return r.sent(),[2]}})})},t.prototype.collectSymbolFields=function(e,t){return n(this,void 0,void 0,function(){return i(this,function(r){switch(r.label){case 0:return[4,u.all(this.getSymbols().map(function(r){return r.collectRequiredFields(e,t)}))];case 1:return r.sent(),[2]}})})},t.prototype.getSymbol=function(e,t){return this.symbol},t.prototype.getSymbolAsync=function(e,t){return n(this,void 0,void 0,function(){return i(this,function(e){return[2,this.symbol]})})},t.prototype.getSymbols=function(){return this.symbol?[this.symbol]:[]},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(e,t){return e+t.getAttributeHash()},"")},t.prototype.getMeshHash=function(){return this.getSymbols().reduce(function(e,t){return e+=JSON.stringify(t)},"")},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new c({description:this.description,label:this.label,symbol:this.symbol&&this.symbol.clone(),visualVariables:l.clone(this.visualVariables),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})};var c;return o([p.property({type:String,json:{write:!0}})],t.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"label",void 0),o([p.property({types:s.symbolTypesRenderer})],t.prototype,"symbol",void 0),o([p.writer("web-scene","symbol",{symbol:{types:s.symbolTypesRenderer3D}})],t.prototype,"writeSymbolWebScene",null),o([p.writer("symbol")],t.prototype,"writeSymbol",null),o([p.reader("symbol")],t.prototype,"readSymbol",null),o([p.enumeration.serializable()({simple:"simple"})],t.prototype,"type",void 0),t=c=o([p.subclass("esri.renderers.SimpleRenderer")],t)}(p.declared(a.VisualVariablesMixin(c)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/AttributeColorInfo.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/AttributeColorInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,l,p,i,n,s){var u=i.getLogger("esri.renderers.support.AttributeColorInfo");return function(e){function r(r){var t=e.call(this,r)||this;return t.color=null,t.field=null,t.label=null,t.valueExpression=null,t.valueExpressionTitle=null,t}t(r,e),p=r,r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(u.error(".field: field must be a string value"),null):s.ensureString(e)},r.prototype.getAttributeHash=function(){return this.field+"-"+this.valueExpression},r.prototype.clone=function(){return new p({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})};var p;return o([n.property({type:l,json:{type:[Number],write:!0}})],r.prototype,"color",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([n.cast("field")],r.prototype,"castField",null),o([n.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),o([n.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),r=p=o([n.subclass("esri.renderers.support.AttributeColorInfo")],r)}(n.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/DotDensityLegendOptions.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/DotDensityLegendOptions.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,n,p){return function(r){function e(){var e=null!==r&&r.apply(this,arguments)||this;return e.unit=null,e}o(e,r),n=e,e.prototype.clone=function(){return new n({unit:this.unit})};var n;return t([p.property({type:String,json:{write:!0}})],e.prototype,"unit",void 0),e=n=t([p.subclass("esri.renderers.support.DotDensityLegendOptions")],e)}(p.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/HeatmapColorStop.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/HeatmapColorStop.js ***!
  \**************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,o,e,t,p,c,l){Object.defineProperty(o,"__esModule",{value:!0});var n=function(r){function o(o){var e=r.call(this,o)||this;return e.color=null,e.ratio=null,e}e(o,r),c=o,o.prototype.clone=function(){return new c({color:this.color,ratio:this.ratio})};var c;return t([l.property({type:p,json:{write:!0}})],o.prototype,"color",void 0),t([l.property({type:Number,json:{write:!0}})],o.prototype,"ratio",void 0),o=c=t([l.subclass("esri.renderers.support.HeatmapColorStop")],o)}(l.declared(c.JSONSupport));o.HeatmapColorStop=n,o.default=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/jsonUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ../ClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js"),__webpack_require__(/*! ../DictionaryRenderer */ "./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js"),__webpack_require__(/*! ../DotDensityRenderer */ "./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js"),__webpack_require__(/*! ../HeatmapRenderer */ "./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js"),__webpack_require__(/*! ../SimpleRenderer */ "./node_modules/arcgis-js-api/renderers/SimpleRenderer.js"),__webpack_require__(/*! ../UniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,t,s,u,a,i,o,l,d,c){function p(e){return e?g[e.type]||null:null}function f(e,r,n){if(!e)return null;if(e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type)return n&&n.messages&&n.messages.push(new u("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:n})),null;var t=p(e);if(t){var s=new t;return s.read(e,n),s}return n&&n.messages&&e&&n.messages.push(new u("renderer:unsupported","Renderers of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:n})),null}function y(e,r,n,t){var u=w(e,{},t);u&&s.setDeepValue(n,u,r)}function m(e,r){if(!r||"web-scene"!==r.origin)return!0;switch(e.type){case"simple":case"unique-value":case"class-breaks":return!0;case"heatmap":case"dictionary":case"dot-density":return!1;default:return n.neverReached(e),!1}}function w(e,r,n){return e?m(e,n)?e.write(r,n):(n.messages&&n.messages.push(new t("renderer:unsupported","Renderer of type '"+e.declaredClass+"' are not supported in scenes.",{renderer:e,context:n})),null):null}function R(e,r){return f(e,null,r)}Object.defineProperty(r,"__esModule",{value:!0});var g={simple:d,uniqueValue:c,classBreaks:a,heatmap:l,dotDensity:o,dictionary:i};r.read=f,r.writeTarget=y,r.write=w,r.fromJSON=R}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=1.js.map