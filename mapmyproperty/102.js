(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/layers/graphics/data/QueryEngineCapabilities":"./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js",
	"arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker":"./node_modules/arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker.js",
	"arcgis-js-api/layers/graphics/sources/support/sourceUtils":"./node_modules/arcgis-js-api/layers/graphics/sources/support/sourceUtils.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[102],{

/***/ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/data/QueryEngineCapabilities.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,s){Object.defineProperty(s,"__esModule",{value:!0}),s.queryCapabilities={supportsStatistics:!0,supportsCentroid:!0,supportsCacheHint:!1,supportsDistance:!0,supportsDistinct:!0,supportsExtent:!0,supportsGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQuantization:!0,supportsQuantizationEditMode:!1,supportsQueryGeometry:!0,supportsResultType:!1,supportsSqlExpression:!0,supportsMaxRecordCountFactor:!1,supportsStandardizedQueriesOnly:!0,supportsQueryByOthers:!0,supportsHistoricMoment:!1,supportsFormatPBF:!1,supportsDisjointSpatialRelationship:!0,maxRecordCountFactor:void 0,maxRecordCount:void 0,standardMaxRecordCount:void 0,tileMaxRecordCount:void 0}}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/support/MemorySourceWorker.js ***!
  \******************************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../../../core/Error */ "./node_modules/arcgis-js-api/core/Error.js"),__webpack_require__(/*! ../../../../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../../../../geometry/support/jsonUtils */ "./node_modules/arcgis-js-api/geometry/support/jsonUtils.js"),__webpack_require__(/*! ../../../../geometry/support/spatialReferenceUtils */ "./node_modules/arcgis-js-api/geometry/support/spatialReferenceUtils.js"),__webpack_require__(/*! ../../featureConversionUtils */ "./node_modules/arcgis-js-api/layers/graphics/featureConversionUtils.js"),__webpack_require__(/*! ../../data/FeatureStore */ "./node_modules/arcgis-js-api/layers/graphics/data/FeatureStore.js"),__webpack_require__(/*! ../../data/projectionSupport */ "./node_modules/arcgis-js-api/layers/graphics/data/projectionSupport.js"),__webpack_require__(/*! ../../data/QueryEngine */ "./node_modules/arcgis-js-api/layers/graphics/data/QueryEngine.js"),__webpack_require__(/*! ./clientSideDefaults */ "./node_modules/arcgis-js-api/layers/graphics/sources/support/clientSideDefaults.js"),__webpack_require__(/*! ./sourceUtils */ "./node_modules/arcgis-js-api/layers/graphics/sources/support/sourceUtils.js"),__webpack_require__(/*! ../../../support/FieldsIndex */ "./node_modules/arcgis-js-api/layers/support/FieldsIndex.js"),__webpack_require__(/*! ../../../support/fieldType */ "./node_modules/arcgis-js-api/layers/support/fieldType.js"),__webpack_require__(/*! ../../../support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,r,n,s,a,u,l,o,d,p,f,c,y,h,m,g){function F(e){return u.isPoint(e)?null!=e.z:!!e.hasZ}function b(e){return u.isPoint(e)?null!=e.m:!!e.hasM}Object.defineProperty(t,"__esModule",{value:!0});var I=l.WGS84,v={xmin:-180,ymin:-90,xmax:180,ymax:90,spatialReference:l.WGS84},_={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},E=function(){function e(){this._queryEngine=null,this._nextObjectId=null}return e.prototype.destroy=function(){this._queryEngine&&this._queryEngine&&this._queryEngine.destroy(),this._queryEngine=this._requiredFields=this._fieldsIndex=this._createDefaultAttributes=null},e.prototype.load=function(e){return r(this,void 0,void 0,function(){var t,r,a,u,l,o,y,F,b,E,j,T,x,R,q,D,S,O,w,M,S,Q,A,k,P,Z,C;return i(this,function(i){switch(i.label){case 0:if(t=[],r=e.features,a=this._inferLayerProperties(r,e.fields),u=e.fields||[],l=null!=e.hasM?e.hasM:a.hasM,o=null!=e.hasZ?e.hasZ:a.hasZ,y=!e.spatialReference&&!a.spatialReference,F=y?I:e.spatialReference||a.spatialReference,b=y?v:null,E=e.geometryType||a.geometryType,j=e.objectIdField||a.objectIdField,T=e.timeInfo,y&&t.push({name:"feature-layer:spatial-reference-not-found",message:"Spatial reference not provided or found in features. Defaults to WGS84"}),!E)throw new s("feature-layer:missing-property","geometryType not set and couldn't be inferred from the provided features");if(!j)throw new s("feature-layer:missing-property","objectIdField not set and couldn't be found in the provided fields");for(a.objectIdField&&j!==a.objectIdField&&(t.push({name:"feature-layer:duplicated-oid-field",message:'Provided objectIdField "'+j+'" doesn\'t match the field name "'+a.objectIdField+'", found in the provided fields'}),j=a.objectIdField),j&&!a.objectIdField&&(x=null,R=u.some(function(e){return e.name===j&&(x=e,!0)}),R?(x.type="esriFieldTypeOID",x.editable=!1,x.nullable=!1):u.unshift({alias:j,name:j,type:"esriFieldTypeOID",editable:!1,nullable:!1})),q=0,D=u;q<D.length;q++){if(S=D[q],null==S.name&&(S.name=S.alias),null==S.alias&&(S.alias=S.name),!S.name)throw new s("feature-layer:invalid-field-name","field name is missing",{field:S});if(S.name===j&&(S.type="esriFieldTypeOID"),-1===m.kebabDict.jsonValues.indexOf(S.type))throw new s("feature-layer:invalid-field-type",'invalid type for field "'+S.name+'"',{field:S})}for(O={},this._requiredFields=[],w=0,M=u;w<M.length;w++)S=M[w],"esriFieldTypeOID"!==S.type&&"esriFieldTypeGlobalID"!==S.type&&(S.editable=null==S.editable||!!S.editable,S.nullable=null==S.nullable||!!S.nullable,Q=g.getFieldDefaultValue(S),S.nullable||void 0!==Q?O[S.name]=Q:this._requiredFields.push(S));return this._fieldsIndex=new h(u),(this._createDefaultAttributes=c.createDefaultAttributesFunction(O,j),T&&(T.startTimeField&&(A=this._fieldsIndex.get(T.startTimeField),A?(T.startTimeField=A.name,A.type="esriFieldTypeDate"):T.startTimeField=null),T.endTimeField&&(k=this._fieldsIndex.get(T.endTimeField),k?(T.endTimeField=k.name,k.type="esriFieldTypeDate"):T.endTimeField=null),T.trackIdField&&(P=this._fieldsIndex.get(T.trackIdField),P?T.trackIdField=P.name:(T.trackIdField=null,t.push({name:"feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:T}}))),T.startTimeField||T.endTimeField||(t.push({name:"feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing or invalid",details:{timeInfo:T}}),T=null)),Z={warnings:t,featureErrors:[],layerDefinition:n({},_,{drawingInfo:c.createDrawingInfo(E),templates:c.createDefaultTemplate(O),extent:b,geometryType:E,objectIdField:j,fields:u,hasZ:!!o,hasM:!!l,timeInfo:T}),assignedObjectIds:{}},this._queryEngine=new f.default({fields:u,geometryType:E,hasM:l,hasZ:o,objectIdField:j,spatialReference:F,featureStore:new d.default({geometryType:E,hasM:l,hasZ:o}),timeInfo:T}),r&&r.length)?(C=r.reduce(function(e,t){var i=t.attributes&&t.attributes[j];return null==i||isNaN(i)||!isFinite(i)?e:Math.max(e,i)},0),this._nextObjectId=1+C,[4,p.checkProjectionSupport(r,F)]):(this._nextObjectId=1,[2,Z]);case 1:return i.sent(),[2,this._loadInitialFeatures(Z,r)]}})})},e.prototype.applyEdits=function(e){return r(this,void 0,void 0,function(){var t,r,n;return i(this,function(i){switch(i.label){case 0:return t=this._queryEngine,r=t.spatialReference,n=t.geometryType,[4,a.all([y.loadGeometryEngineForSimplify(n),p.checkProjectionSupport(e.adds,r),p.checkProjectionSupport(e.updates,r)])];case 1:return i.sent(),[2,this._applyEdits(e)]}})})},e.prototype.queryFeatures=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQuery(e,t.signal)]})})},e.prototype.queryFeatureCount=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForCount(e,t.signal)]})})},e.prototype.queryObjectIds=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForIds(e,t.signal)]})})},e.prototype.queryExtent=function(e,t){return void 0===t&&(t={}),r(this,void 0,void 0,function(){return i(this,function(i){return[2,this._queryEngine.executeQueryForExtent(e,t.signal)]})})},e.prototype._inferLayerProperties=function(e,t){for(var i=void 0,r=void 0,n=null,s=null,a=null,l=0,o=e;l<o.length;l++){var d=o[l],p=d.geometry;if(p&&(n||(n=u.getJsonType(p)),s||(s=p.spatialReference),null==i&&(i=F(p)),null==r&&(r=b(p)),n&&s&&null!=i&&null!=r))break}if(t&&t.length){var f=null;t.some(function(e){var t="esriFieldTypeOID"===e.type,i=!e.type&&e.name&&"objectid"===e.name.toLowerCase();return f=e,t||i})&&(a=f.name)}return{geometryType:n,spatialReference:s,objectIdField:a,hasM:r,hasZ:i}},e.prototype._loadInitialFeatures=function(e,t){for(var i=this._queryEngine,r=i.geometryType,n=i.hasM,s=i.hasZ,a=i.objectIdField,l=i.spatialReference,d=i.featureStore,f=[],c=0,h=t;c<h.length;c++){var m=h[c];if(null!=m.uid&&(e.assignedObjectIds[m.uid]=-1),m.geometry&&r!==u.getJsonType(m.geometry))e.featureErrors.push(y.createFeatureEditErrorResult("Incorrect geometry type."));else{var g=this._createDefaultAttributes(),F=y.mixAttributes(this._fieldsIndex,this._requiredFields,g,m.attributes,!0,e.warnings);F?e.featureErrors.push(F):(this._assignObjectId(g,m.attributes,!0),m.attributes=g,null!=m.uid&&(e.assignedObjectIds[m.uid]=m.attributes[a]),m.geometry&&(m.geometry=p.project(m.geometry,m.geometry.spatialReference,l)),f.push(m))}}if(d.addMany(o.convertFromFeatures([],f,r,s,n,a)),e.layerDefinition.extent=this._queryEngine.fullExtent,e.layerDefinition.timeInfo){var b=this._queryEngine.timeExtent,I=b.start,v=b.end;e.layerDefinition.timeInfo.timeExtent=[I,v]}return e},e.prototype._applyEdits=function(e){var t=e.adds,i=e.updates,r=e.deletes,n={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(t&&t.length&&this._applyAddEdits(n,t),i&&i.length&&this._applyUpdateEdits(n,i),r&&r.length){for(var s=0,a=r;s<a.length;s++){var u=a[s];n.deleteResults.push(y.createFeatureEditSuccessResult(u))}this._queryEngine.featureStore.removeManyById(r)}return{fullExtent:this._queryEngine.fullExtent,featureEditResults:n}},e.prototype._applyAddEdits=function(e,t){for(var i=e.addResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,a=r.hasZ,l=r.objectIdField,d=r.spatialReference,f=r.featureStore,c=[],h=0,m=t;h<m.length;h++){var g=m[h];if(g.geometry&&n!==u.getJsonType(g.geometry))i.push(y.createFeatureEditErrorResult("Incorrect geometry type."));else{var F=this._createDefaultAttributes(),b=y.mixAttributes(this._fieldsIndex,this._requiredFields,F,g.attributes);if(b)i.push(b);else{if(this._assignObjectId(F,g.attributes),g.attributes=F,null!=g.uid){var I=g.attributes[l];e.uidToObjectId[g.uid]=I}g.geometry&&(g.geometry=p.project(y.simplify(g.geometry,d),g.geometry.spatialReference,d)),c.push(g),i.push(y.createFeatureEditSuccessResult(g.attributes[l]))}}}f.addMany(o.convertFromFeatures([],c,n,a,s,l))},e.prototype._applyUpdateEdits=function(e,t){for(var i=e.updateResults,r=this._queryEngine,n=r.geometryType,s=r.hasM,a=r.hasZ,l=r.objectIdField,d=r.spatialReference,f=r.featureStore,c=0,h=t;c<h.length;c++){var m=h[c],g=m.attributes,F=m.geometry,b=g&&g[l];if(null!=b)if(f.has(b)){var I=o.convertToFeature(f.getFeature(b),n,a,s);if(F){if(n!==u.getJsonType(F)){i.push(y.createFeatureEditErrorResult("Incorrect geometry type."));continue}I.geometry=p.project(y.simplify(F,d),F.spatialReference,d)}if(g){var v=y.mixAttributes(this._fieldsIndex,this._requiredFields,I.attributes,g);if(v){i.push(v);continue}}f.add(o.convertFromFeature(I,n,a,s,l)),i.push(y.createFeatureEditSuccessResult(b))}else i.push(y.createFeatureEditErrorResult("Feature with object id "+b+" missing"));else i.push(y.createFeatureEditErrorResult("Identifier field "+l+" missing"))}},e.prototype._assignObjectId=function(e,t,i){void 0===i&&(i=!1);var r=this._queryEngine.objectIdField;i&&t&&isFinite(t[r])?e[r]=t[r]:e[r]=this._nextObjectId++},e}();t.default=E}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/layers/graphics/sources/support/sourceUtils.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/layers/graphics/sources/support/sourceUtils.js ***!
  \***********************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../../../core/tsSupport/generatorHelper */ "./node_modules/arcgis-js-api/core/tsSupport/generatorHelper.js"),__webpack_require__(/*! ../../../../core/tsSupport/awaiterHelper */ "./node_modules/arcgis-js-api/core/tsSupport/awaiterHelper.js"),__webpack_require__(/*! ../../../support/fieldUtils */ "./node_modules/arcgis-js-api/layers/support/fieldUtils.js"),__webpack_require__(/*! @dojo/framework/shim/Promise */ "./node_modules/@dojo/framework/shim/Promise.mjs")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r,i,n){function o(e){return new h(e)}function u(e){return new p(e)}function l(e,t,r,i,u,l){void 0===u&&(u=!1),m.clear();for(var a in i){var c=e.get(a);if(c){var d=i[a],f=s(c,d);if(f!==d&&l&&l.push({name:"invalid-value-type",message:"attribute value was converted to match the field type",details:{field:c,originalValue:d,sanitizedValue:f}}),m.add(c.name),c&&(u||c.editable)){var h=n.validateFieldValue(c,f);if(h)return o(n.validationErrorToString(h,c,f));r[c.name]=f}}}for(var p=0,v=t;p<v.length;p++){var g=v[p];if(!m.has(g.name))return o('missing required field "'+g.name+'"')}return null}function s(e,t){var r=t;return"string"==typeof t&&n.isNumericField(e)?r=parseFloat(t):null!=t&&n.isStringField(e)&&"string"!=typeof t&&(r=String(t)),n.sanitizeNullFieldValue(r)}function a(e,t){if(!e)return e;if("rings"in e||"paths"in e){if(!v)throw new TypeError("geometry engine not loaded");e.spatialReference||(e.spatialReference=t);var r=v.simplify(e);return r?r.toJSON():null}return e}function c(){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return v?[2,v]:[4,new Promise(function(t,r){Promise.resolve(/*! AMD require */).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__(/*! ../../../../geometry/geometryEngine */ "./node_modules/arcgis-js-api/geometry/geometryEngine.js")]; (t).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__);}.bind(this)).catch(r.bind(this))})];case 1:return v=t.sent(),[2,v]}})})}function d(e){return i(this,void 0,void 0,function(){return r(this,function(t){switch(t.label){case 0:return"esriGeometryPolygon"!==e&&"esriGeometryPolyline"!==e?[3,2]:[4,c()];case 1:t.sent(),t.label=2;case 2:return[2]}})})}Object.defineProperty(t,"__esModule",{value:!0});var f=function(){function e(){this.code=null,this.description=null}return e}(),h=function(){function e(e){this.error=new f,this.globalId=null,this.objectId=null,this.success=!1,this.uniqueId=null,this.error.description=e}return e}();t.createFeatureEditErrorResult=o;var p=function(){function e(e){this.globalId=null,this.success=!0,this.objectId=this.uniqueId=e}return e}();t.createFeatureEditSuccessResult=u;var m=new Set;t.mixAttributes=l;var v;t.simplify=a,t.loadGeometryEngine=c,t.loadGeometryEngineForSimplify=d}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=102.js.map