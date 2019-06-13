module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "1ePM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DAj8");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Ol = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('ol', {
  shouldForwardProp: _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default.a
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridColumnGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridRowGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridColumn"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridRow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoFlow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoColumns"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoRows"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateColumns"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateRows"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateAreas"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridArea"], {
  boxSizing: 'border-box'
});
Ol.defaultProps = {
  lineHeight: 1.5
};
/* harmony default export */ __webpack_exports__["a"] = (Ol);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("yPJu");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "8NHG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DAj8");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Li = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('li', {
  shouldForwardProp: _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default.a
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  boxSizing: 'border-box'
});
Li.defaultProps = {
  pl: 0
};
/* harmony default export */ __webpack_exports__["a"] = (Li);

/***/ }),

/***/ "DAj8":
/***/ (function(module, exports) {

module.exports = require("@styled-system/should-forward-prop");

/***/ }),

/***/ "I9L5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DAj8");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Img = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('img', {
  shouldForwardProp: _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default.a
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {});
Img.defaultProps = {
  width: 1,
  display: 'block',
  maxWidth: '100%',
  border: '0 none transparent'
};
/* harmony default export */ __webpack_exports__["a"] = (Img);

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "UlNW":
/***/ (function(module, exports) {

module.exports = require("@emotion/styled");

/***/ }),

/***/ "aXPs":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var theme = {
  breakpoints: ['30em', '60em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 20, 24, 32, 48, 64, 96, 128, 192, 256],
  borderWidths: [0, '1px', '2px', '4px', '8px', '16px', '32px'],
  radii: [0, '3px', '5px', '16px', '9999px', '100%'],
  lineHeights: ['1.0', '1.25', '1.5'],
  measures: ['20em', '30em', '34em'],
  typefaces: {
    serif: 'athelas, georgia, times, serif',
    sansSerif: 'system-ui, -apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
    mono: 'Consolas, monaco, monospace'
  },
  textStyles: {
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    'tracked-tight': {
      letterSpacing: '-0.05em'
    },
    copy: {
      lineHeight: 1.5,
      maxWidth: '30em'
    },
    title: {
      lineHeight: 1.25,
      maxWidth: '30em'
    },
    capitalize: {
      textTransform: 'capitalize'
    }
  },
  colors: {
    red: ["#ffe6e4", "#fccbc7", "#f8afa9", "#f1928b", "#e8756d", "#db594f", "#ca3e34", "#b5261b", "#9b1207", "#7f0a00", "#610a00"],
    orange: ["#ffe9db", "#fdd8bc", "#f8c69d", "#f2b37d", "#e89e5e", "#dc8940", "#cc7224", "#b75c0c", "#9f4a00", "#833d00", "#663000"],
    yellow: ["#fffde4", "#fdf4c4", "#f8e8a3", "#f2db82", "#e8cc61", "#dcbb42", "#cca824", "#b7920b", "#9f7c00", "#836600", "#665000"],
    green: ["#e4fff7", "#c5fced", "#a5f7e2", "#84efd5", "#64e5c6", "#45d6b4", "#29c39f", "#10ab87", "#008e6d", "#006e54", "#004d3b"],
    cyan: ["#e4faff", "#c4f1fc", "#a2e6f7", "#81d9ef", "#5fcae5", "#40b8d6", "#23a3c3", "#0a8bab", "#00728e", "#00586e", "#003d4d"],
    blue: ["#e4eeff", "#c5dafc", "#a5c5f7", "#84afef", "#6497e5", "#457fd6", "#2967c3", "#104eab", "#00398e", "#002c6e", "#001f4d"],
    indigo: ["#e6e4ff", "#c9c5fc", "#aca5f7", "#8e84ef", "#7164e5", "#5445d6", "#3829c3", "#2010ab", "#0e008e", "#0b006e", "#08004d"],
    violet: ["#f6e4ff", "#edc5fc", "#e4a5f7", "#d884ef", "#ca64e5", "#b945d6", "#a429c3", "#8c10ab", "#72008e", "#58006e", "#3d004d"],
    pink: ["#ffe4f5", "#fcc5e2", "#f7a5cb", "#ef84b3", "#e5649b", "#d64582", "#c3296a", "#ab1051", "#8e003b", "#6e002e", "#4d0020"],
    gray: ["#ededed", "#e8eaec", "#e2e5ea", "#dbdfe5", "#d2d6dd", "#c5c9d1", "#b3b7bf", "#9a9ea4", "#75787d", "#444649", "#0a0a0a"],
    darkOverlay: ['rgba(0,0,0,.9)', 'rgba(0,0,0,.8)', 'rgba(0,0,0,.7)', 'rgba(0,0,0,.6)', 'rgba(0,0,0,.5)', 'rgba(0,0,0,.4)', 'rgba(0,0,0,.3)', 'rgba(0,0,0,.2)', 'rgba(0,0,0,.1)', 'rgba(0,0,0,.05)', 'rgba(0,0,0,.025)', 'rgba(0,0,0,.0125)'],
    lightOverlay: ['rgba(255,255,255,.9)', 'rgba(255,255,255,.8)', 'rgba(255,255,255,.7)', 'rgba(255,255,255,.6)', 'rgba(255,255,255,.5)', 'rgba(255,255,255,.4)', 'rgba(255,255,255,.3)', 'rgba(255,255,255,.2)', 'rgba(255,255,255,.1)', 'rgba(255,255,255,.05)', 'rgba(255,255,255,.025)', 'rgba(255,255,255,.0125)']
  }
};
/* harmony default export */ __webpack_exports__["a"] = (theme);

/***/ }),

