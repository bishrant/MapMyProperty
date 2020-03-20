(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/WebTileLayer":"./node_modules/arcgis-js-api/layers/WebTileLayer.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"arcgis-js-api/layers/mixins/RefreshableLayer":"./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js",
	"arcgis-js-api/layers/support/WMTSLayerInfo":"./node_modules/arcgis-js-api/layers/support/WMTSLayerInfo.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/arcgis-js-api/layers/WebTileLayer.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/WebTileLayer.js ***!
  \***********************************************************/
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
 * WebTileLayer provides a simple way to add non-ArcGIS Server map tiles as a layer to a map.
 * The constructor takes a URL template that usually follows a pattern of
 * `http://some.domain.com/{level}/{col}/{row}/` where `level` corresponds to a zoom level, and
 * `column` and `row` represent tile column and row, respectively. This pattern is not required, but
 * is the most common one currently on the web.
 *
 * The [subDomains](#subDomains) property can be used to specify subDomains where tiles are served to
 * speed up tile retrieval (using subDomains gets around the browser limit of the max number of concurrent
 * requests to a domain). If subDomains are specified, the [urlTemplate](#urlTemplate) should include a `{subDomain}` place
 * holder. The [copyright](#copyright) property can be used to define attribution information that will be displayed
 * in the map's Attribution widget.
 *
 * If the service is requested from a different domain, a [CORS enabled server](../guide/cors/index.html) or a [proxy](../guide/proxies/index.html) is
 * required.
 *
 * ::: esri-md class="panel trailer-1"
 * Esri requires that when you use an ArcGIS Online basemap in your app, the map must include Esri attribution and you must be licensed to use the content.
 * For detailed guidelines on working with attribution, please visit the official [attribution in your app](https://developers.arcgis.com/terms/attribution/) documentation.
 * For information on terms of use, see the [Terms of Use FAQ](https://developers.arcgis.com/terms/faq/).
 * :::
 *
 * @module esri/layers/WebTileLayer
 * @since 4.0
 * @see [Sample - WebTileLayer (3D)](../sample-code/layers-webtile-3d/index.html)
 * @see module:esri/layers/TileLayer
 */

//  copyright

/**
             * The attribution information for the layer.
             *
             * @name copyright
             * @type {string}
             *
             * @instance
             */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../geometry */ "./node_modules/arcgis-js-api/geometry.js"),__webpack_require__(/*! ../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/string */ "./node_modules/arcgis-js-api/core/string.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/OperationalLayer */ "./node_modules/arcgis-js-api/layers/mixins/OperationalLayer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"),__webpack_require__(/*! ./mixins/RefreshableLayer */ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js"),__webpack_require__(/*! ./mixins/ScaleRangeLayer */ "./node_modules/arcgis-js-api/layers/mixins/ScaleRangeLayer.js"),__webpack_require__(/*! ./support/LOD */ "./node_modules/arcgis-js-api/layers/support/LOD.js"),__webpack_require__(/*! ./support/TileInfo */ "./node_modules/arcgis-js-api/layers/support/TileInfo.js"),__webpack_require__(/*! ./support/WMTSLayerInfo */ "./node_modules/arcgis-js-api/layers/support/WMTSLayerInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,l,o,n,i,a,p,s,u,c,y,f,d,m,v,h,g,w,b,T,S,R){return function(e){function r(r,t){var l=e.call(this,r)||this;return l.copyright="",l.fullExtent=new a.Extent(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,a.SpatialReference.WebMercator),l.legendEnabled=!1,l.isReference=null,l.popupEnabled=!1,l.spatialReference=a.SpatialReference.WebMercator,l.subDomains=null,l.tileInfo=new S({size:[256,256],dpi:96,format:"png8",compressionQuality:0,origin:new a.Point({x:-20037508.342787,y:20037508.342787,spatialReference:a.SpatialReference.WebMercator}),spatialReference:a.SpatialReference.WebMercator,lods:[new T({level:0,scale:591657527.591555,resolution:156543.033928}),new T({level:1,scale:295828763.795777,resolution:78271.5169639999}),new T({level:2,scale:147914381.897889,resolution:39135.7584820001}),new T({level:3,scale:73957190.948944,resolution:19567.8792409999}),new T({level:4,scale:36978595.474472,resolution:9783.93962049996}),new T({level:5,scale:18489297.737236,resolution:4891.96981024998}),new T({level:6,scale:9244648.868618,resolution:2445.98490512499}),new T({level:7,scale:4622324.434309,resolution:1222.99245256249}),new T({level:8,scale:2311162.217155,resolution:611.49622628138}),new T({level:9,scale:1155581.108577,resolution:305.748113140558}),new T({level:10,scale:577790.554289,resolution:152.874056570411}),new T({level:11,scale:288895.277144,resolution:76.4370282850732}),new T({level:12,scale:144447.638572,resolution:38.2185141425366}),new T({level:13,scale:72223.819286,resolution:19.1092570712683}),new T({level:14,scale:36111.909643,resolution:9.55462853563415}),new T({level:15,scale:18055.954822,resolution:4.77731426794937}),new T({level:16,scale:9027.977411,resolution:2.38865713397468}),new T({level:17,scale:4513.988705,resolution:1.19432856685505}),new T({level:18,scale:2256.994353,resolution:.597164283559817}),new T({level:19,scale:1128.497176,resolution:.298582141647617})]}),l.type="web-tile",l.urlTemplate=null,l.wmtsInfo=null,l}return l(r,e),r.prototype.normalizeCtorArgs=function(e,r){return"string"==typeof e?u.mixin({urlTemplate:e},r||{}):e},r.prototype.load=function(e){var r=this,t=this.loadFromPortal({supportedTypes:["WMTS"]},e).then(function(){var e="";if(r.urlTemplate)if(r.spatialReference.equals(r.tileInfo.spatialReference)){var t=new f.Url(r.urlTemplate),l=!!r.subDomains&&r.subDomains.length>0;l||-1===t.authority.indexOf("{subDomain}")||(e="is missing 'subDomains' property")}else e="spatialReference must match tileInfo.spatialReference";else e="is missing the required 'urlTemplate' property value";if(e)throw new s("web-tile-layer:load","WebTileLayer (title: '"+r.title+"', id: '"+r.id+"') "+e)});return this.addResolvingPromise(t),this.when()},Object.defineProperty(r.prototype,"levelValues",{get:function(){var e=[];if(!this.tileInfo)return null;for(var r=0,t=this.tileInfo.lods;r<t.length;r++){var l=t[r];e[l.level]=l.levelValue||l.level}return e},enumerable:!0,configurable:!0}),r.prototype.readSpatialReference=function(e,r){return e||r.fullExtent&&r.fullExtent.spatialReference&&a.SpatialReference.fromJSON(r.fullExtent.spatialReference)},Object.defineProperty(r.prototype,"tileServers",{get:function(){if(!this.urlTemplate)return null;var e=[],r=this,t=r.urlTemplate,l=r.subDomains,o=new f.Url(t),n=o.scheme?o.scheme+"://":"//",i=n+o.authority+"/";if(-1===o.authority.indexOf("{subDomain}"))e.push(i);else if(l&&l.length>0&&o.authority.split(".").length>1)for(var a=0,p=l;a<p.length;a++){var s=p[a];e.push(n+o.authority.replace(/\{subDomain\}/gi,s)+"/")}return e.map(function(e){return"/"!==e.charAt(e.length-1)&&(e+="/"),e})},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"urlPath",{get:function(){if(!this.urlTemplate)return null;var e=this.urlTemplate,r=new f.Url(e),t=(r.scheme?r.scheme+"://":"//")+r.authority+"/";return e.substring(t.length)},enumerable:!0,configurable:!0}),r.prototype.readUrlTemplate=function(e,r){return e||r.templateUrl},r.prototype.writeUrlTemplate=function(e,r){e&&d.isProtocolRelative(e)&&(e="https:"+e),r.templateUrl=e?d.normalize(e):e},r.prototype.fetchTile=function(e,r,t,l){void 0===l&&(l={});var o=l.signal,n=l.timestamp,i=this.getTileUrl(e,r,t),a={responseType:"image",signal:o};return null!=n&&(a.query={_ts:l.timestamp}),p(i,a).then(function(e){return e.data})},r.prototype.getTileUrl=function(e,r,t){var l=this.levelValues[e],o=this.tileServers[r%this.tileServers.length]+y.replace(this.urlPath,{level:l,col:t,row:r});return o=o.replace(/\{level\}/gi,""+l).replace(/\{row\}/gi,""+r).replace(/\{col\}/gi,""+t)},o([m.property({type:String,value:"",json:{write:!0}})],r.prototype,"copyright",void 0),o([m.property({type:a.Extent,json:{write:!0}})],r.prototype,"fullExtent",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"legendEnabled",void 0),o([m.property({type:["show","hide"]})],r.prototype,"listMode",void 0),o([m.property({dependsOn:["tileInfo"]})],r.prototype,"levelValues",null),o([m.property({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:function(){return{enabled:!1}}}}})],r.prototype,"isReference",void 0),o([m.property({type:["WebTiledLayer"],value:"WebTiledLayer"})],r.prototype,"operationalLayerType",void 0),o([m.property({readOnly:!0,json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),o([m.property({type:a.SpatialReference})],r.prototype,"spatialReference",void 0),o([m.reader("spatialReference",["spatialReference","fullExtent.spatialReference"])],r.prototype,"readSpatialReference",null),o([m.property({type:[String],json:{write:!0}})],r.prototype,"subDomains",void 0),o([m.property({type:S,json:{write:!0}})],r.prototype,"tileInfo",void 0),o([m.property({readOnly:!0,dependsOn:["urlTemplate","subDomains"]})],r.prototype,"tileServers",null),o([m.property({json:{read:!1}})],r.prototype,"type",void 0),o([m.property({dependsOn:["urlTemplate"]})],r.prototype,"urlPath",null),o([m.property({type:String,json:{origins:{"portal-item":{read:{source:"url"}}}}})],r.prototype,"urlTemplate",void 0),o([m.reader("urlTemplate",["urlTemplate","templateUrl"])],r.prototype,"readUrlTemplate",null),o([m.writer("urlTemplate",{templateUrl:{type:String}})],r.prototype,"writeUrlTemplate",null),o([m.property({type:R.default,json:{write:!0}})],r.prototype,"wmtsInfo",void 0),r=o([m.subclass("esri.layers.WebTileLayer")],r)}(m.declared(w.RefreshableLayer(b.ScaleRangeLayer(h.OperationalLayer(g.PortalLayer(c.MultiOriginJSONMixin(v)))))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n){Object.defineProperty(r,"__esModule",{value:!0}),r.RefreshableLayer=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.refreshInterval=0,r}return t(r,e),r.prototype.refresh=function(){this.emit("refresh")},o([n.property({type:Number,cast:function(e){return e>=.1?e:e<=0?0:.1},json:{write:!0,origins:{"web-document":{write:!0}}}})],r.prototype,"refreshInterval",void 0),r=o([n.subclass("esri.layers.mixins.RefreshableLayer")],r)}(n.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/WMTSLayerInfo.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/WMTSLayerInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,i,s){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){return e.call(this,r)||this}t(r,e),p=r,r.prototype.clone=function(){return new p({customLayerParameters:i.clone(this.customLayerParameters),customParameters:i.clone(this.customParameters),layerIdentifier:this.layerIdentifier,tileMatrixSet:this.tileMatrixSet,url:this.url})};var p;return o([s.property({json:{type:Object,write:!0}})],r.prototype,"customLayerParameters",void 0),o([s.property({json:{type:Object,write:!0}})],r.prototype,"customParameters",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"layerIdentifier",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"tileMatrixSet",void 0),o([s.property({type:String,json:{write:!0}})],r.prototype,"url",void 0),r=p=o([s.subclass("esri.layer.support.WMTSLayerInfo")],r)}(s.declared(p.JSONSupport));r.WMTSLayerInfo=a,r.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=32.js.map