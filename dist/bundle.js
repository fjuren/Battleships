/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"h1, h2 {\\r\\n    text-align: center;\\r\\n}\\r\\n\\r\\n\\r\\n#player1Board, #player2Board {\\r\\n    position: relative;\\r\\n    display: inline-grid;\\r\\n    grid-template-columns: repeat(10, 2.8rem);\\r\\n    justify-content: center;\\r\\n}\\r\\n\\r\\n.p1-col, .p2-col {\\r\\n    display: grid;\\r\\n    grid-template-rows: repeat(10, 2.8rem);\\r\\n}\\r\\n\\r\\n.p1-row, .p2-row {\\r\\n    position: relative;\\r\\n    border: .125rem solid black;\\r\\n    background-color: white;\\r\\n}\\r\\n\\r\\n.attackingMove {\\r\\n    position:absolute;\\r\\n    left: .6rem;\\r\\n    top: .6rem;\\r\\n    border-radius: 200%;\\r\\n    width: 20px;\\r\\n    height: 20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleships/./src/styles/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleships/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleships/./src/styles/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleships/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/classes/gameboard.js":
/*!**********************************!*\
  !*** ./src/classes/gameboard.js ***!
  \**********************************/
/***/ ((module) => {

eval("// const {\r\n//     Carrier,\r\n//     Battleship,\r\n//     Cruiser,\r\n//     Submarine,\r\n//     Destroyer,\r\n//     AI_Carrier,\r\n//     AI_Battleship,\r\n//     AI_Cruiser,\r\n//     AI_Submarine,\r\n//     AI_Destroyer\r\n// } = require('../setup/createShips')\r\n// var playerShips = [];\r\n// playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);\r\n// var AIShips = [];\r\n// AIShips.push(AI_Carrier, AI_Battleship, AI_Cruiser, AI_Submarine, AI_Destroyer);\r\n\r\n// const playerOneBoard = require('../setup/playerOneGameboard')\r\n\r\n\r\nclass Gameboard {\r\n    constructor(playerBoard) {\r\n        this.playerBoard = playerBoard //ARRAY\r\n    }\r\n\r\n    // Ship number number bool -> Array\r\n    // Randomly selects a point on the board to place a ship\r\n    placeShip = (ship, index1, index2, isVertical) => {\r\n        if (!this.checkWallHit(ship, index1, index2, isVertical) || !this.checkOverlap(ship, index1, index2, isVertical)) {\r\n            // invalid ship placement\r\n            return false\r\n            // // if functionality is built to allow a user to place ship themselves, use this\r\n            // console.log(`Can't place ${ship.type}. Please find another spot`)\r\n        } else {\r\n            // ship starting position\r\n            this.playerBoard[index1][index2] = ship.type;\r\n            for (let i = 1; i < ship.length; i++) {\r\n                // direction\r\n                if (isVertical === true) {\r\n                    this.playerBoard[index1 + i][index2] = ship.type;\r\n                } else {\r\n                    this.playerBoard[index1][index2 + i] = ship.type;\r\n                }\r\n            }\r\n        }\r\n    };\r\n    // Ship number number bool -> bool\r\n    // Checks if the ship's board placement hits the wall\r\n    checkWallHit = (ship, index1, index2, isVertical) => {\r\n        if (isVertical === true) {\r\n            if (index1 + ship.length > 10) {\r\n                return false\r\n            } else {\r\n                return true\r\n            }\r\n        }\r\n        if (isVertical === false) {\r\n            if (index2 + ship.length > 10) {\r\n                return false\r\n            } else {\r\n                return true\r\n            }\r\n        }\r\n    }\r\n\r\n    // Ship number number bool -> bool\r\n    // Checks if the ship's board placement overlaps the placement of a previously placed ship\r\n    checkOverlap = (ship, index1, index2, isVertical) => {\r\n        var counter = 0\r\n        if (isVertical === true) {\r\n            for (let i = 0; i < ship.length; i++) {\r\n                if (this.playerBoard[index1 + i][index2] != null) {\r\n                    // invalid placement\r\n                    counter++\r\n                }\r\n            }\r\n        }\r\n        if (isVertical === false) {\r\n            for (let i = 0; i < ship.length; i++) {\r\n                if (this.playerBoard[index1][index2 + i] != null) {\r\n                    // invalid placement\r\n                    counter++\r\n                }\r\n            }\r\n        }\r\n        if (counter != 0) {\r\n            return false\r\n        } else {\r\n            return true\r\n        }\r\n    }\r\n    // number number ships-> ship hit OR this.playerBoard hit\r\n    // Records whether the shot hits a ship or misses a ship\r\n    receiveAttack = (index1, index2, ships) => {\r\n        var shipHit = []\r\n        // var shipName = \r\n        for (let i = 0; i < ships.length; i++) {\r\n            if (this.playerBoard[index1][index2] === ships[i]['type']) {\r\n                shipHit.push(ships[i])\r\n                break\r\n            }\r\n        }\r\n        if (shipHit[0] != null) {\r\n            return shipHit[0].hit([index1, index2])\r\n        } else {\r\n            return this.playerBoard[index1][index2] = \"X\"\r\n        }\r\n    }\r\n    // ship classes -> bool\r\n    // identifies whether the ship had enough direct hits and has sunk as a result, marking Ship.sunkStatus as true if so. \r\n    allShipsSunk = (ships) => {\r\n        var sunkShips = []\r\n\r\n        for (let i = 0; i < ships.length; i++) {\r\n            if (ships[i].sunkStatus == true && !sunkShips.includes(ships[i])) {\r\n                sunkShips.push(ships[i])\r\n            }\r\n        }\r\n        if (sunkShips.length == 5) {\r\n            return true // all ships have sunk\r\n        } else {\r\n            return false // not all ships have sunk\r\n        }\r\n    }\r\n\r\n    //\r\n    // clears the ships from the gameboard\r\n    clearBoard = () => {\r\n        this.playerBoard = [ \r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ],\r\n        [ null, null, null, null, null, null, null, null, null, null ] ]\r\n    }\r\n};\r\n\r\n// const game = new Gameboard(playerOneBoard)\r\n\r\n// game\r\n// game.placeShip(Carrier, 1, 1, true)\r\n// game\r\n\r\n// game.clearBoard()\r\n// game\r\n// game.checkOverlap(Cruiser, 1, 1, false)\r\n// // game.placeShip(Cruiser, 1, 1, false)\r\n// game.placeShip(AI_Cruiser, 1, 1, false)\r\n\r\n// game.receiveAttack(1, 1, AIShips)\r\n// AIShips\r\n// Ships\r\n// game.receiveAttack(1, 2)\r\n\r\n// Cruiser\r\n\r\nmodule.exports = Gameboard\n\n//# sourceURL=webpack://battleships/./src/classes/gameboard.js?");

/***/ }),

