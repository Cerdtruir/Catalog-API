/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  margin: 0;\\n}\\n\\nheader {\\n  display: flex;\\n  padding: 0 30px;\\n  background: black;\\n  color: white;\\n}\\n\\n.header-h2 {\\n  margin-right: auto;\\n  align-self: center;\\n}\\n\\nnav {\\n  flex-direction: column;\\n  display: flex;\\n  align-items: flex-end;\\n  align-self: center;\\n  width: 100%;\\n}\\n\\n.nav-item {\\n  cursor: pointer;\\n}\\n\\n.hamburger {\\n  font-size: 20px;\\n  cursor: pointer;\\n}\\n\\n.ul-show {\\n  display: flex !important;\\n}\\n\\n.ul {\\n  display: none;\\n  flex-direction: column;\\n  padding: 0;\\n  font-size: larger;\\n  list-style: none;\\n  gap: 20px;\\n  height: 100%;\\n}\\n\\nli {\\n  align-self: flex-start;\\n}\\n\\na {\\n  color: white;\\n}\\n\\n#main {\\n  margin: 20px auto;\\n  width: 80%;\\n  display: grid;\\n  grid-template-columns: 100%;\\n  grid-template-rows: auto;\\n  row-gap: 30px;\\n}\\n\\n.recipe-block {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.recipe-image {\\n  width: 30vh;\\n  height: 30vh;\\n}\\n\\n.text-container {\\n  display: flex;\\n  align-items: center;\\n  width: 90%;\\n}\\n\\n.recipe-heading {\\n  margin-right: auto;\\n}\\n\\n.heart {\\n  color: red;\\n  font-size: 30px;\\n  cursor: pointer;\\n}\\n\\n.recipe-button {\\n  width: 50%;\\n  height: 40px;\\n  background-color: white;\\n  font-weight: 700;\\n  cursor: pointer;\\n}\\n\\n.recipe-details {\\n  background-color: white;\\n  display: flex;\\n  position: fixed;\\n  z-index: 1;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  width: 65%;\\n  height: 90%;\\n  align-items: center;\\n  flex-direction: column;\\n  overflow: auto;\\n  gap: 10px;\\n  padding: 30px;\\n  border: 2px black solid;\\n}\\n\\n.recipe-details-hide {\\n  display: none;\\n}\\n\\n.recipe-modal-image {\\n  height: 20%;\\n}\\n\\n.close-modal {\\n  position: fixed;\\n  top: 0;\\n  left: 96%;\\n  cursor: pointer;\\n}\\n\\n.recipe-details > h2 {\\n  margin: 0;\\n}\\n\\n.recipe-modal-ingredients {\\n  display: grid;\\n  width: 80%;\\n  grid-template-columns: 100%;\\n  grid-template-rows: auto;\\n  gap: 10px;\\n}\\n\\n.comments {\\n  width: 100%;\\n  display: flex;\\n  justify-content: center;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\nform {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n}\\n\\ntextarea {\\n  height: 50px;\\n  resize: none;\\n}\\n\\n.comments-list {\\n  display: flex;\\n  flex-flow: row wrap;\\n  list-style: none;\\n  padding: 0;\\n  gap: 10px;\\n  width: 100%;\\n  justify-content: center;\\n}\\n\\n.comment-list-item {\\n  border: 1px black solid;\\n  width: 200px;\\n  text-align: center;\\n}\\n\\nfooter {\\n  display: flex;\\n  justify-content: center;\\n  gap: 10%;\\n  color: white;\\n  background-color: black;\\n}\\n\\n@media screen and (min-width: 700px) {\\n  #main {\\n    grid-template-columns: 50% 50%;\\n  }\\n\\n  nav {\\n    margin-left: auto;\\n    display: flex;\\n    align-items: center;\\n    width: auto;\\n  }\\n\\n  .ul {\\n    display: flex;\\n    flex-direction: row;\\n  }\\n\\n  .hamburger {\\n    display: none;\\n  }\\n\\n  .recipe-modal-ingredients {\\n    grid-template-columns: 50% 50%;\\n  }\\n}\\n\\n@media screen and (min-width: 1000px) {\\n  #main {\\n    grid-template-columns: 33.33% 33.33% 33.33%;\\n  }\\n\\n  .recipe-modal-ingredients {\\n    grid-template-columns: 33%  33%  33%;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-demo/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-demo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/counter.js":
/*!************************!*\
  !*** ./src/counter.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderCountofMeals),\n/* harmony export */   \"updateCounter\": () => (/* binding */ updateCounter)\n/* harmony export */ });\nfunction renderCountofMeals(mealsArray, pageClass) {\n  const amountOfItems = mealsArray.length;\n  if (!document.body.querySelector(`.nav-${pageClass}`).innerText.includes(')')) {\n    document.body.querySelector(`.nav-${pageClass}`).append(` (${amountOfItems})`);\n  }\n  return amountOfItems;\n}\n\nfunction updateCounter(commentsArray) {\n  document.body.querySelector('.comments-heading').innerText = 'Comments';\n  const counter = commentsArray.length;\n  document.body.querySelector('.comments-heading').append(` (${counter})`);\n  return counter;\n}\n\n\n//# sourceURL=webpack://webpack-demo/./src/counter.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _counter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./counter.js */ \"./src/counter.js\");\n\n\n\nasync function get(category) {\n  const response = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`,\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse.meals;\n}\n\nasync function getRecipeInfo(id) {\n  const response = await fetch(\n    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse.meals[0];\n}\n\nasync function postLikeAPI(itemID, heart, likeCounterNumber) {\n  const currentValue = Number(likeCounterNumber.innerText);\n  if (heart.innerHTML === '???') {\n    heart.innerHTML = '&#10084;';\n    likeCounterNumber.innerText = currentValue + 1;\n    await fetch(\n      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/likes',\n      {\n        method: 'POST',\n        body: JSON.stringify({\n          item_id: itemID,\n        }),\n        headers: {\n          'Content-type': 'application/json; charset=UTF-8',\n        },\n      },\n    );\n  }\n}\n\nasync function getLikeAPI() {\n  const response = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/likes',\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse;\n}\n\nasync function postCommentAPI(itemID, name, comment) {\n  await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/comments',\n    {\n      method: 'POST',\n      body: JSON.stringify({\n        item_id: itemID,\n        username: name,\n        comment,\n      }),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8',\n      },\n    },\n  );\n}\n\nasync function getCommentAPI(itemID) {\n  const response = await fetch(\n    `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gPGYyR5ezimXgm2rDsPh/comments?item_id=${itemID}`,\n  );\n  const jsonResponse = await response.json();\n  return jsonResponse;\n}\n\nfunction addCommentHTML(comment) {\n  const listItem = document.createElement('li');\n  listItem.classList.add('comment-list-item');\n  const commentName = document.createElement('p');\n  const commentText = document.createElement('p');\n  const commentDate = document.createElement('p');\n  commentName.innerText = `${comment.username}:`;\n  commentText.innerText = `${comment.comment}`;\n  commentDate.innerText = `${comment.creation_date}`;\n  listItem.append(commentName, commentText, commentDate);\n  document.body.querySelector('.comments-list').append(listItem);\n}\n\nasync function commentSection(id) {\n  document.body.querySelector('.comments-list').innerHTML = '';\n  const comments = await getCommentAPI(id);\n  if (Array.isArray(comments)) {\n    comments.forEach((comment) => {\n      addCommentHTML(comment);\n    });\n    (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.updateCounter)(comments);\n    return;\n  }\n  document.body.querySelector('.comments-heading').innerText = 'Comments';\n}\n\nasync function addComment(id) {\n  const name = document.body.querySelector('.form-name').value;\n  const comment = document.querySelector('.form-comment').value;\n  if (name === '' || comment === '') {\n    return;\n  }\n  await postCommentAPI(id, name, comment);\n  const commentsArray = await getCommentAPI(id);\n  const newComment = commentsArray[commentsArray.length - 1];\n  addCommentHTML(newComment);\n  (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__.updateCounter)(commentsArray);\n  document.body.querySelector('.form-name').value = '';\n  document.querySelector('.form-comment').value = '';\n}\n\nconst renderIngredients = (mealDetails) => {\n  for (let i = 1; i < 20; i += 1) {\n    const ingredients = document.createElement('li');\n    const ingredient = `strIngredient${i}`;\n    const measurement = `strMeasure${i}`;\n    if (mealDetails[ingredient] === '') {\n      return;\n    }\n    ingredients.innerText = `${mealDetails[measurement]} ${mealDetails[ingredient]}`;\n    document.body\n      .querySelector('.recipe-modal-ingredients')\n      .append(ingredients);\n  }\n};\n\nasync function renderRecipeSection(id) {\n  const mealDetails = await getRecipeInfo(id);\n  document.body\n    .querySelector('.recipe-details')\n    .classList.remove('recipe-details-hide');\n  document.body.querySelector('.recipe-modal-heading').innerText = mealDetails.strMeal;\n  document.body.querySelector('.recipe-modal-image').src = mealDetails.strMealThumb;\n  document.body.querySelector('.recipe-modal-instructions').innerText = mealDetails.strInstructions;\n  document.body.querySelector('.recipe-modal-ingredients').innerHTML = '';\n\n  renderIngredients(mealDetails);\n\n  document.body.querySelector('.add-comment-button').onclick = () => {\n    addComment(id);\n  };\n  commentSection(id);\n}\n\nconst renderMeals = (meals, likesArray, page) => {\n  meals.forEach((meal) => {\n    const id = meal.idMeal;\n\n    const recipeContainer = document.createElement('div');\n    recipeContainer.classList.add('recipe-block');\n\n    const image = document.createElement('img');\n    image.classList.add('recipe-image');\n    image.src = meal.strMealThumb;\n\n    document.body.querySelector('.close-modal').onclick = () => {\n      document.body\n        .querySelector('.recipe-details')\n        .classList.add('recipe-details-hide');\n    };\n\n    const textContainer = document.createElement('div');\n    textContainer.classList.add('text-container');\n\n    const likeCounterText = document.createElement('p');\n    likeCounterText.innerText = 'Likes: ';\n\n    const likeCounterNumber = document.createElement('p');\n    likeCounterNumber.classList.add('links-counter');\n    likesArray.forEach((like) => {\n      if (like.item_id === id) {\n        likeCounterNumber.innerText = like.likes;\n      }\n    });\n    if (likeCounterNumber.innerText === '') {\n      likeCounterNumber.innerText = 0;\n    }\n\n    const heart = document.createElement('p');\n    heart.classList.add('heart');\n    heart.innerHTML = '&#9825';\n    heart.onclick = () => {\n      postLikeAPI(id, heart, likeCounterNumber);\n    };\n\n    const name = document.createElement('h3');\n    name.classList.add('recipe-heading');\n    name.innerText = meal.strMeal;\n\n    const recipeButton = document.createElement('button');\n    recipeButton.classList.add('recipe-button');\n    recipeButton.innerText = 'Recipe';\n    recipeButton.onclick = () => {\n      renderRecipeSection(id);\n    };\n\n    textContainer.append(name, heart, likeCounterText, likeCounterNumber);\n    recipeContainer.append(image, textContainer, recipeButton);\n    page.appendChild(recipeContainer);\n  });\n};\n\nasync function generateRecipesPage(category) {\n  const page = document.getElementById('main');\n  const likesArray = await getLikeAPI();\n  const meals = await get(category);\n\n  page.innerHTML = '';\n\n  (0,_counter_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(meals, category);\n\n  renderMeals(meals, likesArray, page);\n}\n\ndocument.body.querySelector('.hamburger').onclick = () => {\n  document.body.querySelector('.ul').classList.toggle('ul-show');\n};\n\ngenerateRecipesPage('seafood');\n\ndocument.body.querySelector('.nav-seafood').onclick = () => {\n  generateRecipesPage('seafood');\n};\n\ndocument.body.querySelector('.nav-vegetarian').onclick = () => {\n  generateRecipesPage('vegetarian');\n};\n\ndocument.body.querySelector('.nav-chicken').onclick = () => {\n  generateRecipesPage('chicken');\n};\n\n\n//# sourceURL=webpack://webpack-demo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;