/***/ "c2Xn":
/***/ (function(module, exports) {

module.exports = require("@mdx-js/react");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "eCyh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var elements_namespaceObject = {};
__webpack_require__.r(elements_namespaceObject);
__webpack_require__.d(elements_namespaceObject, "A", function() { return elements_A; });
__webpack_require__.d(elements_namespaceObject, "Abbr", function() { return elements_Abbr; });
__webpack_require__.d(elements_namespaceObject, "Address", function() { return elements_Address; });
__webpack_require__.d(elements_namespaceObject, "Article", function() { return elements_Article; });
__webpack_require__.d(elements_namespaceObject, "Aside", function() { return elements_Aside; });
__webpack_require__.d(elements_namespaceObject, "B", function() { return elements_B; });
__webpack_require__.d(elements_namespaceObject, "Br", function() { return elements_Br; });
__webpack_require__.d(elements_namespaceObject, "Button", function() { return elements_Button; });
__webpack_require__.d(elements_namespaceObject, "Cite", function() { return elements_Cite; });
__webpack_require__.d(elements_namespaceObject, "Code", function() { return elements_Code; });
__webpack_require__.d(elements_namespaceObject, "Data", function() { return elements_Data; });
__webpack_require__.d(elements_namespaceObject, "Dd", function() { return elements_Dd; });
__webpack_require__.d(elements_namespaceObject, "Details", function() { return elements_Details; });
__webpack_require__.d(elements_namespaceObject, "Div", function() { return Div["a" /* default */]; });
__webpack_require__.d(elements_namespaceObject, "Dl", function() { return elements_Dl; });
__webpack_require__.d(elements_namespaceObject, "Dt", function() { return elements_Dt; });
__webpack_require__.d(elements_namespaceObject, "Em", function() { return elements_Em; });
__webpack_require__.d(elements_namespaceObject, "Fieldset", function() { return elements_Fieldset; });
__webpack_require__.d(elements_namespaceObject, "Footer", function() { return elements_Footer; });
__webpack_require__.d(elements_namespaceObject, "Form", function() { return elements_Form; });
__webpack_require__.d(elements_namespaceObject, "H1", function() { return elements_H1; });
__webpack_require__.d(elements_namespaceObject, "H2", function() { return elements_H2; });
__webpack_require__.d(elements_namespaceObject, "H3", function() { return elements_H3; });
__webpack_require__.d(elements_namespaceObject, "H4", function() { return elements_H4; });
__webpack_require__.d(elements_namespaceObject, "H5", function() { return elements_H5; });
__webpack_require__.d(elements_namespaceObject, "H6", function() { return elements_H6; });
__webpack_require__.d(elements_namespaceObject, "Header", function() { return elements_Header; });
__webpack_require__.d(elements_namespaceObject, "Hr", function() { return elements_Hr; });
__webpack_require__.d(elements_namespaceObject, "I", function() { return elements_I; });
__webpack_require__.d(elements_namespaceObject, "Img", function() { return Img["a" /* default */]; });
__webpack_require__.d(elements_namespaceObject, "Input", function() { return elements_Input; });
__webpack_require__.d(elements_namespaceObject, "InputCheckbox", function() { return elements_InputCheckbox; });
__webpack_require__.d(elements_namespaceObject, "InputEmail", function() { return elements_InputEmail; });
__webpack_require__.d(elements_namespaceObject, "InputFile", function() { return elements_InputFile; });
__webpack_require__.d(elements_namespaceObject, "InputNumber", function() { return elements_InputNumber; });
__webpack_require__.d(elements_namespaceObject, "InputPassword", function() { return elements_InputPassword; });
__webpack_require__.d(elements_namespaceObject, "InputRadio", function() { return elements_InputRadio; });
__webpack_require__.d(elements_namespaceObject, "InputSearch", function() { return elements_InputSearch; });
__webpack_require__.d(elements_namespaceObject, "InputSubmit", function() { return elements_InputSubmit; });
__webpack_require__.d(elements_namespaceObject, "InputTelephone", function() { return elements_InputTelephone; });
__webpack_require__.d(elements_namespaceObject, "InputText", function() { return InputText; });
__webpack_require__.d(elements_namespaceObject, "InputUrl", function() { return elements_InputUrl; });
__webpack_require__.d(elements_namespaceObject, "Kbd", function() { return elements_Kbd; });
__webpack_require__.d(elements_namespaceObject, "Label", function() { return elements_Label; });
__webpack_require__.d(elements_namespaceObject, "Legend", function() { return elements_Legend; });
__webpack_require__.d(elements_namespaceObject, "Li", function() { return Li["a" /* default */]; });
__webpack_require__.d(elements_namespaceObject, "Main", function() { return elements_Main; });
__webpack_require__.d(elements_namespaceObject, "Nav", function() { return elements_Nav; });
__webpack_require__.d(elements_namespaceObject, "Ol", function() { return Ol["a" /* default */]; });
__webpack_require__.d(elements_namespaceObject, "P", function() { return P["a" /* default */]; });
__webpack_require__.d(elements_namespaceObject, "Path", function() { return elements_Path; });
__webpack_require__.d(elements_namespaceObject, "Pre", function() { return elements_Pre; });
__webpack_require__.d(elements_namespaceObject, "Progress", function() { return elements_Progress; });
__webpack_require__.d(elements_namespaceObject, "Q", function() { return elements_Q; });
__webpack_require__.d(elements_namespaceObject, "S", function() { return elements_S; });
__webpack_require__.d(elements_namespaceObject, "Samp", function() { return elements_Samp; });
__webpack_require__.d(elements_namespaceObject, "Section", function() { return elements_Section; });
__webpack_require__.d(elements_namespaceObject, "Select", function() { return elements_Select; });
__webpack_require__.d(elements_namespaceObject, "Small", function() { return elements_Small; });
__webpack_require__.d(elements_namespaceObject, "Span", function() { return elements_Span; });
__webpack_require__.d(elements_namespaceObject, "Strong", function() { return elements_Strong; });
__webpack_require__.d(elements_namespaceObject, "Sub", function() { return elements_Sub; });
__webpack_require__.d(elements_namespaceObject, "Summary", function() { return elements_Summary; });
__webpack_require__.d(elements_namespaceObject, "Sup", function() { return elements_Sup; });
__webpack_require__.d(elements_namespaceObject, "Svg", function() { return elements_Svg; });
__webpack_require__.d(elements_namespaceObject, "Table", function() { return elements_Table; });
__webpack_require__.d(elements_namespaceObject, "Tbody", function() { return elements_Tbody; });
__webpack_require__.d(elements_namespaceObject, "Td", function() { return elements_Td; });
__webpack_require__.d(elements_namespaceObject, "Textarea", function() { return elements_Textarea; });
__webpack_require__.d(elements_namespaceObject, "Tfoot", function() { return elements_Tfoot; });
__webpack_require__.d(elements_namespaceObject, "Th", function() { return elements_Th; });
__webpack_require__.d(elements_namespaceObject, "Thead", function() { return elements_Thead; });
__webpack_require__.d(elements_namespaceObject, "Time", function() { return elements_Time; });
__webpack_require__.d(elements_namespaceObject, "Tr", function() { return elements_Tr; });
__webpack_require__.d(elements_namespaceObject, "U", function() { return elements_U; });
__webpack_require__.d(elements_namespaceObject, "Ul", function() { return elements_Ul; });
__webpack_require__.d(elements_namespaceObject, "Var", function() { return elements_Var; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__("UlNW");
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);

// EXTERNAL MODULE: external "@styled-system/should-forward-prop"
var should_forward_prop_ = __webpack_require__("DAj8");
var should_forward_prop_default = /*#__PURE__*/__webpack_require__.n(should_forward_prop_);

// EXTERNAL MODULE: external "styled-system"
var external_styled_system_ = __webpack_require__("4JT2");

// CONCATENATED MODULE: ./elements/A.js



var A = styled_default()('a', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box",
  textDecoration: "none",
  ":hover": {
    cursor: "pointer"
  }
});
A.defaultProps = {
  display: "inline-block",
  bg: "transparent"
};
/* harmony default export */ var elements_A = (A);
// CONCATENATED MODULE: ./elements/Abbr.js



var Abbr = styled_default()('abbr', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["display"], external_styled_system_["textStyle"], {});
Abbr.defaultProps = {};
/* harmony default export */ var elements_Abbr = (Abbr);
// CONCATENATED MODULE: ./elements/Address.js



var Address = styled_default()('address', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["textStyle"], {});
Address.defaultProps = {};
/* harmony default export */ var elements_Address = (Address);
// CONCATENATED MODULE: ./elements/Article.js



var Article = styled_default()('article', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["flex"], external_styled_system_["flexWrap"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["textAlign"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], external_styled_system_["overflow"], {
  boxSizing: 'border-box'
});
Article.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Article = (Article);
// CONCATENATED MODULE: ./elements/Aside.js



var Aside = styled_default()('aside', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box"
});
Aside.defaultProps = {};
/* harmony default export */ var elements_Aside = (Aside);
// CONCATENATED MODULE: ./elements/B.js



var B = styled_default()('b', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["color"], {});
B.defaultProps = {
  fontWeight: 'bolder'
};
/* harmony default export */ var elements_B = (B);
// CONCATENATED MODULE: ./elements/Br.js



var Br = styled_default()('br', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], {});
Br.defaultProps = {};
/* harmony default export */ var elements_Br = (Br);
// CONCATENATED MODULE: ./elements/Button.js



var Button = styled_default()('button', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["textStyle"], {
  boxSizing: 'border-box',
  fontFamily: 'inherit',
  overflow: 'visible',
  textTransform: 'none',
  webkitAppearance: 'button',
  whiteSpace: 'nowrap'
});
Button.defaultProps = {
  fontSize: '100%',
  lineHeight: 1.25,
  m: 0,
  textAlign: 'center'
};
/* harmony default export */ var elements_Button = (Button);
// CONCATENATED MODULE: ./elements/Cite.js



var Cite = styled_default()('cite', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Cite.defaultProps = {};
/* harmony default export */ var elements_Cite = (Cite);
// CONCATENATED MODULE: ./elements/Code.js



var Code = styled_default()('code', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box",
  fontFamily: "monospace, monospace"
});
Code.defaultProps = {};
/* harmony default export */ var elements_Code = (Code);
// CONCATENATED MODULE: ./elements/Data.js



var Data = styled_default()('data', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
Data.defaultProps = {};
/* harmony default export */ var elements_Data = (Data);
// CONCATENATED MODULE: ./elements/Dd.js



var Dd = styled_default()('dd', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Dd.defaultProps = {};
/* harmony default export */ var elements_Dd = (Dd);
// CONCATENATED MODULE: ./elements/Details.js



var Details = styled_default()('details', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], {});
Details.defaultProps = {
  display: 'block'
};
/* harmony default export */ var elements_Details = (Details);
// EXTERNAL MODULE: ./elements/Div.js
var Div = __webpack_require__("zYTo");

// CONCATENATED MODULE: ./elements/Dl.js



var Dl = styled_default()('dl', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
Dl.defaultProps = {};
/* harmony default export */ var elements_Dl = (Dl);
// CONCATENATED MODULE: ./elements/Dt.js



var Dt = styled_default()('dt', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Dt.defaultProps = {};
/* harmony default export */ var elements_Dt = (Dt);
// CONCATENATED MODULE: ./elements/Em.js



var Em = styled_default()('em', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["textStyle"], {});
Em.defaultProps = {};
/* harmony default export */ var elements_Em = (Em);
// CONCATENATED MODULE: ./elements/Fieldset.js



var Fieldset = styled_default()('fieldset', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
Fieldset.defaultProps = {};
/* harmony default export */ var elements_Fieldset = (Fieldset);
// CONCATENATED MODULE: ./elements/Footer.js



var Footer = styled_default()('footer', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["flex"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: 'border-box'
});
Footer.defaultProps = {};
/* harmony default export */ var elements_Footer = (Footer);
// CONCATENATED MODULE: ./elements/Form.js



var Form = styled_default()('form', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
Form.defaultProps = {};
/* harmony default export */ var elements_Form = (Form);
// CONCATENATED MODULE: ./elements/H1.js



var H1 = styled_default()('h1', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: 'border-box'
});
H1.defaultProps = {};
/* harmony default export */ var elements_H1 = (H1);
// CONCATENATED MODULE: ./elements/H2.js



var H2 = styled_default()('h2', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: "border-box"
});
H2.defaultProps = {};
/* harmony default export */ var elements_H2 = (H2);
// CONCATENATED MODULE: ./elements/H3.js



var H3 = styled_default()('h3', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: 'border-box'
});
H3.defaultProps = {};
/* harmony default export */ var elements_H3 = (H3);
// CONCATENATED MODULE: ./elements/H4.js



var H4 = styled_default()('h4', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: 'border-box'
});
H4.defaultProps = {};
/* harmony default export */ var elements_H4 = (H4);
// CONCATENATED MODULE: ./elements/H5.js



var H5 = styled_default()('h5', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["textStyle"], {
  boxSizing: 'border-box'
});
H5.defaultProps = {};
/* harmony default export */ var elements_H5 = (H5);
// CONCATENATED MODULE: ./elements/H6.js



var H6 = styled_default()('h6', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: 'border-box'
});
H6.defaultProps = {};
/* harmony default export */ var elements_H6 = (H6);
// CONCATENATED MODULE: ./elements/Header.js



var Header = styled_default()('header', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["flex"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: 'border-box'
});
Header.defaultProps = {};
/* harmony default export */ var elements_Header = (Header);
// CONCATENATED MODULE: ./elements/Hr.js



var Hr = styled_default()('hr', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {
  boxSizing: "border-box",
  height: 0,
  overflow: "visible"
});
Hr.defaultProps = {
  borderTop: "1px solid currentColor",
  borderBottom: "0px solid transparent"
};
/* harmony default export */ var elements_Hr = (Hr);
// CONCATENATED MODULE: ./elements/I.js



var I = styled_default()('i', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["color"], external_styled_system_["textStyle"], {});
I.defaultProps = {};
/* harmony default export */ var elements_I = (I);
// EXTERNAL MODULE: ./elements/Img.js
var Img = __webpack_require__("I9L5");

// CONCATENATED MODULE: ./elements/Input.js



var Input = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
Input.defaultProps = {};
/* harmony default export */ var elements_Input = (Input);
// CONCATENATED MODULE: ./elements/InputCheckbox.js



var InputCheckbox = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputCheckbox.defaultProps = {
  type: 'checkbox'
};
/* harmony default export */ var elements_InputCheckbox = (InputCheckbox);
// CONCATENATED MODULE: ./elements/InputEmail.js



var InputEmail = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box"
});
InputEmail.defaultProps = {
  type: "email"
};
/* harmony default export */ var elements_InputEmail = (InputEmail);
// CONCATENATED MODULE: ./elements/InputFile.js



