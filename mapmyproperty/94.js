(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/WMTSLayer":"./node_modules/arcgis-js-api/layers/WMTSLayer.js",
	"arcgis-js-api/layers/support/TileMatrixSet":"./node_modules/arcgis-js-api/layers/support/TileMatrixSet.js",
	"arcgis-js-api/layers/support/WMTSStyle":"./node_modules/arcgis-js-api/layers/support/WMTSStyle.js",
	"arcgis-js-api/layers/support/WMTSSublayer":"./node_modules/arcgis-js-api/layers/support/WMTSSublayer.js",
	"arcgis-js-api/layers/support/wmtsUtils":"./node_modules/arcgis-js-api/layers/support/wmtsUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[94],{

/***/ "./node_modules/arcgis-js-api/layers/WMTSLayer.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/WMTSLayer.js ***!
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

//  copyright

/**
             * Copyright information for the WMTS service.
             * This defaults to the value of the AccessConstraints property from the GetCapabilities request.
             *
             * @name copyright
             * @type {string}
             * @instance
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/object */ "./node_modules/arcgis-js-api/core/object.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./WebTileLayer */ "./node_modules/arcgis-js-api/layers/WebTileLayer.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ./support/WMTSLayerInfo */ "./node_modules/arcgis-js-api/layers/support/WMTSLayerInfo.js"),__webpack_require__(/*! ./support/WMTSSublayer */ "./node_modules/arcgis-js-api/layers/support/WMTSSublayer.js"),__webpack_require__(/*! ./support/wmtsUtils */ "./node_modules/arcgis-js-api/layers/support/wmtsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,a,o,s,n,l,u,p,c,y,m,d,f,v,h,g,L,I,w,S,b,M,P,T,x){function E(e,t){return e.map(function(e){var r=new T;return r.read(e,t),r})}var O={"image/png":".png","image/png8":".png","image/png24":".png","image/png32":".png","image/jpg":".jpg","image/jpeg":".jpeg","image/gif":".gif","image/bmp":".bmp","image/tiff":".tif","image/jpgpng":"","image/jpegpng":"","image/unknown":""},_=c.createSetFromValues(["version","service","request","layer","style","format","tilematrixset","tilematrix","tilerow","tilecol"]);return function(e){function t(t,r){var i=e.call(this,t)||this;return i._sublayersHandles=new p,i.copyright="",i.customParameters=null,i.customLayerParameters=null,i.fullExtent=null,i.operationalLayerType="WebTiledLayer",i.resourceInfo=null,i.serviceMode="RESTful",i.sublayers=null,i.type="wmts",i.version="1.0.0",i.watch("activeLayer",function(e,t){t&&(t.layer=null),e&&(e.layer=i)},!0),i.watch("sublayers",function(e,t){t&&(t.forEach(function(e){e.layer=null}),i._sublayersHandles.removeAll(),i._sublayersHandles=null),e&&(e.forEach(function(e){e.layer=i}),i._sublayersHandles||(i._sublayersHandles=new p),i._sublayersHandles.add([e.on("after-add",function(e){e.item.layer=i}),e.on("after-remove",function(e){e.item.layer=null})]))},!0),i}return i(t,e),t.prototype.normalizeCtorArgs=function(e,t){return"string"==typeof e?r({url:e},t):e},t.prototype.load=function(e){var t=this;return"KVP"!==this.serviceMode&&"RESTful"!==this.serviceMode?void console.error("WMTS mode could only be 'KVP' or 'RESTful'"):(this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMTS"]},e).then(function(){return t._fetchService(e)}).catch(function(e){throw new u("wmtslayer:unsupported-service-data","Invalid response from the WMTS service.",{error:e})})),this.when())},Object.defineProperty(t.prototype,"activeLayer",{get:function(){return this._get("activeLayer")},set:function(e){this._set("activeLayer",e)},enumerable:!0,configurable:!0}),t.prototype.readActiveLayerFromService=function(e,t,r){var i,a=this;return this.activeLayer?t.layers.some(function(e){return e.id===a.activeLayer.id&&(i=e,!0)}):(this.activeLayer=new T,i=t.layers[0]),this.activeLayer.read(i,r),this.activeLayer},t.prototype.readActiveLayerFromItemOrWebDoc=function(e,t){var r=t.templateUrl?this._getLowerCasedUrlParams(t.templateUrl):null;return new T({id:t.wmtsInfo.layerIdentifier,tileMatrixSetId:t.wmtsInfo.tileMatrixSet,imageFormat:r&&r.format,styleId:r&&r.style})},t.prototype.writeActiveLayer=function(e,t,i,a){var o=this.activeLayer;t.templateUrl=this.getUrlTemplate(o.id,o.tileMatrixSetId,o.imageFormat,o.styleId);var s=d.getDeepValue("tileMatrixSet.tileInfo",o);t.tileInfo=s?s.toJSON(a):null,t.wmtsInfo=r({},t.wmtsInfo,{layerIdentifier:o.id,tileMatrixSet:o.tileMatrixSetId})},t.prototype.readCustomParameters=function(e,t){var r=t.wmtsInfo;return r?this._mergeParams(r.customParameters,r.url):null},Object.defineProperty(t.prototype,"fullExtents",{get:function(){var e=[];return this.activeLayer.tileMatrixSets.forEach(function(t){t.fullExtent&&e.push(t.fullExtent)}),e},enumerable:!0,configurable:!0}),t.prototype.readServiceMode=function(e,t){return t.templateUrl.indexOf("?")>-1?"KVP":"RESTful"},t.prototype.readSublayersFromService=function(e,t,r){return E(t.layers,r)},Object.defineProperty(t.prototype,"supportedSpatialReferences",{get:function(){return this.activeLayer.tileMatrixSets.map(function(e){return e.tileInfo.spatialReference}).toArray()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"title",{get:function(){return"Layer"===this._get("title")?this.activeLayer&&this.activeLayer.title:this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"url",{get:function(){return this._get("url")},set:function(e){e&&"/"===e.substr(-1)?this._set("url",e.slice(0,-1)):this._set("url",e)},enumerable:!0,configurable:!0}),t.prototype.createWebTileLayer=function(e){var t=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId),r=this._getTileMatrixSetById(e.tileMatrixSetId),i=r.tileInfo,a=e.fullExtent,o=new P.default({layerIdentifier:e.id,tileMatrixSet:e.tileMatrixSetId,url:this.url});return this.customLayerParameters&&(o.customLayerParameters=this.customLayerParameters),this.customParameters&&(o.customParameters=this.customParameters),new L({fullExtent:a,urlTemplate:t,tileInfo:i,wmtsInfo:o})},t.prototype.fetchTile=function(e,t,r){var i=this.getTileUrl(e,t,r);return n(i,{responseType:"image"}).then(function(e){return e.data})},t.prototype.findSublayerById=function(e){return this.sublayers.find(function(t){return t.id===e})},t.prototype.getTileUrl=function(e,t,r){var i=this._getTileMatrixSetById(this.activeLayer.tileMatrixSetId),a=i.tileInfo.lods[e],o=a?a.levelValue?a.levelValue:""+a.level:""+e,s=this.resourceInfo?"":x.getTileUrlFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId,o,t,r);if(!s){s=this.getUrlTemplate(this.activeLayer.id,this.activeLayer.tileMatrixSetId,this.activeLayer.imageFormat,this.activeLayer.styleId).replace(/\{level\}/gi,o).replace(/\{row\}/gi,""+t).replace(/\{col\}/gi,""+r)}return s=this._appendCustomLayerParameters(s)},t.prototype.getUrlTemplate=function(e,t,r,i){if(!this.resourceInfo){var a=x.getTileUrlTemplateFromResourceUrls({dimensionMap:this.dimensionMap,layerMap:this.layerMap},e,t,i);if(a)return a}if("KVP"===this.serviceMode)return this.url+"?SERVICE=WMTS&VERSION="+this.version+"&REQUEST=GetTile&LAYER="+e+"&STYLE="+i+"&FORMAT="+r+"&TILEMATRIXSET="+t+"&TILEMATRIX={level}&TILEROW={row}&TILECOL={col}";if("RESTful"===this.serviceMode){var o="";return O[r.toLowerCase()]&&(o=O[r.toLowerCase()]),this.url+e+"/"+i+"/"+t+"/{level}/{row}/{col}"+o}return""},t.prototype._fetchService=function(e){return s(this,void 0,void 0,function(){var t,i,a,s;return o(this,function(o){switch(o.label){case 0:return this.resourceInfo?("KVP"===this.resourceInfo.serviceMode&&(this.url+=this.url.indexOf("?")>-1?"":"?"),t={ssl:!1,data:this.resourceInfo},[3,6]):[3,1];case 1:i=this._getCapabilitiesUrl(this.serviceMode),o.label=2;case 2:return o.trys.push([2,4,,6]),[4,n(i,r({},e,{responseType:"text"}))];case 3:return t=o.sent(),[3,6];case 4:return a=o.sent(),s="KVP"===this.serviceMode?"RESTful":"KVP",i=this._getCapabilitiesUrl(s),[4,n(i,r({},e,{responseType:"text"}))];case 5:return t=o.sent(),[3,6];case 6:return this.resourceInfo?t.data=x.parseResourceInfo(t.data):t.data=x.parseCapabilities(t.data,{serviceMode:this.serviceMode,url:this.url}),t.data&&this.read(t.data,{origin:"service"}),[2]}})})},t.prototype._getTileMatrixSetById=function(e){return this.findSublayerById(this.activeLayer.id).tileMatrixSets.find(function(t){return t.id===e})},t.prototype._appendCustomParameters=function(e){if(this.customParameters)for(var t in this.customParameters)e+=(-1===e.indexOf("?")?"?":"&")+t+"="+encodeURIComponent(this.customParameters[t]);return e},t.prototype._appendCustomLayerParameters=function(e){if(this.customLayerParameters||this.customParameters){var t=r({},y.clone(this.customParameters||{}),this.customLayerParameters);for(var i in t)e+=(-1===e.indexOf("?")?"?":"&")+i+"="+encodeURIComponent(t[i])}return e},t.prototype._getCapabilitiesUrl=function(e){var t;return this.url=this.url.split("?")[0],"KVP"===e?t=this.url+"?request=GetCapabilities&service=WMTS&version="+this.version:"RESTful"===e&&(t=this.url+"/"+this.version+"/WMTSCapabilities.xml"),t=this._appendCustomParameters(t)},t.prototype._getLowerCasedUrlParams=function(e){if(!e)return null;var t=f.urlToObject(e).query;if(!t)return null;var r={};return Object.keys(t).forEach(function(e){r[e.toLowerCase()]=t[e]}),r},t.prototype._mergeParams=function(e,t){var r=this._getLowerCasedUrlParams(t);if(r){var i=Object.keys(r);i.length&&(e=e?y.clone(e):{},i.forEach(function(t){e.hasOwnProperty(t)||_.has(t)||(e[t]=r[t])}))}return e},a([v.property()],t.prototype,"dimensionMap",void 0),a([v.property()],t.prototype,"layerMap",void 0),a([v.property({type:T,dependsOn:["sublayers"],json:{origins:{"web-document":{write:{ignoreOrigin:!0}}}}})],t.prototype,"activeLayer",null),a([v.reader("service","activeLayer",["layers"])],t.prototype,"readActiveLayerFromService",null),a([v.reader(["web-document","portal-item"],"activeLayer",["wmtsInfo"])],t.prototype,"readActiveLayerFromItemOrWebDoc",null),a([v.writer(["web-document","portal-item"],"activeLayer",{templateUrl:{type:String},tileInfo:{type:M},"wmtsInfo.layerIdentifier":{type:String},"wmtsInfo.tileMatrixSet":{type:String}})],t.prototype,"writeActiveLayer",null),a([v.property({type:String,value:"",json:{write:!0}})],t.prototype,"copyright",void 0),a([v.property({type:["show","hide"]})],t.prototype,"listMode",void 0),a([v.property({json:{origins:{"web-document":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}},"portal-item":{read:{source:["wmtsInfo.customParameters","wmtsInfo.url"]},write:{target:"wmtsInfo.customParameters"}}}}})],t.prototype,"customParameters",void 0),a([v.reader("web-document","customParameters"),v.reader("portal-item","customParameters")],t.prototype,"readCustomParameters",null),a([v.property({json:{origins:{"web-document":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}},"portal-item":{read:{source:"wmtsInfo.customLayerParameters"},write:{target:"wmtsInfo.customLayerParameters"}}}}})],t.prototype,"customLayerParameters",void 0),a([v.property({type:h,json:{write:{ignoreOrigin:!0},origins:{"web-document":{read:{source:"fullExtent"}},"portal-item":{read:{source:"fullExtent"}}}}})],t.prototype,"fullExtent",void 0),a([v.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"fullExtents",null),a([v.property({type:["WebTiledLayer"]})],t.prototype,"operationalLayerType",void 0),a([v.property()],t.prototype,"resourceInfo",void 0),a([v.property()],t.prototype,"serviceMode",void 0),a([v.reader(["portal-item","web-document"],"serviceMode",["templateUrl"])],t.prototype,"readServiceMode",null),a([v.property({type:l.ofType(T)})],t.prototype,"sublayers",void 0),a([v.reader("service","sublayers",["layers"])],t.prototype,"readSublayersFromService",null),a([v.property({readOnly:!0,dependsOn:["activeLayer"]})],t.prototype,"supportedSpatialReferences",null),a([v.property({dependsOn:["activeLayer"],json:{read:{source:"title"}}})],t.prototype,"title",null),a([v.property({json:{read:!1},readOnly:!0,value:"wmts"})],t.prototype,"type",void 0),a([v.property({json:{origins:{service:{read:{source:"tileUrl"}},"web-document":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}},"portal-item":{read:{source:"wmtsInfo.url"},write:{target:"wmtsInfo.url"}}}}})],t.prototype,"url",null),a([v.property()],t.prototype,"version",void 0),t=a([v.subclass("esri.layers.WMTSLayer")],t)}(v.declared(S.RefreshableLayer(b.ScaleRangeLayer(I.OperationalLayer(w.PortalLayer(m.MultiOriginJSONMixin(g)))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/TileMatrixSet.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/TileMatrixSet.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ./TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,o,n,l,p,i,s){return function(t){function e(e){var r=t.call(this,e)||this;return r.fullExtent=null,r.id=null,r.tileInfo=null,r}r(e,t),n=e,e.prototype.clone=function(){var t=new n;return this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("tileInfo")&&(t.tileInfo=this.tileInfo&&this.tileInfo.clone()),t};var n;return o([p.property({type:i,json:{read:{source:"fullExtent"}}})],e.prototype,"fullExtent",void 0),o([p.property({type:String,json:{read:{source:"id"}}})],e.prototype,"id",void 0),o([p.property({type:s,json:{read:{source:"tileInfo"}}})],e.prototype,"tileInfo",void 0),e=n=o([p.subclass("esri.layer.support.TileMatrixSet")],e)}(p.declared(l.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/WMTSStyle.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/WMTSStyle.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,i,p){return function(e){function r(r){var t=e.call(this,r)||this;return t.id=null,t.title=null,t.description=null,t.legendUrl=null,t}t(r,e),s=r,r.prototype.clone=function(){var e=new s;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("isDefault")&&(e.isDefault=this.isDefault),this.hasOwnProperty("keywords")&&(e.keywords=this.keywords&&this.keywords.slice()),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("title")&&(e.title=this.title),e};var s;return o([p.property({json:{read:{source:"id"}}})],r.prototype,"id",void 0),o([p.property({json:{read:{source:"title"}}})],r.prototype,"title",void 0),o([p.property({json:{read:{source:"abstract"}}})],r.prototype,"description",void 0),o([p.property({json:{read:{source:"legendUrl"}}})],r.prototype,"legendUrl",void 0),o([p.property({json:{read:{source:"isDefault"}}})],r.prototype,"isDefault",void 0),o([p.property({json:{read:{source:"keywords"}}})],r.prototype,"keywords",void 0),r=s=o([p.subclass("esri.layer.support.WMTSStyle")],r)}(p.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/WMTSSublayer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/WMTSSublayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ./TileMatrixSet */ "./node_modules/arcgis-js-api/layers/support/TileMatrixSet.js"),__webpack_require__(/*! ./WMTSStyle */ "./node_modules/arcgis-js-api/layers/support/WMTSStyle.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,i,o,s,l,n,p,a,y){return function(t){function e(e){var r=t.call(this,e)||this;return r.fullExtent=null,r.imageFormats=null,r.id=null,r.layer=null,r.styles=null,r.tileMatrixSetId=null,r.tileMatrixSets=null,r}r(e,t),o=e,Object.defineProperty(e.prototype,"description",{get:function(){return this._get("description")},set:function(t){this._set("description",t)},enumerable:!0,configurable:!0}),e.prototype.readFullExtent=function(t,e){return t=e.fullExtent,t?p.fromJSON(t):null},Object.defineProperty(e.prototype,"imageFormat",{get:function(){var t=this._get("imageFormat");return t||(t=this.imageFormats&&this.imageFormats.length?this.imageFormats[0]:""),t},set:function(t){var e=this.imageFormats;if(t&&(t.indexOf("image/")>-1||e&&-1===e.indexOf(t))&&(-1===t.indexOf("image/")&&(t="image/"+t),e&&-1===e.indexOf(t)))return void console.error("The layer doesn't support the format of "+t);this._set("imageFormat",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"styleId",{get:function(){var t=this._get("styleId");return t||(t=this.styles&&this.styles.length?this.styles.getItemAt(0).id:""),t},set:function(t){this._set("styleId",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"title",{get:function(){return this._get("title")},set:function(t){this._set("title",t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"tileMatrixSet",{get:function(){var t=this;return this.tileMatrixSets?this.tileMatrixSets.find(function(e){return e.id===t.tileMatrixSetId}):null},enumerable:!0,configurable:!0}),e.prototype.clone=function(){var t=new o;return this.hasOwnProperty("description")&&(t.description=this.description),this.hasOwnProperty("imageFormats")&&(t.imageFormats=this.imageFormats&&this.imageFormats.slice()),this.hasOwnProperty("imageFormat")&&(t.imageFormat=this.imageFormat),this.hasOwnProperty("fullExtent")&&(t.fullExtent=this.fullExtent&&this.fullExtent.clone()),this.hasOwnProperty("id")&&(t.id=this.id),this.hasOwnProperty("layer")&&(t.layer=this.layer),this.hasOwnProperty("styleId")&&(t.styleId=this.styleId),this.hasOwnProperty("styles")&&(t.styles=this.styles&&this.styles.clone()),this.hasOwnProperty("tileMatrixSetId")&&(t.tileMatrixSetId=this.tileMatrixSetId),this.hasOwnProperty("tileMatrixSets")&&(t.tileMatrixSets=this.tileMatrixSets.clone()),this.hasOwnProperty("title")&&(t.title=this.title),t};var o;return i([n.property()],e.prototype,"description",null),i([n.property()],e.prototype,"fullExtent",void 0),i([n.reader("fullExtent",["fullExtent"])],e.prototype,"readFullExtent",null),i([n.property({dependsOn:["imageFormats"]})],e.prototype,"imageFormat",null),i([n.property({json:{read:{source:"formats"}}})],e.prototype,"imageFormats",void 0),i([n.property()],e.prototype,"id",void 0),i([n.property()],e.prototype,"layer",void 0),i([n.property({dependsOn:["styles"]})],e.prototype,"styleId",null),i([n.property({type:s.ofType(y),json:{read:{source:"styles"}}})],e.prototype,"styles",void 0),i([n.property({value:null,json:{write:{ignoreOrigin:!0}}})],e.prototype,"title",null),i([n.property()],e.prototype,"tileMatrixSetId",void 0),i([n.property({readOnly:!0,dependsOn:["tileMatrixSetId"]})],e.prototype,"tileMatrixSet",null),i([n.property({type:s.ofType(a),json:{read:{source:"tileMatrixSets"}}})],e.prototype,"tileMatrixSets",void 0),e=o=i([n.subclass("esri.layers.support.WMTSSublayer")],e)}(n.declared(l.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/wmtsUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/wmtsUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../geometry/support/WKIDUnitConversion */ "./node_modules/arcgis-js-api/geometry/support/WKIDUnitConversion.js"),__webpack_require__(/*! ./TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,a,l,o){function s(e,t){e=e.replace(/ows:/gi,"");var i=new DOMParser,n=i.parseFromString(e,"text/xml"),a=n.documentElement,l=new Map,o=new Map,s=p("Contents",a);if(!s)throw new r("wmtslayer:wmts-capabilities-xml-is-not-valid");var u,c,m,x=p("OperationsMetadata",a),h=x&&x.querySelector("[name='GetTile']"),v=h&&h.getElementsByTagName("Get"),y=v&&Array.prototype.slice.call(v),T=t.url&&t.url.indexOf("https")>-1,w=t.serviceMode;if(y&&y.length&&y.some(function(e){var t=p("Constraint",e);return!t||d("AllowedValues","Value",w,t)?(c=e.attributes[0].nodeValue,!0):(!t||d("AllowedValues","Value","RESTful",t)||d("AllowedValues","Value","REST",t)?m=e.attributes[0].nodeValue:t&&!d("AllowedValues","Value","KVP",t)||(u=e.attributes[0].nodeValue),!1)}),!c)if(m)c=m,w="RESTful";else if(u)c=u,w="KVP";else{var M=p("ServiceMetadataURL",a);c=M.getAttribute("xlink:href")}var E=c.indexOf("1.0.0/");return-1===E&&"RESTful"===w?c+="/":E>-1&&(c=c.substring(0,E)),"KVP"===w&&(c+=E>-1?"":"?"),T&&(c=c.replace(/^http:/i,"https:")),{copyright:f("ServiceIdentification>AccessConstraints",a),layers:Array.prototype.slice.call(s.getElementsByTagName("Layer")).map(function(e){var t=f("Identifier",e);return l.set(t,e),g(t,e,s,T)}),tileUrl:c,serviceMode:w,layerMap:l,dimensionMap:o}}function u(e){return e.layers.forEach(function(e){e.tileMatrixSets.forEach(function(e){var t=e.tileInfo;96!==t.dpi&&(t.lods.forEach(function(r){r.scale=96*r.scale/t.dpi,r.resolution=V(t.spatialReference.wkid,r.scale*b/96,e.id)}),t.dpi=96)})}),e}function p(e,t){var r=t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function c(e,t){return Array.prototype.slice.call(t.getElementsByTagName(e)).map(function(e){return e.textContent})}function f(e,t){return e.split(">").forEach(function(e){t=p(e,t)}),t&&t.textContent}function d(e,t,r,i){var n,a=Array.prototype.slice.call(i.childNodes);return a.some(function(i){if(i.nodeName.indexOf(e)>-1){var a=p(t,i),l=a&&a.textContent;if(l===r||r.split(":")&&r.split(":")[1]===l)return n=i,!0}return!1}),n}function g(e,t,r,i){var n=f("Abstract",t),a=c("Format",t);return{id:e,fullExtent:v(t),description:n,formats:a,styles:y(t,i),title:f("Title",t),tileMatrixSets:T(t,r)}}function m(e,t){var r=[],i=e.layerMap.get(t);if(i){var n,a,l,o,s=Array.prototype.slice.call(i.getElementsByTagName("ResourceURL")),u=i.getElementsByTagName("Dimension");return u.length&&(n=f("Identifier",u[0]),a=c("Default",u[0])||c("Value",u[0])),u.length>1&&(l=f("Identifier",u[1]),o=c("Default",u[1])||c("Value",u[1])),e.dimensionMap.set(t,{dimensions:a,dimensions2:o}),s.forEach(function(e){var t=e.getAttribute("template");if("tile"===e.getAttribute("resourceType")){if(n&&a.length)if(t.indexOf("{"+n+"}")>-1)t=t.replace("{"+n+"}","{dimensionValue}");else{var i=t.toLowerCase().indexOf("{"+n.toLowerCase()+"}");i>-1&&(t=t.substring(0,i)+"{dimensionValue}"+t.substring(i+n.length+2))}if(l&&o.length)if(t.indexOf("{"+l+"}")>-1)t=t.replace("{"+l+"}","{dimensionValue2}");else{var i=t.toLowerCase().indexOf("{"+l.toLowerCase()+"}");i>-1&&(t=t.substring(0,i)+"{dimensionValue2}"+t.substring(i+l.length+2))}r.push({template:t,format:e.getAttribute("format"),resourceType:"tile"})}}),r}}function x(e,t,r,i,n,a,l,o){var s=e.dimensionMap,u=m(e,t),p=s.get(t).dimensions&&s.get(t).dimensions[0],c=s.get(t).dimensions2&&s.get(t).dimensions2[0],f="";if(u&&u.length>0){var d=null;u.some(function(e){return e.format===i&&(d=e,!0)}),d||(d=u[l%u.length]),f=d.template.replace(/\{Style\}/gi,n).replace(/\{TileMatrixSet\}/gi,r).replace(/\{TileMatrix\}/gi,a).replace(/\{TileRow\}/gi,""+l).replace(/\{TileCol\}/gi,""+o).replace(/\{dimensionValue\}/gi,p).replace(/\{dimensionValue2\}/gi,c)}return f}function h(e,t,r,i){var n=e.dimensionMap,a=m(e,t),l="";if(a&&a.length>0){var o=n.get(t).dimensions&&n.get(t).dimensions[0],s=n.get(t).dimensions2&&n.get(t).dimensions2[0];l=a[0].template,l.indexOf(".xxx")===l.length-4&&(l=l.slice(0,l.length-4)),l=l.replace(/\{Style\}/gi,i),l=l.replace(/\{TileMatrixSet\}/gi,r),l=l.replace(/\{TileMatrix\}/gi,"{level}"),l=l.replace(/\{TileRow\}/gi,"{row}"),l=l.replace(/\{TileCol\}/gi,"{col}"),l=l.replace(/\{dimensionValue\}/gi,o),l=l.replace(/\{dimensionValue2\}/gi,s)}return l}function v(e){var t=p("WGS84BoundingBox",e),r=t?f("LowerCorner",t).split(" "):["-180","-90"],i=t?f("UpperCorner",t).split(" "):["180","90"];return{xmin:parseFloat(r[0]),ymin:parseFloat(r[1]),xmax:parseFloat(i[0]),ymax:parseFloat(i[1]),spatialReference:{wkid:4326}}}function y(e,t){return Array.prototype.slice.call(e.getElementsByTagName("Style")).map(function(e){var r=p("LegendURL",e),i=p("Keywords",e),n=i&&c("Keyword",i),a=r&&r.getAttribute("xlink:href");return t&&(a=a&&a.replace(/^http:/i,"https:")),{abstract:f("Abstract",e),id:f("Identifier",e),isDefault:"true"===e.getAttribute("isDefault"),keywords:n,legendUrl:a,title:f("Title",e)}})}function T(e,t){return c("TileMatrixSet",e).map(function(r){return w(r,e,t)})}function w(e,t,r){var i=d("TileMatrixSetLink","TileMatrixSet",e,t),n=c("TileMatrix",i),a=d("TileMatrixSet","Identifier",e,r),l=M(a),s=l.spatialReference,u=s.wkid,g=p("TileMatrix",a),m=[parseInt(f("TileWidth",g),10),parseInt(f("TileHeight",g),10)],x=[];if(n.length)n.forEach(function(t,r){var i=d("TileMatrix","Identifier",t,a);x.push(S(i,u,r,e))});else{Array.prototype.slice.call(a.getElementsByTagName("TileMatrix")).forEach(function(t,r){x.push(S(t,u,r,e))})}var h=E(a,l,m,x[0]);return{id:e,fullExtent:h.toJSON(),tileInfo:new o({dpi:96,spatialReference:s,size:m,origin:l,lods:x}).toJSON()}}function M(e){var t=f("SupportedCRS",e);t&&(t=t.toLowerCase());var r=parseInt(t.split(":").pop(),10);900913!==r&&3857!==r||(r=102100);var i=!1;t.indexOf("crs84")>-1||t.indexOf("crs:84")>-1?(r=4326,i=!0):t.indexOf("crs83")>-1||t.indexOf("crs:83")>-1?(r=4269,i=!0):(t.indexOf("crs27")>-1||t.indexOf("crs:27")>-1)&&(r=4267,i=!0);var l,o=new a({wkid:r}),s=p("TileMatrix",e),u=f("TopLeftCorner",s).split(" "),c=u[0].split("E").map(function(e){return Number(e)}),d=u[1].split("E").map(function(e){return Number(e)}),g=c[0],m=d[0];c.length>1&&(g=c[0]*Math.pow(10,c[1])),d.length>1&&(m=d[0]*Math.pow(10,d[1]));var x=i&&4326===r&&90===g&&-180===m;return C.some(function(e,a){var s=Number(t.split(":").pop());return s>=e[0]&&s<=e[1]||4326===r&&(!i||x)?(l=new n(m,g,o),!0):(a===C.length-1&&(l=new n(g,m,o)),!1)}),l}function E(e,t,r,n){var a,l,o=p("BoundingBox",e);o&&(a=f("LowerCorner",o).split(" "),l=f("UpperCorner",o).split(" "));var s,u,c,d;if(a&&a.length>1&&l&&l.length>1)s=parseFloat(a[0]),c=parseFloat(a[1]),u=parseFloat(l[0]),d=parseFloat(l[1]);else{var g=p("TileMatrix",e),m=parseFloat(f("MatrixWidth",g)),x=parseFloat(f("MatrixHeight",g));s=t.x,d=t.y,u=s+m*r[0]*n.resolution,c=d-x*r[1]*n.resolution}return new i(s,c,u,d,t.spatialReference)}function S(e,t,r,i){var n,a=f("Identifier",e),l=f("ScaleDenominator",e),o=l.split("E").map(function(e){return Number(e)});n=o.length>1?o[0]*Math.pow(10,o[1]):o[0];var s=V(t,n,i);return n*=96/b,{level:r,levelValue:a,scale:n,resolution:s}}function V(e,t,r){var i;return i=l.hasOwnProperty(String(e))?l.values[l[e]]:"default028mm"===r?6370997*Math.PI/180:6378137*Math.PI/180,7*t/25e3/i}Object.defineProperty(t,"__esModule",{value:!0});var b=90.71428571428571,C=[[3819,3819],[3821,3824],[3889,3889],[3906,3906],[4001,4025],[4027,4036],[4039,4047],[4052,4055],[4074,4075],[4080,4081],[4120,4176],[4178,4185],[4188,4216],[4218,4289],[4291,4304],[4306,4319],[4322,4326],[4463,4463],[4470,4470],[4475,4475],[4483,4483],[4490,4490],[4555,4558],[4600,4646],[4657,4765],[4801,4811],[4813,4821],[4823,4824],[4901,4904],[5013,5013],[5132,5132],[5228,5229],[5233,5233],[5246,5246],[5252,5252],[5264,5264],[5324,5340],[5354,5354],[5360,5360],[5365,5365],[5370,5373],[5381,5381],[5393,5393],[5451,5451],[5464,5464],[5467,5467],[5489,5489],[5524,5524],[5527,5527],[5546,5546],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3038,3051],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3150,3151],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3389,3390],[3416,3417],[3833,3841],[3844,3850],[3854,3854],[3873,3885],[3907,3910],[4026,4026],[4037,4038],[4417,4417],[4434,4434],[4491,4554],[4839,4839],[5048,5048],[5105,5130],[5253,5259],[5269,5275],[5343,5349],[5479,5482],[5518,5519],[5520,5520],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]];t.parseCapabilities=s,t.parseResourceInfo=u,t.getTileUrlFromResourceUrls=x,t.getTileUrlTemplateFromResourceUrls=h}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=94.js.map