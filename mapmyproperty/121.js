(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/arcade/arcadeAsyncRuntime":"./node_modules/arcgis-js-api/arcade/arcadeAsyncRuntime.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[121],{

/***/ "./node_modules/arcgis-js-api/arcade/arcadeAsyncRuntime.js":
/*!*****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/arcade/arcadeAsyncRuntime.js ***!
  \*****************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./ArcadePortal */ "./node_modules/arcgis-js-api/arcade/ArcadePortal.js"),__webpack_require__(/*! ./Attachment */ "./node_modules/arcgis-js-api/arcade/Attachment.js"),__webpack_require__(/*! ./Dictionary */ "./node_modules/arcgis-js-api/arcade/Dictionary.js"),__webpack_require__(/*! ./Feature */ "./node_modules/arcgis-js-api/arcade/Feature.js"),__webpack_require__(/*! ./FunctionWrapper */ "./node_modules/arcgis-js-api/arcade/FunctionWrapper.js"),__webpack_require__(/*! ./ImmutablePathArray */ "./node_modules/arcgis-js-api/arcade/ImmutablePathArray.js"),__webpack_require__(/*! ./ImmutablePointArray */ "./node_modules/arcgis-js-api/arcade/ImmutablePointArray.js"),__webpack_require__(/*! ./languageUtils */ "./node_modules/arcgis-js-api/arcade/languageUtils.js"),__webpack_require__(/*! ./treeAnalysis */ "./node_modules/arcgis-js-api/arcade/treeAnalysis.js"),__webpack_require__(/*! ./functions/date */ "./node_modules/arcgis-js-api/arcade/functions/date.js"),__webpack_require__(/*! ./functions/geomasync */ "./node_modules/arcgis-js-api/arcade/functions/geomasync.js"),__webpack_require__(/*! ./functions/geometry */ "./node_modules/arcgis-js-api/arcade/functions/geometry.js"),__webpack_require__(/*! ./functions/maths */ "./node_modules/arcgis-js-api/arcade/functions/maths.js"),__webpack_require__(/*! ./functions/stats */ "./node_modules/arcgis-js-api/arcade/functions/stats.js"),__webpack_require__(/*! ./functions/string */ "./node_modules/arcgis-js-api/arcade/functions/string.js"),__webpack_require__(/*! ../core/promiseUtils */ "./node_modules/arcgis-js-api/core/promiseUtils.js"),__webpack_require__(/*! ../geometry/Extent */ "./node_modules/arcgis-js-api/geometry/Extent.js"),__webpack_require__(/*! ../geometry/Geometry */ "./node_modules/arcgis-js-api/geometry/Geometry.js"),__webpack_require__(/*! ../geometry/Multipoint */ "./node_modules/arcgis-js-api/geometry/Multipoint.js"),__webpack_require__(/*! ../geometry/Point */ "./node_modules/arcgis-js-api/geometry/Point.js"),__webpack_require__(/*! ../geometry/Polygon */ "./node_modules/arcgis-js-api/geometry/Polygon.js"),__webpack_require__(/*! ../geometry/Polyline */ "./node_modules/arcgis-js-api/geometry/Polyline.js"),__webpack_require__(/*! ../geometry/SpatialReference */ "./node_modules/arcgis-js-api/geometry/SpatialReference.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,n,o,a,i,c,u,s,l,f,d,h,v,p,g,m,E,y,N,w,b,I,R){function O(e){return e&&"function"==typeof e.then}function S(e){return e instanceof Error?m.reject(e):m.reject(new Error(e))}function T(e){return m.resolve(e)}function M(e,r){for(var t=[],n=0;n<r.arguments.length;n++)t.push(C(e,r.arguments[n]));return m.all(t)}function A(e,r,t){return m.create(function(n,o){M(e,r).then(function(a){try{n(t(e,r,a))}catch(e){o(e)}},o)})}function F(e,r,t){try{return M(e,r).then(function(n){try{var o=t(e,r,n);return O(o)?o:m.resolve(o)}catch(e){return S(e)}})}catch(e){return S(e)}}function C(e,r){try{switch(r.type){case"VariableDeclarator":return re(e,r);case"VariableDeclaration":return ee(e,r,0);case"BlockStatement":return X(e,r);case"FunctionDeclaration":return $(e,r);case"ReturnStatement":return Q(e,r);case"IfStatement":return K(e,r);case"ExpressionStatement":return W(e,r);case"UpdateExpression":return z(e,r);case"AssignmentExpression":return Z(e,r);case"ForStatement":return L(e,r);case"ForInStatement":return q(e,r);case"BreakStatement":return m.resolve(s.breakResult);case"EmptyStatement":return m.resolve(s.voidOperation);case"ContinueStatement":return m.resolve(s.continueResult);case"Identifier":return ue(e,r);case"MemberExpression":return ne(e,r);case"Literal":return T(r.value);case"CallExpression":return se(e,r);case"UnaryExpression":return oe(e,r);case"BinaryExpression":return ie(e,r);case"LogicalExpression":return ce(e,r);case"ConditionalExpression":return S(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTED"));case"ArrayExpression":return ae(e,r);case"ObjectExpression":return U(e,r);case"Property":return x(e,r);default:return S(l.nodeErrorMessage(r,"RUNTIME","UNREOGNISED"))}}catch(e){return S(e)}}function U(e,r){try{for(var t=[],n=0;n<r.properties.length;n++)t.push(C(e,r.properties[n]));return m.all(t).then(function(e){return m.create(function(r,t){for(var n={},a=0;a<e.length;a++){var i=e[a];if(s.isFunctionParameter(i.value))throw new Error("Illegal Argument");if(!1===s.isString(i.key))throw new Error("Illegal Argument");i.value===s.voidOperation?n[i.key.toString()]=null:n[i.key.toString()]=i.value}var c=new o(n);c.immutable=!1,r(c)})})}catch(e){return S(e)}}function x(e,r){try{return C(e,r.value).then(function(t){return m.create(function(n,o){"Identifier"===r.key.type?n({key:r.key.name,value:t}):C(e,r.key).then(function(e){n({key:e,value:t})})})})}catch(e){return m.reject(e)}}function P(e,r,t){try{return C(e,r.body).then(function(n){try{return t.lastAction=n,t.lastAction===s.breakResult?(t.testResult=!1,m.resolve(t)):t.lastAction instanceof s.ReturnResult?(t.testResult=!1,m.resolve(t)):null!==r.update?C(e,r.update).then(function(e){return m.resolve(t)}):m.resolve(t)}catch(e){return m.reject(e)}})}catch(e){return m.reject(e)}}function D(e,r,t){try{return null!==r.test?C(e,r.test).then(function(n){try{return!0===e.abortSignal.aborted?m.reject(new Error("Cancelled")):(t.testResult=n,!1===t.testResult?m.resolve(t):!0!==t.testResult?m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"))):P(e,r,t))}catch(e){return m.reject(e)}}):P(e,r,t)}catch(e){return m.reject(e)}}function k(e,r,t,n,o,a){try{D(e,r,t).then(function(){try{!0===t.testResult?(a++,a>Ae?(a=0,setTimeout(function(){k(e,r,t,function(e){n(e)},function(e){o(e)},a)})):k(e,r,t,function(e){n(e)},function(e){o(e)},a)):n(t.lastAction instanceof s.ReturnResult?t.lastAction:s.voidOperation)}catch(e){o(e)}},function(e){o(e)})}catch(e){o(e)}}function L(e,r){try{return null!==r.init?C(e,r.init).then(function(){return m.create(function(t,n){var o={testResult:!0,lastAction:s.voidOperation};k(e,r,o,function(e){t(e)},function(e){n(e)},0)})}):m.create(function(t,n){var o={testResult:!0,lastAction:s.voidOperation};k(e,r,o,function(e){t(e)},function(e){n(e)},0)})}catch(e){return m.reject(e)}}function j(e,r,t,n,o,a,i,c,u,l){try{if(n<=a)return void c(s.voidOperation);o.value="k"===i?t[a]:a,C(e,r.body).then(function(f){try{f instanceof s.ReturnResult?c(f):f===s.breakResult?c(s.voidOperation):(l++,l>Ae?(l=0,setTimeout(function(){j(e,r,t,n,o,a+1,i,function(e){c(e)},function(e){u(e)},l)})):j(e,r,t,n,o,a+1,i,function(e){c(e)},function(e){u(e)},l))}catch(e){u(e)}},function(e){u(e)})}catch(e){u(e)}}function _(e,r,t,n,o,a,i,c,u){try{if(t.length()<=o)return void i(s.voidOperation);n.value="k"===a?t.get(o):o,C(e,r.body).then(function(l){l instanceof s.ReturnResult?i(l):l===s.breakResult?i(s.voidOperation):(u++,u>Ae?(u=0,setTimeout(function(){_(e,r,t,n,o+1,a,function(e){i(e)},function(e){c(e)},u)})):_(e,r,t,n,o+1,a,function(e){i(e)},function(e){c(e)},u))},function(e){c(e)})}catch(e){c(e)}}function B(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);j(e,r,t,t.length,o,0,a,function(e){n.resolve(e)},function(e){n.reject(e)},0)}catch(e){n.reject(e)}}function V(e,r,t,n,o,a){try{if(void 0===a&&(a="i"),0===t.length)return void n.resolve(s.voidOperation);_(e,r,t,o,0,a,function(e){n.resolve(e)},function(e){n.reject(e)},0)}catch(e){n.reject(e)}}function Y(e,r,t,n,o){try{B(e,r,t.keys(),n,o,"k")}catch(e){n.reject(e)}}function G(e,r,t,n,o,i,c,u){try{e.next().then(function(l){try{if(null===l)i(s.voidOperation);else{var f=a.createFromGraphicLikeObject(l.geometry,l.attributes,n);f._underlyingGraphic=l,o.value=f;C(r,t.body).then(function(a){try{a===s.breakResult?i(s.voidOperation):a instanceof s.ReturnResult?i(a):(u++,u>Ae?(u=0,setTimeout(function(){G(e,r,t,n,o,function(e){i(e)},function(e){c(e)},u)})):G(e,r,t,n,o,function(e){i(e)},function(e){c(e)},u))}catch(e){c(e)}},function(e){c(e)})}}catch(e){c(e)}},function(e){c(e)})}catch(e){c(e)}}function q(e,r){return m.create(function(t,n){C(e,r.right).then(function(i){try{var c=null;c="VariableDeclaration"===r.left.type?C(e,r.left):m.resolve(),c.then(function(){try{var c="";if("VariableDeclaration"===r.left.type){var u=r.left.declarations[0].id;"Identifier"===u.type&&(c=u.name)}else"Identifier"===r.left.type&&(c=r.left.name);if(!c)throw new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDVARIABLE"));c=c.toLowerCase();var f=null;if(null!==e.localScope&&void 0!==e.localScope[c]&&(f=e.localScope[c]),null===f&&void 0!==e.globalScope[c]&&(f=e.globalScope[c]),null===f)return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTDECLARED")));s.isArray(i)||s.isString(i)?B(e,r,i,{reject:n,resolve:t},f):s.isImmutableArray(i)?V(e,r,i,{reject:n,resolve:t},f):i instanceof o||i instanceof a?Y(e,r,i,{reject:n,resolve:t},f):s.isFeatureSet(i)?G(i.iterator(e.abortSignal),e,r,i,f,function(e){t(e)},function(e){n(e)},0):B(e,r,[],{reject:n,resolve:t},f)}catch(e){n(e)}},n)}catch(e){n(e)}},n)})}function z(e,r){try{var t=r.argument;if("MemberExpression"===t.type){var n={t:null};return C(e,t.object).then(function(r){var o=null;return n.t=r,!0===t.computed?o=C(e,t.property):"Identifier"===t.property.type&&(o=m.resolve(t.property.name)),o}).then(function(e){return m.create(function(t,i){var c,u=n.t;if(s.isArray(u)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>=u.length)throw new Error("Assignment outside of array bounds");c=s.toNumber(u[e]),u[e]="++"===r.operator?c+1:c-1}else if(u instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0!==u.hasField(e))throw new Error("Invalid Parameter");c=s.toNumber(u.field(e)),u.setField(e,"++"===r.operator?c+1:c-1)}else{if(!(u instanceof a))throw s.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0!==u.hasField(e))throw new Error("Invalid Parameter");c=s.toNumber(u.field(e)),u.setField(e,"++"===r.operator?c+1:c-1)}t(!1===r.prefix?c:"++"===r.operator?c+1:c-1)})})}return m.create(function(t,n){var o="Identifier"===r.argument.type?r.argument.name.toLowerCase():"";if(!o)throw new Error("Invalid identifier");var a;return null!==e.localScope&&void 0!==e.localScope[o]?(a=s.toNumber(e.localScope[o].value),e.localScope[o]={value:"++"===r.operator?a+1:a-1,valueset:!0,node:r},void t(!1===r.prefix?a:"++"===r.operator?a+1:a-1)):void 0!==e.globalScope[o]?(a=s.toNumber(e.globalScope[o].value),e.globalScope[o]={value:"++"===r.operator?a+1:a-1,valueset:!0,node:r},void t(!1===r.prefix?a:"++"===r.operator?a+1:a-1)):void n(new Error("Variable not recognised"))})}catch(e){return m.reject(e)}}function H(e,r,t,n){switch(r){case"=":return e===s.voidOperation?null:e;case"/=":return s.toNumber(t)/s.toNumber(e);case"*=":return s.toNumber(t)*s.toNumber(e);case"-=":return s.toNumber(t)-s.toNumber(e);case"+=":return s.isString(t)||s.isString(e)?s.toString(t)+s.toString(e):s.toNumber(t)+s.toNumber(e);case"%=":return s.toNumber(t)%s.toNumber(e);default:throw new Error(l.nodeErrorMessage(n,"RUNTIME","OPERATORNOTRECOGNISED"))}}function Z(e,r){return m.create(function(t,n){var i=r.left;if("MemberExpression"===i.type)C(e,r.right).then(function(c){try{C(e,i.object).then(function(u){try{var l=null;if(!0===i.computed)l=C(e,i.property);else{if("Identifier"!==i.property.type)throw new Error("Expected computed or identifier for assignemnt target");l=m.resolve(i.property.name)}l.then(function(e){try{if(s.isArray(u)){if(!s.isNumber(e))throw new Error("Invalid Parameter");if(e<0&&(e=u.length+e),e<0||e>u.length)throw new Error("Assignment outside of array bounds");if(e===u.length){if("="!==r.operator)throw new Error("Invalid Parameter");u[e]=H(c,r.operator,u[e],r)}else u[e]=H(c,r.operator,u[e],r)}else if(u instanceof o){if(!1===s.isString(e))throw new Error("Dictionary accessor must be a string");if(!0===u.hasField(e))u.setField(e,H(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,H(c,r.operator,null,r))}}else{if(!(u instanceof a))throw s.isImmutableArray(u)?new Error("Array is Immutable"):new Error("Invalid Parameter");if(!1===s.isString(e))throw new Error("Feature accessor must be a string");if(!0===u.hasField(e))u.setField(e,H(c,r.operator,u.field(e),r));else{if("="!==r.operator)throw new Error("Invalid Parameter");u.setField(e,H(c,r.operator,null,r))}}t(s.voidOperation)}catch(e){n(e)}},n)}catch(e){n(e)}},n)}catch(e){n(e)}},n);else{var c=i.name.toLowerCase();null!==e.localScope&&void 0!==e.localScope[c]&&C(e,r.right).then(function(o){try{e.localScope[c]={value:H(o,r.operator,e.localScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}},n),void 0!==e.globalScope[c]?C(e,r.right).then(function(o){try{e.globalScope[c]={value:H(o,r.operator,e.globalScope[c].value,r),valueset:!0,node:r.right},t(s.voidOperation)}catch(e){n(e)}},n):n(new Error("Cannot assign undeclared variable"))}})}function W(e,r){try{return"AssignmentExpression"===r.expression.type?C(e,r.expression):(r.expression.type,C(e,r.expression).then(function(e){return m.create(function(r,t){r(e===s.voidOperation?s.voidOperation:new s.ImplicitResult(e))})}))}catch(e){return m.reject(e)}}function K(e,r){return m.create(function(t,n){if("AssignmentExpression"===r.test.type||"UpdateExpression"===r.test.type)return void n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION")));C(e,r.test).then(function(o){try{!0===o?C(e,r.consequent).then(t,n):!1===o?null!==r.alternate?C(e,r.alternate).then(t,n):t(s.voidOperation):n(new Error(l.nodeErrorMessage(r.test,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION")))}catch(e){n(e)}},n)})}function X(e,r){try{return J(e,r,0)}catch(e){return S(e)}}function J(e,r,t){try{return t>=r.body.length?m.resolve(s.voidOperation):m.create(function(n,o){C(e,r.body[t]).then(function(a){try{a instanceof s.ReturnResult||a===s.breakResult||a===s.continueResult?n(a):t===r.body.length-1?n(a):J(e,r,t+1).then(n,o)}catch(e){o(e)}},o)})}catch(e){return S(e)}}function Q(e,r){return m.create(function(t,n){null===r.argument?t(new s.ReturnResult(s.voidOperation)):C(e,r.argument).then(function(e){try{t(new s.ReturnResult(e))}catch(e){n(e)}},n)})}function $(e,r){try{var t=r.id.name.toLowerCase();return e.globalScope[t]={valueset:!0,node:null,value:new i(r,e)},m.resolve(s.voidOperation)}catch(e){return S(e)}}function ee(e,r,t){return m.create(function(n,o){if(t>=r.declarations.length)return void n(s.voidOperation);C(e,r.declarations[t]).then(function(a){t===r.declarations.length-1?n(s.voidOperation):ee(e,r,t+1).then(function(e){n(s.voidOperation)},o)},o)})}function re(e,r){try{var t=null;return t=null===r.init?m.resolve(null):C(e,r.init),null!==e.localScope?t.then(function(t){return m.create(function(n,o){if(t===s.voidOperation&&(t=null),"Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var a=r.id.name.toLowerCase();e.localScope[a]={value:t,valueset:!0,node:r.init},n(s.voidOperation)})}):t.then(function(t){return m.create(function(n,o){if("Identifier"!==r.id.type)throw new Error("Can only assign a regular variable");var a=r.id.name.toLowerCase();t===s.voidOperation&&(t=null),e.globalScope[a]={value:t,valueset:!0,node:r.init},n(s.voidOperation)})})}catch(e){return S(e)}}function te(e,r,t,n){var a;switch(r=r.toLowerCase()){case"hasz":var i=e.hasZ;return void 0!==i&&i;case"hasm":var s=e.hasM;return void 0!==s&&s;case"spatialreference":var f=e.spatialReference._arcadeCacheId;if(void 0===f){var d=!0;Object.freeze&&Object.isFrozen(e.spatialReference)&&(d=!1),d&&(Fe++,e.spatialReference._arcadeCacheId=Fe,f=Fe)}var h=new o({wkt:e.spatialReference.wkt,wkid:e.spatialReference.wkid});return void 0!==f&&(h._arcadeCacheId="SPREF"+f.toString()),h}switch(e.type){case"extent":switch(r){case"xmin":case"xmax":case"ymin":case"ymax":case"zmin":case"zmax":case"mmin":case"mmax":var v=e[r];return void 0!==v?v:null;case"type":return"Extent"}break;case"polygon":switch(r){case"rings":a=e.cache._arcadeCacheId,void 0===a&&(Fe++,a=Fe,e.cache._arcadeCacheId=a);var p=new c(e.rings,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);return p;case"type":return"Polygon"}break;case"point":switch(r){case"x":case"y":case"z":case"m":return void 0!==e[r]?e[r]:null;case"type":return"Point"}break;case"polyline":switch(r){case"paths":a=e.cache._arcadeCacheId,void 0===a&&(Fe++,a=Fe,e.cache._arcadeCacheId=a);var p=new c(e.paths,e.spatialReference,!0===e.hasZ,!0===e.hasM,a);return p;case"type":return"Polyline"}break;case"multipoint":switch(r){case"points":a=e.cache._arcadeCacheId,void 0===a&&(Fe++,a=Fe,e.cache._arcadeCacheId=a);var p=new u(e.points,e.spatialReference,!0===e.hasZ,!0===e.hasM,a,1);return p;case"type":return"Multipoint"}}throw new Error(l.nodeErrorMessage(n,"RUNTIME","PROPERTYNOTFOUND"))}function ne(e,r){try{return C(e,r.object).then(function(t){try{return null===t?m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))):!1===r.computed?"Identifier"===r.property.type?t instanceof o||t instanceof a?m.resolve(t.field(r.property.name)):t instanceof y?m.resolve(te(t,r.property.name,e,r)):m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):m.reject(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE"))):C(e,r.property).then(function(n){return m.create(function(i,c){if(t instanceof o||t instanceof a)s.isString(n)?i(t.field(n)):c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(t instanceof y)s.isString(n)?i(te(t,n,e,r)):c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isArray(t))if(s.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=t.length+n),n>=t.length||n<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(t[n])}else c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isImmutableArray(t))if(s.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=t.length()+n),n>=t.length()||n<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(t.get(n))}else c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else if(s.isString(t))if(s.isNumber(n)&&isFinite(n)&&Math.floor(n)===n){if(n<0&&(n=t.length+n),n>=t.length||n<0)throw new Error(l.nodeErrorMessage(r,"RUNTIME","OUTOFBOUNDS"));i(t[n])}else c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")));else c(new Error(l.nodeErrorMessage(r,"RUNTIME","INVALIDTYPE")))})})}catch(e){return S(e)}})}catch(e){return S(e)}}function oe(e,r){try{return C(e,r.argument).then(function(e){return m.create(function(t,n){s.isBoolean(e)&&"!"===r.operator?t(!e):"-"===r.operator?t(-1*s.toNumber(e)):"+"===r.operator?t(1*s.toNumber(e)):n(new Error(l.nodeErrorMessage(r,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR")))})})}catch(e){return S(e)}}function ae(e,r){try{for(var t=[],n=0;n<r.elements.length;n++)t.push(C(e,r.elements[n]));return m.all(t).then(function(e){return m.create(function(t,n){for(var o=0;o<e.length;o++){if(s.isFunctionParameter(e[o]))return void n(new Error(l.nodeErrorMessage(r,"RUNTIME","FUNCTIONCONTEXTILLEGAL")));e[o]===s.voidOperation&&(e[o]=null)}t(e)})})}catch(e){return S(e)}}function ie(e,r){try{return m.all([C(e,r.left),C(e,r.right)]).then(function(e){return m.create(function(t,n){var o=e[0],a=e[1];switch(r.operator){case"==":t(s.equalityTest(o,a));break;case"!=":t(!s.equalityTest(o,a));break;case"<":case">":case"<=":case">=":t(s.greaterThanLessThan(o,a,r.operator));break;case"+":t(s.isString(o)||s.isString(a)?s.toString(o)+s.toString(a):s.toNumber(o)+s.toNumber(a));break;case"-":t(s.toNumber(o)-s.toNumber(a));break;case"*":t(s.toNumber(o)*s.toNumber(a));break;case"/":t(s.toNumber(o)/s.toNumber(a));break;case"%":t(s.toNumber(o)%s.toNumber(a));break;default:n(new Error(l.nodeErrorMessage(r,"RUNTIME","OPERATORNOTRECOGNISED")))}})})}catch(e){return S(e)}}function ce(e,r){return m.create(function(t,n){return"AssignmentExpression"===r.left.type||"UpdateExpression"===r.left.type?void n(new Error(l.nodeErrorMessage(r.left,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):"AssignmentExpression"===r.right.type||"UpdateExpression"===r.right.type?void n(new Error(l.nodeErrorMessage(r.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"))):void C(e,r.left).then(function(o){try{if(!s.isBoolean(o))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYBOOLEAN"));switch(r.operator){case"||":!0===o?t(o):C(e,r.right).then(function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}},n);break;case"&&":!1===o?t(o):C(e,r.right).then(function(e){try{if(!s.isBoolean(e))throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"));t(e)}catch(e){n(e)}},n);break;default:throw new Error(l.nodeErrorMessage(r,"RUNTIME","ONLYORORAND"))}}catch(e){n(e)}},n)})}function ue(e,r){return m.create(function(t,n){var o=r.name.toLowerCase();if(null!==e.localScope&&void 0!==e.localScope[o]){var a=e.localScope[o];return void(!0===a.valueset?t(a.value):null!==a.d?a.d.then(t,n):(a.d=C(e,a.node),a.d.then(function(e){try{a.value=e,a.valueset=!0,t(e)}catch(e){n(e)}},n)))}if(void 0!==e.globalScope[o]){var i=e.globalScope[o];return void(!0===i.valueset?t(i.value):null!==i.d?i.d.then(t,n):(i.d=C(e,i.node),i.d.then(function(e){try{i.value=e,i.valueset=!0,t(e)}catch(e){n(e)}},n)))}n(new Error(l.nodeErrorMessage(r,"RUNTIME","VARIABLENOTFOUND")))})}function se(e,r){try{if("Identifier"!==r.callee.type)return S(l.nodeErrorMessage(r,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==e.localScope&&void 0!==e.localScope[r.callee.name.toLowerCase()]){var t=e.localScope[r.callee.name.toLowerCase()];return t.value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?Ee(e,r,t.value.definition):S(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}if(void 0!==e.globalScope[r.callee.name.toLowerCase()]){var t=e.globalScope[r.callee.name.toLowerCase()];return t.value instanceof s.NativeFunction?t.value.fn(e,r):t.value instanceof i?Ee(e,r,t.value.definition):S(l.nodeErrorMessage(r,"RUNTIME","NOTAFUNCTION"))}return S(l.nodeErrorMessage(r,"RUNTIME","NOTFOUND"))}catch(e){return S(e)}}function le(e){return null===e?"":s.isArray(e)?"Array":s.isImmutableArray(e)?"Array":s.isDate(e)?"Date":s.isString(e)?"String":s.isBoolean(e)?"Boolean":s.isNumber(e)?"Number":e instanceof n?"Attachment":e instanceof t?"Portal":e instanceof o?"Dictionary":e instanceof a?"Feature":e instanceof w?"Point":e instanceof b?"Polygon":e instanceof I?"Polyline":e instanceof N?"Multipoint":e instanceof E?"Extent":s.isFunctionParameter(e)?"Function":s.isFeatureSet(e)?"FeatureSet":s.isFeatureSetCollection(e)?"FeatureSetCollection":e===s.voidOperation?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognised Type"}function fe(e,r,t,n){return m.create(function(o,a){C(e,r.arguments[t]).then(function(i){try{if(s.equalityTest(i,n))return void C(e,r.arguments[t+1]).then(o,a);var c=r.arguments.length-t;return 1===c?void C(e,r.arguments[t]).then(o,a):(2===c&&o(null),3===c?void C(e,r.arguments[t+2]).then(o,a):void fe(e,r,t+2,n).then(o,a))}catch(e){a(e)}},a)})}function de(e,r,t,n){return m.create(function(o,a){if(!0===n)C(e,r.arguments[t+1]).then(o,a);else{3===r.arguments.length-t?C(e,r.arguments[t+2]).then(o,a):C(e,r.arguments[t+2]).then(function(n){try{if(!1===s.isBoolean(n))return void a(new Error("WHEN needs boolean test conditions"));de(e,r,t+2,n).then(o,a)}catch(e){a(e)}})}})}function he(e,r){try{var t=e.length,n=Math.floor(t/2);return 0===t?m.resolve([]):1===t?m.resolve([e[0]]):m.create(function(o,a){var i=[he(e.slice(0,n),r),he(e.slice(n,t),r)];m.all(i).then(function(e){try{ve(e[0],e[1],r,[]).then(o,a)}catch(e){a(e)}},a)})}catch(e){return S(e)}}function ve(e,r,t,n){return m.create(function(o,a){var i=n;e.length>0||r.length>0?e.length>0&&r.length>0?t(e[0],r[0]).then(function(c){try{isNaN(c)&&(c=1),c<=0?(i.push(e[0]),e=e.slice(1)):(i.push(r[0]),r=r.slice(1)),ve(e,r,t,n).then(o,a)}catch(e){a(e)}},a):e.length>0?(i.push(e[0]),e=e.slice(1),ve(e,r,t,n).then(o,a)):r.length>0&&(i.push(r[0]),r=r.slice(1),ve(e,r,t,n).then(o,a)):o(n)})}function pe(e,r){var t=e.length,n=Math.floor(t/2);return r||(r=function(e,r){return e<r?-1:e===r?0:1}),0===t?[]:1===t?[e[0]]:ge(pe(e.slice(0,n),r),pe(e.slice(n,t),r),r)}function ge(e,r,t){for(var n=[];e.length>0||r.length>0;)if(e.length>0&&r.length>0){var o=t(e[0],r[0]);isNaN(o)&&(o=1),o<=0?(n.push(e[0]),e=e.slice(1)):(n.push(r[0]),r=r.slice(1))}else e.length>0?(n.push(e[0]),e=e.slice(1)):r.length>0&&(n.push(r[0]),r=r.slice(1));return n}function me(e,r,t){try{var n=e.body;if(t.length!==e.params.length)return S(new Error("Invalid Parameter calls to function."));for(var o=0;o<t.length;o++){var a=e.params[o];"Identifier"===a.type&&(r.localScope[a.name.toLowerCase()]={d:null,value:t[o],valueset:!0,node:null})}return C(r,n).then(function(e){return m.create(function(r,t){return e instanceof s.ReturnResult?void r(e.value):e===s.breakResult?void t(new Error("Cannot Break from a Function")):e===s.continueResult?void t(new Error("Cannot Continue from a Function")):e instanceof s.ImplicitResult?void r(e.value):void r(e)})})}catch(e){return m.reject(e)}}function Ee(e,r,t){return F(e,r,function(r,n,o){var a={spatialReference:e.spatialReference,services:e.services,console:e.console,lrucache:e.lrucache,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:e.depthCounter+1};if(a.depthCounter>64)throw new Error("Exceeded maximum function depth");return me(t,a,o)})}function ye(e){return function(){var r={abortSignal:e.context.abortSignal,spatialReference:e.context.spatialReference,console:e.context.console,lrucache:e.context.lrucache,services:e.context.services,localScope:{},globalScope:e.context.globalScope,depthCounter:e.context.depthCounter+1};if(r.depthCounter>64)throw new Error("Exceeded maximum function depth");return me(e.definition,r,arguments)}}function Ne(e,r){var t=new Pe;void 0!==e&&null!==e||(e={}),void 0!==r&&null!==r||(r={});var n=new o({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});n.immutable=!1,t.textformatting={value:n,valueset:!0,node:null};for(var i in r)t[i]={value:new s.NativeFunction(r[i]),native:!0,valueset:!0,node:null};for(var i in e)e[i]&&"esri.Graphic"===e[i].declaredClass?t[i]={value:a.createFromGraphic(e[i]),valueset:!0,node:null}:t[i]={value:e[i],valueset:!0,node:null};return t}function we(e){console.log(e)}function be(e){for(var r={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:A,standardFunctionAsync:F,failDefferred:S,evaluateIdentifier:ue,arcadeCustomFunctionHandler:ye},t=0;t<e.length;t++)e[t].registerFunctions(r);for(var n in r.functions)Ce[n]={value:new s.NativeFunction(r.functions[n]),valueset:!0,node:null},Pe.prototype[n]=Ce[n];for(var t=0;t<r.signatures.length;t++)l.addFunctionDeclaration(r.signatures[t],"async")}function Ie(e,r){var t=r.spatialReference;null!==t&&void 0!==t||(t=new R({wkid:102100}));var n=Ne(r.vars,r.customfunctions);return C({spatialReference:t,services:r.services,abortSignal:void 0===r.abortSignal||null===r.abortSignal?{aborted:!1}:r.abortSignal,globalScope:n,console:r.console?r.console:we,lrucache:r.lrucache,localScope:null,depthCounter:1},e.body[0].body).then(function(e){return m.create(function(r,t){return e instanceof s.ReturnResult&&(e=e.value),e instanceof s.ImplicitResult&&(e=e.value),e===s.voidOperation&&(e=null),e===s.breakResult?void t(new Error("Cannot return BREAK")):e===s.continueResult?void t(new Error("Cannot return CONTINUE")):e instanceof s.NativeFunction?void t(new Error("Cannot return FUNCTION")):e instanceof i?void t(new Error("Cannot return FUNCTION")):void r(e)})})}function Re(e,r){return void 0===r&&(r=!1),l.findFieldLiterals(e,r)}function Oe(e,r){return l.validateScript(e,r,"full")}function Se(e,r){return l.referencesMember(e,r)}function Te(e,r){return l.referencesFunction(e,r)}function Me(e){return l.findFunctionCalls(e,!1)}Object.defineProperty(r,"__esModule",{value:!0});var Ae=100,Fe=0,Ce={};f.registerFunctions(Ce,A),g.registerFunctions(Ce,A),v.registerFunctions(Ce,A),h.registerFunctions(Ce,A),p.registerFunctions(Ce,A),d.registerFunctions({functions:Ce,compiled:!1,signatures:null,failDefferred:null,evaluateIdentifier:null,arcadeCustomFunctionHandler:null,mode:"async",standardFunction:A,standardFunctionAsync:F}),Ce.typeof=function(e,r){return A(e,r,function(e,r,t){s.pcCheck(t,1,1);var n=le(t[0]);if("Unrecognised Type"===n)throw new Error("Unrecognised Type");return n})},Ce.iif=function(e,r){return m.create(function(t,n){s.pcCheck(null===r.arguments?[]:r.arguments,3,3),C(e,r.arguments[0]).then(function(o){try{if(!1===s.isBoolean(o))return void n(new Error("IF Function must have a boolean test condition"));m.all([C(e,r.arguments[1]),C(e,r.arguments[2])]).then(function(e){t(o?e[0]:e[1])},n)}catch(e){n(e)}},n)})},Ce.decode=function(e,r){return m.create(function(t,n){return r.arguments.length<2?void n(new Error("Missing Parameters")):2===r.arguments.length?void C(e,r.arguments[1]).then(t,n):(r.arguments.length-1)%2==0?void n(new Error("Must have a default value result.")):void C(e,r.arguments[0]).then(function(o){try{fe(e,r,1,o).then(t,n)}catch(e){n(e)}},n)})},Ce.when=function(e,r){try{return r.arguments.length<3?S("Missing Parameters"):r.arguments.length%2==0?S("Must have a default value result."):C(e,r.arguments[0]).then(function(t){return m.create(function(n,o){if(!1===s.isBoolean(t))return void o(new Error("WHEN needs boolean test conditions"));de(e,r,0,t).then(n,o)})})}catch(e){return S(e)}},Ce.sort=function(e,r){return F(e,r,function(e,r,t){s.pcCheck(t,1,2);var n=t[0];if(s.isImmutableArray(n)&&(n=n.toArray()),!1===s.isArray(n))return S(Error("Illegal Argument"));if(t.length>1){if(!1===s.isFunctionParameter(t[1]))return S(Error("Illegal Argument"));var o=n;return he(o,ye(t[1]))}var o=n;if(0===o.length)return m.resolve([]);for(var a={},i=0;i<o.length;i++){var c=le(o[i]);""!==c&&(a[c]=!0)}if(!0===a.Array||!0===a.Dictionary||!0===a.Feature||!0===a.Point||!0===a.Polygon||!0===a.Polyline||!0===a.Multipoint||!0===a.Extent||!0===a.Function)return m.resolve(o.slice(0));var u=0,l="";for(var f in a)u++,l=f;return u>1||"String"===l?o=pe(o,function(e,r){if(null===e||void 0===e||e===s.voidOperation)return null===r||void 0===r||r===s.voidOperation?0:1;if(null===r||void 0===r||r===s.voidOperation)return-1;var t=s.toString(e),n=s.toString(r);return t<n?-1:t===n?0:1}):"Number"===l?o=pe(o,function(e,r){return e-r}):"Boolean"===l?o=pe(o,function(e,r){return e===r?0:r?-1:1}):"Date"===l&&(o=pe(o,function(e,r){return r-e})),m.resolve(o)})};var Ue={failDefferred:S,resolveDeffered:T,fixSpatialReference:s.fixSpatialReference,parseArguments:M,standardFunction:A,standardFunctionAsync:F,evaluateIdentifier:ue,arcadeCustomFunction:ye};for(var xe in Ce)Ce[xe]={value:new s.NativeFunction(Ce[xe]),valueset:!0,node:null};var Pe=function(){};Pe.prototype=Ce,Pe.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},Pe.prototype.pi={value:Math.PI,valueset:!0,node:null},r.functionHelper=Ue,r.extend=be,r.executeScript=Ie,r.extractFieldLiterals=Re,r.validateScript=Oe,r.referencesMember=Se,r.referencesFunction=Te,r.findFunctionCalls=Me}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=121.js.map