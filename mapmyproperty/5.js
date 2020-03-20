(function(){
(this||window)["webpackJsonp"].registerAbsMids({
	"arcgis-js-api/views/webgl":"./node_modules/arcgis-js-api/views/webgl.js",
	"esri/views/webgl":"./node_modules/arcgis-js-api/views/webgl.js",
	"arcgis-js-api/views/webgl/BufferObject":"./node_modules/arcgis-js-api/views/webgl/BufferObject.js",
	"esri/views/webgl/BufferObject":"./node_modules/arcgis-js-api/views/webgl/BufferObject.js",
	"esri/views/webgl/FramebufferObject":"./node_modules/arcgis-js-api/views/webgl/FramebufferObject.js",
	"esri/views/webgl/InstanceCounter":"./node_modules/arcgis-js-api/views/webgl/InstanceCounter.js",
	"arcgis-js-api/views/webgl/Program":"./node_modules/arcgis-js-api/views/webgl/Program.js",
	"esri/views/webgl/Program":"./node_modules/arcgis-js-api/views/webgl/Program.js",
	"esri/views/webgl/ProgramCache":"./node_modules/arcgis-js-api/views/webgl/ProgramCache.js",
	"esri/views/webgl/Renderbuffer":"./node_modules/arcgis-js-api/views/webgl/Renderbuffer.js",
	"esri/views/webgl/RenderingContext":"./node_modules/arcgis-js-api/views/webgl/RenderingContext.js",
	"esri/views/webgl/ShaderCompiler":"./node_modules/arcgis-js-api/views/webgl/ShaderCompiler.js",
	"esri/views/webgl/ShaderTranspiler":"./node_modules/arcgis-js-api/views/webgl/ShaderTranspiler.js",
	"arcgis-js-api/views/webgl/Texture":"./node_modules/arcgis-js-api/views/webgl/Texture.js",
	"esri/views/webgl/Texture":"./node_modules/arcgis-js-api/views/webgl/Texture.js",
	"arcgis-js-api/views/webgl/Util":"./node_modules/arcgis-js-api/views/webgl/Util.js",
	"esri/views/webgl/Util":"./node_modules/arcgis-js-api/views/webgl/Util.js",
	"arcgis-js-api/views/webgl/VertexArrayObject":"./node_modules/arcgis-js-api/views/webgl/VertexArrayObject.js",
	"esri/views/webgl/VertexArrayObject":"./node_modules/arcgis-js-api/views/webgl/VertexArrayObject.js",
	"esri/views/webgl/capabilities/DisjointTimerQuery":"./node_modules/arcgis-js-api/views/webgl/capabilities/DisjointTimerQuery.js",
	"esri/views/webgl/capabilities/Instancing":"./node_modules/arcgis-js-api/views/webgl/capabilities/Instancing.js",
	"esri/views/webgl/capabilities/LoseContext":"./node_modules/arcgis-js-api/views/webgl/capabilities/LoseContext.js",
	"esri/views/webgl/capabilities/VertexArrayObjects":"./node_modules/arcgis-js-api/views/webgl/capabilities/VertexArrayObjects.js",
	"esri/views/webgl/capabilities/isWebGL2Context":"./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js",
	"esri/views/webgl/capabilities/load":"./node_modules/arcgis-js-api/views/webgl/capabilities/load.js",
	"esri/views/webgl/enums":"./node_modules/arcgis-js-api/views/webgl/enums.js",
	"esri/views/webgl/lib/glsl-tokenizer/index":"./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/index.js",
	"esri/views/webgl/lib/glsl-tokenizer/lib/builtins":"./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/builtins.js",
	"esri/views/webgl/lib/glsl-tokenizer/lib/literals":"./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/literals.js",
	"esri/views/webgl/lib/glsl-tokenizer/lib/operators":"./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/operators.js",
	"esri/views/webgl/lib/glsl-tokenizer/string":"./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/string.js",
	"esri/views/webgl/programUtils":"./node_modules/arcgis-js-api/views/webgl/programUtils.js",
	"arcgis-js-api/views/webgl/renderState":"./node_modules/arcgis-js-api/views/webgl/renderState.js",
	"esri/views/webgl/renderState":"./node_modules/arcgis-js-api/views/webgl/renderState.js",
	"esri/views/webgl/reservedWordsGLSL3":"./node_modules/arcgis-js-api/views/webgl/reservedWordsGLSL3.js"
})
})(),(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/arcgis-js-api/views/webgl.js":
/*!***************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./webgl/BufferObject */ "./node_modules/arcgis-js-api/views/webgl/BufferObject.js"),__webpack_require__(/*! ./webgl/enums */ "./node_modules/arcgis-js-api/views/webgl/enums.js"),__webpack_require__(/*! ./webgl/FramebufferObject */ "./node_modules/arcgis-js-api/views/webgl/FramebufferObject.js"),__webpack_require__(/*! ./webgl/Program */ "./node_modules/arcgis-js-api/views/webgl/Program.js"),__webpack_require__(/*! ./webgl/Renderbuffer */ "./node_modules/arcgis-js-api/views/webgl/Renderbuffer.js"),__webpack_require__(/*! ./webgl/RenderingContext */ "./node_modules/arcgis-js-api/views/webgl/RenderingContext.js"),__webpack_require__(/*! ./webgl/ShaderCompiler */ "./node_modules/arcgis-js-api/views/webgl/ShaderCompiler.js"),__webpack_require__(/*! ./webgl/Texture */ "./node_modules/arcgis-js-api/views/webgl/Texture.js"),__webpack_require__(/*! ./webgl/VertexArrayObject */ "./node_modules/arcgis-js-api/views/webgl/VertexArrayObject.js"),__webpack_require__(/*! ./webgl/ProgramCache */ "./node_modules/arcgis-js-api/views/webgl/ProgramCache.js"),__webpack_require__(/*! ./webgl/programUtils */ "./node_modules/arcgis-js-api/views/webgl/programUtils.js"),__webpack_require__(/*! ./webgl/context-util */ "./node_modules/arcgis-js-api/views/webgl/context-util.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,a,g,b,l,o,f,n,c,u,i,m){Object.defineProperty(r,"__esModule",{value:!0}),r.BufferObject=t,r.enums=a,r.FramebufferObject=g,r.Program=b,r.Renderbuffer=l,r.RenderingContext=o,r.ShaderCompiler=f,r.Texture=n,r.VertexArrayObject=c,r.ProgramCache=u.ProgramCache,r.createProgram=i.createProgram,r.glslifyDefineMap=i.glslifyDefineMap,r.createContextOrErrorHTML=m.createContextOrErrorHTML}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/BufferObject.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/BufferObject.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/typedArrayUtil */ "./node_modules/arcgis-js-api/core/typedArrayUtil.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n){return function(){function e(t,n,r,o,s){this._context=null,this._glName=null,this._bufferType=void 0,this._usage=35044,this._size=-1,this._indexType=void 0,this._context=t,this._bufferType=n,this._usage=r,this._id=e._nextId++,this._glName=this._context.gl.createBuffer(),i("esri-webgl-debug")&&t.instanceCounter.incrementCount(1),o&&this.setData(o,s)}return e.createIndex=function(t,i,n,r){return new e(t,34963,i,n,r)},e.createVertex=function(t,i,n){return new e(t,34962,i,n)},Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"usage",{get:function(){return this._usage},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"bufferType",{get:function(){return this._bufferType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexType",{get:function(){return this._indexType},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"byteSize",{get:function(){return 34962===this._bufferType?this._size:5125===this._indexType?4*this._size:2*this._size},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){if(this._context){if(this._glName){this._context.gl.deleteBuffer(this._glName),this._glName=null}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(1),this._context=null}},e.prototype.setData=function(e,t){if(e){if("number"==typeof e){if(e<0&&console.error("Buffer size cannot be negative!"),34963===this._bufferType&&t)switch(this._indexType=t,this._size=e,t){case 5123:e*=2;break;case 5125:e*=4}}else{var i=e.byteLength;n.isUint16Array(e)&&(i/=2,this._indexType=5123),n.isUint32Array(e)&&(i/=4,this._indexType=5125),this._size=i}var r=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);this._context.gl.bufferData(this._bufferType,e,this._usage),this._context.bindVAO(r)}},e.prototype.setSubData=function(e,t,i,r){if(void 0===t&&(t=0),void 0===i&&(i=0),e){(t<0||t>=this._size)&&console.error("offset is out of range!");var o=t,s=i,u=r,f=e.byteLength;n.isUint16Array(e)&&(f/=2,o*=2,s*=2,u*=2),n.isUint32Array(e)&&(f/=4,o*=4,s*=4,u*=4),void 0===r&&(r=f-1),i>=r&&console.error("end must be bigger than start!"),t+i-r>this._size&&console.error("An attempt to write beyond the end of the buffer!");var c=this._context.getBoundVAO();this._context.bindVAO(null),this._context.bindBuffer(this);var a=this._context.gl,h=ArrayBuffer.isView(e)?e.buffer:e;a.bufferSubData(this._bufferType,o,h.slice(s,u)),this._context.bindVAO(c)}},e._nextId=0,e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/FramebufferObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/FramebufferObject.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ./Renderbuffer */ "./node_modules/arcgis-js-api/views/webgl/Renderbuffer.js"),__webpack_require__(/*! ./Texture */ "./node_modules/arcgis-js-api/views/webgl/Texture.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,r,n){return function(){function t(e,h,o,s){if(this._context=null,this._glName=null,this._depthAttachment=null,this._stencilAttachment=null,this._colorAttachment=null,this._initialized=!1,this._context=e,this._desc={colorTarget:h.colorTarget,depthStencilTarget:h.depthStencilTarget,width:h.width,height:h.height,multisampled:h.multisampled},this._id=t._nextId++,i("esri-webgl-debug")&&e.instanceCounter.incrementCount(4),o){var c=void 0;o instanceof n?(this._colorAttachment=o,c=o.descriptor):(c=o,this._colorAttachment=new n(this._context,c)),0!==this._desc.colorTarget&&console.error("Framebuffer is initialized with a texture however the descriptor indicates using a renderbuffer color attachment!"),t._validateTextureDimensions(c,this._desc)}if(s instanceof r)2===h.depthStencilTarget?this._stencilAttachment=s:1===h.depthStencilTarget||3===h.depthStencilTarget?this._depthAttachment=s:console.error('If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER'),t._validateBufferDimensions(s.descriptor,this._desc);else if(s){this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");var a=void 0;s instanceof n?(this._depthStencilTexture=s,a=this._depthStencilTexture.descriptor):(a=s,this._depthStencilTexture=new n(this._context,a)),t._validateTextureDimensions(a,this._desc)}}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colorTexture",{get:function(){return this._colorAttachment instanceof n?this._colorAttachment:null},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colorAttachment",{get:function(){return this._colorAttachment},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"depthStencilAttachment",{get:function(){return this._depthStencilTexture||this._depthAttachment||this._stencilAttachment},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"depthStencilTexture",{get:function(){return this._depthStencilTexture},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"width",{get:function(){return this._desc.width},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"height",{get:function(){return this._desc.height},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){if(this._context){var t=this._context,e=t.getBoundFramebufferObject();if(this._disposeColorAttachment(),this._disposeDepthStencilAttachments(),this._glName){t.gl.deleteFramebuffer(this._glName),this._glName=null}i("esri-webgl-debug")&&t.instanceCounter.decrementCount(4),t.bindFramebuffer(e),this._context=null}},t.prototype.attachColorTexture=function(e){if(e){var i=e.descriptor;if(t._validateTextureDimensions(i,this._desc),this._disposeColorAttachment(),this._initialized){this._context.bindFramebuffer(this);var r=this._context.gl;r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,e.glName,0)}this._colorAttachment=e}},t.prototype.detachColorTexture=function(){var t=void 0;if(this._colorAttachment instanceof n){if(t=this._colorAttachment,this._initialized){this._context.bindFramebuffer(this);var e=this._context.gl;this._context.gl.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)}this._colorAttachment=null}return t},t.prototype.attachDepthStencilTexture=function(e){if(e){var i=e.descriptor;if(34041!==i.pixelFormat&&console.error("Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!"),34042!==i.dataType&&console.error("Depth/Stencil texture must have data type of UNSIGNED_INT_24_8_WEBGL!"),this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!"),t._validateTextureDimensions(i,this._desc),4!==this._desc.depthStencilTarget&&(this._desc.depthStencilTarget=4),this._disposeDepthStencilAttachments(),this._initialized){this._context.bindFramebuffer(this);var r=this._context.gl;r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,e.glName,0)}this._depthStencilTexture=e}},t.prototype.detachDepthStencilTexture=function(){var t=this._depthStencilTexture;if(t&&this._initialized){this._context.bindFramebuffer(this);var e=this._context.gl;this._context.gl.framebufferTexture2D(e.FRAMEBUFFER,e.DEPTH_STENCIL_ATTACHMENT,e.TEXTURE_2D,null,0)}return this._depthStencilTexture=null,t},t.prototype.attachDepthStencilBuffer=function(e){if(e){var i=e.descriptor;if(34041!==i.internalFormat&&33189!==i.internalFormat&&console.error("Depth/Stencil buffer must have correct internalFormat"),t._validateBufferDimensions(i,this._desc),this._disposeDepthStencilAttachments(),this._desc.depthStencilTarget=34041===i.internalFormat?3:1,this._initialized){this._context.bindFramebuffer(this);var r=this._context.gl,n=1===this._desc.depthStencilTarget?r.DEPTH_ATTACHMENT:r.DEPTH_STENCIL_ATTACHMENT;r.framebufferRenderbuffer(r.FRAMEBUFFER,n,r.RENDERBUFFER,e.glName)}this._depthAttachment=e}},t.prototype.detachDepthStencilBuffer=function(){var t=this._context.gl,e=this._depthAttachment;if(e&&this._initialized){this._context.bindFramebuffer(this);var i=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,i,t.RENDERBUFFER,null)}return this._depthAttachment=null,e},t.prototype.copyToTexture=function(t,e,i,r,n,h,o){(t<0||e<0||n<0||h<0)&&console.error("Offsets cannot be negative!"),(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!");var s=this._desc,c=o.descriptor;3553!==o.descriptor.target&&console.error("Texture target must be TEXTURE_2D!"),(t+i>s.width||e+r>s.height||n+i>c.width||h+r>c.height)&&console.error("Bad dimensions, the current input values will attempt to read or copy out of bounds!");var a=this._context;a.bindTexture(o),a.bindFramebuffer(this),a.gl.copyTexSubImage2D(3553,0,n,h,t,e,i,r)},t.prototype.readPixels=function(t,e,i,r,n,h,o){(i<=0||r<=0)&&console.error("Copy width and height must be greater than zero!"),o||console.error("Target memory is not initialized!"),this._context.bindFramebuffer(this),this._context.gl.readPixels(t,e,i,r,n,h,o)},t.prototype.resize=function(e,i){var r=this._desc;if(r.width!==e||r.height!==i){if(!this._initialized){if(r.width=e,r.height=i,this._colorAttachment instanceof n){var h=this._colorAttachment;h.resize(e,i)}return void(this._depthStencilTexture&&this._depthStencilTexture.resize(e,i))}if(r.width=e,r.height=i,this._colorAttachment instanceof n){var h=this._colorAttachment,o=h.descriptor;o.width=e,o.height=i,this._colorAttachment.dispose(),this._colorAttachment=new n(this._context,o),t._validateTextureDimensions(h.descriptor,this._desc)}else this._colorAttachment&&this._disposeColorAttachment();if(null!=this._depthStencilTexture){var o=this._depthStencilTexture.descriptor;o.width=e,o.height=i,this._depthStencilTexture.dispose(),this._depthStencilTexture=new n(this._context,o)}else(this._depthAttachment||this._stencilAttachment)&&this._disposeDepthStencilAttachments();this._context.getBoundFramebufferObject()===this&&this._context.bindFramebuffer(null),this._initialized=!1}},t.prototype.initialize=function(){if(this._initialized)return!1;var t=this._context.gl;this._glName&&t.deleteFramebuffer(this._glName);var e=t.createFramebuffer(),i=this._desc;if(t.bindFramebuffer(t.FRAMEBUFFER,e),!this._colorAttachment)if(0===i.colorTarget){var h={target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,wrapMode:33071,width:i.width,height:i.height};this._colorAttachment=new n(this._context,h)}else{var o=new r(this._context,{internalFormat:32854,width:i.width,height:i.height});t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,o.glName),this._colorAttachment=o}if(this._colorAttachment instanceof n){var s=this._colorAttachment;t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,s.glName,0)}switch(i.depthStencilTarget){case 1:case 3:this._depthAttachment||(this._depthAttachment=new r(this._context,{internalFormat:1===i.depthStencilTarget?33189:34041,width:i.width,height:i.height}));var c=1===i.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,c,t.RENDERBUFFER,this._depthAttachment.glName);break;case 2:this._stencilAttachment||(this._stencilAttachment=new r(this._context,{internalFormat:36168,width:i.width,height:i.height})),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,this._stencilAttachment.glName);break;case 4:if(!this._depthStencilTexture){this._context.capabilities.depthTexture||console.error("Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!");var a={target:3553,pixelFormat:34041,dataType:34042,samplingMode:9728,wrapMode:33071,width:i.width,height:i.height};this._depthStencilTexture=new n(this._context,a)}t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,this._depthStencilTexture.glName,0)}return t.checkFramebufferStatus(t.FRAMEBUFFER)!==t.FRAMEBUFFER_COMPLETE&&console.error("Framebuffer is incomplete!"),this._glName=e,this._initialized=!0,!0},t.prototype._disposeColorAttachment=function(){if(this._colorAttachment instanceof n){var t=this._colorAttachment;if(this._initialized){this._context.bindFramebuffer(this);var e=this._context.gl;e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,null,0)}t.dispose()}else if(this._colorAttachment instanceof WebGLRenderbuffer){var i=this._colorAttachment,e=this._context.gl;this._initialized&&(this._context.bindFramebuffer(this),e.framebufferRenderbuffer(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.RENDERBUFFER,null)),this._context.gl.deleteRenderbuffer(i)}this._colorAttachment=null},t.prototype._disposeDepthStencilAttachments=function(){var t=this._context.gl;if(this._depthAttachment){if(this._initialized){this._context.bindFramebuffer(this);var e=1===this._desc.depthStencilTarget?t.DEPTH_ATTACHMENT:t.DEPTH_STENCIL_ATTACHMENT;t.framebufferRenderbuffer(t.FRAMEBUFFER,e,t.RENDERBUFFER,null)}this._depthAttachment.dispose(),this._depthAttachment=null}this._stencilAttachment&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.STENCIL_ATTACHMENT,t.RENDERBUFFER,null)),this._stencilAttachment.dispose(),this._stencilAttachment=null),this._depthStencilTexture&&(this._initialized&&(this._context.bindFramebuffer(this),t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,null,0)),this._depthStencilTexture.dispose(),this._depthStencilTexture=null)},t._validateBufferDimensions=function(t,e){console.assert(t.width>=0&&t.height>=0),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Renderbuffer dimensions must match the framebuffer's!"):(e.width=t.width,e.height=t.height)},t._validateTextureDimensions=function(t,e){console.assert(t.width>=0&&t.height>=0),3553!==t.target&&console.error("Texture type must be TEXTURE_2D!"),void 0!==e.width&&e.width>=0&&void 0!==e.height&&e.height>=0?e.width===t.width&&e.height===t.height||console.error("Color attachment texture must match the framebuffer's!"):(e.width=t.width,e.height=t.height)},t._nextId=0,t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/InstanceCounter.js":
/*!*******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/InstanceCounter.js ***!
  \*******************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n,t){return function(){function n(){this._instanceCount={textureCount:0,bufferCount:0,vaoCount:0,programCount:0,framebufferCount:0,renderBufferCount:0}}return n.prototype.incrementCount=function(n){switch(n){case 0:this._instanceCount.textureCount++;break;case 1:this._instanceCount.bufferCount++;break;case 2:this._instanceCount.vaoCount++;break;case 3:this._instanceCount.programCount++;break;case 4:this._instanceCount.framebufferCount++;break;case 5:this._instanceCount.renderBufferCount++}},n.prototype.decrementCount=function(n){switch(n){case 0:this._instanceCount.textureCount--;break;case 1:this._instanceCount.bufferCount--;break;case 2:this._instanceCount.vaoCount--;break;case 3:this._instanceCount.programCount--;break;case 4:this._instanceCount.framebufferCount--;break;case 5:this._instanceCount.renderBufferCount--}},n.prototype.printResourceCount=function(){console.log("Live objects:"),console.log("Textures: "+this._instanceCount.textureCount),console.log("Buffers: "+this._instanceCount.bufferCount),console.log("VAOs: "+this._instanceCount.vaoCount),console.log("Programs: "+this._instanceCount.programCount),console.log("Framebuffers: "+this._instanceCount.framebufferCount),console.log("Renderbuffers: "+this._instanceCount.renderBufferCount)},n}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/Program.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/Program.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ./ShaderTranspiler */ "./node_modules/arcgis-js-api/views/webgl/ShaderTranspiler.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,o,i,e,r){function n(t,o){if(e.isNone(t)||t.length!==o.length)return!0;for(var i=0;i<t.length;++i)if(t[i]!==o[i])return!0;return!1}function a(t,o){return!!e.isNone(t)||(9!==t.length?n(t,o):(h&&9!==o.length&&console.error("Matrix object must contain 16 elements!"),9!==t.length||t[0]!==o[0]||t[1]!==o[1]||t[2]!==o[2]||t[3]!==o[3]||t[4]!==o[4]||t[5]!==o[5]||t[6]!==o[6]||t[7]!==o[7]||t[8]!==o[8]))}function s(t,o){return!!e.isNone(t)||(16!==t.length?n(t,o):(h&&16!==o.length&&console.error("Matrix object must contain 16 elements!"),16!==t.length||t[0]!==o[0]||t[1]!==o[1]||t[2]!==o[2]||t[3]!==o[3]||t[4]!==o[4]||t[5]!==o[5]||t[6]!==o[6]||t[7]!==o[7]||t[8]!==o[8]||t[9]!==o[9]||t[10]!==o[10]||t[11]!==o[11]||t[12]!==o[12]||t[13]!==o[13]||t[14]!==o[14]||t[15]!==o[15]))}var h=i("dojo-debug-messages");return function(){function t(o,e,r,n,a){if(void 0===a&&(a={}),this._context=null,this._glName=null,this._locations={},this._id=void 0,this._initialized=!1,this._vShader=null,this._fShader=null,this._defines={},this._nameToUniformLocation={},this._nameToAttribLocation={},this._nameToUniform1={},this._nameToUniform1v={},this._nameToUniform2={},this._nameToUniform3={},this._nameToUniform4={},this._nameToUniformMatrix3={},this._nameToUniformMatrix4={},o||console.error("RenderingContext isn't initialized!"),0===e.length&&console.error("Shaders source should not be empty!"),this._context=o,this._vertexShaderSource=e,this._fragmentShaderSource=r,Array.isArray(a))for(var s=0,h=a;s<h.length;s++){var f=h[s];this._defines[f]="1"}else this._defines=a;this._id=t._nextId++,this._locations=n,i("esri-webgl-debug")&&o.instanceCounter.incrementCount(3)}return Object.defineProperty(t.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),t.prototype.getDefine=function(t){return this._defines[t]},t.prototype.dispose=function(){if(this._context){var t=this._context.gl;if(this._vShader){var o=this._vShader;t.deleteShader(o),this._vShader=null}if(this._fShader){var e=this._fShader;t.deleteShader(e),this._fShader=null}this._glName&&(t.deleteProgram(this._glName),this._glName=null),i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(3),this._context=null}},t.prototype.initialize=function(){if(!this._initialized){this._vShader=this._loadShader(35633),this._fShader=this._loadShader(35632),this._vShader&&this._fShader||console.error("Error loading shaders!");var t=this._context.gl,o=t.createProgram();t.attachShader(o,this._vShader),t.attachShader(o,this._fShader);for(var e in this._locations){var r=this._locations[e];t.bindAttribLocation(o,r,e)}t.linkProgram(o),i("esri-validate-shaders")&&!t.getProgramParameter(o,t.LINK_STATUS)&&console.error("Could not initialize shader\nVALIDATE_STATUS: "+t.getProgramParameter(o,t.VALIDATE_STATUS)+", gl error ["+t.getError()+"]infoLog: "+t.getProgramInfoLog(o)),this._glName=o,this._initialized=!0}},t.prototype.getUniformLocation=function(t){return this.initialize(),void 0===this._nameToUniformLocation[t]&&(this._nameToUniformLocation[t]=this._context.gl.getUniformLocation(this._glName,t)),this._nameToUniformLocation[t]},t.prototype.hasUniform=function(t){return null!==this.getUniformLocation(t)},t.prototype.getAttribLocation=function(t){return this.initialize(),void 0===this._nameToAttribLocation[t]&&(this._nameToAttribLocation[t]=this._context.gl.getAttribLocation(this._glName,t)),this._nameToAttribLocation[t]},t.prototype.setUniform1i=function(t,o){var i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.bindProgram(this);this._context.gl.uniform1i(this.getUniformLocation(t),o),this._nameToUniform1[t]=o}},t.prototype.setUniform1iv=function(o,i){var e=this._nameToUniform1v[o];if(n(e,i)){this._context.bindProgram(this);this._context.gl.uniform1iv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform1v[o]=t._arrayCopy(i):t._arrayAssign(i,e)}},t.prototype.setUniform1f=function(t,o){var i=this._nameToUniform1[t];if(void 0===i||o!==i){this._context.bindProgram(this);this._context.gl.uniform1f(this.getUniformLocation(t),o),this._nameToUniform1[t]=o}},t.prototype.setUniform1fv=function(o,i){var e=this._nameToUniform1v[o];if(n(e,i)){this._context.bindProgram(this);this._context.gl.uniform1fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform1v[o]=t._arrayCopy(i):t._arrayAssign(i,e)}},t.prototype.setUniform2f=function(t,o,i){var e=this._nameToUniform2[t];if(void 0===e||o!==e[0]||i!==e[1]){this._context.bindProgram(this);this._context.gl.uniform2f(this.getUniformLocation(t),o,i),void 0===e?this._nameToUniform2[t]=[o,i]:(e[0]=o,e[1]=i)}},t.prototype.setUniform2fv=function(o,i){h&&i.length%2!=0&&console.error("Value array must have even number of elements!");var e=this._nameToUniform2[o];if(n(e,i)){this._context.bindProgram(this);this._context.gl.uniform2fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform2[o]=t._arrayCopy(i):t._arrayAssign(i,e)}},t.prototype.setUniform3f=function(t,o,i,e){var r=this._nameToUniform3[t];if(void 0===r||o!==r[0]||i!==r[1]||e!==r[2]){this._context.bindProgram(this);this._context.gl.uniform3f(this.getUniformLocation(t),o,i,e),void 0===r?this._nameToUniform3[t]=[o,i,e]:(r[0]=o,r[1]=i,r[2]=e)}},t.prototype.setUniform3fv=function(o,i){h&&i.length%3!=0&&console.error("Value array must contain sets of three values!");var e=this._nameToUniform3[o];if(n(e,i)){this._context.bindProgram(this);this._context.gl.uniform3fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform3[o]=t._arrayCopy(i):t._arrayAssign(i,e)}},t.prototype.setUniform4f=function(t,o,i,e,r){var n=this._nameToUniform4[t];if(void 0===n||o!==n[0]||i!==n[1]||e!==n[2]||r!==n[3]){this._context.bindProgram(this);this._context.gl.uniform4f(this.getUniformLocation(t),o,i,e,r),void 0===n?this._nameToUniform4[t]=[o,i,e,r]:(n[0]=o,n[1]=i,n[2]=e,n[3]=r)}},t.prototype.setUniform4fv=function(o,i){h&&i.length%4!=0&&console.error("Value array must contain sets of four values!");var e=this._nameToUniform4[o];if(n(e,i)){this._context.bindProgram(this);this._context.gl.uniform4fv(this.getUniformLocation(o),i),void 0===e?this._nameToUniform4[o]=t._arrayCopy(i):t._arrayAssign(i,e)}},t.prototype.setUniformMatrix3fv=function(o,i,e){void 0===e&&(e=!1),h&&i.length%9!=0&&console.error("Matrix array must contain sets ot 9 elements!");var r=this._nameToUniformMatrix3[o];if(a(r,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix3fv(this.getUniformLocation(o),e,i),void 0===r?this._nameToUniformMatrix3[o]=t._arrayCopy(i):t._arrayAssign(i,r)}},t.prototype.setUniformMatrix4fv=function(o,i,e){void 0===e&&(e=!1),h&&i.length%16!=0&&console.error("Matrix array must contain sets ot 16 elements!");var r=this._nameToUniformMatrix4[o];if(s(r,i)){this._context.bindProgram(this);this._context.gl.uniformMatrix4fv(this.getUniformLocation(o),e,i),void 0===r?this._nameToUniformMatrix4[o]=t._arrayCopy(i):t._arrayAssign(i,r)}},t.prototype.assertCompatibleVertexAttributeLocations=function(t){var o=t.locations===this.locations;return o||console.error("VertexAttributeLocations are incompatible"),o},t._padToThree=function(t){var o=t.toString();return t<1e3&&(o=("  "+t).slice(-3)),o},t.prototype._addLineNumbers=function(o){var i=2;return o.replace(/\n/g,function(){return"\n"+t._padToThree(i++)+":"})},t.prototype._loadShader=function(t){var o=35633===t,e=o?this._vertexShaderSource:this._fragmentShaderSource,n=e,a="";for(var s in this._defines)a+="#define "+s+" "+this._defines[s]+"\n";n=a+n,"webgl2"===this._context.contextVersion&&(n=r.transpileShader(n,o?"vertex":"fragment"));var h=this._context.gl,f=h.createShader(t);return h.shaderSource(f,n),h.compileShader(f),i("esri-validate-shaders")&&!h.getShaderParameter(f,h.COMPILE_STATUS)&&(console.error("Compile error in ".concat(o?"vertex":"fragment"," shader")),console.error(h.getShaderInfoLog(f)),console.error(this._addLineNumbers(n)),"webgl2"===this._context.contextVersion&&(console.log("Shader source before transpilation:"),console.log(e))),f},t._arrayCopy=function(t){for(var o=[],i=0;i<t.length;++i)o.push(t[i]);return o},t._arrayAssign=function(t,o){for(var i=0;i<t.length;++i)o[i]=t[i]},t._nextId=0,t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/ProgramCache.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/ProgramCache.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./programUtils */ "./node_modules/arcgis-js-api/views/webgl/programUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(r,t,e){Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function r(r){this._programCacheByTemplate=new Map,this._rctx=r}return r.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(r){r.programs.forEach(function(r){r.dispose()})}),this._programCacheByTemplate=null},r.prototype.getProgram=function(r,t){var a=this;return this._programCacheByTemplate.has(r)||this.addProgramTemplate(r,function(t){return e.createProgram(a._rctx,r,t)}),this.getProgramTemplateInstance(r,t)},r.prototype.addProgramTemplate=function(r,t){this._programCacheByTemplate.set(r,{constructor:t,programs:new Map})},r.prototype.getProgramTemplateInstance=function(r,t){var e=this._programCacheByTemplate.get(r);if(e){var a=t?JSON.stringify(t):"default";if(!e.programs.has(a)){var o=e.constructor(t);e.programs.set(a,o)}return e.programs.get(a)}return null},r}();t.ProgramCache=a}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/Renderbuffer.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/Renderbuffer.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,n){return function(){function e(t,i){this._context=t,this._desc=i,this._glName=null,this._id=-1;var r=this._context.gl;n("esri-webgl-debug")&&this._context.instanceCounter.incrementCount(5),this._id=++e._nextId,this._glName=r.createRenderbuffer(),this._context.bindRenderbuffer(this),r.renderbufferStorage(r.RENDERBUFFER,i.internalFormat,i.width,i.height)}return Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),e.prototype.resize=function(e,t){var n=this._context.gl,i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this._context.bindRenderbuffer(this),n.renderbufferStorage(n.RENDERBUFFER,i.internalFormat,i.width,i.height))},e.prototype.dispose=function(){if(this._glName){this._context.gl.deleteRenderbuffer(this._glName),this._glName=null}n("esri-webgl-debug")&&this._context&&this._context.instanceCounter.decrementCount(5),this._context=null},e._nextId=0,e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/RenderingContext.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/RenderingContext.js ***!
  \********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/maybe */ "./node_modules/arcgis-js-api/core/maybe.js"),__webpack_require__(/*! ./enums */ "./node_modules/arcgis-js-api/views/webgl/enums.js"),__webpack_require__(/*! ./InstanceCounter */ "./node_modules/arcgis-js-api/views/webgl/InstanceCounter.js"),__webpack_require__(/*! ./renderState */ "./node_modules/arcgis-js-api/views/webgl/renderState.js"),__webpack_require__(/*! ./capabilities/isWebGL2Context */ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js"),__webpack_require__(/*! ./capabilities/load */ "./node_modules/arcgis-js-api/views/webgl/capabilities/load.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i,s,n,a,l,r,o){function h(t,e){switch(t){case 0:return 2*e;case 4:return e/3;case 5:case 6:return e-2}return 0}return function(){function t(t,e){var s=this;this.gl=null,this._blendEnabled=!1,this._blendColorState={r:0,g:0,b:0,a:0},this._blendFunctionState={srcRGB:1,dstRGB:0,srcAlpha:1,dstAlpha:0},this._blendEquationState={mode:32774,modeAlpha:32774},this._colorMaskState={r:!0,g:!0,b:!0,a:!0},this._polygonCullingEnabled=!1,this._cullFace=1029,this._frontFace=2305,this._scissorTestEnabled=!1,this._scissorRect={x:0,y:0,width:0,height:0},this._depthTestEnabled=!1,this._depthFunction=513,this._clearDepth=1,this._depthWriteEnabled=!0,this._depthRange={zNear:0,zFar:1},this._viewport=null,this._stencilTestEnabled=!1,this._polygonOffsetFillEnabled=!1,this._polygonOffset=[0,0],this._stencilFunction={face:1032,func:519,ref:0,mask:1},this._clearStencil=0,this._stencilWriteMask=1,this._stencilOperation={face:1032,fail:7680,zFail:7680,zPass:7680},this._clearColor={r:0,g:0,b:0,a:0},this._activeShaderProgram=null,this._activeVertexBuffer=null,this._activeIndexBuffer=null,this._activeFramebuffer=null,this._activeRenderbuffer=null,this._activeTextureUnit=0,this._textureUnitMap={},this._numOfDrawCalls=0,this._numOfTriangles=0,this.contextVersion=r.default(t)?"webgl2":"webgl",this.gl=t,t instanceof WebGLRenderingContext&&this.gl.getExtension("OES_element_index_uint"),this._capabilities=o.loadCapabilities(t,e);var n=this.gl.getParameter(this.gl.VIEWPORT);this._viewport={x:n[0],y:n[1],width:n[2],height:n[3]},i("esri-webgl-debug")&&(this.instanceCounter=new a),this._stateTracker=new l.StateTracker({setBlending:function(t){if(t){s.setBlendingEnabled(!0),s.setBlendEquationSeparate(t.opRgb,t.opAlpha),s.setBlendFunctionSeparate(t.srcRgb,t.dstRgb,t.srcAlpha,t.dstAlpha);var e=t.color;s.setBlendColor(e.r,e.g,e.b,e.a)}else s.setBlendingEnabled(!1)},setCulling:function(t){t?(s.setFaceCullingEnabled(!0),s.setCullFace(t.face),s.setFrontFace(t.mode)):s.setFaceCullingEnabled(!1)},setPolygonOffset:function(t){t?(s.setPolygonOffsetFillEnabled(!0),s.setPolygonOffset(t.factor,t.units)):s.setPolygonOffsetFillEnabled(!1)},setDepthTest:function(t){t?(s.setDepthTestEnabled(!0),s.setDepthFunction(t.func)):s.setDepthTestEnabled(!1)},setStencilTest:function(t){if(t){s.setStencilTestEnabled(!0);var e=t.function;s.setStencilFunction(e.func,e.ref,e.mask);var i=t.operation;s.setStencilOp(i.fail,i.zFail,i.zPass)}else s.setStencilTestEnabled(!1)},setDepthWrite:function(t){t?(s.setDepthWriteEnabled(!0),s.setDepthRange(t.zNear,t.zFar)):s.setDepthWriteEnabled(!1)},setColorWrite:function(t){t?s.setColorMask(t.r,t.g,t.b,t.a):s.setColorMask(!1,!1,!1,!1)},setStencilWrite:function(t){t?s.setStencilWriteMask(t.mask):s.setStencilWriteMask(0)}}),this.enforceState()}return Object.defineProperty(t.prototype,"contextAttributes",{get:function(){return this.gl.getContextAttributes()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"parameters",{get:function(){if(!this._parameters){var t=this.capabilities.textureFilterAnisotropic;this._parameters={versionString:this.gl.getParameter(this.gl.VERSION),maxVertexTextureImageUnits:this.gl.getParameter(this.gl.MAX_VERTEX_TEXTURE_IMAGE_UNITS),maxVertexAttributes:this.gl.getParameter(this.gl.MAX_VERTEX_ATTRIBS),maxMaxAnisotropy:t?this.gl.getParameter(t.MAX_TEXTURE_MAX_ANISOTROPY):void 0,maxTextureImageUnits:this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)}}return this._parameters},enumerable:!0,configurable:!0}),t.prototype.dispose=function(){this.bindVAO(null),this.unbindBuffer(34962),this.unbindBuffer(34963),this._textureUnitMap={},i("esri-webgl-debug")&&this.instanceCounter.printResourceCount(),this.gl=null},t.prototype.setPipelineState=function(t){this._stateTracker.setPipeline(t)},t.prototype.setBlendingEnabled=function(t){this._blendEnabled!==t&&(!0===t?this.gl.enable(this.gl.BLEND):this.gl.disable(this.gl.BLEND),this._blendEnabled=t,this._stateTracker.invalidateBlending())},t.prototype.setBlendColor=function(t,e,i,s){t===this._blendColorState.r&&e===this._blendColorState.g&&i===this._blendColorState.b&&s===this._blendColorState.a||(this.gl.blendColor(t,e,i,s),this._blendColorState.r=t,this._blendColorState.g=e,this._blendColorState.b=i,this._blendColorState.a=s,this._stateTracker.invalidateBlending())},t.prototype.setBlendFunction=function(t,e){t===this._blendFunctionState.srcRGB&&e===this._blendFunctionState.dstRGB||(this.gl.blendFunc(t,e),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=t,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=e,this._stateTracker.invalidateBlending())},t.prototype.setBlendFunctionSeparate=function(t,e,i,s){this._blendFunctionState.srcRGB===t&&this._blendFunctionState.srcAlpha===i&&this._blendFunctionState.dstRGB===e&&this._blendFunctionState.dstAlpha===s||(this.gl.blendFuncSeparate(t,e,i,s),this._blendFunctionState.srcRGB=t,this._blendFunctionState.srcAlpha=i,this._blendFunctionState.dstRGB=e,this._blendFunctionState.dstAlpha=s,this._stateTracker.invalidateBlending())},t.prototype.setBlendEquation=function(t){this._blendEquationState.mode!==t&&(this.gl.blendEquation(t),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=t,this._stateTracker.invalidateBlending())},t.prototype.setBlendEquationSeparate=function(t,e){this._blendEquationState.mode===t&&this._blendEquationState.modeAlpha===e||(this.gl.blendEquationSeparate(t,e),this._blendEquationState.mode=t,this._blendEquationState.modeAlpha=e,this._stateTracker.invalidateBlending())},t.prototype.setColorMask=function(t,e,i,s){this._colorMaskState.r===t&&this._colorMaskState.g===e&&this._colorMaskState.b===i&&this._colorMaskState.a===s||(this.gl.colorMask(t,e,i,s),this._colorMaskState.r=t,this._colorMaskState.g=e,this._colorMaskState.b=i,this._colorMaskState.a=s,this._stateTracker.invalidateColorWrite())},t.prototype.setClearColor=function(t,e,i,s){this._clearColor.r===t&&this._clearColor.g===e&&this._clearColor.b===i&&this._clearColor.a===s||(this.gl.clearColor(t,e,i,s),this._clearColor.r=t,this._clearColor.g=e,this._clearColor.b=i,this._clearColor.a=s)},t.prototype.setFaceCullingEnabled=function(t){this._polygonCullingEnabled!==t&&(!0===t?this.gl.enable(this.gl.CULL_FACE):this.gl.disable(this.gl.CULL_FACE),this._polygonCullingEnabled=t,this._stateTracker.invalidateCulling())},t.prototype.setPolygonOffsetFillEnabled=function(t){this._polygonOffsetFillEnabled!==t&&(!0===t?this.gl.enable(this.gl.POLYGON_OFFSET_FILL):this.gl.disable(this.gl.POLYGON_OFFSET_FILL),this._polygonOffsetFillEnabled=t,this._stateTracker.invalidatePolygonOffset())},t.prototype.setPolygonOffset=function(t,e){this._polygonOffset[0]===t&&this._polygonOffset[1]===e||(this._polygonOffset[0]=t,this._polygonOffset[1]=e,this.gl.polygonOffset(t,e),this._stateTracker.invalidatePolygonOffset())},t.prototype.setCullFace=function(t){this._cullFace!==t&&(this.gl.cullFace(t),this._cullFace=t,this._stateTracker.invalidateCulling())},t.prototype.setFrontFace=function(t){this._frontFace!==t&&(this.gl.frontFace(t),this._frontFace=t,this._stateTracker.invalidateCulling())},t.prototype.setScissorTestEnabled=function(t){this._scissorTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.SCISSOR_TEST):this.gl.disable(this.gl.SCISSOR_TEST),this._scissorTestEnabled=t)},t.prototype.setScissorRect=function(t,e,i,s){this._scissorRect.x===t&&this._scissorRect.y===e&&this._scissorRect.width===i&&this._scissorRect.height===s||(this.gl.scissor(t,e,i,s),this._scissorRect.x=t,this._scissorRect.y=e,this._scissorRect.width=i,this._scissorRect.height=s)},t.prototype.setDepthTestEnabled=function(t){this._depthTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.DEPTH_TEST):this.gl.disable(this.gl.DEPTH_TEST),this._depthTestEnabled=t,this._stateTracker.invalidateDepthTest())},t.prototype.setClearDepth=function(t){this._clearDepth!==t&&(this.gl.clearDepth(t),this._clearDepth=t)},t.prototype.setDepthFunction=function(t){this._depthFunction!==t&&(this.gl.depthFunc(t),this._depthFunction=t,this._stateTracker.invalidateDepthTest())},t.prototype.setDepthWriteEnabled=function(t){this._depthWriteEnabled!==t&&(this.gl.depthMask(t),this._depthWriteEnabled=t,this._stateTracker.invalidateDepthWrite())},t.prototype.setDepthRange=function(t,e){this._depthRange.zNear===t&&this._depthRange.zFar===e||(this.gl.depthRange(t,e),this._depthRange.zNear=t,this._depthRange.zFar=e,this._stateTracker.invalidateDepthWrite())},t.prototype.setStencilTestEnabled=function(t){this._stencilTestEnabled!==t&&(!0===t?this.gl.enable(this.gl.STENCIL_TEST):this.gl.disable(this.gl.STENCIL_TEST),this._stencilTestEnabled=t,this._stateTracker.invalidateStencilTest())},t.prototype.setClearStencil=function(t){t!==this._clearStencil&&(this.gl.clearStencil(t),this._clearStencil=t)},t.prototype.setStencilFunction=function(t,e,i){this._stencilFunction.func===t&&this._stencilFunction.ref===e&&this._stencilFunction.mask===i||(this.gl.stencilFunc(t,e,i),this._stencilFunction.face=1032,this._stencilFunction.func=t,this._stencilFunction.ref=e,this._stencilFunction.mask=i,this._stateTracker.invalidateStencilTest())},t.prototype.setStencilFunctionSeparate=function(t,e,i,s){this._stencilFunction.face===t&&this._stencilFunction.func===e&&this._stencilFunction.ref===i&&this._stencilFunction.mask===s||(this.gl.stencilFuncSeparate(t,e,i,s),this._stencilFunction.face=t,this._stencilFunction.func=e,this._stencilFunction.ref=i,this._stencilFunction.mask=s,this._stateTracker.invalidateStencilTest())},t.prototype.setStencilWriteMask=function(t){this._stencilWriteMask!==t&&(this.gl.stencilMask(t),this._stencilWriteMask=t,this._stateTracker.invalidateStencilWrite())},t.prototype.setStencilOp=function(t,e,i){this._stencilOperation.fail===t&&this._stencilOperation.zFail===e&&this._stencilOperation.zPass===i||(this.gl.stencilOp(t,e,i),this._stencilOperation.face=1032,this._stencilOperation.fail=t,this._stencilOperation.zFail=e,this._stencilOperation.zPass=i,this._stateTracker.invalidateStencilTest())},t.prototype.setStencilOpSeparate=function(t,e,i,s){this._stencilOperation.face===t&&this._stencilOperation.fail===e&&this._stencilOperation.zFail===i&&this._stencilOperation.zPass===s||(this.gl.stencilOpSeparate(t,e,i,s),this._stencilOperation.face=t,this._stencilOperation.face=t,this._stencilOperation.fail=e,this._stencilOperation.zFail=i,this._stencilOperation.zPass=s,this._stateTracker.invalidateStencilTest())},t.prototype.setActiveTexture=function(t){var e=this._activeTextureUnit;return t>=0&&t!==this._activeTextureUnit&&(this.gl.activeTexture(n.BASE_TEXTURE_UNIT+t),this._activeTextureUnit=t),e},t.prototype.clear=function(t){t&&this.gl.clear(t)},t.prototype.clearSafe=function(t){t&&(16384&t&&this.setColorMask(!0,!0,!0,!0),256&t&&this.setDepthWriteEnabled(!0),1024&t&&this.setStencilWriteMask(255),this.gl.clear(t))},t.prototype.drawArrays=function(t,e,s){i("esri-webgl-debug")&&(this._numOfDrawCalls++,this._numOfTriangles+=h(t,s)),this.gl.drawArrays(t,e,s)},t.prototype.drawElements=function(t,e,s,n){if(i("esri-webgl-debug")&&(this._numOfDrawCalls++,this._numOfTriangles+=h(t,e)),5123===s)return void this.gl.drawElements(t,e,s,n);5125===s&&this.gl.drawElements(t,e,s,n)},t.prototype.logIno=function(){i("esri-webgl-debug")&&console.log("DrawCalls: "+this._numOfDrawCalls+", Triangles: "+this._numOfTriangles)},Object.defineProperty(t.prototype,"capabilities",{get:function(){return this._capabilities},enumerable:!0,configurable:!0}),t.prototype.setViewport=function(t,e,i,s){var n=this._viewport;n.x===t&&n.y===e&&n.width===i&&n.height===s||(n.x=t,n.y=e,n.width=i,n.height=s,this.gl.viewport(t,e,i,s))},t.prototype.getViewport=function(){return{x:this._viewport.x,y:this._viewport.y,width:this._viewport.width,height:this._viewport.height}},t.prototype.bindProgram=function(t){if(!t)return this.gl.useProgram(null),void(this._activeShaderProgram=null);this._activeShaderProgram!==t&&(t.initialize(),this.gl.useProgram(t.glName),this._activeShaderProgram=t)},t.prototype.bindTexture=function(e,i){void 0===i&&(i=0),-1===t._MAX_TEXTURE_IMAGE_UNITS&&(t._MAX_TEXTURE_IMAGE_UNITS=this.gl.getParameter(this.gl.MAX_TEXTURE_IMAGE_UNITS)),(i>=t._MAX_TEXTURE_IMAGE_UNITS||i<0)&&console.error("Input texture unit is out of range of available units!");var s=this._textureUnitMap[i];return this.setActiveTexture(i),null==e||null==e.glName?(null!=s&&(this.gl.bindTexture(s.descriptor.target,null),s.setBoundToUnit(i,!1)),void(this._textureUnitMap[i]=null)):s&&s.id===e.id?void e.applyChanges():(s&&s.setBoundToUnit(i,!1),this.gl.bindTexture(e.descriptor.target,e.glName),e.setBoundToUnit(i,!0),e.applyChanges(),void(this._textureUnitMap[i]=e))},t.prototype.bindFramebuffer=function(t){if(s.isNone(t))return this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,null),void(this._activeFramebuffer=null);this._activeFramebuffer!==t&&(t.initialize()||this.gl.bindFramebuffer(this.gl.FRAMEBUFFER,t.glName),this._activeFramebuffer=t)},t.prototype.bindBuffer=function(e){e&&(34962===e.bufferType?this._activeVertexBuffer=t._bindBuffer(this.gl,e,e.bufferType,this._activeVertexBuffer):this._activeIndexBuffer=t._bindBuffer(this.gl,e,e.bufferType,this._activeIndexBuffer))},t.prototype.bindRenderbuffer=function(t){var e=this.gl;t||(e.bindRenderbuffer(e.RENDERBUFFER,null),this._activeRenderbuffer=null),this._activeRenderbuffer!==t&&(e.bindRenderbuffer(e.RENDERBUFFER,t.glName),this._activeRenderbuffer=t)},t.prototype.unbindBuffer=function(e){34962===e?this._activeVertexBuffer=t._bindBuffer(this.gl,null,e,this._activeVertexBuffer):this._activeIndexBuffer=t._bindBuffer(this.gl,null,e,this._activeIndexBuffer)},t.prototype.bindVAO=function(t){if(!t)return void(this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null));this._activeVertexArrayObject&&this._activeVertexArrayObject.id===t.id||(t.bind(),this._activeVertexArrayObject=t)},t.prototype.getBoundTexture=function(t){return this._textureUnitMap[t]},t.prototype.getBoundFramebufferObject=function(){return this._activeFramebuffer},t.prototype.getBoundVAO=function(){return this._activeVertexArrayObject},t.prototype.resetState=function(){this.bindProgram(null),this.bindVAO(null),this.bindFramebuffer(null),this.unbindBuffer(34962),this.unbindBuffer(34963);for(var t=0;t<this.parameters.maxTextureImageUnits;t++)this.bindTexture(null,t);this.setBlendingEnabled(!1),this.setBlendFunction(1,0),this.setBlendEquation(32774),this.setBlendColor(0,0,0,0),this.setFaceCullingEnabled(!1),this.setCullFace(1029),this.setFrontFace(2305),this.setPolygonOffsetFillEnabled(!1),this.setPolygonOffset(0,0),this.setScissorTestEnabled(!1),this.setScissorRect(0,0,this.gl.canvas.width,this.gl.canvas.height),this.setDepthTestEnabled(!1),this.setDepthFunction(513),this.setDepthRange(0,1),this.setStencilTestEnabled(!1),this.setStencilFunction(519,0,0),this.setStencilOp(7680,7680,7680),this.setClearColor(0,0,0,0),this.setClearDepth(1),this.setClearStencil(0),this.setColorMask(!0,!0,!0,!0),this.setStencilWriteMask(4294967295),this.setDepthWriteEnabled(!0),this.setViewport(0,0,this.gl.canvas.width,this.gl.canvas.height)},t.prototype.enforceState=function(){var t=this.gl,e=this.capabilities.vao;e&&e.bindVertexArray(null);for(var s=0;s<this.parameters.maxVertexAttributes;s++)t.disableVertexAttribArray(s);if(this._activeVertexBuffer?t.bindBuffer(this._activeVertexBuffer.bufferType,this._activeVertexBuffer.glName):t.bindBuffer(34962,null),this._activeIndexBuffer?t.bindBuffer(this._activeIndexBuffer.bufferType,this._activeIndexBuffer.glName):t.bindBuffer(34963,null),e&&this._activeVertexArrayObject){var a=this._activeVertexArrayObject;this._activeVertexArrayObject&&(this._activeVertexArrayObject.unbind(),this._activeVertexArrayObject=null),this.bindVAO(a)}t.bindFramebuffer(t.FRAMEBUFFER,this._activeFramebuffer?this._activeFramebuffer.glName:null),t.useProgram(this._activeShaderProgram?this._activeShaderProgram.glName:null),t.blendColor(this._blendColorState.r,this._blendColorState.g,this._blendColorState.b,this._blendColorState.a),t.bindRenderbuffer(t.RENDERBUFFER,this._activeRenderbuffer?this._activeRenderbuffer.glName:null),!0===this._blendEnabled?t.enable(this.gl.BLEND):t.disable(this.gl.BLEND),t.blendEquationSeparate(this._blendEquationState.mode,this._blendEquationState.modeAlpha),t.blendFuncSeparate(this._blendFunctionState.srcRGB,this._blendFunctionState.dstRGB,this._blendFunctionState.srcAlpha,this._blendFunctionState.dstAlpha),t.clearColor(this._clearColor.r,this._clearColor.g,this._clearColor.b,this._clearColor.a),t.clearDepth(this._clearDepth),t.clearStencil(this._clearStencil),t.colorMask(this._colorMaskState.r,this._colorMaskState.g,this._colorMaskState.b,this._colorMaskState.a),t.cullFace(this._cullFace),t.depthFunc(this._depthFunction),t.depthRange(this._depthRange.zNear,this._depthRange.zFar),!0===this._depthTestEnabled?t.enable(t.DEPTH_TEST):t.disable(t.DEPTH_TEST),t.depthMask(this._depthWriteEnabled),t.frontFace(this._frontFace),t.lineWidth(1),!0===this._polygonCullingEnabled?t.enable(t.CULL_FACE):t.disable(t.CULL_FACE),t.polygonOffset(this._polygonOffset[0],this._polygonOffset[1]),!0===this._polygonOffsetFillEnabled?t.enable(t.POLYGON_OFFSET_FILL):t.disable(t.POLYGON_OFFSET_FILL),t.scissor(this._scissorRect.x,this._scissorRect.y,this._scissorRect.width,this._scissorRect.height),!0===this._scissorTestEnabled?t.enable(t.SCISSOR_TEST):t.disable(t.SCISSOR_TEST),t.stencilFunc(this._stencilFunction.func,this._stencilFunction.ref,this._stencilFunction.mask),t.stencilOpSeparate(this._stencilOperation.face,this._stencilOperation.fail,this._stencilOperation.zFail,this._stencilOperation.zPass),!0===this._stencilTestEnabled?t.enable(t.STENCIL_TEST):t.disable(t.STENCIL_TEST),t.stencilMask(this._stencilWriteMask);for(var l=0;l<this.parameters.maxTextureImageUnits;l++){t.activeTexture(n.BASE_TEXTURE_UNIT+l),t.bindTexture(3553,null);var r=this._textureUnitMap[l];r&&t.bindTexture(r.descriptor.target,r.glName)}t.activeTexture(n.BASE_TEXTURE_UNIT+this._activeTextureUnit),t.viewport(this._viewport.x,this._viewport.y,this._viewport.width,this._viewport.height),i("esri-webgl-debug")&&(this._numOfDrawCalls=0,this._numOfTriangles=0)},t._bindBuffer=function(t,e,i,s){return e?s===e?s:(t.bindBuffer(i,e.glName),e):(t.bindBuffer(i,null),null)},t._MAX_TEXTURE_IMAGE_UNITS=-1,t}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/ShaderCompiler.js":