/***/ "./src/classes/players.js":
/*!********************************!*\
  !*** ./src/classes/players.js ***!
  \********************************/
/***/ ((module) => {

eval("// const playerOneBoard = require('../setup/playerOneGameboard'); // gameboard data\r\n// const playerTwoBoard = require('../setup/playerTwoGameboard')\r\n// const Gameboard = require('./gameboard') // Gameboard class\r\n\r\n// const p1Board = new Gameboard(playerOneBoard)\r\n// const p2Board = new Gameboard(playerTwoBoard)\r\n\r\n// const {Carrier, Battleship, Cruiser, Submarine, Destroyer} = require('../setup/createShips')\r\n// var playerShips = [];\r\n// playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);\r\n\r\n// Required for testing dumbAI in jest\r\n// var randomIndex1 =  7\r\n// var randomIndex2 =  3\r\n\r\n// variables used in dumbAIPlayer method\r\n// var randomIndex1 =  Math.floor(Math.random() * 10);\r\n// var randomIndex2 =  Math.floor(Math.random() * 10);\r\n\r\nclass Players {\r\n    constructor(name) {\r\n        this.name = name; // STRING\r\n        this.preventRepeatMove = []; // ARRAY\r\n    }\r\n\r\n    // number number gameboard(as the class) ships -> gameboard\r\n    // player takes an attacking move against opponent gameboard\r\n    playerAttack = (index1, index2, board, ships) => {\r\n        if (!this.checkRepeatedMove(index1, index2) == true) {\r\n            this.preventRepeatMove.push([index1, index2]);\r\n            return board.receiveAttack(index1, index2, ships);\r\n        } \r\n        else {\r\n            return false // move is invalid\r\n        }\r\n    }\r\n\r\n    // number number -> boolean\r\n    // helper function for playerAttack. Checks whether the attacking move was previously taken at specified coordinates\r\n    checkRepeatedMove = (index1, index2) => {\r\n        var counter = 0\r\n\r\n        for (let i = 0; i < this.preventRepeatMove.length; i++) {\r\n            if (this.preventRepeatMove[i][0] == index1 && this.preventRepeatMove[i][1] == index2) {\r\n                counter++\r\n            }\r\n        } \r\n        // console.log(counter)\r\n        if (counter != 0) {\r\n            return true // repeated move\r\n        } else {\r\n            return false // not a repeated move\r\n        }\r\n    }\r\n\r\n    // -> number number (attacking coordinates)\r\n    // automatated player attacking move using dumb/random logic. Allows for a 1 player game against an AI\r\n    dumbAIAttack = (randomIndex1, randomIndex2, board, ships) => {\r\n        while (this.playerAttack(randomIndex1,randomIndex2, board, ships) == false) {\r\n            randomIndex1 =  Math.floor(Math.random() * 10);\r\n            randomIndex2 =  Math.floor(Math.random() * 10); \r\n            return false\r\n        } \r\n        return this.playerAttack(randomIndex1, randomIndex2, board, ships)\r\n    }\r\n}\r\n\r\nmodule.exports = Players\r\n\r\n// const player1 = new Players(\"Fabian\", [])\r\n\r\n// player1.playerAttack(1,1, p1Board, Ships)\n\n//# sourceURL=webpack://battleships/./src/classes/players.js?");

/***/ }),

