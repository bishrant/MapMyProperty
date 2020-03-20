(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"esri/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"arcgis-js-api/core/requireUtils":"./node_modules/arcgis-js-api/core/requireUtils.js",
	"esri/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeature":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeature.js",
	"arcgis-js-api/layers/graphics/OptimizedFeatureSet":"./node_modules/arcgis-js-api/layers/graphics/OptimizedFeatureSet.js",
	"esri/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/OptimizedGeometry":"./node_modules/arcgis-js-api/layers/graphics/OptimizedGeometry.js",
	"arcgis-js-api/layers/graphics/sources/FeatureLayerSource":"./node_modules/arcgis-js-api/layers/graphics/sources/FeatureLayerSource.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

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

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/FeatureLayerSource.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/FeatureLayerSource.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../core/tsSupport/declareExtendsHelper */ "./node_modules/arcgis-js-api/core/tsSupport/declareExtendsHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/decorateHelper */ "./node_modules/arcgis-js-api/core/tsSupport/decorateHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../request */ "./node_modules/arcgis-js-api/request.js"),__webpack_require__(/*! ../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../core/Loadable */ "./node_modules/arcgis-js-api/core/Loadable.js"),__webpack_require__(/*! ../../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../core/urlUtils */ "./node_modules/arcgis-js-api/core/urlUtils.js"),__webpack_require__(/*! ../../../core/accessorSupport/decorators */ "./node_modules/arcgis-js-api/core/accessorSupport/decorators.js"),__webpack_require__(/*! ../../../tasks/QueryTask */ "./node_modules/arcgis-js-api/tasks/QueryTask.js"),__webpack_require__(/*! ../../../tasks/operations/queryAttachments */ "./node_modules/arcgis-js-api/tasks/operations/queryAttachments.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,a,n,s,u,o,i,l,c,d,p,h,y,f){function m(e){return u(this,void 0,void 0,function(){var t;return s(this,function(r){return"string"==typeof e?(t=p.dataComponents(e),[2,t||{data:e}]):[2,d.create(function(t,r){var a=new FileReader;a.readAsDataURL(e),a.onload=function(){return t(p.dataComponents(a.result))},a.onerror=function(e){return r(e)}})]})})}Object.defineProperty(t,"__esModule",{value:!0});var b=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.type="feature-layer",t}return r(t,e),t.prototype.load=function(e){var t=c.isSome(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),this.when()},Object.defineProperty(t.prototype,"queryTask",{get:function(){var e=this.layer,t=e.parsedUrl,r=e.dynamicDataSource,a=e.gdbVersion;return new y({url:null!=r?t.path+"?"+p.objectToQuery(t.query):t.path,gdbVersion:a})},enumerable:!0,configurable:!0}),t.prototype.addAttachment=function(e,t){var r=this;return this.load().then(function(){var a=e.attributes[r.layer.objectIdField],s=r.layer.parsedUrl.path+"/"+a+"/addAttachment",u=n({f:"json"},r.layer.parsedUrl.query),i=r._getFormDataForAttachment(t,u);return o(s,{body:i}).then(function(e){return r._createFeatureEditResult(e.data.addAttachmentResult)}).catch(function(e){throw r._createAttachmentErrorResult(a,e)})})},t.prototype.updateAttachment=function(e,t,r){var a=this;return this.load().then(function(){var s=e.attributes[a.layer.objectIdField],u=a.layer.parsedUrl.path+"/"+s+"/updateAttachment",i=n({f:"json"},a.layer.parsedUrl.query,{attachmentId:t}),l=a._getFormDataForAttachment(r,i);return o(u,{body:l}).then(function(e){return a._createFeatureEditResult(e.data.updateAttachmentResult)}).catch(function(e){throw a._createAttachmentErrorResult(s,e)})})},t.prototype.applyEdits=function(e,t){return u(this,void 0,void 0,function(){var r,a,n,u,i,l,c,d,p,h,y,f,d,m,b,F,v,g;return s(this,function(s){switch(s.label){case 0:return[4,this.load()];case 1:s.sent(),r=e.addFeatures.map(this._serializeFeature,this),a=e.updateFeatures.map(this._serializeFeature,this),n=this._getFeatureIds(e.deleteFeatures),u=[],i=[],l=0,c=e.addAttachments,s.label=2;case 2:return l<c.length?(d=c[l],h=(p=u).push,[4,this._serializeAttachment(d)]):[3,5];case 3:h.apply(p,[s.sent()]),s.label=4;case 4:return l++,[3,2];case 5:y=0,f=e.updateAttachments,s.label=6;case 6:return y<f.length?(d=f[y],b=(m=i).push,[4,this._serializeAttachment(d)]):[3,9];case 7:b.apply(m,[s.sent()]),s.label=8;case 8:return y++,[3,6];case 9:return F={adds:u,updates:i,deletes:e.deleteAttachments.slice()},v={f:"json",adds:r.length?JSON.stringify(r):null,updates:a.length?JSON.stringify(a):null,deletes:n.length?n.join(","):null,gdbVersion:t&&t.gdbVersion,rollbackOnFailure:t&&t.rollbackOnFailureEnabled,useGlobalIds:t&&t.globalIdUsed,attachments:JSON.stringify(F)},[4,o(this.layer.parsedUrl.path+"/applyEdits",{query:v,method:"post",responseType:"json"})];case 10:return g=s.sent(),[2,this._createEditsResult(g)]}})})},t.prototype.deleteAttachments=function(e,t){var r=this;return this.load().then(function(){var a=e.attributes[r.layer.objectIdField],s=r.layer.parsedUrl.path+"/"+a+"/deleteAttachments";return o(s,{query:n({f:"json"},r.layer.parsedUrl.query,{attachmentIds:t.join(",")}),method:"post",responseType:"json"}).then(function(e){return e.data.deleteAttachmentResults.map(r._createFeatureEditResult)}).catch(function(e){throw r._createAttachmentErrorResult(a,e)})})},t.prototype.queryAttachments=function(e,t){var r=this;void 0===t&&(t={});var a=this.layer.parsedUrl,s=a.path;return this.load().then(function(){var u=n({},t,{query:n({},a.query,{f:"json"}),responseType:"json"});if(!r.layer.get("capabilities.operations.supportsQueryAttachments")){for(var i=e.objectIds,l=[],c=0,p=i;c<p.length;c++){var h=p[c],y=s+"/"+h+"/attachments";l.push(o(y,u))}return d.all(l).then(function(e){return i.map(function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}})}).then(function(e){return f.processAttachmentQueryResult(e,s)})}return r.queryTask.executeAttachmentQuery(e,u)})},t.prototype.queryFeatures=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.execute(e,t)})},t.prototype.queryFeaturesJSON=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.executeJSON(e,t)})},t.prototype.queryObjectIds=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.executeForIds(e,t)})},t.prototype.queryFeatureCount=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.executeForCount(e,t)})},t.prototype.queryExtent=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.executeForExtent(e,t)})},t.prototype.queryRelatedFeatures=function(e,t){var r=this;return this.load().then(function(){return r.queryTask.executeRelationshipQuery(e,t)})},t.prototype._fetchService=function(e){return u(this,void 0,void 0,function(){var t,r;return s(this,function(a){switch(a.label){case 0:return t=this.layer.sourceJSON,t?(this.sourceJSON=t,[2]):[4,o(this.layer.parsedUrl.path,{query:n({f:"json"},this.layer.parsedUrl.query),responseType:"json",signal:e})];case 1:return r=a.sent().data,this.sourceJSON=r,[2]}})})},t.prototype._serializeFeature=function(e){var t=e.geometry,r=e.attributes;return c.isNone(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}},t.prototype._serializeAttachment=function(e){return u(this,void 0,void 0,function(){var t,r,a,n,u,o,i,l,c;return s(this,function(s){switch(s.label){case 0:return t=e.feature,r=e.attachment,(a=r.globalId,n=r.name,u=r.contentType,o=r.data,i=r.uploadId,l={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},t&&(l.parentGlobalId="attributes"in t?t.attributes&&t.attributes[this.layer.globalIdField]:t.globalId),i)?(l.uploadId=i,[3,3]):[3,1];case 1:return o?[4,m(o)]:[3,3];case 2:c=s.sent(),l.contentType=c.mediaType,l.data=c.data,o instanceof File&&(l.name=o.name),s.label=3;case 3:return n&&(l.name=n),u&&(l.contentType=u),[2,l]}})})},t.prototype._getFeatureIds=function(e){var t=e[0];return t?"objectId"in t?this._getIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]},t.prototype._getIdsFromFeatures=function(e){var t=this.layer.objectIdField;return e.map(function(e){return e.attributes&&e.attributes[t]})},t.prototype._getIdsFromFeatureIdentifier=function(e){return e.map(function(e){return e.objectId})},t.prototype._createEditsResult=function(e){var t=e.data,r=e.data&&e.data.attachments;return{addFeatureResults:t.addResults?t.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:t.updateResults?t.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:t.deleteResults?t.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:r&&r.addResults?r.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:r&&r.updateResults?r.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:r&&r.deleteResults?r.deleteResults.map(this._createFeatureEditResult,this):[]}},t.prototype._createFeatureEditResult=function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new i("feature-layer-source:edit-failure",t.description,{code:t.code}):null}},t.prototype._createAttachmentErrorResult=function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,a=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new i("feature-layer-source:attachment-failure",r,{code:a})}},t.prototype._getFormDataForAttachment=function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var a in t){var n=t[a];null!=n&&(r.set?r.set(a,n):r.append(a,n))}return r},a([h.property()],t.prototype,"type",void 0),a([h.property({constructOnly:!0})],t.prototype,"layer",void 0),a([h.property({readOnly:!0,dependsOn:["layer.parsedUrl","layer.gdbVersion","layer.dynamicDataSource"]})],t.prototype,"queryTask",null),t=a([h.subclass("esri.layers.graphics.sources.FeatureLayerSource")],t)}(h.declared(l));t.default=b}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=93.js.map