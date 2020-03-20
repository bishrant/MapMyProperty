(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"esri/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeatureSet":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js",
	"esri/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/sources/StreamLayerSource":"./node_modules/arcgis-js-api/layers/graphics/sources/StreamLayerSource.js",
	"arcgis-js-api/layers/support/WebSocketConnector":"./node_modules/arcgis-js-api/layers/support/WebSocketConnector.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

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

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js ***!
  \************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i){Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t,i,o){void 0===e&&(e=null),void 0===t&&(t={}),this.localId=0,this.geohashIndexed=!1,this.geohashX=0,this.geohashY=0,this.geometry=e,t&&(this.attributes=t),i&&(this.centroid=i),null!=o&&(this.objectId=o)}return e}();t.default=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js ***!
  \***************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.objectIdFieldName=null,this.globalIdFieldName=null,this.geohashFieldName=null,this.geometryProperties=null,this.geometryType=null,this.spatialReference=null,this.hasZ=!1,this.hasM=!1,this.features=[],this.fields=[],this.transform=null,this.exceededTransferLimit=!1}return e}();t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){void 0===e&&(e=[]),void 0===t&&(t=[]),this.lengths=e,this.coords=t}return e}();t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/StreamLayerSource.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/StreamLayerSource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../../core/declare */ "./node_modules/arcgis-js-api/core/declare.js"),__webpack_require__(/*! ../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../support/WebSocketConnector */ "./node_modules/arcgis-js-api/layers/support/WebSocketConnector.js"),__webpack_require__(/*! ../../../tasks/QueryTask */ "./node_modules/arcgis-js-api/tasks/QueryTask.js"),__webpack_require__(/*! ../../../request */ "./node_modules/arcgis-js-api/request.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i,s,o,a,u,l){return e([r,t.EsriPromise],{declaredClass:"esri.layers.graphics.sources.StreamLayerSource",constructor:function(e){var r=e&&e.layer;r&&(this.url=r.url)},initialize:function(){this.addResolvingPromise(this._fetchLayers())},properties:{connectionInfo:{get:function(){if(this.layer.hasMemorySource||this.layer.socketUrl)return{serviceSocketUrls:[this.layer.socketUrl]};if(this.sourceJSON){var e,r,t,n,s={},o=this.sourceJSON,a=[],u=[],l=[];if(o.streamUrls&&o.streamUrls.forEach(function(e){"ws"===e.transport&&(a=e.urls,s.token=e.token)},this),a.forEach(function(e){0===e.lastIndexOf("wss",0)?l.push(e):u.push(e)}),(e="https"===i.appUrl.scheme||0===this.url.lastIndexOf("https:",0)?l:0===u.length?l:u)&&e.length>1)for(r=0;r<e.length-1;r++)t=r+Math.floor(Math.random()*(e.length-r)),n=e[t],e[t]=e[r],e[r]=n;return s.serviceSocketUrls=e,s}}},latestUrl:{get:function(){var e=this.sourceJSON,r=e.keepLatestArchive&&e.keepLatestArchive.featuresUrl;return r=r||null}},latestQueryTask:{get:function(){var e=this.latestUrl;return e?new u(e):null}},layer:{},relatedFeaturesInfo:{get:function(){var e=this.sourceJSON||{},r=e.relatedFeatures;return r=r&&r.featuresUrl?r:null}},relatedFeaturesQueryTask:{get:function(){var e=this.relatedFeaturesInfo,r=e?e.featuresUrl:null;return r?new u(r):null}},parsedUrl:{get:function(){return this.url?i.urlToObject(this.url):null}},url:null},createWebSocketConnector:function(e){var r=s.createDeferred();return this.when(function(){var t,i,s,o,u=this.connectionInfo,l=this.layer.spatialReference,c={};try{t=this.makeFilter()}catch(e){return void r.reject(e)}if(u){if(u.socketUrl?s=[u.socketUrl]:u.serviceSocketUrls&&(s=u.serviceSocketUrls.map(function(e){return e+"/"+this.layer.socketDirection}.bind(this))),c.socketUrls=s,t&&(t.where||t.geometry||t.outFields)){var h=t.geometry;h&&"string"!=typeof h&&(h=h.toJSON?JSON.stringify(h.toJSON()):JSON.stringify(h)),i=n.mixin(i||{},{where:t.where,geometry:h,outFields:t.outFields})}u.token&&(i=n.mixin(i||{},{token:u.token})),e&&l&&e.wkid!==l.wkid&&(i=n.mixin(i||{},{outSR:e.wkid})),c.queryParams=i,c.layerSource=this,o=new a(c),r.resolve(o)}else r.reject(new Error("No web socket urls found"))}.bind(this)),r.promise},getWebSocketToken:function(){return this._fetchStreamLayer().then(function(e){var r=e.data,t=null;return r.streamUrls&&r.streamUrls.some(function(e){if("ws"===e.transport)return t=e.token,!0},this),t}.bind(this))},makeFilter:function(e){var r,t=this.layer,i=null;if(e){var s;if(r={},e.hasOwnProperty("where")&&(r.where=e.where),e.hasOwnProperty("geometry")){if((s=e.geometry)&&!s.hasOwnProperty("xmin"))throw new Error("Cannot make filter. Only Extent is supported for the geometry filter");s&&!s.declaredClass&&(s=new o(s)),r.geometry=s}}else{var a=t.filter||{};r={where:a.where,geometry:a.geometry};var u=this.relatedFeaturesInfo&&this.relatedFeaturesInfo.outFields||t.outFields;if(u&&-1===u.indexOf("*")){var l=t.fields.map(function(e){return e.name});i=u.filter(function(e){return-1!==l.indexOf(e)}).join(","),r=n.mixin(r||{},{outFields:i})}}return r},queryFeatures:function(e,r){return s.reject()},_fetchLayers:function(){return this._fetchStreamLayer().then(function(e){return e.ssl&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=e.data,this._fetchArchiveLayer()}.bind(this)).then(function(e){return this.archivedLayerDefinition=e&&e.data,this._fetchRelatedLayer()}.bind(this)).then(function(e){this.relatedLayerDefinition=e&&e.data}.bind(this))},_fetchStreamLayer:function(){return this._requestServiceDefinition({url:this.layer.parsedUrl.path,content:n.mixin({f:"json"},this.layer.parsedUrl.query)})},_fetchArchiveLayer:function(){var e=this.latestUrl;return e?this._requestServiceDefinition({url:e}):s.resolve()},_fetchRelatedLayer:function(){var e=this.relatedFeaturesInfo;return e?this._requestServiceDefinition({url:e.featuresUrl}):s.resolve()},_requestServiceDefinition:function(e){return e&&e.url?l(e.url,{query:n.mixin(e.content||{},{f:"json"}),responseType:"json"}):s.reject(new Error("url is a required options property"))}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/WebSocketConnector.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/WebSocketConnector.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ../../core/Evented */ "./node_modules/arcgis-js-api/core/Evented.js"),__webpack_require__(/*! ../../core/Promise */ "./node_modules/arcgis-js-api/core/Promise.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,t,o,c,s){return(0,n.EsriPromiseMixin)(e.EventedAccessor).createSubclass({declaredClass:"esri.layers.support.WebSocketConnector",initialize:function(){var e=null;this.socketUrls.length||(e=new Error("No urls passed to WebSocketConnector. No live connection possible")),"WebSocket"in window||(e=new Error("The browser does not support Web Sockets. No live connection possible")),e&&this.addResolvingPromise(o.reject(e)),this.queryParams&&this.queryParams.token&&this._set("tokenNeeded",!0)},_socket:null,_connectPromise:null,_disconnectPromise:null,properties:{currentSocketUrl:{value:null,readOnly:!0},layerSource:null,queryParams:null,socketUrls:{value:[]},tokenNeeded:{value:!1},connectionError:{value:null,type:s,readOnly:!0},connectionStatus:{value:"disconnected",readOnly:!0}},connect:function(){var e=this.connectionStatus;return"connected"===e||"connecting"===e?this._connectPromise:"disconnected"===this.connectionStatus?(this._set("connectionStatus","connecting"),this._connect()):"disconnecting"===this.connectionStatus?(this._connectPromise=null,this._disconnectPromise||(this._disconnectPromise=c.once(this,"connectionStatus").then(function(e){if("disconnected"===e.value)return this._connect()}.bind(this))),this._disconnectPromise):void 0},disconnect:function(){var e=this.connectionStatus;"connected"===e?(this._set("connectionStatus","disconnecting"),this._socket?this._socket.close():this._set("connectionStatus","disconnected")):"connecting"===e&&this._connectPromise.then(function(){this.disconnect()}.bind(this))},send:function(e){this._socket&&("object"==typeof e&&(e=JSON.stringify(e)),this._socket.send(e))},_connect:function(){this._connectPromise&&(this._connectPromise=null);var e=o.createDeferred();return this._connectPromise=e,this._getWebSocketToken().then(function(e){e&&(this.queryParams.token=e);var n=this._makeCurrentUrl(),t=new WebSocket(n);t.onopen=this._handleSocketOpen.bind(this),t.onclose=this._handleSocketClose.bind(this),t.onmessage=this._handleSocketMessage.bind(this),this._socket=t}.bind(this)).catch(function(e){var n=new s("web-socket-connector:connect","Could not get websocket token for secured service",e);this._set("connectionError",n),this._connectPromise.reject(n)}.bind(this)),e.promise},_getWebSocketToken:function(){var e=this.queryParams,n=e&&e.token,t=this.tokenNeeded;return n?o.resolve(n):t?this.layerSource.getWebSocketToken():o.resolve()},_makeCurrentUrl:function(){var e,n,o,c=this.queryParams,s=this.socketUrls;return 1!==s.length&&this.currentSocketUrl?(e=s.indexOf(this.currentSocketUrl),n=e>=s.length-1?0:e+1,o=s[n]):o=s[0],this._set("currentSocketUrl",o),c&&(o+="?"+t.objectToQuery(c)),o},_handleSocketOpen:function(){this._set("connectionStatus","connected"),this._set("connectionError",null),this._disconnectPromise=null,this._connectPromise&&this._connectPromise.resolve()},_handleSocketClose:function(e){var n,t=null;this.queryParams&&(this.queryParams.token=null),e.wasClean&&!e.code||(1001===e.code?n="Service is going away.":4400===e.code?n=e.reason||"Invalid url parameters. Check filter properties.":4404===e.code?n="Service not found":4401===e.code||4403===e.code?n="Not authorized":e.wasClean||(n=e.reason||"Unknown reason"),n&&(t=new s("web-socket-connector:connection closed","Connection failed: "+n),this._set("connectionError",t),this._connectPromise&&this._connectPromise.reject(t))),this._connectPromise=null,this._set("connectionStatus","disconnected"),this._socket=null},_handleSocketMessage:function(e){this.emit("data-received",e.data)}})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=92.js.map