/***/ "./src/classes/ship.js":
/*!*****************************!*\
  !*** ./src/classes/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Ship {\r\n    constructor(type, length, availableHitLocation, sunkStatus) {\r\n        this.type = type; // STRING\r\n        this.length = length; // INT\r\n        this.availableHitLocation = availableHitLocation; // ARRAY\r\n        this.sunkStatus = sunkStatus; // BOOL\r\n    }\r\n\r\n    // INT -> INT\r\n    // Marks the given spot of the Ship as hit\r\n    hit = (incomingHit) => {\r\n        this.availableHitLocation.push(String(incomingHit));\r\n    };\r\n\r\n    // -> BOOL\r\n    // determines whether a ship is sunk based on its length and availableHitLocation\r\n    isSunk = () => {\r\n        if (this.length == this.availableHitLocation.length) {\r\n            this.sunkStatus = true;\r\n        } else {\r\n            this.sunkStatus = false;\r\n        }\r\n    };\r\n};\r\n\r\nmodule.exports = Ship\n\n//# sourceURL=webpack://battleships/./src/classes/ship.js?");

/***/ }),

/***/ "./src/gameflow_helpers/dumbAIMove.js":
/*!********************************************!*\
  !*** ./src/gameflow_helpers/dumbAIMove.js ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Gameboard = require('../classes/gameboard')\r\n// const Players = require('../classes/players');\r\nconst {stringToAIShip, stringToShip} = __webpack_require__(/*! ../gameflow_helpers/stringToShip */ \"./src/gameflow_helpers/stringToShip.js\")\r\nconst playerOneBoard = __webpack_require__(/*! ../setup/playerOneGameboard */ \"./src/setup/playerOneGameboard.js\")\r\nconst playerOneMove = __webpack_require__(/*! ../gameflow_helpers/playerOneMove */ \"./src/gameflow_helpers/playerOneMove.js\")\r\n// const humanGameboard = new Gameboard(playerOneBoard)\r\n// const player2_AI = new Players(\"Player 2 - AI\", [])\r\n\r\n// const {\r\n//     Carrier,\r\n//     Battleship,\r\n//     Cruiser,\r\n//     Submarine,\r\n//     Destroyer\r\n// } = require('../setup/createShips')\r\n\r\n// var playerShips = [];\r\n// playerShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer);\r\n\r\nvar randomIndex1 =  Math.floor(Math.random() * 10);\r\nvar randomIndex2 =  Math.floor(Math.random() * 10);\r\n// var randomIndex1 = 8\r\n// var randomIndex2 = 2\r\n\r\n// humanGameboard.placeShip(Cruiser, 5, 3, true)\r\n// humanGameboard.placeShip(Carrier, 1, 1, false)\r\n// humanGameboard.placeShip(Battleship, 8, 6, false)\r\n// humanGameboard.placeShip(Submarine, 2, 3, true)\r\n// humanGameboard.placeShip(Destroyer, 7, 5, false)\r\n\r\n// console.log(\"Dumb AI's turn\")\r\n// console.log(\"Dumb AI attacks at 2 1\")\r\nconst dumbAIMove = (randomIndex1, randomIndex2, board, ships) => {\r\n        // check if there's a winner (checkGameWinner.js)\r\n        player2_AI.dumbAIAttack(randomIndex1, randomIndex2, board, ships)\r\n        // ship hit by AI\r\n        if (playerOneBoard[randomIndex1][randomIndex2] != 'X') {\r\n            let hitShip = stringToShip(playerOneBoard[randomIndex1][randomIndex2])\r\n            console.log(`BOOM! You hit player 1's ${hitShip.type}`)\r\n            hitShip.isSunk()\r\n            // check if sunk\r\n            if (hitShip.sunkStatus) {\r\n                console.log(`AI sunk player 1's ${hitShip.type}`)\r\n                // was this the last ship to sink? `If so, it's game over\r\n                if (board.allShipsSunk(playerShips)) {\r\n                    console.log(\"Game over - GG\")\r\n                }\r\n            } else {\r\n                console.log('Human turn')\r\n                // human turn\r\n                playerOneMove\r\n            }\r\n\r\n        } else if (playerOneBoard[randomIndex1][randomIndex2] === 'X') {\r\n            console.log('Splash. You missed and made a big splash on the AI gameboard')\r\n            // human turn\r\n        } else {\r\n            console.log(\"error??\")\r\n        }\r\n    }\r\n    \r\nmodule.exports = dumbAIMove\r\n\r\n// dumbAIMove(2, 1, humanGameboard, playerShips)\r\n// dumbAIMove(1, 1, humanGameboard, playerShips)\r\n// dumbAIMove(1, 2, humanGameboard, playerShips)\r\n// dumbAIMove(1, 3, humanGameboard, playerShips)\r\n// dumbAIMove(1, 4, humanGameboard, playerShips)\r\n// dumbAIMove(1, 5, humanGameboard, playerShips)\r\n\r\n\r\n// dumbAIMove(5,3, humanGameboard, playerShips)\r\n// dumbAIMove(6,3, humanGameboard, playerShips)\r\n// dumbAIMove(7,3, humanGameboard, playerShips)\r\n\r\n// dumbAIMove(8,6, humanGameboard, playerShips)\r\n// dumbAIMove(8,7, humanGameboard, playerShips)\r\n// dumbAIMove(8,8, humanGameboard, playerShips)\r\n// dumbAIMove(8,9, humanGameboard, playerShips)\r\n\r\n// dumbAIMove(2,3, humanGameboard, playerShips)\r\n// dumbAIMove(3,3, humanGameboard, playerShips)\r\n// dumbAIMove(4,3, humanGameboard, playerShips)\r\n// dumbAIMove(5,2, humanGameboard, playerShips)\r\n\r\n// dumbAIMove(7,5, humanGameboard, playerShips)\r\n// dumbAIMove(7,6, humanGameboard, playerShips)\r\n\r\n// console.log(humanGameboard)\r\n// console.log(playerShips)\r\n\r\n// humanGameboard\r\n\n\n//# sourceURL=webpack://battleships/./src/gameflow_helpers/dumbAIMove.js?");