var InputFile = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputFile.defaultProps = {
  type: "file"
};
/* harmony default export */ var elements_InputFile = (InputFile);
// CONCATENATED MODULE: ./elements/InputNumber.js



var InputNumber = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputNumber.defaultProps = {
  type: 'number'
};
/* harmony default export */ var elements_InputNumber = (InputNumber);
// CONCATENATED MODULE: ./elements/InputPassword.js



var InputPassword = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
InputPassword.defaultProps = {
  type: 'password'
};
/* harmony default export */ var elements_InputPassword = (InputPassword);
// CONCATENATED MODULE: ./elements/InputRadio.js



var InputRadio = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputRadio.defaultProps = {
  type: "radio"
};
/* harmony default export */ var elements_InputRadio = (InputRadio);
// CONCATENATED MODULE: ./elements/InputSearch.js



var InputSearch = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
InputSearch.defaultProps = {
  type: 'search'
};
/* harmony default export */ var elements_InputSearch = (InputSearch);
// CONCATENATED MODULE: ./elements/InputSubmit.js



var InputSubmit = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputSubmit.defaultProps = {
  type: "submit"
};
/* harmony default export */ var elements_InputSubmit = (InputSubmit);
// CONCATENATED MODULE: ./elements/InputTelephone.js



var InputTelephone = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box'
});
InputTelephone.defaultProps = {
  type: 'tel'
};
/* harmony default export */ var elements_InputTelephone = (InputTelephone);
// CONCATENATED MODULE: ./elements/InputText.js



