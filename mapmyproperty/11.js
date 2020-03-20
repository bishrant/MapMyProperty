(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/mixins/ArcGISService":"./node_modules/arcgis-js-api/layers/mixins/ArcGISService.js",
	"arcgis-js-api/layers/mixins/PortalLayer":"./node_modules/arcgis-js-api/layers/mixins/PortalLayer.js",
	"esri/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/support/popupUtils":"./node_modules/arcgis-js-api/support/popupUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

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

/***/ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/FieldsIndex.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i){function s(t){return"date"===t.type||"esriFieldTypeDate"===t.type}function n(t){return t.toLowerCase().trim()}return function(){function t(t){if(this.fields=t,this._fieldsMap=new Map,this._dateFieldsSet=new Set,this.dateFields=[],t){for(var e=[],i=0,r=t;i<r.length;i++){var o=r[i],a=o&&o.name;if(a){var d=n(a);this._fieldsMap.set(a,o),this._fieldsMap.set(d,o),e.push(d),s(o)&&(this.dateFields.push(o),this._dateFieldsSet.add(o))}}e.sort(),this.uid=e.join(",")}}return t.prototype.destroy=function(){this._fieldsMap.clear()},t.prototype.has=function(t){return null!=this.get(t)},t.prototype.get=function(t){return null!=t?this._fieldsMap.get(t)||this._fieldsMap.get(n(t)):void 0},t.prototype.isDateField=function(t){return this._dateFieldsSet.has(this.get(t))},t.prototype.normalizeFieldName=function(t){var e=this.get(t);if(e)return e.name},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/support/popupUtils.js":
/*!**********************************************************!*\
  !*** ./node_modules/arcgis-js-api/support/popupUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! dojo/i18n!../widgets/Popup/nls/Popup */ "./node_modules/dojo-webpack-plugin/loaders/dojo/i18n/index.js!./node_modules/arcgis-js-api/widgets/Popup/nls/Popup.js"),__webpack_require__(/*! ../PopupTemplate */ "./node_modules/arcgis-js-api/PopupTemplate.js"),__webpack_require__(/*! ../popup/content */ "./node_modules/arcgis-js-api/popup/content.js"),__webpack_require__(/*! ../popup/FieldInfo */ "./node_modules/arcgis-js-api/popup/FieldInfo.js"),__webpack_require__(/*! ../popup/support/FieldInfoFormat */ "./node_modules/arcgis-js-api/popup/support/FieldInfoFormat.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,r,a,l,o){function s(e,t){var n=e.displayField,a=e.fields,l=e.title,o=e.visibleFieldNames,s=e.editFieldsInfo;if(!a)return null;var u=i({},b,t),f=d(a,u);if(!f)return null;var m=y({titleBase:l,fields:f.fields,displayField:n}),c=F(f.limitExceeded),v=p({fields:f.fields,visibleFieldNames:o,editFieldsInfo:s});return new r({title:m,content:c,fieldInfos:v})}function d(e,t){var i=e;if(t.ignoreFieldTypes&&(e=e.filter(function(e){return-1===t.ignoreFieldTypes.indexOf(e.type)})),0===e.length)return null;var n=t.maximumFields&&e.length>t.maximumFields;return n&&(e=e.slice(0,t.maximumFields)),e===i&&(e=e.slice()),e.sort(u),{fields:e,limitExceeded:n}}function u(e,t){return"oid"===e.type?-1:"oid"===t.type?1:x(e)?-1:x(t)?1:(e.alias||e.name).toLocaleLowerCase().localeCompare((t.alias||t.name).toLocaleLowerCase())}function f(e,t){if(!e||!t)return!1;var i=t.creationDateField,n=t.creatorField,r=t.editDateField,a=t.editorField;return-1!==[i&&i.toLowerCase(),n&&n.toLowerCase(),r&&r.toLowerCase(),a&&a.toLowerCase()].indexOf(e.toLowerCase())}function m(e,t){return e.editable&&-1===C.indexOf(e.type)&&!f(e.name,t)}function p(e){var t=e.fields,i=e.visibleFieldNames,n=e.editFieldsInfo;return t.map(function(e){return new l({fieldName:e.name,isEditable:m(e,n),label:e.alias,format:c(e),visible:!i||i.has(e.name)})})}function c(e){switch(e.type){case"small-integer":case"integer":case"single":return new o({digitSeparator:!0,places:0});case"double":return new o({digitSeparator:!0,places:2});case"date":return new o({dateFormat:"long-month-day-year"});default:return null}}function F(e){var t=[new a.FieldsContent,new a.AttachmentsContent];return e&&t.push(new a.TextContent({text:"<small>"+n.tooManyFields+"</small>"})),t}function v(e,t){for(var i=0,n=e;i<n.length;i++){var r=n[i];if(r&&r.valueType&&r.valueType===t)return r.name}return null}function g(e){for(var t=0,i=e;t<i.length;t++){var n=i[t];if(n&&n.name){var r=n.name.toLowerCase();if(r.indexOf("name")>-1||r.indexOf("title")>-1)return n.name}}return null}function w(e){return e&&e.length?v(e,"name-or-title")||v(e,"unique-identifier")||v(e,"type-or-category")||g(e):null}function y(e){var t=e.titleBase,i=e.fields,n=e.displayField,r=n||w(i);return r?t+": {"+r.trim()+"}":t}function x(e){return"name"===(e.name&&e.name.toLowerCase())||("name"===(e.alias&&e.alias.toLowerCase())||void 0)}Object.defineProperty(t,"__esModule",{value:!0});var C=["oid","global-id","guid"];t.createPopupTemplate=s;var b={ignoreFieldTypes:["geometry","blob","raster","guid","xml"],maximumFields:75}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=11.js.map