/***/ }),

/***/ "./src/gameflow_helpers/placeRandShips.js":
/*!************************************************!*\
  !*** ./src/gameflow_helpers/placeRandShips.js ***!
  \************************************************/
/***/ ((module) => {

eval("// const Gameboard = require('../classes/gameboard');\r\n// const tempBoardSelection = require('../setup/playerOneGameboard')\r\n// // const tempGameboard = new Gameboard(tempBoardSelection)\r\n\r\n// const { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = require('../setup/createShips');\r\n// const humanShips = []\r\n// humanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)\r\n// const computerShips = []\r\n// computerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);\r\n\r\n// // temporary board for rendering purposes\r\n// var temp = new Gameboard(tempBoardSelection)\r\n\r\n// board ship(as an array) -> gamebaord\r\n// randomly selects position for ships\r\nconst placeRandShips = (temp, arrayOfShips) => {\r\nvar randomIndex1 =  Math.floor(Math.random() * 10);\r\nvar randomIndex2 =  Math.floor(Math.random() * 10);\r\n  arrayOfShips.forEach(ship => {\r\n    var randomAxis = Math.random() < 0.5\r\n    while (temp.placeShip(ship, randomIndex1, randomIndex2, randomAxis) == false) {\r\n      randomIndex1 =  Math.floor(Math.random() * 10);\r\n      randomIndex2 =  Math.floor(Math.random() * 10);\r\n    }\r\n  });\r\n  // console.log(temp)\r\n  return temp\r\n}\r\n\r\n// // board ship(as an array)-> board html styling\r\n// // Renders of temporary ship placement  \r\n// const renderTempBoard = (temp, arrayOfShips) => {\r\n//   // first clear the board since the user can repeatedly place their starting ship positioning.\r\n//   temp.clearBoard();\r\n//   var forBoardRender = placeRandShips(temp, arrayOfShips);\r\n//   renderColoring(forBoardRender, '#B0E0E6')\r\n// }\r\n\r\n// // array color(as a string) -> board html syling\r\n// // applies color rendering of ship positions\r\n// const renderColoring = (array, color) => {\r\n//   array.playerBoard.forEach((row, rowInd) => {\r\n//     row.forEach((col, colInd) => {\r\n//       // Render a clear board each time this function is called\r\n//       document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = ''\r\n//       // render new positions\r\n//       if (col != null) {\r\n//         document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = color\r\n//       }\r\n//     })\r\n//   })\r\n// }\r\n\r\n\r\nmodule.exports = placeRandShips\n\n//# sourceURL=webpack://battleships/./src/gameflow_helpers/placeRandShips.js?");

/***/ }),