var InputText_Input = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputText_Input.defaultProps = {
  type: "text"
};
/* harmony default export */ var InputText = (InputText_Input);
// CONCATENATED MODULE: ./elements/InputUrl.js



var InputUrl = styled_default()('input', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {});
InputUrl.defaultProps = {
  type: "url"
};
/* harmony default export */ var elements_InputUrl = (InputUrl);
// CONCATENATED MODULE: ./elements/Kbd.js



var Kbd = styled_default()('code', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box",
  fontFamily: "monospace, monospace"
});
Kbd.defaultProps = {
  fontSize: 2
};
/* harmony default export */ var elements_Kbd = (Kbd);
// CONCATENATED MODULE: ./elements/Label.js



var Label = styled_default()('label', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], {});
Label.defaultProps = {};
/* harmony default export */ var elements_Label = (Label);
// CONCATENATED MODULE: ./elements/Legend.js



var Legend = styled_default()('legend', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box",
  maxWidth: "100%",
  whiteSpace: "normal"
});
Legend.defaultProps = {
  color: "inherit",
  display: "table",
  p: 0
};
/* harmony default export */ var elements_Legend = (Legend);
// EXTERNAL MODULE: ./elements/Li.js
var Li = __webpack_require__("8NHG");

// CONCATENATED MODULE: ./elements/Main.js



var Main = styled_default()('main', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: 'border-box'
});
Main.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Main = (Main);
// CONCATENATED MODULE: ./elements/Nav.js



var Nav = styled_default()('nav', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: 'border-box'
});
Nav.defaultProps = {};
/* harmony default export */ var elements_Nav = (Nav);
// EXTERNAL MODULE: ./elements/Ol.js
var Ol = __webpack_require__("1ePM");

// EXTERNAL MODULE: ./elements/P.js
var P = __webpack_require__("rI+y");

// CONCATENATED MODULE: ./elements/Path.js



var Path = styled_default()('path', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["color"], {
  boxSizing: 'border-box'
});
Path.defaultProps = {
  fill: 'currentColor'
};
/* harmony default export */ var elements_Path = (Path);
// CONCATENATED MODULE: ./elements/Pre.js



var Pre = styled_default()('pre', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: 'border-box',
  fontFamily: 'monaco, monospace'
});
Pre.defaultProps = {};
/* harmony default export */ var elements_Pre = (Pre);
// EXTERNAL MODULE: ./theme.js
var theme = __webpack_require__("aXPs");

// CONCATENATED MODULE: ./elements/Progress.js




var Progress = styled_default()('progress', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["height"], external_styled_system_["display"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  overflow: 'hidden',
  webkitAppearance: 'none',
  appearance: 'none',
  '&[value]::-webkit-progress-bar': {
    backgroundColor: theme["a" /* default */].colors.gray
  },
  '&[value]::-webkit-progress-value': {
    backgroundColor: theme["a" /* default */].colors.blue
  },
  verticalAlign: 'top'
});
Progress.defaultProps = {
  width: 1,
  height: 8,
  max: 100,
  value: 64
};
/* harmony default export */ var elements_Progress = (Progress);
// CONCATENATED MODULE: ./elements/Q.js



var Q = styled_default()('q', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], {});
Q.defaultProps = {};
/* harmony default export */ var elements_Q = (Q);
// CONCATENATED MODULE: ./elements/S.js



var S = styled_default()('s', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
S.defaultProps = {};
/* harmony default export */ var elements_S = (S);
// CONCATENATED MODULE: ./elements/Samp.js



var Samp = styled_default()('samp', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], {
  boxSizing: "border-box",
  fontFamily: "monospace, monospace"
});
Samp.defaultProps = {
  fontSize: 2
};
/* harmony default export */ var elements_Samp = (Samp);
// CONCATENATED MODULE: ./elements/Section.js



var Section = styled_default()('section', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["flex"], external_styled_system_["flexWrap"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: "border-box"
});
Section.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Section = (Section);
// CONCATENATED MODULE: ./elements/Select.js



var Select = styled_default()('select', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], external_styled_system_["width"], {});
Select.defaultProps = {};
/* harmony default export */ var elements_Select = (Select);
// CONCATENATED MODULE: ./elements/Small.js



