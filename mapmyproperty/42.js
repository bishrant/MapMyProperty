(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/2d/engine/vectorTiles/style/Filter":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/Filter.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/style/StyleDefinition":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleDefinition.js",
	"esri/views/2d/engine/vectorTiles/style/StyleLayer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/style/StyleProperty":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleProperty.js",
	"esri/views/2d/engine/vectorTiles/style/StyleRepository":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js",
	"arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository":"./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[42],{

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/Filter.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/Filter.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){return function(){function e(t,r,n){this._op=t,"$type"===r?(n instanceof Array?this._val=n.map(function(t){return e._types.indexOf(t)}):this._val=e._types.indexOf(n),this._op+=11):(this._key=r,this._val=n)}return e.prototype.filter=function(e){switch(this._op){case 0:return this._val;case 1:return e.values[this._key]===this._val;case 2:return e.values[this._key]!==this._val;case 3:return e.values[this._key]<this._val;case 4:return e.values[this._key]>this._val;case 5:return e.values[this._key]<=this._val;case 6:return e.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(e.values[this._key]);case 8:return-1===this._val.indexOf(e.values[this._key]);case 9:for(var t=0,r=this._val;t<r.length;t++){var n=r[t];if(n.filter(e))return!0}return!1;case 10:for(var s=0,i=this._val;s<i.length;s++){var n=i[s];if(!n.filter(e))return!1}return!0;case 11:for(var a=0,u=this._val;a<u.length;a++){var n=u[a];if(n.filter(e))return!1}return!0;case 12:return e.type===this._val;case 13:return e.type!==this._val;case 14:return e.type<this._val;case 15:return e.type>this._val;case 16:return e.type>=this._val;case 17:return e.type<=this._val;case 18:return-1!==this._val.indexOf(e.type);case 19:return-1===this._val.indexOf(e.type);case 20:return void 0!==e.values[this._key];case 21:return void 0===e.values[this._key]}},e.createFilter=function(t){if(!t)return new e(0,void 0,!0);var r=t[0];if(t.length<=1)return new e(0,void 0,"any"!==r);switch(r){case"==":return new e(1,t[1],t[2]);case"!=":return new e(2,t[1],t[2]);case">":return new e(4,t[1],t[2]);case"<":return new e(3,t[1],t[2]);case">=":return new e(6,t[1],t[2]);case"<=":return new e(5,t[1],t[2]);case"in":return new e(7,t[1],t.slice(2));case"!in":return new e(8,t[1],t.slice(2));case"any":return new e(9,void 0,t.slice(1).map(e.createFilter.bind(this)));case"all":return new e(10,void 0,t.slice(1).map(e.createFilter.bind(this)));case"none":return new e(11,void 0,t.slice(1).map(e.createFilter.bind(this)));case"has":return new e(20,t[1],void 0);case"!has":return new e(21,t[1],void 0);default:throw new Error("invalid operator: "+r)}},e._types=["Unknown","Point","LineString","Polygon"],e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleDefinition.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleDefinition.js ***!
  \*****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){}return e.backgroundLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.fillLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.lineLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"line-cap":{type:"enum",values:["butt","round","square"],default:"butt"},"line-join":{type:"enum",values:["bevel","round","miter"],default:"miter"},"line-miter-limit":{type:"number",default:2},"line-round-limit":{type:"number",default:1.05}},e.symbolLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"},"symbol-placement":{type:"enum",values:["point","line"],default:"point"},"symbol-spacing":{type:"number",minimum:1,default:250},"symbol-avoid-edges":{type:"boolean",default:!1},"icon-image":{type:"string"},"icon-allow-overlap":{type:"boolean",default:!1},"icon-ignore-placement":{type:"boolean",default:!1},"icon-optional":{type:"boolean",default:!1},"icon-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"icon-size":{type:"number",minimum:0,default:1},"icon-rotate":{type:"number",default:0},"icon-padding":{type:"number",minimum:0,default:2},"icon-keep-upright":{type:"boolean",default:!1},"icon-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-field":{type:"string"},"text-rotation-alignment":{type:"enum",values:["map","viewport","auto"],default:"auto"},"text-font":{type:"array",value:"string",default:["Open Sans Regular","Arial Unicode MS Regular"]},"text-size":{type:"number",minimum:0,default:16},"text-max-width":{type:"number",minimum:0,default:10},"text-line-height":{type:"number",default:1.2},"text-letter-spacing":{type:"number",default:0},"text-justify":{type:"enum",values:["left","center","right"],default:"center"},"text-anchor":{type:"enum",values:["center","left","right","top","bottom","top-left","top-right","bottom-left","bottom-right"],default:"center"},"text-max-angle":{type:"number",minimum:0,default:45},"text-rotate":{type:"number",default:0},"text-padding":{type:"number",minimum:0,default:2},"text-keep-upright":{type:"boolean",default:!0},"text-transform":{type:"enum",values:["none","uppercase","lowercase"],default:"none"},"text-offset":{type:"array",value:"number",length:2,default:[0,0]},"text-allow-overlap":{type:"boolean",default:!1},"text-ignore-placement":{type:"boolean",default:!1},"text-optional":{type:"boolean",default:!1}},e.circleLayoutDefinition={visibility:{type:"enum",values:["visible","none"],default:"visible"}},e.backgroundPaintDefinition={"background-opacity":{type:"number",minimum:0,maximum:1,default:1},"background-color":{type:"color",default:[0,0,0,1]},"background-pattern":{type:"string"}},e.fillPaintDefinition={"fill-opacity":{type:"number",minimum:0,maximum:1,default:1},"fill-antialias":{type:"boolean",default:!0},"fill-color":{type:"color",default:[0,0,0,1]},"fill-outline-color":{type:"color",default:[0,0,0,0]},"fill-translate":{type:"array",value:"number",length:2,default:[0,0]},"fill-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"fill-pattern":{type:"string"}},e.linePaintDefinition={"line-opacity":{type:"number",minimum:0,maximum:1,default:1},"line-color":{type:"color",default:[0,0,0,1]},"line-translate":{type:"array",value:"number",length:2,default:[0,0]},"line-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"line-width":{type:"number",minimum:0,default:1},"line-gap-width":{type:"number",minimum:0,default:0},"line-offset":{type:"number",default:0},"line-blur":{type:"number",minimum:0,default:0},"line-dasharray":{type:"array",value:"number",default:[]},"line-pattern":{type:"string"}},e.symbolPaintDefinition={"icon-opacity":{type:"number",minimum:0,maximum:1,default:1},"icon-color":{type:"color",default:[0,0,0,1]},"icon-halo-color":{type:"color",default:[0,0,0,0]},"icon-halo-width":{type:"number",minimum:0,default:0},"icon-halo-blur":{type:"number",minimum:0,default:0},"icon-translate":{type:"array",value:"number",length:2,default:[0,0]},"icon-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"text-opacity":{type:"number",minimum:0,maximum:1,default:1},"text-color":{type:"color",default:[0,0,0,1]},"text-halo-color":{type:"color",default:[0,0,0,0]},"text-halo-width":{type:"number",minimum:0,default:0},"text-halo-blur":{type:"number",minimum:0,default:0},"text-translate":{type:"array",value:"number",length:2,default:[0,0]},"text-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"}},e.rasterPaintDefinition={"raster-opacity":{type:"number",minimum:0,maximum:1,default:1},"raster-hue-rotate":{type:"number",default:0},"raster-brightness-min":{type:"number",minimum:0,maximum:1,default:0},"raster-brightness-max":{type:"number",minimum:0,maximum:1,default:1},"raster-saturation":{type:"number",minimum:-1,maximum:1,default:0},"raster-contrast":{type:"number",minimum:-1,maximum:1,default:0},"raster-fade-duration":{type:"number",minimum:0,default:300}},e.circlePaintDefinition={"circle-opacity":{type:"number",minimum:0,maximum:1,default:1},"circle-radius":{type:"number",minimum:0,default:5},"circle-color":{type:"color",default:[0,0,0,1]},"circle-blur":{type:"number",minimum:0,default:0},"circle-translate":{type:"array",value:"number",length:2,default:[0,0]},"circle-translate-anchor":{type:"enum",values:["map","viewport"],default:"map"},"circle-stroke-width":{type:"number",minimum:0,default:0},"circle-stroke-color":{type:"color",default:[0,0,0,1]},"circle-stroke-opacity":{type:"number",minimum:0,maximum:1,default:1}},e}();t.StyleDefinition=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js ***!
  \************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ./Filter */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/Filter.js"),__webpack_require__(/*! ./StyleDefinition */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleDefinition.js"),__webpack_require__(/*! ./StyleProperty */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleProperty.js"),__webpack_require__(/*! ../../webgl/definitions */ "./node_modules/arcgis-js-api/views/2d/engine/webgl/definitions.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,i,e,a,n,r,o){Object.defineProperty(i,"__esModule",{value:!0});var l=function(){function t(t,i,e){switch(this.type=t,this.typeName=i.type,this.id=i.id,this.source=i.source,this.sourceLayer=i["source-layer"],this.minzoom=i.minzoom,this.maxzoom=i.maxzoom,this.filter=i.filter,this.layout=i.layout,this.paint=i.paint,this.z=e,t){case 0:this._layoutDefinition=n.StyleDefinition.backgroundLayoutDefinition,this._paintDefinition=n.StyleDefinition.backgroundPaintDefinition;break;case 1:this._layoutDefinition=n.StyleDefinition.fillLayoutDefinition,this._paintDefinition=n.StyleDefinition.fillPaintDefinition;break;case 2:this._layoutDefinition=n.StyleDefinition.lineLayoutDefinition,this._paintDefinition=n.StyleDefinition.linePaintDefinition;break;case 3:this._layoutDefinition=n.StyleDefinition.symbolLayoutDefinition,this._paintDefinition=n.StyleDefinition.symbolPaintDefinition;break;case 4:this._layoutDefinition=n.StyleDefinition.circleLayoutDefinition,this._paintDefinition=n.StyleDefinition.circlePaintDefinition}this._layoutProperties=this._parseLayout(this.layout),this._paintProperties=this._parsePaint(this.paint)}return t.prototype.getFeatureFilter=function(){return void 0!==this._featureFilter?this._featureFilter:this._featureFilter=a.createFilter(this.filter)},t.prototype.getLayoutProperty=function(t){var i=this._layoutProperties;if(i)return i[t]},t.prototype.getPaintProperty=function(t){var i=this._paintProperties;if(i)return i[t]},t.prototype.getLayoutValue=function(t,i,e){var a,n=this._layoutProperties;if(n){var r=n[t];r&&(a=r.getValue(i,e))}var o=this._layoutDefinition[t];return void 0===a&&(a=o.default),"enum"===o.type&&(a=o.values.indexOf(a)),a},t.prototype.getPaintValue=function(t,i,e){var a,n=this._paintProperties;if(n){var r=n[t];r&&(a=r.getValue(i,e))}var o=this._paintDefinition[t];return void 0===a&&(a=o.default),"enum"===o.type&&(a=o.values.indexOf(a)),a},t.prototype.isPainterDataDriven=function(){var t=this._paintProperties;if(t)for(var i in t)if(t[i].isDataDriven)return!0;return!1},t.prototype._parseLayout=function(t){var i={};for(var e in t){var a=this._layoutDefinition[e];a&&(i[e]=new r(a,t[e]))}return i},t.prototype._parsePaint=function(t){var i={};for(var e in t){var a=this._paintDefinition[e];a&&(i[e]=new r(a,t[e]))}return i},t}();i.StyleLayer=l;var s=function(t){function i(i,e,a){return t.call(this,i,e,a)||this}return e(i,t),i}(l);i.BackgroundStyleLayer=s;var u=function(t){function i(i,e,a){var n=t.call(this,i,e,a)||this,r=n.getPaintProperty("fill-color");n.hasDataDrivenColor=!!r&&r.isDataDriven;var o=n.getPaintProperty("fill-opacity");n.hasDataDrivenOpacity=!!o&&o.isDataDriven,n.hasDataDrivenFill=n.hasDataDrivenColor||n.hasDataDrivenOpacity;var l=n.getPaintProperty("fill-outline-color");return n.outlineUsesFillColor=!l,n.hasDataDrivenOutlineColor=!!l&&l.isDataDriven,n.hasDataDrivenOutline=(l?n.hasDataDrivenOutlineColor:n.hasDataDrivenColor)||n.hasDataDrivenOpacity,n}return e(i,t),i}(l);i.FillStyleLayer=u;var D=function(t){function i(i,e,a){var r=t.call(this,i,e,a)||this,l=r.getPaintProperty("line-color");r.hasDataDrivenColor=!!l&&l.isDataDriven;var s=r.getPaintProperty("line-opacity");r.hasDataDrivenOpacity=!!s&&s.isDataDriven;var u=r.getPaintProperty("line-width");r.hasDataDrivenWidth=!!u&&u.isDataDriven,r.hasDataDrivenLine=r.hasDataDrivenColor||r.hasDataDrivenOpacity||r.hasDataDrivenWidth;var D=e.paint["line-width"];return D||(D=n.StyleDefinition.linePaintDefinition["line-width"].default),r.isThinLine=!r.hasDataDrivenWidth&&"number"==typeof D&&D<o.THIN_LINE_THRESHOLD,r}return e(i,t),i}(l);i.LineStyleLayer=D;var h=function(t){function i(i,e,a){var n=t.call(this,i,e,a)||this,r=n.getPaintProperty("icon-color");n.hasDataDrivenIconColor=!!r&&r.isDataDriven;var o=n.getPaintProperty("icon-opacity");n.hasDataDrivenIconOpacity=!!o&&o.isDataDriven;var l=n.getLayoutProperty("icon-size");n.hasDataDrivenIconSize=!!l&&l.isDataDriven,n.hasDataDrivenIcon=n.hasDataDrivenIconColor||n.hasDataDrivenIconOpacity||n.hasDataDrivenIconSize;var s=n.getPaintProperty("text-color");n.hasDataDrivenTextColor=!!s&&s.isDataDriven;var u=n.getPaintProperty("text-opacity");n.hasDataDrivenTextOpacity=!!u&&u.isDataDriven;var D=n.getLayoutProperty("text-size");return n.hasDataDrivenTextSize=!!D&&D.isDataDriven,n.hasDataDrivenText=n.hasDataDrivenTextColor||n.hasDataDrivenTextOpacity||n.hasDataDrivenTextSize,n}return e(i,t),i}(l);i.SymbolStyleLayer=h;var y=function(t){function i(i,e,a){var n=t.call(this,i,e,a)||this,r=n.getPaintProperty("circle-radius");n.hasDataDrivenRadius=!!r&&r.isDataDriven;var o=n.getPaintProperty("circle-color");n.hasDataDrivenColor=!!o&&o.isDataDriven;var l=n.getPaintProperty("circle-opacity");n.hasDataDrivenOpacity=!!l&&l.isDataDriven;var s=n.getPaintProperty("circle-stroke-width");n.hasDataDrivenStrokeWidth=!!s&&s.isDataDriven;var u=n.getPaintProperty("circle-stroke-color");n.hasDataDrivenStrokeColor=!!u&&u.isDataDriven;var D=n.getPaintProperty("circle-stroke-opacity");n.hasDataDrivenStrokeOpacity=!!D&&D.isDataDriven;var h=n.getPaintProperty("circle-blur");return n.hasDataDrivenBlur=!!h&&h.isDataDriven,n}return e(i,t),i}(l);i.CircleStyleLayer=y;var c=function(){function t(t,i,e){this.cap=t.getLayoutValue("line-cap",i,e),this.join=t.getLayoutValue("line-join",i,e),this.miterLimit=t.getLayoutValue("line-miter-limit",i,e),this.roundLimit=t.getLayoutValue("line-round-limit",i,e)}return t}();i.LineLayout=c;var p=function(){function t(t,i,e,a){this.allowOverlap=t.getLayoutValue("icon-allow-overlap",i,a),this.ignorePlacement=t.getLayoutValue("icon-ignore-placement",i,a),this.optional=t.getLayoutValue("icon-optional",i,a),this.rotationAlignment=t.getLayoutValue("icon-rotation-alignment",i,a),this.size=t.getLayoutValue("icon-size",i,a),this.rotate=t.getLayoutValue("icon-rotate",i,a),this.padding=t.getLayoutValue("icon-padding",i,a),this.keepUpright=t.getLayoutValue("icon-keep-upright",i,a),this.offset=t.getLayoutValue("icon-offset",i,a),2===this.rotationAlignment&&(this.rotationAlignment=e?0:1)}return t}();i.IconLayout=p;var v=function(){function t(t,i,e,a){this.allowOverlap=t.getLayoutValue("text-allow-overlap",i,a),this.ignorePlacement=t.getLayoutValue("text-ignore-placement",i,a),this.optional=t.getLayoutValue("text-optional",i,a),this.rotationAlignment=t.getLayoutValue("text-rotation-alignment",i,a),this.fontArray=t.getLayoutValue("text-font",i,a),this.maxWidth=t.getLayoutValue("text-max-width",i,a),this.lineHeight=t.getLayoutValue("text-line-height",i,a),this.letterSpacing=t.getLayoutValue("text-letter-spacing",i,a),this.justify=t.getLayoutValue("text-justify",i,a),this.anchor=t.getLayoutValue("text-anchor",i,a),this.maxAngle=t.getLayoutValue("text-max-angle",i,a),this.size=t.getLayoutValue("text-size",i,a),this.rotate=t.getLayoutValue("text-rotate",i,a),this.padding=t.getLayoutValue("text-padding",i,a),this.keepUpright=t.getLayoutValue("text-keep-upright",i,a),this.transform=t.getLayoutValue("text-transform",i,a),this.offset=t.getLayoutValue("text-offset",i,a),2===this.rotationAlignment&&(this.rotationAlignment=e?0:1)}return t}();i.TextLayout=v}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleProperty.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleProperty.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../Color */ "./node_modules/arcgis-js-api/Color.js"),__webpack_require__(/*! ../GeometryUtils */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/GeometryUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,i){return function(){function t(e,r){this.isDataDriven=!1;var i;switch(e.type){case"number":i=!0;break;case"color":i=!0,r=t._parseColor(r);break;case"array":i="number"===e.value;break;default:i=!1}null==r&&(r=e.default),i&&"interval"===r.type&&(i=!1);var a=r&&r.stops&&r.stops.length>0;if(a)for(var o=0,n=r.stops;o<n.length;o++){var u=n[o];u[1]=this._validate(u[1],e)}if(this.isDataDriven=!!r&&!!r.property,this.isDataDriven)if(void 0!==r.default&&(r.default=this._validate(r.default,e)),a)switch(r.type){case"identity":this.getValue=this._buildIdentity(r,e);break;case"categorical":this.getValue=this._buildCategorical(r,e);break;default:this.getValue=i?this._buildInterpolate(r,e):this._buildInterval(r,e)}else this.getValue=this._buildIdentity(r,e);else a?this.getValue=i?this._buildZoomInterpolate(r):this._buildZoomInterval(r):(r=this._validate(r,e),this.getValue=this._buildSimple(r))}return t.prototype._validate=function(t,e){if("number"===e.type){if(t<e.minimum)return e.minimum;if(t>e.maximum)return e.maximum}return t},t.prototype._buildSimple=function(t){return function(){return t}},t.prototype._buildIdentity=function(e,r){var i=this;return function(a,o){var n;return o&&(n=o.values[e.property],"color"===r.type&&(n=t._parseColor(n))),void 0===n&&(n=e.default),void 0!==n?i._validate(n,r):r.default}},t.prototype._buildCategorical=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),o=r._categorical(o,t.stops),void 0!==o?o:void 0!==t.default?t.default:e.default}},t.prototype._buildInterval=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interval(o,t.stops):void 0!==t.default?t.default:e.default}},t.prototype._buildInterpolate=function(t,e){var r=this;return function(i,a){var o;return a&&(o=a.values[t.property]),"number"==typeof o?r._interpolate(o,t.stops,t.base||1):void 0!==t.default?t.default:e.default}},t.prototype._buildZoomInterpolate=function(t){var e=this;return function(r){return e._interpolate(r,t.stops,t.base||1)}},t.prototype._buildZoomInterval=function(t){var e=this;return function(r){return e._interval(r,t.stops)}},t.prototype._categorical=function(t,e){for(var r=e.length,i=0;i<r;i++)if(e[i][0]===t)return e[i][1]},t.prototype._interval=function(t,e){for(var r=e.length,i=0,a=0;a<r&&e[a][0]<=t;a++)i=a;return e[i][1]},t.prototype._interpolate=function(t,e,r){for(var a,o,n=e.length,u=0;u<n;u++){var l=e[u];if(!(l[0]<=t)){o=l;break}a=l}if(a&&o){var s=o[0]-a[0],p=t-a[0],f=1===r?p/s:(Math.pow(r,p)-1)/(Math.pow(r,s)-1);if(Array.isArray(a[1])){for(var d=a[1],v=o[1],c=[],u=0;u<d.length;u++)c.push(i.interpolate(d[u],v[u],f));return c}return i.interpolate(a[1],o[1],f)}return a?a[1]:o?o[1]:void 0},t._isEmpty=function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0},t._parseColor=function(e){if(Array.isArray(e))return e;{if("string"!=typeof e)return e&&e.default&&(e.default=t._parseColor(e.default)),e&&e.stops&&(e.stops=e.stops.map(function(e){return[e[0],t._parseColor(e[1])]})),e;var i=new r(e);if(!this._isEmpty(i))return r.toUnitRGBA(i)}},t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleRepository.js ***!
  \*****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ./StyleLayer */ "./node_modules/arcgis-js-api/views/2d/engine/vectorTiles/style/StyleLayer.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a){return function(){function e(r,a){if(this.backgroundBucketIds=[],this._layerByName={},this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=a?a.spriteUrl:r.sprite,this.glyphs=a?a.glyphsUrl:r.glyphs,t("stable-symbol-rendering")){var i=(r.layers||[]).filter(function(e){return e.layout&&e.layout["text-font"]})[0];i&&(r.layers||[]).forEach(function(e){e.layout&&e.layout["text-font"]&&(e.layout["text-font"]=i.layout["text-font"])})}if(this.layers=(r.layers||[]).map(e._create),this.layers)for(var y=void 0,o=0;o<this.layers.length;o++)y=this.layers[o],this._layerByName[y.id.toLowerCase()]=y,0===y.type&&this.backgroundBucketIds.push(o);this._identifyRefLayers()}return e.prototype.isPainterDataDriven=function(e){var r=this._layerByName[e.toLowerCase()];return!!r&&r.isPainterDataDriven()},e.prototype.getStyleLayerId=function(e){return e>=this.layers.length?null:this.layers[e].id},e.prototype.getLayoutProperties=function(e){var r=this._layerByName[e.toLowerCase()];return r?r.layout:null},e.prototype.getPaintProperties=function(e){var r=this._layerByName[e.toLowerCase()];return r?r.paint:null},e.prototype.setPaintProperties=function(r,t){var a=this._layerByName[r.toLowerCase()];if(!a)return"";var i=this.layers.indexOf(a);this.styleJSON.layers[i].paint=t;var y={id:a.id,type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:a.layout,paint:t},o=e._recreateLayer(y,a);return this.layers[i]=o,this._layerByName[a.id.toLowerCase()]=o,a.id},e.prototype.setLayoutProperties=function(r,t){var a=this._layerByName[r.toLowerCase()];if(!a)return"";var i=this.layers.indexOf(a);this.styleJSON.layers[i].layout=t;var y={id:a.id,type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:t,paint:a.paint},o=e._recreateLayer(y,a);return this.layers[i]=o,this._layerByName[a.id.toLowerCase()]=o,a.id},e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,a=0,i=this.layers;a<i.length;a++){var y=i[a];if(1===y.type){var o=y,s=y.source+"|"+y.sourceLayer;s+="|"+JSON.stringify(y.layout&&y.layout.visibility),s+="|"+JSON.stringify(y.minzoom),s+="|"+JSON.stringify(y.maxzoom),s+="|"+JSON.stringify(y.filter),(o.hasDataDrivenFill||o.hasDataDrivenOutline)&&(s+="|"+JSON.stringify(t)),e.push({key:s,layer:y})}if(2===y.type){var n=y,s=y.source+"|"+y.sourceLayer;s+="|"+JSON.stringify(y.layout&&y.layout.visibility),s+="|"+JSON.stringify(y.minzoom),s+="|"+JSON.stringify(y.maxzoom),s+="|"+JSON.stringify(y.filter),s+="|"+JSON.stringify(y.layout&&y.layout["line-cap"]),s+="|"+JSON.stringify(y.layout&&y.layout["line-join"]),n.hasDataDrivenLine&&(s+="|"+JSON.stringify(t)),r.push({key:s,layer:y})}++t}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,a=e.length,i=0;i<a;i++){var y=e[i];if(y.key===r)y.layer.refLayerId=t;else if(r=y.key,t=y.layer.id,1===y.layer.type&&!y.layer.getPaintProperty("fill-outline-color"))for(var o=i+1;o<a;o++){var s=e[o];if(s.key!==r)break;if(s.layer.getPaintProperty("fill-outline-color")){e[i]=s,e[o]=y,t=s.layer.id;break}}}},e._create=function(e,r,t){var i=1/(t.length+1),y=1-(1+r)*i;switch(e.type){case"background":return new a.BackgroundStyleLayer(0,e,y);case"fill":return new a.FillStyleLayer(1,e,y);case"line":return new a.LineStyleLayer(2,e,y);case"symbol":return new a.SymbolStyleLayer(3,e,y);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new a.CircleStyleLayer(4,e,y)}throw new Error("Unknown vector tile layer")},e._recreateLayer=function(e,r){switch(e.type){case"background":return new a.BackgroundStyleLayer(0,e,r.z);case"fill":return new a.FillStyleLayer(1,e,r.z);case"line":return new a.LineStyleLayer(2,e,r.z);case"symbol":return new a.SymbolStyleLayer(3,e,r.z);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new a.CircleStyleLayer(4,e,r.z)}},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=42.js.map