/***/ "./src/gameflow_helpers/playerOneMove.js":
/*!***********************************************!*\
  !*** ./src/gameflow_helpers/playerOneMove.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("// const Gameboard = require('../classes/gameboard')\r\n// const Players = require('../classes/players')\r\nconst {stringToAIShip, stringToShip} = __webpack_require__(/*! ../gameflow_helpers/stringToShip */ \"./src/gameflow_helpers/stringToShip.js\")\r\nconst playerTwoBoard = __webpack_require__(/*! ../setup/playerTwoGameboard */ \"./src/setup/playerTwoGameboard.js\")\r\nconst dumbAIMove = __webpack_require__(/*! ./dumbAIMove */ \"./src/gameflow_helpers/dumbAIMove.js\")\r\nconst {renderAttackColoring} = __webpack_require__(/*! ../styles/renderColoring */ \"./src/styles/renderColoring.js\")\r\n// const enemyGameboard = new Gameboard(playerTwoBoard)\r\n// const player1 = new Players(\"Player 1\", [])\r\n\r\n// const {\r\n//     AI_Carrier,\r\n//     AI_Battleship,\r\n//     AI_Cruiser,\r\n//     AI_Submarine,\r\n//     AI_Destroyer\r\n// } = require('../setup/createShips')\r\n\r\n// var AIShips = [];\r\n// AIShips.push(AI_Carrier, AI_Battleship, AI_Cruiser, AI_Submarine, AI_Destroyer);\r\n\r\n// enemyGameboard.placeShip(AI_Carrier, 5, 3, true)\r\n// enemyGameboard.placeShip(AI_Cruiser, 1, 1, false)\r\n// enemyGameboard.placeShip(AI_Battleship, 8, 6, false)\r\n// enemyGameboard.placeShip(AI_Submarine, 2, 3, true)\r\n// enemyGameboard.placeShip(AI_Destroyer, 7, 5, false)\r\n\r\n// console.log(\"Player 1's turn\")\r\n// console.log(\"Player 1 attacks at 0 1\")\r\n\r\n// Num Num class array -> ??\r\n// complete the move set of player 1\r\nconst playerOneMove = (playerClass, index1, index2, board, ships) => {\r\n    if (playerClass.playerAttack(index1, index2, board, ships) === undefined) {\r\n        let hitShip = stringToAIShip(board.playerBoard[index1][index2])\r\n        renderAttackColoring(index1, index2, 'p2', 'red')\r\n        console.log(hitShip);\r\n        console.log(`BOOM! You hit the AI's ${hitShip.type}`)\r\n        // set sunkStatus of the ship to true if it was hit enough times\r\n        hitShip.isSunk()\r\n        if (hitShip.sunkStatus) {\r\n            console.log(`Player 1 sunk AI's ${hitShip.type}`)\r\n            // was this the last ship to sink? If so, it's game over\r\n            if(board.allShipsSunk(ships)) {\r\n                console.log(\"Game over - GG\")\r\n            }\r\n        } else {\r\n            // contiue\r\n            console.log('AI turn')\r\n            dumbAIMove\r\n        }\r\n    } else if (playerTwoBoard[index1][index2] == 'X') {\r\n        renderAttackColoring(index1, index2, 'p2', '#00b8ff')\r\n        console.log('Splash. You missed and made a big splash on the AI gameboard')\r\n        dumbAIMove\r\n    } else {\r\n        console.log('try again')\r\n    }\r\n}\r\n\r\nmodule.exports = playerOneMove\r\n\r\n// playerOneMove(0, 1, enemyGameboard, AIShips)\r\n// playerOneMove(1, 1, enemyGameboard, AIShips)\r\n// playerOneMove(1, 2, enemyGameboard, AIShips)\r\n// playerOneMove(1, 3, enemyGameboard, AIShips)\r\n// playerOneMove(1, 5, enemyGameboard, AIShips)\r\n\r\n// playerOneMove(5,3, enemyGameboard, AIShips)\r\n// playerOneMove(6,3, enemyGameboard, AIShips)\r\n// playerOneMove(7,3, enemyGameboard, AIShips)\r\n// playerOneMove(8,3, enemyGameboard, AIShips)\r\n// playerOneMove(9,3, enemyGameboard, AIShips)\r\n\r\n// playerOneMove(8,6, enemyGameboard, AIShips)\r\n// playerOneMove(8,7, enemyGameboard, AIShips)\r\n// playerOneMove(8,8, enemyGameboard, AIShips)\r\n// playerOneMove(8,9, enemyGameboard, AIShips)\r\n\r\n// playerOneMove(2,3, enemyGameboard, AIShips)\r\n// playerOneMove(3,3, enemyGameboard, AIShips)\r\n// playerOneMove(4,3, enemyGameboard, AIShips)\r\n// playerOneMove(5,2, enemyGameboard, AIShips)\r\n\r\n// playerOneMove(7,5, enemyGameboard, AIShips)\r\n// playerOneMove(7,6, enemyGameboard, AIShips)\r\n// console.log(enemyGameboard)\r\n// console.log(AIShips)\n\n//# sourceURL=webpack://battleships/./src/gameflow_helpers/playerOneMove.js?");

/***/ }),

