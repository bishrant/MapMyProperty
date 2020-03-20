(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/tasks/operations/PBFWorker":"./node_modules/arcgis-js-api/tasks/operations/PBFWorker.js",
	"arcgis-js-api/tasks/operations/PBFWorker":"./node_modules/arcgis-js-api/tasks/operations/PBFWorker.js",
	"arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet":"./node_modules/arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet.js",
	"arcgis-js-api/tasks/operations/pbfFeatureServiceParser":"./node_modules/arcgis-js-api/tasks/operations/pbfFeatureServiceParser.js",
	"arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet":"./node_modules/arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet.js",
	"esri/tasks/operations/pbfQueryUtils":"./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js",
	"arcgis-js-api/tasks/operations/pbfQueryUtils":"./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/arcgis-js-api/tasks/operations/PBFWorker.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/PBFWorker.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/extendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/extendsHelper.js"),__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../core/requireUtils */ "./node_modules/arcgis-js-api/core/requireUtils.js"),__webpack_require__(/*! ../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../layers/support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js"),__webpack_require__(/*! ./pbfQueryUtils */ "./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js"),__webpack_require__.dj.m(module)], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,o,i,n,a,s,f,u,l){function d(){return new p}Object.defineProperty(r,"__esModule",{value:!0});var p=function(){function e(){}return e.prototype._parseFeatureQuery=function(e){var r=u.parsePBFFeatureQuery(e.buffer,e.options);if(e.options&&"dehydrated"===e.options.type){var t=r;if(r.spatialReference=t.spatialReference.toJSON(),t.fields)for(var o=0;o<t.fields.length;o++)t.fields[o]=t.fields[o].toJSON()}return i.resolve(r)},e}(),c=function(r){function d(){var t=r.call(this)||this;return t._thread=void 0,a.open(n.getAbsMid("./PBFWorker",e,l),{strategy:"dedicated"}).then(function(e){void 0===t._thread?t._thread=e:e.close()}),t}return t(d,r),d.prototype.destroy=function(){this._thread&&this._thread.close(),this._thread=null},d.prototype.parseFeatureQuery=function(e,r){return e&&0!==e.byteLength?this._thread?this._thread.invoke("_parseFeatureQuery",{buffer:e,options:r},{transferList:[e]}).then(function(e){if(r&&"dehydrated"===r.type){var t=e;if(t.spatialReference=s.fromJSON(t.spatialReference),t.fields)for(var i=0;i<t.fields.length;i++)t.fields[i]=f.fromJSON(t.fields[i]);for(var n=t.spatialReference,a=0,u=t.features;a<u.length;a++){var l=u[a];l.uid=o.generateUID(),l.geometry&&(l.geometry.spatialReference=n)}}return e}):i.resolve(u.parsePBFFeatureQuery(e,r)):i.resolve(null)},d}(p);r.PBFWorker=c,r.default=d}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../Graphic */ "./node_modules/arcgis-js-api/Graphic.js"),__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js"),__webpack_require__(/*! ../../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js"),__webpack_require__(/*! ../../layers/graphics/dehydratedFeatures */ "./node_modules/arcgis-js-api/layers/graphics/dehydratedFeatures.js"),__webpack_require__(/*! ../../layers/support/Field */ "./node_modules/arcgis-js-api/layers/support/Field.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,r,n,o,i,a){function s(t,e){return e}function u(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return("lowerLeft"===t.originPosition?f:d)(t,e+n,1)}}function h(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return("lowerLeft"===t.originPosition?f:d)(t,e+n,1);case 2:return f(t,e,2)}}function p(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return("lowerLeft"===t.originPosition?f:d)(t,e+n,1);case 2:return f(t,e,3)}}function c(t,e,r,n){switch(r){case 0:return f(t,e+n,0);case 1:return("lowerLeft"===t.originPosition?f:d)(t,e+n,1);case 2:return f(t,e,2);case 3:return f(t,e,3)}}function f(t,e,r){var n=t.translate,o=t.scale;return n[r]+e*o[r]}function d(t,e,r){var n=t.translate,o=t.scale;return n[r]-e*o[r]}Object.defineProperty(e,"__esModule",{value:!0});var l=function(){function t(t){this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=s,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}return t.prototype.createFeatureResult=function(){return new i.DehydratedFeatureSetClass},t.prototype.finishFeatureResult=function(t){this.options.applyTransform&&(t.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0},t.prototype.createSpatialReference=function(){return new o},t.prototype.addField=function(t,e){t.fields.push(a.fromJSON(e));var r=t.fields.map(function(t){return t.name});this.AttributesConstructor=function(){for(var t=0,e=r;t<e.length;t++){this[e[t]]=null}}},t.prototype.addFeature=function(t,e){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(var n in e.attributes){var o=e.attributes[n];"string"==typeof o&&o.length>r&&(e.attributes[n]="")}t.features.push(e)},t.prototype.prepareFeatures=function(t){var e=this;switch(this.options.applyTransform&&t.transform&&(this.transform=t.transform,this.applyTransform=this.deriveApplyTransform(t)),this.vertexDimension=2,t.hasZ&&this.vertexDimension++,t.hasM&&this.vertexDimension++,t.geometryType){case"point":this.addCoordinate=function(t,r,n,o){return e.addCoordinatePoint(t,r,o)},this.createGeometry=function(t){return e.createPointGeometry(t)};break;case"polygon":this.addCoordinate=function(t,r,n,o){return e.addCoordinatePolygon(t,r,o)},this.createGeometry=function(t){return e.createPolygonGeometry(t)};break;case"polyline":this.addCoordinate=function(t,r,n,o){return e.addCoordinatePolyline(t,r,o)},this.createGeometry=function(t){return e.createPolylineGeometry(t)};break;case"multipoint":this.addCoordinate=function(t,r,n,o){return e.addCoordinateMultipoint(t,r,o)},this.createGeometry=function(t){return e.createMultipointGeometry(t)};break;default:n.neverReached(t.geometryType)}},t.prototype.createFeature=function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,new i.DehydratedFeatureClass(r.generateUID(),null,new this.AttributesConstructor)},t.prototype.addLength=function(t,e,r){0===this.lengths.length&&(this.toAddInCurrentPath=e),this.lengths.push(e)},t.prototype.createPointGeometry=function(t){var e={type:"point",x:0,y:0,spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM};return e.hasZ&&(e.z=0),e.hasM&&(e.m=0),e},t.prototype.addCoordinatePoint=function(t,e,r){switch(e=this.applyTransform(this.transform,e,r,0),r){case 0:t.x=e;break;case 1:t.y=e;break;case 2:t.hasZ?t.z=e:t.m=e;break;case 3:t.m=e}},t.prototype.transformPathLikeValue=function(t,e){var r=0;return e<=1&&(r=this.previousCoordinate[e],this.previousCoordinate[e]+=t),this.applyTransform(this.transform,t,e,r)},t.prototype.addCoordinatePolyline=function(t,e,r){this.dehydratedAddPointsCoordinate(t.paths,e,r)},t.prototype.addCoordinatePolygon=function(t,e,r){this.dehydratedAddPointsCoordinate(t.rings,e,r)},t.prototype.addCoordinateMultipoint=function(t,e,r){0===r&&t.points.push([]);var n=this.transformPathLikeValue(e,r);t.points[t.points.length-1].push(n)},t.prototype.createPolygonGeometry=function(t){return{type:"polygon",rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.createPolylineGeometry=function(t){return{type:"polyline",paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.createMultipointGeometry=function(t){return{type:"multipoint",points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}},t.prototype.dehydratedAddPointsCoordinate=function(t,e,r){if(null===this.coordinateBuffer){var n=this.lengths.reduce(function(t,e){return t+e},0);this.coordinateBuffer=new Float64Array(n*this.vertexDimension)}0===r&&0==this.toAddInCurrentPath--&&(t.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var o=this.transformPathLikeValue(e,r),i=t[t.length-1];0===r&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=o},t.prototype.deriveApplyTransform=function(t){var e=t.hasZ,r=t.hasM;return e&&r?c:e?h:r?p:u},t}();e.Context=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/pbfFeatureServiceParser.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/pbfFeatureServiceParser.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../core/pbf */ "./node_modules/arcgis-js-api/core/pbf.js"),__webpack_require__(/*! ./pbfDehydratedFeatureSet */ "./node_modules/arcgis-js-api/tasks/operations/pbfDehydratedFeatureSet.js"),__webpack_require__(/*! ./pbfOptimizedFeatureSet */ "./node_modules/arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,s,n,i){function c(e){return e>=v.length?null:v[e]}function o(e){return e>=D.length?null:D[e]}function l(e){return e>=x.length?null:x[e]}function g(e,r){return r>=e.geometryTypes.length?null:e.geometryTypes[r]}function u(e,r,t){for(var a=r.createPointGeometry(t);e.next();)switch(e.tag()){case 3:for(var s=e.getUInt32(),n=e.pos()+s,i=0;e.pos()<n;)r.addCoordinatePoint(a,e.getSInt64(),0,i++);break;case 1:case 2:default:e.skip()}return a}function p(e,r,t){for(var a=r.createGeometry(t),s=2+(t.hasZ?1:0)+(t.hasM?1:0);e.next();)switch(e.tag()){case 2:for(var n=e.getUInt32(),i=e.pos()+n,c=0;e.pos()<i;)r.addLength(a,e.getUInt32(),c++);break;case 3:for(var o=e.getUInt32(),i=e.pos()+o,l=0,g=0;e.pos()<i;)r.addCoordinate(a,e.getSInt64(),g,l),++l===s&&(g++,l=0);break;case 1:default:e.skip()}return a}function y(e){for(;e.next();)switch(e.tag()){case 1:return e.getString();case 2:return e.getFloat();case 3:return e.getDouble();case 4:return e.getSInt32();case 5:return e.getUInt32();case 6:return e.getInt64();case 7:return e.getUInt64();case 8:return e.getSInt64();case 9:return e.getBool();default:return e.skip(),null}return null}function f(e){for(var r={type:c(0)};e.next();)switch(e.tag()){case 1:r.name=e.getString();break;case 2:r.type=c(e.getEnum());break;case 3:r.alias=e.getString();break;case 4:r.sqlType=o(e.getEnum());break;case 5:case 6:default:e.skip()}return r}function b(e,r,t,a){for(var s=r.createFeature(t),n=0;e.next();)switch(e.tag()){case 1:var i=a[n++].name;s.attributes[i]=e.processMessage(y);break;case 2:s.geometry=e.processMessageWithArgs(p,r,t);break;case 4:s.centroid=e.processMessageWithArgs(u,r,t);break;default:e.skip()}return s}function d(e){for(var r=[1,1,1,1];e.next();)switch(e.tag()){case 1:r[0]=e.getDouble();break;case 2:r[1]=e.getDouble();break;case 4:r[2]=e.getDouble();break;case 3:r[3]=e.getDouble();break;default:e.skip()}return r}function k(e){for(var r=[0,0,0,0];e.next();)switch(e.tag()){case 1:r[0]=e.getDouble();break;case 2:r[1]=e.getDouble();break;case 4:r[2]=e.getDouble();break;case 3:r[3]=e.getDouble();break;default:e.skip()}return r}function T(e){for(var r={originPosition:l(0)};e.next();)switch(e.tag()){case 1:r.originPosition=l(e.getEnum());break;case 2:r.scale=e.processMessage(d);break;case 3:r.translate=e.processMessage(k);break;default:e.skip()}return r}function h(e){for(var r={};e.next();)switch(e.tag()){case 1:r.shapeAreaFieldName=e.getString();break;case 2:r.shapeLengthFieldName=e.getString();break;case 3:r.units=e.getString();break;default:e.skip()}return r}function m(e,r){for(var t=r.createSpatialReference();e.next();)switch(e.tag()){case 1:t.wkid=e.getUInt32();break;case 5:t.wkt=e.getString();break;case 2:case 3:case 4:default:e.skip()}return t}function F(e,r){var t=r.createFeatureResult();t.geometryType=g(r,0);for(var a=!1;e.next();)switch(e.tag()){case 1:t.objectIdFieldName=e.getString();break;case 3:t.globalIdFieldName=e.getString();break;case 4:t.geohashFieldName=e.getString();break;case 5:t.geometryProperties=e.processMessage(h);break;case 7:t.geometryType=g(r,e.getEnum());break;case 8:t.spatialReference=e.processMessageWithArgs(m,r);break;case 10:t.hasZ=e.getBool();break;case 11:t.hasM=e.getBool();break;case 12:t.transform=e.processMessage(T);break;case 9:var s=e.getBool();t.exceededTransferLimit=s;break;case 13:r.addField(t,e.processMessage(f));break;case 15:a||(r.prepareFeatures(t),a=!0),r.addFeature(t,e.processMessageWithArgs(b,r,t,t.fields));break;case 2:case 6:default:e.skip()}return r.finishFeatureResult(t),t}function q(e,r){for(var t={};e.next();)switch(e.tag()){case 1:t.featureResult=e.processMessageWithArgs(F,r);break;default:e.skip()}return t}function w(e){return e&&"dehydrated"===e.type?new n.Context(e):new i.Context}function I(e,r){var a=w(r);try{for(var n=new s(new Uint8Array(e),new DataView(e)),i={};n.next();)switch(n.tag()){case 2:i.queryResult=n.processMessageWithArgs(q,a);break;default:n.skip()}return i}catch(e){var c=new t("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e});return S.error(c),{queryResult:{featureResult:a.createFeatureResult()}}}}Object.defineProperty(r,"__esModule",{value:!0});var S=a.getLogger("esri.tasks.operations.pbfFeatureServiceParser"),v=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML"],D=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],x=["upperLeft","lowerLeft"];r.parseFeatureQuery=I}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/pbfOptimizedFeatureSet.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../layers/graphics/OptimizedFeature */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js"),__webpack_require__(/*! ../../layers/graphics/OptimizedFeatureSet */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js"),__webpack_require__(/*! ../../layers/graphics/OptimizedGeometry */ "./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(){this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"]}return e.prototype.createFeatureResult=function(){return new o.default},e.prototype.prepareFeatures=function(){},e.prototype.finishFeatureResult=function(){},e.prototype.addFeature=function(e,t){e.features.push(t)},e.prototype.createFeature=function(){return new r.default},e.prototype.createSpatialReference=function(){return{wkid:0}},e.prototype.createGeometry=function(){return new n.default},e.prototype.addField=function(e,t){e.fields.push(t)},e.prototype.addCoordinate=function(e,t){e.coords.push(t)},e.prototype.addCoordinatePoint=function(e,t){e.coords.push(t)},e.prototype.addLength=function(e,t){e.lengths.push(t)},e.prototype.createPointGeometry=function(){return new n.default},e}();t.Context=i}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/tasks/operations/pbfQueryUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./pbfFeatureServiceParser */ "./node_modules/arcgis-js-api/tasks/operations/pbfFeatureServiceParser.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t){function u(e,r){var u=t.parseFeatureQuery(e,r),a=u.queryResult.featureResult;if(a&&a.features&&a.features.length&&a.objectIdFieldName)for(var s=a.objectIdFieldName,f=0,i=a.features;f<i.length;f++){var n=i[f];n.attributes&&(n.objectId=n.attributes[s])}return a}Object.defineProperty(r,"__esModule",{value:!0}),r.parsePBFFeatureQuery=u}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=19.js.map