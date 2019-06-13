webpackHotUpdate("static/development/pages/developing-ui.js",{

/***/ "./pages/developing-ui.md":
/*!********************************!*\
  !*** ./pages/developing-ui.md ***!
  \********************************/
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


var _jsxFileName = "/Users/mrmrs/p/writing-next/pages/developing-ui.md";

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
    title: "Developing UI",
    published: "21-04-2016",
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
  }, "The single hardest part of front-end development at any scale is making changes\nto code and understanding all of the resulting visual and behavioral effects\nthat will occur across the application."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Several years ago I worked on a print and email product where our main\ndirective was to ship zero bugs. While simultaneously shipping features as\nquickly as possible. On the web 'mean time to fix failure' is generally more\nvaluable than 'mean time between failure.' This makes sense. Often times you\ncan fix a bug on a website before many people will see it. In the world of\nprint and email though you only get one chance. You can\u2019t unmail an electronic\nor print document. The ability to work quickly without creating errors or bugs\nis critical."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Over 3.5 years I ended up shipping two small prose based errors to production.\nOne was caught before we mailed it, one was not. Instead of saying \u201CTrack your\nprogress\u201D the text said \u201CRack your progress.\u201D Not perfect, but definitely\nbetter than my record on the web."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "It wasn\u2019t an accident I was able to do this. I'm not nor have I ever been a super genius that writes mistake-free code. I benefited from working with engineers that treated this problem of bug free development as their number one priority. They treated my development workflow as a first-class citizen. I was able to sit in meetings and explain problems I had - and people tried to build tools to help me solve them."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "The following is a rough outline of our development process. The ideas are simple but they require upfront effort and intention."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Upfront process"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "When you build a component, tests should be written that expose each state a component can be in. This test should generate a static html file and a corresponding image for every discrete state a component can be in."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "What is a component?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Everything is a component. A link is a component. A text input with a label is\na component. A modal is a component. A page is a component. Components can be\ncomposed of other components."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "The test that generates all states of a component should be written before\nvisual ui implementation is begun. This allows the front-end engineer to see\nall states simultaneously as they work. This has an ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("em", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "enormous effect"), " on\nboth the development velocity of new components and the ability to refactor or\nmodify existing components."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("strong", {
    parentName: "p",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "For example:"), " If a user can click on a button and reveal\nnew content within the interface - then there should be a test that generates this discrete state.\nIf different accounts render different text to within a component this should be reflected in a test for the component."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "When a component has fully undergone and passed visual QA, you can save the\ngenerated assets as a canonical set of images and html files."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "Refactoring"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "When you refactor or modify a component you can then run the existing tests and diff the new assets against the ones that have passed QA (imageMagick is great for this). You can then return a list of html files and images that represent visually broken interfaces. This will speed up the ability to refactor existing interfaces without rigorous manual testing. This type of QA is often time consuming and brittle. Many times it doesn\u2019t get done at all. Because who has time?"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Side Effects"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "This development method will also help new members of a dev team get a\ncomprehensive overview for all the states an interface can be in. This feature\nis also immensely beneficial for designers who are trying to observe the\nvarious states of a component that they might be tasked to redesign.\nVisualizing all the discrete states an application can be in will make your\ndesign systems better. This in essence is the most pure form of a \u2018living style\nguide\u2019 and will help your design team develop a cohesive and modular design\nsystem."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "We can live in this world! The technology exists. We just need to be intentional. If you\u2019re a backend engineer or programmer this is my plea for help. Grab the closest designer or front-end developer and just talk to them. Ask them what slows them down the most. Spend time observing how they work as you might recognize problems in their workflow that they don\u2019t. Front-end developers like myself often lack the agency to fix their own problems and so we just accept the reality that everything is horrible. This doesn\u2019t have to be the case. Everything doesn\u2019t have to be horrible. I was fortunate to work with\n", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    class: "underline black dim",
    title: "Dave Copeland on Twitter",
    href: "http://twitter.com/davetron5000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "some"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    class: "black dim",
    title: "Geoff The on Twitter",
    href: "https://twitter.com/geoff2k",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "amazing"), " ", Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", {
    class: "black dim",
    title: "Jeff Kolesky on Twitter",
    href: "http://twitter.com/jeffkole",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "people"), " who showed me how great things can be for a designer. They decided to treat front-end development as a first class citizen. I think you should too."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Let\u2019s work together. Let\u2019s push the web forward."), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Further reading:"), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://rauchg.com/2015/pure-ui/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), "Pure UI")), Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("li", {
    parentName: "ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, Object(_mdx_js_react__WEBPACK_IMPORTED_MODULE_3__["mdx"])("a", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    parentName: "li"
  }, {
    "href": "http://worrydream.com/LearnableProgramming/"
  }, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), "Learnable Programming")))));
}
MDXContent.isMDXComponent = true;

/***/ })

})
//# sourceMappingURL=developing-ui.js.fcef68b226480db37dba.hot-update.js.map