/***/ "./src/gameflow_helpers/stringToShip.js":
/*!**********************************************!*\
  !*** ./src/gameflow_helpers/stringToShip.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\r\n    Carrier,\r\n    Battleship,\r\n    Cruiser,\r\n    Submarine,\r\n    Destroyer\r\n} = __webpack_require__(/*! ../setup/createShips */ \"./src/setup/createShips.js\")\r\n// string -> object\r\n// Converts the string of a Ship to its object form \r\nconst stringToShip = (shipAsString) => {\r\n\r\n    let convertedShip = null\r\n\r\n    switch (shipAsString) {\r\n        case 'Carrier':\r\n            convertedShip = Carrier\r\n            break;\r\n        case 'Cruiser':\r\n            convertedShip = Cruiser\r\n            break;\r\n        case 'Battleship':\r\n            convertedShip = Battleship\r\n            break;\r\n        case 'Submarine':\r\n            convertedShip = Submarine\r\n            break;\r\n        case 'Destroyer':\r\n            convertedShip = Destroyer\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n    return convertedShip\r\n}\r\n\r\nconst {\r\n    computerCarrier,\r\n    computerBattleship,\r\n    computerCruiser,\r\n    computerSubmarine,\r\n    computerDestroyer\r\n} = __webpack_require__(/*! ../setup/createShips */ \"./src/setup/createShips.js\")\r\n\r\n// string -> object\r\n// Converts the string of a Ship to its object form \r\nconst stringToAIShip = (shipAsAIString) => {\r\n\r\n    let convertedShip = null\r\n\r\n    switch (shipAsAIString) {\r\n        case 'computerCarrier':\r\n            convertedShip = computerCarrier\r\n            break;\r\n        case 'computerCruiser':\r\n            convertedShip = computerCruiser\r\n            break;\r\n        case 'computerBattleship':\r\n            convertedShip = computerBattleship\r\n            break;\r\n        case 'computerSubmarine':\r\n            convertedShip = computerSubmarine\r\n            break;\r\n        case 'computerDestroyer':\r\n            convertedShip = computerDestroyer\r\n            break;\r\n        default:\r\n            break;\r\n    }\r\n    return convertedShip\r\n}\r\n\r\nmodule.exports = {\r\n    stringToShip,\r\n    stringToAIShip\r\n}\n\n//# sourceURL=webpack://battleships/./src/gameflow_helpers/stringToShip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("__webpack_require__(/*! ./styles/styles.css */ \"./src/styles/styles.css\")\r\nconst Players = __webpack_require__(/*! ./classes/players */ \"./src/classes/players.js\");\r\nconst Gameboard = __webpack_require__(/*! ./classes/gameboard */ \"./src/classes/gameboard.js\");\r\n\r\nconst { Carrier, Battleship, Cruiser, Submarine, Destroyer, computerCarrier, computerBattleship, computerCruiser, computerSubmarine,  computerDestroyer } = __webpack_require__(/*! ./setup/createShips */ \"./src/setup/createShips.js\");\r\nconst humanShips = []\r\nhumanShips.push(Carrier, Battleship, Cruiser, Submarine, Destroyer)\r\nconst computerShips = []\r\ncomputerShips.push(computerCarrier, computerBattleship, computerCruiser, computerSubmarine, computerDestroyer);\r\n\r\n\r\nconst placeRandShips = __webpack_require__(/*! ./gameflow_helpers/placeRandShips */ \"./src/gameflow_helpers/placeRandShips.js\")\r\nconst renderTempBoard = __webpack_require__(/*! ./styles/renderTempBoard */ \"./src/styles/renderTempBoard.js\")\r\nconst {renderP1StartColoring} = __webpack_require__(/*! ./styles/renderColoring */ \"./src/styles/renderColoring.js\")\r\n\r\n// gamebaords\r\nconst playerOneBoard = __webpack_require__(/*! ./setup/playerOneGameboard */ \"./src/setup/playerOneGameboard.js\")\r\nconst playerTwoBoard = __webpack_require__(/*! ./setup/playerTwoGameboard */ \"./src/setup/playerTwoGameboard.js\");\r\n\r\n// players\r\nconst player1 = new Players('Player 1 - Human', [])\r\nconst player2 = new Players('Player 2 - Computer', [])\r\n\r\n// temporary board for rendering purposes\r\nvar temp = new Gameboard(playerOneBoard)\r\n// player boards\r\nvar player1Gameboard = null\r\nconst player2Gameboard = new Gameboard(playerTwoBoard)\r\n\r\nconsole.log(player2Gameboard.playerBoard)\r\n\r\n// // Player movement logic\r\nconst playerOneMove = __webpack_require__(/*! ./gameflow_helpers/playerOneMove */ \"./src/gameflow_helpers/playerOneMove.js\");\r\n// const dumbAIMove = require('./gameflow_helpers/dumbAIMove');\r\n\r\nconst randBtn = document.getElementById(\"randBtn\");\r\nrandBtn.addEventListener(\"click\", () => {\r\n    renderTempBoard(temp, humanShips);\r\n    confirmPosBtn.disabled = false;\r\n    // randBtn.insertAdjacentElement('afterend', confirmButton)\r\n})\r\n\r\n// var confirmButton = document.createElement('button');\r\n// confirmButton.type = 'button';\r\n// confirmButton.innerHTML = 'Start';\r\n// confirmButton.id = 'confirmPosBtn';\r\n// confirmButton.className = 'btn';\r\n\r\nconst confirmPosBtn = document.getElementById('confirmPosBtn')\r\n// confirmButton.addEventListener(\"click\", () => {\r\n    confirmPosBtn.addEventListener(\"click\", () => {\r\n    player1Gameboard = temp\r\n    renderP1StartColoring(player1Gameboard, '#A19B99')\r\n    randBtn.remove();\r\n    confirmPosBtn.remove();\r\n    document.getElementById('instructions').remove();\r\n})\r\n\r\n// sets computer ship starting position (will not render ship positions)\r\nplaceRandShips(player2Gameboard, computerShips);\r\n\r\n// random selection of player who goes first\r\nif (Math.random() < 0.5) {\r\n    console.log(\"player 1's turn\")\r\n    // player 1 initiate its move via onclick event on enemy gameboard.\r\n} else {\r\n    console.log(\"computer's turn\")\r\n    // player2Turn()\r\n}\r\n\r\n// gameflow\r\nvar ind1 = null\r\nvar ind2 = null\r\n\r\n\r\ndocument.getElementById(\"player2Board\").addEventListener(\"click\", (e) => {\r\n    ind1 = e.path[0].id[6]\r\n    ind2 = e.path[1].id[6]\r\n    player1Turn(ind1, ind2)\r\n})\r\nconst player1Turn = (ind1, ind2) => {\r\n    // check if gameover? If not proceed:\r\n    playerOneMove(player1, ind1, ind2, player2Gameboard, computerShips)\r\n    // If it isn't game over, player 2's turn\r\n}\r\n\r\nconst player2Turn = () => {\r\n    // var randomIndex1 =  Math.floor(Math.random() * 10);\r\n    // var randomIndex2 =  Math.floor(Math.random() * 10);\r\n    // dumbAIMove(randomIndex1, randomIndex2, player1Gameboard, humanShips)\r\n}\r\n\n\n//# sourceURL=webpack://battleships/./src/index.js?");