var Small = styled_default()('small', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textStyle"], external_styled_system_["color"], {});
Small.defaultProps = {};
/* harmony default export */ var elements_Small = (Small);
// CONCATENATED MODULE: ./elements/Span.js



var Span = styled_default()('span', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontFamily"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["textAlign"], external_styled_system_["textStyle"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderRadius"], {});
Span.defaultProps = {
  color: 'inherit'
};
/* harmony default export */ var elements_Span = (Span);
// CONCATENATED MODULE: ./elements/Strong.js



var Strong = styled_default()('strong', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["color"], {});
Strong.defaultProps = {
  fontWeight: 'bolder'
};
/* harmony default export */ var elements_Strong = (Strong);
// CONCATENATED MODULE: ./elements/Sub.js



var Sub = styled_default()('sub', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], {});
Sub.defaultProps = {};
/* harmony default export */ var elements_Sub = (Sub);
// CONCATENATED MODULE: ./elements/Summary.js



var Summary = styled_default()('summary', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], {});
Summary.defaultProps = {};
/* harmony default export */ var elements_Summary = (Summary);
// CONCATENATED MODULE: ./elements/Sup.js



var Sup = styled_default()('sup', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["lineHeight"], external_styled_system_["color"], external_styled_system_["borderRadius"], {});
Sup.defaultProps = {};
/* harmony default export */ var elements_Sup = (Sup);
// CONCATENATED MODULE: ./elements/Svg.js



var Svg = styled_default()('svg', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["color"], external_styled_system_["display"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["height"], {
  boxSizing: 'border-box'
});
Svg.defaultProps = {
  fill: 'currentColor'
};
/* harmony default export */ var elements_Svg = (Svg);
// CONCATENATED MODULE: ./elements/Table.js




var layout = function layout(props) {
  return {
    tableLayout: props.layout ? props.layout : 'default'
  };
};

var Table = styled_default()('table', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["fontSize"], external_styled_system_["color"], layout, {
  borderCollapse: 'collapse',
  cellSpacing: 0,
  cellPadding: 0
});
Table.defaultProps = {
  width: 1,
  layout: 'initial'
};
/* harmony default export */ var elements_Table = (Table);
// CONCATENATED MODULE: ./elements/Tbody.js



var Tbody = styled_default()('tbody', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
Tbody.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Tbody = (Tbody);
// CONCATENATED MODULE: ./elements/Td.js



var Td = styled_default()('td', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Td.defaultProps = {};
/* harmony default export */ var elements_Td = (Td);
// CONCATENATED MODULE: ./elements/Textarea.js



var Textarea = styled_default()('textarea', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["display"], external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderRadius"], {
  overflow: "auto"
});
Textarea.defaultProps = {};
/* harmony default export */ var elements_Textarea = (Textarea);
// CONCATENATED MODULE: ./elements/Tfoot.js



var Tfoot = styled_default()('tfoot', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
Tfoot.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Tfoot = (Tfoot);
// CONCATENATED MODULE: ./elements/Th.js



var Th = styled_default()('th', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Th.defaultProps = {
  fontWeight: "bold"
};
/* harmony default export */ var elements_Th = (Th);
// CONCATENATED MODULE: ./elements/Thead.js



var Thead = styled_default()('thead', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
Thead.defaultProps = {
  width: 1
};
/* harmony default export */ var elements_Thead = (Thead);
// CONCATENATED MODULE: ./elements/Time.js



var Time = styled_default()('time', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["display"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["textAlign"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], {});
Time.defaultProps = {};
/* harmony default export */ var elements_Time = (Time);
// CONCATENATED MODULE: ./elements/Tr.js



var Tr = styled_default()('tr', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["fontSize"], external_styled_system_["color"], {});
Tr.defaultProps = {};
/* harmony default export */ var elements_Tr = (Tr);
// CONCATENATED MODULE: ./elements/U.js



var U = styled_default()('u', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["fontWeight"], external_styled_system_["color"], {});
U.defaultProps = {};
/* harmony default export */ var elements_U = (U);
// CONCATENATED MODULE: ./elements/Ul.js



var Ul = styled_default()('ul', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["maxWidth"], external_styled_system_["display"], external_styled_system_["alignItems"], external_styled_system_["justifyContent"], external_styled_system_["fontSize"], external_styled_system_["color"], external_styled_system_["borders"], external_styled_system_["borderColor"], external_styled_system_["borderRadius"], external_styled_system_["gridGap"], external_styled_system_["gridColumnGap"], external_styled_system_["gridRowGap"], external_styled_system_["gridColumn"], external_styled_system_["gridRow"], external_styled_system_["gridAutoFlow"], external_styled_system_["gridAutoColumns"], external_styled_system_["gridAutoRows"], external_styled_system_["gridTemplateColumns"], external_styled_system_["gridTemplateRows"], external_styled_system_["gridTemplateAreas"], external_styled_system_["gridArea"], {
  boxSizing: "border-box"
});
Ul.defaultProps = {
  ml: 0,
  pt: 0
};
/* harmony default export */ var elements_Ul = (Ul);
// CONCATENATED MODULE: ./elements/Var.js




var Var = styled_default()('var', {
  shouldForwardProp: should_forward_prop_default.a
})(external_styled_system_["space"], external_styled_system_["width"], external_styled_system_["fontSize"], external_styled_system_["color"], {
  fontFamily: 'monaco, monospace'
});
Var.defaultProps = {};
/* harmony default export */ var elements_Var = (Var);
// CONCATENATED MODULE: ./elements/index.js














































































// CONCATENATED MODULE: ./jsx.js
/* unused harmony export jsx */



var jsx_elements = {};

keys_default()(elements_namespaceObject).forEach(function (key) {
  jsx_elements[key.toLowerCase()] = elements_namespaceObject[key];
});

var jsx_jsx = function jsx(type, props) {
  var el = jsx_elements[type] || type;

  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    children[_key - 2] = arguments[_key];
  }

  return external_react_default.a.createElement.apply(undefined, [el, props].concat(children));
};
/* harmony default export */ var jsx_0 = __webpack_exports__["a"] = (jsx_jsx);

/***/ }),

/***/ "j53b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("eCyh");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("aXPs");



/** @jsx jsx */




var PostHeader = function PostHeader(_ref) {
  var title = _ref.title,
      published = _ref.published,
      subtitle = _ref.subtitle,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["title", "published", "subtitle"]);

  return Object(_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("header", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    py: 4
  }, props), Object(_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("time", {
    fontSize: 1
  }, published), Object(_jsx__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])("h1", {
    my: 0
  }, title));
};

PostHeader.defaultProps = {};
/* harmony default export */ __webpack_exports__["a"] = (PostHeader);

/***/ }),

