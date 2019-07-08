webpackHotUpdate("static/development/pages/chaos-design-fix.js",{

/***/ "./node_modules/define-properties/index.js":
/*!*************************************************!*\
  !*** ./node_modules/define-properties/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var hasSymbols = typeof Symbol === 'function' && typeof Symbol('foo') === 'symbol';

var toStr = Object.prototype.toString;
var concat = Array.prototype.concat;
var origDefineProperty = Object.defineProperty;

var isFunction = function (fn) {
	return typeof fn === 'function' && toStr.call(fn) === '[object Function]';
};

var arePropertyDescriptorsSupported = function () {
	var obj = {};
	try {
		origDefineProperty(obj, 'x', { enumerable: false, value: obj });
		// eslint-disable-next-line no-unused-vars, no-restricted-syntax
		for (var _ in obj) { // jscs:ignore disallowUnusedVariables
			return false;
		}
		return obj.x === obj;
	} catch (e) { /* this is IE 8. */
		return false;
	}
};
var supportsDescriptors = origDefineProperty && arePropertyDescriptorsSupported();

var defineProperty = function (object, name, value, predicate) {
	if (name in object && (!isFunction(predicate) || !predicate())) {
		return;
	}
	if (supportsDescriptors) {
		origDefineProperty(object, name, {
			configurable: true,
			enumerable: false,
			value: value,
			writable: true
		});
	} else {
		object[name] = value;
	}
};

var defineProperties = function (object, map) {
	var predicates = arguments.length > 2 ? arguments[2] : {};
	var props = keys(map);
	if (hasSymbols) {
		props = concat.call(props, Object.getOwnPropertySymbols(map));
	}
	for (var i = 0; i < props.length; i += 1) {
		defineProperty(object, props[i], map[props[i]], predicates[props[i]]);
	}
};

defineProperties.supportsDescriptors = !!supportsDescriptors;

module.exports = defineProperties;


/***/ }),

/***/ "./node_modules/function-bind/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/function-bind/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint no-invalid-this: 1 */

var ERROR_MESSAGE = 'Function.prototype.bind called on incompatible ';
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = '[object Function]';

module.exports = function bind(that) {
    var target = this;
    if (typeof target !== 'function' || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);

    var bound;
    var binder = function () {
        if (this instanceof bound) {
            var result = target.apply(
                this,
                args.concat(slice.call(arguments))
            );
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(
                that,
                args.concat(slice.call(arguments))
            );
        }
    };

    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for (var i = 0; i < boundLength; i++) {
        boundArgs.push('$' + i);
    }

    bound = Function('binder', 'return function (' + boundArgs.join(',') + '){ return binder.apply(this,arguments); }')(binder);

    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }

    return bound;
};


/***/ }),

/***/ "./node_modules/function-bind/index.js":
/*!*********************************************!*\
  !*** ./node_modules/function-bind/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/function-bind/implementation.js");

module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ "./node_modules/has-symbols/shams.js":
/*!*******************************************!*\
  !*** ./node_modules/has-symbols/shams.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* eslint complexity: [2, 17], max-statements: [2, 33] */
module.exports = function hasSymbols() {
	if (typeof Symbol !== 'function' || typeof Object.getOwnPropertySymbols !== 'function') { return false; }
	if (typeof Symbol.iterator === 'symbol') { return true; }

	var obj = {};
	var sym = Symbol('test');
	var symObj = Object(sym);
	if (typeof sym === 'string') { return false; }

	if (Object.prototype.toString.call(sym) !== '[object Symbol]') { return false; }
	if (Object.prototype.toString.call(symObj) !== '[object Symbol]') { return false; }

	// temp disabled per https://github.com/ljharb/object.assign/issues/17
	// if (sym instanceof Symbol) { return false; }
	// temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
	// if (!(symObj instanceof Symbol)) { return false; }

	// if (typeof Symbol.prototype.toString !== 'function') { return false; }
	// if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }

	var symVal = 42;
	obj[sym] = symVal;
	for (sym in obj) { return false; } // eslint-disable-line no-restricted-syntax
	if (typeof Object.keys === 'function' && Object.keys(obj).length !== 0) { return false; }

	if (typeof Object.getOwnPropertyNames === 'function' && Object.getOwnPropertyNames(obj).length !== 0) { return false; }

	var syms = Object.getOwnPropertySymbols(obj);
	if (syms.length !== 1 || syms[0] !== sym) { return false; }

	if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) { return false; }

	if (typeof Object.getOwnPropertyDescriptor === 'function') {
		var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
		if (descriptor.value !== symVal || descriptor.enumerable !== true) { return false; }
	}

	return true;
};


/***/ }),