/***/ }),

/***/ "./src/setup/createShips.js":
/*!**********************************!*\
  !*** ./src/setup/createShips.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Ship = __webpack_require__(/*! ../classes/ship.js */ \"./src/classes/ship.js\")\r\n\r\n// export const shipLengths = {\r\n//     Carrier: 5,\r\n//     Battleship: 4,\r\n//     Cruiser: 3,\r\n//     Submarine: 3,\r\n//     Destroyer: 2\r\n// }\r\n\r\n// export const shipStartingAvailableHitLocation = {\r\n//     Carrier: [],\r\n//     Battleship: [],\r\n//     Cruiser: [],\r\n//     Submarine: [],\r\n//     Destroyer: []\r\n// }\r\n\r\n// export const shipSunkStatus = {\r\n//     Carrier: false,\r\n//     Battleship: false,\r\n//     Cruiser: false,\r\n//     Submarine: false,\r\n//     Destroyer: false\r\n// }\r\n\r\n// // array dict dict dict -> class\r\n// // creates a unique instance of ships for each player\r\n// const createPlayerShips = (typeOfShip, lengthOfShip, hitLocationOfShip, sunkStatusOfShip) => {\r\n//         new Ship(ship, lengthOfShip[ship], hitLocationOfShip[ship], sunkStatusOfShip[ship])\r\n// }\r\n\r\n\r\n// createPlayerShips(shipTypes, shipLengths, shipStartingAvailableHitLocation, shipSunkStatus)\r\n\r\n// Ship; type, length, availableHitLocation, sunkStatus\r\n\r\nconst Carrier = new Ship(\"Carrier\", 5, [], false);\r\nconst Battleship = new Ship(\"Battleship\", 4, [], false);\r\nconst Cruiser = new Ship(\"Cruiser\", 3, [], false);\r\nconst Submarine = new Ship(\"Submarine\", 3, [], false);\r\nconst Destroyer = new Ship(\"Destroyer\", 2, [], false);\r\nconst computerCarrier = new Ship(\"computerCarrier\", 5, [], false);\r\nconst computerBattleship = new Ship(\"computerBattleship\", 4, [], false);\r\nconst computerCruiser = new Ship(\"computerCruiser\", 3, [], false);\r\nconst computerSubmarine = new Ship(\"computerSubmarine\", 3, [], false);\r\nconst computerDestroyer = new Ship(\"computerDestroyer\", 2, [], false);\r\n\r\nmodule.exports = {\r\n    Carrier,\r\n    Battleship,\r\n    Cruiser,\r\n    Submarine,\r\n    Destroyer,\r\n    computerCarrier,\r\n    computerBattleship,\r\n    computerCruiser,\r\n    computerSubmarine,\r\n    computerDestroyer\r\n}\n\n//# sourceURL=webpack://battleships/./src/setup/createShips.js?");

