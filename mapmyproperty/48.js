(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/support/ExportWMSImageParameters":"./node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters.js",
	"arcgis-js-api/layers/support/wmsUtils":"./node_modules/arcgis-js-api/layers/support/wmsUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/ExportWMSImageParameters.js ***!
  \*******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/Handles */ "./node_modules/arcgis-js-api/core/Handles.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./wmsUtils */ "./node_modules/arcgis-js-api/layers/support/wmsUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,a,s,l,i,o){var p={visible:"visibleSublayers"},u=[102100,3857,102113,900913],c=[3395,54004];return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r._layerHandles=new l,r.extent=null,r._scale=null,r.view=null,r}return n(r,e),Object.defineProperty(r.prototype,"layer",{set:function(e){var r=this;this._get("layer")!==e&&(this._set("layer",e),this._layerHandles&&(this._layerHandles.removeAll(),this._layerHandles=null),e&&(this._layerHandles||(this._layerHandles=new l),this._layerHandles.add([e.sublayers.on("change",function(){return r.notifyChange("visibleSublayers")}),e.on("wms-sublayer-update",function(e){return r.notifyChange(p[e.propertyName])})])))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"layers",{get:function(){return this.visibleSublayers.filter(function(e){return e.name}).map(function(e){return e.name}).join(",")},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"scale",{get:function(){return null!=this._scale?this._scale:this.view&&this.view.scale||0},set:function(e){this.view||(this._scale=e,this.notifyChange("scale"))},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"version",{get:function(){return(this._get("version")||0)+1},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"visibleSublayers",{get:function(){var e=this,r=e.layer,t=e.scale,n=r.sublayers,a=[],s=function(e){var r=e.minScale,n=e.maxScale,l=e.sublayers,i=e.visible,o=0===t||(0===r||t<=r)&&(0===n||t>=n);i&&o&&(a.unshift(e),l&&l.forEach(s))};return n&&n.forEach(s),a},enumerable:!0,configurable:!0}),Object.defineProperty(r.prototype,"wkid",{get:function(){var e=this,r=e.extent,t=e.layer,n=t.spatialReferences,a=r.spatialReference&&r.spatialReference.wkid;n&&-1===n.indexOf(a)&&r.spatialReference.latestWkid&&(a=r.spatialReference.latestWkid);var s=u.some(function(e){return e===a});if(!n)return a;if(s){var l=[];n.forEach(function(e){u.indexOf(e)>-1&&l.push(e)}),l.length||n.forEach(function(e){c.indexOf(e)>-1&&l.push(e)}),a=l.length>0?l[0]:u[0]}return a},enumerable:!0,configurable:!0}),r.prototype.toJSON=function(){var e=this,r=e.extent,n=e.layer,a=e.layers,s=n.imageFormat,l=n.imageTransparency,i=n.spatialReferences,p=n.version,u=this.wkid;i&&-1===i.indexOf(u)&&r.spatialReference.latestWkid&&(u=r.spatialReference.latestWkid);var c=r.xmin,y=r.ymin,f=r.xmax,d=r.ymax,b="1.3.0"===n.version&&o.coordsReversed(u)?y+","+c+","+d+","+f:c+","+y+","+f+","+d,h={bbox:b,format:s,request:"GetMap",service:"WMS",styles:"",transparent:l,version:p};return isNaN(u)||("1.3.0"===p?h.crs="EPSG:"+u:h.srs="EPSG:"+u),t({},h,{layers:a})},a([i.property()],r.prototype,"extent",void 0),a([i.property()],r.prototype,"layer",null),a([i.property({readOnly:!0,dependsOn:["visibleSublayers"]})],r.prototype,"layers",null),a([i.property({type:Number,dependsOn:["view.scale"]})],r.prototype,"scale",null),a([i.property()],r.prototype,"view",void 0),a([i.property({dependsOn:["layers","layer.imageTransparency"],readOnly:!0})],r.prototype,"version",null),a([i.property({readOnly:!0,dependsOn:["layer.sublayers","scale"]})],r.prototype,"visibleSublayers",null),a([i.property()],r.prototype,"wkid",null),r=a([i.subclass("esri.layers.support.ExportWMSImageParameters")],r)}(i.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/support/wmsUtils.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/wmsUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,a,i){function l(e){if(e){if(v=-1,"string"==typeof e){e=(new DOMParser).parseFromString(e,"text/xml")}var t=e.documentElement;if("ServiceExceptionReport"===t.nodeName){var n=Array.prototype.slice.call(t.childNodes),i=n.map(function(e){return e.textContent}),l=i.join("\r\n");throw new r("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",l)}var s=c("Layer",t);if(s){var o,f="WMS_Capabilities"===t.nodeName||"WMT_MS_Capabilities"===t.nodeName?t.getAttribute("version"):"1.3.0",p=c("Service",t),d=m("Title",p,"")||m("Name",p,""),N=m("AccessConstraints",p,""),g=m("Abstract",p,""),b=parseInt(m("MaxWidth",p,5e3),10),E=parseInt(m("MaxHeight",p,5e3),10),A=c("Capability",t),L=y(t,"GetMap"),S=x(t,"GetMap"),M=h(s,f),w=0;if(Array.prototype.slice.call(A.childNodes).forEach(function(e){"Layer"===e.nodeName&&(0===w?o=e:1===w?(M.name&&(M.name="",M.sublayers.push(h(o,f))),M.sublayers.push(h(e,f))):M.sublayers.push(h(e,f)),w++)}),!M)return null;var O,R,C,F=M.fullExtents;if(O=M.sublayers,O||(O=[]),0===O.length&&O.push(M),!(R=M.extent)){var I=new a(O[0].extent);M.extent=I.toJSON(),R=M.extent}if(C=M.spatialReferences,!C.length&&O.length>0){var T=function(e){var t=[];return e.sublayers.forEach(function(e){!t.length&&e.spatialReferences.length&&(t=e.spatialReferences||T(e))}),t};O.forEach(function(e){C.length||(C=e.spatialReferences||T(e))})}var _,B=x(t,"GetFeatureInfo");if(B){var U=y(t,"GetFeatureInfo");U.indexOf("text/html")>-1?_="text/html":U.indexOf("text/plain")>-1&&(_="text/plain")}if(!_){var q=function(e){e&&(e.queryable=!1,e.sublayers&&e.sublayers.forEach(function(e){q(e)}))};q(M)}var X=u(O),V=M.minScale||0;return{copyright:N,description:g,extent:R,fullExtents:F,featureInfoFormat:_,featureInfoUrl:B,mapUrl:S,maxImageWidth:b,maxImageHeight:E,maxScale:M.maxScale||0,minScale:V,layers:X,spatialReferences:C,supportedImageFormatTypes:L,title:d,version:f}}}}function s(e){return b.some(function(t){var r=t[0],n=t[1];return e>=r&&e<=n})}function o(e){return e.length?e.filter(function(e){return e.popupEnabled&&e.name&&e.queryable}).map(function(e){return e.name}).join(","):""}function u(e){var t=[];return e.forEach(function(e){t.push(e),e.sublayers&&e.sublayers.length&&(t=t.concat(u(e.sublayers)),delete e.sublayers)}),t}function f(e,t,r,n){var a=c(e,r);return a?a.getAttribute(t):n}function c(e,t){var r=t&&t.getElementsByTagName(e);return r&&r.length>0?r[0]:null}function p(e,t){for(var r=0;r<t.childNodes.length;r++){var n=t.childNodes[r];if(n.nodeType===Node.ELEMENT_NODE&&n.nodeName===e)return n}return null}function m(e,t,r){var n=c(e,t);return n?n.textContent:r}function d(e,t,r){if(!e)return null;var n,l,s,o,u=parseFloat(e.getAttribute("minx")),f=parseFloat(e.getAttribute("miny")),c=parseFloat(e.getAttribute("maxx")),p=parseFloat(e.getAttribute("maxy"));r?(n=isNaN(f)?-Number.MAX_VALUE:f,l=isNaN(u)?-Number.MAX_VALUE:u,s=isNaN(p)?Number.MAX_VALUE:p,o=isNaN(c)?Number.MAX_VALUE:c):(n=isNaN(u)?-Number.MAX_VALUE:u,l=isNaN(f)?-Number.MAX_VALUE:f,s=isNaN(c)?Number.MAX_VALUE:c,o=isNaN(p)?Number.MAX_VALUE:p);var m=new i({wkid:t});return new a({xmin:n,ymin:l,xmax:s,ymax:o,spatialReference:m})}function x(e,t){var r=c(t,e),n=c("DCPType",r);if(n){var a=c("HTTP",n);if(a){var i=c("Get",a);if(i){var l=f("OnlineResource","xlink:href",i,null);if(l)return l.indexOf("&")===l.length-1&&(l=l.substring(0,l.length-1)),g(l,["service","request"])}}}return null}function y(e,t){var r=e.getElementsByTagName("Operation");if(!r||!r.length){var n=c(t,e),a=n.getElementsByTagName("Format");return Array.prototype.slice.call(a).map(function(e){return e.textContent})}var i=Array.prototype.slice.call(r),l=[];return i.forEach(function(e){if(e.getAttribute("name")===t){var r=e.getElementsByTagName("Format");Array.prototype.slice.call(r).forEach(function(e){l.push(e.textContent)})}}),l}function N(e,t,r){var n=p(t,e);if(!n)return r;var a=n.textContent;if(null==a||""===a)return r;var i=Number(a);return isNaN(i)?r:i}function h(e,t){if(!e)return null;var r={id:v++,fullExtents:[],parentLayerId:null,queryable:"1"===e.getAttribute("queryable"),spatialReferences:[],sublayers:null},n=c("LatLonBoundingBox",e),l=c("EX_GeographicBoundingBox",e),o=null;n&&(o=d(n,4326)),l&&(o=new a(0,0,0,0,new i({wkid:4326})),o.xmin=parseFloat(m("westBoundLongitude",l,0)),o.ymin=parseFloat(m("southBoundLatitude",l,0)),o.xmax=parseFloat(m("eastBoundLongitude",l,0)),o.ymax=parseFloat(m("northBoundLatitude",l,0))),n||l||(o=new a(-180,-90,180,90,new i({wkid:4326}))),r.minScale=N(e,"MaxScaleDenominator",0),r.maxScale=N(e,"MinScaleDenominator",0);var u=["1.0.0","1.1.0","1.1.1"].indexOf(t)>-1?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(function(e){if("Name"===e.nodeName)r.name=e.textContent||"";else if("Title"===e.nodeName)r.title=e.textContent||"";else if("Abstract"===e.nodeName)r.description=e.textContent||"";else if("BoundingBox"===e.nodeName){var n=e.getAttribute(u);if(n&&0===n.indexOf("EPSG:")){var a=parseInt(n.substring(5),10);0===a||isNaN(a)||o||(o="1.3.0"===t?d(e,a,s(a)):d(e,a))}var i=n&&n.indexOf(":");if(i&&i>-1){var a=parseInt(n.substring(i+1,n.length),10);0===a||isNaN(a)||(a=E[a]?E[a]:a);var l="1.3.0"===t?d(e,a,s(a)):d(e,a);r.fullExtents.push(l)}}else if(e.nodeName===u){var f=e.textContent.split(" ");f.forEach(function(e){0===(e=e.indexOf(":")>-1?parseInt(e.split(":")[1],10):parseInt(e,10))||isNaN(e)||(E[e]&&(e=E[e]),-1===r.spatialReferences.indexOf(e)&&r.spatialReferences.push(e))})}else if("Style"!==e.nodeName||r.legendURL){if("Layer"===e.nodeName){var p=h(e,t);p&&(p.parentLayerId=r.id,r.sublayers||(r.sublayers=[]),r.sublayers.push(p))}}else{var m=c("LegendURL",e);if(m){var x=c("OnlineResource",m);x&&(r.legendURL=x.getAttribute("xlink:href"))}}}),r.extent=o&&o.toJSON(),r}function g(e,t){var r=[],a=n.urlToObject(e);for(var i in a.query)a.query.hasOwnProperty(i)&&-1===t.indexOf(i.toLowerCase())&&r.push(i+"="+a.query[i]);return a.path+(r.length?"?"+r.join("&"):"")}Object.defineProperty(t,"__esModule",{value:!0});var v,b=[[4001,4999],[2044,2045],[2081,2083],[2085,2086],[2093,2093],[2096,2098],[2105,2132],[2169,2170],[2176,2180],[2193,2193],[2200,2200],[2206,2212],[2319,2319],[2320,2462],[2523,2549],[2551,2735],[2738,2758],[2935,2941],[2953,2953],[3006,3030],[3034,3035],[3058,3059],[3068,3068],[3114,3118],[3126,3138],[3300,3301],[3328,3335],[3346,3346],[3350,3352],[3366,3366],[3416,3416],[20004,20032],[20064,20092],[21413,21423],[21473,21483],[21896,21899],[22171,22177],[22181,22187],[22191,22197],[25884,25884],[27205,27232],[27391,27398],[27492,27492],[28402,28432],[28462,28492],[30161,30179],[30800,30800],[31251,31259],[31275,31279],[31281,31290],[31466,31700]],E={84:4326,83:4269,27:4267};t.parseCapabilities=l,t.coordsReversed=s,t.getPopupLayers=o}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=48.js.map