/***/ "./node_modules/has/src/index.js":
/*!***************************************!*\
  !*** ./node_modules/has/src/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");

module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "./node_modules/url/url.js");

var react_1 = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "./node_modules/next-server/dist/lib/utils.js");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "./node_modules/prop-types-exact/build/index.js");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/object-keys/implementation.js":
/*!****************************************************!*\
  !*** ./node_modules/object-keys/implementation.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var keysShim;
if (!Object.keys) {
	// modified from https://github.com/es-shims/es5-shim
	var has = Object.prototype.hasOwnProperty;
	var toStr = Object.prototype.toString;
	var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js"); // eslint-disable-line global-require
	var isEnumerable = Object.prototype.propertyIsEnumerable;
	var hasDontEnumBug = !isEnumerable.call({ toString: null }, 'toString');
	var hasProtoEnumBug = isEnumerable.call(function () {}, 'prototype');
	var dontEnums = [
		'toString',
		'toLocaleString',
		'valueOf',
		'hasOwnProperty',
		'isPrototypeOf',
		'propertyIsEnumerable',
		'constructor'
	];
	var equalsConstructorPrototype = function (o) {
		var ctor = o.constructor;
		return ctor && ctor.prototype === o;
	};
	var excludedKeys = {
		$applicationCache: true,
		$console: true,
		$external: true,
		$frame: true,
		$frameElement: true,
		$frames: true,
		$innerHeight: true,
		$innerWidth: true,
		$onmozfullscreenchange: true,
		$onmozfullscreenerror: true,
		$outerHeight: true,
		$outerWidth: true,
		$pageXOffset: true,
		$pageYOffset: true,
		$parent: true,
		$scrollLeft: true,
		$scrollTop: true,
		$scrollX: true,
		$scrollY: true,
		$self: true,
		$webkitIndexedDB: true,
		$webkitStorageInfo: true,
		$window: true
	};
	var hasAutomationEqualityBug = (function () {
		/* global window */
		if (typeof window === 'undefined') { return false; }
		for (var k in window) {
			try {
				if (!excludedKeys['$' + k] && has.call(window, k) && window[k] !== null && typeof window[k] === 'object') {
					try {
						equalsConstructorPrototype(window[k]);
					} catch (e) {
						return true;
					}
				}
			} catch (e) {
				return true;
			}
		}
		return false;
	}());
	var equalsConstructorPrototypeIfNotBuggy = function (o) {
		/* global window */
		if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
			return equalsConstructorPrototype(o);
		}
		try {
			return equalsConstructorPrototype(o);
		} catch (e) {
			return false;
		}
	};

	keysShim = function keys(object) {
		var isObject = object !== null && typeof object === 'object';
		var isFunction = toStr.call(object) === '[object Function]';
		var isArguments = isArgs(object);
		var isString = isObject && toStr.call(object) === '[object String]';
		var theKeys = [];

		if (!isObject && !isFunction && !isArguments) {
			throw new TypeError('Object.keys called on a non-object');
		}

		var skipProto = hasProtoEnumBug && isFunction;
		if (isString && object.length > 0 && !has.call(object, 0)) {
			for (var i = 0; i < object.length; ++i) {
				theKeys.push(String(i));
			}
		}

		if (isArguments && object.length > 0) {
			for (var j = 0; j < object.length; ++j) {
				theKeys.push(String(j));
			}
		} else {
			for (var name in object) {
				if (!(skipProto && name === 'prototype') && has.call(object, name)) {
					theKeys.push(String(name));
				}
			}
		}

		if (hasDontEnumBug) {
			var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);

			for (var k = 0; k < dontEnums.length; ++k) {
				if (!(skipConstructor && dontEnums[k] === 'constructor') && has.call(object, dontEnums[k])) {
					theKeys.push(dontEnums[k]);
				}
			}
		}
		return theKeys;
	};
}
module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/index.js":
/*!*******************************************!*\
  !*** ./node_modules/object-keys/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var slice = Array.prototype.slice;
var isArgs = __webpack_require__(/*! ./isArguments */ "./node_modules/object-keys/isArguments.js");

var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) { return origKeys(o); } : __webpack_require__(/*! ./implementation */ "./node_modules/object-keys/implementation.js");

var originalKeys = Object.keys;

keysShim.shim = function shimObjectKeys() {
	if (Object.keys) {
		var keysWorksWithArguments = (function () {
			// Safari 5.0 bug
			var args = Object.keys(arguments);
			return args && args.length === arguments.length;
		}(1, 2));
		if (!keysWorksWithArguments) {
			Object.keys = function keys(object) { // eslint-disable-line func-name-matching
				if (isArgs(object)) {
					return originalKeys(slice.call(object));
				}
				return originalKeys(object);
			};
		}
	} else {
		Object.keys = keysShim;
	}
	return Object.keys || keysShim;
};

module.exports = keysShim;


/***/ }),

/***/ "./node_modules/object-keys/isArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/object-keys/isArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toStr = Object.prototype.toString;

module.exports = function isArguments(value) {
	var str = toStr.call(value);
	var isArgs = str === '[object Arguments]';
	if (!isArgs) {
		isArgs = str !== '[object Array]' &&
			value !== null &&
			typeof value === 'object' &&
			typeof value.length === 'number' &&
			value.length >= 0 &&
			toStr.call(value.callee) === '[object Function]';
	}
	return isArgs;
};


/***/ }),

/***/ "./node_modules/object.assign/implementation.js":
/*!******************************************************!*\
  !*** ./node_modules/object.assign/implementation.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// modified from https://github.com/es-shims/es6-shim
var keys = __webpack_require__(/*! object-keys */ "./node_modules/object-keys/index.js");
var bind = __webpack_require__(/*! function-bind */ "./node_modules/function-bind/index.js");
var canBeObject = function (obj) {
	return typeof obj !== 'undefined' && obj !== null;
};
var hasSymbols = __webpack_require__(/*! has-symbols/shams */ "./node_modules/has-symbols/shams.js")();
var toObject = Object;
var push = bind.call(Function.call, Array.prototype.push);
var propIsEnumerable = bind.call(Function.call, Object.prototype.propertyIsEnumerable);
var originalGetSymbols = hasSymbols ? Object.getOwnPropertySymbols : null;

module.exports = function assign(target, source1) {
	if (!canBeObject(target)) { throw new TypeError('target must be an object'); }
	var objTarget = toObject(target);
	var s, source, i, props, syms, value, key;
	for (s = 1; s < arguments.length; ++s) {
		source = toObject(arguments[s]);
		props = keys(source);
		var getSymbols = hasSymbols && (Object.getOwnPropertySymbols || originalGetSymbols);
		if (getSymbols) {
			syms = getSymbols(source);
			for (i = 0; i < syms.length; ++i) {
				key = syms[i];
				if (propIsEnumerable(source, key)) {
					push(props, key);
				}
			}
		}
		for (i = 0; i < props.length; ++i) {
			key = props[i];
			value = source[key];
			if (propIsEnumerable(source, key)) {
				objTarget[key] = value;
			}
		}
	}
	return objTarget;
};


/***/ }),

/***/ "./node_modules/object.assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object.assign/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defineProperties = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");

var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");
var shim = __webpack_require__(/*! ./shim */ "./node_modules/object.assign/shim.js");

var polyfill = getPolyfill();

defineProperties(polyfill, {
	getPolyfill: getPolyfill,
	implementation: implementation,
	shim: shim
});

module.exports = polyfill;


/***/ }),

/***/ "./node_modules/object.assign/polyfill.js":
/*!************************************************!*\
  !*** ./node_modules/object.assign/polyfill.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var implementation = __webpack_require__(/*! ./implementation */ "./node_modules/object.assign/implementation.js");

var lacksProperEnumerationOrder = function () {
	if (!Object.assign) {
		return false;
	}
	// v8, specifically in node 4.x, has a bug with incorrect property enumeration order
	// note: this does not detect the bug unless there's 20 characters
	var str = 'abcdefghijklmnopqrst';
	var letters = str.split('');
	var map = {};
	for (var i = 0; i < letters.length; ++i) {
		map[letters[i]] = letters[i];
	}
	var obj = Object.assign({}, map);
	var actual = '';
	for (var k in obj) {
		actual += k;
	}
	return str !== actual;
};

var assignHasPendingExceptions = function () {
	if (!Object.assign || !Object.preventExtensions) {
		return false;
	}
	// Firefox 37 still has "pending exception" logic in its Object.assign implementation,
	// which is 72% slower than our shim, and Firefox 40's native implementation.
	var thrower = Object.preventExtensions({ 1: 2 });
	try {
		Object.assign(thrower, 'xy');
	} catch (e) {
		return thrower[1] === 'y';
	}
	return false;
};

