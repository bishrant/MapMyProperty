(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/core/accessorSupport/diffUtils":"./node_modules/arcgis-js-api/core/accessorSupport/diffUtils.js",
	"arcgis-js-api/core/devEnvironmentUtils":"./node_modules/arcgis-js-api/core/devEnvironmentUtils.js",
	"arcgis-js-api/renderers/ClassBreaksRenderer":"./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js",
	"arcgis-js-api/renderers/Renderer":"./node_modules/arcgis-js-api/renderers/Renderer.js",
	"arcgis-js-api/renderers/UniqueValueRenderer":"./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js",
	"arcgis-js-api/renderers/mixins/VisualVariablesMixin":"./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js",
	"arcgis-js-api/renderers/support/AuthoringInfo":"./node_modules/arcgis-js-api/renderers/support/AuthoringInfo.js",
	"arcgis-js-api/renderers/support/AuthoringInfoClassBreakInfo":"./node_modules/arcgis-js-api/renderers/support/AuthoringInfoClassBreakInfo.js",
	"arcgis-js-api/renderers/support/AuthoringInfoFieldInfo":"./node_modules/arcgis-js-api/renderers/support/AuthoringInfoFieldInfo.js",
	"arcgis-js-api/renderers/support/AuthoringInfoVisualVariable":"./node_modules/arcgis-js-api/renderers/support/AuthoringInfoVisualVariable.js",
	"arcgis-js-api/renderers/support/ClassBreakInfo":"./node_modules/arcgis-js-api/renderers/support/ClassBreakInfo.js",
	"esri/renderers/support/LegendOptions":"./node_modules/arcgis-js-api/renderers/support/LegendOptions.js",
	"arcgis-js-api/renderers/support/LegendOptions":"./node_modules/arcgis-js-api/renderers/support/LegendOptions.js",
	"arcgis-js-api/renderers/support/UniqueValueInfo":"./node_modules/arcgis-js-api/renderers/support/UniqueValueInfo.js",
	"arcgis-js-api/renderers/visualVariables/ColorVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/ColorVariable.js",
	"arcgis-js-api/renderers/visualVariables/OpacityVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/OpacityVariable.js",
	"arcgis-js-api/renderers/visualVariables/RotationVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/RotationVariable.js",
	"esri/renderers/visualVariables/SizeVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js",
	"arcgis-js-api/renderers/visualVariables/SizeVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js",
	"arcgis-js-api/renderers/visualVariables/VisualVariable":"./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js",
	"arcgis-js-api/renderers/visualVariables/VisualVariableFactory":"./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariableFactory.js",
	"arcgis-js-api/renderers/visualVariables/support/OpacityStop":"./node_modules/arcgis-js-api/renderers/visualVariables/support/OpacityStop.js",
	"arcgis-js-api/renderers/visualVariables/support/SizeStop":"./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeStop.js",
	"arcgis-js-api/renderers/visualVariables/support/SizeVariableLegendOptions":"./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeVariableLegendOptions.js",
	"arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions":"./node_modules/arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions.js",
	"arcgis-js-api/symbols/support/styleUtils":"./node_modules/arcgis-js-api/symbols/support/styleUtils.js",
	"arcgis-js-api/tasks/support/AlgorithmicColorRamp":"./node_modules/arcgis-js-api/tasks/support/AlgorithmicColorRamp.js",
	"arcgis-js-api/tasks/support/ColorRamp":"./node_modules/arcgis-js-api/tasks/support/ColorRamp.js",
	"arcgis-js-api/tasks/support/MultipartColorRamp":"./node_modules/arcgis-js-api/tasks/support/MultipartColorRamp.js",
	"arcgis-js-api/tasks/support/colorRamps":"./node_modules/arcgis-js-api/tasks/support/colorRamps.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/arcgis-js-api/core/accessorSupport/diffUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/accessorSupport/diffUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../Collection */ "./node_modules/arcgis-js-api/core/Collection.js"),__webpack_require__(/*! ../maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ./utils */ "./node_modules/arcgis-js-api/core/accessorSupport/utils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n,r,o,i){function f(e){return e instanceof n}function u(e){return e instanceof r?Object.keys(e.items):f(e)?i.getProperties(e).keys():e?Object.keys(e):[]}function l(e,t){return e instanceof r?e.items[t]:e[t]}function c(e,t){return!(!Array.isArray(e)||!Array.isArray(t))&&e.length!==t.length}function a(e){return e?e.declaredClass:null}function s(e,t){var n,r=e.diff;if(r&&"function"==typeof r)return r(e,t);var i=u(e),p=u(t);if(0!==i.length||0!==p.length){if(!i.length||!p.length||c(e,t))return{type:"complete",oldValue:e,newValue:t};var y=p.filter(function(e){return-1===i.indexOf(e)}),v=i.filter(function(e){return-1===p.indexOf(e)}),m=i.filter(function(n){return p.indexOf(n)>-1&&l(e,n)!==l(t,n)}),h=m.concat(y,v).sort(),g=a(e);if(g&&d.indexOf(g)>-1&&h.length)return{type:"complete",oldValue:e,newValue:t};for(var b,V=f(e)&&f(t),j=0,A=h;j<A.length;j++){var O=A[j],w=l(e,O),x=l(t,O),P=void 0;(V||"function"!=typeof w&&"function"!=typeof x)&&(w!==x&&(null==w&&null==x||(P=r&&r[O]&&"function"==typeof r[O]?r[O](w,x):"object"==typeof w&&"object"==typeof x&&a(w)===a(x)?s(w,x):{type:"complete",oldValue:w,newValue:x},o.isSome(P)&&(o.isSome(b)?b.diff[O]=P:b={type:"partial",diff:(n={},n[O]=P,n)}))))}return b}}function p(e,t){if("function"!=typeof e&&"function"!=typeof t&&(e||t))return!e||!t||"object"==typeof e&&"object"==typeof t&&a(e)!==a(t)?{type:"complete",oldValue:e,newValue:t}:s(e,t)}function y(e){if(o.isNone(e))return!0;switch(e.type){case"complete":return!1;case"collection":for(var t=e,n=0,r=t.added;n<r.length;n++){var i=r[n];if(!y(i))return!1}for(var f=0,u=t.removed;f<u.length;f++){var i=u[f];if(!y(i))return!1}for(var l=0,c=t.changed;l<c.length;l++){var i=c[l];if(!y(i))return!1}return!0;case"partial":for(var a in e.diff){var i=e.diff[a];if(!y(i))return!1}return!0}}Object.defineProperty(t,"__esModule",{value:!0});var d=["esri.Color","esri.portal.Portal","esri.symbols.support.Symbol3DAnchorPosition2D","esri.symbols.support.Symbol3DAnchorPosition3D"];t.diff=p,t.isEmpty=y}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/core/devEnvironmentUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/devEnvironmentUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./global */ "./node_modules/arcgis-js-api/core/global.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(c,t,a){function e(c){return c=c||a.location.hostname,g.some(function(t){return null!=c.match(t)})}function r(c,t){return c?(t=t||a.location.hostname,null!=t.match(n)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(l)?c.replace("static.arcgis.com","staticdev.arcgis.com"):null!=t.match(s)?c.replace("static.arcgis.com","staticqa.arcgis.com"):null!=t.match(u)?c.replace("static.arcgis.com","staticqa.arcgis.com"):c):c}function i(c){return c=c||a.location.hostname,[/^zrh-.+?\.esri\.com$/].concat(g).some(function(t){return null!=c.match(t)})}Object.defineProperty(t,"__esModule",{value:!0}),t.isDevEnvironment=e,t.adjustStaticAGOUrl=r,t.isTelemetryDevEnvironment=i;var o=/^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,n=/^devext.arcgis.com$/,s=/^qaext.arcgis.com$/,m=/^jsapps.esri.com$/,l=/^[\w-]*\.mapsdevext.arcgis.com$/,u=/^[\w-]*\.mapsqa.arcgis.com$/,g=[o,n,s,m,l,u]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/ClassBreaksRenderer.js ***!
  \*********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./mixins/VisualVariablesMixin */ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js"),__webpack_require__(/*! ./support/ClassBreakInfo */ "./node_modules/arcgis-js-api/renderers/support/ClassBreakInfo.js"),__webpack_require__(/*! ./support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js"),__webpack_require__(/*! ../support/arcadeOnDemand */ "./node_modules/arcgis-js-api/support/arcadeOnDemand.js"),__webpack_require__(/*! ../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,a,i,s,l,u,p,c,d,f,y,m,h,b,v,g,k,I,B,S){var x=d.getLogger("esri.renderers.ClassBreaksRenderer"),w=new p.default({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"}),F=h.ensureType(k.ClassBreakInfo);return function(e){function t(t){var r=e.call(this,t)||this;return r.backgroundFillSymbol=null,r.classBreakInfos=null,r.defaultLabel=null,r.defaultSymbol=null,r.field=null,r.isMaxInclusive=!0,r.legendOptions=null,r.normalizationField=null,r.normalizationTotal=null,r.type="class-breaks",r.valueExpression=null,r.valueExpressionTitle=null,r._set("classBreakInfos",[]),r}r(t,e),n=t,Object.defineProperty(t.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!0,configurable:!0}),t.prototype.readClassBreakInfos=function(e,t,r){if(Array.isArray(e)){var o=t.minValue;return e.map(function(e){var t=new k.ClassBreakInfo;return t.read(e,r),null==t.minValue&&(t.minValue=o),null==t.maxValue&&(t.maxValue=t.minValue),o=t.maxValue,t})}},t.prototype.writeClassBreakInfos=function(e,t,r,o){var n=e.map(function(e){return e.write({},o)});this._areClassBreaksConsecutive()&&n.forEach(function(e){return delete e.classMinValue}),t[r]=n},t.prototype.readDefaultSymbol=function(e,t,r){return S.read(e,t,r)},t.prototype.writeDefaultSymbolWebScene=function(e,t,r,o){S.writeTarget(e,t,r,o)},t.prototype.writeDefaultSymbol=function(e,t,r,o){S.writeTarget(e,t,r,o)},t.prototype.castField=function(e){return null==e?e:"function"==typeof e?(x.error(".field: field must be a string value"),null):h.ensureString(e)},Object.defineProperty(t.prototype,"minValue",{get:function(){return this.classBreakInfos&&this.classBreakInfos[0]&&this.classBreakInfos[0].minValue||0},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"normalizationType",{get:function(){var e=this._get("normalizationType"),t=!!this.normalizationField,r=null!=this.normalizationTotal;return t||r?(e=t&&"field"||r&&"percent-of-total"||null,t&&r&&x.warn("warning: both normalizationField and normalizationTotal are set!")):"field"!==e&&"percent-of-total"!==e||(e=null),e},set:function(e){this._set("normalizationType",e)},enumerable:!0,configurable:!0}),t.prototype.addClassBreakInfo=function(e,t,r){var o=null;o="number"==typeof e?new k.ClassBreakInfo({minValue:e,maxValue:t,symbol:u.ensureType(r)}):F(c.clone(e)),this.classBreakInfos.push(o),1===this.classBreakInfos.length&&this.notifyChange("minValue")},t.prototype.removeClassBreakInfo=function(e,t){for(var r=this.classBreakInfos.length,o=0;o<r;o++){var n=[this.classBreakInfos[o].minValue,this.classBreakInfos[o].maxValue];if(n[0]===e&&n[1]===t){this.classBreakInfos.splice(o,1);break}}},t.prototype.getBreakIndex=function(e,t){return this.valueExpression&&(f.isNone(t)||f.isNone(t.arcade))&&x.warn(""),this.valueExpression?this._getBreakIndexForExpression(e,t):this._getBreakIndexForField(e)},t.prototype.getClassBreakInfo=function(e,t){return i(this,void 0,void 0,function(){var r,o,n,i;return a(this,function(a){switch(a.label){case 0:return r=t,this.valueExpression&&(f.isNone(t)||f.isNone(t.arcade))?(o=[{},r],n={},[4,B.loadArcade()]):[3,2];case 1:r=s.apply(void 0,o.concat([(n.arcade=a.sent(),n)])),a.label=2;case 2:return i=this.getBreakIndex(e,r),[2,-1!==i?this.classBreakInfos[i]:null]}})})},t.prototype.getSymbol=function(e,t){if(this.valueExpression&&(f.isNone(t)||f.isNone(t.arcade)))return void x.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");var r=this.getBreakIndex(e,t);return r>-1?this.classBreakInfos[r].symbol:this.defaultSymbol},t.prototype.getSymbolAsync=function(e,t){return i(this,void 0,void 0,function(){var r,o,n,i;return a(this,function(a){switch(a.label){case 0:return r=t,this.valueExpression&&(f.isNone(t)||f.isNone(t.arcade))?(o=[{},r],n={},[4,B.loadArcade()]):[3,2];case 1:r=s.apply(void 0,o.concat([(n.arcade=a.sent(),n)])),a.label=2;case 2:return i=this.getBreakIndex(e,r),[2,i>-1?this.classBreakInfos[i].symbol:this.defaultSymbol]}})})},t.prototype.getSymbols=function(){var e=[];return this.classBreakInfos.forEach(function(t){t.symbol&&e.push(t.symbol)}),this.defaultSymbol&&e.push(this.defaultSymbol),e},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(e,t){return e+t.getAttributeHash()},"")},t.prototype.getMeshHash=function(){var e=JSON.stringify(this.backgroundFillSymbol),t=JSON.stringify(this.defaultSymbol),r=this.normalizationField+"."+this.normalizationType+"."+this.normalizationTotal;return e+"."+t+"."+this.classBreakInfos.reduce(function(e,t){return e+t.getMeshHash()},"")+"."+r+"."+this.field+"."+this.valueExpression},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({field:this.field,backgroundFillSymbol:this.backgroundFillSymbol&&this.backgroundFillSymbol.clone(),defaultLabel:this.defaultLabel,defaultSymbol:this.defaultSymbol&&this.defaultSymbol.clone(),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,classBreakInfos:c.clone(this.classBreakInfos),isMaxInclusive:this.isMaxInclusive,normalizationField:this.normalizationField,normalizationTotal:this.normalizationTotal,normalizationType:this.normalizationType,visualVariables:c.clone(this.visualVariables),legendOptions:c.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone()})},t.prototype.collectRequiredFields=function(e,t){return i(this,void 0,void 0,function(){var r;return a(this,function(o){switch(o.label){case 0:return r=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)],[4,y.all(r)];case 1:return o.sent(),[2]}})})},t.prototype.collectSymbolFields=function(e,t){return i(this,void 0,void 0,function(){var r;return a(this,function(o){switch(o.label){case 0:return r=this.getSymbols().map(function(r){return r.collectRequiredFields(e,t)}).concat([b.collectArcadeFieldNames(e,t,this.valueExpression)]),b.collectField(e,t,this.field),b.collectField(e,t,this.normalizationField),[4,y.all(r)];case 1:return o.sent(),[2]}})})},t.prototype._getBreakIndexForExpression=function(e,t){var r=f.unwrapOr(t,{}),o=r.viewingMode,n=r.scale,a=r.spatialReference,i=r.arcade,s=this._cache.compiledFunc,l=f.expect(i).arcadeUtils;if(!s){var u=l.createSyntaxTree(this.valueExpression);s=l.createFunction(u),this._cache.compiledFunc=s}var p=l.executeFunction(s,l.createExecContext(e,l.getViewInfo({viewingMode:o,scale:n,spatialReference:a})));return this._getBreakIndexfromInfos(p)},t.prototype._getBreakIndexForField=function(e){var t=this.field,r=e.attributes,o=this.normalizationType,n=parseFloat(r[t]);if(o){var a=this.normalizationTotal,i=parseFloat(r[this.normalizationField]);if("log"===o)n=Math.log(n)*Math.LOG10E;else if("percent-of-total"!==o||isNaN(a)){if("field"===o&&!isNaN(i)){if(isNaN(n)||isNaN(i))return-1;n/=i}}else n=n/a*100}return this._getBreakIndexfromInfos(n)},t.prototype._getBreakIndexfromInfos=function(e){var t=this.isMaxInclusive;if(null!=e&&"number"==typeof e&&!isNaN(e))for(var r=0;r<this.classBreakInfos.length;r++){var o=[this.classBreakInfos[r].minValue,this.classBreakInfos[r].maxValue];if(o[0]<=e&&(t?e<=o[1]:e<o[1]))return r}return-1},t.prototype._areClassBreaksConsecutive=function(){for(var e=this.classBreakInfos,t=e.length,r=1;r<t;r++)if(e[r-1].maxValue!==e[r].minValue)return!1;return!0};var n;return o([m.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"_cache",null),o([m.property({types:{base:l.BaseSymbol,key:"type",typeMap:{"simple-fill":u.symbolTypesRenderer.typeMap["simple-fill"],"picture-fill":u.symbolTypesRenderer.typeMap["picture-fill"],"polygon-3d":u.symbolTypesRenderer.typeMap["polygon-3d"]}},json:{origins:{"web-scene":{type:l.PolygonSymbol3D,read:S.read,write:S.writeTarget}},read:S.read,write:S.writeTarget}})],t.prototype,"backgroundFillSymbol",void 0),o([m.property({type:[k.ClassBreakInfo]})],t.prototype,"classBreakInfos",void 0),o([m.reader("classBreakInfos")],t.prototype,"readClassBreakInfos",null),o([m.writer("classBreakInfos")],t.prototype,"writeClassBreakInfos",null),o([m.property({type:String,json:{write:!0}})],t.prototype,"defaultLabel",void 0),o([m.property({types:u.symbolTypesRenderer})],t.prototype,"defaultSymbol",void 0),o([m.reader("defaultSymbol")],t.prototype,"readDefaultSymbol",null),o([m.writer("web-scene","defaultSymbol",{defaultSymbol:{types:u.symbolTypesRenderer3D}})],t.prototype,"writeDefaultSymbolWebScene",null),o([m.writer("defaultSymbol")],t.prototype,"writeDefaultSymbol",null),o([m.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),o([m.cast("field")],t.prototype,"castField",null),o([m.property({type:Boolean})],t.prototype,"isMaxInclusive",void 0),o([m.property({type:I.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),o([m.property({type:Number,readOnly:!0,value:null,dependsOn:["classBreakInfos"],json:{read:!1,write:{overridePolicy:function(){return 0!==this.classBreakInfos.length&&this._areClassBreaksConsecutive()?{enabled:!0}:{enabled:!1}}}}})],t.prototype,"minValue",null),o([m.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),o([m.property({type:Number,cast:function(e){return h.ensureNumber(e)},json:{write:!0}})],t.prototype,"normalizationTotal",void 0),o([m.property({type:w.apiValues,value:null,dependsOn:["normalizationField","normalizationTotal"],json:{type:w.jsonValues,read:w.read,write:w.write}})],t.prototype,"normalizationType",null),o([m.enumeration.serializable()({classBreaks:"class-breaks"})],t.prototype,"type",void 0),o([m.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),o([m.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),t=n=o([m.subclass("esri.renderers.ClassBreaksRenderer")],t)}(m.declared(g.VisualVariablesMixin(v)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/Renderer.js":
/*!**********************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/Renderer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/iteratorUtils */ "./node_modules/arcgis-js-api/core/iteratorUtils.js"),__webpack_require__(/*! ../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./support/AuthoringInfo */ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,s,u,p,a,c){var l=new u.default({simple:"simple",uniqueValue:"unique-value",classBreaks:"class-breaks",heatmap:"heatmap",dotDensity:"dot-density",dictionary:"dictionary"},{ignoreUnknown:!0});return function(e){function t(t){var r=e.call(this,t)||this;return r.authoringInfo=null,r.type=null,r}return r(t,e),t.prototype.getRequiredFields=function(e){return i(this,void 0,void 0,function(){var t;return n(this,function(r){switch(r.label){case 0:return this.collectRequiredFields?(t=new Set,[4,this.collectRequiredFields(t,e)]):[2,[]];case 1:return r.sent(),[2,s.valuesOfSet(t).sort()]}})})},t.prototype.getSymbol=function(e,t){},t.prototype.getSymbolAsync=function(e,t){return i(this,void 0,void 0,function(){return n(this,function(e){return[2]})})},t.prototype.getSymbols=function(){return[]},t.prototype.getAttributeHash=function(){return JSON.stringify(this)},t.prototype.getMeshHash=function(){return JSON.stringify(this)},o([a.property({type:c,json:{write:!0}})],t.prototype,"authoringInfo",void 0),o([a.property({type:l.apiValues,readOnly:!0,json:{type:l.jsonValues,read:!1,write:{writer:l.write,ignoreOrigin:!0}}})],t.prototype,"type",void 0),t=o([a.subclass("esri.renderers.Renderer")],t)}(a.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/UniqueValueRenderer.js ***!
  \*********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../core/tsSupport/paramHelper */ "./node_modules/arcgis-js-api/core/tsSupport/paramHelper.js"),__webpack_require__(/*! ../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../core/arrayUtils */ "./node_modules/arcgis-js-api/core/arrayUtils.js"),__webpack_require__(/*! ../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../core/accessorSupport/diffUtils */ "./node_modules/arcgis-js-api/core/accessorSupport/diffUtils.js"),__webpack_require__(/*! ../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ../portal/Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ./Renderer */ "./node_modules/arcgis-js-api/renderers/Renderer.js"),__webpack_require__(/*! ./mixins/VisualVariablesMixin */ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js"),__webpack_require__(/*! ./support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js"),__webpack_require__(/*! ./support/UniqueValueInfo */ "./node_modules/arcgis-js-api/renderers/support/UniqueValueInfo.js"),__webpack_require__(/*! ../support/arcadeOnDemand */ "./node_modules/arcgis-js-api/support/arcadeOnDemand.js"),__webpack_require__(/*! ../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js"),__webpack_require__(/*! ../symbols/support/styleUtils */ "./node_modules/arcgis-js-api/symbols/support/styleUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,l,o,i,n,a,u,s,p,f,y,d,c,h,m,b,v,g,S,V,w,q,I,O,U,_,F){var D=d.getLogger("esri.renderers.UniqueValueRenderer"),x=g.ensureType(O.default);return function(e){function t(t){var r=e.call(this,t)||this;return r._valueInfoMap={},r._isDefaultSymbolDerived=!1,r.type="unique-value",r.backgroundFillSymbol=null,r.field=null,r.field2=null,r.field3=null,r.valueExpression=null,r.valueExpressionTitle=null,r.legendOptions=null,r.defaultLabel=null,r.fieldDelimiter=null,r.portal=null,r.styleOrigin=null,r.diff={uniqueValueInfos:function(e,t){if(e||t){if(!e||!t)return{type:"complete",oldValue:e,newValue:t};for(var r=!1,l={type:"collection",added:[],removed:[],changed:[],unchanged:[]},o=0;o<t.length;o++)!function(o){var i=p.find(e,function(e){return e.value===t[o].value});i?v.diff(i,t[o])?(l.changed.push({type:"complete",oldValue:i,newValue:t[o]}),r=!0):l.unchanged.push({oldValue:i,newValue:t[o]}):(l.added.push(t[o]),r=!0)}(o);for(var o=0;o<e.length;o++)!function(o){p.find(t,function(t){return t.value===e[o].value})||(l.removed.push(e[o]),r=!0)}(o);return r?l:void 0}}},r._set("uniqueValueInfos",[]),r}r(t,e),o=t,Object.defineProperty(t.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!0,configurable:!0}),t.prototype.writeBackgroundFillSymbolWebScene=function(e,t,r,l){_.writeTarget(e,t,r,l)},t.prototype.castField=function(e){return null==e?e:"function"==typeof e?e:g.ensureString(e)},t.prototype.writeField=function(e,t,r,l){"string"==typeof e?t[r]=e:l&&l.messages?l.messages.push(new f("property:unsupported","UniqueValueRenderer.field set to a function cannot be written to JSON")):D.error(".field: cannot write field to JSON since it's not a string value")},Object.defineProperty(t.prototype,"defaultSymbol",{set:function(e){this._isDefaultSymbolDerived=!1,this._set("defaultSymbol",e)},enumerable:!0,configurable:!0}),t.prototype.readDefaultSymbol=function(e,t,r){return _.read(e,t,r)},t.prototype.writeDefaultSymbolWebScene=function(e,t,r,l){this._isDefaultSymbolDerived||_.writeTarget(e,t,r,l)},t.prototype.writeDefaultSymbol=function(e,t,r,l){this._isDefaultSymbolDerived||_.writeTarget(e,t,r,l)},t.prototype.readPortal=function(e,t,r){return r.portal||V.getDefault()},t.prototype.readStyleOrigin=function(e,t,r){if(t.styleName)return Object.freeze({styleName:t.styleName});if(t.styleUrl){var l=m.fromJSON(t.styleUrl,r);return Object.freeze({styleUrl:l})}},t.prototype.writeStyleOrigin=function(e,t,r,l){e.styleName?t.styleName=e.styleName:e.styleUrl&&(t.styleUrl=m.toJSON(e.styleUrl,l))},Object.defineProperty(t.prototype,"uniqueValueInfos",{set:function(e){if(this.styleOrigin)return void D.error("#uniqueValueInfos=","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");this._set("uniqueValueInfos",e),this._updateValueInfoMap()},enumerable:!0,configurable:!0}),t.prototype.addUniqueValueInfo=function(e,t){if(this.styleOrigin)return void D.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");var r;r="object"==typeof e?x(e):new O.default({value:e,symbol:s.ensureType(t)}),this.uniqueValueInfos.push(r),this._valueInfoMap[r.value]=r},t.prototype.removeUniqueValueInfo=function(e){if(this.styleOrigin)return void D.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");for(var t=0;t<this.uniqueValueInfos.length;t++){if(this.uniqueValueInfos[t].value===e+""){delete this._valueInfoMap[e],this.uniqueValueInfos.splice(t,1);break}}},t.prototype.getUniqueValueInfo=function(e,t){return n(this,void 0,void 0,function(){var r,l,o;return i(this,function(i){switch(i.label){case 0:return r=t,this.valueExpression&&(c.isNone(t)||c.isNone(t.arcade))?(l=[{},r],o={},[4,U.loadArcade()]):[3,2];case 1:r=a.apply(void 0,l.concat([(o.arcade=i.sent(),o)])),i.label=2;case 2:return[2,this._getUniqueValueInfo(e,r)]}})})},t.prototype.getSymbol=function(e,t){if(this.valueExpression&&(c.isNone(t)||c.isNone(t.arcade)))return void D.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");var r=this._getUniqueValueInfo(e,t);return r&&r.symbol||this.defaultSymbol},t.prototype.getSymbolAsync=function(e,t){return n(this,void 0,void 0,function(){var r,l,o,n;return i(this,function(i){switch(i.label){case 0:return r=t,this.valueExpression&&(c.isNone(r)||c.isNone(r.arcade))?(l=[{},r],o={},[4,U.loadArcade()]):[3,2];case 1:r=a.apply(void 0,l.concat([(o.arcade=i.sent(),o)])),i.label=2;case 2:return n=this._getUniqueValueInfo(e,r),[2,n&&n.symbol||this.defaultSymbol]}})})},t.prototype.getSymbols=function(){for(var e=[],t=0,r=this.uniqueValueInfos;t<r.length;t++){var l=r[t];l.symbol&&e.push(l.symbol)}return this.defaultSymbol&&e.push(this.defaultSymbol),e},t.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(e,t){return e+t.getAttributeHash()},"")},t.prototype.getMeshHash=function(){return JSON.stringify(this.backgroundFillSymbol)+"."+JSON.stringify(this.defaultSymbol)+"."+this.uniqueValueInfos.reduce(function(e,t){return e+t.getMeshHash()},"")+"."+this.field+"."+this.field2+"."+this.field3+"."+this.fieldDelimiter+"."+this.valueExpression},t.prototype.clone=function(){var e=new o({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:y.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:y.clone(this.visualVariables),legendOptions:y.clone(this.legendOptions),authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:y.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(e._isDefaultSymbolDerived=!0),e._set("portal",this.portal);var t=y.clone(this.uniqueValueInfos);return this.styleOrigin&&(e._set("styleOrigin",Object.freeze(y.clone(this.styleOrigin))),Object.freeze(t)),e._set("uniqueValueInfos",t),e._updateValueInfoMap(),e},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables||!!this.valueExpression},enumerable:!0,configurable:!0}),t.prototype.collectRequiredFields=function(e,t){return n(this,void 0,void 0,function(){var r;return i(this,function(l){switch(l.label){case 0:return r=[this.collectVVRequiredFields(e,t),this.collectSymbolFields(e,t)],[4,h.all(r)];case 1:return l.sent(),[2]}})})},t.prototype.collectSymbolFields=function(e,t){return n(this,void 0,void 0,function(){var r;return i(this,function(l){switch(l.label){case 0:return r=this.getSymbols().map(function(r){return r.collectRequiredFields(e,t)}).concat([S.collectArcadeFieldNames(e,t,this.valueExpression)]),S.collectField(e,t,this.field),S.collectField(e,t,this.field2),S.collectField(e,t,this.field3),[4,h.all(r)];case 1:return l.sent(),[2]}})})},t.prototype.populateFromStyle=function(){var e=this;return F.fetchStyle(this.styleOrigin,{portal:this.portal}).then(function(t){var r=[];return e._valueInfoMap={},t&&t.data&&Array.isArray(t.data.items)&&t.data.items.forEach(function(l){var o=new u.WebStyleSymbol({styleUrl:t.styleUrl,styleName:t.styleName,portal:e.portal,name:l.name});e.defaultSymbol||l.name!==t.data.defaultItem||(e.defaultSymbol=o,e._isDefaultSymbolDerived=!0);var i=new O.default({value:l.name,symbol:o});r.push(i),e._valueInfoMap[l.name]=i}),e._set("uniqueValueInfos",Object.freeze(r)),!e.defaultSymbol&&e.uniqueValueInfos.length&&(e.defaultSymbol=e.uniqueValueInfos[0].symbol,e._isDefaultSymbolDerived=!0),e})},t.prototype._updateValueInfoMap=function(){var e=this;this._valueInfoMap={},this.uniqueValueInfos.forEach(function(t){return e._valueInfoMap[t.value+""]=t})},t.prototype._getUniqueValueInfo=function(e,t){return this.valueExpression?this._getUnqiueValueInfoForExpression(e,t):this._getUnqiueValueInfoForFields(e)},t.prototype._getUnqiueValueInfoForExpression=function(e,t){var r=c.unwrapOr(t,{}),l=r.viewingMode,o=r.scale,i=r.spatialReference,n=r.arcade,a=this._cache.compiledFunc,u=c.expect(n).arcadeUtils;if(!a){var s=u.createSyntaxTree(this.valueExpression);a=u.createFunction(s),this._cache.compiledFunc=a}var p=u.executeFunction(a,u.createExecContext(e,u.getViewInfo({viewingMode:l,scale:o,spatialReference:i})));return this._valueInfoMap[p+""]},t.prototype._getUnqiueValueInfoForFields=function(e){var t,r=this.field,l=e.attributes;if("function"!=typeof r&&this.field2){var o=this.field2,i=this.field3,n=[];r&&n.push(l[r]),o&&n.push(l[o]),i&&n.push(l[i]),t=n.join(this.fieldDelimiter||"")}else"function"==typeof r?t=r(e):r&&(t=l[r]);return this._valueInfoMap[t+""]},t.fromPortalStyle=function(e,t){var r=new o(t&&t.properties);r._set("styleOrigin",Object.freeze({styleName:e})),r._set("portal",t&&t.portal||V.getDefault());var l=r.populateFromStyle();return l.catch(function(t){D.error("#fromPortalStyle('"+e+"'[, ...])","Failed to create unique value renderer from style name",t)}),l},t.fromStyleUrl=function(e,t){var r=new o(t&&t.properties);r._set("styleOrigin",Object.freeze({styleUrl:e}));var l=r.populateFromStyle();return l.catch(function(t){D.error("#fromStyleUrl('"+e+"'[, ...])","Failed to create unique value renderer from style URL",t)}),l};var o;return l([b.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"_cache",null),l([b.enumeration.serializable()({uniqueValue:"unique-value"})],t.prototype,"type",void 0),l([b.property({types:{base:u.BaseSymbol,key:"type",typeMap:{"simple-fill":s.symbolTypesRenderer.typeMap["simple-fill"],"picture-fill":s.symbolTypesRenderer.typeMap["picture-fill"],"polygon-3d":s.symbolTypesRenderer.typeMap["polygon-3d"]}},json:{read:_.read,write:_.writeTarget}})],t.prototype,"backgroundFillSymbol",void 0),l([b.writer("web-scene","backgroundFillSymbol",{backgroundFillSymbol:{type:u.PolygonSymbol3D}})],t.prototype,"writeBackgroundFillSymbolWebScene",null),l([b.property({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],t.prototype,"field",void 0),l([b.cast("field")],t.prototype,"castField",null),l([b.writer("field")],t.prototype,"writeField",null),l([b.property({type:String,json:{write:!0}})],t.prototype,"field2",void 0),l([b.property({type:String,json:{write:!0}})],t.prototype,"field3",void 0),l([b.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),l([b.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),l([b.property({type:I.default,json:{write:!0}})],t.prototype,"legendOptions",void 0),l([b.property({type:String,json:{write:!0}})],t.prototype,"defaultLabel",void 0),l([b.property({types:s.symbolTypesRenderer})],t.prototype,"defaultSymbol",null),l([b.reader("defaultSymbol")],t.prototype,"readDefaultSymbol",null),l([b.writer("web-scene","defaultSymbol",{defaultSymbol:{types:s.symbolTypesRenderer3D}})],t.prototype,"writeDefaultSymbolWebScene",null),l([b.writer("defaultSymbol")],t.prototype,"writeDefaultSymbol",null),l([b.property({type:String,json:{write:!0}})],t.prototype,"fieldDelimiter",void 0),l([b.property({type:V,readOnly:!0})],t.prototype,"portal",void 0),l([b.reader("portal",["styleName"])],t.prototype,"readPortal",null),l([b.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:function(){return{enabled:!0}}}}})],t.prototype,"styleOrigin",void 0),l([b.reader("styleOrigin",["styleName","styleUrl"])],t.prototype,"readStyleOrigin",null),l([b.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],t.prototype,"writeStyleOrigin",null),l([b.property({type:[O.default],json:{write:{overridePolicy:function(){return this.styleOrigin?{enabled:!1}:{enabled:!0}}}}})],t.prototype,"uniqueValueInfos",null),t=o=l([b.subclass("esri.renderers.UniqueValueRenderer")],t)}(b.declared(q.VisualVariablesMixin(w)))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/mixins/VisualVariablesMixin.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../layers/support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! ../visualVariables/ColorVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/ColorVariable.js"),__webpack_require__(/*! ../visualVariables/OpacityVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/OpacityVariable.js"),__webpack_require__(/*! ../visualVariables/RotationVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/RotationVariable.js"),__webpack_require__(/*! ../visualVariables/SizeVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js"),__webpack_require__(/*! ../visualVariables/VisualVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js"),__webpack_require__(/*! ../visualVariables/VisualVariableFactory */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariableFactory.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,a,r,i,t,l,s,o,u,n,p,c,V,b){Object.defineProperty(a,"__esModule",{value:!0});var v={base:V,key:"type",typeMap:{opacity:n,color:u,rotation:p,size:c}};a.VisualVariablesMixin=function(e){return function(e){function a(){var a=null!==e&&e.apply(this,arguments)||this;return a._vvFactory=new b,a}return r(a,e),Object.defineProperty(a.prototype,"visualVariables",{set:function(e){this._vvFactory.visualVariables=e,this._set("visualVariables",this._vvFactory.visualVariables)},enumerable:!0,configurable:!0}),a.prototype.readVisualVariables=function(e,a,r){return this._vvFactory.readVariables(e,a,r)},a.prototype.writeVisualVariables=function(e,a,r,i){a[r]=this._vvFactory.writeVariables(e,i)},Object.defineProperty(a.prototype,"arcadeRequiredForVisualVariables",{get:function(){if(!this.visualVariables)return!1;for(var e=0,a=this.visualVariables;e<a.length;e++){if(a[e].arcadeRequired)return!0}return!1},enumerable:!0,configurable:!0}),a.prototype.hasVisualVariables=function(e,a){return e?!!this.getVisualVariablesForType(e,a):!!(this.getVisualVariablesForType("size",a)||this.getVisualVariablesForType("color",a)||this.getVisualVariablesForType("opacity",a)||this.getVisualVariablesForType("rotation",a))},a.prototype.getVisualVariablesForType=function(e,a){var r=this.visualVariables;if(r){var i=r.filter(function(r){return r.type===e&&("string"==typeof a?r.target===a:!1!==a||!r.target)});if(!i||0!==i.length)return i}},a.prototype.collectVVRequiredFields=function(e,a){return l(this,void 0,void 0,function(){var r,i,l,s;return t(this,function(t){switch(t.label){case 0:r=[],this.visualVariables&&(r=r.concat(this.visualVariables)),i=0,l=r,t.label=1;case 1:return i<l.length?(s=l[i])?(s.field&&o.collectField(e,a,s.field),s.normalizationField&&o.collectField(e,a,s.normalizationField),s.valueExpression?[4,o.collectArcadeFieldNames(e,a,s.valueExpression)]:[3,3]):[3,3]:[3,4];case 2:t.sent(),t.label=3;case 3:return i++,[3,1];case 4:return[2]}})})},i([s.property({types:[v],value:null,json:{write:!0}})],a.prototype,"visualVariables",null),i([s.reader("visualVariables",["visualVariables","rotationType","rotationExpression"])],a.prototype,"readVisualVariables",null),i([s.writer("visualVariables")],a.prototype,"writeVisualVariables",null),a=i([s.subclass("esri.renderers.mixins.VisualVariablesMixin")],a)}(s.declared(e))}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfo.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/AuthoringInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ./AuthoringInfoFieldInfo */ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoFieldInfo.js"),__webpack_require__(/*! ./AuthoringInfoVisualVariable */ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoVisualVariable.js"),__webpack_require__(/*! ../../tasks/support/colorRamps */ "./node_modules/arcgis-js-api/tasks/support/colorRamps.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,s,n,l,o,a,p,u,d){var c=new s.default({esriClassifyDefinedInterval:"defined-interval",esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation"}),y=new s.default({classedSize:"class-breaks-size",classedColor:"class-breaks-color",univariateColorSize:"univariate-color-size",relationship:"relationship",predominance:"predominance",dotDensity:"dot-density"}),f=["inches","feet","yards","miles","nautical-miles","millimeters","centimeters","decimeters","meters","kilometers","decimal-degrees"];return function(e){function t(t){var r=e.call(this,t)||this;return r.colorRamp=null,r.lengthUnit=null,r.maxSliderValue=null,r.minSliderValue=null,r.visualVariables=null,r}r(t,e),s=t,Object.defineProperty(t.prototype,"classificationMethod",{get:function(){var e=this._get("classificationMethod"),t=this.type;return t&&"relationship"!==t?"class-breaks-size"===t||"class-breaks-color"===t?e||"manual":null:e},set:function(e){this._set("classificationMethod",e)},enumerable:!0,configurable:!0}),t.prototype.readColorRamp=function(e){if(e)return d.fromJSON(e)},Object.defineProperty(t.prototype,"fields",{get:function(){return this.type&&"predominance"!==this.type?null:this._get("fields")},set:function(e){this._set("fields",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"field1",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("field1")},set:function(e){this._set("field1",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"field2",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("field2")},set:function(e){this._set("field2",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"focus",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("focus")},set:function(e){this._set("focus",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"numClasses",{get:function(){return this.type&&"relationship"!==this.type?null:this._get("numClasses")},set:function(e){this._set("numClasses",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"standardDeviationInterval",{get:function(){var e=this.type;return e&&"relationship"!==e&&"class-breaks-size"!==e&&"class-breaks-color"!==e?null:this.classificationMethod&&"standard-deviation"!==this.classificationMethod?null:this._get("standardDeviationInterval")},set:function(e){this._set("standardDeviationInterval",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"type",{get:function(){return this._get("type")},set:function(e){var t=e;"classed-size"===e?t="class-breaks-size":"classed-color"===e&&(t="class-breaks-color"),this._set("type",t)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new s({classificationMethod:this.classificationMethod,colorRamp:l.clone(this.colorRamp),fields:this.fields&&this.fields.slice(0),field1:l.clone(this.field1),field2:l.clone(this.field2),focus:this.focus,numClasses:this.numClasses,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,lengthUnit:this.lengthUnit,standardDeviationInterval:this.standardDeviationInterval,type:this.type,visualVariables:this.visualVariables&&this.visualVariables.map(function(e){return e.clone()})})};var s;return i([o.property({type:c.apiValues,value:null,dependsOn:["type"],json:{type:c.jsonValues,read:c.read,write:c.write,origins:{"web-document":{default:"manual",type:c.jsonValues,read:c.read,write:c.write}}}})],t.prototype,"classificationMethod",null),i([o.property({types:d.types,json:{write:!0}})],t.prototype,"colorRamp",void 0),i([o.reader("colorRamp")],t.prototype,"readColorRamp",null),i([o.property({type:[String],value:null,dependsOn:["type"],json:{write:!0}})],t.prototype,"fields",null),i([o.property({type:p.default,value:null,dependsOn:["type"],json:{write:!0}})],t.prototype,"field1",null),i([o.property({type:p.default,value:null,dependsOn:["type"],json:{write:!0}})],t.prototype,"field2",null),i([o.property({type:["HH","HL","LH","LL"],value:null,dependsOn:["type"],json:{write:!0}})],t.prototype,"focus",null),i([o.property({type:Number,value:null,dependsOn:["type"],json:{type:a.Integer,write:!0}})],t.prototype,"numClasses",null),i([o.property({type:f,json:{type:f,read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],t.prototype,"lengthUnit",void 0),i([o.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],t.prototype,"maxSliderValue",void 0),i([o.property({type:Number,json:{write:!0,origins:{"web-scene":{write:!1,read:!1}}}})],t.prototype,"minSliderValue",void 0),i([o.property({type:[.25,.33,.5,1],value:null,dependsOn:["classificationMethod","type"],json:{type:[.25,.33,.5,1],write:!0}})],t.prototype,"standardDeviationInterval",null),i([o.property({type:String,value:null,json:{type:y.jsonValues,read:y.read,write:y.write,origins:{"web-scene":{type:y.jsonValues.filter(function(e){return"dotDensity"!==e}),read:y.read,write:y.write}}}})],t.prototype,"type",null),i([o.property({type:[u],json:{write:!0}})],t.prototype,"visualVariables",void 0),t=s=i([o.subclass("esri.renderers.support.AuthoringInfo")],t)}(o.declared(n.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoClassBreakInfo.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/AuthoringInfoClassBreakInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,u,n){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e){function r(r){var o=e.call(this,r)||this;return o.minValue=0,o.maxValue=0,o}o(r,e),u=r,r.prototype.clone=function(){return new u({minValue:this.minValue,maxValue:this.maxValue})};var u;return t([n.property({type:Number,json:{write:!0}})],r.prototype,"minValue",void 0),t([n.property({type:Number,json:{write:!0}})],r.prototype,"maxValue",void 0),r=u=t([n.subclass("esri.renderer.support.AuthoringInfoClassBreakInfo")],r)}(n.declared(u.JSONSupport));r.AuthoringInfoClassBreakInfo=a,r.default=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoFieldInfo.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/AuthoringInfoFieldInfo.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./AuthoringInfoClassBreakInfo */ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoClassBreakInfo.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,o,t,n,i,s,l){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(r){var o=e.call(this,r)||this;return o.field="",o.normalizationField="",o.classBreakInfos=[],o}o(r,e),n=r,r.prototype.clone=function(){return new n({field:this.field,normalizationField:this.normalizationField,classBreakInfos:i.clone(this.classBreakInfos)})};var n;return t([s.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),t([s.property({type:String,json:{write:!0}})],r.prototype,"normalizationField",void 0),t([s.property({type:[l.default],json:{write:!0}})],r.prototype,"classBreakInfos",void 0),r=n=t([s.subclass("esri.renderers.support.AuthoringInfoFieldInfo")],r)}(s.declared(n.JSONSupport));r.AuthoringInfoFieldInfo=p,r.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/AuthoringInfoVisualVariable.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/AuthoringInfoVisualVariable.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators/cast */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators/cast.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,p,s){var l=new n.default({percentTotal:"percent-of-total",ratio:"ratio",percent:"percent"}),u=new n.default({sizeInfo:"size",colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation"}),a={key:function(e){return"number"==typeof e?"number":"string"},typeMap:{number:Number,string:String},base:null},y=["high-to-low","above-and-below","centered-on","extremes"],c=["seconds","minutes","hours","days","months","years"];return function(e){function t(t){var r=e.call(this,t)||this;return r.endTime=null,r.field=null,r.maxSliderValue=null,r.minSliderValue=null,r.startTime=null,r.type=null,r.units=null,r}r(t,e),n=t,t.prototype.castEndTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},t.prototype.castStartTime=function(e){return"string"==typeof e||"number"==typeof e?e:null},Object.defineProperty(t.prototype,"style",{get:function(){return"color"===this.type?this._get("style"):null},set:function(e){this._set("style",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"theme",{get:function(){return"color"===this.type?this._get("theme")||"high-to-low":null},set:function(e){this._set("theme",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new n({endTime:this.endTime,field:this.field,maxSliderValue:this.maxSliderValue,minSliderValue:this.minSliderValue,startTime:this.startTime,style:this.style,theme:this.theme,type:this.type,units:this.units})};var n;return o([p.property({types:a,json:{write:!0}})],t.prototype,"endTime",void 0),o([s.cast("endTime")],t.prototype,"castEndTime",null),o([p.property({type:String,json:{write:!0}})],t.prototype,"field",void 0),o([p.property({type:Number,json:{write:!0}})],t.prototype,"maxSliderValue",void 0),o([p.property({type:Number,json:{write:!0}})],t.prototype,"minSliderValue",void 0),o([p.property({types:a,json:{write:!0}})],t.prototype,"startTime",void 0),o([s.cast("startTime")],t.prototype,"castStartTime",null),o([p.property({type:l.apiValues,value:null,dependsOn:["type"],json:{type:l.jsonValues,read:l.read,write:l.write}})],t.prototype,"style",null),o([p.property({type:y,value:null,dependsOn:["type"],json:{type:y,write:!0}})],t.prototype,"theme",null),o([p.property({type:u.apiValues,json:{type:u.jsonValues,read:u.read,write:u.write}})],t.prototype,"type",void 0),o([p.property({type:c,json:{type:c,write:!0}})],t.prototype,"units",void 0),t=n=o([p.subclass("esri.renderers.support.AuthoringInfoVisualVariable")],t)}(p.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/ClassBreakInfo.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/ClassBreakInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,l,a,i){Object.defineProperty(r,"__esModule",{value:!0});var p=function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.label=null,t.minValue=null,t.maxValue=0,t.symbol=null,t}t(r,e),l=r,r.prototype.clone=function(){return new l({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,symbol:this.symbol?this.symbol.clone():null})},r.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol);return this.minValue+"."+this.maxValue+"."+e};var l;return o([a.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([a.property({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],r.prototype,"minValue",void 0),o([a.property({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],r.prototype,"maxValue",void 0),o([a.property({types:s.symbolTypesRenderer,json:{origins:{"web-scene":{types:s.symbolTypesRenderer3D,read:i.read,write:i.writeTarget}},read:i.read,write:i.writeTarget}})],r.prototype,"symbol",void 0),r=l=o([a.subclass("esri.renderers.support.ClassBreakInfo")],r)}(a.declared(l.JSONSupport));r.ClassBreakInfo=p,r.default=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js":
/*!***********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/LegendOptions.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,p,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.title=null,t}r(t,e),p=t,t.prototype.clone=function(){return new p({title:this.title})};var p;return o([n.property({type:String,json:{write:!0}})],t.prototype,"title",void 0),t=p=o([n.subclass("esri.renderers.support.LegendOptions")],t)}(n.declared(p.JSONSupport));t.LegendOptions=i,t.default=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/support/UniqueValueInfo.js":
/*!*************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/support/UniqueValueInfo.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../symbols/support/jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,s,l,p,i){Object.defineProperty(r,"__esModule",{value:!0});var n=function(e){function r(r){var t=e.call(this,r)||this;return t.description=null,t.label=null,t.symbol=null,t.value=null,t}t(r,e),l=r,r.prototype.clone=function(){return new l({value:this.value,description:this.description,label:this.label,symbol:this.symbol?this.symbol.clone():null})},r.prototype.getMeshHash=function(){var e=JSON.stringify(this.symbol&&this.symbol.toJSON());return this.value+"."+e};var l;return o([p.property({type:String,json:{write:!0}})],r.prototype,"description",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([p.property({types:s.symbolTypesRenderer,json:{origins:{"web-scene":{types:s.symbolTypesRenderer3D,read:i.read,write:i.writeTarget}},read:i.read,write:i.writeTarget}})],r.prototype,"symbol",void 0),o([p.property({type:String,json:{write:!0}})],r.prototype,"value",void 0),r=l=o([p.subclass("esri.renderers.support.UniqueValueInfo")],r)}(p.declared(l.JSONSupport));r.UniqueValueInfo=n,r.default=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/ColorVariable.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/ColorVariable.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./VisualVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js"),__webpack_require__(/*! ./support/ColorStop */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/ColorStop.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="color",r.normalizationField=null,r}r(t,e),i=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){e&&Array.isArray(e)&&(e=e.filter(function(e){return!!e}),e.sort(function(e,t){return e.value-t.value})),this._set("stops",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(e){return e.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype.getAttributeHash=function(){return this.inherited(arguments)+"-"+this.normalizationField},t.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(e){return e.value||0})};var i;return o([n.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"cache",null),o([n.property({type:["color"],json:{type:["colorInfo"]}})],t.prototype,"type",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),o([n.property({type:[s],json:{write:!0}})],t.prototype,"stops",null),t=i=o([n.subclass("esri.renderers.visualVariables.ColorVariable")],t)}(n.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/OpacityVariable.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/OpacityVariable.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./VisualVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js"),__webpack_require__(/*! ./support/OpacityStop */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/OpacityStop.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,s){return function(e){function t(t){var r=e.call(this,t)||this;return r.type="opacity",r.normalizationField=null,r}r(t,e),i=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){e&&Array.isArray(e)&&(e=e.filter(function(e){return!!e}),e.sort(function(e,t){return e.value-t.value})),this._set("stops",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new i({field:this.field,normalizationField:this.normalizationField,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,stops:this.stops&&this.stops.map(function(e){return e.clone()}),legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype.getAttributeHash=function(){return this.inherited(arguments)+"-"+this.normalizationField},t.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(e){return e.value||0})};var i;return o([n.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"cache",null),o([n.property({type:["opacity"],json:{type:["transparencyInfo"]}})],t.prototype,"type",void 0),o([n.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),o([n.property({type:[s],json:{write:!0}})],t.prototype,"stops",null),t=i=o([n.subclass("esri.renderers.visualVariables.OpacityVariable")],t)}(n.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/RotationVariable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/RotationVariable.js ***!
  \**********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./VisualVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,i,s,n){return function(e){function t(t){var r=e.call(this,t)||this;return r.axis=null,r.type="rotation",r.rotationType="geographic",r.valueExpressionTitle=null,r}r(t,e),n=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{hasExpression:!!this.valueExpression,compiledFunc:null}},enumerable:!0,configurable:!0}),t.prototype.writeValueExpressionTitleWebScene=function(e,t,r,o){if(o&&o.messages){var s="visualVariables["+this.index+"]";o.messages.push(new i("property:unsupported",this.type+"VisualVariable.valueExpressionTitle is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:s+".valueExpressionTitle",context:o}))}},t.prototype.clone=function(){return new n({axis:this.axis,rotationType:this.rotationType,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,legendOptions:this.legendOptions&&this.legendOptions.clone()})};var n;return o([s.property({readOnly:!0,dependsOn:["valueExpression"]})],t.prototype,"cache",null),o([s.property({type:["heading","tilt","roll"],json:{origins:{"web-scene":{default:"heading",write:!0}}}})],t.prototype,"axis",void 0),o([s.property({type:["rotation"],json:{type:["rotationInfo"]}})],t.prototype,"type",void 0),o([s.property({type:["geographic","arithmetic"],json:{write:!0,origins:{"web-document":{write:!0,default:"geographic"}}}})],t.prototype,"rotationType",void 0),o([s.property({type:String,json:{write:!0}})],t.prototype,"valueExpressionTitle",void 0),o([s.writer("web-scene","valueExpressionTitle")],t.prototype,"writeValueExpressionTitleWebScene",null),t=n=o([s.subclass("esri.renderers.visualVariables.RotationVariable")],t)}(s.declared(n))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js":
/*!******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./VisualVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js"),__webpack_require__(/*! ./support/SizeStop */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeStop.js"),__webpack_require__(/*! ./support/SizeVariableLegendOptions */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeVariableLegendOptions.js"),__webpack_require__(/*! ./support/sizeVariableUtils */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/sizeVariableUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,o,a,s,p,l,u,y,c,d){function m(e){if(null!=e)return"string"==typeof e||"number"==typeof e?p.toPt(e):"size"===e.type?d.isSizeVariable(e)?e:(e=n({},e),delete e.type,new v(e)):void 0}function h(e,t,i){if("object"!=typeof e)return e;var r=new v;return r.read(e,i),r}var f=/^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i,S=s.getLogger("esri.renderers.visualVariables.SizeVariable"),x=new a.default({width:"width",depth:"depth",height:"height",widthAndDepth:"width-and-depth",all:"all"}),z=new a.default({unknown:"unknown",inch:"inches",foot:"feet",yard:"yards",mile:"miles","nautical-mile":"nautical-miles",millimeter:"millimeters",centimeter:"centimeters",decimeter:"decimeters",meter:"meters",kilometer:"kilometers","decimal-degree":"decimal-degrees"}),v=function(e){function t(t){var i=e.call(this,t)||this;return i.axis=null,i.legendOptions=null,i.normalizationField=null,i.scaleBy=null,i.target=null,i.type="size",i.useSymbolValue=null,i.valueExpression=null,i.valueRepresentation=null,i.valueUnit=null,i}i(t,e),n=t,Object.defineProperty(t.prototype,"cache",{get:function(){return{ipData:this._interpolateData(),hasExpression:!!this.valueExpression,compiledFunc:null,isScaleDriven:f.test(this.valueExpression)}},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"expression",{set:function(e){S.warn("'expression' is deprecated since version 4.2. Use 'valueExpression' instead. The only supported expression is 'view.scale'."),"view.scale"===e?(this.valueExpression="$view.scale",this._set("expression",e)):this._set("expression",null)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"index",{set:function(e){d.isSizeVariable(this.maxSize)&&(this.maxSize.index="visualVariables["+e+"].maxSize"),d.isSizeVariable(this.minSize)&&(this.minSize.index="visualVariables["+e+"].minSize"),this._set("index",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"inputValueType",{get:function(){return d.getInputValueType(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxDataValue",{set:function(e){e&&this.stops&&(S.warn("cannot set maxDataValue when stops is not null."),e=null),this._set("maxDataValue",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"maxSize",{set:function(e){e&&this.stops&&(S.warn("cannot set maxSize when stops is not null."),e=null),this._set("maxSize",e)},enumerable:!0,configurable:!0}),t.prototype.castMaxSize=function(e){return m(e)},t.prototype.readMaxSize=function(e,t,i){return h(e,t,i)},Object.defineProperty(t.prototype,"minDataValue",{set:function(e){e&&this.stops&&(S.warn("cannot set minDataValue when stops is not null."),e=null),this._set("minDataValue",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"minSize",{set:function(e){e&&this.stops&&(S.warn("cannot set minSize when stops is not null."),e=null),this._set("minSize",e)},enumerable:!0,configurable:!0}),t.prototype.castMinSize=function(e){return m(e)},t.prototype.readMinSize=function(e,t,i){return h(e,t,i)},Object.defineProperty(t.prototype,"arcadeRequired",{get:function(){return!!this.valueExpression||(this.minSize&&"object"==typeof this.minSize&&this.minSize.arcadeRequired||this.maxSize&&"object"==typeof this.maxSize&&this.maxSize.arcadeRequired)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stops",{set:function(e){null==this.minDataValue&&null==this.maxDataValue&&null==this.minSize&&null==this.maxSize?e&&Array.isArray(e)&&(e=e.filter(function(e){return!!e}),e.sort(function(e,t){return e.value-t.value})):e&&(S.warn("cannot set stops when one of minDataValue, maxDataValue, minSize or maxSize is not null."),e=null),this._set("stops",e)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"transformationType",{get:function(){return d.getTransformationType(this,this.inputValueType)},enumerable:!0,configurable:!0}),t.prototype.readValueExpression=function(e,t){return e||t.expression&&"$view.scale"},t.prototype.writeValueExpressionWebScene=function(e,t,i,r){if("$view.scale"===e){if(r&&r.messages){var n=this.index,a="string"==typeof n?n:"visualVariables["+n+"]";r.messages.push(new o("property:unsupported",this.type+"VisualVariable.valueExpression = '$view.scale' is not supported in Web Scene. Please remove this property to save the Web Scene.",{instance:this,propertyName:a+".valueExpression",context:r}))}}else t[i]=e},t.prototype.readValueUnit=function(e){return e?z.read(e):null},t.prototype.clone=function(){return new n({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:d.isSizeVariable(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:d.isSizeVariable(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map(function(e){return e.clone()}),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone()})},t.prototype.flipSizes=function(){if("clamped-linear"===this.transformationType){var e=this,t=e.minSize,i=e.maxSize;return this.minSize=i,this.maxSize=t,this}if("stops"===this.transformationType){for(var r=this.stops,n=r.map(function(e){return e.size}).reverse(),o=r.length,a=0;a<o;a++)r[a].size=n[a];return this}return this},t.prototype.getAttributeHash=function(){return this.inherited(arguments)+"-"+this.target+"-"+this.normalizationField},t.prototype._interpolateData=function(){return this.stops&&this.stops.map(function(e){return e.value||0})};var n;return r([l.property({readOnly:!0,dependsOn:["valueExpression","stops"]})],t.prototype,"cache",null),r([l.property({type:x.apiValues,json:{type:x.jsonValues,origins:{"web-map":{read:!1}},read:x.read,write:x.write}})],t.prototype,"axis",void 0),r([l.property({type:String,value:null,json:{read:!1}})],t.prototype,"expression",null),r([l.property()],t.prototype,"index",null),r([l.property({type:String,readOnly:!0,dependsOn:["field","valueExpression"]})],t.prototype,"inputValueType",null),r([l.property({type:c,json:{write:!0}})],t.prototype,"legendOptions",void 0),r([l.property({type:Number,value:null,json:{write:!0}})],t.prototype,"maxDataValue",null),r([l.property({type:Number,value:null,json:{write:!0}})],t.prototype,"maxSize",null),r([l.cast("maxSize")],t.prototype,"castMaxSize",null),r([l.reader("maxSize")],t.prototype,"readMaxSize",null),r([l.property({type:Number,value:null,json:{write:!0}})],t.prototype,"minDataValue",null),r([l.property({type:Number,value:null,json:{write:!0}})],t.prototype,"minSize",null),r([l.cast("minSize")],t.prototype,"castMinSize",null),r([l.reader("minSize")],t.prototype,"readMinSize",null),r([l.property({type:String,json:{write:!0}})],t.prototype,"normalizationField",void 0),r([l.property({readOnly:!0,dependsOn:["valueExpression","minSize.arcadeRequired","maxSize.arcadeRequired"]})],t.prototype,"arcadeRequired",null),r([l.property({type:String})],t.prototype,"scaleBy",void 0),r([l.property({type:[y],value:null,json:{write:!0}})],t.prototype,"stops",null),r([l.property({type:["outline"],json:{write:!0}})],t.prototype,"target",void 0),r([l.property({type:String,readOnly:!0,dependsOn:["minDataValue","maxDataValue","minSize","maxSize","valueUnit","inputValueType","stops"]})],t.prototype,"transformationType",null),r([l.property({type:["size"],json:{type:["sizeInfo"]}})],t.prototype,"type",void 0),r([l.property({type:Boolean,json:{write:!0,origins:{"web-map":{read:!1}}}})],t.prototype,"useSymbolValue",void 0),r([l.property({type:String,json:{write:!0}})],t.prototype,"valueExpression",void 0),r([l.reader("valueExpression",["valueExpression","expression"])],t.prototype,"readValueExpression",null),r([l.writer("web-scene","valueExpression")],t.prototype,"writeValueExpressionWebScene",null),r([l.property({type:["radius","diameter","area","width","distance"],json:{write:!0}})],t.prototype,"valueRepresentation",void 0),r([l.property({type:z.apiValues,json:{write:z.write,origins:{"web-map":{read:!1},"web-scene":{write:!0}}}})],t.prototype,"valueUnit",void 0),r([l.reader("valueUnit")],t.prototype,"readValueUnit",null),t=n=r([l.subclass("esri.renderers.visualVariables.SizeVariable")],t)}(l.declared(u));return v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariable.js ***!
  \********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ./support/VisualVariableLegendOptions */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,p,i,l,s,a){var u=i.getLogger("esri.renderers.visualVariables.VisualVariable"),d=new n.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"});return function(e){function r(r){var t=e.call(this,r)||this;return t.index=null,t.type=null,t.field=null,t.valueExpression=null,t.valueExpressionTitle=null,t.legendOptions=null,t}return t(r,e),r.prototype.castField=function(e){return null==e?e:"function"==typeof e?(u.error(".field: field must be a string value"),null):s.ensureString(e)},Object.defineProperty(r.prototype,"arcadeRequired",{get:function(){return!!this.valueExpression},enumerable:!0,configurable:!0}),r.prototype.clone=function(){},r.prototype.getAttributeHash=function(){return this.type+"-"+this.field+"-"+this.valueExpression},o([l.property()],r.prototype,"index",void 0),o([l.property({type:d.apiValues,readOnly:!0,json:{read:d.read,write:d.write}})],r.prototype,"type",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"field",void 0),o([l.cast("field")],r.prototype,"castField",null),o([l.property({type:String,json:{write:!0}})],r.prototype,"valueExpression",void 0),o([l.property({type:String,json:{write:!0}})],r.prototype,"valueExpressionTitle",void 0),o([l.property({readOnly:!0,dependsOn:["valueExpression"]})],r.prototype,"arcadeRequired",null),o([l.property({type:a,json:{write:!0}})],r.prototype,"legendOptions",void 0),r=o([l.subclass("esri.renderers.visualVariables.VisualVariable")],r)}(l.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariableFactory.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/VisualVariableFactory.js ***!
  \***************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/Warning */ "./node_modules/arcgis-js-api/core/Warning.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./ColorVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/ColorVariable.js"),__webpack_require__(/*! ./OpacityVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/OpacityVariable.js"),__webpack_require__(/*! ./RotationVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/RotationVariable.js"),__webpack_require__(/*! ./SizeVariable */ "./node_modules/arcgis-js-api/renderers/visualVariables/SizeVariable.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,a,t,i,o,s,n,l,u,c,p,b){var V=s.getLogger("esri.renderers.visualVariables.VisualVariableFactory"),f={color:u,size:b,opacity:c,rotation:p},h=new o.default({colorInfo:"color",transparencyInfo:"opacity",rotationInfo:"rotation",sizeInfo:"size"}),y=/^\[([^\]]+)\]$/i;return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.colorVariables=null,r.opacityVariables=null,r.rotationVariables=null,r.sizeVariables=null,r}return a(r,e),Object.defineProperty(r.prototype,"visualVariables",{set:function(e){if(this._resetVariables(),!(e=e&&e.filter(function(e){return!!e}))||!e.length)return void this._set("visualVariables",e);for(var r=0,a=e;r<a.length;r++){var t=a[r];switch(t.type){case"color":this.colorVariables.push(t);break;case"opacity":this.opacityVariables.push(t);break;case"rotation":this.rotationVariables.push(t);break;case"size":this.sizeVariables.push(t)}}if(this.sizeVariables.length){this.sizeVariables.some(function(e){return!!e.target})&&e.sort(function(e,r){return e.target===r.target?0:e.target?1:-1})}for(var i=0;i<e.length;i++){var t=e[i];t.index=i}this._set("visualVariables",e)},enumerable:!0,configurable:!0}),r.prototype.readVariables=function(e,r,a){var t=r.rotationExpression,i=r.rotationType,o=t&&t.match(y),s=o&&o[1];if(s&&(e||(e=[]),e.push({type:"rotationInfo",rotationType:i,field:s})),e)return e.map(function(e){var r=h.read(e.type),t=f[r];t||(V.warn("Unknown variable type: "+r),a&&a.messages&&a.messages.push(new n("visual-variable:unsupported","visualVariable of type '"+r+"' is not supported",{definition:e,context:a})));var i=new t;return i.read(e,a),i})},r.prototype.writeVariables=function(e,r){for(var a=[],t=0,i=e;t<i.length;t++){var o=i[t],s=o.toJSON(r);s&&a.push(s)}return a},r.prototype._resetVariables=function(){this.colorVariables=[],this.opacityVariables=[],this.rotationVariables=[],this.sizeVariables=[]},t([l.property()],r.prototype,"visualVariables",null),r=t([l.subclass("esri.renderers.visualVariables.VisualVariableFactory")],r)}(l.declared(i))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/OpacityStop.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/OpacityStop.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ../../../webdoc/support/opacityUtils */ "./node_modules/arcgis-js-api/webdoc/support/opacityUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,p,o,a,n,c){return function(e){function r(r){var t=e.call(this,r)||this;return t.label=null,t.opacity=null,t.value=null,t}t(r,e),o=r,r.prototype.readOpacity=function(e,r){return c.transparencyToOpacity(r.transparency)},r.prototype.writeOpacity=function(e,r,t){r[t]=c.opacityToTransparency(e)},r.prototype.clone=function(){return new o({label:this.label,opacity:this.opacity,value:this.value})};var o;return p([a.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),p([a.property({type:Number,json:{type:n.Integer,write:{target:"transparency"}}})],r.prototype,"opacity",void 0),p([a.reader("opacity",["transparency"])],r.prototype,"readOpacity",null),p([a.writer("opacity")],r.prototype,"writeOpacity",null),p([a.property({type:Number,json:{write:!0}})],r.prototype,"value",void 0),r=o=p([a.subclass("esri.renderers.visualVariables.support.OpacityStop")],r)}(a.declared(o.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeStop.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeStop.js ***!
  \**********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../../core/screenUtils */ "./node_modules/arcgis-js-api/core/screenUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,p,s,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.label=null,t.size=null,t.value=null,t}t(r,e),p=r,r.prototype.clone=function(){return new p({label:this.label,size:this.size,value:this.value})};var p;return o([l.property({type:String,json:{write:!0}})],r.prototype,"label",void 0),o([l.property({type:Number,cast:s.toPt,json:{write:!0}})],r.prototype,"size",void 0),o([l.property({type:Number,json:{write:!0}})],r.prototype,"value",void 0),r=p=o([l.subclass("esri.renderers.visualVariables.support.SizeStop")],r)}(l.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeVariableLegendOptions.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/SizeVariableLegendOptions.js ***!
  \***************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./VisualVariableLegendOptions */ "./node_modules/arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,s,o,u){return function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.customValues=null,t}r(t,e),u=t,t.prototype.clone=function(){return new u({title:this.title,showLegend:this.showLegend,customValues:this.customValues&&this.customValues.slice(0)})};var u;return s([o.property({type:[Number],json:{write:!0}})],t.prototype,"customValues",void 0),t=u=s([o.subclass("esri.renderers.visualVariables.support.SizeVariableLegendOptions")],t)}(o.declared(u))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/renderers/visualVariables/support/VisualVariableLegendOptions.js ***!
  \*****************************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../support/LegendOptions */ "./node_modules/arcgis-js-api/renderers/support/LegendOptions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,n,s){return function(e){function r(){var r=null!==e&&e.apply(this,arguments)||this;return r.showLegend=null,r}t(r,e),s=r,r.prototype.clone=function(){return new s({title:this.title,showLegend:this.showLegend})};var s;return o([n.property({type:Boolean,json:{write:!0}})],r.prototype,"showLegend",void 0),r=s=o([n.subclass("esri.renderers.visualVariables.support.VisualVariableLegendOptions")],r)}(n.declared(s.default))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/symbols/support/styleUtils.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/symbols/support/styleUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../symbols */ "./node_modules/arcgis-js-api/symbols.js"),__webpack_require__(/*! ../../core/devEnvironmentUtils */ "./node_modules/arcgis-js-api/core/devEnvironmentUtils.js"),__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../portal/Portal */ "./node_modules/arcgis-js-api/portal/Portal.js"),__webpack_require__(/*! ../../portal/PortalQueryParams */ "./node_modules/arcgis-js-api/portal/PortalQueryParams.js"),__webpack_require__(/*! ../../support/featureFlags */ "./node_modules/arcgis-js-api/support/featureFlags.js"),__webpack_require__(/*! ./jsonUtils */ "./node_modules/arcgis-js-api/symbols/support/jsonUtils.js"),__webpack_require__(/*! ./StyleOrigin */ "./node_modules/arcgis-js-api/symbols/support/StyleOrigin.js"),__webpack_require__(/*! ./Thumbnail */ "./node_modules/arcgis-js-api/symbols/support/Thumbnail.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,n,l,o,a,s,i,u,m,y,f,c,b){function p(e,t){return O(e,t).then(function(t){return{data:t.data,baseUrl:i.removeFile(e),styleUrl:e}})}function d(e,t,r){var n,l=t.portal||u.getDefault(),o=l.url+" - "+(l.user&&l.user.username)+" - "+e;return D[o]||(D[o]=v(e,l,r).then(function(e){return n=e,e.fetchData()}).then(function(t){return{data:t,baseUrl:n.itemUrl,styleName:e}})),D[o]}function v(e,t,r){return t.load(r).then(function(){var n=new m({disableExtraQuery:!0,query:"owner:"+E+" AND type:"+F+' AND typekeywords:"'+e+'"'});return t.queryItems(n,r)}).then(function(t){var n=t.results,l=null,o=e.toLowerCase();if(n&&Array.isArray(n))for(var s=0,i=n;s<i.length;s++){var u=i[s],m=u.typeKeywords.some(function(e){return e.toLowerCase()===o});if(m&&u.type===F&&u.owner===E){l=u;break}}if(!l)throw new a("symbolstyleutils:style-not-found","The style '"+e+"' could not be found",{styleName:e});return l.load(r)})}function h(e,t,r){return e.styleUrl?p(e.styleUrl,r):e.styleName?d(e.styleName,t,r):s.reject(new a("symbolstyleutils:style-url-and-name-missing","Either styleUrl or styleName is required to resolve a style"))}function S(e,t,r,n){return e.name?e.styleName&&"Esri2DPointSymbolsStyle"===e.styleName?j(e,t,n):h(e,t,n).then(function(l){return g(l,e.name,t,r,n)}):s.reject(new a("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference"))}function g(e,t,r,n,u){for(var m=e.data,y={portal:r.portal,url:i.urlToObject(e.baseUrl),origin:"portal-item"},p=0,d=m.items;p<d.length;p++){var v=d[p],h=function(a){if(a.name!==t)return"continue";var s=i.fromJSON(w(a,n),y),m=a.thumbnail&&a.thumbnail.href,p=a.thumbnail&&a.thumbnail.imageData;o.isDevEnvironment()&&(s=o.adjustStaticAGOUrl(s),m=o.adjustStaticAGOUrl(m));var d={portal:r.portal,url:i.urlToObject(i.removeFile(s)),origin:"portal-item"};return{value:O(s,u).then(function(o){var a="cimRef"===n?N(o.data):o.data,s=f.fromJSON(a,d);if(s&&l.isSymbol3D(s)){if(m){var u=i.fromJSON(m,y);s.thumbnail=new b.default({url:u})}else p&&(s.thumbnail=new b.default({url:"data:image/png;base64,"+p}));e.styleUrl?s.styleOrigin=new c({portal:r.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(s.styleOrigin=new c({portal:r.portal,styleName:e.styleName,name:t}))}return s})}}(v);if("object"==typeof h)return h.value}return s.reject(new a("symbolstyleutils:symbol-name-not-found","The symbol name '"+t+"' could not be found",{symbolName:t}))}function N(e){return null===e||"CIMSymbolReference"===e.type?e:{type:"CIMSymbolReference",symbol:e}}function w(e,t){if("cimRef"===t)return e.cimRef;if(e.formatInfos&&!y.enableWebStyleForceWOSR())for(var r=0,n=e.formatInfos;r<n.length;r++){var l=n[r];if("gltf"===l.type)return l.href}return e.webRef}function U(e){for(var t=0,r=e.typeKeywords;t<r.length;t++){var n=r[t];if(/^Esri.*Style$/.test(n)&&"Esri Style"!==n)return n}}function j(e,t,r){var n=R.replace(/\{SymbolName\}/gi,e.name);return O(n,r).then(function(e){var r=N(e.data);return f.fromJSON(r,{portal:t.portal,url:i.urlToObject(i.removeFile(n)),origin:"portal-item"})})}function O(e,t){var l=r({responseType:"json",query:{f:"json"}},t);return n(i.normalize(e),l)}Object.defineProperty(t,"__esModule",{value:!0});var D={};t.fetchStyle=h,t.resolveWebStyleSymbol=S,t.fetchSymbolFromStyle=g,t.styleNameFromItem=U;var E="esri_en",F="Style",R="https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json"}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/AlgorithmicColorRamp.js":
/*!**************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/AlgorithmicColorRamp.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ./ColorRamp */ "./node_modules/arcgis-js-api/tasks/support/ColorRamp.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(o,r,e,t,l,p,i,n,s){return function(o){function r(r){var e=o.call(this,r)||this;return e.algorithm=null,e.fromColor=null,e.toColor=null,e.type="algorithmic",e}t(r,o),s=r,r.prototype.clone=function(){return new s({fromColor:p.clone(this.fromColor),toColor:p.clone(this.toColor),algorithm:this.algorithm})};var s;return e([i.enumeration.serializable()({esriCIELabAlgorithm:"cie-lab",esriHSVAlgorithm:"hsv",esriLabLChAlgorithm:"lab-lch"})],r.prototype,"algorithm",void 0),e([i.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"fromColor",void 0),e([i.property({type:l,json:{type:[n.Integer],write:!0}})],r.prototype,"toColor",void 0),e([i.property({type:["algorithmic"]})],r.prototype,"type",void 0),r=s=e([i.subclass("esri.tasks.support.AlgorithmicColorRamp")],r)}(i.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/ColorRamp.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/ColorRamp.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,e,t,o,p,s){return function(r){function e(e){var t=r.call(this,e)||this;return t.type=null,t}return t(e,r),o([s.property({readOnly:!0,json:{read:!1,write:!0}})],e.prototype,"type",void 0),e=o([s.subclass("esri.tasks.support.ColorRamp")],e)}(s.declared(p.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/MultipartColorRamp.js":
/*!************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/MultipartColorRamp.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/lang */ "./node_modules/arcgis-js-api/core/lang.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ./AlgorithmicColorRamp */ "./node_modules/arcgis-js-api/tasks/support/AlgorithmicColorRamp.js"),__webpack_require__(/*! ./ColorRamp */ "./node_modules/arcgis-js-api/tasks/support/ColorRamp.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,o,t,e,p,c,l,s){return function(r){function o(o){var t=r.call(this,o)||this;return t.colorRamps=null,t.type="multipart",t}e(o,r),s=o,o.prototype.clone=function(){return new s({colorRamps:p.clone(this.colorRamps)})};var s;return t([c.property({type:[l],json:{write:!0}})],o.prototype,"colorRamps",void 0),t([c.property({type:["multipart"]})],o.prototype,"type",void 0),o=s=t([c.subclass("esri.tasks.support.MultipartColorRamp")],o)}(c.declared(s))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/support/colorRamps.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/support/colorRamps.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./AlgorithmicColorRamp */ "./node_modules/arcgis-js-api/tasks/support/AlgorithmicColorRamp.js"),__webpack_require__(/*! ./ColorRamp */ "./node_modules/arcgis-js-api/tasks/support/ColorRamp.js"),__webpack_require__(/*! ./MultipartColorRamp */ "./node_modules/arcgis-js-api/tasks/support/MultipartColorRamp.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,l){function p(e){return e&&e.type?"algorithmic"===e.type?r.fromJSON(e):"multipart"===e.type?l.fromJSON(e):null:null}Object.defineProperty(t,"__esModule",{value:!0}),t.types={key:"type",base:o,typeMap:{algorithmic:r,multipart:l}},t.fromJSON=p}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=0.js.map