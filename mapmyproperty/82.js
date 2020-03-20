(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/SetPool":"./node_modules/arcgis-js-api/core/SetPool.js",
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"esri/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"arcgis-js-api/layers/support/Field":"./node_modules/arcgis-js-api/layers/support/Field.js",
	"esri/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/layers/support/FieldsIndex":"./node_modules/arcgis-js-api/layers/support/FieldsIndex.js",
	"arcgis-js-api/layers/support/fieldType":"./node_modules/arcgis-js-api/layers/support/fieldType.js",
	"esri/views/2d/layers/features/controllers/EditsQueue":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/EditsQueue.js",
	"esri/views/2d/layers/features/controllers/OnDemandController":"./node_modules/arcgis-js-api/views/2d/layers/features/controllers/OnDemandController.js",
	"esri/views/2d/layers/features/support/DataTile":"./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTile.js",
	"esri/views/2d/layers/features/support/DataTileFeaturesIndex":"./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex.js",
	"esri/views/2d/layers/features/support/TileUpdateQueue":"./node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/arcgis-js-api/core/SetPool.js":
/*!****************************************************!*\
  !*** ./node_modules/arcgis-js-api/core/SetPool.js ***!
  \****************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(){this._pool=[],this._set=new Set}return e.prototype.acquire=function(){if(0===this._pool.length)return new Set;var e=this._pool.pop();return this._set.delete(e),e},e.prototype.release=function(e){e&&!this._set.has(e)&&(e.clear(),this._pool.length<5e4&&(this._pool.push(e),this._set.add(e)))},e.acquire=function(){return n.acquire()},e.release=function(e){return n.release(e)},e}();t.default=r;var n=new r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

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

/***/ "./node_modules/arcgis-js-api/layers/support/Field.js":
/*!************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/Field.js ***!
  \************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js"),__webpack_require__(/*! ../../core/JSONSupport */ "./node_modules/arcgis-js-api/core/JSONSupport.js"),__webpack_require__(/*! ../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../core/accessorSupport/ensureType */ "./node_modules/arcgis-js-api/core/accessorSupport/ensureType.js"),__webpack_require__(/*! ./domains */ "./node_modules/arcgis-js-api/layers/support/domains.js"),__webpack_require__(/*! ./fieldType */ "./node_modules/arcgis-js-api/layers/support/fieldType.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,i,p,a,l,d){var u=new n.default({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"});return function(e){function t(t){var r=e.call(this,t)||this;return r.alias=null,r.defaultValue=void 0,r.description=null,r.domain=null,r.editable=!0,r.length=-1,r.name=null,r.nullable=!0,r.type=null,r.valueType=null,r}r(t,e),n=t,t.prototype.readDescription=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?r.value:null},t.prototype.readValueType=function(e,t){var r,o=t.description;try{r=JSON.parse(o)}catch(e){}return r?u.fromJSON(r.fieldValueType):null},t.prototype.clone=function(){return new n({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain&&this.domain.clone()||null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType})};var n;return o([p.property({type:String,json:{write:!0}})],t.prototype,"alias",void 0),o([p.property({type:[String,Number],json:{write:{allowNull:!0}}})],t.prototype,"defaultValue",void 0),o([p.property()],t.prototype,"description",void 0),o([p.reader("description")],t.prototype,"readDescription",null),o([p.property({types:l.types,json:{read:{reader:l.fromJSON},write:!0}})],t.prototype,"domain",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"editable",void 0),o([p.property({type:a.Integer,json:{write:!0}})],t.prototype,"length",void 0),o([p.property({type:String,json:{write:!0}})],t.prototype,"name",void 0),o([p.property({type:Boolean,json:{write:!0}})],t.prototype,"nullable",void 0),o([p.enumeration.serializable()(d.kebabDict)],t.prototype,"type",void 0),o([p.property()],t.prototype,"valueType",void 0),o([p.reader("valueType",["description"])],t.prototype,"readValueType",null),t=n=o([p.subclass("esri.layers.support.Field")],t)}(p.declared(i.JSONSupport))}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
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

