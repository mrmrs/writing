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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
/******/ })
/************************************************************************/
/******/ ({

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Zf+q");


/***/ }),

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

/***/ "Zf+q":
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
    title: "Css and Scalability",
    published: "30-03-2016",
    mdxType: "PostHeader"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Several years ago I got curious about how css worked at scale. When I first started out, there weren\u2019t nearly as many learning resources as there are now. There were a few books that my friends lent me and a couple of decent blog posts. But css was still pretty new and most people hadn't started to think deeply or learn hard lessons about concepts of maintainability when working with teams on large web apps."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Css zen garden was a highly influential demo 'back in the day.' Most of my colleagues and I thought this did a perfect job at illustrating the power of the cascade. You could drastically alter a site's visual design without touching even a bit of html."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In the beginning, that\u2019s what people sold me as a feature. By writing css, you could make a change in one place and have it propagate everywhere. In principle this sounds highly desirable. But eleven years later, my experience on both large and small teams is that this is the most terrifying thing about css and can cripple an organizations ability to iterate on their product."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "Two css properties walk into a bar.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    parentName: "p"
  }), "\n", "A barstool in a completely different bar falls over."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("cite", {
    class: "mt0 fs-normal"
  }, "[- @thomasfuchs](https://twitter.com/thomasfuchs/status/493790680397803521 \"Thomas Fuchs on Twitter\")")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "After countless implementations of css systems that broke down and became difficult to maintain as apps and teams grew larger...I've found I want little to no part of the cascade's 'features.'"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I used to joke that the worst part about front-end development was that the other people solving your problems were front-end developers. But in the past few years a lot of very smart people have been thinking more about css and this has lead to some fascinating discussions around how to build \u2018scalable\u2019 ui and how that relates to css. When I first started to think about scalability I naturally started to read every blog post and watch every tech talk I could get my hands on. There are a number of suggested 'best practices' around how sass/less/stylus etc. will help you build maintainable css. How mixins can make your code more DRY. How extends will keep your markup clean and pretty to look at. How BEM will make your code so perfect you want to cry."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "But what is reality? What actually gets shipped to production? What do all of these tips and tricks do to our production css? How does it affect the whole team? More important, how are your end users affected?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When it comes to designing and shipping products I like to think about reality. Which can be challenging sometimes. I\u2019ve sat in too many meetings where people don't want to hear or talk about reality. They talk in empty phrases about hypothetical possibilities. I like to do drugs and talk like that too sometimes. But, if you don't accurately assess where you currently are and what your reality is, it can be pretty tough to figure out what your problems are. And the chance of finding solutions to unidentified problems is, well, not good."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So there I was, in the fall of 2014, a new employee at an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://salesforce.com",
    "title": "sfdc dot com"
  }), "award winning tech company"), " that had a website. And that website had a lot of css. Wanting to familiarize myself with the codebase - I opened up dev tools and started to read the site's css."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Line by line.", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    parentName: "p"
  }), "\n", "From start to finish.  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of the code made me laugh:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "/* Start of reusable styles here */\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of the code made me cry."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".homepage-promos .grid-50 {\nwidth: 100%\n}\n.homepage-promos .grid-33 {\nwidth: 100%\n}\n.homepage-promos .grid-34 {\nwidth: 100%\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of it made me laugh and cry at the same time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "#seo-container {\n    display: none;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of it made me wonder where numbers come from"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".product-tab {\n  height: 530px;\n  width: 99.7%;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of it made me thankful that I have read the spec"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".container-inner.promo-status {\n     float: center;\n  }\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Eventually, I stumbled across this class of code."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".left {\n  float: left!important;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I saw this class and thought - well at least you know what it does. Unlike some of the other css it seemed like it was very reusable. By anyone who needed to float something left."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I kept reading and stumbled across this:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".left-max-scr1,\n.left-max-scr2,\n.left-max-scr3,\n.left-only-scr1 {\n    float: left;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\u2026followed by this very similar block of code\u2026"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".left-min-scr2,\n.left-min-scr3,\n.left-max-scr3,\n.left-only-scr3 {\n    float: left;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I found myself wondering what the story was behind this next code block. Is it for elements with the class .header-nav-list that aren\u2019t nested inside an element with the class .header-nav-container?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".header-nav-container .header-nav-list {\n    float: left;\n}\n\n.CA .header-nav-list.second {\n    float: left;\n}\n\n#nav.challenger-a .submenu-3col li,\n#nav.challenger-a .submenu-3col li {\n    float: left;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Here we start to see a mixture of content-semantic (.submenu) with visually semantic class names (-3col)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".ie6 #footer-content .flex-control-nav li a,\n.ie7 #footer-content .flex-control-nav li a,\n.ie8 #footer-content .flex-control-nav li a {\n    float: left;\n}\n\n#nav.challenger-a li.menu-products {\n    float: left;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Css is interesting because unlike other types of code, you are most likely to find the most recent code towards the bottom of the file. Reading a css file from start to finish will often times reveal in chronological order how a defined system breaks down."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In the above examples we see things breaking down to increasingly longer selectors that have more and more weight that were only setting one property to one value: float: left."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Mind you, there are only three options for float. Contrary to one of the code examples above, there is no float center. Just left, right, and none."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Reading the css made me think about a lot of things. One thing I couldn\u2019t get out of my head was - why all this work to change one thing? Why write all that code to just float something left?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "To me, this is a reflection of the mental model most people are in when they are writing front-end code. They are generally trying to change one or two things in an interface and that\u2019s it. And when you are in this mode of development you want to limit the amount of things you break - while also making the change that is being asked for in some jira ticket that got assigned to you."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I also started to think about communication and how it moves in multiple directions. If I\u2019m reading html, I want to know what the css is going to do. If I\u2019m reading css I want to know what will happen if I apply it to a block of html. In a great system there is a two way street of information. If you look at the css, you can tell what will happen. If you look at the html, you know what the code will do."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "But most front-end systems are not great. You have what I refer to as one-way streets of information. If I am looking at a block of html and I can\u2019t find ALL of the css that will visually affect how it renders in under 5 seconds, I feel that system is failing. So if I ran into the above example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("inlineCode", {
    parentName: "p"
  }, ".container-inner.promo-status")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "That means I would have to find elements that had both of those classes (but not limited to) on an element. But by looking at this block of css I also have no idea if it has been redefined elsewhere. So I must grep through the system to find definitions for container-inner and promo-status. By the time I found those definitions - I would probably have forgotten what I was trying to do in which case I\u2019d leave my desk and go get coffee."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "On the flip side think about this example:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), ".red {\n  color: #FF4136;\n}\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I\u2019d presume that this would make an element have red text. I was traditionally told this is a horrible name for a class. But I quite like it. The only way I\u2019d think it was bad is if it set the color property to: purple, blue, or any other color that wasn\u2019t red. Or if it was mutated a few times to a few different shades of red. But more on that later."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "And if I saw this block of html:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "<div class=\u201Cred\u201D>Some text</div>\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I\u2019d know without looking at the css what was going to happen. This is what I call a two-way street of information. It\u2019s easy to learn a group of small classes that do one thing well and can be reused in any context. There should be a one to one mapping between a class and it\u2019s definition. Having a class that has multiple definitions be being redefined depending on context doesn\u2019t solve problems, it creates them. The concept of immutability is not new - but we\u2019ve ignored it in the css community for far too long. Imagine if you had a function called \u2018filesize\u2019 where you passed it a filename and it returned the filesize. That sounds pretty great. But imagine if sometimes it returned the amount of lines in the file. That doesn\u2019t sound great at all does it. Well that\u2019s what you\u2019re doing anytime you redefine a css class. It\u2019s the worst for people who are good at debugging css. It\u2019s even more horrible for people new to the cascade."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When we look at convoluted css, we must remember that behind every css ruleset is a story. Maybe the author was on a time crunch and didn\u2019t have time to look up if there was some previously written code they could reuse. Maybe they don\u2019t care about css at all and the second something works they save, commit, and go back to writing monads. When I write bad code, it isn\u2019t because I\u2019m not trying to write good code. There are always other forces at work. What are the forces that work against writing clean reusable code? How do we get rid of them? I\u2019ve spent the last few years doing a lot of user testing centered around how people write their own front-end code, consume other peoples front-end code, and think about developing UI in general. It has been a pretty valuable experience (as user-testing generally is). I\u2019ve learned a lot about the different mental models people use - and how to try to construct systems that allow people of all abilities to spend more time designing / building and less time debugging/fighting/crying."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Sidenote:"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "(I don\u2019t know where to fit this in)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("br", {
    parentName: "p"
  }), "\n", "Before I started doing both performance and user testing I did not like the idea of oocss/atomic css. I really liked writing monolithic classes and traversing the dom with my selectors. It made a ton of sense to me and I was able to build out a lot of websites that way. Running tests and testing my assumptions helped inform a lot of how I think about code now. I\u2019m not very interested in what I can do with css. I\u2019m interested at this point in what I can help groups of people do with css."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you\u2019re going to build a new component, or change a piece of UI in your app - what do you do? I don\u2019t know anyone that reads all the available css in the app to see if there is something they can reuse. Who has time to read thousands of lines of code before they start working!? Even if people do have the time, I have not found that this is their first instinct on how to get going. I don\u2019t blame them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Even if you did read all of the available css and stumbled upon some code that you think might be reusable - what if someone edits it later? If you are starting from the assumption that your css isn't reusable, your first instinct is to write new css. But most likely you aren't creating a new classification of visual styles. In my experience it is likely that you are replicating visual styles that already exist."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Salesforce may pay people a lot of money. And they may win Forbes awards for being the most innovative. But they are not known for hiring people who are great at css. Their css is anything but innovative. After reading all of the css and going through bits of crying, head-scratching, and laughing out loud - I determined that this problem must only exist at Salesforce. Surely awesome companies like Medium, GitHub, Adobe, and Pinterest didn\u2019t have this problem. They\u2019ve hired some of the most amazing css developers I\u2019ve ever met. They must have figured out how to scale css."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Naturally I opened up their sites and started to read their css too. Line by line. From start to finish. I wanted to see what everyone\u2019s reality really was."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I found the exact same things."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Let\u2019s take a look at just the rulesets that set things to display none:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://gist.github.com/mrmrs/786241f0a5fade0324e2",
    "title": "GitHub"
  }), "GitHub")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://gist.github.com/mrmrs/57705f9a9fdce4d3d6f7",
    "title": "Pinterest"
  }), "Pinterest")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://gist.github.com/mrmrs/07e2ad668bac33e2da67",
    "title": "Medium"
  }), "Medium")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://gist.github.com/mrmrs/2d5592826adb45748bac",
    "title": "Adobe"
  }), "Adobe"))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "That\u2019s a lot of code setting things to display: none. If you look at the files above ask yourself some questions: Do they seem like they follow the principles behind DRY? Does this seem like a bunch of code you would know how to reuse?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If I\u2019m going to write css, I want it to be reusable. If someone isn\u2019t going to reuse it - it seems pretty useless."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So what does DRY even mean? Because you do have to repeat yourself somewhere! You either repeat yourself in html or in css. But no matter how good you are at css - you can\u2019t build out a new component without editing html. But, it is possible to build a new component without writing a single line of css. And this applies to changing UI too. You should be able to change most things, just by editing html."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When you repeat yourself in html, there isn\u2019t any real damage to file size (read: multi-class patterns will not bloat your html). A user doesn\u2019t have to download every html file from your website to view one page. Yet most web sites are architected in a way that require you to download the css for the entire site when you try to view one page. This is a broken model."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The files I referenced above are the result of css authors generating really long selectors that add a lot of weight to your cascade to do one or two things. And as time goes on there are more and more things in your cascade to override. So your selectors get longer and longer, your file sizes get bigger and bigger, and the amount of time you spend debugging css is going to go up and up and up."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "In this model, you will never stop writing css. Refactoring css is hard and time consuming. Deleting unused css is hard and time consuming. And more often than not - it\u2019s not work people are excited to do. So what happens? People keep writing more and more css."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This affects scalability in two ways. One, it makes it harder to work on your app because you can't realistically memorize all of the css in your app. And if it isn't internalized it isn't likely to be reused. It also means that your users have an increasing amount of code to download. And if you think \u201Coh but it will never get that bad, gzip will save the day\u201D - well you\u2019re wrong. Pinterest has more than 1mb of uncompressed css spread out over 5 files. Once gzipped it is still a whopping 159kb. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "That is a lot of css"), ". 97% of it isn\u2019t used on the homepage. I\u2019d rather just try and send my users the 3% they do need."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Part of this code bloat is an attachment to authoring \u2018content-semantic\u2019 class names. Honestly I\u2019m surprised you can find people that still think this isn\u2019t the worst idea ever. ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://nicolasgallagher.com/about-html-semantics-front-end-architecture/"
  }), "Nicolas Gallagher already wrote the mic drop piece on why this doesn\u2019t work."), " But for some reason you still find people arguing for its merits as a silver bullet solution. Personally I think most of the internet is unnecessarily broken. So I assume everything we have been taught is most likely wrong."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This is where we come to the crux of the problem I have with any system that requires you to map visual styles to components in your css. Content semantics have ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "nothing to do with visual styles"), ". When I used to build things with legos I never thought \u2018oh this is a piece for an engine block\u2019 I thought \u2018oh cool this is a 1x4 blue lego and I can do anything I want with it\u2019. It didn't matter if I was building an underwater aquanauts base or an airplane - I knew exactly how to use that lego block."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "It\u2019s all about lego bits. Because I never needed to re-contextualize my understanding of lego blocks. I could use them across \u2018projects\u2019 and they were always the same. I dream of this world in front-end development. I want lego blocks that work everywhere because there is serious power in leveraging solutions that are project agnostic."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Outside of some brand specific background-images, gradients, and colors etc., the overwhelming majority of css you would need for your site has already been written. Yet we continue as a community to constantly reinvent the wheel. Which is starting to feel like building a camera from scratch every time you want to take a photo. I totally think building cameras from scratch is cool and a worthwhile endeavor. But I don\u2019t want to do it every time I am going to take a photo. I just want to go take photos."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When I read about or listen to ideas on how to scale an app\u2019s css - most of the talk is about how to write css. The real way to scale css, is to stop writing css. Abstract out the things you use most and move to a multi-class pattern where you compose visual patterns in your html. You might be amazed at how quickly your team starts to move."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There are a lot of problems that come along with people writing css. Inconsistent values, the introduction of magic numbers, duplicate code, non-responsive patterns. I\u2019m sure there are others."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you create a system that is flexible and powerful, and pull from that, you might find your designs to be more harmonious. You might spend less time debugging the cascade. Your pages will probably load faster. But who knows. Maybe that won\u2019t work for you at all. All I know is the current model is definitely not going to work."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Writing new css should be the exception, not the rule."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Parting Thoughts"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you have never read your outputted css from start to finish - I recommend it as an amazing way to learn a lot about css and how people use it. After I read salesforce\u2019s css I started reading css in entirety for many sites. I still do this! I learn something new every time."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Don\u2019t take this as dogma. The real point of this whole piece is to encourage you to go test your assumptions. Not many people sit with other people building UI and just ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "observe"), " how they build out new features or refactor old ones. User-testing is such a great exercise to learn about how people use things. You can learn a lot from people who are great at writing front-end code and also people who are brand new to it. I wouldn\u2019t have learned much of this if I just sat around and tried to solve problems by myself or read all the latest hip blog posts. The reality is lots of people with varying levels of agency will touch your front-end code and you should design a system that works for everyone."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Thank you to everyone who has given me feedback on these thoughts over the last few years. And special thanks to the trailblazers that had the guts to challenge existing best practices and gave me the courage to do the same. I'm looking at you ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://twitter.com/stubbornella"
  }), "@stubbornella"), ", ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://twitter.com/necolas"
  }), "@necolas"), ", and ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://twitter.com/dam"
  }), "@dam"), ".")));
}
MDXContent.isMDXComponent = true;

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