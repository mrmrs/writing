webpackHotUpdate("static/development/pages/component-styling-api.js",{

/***/ "./pages/component-styling-api.md":
/*!****************************************!*\
  !*** ./pages/component-styling-api.md ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MDXContent; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mdx-js/react */ "./node_modules/@mdx-js/react/dist/index.es.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostHeader */ "./components/PostHeader.js");


var _jsxFileName = "/Users/mrmrs/p/writing-next/pages/component-styling-api.md";

/* @jsx mdx */


/* @jsx mdx */




var makeShortcode = function makeShortcode(name) {
  return function MDXDefaultShortcode(props) {
    console.warn("Component " + name + " was not imported, exported, or provided by MDXProvider as global scope");
    return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }));
  };
};

var layoutProps = {};
var MDXLayout = "wrapper";
function MDXContent(_ref) {
  var components = _ref.components,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["components"]);

  return Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(MDXLayout, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, layoutProps, props, {
    components: components,
    mdxType: "MDXLayout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], {
    mdxType: "Container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])(_components_PostHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    title: "Component Styling API",
    published: "18-06-2018",
    mdxType: "PostHeader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("i", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "This is a write up of a work in progress talk I gave at the ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    href: "http://webdeldn.rocks",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "WebdeLDN meetup"), " last year.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "I read a book one time called 'Refactoring your wetware'. There was an\ninteresting part about thinking about a problem as if you were looking at it\nfrom 10 thousand feet up in the air. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, "I was driving in Sunday morning traffic one time. I was on my way from San\nFrancisco to a flea market. The GPS in my car told me there was an exit coming\nup I should take and that I should get into one of the two lanes on the right.\nAbout a dozen blinkers turned on at the exact same time and cars started to\nmerge into the right two lanes. From 10k feet up i bet that looks pretty wild.\nYou hear an automated voice. All cars put on their blinker at the same time to\nbreak off from the highway to head to the same destination. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Two completely different view points"), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/fff.jpg?raw=true",
    "alt": "View of Cars"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), "\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/ggg.jpg?raw=true",
    "alt": "View from Cars"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "I'm here to talk about Design systems, Css, Js and of course Css in Js.\nAnd what does that look like if we as a community try to think at 10,000 feet?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "When I say 10,000 feet I don't just mean think abstractly. I mean actually do\nit.  You should visualize yourself being far above something. But what is the\nthing?  One thing I meditate on is looking at a timeline of history from very\nfar away. And if we look at a timeline of how humans have designed and built\nthings throughout history...how do the problems and the process in which we\nsolve them evolve? Particularly since we started styling digital ui with css?  "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "A guy I collaborate with that goes by the name John Otander ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/johno"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), "(@johno)"), " is pretty\ngood at thinking at 10,000 feet. He comes up with ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "wild"), " ideas. Last year he decided to\ndownload the css for top million websites, in 1 month intervals, dating back to\n2005 (if available)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "My first thought was - that's pretty neat. We can show people their css graphed\nout over time. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/hhi.jpg?raw=true",
    "alt": "Graphs"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "src": "https://github.com/mrmrs/component-api-talk/blob/master/slides/hhj.jpg?raw=true",
    "alt": "Graphs"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "You can learn a bunch just by analyzing your own site.  ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "But, what does it look\nlike to see this at 10,000 feet?")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "[Ask Audience]", "\nWhat do you think you could learn by analyzing this data? What kind of tools could you build with it?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Some possibilities that come to mind for me:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Can analyze values and look for trends"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Find most common property value rules for given components with common class names"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Identify pattern outliers"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Find common mistakes and try to build automated tools to solve them"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Could overlay other data: Browser usage, timeline of introduction of various technologies (frameworks, addiitons to the spec, etc.)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "We can visualize the history of design systems. We can animate them and watch how they evolve over time! "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Given an array of urls, you could visualize the intersection of common values\nfor things like: type scale, colors, background colors, font-family. This can\nhelp show how consistently your brand is implmented across a number of\ndifferent front-end code bases. Most companies have different code bases\nfor: their marketing site, their blog, their app, docs, external status\npage, and potentially a number of other micro sites. Having a feedback\nloop of common values can be helpful when trying to standardize an\nexisting palette, or creating a feedback loop moving forward to see if you\nare becoming more or less consistent.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://twitter.com/hturan"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), "Harley Turan"), ", scraped a bunch of data and did exactly this. Here is a collection of color\npalettes pulled from multiple sites that belong to the same company visualized from 2009 through 2017."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("img", {
    src: "https://github.com/mrmrs/component-api-talk/blob/master/slides/colors-time.gif?raw=true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Now those are just a few half-baked ideas around what you can do to analyze static\nfiles. And I'd love to do nothing else then to sit and chat about what we can do with\nall of this data but that's a different story for a different time. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Below is a list of css properties. I often think of css as the styling api for\nhtml. At first glance it's a lot of stuff. Especially if you're a beginner. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, "But you can build a lot of pretty neat UI without worrying about a lot of these\nproperties and how they work. When I am a beginner one of the most difficult\nthings is figuring out what ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "to"), " worry about and what ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "not to"), ". I can confidently\nsay, when styling a button, I've never needed to set caption-side. Or\ncounter-increment, counter-reset, or volume for that matter. This doesn't mean you\nshould never use them, but they aren't common properties attached to button\nstyles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "Can we use this pattern to potentially make front-end code more accessible for new people? "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "Components could, essentially have all of the necessary visual styling properties\nexposed, where a designer can configure the values they want to pass in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Instead of a blank slate, they could discover common things to account for\nwithin different components. The pseudo state :focus would be a tough thing to\nintuitively account for if you've never worked on the web before.  Offering it\nin configuration can at the very least, offer guidance around what to research. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "List of Css properties")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), "accelerator\nazimuth\nbackground\nbackground-attachment\nbackground-color\nbackground-image\nbackground-position\nbackground-position-x\nbackground-position-y\nbackground-repeat\nbehavior\nborder\nborder-bottom\nborder-bottom-color\nborder-bottom-style\nborder-bottom-width\nborder-collapse\nborder-color\nborder-left\nborder-left-color\nborder-left-style\nborder-left-width\nborder-right\nborder-right-color\nborder-right-style\nborder-right-width\nborder-spacing\nborder-style\nborder-top\nborder-top-color\nborder-top-style\nborder-top-width\nborder-width\nbottom\ncaption-side\nclear\nclip\ncolor\ncontent\ncounter-increment\ncounter-reset\ncue\ncue-after\ncue-before\ncursor\ndirection\ndisplay\nelevation\nempty-cells\nfilter\nfloat\nfont\nfont-family\nfont-size\nfont-size-adjust\nfont-stretch\nfont-style\nfont-variant\nfont-weight\nheight\nime-mode\ninclude-source\nlayer-background-color\nlayer-background-image\nlayout-flow\nlayout-grid\nlayout-grid-char\nlayout-grid-char-spacing\nlayout-grid-line\nlayout-grid-mode\nlayout-grid-type\nleft\nletter-spacing\nline-break\nline-height\nlist-style\nlist-style-image\nlist-style-position\nlist-style-type\nmargin\nmargin-bottom\nmargin-left\nmargin-right\nmargin-top\nmarker-offset\nmarks\nmax-height\nmax-width\nmin-height\nmin-width\norphans\noutline\noutline-color\noutline-style\noutline-width\noverflow\noverflow-X\noverflow-Y\npadding\npadding-bottom\npadding-left\npadding-right\npadding-top\npage\npage-break-after\npage-break-before\npage-break-inside\npause\npause-after\npause-before\npitch\npitch-range\nplay-during\nposition\nquotes\n-replace\nrichness\nright\nruby-align\nruby-overhang\nruby-position\n-set-link-source\nsize\nspeak\nspeak-header\nspeak-numeral\nspeak-punctuation\nspeech-rate\nstress\nscrollbar-arrow-color\nscrollbar-base-color\nscrollbar-dark-shadow-color\nscrollbar-face-color\nscrollbar-highlight-color\nscrollbar-shadow-color\nscrollbar-3d-light-color\nscrollbar-track-color\ntable-layout\ntext-align\ntext-align-last\ntext-decoration\ntext-indent\ntext-justify\ntext-overflow\ntext-shadow\ntext-transform\ntext-autospace\ntext-kashida-space\ntext-underline-position\ntop\nunicode-bidi\n-use-link-source\nvertical-align\nvisibility\nvoice-family\nvolume\nwhite-space\nwidows\nwidth\nword-break\nword-spacing\nword-wrap\nwriting-mode\nz-index\nzoom\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }, "Some people have told me that Component Styling API is a horrible name for this\nconcept and they're likely correct. But I haven't come up with a better name\nyet, so please let me know if you've got some ideas. I do think the following\ndescriptions, from a website called wikipedia, are interesting to consider."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "API: Application programming interface")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "\"In general terms, it is a set of clearly defined methods of communication between various software components.\"\n\"By abstracting the underlying implementation and only exposing objects or actions the developer needs, an API simplifies programming.\"\n\"Thus, the design of an API attempts to provide only the tools a user would expect.\"")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://en.wikipedia.org/wiki/Application_programming_interface"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }), "https://en.wikipedia.org/wiki/Application_programming_interface")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "When I'm styling a button, I don't expect to use volume. Or page-break. Or a\nnumber of other properties. The goal though is not to eliminate options, it's\nto narrow focus on the essential, allowing for expansion and exploration if\nnecessary. But this idea defining a component API has benefits extending beyond\nthis. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: this
  }, "The most influential tip on how to think about designing a component I've ever\nseen is from Nicole Sullivan's excellent article ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: this
  }), "The media object saves\nhundreds of lines of\ncode")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }, "\"When I\u2019m building a new object, the first thing I do is to figure out which parts are reusable components, and define what I know and do not know about them.\"\n\"For example: Can be nested, Optional right button, Must clearfix\""), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "blockquote",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 309
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://stubbornella.org"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 310
    },
    __self: this
  }), "Nicole Sullivan")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, "I can't recommend this process for designing and developing components enough.\nOne of the things I like about react and css in js, is that it's easy to work\nwithin this mental model. It's helpful to actively think and sketch out what\nyou know and what you don't know. This can help you build components that are\nmore resiliant, flexible, and reusable."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "So, say we defined some scales, or options to work with for the following\nproperties. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, "Typography"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Font-family"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, "Line-height"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, "Type-scale"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, "Measure (max line length)"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, "Font Weights"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "Text Transform")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }, "Layout"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: this
  }, "Spacing"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: this
  }, "Width")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: this
  }, "Theme"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "Colors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }, "Border Widths"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }, "Border Colors"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, "Border Radii"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "Box Shadows")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Motion"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 345
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 346
    },
    __self: this
  }, "Animation speed"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "Easing Functions"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }, "Movement patterns ")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  }, "Maybe this would look something like this"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }), "const theme = {\n  breakpoints: [\n    36, 48, 64\n  ],\n  fontFamily:[ '\"Gotham\", \"Avenir Next\", \"Proxima Nova\",  \"Helvetica\"' ],\n  fontSize: [\n    12, 14, 16, 20, 24, 32, 48, 64, 96, 128\n  ],\n  fontWeight: [ 400, 600, 700 ],\n  lineHeight: [ 1, 1.25, 1.5 ],\n  colors: [\n    { text: \"#000\", bg: \"#fff\" },\n    { text: \"#374047\", bg: \"#f8f9f9\" },\n    { text: \"#7f8a93\", bg: \"#f8f9f9\" },\n    { text: \"#0077cc\", bg: \"#f8f9f9\" },\n    { text: \"#005da0\", bg: \"#f8f9f9\" },\n    { text: \"#00365d\", bg: \"#f8f9f9\" },\n    { text: \"#00a243\", bg: \"#fff\" },\n  ],\n  borderStyle: [ \n    'solid', \n    'double', \n    'dotted' \n  ],\n  borderWidth: [ 0, 1, 2, 4 ],\n  borderDirection: [\n    'all', \n    'top',\n    'bottom' \n  ],\n  radii: [\n    0, 3, 5, 17, 9999\n  ],\n  space: [\n    0, 2, 4, 8, 16, 32, 64, 128, 256, 512\n  ],\n  measure: [ '20em', '30em', '34em' ],\n  boxShadow: [ '0 0 16px rgba(0,0,0,.2)' ],\n}\n\nexport default theme\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, "Some of you might have already seen a file like this before. Maybe it was a js\nfile, maybe it was a sass, less, or stylus file. This is pretty boring and\nthere isn't anything new about it. It's just a theme."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }, "Thinking about the previous quote by Nicole Sullivan...  What if I had to\ndesign a button and I wanted it to use values from our design system. We could\ndefine the styling API for a button. (People love buttons.)  Potentially, we\ncould define a template for a button styling API.  So we'd need to think about\nwhich properties we ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 400
    },
    __self: this
  }, "always"), " want exposed. I think it's safe to say that people\nshould be able to set the background color on a button. The default color isn't\nperfect or anything. It's reasonable for a well designed interface to have buttons with\ndifferent background colors. As a section in the button API we'd also want to\ndeclare which properties should be available to style on hover. I believe it's reasonable\nto change the background color on hover. So I think that should also be a part of the\nAPI. Returning to the base part of the button API, it would be seemingly\nreasonable to be able to set the font-weight to something other than the\ndefault. In all my years of browsing the web I've never hovered on a button and\nseen the font-weight change and thought \"This is so nice.\" My first thought is\ngenerally \"Well this must be a bug.\" So here we could choose to leave font-weight out of\nthe hover, focus, and active sections in the API. "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "A generic template for a button styling API might look like this: "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }), "import theme from './theme'\n\nconst buttonThemeTemplate = {\n\n  // Typography \n  fontFamily: [ ],\n  fontSize: [ ],\n  fontWeight: [ ],\n  textTransform: [ ],\n\n  // Palette\n  colors: [ ],\n  backgroundColors: [ ],\n\n  // Borders\n  borderColors: [ ]\n  borderRadius: [ ],\n  borderStyle: [ ],\n  borderWidth: [ ],\n  borderDirections: [ ],\n\n  // Spacing\n  paddingTop: [], \n  paddingLeft: [], \n  paddingBottom: [], \n  paddingRight: [], \n\n  // Hover states\n  hoverColor: [ ],\n  hoverBg: [ ],\n  hoverBoxShadow: [ ],\n  hoverBorderColor: [ ],\n  hoverSize: [ ],\n  \n  // Focus states\n  focusColor: [ ],\n  focusBg: [ ],\n  focusBorderColor: [ ],\n  focusBoxShadow: [ ],\n  focusSize: [ ],\n\n  // Focus states\n  activeColor: [ ],\n  activeBg: [ ],\n  activeBorderColor: [ ],\n  activeBoxShadow: [ ],\n  activeSize: [ ],\n\n  transitionProperty: [ ],\n  transitionDuration: [ ],\n  transitionTimingFunction: [ ],\n}\n\nexport default buttonThemeTemplate\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 468
    },
    __self: this
  }, "Then we could define what values we want to pass in. We might pass in an entire\narray, declare literal values, pass in a filtered array. We have javascript. We\ncan do whatever we want!"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("code", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "pre"
  }, {}, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }), "import theme from './theme'\n\nconst buttonTheme = {\n  radii: theme.radii, // Entire scale\n  space: [\n    // Explicit steps from the scale\n    theme.space[3],\n    theme.space[4],\n  ],\n  fontSize: theme.fontSize.slice(0,-8), // Everything but the last 8 steps in the scale\n  fontFamily: theme.fontFamily[0], // An explicit step in the scale\n  borderStyle: [\n    theme.borderStyle[0],\n    theme.borderStyle[1]\n  ],\n  borderWidth: theme.borderWidth,\n  fontWeight: theme.fontWeight,\n  colors: theme.colors,\n  backgroundColors: theme.colors,\n\n  // hover, focus, active states\n  \n  hoverColor: [ \n    theme.colors[0].text, \n    theme.colors[1].text \n  ],\n  hoverBgColor: [ \n    theme.colors[0].bg, \n    theme.colors[0].bg \n  ],\n  focusColor: [ \n    theme.colors[1].text, \n    theme.colors[1].bg \n  ],\n  textTransform: ['uppercase', 'capitalized'],\n  transitionProperty: ['opacity', 'color', 'background-color'],\n  transitionDuration: ['.25s'],\n  transitionTimingFunction: ['ease-out'],\n}\n\nexport default buttonTheme\n")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 513
    },
    __self: this
  }, "As a design community, we could make boilerplate config files for common ui components.\nOver time we could reinvent fewer and fewer wheels. This would allow us to go deeper on\nother areas that haven't been explored as much as button styles."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, "This is where I think it gets ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 516
    },
    __self: this
  }, "really"), " interesting."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 517
    },
    __self: this
  }, "Now we have a system.\nWe can use combinational logic to generate all possible combinations of buttons\ngiven the input provided by a theme file. We could also use this pattern to\ncreate a finite state machine, and visualize transitions between any discrete\nstate a given component can be in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "A simple config file like this generates thousands and thousands of button designs.\nHere is an example of generating avatars and buttons."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://examples-jchwaftrgo.now.sh"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 524
    },
    __self: this
  }), "https://examples-jchwaftrgo.now.sh")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 527
    },
    __self: this
  }, "Or we can make this a finite state machine and animate between the options. You\nknow, if you don't like scrolling for days and days and days. (Again, animation\ncreated & provided by the one and only Harley Turan)."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://examples-pofntyovxa.now.sh"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 530
    },
    __self: this
  }), "https://examples-pofntyovxa.now.sh")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 533
    },
    __self: this
  }, "Let's step back and think at ten thousand feet again.")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 534
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 535
    },
    __self: this
  }, "We can show how many options a design system can generate. This can be\nhelpful because some people feel they might be constrained by working with\ndefined scales. This can help show how varied their visual designs can still\nbe. A lot of people still haven't worked with scales and as a creative person\nconstraint can be scary at first."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 540
    },
    __self: this
  }, "We can quickly identify desirable regions, which can help us quickly discover\npatterns of inputs needed for a desired output. This can expose properties\nyou might want to couple together and set rules for. Sense of proportion can\nchange dramatically at each end of the scale."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 544
    },
    __self: this
  }, "Could automatically a/b test design options with real user metrics "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 545
    },
    __self: this
  }, "Wire up options to an interface that allows for collaborative voting on which\ncomponent variations feel most on brand. You could even hook this voting up\nto a neural network."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 548
    },
    __self: this
  }, "One of if not the most difficult part about image classification is coming up with the training data.\nThe generated data could help train an image classifier which will in turn\nhelp audit existing UI on websites. Imagine being able to input a url and\nquery the design with questions lke: ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    parentName: "li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 551
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "\"Show me all of the buttons.\" "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "\"Show me all of the orange buttons.\" "), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 554
    },
    __self: this
  }, "\"Show me all of the buttons that have inaccessible color combinations.\"")))), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 557
    },
    __self: this
  }, "This is an exciting reality to live in. We can more quickly generate lots of design\noptions to test with real users. We can shorten the feedback loop around discovering\nwhat matters and what doesn't. This is a stark contrast to our current reality, which is that\nmost designs we ship have not been validated with real users. We don't design multiple options in\nparallel. We end up designing a single option that is optimized for getting stakeholder signoff in a series\nof status meetings."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 563
    },
    __self: this
  }, "But at the very least this concept is exciting to me because I'm very lazy and\nI don't want to design buttons anymore."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "p"
  }, {
    "href": "https://github.com/mrmrs/component-api-talk"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 565
    },
    __self: this
  }), "Code examples on GitHub"))));
}
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=component-styling-api.js.d7255de9438d21adcf2b.hot-update.js.map