/***/ "./node_modules/arcgis-js-api/layers/support/fieldType.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/support/fieldType.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/jsonMap */ "./node_modules/arcgis-js-api/core/jsonMap.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,i,l){Object.defineProperty(i,"__esModule",{value:!0}),i.kebabDict=new l.default({esriFieldTypeSmallInteger:"small-integer",esriFieldTypeInteger:"integer",esriFieldTypeSingle:"single",esriFieldTypeDouble:"double",esriFieldTypeLong:"long",esriFieldTypeString:"string",esriFieldTypeDate:"date",esriFieldTypeOID:"oid",esriFieldTypeGeometry:"geometry",esriFieldTypeBlob:"blob",esriFieldTypeRaster:"raster",esriFieldTypeGUID:"guid",esriFieldTypeGlobalID:"global-id",esriFieldTypeXML:"xml"})}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/EditsQueue.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers/EditsQueue.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,o,n,s,i,u,a){Object.defineProperty(t,"__esModule",{value:!0});var c=function(e){function t(t){var r=e.call(this,t)||this;return r._queue=[],r._onGoingRequest=null,r._abortController=u.createAbortController(),r}return s(t,e),t.prototype.destroy=function(){this.clear()},Object.defineProperty(t.prototype,"updating",{get:function(){return!this.destroyed&&(this._queue.length>0||null!=this._onGoingRequest)},enumerable:!0,configurable:!0}),t.prototype.clear=function(){if(this.destroyed)throw new Error("instance is already destroyed");for(var e=this._queue.pop();e;)e.resolver.reject(u.createAbortError()),e=this._queue.pop();this._queue.length=0,this._abortController.abort(),this._abortController=u.createAbortController()},t.prototype.push=function(e){return n(this,void 0,void 0,function(){var t,r=this;return o(this,function(o){if(this.destroyed)throw new Error("instance is already destroyed");return t=u.createResolver(),this._queue.push({event:e,resolver:t}),this.notifyChange("updating"),Promise.resolve().then(function(){r._processNext()}),[2,t.promise]})})},t.prototype._processNext=function(){return n(this,void 0,void 0,function(){var e,t,r,n,s,i,u,a,c,l,d,h,p,f,g,y,_,v,f,g,b,q,E,f,g,w,C,m=this;return o(this,function(o){switch(o.label){case 0:if(this._onGoingRequest)return[2];for(e=[],t=new Set,r=new Set,n=new Set,s=this._queue.shift();s;){for(i=s.event,u=i.addedFeatures,a=i.deletedFeatures,c=i.updatedFeatures,l=s.resolver,e.push(l),d=0,h=u;d<h.length;d++)p=h[d],f=p.objectId,g=p.error,g||(t.add(f),r.add(f),n.delete(f));for(y=0,_=c;y<_.length;y++)v=_[y],f=v.objectId,g=v.error,g||(r.add(f),n.delete(f));for(b=0,q=a;b<q.length;b++)E=q[b],f=E.objectId,g=E.error,g||(t.has(f)?t.delete(f):n.add(f),r.delete(f));s=this._queue.shift()}return r.size||n.size?(w=[],C=[],r.size&&r.forEach(function(e){w.push(e)}),n.size&&n.forEach(function(e){C.push(e)}),this._onGoingRequest=Promise.resolve().then(function(){return m.processEdits(w,C,{signal:m._abortController.signal})}).catch(function(){}),this.notifyChange("updating"),[4,this._onGoingRequest]):(this.notifyChange("updating"),e.forEach(function(e){return e()}),[2]);case 1:return o.sent(),this._onGoingRequest=null,this.notifyChange("updating"),e.forEach(function(e){return e()}),this._queue.length>0&&this._processNext(),[2]}})})},r([a.property({constructOnly:!0})],t.prototype,"processEdits",void 0),r([a.property({readOnly:!0})],t.prototype,"updating",null),t=r([a.subclass("esri.views.2d.layers.features.controllers.EditsQueue")],t)}(a.declared(i));t.EditsQueue=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/OnDemandController.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/controllers/OnDemandController.js ***!
  \***********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/ArrayPool */ "./node_modules/arcgis-js-api/core/ArrayPool.js"),__webpack_require__(/*! ../../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../../../../core/Logger */ "./node_modules/arcgis-js-api/core/Logger.js"),__webpack_require__(/*! ../../../../../core/now */ "./node_modules/arcgis-js-api/core/now.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/watchUtils */ "./node_modules/arcgis-js-api/core/watchUtils.js"),__webpack_require__(/*! ../../../../../core/workers */ "./node_modules/arcgis-js-api/core/workers.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../../../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../../../layers/graphics/featureConversionUtils */ "./node_modules/arcgis-js-api/layers/graphics/featureConversionUtils.js"),__webpack_require__(/*! ../../../../../tasks/operations/query */ "./node_modules/arcgis-js-api/tasks/operations/query.js"),__webpack_require__(/*! ../../../engine */ "./node_modules/arcgis-js-api/views/2d/engine.js"),__webpack_require__(/*! ./BaseController */ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/BaseController.js"),__webpack_require__(/*! ./EditsQueue */ "./node_modules/arcgis-js-api/views/2d/layers/features/controllers/EditsQueue.js"),__webpack_require__(/*! ../support/DataTile */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTile.js"),__webpack_require__(/*! ../support/DataTileFeaturesIndex */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex.js"),__webpack_require__(/*! ../support/Tile */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js"),__webpack_require__(/*! ../support/TileUpdateQueue */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue.js"),__webpack_require__(/*! ../../../tiling/TileQueue */ "./node_modules/arcgis-js-api/views/2d/tiling/TileQueue.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n,s,u,o,a,c,l,d,h,f,p,y,g,v,_,b,m,I,S,T,x,F,Q,w){Object.defineProperty(t,"__esModule",{value:!0});var E=l.getLogger("esri.views.2d.layers.features.controllers.OnDemandController"),C=c("esri-featurelayer-webgl"),q=c("esri-mobile"),j={maxDrillLevel:C&&"object"==typeof C&&null!=C.maxDrillLevel?C.maxDrillLevel:q?1:4,maxRecordCountFactor:C&&"object"==typeof C&&null!=C.maxRecordCountFactor?C.maxRecordCountFactor:q?1:3,enablePBFQuery:!C||"object"!=typeof C||null==C.enablePBFQuery||C.enablePBFQuery},O=new Set,A=[],P=function(){function e(e,t){this.objectIdField=t,this.client=p.openWithPorts(e)}return e.prototype.destroy=function(){this.client.close(),this.client=null},e.prototype.executeQuery=function(e,t){return u(this,void 0,void 0,function(){var r;return s(this,function(i){switch(i.label){case 0:return[4,this.client.invoke("queryFeatures",e.toJSON(),t)];case 1:return r=i.sent(),[2,_.convertFromFeatureSet(r,this.objectIdField)]}})})},e}(),D=function(){function e(e){this.source=e}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return u(this,void 0,void 0,function(){var r;return s(this,function(i){switch(i.label){case 0:return[4,b.executeQueryPBF(this.source,e,{type:"optimized"},t)];case 1:return r=i.sent().data,[2,r]}})})},e}(),R=function(){function e(e,t){this.source=e,this.objectIdField=t}return e.prototype.destroy=function(){},e.prototype.executeQuery=function(e,t){return u(this,void 0,void 0,function(){var r;return s(this,function(i){switch(i.label){case 0:return[4,b.executeQuery(this.source,e,t)];case 1:return r=i.sent().data,[2,_.convertFromFeatureSet(r,this.objectIdField)]}})})},e}(),B=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="on-demand",t._queryInfoHash=null,t._dataTileIndex=new x.default,t._editsQueue=new S.EditsQueue({processEdits:t._processEdits.bind(t)}),t._featuresInFlight=new Map,t}return r(t,e),t.prototype.initialize=function(){var e=this,t=this._createFeatureStore();t.onFeatureAdd=this.onFeatureAdd.bind(this),t.onFeatureRemove=this.onFeatureRemove.bind(this),this._set("featureStore",t),this._dataTileIndex.featureStore=this.featureStore,this._dataTileIndex.forEach(function(e){return e.done=!1}),this._fetchQueue=new w({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,r){return e._fetchTile(t,e.queryInfo,r)}}),this._patchQueue=new w({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(t,r){return e._fetchTile(t.dataTile,t.queryInfo,r)}}),this._updateQueue=new Q.default({tileInfoView:this.tileStore.tileScheme,process:function(t,r,i){return e._updateTile(t,r,i)}});var r=this.service,i=r.capabilities,n=r.source,s=r.objectIdField;Array.isArray(n)?this.sourceAdapter=new P(n,s):j.enablePBFQuery&&i.query.supportsFormatPBF?this.sourceAdapter=new D(n):this.sourceAdapter=new R(n,s),this.handles.add([this.watch("updating",function(t){return!t&&e.onIdle()})]),this.featureStore.events.on("valueRangesChanged",function(t){e.remoteClient.invoke("emitEvent",{name:"valueRangesChanged",event:{valueRanges:t.valueRanges}})})},t.prototype.destroy=function(){this._fetchQueue.clear(),this._patchQueue.clear(),this._updateQueue.clear(),this._editsQueue.destroy(),this.queryEngine.destroy(),this.sourceAdapter.destroy()},Object.defineProperty(t.prototype,"queryEngine",{get:function(){return this._createQueryEngine(this.featureStore)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return!this.viewState||this._fetchQueue.updating||this._patchQueue.updating||this._updateQueue.updating||this._editsQueue.updating},enumerable:!0,configurable:!0}),t.prototype.update=function(e,t){return u(this,void 0,void 0,function(){var r,i,n,u,o,a,c=this;return s(this,function(s){switch(s.label){case 0:return this.validateConfig(e),r=JSON.stringify(this.config.filters),i=this.renderer.getAttributeHash(),n=e.availableFields.filter(function(e){return-1===c.availableFields.indexOf(e)}),u=this.config.definitionExpression,this._set("config",e),u!==this.config.definitionExpression&&this._set("queryEngine",this._createQueryEngine(this.featureStore)),[4,this.updatePixelBuffer()];case 1:return s.sent(),o=r!==JSON.stringify(e.filters),a=i!==this.renderer.getAttributeHash(),t?a?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,3]:[3,6];case 2:s.sent(),s.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return s.sent(),[4,this.featureStore.update(o,e)];case 5:return s.sent(),this.refresh(),[2];case 6:return n.length?[4,this._handleAttributeChange(n)]:[3,8];case 7:s.sent(),s.label=8;case 8:return"heatmap"===this.renderer.type?[2]:a?[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,10];case 9:s.sent(),this.featureStore.forEach(function(e){return c.attributeStore.setAttributeData(e.localId,e,c.geometryInfo,c.viewParams)}),s.label=10;case 10:return[4,this.attributeStore.updateFilters(this)];case 11:return s.sent(),[4,this.featureStore.update(o,e)];case 12:return s.sent(),[4,this.attributeStore.sendUpdates()];case 13:return s.sent(),[2]}})})},t.prototype.invalidate=function(){return u(this,void 0,void 0,function(){var e,t,r;return s(this,function(i){for(e=0,t=this.tileStore.tiles;e<t.length;e++)r=t[e],this._updateQueue.push(r.id,Date.now());return[2]})})},t.prototype.onIdle=function(){this.featureStore.sweepClusters()},t.prototype.onEdits=function(e){var t=this;return this._fetchQueue.pause(),this._fetchQueue.reset(),this._editsQueue.push(e).then(function(){t._editsQueue.updating||t._fetchQueue.resume()})},t.prototype.queryFeatures=function(e){return this.queryEngine.executeQuery(e)},t.prototype.queryFeatureCount=function(e){return this.queryEngine.executeQueryForCount(e)},t.prototype.queryObjectIds=function(e){return this.queryEngine.executeQueryForIds(e)},t.prototype.queryExtent=function(e){return this.queryEngine.executeQueryForExtent(e)},t.prototype.queryStatistics=function(e){return u(this,void 0,void 0,function(){var e,t,r,i=this;return s(this,function(o){switch(o.label){case 0:return e=0,t=0,r=0,[4,h.all(this.tileStore.tiles.map(function(n){return u(i,void 0,void 0,function(){var i,u,o,a,c,l,h,f,p,y,g;return s(this,function(s){switch(s.label){case 0:return i=this.queryInfo,u=i.returnCentroid,o=i.returnGeometry,a=this._pixelBuffer,c={pixelBuffer:a,returnGeometry:o,returnCentroid:u,returnOutline:this.returnOutline},l=d(),[4,this.featureStore.executeTileQuery(n,this.spatialReference,c)];case 1:for(h=s.sent().features,f=d(),r+=f-l,e+=h.length,p=0,y=h;p<y.length;p++)g=y[p],g.geometry&&(v.isPolygon(g.geometry)?t+=g.geometry.rings.reduce(function(e,t){return e+t.length},0):v.isPolyline(g.geometry)&&(t+=g.geometry.paths.reduce(function(e,t){return e+t.length},0)));return[2]}})})}))];case 1:return o.sent(),[2,n({},this.featureStore.storeStatistics,{displayedFeatureCount:e,displayedVertexCount:t,displayPreProcessTime:r})]}})})},t.prototype.refresh=function(){return u(this,void 0,void 0,function(){var e=this;return s(this,function(t){switch(t.label){case 0:return this._queryInfoHash=Math.random().toString(),this._dataTileIndex.clear(),this._fetchQueue.pause(),this._updateQueue.pause(),this._editsQueue.clear(),this._fetchQueue.clear(),this._updateQueue.clear(),this.featureStore.startMarkingUsedFeatures(),this._manageTiles(this.tileStore.tiles),this._fetchQueue.resume(),[4,f.whenFalseOnce(this._fetchQueue,"updating")];case 1:return t.sent(),this.featureStore.sweep(),this.featureStore.forEach(function(t){return e.attributeStore.setAttributeData(t.localId,t,e.geometryInfo,e.viewParams)}),this.attributeStore.sendUpdates(),this._updateQueue.resume(),[2]}})})},t.prototype.setViewState=function(e){var t=this,r=this.viewState&&this.viewState.scale;this.inherited(arguments),this._fetchQueue.state=e,this._updateQueue.state=e,r!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.featureStore.forEach(function(e){return t.attributeStore.setAttributeData(e.localId,e,t.geometryInfo,t.viewParams)}),this.attributeStore.sendUpdates())},t.prototype.getAggregate=function(e){return this.featureStore.getAggregate(e)},t.prototype.getAggregateValueRanges=function(){return this.featureStore.getAggregateValueRanges()},t.prototype.onTileUpdate=function(e){this._manageTiles(e.added,e.removed),this.featureStore.onTileUpdate(e)},t.prototype.onFeatureAdd=function(e){if(this._featuresInFlight.has(e.objectId)){var t=this._featuresInFlight.get(e.objectId).attributes;e.attributes=n({},t,e.attributes),this._featuresInFlight.delete(e.objectId)}e.localId=this.attributeStore.createLocalId(e.objectId),this.attributeStore.setAttributeData(e.localId,e,this.geometryInfo,this.viewParams)},t.prototype._handleAttributeChange=function(e){return u(this,void 0,void 0,function(){return s(this,function(t){switch(t.label){case 0:return[4,this._fetchChangedFields(e)];case 1:return t.sent(),[2]}})})},t.prototype._fetchChangedTileFields=function(e,t){return u(this,void 0,void 0,function(){var r,i;return s(this,function(n){return(r=this._dataTileIndex.get(e.id))?(i=!1,i?[2,this._fetchChangedTileFieldsPaged(r,t)]:[2,this._fetchChangedTileFieldsDrill(r,t)]):[2]})})},t.prototype._fetchChangedTileFieldsDrill=function(e,t,r){return void 0===r&&(r=0),u(this,void 0,void 0,function(){var i,u,o,a,c,l,d,f,p,y,g=this;return s(this,function(s){switch(s.label){case 0:return i=n({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField])}),e.returnExceeded=e.returnExceeded||r>=j.maxDrillLevel,u=e.key,o={key:u,dataTile:e,queryInfo:i},[4,this._patchQueue.push(o)];case 1:return a=s.sent(),a.exceededTransferLimit&&r<j.maxDrillLevel?(c=e.tile.createChildTiles(),l=c.map(function(t){var r=new T.default;return r.tile=t,r.displayTile=e.displayTile,r}),[4,h.all(l.map(function(e){return g._fetchChangedTileFieldsDrill(e,t,r+1)}))]):[3,3];case 2:return s.sent(),[2];case 3:for(d=0,f=a.features;d<f.length;d++)p=f[d],this.featureStore.has(p.objectId)?(y=this.featureStore.getFeature(p.objectId),y.attributes=n({},y.attributes,p.attributes)):this._featuresInFlight.set(p.objectId,p);return[2]}})})},t.prototype._fetchChangedTileFieldsPaged=function(e,t,r){return void 0===r&&(r=0),u(this,void 0,void 0,function(){var i,u,o,a,c,l,d,h,f,p,y;return s(this,function(s){switch(s.label){case 0:return i=this.service.capabilities.query.supportsMaxRecordCountFactor,u=this.service.tileMaxRecordCount,o=u*(i?1:j.maxRecordCountFactor),a=n({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:t.concat([this.service.objectIdField]),resultOffset:r*o,num:o}),e.returnExceeded=!0,c=e.key,l={key:c,dataTile:e,queryInfo:a},[4,this._patchQueue.push(l)];case 1:for(d=s.sent(),h=0,f=d.features;h<f.length;h++)p=f[h],this.featureStore.has(p.objectId)?(y=this.featureStore.getFeature(p.objectId),y.attributes=n({},y.attributes,p.attributes)):this._featuresInFlight.set(p.objectId,p);return d.exceededTransferLimit?[2,this._fetchChangedTileFieldsPaged(e,t,r+1)]:[2]}})})},t.prototype._fetchChangedFields=function(e){return u(this,void 0,void 0,function(){var t,r,i=this;return s(this,function(n){switch(n.label){case 0:return t=this.tileStore.tiles,r=t.map(function(t){return i._fetchChangedTileFields(t,e)}),[4,h.all(r)];case 1:return n.sent(),[2]}})})},t.prototype._manageTiles=function(e,t){void 0===t&&(t=null);for(var r=this._dataTileIndex,i=this._fetchQueue,n=this._updateQueue,s="esriGeometryPoint"===this.service.geometryType,u=this,o=0,a=e;o<a.length;o++){var c=a[o];!function(e){var t=r.get(e.id);t?(t.displayTile=e,s?r.forEach(function(r){F.isChildOf(r,t)&&(r.displayTile=e)}):t.done=!1):(t=new T.default,t.tile=e.clone(),t.displayTile=e,r.add(t)),u._processDataTile(t)}(c)}if(t)for(var l=0,d=t;l<d.length;l++){var c=d[l];O.add(c),n.abort(c.id)}r.forEach(function(e){O.has(e.displayTile)&&A.push(e)});for(var h=0,f=A;h<f.length;h++){var p=f[h];i.abort(p.id),r.delete(p)}A.length=0,O.clear()},t.prototype._processDataTile=function(e){var t=this,r=e.displayTile,i=e.key,n=this._dataTileIndex,s=this._fetchQueue,u=i.id,o=this._queryInfoHash,c=i.level-r.key.level>=j.maxDrillLevel;if(n.add(e),e.done||s.has(u)){if(e.queryInfoHash!==o||e.returnExceeded!==c)if(e.done)e.done=!1;else{if(!s.isOngoing(u))return e.queryInfoHash=o,void(e.returnExceeded=c);s.abort(u)}}else e.queryInfoHash=o,e.returnExceeded=c;if(e.done)return void this._invalidateTile(e.displayTile);s.has(u)||s.push(e).then(function(r){return t._handleResponse(e,r)}).catch(function(r){h.isAbortError(r)||E.error(new a("featurelayer-controller:tile-error","Encountered an error when handling tile response",r)),e.done=!0,t._invalidateTile(e.displayTile)})},t.prototype._handleResponse=function(e,t){if(e.done=!0,_.hydrateOptimizedFeatureSet(t),t.exceededTransferLimit)if(e.returnExceeded)this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);else{for(var r=e.tile.createChildTiles(),i=0,n=r;i<n.length;i++){var s=n[i],u=new T.default;u.tile=s,u.displayTile=e.displayTile,this._processDataTile(u)}o.release(r)}else this._dataTileIndex.setTileFeatures(e,t.features),this._deleteChildrenDataTiles(e);this._invalidateTile(e.tile)},t.prototype._deleteChildrenDataTiles=function(e){this._dataTileIndex.forEach(function(t){F.isChildOf(t,e)&&A.push(t)});for(var t=0,r=A;t<r.length;t++){var i=r[t];this._fetchQueue.abort(i.id),this._dataTileIndex.delete(i)}A.length=0},t.prototype._fetchTile=function(e,t,r){return u(this,void 0,void 0,function(){var i,n,u,o,a,c,l,d,h,f,p;return s(this,function(s){switch(s.label){case 0:return i=new g({xmin:e.bounds[0],ymin:e.bounds[1],xmax:e.bounds[2],ymax:e.bounds[3],spatialReference:this.spatialReference}),n=this.service.geometryType,u="esriGeometryPoint"===n?e.tile:e.displayTile,o=u.extent,a=u.resolution,c=e.returnExceeded,l=this._createQuery(i,o,a,t,j.maxRecordCountFactor,c),[4,this.sourceAdapter.executeQuery(l,r)];case 1:if(d=s.sent(),"esriGeometryPolygon"===n)for(h=0,f=d.features;h<f.length;h++)p=f[h],p.geometry=_.removeCollinearVectices(p.geometry,p.geometry,n,!1,!1);return[2,d]}})})},t.prototype._invalidateTile=function(e){for(var t=this._pixelBuffer,r=this._updateQueue,i=this.tileStore.intersections(e,t),n=0,s=i;n<s.length;n++){var u=s[n].tile;r.push(u.id,u.updateTimestamp)}},t.prototype._updateTile=function(e,t,r){return u(this,void 0,void 0,function(){var i,n,u,o,a,c,l,d,f,p,y,g,v=this;return s(this,function(s){switch(s.label){case 0:return i=this.tileStore.get(e),n=this.queryInfo,u=n.returnCentroid,o=n.returnGeometry,a=this._pixelBuffer,c={pixelBuffer:a,returnGeometry:o,returnCentroid:u,returnOutline:this.returnOutline},[4,this.featureStore.executeTileQuery(i,this.spatialReference,c)];case 1:return l=s.sent(),d=l.features,f=l.objectIds,[4,this.attributeStore.sendUpdates()];case 2:return s.sent(),p={geometryType:this.service.geometryType,features:d,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:i.transform},y=[],g=!0,this._dataTileIndex.forEach(function(e){i.id!==e.id&&F.isChildOf(e,i)&&g&&!e.done&&(g=!1)}),g&&i&&i.objectIds.forEach(function(e){if(!f.has(e)){var t=v.attributeStore.getLocalId(e);y.push(t)}}),f.forEach(function(e){i.objectIds.add(e)}),i.updateTimestamp=t,[2,this.processor.onTileData(i,{clear:!0,addOrUpdate:p.features,remove:y,transformParams:m.Utils.getTransformParams(p)},r).catch(function(e){h.isAbortError(e)||E.error("update-tile",e)})]}})})},t.prototype._processEdits=function(e,t,r){return u(this,void 0,void 0,function(){var i,o,a,c,l,d=this;return s(this,function(f){switch(f.label){case 0:return i=this._createTempQueryEngine(),o=this._createObjectIdsQuery(e),e.length?[4,this.sourceAdapter.executeQuery(o)]:[3,2];case 1:a=f.sent(),_.hydrateOptimizedFeatureSet(a),this._dataTileIndex.addOrUpdateFeatures(a.features),i.featureStore.addMany(a.features),f.label=2;case 2:return c=t.concat(e).map(function(e){return d.attributeStore.getLocalId(e)}),this._dataTileIndex.deleteFeaturesById(t),this.attributeStore.sendUpdates(),l=n({},this.queryInfo,{pixelBuffer:this._pixelBuffer,returnOutline:this.returnOutline}),this.tileStore.tiles.map(function(e){return u(d,void 0,void 0,function(){var t,n;return s(this,function(s){switch(s.label){case 0:return[4,i.featureStore.executeTileQuery(e,this.spatialReference,l)];case 1:return t=s.sent().features,n={transform:e.transform,hasZ:!1,hasM:!1},[2,this.processor.onTileData(e,{addOrUpdate:t,remove:c,transformParams:n},r).catch(function(e){h.isAbortError(e)||E.error("update-tile",e)})]}})})}),i.destroy(),[2]}})})},t.prototype._createObjectIdsQuery=function(e){var t=this._createDefaultQuery(this.queryInfo);return t.objectIds=e,t},i([y.property()],t.prototype,"_fetchQueue",void 0),i([y.property()],t.prototype,"_patchQueue",void 0),i([y.property()],t.prototype,"_updateQueue",void 0),i([y.property()],t.prototype,"_editsQueue",void 0),i([y.property({readOnly:!0})],t.prototype,"featureStore",void 0),i([y.property()],t.prototype,"sourceAdapter",void 0),i([y.property({readOnly:!0,dependsOn:["featureStore","service"]})],t.prototype,"queryEngine",null),i([y.property({dependsOn:["viewState","_fetchQueue.updating","_updateQueue.updating","_patchQueue.updating","_editsQueue.updating"]})],t.prototype,"updating",null),t=i([y.subclass("esri.views.2d.layers.features.controllers.OnDemandController")],t)}(y.declared(I.default));t.default=B}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTile.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTile.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){this.displayTile=null,this.tile=null,this.done=!1,this.queryInfoHash=null,this.returnExceeded=!1}return Object.defineProperty(e.prototype,"key",{get:function(){return this.tile.key},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this.tile.id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bounds",{get:function(){return this.tile.bounds},enumerable:!0,configurable:!0}),e}();t.default=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/DataTileFeaturesIndex.js ***!
  \**********************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/SetPool */ "./node_modules/arcgis-js-api/core/SetPool.js"),__webpack_require__(/*! ../../../../../layers/graphics/data/FeatureStore */ "./node_modules/arcgis-js-api/layers/graphics/data/FeatureStore.js"),__webpack_require__(/*! ./Tile */ "./node_modules/arcgis-js-api/views/2d/layers/features/support/Tile.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,a){Object.defineProperty(t,"__esModule",{value:!0});var s=[],o=new Set,n=function(){function e(){this._tileById=new Map,this._tilesToFeatures=new Map,this._featureToTiles=new Map}return e.prototype.destroy=function(){this.clear()},e.prototype.add=function(e){var t=this;if(!this.has(e.id)){var i=e;this._tileById.set(i.id,i),this._tilesToFeatures.set(i,r.default.acquire()),this._tilesToFeatures.forEach(function(e,r){i!==r&&(a.isParentOf(i,r)?e.forEach(function(e){t._link(i,e)}):a.isChildOf(i,r)&&t.featureStore.forEachInBounds(i.bounds,function(r){e.has(r.objectId)&&t._link(i,r.objectId)}))})}},e.prototype.clear=function(){this._tilesToFeatures.forEach(function(e){return r.default.release(e)}),this._tilesToFeatures.clear(),this._featureToTiles.forEach(function(e){return r.default.release(e)}),this._featureToTiles.clear(),this._tileById.clear()},e.prototype.delete=function(e){var t=this,r=this.get(e.id);s.length=0,this._tilesToFeatures.get(r).forEach(function(e){var i=t._featureToTiles.get(e);i.has(r)&&1===i.size?s.push(e):t._unlink(r,e)});for(var i=0,a=s;i<a.length;i++){var o=a[i];this._unlink(r,o)}this.featureStore.removeManyById(s),this._tilesToFeatures.delete(r),this._tileById.delete(r.id),s.length=0},e.prototype.forEach=function(e,t){return this._tileById.forEach(e,t)},e.prototype.get=function(e){return this._tileById.get(e)},e.prototype.has=function(e){return this._tileById.has(e)},e.prototype.setTileFeatures=function(e,t){var i=this,a=this.get(e.id);this._tilesToFeatures.has(a)||(this._tileById.set(a.id,a),this._tilesToFeatures.set(a,r.default.acquire()));for(var n=0,u=t;n<u.length;n++){var h=u[n];o.add(h.objectId)}s.length=0,this._tilesToFeatures.get(a).forEach(function(e){if(!o.has(e)){var t=i._featureToTiles.get(e);t.has(a)&&1===t.size?s.push(e):i._unlink(a,e)}});for(var l=0,f=s;l<f.length;l++){var d=f[l];this._unlink(a,d)}this.featureStore.removeManyById(s),this.featureStore.addMany(t),o.forEach(function(e){i._link(a,e)}),o.clear(),s.length=0},e.prototype.addOrUpdateFeatures=function(e){for(var t=this,r=new Set,a=new i.default({geometryType:this.featureStore.geometryType,hasM:this.featureStore.hasM,hasZ:this.featureStore.hasZ}),s=0,o=this.deleteFeaturesById(e.map(function(e){return e.objectId}));s<o.length;s++){var n=o[s];r.add(n)}a.addMany(e),this._tileById.forEach(function(e){a.forEachInBounds(e.bounds,function(i){t._link(e,i.objectId),r.add(e)})}),this.featureStore.addMany(e);var u=[];return r.forEach(function(e){return u.push(e)}),u},e.prototype.deleteFeaturesById=function(e){for(var t=this,i=new Set,a=this,s=0,o=e;s<o.length;s++){var n=o[s];!function(e){var s=a._featureToTiles.get(e);s&&(s.forEach(function(r){i.add(r),t._tilesToFeatures.get(r).delete(e)}),r.default.release(s),a._featureToTiles.delete(e))}(n)}this.featureStore.removeManyById(e);var u=[];return i.forEach(function(e){return u.push(e)}),u},e.prototype._link=function(e,t){this._featureToTiles.get(t)||this._featureToTiles.set(t,r.default.acquire()),this._featureToTiles.get(t).add(e),this._tilesToFeatures.get(e).add(t)},e.prototype._unlink=function(e,t){this._featureToTiles.get(t).delete(e),this._tilesToFeatures.get(e).delete(t),0===this._featureToTiles.get(t).size&&(r.default.release(this._featureToTiles.get(t)),this._featureToTiles.delete(t))},e}();t.default=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/2d/layers/features/support/TileUpdateQueue.js ***!
  \****************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../../core/Accessor */ "./node_modules/arcgis-js-api/core/Accessor.js"),__webpack_require__(/*! ../../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../../core/scheduling */ "./node_modules/arcgis-js-api/core/scheduling.js"),__webpack_require__(/*! ../../../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../../../core/libs/gl-matrix-2/vec2 */ "./node_modules/arcgis-js-api/core/libs/gl-matrix-2/vec2.js"),__webpack_require__(/*! ../../../tiling */ "./node_modules/arcgis-js-api/views/2d/tiling.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n,o,s,r,l,u,a,h,p){function c(e){return e&&"function"==typeof e.then}Object.defineProperty(t,"__esModule",{value:!0});var d=[0,0],_=function(e){function t(t){var i=e.call(this,t)||this;return i._queue=new Map,i._isPaused=!1,i._scheduledNextHandle=null,i._timestamp=Date.now(),i.tileInfoView=null,i._next=i._next.bind(i),i._finalize=i._finalize.bind(i),i}return i(t,e),Object.defineProperty(t.prototype,"length",{get:function(){return this._queue.size},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"updating",{get:function(){return this._queue.size>0||null!=this._onGoingTile},enumerable:!0,configurable:!0}),t.prototype.abort=function(e){this._onGoingTile&&this._onGoingTile.tileId===e&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._queue.delete(e),this._scheduleNext(),this.notifyChange("updating")},t.prototype.clear=function(){this._queue.clear(),this._onGoingTile&&(this._onGoingTile.abortController.abort(),this._onGoingTile=null),this._cancelNext(),this.notifyChange("updating")},t.prototype.has=function(e){return this._queue.has(e)},t.prototype.isOngoing=function(e){return this._onGoingTile&&this._onGoingTile.tileId===e},t.prototype.pause=function(){this._isPaused||(this._isPaused=!0,this._cancelNext())},t.prototype.push=function(e,t){if(!this._queue.has(e)){var i=l.createAbortController();this._queue.set(e,{tileId:e,key:p.TileKey.pool.acquire(e),timestamp:t||this._timestamp,abortController:i}),this._scheduleNext(),this.notifyChange("updating")}},t.prototype.refresh=function(){this._timestamp=Date.now(),this.reset()},t.prototype.reset=function(){var e=this._onGoingTile;if(e){var t=e.tileId;this.push(t,this._timestamp)}this.notifyChange("updating")},t.prototype.resume=function(){this._isPaused&&(this._isPaused=!1,this._scheduleNext()),this.notifyChange("updating")},t.prototype._finalize=function(){this._onGoingTile=null,this.notifyChange("updating"),this._scheduleNext()},t.prototype._cancelNext=function(){this._scheduledNextHandle&&(this._scheduledNextHandle.remove(),this._scheduledNextHandle=null)},t.prototype._scheduleNext=function(){this._isPaused||this._scheduledNextHandle||0===this._queue.size||null!=this._onGoingTile||(this._scheduledNextHandle=u.schedule(this._next))},t.prototype._next=function(){return s(this,void 0,void 0,function(){var e,t,i,n,s,r;return o(this,function(o){switch(o.label){case 0:if(null==this._scheduledNextHandle||0===this._queue.size||this._onGoingTile)return this._scheduledNextHandle=null,[2];if(this._scheduledNextHandle=null,e=this._peek(),t=e.abortController.signal,i=e.tileId,n=e.key,p.TileKey.pool.release(n),this._queue.delete(i),this._onGoingTile=e,s=this.process(i,this._timestamp,{signal:t}),this.notifyChange("updating"),!c(s))return[3,4];o.label=1;case 1:return o.trys.push([1,3,,4]),[4,s];case 2:return o.sent(),[3,4];case 3:return r=o.sent(),[3,4];case 4:return this._finalize(),[2]}})})},t.prototype._peek=function(){var e=this;if(!this.state)throw new Error("state not set");var t=this.tileInfoView,i=this.state.center,n=Number.NEGATIVE_INFINITY,o=Number.POSITIVE_INFINITY,s=null;return this._queue.forEach(function(r){t.getTileCoords(d,r.key);var l=e._timestamp-r.timestamp;if(isNaN(l)){var u=h.vec2.distance(d,i);u<o&&(o=u,s=r)}else if(l===n){var u=h.vec2.distance(d,i);u<o&&(o=u,s=r)}else l>n&&(n=l,o=Number.POSITIVE_INFINITY,s=r)}),s},n([a.property({readOnly:!0})],t.prototype,"length",null),n([a.property({constructOnly:!0})],t.prototype,"process",void 0),n([a.property()],t.prototype,"state",void 0),n([a.property({constructOnly:!0})],t.prototype,"tileInfoView",void 0),n([a.property({readOnly:!0})],t.prototype,"updating",null),t=n([a.subclass("esri.views.2d.layers.features.support.TileUpdateQueue")],t)}(a.declared(r));t.default=_}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=82.js.map