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
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ({

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Sk1a");


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

/***/ "Sk1a":
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
    title: "The Veil of Ignorance",
    published: "23-03-2016",
    mdxType: "PostHeader"
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Imagine"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You are in your mid-twenties and your vision is 20/20 or better. You are not color blind and all the devices you own have a \u2018retina\u2019 screen. You are standing in a major city and your internet is fast."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Imagine"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Your vision isn't 20/20 anymore, just like 65% of the population, it\u2019s worse than that. Like 4.25% of people on the planet you are color blind. You are now 1 in 10", ".", " You are dyslexic. Your phone is 3 years old. You can't afford a new one. Your data plan caps out at 3g and 1 gigabyte a month. The internet connection where you spend most of your time is not what you'd like it to be."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Imagine"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You can't see at all. You use a computer with a screen reader. A mouse is mostly useless to you. You use your keyboard to navigate around interfaces and sites."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If you woke up tomorrow without knowing what your life would be like - and you needed to build a new internet for everyone. What would you think about? What would your priorities be? What problems would you try to solve?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "American philosopher John Rawls (1921\u20132002) had a lot of mind-crushing ideas, but perhaps the most significant was his concept of \u201Cthe veil of ignorance.\u201D It best applies to the creation of social contracts. At risk of oversimplification, Rawls\u2019s scenario was basically this: Let\u2019s pretend you were instantly able to re-create American society in totality, and you could do it in whatever way you wanted. You could make (or eliminate) whatever laws you desired, and you could implement whatever financial and judicial structures you believed would work best. However, you must do this under a magical \u201Cveil of ignorance.\u201D The moment after you create this system, you\u2019ll no longer be yourself (and you don\u2019t have any idea what your new role in this society shall be). You might be a rough facsimile of your current self, or you might be someone entirely new. Your gender might be different, or your race. It\u2019s possible you will be extremely destitute and appallingly ugly. You\u2019ll have a different level of intelligence and a different work ethic. You might suddenly be disabled, or super athletic, or homosexual, or criminally insane. As such, you will (probably) want to create a society that is as fair and complete as possible, since you have no idea what station you\u2019ll inherit within your own new, self-constructed boundaries. You need to think outside of your current self, because tomorrow you\u2019ll be someone else entirely."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p"
  }, "Chuck Klosterman"), " - 'I Wear the Black Hat'")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "John Rawls mostly philosophized about theories of justice but I think he would have been a pretty great designer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Imagine"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You drive to a job interview. Before you get out you look in the mirror and straighten your tie. Both of your legs work so you open the door and climb out. Earlier that day you ran 6 miles and did 20 minutes of stretching afterwards. Your legs feel great! You walk across the parking lot and bound up a set of stairs. You don't think twice about it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Imagine"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "You don't have two working legs. You arrive at a building for a job interview. You exit your automobile and roll across the parking lot. There is no ramp. Your wheelchair can't climb stairs. You don't know what to do."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Thanks to the Americans with Disabilities Act this doesn't happen as much as it used to. Most people don\u2019t view a set of stairs as a barrier to a building. We don't observe whether or not there is a ramp. We don't notice if a doorway is wide enough for a wheelchair. Or if a hallway is wide enough to make a 180 degree turn. We most likely don't think about this because our life doesn't necessitate it."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When we build things - we must think of the things our life doesn't necessitate. Because someones life does."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Imagine the frustration of people who use things designed by people who don't take their basic needs into consideration. I think it is dehumanizing."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote"
  }, "\"The ADA is one of America's most comprehensive pieces of civil rights legislation that prohibits discrimination and guarantees that people with disabilities have the same opportunities as everyone else to participate in the mainstream of American life -- to enjoy employment opportunities, to purchase goods and services, and to participate in State and local government programs and services.\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Think about the current state of the website/application/digital product you were working on. Can everyone use it with the same opportunity to participate in 'mainstream American life?' Statistically speaking, probably not. But you are providing a service."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Facts"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "At 20 years old, your retina receives 100% of the light that hits the eye."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "At 40 years old, only 50% of the available light enters the retina."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "For an 80 year old, 25% of the available light passes through the retina.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When people say \"My old tired eyes can't read this\" It is because they can't."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I've often hear two complaints when designing for accessibility."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Accessible color combinations limit my choices as a designer."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, "Big type looks clumsy.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "First lets talk about color contrast."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "There are 140,737,479,966,720 combinations of hexcodes. Obviously not all of them are accessible. If only 1% of all color combinations are accessible than there are still almost 141 million combinations to choose from. This seems more than adequate to paint any bikeshed you will come across for the rest of your career."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "Typography"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "\"If it is too small people can hit command + and make the type bigger\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "This is a fact that can't be disregarded. But I offer a counter: If the type is so big that it offends your user they can hit command - and make the type smaller. I have never observed anyone do this. Quite often, I watch people bump up the font-size of the page they are viewing. This seems backwards."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Typography, like color, and music is all about how values relate to each other. If large type looks clumsy it is most likely due to an ineffective type scale that doesn't relate to the proportions within your design system. Type scales are all about relativity."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "The thing about large type, is that everyone can read it. Not everyone can read small type. This is a fact. No one complains that typefaces set at 20px are too big to read. In all of the user testing I have ever done that has never been said. But people have complained about the readability of type set to the equivalent of 10 and 12px."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "Consider the consequences of building a ramp instead of a staircase. Anyone can get up a ramp. But not everyone can get up a set of stairs. As a design community I think we should be building more ramps."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h2", null, "The Morality of Designing"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I\u2019m a designer. I am not here to focus on making things pretty. I\u2019m here to make things work."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I am a designer because I want to solve problems. I want people to be less frustrated when they use technology. I want to make their lives easier. I don't want to make anyones life more difficult. These two sentiments sound the same, but they are not. I find both are important to consider."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "When I sit down to design things I try to put on the veil of ignorance. I imagine a world where I am not who I am right now. And I think about all the things that could possibly frustrate me. Then I think some more."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I try to design for that reality. I don't design for myself and my perfect eyesight, my retina screens, and my fast internet connection."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "I design for everyone I can think of. Which is a growing list of people with a growing list of concerns that possess a growing number of devices made up of a wide variety of screen sizes."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "If everyone can use your product I think it's good for your business. But even if it wasn't, I think it would be the right thing to do. Which makes it worth doing."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", null, "So I'd do it anyway."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", null, "Further Reading"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", null, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
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
    "href": "http://wm4.wilsonminer.com/posts/2008/oct/20/relative-readability/"
  }), "Relative Readability")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://section508.gov"
  }), "Section 508")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "http://khan.github.io/tota11y/"
  }), "tota11y")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul"
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    parentName: "li"
  }, {
    "href": "https://randoma11y.com"
  }), "randoma11y")))));
}
MDXContent.isMDXComponent = true;

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