/*!******************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/ShaderCompiler.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t){return function(){function e(e){this.readFile=e}return e.prototype.resolveIncludes=function(e){return this.resolve(e)},e.prototype.resolve=function(e,t){var r=this;if(void 0===t&&(t=new Map),t.has(e))return t.get(e);var n=this.read(e);if(!n)throw new Error("cannot find shader file "+e);for(var i=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,o=i.exec(n),s=[];null!=o;)s.push({path:o[1],start:o.index,length:o[0].length}),o=i.exec(n);var a=0,u="";return s.forEach(function(e){u+=n.slice(a,e.start),u+=t.has(e.path)?"":r.resolve(e.path,t),a=e.start+e.length}),u+=n.slice(a),t.set(e,u),u},e.prototype.read=function(e){return this.readFile(e)},e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/ShaderTranspiler.js":
/*!********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/ShaderTranspiler.js ***!
  \********************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./reservedWordsGLSL3 */ "./node_modules/arcgis-js-api/views/webgl/reservedWordsGLSL3.js"),__webpack_require__(/*! ./lib/glsl-tokenizer/string */ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/string.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,a,r){function n(e){return r(e)}function i(e){return e.map(function(e){return"eof"!==e.type?e.data:""}).join("")}function o(e,t,a){void 0===t&&(t="100"),void 0===a&&(a="300 es");for(var r=/^\s*\#version\s+([0-9]+(\s+[a-zA-Z]+)?)\s*/,n=0,i=e;n<i.length;n++){var o=i[n];if("preprocessor"===o.type){var d=r.exec(o.data);if(d){var s=d[1].replace(/\s\s+/g," ");if(s===a)return s;if(s===t)return o.data="#version "+a,t;throw new Error("unknown glsl version: "+s)}}}return e.splice(0,0,{type:"preprocessor",data:"#version "+a},{type:"whitespace",data:"\n"}),null}function d(e,t){for(var a=t-1;a>=0;a--){var r=e[a];if("whitespace"!==r.type&&"block-comment"!==r.type){if("keyword"!==r.type)break;if("attribute"===r.data||"in"===r.data)return!0}}return!1}function s(e,t,a,r){r=r||a;for(var n=0,i=e;n<i.length;n++){var o=i[n];if("ident"===o.type&&o.data===a){r in t?t[r]++:t[r]=0;return s(e,t,r+"_"+t[r],r)}}return a}function f(e,t,a){function r(e,t){for(var a=t;a<e.length;a++){var r=e[a];if("operator"===r.type&&";"===r.data)return a}return null}void 0===a&&(a="afterVersion");var n={data:"\n",type:"whitespace"},i=function(t){return t<e.length&&/[^\r\n]$/.test(e[t].data)},o=function(e){for(var t=-1,n=0,i=-1,o=0;o<e.length;o++){var d=e[o];if("preprocessor"===d.type&&(d.data.match(/\#(if|ifdef|ifndef)\s+.+/)?++n:d.data.match(/\#endif\s*.*/)&&--n),"afterVersion"!==a&&"afterPrecision"!==a||"preprocessor"===d.type&&/^#version/.test(d.data)&&(i=Math.max(i,o)),"afterPrecision"===a&&"keyword"===d.type&&"precision"===d.data){var s=r(e,o);if(null===s)throw new Error("precision statement not followed by any semicolons!");i=Math.max(i,s)}t<i&&0===n&&(t=o)}return t+1}(e);i(o-1)&&e.splice(o++,0,n);for(var d=0,s=t;d<s.length;d++){var f=s[d];e.splice(o++,0,f)}i(o-1)&&i(o)&&e.splice(o,0,n)}function p(e,t,a,r){void 0===r&&(r="lowp"),f(e,[{type:"keyword",data:"out"},{type:"whitespace",data:" "},{type:"keyword",data:r},{type:"whitespace",data:" "},{type:"keyword",data:a},{type:"whitespace",data:" "},{type:"ident",data:t},{type:"operator",data:";"}],"afterPrecision")}function c(e,t){var r=n(e);if("300 es"===o(r,"100","300 es"))throw new Error("shader is already glsl 300 es");for(var f=null,c=null,u={},v={},h=0;h<r.length;++h){var y=r[h];switch(y.type){case"keyword":"vertex"===t&&"attribute"===y.data?y.data="in":"varying"===y.data&&(y.data="vertex"===t?"out":"in");break;case"builtin":/^texture(2D|Cube)(Proj)?(Lod|Grad)?(EXT)?$/.test(y.data.trim())&&(y.data=y.data.replace(/(2D|Cube|EXT)/g,"")),"fragment"===t&&"gl_FragColor"===y.data?(f||(f=s(r,u,"fragColor"),p(r,f,"vec4")),y.data=f):"fragment"===t&&"gl_FragDepthEXT"===y.data&&(c||(c=s(r,u,"gl_FragDepth")),y.data=c);break;case"ident":if(a.indexOf(y.data)>=0){if("vertex"===t&&d(r,h))throw new Error("attribute in vertex shader uses a name that is a reserved word in glsl 300 es");y.data in v||(v[y.data]=s(r,u,y.data)),y.data=v[y.data]}}}for(var h=r.length-1;h>=0;--h){var y=r[h];if("preprocessor"===y.type){var w=y.data.match(/\#extension\s+(.*)\:/);if(w&&w[1]&&l.indexOf(w[1].trim())>=0){var g=r[h+1];r.splice(h,g&&"whitespace"===g.type?2:1)}var m=y.data.match(/\#ifdef\s+(.*)/);m&&m[1]&&l.indexOf(m[1].trim())>=0&&(y.data="#if 1");var _=y.data.match(/\#ifndef\s+(.*)/);_&&_[1]&&l.indexOf(_[1].trim())>=0&&(y.data="#if 0")}}return i(r)}Object.defineProperty(t,"__esModule",{value:!0});var l=["GL_OES_standard_derivatives","GL_EXT_frag_depth","GL_EXT_draw_buffers","GL_EXT_shader_texture_lod"];t.transpileShader=c}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/Texture.js":
/*!***********************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/Texture.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ../../core/mathUtils */ "./node_modules/arcgis-js-api/core/mathUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,a){function o(e){return null!=e&&"type"in e&&"compressed"===e.type}return function(){function e(t,a,o){this._context=null,this._glName=null,this._id=-1,this._desc=void 0,this._samplingModeDirty=!1,this._wrapModeDirty=!1,this._boundToUnits=new Set,this._context=t,this._desc={pixelFormat:a.pixelFormat,internalFormat:a.internalFormat,dataType:a.dataType,target:a.target?a.target:3553,samplingMode:a.samplingMode?a.samplingMode:9729,wrapMode:a.wrapMode?a.wrapMode:10497,maxAnisotropy:a.maxAnisotropy,flipped:void 0!==a.flipped&&a.flipped,hasMipmap:void 0!==a.hasMipmap&&a.hasMipmap,unpackAlignment:a.unpackAlignment?a.unpackAlignment:4,width:a.width,height:a.height,preMultiplyAlpha:void 0!==a.preMultiplyAlpha&&a.preMultiplyAlpha,textureCoordinateScaleFactor:a.textureCoordinateScaleFactor||null},this._id=++e._nextId,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(0),this.setData(o)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"descriptor",{get:function(){return this._desc},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){var e=this;if(this._context&&this._context.gl){if(this._glName){var t=this._context.gl;this._boundToUnits.forEach(function(t){e._context.bindTexture(null,t)}),t.deleteTexture(this._glName),this._glName=null}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(0),this._context=null}},e.prototype.release=function(){this.dispose()},e.prototype.resize=function(e,t){var i=this._desc;i.width===e&&i.height===t||(i.width=e,i.height=t,this.setData(null))},e.prototype.setData=function(t){var i=this._context.gl;this._glName||(this._glName=i.createTexture()),void 0===t&&(t=null),null===t&&(this._desc.width=this._desc.width||4,this._desc.height=this._desc.height||4);var a=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var n=this._desc;e._validateTexture(n),i.pixelStorei(i.UNPACK_ALIGNMENT,n.unpackAlignment),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,n.flipped?1:0),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,n.preMultiplyAlpha?1:0);var r=n.pixelFormat,s=n.internalFormat?n.internalFormat:r;if(t instanceof ImageData||t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof HTMLVideoElement)n.width&&n.height&&console.assert(t.width===n.width&&t.height===n.height),i.texImage2D(i.TEXTURE_2D,0,s,r,n.dataType,t),n.hasMipmap&&this.generateMipmap(),void 0===this._desc.width&&(this._desc.width=t.width),void 0===this._desc.height&&(this._desc.height=t.height);else{null!=n.width&&null!=n.height||console.error("Width and height must be specified!"),i.DEPTH24_STENCIL8&&s===i.DEPTH_STENCIL&&(s=i.DEPTH24_STENCIL8);var p=n.width,h=n.height;if(o(t)){var l=Math.round(Math.log(Math.max(p,h))/Math.LN2)+1;n.hasMipmap=n.hasMipmap&&l===t.levels.length;for(var d=0;;++d){var _=t.levels[Math.min(d,t.levels.length-1)];if(i.compressedTexImage2D(i.TEXTURE_2D,d,s,p,h,0,_),1===p&&1===h||!n.hasMipmap)break;p=Math.max(1,p>>1),h=Math.max(1,h>>1)}}else if(t)i.texImage2D(i.TEXTURE_2D,0,s,p,h,0,r,n.dataType,t),n.hasMipmap&&this.generateMipmap();else for(var d=0;i.texImage2D(i.TEXTURE_2D,d,s,p,h,0,r,n.dataType,null),(1!==p||1!==h)&&n.hasMipmap;++d)p=Math.max(1,p>>1),h=Math.max(1,h>>1)}e._applySamplingMode(i,this._desc),e._applyWrapMode(i,this._desc),e._applyAnisotropicFilteringParameters(this._context,this._desc),this._context.bindTexture(a,0)},e.prototype.updateData=function(e,t,i,a,o,n){n||console.error("An attempt to use uninitialized data!"),this._glName||console.error("An attempt to update uninitialized texture!");var r=this._context.gl,s=this._desc,p=this._context.getBoundTexture(0);this._context.bindTexture(this,0),(t<0||i<0||a>s.width||o>s.height||t+a>s.width||i+o>s.height)&&console.error("An attempt to update out of bounds of the texture!"),r.pixelStorei(r.UNPACK_ALIGNMENT,s.unpackAlignment),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,s.flipped?1:0),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s.preMultiplyAlpha?1:0),n instanceof ImageData||n instanceof HTMLImageElement||n instanceof HTMLCanvasElement||n instanceof HTMLVideoElement?(console.assert(n.width===a&&n.height===o),r.texSubImage2D(r.TEXTURE_2D,e,t,i,s.pixelFormat,s.dataType,n)):r.texSubImage2D(r.TEXTURE_2D,e,t,i,a,o,s.pixelFormat,s.dataType,n),this._context.bindTexture(p,0)},e.prototype.generateMipmap=function(){var t=this._desc;t.hasMipmap||(t.hasMipmap=!0,e._validateTexture(t)),9729===t.samplingMode?(this._samplingModeDirty=!0,t.samplingMode=9985):9728===t.samplingMode&&(this._samplingModeDirty=!0,t.samplingMode=9984);var i=this._context.getBoundTexture(0);this._context.bindTexture(this,0);var a=this._context.gl;a.generateMipmap(a.TEXTURE_2D),this._context.bindTexture(i,0)},e.prototype.setSamplingMode=function(t){t!==this._desc.samplingMode&&(this._desc.samplingMode=t,e._validateTexture(this._desc),this._samplingModeDirty=!0)},e.prototype.setWrapMode=function(t){t!==this._desc.wrapMode&&(this._desc.wrapMode=t,e._validateTexture(this._desc),this._wrapModeDirty=!0)},e.prototype.applyChanges=function(){var t=this._context.gl,i=this._desc;this._samplingModeDirty&&(e._applySamplingMode(t,i),this._samplingModeDirty=!1),this._wrapModeDirty&&(e._applyWrapMode(t,i),this._wrapModeDirty=!1)},e.prototype.setBoundToUnit=function(e,t){t?this._boundToUnits.add(e):this._boundToUnits.delete(e)},e._validateTexture=function(e){(e.width<0||e.height<0)&&console.error("Negative dimension parameters are not allowed!"),a.isPowerOfTwo(e.width)&&a.isPowerOfTwo(e.height)||("number"==typeof e.wrapMode?33071!==e.wrapMode&&console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"):33071===e.wrapMode.s&&33071===e.wrapMode.t||console.error("Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!"),e.hasMipmap&&console.error("Mipmapping requires power-of-two textures!"))},e._applySamplingMode=function(e,t){var i=t.samplingMode,a=t.samplingMode;9985===i||9987===i?(i=9729,t.hasMipmap||(a=9729)):9984!==i&&9986!==i||(i=9728,t.hasMipmap||(a=9728)),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,i),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,a)},e._applyWrapMode=function(e,t){"number"==typeof t.wrapMode?(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode)):(e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,t.wrapMode.s),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,t.wrapMode.t))},e._applyAnisotropicFilteringParameters=function(e,t){if(null!=t.maxAnisotropy){var i=e.capabilities.textureFilterAnisotropic;if(i){var a=e.gl;a.texParameterf(a.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY,t.maxAnisotropy)}}},e._nextId=0,e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/Util.js":
/*!********************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/Util.js ***!
  \********************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js"),__webpack_require__(/*! ../../core/compilerUtils */ "./node_modules/arcgis-js-api/core/compilerUtils.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t,i){function n(e,r){return e.vertexBuffers[r].size/o(e.layout[r])}function o(e){return e[0].stride}function a(e){switch(e){case 5126:case 5124:case 5125:return 4;case 5122:case 5123:return 2;case 5120:case 5121:return 1;default:throw new Error("Unknown data type")}}function s(e,r,t,i,n,o){var s=a(i);if(e.length>0){var u=e[0].stride,c=u+s*t;e.forEach(function(e){return e.stride=c}),e.push({name:r,count:t,type:i,offset:u,stride:c,normalized:n,divisor:o})}else e.push({name:r,count:t,type:i,offset:0,stride:s*t,normalized:n,divisor:o})}function u(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return!0;return!1}function c(e,r){for(var t=0;t<e.length;t++)if(e[t].name===r)return e[t];return null}function f(e,r,t,i,n){void 0===n&&(n=0);var o=e.getBoundFramebufferObject(),a=e.getBoundTexture(0);e.bindFramebuffer(r),e.bindTexture(t,0),e.gl.copyTexImage2D(e.gl.TEXTURE_2D,n,t.descriptor.pixelFormat,i[0],i[1],i[2],i[3],0),e.gl.flush(),e.bindFramebuffer(o),e.bindTexture(a,0)}function d(e,r){var i={};for(var n in e)i[n]=e[n].map(function(e){return e.divisor?t({},e,{baseInstance:r}):e});return i}function v(e,r,t,i,n){var o=e.gl,a=e.capabilities.instancing;e.bindBuffer(t);for(var s=0,u=i;s<u.length;s++){var c=u[s],f=r[c.name],d=(n||(0+c.baseInstance?c.baseInstance:0))*c.stride;if(void 0===f&&console.error("There is no location for vertex attribute '"+c.name+"' defined."),c.baseInstance&&!c.divisor&&console.error("Vertex attribute '"+c.name+"' uses baseInstanceOffset without divisor."),c.count<=4)o.vertexAttribPointer(f,c.count,c.type,c.normalized,c.stride,c.offset+d),o.enableVertexAttribArray(f),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f,c.divisor);else if(9===c.count)for(var v=0;v<3;v++)o.vertexAttribPointer(f+v,3,c.type,c.normalized,c.stride,c.offset+12*v+d),o.enableVertexAttribArray(f+v),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f+v,c.divisor);else if(16===c.count)for(var v=0;v<4;v++)o.vertexAttribPointer(f+v,4,c.type,c.normalized,c.stride,c.offset+16*v+d),o.enableVertexAttribArray(f+v),c.divisor&&c.divisor>0&&a&&a.vertexAttribDivisor(f+v,c.divisor);else console.error("Unsupported vertex attribute element count: "+c.count)}}function l(e,r,t,i){var n=e.gl,o=e.capabilities.instancing;e.bindBuffer(t);for(var a=0,s=i;a<s.length;a++){var u=s[a],c=r[u.name];if(u.count<=4)n.disableVertexAttribArray(c),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c,0);else if(9===u.count)for(var f=0;f<3;f++)n.disableVertexAttribArray(c+f),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c+f,0);else if(16===u.count)for(var f=0;f<4;f++)n.disableVertexAttribArray(c+f),u.divisor&&u.divisor>0&&o&&o.vertexAttribDivisor(c+f,0);else console.error("Unsupported vertex attribute element count: "+u.count)}e.unbindBuffer(34962)}function b(e){switch(e){case 6406:case 6409:return 1;case 6410:return 2;case 6407:return 3;case 6408:case 34041:return 4;case 33325:return 2;case 33326:case 35898:case 33327:return 4;case 33328:case 34842:return 8;case 34836:return 16;case 33189:return 2;case 34041:return 4;case 32854:return 2;case 36168:return 1;default:i.neverReached(e)}return 0}function m(e){if(!e)return 0;if("colorAttachment"in e)return e.glName?m(e.colorAttachment)+m(e.depthStencilAttachment):0;if("descriptor"in e)return e.glName?m(e.descriptor):0;var r=e.internalFormat||"pixelFormat"in e&&e.pixelFormat;if(!r)return 0;var t="hasMipmap"in e&&e.hasMipmap?1.3:1,i=e.width*e.height;return b(r)*i*t}Object.defineProperty(r,"__esModule",{value:!0}),r.vertexCount=n,r.getStride=o,r.getBytesPerElement=a,r.addDescriptor=s,r.hasAttribute=u,r.findAttribute=c,r.copyFramebufferToTexture=f,r.setBaseInstanceOffset=d,r.bindVertexBufferLayout=v,r.unbindVertexBufferLayout=l,r.getBytesPerElementFormat=b,r.getGpuMemoryUsage=m}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/VertexArrayObject.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/VertexArrayObject.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/has */ "./node_modules/arcgis-js-api/core/has.js"),__webpack_require__(/*! ./Util */ "./node_modules/arcgis-js-api/views/webgl/Util.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,i,n){return function(){function e(t,n,r,o,s){this._context=null,this._glName=null,this._layout=null,this._locations=null,this._buffers=void 0,this._indexBuffer=void 0,this._initialized=!1,this._context=t,this._layout=r,this._buffers=o,this._locations=n,s&&(this._indexBuffer=s),this._id=e._nextId++,i("esri-webgl-debug")&&t.instanceCounter.incrementCount(2)}return Object.defineProperty(e.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"glName",{get:function(){return this._glName},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"vertexBuffers",{get:function(){return this._buffers},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"indexBuffer",{get:function(){return this._indexBuffer},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"size",{get:function(){var e=this;return Object.keys(this._buffers).reduce(function(t,i){return t+e._buffers[i].size},this._indexBuffer?this._indexBuffer.size:0)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"layout",{get:function(){return this._layout},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"locations",{get:function(){return this._locations},enumerable:!0,configurable:!0}),e.prototype.dispose=function(e){if(void 0===e&&(e=!0),this._context){var t=this._context.capabilities.vao;t&&this._glName&&(t.deleteVertexArray(this._glName),this._glName=null);if(this._context.getBoundVAO()===this&&this._context.bindVAO(null),e){for(var n in this._buffers)this._buffers[n].dispose(),delete this._buffers[n];this._indexBuffer&&(this._indexBuffer.dispose(),this._indexBuffer=null)}i("esri-webgl-debug")&&this._context.instanceCounter.decrementCount(2),this._context=null}},e.prototype.initialize=function(){if(!this._initialized){var e=this._context.capabilities.vao;if(e){var t=e.createVertexArray();e.bindVertexArray(t),this._bindLayout(),e.bindVertexArray(null),this._glName=t}this._initialized=!0}},e.prototype.bind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(this.glName):(this._context.bindVAO(null),this._bindLayout())},e.prototype._bindLayout=function(){var e=this._buffers,t=!!this._context.capabilities.vao,i=this._layout,r=this._indexBuffer;e||console.error("Vertex buffer dictionary is empty!");var o=this._context.gl;for(var s in e){var u=e[s];u||console.error("Vertex buffer is uninitialized!");var f=i[s];f||console.error("Vertex element descriptor is empty!"),n.bindVertexBufferLayout(this._context,this._locations,u,f)}r&&(t?o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,r.glName):this._context.bindBuffer(r))},e.prototype.unbind=function(){this.initialize();var e=this._context.capabilities.vao;e?e.bindVertexArray(null):this._unbindLayout()},e.prototype._unbindLayout=function(){var e=this._buffers,t=this._layout;e||console.error("Vertex buffer dictionary is empty!");for(var i in e){var r=e[i];r||console.error("Vertex buffer is uninitialized!");var o=t[i];n.unbindVertexBufferLayout(this._context,this._locations,r,o)}var s=this._indexBuffer;s&&this._context.unbindBuffer(s.bufferType)},e._nextId=0,e}()}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/DisjointTimerQuery.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/DisjointTimerQuery.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./isWebGL2Context */ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,t,r){function n(e,t){if(t.disjointTimerQuery)return null;var n=e.getExtension("EXT_disjoint_timer_query")||e.getExtension("EXT_disjoint_timer_query_webgl2");return n?r.default(e)?{createQuery:function(){return e.createQuery()},resultAvailable:function(t){return e.getQueryParameter(t,e.QUERY_RESULT_AVAILABLE)},getResult:function(t){return e.getQueryParameter(t,e.QUERY_RESULT)},disjoint:function(){return e.getParameter(n.GPU_DISJOINT_EXT)},beginTimeElapsed:function(t){return e.beginQuery(n.TIME_ELAPSED_EXT,t)},endTimeElapsed:function(){return e.endQuery(n.TIME_ELAPSED_EXT)},createTimestamp:function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)},timestampBits:function(){return e.getQuery(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)}}:{createQuery:function(){return n.createQueryEXT()},resultAvailable:function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_AVAILABLE_EXT)},getResult:function(e){return n.getQueryObjectEXT(e,n.QUERY_RESULT_EXT)},disjoint:function(){return e.getParameter(n.GPU_DISJOINT_EXT)},beginTimeElapsed:function(e){return n.beginQueryEXT(n.TIME_ELAPSED_EXT,e)},endTimeElapsed:function(){return n.endQueryEXT(n.TIME_ELAPSED_EXT)},createTimestamp:function(e){return n.queryCounterEXT(e,n.TIMESTAMP_EXT)},timestampBits:function(){return n.getQueryEXT(n.TIMESTAMP_EXT,n.QUERY_COUNTER_BITS_EXT)}}:null}Object.defineProperty(t,"__esModule",{value:!0}),t.load=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/Instancing.js":