module.exports = function getPolyfill() {
	if (!Object.assign) {
		return implementation;
	}
	if (lacksProperEnumerationOrder()) {
		return implementation;
	}
	if (assignHasPendingExceptions()) {
		return implementation;
	}
	return Object.assign;
};


/***/ }),

/***/ "./node_modules/object.assign/shim.js":
/*!********************************************!*\
  !*** ./node_modules/object.assign/shim.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var define = __webpack_require__(/*! define-properties */ "./node_modules/define-properties/index.js");
var getPolyfill = __webpack_require__(/*! ./polyfill */ "./node_modules/object.assign/polyfill.js");

module.exports = function shimAssign() {
	var polyfill = getPolyfill();
	define(
		Object,
		{ assign: polyfill },
		{ assign: function () { return Object.assign !== polyfill; } }
	);
	return polyfill;
};


/***/ }),

/***/ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js":
/*!**********************************************************************!*\
  !*** ./node_modules/prop-types-exact/build/helpers/isPlainObject.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = isPlainObject;
function isPlainObject(x) {
  return x && (typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && !Array.isArray(x);
}
module.exports = exports['default'];
//# sourceMappingURL=isPlainObject.js.map

/***/ }),

/***/ "./node_modules/prop-types-exact/build/index.js":
/*!******************************************************!*\
  !*** ./node_modules/prop-types-exact/build/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = forbidExtraProps;

var _object = __webpack_require__(/*! object.assign */ "./node_modules/object.assign/index.js");

var _object2 = _interopRequireDefault(_object);

var _has = __webpack_require__(/*! has */ "./node_modules/has/src/index.js");

var _has2 = _interopRequireDefault(_has);

var _isPlainObject = __webpack_require__(/*! ./helpers/isPlainObject */ "./node_modules/prop-types-exact/build/helpers/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var zeroWidthSpace = '\u200B';
var specialProperty = 'prop-types-exact: ' + zeroWidthSpace;
var semaphore = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for'](specialProperty) : /* istanbul ignore next */specialProperty;

function brand(fn) {
  return (0, _object2['default'])(fn, _defineProperty({}, specialProperty, semaphore));
}

function isBranded(value) {
  return value && value[specialProperty] === semaphore;
}

function forbidExtraProps(propTypes) {
  if (!(0, _isPlainObject2['default'])(propTypes)) {
    throw new TypeError('given propTypes must be an object');
  }
  if ((0, _has2['default'])(propTypes, specialProperty) && !isBranded(propTypes[specialProperty])) {
    throw new TypeError('Against all odds, you created a propType for a prop that uses both the zero-width space and our custom string - which, sadly, conflicts with `prop-types-exact`');
  }

  return (0, _object2['default'])({}, propTypes, _defineProperty({}, specialProperty, brand(function () {
    function forbidUnknownProps(props, _, componentName) {
      var unknownProps = Object.keys(props).filter(function (prop) {
        return !(0, _has2['default'])(propTypes, prop);
      });
      if (unknownProps.length > 0) {
        return new TypeError(String(componentName) + ': unknown props found: ' + String(unknownProps.join(', ')));
      }
      return null;
    }

    return forbidUnknownProps;
  }())));
}
module.exports = exports['default'];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./pages/chaos-design-fix.js":
/*!***********************************!*\
  !*** ./pages/chaos-design-fix.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsx */ "./jsx.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_Flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Flex */ "./components/Flex.js");
/* harmony import */ var _components_PostHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PostHeader */ "./components/PostHeader.js");
var _jsxFileName = "/Users/mrmrs/p/writing-current/pages/chaos-design-fix.js";


/** @jsx jsx */






