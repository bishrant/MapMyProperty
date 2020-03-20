(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/portal/support/jsonContext":"./node_modules/arcgis-js-api/portal/support/jsonContext.js",
	"arcgis-js-api/portal/support/layersLoader":"./node_modules/arcgis-js-api/portal/support/layersLoader.js",
	"arcgis-js-api/renderers/support/styleUtils":"./node_modules/arcgis-js-api/renderers/support/styleUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[104],{

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

/***/ "./node_modules/arcgis-js-api/portal/support/layersLoader.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/portal/support/layersLoader.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../layers/support/lazyLayerLoader */ "./node_modules/arcgis-js-api/layers/support/lazyLayerLoader.js"),__webpack_require__(/*! ../Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ./jsonContext */ "./node_modules/arcgis-js-api/portal/support/jsonContext.js"),__webpack_require__(/*! ../../renderers/support/styleUtils */ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,n,o,l,i,s,u,p){function y(e,r){return a(this,void 0,void 0,function(){var a;return t(this,function(t){switch(t.label){case 0:return a=e.instance.portalItem,a&&a.id?[4,a.load(r)]:[2,l.resolve()];case 1:return t.sent(),c(e),[2,d(e,r)]}})})}function c(e){var r=e.instance.portalItem;if(-1===e.supportedTypes.indexOf(r.type))throw new o("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}'",{type:r.type,expectedType:e.supportedTypes.join(", ")})}function d(e,r){return a(this,void 0,void 0,function(){var a,n,o,l,i,s;return t(this,function(t){switch(t.label){case 0:return a=e.instance,(n=a.portalItem,o=n.url,l=n.title,i=u.createForItem(n),"group"===a.type)?(a.read({title:l},i),[2,f(a,e)]):(o&&a.read({url:o},i),[4,h(e,r)]);case 1:return s=t.sent(),s&&a.read(s,i),a.read({title:l},i),[2,p.loadStyleRenderer(a,i)]}})})}function f(e,r){var t,a=e.portalItem.type;switch(a){case"Feature Service":t=i.layerLookupMap.FeatureLayer;break;case"Stream Service":t=i.layerLookupMap.StreamLayer;break;case"Scene Service":t=i.layerLookupMap.SceneLayer;break;case"Feature Collection":t=i.layerLookupMap.FeatureLayer;break;default:throw new o("portal:unsupported-item-type-as-group","The item type '"+a+"' is not supported as a 'GroupLayer'")}var n;return t().then(function(e){return n=e,h(r)}).then(function(r){return r&&Array.isArray(r.layers)?m(e,n,r):v(e,n)})}function v(e,r){if(!e.portalItem.url)return l.resolve();var t={responseType:"json",query:{f:"json"}};return n(e.portalItem.url,t).then(function(t){var a=t.data;if(a&&Array.isArray(a.layers)){var n=a.layers.map(function(e){return{id:e.id,name:e.name}});return m(e,r,{layers:n})}})}function m(e,r,t){var a=t.showLegend,n=t.layers.slice();n.reverse(),n.forEach(function(t){var n=new r({portalItem:e.portalItem,layerId:t.id,sublayerTitleMode:"service-name"});if("Feature Collection"===e.portalItem.type){var o={origin:"portal-item",portal:e.portalItem.portal||s.getDefault()};n.read(t,o),null!=a&&n.read({showLegend:a},o)}e.add(n)})}function h(e,r){if(!1===e.supportsData)return l.resolve();var t=e.instance;return t.portalItem.fetchData("json",r).catch(function(){return null}).then(function(e){var r,a=e;if(I(t)){var n=!0;if(e&&Array.isArray(a.layers)){null==t.layerId&&(t.layerId=a.layers[0].id);for(var o=0;o<a.layers.length;o++)if(a.layers[o].id===t.layerId){r=a.layers[o];break}r&&(1===a.layers.length&&(n=!1),null!=e.showLegend&&(r.showLegend=e.showLegend))}return n&&"service-name"!==t.sublayerTitleMode&&(t.sublayerTitleMode="item-title-and-service-name"),r}return e})}function I(e){return"stream"!==e.type&&"layerId"in e}Object.defineProperty(r,"__esModule",{value:!0}),r.load=y}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/styleUtils.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/styleUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/asyncUtils */ "./node_modules/arcgis-js-api/core/asyncUtils.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,i,s){function a(e,r,a){return n(this,void 0,void 0,function(){var n,l,u;return t(this,function(t){switch(t.label){case 0:return n=e&&e.getAtOrigin&&e.getAtOrigin("renderer",r.origin),n&&"unique-value"===n.type&&n.styleOrigin?[4,o.result(n.populateFromStyle())]:[3,2];case 1:l=t.sent(),i.throwIfAborted(a),!1===l.ok&&(u=l.error,r&&r.messages&&r.messages.push(new s("renderer:style-reference","Failed to create unique value renderer from style reference: "+u.message,{error:u,context:r})),e.clear("renderer",r.origin)),t.label=2;case 2:return[2]}})})}Object.defineProperty(r,"__esModule",{value:!0}),r.loadStyleRenderer=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=104.js.map