/***/ "k1wZ":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "kOwS":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UXZV");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qNsG":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js
var get_own_property_symbols = __webpack_require__("4mXO");
var get_own_property_symbols_default = /*#__PURE__*/__webpack_require__.n(get_own_property_symbols);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js
var keys = __webpack_require__("pLtp");
var keys_default = /*#__PURE__*/__webpack_require__.n(keys);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = keys_default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _objectWithoutProperties; });


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = _objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (get_own_property_symbols_default.a) {
    var sourceSymbolKeys = get_own_property_symbols_default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "rI+y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DAj8");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var P = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('p', {
  shouldForwardProp: _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default.a
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontWeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["lineHeight"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textStyle"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], {
  boxSizing: 'border-box'
});
P.defaultProps = {
  maxWidth: '36em',
  // Sets text to maximum ~80 characters wide
  lineHeight: 1.5,
  fontSize: [2, 3, 4]
};
/* harmony default export */ __webpack_exports__["a"] = (P);

/***/ }),

/***/ "rQ2n":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("aXPs");
/* harmony import */ var _elements_Div__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("zYTo");





var Container = function Container(_ref) {
  var innerBg = _ref.innerBg,
      innerWidth = _ref.innerWidth,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])(_ref, ["innerBg", "innerWidth"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_Div__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], props, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_elements_Div__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    mx: "auto",
    maxWidth: innerWidth,
    bg: innerBg,
    px: 3
  }, props.children));
};

Container.defaultProps = {
  innerWidth: _theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].containerWidth ? _theme__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].containerWidth : '36em',
  fontSize: 3,
  innerBg: "transparent"
};
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),

/***/ "yPJu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("kOwS");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("qNsG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("c2Xn");
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rQ2n");
/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("j53b");



/* @jsx mdx */


/* @jsx mdx */