/*!***************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/Instancing.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./isWebGL2Context */ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,r){function t(e){if(r.default(e))return{drawArraysInstanced:e.drawArraysInstanced.bind(e),drawElementsInstanced:e.drawElementsInstanced.bind(e),vertexAttribDivisor:e.vertexAttribDivisor.bind(e)};var n=e.getExtension("ANGLE_instanced_arrays");return n?{drawArraysInstanced:n.drawArraysInstancedANGLE.bind(n),drawElementsInstanced:n.drawElementsInstancedANGLE.bind(n),vertexAttribDivisor:n.vertexAttribDivisorANGLE.bind(n)}:null}Object.defineProperty(n,"__esModule",{value:!0}),n.load=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/LoseContext.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/LoseContext.js ***!
  \****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function t(e,n){var t=n.loseContext&&e.getExtension("WEBGL_lose_context");return t?{loseRenderingContext:function(){return t.loseContext()}}:null}Object.defineProperty(n,"__esModule",{value:!0}),n.load=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/VertexArrayObjects.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/VertexArrayObjects.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./isWebGL2Context */ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,t){function n(e,r){if(t.default(e))return{createVertexArray:e.createVertexArray.bind(e),deleteVertexArray:e.deleteVertexArray.bind(e),bindVertexArray:e.bindVertexArray.bind(e)};if(r.vao)return null;var n=e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object");return n?{createVertexArray:n.createVertexArrayOES.bind(n),deleteVertexArray:n.deleteVertexArrayOES.bind(n),bindVertexArray:n.bindVertexArrayOES.bind(n)}:null}Object.defineProperty(r,"__esModule",{value:!0}),r.load=n}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js":
/*!********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n){function t(e){return window.WebGL2RenderingContext&&e instanceof window.WebGL2RenderingContext}Object.defineProperty(n,"__esModule",{value:!0}),n.default=t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/capabilities/load.js":
/*!*********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/capabilities/load.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./DisjointTimerQuery */ "./node_modules/arcgis-js-api/views/webgl/capabilities/DisjointTimerQuery.js"),__webpack_require__(/*! ./Instancing */ "./node_modules/arcgis-js-api/views/webgl/capabilities/Instancing.js"),__webpack_require__(/*! ./isWebGL2Context */ "./node_modules/arcgis-js-api/views/webgl/capabilities/isWebGL2Context.js"),__webpack_require__(/*! ./LoseContext */ "./node_modules/arcgis-js-api/views/webgl/capabilities/LoseContext.js"),__webpack_require__(/*! ./VertexArrayObjects */ "./node_modules/arcgis-js-api/views/webgl/capabilities/VertexArrayObjects.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,n,r,o,u,_){function l(t,e){var o,l,T,F,R,s,O,X,b,d=e&&e.disabledExtensions||{},A=e&&e.debugWebGLExtensions||{},S=null,g=null,G=null,B=null;return{get instancing(){return o||(o=r.load(t)),o},get vao(){return l||(l=_.load(t,d)),l},get compressedTextureS3TC(){return T||(T=i(t,d)),T},get textureFilterAnisotropic(){return F||(F=f(t,d)),F},get disjointTimerQuery(){return R||(R=n.load(t,d)),R},get textureFloat(){return s||(s=E(t,d)),s},get colorBufferFloat(){return O||(O=c(t,d)),O},get blendMinMax(){return X||(X=a(t,d)),X},get depthTexture(){return null===S&&(S=x(t,d,"depthTexture",!0,["WEBGL_depth_texture","MOZ_WEBGL_depth_texture","WEBKIT_WEBGL_depth_texture"])),S},get standardDerivatives(){return null===g&&(g=x(t,d,"standardDerivatives",!0,["OES_standard_derivatives"])),g},get shaderTextureLOD(){return null===G&&(G=x(t,d,"shaderTextureLOD",!0,["EXT_shader_texture_lod"])),G},get fragDepth(){return null===B&&(B=x(t,d,"fragDepth",!0,["EXT_frag_depth"])),B},get loseContext(){return b||(b=u.load(t,A)),b}}}function i(t,e){if(e.compressedTextureS3TC)return null;var n=t.getExtension("WEBGL_compressed_texture_s3tc");return n?{COMPRESSED_RGB_S3TC_DXT1:n.COMPRESSED_RGB_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT1:n.COMPRESSED_RGBA_S3TC_DXT1_EXT,COMPRESSED_RGBA_S3TC_DXT3:n.COMPRESSED_RGBA_S3TC_DXT3_EXT,COMPRESSED_RGBA_S3TC_DXT5:n.COMPRESSED_RGBA_S3TC_DXT5_EXT}:null}function a(t,e){if(o.default(t))return{MIN:t.MIN,MAX:t.MAX};if(e.blendMinMax)return null;var n=t.getExtension("EXT_blend_minmax");return n?{MIN:n.MIN_EXT,MAX:n.MAX_EXT}:null}function f(t,e){if(e.textureFilterAnisotropic)return null;var n=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");return n?{MAX_TEXTURE_MAX_ANISOTROPY:n.MAX_TEXTURE_MAX_ANISOTROPY_EXT,TEXTURE_MAX_ANISOTROPY:n.TEXTURE_MAX_ANISOTROPY_EXT}:null}function E(t,e){if(o.default(t))return{textureFloat:!0,textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!0,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:t.HALF_FLOAT};if(t instanceof WebGLRenderingContext){var n=!e.textureHalfFloat&&t.getExtension("OES_texture_half_float");return{textureFloat:!e.textureFloat&&!!t.getExtension("OES_texture_float"),textureFloatLinear:!e.textureFloatLinear&&!!t.getExtension("OES_texture_float_linear"),textureHalfFloat:!!n,textureHalfFloatLinear:!e.textureHalfFloatLinear&&!!t.getExtension("OES_texture_half_float_linear"),HALF_FLOAT:n?n.HALF_FLOAT_OES:void 0}}return null}function c(t,e){if(o.default(t)){var n=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),r=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_float");return n||r?{textureFloat:!!r,textureHalfFloat:!!n,R16F:t.R16F,RG16F:t.RG16F,RGBA16F:t.RGBA16F,R32F:t.R32F,RG32F:t.RG32F,RGBA32F:t.RGBA32F,R11F_G11F_B10F:t.R11F_G11F_B10F,RGB16F:t.RGB16F}:null}if(t instanceof WebGLRenderingContext){var n=!e.colorBufferFloat&&t.getExtension("EXT_color_buffer_half_float"),r=!e.colorBufferFloat&&t.getExtension("WEBGL_color_buffer_float");return n||r?{textureFloat:!!r,textureHalfFloat:!!n,RGBA16F:n?n.RGBA16F_EXT:void 0,RGB16F:n?n.RGB16F_EXT:void 0,RGBA32F:r?r.RGBA32F_EXT:void 0}:null}return null}function x(t,e,n,r,u){if(r&&o.default(t))return!0;if(e[n])return!1;for(var _=0,l=u;_<l.length;_++){var i=l[_];if(t.getExtension(i))return!0}return!1}Object.defineProperty(e,"__esModule",{value:!0}),e.loadCapabilities=l}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/enums.js":
/*!*********************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/enums.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){Object.defineProperty(r,"__esModule",{value:!0}),r.BASE_TEXTURE_UNIT=33984}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/index.js ***!
  \****************************************************************************/
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./lib/literals */ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/literals.js"),__webpack_require__(/*! ./lib/operators */ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/operators.js"),__webpack_require__(/*! ./lib/builtins */ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/builtins.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,n,t){"use strict;";function r(){function r(e){e.length&&L.push({type:j[J],data:e,position:P,line:M,column:N})}function w(e){H=0,S+=e,G=S.length;for(var n;C=S[H],H<G;){switch(n=H,J){case s:H=_();break;case o:H=O();break;case c:H=E();break;case f:H=y();break;case a:H=q();break;case k:H=F();break;case l:H=z();break;case u:H=B();break;case b:H=x();break;case i:H=m()}if(n!==H)switch(S[n]){case"\n":N=0,++M;break;default:++N}}return I+=H,S=S.slice(H),L}function v(e){return K.length&&r(K.join("")),J=d,r("(eof)"),L}function m(){return K=K.length?[]:K,"/"===D&&"*"===C?(P=I+H-1,J=s,D=C,H+1):"/"===D&&"/"===C?(P=I+H-1,J=o,D=C,H+1):"#"===C?(J=c,P=I+H,H):/\s/.test(C)?(J=b,P=I+H,H):(Q=/\d/.test(C),R=/[^\w_]/.test(C),P=I+H,J=Q?a:R?f:u,H)}function x(){return/[^\s]/g.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function E(){return"\r"!==C&&"\n"!==C||"\\"===D?(K.push(C),D=C,H+1):(r(K.join("")),J=i,H)}function O(){return E()}function _(){return"/"===C&&"*"===D?(K.push(C),r(K.join("")),J=i,H+1):(K.push(C),D=C,H+1)}function y(){if("."===D&&/\d/.test(C))return J=l,H;if("/"===D&&"*"===C)return J=s,H;if("/"===D&&"/"===C)return J=o,H;if("."===C&&K.length){for(;A(K););return J=l,H}if(";"===C||")"===C||"("===C){if(K.length)for(;A(K););return r(C),J=i,H+1}var e=2===K.length&&"="!==C;if(/[\w_\d\s]/.test(C)||e){for(;A(K););return J=i,H}return K.push(C),D=C,H+1}function A(e){for(var t,i,u=0;;){if(t=n.indexOf(e.slice(0,e.length+u).join("")),i=n[t],-1===t){if(u--+e.length>0)continue;i=e.slice(0,1).join("")}return r(i),P+=i.length,K=K.slice(i.length),K.length}}function F(){return/[^a-fA-F0-9]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function q(){return"."===C?(K.push(C),J=l,D=C,H+1):/[eE]/.test(C)?(K.push(C),J=l,D=C,H+1):"x"===C&&1===K.length&&"0"===K[0]?(J=k,K.push(C),D=C,H+1):/[^\d]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function z(){return"f"===C&&(K.push(C),D=C,H+=1),/[eE]/.test(C)?(K.push(C),D=C,H+1):"-"===C&&/[eE]/.test(D)?(K.push(C),D=C,H+1):/[^\d]/.test(C)?(r(K.join("")),J=i,H):(K.push(C),D=C,H+1)}function B(){if(/[^\d\w_]/.test(C)){var n=K.join("");return J=e.indexOf(n)>-1?g:t.indexOf(n)>-1?p:h,r(K.join("")),J=i,H}return K.push(C),D=C,H+1}var C,D,G,H=0,I=0,J=i,K=[],L=[],M=1,N=0,P=0,Q=!1,R=!1,S="";return function(e){return L=[],null!==e?w(e.replace?e.replace(/\r\n/g,"\n"):e):v()}}var i=999,u=9999,s=0,o=1,c=2,f=3,a=4,l=5,h=6,p=7,g=8,b=9,d=10,k=11,j=["block-comment","line-comment","preprocessor","operator","integer","float","ident","builtin","keyword","whitespace","eof","integer"];return r}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/builtins.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/builtins.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";return["abs","acos","all","any","asin","atan","ceil","clamp","cos","cross","dFdx","dFdy","degrees","distance","dot","equal","exp","exp2","faceforward","floor","fract","gl_BackColor","gl_BackLightModelProduct","gl_BackLightProduct","gl_BackMaterial","gl_BackSecondaryColor","gl_ClipPlane","gl_ClipVertex","gl_Color","gl_DepthRange","gl_DepthRangeParameters","gl_EyePlaneQ","gl_EyePlaneR","gl_EyePlaneS","gl_EyePlaneT","gl_Fog","gl_FogCoord","gl_FogFragCoord","gl_FogParameters","gl_FragColor","gl_FragCoord","gl_FragData","gl_FragDepth","gl_FragDepthEXT","gl_FrontColor","gl_FrontFacing","gl_FrontLightModelProduct","gl_FrontLightProduct","gl_FrontMaterial","gl_FrontSecondaryColor","gl_LightModel","gl_LightModelParameters","gl_LightModelProducts","gl_LightProducts","gl_LightSource","gl_LightSourceParameters","gl_MaterialParameters","gl_MaxClipPlanes","gl_MaxCombinedTextureImageUnits","gl_MaxDrawBuffers","gl_MaxFragmentUniformComponents","gl_MaxLights","gl_MaxTextureCoords","gl_MaxTextureImageUnits","gl_MaxTextureUnits","gl_MaxVaryingFloats","gl_MaxVertexAttribs","gl_MaxVertexTextureImageUnits","gl_MaxVertexUniformComponents","gl_ModelViewMatrix","gl_ModelViewMatrixInverse","gl_ModelViewMatrixInverseTranspose","gl_ModelViewMatrixTranspose","gl_ModelViewProjectionMatrix","gl_ModelViewProjectionMatrixInverse","gl_ModelViewProjectionMatrixInverseTranspose","gl_ModelViewProjectionMatrixTranspose","gl_MultiTexCoord0","gl_MultiTexCoord1","gl_MultiTexCoord2","gl_MultiTexCoord3","gl_MultiTexCoord4","gl_MultiTexCoord5","gl_MultiTexCoord6","gl_MultiTexCoord7","gl_Normal","gl_NormalMatrix","gl_NormalScale","gl_ObjectPlaneQ","gl_ObjectPlaneR","gl_ObjectPlaneS","gl_ObjectPlaneT","gl_Point","gl_PointCoord","gl_PointParameters","gl_PointSize","gl_Position","gl_ProjectionMatrix","gl_ProjectionMatrixInverse","gl_ProjectionMatrixInverseTranspose","gl_ProjectionMatrixTranspose","gl_SecondaryColor","gl_TexCoord","gl_TextureEnvColor","gl_TextureMatrix","gl_TextureMatrixInverse","gl_TextureMatrixInverseTranspose","gl_TextureMatrixTranspose","gl_Vertex","greaterThan","greaterThanEqual","inversesqrt","length","lessThan","lessThanEqual","log","log2","matrixCompMult","max","min","mix","mod","normalize","not","notEqual","pow","radians","reflect","refract","sign","sin","smoothstep","sqrt","step","tan","texture2D","texture2DLod","texture2DProj","texture2DProjLod","textureCube","textureCubeLod","texture2DLodEXT","texture2DProjLodEXT","textureCubeLodEXT","texture2DGradEXT","texture2DProjGradEXT","textureCubeGradEXT"]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/literals.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/literals.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict";return["precision","highp","mediump","lowp","attribute","const","uniform","varying","break","continue","do","for","while","if","else","in","out","inout","float","int","void","bool","true","false","discard","return","mat2","mat3","mat4","vec2","vec3","vec4","ivec2","ivec3","ivec4","bvec2","bvec3","bvec4","sampler1D","sampler2D","sampler3D","samplerCube","sampler1DShadow","sampler2DShadow","struct","asm","class","union","enum","typedef","template","this","packed","goto","switch","default","inline","noinline","volatile","public","static","extern","external","interface","long","short","double","half","fixed","unsigned","input","output","hvec2","hvec3","hvec4","dvec2","dvec3","dvec4","fvec2","fvec3","fvec4","sampler2DRect","sampler3DRect","sampler2DRectShadow","sizeof","cast","namespace","using"]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/operators.js":
/*!************************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/lib/operators.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){"use strict;";return["<<=",">>=","++","--","<<",">>","<=",">=","==","!=","&&","||","+=","-=","*=","/=","%=","&=","^^","^=","|=","(",")","[","]",".","!","~","*","/","%","+","-","<",">","&","^","|","?",":","=",",",";","{","}"]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/string.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/string.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./index */ "./node_modules/arcgis-js-api/views/webgl/lib/glsl-tokenizer/index.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(n){"use strict;";function t(t){var c=n(),e=[];return e=e.concat(c(t)),e=e.concat(c(null))}return t}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/programUtils.js":
/*!****************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/programUtils.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ./Program */ "./node_modules/arcgis-js-api/views/webgl/Program.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r,n){function t(e){var r="";for(var n in e){var t=e[n];if("boolean"==typeof t)t&&(r+="#define "+n+"\n");else if("number"==typeof t)r+="#define "+n+" "+t.toFixed()+"\n";else if("object"==typeof t){var f=t.options,i=0;for(var o in f)r+="#define "+f[o]+" "+(i++).toFixed()+"\n";r+="#define "+n+" "+f[t.value]+"\n"}}return r}function f(e,r,t,f){t=t||{},f=f||"";var i="function"==typeof r.shaders?r.shaders(t):r.shaders;return new n(e,f+i.vertexShader,f+i.fragmentShader,r.attributes)}Object.defineProperty(r,"__esModule",{value:!0}),r.glslifyDefineMap=t,r.createProgram=f}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/renderState.js":
/*!***************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/renderState.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports,__webpack_require__(/*! ../../core/tsSupport/assignHelper */ "./node_modules/arcgis-js-api/core/tsSupport/assignHelper.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function(t,e,i){function n(t,e,i,n){return void 0===i&&(i=32774),void 0===n&&(n=[0,0,0,0]),{srcRgb:t,srcAlpha:t,dstRgb:e,dstAlpha:e,opRgb:i,opAlpha:i,color:{r:n[0],g:n[1],b:n[2],a:n[3]}}}function s(t,e,i,n,s,l,r){return void 0===s&&(s=32774),void 0===l&&(l=32774),void 0===r&&(r=[0,0,0,0]),{srcRgb:t,srcAlpha:e,dstRgb:i,dstAlpha:n,opRgb:s,opAlpha:l,color:{r:r[0],g:r[1],b:r[2],a:r[3]}}}function l(t){return k.intern(t)}function r(t){return O.intern(t)}function o(t){return P.intern(t)}function a(t){return C.intern(t)}function p(t){return D.intern(t)}function u(t){return R.intern(t)}function h(t){return w.intern(t)}function c(t){return A.intern(t)}function d(t){return B.intern(t)}function f(t){return"["+t.join(",")+"]"}function _(t){return t?f([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}function g(t){return t?f([t.face,t.mode]):null}function v(t){return t?f([t.factor,t.units]):null}function W(t){return t?f([t.func]):null}function I(t){return t?f([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}function S(t){return t?f([t.zNear,t.zFar]):null}function y(t){return t?f([t.r,t.g,t.b,t.a]):null}function b(t){return t?f([t.mask]):null}function T(t){return t?f([_(t.blending),g(t.culling),v(t.polygonOffset),W(t.depthTest),I(t.stencilTest),S(t.depthWrite),y(t.colorWrite),b(t.stencilWrite)]):null}Object.defineProperty(e,"__esModule",{value:!0}),e.simpleBlendingParams=n,e.separateBlendingParams=s,e.backFaceCullingParams={face:1029,mode:2305},e.defaultDepthWriteParams={zNear:0,zFar:1},e.defaultColorWriteParams={r:!0,g:!0,b:!0,a:!0},e.makeBlending=l,e.makeCulling=r,e.makePolygonOffset=o,e.makeDepthTest=a,e.makeStencilTest=p,e.makeDepthWrite=u,e.makeColorWrite=h,e.makeStencilWrite=c,e.makePipelineState=d;var m=function(){function t(t,e){this.makeKey=t,this.makeRef=e,this.interns=new Map}return t.prototype.intern=function(t){if(!t)return null;var e=this.makeKey(t),i=this.interns;return i.has(e)||i.set(e,this.makeRef(t)),i.get(e)},t}(),k=new m(_,function(t){return i({__tag:"Blending"},t)}),O=new m(g,function(t){return i({__tag:"Culling"},t)}),P=new m(v,function(t){return i({__tag:"PolygonOffset"},t)}),C=new m(W,function(t){return i({__tag:"DepthTest"},t)}),D=new m(I,function(t){return i({__tag:"StencilTest"},t)}),R=new m(S,function(t){return i({__tag:"DepthWrite"},t)}),w=new m(y,function(t){return i({__tag:"ColorWrite"},t)}),A=new m(b,function(t){return i({__tag:"StencilWrite"},t)}),B=new m(T,function(t){return{blending:l(t.blending),culling:r(t.culling),polygonOffset:o(t.polygonOffset),depthTest:a(t.depthTest),stencilTest:p(t.stencilTest),depthWrite:u(t.depthWrite),colorWrite:h(t.colorWrite),stencilWrite:c(t.stencilWrite)}}),z=function(){function t(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._stateSetters=t}return t.prototype.setPipeline=function(t){(this._pipelineInvalid||t!==this._pipeline)&&(this.setBlending(t.blending),this.setCulling(t.culling),this.setPolygonOffset(t.polygonOffset),this.setDepthTest(t.depthTest),this.setStencilTest(t.stencilTest),this.setDepthWrite(t.depthWrite),this.setColorWrite(t.colorWrite),this.setStencilWrite(t.stencilWrite),this._pipeline=t),this._pipelineInvalid=!1},t.prototype.invalidateBlending=function(){this._blendingInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateCulling=function(){this._cullingInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidatePolygonOffset=function(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateDepthTest=function(){this._depthTestInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateStencilTest=function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateDepthWrite=function(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateColorWrite=function(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0},t.prototype.invalidateStencilWrite=function(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0},t.prototype.setBlending=function(t){this._blending=this.setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1},t.prototype.setCulling=function(t){this._culling=this.setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1},t.prototype.setPolygonOffset=function(t){this._polygonOffset=this.setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1},t.prototype.setDepthTest=function(t){this._depthTest=this.setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1},t.prototype.setStencilTest=function(t){this._stencilTest=this.setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1},t.prototype.setDepthWrite=function(t){this._depthWrite=this.setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1},t.prototype.setColorWrite=function(t){this._colorWrite=this.setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1},t.prototype.setStencilWrite=function(t){this._stencilWrite=this.setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1},t.prototype.setSubState=function(t,e,i,n){return(i||t!==e)&&(n(t),this._pipelineInvalid=!0),t},t}();e.StateTracker=z}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ }),

/***/ "./node_modules/arcgis-js-api/views/webgl/reservedWordsGLSL3.js":
/*!**********************************************************************!*\
  !*** ./node_modules/arcgis-js-api/views/webgl/reservedWordsGLSL3.js ***!
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

!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__.dj.c(module.i),exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(e,r){return["layout","centroid","smooth","case","mat2x2","mat2x3","mat2x4","mat3x2","mat3x3","mat3x4","mat4x2","mat4x3","mat4x4","uint","uvec2","uvec3","uvec4","samplerCubeShadow","sampler2DArray","sampler2DArrayShadow","isampler2D","isampler3D","isamplerCube","isampler2DArray","usampler2D","usampler3D","usamplerCube","usampler2DArray","coherent","restrict","readonly","writeonly","resource","atomic_uint","noperspective","patch","sample","subroutine","common","partition","active","filter","image1D","image2D","image3D","imageCube","iimage1D","iimage2D","iimage3D","iimageCube","uimage1D","uimage2D","uimage3D","uimageCube","image1DArray","image2DArray","iimage1DArray","iimage2DArray","uimage1DArray","uimage2DArray","image1DShadow","image2DShadow","image1DArrayShadow","image2DArrayShadow","imageBuffer","iimageBuffer","uimageBuffer","sampler1DArray","sampler1DArrayShadow","isampler1D","isampler1DArray","usampler1D","usampler1DArray","isampler2DRect","usampler2DRect","samplerBuffer","isamplerBuffer","usamplerBuffer","sampler2DMS","isampler2DMS","usampler2DMS","sampler2DMSArray","isampler2DMSArray","usampler2DMSArray","trunc","round","roundEven","isnan","isinf","floatBitsToInt","floatBitsToUint","intBitsToFloat","uintBitsToFloat","packSnorm2x16","unpackSnorm2x16","packUnorm2x16","unpackUnorm2x16","packHalf2x16","unpackHalf2x16","outerProduct","transpose","determinant","inverse","texture","textureSize","textureProj","textureLod","textureOffset","texelFetch","texelFetchOffset","textureProjOffset","textureLodOffset","textureProjLod","textureProjLodOffset","textureGrad","textureGradOffset","textureProjGrad","textureProjGradOffset"]}).apply(null, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

/***/ })

}]);
//# sourceMappingURL=5.js.map