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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("6lhf");


/***/ }),

/***/ "4JT2":
/***/ (function(module, exports) {

module.exports = require("styled-system");

/***/ }),

/***/ "4mXO":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("k1wZ");

/***/ }),

/***/ "6lhf":
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
    title: "Component Styling API",
    published: "18-06-2018",
    mdxType: "PostHeader"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("i", null, "This is a write up of a work in progress talk I gave at the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "http://webdeldn.rocks"
  }, "WebdeLDN meetup"), " last year.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I read a book one time called 'Refactoring your wetware'. There was an\ninteresting part about thinking about a problem as if you were looking at it\nfrom 10 thousand feet up in the air. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I was driving in Sunday morning traffic one time. I was on my way from San\nFrancisco to a flea market. The GPS in my car told me there was an exit coming\nup I should take and that I should get into one of the two lanes on the right.\nAbout a dozen blinkers turned on at the exact same time and cars started to\nmerge into the right two lanes. From 10k feet up i bet that looks pretty wild.\nYou hear an automated voice. All cars put on their blinker at the same time to\nbreak off from the highway to head to the same destination. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "Two completely different view points"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/fff.jpg?raw=true",
    "alt": "View of Cars"
  })), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/ggg.jpg?raw=true",
    "alt": "View from Cars"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I'm here to talk about Design systems, Css, Js and of course Css in Js.\nAnd what does that look like if we as a community try to think at 10,000 feet?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When I say 10,000 feet I don't just mean think abstractly. I mean actually do\nit.  You should visualize yourself being far above something. But what is the\nthing?  One thing I meditate on is looking at a timeline of history from very\nfar away. And if we look at a timeline of how humans have designed and built\nthings throughout history...how do the problems and the process in which we\nsolve them evolve? Particularly since we started styling digital ui with css?  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A guy I collaborate with that goes by the name John Otander ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://github.com/johno"
  }), "(@johno)"), " is pretty\ngood at thinking at 10,000 feet. He comes up with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "wild"), " ideas. Last year he decided to\ndownload the css for top million websites, in 1 month intervals, dating back to\n2005 (if available)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "My first thought was - that's pretty neat. We can show people their css graphed\nout over time. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/hhi.jpg?raw=true",
    "alt": "Graphs"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/hhj.jpg?raw=true",
    "alt": "Graphs"
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can learn a bunch just by analyzing your own site.  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "But, what does it look\nlike to see this at 10,000 feet?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "[Ask Audience]", "\nWhat do you think you could learn by analyzing this data? What kind of tools could you build with it?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some possibilities that come to mind for me:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Can analyze values and look for trends"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Find most common property value rules for given components with common class names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Identify pattern outliers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Find common mistakes and try to build automated tools to solve them"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Could overlay other data: Browser usage, timeline of introduction of various technologies (frameworks, addiitons to the spec, etc.)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "We can visualize the history of design systems. We can animate them and watch how they evolve over time! "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Given an array of urls, you could visualize the intersection of common values\nfor things like: type scale, colors, background colors, font-family. This can\nhelp show how consistently your brand is implmented across a number of\ndifferent front-end code bases. Most companies have different code bases\nfor: their marketing site, their blog, their app, docs, external status\npage, and potentially a number of other micro sites. Having a feedback\nloop of common values can be helpful when trying to standardize an\nexisting palette, or creating a feedback loop moving forward to see if you\nare becoming more or less consistent.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/hturan"
  }), "Harley Turan"), ", scraped a bunch of data and did exactly this. Here is a collection of color\npalettes pulled from multiple sites that belong to the same company visualized from 2009 through 2017."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    src: "https://github.com/mrmrs/component-api-talk/blob/master/slides/colors-time.gif?raw=true"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now those are just a few half-baked ideas around what you can do to analyze static\nfiles. And I'd love to do nothing else then to sit and chat about what we can do with\nall of this data but that's a different story for a different time. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Below is a list of css properties. I often think of css as the styling api for\nhtml. At first glance it's a lot of stuff. Especially if you're a beginner. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "But you can build a lot of pretty neat UI without worrying about a lot of these\nproperties and how they work. When I am a beginner one of the most difficult\nthings is figuring out what ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "to"), " worry about and what ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "not to"), ". I can confidently\nsay, when styling a button, I've never needed to set caption-side. Or\ncounter-increment, counter-reset, or volume for that matter. This doesn't mean you\nshould never use them, but they aren't common properties attached to button\nstyles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Can we use this pattern to potentially make front-end code more accessible for new people? "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Components could, essentially have all of the necessary visual styling properties\nexposed, where a designer can configure the values they want to pass in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Instead of a blank slate, they could discover common things to account for\nwithin different components. The pseudo state :focus would be a tough thing to\nintuitively account for if you've never worked on the web before.  Offering it\nin configuration can at the very least, offer guidance around what to research. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "List of Css properties")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "accelerator\nazimuth\nbackground\nbackground-attachment\nbackground-color\nbackground-image\nbackground-position\nbackground-position-x\nbackground-position-y\nbackground-repeat\nbehavior\nborder\nborder-bottom\nborder-bottom-color\nborder-bottom-style\nborder-bottom-width\nborder-collapse\nborder-color\nborder-left\nborder-left-color\nborder-left-style\nborder-left-width\nborder-right\nborder-right-color\nborder-right-style\nborder-right-width\nborder-spacing\nborder-style\nborder-top\nborder-top-color\nborder-top-style\nborder-top-width\nborder-width\nbottom\ncaption-side\nclear\nclip\ncolor\ncontent\ncounter-increment\ncounter-reset\ncue\ncue-after\ncue-before\ncursor\ndirection\ndisplay\nelevation\nempty-cells\nfilter\nfloat\nfont\nfont-family\nfont-size\nfont-size-adjust\nfont-stretch\nfont-style\nfont-variant\nfont-weight\nheight\nime-mode\ninclude-source\nlayer-background-color\nlayer-background-image\nlayout-flow\nlayout-grid\nlayout-grid-char\nlayout-grid-char-spacing\nlayout-grid-line\nlayout-grid-mode\nlayout-grid-type\nleft\nletter-spacing\nline-break\nline-height\nlist-style\nlist-style-image\nlist-style-position\nlist-style-type\nmargin\nmargin-bottom\nmargin-left\nmargin-right\nmargin-top\nmarker-offset\nmarks\nmax-height\nmax-width\nmin-height\nmin-width\norphans\noutline\noutline-color\noutline-style\noutline-width\noverflow\noverflow-X\noverflow-Y\npadding\npadding-bottom\npadding-left\npadding-right\npadding-top\npage\npage-break-after\npage-break-before\npage-break-inside\npause\npause-after\npause-before\npitch\npitch-range\nplay-during\nposition\nquotes\n-replace\nrichness\nright\nruby-align\nruby-overhang\nruby-position\n-set-link-source\nsize\nspeak\nspeak-header\nspeak-numeral\nspeak-punctuation\nspeech-rate\nstress\nscrollbar-arrow-color\nscrollbar-base-color\nscrollbar-dark-shadow-color\nscrollbar-face-color\nscrollbar-highlight-color\nscrollbar-shadow-color\nscrollbar-3d-light-color\nscrollbar-track-color\ntable-layout\ntext-align\ntext-align-last\ntext-decoration\ntext-indent\ntext-justify\ntext-overflow\ntext-shadow\ntext-transform\ntext-autospace\ntext-kashida-space\ntext-underline-position\ntop\nunicode-bidi\n-use-link-source\nvertical-align\nvisibility\nvoice-family\nvolume\nwhite-space\nwidows\nwidth\nword-break\nword-spacing\nword-wrap\nwriting-mode\nz-index\nzoom\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some people have told me that Component Styling API is a horrible name for this\nconcept and they're likely correct. But I haven't come up with a better name\nyet, so please let me know if you've got some ideas. I do think the following\ndescriptions, from a website called wikipedia, are interesting to consider."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "API: Application programming interface")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\"In general terms, it is a set of clearly defined methods of communication between various software components.\"\n\"By abstracting the underlying implementation and only exposing objects or actions the developer needs, an API simplifies programming.\"\n\"Thus, the design of an API attempts to provide only the tools a user would expect.\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Application_programming_interface"
  }), "https://en.wikipedia.org/wiki/Application_programming_interface")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When I'm styling a button, I don't expect to use volume. Or page-break. Or a\nnumber of other properties. The goal though is not to eliminate options, it's\nto narrow focus on the essential, allowing for expansion and exploration if\nnecessary. But this idea defining a component API has benefits extending beyond\nthis. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The most influential tip on how to think about designing a component I've ever\nseen is from Nicole Sullivan's excellent article ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/"
  }), "The media object saves\nhundreds of lines of\ncode")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\"When I\u2019m building a new object, the first thing I do is to figure out which parts are reusable components, and define what I know and do not know about them.\"\n\"For example: Can be nested, Optional right button, Must clearfix\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://stubbornella.org"
  }), "Nicole Sullivan")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I can't recommend this process for designing and developing components enough.\nOne of the things I like about react and css in js, is that it's easy to work\nwithin this mental model. It's helpful to actively think and sketch out what\nyou know and what you don't know. This can help you build components that are\nmore resiliant, flexible, and reusable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So, say we defined some scales, or options to work with for the following\nproperties. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Typography"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Font-family"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Line-height"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Type-scale"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Measure (max line length)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Font Weights"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Text Transform")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Layout"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Spacing"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Width")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Colors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Border Widths"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Border Colors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Border Radii"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Box Shadows")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", null, "Motion"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Animation speed"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Easing Functions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Movement patterns ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Maybe this would look something like this"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "const theme = {\n  breakpoints: [\n    36, 48, 64\n  ],\n  fontFamily:[ '\"Gotham\", \"Avenir Next\", \"Proxima Nova\",  \"Helvetica\"' ],\n  fontSize: [\n    12, 14, 16, 20, 24, 32, 48, 64, 96, 128\n  ],\n  fontWeight: [ 400, 600, 700 ],\n  lineHeight: [ 1, 1.25, 1.5 ],\n  colors: [\n    { text: \"#000\", bg: \"#fff\" },\n    { text: \"#374047\", bg: \"#f8f9f9\" },\n    { text: \"#7f8a93\", bg: \"#f8f9f9\" },\n    { text: \"#0077cc\", bg: \"#f8f9f9\" },\n    { text: \"#005da0\", bg: \"#f8f9f9\" },\n    { text: \"#00365d\", bg: \"#f8f9f9\" },\n    { text: \"#00a243\", bg: \"#fff\" },\n  ],\n  borderStyle: [ \n    'solid', \n    'double', \n    'dotted' \n  ],\n  borderWidth: [ 0, 1, 2, 4 ],\n  borderDirection: [\n    'all', \n    'top',\n    'bottom' \n  ],\n  radii: [\n    0, 3, 5, 17, 9999\n  ],\n  space: [\n    0, 2, 4, 8, 16, 32, 64, 128, 256, 512\n  ],\n  measure: [ '20em', '30em', '34em' ],\n  boxShadow: [ '0 0 16px rgba(0,0,0,.2)' ],\n}\n\nexport default theme\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Some of you might have already seen a file like this before. Maybe it was a js\nfile, maybe it was a sass, less, or stylus file. This is pretty boring and\nthere isn't anything new about it. It's just a theme."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Thinking about the previous quote by Nicole Sullivan...  What if I had to\ndesign a button and I wanted it to use values from our design system. We could\ndefine the styling API for a button. (People love buttons.)  Potentially, we\ncould define a template for a button styling API.  So we'd need to think about\nwhich properties we ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "always"), " want exposed. I think it's safe to say that people\nshould be able to set the background color on a button. The default color isn't\nperfect or anything. It's reasonable for a well designed interface to have buttons with\ndifferent background colors. As a section in the button API we'd also want to\ndeclare which properties should be available to style on hover. I believe it's reasonable\nto change the background color on hover. So I think that should also be a part of the\nAPI. Returning to the base part of the button API, it would be seemingly\nreasonable to be able to set the font-weight to something other than the\ndefault. In all my years of browsing the web I've never hovered on a button and\nseen the font-weight change and thought \"This is so nice.\" My first thought is\ngenerally \"Well this must be a bug.\" So here we could choose to leave font-weight out of\nthe hover, focus, and active sections in the API. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A generic template for a button styling API might look like this: "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "import theme from './theme'\n\nconst buttonThemeTemplate = {\n\n  // Typography \n  fontFamily: [ ],\n  fontSize: [ ],\n  fontWeight: [ ],\n  textTransform: [ ],\n\n  // Palette\n  colors: [ ],\n  backgroundColors: [ ],\n\n  // Borders\n  borderColors: [ ]\n  borderRadius: [ ],\n  borderStyle: [ ],\n  borderWidth: [ ],\n  borderDirections: [ ],\n\n  // Spacing\n  paddingTop: [], \n  paddingLeft: [], \n  paddingBottom: [], \n  paddingRight: [], \n\n  // Hover states\n  hoverColor: [ ],\n  hoverBg: [ ],\n  hoverBoxShadow: [ ],\n  hoverBorderColor: [ ],\n  hoverSize: [ ],\n  \n  // Focus states\n  focusColor: [ ],\n  focusBg: [ ],\n  focusBorderColor: [ ],\n  focusBoxShadow: [ ],\n  focusSize: [ ],\n\n  // Focus states\n  activeColor: [ ],\n  activeBg: [ ],\n  activeBorderColor: [ ],\n  activeBoxShadow: [ ],\n  activeSize: [ ],\n\n  transitionProperty: [ ],\n  transitionDuration: [ ],\n  transitionTimingFunction: [ ],\n}\n\nexport default buttonThemeTemplate\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Then we could define what values we want to pass in. We might pass in an entire\narray, declare literal values, pass in a filtered array. We have javascript. We\ncan do whatever we want!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "pre"
  }, {}), "import theme from './theme'\n\nconst buttonTheme = {\n  radii: theme.radii, // Entire scale\n  space: [\n    // Explicit steps from the scale\n    theme.space[3],\n    theme.space[4],\n  ],\n  fontSize: theme.fontSize.slice(0,-8), // Everything but the last 8 steps in the scale\n  fontFamily: theme.fontFamily[0], // An explicit step in the scale\n  borderStyle: [\n    theme.borderStyle[0],\n    theme.borderStyle[1]\n  ],\n  borderWidth: theme.borderWidth,\n  fontWeight: theme.fontWeight,\n  colors: theme.colors,\n  backgroundColors: theme.colors,\n\n  // hover, focus, active states\n  \n  hoverColor: [ \n    theme.colors[0].text, \n    theme.colors[1].text \n  ],\n  hoverBgColor: [ \n    theme.colors[0].bg, \n    theme.colors[0].bg \n  ],\n  focusColor: [ \n    theme.colors[1].text, \n    theme.colors[1].bg \n  ],\n  textTransform: ['uppercase', 'capitalized'],\n  transitionProperty: ['opacity', 'color', 'background-color'],\n  transitionDuration: ['.25s'],\n  transitionTimingFunction: ['ease-out'],\n}\n\nexport default buttonTheme\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "As a design community, we could make boilerplate config files for common ui components.\nOver time we could reinvent fewer and fewer wheels. This would allow us to go deeper on\nother areas that haven't been explored as much as button styles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This is where I think it gets ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "really"), " interesting."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Now we have a system.\nWe can use combinational logic to generate all possible combinations of buttons\ngiven the input provided by a theme file. We could also use this pattern to\ncreate a finite state machine, and visualize transitions between any discrete\nstate a given component can be in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "A simple config file like this generates thousands and thousands of button designs.\nHere is an example of generating avatars and buttons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://examples-jchwaftrgo.now.sh"
  }), "https://examples-jchwaftrgo.now.sh")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Or we can make this a finite state machine and animate between the options. You\nknow, if you don't like scrolling for days and days and days. (Again, animation\ncreated & provided by the one and only Harley Turan)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://examples-pofntyovxa.now.sh"
  }), "https://examples-pofntyovxa.now.sh")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p"
  }, "Let's step back and think at ten thousand feet again.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "We can show how many options a design system can generate. This can be\nhelpful because some people feel they might be constrained by working with\ndefined scales. This can help show how varied their visual designs can still\nbe. A lot of people still haven't worked with scales and as a creative person\nconstraint can be scary at first."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "We can quickly identify desirable regions, which can help us quickly discover\npatterns of inputs needed for a desired output. This can expose properties\nyou might want to couple together and set rules for. Sense of proportion can\nchange dramatically at each end of the scale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Could automatically a/b test design options with real user metrics "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Wire up options to an interface that allows for collaborative voting on which\ncomponent variations feel most on brand. You could even hook this voting up\nto a neural network."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "One of if not the most difficult part about image classification is coming up with the training data.\nThe generated data could help train an image classifier which will in turn\nhelp audit existing UI on websites. Imagine being able to input a url and\nquery the design with questions lke: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\"Show me all of the buttons.\" "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\"Show me all of the orange buttons.\" "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "\"Show me all of the buttons that have inaccessible color combinations.\"")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This is an exciting reality to live in. We can more quickly generate lots of design\noptions to test with real users. We can shorten the feedback loop around discovering\nwhat matters and what doesn't. This is a stark contrast to our current reality, which is that\nmost designs we ship have not been validated with real users. We don't design multiple options in\nparallel. We end up designing a single option that is optimized for getting stakeholder signoff in a series\nof status meetings."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "But at the very least this concept is exciting to me because I'm very lazy and\nI don't want to design buttons anymore."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "p"
  }, {
    "href": "https://github.com/mrmrs/component-api-talk"
  }), "Code examples on GitHub"))));
}
MDXContent.isMDXComponent = true;

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