/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"runtime": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"common":"common"}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	(function() { /* Start undefined extensions */
/******/ 			function mix(dest, src) { // eslint-disable-line no-unused-vars
/******/ 				for(var n in src) dest[n] = src[n];
/******/ 				return dest;
/******/ 			}
/******/
/******/ 			function toUrl(name, referenceModule) {
/******/ 				return loaderScope.require.toUrl(name, referenceModule);
/******/ 			}
/******/
/******/ 			function toAbsMid(name, referenceModule) {
/******/ 				return loaderScope.require.toAbsMid(name, referenceModule);
/******/ 			}
/******/
/******/ 			// dojo require function.
/******/ 			function req(config, dependencies, callback) {
/******/ 				return contextRequire(config, dependencies, callback, 0, req);
/******/ 			};
/******/
/******/ 			function createContextRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 				if (req.absMidsById[moduleId]) {
/******/ 					moduleId = req.absMidsById[moduleId];
/******/ 				}
/******/ 				if (!moduleId) return req;
/******/ 				var result = function(a1, a2, a3) {
/******/ 					return contextRequire(a1, a2, a3, moduleId, req);
/******/ 				};
/******/ 				for (var p in req) {
/******/ 					if (req.hasOwnProperty(p)) {
/******/ 						result[p] = req[p];
/******/ 					}
/******/ 				}
/******/ 				result.toUrl = function(name) {
/******/ 					return toUrl(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/ 				result.toAbsMid = function(name) {
/******/ 					return toAbsMid(name, moduleId ? {mid: moduleId} : null);
/******/ 				};
/******/
/******/ 				if (req.undef) {
/******/ 					result.undef = function(mid) {
/******/ 						req.undef(mid, moduleId);
/******/ 					};
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function registerAbsMids(absMids) { // eslint-disable-line no-unused-vars
/******/ 				for (var s in absMids) {
/******/ 					req.absMids[s] = absMids[s];
/******/ 					if (!req.absMidsById[absMids[s]]) {
/******/ 						req.absMidsById[absMids[s]] = s;
/******/ 					}
/******/ 				}
/******/ 			}
/******/
/******/ 			function resolveTernaryHasExpression(expr) { // eslint-disable-line no-unused-vars
/******/ 				// Expects an expression of the form supported by dojo/has.js loader, except that module identifiers are
/******/ 				// integers corresponding to webpack module ids.  Returns a module reference if evaluation of the expression
/******/ 				// using the currently defined features returns a module id, or else undefined.
/******/
/******/ 				var has = findModule("dojo/has", null, false);
/******/ 				var id = has.normalize(expr, function(arg){return arg;});
/******/ 				return id && __webpack_require__(id) || undefined;
/******/ 			}
/******/
/******/ 			function findModule(mid, referenceModule, noInstall, asModuleObj) {
/******/ 				mid = mid.split("!").map(function(segment) {
/******/ 					var isRelative = segment.charAt(0) === '.';
/******/ 					if(isRelative && !referenceModule){
/******/ 						return segment;
/******/ 					}
/******/ 					return toAbsMid(segment, referenceModule ? {mid: referenceModule} : null);
/******/ 				}).join("!");
/******/ 				var result;
/******/ 				if (mid in req.absMids && __webpack_require__.m[req.absMids[mid]]) {
/******/ 					if (noInstall) {
/******/ 						var module = installedModules[req.absMids[mid]];
/******/ 						result = module && module.l && (asModuleObj ? module : module.exports);
/******/ 					} else {
/******/ 						result = __webpack_require__(req.absMids[mid]);
/******/ 					}
/******/ 				}
/******/ 				if (!result) {
/******/ 					throw new Error('Module not found: ' + mid);
/******/ 				}
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function dojoModuleFromWebpackModule(webpackModule) { // eslint-disable-line no-unused-vars
/******/ 				var result = {i:webpackModule.i};
/******/ 				var id = req.absMidsById[webpackModule.i];
/******/ 				if (id) {
/******/ 					result.id = id;
/******/ 				}
/******/ 				Object.defineProperty(result, "exports", {
/******/ 					get: function() { return webpackModule.exports;},
/******/ 					set: function(value) {webpackModule.exports = value;},
/******/ 					enumerable: true,
/******/ 					configurable: true
/******/ 				});
/******/ 				return result;
/******/ 			}
/******/
/******/ 			function contextRequire(a1, a2, a3, referenceModule, req) { // eslint-disable-line no-shadow
/******/ 				var type = ({}.toString).call(a1);
/******/ 				if (type === '[object String]') {
/******/ 					// a3 is passed by require calls injected into dependency arrays for dependencies specified
/******/ 					// as identifiers (vs. string literals).
/******/ 					var noInstall = !(a3 === false);
/******/ 					var m = findModule(a1, referenceModule, noInstall);
/******/ 					if (typeof m === 'object' && m.__DOJO_WEBPACK_DEFINE_PROMISE__) {
/******/ 						throw new Error('Module not found: ' + a1);
/******/ 					}
/******/ 					return m;
/******/ 				} else if (type === '[object Object]') {
/******/ 					throw new Error('Require config is not supported by WebPack');
/******/ 				}
/******/ 				if (type === '[object Array]') {
/******/ 					var modules = [], callback = a2, errors = [];
/******/ 					a1.forEach(function (mid) {
/******/ 						try {
/******/ 							modules.push(findModule(mid, referenceModule));
/******/ 						} catch (e) {
/******/ 							errors.push({mid: mid, error: e});
/******/ 						}
/******/ 					});
/******/ 					if (errors.length === 0) {
/******/ 						if (callback) {
/******/ 							if (false && isDefinePromise(modules)) { // eslint-disable-line no-undef
/******/ 								Promise.all(wrapPromises(modules)).then(function(deps) { // eslint-disable-line no-undef
/******/ 									callback.apply(this, unwrapPromises(deps)); // eslint-disable-line no-undef
/******/ 								}.bind(this)).catch(function(err){console.error(err);});
/******/ 							} else {
/******/ 								callback.apply(this, modules);
/******/ 							}
/******/ 						}
/******/ 					} else {
/******/ 						var error = new Error("findModules");
/******/ 						error.src = "dojo-webpack-plugin";
/******/ 						error.info = errors;
/******/ 						req.signal("error", error);
/******/ 					}
/******/ 					return req;
/******/ 				} else {
/******/ 					throw new Error('Unsupported require call');
/******/ 				}
/******/ 			}
/******/ 			req.toUrl = toUrl;
/******/ 			req.toAbsMid = toAbsMid;
/******/ 			req.absMids = {};
/******/ 			req.absMidsById = [];
/******/ 			req.async = 1;
/******/ 		var globalObj = this||window;
/******/ 		registerAbsMids({
/******/ 			// "/home/runner/work/MapMyProperty/MapMyProperty/node_modules/@arcgis/webpack-plugin/loader/dojo.js" = "./node_modules/@arcgis/webpack-plugin/loader/dojo.js"
/******/ 		});
/******/
/******/ 		globalObj.require = req;
/******/ 			(this||window)["webpackJsonp"].registerAbsMids = registerAbsMids;
/******/
/******/ 		// expose the Dojo compatibility functions as a properties of __webpack_require__
/******/ 		if (__webpack_require__.dj) throw new Error("__webpack_require__.dj name collision.")
/******/ 		__webpack_require__.dj = {
/******/ 			r: req,
/******/ 			c: createContextRequire,
/******/ 			m: dojoModuleFromWebpackModule,
/******/ 			h: resolveTernaryHasExpression,
/******/ 		};
/******/ 		var loaderScope = {document:globalObj.document};
/******/ 		loaderScope.global = loaderScope.window = loaderScope;
/******/ 		globalObj.dojoConfig = globalObj.dojoConfig || {}
/******/ 		var userConfig = mix(globalObj.dojoConfig, ({'baseUrl':'.','packages':[({'name':'esri','location':'./arcgis-js-api','main':'kernel'}),({'name':'@dojo','location':'./@dojo','lib':'.'}),({'name':'cldrjs','location':'./cldrjs','main':'dist/cldr'}),({'name':'globalize','location':'./globalize','main':'dist/globalize'}),({'name':'tslib','location':'./tslib','main':'tslib'}),({'name':'moment','location':'./moment','main':'moment','lib':'.'}),({'name':'dojo','location':'./dojo','lib':'.'}),({'name':'dijit','location':'./dijit','lib':'.'}),({'name':'dojox','location':'./dojox','lib':'.'}),({'name':'dstore','location':'./dojo-dstore','lib':'.'}),({'name':'maquette','location':'./maquette','main':'dist/maquette.umd','resourceTags':({'miniExclude':(function(filename, mid) {
/******/ 		            return (
/******/ 		              mid.indexOf("/polyfills/") > -1 ||
/******/ 		              (mid.indexOf("/dist/") > -1 &&
/******/ 		                filename.indexOf(".umd.js") === -1)
/******/ 		            );
/******/ 		          })})}),({'name':'maquette-css-transitions','location':'./maquette-css-transitions','main':'dist/maquette-css-transitions.umd','resourceTags':({'miniExclude':(function(filename, mid) {
/******/ 		            return (
/******/ 		              mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1
/******/ 		            );
/******/ 		          })})}),({'name':'maquette-jsx','location':'./maquette-jsx','main':'dist/maquette-jsx.umd','resourceTags':({'miniExclude':(function(filename, mid) {
/******/ 		            return (
/******/ 		              mid.indexOf("/dist/") > -1 && filename.indexOf(".umd.js") === -1
/******/ 		            );
/******/ 		          })})})],'map':({'globalize':({'cldr':'cldrjs/dist/cldr','cldr/event':'cldrjs/dist/cldr/event','cldr/supplemental':'cldrjs/dist/cldr/supplemental','cldr/unresolved':'cldrjs/dist/cldr/unresolved'})}),'async':true,'has':({'config-deferredInstrumentation':1,'dojo-config-api':0,'esri-promise-compatibility':1,'esri-webpack':1})}));
/******/ 		var defaultConfig = ({'hasCache':({'webpack':1,'host-browser':1,'dom':1,'dojo-loader':1,'dojo-has-api':1,'dojo-dom-ready-api':1,'dojo-sniff':1,'dojo-test-sniff':1,'config-deferredInstrumentation':1,'config-tlmSiblingOfDojo':1})});
/******/ 		var dojoLoader = __webpack_require__("./node_modules/@arcgis/webpack-plugin/loader/dojo.js");
/******/ 		dojoLoader.call(loaderScope, userConfig, defaultConfig, loaderScope, loaderScope);
/******/ 		Object.keys(loaderScope.require.packs).forEach(function(key) {
/******/ 			var pkg = loaderScope.require.packs[key];
/******/ 			if ((/(^\/)|(\:)/.test(pkg.main)	// main path is absolute
/******/ 			    || pkg.main.split('/').reduce(function(acc, pathComp) {
/******/ 						if (acc < 0 || pathComp === '.') return acc;
/******/ 						return (pathComp === '..' ? --acc : ++acc);
/******/ 					}, 0) <= 0) // main path is outside package
/******/ 					&& typeof pkg.realMain === 'undefined'	// hasn't already been adjusted
/******/ 			) {
/******/ 				pkg.realMain = pkg.main;
/******/ 				pkg.main = '';
/******/ 			}
/******/ 		});
/******/ 		function toAbsMid(name, referenceModule) {
/******/ 			var absMid = loaderScope.require.originalToAbsMid(name, referenceModule);
/******/ 			if (absMid.indexOf('/') === absMid.length-1) {
/******/ 				var pkgName = absMid.substring(0, absMid.length-1);
/******/ 				var pkg = loaderScope.require.packs[pkgName];
/******/ 				if (pkg && pkg.realMain) {
/******/ 					absMid = pkgName;
/******/ 				}
/******/ 			}
/******/ 			return absMid;
/******/ 		}
/******/ 		function toUrl(name, referenceModule) {
/******/ 			var url = loaderScope.require.originalToUrl(name, referenceModule);
/******/ 			var pkg = loaderScope.require.packs[name];
/******/ 			if (pkg && pkg.realMain) {
/******/ 				var parts = url.split('?');
/******/ 				if (/(^\/)|(\:)/.test(pkg.realMain)) {
/******/ 					// absolute URL
/******/ 					parts[0] = pkg.realMain;
/******/ 				} else {
/******/ 					// relative URL
/******/ 					parts[0] = parts[0] + '/' + pkg.realMain;
/******/ 				}
/******/ 				url = parts.join('?');
/******/ 			}
/******/ 			return url;
/******/ 		}
/******/ 		loaderScope.require.originalToAbsMid = loaderScope.require.toAbsMid;
/******/ 		loaderScope.require.originalToUrl = loaderScope.require.toUrl;
/******/ 		loaderScope.require.toAbsMid = toAbsMid;
/******/ 		loaderScope.require.toUrl = toUrl;
/******/ 		['baseUrl','has','rawConfig','on','signal'].forEach(function(name) {req[name] = loaderScope.require[name]})
/******/ 	})(); /* End undefined extensions */
/******/
/******/ 	// run deferred modules from other chunks
/******/ 	checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@arcgis/webpack-plugin/loader/dojo.js":
/*!************************************************************!*\
  !*** ./node_modules/@arcgis/webpack-plugin/loader/dojo.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(userConfig, defaultConfig, global, window) { this.loaderVersion = "1.14.2"; (function(
	userConfig,
	defaultConfig
){
	// summary:
	//		This is the "source loader" and is the entry point for Dojo during development. You may also load Dojo with
	//		any AMD-compliant loader via the package main module dojo/main.
	// description:
	//		This is the "source loader" for Dojo. It provides an AMD-compliant loader that can be configured
	//		to operate in either synchronous or asynchronous modes. After the loader is defined, dojo is loaded
	//		IAW the package main module dojo/main. In the event you wish to use a foreign loader, you may load dojo as a package
	//		via the package main module dojo/main and this loader is not required; see dojo/package.json for details.
	//
	//		In order to keep compatibility with the v1.x line, this loader includes additional machinery that enables
	//		the dojo.provide, dojo.require et al API. This machinery is loaded by default, but may be dynamically removed
	//		via the has.js API and statically removed via the build system.
	//
	//		This loader includes sniffing machinery to determine the environment; the following environments are supported:
	//
	//		- browser
	//		- node.js
	//		- rhino
	//
	//		This is the so-called "source loader". As such, it includes many optional features that may be discarded by
	//		building a customized version with the build system.

	// Design and Implementation Notes
	//
	// This is a dojo-specific adaption of bdLoad, donated to the dojo foundation by Altoviso LLC.
	//
	// This function defines an AMD-compliant (http://wiki.commonjs.org/wiki/Modules/AsynchronousDefinition)
	// loader that can be configured to operate in either synchronous or asynchronous modes.
	//
	// Since this machinery implements a loader, it does not have the luxury of using a load system and/or
	// leveraging a utility library. This results in an unpleasantly long file; here is a road map of the contents:
	//
	//	 1. Small library for use implementing the loader.
	//	 2. Define the has.js API; this is used throughout the loader to bracket features.
	//	 3. Define the node.js and rhino sniffs and sniff.
	//	 4. Define the loader's data.
	//	 5. Define the configuration machinery.
	//	 6. Define the script element sniffing machinery and sniff for configuration data.
	//	 7. Configure the loader IAW the provided user, default, and sniffing data.
	//	 8. Define the global require function.
	//	 9. Define the module resolution machinery.
	//	10. Define the module and plugin module definition machinery
	//	11. Define the script injection machinery.
	//	12. Define the window load detection.
	//	13. Define the logging API.
	//	14. Define the tracing API.
	//	16. Define the AMD define function.
	//	17. Define the dojo v1.x provide/require machinery--so called "legacy" modes.
	//	18. Publish global variables.
	//
	// Language and Acronyms and Idioms
	//
	// moduleId: a CJS module identifier, (used for public APIs)
	// mid: moduleId (used internally)
	// packageId: a package identifier (used for public APIs)
	// pid: packageId (used internally); the implied system or default package has pid===""
	// pack: package is used internally to reference a package object (since javascript has reserved words including "package")
	// prid: plugin resource identifier
	// The integer constant 1 is used in place of true and 0 in place of false.
	//
	// The "foreign-loader" has condition is defined if another loader is being used (e.g. webpack) and this code is only
	// needed for resolving module identifiers based on the config.  In this case, only the functions require.toUrl and 
	// require.toAbsMid are supported.  The require and define functions are not supported.

	// define global
	var globalObject = (function(){
		if (typeof global !== 'undefined' && typeof global !== 'function') {
			// global spec defines a reference to the global object called 'global'
			// https://github.com/tc39/proposal-global
			// `global` is also defined in NodeJS
			return global;
		}
		else if (typeof window !== 'undefined') {
			// window is defined in browsers
			return window;
		}
		else if (typeof self !== 'undefined') {
			// self is defined in WebWorkers
			return self;
		}
		return this;
	})();

	// define a minimal library to help build the loader
	var noop = function(){
		},

		isEmpty = function(it){
			for(var p in it){
				return 0;
			}
			return 1;
		},

		toString = {}.toString,

		isFunction = function(it){
			return toString.call(it) == "[object Function]";
		},

		isString = function(it){
			return toString.call(it) == "[object String]";
		},

		isArray = function(it){
			return toString.call(it) == "[object Array]";
		},

		forEach = function(vector, callback){
			if(vector){
				for(var i = 0; i < vector.length;){
					callback(vector[i++]);
				}
			}
		},

		mix = function(dest, src){
			for(var p in src){
				dest[p] = src[p];
			}
			return dest;
		},

		makeError = function(error, info){
			return mix(new Error(error), {src:"dojoLoader", info:info});
		},

		uidSeed = 1,

		uid = function(){
			// Returns a unique identifier (within the lifetime of the document) of the form /_d+/.
			return "_" + uidSeed++;
		},

		// FIXME: how to doc window.require() api

		// this will be the global require function; define it immediately so we can start hanging things off of it
		req = function(
			config,		  //(object, optional) hash of configuration properties
			dependencies, //(array of commonjs.moduleId, optional) list of modules to be loaded before applying callback
			callback	  //(function, optional) lambda expression to apply to module values implied by dependencies
		){
			return contextRequire(config, dependencies, callback, 0, req);
		},

		// the loader uses the has.js API to control feature inclusion/exclusion; define then use throughout
		global = globalObject,

		doc = global.document,

		element = doc && doc.createElement("DiV"),

		has = req.has = function(name){
			return isFunction(hasCache[name]) ? (hasCache[name] = hasCache[name](global, doc, element)) : hasCache[name];
		},

		hasCache = has.cache = defaultConfig.hasCache;

	if (isFunction(userConfig)) {
		userConfig = userConfig(globalObject);
	}

	has.add = function(name, test, now, force){
		(hasCache[name]===undefined || force) && (hasCache[name] = test);
		return now && has(name);
	};

	 0 && false;
	if( 0 ){}

	 0 && false;
	if( 0 ){ var baseUrl, arg, rhinoArgs, i; }

	 0 && false;
	if( 0 ){}

	// userConfig has tests override defaultConfig has tests; do this after the environment detection because
	// the environment detection usually sets some has feature values in the hasCache.
	for(var p in userConfig.has){
		has.add(p, userConfig.has[p], 0, 1);
	}

	//
	// define the loader data
	//

	// the loader will use these like symbols if the loader has the traceApi; otherwise
	// define magic numbers so that modules can be provided as part of defaultConfig
	var requested = 1,
		arrived = 2,
		nonmodule = 3,
		executing = 4,
		executed = 5;

	if( 0 ){}

	var legacyMode = 0,
		sync = "sync",
		xd = "xd",
		syncExecStack = [],
		dojoRequirePlugin = 0,
		checkDojoRequirePlugin = noop,
		transformToAmd = noop,
		getXhr;
	if( 0 ){ var XMLHTTP_PROGIDS, progid, i, locationProtocol, locationHost; }else{
		req.async = 1;
	}

	//
	// loader eval
	//
	var eval_ =   1  ?
		// noop eval if there are csp restrictions
		function(){} :
		// use the function constructor so our eval is scoped close to (but not in) in the global space with minimal pollution
		undefined;

	req.eval =
		function(text, hint){
			return eval_(text + "\r\n//# sourceURL=" + hint);
		};

	//
	// loader micro events API
	//
	var listenerQueues = {},
		error = "error",
		signal = req.signal = function(type, args){
			var queue = listenerQueues[type];
			// notice we run a copy of the queue; this allows listeners to add/remove
			// other listeners without affecting this particular signal
			forEach(queue && queue.slice(0), function(listener){
				listener.apply(null, isArray(args) ? args : [args]);
			});
		},
		on = req.on = function(type, listener){
			// notice a queue is not created until a client actually connects
			var queue = listenerQueues[type] || (listenerQueues[type] = []);
			queue.push(listener);
			return {
				remove:function(){
					for(var i = 0; i<queue.length; i++){
						if(queue[i]===listener){
							queue.splice(i, 1);
							return;
						}
					}
				}
			};
		};

	// configuration machinery; with an optimized/built defaultConfig, all configuration machinery can be discarded
	// lexical variables hold key loader data structures to help with minification; these may be completely,
	// one-time initialized by defaultConfig for optimized/built versions
	var
		aliases
			// a vector of pairs of [regexs or string, replacement] => (alias, actual)
			= [],

		paths
			// CommonJS paths
			= {},

		pathsMapProg
			// list of (from-path, to-path, regex, length) derived from paths;
			// a "program" to apply paths; see computeMapProg
			= [],

		packs
			// a map from packageId to package configuration object; see fixupPackageInfo
			= {},

		map = req.map
			// AMD map config variable; dojo/_base/kernel needs req.map to figure out the scope map
			= {},

		mapProgs
			// vector of quads as described by computeMapProg; map-key is AMD map key, map-value is AMD map value
			= [],

		modules
			// A hash:(mid) --> (module-object) the module namespace
			//
			// pid: the package identifier to which the module belongs (e.g., "dojo"); "" indicates the system or default package
			// mid: the fully-resolved (i.e., mappings have been applied) module identifier without the package identifier (e.g., "dojo/io/script")
			// url: the URL from which the module was retrieved
			// pack: the package object of the package to which the module belongs
			// executed: 0 => not executed; executing => in the process of traversing deps and running factory; executed => factory has been executed
			// deps: the dependency vector for this module (vector of modules objects)
			// def: the factory for this module
			// result: the result of the running the factory for this module
			// injected: (0 | requested | arrived) the status of the module; nonmodule means the resource did not call define
			// load: plugin load function; applicable only for plugins
			//
			// Modules go through several phases in creation:
			//
			// 1. Requested: some other module's definition or a require application contained the requested module in
			//	  its dependency vector or executing code explicitly demands a module via req.require.
			//
			// 2. Injected: a script element has been appended to the insert-point element demanding the resource implied by the URL
			//
			// 3. Loaded: the resource injected in [2] has been evaluated.
			//
			// 4. Defined: the resource contained a define statement that advised the loader about the module. Notice that some
			//	  resources may just contain a bundle of code and never formally define a module via define
			//
			// 5. Evaluated: the module was defined via define and the loader has evaluated the factory and computed a result.
			= {},

		cacheBust
			// query string to append to module URLs to bust browser cache
			= "",

		cache
			// hash:(mid | url)-->(function | string)
			//
			// A cache of resources. The resources arrive via a config.cache object, which is a hash from either mid --> function or
			// url --> string. The url key is distinguished from the mid key by always containing the prefix "url:". url keys as provided
			// by config.cache always have a string value that represents the contents of the resource at the given url. mid keys as provided
			// by configl.cache always have a function value that causes the same code to execute as if the module was script injected.
			//
			// Both kinds of key-value pairs are entered into cache via the function consumePendingCache, which may relocate keys as given
			// by any mappings *iff* the config.cache was received as part of a module resource request.
			//
			// Further, for mid keys, the implied url is computed and the value is entered into that key as well. This allows mapped modules
			// to retrieve cached items that may have arrived consequent to another namespace.
			//
			 = {},

		urlKeyPrefix
			// the prefix to prepend to a URL key in the cache.
			= "url:",

		pendingCacheInsert
			// hash:(mid)-->(function)
			//
			// Gives a set of cache modules pending entry into cache. When cached modules are published to the loader, they are
			// entered into pendingCacheInsert; modules are then pressed into cache upon (1) AMD define or (2) upon receiving another
			// independent set of cached modules. (1) is the usual case, and this case allows normalizing mids given in the pending
			// cache for the local configuration, possibly relocating modules.
			 = {},

		dojoSniffConfig
			// map of configuration variables
			// give the data-dojo-config as sniffed from the document (if any)
			= {},

		insertPointSibling
			// the nodes used to locate where scripts are injected into the document
			= 0;

	if( 1 ){
		if (false ) { var consumePendingCacheInsert; }
		var escapeString = function(s){
				return s.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, function(c){ return "\\" + c; });
			},

			computeMapProg = function(map, dest){
				// This routine takes a map as represented by a JavaScript object and initializes dest, a vector of
				// quads of (map-key, map-value, refex-for-map-key, length-of-map-key), sorted decreasing by length-
				// of-map-key. The regex looks for the map-key followed by either "/" or end-of-string at the beginning
				// of a the search source. Notice the map-value is irrelevant to the algorithm
				dest.splice(0, dest.length);
				for(var p in map){
					dest.push([
						p,
						map[p],
						new RegExp("^" + escapeString(p) + "(\/|$)"),
						p.length]);
				}
				dest.sort(function(lhs, rhs){ return rhs[3] - lhs[3]; });
				return dest;
			},

			computeAliases = function(config, dest){
				forEach(config, function(pair){
					// take a fixed-up copy...
					dest.push([isString(pair[0]) ? new RegExp("^" + escapeString(pair[0]) + "$") : pair[0], pair[1]]);
				});
			},


			fixupPackageInfo = function(packageInfo){
				// calculate the precise (name, location, main, mappings) for a package
				var name = packageInfo.name;
				if(!name){
					// packageInfo must be a string that gives the name
					name = packageInfo;
					packageInfo = {name:name};
				}
				packageInfo = mix({main:"main"}, packageInfo);
				packageInfo.location = packageInfo.location ? packageInfo.location : name;

				// packageMap is deprecated in favor of AMD map
				if(packageInfo.packageMap){
					map[name] = packageInfo.packageMap;
				}

				if(!packageInfo.main.indexOf("./")){
					packageInfo.main = packageInfo.main.substring(2);
				}

				// now that we've got a fully-resolved package object, push it into the configuration
				packs[name] = packageInfo;
			},

			delayedModuleConfig
				// module config cannot be consumed until the loader is completely initialized; therefore, all
				// module config detected during booting is memorized and applied at the end of loader initialization
				// TODO: this is a bit of a kludge; all config should be moved to end of loader initialization, but
				// we'll delay this chore and do it with a final loader 1.x cleanup after the 2.x loader prototyping is complete
				= [],


			config = function(config, booting, referenceModule){
				for(var p in config){
					if(p=="waitSeconds"){
						req.waitms = (config[p] || 0) * 1000;
					}
					if(p=="cacheBust"){
						cacheBust = config[p] ? (isString(config[p]) ? config[p] : (new Date()).getTime() + "") : "";
					}
					if(p=="baseUrl" || p=="combo"){
						req[p] = config[p];
					}
					if( false){ var mode; }
					if(config[p]!==hasCache){
						// accumulate raw config info for client apps which can use this to pass their own config
						req.rawConfig[p] = config[p];
						p!="has" && has.add("config-"+p, config[p], 0, booting);
					}
				}

				// make sure baseUrl exists
				if(!req.baseUrl){
					req.baseUrl = "./";
				}
				// make sure baseUrl ends with a slash
				if(!/\/$/.test(req.baseUrl)){
					req.baseUrl += "/";
				}

				// now do the special work for has, packages, packagePaths, paths, aliases, and cache

				for(p in config.has){
					has.add(p, config.has[p], 0, booting);
				}

				// for each package found in any packages config item, augment the packs map owned by the loader
				forEach(config.packages, fixupPackageInfo);

				// for each packagePath found in any packagePaths config item, augment the packageConfig
				// packagePaths is deprecated; remove in 2.0
				for(var baseUrl in config.packagePaths){
					forEach(config.packagePaths[baseUrl], function(packageInfo){
						var location = baseUrl + "/" + packageInfo;
						if(isString(packageInfo)){
							packageInfo = {name:packageInfo};
						}
						packageInfo.location = location;
						fixupPackageInfo(packageInfo);
					});
				}

				// notice that computeMapProg treats the dest as a reference; therefore, if/when that variable
				// is published (see dojo-publish-privates), the published variable will always hold a valid value.

				// this must come after all package processing since package processing may mutate map
				computeMapProg(mix(map, config.map), mapProgs);
				forEach(mapProgs, function(item){
					item[1] = computeMapProg(item[1], []);
					if(item[0]=="*"){
						mapProgs.star = item;
					}
				});

				// push in any paths and recompute the internal pathmap
				computeMapProg(mix(paths, config.paths), pathsMapProg);

				// aliases
				computeAliases(config.aliases, aliases);

				if (false ) { var module; }
				signal("config", [config, req.rawConfig]);
			};

		//
		// execute the various sniffs; userConfig can override and value
		//

		if( false ){ var scripts, i, script, dojoDir, src, match; }

		if( 0 ){ var doh; }

		// configure the loader; let the user override defaults
		req.rawConfig = {};
		config(defaultConfig, 1);

		// do this before setting userConfig/sniffConfig to allow userConfig/sniff overrides
		if( 0 ){}

		config(userConfig, 1);
		config(dojoSniffConfig, 1);

	}else{}


	if (false ) { var injectDependencies, contextRequire, createRequire, execQ, defQ, waiting, setRequested, setArrived, execComplete, comboPending, combosPending, comboPendingTimer; }

	var runMapProg = function(targetMid, map){
			// search for targetMid in map; return the map item if found; falsy otherwise
			if(map){
			for(var i = 0; i < map.length; i++){
				if(map[i][2].test(targetMid)){
					return map[i];
				}
			}
			}
			return 0;
		},

		compactPath = function(path){
			var result = [],
				segment, lastSegment;
			path = path.replace(/\\/g, '/').split('/');
			while(path.length){
				segment = path.shift();
				if(segment==".." && result.length && lastSegment!=".."){
					result.pop();
					lastSegment = result[result.length - 1];
				}else if(segment!="."){
					result.push(lastSegment= segment);
				} // else ignore "."
			}
			return result.join("/");
		},

		makeModuleInfo = function(pid, mid, pack, url){
			if( 0 ){ var xd; }else{
				return {pid:pid, mid:mid, pack:pack, url:url, executed:0, def:0};
			}
		},

		getModuleInfo_ = function(mid, referenceModule, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate, fromPendingCache){
			// arguments are passed instead of using lexical variables so that this function my be used independent of the loader (e.g., the builder)
			// alwaysCreate is useful in this case so that getModuleInfo never returns references to real modules owned by the loader
			var pid, pack, midInPackage, mapItem, url, result, isRelative, requestedMid;
			requestedMid = mid;
			isRelative = /^\./.test(mid);
			if(/(^\/)|(\:)|(\.js$)/.test(mid) || (isRelative && !referenceModule)){
				// absolute path or protocol of .js filetype, or relative path but no reference module and therefore relative to page
				// whatever it is, it's not a module but just a URL of some sort
				// note: pid===0 indicates the routine is returning an unmodified mid

				return makeModuleInfo(0, mid, 0, mid);
			}else{
				// relative module ids are relative to the referenceModule; get rid of any dots
				mid = compactPath(isRelative ? (referenceModule.mid + "/../" + mid) : mid);
				if(/^\./.test(mid)){
					throw makeError("irrationalPath", mid);
				}
				// at this point, mid is an absolute mid

				// map the mid
				if(!fromPendingCache && !isRelative && mapProgs.star){
					mapItem = runMapProg(mid, mapProgs.star[1]);
				}
				if(!mapItem && referenceModule){
					mapItem = runMapProg(referenceModule.mid, mapProgs);
					mapItem = mapItem && runMapProg(mid, mapItem[1]);
				}

				if(mapItem){
					mid = mapItem[1] + mid.substring(mapItem[3]);
					}

				match = mid.match(/^([^\/]+)(\/(.+))?$/);
				pid = match ? match[1] : "";
				if((pack = packs[pid])){
					mid = pid + "/" + (midInPackage = (match[3] || pack.main));
				}else{
					pid = "";
				}

				// search aliases
				var candidateLength = 0,
					candidate = 0;
				forEach(aliases, function(pair){
					var match = mid.match(pair[0]);
					if(match && match.length>candidateLength){
						candidate = isFunction(pair[1]) ? mid.replace(pair[0], pair[1]) : pair[1];
					}
				});
				if(candidate){
					return getModuleInfo_(candidate, 0, packs, modules, baseUrl, mapProgs, pathsMapProg, aliases, alwaysCreate);
				}

				result = modules[mid];
				if(result){
					return alwaysCreate ? makeModuleInfo(result.pid, result.mid, result.pack, result.url) : modules[mid];
				}
			}
			// get here iff the sought-after module does not yet exist; therefore, we need to compute the URL given the
			// fully resolved (i.e., all relative indicators and package mapping resolved) module id

			// note: pid!==0 indicates the routine is returning a url that has .js appended unmodified mid
			mapItem = runMapProg(mid, pathsMapProg);
			if(mapItem){
				url = mapItem[1] + mid.substring(mapItem[3]);
			}else if(pid){
				url = (pack.location.slice(-1) === '/' ? pack.location.slice(0, -1) : pack.location) + "/" + midInPackage;
			}else if( 0 ){}else{
				url = mid;
			}
			// if result is not absolute, add baseUrl
			if(!(/(^\/)|(\:)/.test(url))){
				url = baseUrl + url;
			}
			url += ".js";
			return makeModuleInfo(pid, mid, pack, compactPath(url));
		},

		getModuleInfo = function(mid, referenceModule, fromPendingCache){
			return getModuleInfo_(mid, referenceModule, packs, modules, req.baseUrl, mapProgs, pathsMapProg, aliases, undefined, fromPendingCache);
		};

	if (false ) { var resolvePluginResourceId, dynamicPluginUidGenerator, getModule; }

	var toAbsMid = req.toAbsMid = function(mid, referenceModule){
			return getModuleInfo(mid, referenceModule).mid;
		},

		toUrl = req.toUrl = function(name, referenceModule){
			var moduleInfo = getModuleInfo(name+"/x", referenceModule),
				url= moduleInfo.url;
			return fixupUrl(moduleInfo.pid===0 ?
				// if pid===0, then name had a protocol or absolute path; either way, toUrl is the identify function in such cases
				name :
				// "/x.js" since getModuleInfo automatically appends ".js" and we appended "/x" to make name look like a module id
				url.substring(0, url.length-5)
			);
		};

	if (false ) { var nonModuleProps, makeCjs, cjsRequireModule, cjsExportsModule, cjsModuleModule, runFactory, abortExec, defOrder, promoteModuleToPlugin, resolvePluginLoadQ, finishExec, circleTrace, execModule, checkCompleteGuard, guardCheckComplete, checkComplete; }

	var fixupUrl= typeof userConfig.fixupUrl == "function" ? userConfig.fixupUrl : function(url){
			url += ""; // make sure url is a Javascript string (some paths may be a Java string)
			return url + (cacheBust ? ((/\?/.test(url) ? "&" : "?") + cacheBust) : "");
		};



	if( 0 ){}

	if( false ){ var injectPlugin, cached, injectingModule, injectingCachedModule, evalModuleText, injectModule, defineModule, runDefQ; }

	var timerId = 0,
		clearTimer = noop,
		startTimer = noop;
	if( 0 ){}

	if ( 0 ) {}

	if( false){ var scripts, i, script, domOn, windowOnLoadListener; }

	if( 0 ){}else{
		req.log = noop;
	}

	if( 0 ){ var trace; }else{
		req.trace = noop;
	}
	if (false ) { var def; } else {
		var def = noop;
	}
	// allow config to override default implementation of named functions; this is useful for
	// non-browser environments, e.g., overriding injectUrl, getText, log, etc. in node.js, Rhino, etc.
	// also useful for testing and monkey patching loader
	mix(mix(req, defaultConfig.loaderPatch), userConfig.loaderPatch);

	// now that req is fully initialized and won't change, we can hook it up to the error signal
	on(error, function(arg){
		try{
			console.error(arg);
			if(arg instanceof Error){
				for(var p in arg){
					console.log(p + ":", arg[p]);
				}
				console.log(".");
			}
		}catch(e){}
	});

	// always publish these
	mix(req, {
		uid:uid,
		cache:cache,
		packs:packs
	});


	if( 0 ){}

	// the loader can be defined exactly once; look for global define which is the symbol AMD loaders are
	// *required* to define (as opposed to require, which is optional)
	if(global.define){
		if( 0 ){}
		return;
	}else{
		global.define = def;
		global.require = req;
		if( 0 ){}
	}

	if( false){ var plugins, pluginName; }

	if( false ){ var bootDeps, bootCallback; }
	if(false ){}
})
.call(this, userConfig, defaultConfig);};

/***/ })

/******/ });
//# sourceMappingURL=runtime.js.map