var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", props);
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    mdxType: "Container"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_PostHeader__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    title: "Common Vim",
    published: "11-12-2013",
    mdxType: "PostHeader"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "a"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "a"), " enter into insert mode after the character your cursor is on."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "A"), " enter into insert mode at the end of the current line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "b"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "b"), " move cursor to first character of previous word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "B"), " move cursor to first character of previous non-blank series of characters."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-b>"), " scroll page backwards (move up in the file)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "c"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "c stands for \"change\" will not do anything on its own, but acts as a modifier to other commands. Here are some common commands handy for editing front end code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cw"), " cw stands for change word. This will delete the word your cursor is over and enter into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ci("), " Change all text in between a set of parenthesis."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ci\""), " If your cursor is in between a set of quotes, this will delete everything inside those quotes and drop you into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ct\""), " Change text til the quotes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2ct\""), " Change text from cursor up til the 2nd quote in a line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "cF\""), " Change from cursor backwards finding and including the previous quote."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "C"), " Delete until the end of the line and enter into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":cd ../"), " Change directories to one previous."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":cd ~/Sites/projectname"), " Change directories to a known directory."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "MISC"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "CTRL-c In Normal mode, any pending command is aborted. Also aborts current search."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "d"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dd"), " Delete the current line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "D"), " Delete from cursor until the end of the line. Same as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "d$"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dw"), " Delete the word your cursor is on. Difference between this and cw is that you do not enter into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2dw"), " This will delete the word your cursor is on as well as the next one. You can replace 2 with any number."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "d^"), " Delete from cursor to beginning of the line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "d/pattern"), " Deletes up to first matched pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2df\""), " Delete from cursor to find the 2nd quote mark. This is inclusive so it will delete the second quote. This is a handy command for deleting attributes in html if your cursor is on the first letter of the attribute."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "di\""), " Delete everything inside of these quotes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "da\""), " Delete everything with quotes wrapped around (including the quotes)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-d>"), " Scroll half page (in this case \"d\" is a mnemonic for \"down\")."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%d"), " Deletes all lines in a file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":2,8d"), " Deletes lines two through eight."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "e"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "e"), " jumps to the end of the next word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "E"), " jumps to the end of the next non-blank series of characters."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ge"), " jumps to the end of the previous word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX commands."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":ea 5m"), " jump to five minutes ago. Seriously."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":ea 1h"), " jump to 1 hour ago."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":ea 14h 30m"), " jump to 14 hours and 30 minutes ago. Ok you get the point."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":e filename"), " open file in the current window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":e ."), " open file explorer in current directory."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "f"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "f is for finding things so it doesn't do anything on it's own. It will jump to the next character you type after f. It can be combined with c,d,y to change, cut, and copy sections of text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "fr"), " jumps to the next r on the (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ft"), " jumps to the next t on the (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "f,"), " jumps to the next , on the (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Fr"), " jumps to the previous r (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "Ft"), " jumps to the previous t (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "F,"), " jumps to the previous , (same line only)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2df\""), " delete from cursor through two occurences of \"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-f>"), " scrolls one full page forward."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "g"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gx"), " Go to url under your cursor in a browser."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gf"), " Go open file under your cursor in the current window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "g;"), " Go to the last place you edited text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "g,"), " Go forward in the change list."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "4g,"), " Go forward 4 spots on the change list."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gg=G"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "1G=G"), " format the entire file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gn"), " Grab the next match from last search and visually select it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gi"), " Go into insert mode at the end of the last insert you did."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ge"), " Go to the end of the previous word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gp"), " Pastes just like p but leave the cursor after the pasted text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gP"), " Pastes just like P but leave the cursor after the pasted text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gv"), " Reselects most recent visual selection."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gv$A"), " Reselects most recent visual selection then moves to the end of the line, and enters insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "g~~"), " Switch case of all characters in current line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gq"), " Format selected text."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%g/pattern/norm @q"), " Run macro q on all lines in a file that match a pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%g/^\\d/norm yyGp"), " This searches for all lines of a file that start with a digit as the first character. It then copies the line and pastes it at the bottom of the file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%g/^$/norm dd"), " Delete all blank lines in a file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%g/^\\$/norm \"Ayy"), " Yank (copy) all lines that start with a dollar sign and append them to register A."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "h"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "h"), " Move cursor one character to the left."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "4h"), " Move cursor four characters to the left."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dh"), " Delete character to the left of cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":h"), " Opens up vim help in a new window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":h a"), " Opens vim help to documentation on the a key."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":h i_CTRL-R"), " Opens vim help to documentation on pressing control and r while in insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "H"), " Move cursor to first (highest) line in window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "i"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "i"), " Enter insert mode where your cursor is. Any text you insert will be inserted before the character your cursor was over."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "4i<tab><escape>"), " Insert 4 tabs (leaves you in command mode, not insert mode)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "80i*<escape>"), " Insert 80 * characters."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "I"), " Insert text at the very beginning of the line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "j"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "j"), " Moves cursor down one line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "32j"), "  Moves the cursor down 32 lines."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "J"), " Joins two lines removing indent."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "k"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "k"), " moves cursor up one line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "8k"), " moves cursor up 8 lines."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-w>K"), " rotates window to horizontal split."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dk"), " delete current line and line above cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "l"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "l"), " Move cursor right one character."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dl"), " Delete character under cursor. Same as x."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "L"), " Move cursor to last line in window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "m"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "m is for marking spots (which you can think of as bookmarks in your files). It does not do anything by itself."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mk"), " mark spot as k."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "'k"), " return the cursor to the spot you marked as \"k\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "d'k"), " delete from the cursor's position to the spot you marked as \"k\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "c'k"), " change from the cursor's position to the spot you marked as \"k\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "y'k"), " yank/copy from the cursor's position to the spot you marked as \"k\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "M"), " Move cursor to middle of window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "n"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "n"), " moves forward to next match of a search pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "N"), " moves backwards to previous match of a search pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gn"), " search forward for the last used search pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "o"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "o"), " Opens a new line below where your cursor is and places you in insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "O"), " Opens a new line above where your cursor is and places you in insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "CTRL-o"), " Go backwards in the jumplist (list of where your cursor has been). Trust me this is like movement steroids."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "12CTRL-o"), " You can also pass it a count so this will go backwards in the jumplist 12 spots."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":only"), " Closes all splits except for the current one."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "p"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Paste is a pretty big deal when you are dealing with code. So p should be one of your best friends."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "p"), " pastes in the last thing you yanked or deleted (copied or cut) after the cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "P"), " pastes in the last thing you yanked or deleted (copied or cut) before the cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "2p"), " pastes in the last thing you yanked or deleted (copied or cut) twice."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "xp"), " this will swap two characters. Technically it just deletes the character under your cursor, then pastes it back in. This is the equivalent of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dlp"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"*p"), " Pastes in text from your system clipboard."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"2p"), " This will paste in text from the second register. You will use this all of the time. Most useful when you delete something you want to paste, then delete something else. Move to the place where you want to paste text, hit p and go \"doh\". Just remember ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"2p"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"%p"), " Pastes in the name of the current file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":212pu"), " Pastes in last copy or delete on line 212. 212 can be any line number."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":42pu *"), " Pastes in system clipboard text at line 42."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"/p"), " Pastes in your last search pattern."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":<c-r>/"), " Pastes in your last search pattern when you are on the command line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"ap"), " Pastes in the contents of register a. To see a list of registers and what they have in them, do ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":reg"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":registers"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"= 8*8<CR>p"), " Pastes in evaluation of the expression ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "8*8"), ". This could be any maths you want. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "="), " is the expression register, which allows you to do calculations.\nFrom normal mode you can launch it by hitting ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"="), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "q"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "q records things - so it doesn't do much on its own. You need to tell it what register to store the recorded sequence in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "qa"), " Begins recording into register a. Enter in keystrokes you want to save, then hit ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "q"), " to end the recording."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "@a"), " Will play back what you just recorded into register a."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you wanted to increment a set of numbers in a line of text like ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".icon-1 { background-image:url(img-1.png); }"), " you could do.\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "qa0yyp/\\d<CR><c-x>n<c-x>0q"), " now if we run ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "@a"), " and our cursor is on the line with code we want incremented, it will copy that line.\nand bump both of those numbers up to 2. And if we run it again with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "@@"), " it will increment all the twos to threes on a new line. Or we could give it a count with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "99@a"), " and get all the numbers up to 100."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":q"), " quits file only if you have no unsaved changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":q!"), " quits file without writing any of your changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":wq"), " saves and quits file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":12,42wq"), " saves lines 12 to 42 and quits file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":wqa"), " saves and quits all files in buffer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "r"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "r"), " Replaces character under cursor with next input i.e."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "ra"), " Replaces the character under the cursor with a."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "R"), " Enter \"replace mode\" which is like insert mode except you will overwrite characters instead of insert between them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":r filename"), " Read the contents of filename and place into the current buffer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":r !ls"), " Pastes in the output of ls. ! calls an external process in vim. So this can be pretty userful."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":r !cd -; ls"), " Pastes in the directory listing of the last directory you were in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":r !w3m -dump http://somewebsite.com"), " Pastes in the content from somewebsite.com without any of the markup. Must have w3m installed. WHICH YOU SHOULD :) If you have homebrew installed you can simply run ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "brew install w3m"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":r !tree"), " Pastes in the output from running tree on a directory."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":reg"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":registers"), " Print out a list of available registers and their contents. Registers are like a multi-shelf clipboard. But it also stores all of your recent deletes. In vim delete behaves more like cut than a true delete."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "s"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "s"), " deletes the character your cursor is on and enters into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "S"), " deletes the whole line you are on and enters into insert mode."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":sp"), " This will split the current window horizontally. Sp is short for split."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":sp file.txt"), " This will split the current window horizontally with a file named file.txt."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":vsp file.txt"), " This will split the current window vertically. vsp stands for vertical split."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "s is how you do find and replace, so let's just say it is all of the important."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":s/foo/bar"), " replaces foo with bar on the current line for the first occurance of foo."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":12,42s/foo/bar"), " replaces foo with bar on lines 12,42 for the first occurance of foo in each line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":12,42s/foo/bar/g"), " replaces all occurances of foo with bar on lines 12,42."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%s/foo/bar/g"), " replaces all occurances of foo with bar for the entire file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":'<,'>s/foo/bar/g"), " replaces all occurances of foo with bar for the last visual selection."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%~"), " Repeat last substitute with same substitute string but with last used search pattern across the entire file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%s/\\ class=\".*\"//g\""), " Delete all classes in markup for the current file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%s/\\ id=\".*\"//g\""), " Delete all ids in markup for the current file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":bufdo %s/\\ class=\".*\"//ge | update"), " Delete all classes in markup for all files in buffer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":tabdo %s/\\ class=\".*\"//ge | update"), " Delete all classes in markup for all files in the current tab."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":%s/\\s\\+$//e"), " Removes trailing whitespace."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "t"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "t"), " means 'til' so it doesn't do anything on its own. It is very similar to f but f is inclusive. T is exclusive meaning it will stop before the character you are finding."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "tf"), " put cursor one character before the next occurance of f."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ";"), " repeat latest f, F, t, or T."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ","), " repeat it in the opposite direction."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dt<"), " Delete up until the next ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<"), ". This is handy in the markup world."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dt\""), " Delete from cursor until next \"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dT}"), " Delete backwards from cursor until previous }."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "u"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "u"), " Undo changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "U"), " Undo all latest changes on one line, the line where the latest change was made."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-r>"), " Redo changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-u>"), " Scroll window upwards to the amount set by the \"scroll\" option. Default is half a screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "EX Commands"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":undol"), " List all the history points in your tree of changes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "v"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "v"), " Start visual mode on a per character basis."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "V"), " Starts visual mode linewise (selects whole lines)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "CTRL-v"), " Starts visual mode blockwise (very favorite)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "gv"), " Reselect last visual selection."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "w"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "w"), " Moves to the next word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "3w"), " Moves to the third word."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "x"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "x"), " delete character under your cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "X"), " this will delete a character before the cursor. Same as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "dh"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "y stands for copy, I mean yank. It doesn't do anything by itself. It is very similar to c and d in how it can be used."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yy"), " Copies current line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"xyy"), " Copies current line into register x."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "\"jY"), " Copies current line into register j. If you like \"Y\" to work from the cursor to the end of line (which is more logical, but not Vi-compatible) use \":map Y y$\"."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":12,112y"), " Copies lines 12 through 112."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "mk { motion } y'k"), " Mark a spot k, navigate to a new spot and then copies from mark k to the current position of your cursor."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yt\""), " Copies from current cursor postion to the next quote on the same line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yt>"), " Copies from current cursor postion to the next > on the same line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yT>"), " Copies from current cursor postion to the previous > on the same line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yf>"), " Copies from current cursor postion up to and including the next > on the same line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "yF>"), " Copies from current cursor postion up to and including the previous > on the same line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-y>"), " Scroll up by 1 line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "12<C-y>"), " Scroll up 12 lines."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "z"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "z<CR>"), " Redraws the screen so that your cursor line is at the top of the window. Same as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "zt"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "z-"), " Redraws the screen so that your cursor line is at the bottom of the window. Same as ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "zb"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "zz"), " Redraws the screen so that your cursor line is at the middle of the window."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "SEARCH"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "*"), " search forward for the word under cursor in current file. Super useful for finding common hex codes in css. And other things."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "#"), " search backward for the word under cursor in current file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/"), " Forward search for things."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/<p>"), " Forward search for the next opening paragraph tag."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/\\"), " Forward search for the next space."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "/^}"), " Forward search for closing bracket of a css class, if the css class is closed at the beginning of a new line i.e."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".class {\n    font-size: 20px;\n    line-height: 1.6;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "?"), " Backwards search."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "?http"), " Search backwards for the string ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "http"), "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "MISC"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "=="), " Format current line of code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ">>"), " Indent current line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "."), " Repeat last change."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "@:"), " Repeat last command line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set paste"), " Set this if you are pasting in content from the system clipboard. Trust me."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set paste!"), " Using ! at the end of any set reverses the current setting. This is useful so that you only have to remember one command and you never have to remember current state. For instance to be able to see line numbers you can do ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set nu"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set number"), ". To undo these commands, you would set ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set nonu"), " or ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set nonumber"), ". This seems like a lot to remember. An alternative is using ! like so ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":set nu!"), " This will reverse whatever state set number currently resolves to. If line numbers are currently shown, they will be hidden. If they are hidden, they will become revealed. I use this pattern a lot when changing settings of file."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Ranges"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":12,54="), " Format lines 12 through 54."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":56,99>"), " Indent lines 56 through 99."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ":52,84y"), " Yank / copy lines 52 through 84."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "12>>"), " Indent 12 lines including the line you are on."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Page Scrolling"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Remember ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-"), " means the control key. So ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-b>"), " would translate to pressing control and b at the same time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-b>"), " Scroll backwards one full screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-u>"), " Scroll backwards or 'up' a half screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-d>"), " Scroll forwards or 'down' a half screen."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-f>"), " Scroll forwards."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-y>"), " Scroll backwards count lines (defaults to one)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-e>"), " Scroll forwards one full line."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, "<C-y>"), " Scroll backwards one full line.")));
}
MDXContent.isMDXComponent = true;

