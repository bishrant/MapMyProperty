(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/mixins/ArcGISMapService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISMapService.js",
	"arcgis-js-api/layers/mixins/ArcGISService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"arcgis-js-api/layers/mixins/RefreshableLayer":"./node_modules/arcgis-js-api/layers/mixins/RefreshableLayer.js",
	"arcgis-js-api/layers/mixins/SublayersOwner":"./node_modules/arcgis-js-api/layers/mixins/SublayersOwner.js",
	"arcgis-js-api/layers/support/Sublayer":"./node_modules/arcgis-js-api/layers/support/Sublayer.js",
	"arcgis-js-api/layers/support/layerSourceUtils":"./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js",
	"arcgis-js-api/layers/support/sublayerUtils":"./node_modules/arcgis-js-api/layers/support/sublayerUtils.js",
	"esri/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"arcgis-js-api/renderers":"./node_modules/arcgis-js-api/renderers.js",
	"esri/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaults":"./node_modules/arcgis-js-api/symbols/support/defaults.js",
	"arcgis-js-api/symbols/support/defaultsJSON":"./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/arcgis-js-api/layers/mixins/ArcGISMapService.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/ArcGISMapService.js ***!
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

//  copyright

/**
                 * The copyright text as defined by the service.
                 *
                 * @name copyright
                 * @type {string}
                 *
                 * @memberof module:esri/layers/mixins/ArcGISMapService
                 */

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../support/commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,p,o,i,s,a){Object.defineProperty(r,"__esModule",{value:!0}),r.ArcGISMapService=function(e){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.capabilities=void 0,r.copyright=null,r.fullExtent=null,r.legendEnabled=!0,r.spatialReference=null,r.version=null,r}return t(r,e),r.prototype.readCapabilities=function(e,r){var t=r.capabilities&&r.capabilities.split(",").map(function(e){return e.toLowerCase().trim()});if(!t)return{operations:{supportsQuery:!1,supportsExportMap:!1,supportsExportTiles:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};var p=this.type,o=-1!==t.indexOf("query"),i=-1!==t.indexOf("map"),s=!!r.exportTilesAllowed,a=-1!==t.indexOf("tilemap"),n="tile"!==p&&!!r.supportsDynamicLayers,l="tile"!==p&&(!r.tileInfo||n),u="tile"!==p&&(!r.tileInfo||n),y="tile"!==p;return{operations:{supportsQuery:o,supportsExportMap:i,supportsExportTiles:s,supportsTileMap:a},exportMap:i?{supportsSublayersChanges:y,supportsDynamicLayers:n,supportsSublayerVisibility:l,supportsSublayerDefinitionExpression:u}:null,exportTiles:s?{maxExportTilesCount:+r.maxExportTilesCount}:null}},r.prototype.readVersion=function(e,r){var t=r.currentVersion;return t||(t=r.hasOwnProperty("capabilities")||r.hasOwnProperty("tables")?10:r.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t},p([o.property({readOnly:!0})],r.prototype,"capabilities",void 0),p([o.reader("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],r.prototype,"readCapabilities",null),p([o.property({json:{read:{source:"copyrightText"}}})],r.prototype,"copyright",void 0),p([o.property({type:i})],r.prototype,"fullExtent",void 0),p([o.property({json:{origins:{service:{read:!1},"portal-item":{read:!1}}}})],r.prototype,"id",void 0),p([o.property({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],r.prototype,"legendEnabled",void 0),p([o.property(a.popupEnabled)],r.prototype,"popupEnabled",void 0),p([o.property({type:s})],r.prototype,"spatialReference",void 0),p([o.property()],r.prototype,"version",void 0),p([o.reader("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],r.prototype,"readVersion",null),r=p([o.subclass("esri.layers.mixins.ArcGISMapService")],r)}(o.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/mixins/SublayersOwner.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/mixins/SublayersOwner.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/CollectionFlattener */ "./node_modules/arcgis-js-api/core/CollectionFlattener.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../support/Sublayer */ "./node_modules/arcgis-js-api/layers/support/Sublayer.js"),__webpack_require__(/*! ../support/sublayerUtils */ "./node_modules/arcgis-js-api/layers/support/sublayerUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,s,a,n,i,u,l,o,y,c,p,b){function f(e,r,t){var s=[],a={};return e?(e.forEach(function(e){var n=new p;if(n.read(e,r),t&&(-1===t.indexOf(n.id)?n.visible=!1:n.visible=!0),a[n.id]=n,null!=e.parentLayerId&&-1!==e.parentLayerId){var i=a[e.parentLayerId];i.sublayers||(i.sublayers=[]),i.sublayers.unshift(n)}else s.unshift(n)}),s):s}function d(e){return e.__accessor__.store}function v(e){return e.__accessor__.overridden}function h(e,r){var t=r.get(e.id);if(t){var s=d(e);d(t).forEach(function(e,r){return s.set(r,e)}),v(t)&&(e.__accessor__.overridden=l.mixin(v(e)||{},v(t))),t.sublayers&&(e.sublayers=t.sublayers.map(function(e){return h(e,r)}))}else e.sublayers&&e.sublayers.forEach(function(e){return h(e,r)});return e}Object.defineProperty(r,"__esModule",{value:!0});var S=o.getLogger("esri.layers.TileLayer");r.SublayersOwner=function(e){return function(e){function r(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];var s=e.apply(this,r)||this;return s.allSublayers=new i({root:s,rootCollectionNames:["sublayers"],getChildrenFunction:function(e){return e.sublayers}}),s.watch("sublayers",function(e,r){return s._handleSublayersChange(e,r)},!0),s}return s(r,e),r.prototype.readServiceSublayers=function(e,r,t){return f(r.layers,t)},r.prototype.readSublayersFromItemOrWebMap=function(e,r,t){return!r.layers&&r.visibleLayers?r.visibleLayers.map(function(e){return{id:e}}):f(r.layers,t,r.visibleLayers)},r.prototype.readSublayers=function(e,r,t){var s=f(r.layers,t);return this._updateSublayersForOrigin(3,s),this._updateSublayersForOrigin(5,s),this._updateSublayersForOrigin(4,s),s},r.prototype.writeSublayers=function(e,r,s,a){if(e&&this.serviceSublayers){var n=e.slice().reverse().flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray(),i=this.serviceSublayers.flatten(function(e){var r=e.sublayers;return r&&r.toArray().reverse()}).toArray().reduce(function(e,r){return e.set(r.id,r),e},new Map),u=!1,l=!0;this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers?(u=b.isExportDynamic(n,this.serviceSublayers,this),l=!u&&b.sameStructureAsService(n,this.serviceSublayers)):l=b.sameStructureAsService(n,this.serviceSublayers),r.layers=[],n.forEach(function(e){var s=i.get(e.id),n=t({writeAsDynamic:u,writeOverridesOnly:l,serviceSublayer:s},a),o=e.write({},n);(!l||l&&Object.keys(o).length>1)&&r.layers.push(o)});var o=n.filter(function(e){return e.visible}).map(function(e){return e.id});"tile"!==this.type&&(r.visibleLayers=o)}},r.prototype.findSublayerById=function(e){return this.allSublayers.find(function(r){return r.id===e})},r.prototype.createServiceSublayers=function(){return this.serviceSublayers.map(function(e){return e.clone()})},r.prototype._updateSublayersForOrigin=function(e,r){var t=d(this);if(t.has("sublayers",e)){var s=t.get("sublayers",e),a=s.flatten(function(e){return e.sublayers});if(a.every(function(e){return!d(e).has("minScale")})){var i=a.reduce(function(e,r){return e.set(r.id,r),e},new Map),u=r.map(function(e){return h(e.clone(),i)});t.set("sublayers",new(n.ofType(p))(u),e)}}},r.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t}),this._sublayersHandles=[e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null})],"tile"===this.type&&this._sublayersHandles.push(e.on("before-changes",function(e){S.error(new u("tilelayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault()})))},a([y.property({readOnly:!0})],r.prototype,"allSublayers",void 0),a([y.property({readOnly:!0,type:n.ofType(p)})],r.prototype,"serviceSublayers",void 0),a([y.reader("service","serviceSublayers",["layers"])],r.prototype,"readServiceSublayers",null),a([y.property({value:null,type:n.ofType(p),json:{type:[Number],write:{target:"subLayerIds",allowNull:!0}}})],r.prototype,"sublayers",void 0),a([y.reader(["web-map","web-scene","portal-item"],"sublayers",["layers","visibleLayers"])],r.prototype,"readSublayersFromItemOrWebMap",null),a([y.reader("service","sublayers",["layers"])],r.prototype,"readSublayers",null),a([y.writer("sublayers",{layers:{type:[p]},visibleLayers:{type:[c.Integer]}})],r.prototype,"writeSublayers",null),r=a([y.subclass("esri.layers.mixins.SublayersOwner")],r)}(y.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/Sublayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/Sublayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../../renderers */ "./node_modules/arcgis-js-api/renderers.js"),__webpack_require__(/*! ../../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../../core/Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../../core/accessorSupport/write */ "./node_modules/arcgis-js-api/core/accessorSupport/write.js"),__webpack_require__(/*! ./commonProperties */ "./node_modules/arcgis-js-api/layers/support/commonProperties.js"),__webpack_require__(/*! ./LabelClass */ "./node_modules/arcgis-js-api/layers/support/LabelClass.js"),__webpack_require__(/*! ./layerSourceUtils */ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js"),__webpack_require__(/*! ../../renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js"),__webpack_require__(/*! ../../tasks/support/Query */ "./node_modules/arcgis-js-api/tasks/support/Query.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i,n,o,a,l,s,p,u,y,c,f,d,h,b,g,m,w,S,O,v,P,_){function x(e){return e&&"esriSMS"===e.type}var E=d.getLogger("esri.layers.support.Sublayer"),I=0;return function(r){function n(e){var t=r.call(this,e)||this;return t._sublayersHandles=null,t}t(n,r),c=n,Object.defineProperty(n.prototype,"definitionExpression",{get:function(){return this._get("definitionExpression")},set:function(e){this._setAndNotifyLayer("definitionExpression",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"id",{get:function(){var e=this._get("id");return null==e?I++:e},set:function(e){if(this._get("id")!==e)return!1===this.get("layer.capabilities.exportMap.supportsDynamicLayers")?void this._logLockedError("id"):void this._set("id",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"labelingInfo",{get:function(){return this._get("labelingInfo")},set:function(e){this._setAndNotifyLayer("labelingInfo",e)},enumerable:!0,configurable:!0}),n.prototype.writeLabelingInfo=function(e,r,t,i){i&&!i.writeAsDynamic||e&&e.length&&(r.layerDefinition={drawingInfo:{labelingInfo:e.map(function(e){return e.write({},i)})}})},Object.defineProperty(n.prototype,"labelsVisible",{get:function(){return this._get("labelsVisible")},set:function(e){this._setAndNotifyLayer("labelsVisible",e)},enumerable:!0,configurable:!0}),n.prototype.writeLabelsVisible=function(e,r,t,i){i&&!i.writeAsDynamic||(r.showLabels=e)},Object.defineProperty(n.prototype,"layer",{set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(function(r){return r.layer=e})},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"legendEnabled",{get:function(){return this._get("legendEnabled")},set:function(e){this._set("legendEnabled",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"listMode",{get:function(){return this._get("listMode")},set:function(e){this._set("listMode",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"minScale",{get:function(){return this._get("minScale")},set:function(e){this._setAndNotifyLayer("minScale",e)},enumerable:!0,configurable:!0}),n.prototype.readMinScale=function(e,r){return r.minScale||r.layerDefinition&&r.layerDefinition.minScale||0},n.prototype.writeMinScale=function(e,r,t,i){if(i&&i.writeOverridesOnly){var n=i&&i.serviceSublayer;if(n&&n.minScale===e&&n.maxScale===this.maxScale)return}r.minScale=e},Object.defineProperty(n.prototype,"maxScale",{get:function(){return this._get("maxScale")},set:function(e){this._setAndNotifyLayer("maxScale",e)},enumerable:!0,configurable:!0}),n.prototype.readMaxScale=function(e,r){return r.maxScale||r.layerDefinition&&r.layerDefinition.maxScale||0},n.prototype.writeMaxScale=function(e,r,t,i){if(i&&i.writeOverridesOnly){var n=i&&i.serviceSublayer;if(n&&n.maxScale===e&&n.minScale===this.minScale)return}r.maxScale=e},Object.defineProperty(n.prototype,"opacity",{get:function(){return this._get("opacity")},set:function(e){this._setAndNotifyLayer("opacity",e)},enumerable:!0,configurable:!0}),n.prototype.readOpacity=function(e,r){var t=r.layerDefinition;return 1-.01*(null!=t.transparency?t.transparency:t.drawingInfo.transparency)},n.prototype.writeOpacity=function(e,r,t,i){i&&!i.writeAsDynamic||(r.layerDefinition={drawingInfo:{transparency:100-100*e}})},n.prototype.writeParent=function(e,r,t,i){i&&i.writeOverridesOnly||(this.parent&&this.parent!==this.layer?r.parentLayerId=this.parent.id:r.parentLayerId=-1)},Object.defineProperty(n.prototype,"popupEnabled",{get:function(){return this._get("popupEnabled")},set:function(e){this._set("popupEnabled",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"popupTemplate",{get:function(){return this._get("popupTemplate")},set:function(e){this._set("popupTemplate",e)},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"renderer",{get:function(){return this._get("renderer")},set:function(e){if(e)for(var r=0,t=e.getSymbols();r<t.length;r++){var i=t[r];if(p.isSymbol3D(i)){E.warn("Sublayer renderer should use 2D symbols");break}}this._setAndNotifyLayer("renderer",e)},enumerable:!0,configurable:!0}),n.prototype.readRenderer=function(e,r,t){return e=r.layerDefinition.drawingInfo.renderer||void 0,e&&((e=P.read(e,r,t)||void 0)||E.error("Failed to create renderer",{rendererDefinition:r.drawingInfo.renderer,layer:this,context:t})),e},n.prototype.writeRenderer=function(e,r,t,i){i&&!i.writeAsDynamic||(r.layerDefinition={drawingInfo:{renderer:e.toJSON()}})},n.prototype.writeWebSceneRenderer=function(e,r,t,i){i&&!i.writeAsDynamic||(r.layerDefinition={drawingInfo:{renderer:e.toJSON()}})},Object.defineProperty(n.prototype,"source",{get:function(){return this._get("source")||{mapLayerId:this.id,type:v.MAPLAYER}},set:function(e){this._setAndNotifyLayer("source",e)},enumerable:!0,configurable:!0}),n.prototype.writeSource=function(e,r,t,i){i&&!i.writeAsDynamic&&i.writeOverridesOnly||(r.layerDefinition={source:v.sourceToJSON(e)})},Object.defineProperty(n.prototype,"sublayers",{set:function(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)},enumerable:!0,configurable:!0}),n.prototype.castSublayers=function(e){return m.default(u.ofType(c),e)},n.prototype.writeSublayers=function(e,r,t,i){i&&i.writeOverridesOnly||this.get("sublayers.length")&&(r[t]=this.sublayers.map(function(e){return e.id}).toArray().reverse())},Object.defineProperty(n.prototype,"title",{get:function(){return this._get("title")},set:function(e){this._set("title",e)},enumerable:!0,configurable:!0}),n.prototype.writeTitle=function(e,r,t,i){if(i&&i.writeOverridesOnly){var n=i&&i.serviceSublayer;if(n&&n.title===e)return}r[t]=e},Object.defineProperty(n.prototype,"url",{get:function(){var e=this.layer,r=this.source;if(!e)return null;if(v.isMapLayerSource(r))return e.parsedUrl.path+"/"+r.mapLayerId;var t={layer:JSON.stringify({source:v.sourceToJSON(this.source)})};return e.parsedUrl.path+"/dynamicLayer?"+b.objectToQuery(t)},set:function(e){e?this._override("url",e):this._clearOverride("url")},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"visible",{get:function(){return this._get("visible")},set:function(e){this._setAndNotifyLayer("visible",e)},enumerable:!0,configurable:!0}),n.prototype.writeVisible=function(e,r,t,i){if(i&&i.writeOverridesOnly){var n=i&&i.serviceSublayer;if(n&&n.visible===e)return}r[t]=e},n.prototype.clone=function(){var e=new c;return this.hasOwnProperty("definitionExpression")&&(e.definitionExpression=this.definitionExpression),this.hasOwnProperty("id")&&(e.id=this.id),this.hasOwnProperty("labelingInfo")&&(e.labelingInfo=f.clone(this.labelingInfo)),this.hasOwnProperty("labelsVisible")&&(e.labelsVisible=this.labelsVisible),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("minScale")&&(e.minScale=this.minScale),this.hasOwnProperty("maxScale")&&(e.maxScale=this.maxScale),this.hasOwnProperty("opacity")&&(e.opacity=this.opacity),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("popupEnabled")&&(e.popupEnabled=this.popupEnabled),this.hasOwnProperty("popupTemplate")&&(e.popupTemplate=this.popupTemplate?this.popupTemplate.clone():this.popupTemplate),this.hasOwnProperty("renderer")&&(e.renderer=this.renderer?this.renderer.clone():this.renderer),this.hasOwnProperty("source")&&(e.source=f.clone(this.source)),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers?this.sublayers.clone():this.sublayers),this.hasOwnProperty("title")&&(e.title=this.title),e},n.prototype.createQuery=function(){return new _({returnGeometry:!0,where:this.definitionExpression||"1=1"})},n.prototype.createFeatureLayer=function(){return a(this,void 0,void 0,function(){var r,t,i,n,a;return o(this,function(o){switch(o.label){case 0:return this.hasOwnProperty("sublayers")?[2,null]:(r=this.layer&&this.layer.parsedUrl,t=this.source,i=null,r&&(i=v.isMapLayerSource(t)?r.path+"/"+t.mapLayerId:r.path+"/dynamicLayer"),[4,h.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(3), __webpack_require__.e(11), __webpack_require__.e(13), __webpack_require__.e(17)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../FeatureLayer */ "./node_modules/arcgis-js-api/layers/FeatureLayer.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})]);case 1:return n=o.sent(),a=new n({url:i}),this.hasOwnProperty("definitionExpression")&&(a.definitionExpression=this.definitionExpression),this.hasOwnProperty("labelingInfo")&&(a.labelingInfo=f.clone(this.labelingInfo)),this.hasOwnProperty("labelsVisible")&&(a.labelsVisible=this.labelsVisible),this.hasOwnProperty("legendEnabled")&&(a.legendEnabled=this.legendEnabled),this.hasOwnProperty("visible")&&(a.visible=this.visible),this.hasOwnProperty("minScale")&&(a.minScale=this.minScale),this.hasOwnProperty("maxScale")&&(a.maxScale=this.maxScale),this.hasOwnProperty("opacity")&&(a.opacity=this.opacity),this.hasOwnProperty("popupTemplate")&&(a.popupTemplate=this.popupTemplate?this.popupTemplate.clone():this.popupTemplate),this.hasOwnProperty("renderer")&&(a.renderer=this.renderer?this.renderer.clone():this.renderer),this.hasOwnProperty("source")&&v.isDataLayerSource(this.source)&&(a.dynamicDataSource=f.clone(this.source)),this.hasOwnProperty("title")&&(a.title=this.title),[2,a]}})})},n.prototype.queryFeatures=function(r,t){var i=this;return void 0===r&&(r=this.createQuery()),h.all([h.create(function(r){return Promise.all(/*! AMD require */[__webpack_require__.e(7), __webpack_require__.e(14), __webpack_require__.e(19), __webpack_require__.e(83)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../../tasks/operations/query */ "./node_modules/arcgis-js-api/tasks/operations/query.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)}),h.create(function(r){return __webpack_require__.e(/*! AMD require */ 3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../../tasks/support/FeatureSet */ "./node_modules/arcgis-js-api/tasks/support/FeatureSet.js")]; (r).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(__webpack_require__.oe)})]).then(function(e){var n=e[0].executeQuery,o=e[1];return n(i.url,_.from(r),t).then(function(e){return o.fromJSON(e.data)})}).then(function(e){return e&&e.features&&e.features.forEach(function(e){e.sourceLayer=i}),e})},n.prototype.toExportImageJSON=function(){var e={id:this.id,source:v.sourceToJSON(this.source)};if(this.definitionExpression&&(e.definitionExpression=this.definitionExpression),this.renderer||this.labelingInfo||null!=this.opacity||null!=this.labelsVisible){var r=e.drawingInfo={};this.renderer&&(r.renderer=this.renderer.toJSON()),null!=this.labelsVisible&&(r.showLabels=this.labelsVisible),!1!==this.labelsVisible&&this.labelingInfo&&(r.labelingInfo=this.labelingInfo.map(function(e){return e.write({},{origin:"service"})}),r.showLabels=!0),null!=this.opacity&&(r.transparency=100-100*this.opacity,this._assignDefaultSymbolColors(r.renderer))}return e},n.prototype._assignDefaultSymbolColors=function(e){this._forEachSimpleMarkerSymbols(e,function(e){e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline&&e.outline.color?e.color=e.outline.color:e.color=[0,0,0,0])})},n.prototype._forEachSimpleMarkerSymbols=function(e,r){if(e){for(var t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:[]),i=0,n=t;i<n.length;i++){var o=n[i];x(o.symbol)&&r(o.symbol)}"symbol"in e&&x(e.symbol)&&r(e.symbol),"defaultSymbol"in e&&x(e.defaultSymbol)&&r(e.defaultSymbol)}},n.prototype._setAndNotifyLayer=function(e,r){var t,i=this.layer,n=this._get(e);switch(e){case"definitionExpression":t="supportsSublayerDefinitionExpression";case"minScale":case"maxScale":case"visible":t="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":t="supportsDynamicLayers"}if(t&&!1===this.get("layer.capabilities.exportMap."+t))return void this._logLockedError(e);this._set(e,r),n!==r&&i&&i.emit&&i.emit("sublayer-update",{propertyName:e})},n.prototype._handleSublayersChange=function(e,r){var t=this;r&&(r.forEach(function(e){e.parent=null,e.layer=null}),this._sublayersHandles.forEach(function(e){return e.remove()}),this._sublayersHandles=null),e&&(e.forEach(function(e){e.parent=t,e.layer=t.layer}),this._sublayersHandles=[e.on("after-add",function(e){var r=e.item;r.parent=t,r.layer=t.layer}),e.on("after-remove",function(e){var r=e.item;r.parent=null,r.layer=null}),e.on("before-changes",function(e){var r=t.get("layer.capabilities.exportMap.supportsSublayersChanges");null==r||r||(E.error(new y("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{layer:t})),e.preventDefault())})])},n.prototype._logLockedError=function(e){E.error(new y("sublayer:locked","Property '"+e+"' can't be changed on Sublayer from the layer '"+this.layer.id+"'",{sublayer:this,layer:this.layer}))};var c;return i([g.property({type:String,value:null,json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],n.prototype,"definitionExpression",null),i([g.property({type:Number,json:{write:{ignoreOrigin:!0}}})],n.prototype,"id",null),i([g.property({value:null,type:[O],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo"}}})],n.prototype,"labelingInfo",null),i([g.writer("labelingInfo")],n.prototype,"writeLabelingInfo",null),i([g.property({type:Boolean,json:{read:{source:"showLabels"},write:{target:"showLabels"}}})],n.prototype,"labelsVisible",null),i([g.writer("labelsVisible")],n.prototype,"writeLabelsVisible",null),i([g.property({value:null})],n.prototype,"layer",null),i([g.property(S.legendEnabled)],n.prototype,"legendEnabled",null),i([g.property({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],n.prototype,"listMode",null),i([g.property({type:Number,value:0,json:{write:{overridePolicy:function(e,r,t){if(w.willPropertyWrite(this,"maxScale",{},t))return{ignoreOrigin:!0}}}}})],n.prototype,"minScale",null),i([g.reader("portal-item","minScale",["minScale","layerDefinition.minScale"])],n.prototype,"readMinScale",null),i([g.writer("minScale")],n.prototype,"writeMinScale",null),i([g.property({type:Number,value:0,json:{write:{overridePolicy:function(e,r,t){if(w.willPropertyWrite(this,"minScale",{},t))return{ignoreOrigin:!0}}}}})],n.prototype,"maxScale",null),i([g.reader("portal-item","maxScale",["maxScale","layerDefinition.maxScale"])],n.prototype,"readMaxScale",null),i([g.writer("maxScale")],n.prototype,"writeMaxScale",null),i([g.property({type:Number,json:{write:{target:"layerDefinition.drawingInfo.transparency"}}})],n.prototype,"opacity",null),i([g.reader("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],n.prototype,"readOpacity",null),i([g.writer("opacity")],n.prototype,"writeOpacity",null),i([g.property({json:{type:Number,write:{target:"parentLayerId",allowNull:!0}}})],n.prototype,"parent",void 0),i([g.writer("parent")],n.prototype,"writeParent",null),i([g.property(S.popupEnabled)],n.prototype,"popupEnabled",null),i([g.property({value:null,type:l,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],n.prototype,"popupTemplate",null),i([g.property({types:s.rendererTypes,value:null,json:{write:{target:"layerDefinition.drawingInfo.renderer"}}})],n.prototype,"renderer",null),i([g.reader("renderer",["layerDefinition.drawingInfo.renderer"])],n.prototype,"readRenderer",null),i([g.writer("renderer")],n.prototype,"writeRenderer",null),i([g.writer("web-scene","renderer",{"layerDefinition.drawingInfo.renderer":{types:s.webSceneRendererTypes}})],n.prototype,"writeWebSceneRenderer",null),i([g.property({cast:v.castSource,json:{read:{source:"layerDefinition.source",reader:v.sourceFromJSON},write:{target:"layerDefinition.source"}}})],n.prototype,"source",null),i([g.writer("source")],n.prototype,"writeSource",null),i([g.property({value:null,json:{type:[m.Integer],write:{target:"subLayerIds",allowNull:!0}}})],n.prototype,"sublayers",null),i([g.cast("sublayers")],n.prototype,"castSublayers",null),i([g.writer("sublayers")],n.prototype,"writeSublayers",null),i([g.property({type:String,value:null,json:{read:{source:"name"},write:{target:"name",allowNull:!0,ignoreOrigin:!0}}})],n.prototype,"title",null),i([g.writer("title")],n.prototype,"writeTitle",null),i([g.property({type:String,dependsOn:["layer","source"],json:{read:{source:"layerUrl"},write:{target:"layerUrl",overridePolicy:function(){return{enabled:this._isOverridden("url")}}}}})],n.prototype,"url",null),i([g.property({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility"}}})],n.prototype,"visible",null),i([g.writer("visible")],n.prototype,"writeVisible",null),n=c=i([g.subclass("esri.layers.support.Sublayer")],n)}(g.declared(c.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js ***!
  \***********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,a,t){function o(e){return null!=e&&e.hasOwnProperty("mapLayerId")}function i(e){return null!=e&&e.hasOwnProperty("dataSource")}function l(e){return e?(o(e)&&(e.type=r.MAPLAYER),i(e)&&(e.type=r.DATALAYER,e.dataSource.type||y(e.dataSource)),e):e}function n(e){var a={};return e.type===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):e.type===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=u(e.dataSource)),a.type=p.toJSON(e.type),t.fixJson(a)}function c(e){var a={};return p.fromJSON(e.type)===r.MAPLAYER?(a.mapLayerId=e.mapLayerId,e.gdbVersion&&(a.gdbVersion=e.gdbVersion)):p.fromJSON(e.type)===r.DATALAYER&&(e.fields&&(a.fields=e.fields),a.dataSource=s(e.dataSource)),a.type=p.fromJSON(e.type),t.fixJson(a)}function y(e){e.workspaceId?e.gdbVersion?e.type="table":e.query||e.oidFields?e.type="query-table":e.type="raster":e.leftTableKey&&e.rightTableKey&&e.leftTableSource&&e.rightTableSource&&(e.type="join-table",e.leftTableSource=l(e.leftTableSource),e.rightTableSource=l(e.rightTableSource))}function u(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"query-table":r={geometryType:d.toJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"join-table":r={leftTableSource:n(e.leftTableSource),rightTableSource:n(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.toJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.toJSON(e.type),t.fixJson(r)}function s(e){var r;switch(e.type){case"table":r={dataSourceName:e.dataSourceName,workspaceId:e.workspaceId,gdbVersion:e.gdbVersion};break;case"queryTable":r={geometryType:d.fromJSON(e.geometryType),workspaceId:e.workspaceId,query:e.query,oidFields:e.oidFields,spatialReference:e.spatialReference};break;case"joinTable":r={leftTableSource:c(e.leftTableSource),rightTableSource:c(e.rightTableSource),leftTableKey:e.leftTableKey,rightTableKey:e.rightTableKey,joinType:f.fromJSON(e.joinType)};break;case"raster":r={workspaceId:e.workspaceId,dataSourceName:e.dataSourceName}}return r.type=b.fromJSON(e.type),t.fixJson(r)}Object.defineProperty(r,"__esModule",{value:!0}),r.MAPLAYER="map-layer",r.DATALAYER="data-layer";var d=new a.default({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch"}),p=new a.default({mapLayer:r.MAPLAYER,dataLayer:r.DATALAYER}),b=new a.default({joinTable:"join-table",queryTable:"query-table"}),f=new a.default({esriLeftOuterJoin:"left-outer-join",esriLeftInnerJoin:"left-inner-join"});r.isMapLayerSource=o,r.isDataLayerSource=i,r.castSource=l,r.sourceToJSON=n,r.sourceFromJSON=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/sublayerUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/sublayerUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./layerSourceUtils */ "./node_modules/arcgis-js-api/layers/support/layerSourceUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,n){function u(r,e,u){return!!r.some(function(r){var e=r.source;return!(!e||e.type===n.MAPLAYER&&e.mapLayerId===r.id&&(!e.gdbVersion||e.gdbVersion===u.gdbVersion))||null!=r.renderer||null!=r.labelingInfo||r.hasOwnProperty("opacity")&&null!=r.opacity||r.hasOwnProperty("labelsVisible")&&null!=r.labelsVisible})||!t(r,e)}function l(r,e){return e.slice().reverse().flatten(function(r){var e=r.sublayers;return e&&e.toArray().reverse()}).every(function(e,n){var u=r[n];return u&&e.id===u.id&&(null==e.sublayers&&null==u.sublayers||null!=e.sublayers&&null!=u.sublayers&&e.sublayers.map(function(r){return r.id}).join(",")===u.sublayers.map(function(r){return r.id}).join(","))})}function t(r,e){function n(r){var e=r.id,l=r.sublayers;u.unshift(e),l&&l.toArray().forEach(n)}if(!r||!r.length)return!0;var u=[];if(e.forEach(n),r.length>u.length)return!1;for(var l=0,t=u.length,i=0,s=r;i<s.length;i++){for(var a=s[i].id;l<t&&u[l]!==a;)l++;if(l>=t)return!1}return!0}Object.defineProperty(e,"__esModule",{value:!0}),e.isExportDynamic=u,e.sameStructureAsService=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers.js":
/*!*************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers.js ***!
  \*************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./renderers/ClassBreaksRenderer */ "./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js"),__webpack_require__(/*! ./renderers/DictionaryRenderer */ "./node_modules/arcgis-js-api/renderers/DictionaryRenderer.js"),__webpack_require__(/*! ./renderers/DotDensityRenderer */ "./node_modules/arcgis-js-api/renderers/DotDensityRenderer.js"),__webpack_require__(/*! ./renderers/HeatmapRenderer */ "./node_modules/arcgis-js-api/renderers/HeatmapRenderer.js"),__webpack_require__(/*! ./renderers/Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./renderers/SimpleRenderer */ "./node_modules/arcgis-js-api/renderers/SimpleRenderer.js"),__webpack_require__(/*! ./renderers/UniqueValueRenderer */ "./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js"),__webpack_require__(/*! ./renderers/support/jsonUtils */ "./node_modules/arcgis-js-api/renderers/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n,s,d,a,i,t,R,p){function l(e){return e instanceof r.BaseRenderer}Object.defineProperty(r,"__esModule",{value:!0}),r.ClassBreaksRenderer=n,r.DictionaryRenderer=s,r.DotDensityRenderer=d,r.HeatmapRenderer=a,r.BaseRenderer=i,r.SimpleRenderer=t,r.UniqueValueRenderer=R,r.isRenderer=l,r.read=p.read,r.write=p.write,r.fromJSON=p.fromJSON,r.rendererTypes={key:"type",base:r.BaseRenderer,typeMap:{heatmap:r.HeatmapRenderer,simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer,"dot-density":r.DotDensityRenderer,dictionary:r.DictionaryRenderer}},r.webSceneRendererTypes={key:"type",base:r.BaseRenderer,typeMap:{simple:r.SimpleRenderer,"unique-value":r.UniqueValueRenderer,"class-breaks":r.ClassBreaksRenderer}}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaults.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaults.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../SimpleFillSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleFillSymbol.js"),__webpack_require__(/*! ../SimpleLineSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleLineSymbol.js"),__webpack_require__(/*! ../SimpleMarkerSymbol */ "./node_modules/arcgis-js-api/symbols/SimpleMarkerSymbol.js"),__webpack_require__(/*! ../TextSymbol */ "./node_modules/arcgis-js-api/symbols/TextSymbol.js"),__webpack_require__(/*! ./defaultsJSON */ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,l,o,r,t,S,n,y,m){function i(e){if(r.isNone(e))return null;switch(e.type){case"mesh":return null;case"point":case"multipoint":return l.defaultPointSymbol2D;case"polyline":return l.defaultPolylineSymbol2D;case"polygon":case"extent":return l.defaultPolygonSymbol2D;default:o.neverReached(e)}return null}Object.defineProperty(l,"__esModule",{value:!0}),l.defaultPointSymbol2D=n.fromJSON(m.defaultPointSymbolJSON),l.defaultPolylineSymbol2D=S.fromJSON(m.defaultPolylineSymbolJSON),l.defaultPolygonSymbol2D=t.fromJSON(m.defaultPolygonSymbolJSON),l.defaultTextSymbol2D=y.fromJSON(m.defaultTextSymbolJSON),l.getDefaultSymbol2D=i,l.errorPointSymbol2D=n.fromJSON(m.errorPointSymbolJSON),l.errorPolylineSymbol2D=S.fromJSON(m.errorPolylineSymbolJSON),l.errorPolygonSymbol2D=t.fromJSON(m.errorPolygonSymbolJSON)}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/defaultsJSON.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,o){Object.defineProperty(o,"__esModule",{value:!0}),o.defaultColor=[252,146,31,255],o.defaultOutlineColor=[153,153,153,255],o.defaultPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",size:6,color:o.defaultColor,outline:{width:.75,color:[153,153,153,255]}},o.defaultPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",width:.75,color:o.defaultColor},o.defaultPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{width:.75,color:[255,255,255,191]}},o.defaultTextSymbolJSON={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},o.errorPointSymbolJSON={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},o.errorPolylineSymbolJSON={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},o.errorPolygonSymbolJSON={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=25.js.map