function Chaos() {
  return Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], {
    pb: 5,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("postHeader", {
    title: "Chaos Design: Before the robots take our jobs, can we please get them to help us do some good work?",
    subtitle: "",
    published: "03-07-2019",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Why did we even invent computers in the first place?"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "\u201C...These facts seemed to me to throw some light on the origin of species\u2014that mystery of mysteries, as it has been called by one of our greatest **philosophers**.\u201D")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "This excerpt is from the first paragraph in *The Origin of Species*. I've highlighted the word philosopher here because it's easy to miss. But here is Charles Darwin giving a shout out to this unnamed person in the opening paragraph of his most seminal work."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "It turns out, he was referring to this guy, Sir John Herschel."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/herschel.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "In 1831 Herschel had authored [A Preliminary Discourse on the Study of Natural Philosophy](https://www.gutenberg.org/ebooks/54897). A book that heavily influenced Darwin's approach to science. So much so, in 1836 after 4 years of traveling on the HMS Beagle, Darwin wanted to do nothing more than visit Herschel in South Africa."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Herschel was living in South Africa drawing and cataloging plants with his wife, to get away from the fast paced London lifestyle of the early 1800's he could no longer take."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Historians have noted how frustrating, that while Darwin kept a fairly detailed journal, there is no record that covers extensively what was discussed during their hillside chats. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "What we do know, is that during their meeting \"Herschel inspired Darwin to apply the critical analysis of data associated with the physical sciences to the emerging life sciences...\" Herschel himself was an accomplished astronomer. His earlier writing influenced generations of scientists, Darwin included. Scientific historians have noted \"...astronomy has historically led the way in the development of scientific methodology, later applied to other disciplines.\" We think of science as being a mature discipline but in reality Biology didn't become mature until the mid 19th century. So here is Herschel, urging Darwin to study and borrow methodologies from other disciplines to advance his own."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "About a year after meeting with Herschel - Darwin drew this initial sketch, with the note \"I think.\u201D "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/sketch.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "23 years after their hillside chat, Darwin finally published the Origin of Species. Upon publishing, he sent a copy to Herschel with a note about Herschel's influence on his work."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\"...Scarcely anything in my life made so deep an impression on me: it made me wish to try to add my mite to the accumulated store of natural knowledge.\"")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "I think we could get some inspiration from this. How can we add something, even if it's a small thing, to our accumulated store of design knowledge? What other disciplines can we learn from? Where can we apply their methodology to our work? "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/1821.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    pt: 1,
    my: 0,
    color: "#777",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "London in 1821 according to this painting"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Now, it turns out this wasn't the first time that Herschel had been involved in manifesting a big idea. 15 years prior in 1821, before he had retreated to South Africa, Herschel found himself sitting around a table in London with a friend, going over some tables of data. As one does with friends."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Now there were two things in particular and about these tables of data that were troublesome. First off, the numbers were wrong. Secondly, it took people a lot of manual time to produce all of these inaccurate calculations. After finding yet another error, in a moment of pure frustration Herschel\u2019s friend exclaimed:"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "\u2018I wish to God these calculations had been executed by steam'")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "\"I think it's possible\" replied Herschel")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "That friend, was Charles Babbage,  the man who invented the concept of a digital programmable computer. Hard not to love how his concept of automation is centered around steam."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "This drive to create the first computer was rooted in Babbage's effort \"to eliminate the risk of human error. The infallibility of machinery would eliminate the risk of error from calculation and transcription\". He saw the world how it was and saw a vision for a different world we could be living in."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "It's hard not to appreciate the significance around the fact Herschel was present and involved in the origin story of two fairly significant ideas within the arc of human knowledge. The modern computer, and the theory of evolution."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "When we think about evolution we often think about this image. Or something like it."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/evolution.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "And this isn\u2019t wrong, but it doesn't fully illustrate what's going on either."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/sketch.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }), "This is Darwin's initial sketch again. While most depictions are linear, evolution is really a branching model and has been since the beginning.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "It's important to remember when we talk about evolution we aren't necessarily talking about getting rid of things. Although that can and does happen."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    my: 0,
    py: 0,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/evolution2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  })), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Steam powered calculations was a really good idea. Good enough to catch the interest of a Count Ada Lovelace. She was the first person to recognize how powerful the idea could be if extended beyond just pure calculations. Together they pursued the design and construction of a programmable computer for years. Sadly their ideas ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("b", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "didn't"), " evolve directly into the devices we know as computers. Their ideas died off. It wasn't until after the computer was invented that their early ideas were recognized. It seems people didn't have the same drive to fix spreadsheets that Babbage did. "), "194 years after this fateful event in London, which for reference is 41 years after the first personal computer, Paul Ford published a 40,000 word piece called ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "What is Code"), ". The first time I read it, one sentence in particular jumped off the page.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "\u201COne study by a researcher at the University of Hawaii found that 88 percent of spreadsheets contain errors.\"")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  }, "This sentence jumped off the page because I knew Babbage had wanted to fix the pesky problem of having errors in spreadsheets. 88%!? That seemed too high and I am skeptical. My curiosity was sparked. How important are these spreadsheets? How big are these errors? So I read [Raymond Planko's research paper from 1998 titled \"What We Know About Spreadsheet Errors\"](http://panko.shidler.hawaii.edu/SSR/Mypapers/whatknow.htm) which was featured in a special edition of \u201CThe Journal of End User Computing\u2019s\u201D on scaling up end user development. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "TL;DR the errors are very big and the spreadsheets are from Fortune 500 companies."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "This is a partial breakdown of errors from one spreadsheet"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, " 10 errors of  $100,000"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, " 6 errors of $10+ million"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, " 1 error of $100+ million")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, "Reading through the auditor comments, was more amusing than I expected."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "\"The investment's value was overstated by 16%. Quite serious.\"")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "\u201COne omission error would have caused an error of more than a billion dollars.\u201D")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "\u201COnly significant errors\u201D")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "I'm curious as to why we have not moved the needle on fixing spreadsheets. Maybe that's because spreadsheets are really hard to fix. Maybe it's easier to get a car to drive itself."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/car.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, "What would Babbage think? To see the wonders computers can do today contrasted with their failure to solve the original problem that frustrated him so. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, "I'm interested in this sentiment. Where are we spending lots of rote time doing calculations incorrectly? As someone who has spent a lot of time refactoring css, a few things quickly come to mind. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, "I want to revisit evolution, because part of what I\u2019m here to speculate on with you is how things will evolve around us. In evolution **phyletic gradualism** is when change occurs 'uniformly, slowly, and gradually.'."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "The idea of **punctuated equilibrium** is the idea that evolution happens in rapid short bursts followed by periods of stasis. \"When significant evolutionary change occurs, the theory proposes that it is generally restricted to rare and geologically rapid events of branching speciation called cladogenesis.\""), "![Image](https://thebrain.mcgill.ca/flash/capsules/images/outil_bleu09_img01.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    color: "#777",
    pt: 1,
    my: 0,
    fontSize: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Phyletic Gradualism vs. Puncuated Equilibrium"), "I feel interface design has been at stasis for some time. It is hard to imagine over the next 20 years we are going to see a gradual advancement in how we do work. I'm observing a number of things that lead me to believe we are going to undergo a rapid burst of change. I suspect we might see a number of bursts in quick succession. What are the environmental/industry forces that might produce rapid evolutionary change in how we work and design? As astronomy helped inform other disciplines in the 1800s. Where can our relatively new discipline of digital design learn from today? ## We might start by taking a look at print We're here to talk about interface design. An interface can be defined as \u201Ca point where two systems, subjects, organizations, etc. meet and interact\u201D I\u2019ve always thought about books as a point where an author and a reader can meet and interact.  Books facilitate endless amounts of meetings across time and space. Cataloging an idea in a book can be such a powerful force, that it compels someone to sail from London to South Africa in 1836. So, if we are to learn from books, we might find ourselves asking - how has printing evolved since its inception and where is it going now? In \"A Short History of the Printed Word.\" Warren Chappel describes what he calls the three phases of print. ## The first phase > \u201CIt involves the carving of whole pages into flat wooden blocks, and thus treating the written text like any woodcut illustration\u201D ![CSS styles scoped to a page](https://mrmrs.s3.us-west-2.amazonaws.com/writing/code.jpg) This sounds like the first stage of many peoples design process. Thinking in pages. Or \"large sections\". Makes sense as a starting point. It's easy to wrap your head around a page. It is easy to have a meeting to look at \"a page\". How many of you have ever created (or received) a design spec for an entire page to implement? How many of you have worked this way in the last 5 years? 2 years? 1 year? Last month? Will we look back on this as an ineffecient way to work? ## The second phase > \u201CThe second phase depends on the carving and casting of individual letters or characters. Once these units of visible language have been cast in multiple copies, they can be endlessly assembled, disassembled, and reassembled into an infinite number of texts. That is what is meant by movable type.\u201D ![Visual primitives](https://mrmrs.s3.us-west-2.amazonaws.com/writing/prims.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }, "Icons, Colors, and Typography"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, "![Type scale from basscss.com](https://mrmrs.s3.us-west-2.amazonaws.com/writing/basscss.jpg) ![Type scale from basscss.com](https://mrmrs.s3.us-west-2.amazonaws.com/writing/bootstrapv3.jpg)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, "Type-scale documention for BassCss and Bootstrap"), "It feels like we are collectively emerging into this second phase right now. The past decade has seen a proliferation of design systems and component libraries for the web. We've seen atomic/functional/oocss patterns go from gasp inducing horror shows, to the forefront of best practices. These collections are comprised of smaller pieces that can be cast in a multitude of copies. Saying movable type was a really big deal is an understatment. It should be noted, I am not implying that the advent of atomic/functional css is as culturally significant as the creation and adoption of movable type. I\u2019m mostly interested in the parallels in workflows and mental models. Even though these evolutions of are happening more than 1,000 years apart - there are stark similarities. ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/rebass.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, "Rebass: A popular react component library"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/lds.jpg) ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/ant.jpg)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, "Lightning Design System and Ant Design"), "We see similar abstractions that are emerging. Spacing. Typography. Color. These can be used across components, pages, or even entire projects. These elements can be combined endlessly to produce a wide array of designs. The invention of movable type didn\u2019t inherently make the writing in books better. And it\u2019s important to note a new css or component architecture is not going to magically improve the quality of our interface design.  But it can have far reaching effects in lowering the barrier of entry for access, giving us more people to help solve some of these problems. What will these systems look like once they are more mature? What about a world where every component is already made (possible)? What types of problems will we have then? While there has been a lot of movement into this direction - we still lack the composability found in other disciplines. ![Default 3d character in Mixamo](https://mrmrs.s3.us-west-2.amazonaws.com/writing/mixamo.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Starting screen of Mixamo"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/mario-dance.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/mario-dance.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Demo of uploading a 3d charachter and seamlessly composing fully configurable animations on top"), "Could we use computers to automate this transition from phase 1 to phase 2? In some ways I think css in js solves this problem. Allowing people to attach any amount of styles to an element or component, just to have them split up into single purpose classes and reduced to the smallest code footprint that renders the fastest. But what about auditing the visual history of the web? How much can we learn from static css files? Using the [Internet archives wayback machine](https://archive.org/help/wayback_api.php) and the [css stats cli](https://github.com/cssstats/cli), we could download the history of a site and visualize how values change over time. Most companies have several websites with different front end codebases. What if could easily visualize all values across sites? And find where we are using common values?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/spacing.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/spacing.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }, "Padding and margin changing over time"), "## The third phase > \u201CThe third phase has only just begun, but clearly it involves another fundamental shift. In this phase, texts and scripts alike are electronically described in forms that can be stored, transmitted, edited and printed at high speed, on complex but small devices...\u201D Digital interfaces allow for a fluidity to the printed word that is relatively new. In the past, you might spend 10-15 minutes picking a  typeface and font size in Microsoft word in preparation for printing it out and sharing with others. But when you publish on Twitter, Facebook, Medium, you\u2019re removed from this part of the design process. Even to your own website, you don\u2019t have absolute control over how the typography will render for the end user. As your content will be consumed on multiple clients and devices. Set in serif, sans-serif, large, normal, or small.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/books1.jpg) ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/books2.jpg) ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/books3.jpg)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }, "Sample configuration options in Apple Books"), "The user is able to configure a few basic things to choose between hundreds of designs. If they are looking at it in Safari they might just hit the reader button. Gone are your custom selected web fonts, your colors, your visual brand. Personally I love this. I think users should be able to seamlessly bounce between how we have decorated our home if they want to visit, while also allowing them to adorn our content in their own comforts.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }, "![Screenshot of What Is Code article on Bloomberg](https://mrmrs.s3.us-west-2.amazonaws.com/writing/wic.jpg) ![What is Code on Bloomberg with Safari Reader](https://mrmrs.s3.us-west-2.amazonaws.com/writing/reader.jpg)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, "Design of What Is Code article vs. Safari Reader"), "If we peer through the proper lens we\u2019ll find this constraint, in this context, can be quite liberating. What can we do when **we only need to think about content. ** So what is our third phase? Will we start to enter it before we've finished entering the second?  While Chappel has defined three phases in print, that doesn't mean we have the same limits. How many phases and shifts will we have? When I contemplate the future of humans interacting with computers, I'm consistently drawn to this quote from JCR Licklider: > \u201CIt can allow a decision maker to do almost nothing but decision making, instead of processing data to get into position to make the decision.\" That sounds like a quite the dream. But it also sounds foreign to how I interact with a computer. I find myself and my teammates, even against our best efforts, performing a lot of rote tasks, in an effort to get to a point where we can make a decision. And even then we aren\u2019t always successful in that task. While Babbage was the originator of the concept of the computer - JCR Licklider was certainly one of it\u2019s most influential visionaries. It\u2019s hard to come across much early computer work that wasn\u2019t influenced by his thinking. Again - I wonder what Licklider would think about the current state of affairs. Computers no doubt can do AMAZING things. But does it feel like we are living up to our potential? Are we essentially driving a bunch of Ferraris around in 2nd gear? I find that both building and designing is a constant cycle of having a question and trying to find the answer. When you have a question, the more steps/time involved to see something rendered that might answer that question, the slower your feedback loop. In my opinion, feedback loops for interface design seem unreasonably long. How fast and short can we make our feedback loops? Where are we missing critical feedback loops in our process? Which wheels are we unnecessarily inventing over and over again? As Alan Kay says, where are we reinventing flat tires?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, "![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/xkcd.jpg) ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/tire.jpg)"), "When you change something (code or design) you want instant feedback on the effect it will take in all possible contexts. If you know **how** you are affecting a system, the less likely you are to break it. ![Walt Disney Concert Hall  had to be buffed to reduce the effects of the reflective surface](https://mrmrs.s3.us-west-2.amazonaws.com/writing/disney.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, "Walt Disney Concert Hall"), "Often times when we break an interface we\u2019re breaking the things we can\u2019t visualize during the development process. So what types of tools or processes can be create to augment this flow? > \u201CYou either see it in your tooling, or you see it in a bug report. And it\u2019s a lot more expensive when you see it in a bug report.\u201D - James Culveyhouse I love this quote. So what's it like to be good at interface design in 2019? As far as I understand it's pretty easy. You just need to make sure you get this simple checklist done. - Loads instantly - 60fps - Usable with a keyboard - Screenreader friendly - Accessible contrast - Award winning content - Semantic html - Works on the following screen sizes: All of them, also watches - Works well in low light environment - Works well in a bright light environment - Supports right to left text - No scroll jank - Handles variable length content - Works if css doesn't load - Works if js doesn't load - Well balanced if user has different zoom level - Looks amazing - Has proper error states - Only use design system - Hover state - Active state - Focus state - Loading state - Empty state - Easy to use navigation - No superfluous animations - Consistent with other parts of interface - Follows all of the fundamental ui patterns - 100% accessible, no bugs - Everything is fully documented - Make it pop Now this isn\u2019t the fun type of checklist  that you can breeze through in a linear fashion.  Sometimes fixing something in one place, reduces the quality of some other tracked metric elsewhere. We\u2019ve talked about some high level concepts and identified a few potential problems we could try to get computers to assist us in solving. And now it\u2019s time to look around at some other methodologies we might be able to make use of or draw inspiration from. Let\u2019s start by taking a look to some of our system engineering friends and what they\u2019ve been up to recently with Chaos Engineering. ### Chaos Engineering is\u2026 > The discipline of experimenting on a system in order to build confidence in the system\u2019s capability to withstand turbulent conditions in production. To make their systems stronger companies like Netflix, intentionally break services on production randomly. They wanted to \u201Cmove from a development model that assumed no breakdowns, to a model where breakdowns were considered to be inevitable.\u201D The thinking is that people will build better systems if they know failure is guaranteed to happen. Netflix found this created alignment around \u2018redundancy and process automation to survive such incidents\u2019. What if we applied this thinking to how we build and design components and interfaces? What if we considered the states a user might experience our interface as an incident we\u2019re trying to survive. What if we had... Chaos Design > The discipline of experimenting on a component in order to build confidence in the components capability to withstand turbulent conditions in production. Chaos design in practice. If we were to reword the above a bit. We might come up with something like: > To specifically address the uncertainty of distributed components at scale, Chaos Design can be thought of as the facilitation of experiments to uncover weaknesses in a components implementation or design. Define a \u2018steady state\u2019 as some measurable output of a component that indicates normal behavior. Hypothesize that this steady state will continue in both the control group and the experimental group. > The harder it is to disrupt the steady state, the more confidence we have in the behavior of the system. If a weakness is uncovered, we now have a target for improvement before that behavior manifests in the system at large. To design stronger and more resilient systems, it can be necessary to spend the majority of your time working outside of the ideal state happy path that contains the perfect set of data. You know. Meeting design stuff. Where everything magically works. Think of every characteristic of an interface you depend on to not \u2018fail\u2019 for your design to 'work.' Now imagine if these services were randomly 'failing' constantly during your design process. How might we design differently? How would our workflows and priorities change? Here's a potential list of things we might be relying on - Css doesn't load - Js fails to load - Css and Js fail to load - Network speed - Language / Variable content - Left to Right text - Presence of content (non-empty state) - Length of data - Data cleanliness - Size of viewport - Luminosity is low - Ambient light is too bright - Particular rendering engine - :hover states - Sight - Mouse usage - Business logic - Permissions - Plan level - Quotas - Network is online and transmitting data When thinking about how to design around a world where we can't rely on these services 'not failing' how might we change the way we work? The difference to chaos engineering is that we can\u2019t flip these switches on production. These are actual things happening on production all of the time! So how do we get our development environment to reflect the environments the component will actually encounter. The turbulence of production? Let\u2019s envision what a chaos design environment might look like What if for a three hour period the ability to use a mouse or trackpad is disabled? What might happen? Would we spend that time making keyboard navigation better so that we can keep working on our design? If you\u2019re working on a modal and you can only launch it by clicking a button, you must fix the keyboard navigation to get back to the intended work. What if your screen didn\u2019t render anything for 4 hours and the only way to interact with the interface was with a screenreader? ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/browser.jpg) What if our interfaces were thrown into color blind mode simulating one of the ways 12% of the population perceives color for a day at a time? Would we design higher contrast interfaces that didn't rely on people perceiving green to know something is \u201Cgood\u201D or \u201Cpositive\u201D? ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/analytics.jpg) What if for random 1 to 2 hour intervals your display only showed the mobile version - or what it looked like on a large display? Or both at the same time. Would our components be more responsive? Would they be more suited for the ergonomics of each device size?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 414
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/lens.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 415
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 416
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/lens.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }, "link to the video"), " instead.")), "What if for 1 day a week your interface only showed text in French? On average French is 20-30% longer than English. Would our interfaces be less likely to break with variable content? What if for random 1 to 2 hour intervals your interface only showed right to left text? Would our interfaces be more global?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 427
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/chaos-environment.mov",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/chaos-environment.mov",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 430
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 432
    },
    __self: this
  }, "Demo of component development environment at Cloudflare"), "We could even drive all of the probabilities for our chaos design system by data collected in the real world. Instead of spending 80% of your time designing on a hi resolution 27\u201D screen, maybe the screen size your component renders to could match the frequency of real world usage. This might sound like an awful way of working - as you lose a lot of control. But this does reflect the reality of the turbulence of production as we described before. And we might design stronger systems because of it. We haven\u2019t found the discipline collectively to solve these problems by accident. A lot of what we are talking about - are universal problems we all have in development and that all of our customers have in production. Things we could [build](https://github.com/seek-oss/playroom) tooling for as a community. Within our own businesses, there are a variety of states that we don't account for by default as well. Empty states. Different user permissions. Randomly populating our interfaces with content of the shortest and longest lengths we have stored in a database. Within enterprise software we often have users with different tier plans. Or different limits, quotas, and seats. And when we build UI are we building systems to think through these states we know will happen? Why does it seem smoothly handling empty states is the exception not the rule?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: this
  }, "![N up display of github.com at various screen widths](https://mrmrs.s3.us-west-2.amazonaws.com/writing/lens1.jpg) ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/lens-github.jpg)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 448
    },
    __self: this
  }, "View of github.com at various screen sizes"), "> \"The thought of every age is reflected in its technique,\" - Norbert Wiener Are we collectively happy with how our thoughts are manifesting as technique? ## Stasis Anyone recognize this component? ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/colorpickers.jpg) The classic color picker. Now we as humans, have been making color pickers for decades. ![Color picker from Photoshop 5 in 1999](https://mrmrs.s3.us-west-2.amazonaws.com/writing/color-pickers.jpg) For the most part we keep building the same thing with the same functionality. Personally I think it\u2019s weird that the default state of a color picker is \u201Chere is every color imaginable there are more than 16 million take your time.\u201D What if instead of spending time designing and building all of these color pickers that are all the same\u2026 we tried to make a better color picker.  What types of feedback loops might we actually want in a color picker? We might want to know instantly about contrast. What is the current contrast with black and white for the selected color? As we generally design against a background of white, light gray, dark gray, or black. Even that might be a useful feedback loop [animated gif of dividing line] What about showing what the current colors will look like for people who are color blind? If we have a document palette - what if we exposed all the current accessible colors with what\u2019s currently highlighted? If we do select a color - what if other popular colors to pair it with were suggested? What if the color picker only showed colors that aren\u2019t currently being used on the web. Given any two colors - we don\u2019t have a vector for determining if it\u2019s aesthetically pleasing. Or what kind of aesthetic it is. But what if we did track that kind of data? ![](https://mrmrs.s3.us-west-2.amazonaws.com/writing/randoma11y.jpg) This screenshot is from a project called [random a11y](https://randoma11y.com) It generates random pairs of accessible colors. And we wondered - what if people were able to vote? Could we train computers to get better at understanding how colors relate to each other? If this is something we can compute - could our UIs be even more dynamic and offload color as a user preference? Is this another way we can give control back to the user? And what if this was an API that others could consume?", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("div", {
    style: {
      maxWidth: '100%',
      overflowX: 'scroll'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 493
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("pre", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: this
  }, "\"combos\":256319, \"votes\":256630, \"votes_per_combo\":0.9987881385652496, \"up_votes\":130529, \"down_votes\":126101, \"latest_20\": \"id\":256496, \"color_one\":\"#555ef9\", \"color_two\":\"#f3fde6\", \"created_at\":\"2019-06-10T15:49:37.058Z\", \"updated_at\":\"2019-06-10T15:49:37.058Z\", \"contrast\": \"8.41\"")), "You could connect these types of apis to any design tool to improve feedback loops within color pickers or color palette generators. [Read more about the API here](https://randoma11y.com/#/api?_k=qsde72) ## Living on the Edge Edge computing is opening up a lot of new paths for us to affect interfaces. At Cloudflare we\u2019ve got a product called Workers that allows you to write javascript at the edge. On the design team, we\u2019re interested in how we can make it easier to augment the view layer.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 520
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/workers.mov",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 521
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 522
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/workers.mov",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 523
    },
    __self: this
  }, "link to the video"), " instead.")), "When we load the site into this tool, we extract all the colors in the html and css, and show them along the top, alowing them to be customised and previewed. When you press deploy, we deploy a new worker script with new mappings \u2014 \"change #efefef to #cc23ef\" We wouldn\u2019t have to limit this to just color. We make any changes to themes and have our designs normalized against scales. Imagine the potential for a brand update - where you can just have all of the nearest colors updated automatically across all of your properties? You could imagine the ability to start augmenting your web page in interesting ways. In 3d design and photography you affect the color, not just by changing the color of the materials and surfaces, but by applying light from multiple directions with different types of filters. You could affect the theme of your interface based on the calulation of current time and where the light source would be.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 536
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/kapture.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 537
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 538
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/kapture.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 539
    },
    __self: this
  }, "link to the video"), " instead.")), "Demo courtesty of [@winkervsbecks](https://twitter.com/winkerVSbecks) What else can we learn together? What other types of information can we make available to each other and contribute to our collective knowledge? These aren\u2019t trade secrets. It\u2019s not a zero sum game. We share information now! But we do it at a small scale with slow feedback loops. Besides just two colors - what can we learn about how different visual properties relate to each other? This is part of why [John Otander](https://twitter.com/4lpine) started to build [Components AI](https://components.ai) What can we actually track over time about how values and combinations of properties relate to each other? For us it's a natural extension of [Random A11y](https://randoma11y.com) ![List of CSS properties](https://mrmrs.s3.us-west-2.amazonaws.com/writing/properties.jpg)", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 552
    },
    __self: this
  }, "The above is a long list of properties in css. But it\u2019s not that long if you are a computer. On top of that - many of these properties are not needed when styling an element. When I\u2019m styling a button, I don\u2019t expect to use volume. Or page-break. Or a number of other properties. ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    to: "/component-styling-api",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 553
    },
    __self: this
  }, "So what if we documented what we know so far about styling components. And created open templates for common components?"), "Where design now becomes configuring an obvious set of properties, instead of needing to guess and declare."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 558
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/avatars2.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 559
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 560
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/avatars2.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 561
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 564
    },
    __self: this
  }, "The goal is not to eliminate options, it\u2019s to narrow focus on the essential, allowing for expansion and exploration if necessary."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 566
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/components-gradients.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 567
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 568
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/components-gradients.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 569
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 572
    },
    __self: this
  }, "This idea of defining a component API has benefits extending beyond just these types of interfaces. Can we leverage teaching a computer what a button looks like in creative ways? Imagine having a design query language where you could ask to see all of the unique table styles in your app. Or all of the error states. Currently to do these types of audits, it takes a lot of rote work - and is likely to be outdated the week after it's finished."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/buttons.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 576
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 577
    },
    __self: this
  }, "Collection of buttons from a single company"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("video", {
    controls: true,
    width: "100%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 579
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("source", {
    src: "https://mrmrs-videos.s3.amazonaws.com/visual-diff.mp4",
    type: "video/mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 580
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 581
    },
    __self: this
  }, "Your browser doesn't support HTML5 video. Here is a ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://mrmrs-videos.s3.amazonaws.com/visual-diff.mp4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 582
    },
    __self: this
  }, "link to the video"), " instead.")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 584
    },
    __self: this
  }, "Interface from sliding through scales constructed from scraped css"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586
    },
    __self: this
  }, "What if you controlled inputs for a generative component design tool by deciding if you wanted to use the most popular or the least used values? "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 588
    },
    __self: this
  }, " Continuing to look elsewhere"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "If we take a look at what people are doing with machine learning, it\u2019s hard to ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://arxiv.org/pdf/1708.05866.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 590
    },
    __self: this
  }, "not be intrigued by reinforcement learning"), "."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 592
    },
    __self: this
  }, "Reinforcement learning is trial and error at a vast scale"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs-videos.s3.amazonaws.com/python.gif",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 594
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 595
    },
    __self: this
  }, "From ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://towardsdatascience.com/how-to-teach-an-ai-to-play-games-deep-reinforcement-learning-28f9b920440a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 596
    },
    __self: this
  }, "How to teach AI to play Games: Deep Reinforcement Learning")), "There are people trying to train computers on how to beat video games.  And they are getting pretty good. Which is probably worth a whole talk in itself. Now training computers to beat video games seems like a pretty obvious thing the first time you see it. The first time I saw a demo of it in practice though - this is the image that flashed in my head.", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/lighthouse.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 601
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 602
    },
    __self: this
  }, "Screenshot of Lighthouse, a popular auditing tool for sites"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 604
    },
    __self: this
  }, "What\u2019s our workflow when we when we are trying to optimize something on the web? Running a lighthouse audit takes ~10-60 seconds to run. We check to see if the numbers have gone up or down. We make some adjustments. We re-run the lighthouse audit. And we check to see if the numbers go up or down. Now you might be using something else to audit your code. But the workflow is probably similar. This workflow is ripe for distractions. Computers don\u2019t need to stop to check their email. Or reply to a ping in chat. This is the type of work that I just have a feeling computers are better suited for. Figuring out implementation details. Here we have a desired outcome. Four 100s. [There\u2019s compelling work being done right now that is going to make this type of work even easier for a computer to do.](https://arxiv.org/pdf/1906.02386.pdf)"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 608
    },
    __self: this
  }, "Now this is emerging work now - but imagine where we\u2019ll be in 101 years! "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 610
    },
    __self: this
  }, "So what will the life of an interface designer be like in the year 2120? or 2121 even? A nice round 300 years after Babbage first had the idea of calculations being executed by steam. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 612
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 613
    },
    __self: this
  }, "\u201C\u2026back/neck/wrist strain will live in the past because I\u2019ll be designing in a dimly lit room, in an inversion chair using mostly voice and gestural cues to control design software.\u201D - Lauren LoPrete")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 617
    },
    __self: this
  }, "The first time I saw this video, it felt like a paradigm shift in my head. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("iframe", {
    width: "100%",
    height: "320",
    src: "https://www.youtube-nocookie.com/embed/_5Y1hSLhYdY?start=8",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 619
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 621
    },
    __self: this
  }, "It\u2019s from a study referenced in last years article titled", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://arxiv.org/pdf/1803.03453.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 622
    },
    __self: this
  }, "The Surprising Creativity of Digital Evolution: A Collection of Anecdotes from the Evolutionary Computation and Artificial Life Research Communities")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 624
    },
    __self: this
  }, "In it the constraint is that the grip has been disabled, but the crane is still able to grab ahold of the ball and move it between any two points. Will we learn to apply this type of optimization learning to interface design? "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("iframe", {
    width: "100%",
    height: "315",
    src: "https://www.youtube.com/embed/z9ptOeByLA4",
    frameborder: "0",
    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
    allowfullscreen: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 628
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 630
    },
    __self: this
  }, "My mind wonders at the creative solutions computers might come up with to get a website to be fully responsive, performant, and accessible. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 632
    },
    __self: this
  }, "Project Dreamcatcher is a generative design project at Autodesk. They\u2019ve started to incorporate some of that technology into other products and the industrial design industry is already seeing real world results. This is a tool that people use overhead, so weight is a primary concern. But they also have a constraint that it can\u2019t be any weaker. With this problem and constraint, they were able to use generative design to shave off 3 pounds. That\u2019s a 60% reduction in weight."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/tool.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 635
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 636
    },
    __self: this
  }, "Redesigned component"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("blockquote", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 639
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 640
    },
    __self: this
  }, " IT\u2019S NOT BRUTE FORCE ENGINEERING. IT\u2019S ELEGANT. YOU DEFINE A PROBLEM AND YOU GET A SOLUTION SET UNLIKE ANYTHING YOU\u2019D PREDICT."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 642
    },
    __self: this
  }, "- Frank DeSantis, Vice President of the Breakthrough Innovation")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 647
    },
    __self: this
  }, "How could we develop a language where we design interfaces by defining contraints and desired outcomes? "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 649
    },
    __self: this
  }, "Future of interface design"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 651
    },
    __self: this
  }, "So I\u2019ve talked about how hard it is to be good here. But here\u2019s the thing - this is the least amount of stuff we are ever going to need to worry about. Interfaces are going to get more and more complex. The likelihood of people sitting at a desk in front of two 27\u201D monitors is incomprehensible to me. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 653
    },
    __self: this
  }, "Like the third phase in print, I think much of our work will be augmented by the user. We see small scale emerging hints at this with dark mode options, theming controls at os level. A new media query for what avatar shape users prefer. We open up these small options because no matter which one you choose the interface designers think it\u2019s good. But these are incredibly small sets of options if we were to calculate how many fully usable designs the user could pick from. The more we understand how things relate to each other - we can offer up more options with great confidence. "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/mac1.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 655
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 656
    },
    __self: this
  }, "There are 128 combinations of color based theming options from curated values"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])(_components_Flex__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 658
    },
    __self: this
  }, Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/mac2.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 660
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/mac3.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 661
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/mac4.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 662
    },
    __self: this
  })), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "My best guess is it ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://www.osapublishing.org/DirectPDFAccess/FF7D6769-D38A-8C65-35F3CB19F8D4BBF6_398845/optica-5-10-1200.pdf?da=1&id=398845&seq=0&mobile=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 666
    },
    __self: this
  }, "we will see augmented reality usage grow"), " the most in the immediate future. As AR and VR become more prevalent, will interface design largely be world building?"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 669
    },
    __self: this
  }, "Will we interact with computers and machines by moving our body in expressive ways to manipulate our  virtual environment? "), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("img", {
    src: "https://mrmrs.s3.us-west-2.amazonaws.com/writing/botw.jpg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 671
    },
    __self: this
  }), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    fontSize: 1,
    mt: 0,
    py: 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 672
    },
    __self: this
  }, "Breath of the Wild"), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 674
    },
    __self: this
  }, "Regardless of what the future brings, our problem space is growing every single day. And we need better feedback loops to handle the increasing amount of chaos. I\u2019m pretty sure robots won't be taking away our jobs. But I do think they will take away some of our current work. I\u2019m excited about that future though. I imagine we will spend more and more time ", Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("a", {
    href: "https://github.com/papers-we-love/papers-we-love/raw/master/design/out-of-the-tar-pit.pdf",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 675
    },
    __self: this
  }, "defining a desired output with what our constraints are")), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 678
    },
    __self: this
  }, "If you\u2019re an ad agency - maybe web performance is important but maybe not the MOST important thing. Maybe you\u2019re willing to have a 2mb website for the added pay off of high definition visual shine. For many businesses - you don't need anywhere near 1mb to serve up a page that will allow you to communicate with an audience, and potentially, to receive their input as well. So  maybe you're biggest constraints are around your color palette and making sure your site is accessible and localized. Being able to fluidly evaluate and augment content in multiple contexts will allow us to spend more time deciding and less time processing data."), Object(_jsx__WEBPACK_IMPORTED_MODULE_1__["default"])("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 682
    },
    __self: this
  }, "I hope you'll join me in figuring out how to automate some of this work so we can build more resilient systems that fail less often. Someday I hope people get to use interfaces that always work, all of the time, no matter what. Maybe someday."));
}

/* harmony default export */ __webpack_exports__["default"] = (Chaos);

/***/ })

})
//# sourceMappingURL=chaos-design-fix.js.4291dde745f7c64e1a21.hot-update.js.map