/***/ }),

/***/ "zYTo":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("UlNW");
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("DAj8");
/* harmony import */ var _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4JT2");
/* harmony import */ var styled_system__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_system__WEBPACK_IMPORTED_MODULE_2__);



var Div = _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default()('div', {
  shouldForwardProp: _styled_system_should_forward_prop__WEBPACK_IMPORTED_MODULE_1___default.a
})(styled_system__WEBPACK_IMPORTED_MODULE_2__["space"], styled_system__WEBPACK_IMPORTED_MODULE_2__["width"], styled_system__WEBPACK_IMPORTED_MODULE_2__["height"], styled_system__WEBPACK_IMPORTED_MODULE_2__["maxWidth"], styled_system__WEBPACK_IMPORTED_MODULE_2__["position"], styled_system__WEBPACK_IMPORTED_MODULE_2__["top"], styled_system__WEBPACK_IMPORTED_MODULE_2__["left"], styled_system__WEBPACK_IMPORTED_MODULE_2__["right"], styled_system__WEBPACK_IMPORTED_MODULE_2__["bottom"], styled_system__WEBPACK_IMPORTED_MODULE_2__["display"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flex"], styled_system__WEBPACK_IMPORTED_MODULE_2__["flexWrap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["alignItems"], styled_system__WEBPACK_IMPORTED_MODULE_2__["justifyContent"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontFamily"], styled_system__WEBPACK_IMPORTED_MODULE_2__["fontSize"], styled_system__WEBPACK_IMPORTED_MODULE_2__["textAlign"], styled_system__WEBPACK_IMPORTED_MODULE_2__["color"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borders"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderColor"], styled_system__WEBPACK_IMPORTED_MODULE_2__["borderRadius"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridColumnGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridRowGap"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridColumn"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridRow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoFlow"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoColumns"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridAutoRows"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateColumns"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateRows"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridTemplateAreas"], styled_system__WEBPACK_IMPORTED_MODULE_2__["gridArea"], {
  boxSizing: "border-box"
});
Div.defaultProps = {
  width: 1,
  color: 'inherit'
};
/* harmony default export */ __webpack_exports__["a"] = (Div);

/***/ })

/******/ });