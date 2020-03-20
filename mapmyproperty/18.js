(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/geometry/pe":"./node_modules/arcgis-js-api/geometry/pe.js",
	"arcgis-js-api/geometry/projection":"./node_modules/arcgis-js-api/geometry/projection.js",
	"arcgis-js-api/geometry/support/GeographicTransformation":"./node_modules/arcgis-js-api/geometry/support/GeographicTransformation.js",
	"arcgis-js-api/geometry/support/GeographicTransformationStep":"./node_modules/arcgis-js-api/geometry/support/GeographicTransformationStep.js",
	"esri/layers/graphics/data/projectionSupport":"./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js",
	"arcgis-js-api/layers/graphics/data/projectionSupport":"./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/arcgis-js-api/geometry/pe.js":
/*!***************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/pe.js ***!
  \***************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,_,r,o){function n(){return!!t._pe}function p(){return!!r("esri-wasm")}function P(){return f||(f=o.create(function(t,_){Promise.all(/*! AMD require */[__webpack_require__.e("common"), __webpack_require__.e(72)]).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./support/pe-wasm */ "./node_modules/arcgis-js-api/geometry/support/pe-wasm.js")]; (function(r){r({locateFile:function(t){return e.toUrl("./support/"+t)},onAbort:function(e){_(new Error(e))}}).then(function(e){i(e),t()})}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}).catch(__webpack_require__.oe)}))}function i(e){function r(e,t,_){e[t]=_(e[t])}t._pe=e,c.init(),g.init(),T.init(),O.init(),S.init(),t.PeGCSExtent=function(e){function r(){return null!==e&&e.apply(this,arguments)||this}return _(r,e),r.prototype.destroy=function(){t._pe.destroy(this)},r}(t._pe.PeGCSExtent);for(var o=[t._pe.PeDatum,t._pe.PeGeogcs,t._pe.PeGeogtran,t._pe.PeObject,t._pe.PeParameter,t._pe.PePrimem,t._pe.PeProjcs,t._pe.PeSpheroid,t._pe.PeUnit],n=0,p=o;n<p.length;n++){var P=p[n];r(P.prototype,"getName",function(e){return function(){return e.call(this,new Array(c.PE_NAME_MAX))}})}for(var i=0,a=[t._pe.PeGeogtran,t._pe.PeProjcs];i<a.length;i++){var P=a[i];r(P.prototype,"getParameters",function(e){return function(){for(var _=new Array(c.PE_PARM_MAX),r=e.call(this),o=0;o<_.length;o++){var n=t._pe.getValue(r,"*");_[o]=n?t._pe.wrapPointer(n,t._pe.PeParameter):null,r+=Int32Array.BYTES_PER_ELEMENT}return _}})}r(t._pe.PeHorizon.prototype,"getCoord",function(e){return function(){var t=this.getSize();if(!t)return null;var _=[];return s(_,t,e.call(this)),_}}),r(t._pe.PeGTlistExtendedEntry.prototype,"getEntries",function(e){var _=t._pe._pe_getPeGTlistExtendedGTsSize();return function(){var r=null,o=e.call(this);if(!t._pe.compare(o,t._pe.NULL)){r=[o];var n=this.getSteps();if(n>1)for(var p=t._pe.getPointer(o),P=1;P<n;P++)r.push(t._pe.wrapPointer(p+_*P,t._pe.PeGTlistExtendedGTs))}return r}});var E=t._pe._pe_getPeHorizonSize(),u=function(e){return function(){var _=this._cache;if(_||(_=new Map,this._cache=_),_.has(e))return _.get(e);var r=null,o=e.call(this);if(!t._pe.compare(o,t._pe.NULL)){r=[o];var n=o.getNump();if(n>1)for(var p=t._pe.getPointer(o),P=1;P<n;P++)r.push(t._pe.wrapPointer(p+E*P,t._pe.PeHorizon))}return _.set(e,r),r}};r(t._pe.PeProjcs.prototype,"horizonGcsGenerate",u),r(t._pe.PeProjcs.prototype,"horizonPcsGenerate",u),t._pe.PeObject.prototype.toString=function(e){void 0===e&&(e=c.PE_STR_OPTS_NONE),t._pe.ensureCache.prepare();var _=t._pe.getPointer(this),r=t._pe.ensureInt8(new Array(c.PE_BUFFER_MAX));return t._pe.UTF8ToString(t._pe._pe_object_to_string_ext(_,e,r))}}function a(e){if(e){var _=t._pe.getClass(e);if(_){var r=t._pe.getCache(_);if(r){var o=t._pe.getPointer(e);o&&delete r[o]}}}}function E(e,_){for(var r=[],o=new Array(_),n=0;n<e;n++)r.push(t._pe.ensureInt8(o));return r}function u(e){var t;return Array.isArray(e[0])?(t=[],e.forEach(function(e){t.push(e[0],e[1])})):t=e,t}function s(e,_,r,o){if(void 0===o&&(o=!1),o)for(var n=0;n<2*_;n++)e[n]=t._pe.getValue(r+n*Float64Array.BYTES_PER_ELEMENT,"double");else for(var p=0===e.length,n=0;n<_;n++)p&&(e[n]=new Array(2)),e[n][0]=t._pe.getValue(r,"double"),e[n][1]=t._pe.getValue(r+Float64Array.BYTES_PER_ELEMENT,"double"),r+=2*Float64Array.BYTES_PER_ELEMENT}Object.defineProperty(t,"__esModule",{value:!0});var f;t._pe=null,t.isLoaded=n,t.isSupported=p,t.load=P;!function(e){function _(e,_,r){t._pe.ensureCache.prepare();var o=u(r),n=r===o,p=t._pe.ensureFloat64(o),P=t._pe._pe_geog_to_proj(t._pe.getPointer(e),_,p);return P&&s(r,_,p,n),P}function r(e,t,r,n){switch(n){case c.PE_TRANSFORM_P_TO_G:return o(e,t,r);case c.PE_TRANSFORM_G_TO_P:return _(e,t,r)}return 0}function o(e,t,_){return n(e,t,_,0)}function n(e,_,r,o){t._pe.ensureCache.prepare();var n=u(r),p=r===n,P=t._pe.ensureFloat64(n),i=t._pe._pe_proj_to_geog_center(t._pe.getPointer(e),_,P,o);return i&&s(r,_,P,p),i}e.geogToProj=_,e.projGeog=r,e.projToGeog=o,e.projToGeogCenter=n}(t.PeCSTransformations||(t.PeCSTransformations={}));var c;!function(e){function _(){e.PE_BUFFER_MAX=t._pe.PeDefs.prototype.PE_BUFFER_MAX,e.PE_NAME_MAX=t._pe.PeDefs.prototype.PE_NAME_MAX,e.PE_MGRS_MAX=t._pe.PeDefs.prototype.PE_MGRS_MAX,e.PE_USNG_MAX=t._pe.PeDefs.prototype.PE_USNG_MAX,e.PE_DD_MAX=t._pe.PeDefs.prototype.PE_DD_MAX,e.PE_DDM_MAX=t._pe.PeDefs.prototype.PE_DDM_MAX,e.PE_DMS_MAX=t._pe.PeDefs.prototype.PE_DMS_MAX,e.PE_UTM_MAX=t._pe.PeDefs.prototype.PE_UTM_MAX,e.PE_PARM_MAX=t._pe.PeDefs.prototype.PE_PARM_MAX,e.PE_TYPE_NONE=t._pe.PeDefs.prototype.PE_TYPE_NONE,e.PE_TYPE_GEOGCS=t._pe.PeDefs.prototype.PE_TYPE_GEOGCS,e.PE_TYPE_PROJCS=t._pe.PeDefs.prototype.PE_TYPE_PROJCS,e.PE_TYPE_GEOGTRAN=t._pe.PeDefs.prototype.PE_TYPE_GEOGTRAN,e.PE_TYPE_COORDSYS=t._pe.PeDefs.prototype.PE_TYPE_COORDSYS,e.PE_TYPE_UNIT=t._pe.PeDefs.prototype.PE_TYPE_UNIT,e.PE_STR_OPTS_NONE=t._pe.PeDefs.prototype.PE_STR_OPTS_NONE,e.PE_STR_AUTH_NONE=t._pe.PeDefs.prototype.PE_STR_AUTH_NONE,e.PE_STR_AUTH_TOP=t._pe.PeDefs.prototype.PE_STR_AUTH_TOP,e.PE_STR_NAME_CANON=t._pe.PeDefs.prototype.PE_STR_NAME_CANON,e.PE_PARM_X0=t._pe.PeDefs.prototype.PE_PARM_X0,e.PE_PARM_ND=t._pe.PeDefs.prototype.PE_PARM_ND,e.PE_TRANSFORM_1_TO_2=t._pe.PeDefs.prototype.PE_TRANSFORM_1_TO_2,e.PE_TRANSFORM_2_TO_1=t._pe.PeDefs.prototype.PE_TRANSFORM_2_TO_1,e.PE_TRANSFORM_P_TO_G=t._pe.PeDefs.prototype.PE_TRANSFORM_P_TO_G,e.PE_TRANSFORM_G_TO_P=t._pe.PeDefs.prototype.PE_TRANSFORM_G_TO_P,e.PE_HORIZON_RECT=t._pe.PeDefs.prototype.PE_HORIZON_RECT,e.PE_HORIZON_POLY=t._pe.PeDefs.prototype.PE_HORIZON_POLY,e.PE_HORIZON_LINE=t._pe.PeDefs.prototype.PE_HORIZON_LINE,e.PE_HORIZON_DELTA=t._pe.PeDefs.prototype.PE_HORIZON_DELTA}e.init=_}(c=t.PeDefs||(t.PeDefs={}));!function(e){function _(){t._pe.PeFactory.prototype.initialize(null)}function r(e){return o(c.PE_TYPE_COORDSYS,e)}function o(e,_){var r=null,o=s[e];if(o||(o={},s[e]=o),o.hasOwnProperty(String(_)))r=o[_];else{var n=t._pe.PeFactory.prototype.factoryByType(e,_);t._pe.compare(n,t._pe.NULL)||(r=n,o[_]=r)}return r=u(r)}function n(e,_){var r=null,o=f[e];if(o||(o={},f[e]=o),o.hasOwnProperty(_))r=o[_];else{var n=t._pe.PeFactory.prototype.fromString(e,_);t._pe.compare(n,t._pe.NULL)||(r=n,o[_]=r)}return r=u(r)}function p(e){return o(c.PE_TYPE_GEOGCS,e)}function P(e){return o(c.PE_TYPE_GEOGTRAN,e)}function i(e){return t._pe.PeFactory.prototype.getCode(e)}function a(e){return o(c.PE_TYPE_PROJCS,e)}function E(e){return o(c.PE_TYPE_UNIT,e)}function u(e){if(e){var _=e.getType();switch(_){case c.PE_TYPE_GEOGCS:e=t._pe.castObject(e,t._pe.PeGeogcs);break;case c.PE_TYPE_PROJCS:e=t._pe.castObject(e,t._pe.PeProjcs);break;case c.PE_TYPE_GEOGTRAN:e=t._pe.castObject(e,t._pe.PeGeogtran);break;default:_&c.PE_TYPE_UNIT&&(e=t._pe.castObject(e,t._pe.PeUnit))}}return e}var s={},f={};e.initialize=_,e.coordsys=r,e.factoryByType=o,e.fromString=n,e.geogcs=p,e.geogtran=P,e.getCode=i,e.projcs=a,e.unit=E}(t.PeFactory||(t.PeFactory={})),t.PeGCSExtent=null;var g;!function(e){function _(){e.PE_GTLIST_OPTS_COMMON=t._pe.PeGTlistExtended.prototype.PE_GTLIST_OPTS_COMMON,o=t._pe._pe_getPeGTlistExtendedEntrySize()}function r(e,_,r,n,p,P){var i=null,a=new t._pe.PeInteger(P);try{var E=t._pe.PeGTlistExtended.prototype.getGTlist(e,_,r,n,p,a);if((P=a.val)&&(i=[E],P>1))for(var u=t._pe.getPointer(E),s=1;s<P;s++)i.push(t._pe.wrapPointer(u+o*s,t._pe.PeGTlistExtendedEntry))}finally{t._pe.destroy(a)}return i}var o;e.init=_,e.getGTlist=r}(g=t.PeGTlistExtended||(t.PeGTlistExtended={}));!function(e){function _(e){if(e&&e.length){for(var _=0,r=e;_<r.length;_++){var o=r[_];a(o),o.getEntries().forEach(function(e){a(e);var t=e.getGeogtran();a(t),t.getParameters().forEach(a),[t.getGeogcs1(),t.getGeogcs2()].forEach(function(e){a(e);var t=e.getDatum();a(t),a(t.getSpheroid()),a(e.getPrimem()),a(e.getUnit())})})}t._pe.PeGTlistExtendedEntry.prototype.Delete(e[0])}}e.destroy=_}(t.PeGTlistExtendedEntry||(t.PeGTlistExtendedEntry={}));!function(e){function _(e,_,r,o,n){t._pe.ensureCache.prepare();var p=u(r),P=r===p,i=t._pe.ensureFloat64(p),a=0;o&&(a=t._pe.ensureFloat64(o));var E=t._pe._pe_geog_to_geog(t._pe.getPointer(e),_,i,a,n);return E&&s(r,_,i,P),E}e.geogToGeog=_}(t.PeGTTransformations||(t.PeGTTransformations={}));!function(e){function _(e,_,r,o,n,p){t._pe.ensureCache.prepare();var P,i;switch(e){case"dd":P=t._pe._pe_geog_to_dd,i=c.PE_DD_MAX;break;case"ddm":P=t._pe._pe_geog_to_ddm,i=c.PE_DDM_MAX;break;case"dms":P=t._pe._pe_geog_to_dms,i=c.PE_DMS_MAX}var a=0;_&&(a=t._pe.getPointer(_));var s=u(o),f=t._pe.ensureFloat64(s),g=E(r,i),T=t._pe.ensureInt32(g),O=P(a,r,f,n,T);if(O)for(var S=0;S<r;S++)p[S]=t._pe.UTF8ToString(g[S]);return O}function r(e,_,r,o,n){t._pe.ensureCache.prepare();var p;switch(e){case"dd":p=t._pe._pe_dd_to_geog;break;case"ddm":p=t._pe._pe_ddm_to_geog;break;case"dms":p=t._pe._pe_dms_to_geog}var P=0;_&&(P=t._pe.getPointer(_));var i=o.map(function(e){return t._pe.ensureString(e)}),a=t._pe.ensureInt32(i),E=t._pe.ensureFloat64(new Array(2*r)),u=p(P,r,a,E);return u&&s(n,r,E),u}function o(e,t,r,o,n){return _("dms",e,t,r,o,n)}function n(e,t,_,o){return r("dms",e,t,_,o)}function p(e,t,r,o,n){return _("ddm",e,t,r,o,n)}function P(e,t,_,o){return r("ddm",e,t,_,o)}function i(e,t,r,o,n){return _("dd",e,t,r,o,n)}function a(e,t,_,o){return r("dd",e,t,_,o)}e.geog_to_dms=o,e.dms_to_geog=n,e.geog_to_ddm=p,e.ddm_to_geog=P,e.geog_to_dd=i,e.dd_to_geog=a}(t.PeNotationDms||(t.PeNotationDms={}));var T;!function(e){function _(){e.PE_MGRS_STYLE_NEW=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_NEW,e.PE_MGRS_STYLE_OLD=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_OLD,e.PE_MGRS_STYLE_AUTO=t._pe.PeNotationMgrs.prototype.PE_MGRS_STYLE_AUTO,e.PE_MGRS_180_ZONE_1_PLUS=t._pe.PeNotationMgrs.prototype.PE_MGRS_180_ZONE_1_PLUS,e.PE_MGRS_ADD_SPACES=t._pe.PeNotationMgrs.prototype.PE_MGRS_ADD_SPACES}function r(e,_,r,o,n,p,P){t._pe.ensureCache.prepare();var i=0;e&&(i=t._pe.getPointer(e));var a=u(r),s=t._pe.ensureFloat64(a),f=E(_,c.PE_MGRS_MAX),g=t._pe.ensureInt32(f),T=t._pe._pe_geog_to_mgrs_extended(i,_,s,o,n,p,g);if(T)for(var O=0;O<_;O++)P[O]=t._pe.UTF8ToString(f[O]);return T}function o(e,_,r,o,n){t._pe.ensureCache.prepare();var p=0;e&&(p=t._pe.getPointer(e));var P=r.map(function(e){return t._pe.ensureString(e)}),i=t._pe.ensureInt32(P),a=t._pe.ensureFloat64(new Array(2*_)),E=t._pe._pe_mgrs_to_geog_extended(p,_,i,o,a);return E&&s(n,_,a),E}e.init=_,e.geog_to_mgrs_extended=r,e.mgrs_to_geog_extended=o}(T=t.PeNotationMgrs||(t.PeNotationMgrs={}));!function(e){function _(e,_,r,o,n,p,P){t._pe.ensureCache.prepare();var i=0;e&&(i=t._pe.getPointer(e));var a=u(r),s=t._pe.ensureFloat64(a),f=E(_,c.PE_MGRS_MAX),g=t._pe.ensureInt32(f),T=t._pe._pe_geog_to_usng(i,_,s,o,n,p,g);if(T)for(var O=0;O<_;O++)P[O]=t._pe.UTF8ToString(f[O]);return T}function r(e,_,r,o){t._pe.ensureCache.prepare();var n=0;e&&(n=t._pe.getPointer(e));var p=r.map(function(e){return t._pe.ensureString(e)}),P=t._pe.ensureInt32(p),i=t._pe.ensureFloat64(new Array(2*_)),a=t._pe._pe_usng_to_geog(n,_,P,i);return a&&s(o,_,i),a}e.geog_to_usng=_,e.usng_to_geog=r}(t.PeNotationUsng||(t.PeNotationUsng={}));var O;!function(e){function _(){e.PE_UTM_OPTS_NONE=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NONE,e.PE_UTM_OPTS_ADD_SPACES=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_ADD_SPACES,e.PE_UTM_OPTS_NS=t._pe.PeNotationUtm.prototype.PE_UTM_OPTS_NS}function r(e,_,r,o,n){t._pe.ensureCache.prepare();var p=0;e&&(p=t._pe.getPointer(e));var P=u(r),i=t._pe.ensureFloat64(P),a=E(_,c.PE_UTM_MAX),s=t._pe.ensureInt32(a),f=t._pe._pe_geog_to_utm(p,_,i,o,s);if(f)for(var g=0;g<_;g++)n[g]=t._pe.UTF8ToString(a[g]);return f}function o(e,_,r,o,n){t._pe.ensureCache.prepare();var p=0;e&&(p=t._pe.getPointer(e));var P=r.map(function(e){return t._pe.ensureString(e)}),i=t._pe.ensureInt32(P),a=t._pe.ensureFloat64(new Array(2*_)),E=t._pe._pe_utm_to_geog(p,_,i,o,a);return E&&s(n,_,a),E}e.init=_,e.geog_to_utm=r,e.utm_to_geog=o}(O=t.PeNotationUtm||(t.PeNotationUtm={}));var S;!function(e){function _(){e.PE_PCSINFO_OPTION_NONE=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_NONE,e.PE_PCSINFO_OPTION_DOMAIN=t._pe.PePCSInfo.prototype.PE_PCSINFO_OPTION_DOMAIN,e.PE_POLE_OUTSIDE_BOUNDARY=t._pe.PePCSInfo.prototype.PE_POLE_OUTSIDE_BOUNDARY,e.PE_POLE_POINT=t._pe.PePCSInfo.prototype.PE_POLE_POINT}function r(_,r){void 0===r&&(r=e.PE_PCSINFO_OPTION_DOMAIN);var n,p;return o.has(_)&&(p=o.get(_),p[r]&&(n=p[r])),n||(n=t._pe.PePCSInfo.prototype.generate(_,r),p||(p=[],o.set(_,p)),p[r]=n),n}var o=new Map;e.init=_,e.generate=r}(S=t.PePCSInfo||(t.PePCSInfo={}));!function(e){function _(){return t._pe.PeVersion.prototype.version_string()}e.version_string=_}(t.PeVersion||(t.PeVersion={})),t._init=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/geometry/projection.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/projection.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ./pe */ "./node_modules/arcgis-js-api/geometry/pe.js"),__webpack_require__(/*! ./SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ./support/GeographicTransformation */ "./node_modules/arcgis-js-api/geometry/support/GeographicTransformation.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,e,r,o,t,i){function u(){return!!d&&o.isLoaded()}function a(){return o.isSupported()}function l(){return v||(v=r.create(function(e,r){var t=o.load();Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ./geometryEngine */ "./node_modules/arcgis-js-api/geometry/geometryEngine.js")]; (function(n){d=n,t.then(function(){d._enableProjection(o),e()},function(n){r(n)})}).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}).catch(__webpack_require__.oe)}))}function f(n,e,r){return void 0===r&&(r=null),n instanceof Array?0===n.length?[]:c(n,n[0].spatialReference,e,r):c([n],n.spatialReference,e,r)[0]}function c(n,e,r,o,u){if(void 0===o&&(o=null),void 0===u&&(u=!1),null===o){var a=i.cacheKey(e,r);void 0!==g[a]?o=g[a]:(o=s(e,r,null),null===o&&(o=new i),g[a]=o)}return d._project(n,e,r instanceof t||!1===u?r:new t(r),o,u)}function s(n,e,r){void 0===r&&(r=null);var o=d._getTransformation(n,e,r);return null!==o?i.fromGE(o):null}function p(n,e,r){void 0===r&&(r=null);var o=d._getTransformationBySuitability(n,e,r);if(null!==o){for(var t=[],u=0,a=o;u<a.length;u++){var l=a[u];t.push(i.fromGE(l))}return t}return[]}Object.defineProperty(e,"__esModule",{value:!0});var d=null;e.isLoaded=u,e.isSupported=a;var v=null;e.load=l,e.project=f;var g={};e.projectMany=c,e.getTransformation=s,e.getTransformations=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/geometry/support/GeographicTransformation.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/GeographicTransformation.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./GeographicTransformationStep */ "./node_modules/arcgis-js-api/geometry/support/GeographicTransformationStep.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,n){return function(){function t(t){if(this.steps=[],this._cached_projection={},this._chain="",this._gtlistentry=null,t&&t.steps)for(var i=0,e=t.steps;i<e.length;i++){var s=e[i];s instanceof n?this.steps.push(s):this.steps.push(new n({wkid:s.wkid,wkt:s.wkt,isInverse:s.isInverse}))}}return t.cacheKey=function(t,i){return[void 0!==t.wkid&&null!==t.wkid?t.wkid.toString():"-1",void 0!==t.wkt&&null!==t.wkt?t.wkt.toString():"",void 0!==i.wkid&&null!==i.wkid?i.wkid.toString():"-1",void 0!==i.wkt&&null!==i.wkt?i.wkt.toString():""].join(",")},t.fromGE=function(i){for(var e=new t,s="",r=0,o=i.steps;r<o.length;r++){var h=o[r],c=n.fromGE(h);e.steps.push(c),s+=c.uid.toString()+","}return e._cached_projection={},e._gtlistentry=null,e._chain=s,e},t.prototype.getInverse=function(){var i=new t;i.steps=[];for(var n=this.steps.length-1;n>=0;n--){var e=this.steps[n];i.steps.push(e.getInverse())}return i},t.prototype.getGTListEntry=function(){for(var t="",i=0,n=this.steps;i<n.length;i++){t+=n[i].uid.toString()+","}return t!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=t),this._gtlistentry},t.prototype.assignCachedGe=function(i,n,e){this._cached_projection[t.cacheKey(i,n)]=e},t.prototype.getCachedGeTransformation=function(i,n){for(var e="",s=0,r=this.steps;s<r.length;s++){e+=r[s].uid.toString()+","}e!==this._chain&&(this._gtlistentry=null,this._cached_projection={},this._chain=e);var o=this._cached_projection[t.cacheKey(i,n)];return void 0===o?null:o},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/geometry/support/GeographicTransformationStep.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/geometry/support/GeographicTransformationStep.js ***!
  \*************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){var i=0;return function(){function e(e){void 0===e&&(e=null),this.uid=i++,e?(this._wkt=void 0!==e.wkt?e.wkt:null,this._wkid=void 0!==e.wkid?e.wkid:-1,this._isInverse=void 0!==e.isInverse&&!0===e.isInverse):(this._wkt=null,this._wkid=-1,this._isInverse=!1)}return e.fromGE=function(t){var i=new e;return i._wkt=t.wkt,i._wkid=t.wkid,i._isInverse=t.isInverse,i},Object.defineProperty(e.prototype,"wkt",{get:function(){return this._wkt},set:function(e){this._wkt=e,this.uid=i++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"wkid",{get:function(){return this._wkid},set:function(e){this._wkid=e,this.uid=i++},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"isInverse",{get:function(){return this._isInverse},set:function(e){this._isInverse=e,this.uid=i++},enumerable:!0,configurable:!0}),e.prototype.getInverse=function(){var t=new e;return t._wkt=this.wkt,t._wkid=this._wkid,t._isInverse=!this.isInverse,t},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js ***!
  \******************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../geometry/projection */ "./node_modules/arcgis-js-api/geometry/projection.js"),__webpack_require__(/*! ../../../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ../../../geometry/support/webMercatorUtils */ "./node_modules/arcgis-js-api/geometry/support/webMercatorUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,i,o,s,a,u){function p(e,r){var t,n,i;if(!r)return null;if("x"in r){var o={x:0,y:0};return t=e(r.x,r.y,y),o.x=t[0],o.y=t[1],null!=r.z&&(o.z=r.z),null!=r.m&&(o.m=r.m),o}if("xmin"in r){var o={xmin:0,ymin:0,xmax:0,ymax:0};return n=e(r.xmin,r.ymin,y),o.xmin=n[0],o.ymin=n[1],i=e(r.xmax,r.ymax,y),o.xmax=i[0],o.ymax=i[1],r.hasZ&&(o.zmin=r.zmin,o.zmax=r.zmax,o.hasZ=!0),r.hasM&&(o.mmin=r.mmin,o.mmax=r.mmax,o.hasM=!0),o}return"rings"in r?{rings:c(r.rings,e),hasM:r.hasM,hasZ:r.hasZ}:"paths"in r?{paths:c(r.paths,e),hasM:r.hasM,hasZ:r.hasZ}:"points"in r?{points:l(r.points,e),hasM:r.hasM,hasZ:r.hasZ}:void 0}function c(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n];t.push(l(o,r))}return t}function l(e,r){for(var t=[],n=0,i=e;n<i.length;n++){var o=i[n],s=r(o[0],o[1],[0,0]);t.push(s),o.length>2&&s.push(o[2]),o.length>3&&s.push(o[3])}return t}function h(e,r){return!m(e,r)||s.isSupported()}function f(e,r){return n(this,void 0,void 0,function(){var n,o,a;return t(this,function(t){if(!r)return[2];if(Array.isArray(e)){for(n=0,o=e;n<o.length;n++)if(a=o[n],m(a.geometry&&a.geometry.spatialReference,r)){if(s.isSupported())return[2,s.load()];throw new i(x,"projection not supported",{inSpatialReference:e,outSpatialReference:r})}return[2]}if(!m(e,r))return[2];if(s.isSupported())return[2,s.load()];throw new i(x,"projection not supported",{inSpatialReference:e,outSpatialReference:r})})})}function m(e,r){return!(!a.isValid(e)||!a.isValid(r)||a.equals(e,r)||u.canProject(e,r))}function d(e,r,t){return e?(t||(t=r,r=e.spatialReference),a.isValid(r)&&a.isValid(t)&&!a.equals(r,t)?u.canProject(r,t)?a.isWebMercator(t)?g(e):j(e):s.projectMany([e],r,t,null,!0)[0]:e):e}function v(e,r,i){return n(this,void 0,void 0,function(){return t(this,function(t){return[2,M.push(e,r,i)]})})}Object.defineProperty(r,"__esModule",{value:!0});var x="feature-store:unsupported-query",y=[0,0];r.doesBrowserSupportProjection=h,r.checkProjectionSupport=f;var g=p.bind(null,u.lngLatToXY),j=p.bind(null,u.xyToLngLat);r.project=d;var _=function(){function e(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}return e.prototype.push=function(e,r,i){return n(this,void 0,void 0,function(){var n,s=this;return t(this,function(t){return e&&e.length&&r&&i&&!a.equals(r,i)||o.resolve(e),n={geometries:e,inSpatialReference:r,outSpatialReference:i,resolve:null},this._jobs.push(n),[2,o.create(function(e){n.resolve=e,null===s._timer&&(s._timer=setTimeout(s._process,10))},function(){var e=s._jobs.indexOf(n);e>-1&&s._jobs.splice(e,1)})]})})},e.prototype._process=function(){this._timer=null;var e=this._jobs.shift();if(e){var r=e.geometries,t=e.inSpatialReference,n=e.outSpatialReference,i=e.resolve;i(u.canProject(t,n)?a.isWebMercator(n)?r.map(g):r.map(j):s.projectMany(r,t,n,null,!0)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}},e}(),M=new _;r.projectMany=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=18.js.map