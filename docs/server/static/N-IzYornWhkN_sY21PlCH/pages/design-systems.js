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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("AGl8");


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

/***/ "AGl8":
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
/* harmony import */ var _elements_Div__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("zYTo");



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
    title: "Design Systems",
    published: "06-10-2015",
    mdxType: "PostHeader"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\"Just as in nature systems of order govern the growth and structure of animate and inanimate matter, so human activity itself has, since the earliest time, been distinguished by the quest for order. Even the most ancient peoples created ornamnets with mathematical forms of great beauty. The desire to bring order to the bewildering confusion of appearances reflects a deep human need.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Josef Muller-Brockmann"), " - Grid Systems"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\"IMMACULATE typography is certainly the most brittle of all the arts. To create a whole from many petrified, disconnected and given parts, to make this whole appear alive and of a piece \u2014 only sculpture in stone approaches the unyielding stiffness of perfect typography. For most people, even impeccable typography does not hold any particular aesthetic appeal. In its inaccessibility, it resembles great music. Under the best of circumstances, it is gratefully, accepted. To remain nameless and without specific appreciation, yet to have been of service to a valuable work and to the small number of visually sensitive readers \u2014 this, as a rule, is the only compensation for the long, and indeed neverending, indenture of the typographer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "THE REAL reason for the number of deficiencies in books and other printed matter is the lack of - or the deliberate dispensation with tradition, and the arrogant disdain for all convention.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("cite", {
    class: "f6 f4-ns fs-normal mt0"
  }, "**Jan Tschichold** - The Form of the Book")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Form & Variance"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The web is fluid. This should be considered when designing screens that are to be rendered by browsers. Last month people visited bluebottlecoffee.com using 1,222 different screen sizes. Building sites that are responsive is only one of the design considerations this introduces. How do you build an interface that is well balanced across all screen sizes? How do you build these interfaces quickly? How do you build them to be readable? How to do you build them to be performant? How do you account for the unknown?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Accounting for the Unknown"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Besides designing for an ever growing number of screensizes and resolutions we must also account for the settings a user picks for their browser. One of these settings is the base font-size. While this can't be detected with site analytics, it's estimated from user research studies that 10-12% of people set their default font-size to something other than 16px. So how do we build designs that scale proportionally and relatively for the myriad of combinations between devices and font-sizes that people choose to view the web on? How do we design components and interfaces to be harmonious with each other in the faces of so many unknowns?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Proportions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Using relative sizing units - we can ensure that measurements will remain proportional no matter what font-size a user has chosen. An explicit pixel value however - will not scale relative to a users settings. This leads to designs that may be responsive - but do not posess the desired visual harmony. Static comps with explicit pixel values are not reflective of the raw materials that make up the web."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Alignment"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The reality of front-end development is that people of varying skill levels will inherently touch your front-end code. This is not a bad thing, but it is a problem that requires design solutions. You must have a system in place that makes it easy for people to build well balanced interfaces with as little difficulty as possible. Not everyone will care about the quality of code, or how it renders to the browser. Not everyone will test the interface on a wide variety of devices with various font-size settings. The best solution I have seen so far is to use a defined system for people to work within, that doesn't make them think about things they don't want to think about. The result of this is that regardless of the interface you are working on - your components will all have the same sets of relative proportions and things will just magically line up without time lost to debugging or re-inventing the wheel."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "It's just text"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The web, is mostly text. People have been studying typography for centuries and we would be smart to leverage the findings of brilliant designers dedicated to this craft. Regardless of the medium - most great design is mathematically based. When designing around text, modular scales and attention to proportion is considered to be the start of a sound approach. Consider this exerpt from Tschichold's \"Form of the Book\":"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "The geometrically definable irrational page proportions like 1:1.618 (Golden Section), 1: V^2, 1: V^3, 1: V^5, 1:1.538, and the simple rational proportions of 1:2, 2:3, 5:8 and 5:9 I call clear, intentional and definite. All others are unclear and accidental ratios. The difference between a clear and an unclear ratio, though frequently slight, is noticeable.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While all of these scales would be a good starting point to use for creating a beautiful and harmonious design - all but one lead to sequences of non integer numbers. The 1:2 scale (powers of two) leads to a series of integers that browsers don't have difficulty rendering. While computers were largely invented to compute mathematical problems, browsers are notoriously horrible at math. They compute simple arithmetic equations and render values inconsistently. To avoid complicated and unsolvable debugging sessions where things don't line up - integers are the best route."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "These ratios are common patterns that can be seen in print, architecture and music so often it is hard to deny them as an elegant underlying order."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Katsura Villa, a Japanese residence and temple is \"founded on the unit of the tatami mat which measures 90:180cm\" or a 1:2, powers of two ratio. \"The aesthetics of this architecture lie in the beauty of its proportions and the materials used.\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "http://mrmrs.cc/writing/img/design-systems.JPG",
    "alt": null
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_elements_Div__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    display: "flex",
    mdxType: "Div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_elements_Div__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    width: 1 / 3,
    px: 1,
    mdxType: "Div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "http://mrmrs.cc/writing/img/ds-1.jpeg",
    "alt": null
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_elements_Div__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    width: 1 / 3,
    px: 1,
    mdxType: "Div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "http://mrmrs.cc/writing/img/ds-2.jpeg",
    "alt": null
  })))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_elements_Div__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    width: 1 / 3,
    px: 1,
    mdxType: "Div"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "http://mrmrs.cc/writing/img/ds-3.jpeg",
    "alt": null
  }))))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Katsura Villa"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A scale comprised of ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "5, 10, 20, 25, 30 etc. cannot be represented by a ratio"), ". They are ticks on a numberline not seen anywhere else in nature, print, architecture or music when studying cohesive design systems."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Why use 16 as a base?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The default font-size for most browsers is 16px and this is no accident. This is a font-size comparable to type in a book. While printed type is often smaller it's partly because books are often times held closer to the face then digital screens. While mobile phones and tablets are generally held at the same distance as books they are also used while moving more frequently - this movement affects the readability of word shapes and so 16px is generally the smallest type for content you want to serve up to a user."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In this sample list of graphics display resolutions, you will notice that all of these numbers are divisible by 16, one exception that is not listed here is the SXGA+ graphics resolution that is not approved by any organization and was a break from the mold. It resulted in some weird graphics problems... but that is a different story for a different time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Granted not all browsers are used at full screen 100% of the time - but it's a good thing to consider when trying to create proportional designs that scale well. While we aren't print designers working within a fixed medium - there are consistencies in almost every graphics resolution which we can use to our advantage. It should be noted that these numbers are often times indivisible by 5 and only divisible by 10 50% of the time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("table", {
    border: "0",
    cellspacing: "5",
    cellpadding: "5",
    class: "f5 w-100 code"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tbody", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    class: "tl fw6"
  }, "Name"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    class: "tl fw6"
  }, "x (px)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    class: "tl fw6"
  }, "y (px)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    class: "tl fw6"
  }, "x:y x\xD7y"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("th", {
    class: "tl fw6"
  }, "(Mpx)")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1152"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "768"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "3:2"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "0.884")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1280"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "768"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "5:3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "0.983")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1280"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "800"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "16:10"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.024")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1360"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "768"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "~16:9"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.044")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "FWXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1366"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "768"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "~16:9"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.049")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "XGA+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1152"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "864"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "4:3"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "0.995")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WXGA+"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1440"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "900"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "16:10"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.296")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "WSXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1440"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "960"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "3:2"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.382")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("tr", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "SXGA"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1280"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1024"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "5:4"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("td", {
    class: "pv1 bb b--light-gray"
  }, "1.310")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "While 5 and 10 are common units because we are often born with ten digits on\nour hands - it seems more suitable to use 16 as a base measurement for this\nmedium. Time in music is most commonly divided this way as well. 1/16, 1/8, 1/4\n1/2 and whole notes. These paralells are not a coincidence. Math and music are\nthe sisters of design."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Inclusive Design"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It's easy to fall into the trap of designing for one context. If you have\nworking legs, you are not likely to notice that a building has been constructed\nwith a long staircase that is not accessible to someone in a wheelchair. If you\ncan't walk up stairs, you definitely notice."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It's important to not make assumptions about our users and their capabilities.\nAnd we have to actively question our designs and identify where we are making\nassumptions. I have better than 20/20 vision. When I first started out as a\ndesigner I used a lot of small font-sizes. I thought they looked aesthetically\npleasing. I still do."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "But when I'm designing, I'm not designing for myself. I'm designing for\neveryone. It should be considered that compared to a 20 year old's retina, the\nretina of a 40 year old only receives about 50% of available light. An 80 year\nold retina only receives about 20%. So text set at lower font-sizes and/or low\ncontrasts are actually impossible for some people to read. For reference, a\nquick scan of age demographics from my personal site analtyics reveals that\n40%+ of people that visit my websites are above the age of 35", "."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Everyone can read large type."), " Not everyone can read small type. In a\nsimilar fasion: everyone can walk up a ramp, while only some people can walk up\nstairs. I think we should be welcoming to our web guests and cater to their\naccessibility needs because it's the right thing to do. It's a frustrating\nexperience to be required to zoom in just to read text. So let's not make\npeople do it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Bibliography / Further Reading"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://alistapart.com/article/more-meaningful-typography"
  }), "Modular Scales")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://www.frankchimero.com/writing/what-screens-want/"
  }), "What Screens Want")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://www.frankchimero.com/writing/the-webs-grain/"
  }), "The Web's Grain")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://www.amazon.com/The-Form-Book-Morality-Typography/dp/0881791164"
  }), "The Form of the Book")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://ia.net/topics/100e2r"
  }), "Easy-2-Read Standard")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://jxnblk.com/writing/posts/mathematical-web-typography/"
  }), "Mathematical web typography")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://en.wikipedia.org/wiki/ISO_216"
  }), "ISO 216")))));
}
MDXContent.isMDXComponent = true;

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