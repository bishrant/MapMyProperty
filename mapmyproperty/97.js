(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/MultiOriginJSONSupport":"./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js",
	"arcgis-js-api/core/accessorSupport/MultiOriginStore":"./node_modules/arcgis-js-api/core/accessorSupport/MultiOriginStore.js",
	"arcgis-js-api/layers/UnsupportedLayer":"./node_modules/arcgis-js-api/layers/UnsupportedLayer.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[97],{

/***/ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ./tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ./Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ./accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./accessorSupport/MultiOriginStore */ "./node_modules/arcgis-js-api/core/accessorSupport/MultiOriginStore.js"),__webpack_require__(/*! ./accessorSupport/PropertyOrigin */ "./node_modules/arcgis-js-api/core/accessorSupport/PropertyOrigin.js"),__webpack_require__(/*! ./accessorSupport/read */ "./node_modules/arcgis-js-api/core/accessorSupport/read.js"),__webpack_require__(/*! ./accessorSupport/utils */ "./node_modules/arcgis-js-api/core/accessorSupport/utils.js"),__webpack_require__(/*! ./accessorSupport/write */ "./node_modules/arcgis-js-api/core/accessorSupport/write.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,r,e,i,o,n,s,u,p,a,c){function f(t){return a.getProperties(t).store}function g(t){return t&&"getAtOrigin"in t&&"originOf"in t}Object.defineProperty(r,"__esModule",{value:!0}),r.MultiOriginJSONMixin=function(t){return function(t){function r(){for(var r=[],e=0;e<arguments.length;e++)r[e]=arguments[e];var i=t.apply(this,r)||this,o=a.getProperties(i),n=o.metadatas,u=o.store,p=new s.default;return o.store=p,u.keys().forEach(function(t){p.set(t,u.get(t),0)}),Object.keys(n).forEach(function(t){o.internalGet(t)&&p.set(t,o.internalGet(t),0)}),i}return e(r,t),r.prototype.clear=function(t,r){return void 0===r&&(r="user"),f(this).delete(t,u.nameToId(r))},r.prototype.read=function(t,r){p.default(this,t,r)},r.prototype.write=function(t,r){return t=t||{},c.default(this,t,r),t},r.prototype.getAtOrigin=function(t,r){var e=f(this),i=u.nameToId(r);if("string"==typeof t)return e.get(t,i);var o={};return t.forEach(function(t){o[t]=e.get(t,i)}),o},r.prototype.originOf=function(t){var r=f(this);if("string"==typeof t)return u.idToName(r.originOf(t));var e={};t.forEach(function(t){e[t]=u.idToName(r.originOf(t))})},r.prototype.revert=function(t,r){var e,i=f(this),o=u.nameToId(r),n=a.getProperties(this);e="string"==typeof t?"*"===t?i.keys(o):[t]:t,e.forEach(function(t){n.propertyInvalidated(t),i.revert(t,o),n.propertyCommitted(t)})},r.prototype.removeOrigin=function(t){for(var r=f(this),e=u.nameToId(t),i=r.keys(e),o=0,n=i;o<n.length;o++){var s=n[o];r.originOf(s)===e&&r.set(s,r.get(s,e),6)}},r.prototype.updateOrigin=function(t,r){var e=f(this),i=u.nameToId(r),o=this.get(t);e.delete(t),e.set(t,o,i)},r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(t))};var l=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return e(r,t),r=i([n.subclass("esri.core.MultiOriginJSONSupport")],r)}(n.declared(r.MultiOriginJSONMixin(o)));r.MultiOriginJSONSupport=l,r.isMultiOriginJSONMixin=g}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/accessorSupport/MultiOriginStore.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/accessorSupport/MultiOriginStore.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r){Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){this._propertyOriginMap=new Map,this._originStores=new Array(7),this._values=new Map}return t.prototype.get=function(t,e){var r=void 0===e?this._values:this._originStores[e];return r?r.get(t):void 0},t.prototype.keys=function(t){var e=null==t?this._values:this._originStores[t];return e?r.keysOfMap(e):[]},t.prototype.set=function(t,e,r){void 0===r&&(r=6);var i=this._originStores[r];if(i||(i=new Map,this._originStores[r]=i),i.set(t,e),!this._values.has(t)||this._propertyOriginMap.get(t)<=r){var s=this._values.get(t);return this._values.set(t,e),this._propertyOriginMap.set(t,r),s!==e}return!1},t.prototype.delete=function(t,e){void 0===e&&(e=6);var r=this._originStores[e];if(r){var i=r.get(t);if(r.delete(t),this._values.has(t)&&this._propertyOriginMap.get(t)===e){this._values.delete(t);for(var s=e-1;s>=0;s--){var o=this._originStores[s];if(o&&o.has(t)){this._values.set(t,o.get(t)),this._propertyOriginMap.set(t,s);break}}}return i}},t.prototype.has=function(t,e){var r=void 0===e?this._values:this._originStores[e];return!!r&&r.has(t)},t.prototype.revert=function(t,e){for(;e>0&&!this.has(t,e);)--e;var r=this._originStores[e],i=r&&r.get(t),s=this._values.get(t);return this._values.set(t,i),this._propertyOriginMap.set(t,e),s!==i},t.prototype.originOf=function(t){return this._propertyOriginMap.get(t)||0},t.prototype.forEach=function(t){this._values.forEach(t)},t}();e.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/UnsupportedLayer.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/UnsupportedLayer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/MultiOriginJSONSupport */ "./node_modules/arcgis-js-api/core/MultiOriginJSONSupport.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/scheduling */ "./node_modules/arcgis-js-api/core/scheduling.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./Layer */ "./node_modules/arcgis-js-api/layers/Layer.js"),__webpack_require__(/*! ./mixins/PortalLayer */ "./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,i,n,p,s,u,l,c,a){return function(e){function r(r){var o=e.call(this,r)||this;return o.resourceInfo=null,o.type="unsupported",o}return o(r,e),r.prototype.initialize=function(){var e=this;this.addResolvingPromise(s.create(function(r,o){u.schedule(function(){var r=e.resourceInfo&&(e.resourceInfo.layerType||e.resourceInfo.type),t="Unsupported layer type";r&&(t+=" "+r),o(new i("layer:unsupported-layer-type",t,{layerType:r}))})}))},r.prototype.read=function(e,r){var o={resourceInfo:e};null!=e.id&&(o.id=e.id),null!=e.title&&(o.title=e.title),this.inherited(arguments,[o,r])},r.prototype.write=function(e){return n.mixin(e||{},this.resourceInfo,{id:this.id})},t([l.property({readOnly:!0})],r.prototype,"resourceInfo",void 0),t([l.property({type:["show","hide"]})],r.prototype,"listMode",void 0),t([l.property({json:{read:!1},readOnly:!0,value:"unsupported"})],r.prototype,"type",void 0),r=t([l.subclass("esri.layers.UnsupportedLayer")],r)}(l.declared(a.PortalLayer(p.MultiOriginJSONMixin(c))))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ })

}]);
//# sourceMappingURL=97.js.map