/***/ }),

/***/ "./src/setup/playerOneGameboard.js":
/*!*****************************************!*\
  !*** ./src/setup/playerOneGameboard.js ***!
  \*****************************************/
/***/ ((module) => {

eval("// gameboard size: 10x10 grids (x,y)\r\n\r\nconst playerOneBoard = [];\r\nconst gridWidth = 10;\r\nconst gridHeight = 10;\r\n\r\nconst playerOneGameboard = () => {\r\n    for(let y = 0; y < gridHeight; y++) {\r\n        playerOneBoard.push([]);\r\n        for(let x = 0; x < gridWidth; x++) {\r\n            playerOneBoard[y].push(null);\r\n        };\r\n    };\r\n};\r\n\r\nplayerOneGameboard(); // may need to move this to game_controller.js later\r\n\r\nmodule.exports = playerOneBoard\r\n\r\n\r\n// Delete after push. Testing push on different PC\n\n//# sourceURL=webpack://battleships/./src/setup/playerOneGameboard.js?");

/***/ }),

/***/ "./src/setup/playerTwoGameboard.js":
/*!*****************************************!*\
  !*** ./src/setup/playerTwoGameboard.js ***!
  \*****************************************/
/***/ ((module) => {

eval("// gameboard size: 10x10 grids (x,y)\r\n\r\nconst playerTwoBoard = [];\r\nconst gridWidth = 10;\r\nconst gridHeight = 10;\r\n\r\nconst playerTwoGameboard = () => {\r\n    for(let y = 0; y < gridHeight; y++) {\r\n        playerTwoBoard.push([]);\r\n        for(let x = 0; x < gridWidth; x++) {\r\n            playerTwoBoard[y].push(null);\r\n        };\r\n    };\r\n};\r\n\r\nplayerTwoGameboard();\r\n\r\nmodule.exports = playerTwoBoard\n\n//# sourceURL=webpack://battleships/./src/setup/playerTwoGameboard.js?");

/***/ }),

/***/ "./src/styles/renderColoring.js":
/*!**************************************!*\
  !*** ./src/styles/renderColoring.js ***!
  \**************************************/
/***/ ((module) => {

eval("// array color(as a string) -> board html syling\r\n// applies color rendering of ship positions\r\nconst renderP1StartColoring = (array, color) => {\r\n    array.playerBoard.forEach((row, rowInd) => {\r\n      row.forEach((col, colInd) => {\r\n        // Render a clear board each time this function is called\r\n        document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = ''\r\n        // render new positions\r\n        if (col != null) {\r\n          document.getElementById(`p1-col${[colInd]}`).getElementsByClassName('p1-row')[`${rowInd}`].style.backgroundColor = color\r\n        }\r\n      })\r\n    })\r\n  }\r\n\r\n// array num num string color(as a string) -> board html styling\r\n// applies color rendering based on provided args\r\nconst renderAttackColoring = (index1, index2, p1orp2, hitOrMissColor) => {\r\n  var element = document.getElementById(`${p1orp2}-col${[index2]}`).getElementsByClassName(`${p1orp2}-row`)[`${index1}`]\r\n\r\n  const attackStyling = document.createElement(\"div\")\r\n  attackStyling.classList.add('attackingMove')\r\n  element.appendChild(attackStyling)\r\n  \r\n  attackStyling.style.backgroundColor = hitOrMissColor\r\n  console.log(element)\r\n}\r\n  module.exports = {renderP1StartColoring, renderAttackColoring};\n\n//# sourceURL=webpack://battleships/./src/styles/renderColoring.js?");

/***/ }),

/***/ "./src/styles/renderTempBoard.js":
/*!***************************************!*\
  !*** ./src/styles/renderTempBoard.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const placeRandShips = __webpack_require__(/*! ../gameflow_helpers/placeRandShips */ \"./src/gameflow_helpers/placeRandShips.js\")\r\nconst {renderP1StartColoring} = __webpack_require__(/*! ./renderColoring */ \"./src/styles/renderColoring.js\")\r\n\r\n\r\n// board ship(as an array)-> board html styling\r\n// Renders of temporary ship placement  \r\nconst renderTempBoard = (temp, arrayOfShips) => {\r\n    // first clear the board since the user can repeatedly place their starting ship positioning.\r\n    temp.clearBoard();\r\n    var forBoardRender = placeRandShips(temp, arrayOfShips);\r\n    renderP1StartColoring(forBoardRender, '#B0E0E6')\r\n  }\r\n\r\n  module.exports = renderTempBoard\n\n//# sourceURL=webpack://battleships/./src/styles/renderTempBoard.js?");

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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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