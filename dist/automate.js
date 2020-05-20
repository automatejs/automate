(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["automate"] = factory();
	else
		root["automate"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/core/events.js":
/*!****************************!*\
  !*** ./src/core/events.js ***!
  \****************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/core/message.js");

var events = {
  propChanging: new _message__WEBPACK_IMPORTED_MODULE_0__["Message"](),
  propChanged: new _message__WEBPACK_IMPORTED_MODULE_0__["Message"]()
};

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: Local, Message, isMessage, MessageBus, events, isProxy, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./src/core/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Local", function() { return _local__WEBPACK_IMPORTED_MODULE_0__["Local"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/core/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["isMessage"]; });

/* harmony import */ var _message_bus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-bus */ "./src/core/message-bus.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return _message_bus__WEBPACK_IMPORTED_MODULE_2__["MessageBus"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events */ "./src/core/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_3__["events"]; });

/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./proxy */ "./src/core/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _proxy__WEBPACK_IMPORTED_MODULE_4__["getTarget"]; });







/***/ }),

/***/ "./src/core/local.js":
/*!***************************!*\
  !*** ./src/core/local.js ***!
  \***************************/
/*! exports provided: Local */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Local", function() { return Local; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Local = function Local(e, elm, arg) {
  _classCallCheck(this, Local);

  this.$event = e;
  this.$element = elm;
  this.$argument = arg;
};

/***/ }),

/***/ "./src/core/message-bus.js":
/*!*********************************!*\
  !*** ./src/core/message-bus.js ***!
  \*********************************/
/*! exports provided: MessageBus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return MessageBus; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/core/message.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var MessageBus = /*#__PURE__*/function () {
  function MessageBus() {
    _classCallCheck(this, MessageBus);

    this.messages = {};
  }

  _createClass(MessageBus, [{
    key: "get",
    value: function get(e) {
      if (!this.messages[e]) {
        this.messages[e] = new _message__WEBPACK_IMPORTED_MODULE_0__["Message"]();
      }

      return this.messages[e];
    }
  }, {
    key: "on",
    value: function on(e, fn) {
      this.get(e).on(fn);
    }
  }, {
    key: "off",
    value: function off(e, fn) {
      this.get(e).off(fn);
    }
  }, {
    key: "fire",
    value: function fire(e, args, scope) {
      return this.get(e).fire(args, scope);
    }
  }]);

  return MessageBus;
}();

/***/ }),

/***/ "./src/core/message.js":
/*!*****************************!*\
  !*** ./src/core/message.js ***!
  \*****************************/
/*! exports provided: Message, isMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return isMessage; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Message = /*#__PURE__*/function () {
  function Message() {
    _classCallCheck(this, Message);

    this.handlers = [];
  }

  _createClass(Message, [{
    key: "on",
    value: function on(fn) {
      this.handlers.push(fn);
    }
  }, {
    key: "off",
    value: function off(fn) {
      for (var i = 0; i < this.handlers.length; i++) {
        if (this.handlers[i] === fn) {
          this.handlers.splice(i, 1);
        }
      }
    }
  }, {
    key: "fire",
    value: function fire(args, scope) {
      var returnValue;
      scope = scope || this;

      for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
          returnValue = this.handlers[i].call(scope, args);
        }
      }

      return returnValue;
    }
  }]);

  return Message;
}();

function isMessage(obj) {
  return obj instanceof Message;
}



/***/ }),

/***/ "./src/core/proxy.js":
/*!***************************!*\
  !*** ./src/core/proxy.js ***!
  \***************************/
/*! exports provided: isProxy, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/core/events.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var isProxySymbol = Symbol('__isProxy'),
    targetSymbol = Symbol('__target');
var handler = {
  get: function get(target, key) {
    if (key === isProxySymbol) {
      return true;
    }

    if (key === targetSymbol) {
      return target;
    }

    return target[key];
  },
  set: function set(target, key, value) {
    var oldValue = getTarget(target[key]),
        newValue = getTarget(value);

    if (oldValue !== newValue) {
      var validation = {
        valid: true,
        apply: true,
        oldValue: oldValue,
        newValue: newValue
      };
      _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanging.fire({
        target: target,
        key: key,
        data: validation
      });

      if (validation.apply) {
        target[key] = value;
        _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanged.fire({
          target: target,
          key: key,
          data: {
            oldValue: oldValue,
            newValue: newValue
          }
        });
      }
    } else if (target[key] !== value) {
      target[key] = value;
    }

    return true;
  }
};
function isProxy(proxy) {
  return _utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](proxy) && proxy[isProxySymbol];
}
function getTarget(proxy) {
  return isProxy(proxy) ? proxy[targetSymbol] : proxy;
}

function updateProxy(target, key) {
  var value = target[key];

  if (_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](value) && !isProxy(value)) {
    getTarget(target)[key] = new Proxy(value, handler);
  }
}

var Agent = /*#__PURE__*/function () {
  function Agent(target, handler) {
    _classCallCheck(this, Agent);

    this.target = target;
    this.handler = handler;
  }

  _createClass(Agent, [{
    key: "get",
    value: function get(key) {
      return this.target[key];
    }
  }, {
    key: "set",
    value: function set(key, value) {
      this.handler.set(this.target, key, value);
    }
  }]);

  return Agent;
}();

var ArrayAgent = /*#__PURE__*/function (_Agent) {
  _inherits(ArrayAgent, _Agent);

  _createClass(ArrayAgent, [{
    key: "length",
    get: function get() {
      return this.target.length;
    },
    set: function set(value) {
      this.handler.set(this.target, 'length', value);
    }
  }]);

  function ArrayAgent(target, handler) {
    _classCallCheck(this, ArrayAgent);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayAgent).call(this, target, handler));
  }

  _createClass(ArrayAgent, [{
    key: "concat",
    value: function concat() {
      var args = Array.prototype.slice.call(arguments, 0);
      return Array.prototype.concat.apply(this.target, args);
    }
  }, {
    key: "join",
    value: function join() {
      var args = Array.prototype.slice.call(arguments, 0);
      return Array.prototype.join.apply(this.target, args);
    }
  }, {
    key: "pop",
    value: function pop() {
      var result,
          length = this.target.length;

      if (length === 0) {
        return;
      }

      length--;

      if (length >= 0) {
        result = this.target[length];
      }

      this.handler.set(this.target, 'length', length);
      return result;
    }
  }, {
    key: "push",
    value: function push() {
      var _this = this;

      var length = this.target.length;

      if (arguments.length > 0) {
        Array.prototype.slice.call(arguments, 0).forEach(function (item, index) {
          _this.handler.set(_this.target, length + index, item);
        });
        length += arguments.length;
        this.handler.set(this.target, 'length', length);
      }

      return length;
    }
  }, {
    key: "reverse",
    value: function reverse() {
      var _this2 = this;

      if (this.target.length === 0) {
        return;
      }

      var copy = _utils__WEBPACK_IMPORTED_MODULE_1__["copy"](this.target);
      copy.reverse();
      copy.forEach(function (item, index) {
        if (item !== _this2.target[index]) {
          _this2.handler.set(_this2.target, index, item);
        }
      });
    }
  }, {
    key: "shift",
    value: function shift() {
      var length = this.target.length;

      if (length > 0) {
        var result = this.target[length - 1];
        var index = 1;

        while (index < length) {
          this.handler.set(this.target, index - 1, this.target[index]);
        }

        this.handler.set(this.target, 'length', length - 1);
        return result;
      }

      return undefined;
    }
  }, {
    key: "slice",
    value: function slice() {
      var args = Array.prototype.slice.call(arguments, 0);
      return Array.prototype.slice.apply(this.target, args);
    }
  }, {
    key: "sort",
    value: function sort() {
      var args = Array.prototype.slice.call(arguments, 0);
      return Array.prototype.sort.apply(this.target, args);
    }
  }, {
    key: "splice",
    value: function splice() {
      var _this3 = this;

      var length = this.target.length;
      var copy = _utils__WEBPACK_IMPORTED_MODULE_1__["copy"](this.target);
      var args = Array.prototype.slice.call(arguments, 0);
      var result = Array.prototype.slice.apply(copy, args);
      copy.forEach(function (item, index) {
        if (item !== _this3.target[index]) {
          _this3.handler.set(_this3.target, index, _this3.target[index]);
        }
      });

      if (copy.length !== length) {
        this.handler.set(this.target, 'length', copy.length);
      }

      return result;
    }
  }]);

  return ArrayAgent;
}(Agent); // extends object prototype, add function toProxy


Object.prototype.toProxy = function () {
  return isProxy(this) ? this : new Proxy(this, handler);
};

/***/ }),

/***/ "./src/decorator/component.js":
/*!************************************!*\
  !*** ./src/decorator/component.js ***!
  \************************************/
/*! exports provided: component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "component", function() { return component; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function component(metadata) {
  return function (target) {
    var key = metadata.key || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerComponent(key, target, metadata);
  };
}

/***/ }),

/***/ "./src/decorator/directive.js":
/*!************************************!*\
  !*** ./src/decorator/directive.js ***!
  \************************************/
/*! exports provided: directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return directive; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function directive(metadata) {
  return function (target) {
    var key = metadata.key || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerDirective(key, target, metadata);
  };
}

/***/ }),

/***/ "./src/decorator/filter.js":
/*!*********************************!*\
  !*** ./src/decorator/filter.js ***!
  \*********************************/
/*! exports provided: filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return filter; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function filter(metadata) {
  return function (target) {
    var key = metadata.key || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerFilter(key, target, metadata);
  };
}

/***/ }),

/***/ "./src/decorator/index.js":
/*!********************************!*\
  !*** ./src/decorator/index.js ***!
  \********************************/
/*! exports provided: component, directive, filter, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/decorator/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./src/decorator/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./src/decorator/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_2__["filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/decorator/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _service__WEBPACK_IMPORTED_MODULE_3__["service"]; });






/***/ }),

/***/ "./src/decorator/service.js":
/*!**********************************!*\
  !*** ./src/decorator/service.js ***!
  \**********************************/
/*! exports provided: service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "service", function() { return service; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");

function service(metadata) {
  return function (target) {
    var key = metadata.key || target.name;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerService(key, target, metadata);
  };
}

/***/ }),

/***/ "./src/directive/bind.js":
/*!*******************************!*\
  !*** ./src/directive/bind.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BindDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-bind'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(BindDirective, _Directive);

  function BindDirective() {
    _classCallCheck(this, BindDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(BindDirective).call(this));
  }

  _createClass(BindDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.$elm.innerText = value;
    }
  }]);

  return BindDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/hide.js":
/*!*******************************!*\
  !*** ./src/directive/hide.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var HideDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-hide'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(HideDirective, _Directive);

  function HideDirective() {
    var _this;

    _classCallCheck(this, HideDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
    _this.initial = 'initial';
    return _this;
  }

  _createClass(HideDirective, [{
    key: "onChange",
    value: function onChange(value) {
      if (value) {
        this.initial = this.$elm.style.display;
        this.$elm.style.display = 'none';
      } else {
        if (this.$elm.style.display === 'none') {
          this.$elm.style.display = this.initial;
        }
      }
    }
  }]);

  return HideDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/index.js":
/*!********************************!*\
  !*** ./src/directive/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bind */ "./src/directive/bind.js");
/* empty/unused harmony star reexport *//* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeat */ "./src/directive/repeat.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/directive/model.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide */ "./src/directive/hide.js");
/* empty/unused harmony star reexport *//* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show */ "./src/directive/show.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./src/directive/model.js":
/*!********************************!*\
  !*** ./src/directive/model.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModelDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-model'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(ModelDirective, _Directive);

  function ModelDirective() {
    var _this;

    _classCallCheck(this, ModelDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ModelDirective).call(this));
    _this.viewValue = null;
    _this.modelValue = null;
    _this.parsers = [];
    _this.formatters = [];
    _this.viewChangeListeners = [];
    _this.validators = [];
    _this.status = {
      feedback: '',
      pristine: true,
      dirty: false,
      valid: true,
      invalid: false
    };
    _this.options = {
      css: {
        pristine: 'n-pristine',
        dirty: 'n-dirty',
        valid: 'n-valid',
        invalid: 'n-invalid'
      }
    };
    return _this;
  }

  _createClass(ModelDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.commitModelValue(value);
    }
  }, {
    key: "afterLink",
    value: function afterLink() {
      var _this2 = this;

      var name = this.$elm.name;

      if (name) {
        this.$scope[name] = this.status;
      }

      if (this.$component != null) {
        if (Object(_core__WEBPACK_IMPORTED_MODULE_2__["isMessage"])(this.$component.valueChange)) {
          this.$component.valueChange.on(function (e, args) {
            return self.commitViewValue(args.newvalue);
          });
        } else {
          throw new Error('Component ' + this.$component.$$meta.key + 'must define [change] event');
        }
      } else {
        this.$elm.addEventListener('input', function (e) {
          return _this2.commitViewValue(e.target.value);
        });
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {}
  }, {
    key: "commitModelValue",
    value: function commitModelValue(newValue) {
      if (this.modelValue === newValue) {
        return;
      }

      var self = this;
      this.validators.forEach(function (validator) {
        validator.call(self, newValue, this.modelValue);
      });
      this.modelValue = newValue;
      this.formatters.forEach(function (formatter) {
        newValue = formatter.call(self, newValue);
      });

      if (this.viewValue === newValue) {
        return;
      }

      this.viewValue = newValue;

      if (this.$component != null) {
        this.$component.$setAttribute('value', newValue);
      } else {
        this.$elm.value = newValue;
      }

      this.updateElmCssClass();
    }
  }, {
    key: "commitViewValue",
    value: function commitViewValue(newValue) {
      if (this.viewValue === newValue) {
        return;
      }

      var self = this;
      this.markDirtyStatus(true);
      this.viewChangeListeners.forEach(function (listener) {
        listener.call(self, newValue, self.viewValue);
      });
      this.viewValue = newValue;
      this.parsers.forEach(function (parser) {
        newValue = parser.call(self, newValue);
      });

      if (this.modelValue === newValue) {
        return;
      }

      this.validators.forEach(function (validator) {
        validator.call(self, newValue, self.modelValue);
      });
      this.modelValue = newValue;
      this.$binding.assign(newValue);
    }
  }, {
    key: "updateElmCssClass",
    value: function updateElmCssClass() {
      var ele = this.$elm,
          css = this.options.css;

      if (this.status.dirty) {
        ele.classList.add(css.dirty);
        ele.classList.remove(css.pristine);
      } else {
        ele.classList.add(css.pristine);
        ele.classList.remove(css.dirty);
      }

      if (this.status.valid) {
        ele.classList.add(css.valid);
        ele.classList.remove(css.invalid);
      } else {
        ele.classList.add(css.invalid);
        ele.classList.remove(css.valid);
      }
    }
  }, {
    key: "markDirtyStatus",
    value: function markDirtyStatus(dirty) {
      this.status.dirty = dirty;
      this.status.pristine = !dirty;
      this.updateElmCssClass();
    }
  }, {
    key: "markValidStatus",
    value: function markValidStatus(valid, feedback) {
      this.status.valid = valid;
      this.status.invalid = !valid;
      this.status.feedback = feedback;
      this.updateElmCssClass();
    }
  }]);

  return ModelDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/repeat.js":
/*!*********************************!*\
  !*** ./src/directive/repeat.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl */ "./src/tpl/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helper */ "./src/helper.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var RepeatDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-repeat'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(RepeatDirective, _Directive);

  function RepeatDirective() {
    var _this;

    _classCallCheck(this, RepeatDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(RepeatDirective).call(this));
    _this.itemExp = '';
    _this.itemsExp = '';
    _this.itemTemplate = '';
    return _this;
  }

  _createClass(RepeatDirective, [{
    key: "onCompile",
    value: function onCompile(velm, vattr) {
      var arg = vattr.nodeValue;
      var pattern = /^([a-z_]+\w+)\s+in\s+(.+)$/i;
      var result = pattern.exec(arg);

      if (result == null) {
        throw new Error('m-repeat: parameter is not valid');
      }

      this.itemExp = result[1];
      this.itemsExp = result[2];
      var builder = new _tpl__WEBPACK_IMPORTED_MODULE_2__["TplBuilder"]();
      velm.removeAttr(vattr);
      this.itemTemplate = builder.build(velm); // identify this directive would take over link function for related virtual element node, onLink function will be called

      return true;
    }
  }, {
    key: "onLink",
    value: function onLink(scope) {
      var _this2 = this;

      var fragment = document.createDocumentFragment();
      var header = document.createComment('start: m-repeat');
      var footer = document.createComment('end: m-repeat');
      fragment.appendChild(header);
      fragment.appendChild(this.render(scope));
      fragment.appendChild(footer);
      this.delayer = new _view__WEBPACK_IMPORTED_MODULE_0__["Delayer"](function () {
        var fragment = _this2.render(scope);

        _helper__WEBPACK_IMPORTED_MODULE_5__["removeNodeBetween"](header, footer);
        footer.parentNode.insertBefore(fragment, footer);
      });
      scope.$watchCollection(this.itemsExp, function () {
        _this2.delayer.execute(_this2);
      });
      return fragment;
    }
  }, {
    key: "render",
    value: function render(scope) {
      var self = this;
      var items = scope.$eval(this.itemsExp);
      var fragment = document.createDocumentFragment();
      _utils__WEBPACK_IMPORTED_MODULE_4__["forEach"](items, function (item, key) {
        var locals = {};
        locals['$key'] = key;
        locals['$index'] = key;
        locals[self.itemExp] = item;
        var render = new _render__WEBPACK_IMPORTED_MODULE_3__["Render"](scope, locals);
        var itemContent = render.render(self.itemTemplate);
        fragment.appendChild(itemContent);
      });
      return fragment;
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      if (this.delayer != null) {
        this.delayer.destroy();
      }
    }
  }]);

  return RepeatDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/show.js":
/*!*******************************!*\
  !*** ./src/directive/show.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ShowDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-show'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(ShowDirective, _Directive);

  function ShowDirective() {
    var _this;

    _classCallCheck(this, ShowDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
    _this.initial = 'initial';
    return _this;
  }

  _createClass(ShowDirective, [{
    key: "onChange",
    value: function onChange(value) {
      if (value) {
        if (this.$elm.style.display === 'none') {
          this.$elm.style.display = this.initial;
        }
      } else {
        this.initial = this.$elm.style.display;
        this.$elm.style.display = 'none';
      }
    }
  }]);

  return ShowDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/state/checked.js":
/*!****************************************!*\
  !*** ./src/directive/state/checked.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CheckedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-checked'
}), _dec(_class = /*#__PURE__*/function (_StateDirective) {
  _inherits(CheckedDirective, _StateDirective);

  function CheckedDirective() {
    _classCallCheck(this, CheckedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckedDirective).call(this, 'checked'));
  }

  return CheckedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/disabled.js":
/*!*****************************************!*\
  !*** ./src/directive/state/disabled.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DisabledDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-disabled'
}), _dec(_class = /*#__PURE__*/function (_StateDirective) {
  _inherits(DisabledDirective, _StateDirective);

  function DisabledDirective() {
    _classCallCheck(this, DisabledDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(DisabledDirective).call(this, 'disabled'));
  }

  return DisabledDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/index.js":
/*!**************************************!*\
  !*** ./src/directive/state/index.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checked */ "./src/directive/state/checked.js");
/* empty/unused harmony star reexport *//* harmony import */ var _disabled__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./disabled */ "./src/directive/state/disabled.js");
/* empty/unused harmony star reexport *//* harmony import */ var _readonly__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./readonly */ "./src/directive/state/readonly.js");
/* empty/unused harmony star reexport *//* harmony import */ var _selected__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selected */ "./src/directive/state/selected.js");
/* empty/unused harmony star reexport */




/***/ }),

/***/ "./src/directive/state/readonly.js":
/*!*****************************************!*\
  !*** ./src/directive/state/readonly.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReadonlyDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-readonly'
}), _dec(_class = /*#__PURE__*/function (_StateDirective) {
  _inherits(ReadonlyDirective, _StateDirective);

  function ReadonlyDirective() {
    _classCallCheck(this, ReadonlyDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReadonlyDirective).call(this, 'readonly'));
  }

  return ReadonlyDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/selected.js":
/*!*****************************************!*\
  !*** ./src/directive/state/selected.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/directive/state/state.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  selector: 'm-selected'
}), _dec(_class = /*#__PURE__*/function (_StateDirective) {
  _inherits(SelectedDirective, _StateDirective);

  function SelectedDirective() {
    _classCallCheck(this, SelectedDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectedDirective).call(this, 'selected'));
  }

  return SelectedDirective;
}(_state__WEBPACK_IMPORTED_MODULE_0__["StateDirective"])) || _class);

/***/ }),

/***/ "./src/directive/state/state.js":
/*!**************************************!*\
  !*** ./src/directive/state/state.js ***!
  \**************************************/
/*! exports provided: StateDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StateDirective", function() { return StateDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var StateDirective = /*#__PURE__*/function (_Directive) {
  _inherits(StateDirective, _Directive);

  function StateDirective(key) {
    var _this;

    _classCallCheck(this, StateDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateDirective).call(this));
    _this.key = key;
    return _this;
  }

  _createClass(StateDirective, [{
    key: "onChange",
    value: function onChange(value) {
      if (value) {
        if (!this.$elm.hasAttribute(this.key)) {
          this.$elm.setAttribute(this.key, '');
        }
      } else {
        if (this.$elm.hasAttribute(this.key)) {
          this.$elm.removeAttribute(this.key);
        }
      }
    }
  }]);

  return StateDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"]);

/***/ }),

/***/ "./src/exp/analyser.js":
/*!*****************************!*\
  !*** ./src/exp/analyser.js ***!
  \*****************************/
/*! exports provided: Analyser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Analyser", function() { return Analyser; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
/* harmony import */ var _exp_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp-api */ "./src/exp/exp-api.js");
/* harmony import */ var _exp_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp-builder */ "./src/exp/exp-builder.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Accessor = /*#__PURE__*/function () {
  function Accessor(callee, exp) {
    _classCallCheck(this, Accessor);

    this.callee = callee;
    this.exp = exp;
    this.children = {};
  }

  _createClass(Accessor, [{
    key: "createChild",
    value: function createChild(key, callee, exp) {
      if (!this.children[key]) {
        this.children[key] = new Accessor(callee, exp);
      }

      return this.children[key];
    }
  }]);

  return Accessor;
}();

var Analyser = /*#__PURE__*/function () {
  function Analyser(exp, locals) {
    _classCallCheck(this, Analyser);

    this.exp = exp;
    this.locals = locals || {};
    this.program = null;
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]();
    this.accessors = {};
    this.localAccessors = {};
  }

  _createClass(Analyser, [{
    key: "createAccessor",
    value: function createAccessor(key, callee, exp) {
      if (!this.accessors[key]) {
        this.accessors[key] = new Accessor(callee, exp);
      }

      return this.accessors[key];
    }
  }, {
    key: "createLocalAccessor",
    value: function createLocalAccessor(key, callee, exp) {
      if (!this.localAccessors[key]) {
        this.localAccessors[key] = new Accessor(callee, exp);
      }

      return this.localAccessors[key];
    }
  }, {
    key: "analyse",
    value: function analyse() {
      var _this = this;

      this.program = Object(_exp_api__WEBPACK_IMPORTED_MODULE_2__["parseExp"])(this.exp);
      this.program.childNodes.forEach(function (child) {
        _this.analyseNode(child);
      });
    }
  }, {
    key: "analyseNode",
    value: function analyseNode(node, context) {
      var result = null;

      switch (node.type) {
        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ExpressionStatement:
          this.analyseExpression(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].AssignmentExpression:
          this.analyseAssignment(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ConditionalExpression:
          this.analyseCondition(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].LogicalExpression:
          this.analyseLogic(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].BinaryExpression:
          this.analyseBinary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].UnaryExpression:
          this.analyseUnary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].CallExpression:
          this.analyseCall(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].MemberExpression:
          result = this.analyseMember(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier:
          result = this.analyseIdentifier(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Literal:
          result = this.analyseLiteral(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ArrayExpression:
          this.analyseArray(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Property:
          this.analyseProperty(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ObjectExpression:
          this.analyseObject(node);
          break;
      }

      return result;
    }
  }, {
    key: "analyseExpression",
    value: function analyseExpression(exp) {
      var _this2 = this;

      exp.childNodes.forEach(function (child) {
        _this2.analyseNode(child);
      });
    }
  }, {
    key: "analyseAssignment",
    value: function analyseAssignment(assignment) {
      this.analyseNode(assignment.right);
    }
  }, {
    key: "analyseCondition",
    value: function analyseCondition(condition) {
      this.analyseNode(condition.test);
      this.analyseNode(condition.alternate);
      this.analyseNode(condition.consequent);
    }
  }, {
    key: "analyseLogic",
    value: function analyseLogic(logic) {
      this.analyseNode(logic.left);
      this.analyseNode(logic.right);
    }
  }, {
    key: "analyseBinary",
    value: function analyseBinary(binary) {
      this.analyseNode(binary.left);
      this.analyseNode(binary.right);
    }
  }, {
    key: "analyseUnary",
    value: function analyseUnary(unary) {
      this.analyseNode(unary.arg);
    }
  }, {
    key: "analyseCall",
    value: function analyseCall(call) {
      var _this3 = this;

      call.args.forEach(function (arg) {
        _this3.analyseNode(arg);
      });

      if (!call.filter) {
        this.analyseNode(call.callee, {
          callee: true
        });
      }
    }
  }, {
    key: "analyseMember",
    value: function analyseMember(member, context) {
      var parent = this.analyseNode(member.object);

      if (member.computed) {
        this.analyseNode(member.property, {
          callee: context && context.callee
        });

        if (member.property.type === _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Literal) {
          return parent.createChild(member.property.value, context && context.callee);
        }

        var key = this.builder.build(member.property);
        return parent.createChild(key, context && context.callee, true);
      }

      return this.analyseNode(member.property, {
        parent: parent,
        callee: context && context.callee
      });
    }
  }, {
    key: "analyseIdentifier",
    value: function analyseIdentifier(identifier, context) {
      var key = this.builder.build(identifier),
          callee = context && context.callee;

      if (context && context.parent) {
        return context.parent.createChild(key, callee);
      }

      if (this.locals[key]) {
        return this.createLocalAccessor(key, callee);
      }

      return this.createAccessor(key, callee);
    }
  }, {
    key: "analyseLiteral",
    value: function analyseLiteral(literal, context) {
      var key = this.builder.build(literal);

      if (context && context.parent) {
        return context.parent.createChild(key);
      }
    }
  }, {
    key: "analyseProperty",
    value: function analyseProperty(prop) {
      this.analyseNode(prop.value);
    }
  }, {
    key: "analyseObject",
    value: function analyseObject(obj) {
      var _this4 = this;

      obj.properties.forEach(function (item) {
        _this4.analyseNode(item);
      });
    }
  }, {
    key: "analyseArray",
    value: function analyseArray(arr) {
      var _this5 = this;

      arr.childNodes.forEach(function (child) {
        _this5.analyse(child);
      });
    }
  }]);

  return Analyser;
}();

/***/ }),

/***/ "./src/exp/evaluator.js":
/*!******************************!*\
  !*** ./src/exp/evaluator.js ***!
  \******************************/
/*! exports provided: Evaluator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evaluator", function() { return Evaluator; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
/* harmony import */ var _exp_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp-api */ "./src/exp/exp-api.js");
/* harmony import */ var _exp_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp-builder */ "./src/exp/exp-builder.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Evaluator = /*#__PURE__*/function () {
  function Evaluator(scope, locals, options) {
    _classCallCheck(this, Evaluator);

    this.scope = scope;
    this.locals = locals || {};
    this.program = null;
    this.options = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
      allowNull: false,
      assignInterceptor: null
    }, options);
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]();
  } // get value from expression


  _createClass(Evaluator, [{
    key: "evaluate",
    value: function evaluate(exp) {
      var _this = this;

      var result;
      this.program = Object(_exp_api__WEBPACK_IMPORTED_MODULE_2__["parseExp"])(exp);
      this.program.childNodes.forEach(function (child) {
        result = _this.evaluateNode(child);
      });

      if (result && result.$null) {
        result = null;
      }

      return result;
    } // set value to expression

  }, {
    key: "assign",
    value: function assign(exp, value) {
      this.program = Object(_exp_api__WEBPACK_IMPORTED_MODULE_2__["parseExp"])(exp);

      if (this.program.childNodes.length !== 1) {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0} is not a valid assignment', exp));
      }

      var expression = this.program.childNodes[0];

      if (expression.childNodes.length > 1) {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0} is not a valid assignment', exp));
      }

      var assignment = expression.childNodes[0];

      if (assignment.type === _model__WEBPACK_IMPORTED_MODULE_1__["AST"].MemberExpression) {
        var target = this.evaluateNode(assignment.object);

        if (target == null) {
          throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0} is null or undefined', this.builder.build(assignment.object)));
        }

        var key = this.evaluateNode(assignment.property, {
          propertyKey: !assignment.computed
        });

        if (key == null) {
          throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0} is null or undefined', this.builder.build(assignment.property)));
        }

        if (this.options.assignInterceptor == null) {
          target[key] = value;
        } else {
          this.options.assignInterceptor.call(this, target, key);
        }
      } else if (assignment.type === _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier) {
        var key = this.builder.build(assignment);

        if (this.options.assignInterceptor == null) {
          this.scope[key] = value;
        } else {
          this.options.assignInterceptor.call(this, this.scope, key);
        }
      } else {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0} is not a valid assignment', exp));
      }
    }
  }, {
    key: "evaluateNode",
    value: function evaluateNode(node, context) {
      var result;

      switch (node.type) {
        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ExpressionStatement:
          result = this.evaluateExpression(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].AssignmentExpression:
          result = this.evaluateAssignment(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ConditionalExpression:
          result = this.evaluateCondition(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].LogicalExpression:
          result = this.evaluateLogic(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].BinaryExpression:
          result = this.evaluateBinary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].UnaryExpression:
          result = this.evaluateUnary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].CallExpression:
          result = this.evaluateCall(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].MemberExpression:
          result = this.evaluateMember(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier:
          result = this.evaluateIdentifier(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Literal:
          result = this.evaluateLiteral(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ArrayExpression:
          result = this.evaluateArray(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Property:
          result = this.evaluateProperty(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ObjectExpression:
          result = this.evaluateObject(node);
          break;
      }

      return result;
    }
  }, {
    key: "evaluateExpression",
    value: function evaluateExpression(exp) {
      var _this2 = this;

      var result;
      exp.childNodes.forEach(function (child) {
        result = _this2.evaluateNode(child);
      });
      return result;
    }
  }, {
    key: "evaluateAssignment",
    value: function evaluateAssignment(assignment) {
      var target = this.evaluateNode(assignment.left, {
        assignmentLeft: true
      });
      var value = this.evaluateNode(assignment.right);

      if (this.options.assignInterceptor == null) {
        target.obj[target.prop] = value;
      } else {
        this.options.assignInterceptor.call(this, target.obj, target.prop);
      }
    }
  }, {
    key: "evaluateCondition",
    value: function evaluateCondition(condition) {
      if (this.evaluateNode(condition.test)) {
        return this.evaluateNode(condition.alternate);
      }

      return this.evaluateNode(condition.consequent);
    }
  }, {
    key: "evaluateLogic",
    value: function evaluateLogic(logic) {
      var result;
      var leftValue = this.evaluateNode(logic.left);
      var rightValue = this.evaluateNode(logic.right);

      switch (logic.operator) {
        case '&&':
          result = leftValue && rightValue;
          break;

        case '||':
          result = leftValue && rightValue;
          break;
      }

      return result;
    }
  }, {
    key: "evaluateBinary",
    value: function evaluateBinary(binary) {
      var result;
      var leftValue = this.evaluateNode(binary.left);
      var rightValue = this.evaluateNode(binary.right); // '+', '-', '*', '/', '%', '<', '>', '<=', '>=', '==', '!=', '===', '!=='

      switch (binary.operator) {
        case '+':
          result = leftValue + rightValue;
          break;

        case '-':
          result = leftValue - rightValue;
          break;

        case '*':
          result = leftValue * rightValue;
          break;

        case '/':
          result = leftValue / rightValue;
          break;

        case '%':
          result = leftValue % rightValue;
          break;

        case '<':
          result = leftValue < rightValue;
          break;

        case '>':
          result = leftValue > rightValue;
          break;

        case '<=':
          result = leftValue <= rightValue;
          break;

        case '>=':
          result = leftValue >= rightValue;
          break;

        case '==':
          result = leftValue == rightValue;
          break;

        case '!=':
          result = leftValue != rightValue;
          break;

        case '===':
          result = leftValue === rightValue;
          break;

        case '!==':
          result = leftValue !== rightValue;
          break;
      }

      return result;
    }
  }, {
    key: "evaluateUnary",
    value: function evaluateUnary(unary) {
      var result,
          value = this.evaluateNode(unary.arg);

      switch (unary.operator) {
        case '+':
          result = value;
          break;

        case '-':
          result = -value;
          break;

        case '!':
          result = !value;
          break;
      }

      return result;
    }
  }, {
    key: "evaluateCall",
    value: function evaluateCall(call) {
      var _this3 = this;

      var argValues = call.args.map(function (arg) {
        return _this3.evaluateNode(arg);
      });
      var context = this.evaluateNode(call.callee, {
        callee: true
      });

      if (call.filter) {
        if (this.scope.$hasFilter(context.prop)) {
          var filter = this.scope.$getFilter(context.prop);
          return filter.execute.apply(filter, argValues);
        } else {
          throw new Error('Filter "' + context.prop + '" is not defined');
        }
      } else {
        var fn = context.obj[context.prop];

        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](fn)) {
          return fn.apply(context.obj, argValues);
        }

        throw new Error(context.prop + ' is not a function');
      }
    }
  }, {
    key: "evaluateMember",
    value: function evaluateMember(member, context) {
      var obj = this.evaluateNode(member.object);

      if (obj == null && (this.options.allowNull || member.object.allowNull)) {
        obj = new _model__WEBPACK_IMPORTED_MODULE_1__["NullExpressionNode"]();
      }

      if (member.computed) {
        var prop = this.evaluateNode(member.property);
        return obj[prop];
      }

      return this.evaluateNode(member.property, {
        target: obj,
        targetNode: member.object,
        callee: context && context.callee,
        assignmentLeft: context && context.assignmentLeft
      });
    }
  }, {
    key: "evaluateIdentifier",
    value: function evaluateIdentifier(identifier, context) {
      var target;
      context = context || {};

      if (context.targetNode == null) {
        target = this.scope;
      } else {
        target = context.target;
      }

      if (context.assignmentLeft || context.callee) {
        return {
          obj: target,
          prop: identifier.name
        };
      }

      if (context.propertyKey) {
        return identifier.name;
      }

      var result = target[identifier.name];

      if (result == null && this.locals) {
        result = this.locals[identifier.name];
      }

      return result;
    }
  }, {
    key: "evaluateLiteral",
    value: function evaluateLiteral(literal) {
      return literal.value;
    }
  }, {
    key: "evaluateProperty",
    value: function evaluateProperty(prop) {
      var key = this.evaluateNode(prop.key, {
        propertyKey: true
      });
      var value = this.evaluateNode(prop.value);
      return {
        key: key,
        value: value
      };
    }
  }, {
    key: "evaluateObject",
    value: function evaluateObject(obj) {
      var _this4 = this;

      var result = {};
      obj.properties.forEach(function (item) {
        var def = _this4.evaluateNode(item);

        result[def.key] = def.value;
      });
      return result;
    }
  }, {
    key: "evaluateArray",
    value: function evaluateArray(arr) {
      var _this5 = this;

      var result = [];
      arr.childNodes.forEach(function (child) {
        result.push(_this5.evaluateNode(child));
      });
      return result;
    }
  }]);

  return Evaluator;
}();

/***/ }),

/***/ "./src/exp/exp-api.js":
/*!****************************!*\
  !*** ./src/exp/exp-api.js ***!
  \****************************/
/*! exports provided: lexExp, parseExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexExp", function() { return lexExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return parseExp; });
/* harmony import */ var _exp_lexer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exp-lexer */ "./src/exp/exp-lexer.js");
/* harmony import */ var _exp_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-parser */ "./src/exp/exp-parser.js");



function lexExp(exp) {
  return new _exp_lexer__WEBPACK_IMPORTED_MODULE_0__["ExpLexer"]().lex(exp);
}

function parseExp(exp) {
  return new _exp_parser__WEBPACK_IMPORTED_MODULE_1__["ExpParser"](new _exp_lexer__WEBPACK_IMPORTED_MODULE_0__["ExpLexer"]()).parse(exp);
}



/***/ }),

/***/ "./src/exp/exp-builder.js":
/*!********************************!*\
  !*** ./src/exp/exp-builder.js ***!
  \********************************/
/*! exports provided: ExpBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpBuilder", function() { return ExpBuilder; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var ExpBuilder = /*#__PURE__*/function () {
  function ExpBuilder() {
    _classCallCheck(this, ExpBuilder);
  }

  _createClass(ExpBuilder, [{
    key: "build",
    value: function build(node) {
      var result;

      switch (node.type) {
        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ExpressionStatement:
          result = this.buildExpression(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].AssignmentExpression:
          result = this.buildAssignment(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ConditionalExpression:
          result = this.buildCondition(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].LogicalExpression:
          result = this.buildLogic(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].BinaryExpression:
          result = this.buildBinary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].UnaryExpression:
          result = this.buildUnary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].CallExpression:
          result = this.buildCall(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].MemberExpression:
          result = this.buildMember(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier:
          result = this.buildIdentifier(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Literal:
          result = this.buildLiteral(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ArrayExpression:
          result = this.buildArray(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Property:
          result = this.buildProperty(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_1__["AST"].ObjectExpression:
          result = this.buildObject(node);
          break;
      }

      return result;
    }
  }, {
    key: "buildExpression",
    value: function buildExpression(exp) {
      var _this = this;

      var result;
      exp.childNodes.forEach(function (child) {
        result = _this.build(child);
      });
      return result;
    }
  }, {
    key: "buildAssignment",
    value: function buildAssignment(assignment) {
      var target = this.build(assignment.left);
      var value = this.build(assignment.right);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}={1}', target, value);
    }
  }, {
    key: "buildCondition",
    value: function buildCondition(condition) {
      var test = this.build(condition.test);
      var alternate = this.build(condition.alternate);
      var consequent = this.build(condition.consequent);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}?{1}:{2}', test, alternate, consequent);
    }
  }, {
    key: "buildLogic",
    value: function buildLogic(logic) {
      var leftValue = this.build(logic.left);
      var rightValue = this.build(logic.right);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}{1}{2}', leftValue, logic.operator, rightValue);
    }
  }, {
    key: "buildBinary",
    value: function buildBinary(binary) {
      var leftValue = this.build(binary.left);
      var rightValue = this.build(binary.right);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}{1}{2}', leftValue, binary.operator, rightValue);
    }
  }, {
    key: "buildUnary",
    value: function buildUnary(unary) {
      var value = this.build(unary.arg);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}{1}', unary.operator, value);
    }
  }, {
    key: "buildCall",
    value: function buildCall(call) {
      var _this2 = this;

      var res = '',
          argValues = call.args.map(function (arg) {
        return _this2.build(arg);
      });
      var fn = this.build(call.callee);

      if (call.filter) {
        if (argValues.length > 0) {
          res = argValues.shift();
        }

        res += ' | ' + fn;

        if (argValues.length > 0) {
          res += ':' + _utils__WEBPACK_IMPORTED_MODULE_0__["join"](':', argValues);
        }
      } else {
        res = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}({1})', fn, _utils__WEBPACK_IMPORTED_MODULE_0__["join"](', ', argValues));
      }

      return res;
    }
  }, {
    key: "buildMember",
    value: function buildMember(member) {
      var obj = this.build(member.object);
      var prop = this.build(member.property);

      if (member.computed) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}[{1}]', obj, prop);
      }

      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}.{1}', obj, prop);
    }
  }, {
    key: "buildIdentifier",
    value: function buildIdentifier(identifier) {
      return identifier.name;
    }
  }, {
    key: "buildLiteral",
    value: function buildLiteral(literal) {
      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](literal.value)) {
        return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('"{0}"', literal.value);
      }

      return literal.value;
    }
  }, {
    key: "buildProperty",
    value: function buildProperty(prop) {
      var key = this.build(prop.key, {
        propertyKey: true
      });
      var value = this.build(prop.value);
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}:{1}', key, value);
    }
  }, {
    key: "buildObject",
    value: function buildObject(obj) {
      var _this3 = this;

      var props = obj.properties.map(function (item) {
        return _this3.build(item);
      });
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{{0}}', _utils__WEBPACK_IMPORTED_MODULE_0__["join"](', ', props));
    }
  }, {
    key: "buildArray",
    value: function buildArray(arr) {
      var _this4 = this;

      var items = arr.childNodes.map(function (child) {
        return _this4.build(child);
      });
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('[{0}]', _utils__WEBPACK_IMPORTED_MODULE_0__["join"](',', items));
    }
  }]);

  return ExpBuilder;
}();

/***/ }),

/***/ "./src/exp/exp-lexer.js":
/*!******************************!*\
  !*** ./src/exp/exp-lexer.js ***!
  \******************************/
/*! exports provided: ExpLexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpLexer", function() { return ExpLexer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _exp_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-operators */ "./src/exp/exp-operators.js");
/* harmony import */ var _parse_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-options */ "./src/exp/parse-options.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ExpLexer = /*#__PURE__*/function () {
  function ExpLexer(options) {
    _classCallCheck(this, ExpLexer);

    this.options = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](_parse_options__WEBPACK_IMPORTED_MODULE_2__["parseOptions"], options);
  }

  _createClass(ExpLexer, [{
    key: "lex",
    value: function lex(text) {
      this.text = text;
      this.index = 0;
      this.tokens = [];

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);

        if (ch === '"' || ch === '\'') {
          this.readString(ch);
        } else if (this.isNumber(ch) || ch === '.' && this.isNumber(this.peek())) {
          this.readNumber();
        } else if (this.isIdentifierStart(this.peekMultichar())) {
          this.readIdent();
        } else if (this.is(ch, '(){}[].,;:?')) {
          this.tokens.push({
            index: this.index,
            text: ch
          });
          this.index++;
        } else if (this.isWhitespace(ch)) {
          this.index++;
        } else {
          var ch2 = ch + this.peek();
          var ch3 = ch2 + this.peek(2);
          var op1 = _exp_operators__WEBPACK_IMPORTED_MODULE_1__["OPERATORS"][ch];
          var op2 = _exp_operators__WEBPACK_IMPORTED_MODULE_1__["OPERATORS"][ch2];
          var op3 = _exp_operators__WEBPACK_IMPORTED_MODULE_1__["OPERATORS"][ch3];

          if (op1 || op2 || op3) {
            var token = op3 ? ch3 : op2 ? ch2 : ch;
            this.tokens.push({
              index: this.index,
              text: token,
              operator: true
            });
            this.index += token.length;
          } else {
            this.throwError('Unexpected next character ', this.index, this.index + 1);
          }
        }
      }

      return this.tokens;
    }
  }, {
    key: "is",
    value: function is(ch, chars) {
      return chars.indexOf(ch) !== -1;
    }
  }, {
    key: "peek",
    value: function peek(i) {
      var num = i || 1;
      return this.index + num < this.text.length ? this.text.charAt(this.index + num) : false;
    }
  }, {
    key: "isNumber",
    value: function isNumber(ch) {
      return '0' <= ch && ch <= '9' && typeof ch === 'string';
    }
  }, {
    key: "isWhitespace",
    value: function isWhitespace(ch) {
      // IE treats non-breaking space as \u00A0
      return ch === ' ' || ch === '\r' || ch === '\t' || ch === '\n' || ch === '\v' || ch === "\xA0";
    }
  }, {
    key: "isIdentifierStart",
    value: function isIdentifierStart(ch) {
      return this.options.isIdentifierStart ? this.options.isIdentifierStart(ch, this.codePointAt(ch)) : this.isValidIdentifierStart(ch);
    }
  }, {
    key: "isValidIdentifierStart",
    value: function isValidIdentifierStart(ch) {
      return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$';
    }
  }, {
    key: "isIdentifierContinue",
    value: function isIdentifierContinue(ch) {
      return this.options.isIdentifierContinue ? this.options.isIdentifierContinue(ch, this.codePointAt(ch)) : this.isValidIdentifierContinue(ch);
    }
  }, {
    key: "isValidIdentifierContinue",
    value: function isValidIdentifierContinue(ch, cp) {
      return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch);
    }
  }, {
    key: "codePointAt",
    value: function codePointAt(ch) {
      if (ch.length === 1) {
        return ch.charCodeAt(0);
      } // eslint-disable-next-line no-bitwise


      return (ch.charCodeAt(0) << 10) + ch.charCodeAt(1) - 0x35FDC00;
    }
  }, {
    key: "peekMultichar",
    value: function peekMultichar() {
      var ch = this.text.charAt(this.index);
      var peek = this.peek();

      if (!peek) {
        return ch;
      }

      var cp1 = ch.charCodeAt(0);
      var cp2 = peek.charCodeAt(0);

      if (cp1 >= 0xD800 && cp1 <= 0xDBFF && cp2 >= 0xDC00 && cp2 <= 0xDFFF) {
        return ch + peek;
      }

      return ch;
    }
  }, {
    key: "isExpOperator",
    value: function isExpOperator(ch) {
      return ch === '-' || ch === '+' || this.isNumber(ch);
    }
  }, {
    key: "throwError",
    value: function throwError(error, start, end) {
      end = end || this.index;
      var colStr = _utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"](start) ? 's ' + start + '-' + this.index + ' [' + this.text.substring(start, end) + ']' : ' ' + end;
      throw new Error('Lexer Error: ' + error + ' at column' + colStr + ' in expression [' + this.text + '].');
    }
  }, {
    key: "readNumber",
    value: function readNumber() {
      var number = '';
      var start = this.index;

      while (this.index < this.text.length) {
        var ch = _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](this.text.charAt(this.index));

        if (ch === '.' || this.isNumber(ch)) {
          number += ch;
        } else {
          var peekCh = this.peek();

          if (ch === 'e' && this.isExpOperator(peekCh)) {
            number += ch;
          } else if (this.isExpOperator(ch) && peekCh && this.isNumber(peekCh) && number.charAt(number.length - 1) === 'e') {
            number += ch;
          } else if (this.isExpOperator(ch) && (!peekCh || !this.isNumber(peekCh)) && number.charAt(number.length - 1) === 'e') {
            this.throwError('Invalid exponent');
          } else {
            break;
          }
        }

        this.index++;
      }

      this.tokens.push({
        index: start,
        text: number,
        constant: true,
        value: Number(number)
      });
    }
  }, {
    key: "readIdent",
    value: function readIdent() {
      var start = this.index;
      this.index += this.peekMultichar().length;

      while (this.index < this.text.length) {
        var ch = this.peekMultichar();

        if (!this.isIdentifierContinue(ch)) {
          break;
        }

        this.index += ch.length;
      }

      this.tokens.push({
        index: start,
        text: this.text.slice(start, this.index),
        identifier: true
      });
    }
  }, {
    key: "readString",
    value: function readString(quote) {
      var start = this.index;
      this.index++;
      var string = '';
      var rawString = quote;
      var escape = false;

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;

        if (escape) {
          if (ch === 'u') {
            var hex = this.text.substring(this.index + 1, this.index + 5);

            if (!hex.match(/[\da-f]{4}/i)) {
              this.throwError("Invalid unicode escape [\\u" + hex + ']');
            }

            this.index += 4;
            string += String.fromCharCode(parseInt(hex, 16));
          } else {
            var rep = ESCAPE[ch];
            string = string + (rep || ch);
          }

          escape = false;
        } else if (ch === '\\') {
          escape = true;
        } else if (ch === quote) {
          this.index++;
          this.tokens.push({
            index: start,
            text: rawString,
            constant: true,
            value: string
          });
          return;
        } else {
          string += ch;
        }

        this.index++;
      }

      this.throwError('Unterminated quote', start);
    }
  }]);

  return ExpLexer;
}();

/***/ }),

/***/ "./src/exp/exp-operators.js":
/*!**********************************!*\
  !*** ./src/exp/exp-operators.js ***!
  \**********************************/
/*! exports provided: OPERATORS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OPERATORS", function() { return OPERATORS; });
var OPERATORS = {};
var operatorText = '+ - * / % === !== == != < > <= >= && || ! = |';
var ESCAPE = {
  'n': '\n',
  'f': '\f',
  'r': '\r',
  't': '\t',
  'v': '\v',
  '\'': '\'',
  '"': '"'
};
operatorText.split(' ').forEach(function (operator) {
  OPERATORS[operator] = true;
});

/***/ }),

/***/ "./src/exp/exp-parser.js":
/*!*******************************!*\
  !*** ./src/exp/exp-parser.js ***!
  \*******************************/
/*! exports provided: ExpParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpParser", function() { return ExpParser; });
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
/* harmony import */ var _exp_lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-lexer */ "./src/exp/exp-lexer.js");
/* harmony import */ var _parse_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parse-options */ "./src/exp/parse-options.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var ExpParser = /*#__PURE__*/function () {
  function ExpParser(lexer, options) {
    _classCallCheck(this, ExpParser);

    this.lexer = lexer;
    this.options = _utils__WEBPACK_IMPORTED_MODULE_3__["merge"](_parse_options__WEBPACK_IMPORTED_MODULE_2__["parseOptions"], options);
  }

  _createClass(ExpParser, [{
    key: "throwError",
    value: function throwError(msg, token) {
      throw new Error('Syntax Error: Token \'' + token.text + '\'' + msg + ' at column ' + (token.index + 1) + ' of the expression [' + this.text + '] starting at [' + this.text.substring(token.index) + '].');
    }
  }, {
    key: "parse",
    value: function parse(text) {
      this.text = text;
      this.tokens = this.lexer.lex(text);
      var value = this.program();

      if (this.tokens.length !== 0) {
        this.throwError('is an unexpected token', this.tokens[0]);
      }

      return value;
    }
  }, {
    key: "program",
    value: function program() {
      var program = new _model__WEBPACK_IMPORTED_MODULE_0__["ProgramNode"]();

      while (true) {
        if (this.tokens.length > 0 && !this.peek('}', ')', ';', ']')) {
          program.appendChild(this.expressionStatement());
        }

        if (!this.expect(';')) {
          return program;
        }
      }
    }
  }, {
    key: "expressionStatement",
    value: function expressionStatement() {
      var exp = new _model__WEBPACK_IMPORTED_MODULE_0__["ExpressionStatementNode"]();
      exp.appendChild(this.filterChain());
      return exp;
    }
  }, {
    key: "filterChain",
    value: function filterChain() {
      var left = this.expression();

      while (this.expect('|')) {
        left = this.filter(left);
      }

      return left;
    }
  }, {
    key: "expression",
    value: function expression() {
      return this.assignment();
    }
  }, {
    key: "isAssignable",
    value: function isAssignable(ast) {
      return ast.type === _model__WEBPACK_IMPORTED_MODULE_0__["AST"].Identifier || ast.type === _model__WEBPACK_IMPORTED_MODULE_0__["AST"].MemberExpression;
    }
  }, {
    key: "assignment",
    value: function assignment() {
      var result = this.ternary();

      if (this.expect('=')) {
        if (!this.isAssignable(result)) {
          throw new Error('Trying to assign a value to a non l-value');
        }

        result = new _model__WEBPACK_IMPORTED_MODULE_0__["AssignmentExpressionNode"](result, this.assignment(), '=');
      }

      return result;
    }
  }, {
    key: "ternary",
    value: function ternary() {
      var test = this.logicalOR();
      var alternate;
      var consequent;

      if (this.expect('?')) {
        alternate = this.expression();

        if (this.consume(':')) {
          consequent = this.expression();
          return new _model__WEBPACK_IMPORTED_MODULE_0__["ConditionalExpressionNode"](test, alternate, consequent);
        }
      }

      return test;
    }
  }, {
    key: "logicalOR",
    value: function logicalOR() {
      var left = this.logicalAND();

      while (this.expect('||')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["LogicalExpressionNode"]('||', left, this.logicalAND());
      }

      return left;
    }
  }, {
    key: "logicalAND",
    value: function logicalAND() {
      var left = this.equality();

      while (this.expect('&&')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["LogicalExpressionNode"]('&&', left, this.equality());
      }

      return left;
    }
  }, {
    key: "equality",
    value: function equality() {
      var left = this.relational();
      var token;

      while (token = this.expect('==', '!=', '===', '!==')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["BinaryExpressionNode"](token.text, left, this.relational());
      }

      return left;
    }
  }, {
    key: "relational",
    value: function relational() {
      var left = this.additive();
      var token;

      while (token = this.expect('<', '>', '<=', '>=')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["BinaryExpressionNode"](token.text, left, this.additive());
      }

      return left;
    }
  }, {
    key: "additive",
    value: function additive() {
      var left = this.multiplicative();
      var token;

      while (token = this.expect('+', '-')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["BinaryExpressionNode"](token.text, left, this.multiplicative());
      }

      return left;
    }
  }, {
    key: "multiplicative",
    value: function multiplicative() {
      var left = this.unary();
      var token;

      while (token = this.expect('*', '/', '%')) {
        left = new _model__WEBPACK_IMPORTED_MODULE_0__["BinaryExpressionNode"](token.text, left, this.unary());
      }

      return left;
    }
  }, {
    key: "unary",
    value: function unary() {
      var token;

      if (token = this.expect('+', '-', '!')) {
        return new _model__WEBPACK_IMPORTED_MODULE_0__["UnaryExpressionNode"](token.text, this.unary());
      } else {
        return this.primary();
      }
    }
  }, {
    key: "primary",
    value: function primary() {
      var primary;

      if (this.expect('(')) {
        primary = this.filterChain();
        this.consume(')');
      } else if (this.expect('[')) {
        primary = this.arrayDeclaration();
      } else if (this.expect('{')) {
        primary = this.object();
      } else if (this.options.literals.hasOwnProperty(this.peek().text)) {
        primary = new _model__WEBPACK_IMPORTED_MODULE_0__["LiteralNode"](this.options.literals[this.consume().text]);
      } else if (this.peek().identifier) {
        primary = this.identifier();
      } else if (this.peek().constant) {
        primary = this.constant();
      } else {
        this.throwError('not a primary expression', this.peek());
      }

      var next;

      while (this.peek('(', '[', '.') || this.peek('?') && this.peekAhead(1, '.')) {
        if (this.expect('?')) {
          primary.allowNull = true;
        }

        next = this.expect('(', '[', '.');

        if (next.text === '(') {
          primary = new _model__WEBPACK_IMPORTED_MODULE_0__["CallExpressionNode"](primary, this.parseArguments());
          this.consume(')');
        } else if (next.text === '[') {
          primary = new _model__WEBPACK_IMPORTED_MODULE_0__["MemberExpressionNode"](primary, this.expression(), true);
          this.consume(']');
        } else if (next.text === '.') {
          primary = new _model__WEBPACK_IMPORTED_MODULE_0__["MemberExpressionNode"](primary, this.identifier(), false);
        } else {
          this.throwError('IMPOSSIBLE');
        }
      }

      return primary;
    }
  }, {
    key: "filter",
    value: function filter(baseExpression) {
      var args = [baseExpression],
          identifiers = [this.identifier()];

      while (this.expect('.')) {
        identifiers.push(this.identifier());
      } // plus namespace


      var entireName = identifiers.map(function (item) {
        return item.name;
      }).join('.');
      var result = new _model__WEBPACK_IMPORTED_MODULE_0__["CallExpressionNode"](new _model__WEBPACK_IMPORTED_MODULE_0__["IdentifierNode"](entireName), args);
      result.filter = true;

      while (this.expect(':')) {
        args.push(this.expression());
      }

      return result;
    }
  }, {
    key: "parseArguments",
    value: function parseArguments() {
      var args = [];

      if (this.peekToken().text !== ')') {
        do {
          args.push(this.filterChain());
        } while (this.expect(','));
      }

      return args;
    }
  }, {
    key: "identifier",
    value: function identifier() {
      var token = this.consume();

      if (!token.identifier) {
        this.throwError('is not a valid identifier', token);
      }

      return new _model__WEBPACK_IMPORTED_MODULE_0__["IdentifierNode"](token.text);
    }
  }, {
    key: "constant",
    value: function constant() {
      // TODO check that it is a constant
      return new _model__WEBPACK_IMPORTED_MODULE_0__["LiteralNode"](this.consume().value);
    }
  }, {
    key: "arrayDeclaration",
    value: function arrayDeclaration() {
      var arr = new _model__WEBPACK_IMPORTED_MODULE_0__["ArrayExpressionNode"]();

      if (this.peekToken().text !== ']') {
        do {
          if (this.peek(']')) {
            // Support trailing commas per ES5.1.
            break;
          }

          arr.appendChild(this.expression());
        } while (this.expect(','));
      }

      this.consume(']');
      return arr;
    }
  }, {
    key: "object",
    value: function object() {
      var properties = [],
          property;

      if (this.peekToken().text !== '}') {
        do {
          if (this.peek('}')) {
            // Support trailing commas per ES5.1.
            break;
          }

          property = new _model__WEBPACK_IMPORTED_MODULE_0__["PropertyNode"]();

          if (this.peek().constant) {
            property.key = this.constant();
            property.computed = false;
            this.consume(':');
            property.value = this.expression();
          } else if (this.peek().identifier) {
            property.key = this.identifier();
            property.computed = false;

            if (this.peek(':')) {
              this.consume(':');
              property.value = this.expression();
            } else {
              property.value = property.key;
            }
          } else if (this.peek('[')) {
            this.consume('[');
            property.key = this.expression();
            this.consume(']');
            property.computed = true;
            this.consume(':');
            property.value = this.expression();
          } else {
            this.throwError('invalid key', this.peek());
          }

          properties.push(property);
        } while (this.expect(','));
      }

      this.consume('}');
      return new _model__WEBPACK_IMPORTED_MODULE_0__["ObjectExpressionNode"](properties);
    }
  }, {
    key: "consume",
    value: function consume(e1) {
      if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
      }

      var token = this.expect(e1);

      if (!token) {
        this.throwError('is unexpected, expecting [' + e1 + ']', this.peek());
      }

      return token;
    }
  }, {
    key: "peekToken",
    value: function peekToken() {
      if (this.tokens.length === 0) {
        throw new Error('Unexpected end of expression: ' + this.text);
      }

      return this.tokens[0];
    }
  }, {
    key: "peek",
    value: function peek(e1, e2, e3, e4) {
      return this.peekAhead(0, e1, e2, e3, e4);
    }
  }, {
    key: "peekAhead",
    value: function peekAhead(i, e1, e2, e3, e4) {
      if (this.tokens.length > i) {
        var token = this.tokens[i];
        var t = token.text;

        if (t === e1 || t === e2 || t === e3 || t === e4 || !e1 && !e2 && !e3 && !e4) {
          return token;
        }
      }

      return false;
    }
  }, {
    key: "expect",
    value: function expect(e1, e2, e3, e4) {
      var token = this.peek(e1, e2, e3, e4);

      if (token) {
        this.tokens.shift();
        return token;
      }

      return false;
    }
  }]);

  return ExpParser;
}();

/***/ }),

/***/ "./src/exp/index.js":
/*!**************************!*\
  !*** ./src/exp/index.js ***!
  \**************************/
/*! exports provided: parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse-options */ "./src/exp/parse-options.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return _parse_options__WEBPACK_IMPORTED_MODULE_0__["parseOptions"]; });

/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AST", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["AST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["NullExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AstNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["AstNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssignmentExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["AssignmentExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["BinaryExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["CallExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConditionalExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ConditionalExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionStatementNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ExpressionStatementNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentifierNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["IdentifierNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["LiteralNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogicalExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["LogicalExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["MemberExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ObjectExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ProgramNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["PropertyNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnaryExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["UnaryExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayExpressionNode", function() { return _model__WEBPACK_IMPORTED_MODULE_1__["ArrayExpressionNode"]; });

/* harmony import */ var _exp_lexer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp-lexer */ "./src/exp/exp-lexer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpLexer", function() { return _exp_lexer__WEBPACK_IMPORTED_MODULE_2__["ExpLexer"]; });

/* harmony import */ var _exp_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp-parser */ "./src/exp/exp-parser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpParser", function() { return _exp_parser__WEBPACK_IMPORTED_MODULE_3__["ExpParser"]; });

/* harmony import */ var _exp_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exp-api */ "./src/exp/exp-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexExp", function() { return _exp_api__WEBPACK_IMPORTED_MODULE_4__["lexExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _exp_api__WEBPACK_IMPORTED_MODULE_4__["parseExp"]; });

/* harmony import */ var _exp_builder__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./exp-builder */ "./src/exp/exp-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpBuilder", function() { return _exp_builder__WEBPACK_IMPORTED_MODULE_5__["ExpBuilder"]; });

/* harmony import */ var _evaluator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evaluator */ "./src/exp/evaluator.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Evaluator", function() { return _evaluator__WEBPACK_IMPORTED_MODULE_6__["Evaluator"]; });

/* harmony import */ var _analyser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./analyser */ "./src/exp/analyser.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Analyser", function() { return _analyser__WEBPACK_IMPORTED_MODULE_7__["Analyser"]; });










/***/ }),

/***/ "./src/exp/model/array.js":
/*!********************************!*\
  !*** ./src/exp/model/array.js ***!
  \********************************/
/*! exports provided: ArrayExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayExpressionNode", function() { return ArrayExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ArrayExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(ArrayExpressionNode, _AstNode);

  function ArrayExpressionNode() {
    _classCallCheck(this, ArrayExpressionNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(ArrayExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].ArrayExpression));
  }

  return ArrayExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/assignment.js":
/*!*************************************!*\
  !*** ./src/exp/model/assignment.js ***!
  \*************************************/
/*! exports provided: AssignmentExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentExpressionNode", function() { return AssignmentExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AssignmentExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(AssignmentExpressionNode, _AstNode);

  function AssignmentExpressionNode(left, right, operator) {
    var _this;

    _classCallCheck(this, AssignmentExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AssignmentExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].AssignmentExpression));
    _this.left = left;
    _this.right = right;
    _this.operator = operator;
    return _this;
  }

  return AssignmentExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/ast-node.js":
/*!***********************************!*\
  !*** ./src/exp/model/ast-node.js ***!
  \***********************************/
/*! exports provided: AstNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AstNode", function() { return AstNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AstNode = /*#__PURE__*/function () {
  function AstNode(type) {
    _classCallCheck(this, AstNode);

    this.type = type;
    this.childNodes = [];
  }

  _createClass(AstNode, [{
    key: "appendChild",
    value: function appendChild(child) {
      this.childNodes.push(child);
    }
  }]);

  return AstNode;
}();

/***/ }),

/***/ "./src/exp/model/ast.js":
/*!******************************!*\
  !*** ./src/exp/model/ast.js ***!
  \******************************/
/*! exports provided: AST, NullExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AST", function() { return AST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullExpressionNode", function() { return NullExpressionNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AST = {};
AST.Program = 'Program';
AST.ExpressionStatement = 'ExpressionStatement';
AST.AssignmentExpression = 'AssignmentExpression';
AST.ConditionalExpression = 'ConditionalExpression';
AST.LogicalExpression = 'LogicalExpression';
AST.BinaryExpression = 'BinaryExpression';
AST.UnaryExpression = 'UnaryExpression';
AST.CallExpression = 'CallExpression';
AST.MemberExpression = 'MemberExpression';
AST.Identifier = 'Identifier';
AST.Literal = 'Literal';
AST.ArrayExpression = 'ArrayExpression';
AST.Property = 'Property';
AST.ObjectExpression = 'ObjectExpression';
var NullExpressionNode = function NullExpressionNode() {
  _classCallCheck(this, NullExpressionNode);

  this.$null = true;
};

/***/ }),

/***/ "./src/exp/model/binary.js":
/*!*********************************!*\
  !*** ./src/exp/model/binary.js ***!
  \*********************************/
/*! exports provided: BinaryExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BinaryExpressionNode", function() { return BinaryExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BinaryExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(BinaryExpressionNode, _AstNode);

  function BinaryExpressionNode(operator, left, right) {
    var _this;

    _classCallCheck(this, BinaryExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(BinaryExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].BinaryExpression));
    _this.operator = operator;
    _this.left = left;
    _this.right = right;
    return _this;
  }

  return BinaryExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/call.js":
/*!*******************************!*\
  !*** ./src/exp/model/call.js ***!
  \*******************************/
/*! exports provided: CallExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallExpressionNode", function() { return CallExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CallExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(CallExpressionNode, _AstNode);

  function CallExpressionNode(callee, args) {
    var _this;

    _classCallCheck(this, CallExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CallExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].CallExpression));
    _this.callee = callee;
    _this.args = args;
    _this.filter = false;
    return _this;
  }

  return CallExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/conditional.js":
/*!**************************************!*\
  !*** ./src/exp/model/conditional.js ***!
  \**************************************/
/*! exports provided: ConditionalExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConditionalExpressionNode", function() { return ConditionalExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ConditionalExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(ConditionalExpressionNode, _AstNode);

  function ConditionalExpressionNode(test, alternate, consequent) {
    var _this;

    _classCallCheck(this, ConditionalExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionalExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].ConditionalExpression));
    _this.test = test;
    _this.alternate = alternate;
    _this.consequent = consequent;
    return _this;
  }

  return ConditionalExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/expression.js":
/*!*************************************!*\
  !*** ./src/exp/model/expression.js ***!
  \*************************************/
/*! exports provided: ExpressionStatementNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpressionStatementNode", function() { return ExpressionStatementNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ExpressionStatementNode = /*#__PURE__*/function (_AstNode) {
  _inherits(ExpressionStatementNode, _AstNode);

  function ExpressionStatementNode() {
    _classCallCheck(this, ExpressionStatementNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExpressionStatementNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].ExpressionStatement));
  }

  return ExpressionStatementNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/identifier.js":
/*!*************************************!*\
  !*** ./src/exp/model/identifier.js ***!
  \*************************************/
/*! exports provided: IdentifierNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentifierNode", function() { return IdentifierNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IdentifierNode = /*#__PURE__*/function (_AstNode) {
  _inherits(IdentifierNode, _AstNode);

  function IdentifierNode(name) {
    var _this;

    _classCallCheck(this, IdentifierNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IdentifierNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier));
    _this.name = name;
    _this.allowNull = false;
    return _this;
  }

  return IdentifierNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/index.js":
/*!********************************!*\
  !*** ./src/exp/model/index.js ***!
  \********************************/
/*! exports provided: AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AST", function() { return _ast__WEBPACK_IMPORTED_MODULE_0__["AST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullExpressionNode", function() { return _ast__WEBPACK_IMPORTED_MODULE_0__["NullExpressionNode"]; });

/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AstNode", function() { return _ast_node__WEBPACK_IMPORTED_MODULE_1__["AstNode"]; });

/* harmony import */ var _assignment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assignment */ "./src/exp/model/assignment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssignmentExpressionNode", function() { return _assignment__WEBPACK_IMPORTED_MODULE_2__["AssignmentExpressionNode"]; });

/* harmony import */ var _binary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binary */ "./src/exp/model/binary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryExpressionNode", function() { return _binary__WEBPACK_IMPORTED_MODULE_3__["BinaryExpressionNode"]; });

/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./call */ "./src/exp/model/call.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallExpressionNode", function() { return _call__WEBPACK_IMPORTED_MODULE_4__["CallExpressionNode"]; });

/* harmony import */ var _conditional__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./conditional */ "./src/exp/model/conditional.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConditionalExpressionNode", function() { return _conditional__WEBPACK_IMPORTED_MODULE_5__["ConditionalExpressionNode"]; });

/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expression */ "./src/exp/model/expression.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionStatementNode", function() { return _expression__WEBPACK_IMPORTED_MODULE_6__["ExpressionStatementNode"]; });

/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identifier */ "./src/exp/model/identifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentifierNode", function() { return _identifier__WEBPACK_IMPORTED_MODULE_7__["IdentifierNode"]; });

/* harmony import */ var _literal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./literal */ "./src/exp/model/literal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralNode", function() { return _literal__WEBPACK_IMPORTED_MODULE_8__["LiteralNode"]; });

/* harmony import */ var _logical__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logical */ "./src/exp/model/logical.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogicalExpressionNode", function() { return _logical__WEBPACK_IMPORTED_MODULE_9__["LogicalExpressionNode"]; });

/* harmony import */ var _member__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./member */ "./src/exp/model/member.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberExpressionNode", function() { return _member__WEBPACK_IMPORTED_MODULE_10__["MemberExpressionNode"]; });

/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./object */ "./src/exp/model/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectExpressionNode", function() { return _object__WEBPACK_IMPORTED_MODULE_11__["ObjectExpressionNode"]; });

/* harmony import */ var _program__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./program */ "./src/exp/model/program.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramNode", function() { return _program__WEBPACK_IMPORTED_MODULE_12__["ProgramNode"]; });

/* harmony import */ var _property__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./property */ "./src/exp/model/property.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyNode", function() { return _property__WEBPACK_IMPORTED_MODULE_13__["PropertyNode"]; });

/* harmony import */ var _unary__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./unary */ "./src/exp/model/unary.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnaryExpressionNode", function() { return _unary__WEBPACK_IMPORTED_MODULE_14__["UnaryExpressionNode"]; });

/* harmony import */ var _array__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./array */ "./src/exp/model/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayExpressionNode", function() { return _array__WEBPACK_IMPORTED_MODULE_15__["ArrayExpressionNode"]; });


















/***/ }),

/***/ "./src/exp/model/literal.js":
/*!**********************************!*\
  !*** ./src/exp/model/literal.js ***!
  \**********************************/
/*! exports provided: LiteralNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiteralNode", function() { return LiteralNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LiteralNode = /*#__PURE__*/function (_AstNode) {
  _inherits(LiteralNode, _AstNode);

  function LiteralNode(value) {
    var _this;

    _classCallCheck(this, LiteralNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LiteralNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].Literal));
    _this.value = value;
    return _this;
  }

  return LiteralNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/logical.js":
/*!**********************************!*\
  !*** ./src/exp/model/logical.js ***!
  \**********************************/
/*! exports provided: LogicalExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogicalExpressionNode", function() { return LogicalExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LogicalExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(LogicalExpressionNode, _AstNode);

  function LogicalExpressionNode(operator, left, right) {
    var _this;

    _classCallCheck(this, LogicalExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LogicalExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].LogicalExpression));
    _this.operator = operator;
    _this.left = left;
    _this.right = right;
    return _this;
  }

  return LogicalExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/member.js":
/*!*********************************!*\
  !*** ./src/exp/model/member.js ***!
  \*********************************/
/*! exports provided: MemberExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberExpressionNode", function() { return MemberExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MemberExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(MemberExpressionNode, _AstNode);

  function MemberExpressionNode(object, property, computed) {
    var _this;

    _classCallCheck(this, MemberExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MemberExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].MemberExpression));
    _this.object = object;
    _this.property = property;
    _this.computed = computed;
    _this.allowNull = false;
    return _this;
  }

  return MemberExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/object.js":
/*!*********************************!*\
  !*** ./src/exp/model/object.js ***!
  \*********************************/
/*! exports provided: ObjectExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectExpressionNode", function() { return ObjectExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ObjectExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(ObjectExpressionNode, _AstNode);

  function ObjectExpressionNode(properties) {
    var _this;

    _classCallCheck(this, ObjectExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ObjectExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].ObjectExpression));
    _this.properties = properties;
    return _this;
  }

  return ObjectExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/program.js":
/*!**********************************!*\
  !*** ./src/exp/model/program.js ***!
  \**********************************/
/*! exports provided: ProgramNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgramNode", function() { return ProgramNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProgramNode = /*#__PURE__*/function (_AstNode) {
  _inherits(ProgramNode, _AstNode);

  function ProgramNode() {
    _classCallCheck(this, ProgramNode);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgramNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].Program));
  }

  return ProgramNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/property.js":
/*!***********************************!*\
  !*** ./src/exp/model/property.js ***!
  \***********************************/
/*! exports provided: PropertyNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyNode", function() { return PropertyNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PropertyNode = /*#__PURE__*/function (_AstNode) {
  _inherits(PropertyNode, _AstNode);

  function PropertyNode() {
    var _this;

    _classCallCheck(this, PropertyNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].Property));
    _this.kind = 'init';
    _this.key = null;
    _this.value = null;
    _this.computed = false;
    return _this;
  }

  return PropertyNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/model/unary.js":
/*!********************************!*\
  !*** ./src/exp/model/unary.js ***!
  \********************************/
/*! exports provided: UnaryExpressionNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnaryExpressionNode", function() { return UnaryExpressionNode; });
/* harmony import */ var _ast_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ast-node */ "./src/exp/model/ast-node.js");
/* harmony import */ var _ast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ast */ "./src/exp/model/ast.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UnaryExpressionNode = /*#__PURE__*/function (_AstNode) {
  _inherits(UnaryExpressionNode, _AstNode);

  function UnaryExpressionNode(operator, arg) {
    var _this;

    _classCallCheck(this, UnaryExpressionNode);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(UnaryExpressionNode).call(this, _ast__WEBPACK_IMPORTED_MODULE_1__["AST"].UnaryExpression));
    _this.prefix = true;
    _this.operator = operator;
    _this.arg = arg;
    return _this;
  }

  return UnaryExpressionNode;
}(_ast_node__WEBPACK_IMPORTED_MODULE_0__["AstNode"]);

/***/ }),

/***/ "./src/exp/parse-options.js":
/*!**********************************!*\
  !*** ./src/exp/parse-options.js ***!
  \**********************************/
/*! exports provided: parseOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return parseOptions; });
var parseOptions = {
  isIdentifierContinue: false,
  isIdentifierStart: false,
  literals: {
    "false": false,
    "null": null,
    "true": true,
    undefined: undefined
  }
};

/***/ }),

/***/ "./src/helper.js":
/*!***********************!*\
  !*** ./src/helper.js ***!
  \***********************/
/*! exports provided: getChildNodes, clearChildNodes, replaceNode, removeNode, removeNodeBetween, insertNodeAfter, queryElementLoaded, queryElementUnloaded, queryElementState, addClass, removeClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildNodes", function() { return getChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildNodes", function() { return clearChildNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceNode", function() { return replaceNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNode", function() { return removeNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNodeBetween", function() { return removeNodeBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertNodeAfter", function() { return insertNodeAfter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementLoaded", function() { return queryElementLoaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementUnloaded", function() { return queryElementUnloaded; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryElementState", function() { return queryElementState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
function getChildNodes(node) {
  return Array.prototype.slice.call(node.childNodes, 0);
}

function clearChildNodes(node) {
  getChildNodes(node).forEach(function (child) {
    node.removeChild(child);
  });
}

function replaceNode(refNode, newNode) {
  var parentNode = refNode.parentNode;

  if (parentNode != null) {
    parentNode.insertBefore(newNode, refNode);
    parentNode.removeChild(refNode);
  }
}

function removeNode(node) {
  var parentNode = node.parentNode;

  if (parentNode != null) {
    parentNode.removeChild(node);
  }
}

function removeNodeBetween(beginNode, endNode) {
  var parentNode = beginNode.parentNode;
  var childNodes = getChildNodes(parentNode);
  childNodes.forEach(function (child) {
    if (child.previousSibling === beginNode && child !== endNode) {
      parentNode.removeChild(child);
    }

    if (child.nextSibling === endNode && child !== beginNode) {
      parentNode.removeChild(child);
    }
  });
}

function insertNodeAfter(refNode, newNode) {
  var parentNode = refNode.parentNode;

  if (parentNode.lastChild === refNode) {
    parentNode.appendChild(newNode);
  } else {
    parentNode.insertBefore(newNode, refNode.nextSibling);
  }
}

function queryElementLoaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementUnloaded(ele, callback) {
  var cancelToken = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth === 0 && ele.clientHeight == 0) {
      callback();
    } else {
      requestAnimationFrame(query);
    }
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function queryElementState(ele, callbacks) {
  var cancelToken = false,
      loaded = false;

  function query() {
    if (cancelToken) {
      return;
    }

    if (ele.clientWidth > 0 && ele.clientHeight > 0) {
      if (!loaded) {
        loaded = true;

        if (callbacks.onEnter != null) {
          callbacks.onEnter.call(callbacks);
        }
      }
    } else {
      if (loaded) {
        loaded = false;

        if (callbacks.onLeave != null) {
          callbacks.onLeave.call(callbacks);
        }
      }
    }

    requestAnimationFrame(query);
  }

  requestAnimationFrame(query);
  return function () {
    cancelToken = true;
  };
}

function addClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(el, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, events, isProxy, getTarget, Watcher, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, TplBuilder, Binding, Expression, Render, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, Delayer, component, directive, filter, service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isUndefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDefined"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBlankObject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isDate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isRegExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isBoolean"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isSame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isEmpty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["debug"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["contains"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["containsStr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "join", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["join"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Local", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Local"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isMessage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MessageBus", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["MessageBus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["events"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["getTarget"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./src/observer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Watcher", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["Watcher"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp */ "./src/exp/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["parseOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AST", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["AST"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NullExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["NullExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AstNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["AstNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssignmentExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["AssignmentExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BinaryExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["BinaryExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CallExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["CallExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ConditionalExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ConditionalExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpressionStatementNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpressionStatementNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentifierNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["IdentifierNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LiteralNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["LiteralNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LogicalExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["LogicalExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MemberExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["MemberExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ObjectExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ObjectExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgramNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ProgramNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PropertyNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["PropertyNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnaryExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["UnaryExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayExpressionNode", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ArrayExpressionNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpLexer", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpLexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpParser", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["lexExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["parseExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpBuilder", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Evaluator", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["Evaluator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Analyser", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["Analyser"]; });

/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tpl */ "./src/tpl/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VCmnt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["lexTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["parseTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["TplBuilder"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ "./src/render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Binding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Expression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Render"]; });

/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/view/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["Filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["isService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["injector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delayer", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["Delayer"]; });

/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorator */ "./src/decorator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["service"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* empty/unused harmony star reexport */









/***/ }),

/***/ "./src/observer/index.js":
/*!*******************************!*\
  !*** ./src/observer/index.js ***!
  \*******************************/
/*! exports provided: Watcher, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./watcher */ "./src/observer/watcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Watcher", function() { return _watcher__WEBPACK_IMPORTED_MODULE_0__["Watcher"]; });

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./observer */ "./src/observer/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_1__["Observer"]; });




/***/ }),

/***/ "./src/observer/observer.js":
/*!**********************************!*\
  !*** ./src/observer/observer.js ***!
  \**********************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return Observer; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watcher */ "./src/observer/watcher.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Observer = /*#__PURE__*/function () {
  function Observer() {
    var _this = this;

    _classCallCheck(this, Observer);

    this.onPropChanging = function (args) {
      _this.handlePropChanging(args);
    };

    this.onPropChanged = function (args) {
      _this.handlePropChanged(args);
    };

    this.listeners = [];
    this.validators = [];
    this.init();
  }

  _createClass(Observer, [{
    key: "init",
    value: function init() {
      _core__WEBPACK_IMPORTED_MODULE_0__["events"].propChanging.on(this.onPropChanging);
      _core__WEBPACK_IMPORTED_MODULE_0__["events"].propChanged.on(this.onPropChanged);
    }
  }, {
    key: "handlePropChanging",
    value: function handlePropChanging(args) {
      var watcher = this.getWatcher(this.validators, args.target);

      if (watcher != null) {
        watcher.fireKey(args.key, args);
      }
    }
  }, {
    key: "handlePropChanged",
    value: function handlePropChanged(args) {
      var watcher = this.getWatcher(this.listeners, args.target);

      if (watcher != null) {
        watcher.fireKey(args.key, args);
        watcher.fireKey('*', args);
      }
    }
  }, {
    key: "getWatcher",
    value: function getWatcher(watchers, target) {
      var watcher,
          filters = watchers.filter(function (item) {
        return item.target === target;
      });

      if (filters.length > 0) {
        watcher = filters[0];
      }

      return watcher;
    }
  }, {
    key: "createWatcher",
    value: function createWatcher(watchers, target) {
      var watcher = new _watcher__WEBPACK_IMPORTED_MODULE_2__["Watcher"](target);
      watchers.push(watcher);
      return watcher;
    }
  }, {
    key: "getOrCreateWatcher",
    value: function getOrCreateWatcher(watchers, target) {
      var watcher = this.getWatcher(watchers, target);

      if (watcher == null) {
        watcher = this.createWatcher(watchers, target);
      }

      return watcher;
    }
  }, {
    key: "watch",
    value: function watch(target, key, action) {
      var watcher = this.getOrCreateWatcher(this.listeners, Object(_core__WEBPACK_IMPORTED_MODULE_0__["getTarget"])(target));
      watcher.registerKey(key, action);
      return function () {
        watcher.unregisterKey(key, action);
      };
    }
  }, {
    key: "validate",
    value: function validate(target, key, action) {
      var watcher = this.getOrCreateWatcher(this.validators, Object(_core__WEBPACK_IMPORTED_MODULE_0__["getTarget"])(target));
      watcher.registerKey(key, action);
      return function () {
        watcher.unregisterKey(key, action);
      };
    }
  }, {
    key: "watchExp",
    value: function watchExp(scope, exp, handler, locals) {
      var self = this;
      var analyser = new _exp__WEBPACK_IMPORTED_MODULE_3__["Analyser"](exp, locals);
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_3__["Evaluator"](scope, {}, {
        allowNull: true
      });

      function unwatchAccessors(accessors) {
        _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](accessors, function (item) {
          if (_utils__WEBPACK_IMPORTED_MODULE_1__["isFunction"](item.unwatch)) {
            item.unwatch.call(this);
            item.unwatch = null;
          }

          unwatchAccessors(item.children);
        });
      }

      function watchAccessors(accessors, target) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](target)) {
          return;
        }

        _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](accessors, function (item, key) {
          if (item.exp) {
            key = evaluator.evaluate(key);
          }

          item.unwatch = self.watch(target, key, function (args) {
            unwatchAccessors(item.children);
            watchAccessors(item.children, args.data.newValue);
            handler.call(this, {
              newValue: evaluator.evaluate(exp)
            });
          });
          watchAccessors(item.children, target[key]);
        });
      }

      analyser.analyse();
      watchAccessors(analyser.accessors, scope);
      locals && watchAccessors(analyser.localAccessors, locals);
      return function () {
        unwatchAccessors(analyser.accessors);
        locals && unwatchAccessors(analyser.localAccessors);
      };
    }
  }, {
    key: "watchCollection",
    value: function watchCollection(scope, exp, handler, locals) {
      var _arguments = arguments,
          _this2 = this;

      var self = this,
          evaluator = new _exp__WEBPACK_IMPORTED_MODULE_3__["Evaluator"](scope, {}, {
        allowNull: true
      });
      var unwatchProps = watchProps();
      var unwatchExp = this.watchExp(scope, exp, function () {
        if (unwatchProps != null) {
          unwatchProps.call(_this2);
        }

        unwatchProps = watchProps();
        handler.apply(_this2, _arguments);
      }, locals);

      function watchProps() {
        var collection = evaluator.evaluate(exp);

        if (_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](collection) || _utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](collection)) {
          return self.watch(collection, '*', handler);
        }
      }

      return function () {
        unwatchExp.call(this);
        unwatchProps && unwatchProps.call(this);
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.listeners.length = 0;
      this.validators.length = 0;
      _core__WEBPACK_IMPORTED_MODULE_0__["events"].propChanging.off(this.onPropChanging);
      _core__WEBPACK_IMPORTED_MODULE_0__["events"].propChanged.off(this.onPropChanged);
    }
  }]);

  return Observer;
}();

/***/ }),

/***/ "./src/observer/watcher.js":
/*!*********************************!*\
  !*** ./src/observer/watcher.js ***!
  \*********************************/
/*! exports provided: Watcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Watcher", function() { return Watcher; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Watcher = /*#__PURE__*/function () {
  function Watcher(target) {
    _classCallCheck(this, Watcher);

    this.target = target;
    this.keys = {};
  }

  _createClass(Watcher, [{
    key: "getHandlers",
    value: function getHandlers(key) {
      if (!this.keys[key]) {
        this.keys[key] = [];
      }

      return this.keys[key];
    }
  }, {
    key: "registerKey",
    value: function registerKey(key, handler) {
      var handlers = this.getHandlers(key);
      handlers.push(handler);
    }
  }, {
    key: "unregisterKey",
    value: function unregisterKey(key, handler) {
      var handlers = this.getHandlers(key);

      if (handler == null) {
        handlers.length = 0;
      } else {
        var index = handlers.indexOf(handler);

        if (index !== -1) {
          handlers.splice(index, 1);
        }
      }
    }
  }, {
    key: "fireKey",
    value: function fireKey(key, args, self) {
      var handlers = this.getHandlers(key);
      handlers.forEach(function (handler) {
        handler.call(self, args);
      });
    }
  }]);

  return Watcher;
}();

/***/ }),

/***/ "./src/render/binding.js":
/*!*******************************!*\
  !*** ./src/render/binding.js ***!
  \*******************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./src/render/expression.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Binding = /*#__PURE__*/function () {
  function Binding(scope, text, locals) {
    _classCallCheck(this, Binding);

    this.scope = scope;
    this.text = text;
    this.locals = locals; // identify text is a expression

    this.expressed = false; // identity it is a event binding

    this.messaged = false; // if true, assign value to expression

    this.assigned = false; // handler to update view from model value

    this.automation = null;
    this.value = null;
    this.changed = false;
    this.segments = [];
    this.expressions = [];
  }

  _createClass(Binding, [{
    key: "createExpression",
    value: function createExpression(text) {
      var exp = new _expression__WEBPACK_IMPORTED_MODULE_1__["Expression"](text);
      this.expressions.push(exp);
      return exp;
    }
  }, {
    key: "compile",
    value: function compile() {
      if (this.messaged || this.assigned) {
        this.expressed = true;
      }

      if (this.expressed) {
        this.createExpression(this.text);
      } else {
        var pattern = /{{([^}]*)}}/g;
        var lastIndex = pattern.lastIndex;
        var segment,
            match = pattern.exec(this.text);

        while (match != null) {
          if (match.index > lastIndex) {
            segment = this.text.substring(lastIndex, match.index);
            this.segments.push(segment);
          }

          this.segments.push(this.createExpression(match[1]));
          lastIndex = pattern.lastIndex;
          match = pattern.exec(this.text);
        }

        if (this.text.length > lastIndex) {
          segment = this.text.substring(lastIndex);
          this.segments.push(segment);
        }
      }
    }
  }, {
    key: "link",
    value: function link() {
      var _this = this;

      if (this.assigned || this.messaged) {
        return;
      }

      this.detect();
      this.expressions.forEach(function (exp) {
        exp.watch(_this.scope, function () {
          _this.detect();

          _this.scope.$patch();
        }, _this.locals);
      });
    }
  }, {
    key: "detect",
    value: function detect() {
      var newValue = this.compute();

      if (this.value != newValue) {
        this.changed = true;
        this.value = newValue;
      }
    } // get value

  }, {
    key: "compute",
    value: function compute(locals) {
      var _this2 = this;

      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);

      if (this.expressed) {
        return this.expressions[0].compute(this.scope, locals);
      }

      return this.segments.reduce(function (prev, cur) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](cur)) {
          return prev + cur;
        } // it is a expression


        return prev + cur.compute(_this2.scope, locals);
      }, '');
    } // set value

  }, {
    key: "assign",
    value: function assign(value, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);

      if (this.expressed) {
        this.expressions[0].assign(this.scope, value, locals);
      } else {
        throw new Error(this.text + ' is not valid expression');
      }
    }
  }, {
    key: "registerAutomation",
    value: function registerAutomation(automation) {
      this.automation = automation;
    }
  }, {
    key: "unregisterAutomation",
    value: function unregisterAutomation(automation) {
      if (this.automation === automation) {
        this.automation = null;
      }
    } // modify view according to model

  }, {
    key: "patch",
    value: function patch() {
      if (this.changed && this.automation != null) {
        this.changed = false;
        this.automation.call(this, this.value);
      }
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Binding;
}();

/***/ }),

/***/ "./src/render/expression.js":
/*!**********************************!*\
  !*** ./src/render/expression.js ***!
  \**********************************/
/*! exports provided: Expression */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return Expression; });
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Expression = /*#__PURE__*/function () {
  function Expression(text) {
    _classCallCheck(this, Expression);

    this.text = text;
  } // get value


  _createClass(Expression, [{
    key: "compute",
    value: function compute(scope, locals) {
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_0__["Evaluator"](scope, locals);
      return evaluator.evaluate(this.text);
    } // set value

  }, {
    key: "assign",
    value: function assign(scope, value, locals) {
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_0__["Evaluator"](scope, locals, {
        assignInterceptor: function assignInterceptor(target, key) {
          target.toProxy()[key] = value;
        }
      });
      evaluator.assign(this.text, value);
    }
  }, {
    key: "watch",
    value: function watch(scope, handler, locals) {
      return scope.$watch(this.text, handler, locals);
    }
  }, {
    key: "destroy",
    value: function destroy() {}
  }]);

  return Expression;
}();

/***/ }),

/***/ "./src/render/index.js":
/*!*****************************!*\
  !*** ./src/render/index.js ***!
  \*****************************/
/*! exports provided: Binding, Expression, Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding */ "./src/render/binding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _binding__WEBPACK_IMPORTED_MODULE_0__["Binding"]; });

/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./src/render/expression.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _expression__WEBPACK_IMPORTED_MODULE_1__["Expression"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./render */ "./src/render/render.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return _render__WEBPACK_IMPORTED_MODULE_2__["Render"]; });





/***/ }),

/***/ "./src/render/render.js":
/*!******************************!*\
  !*** ./src/render/render.js ***!
  \******************************/
/*! exports provided: Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Render", function() { return Render; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helper */ "./src/helper.js");
/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl */ "./src/tpl/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding */ "./src/render/binding.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // Window Events
// case 'on-load':
// case 'on-unload':
// Form Element Events
// case 'on-change':
// case 'on-submit':
// case 'on-reset':
// case 'on-select':
// case 'on-blur':
// case 'on-focus':
// Image Events
// case 'on-abort':
// Keyboard Events
// case 'on-keydown':
// case 'on-keypress':
// case 'on-keyup':
// Mouse Events
// case 'on-click':
// case 'on-dblclick':
// case 'on-mousedown':
// case 'on-mousemove':
// case 'on-mouseout':
// case 'on-mouseover':
// case 'on-mouseup':

var eventText = 'load unload change submit reset select blur focus abort keydown keypress keyup click dblclick mousedown mousemove mouseout mouseover mouseup';
var domEvents = eventText.split(' ');
var Render = /*#__PURE__*/function () {
  function Render(scope, locals) {
    _classCallCheck(this, Render);

    this.scope = scope;
    this.locals = locals;
    this.vnodes = [];
    this.directives = [];
  }

  _createClass(Render, [{
    key: "createBinding",
    value: function createBinding(text) {
      var binding = new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, this.locals);
      this.scope.$$bindings.push(binding);
      return binding;
    }
  }, {
    key: "render",
    value: function render(tpl) {
      var fragment = document.createDocumentFragment();
      this.vnodes = Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["parseTpl"])(tpl);
      this.compileNodes(this.vnodes); // this.directives.forEach(directive => {
      //     directive.$prelink();
      // });

      this.linkNodes(this.vnodes).forEach(function (elm) {
        fragment.appendChild(elm);
      });
      this.directives.forEach(function (directive) {
        directive.$postlink();
      });
      return fragment;
    }
  }, {
    key: "isText",
    value: function isText(vnode) {
      return vnode.nodeName === '#text';
    }
  }, {
    key: "isComment",
    value: function isComment(vnode) {
      return vnode.nodeName === '#comment';
    }
  }, {
    key: "compileNodes",
    value: function compileNodes(vnodes) {
      var _this = this;

      vnodes.forEach(function (vnode) {
        _this.compileNode(vnode);
      });
    }
  }, {
    key: "compileNode",
    value: function compileNode(vnode) {
      if (this.isText(vnode)) {
        this.compileText(vnode);
      } else if (this.isComment(vnode)) {
        this.compileComment(vnode);
      } else {
        this.compileElm(vnode);
      }
    }
  }, {
    key: "linkNodes",
    value: function linkNodes(vnodes) {
      var _this2 = this;

      return vnodes.map(function (vnode) {
        return _this2.linkNode(vnode);
      });
    }
  }, {
    key: "linkNode",
    value: function linkNode(vnode) {
      if (this.isText(vnode)) {
        return this.linkText(vnode);
      }

      if (this.isComment(vnode)) {
        return this.linkComment(vnode);
      }

      return this.linkElm(vnode);
    }
  }, {
    key: "compileElm",
    value: function compileElm(velm) {
      var _this3 = this;

      var directives = [];
      var customLinker = velm.vattrs.some(function (vattr) {
        _this3.compileAttr(vattr);

        if (vattr.data.directive != null) {
          directives.push(vattr.data.directive);
          velm.data.linker = vattr.data.linker;
          return velm.data.linker != null;
        }

        return false;
      }); // sort directive according to its priority

      _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"](directives, function (directive) {
        return directive.$priority;
      }).forEach(function (directive) {
        _this3.directives.push(directive);
      }); // directive defines custom linker for this virtual node, render engine will not render it according to default behavior

      if (customLinker) {
        return;
      }

      velm.data.isComponent = this.scope.$hasComponent(velm.nodeName);

      if (!velm.data.isComponent) {
        this.compileNodes(velm.childNodes);
      }
    }
  }, {
    key: "compileAttr",
    value: function compileAttr(vattr) {
      vattr.data.binding = this.createBinding(vattr.nodeValue);

      if (vattr.nodeName.startsWith('@')) {
        vattr.data.messaged = true;
        vattr.data.binding.messaged = true;
        vattr.data.key = vattr.nodeName.substr(1);
        vattr.data.domMessaged = _utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, vattr.data.key);
      } else if (vattr.nodeName.startsWith(':')) {
        vattr.data.binding.expressed = true;
        vattr.data.key = vattr.nodeName.substr(1);
      } else if (vattr.nodeName.startsWith('*')) {
        vattr.data.isDirective = true;
        vattr.data.binding.expressed = true;
        vattr.data.key = vattr.nodeName.substr(1);
      } else {
        vattr.data.key = vattr.nodeName;
      }

      if (vattr.data.isDirective) {
        if (this.scope.$hasDirective(vattr.data.key)) {
          vattr.data.directive = this.scope.$newDirective(vattr.data.key);
          vattr.data.directive.$$vattr = vattr;
          vattr.data.binding.assigned = vattr.data.directive.$assigned;

          if (vattr.data.directive.$compile()) {
            vattr.data.linker = vattr.data.directive;
            return;
          }
        } else {
          throw new Error('directive ' + vattr.data.key + ' is not defined');
        }
      }

      if (vattr.data.isDirective) {
        vattr.data.binding.registerAutomation(function (value) {
          vattr.data.directive.$change(value);
        });
      } else if (!vattr.data.messaged) {
        var setHtmlAttr = function setHtmlAttr(value) {
          var elm = vattr.velm.elm;

          if (vattr.data.key.startsWith('style')) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](elm, vattr.data.key, value);
          } else {
            elm.setAttribute(vattr.data.key, value);
          }
        };

        if (vattr.velm.isComponent) {
          vattr.data.binding.registerAutomation(function (value) {
            if (vattr.velm.component.$hasAttribute(vattr.data.key)) {
              vattr.velm.component.$setAttribute(vattr.data.key, value);
            } else {
              setHtmlAttr(value);
            }
          });
        } else {
          vattr.data.binding.registerAutomation(setHtmlAttr);
        }
      }

      vattr.data.binding.compile();
    }
  }, {
    key: "compileText",
    value: function compileText(vtext) {
      vtext.data.binding = this.createBinding(vtext.nodeValue);
      vtext.data.binding.registerAutomation(function (value) {
        var elm,
            newTextNode = document.createTextNode(value);

        if (vtext.parentNode == null) {
          if (vtext.elm != null) {
            elm = vtext.elm.parentNode;
          }
        } else {
          elm = vtext.parentNode.elm;
        }

        if (elm != null) {
          if (vtext.elm == null) {
            elm.appendChild(newTextNode);
          } else {
            _helper__WEBPACK_IMPORTED_MODULE_1__["replaceNode"](vtext.elm, newTextNode);
          }
        }

        vtext.elm = newTextNode;
      });
      vtext.data.binding.compile();
    }
  }, {
    key: "compileComment",
    value: function compileComment(vcmnt) {}
  }, {
    key: "linkElm",
    value: function linkElm(velm) {
      var _this4 = this;

      if (velm.data.linker != null) {
        return velm.data.linker.$link();
      }

      velm.elm = document.createElement(velm.nodeName);

      if (velm.data.isComponent) {
        var instance = this.scope.$newComponent(velm.nodeName);
        velm.data.component = instance;
        velm.elm.style.display = instance.$display;
        velm.vattrs.forEach(function (vattr) {
          _this4.linkAttr(vattr);
        });
        instance.$$velm = velm;
        instance.$render();
        instance.$mount(velm.elm);
      } else {
        velm.vattrs.forEach(function (vattr) {
          _this4.linkAttr(vattr);
        });
        velm.childNodes.forEach(function (child) {
          velm.elm.appendChild(_this4.linkNode(child));
        });
      }

      return velm.elm;
    }
  }, {
    key: "linkAttr",
    value: function linkAttr(vattr) {
      var elm = vattr.velm.elm;

      if (vattr.data.messaged) {
        if (vattr.data.domMessaged) {
          elm.addEventListener(vattr.data.key, function (e) {
            vattr.data.binding.compute({
              locals: new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm)
            });
          });
        } else if (vattr.velm.isComponent) {
          vattr.velm.component.$bind(vattr.data.key, function (e, arg) {
            vattr.data.binding.compute({
              locals: new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm, arg)
            });
          });
        }
      } else {
        vattr.data.binding.link();
        vattr.data.binding.patch();
      }
    }
  }, {
    key: "linkText",
    value: function linkText(vtext) {
      vtext.data.binding.link();
      vtext.elm = document.createTextNode(vtext.data.binding.value);
      return vtext.elm;
    }
  }, {
    key: "linkComment",
    value: function linkComment(vcmnt) {
      return document.createComment(vcmnt.nodeValue);
    }
  }]);

  return Render;
}();

/***/ }),

/***/ "./src/tpl/index.js":
/*!**************************!*\
  !*** ./src/tpl/index.js ***!
  \**************************/
/*! exports provided: VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, TplBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/tpl/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VCmnt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VType"]; });

/* harmony import */ var _tpl_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl-api */ "./src/tpl/tpl-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["lexTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["parseTpl"]; });

/* harmony import */ var _tpl_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tpl-builder */ "./src/tpl/tpl-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return _tpl_builder__WEBPACK_IMPORTED_MODULE_2__["TplBuilder"]; });





/***/ }),

/***/ "./src/tpl/model/index.js":
/*!********************************!*\
  !*** ./src/tpl/model/index.js ***!
  \********************************/
/*! exports provided: VNode, VAttr, VCmnt, VElm, VText, VType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]; });

/* harmony import */ var _vattr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vattr */ "./src/tpl/model/vattr.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _vattr__WEBPACK_IMPORTED_MODULE_1__["VAttr"]; });

/* harmony import */ var _vcmnt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vcmnt */ "./src/tpl/model/vcmnt.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _vcmnt__WEBPACK_IMPORTED_MODULE_2__["VCmnt"]; });

/* harmony import */ var _velm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./velm */ "./src/tpl/model/velm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _velm__WEBPACK_IMPORTED_MODULE_3__["VElm"]; });

/* harmony import */ var _vtext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vtext */ "./src/tpl/model/vtext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _vtext__WEBPACK_IMPORTED_MODULE_4__["VText"]; });

/* harmony import */ var _vtype__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vtype */ "./src/tpl/model/vtype.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _vtype__WEBPACK_IMPORTED_MODULE_5__["VType"]; });








/***/ }),

/***/ "./src/tpl/model/vattr.js":
/*!********************************!*\
  !*** ./src/tpl/model/vattr.js ***!
  \********************************/
/*! exports provided: VAttr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return VAttr; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VAttr = /*#__PURE__*/function (_VNode) {
  _inherits(VAttr, _VNode);

  function VAttr(name, value) {
    var _this;

    _classCallCheck(this, VAttr);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VAttr).call(this, name, value));
    _this.velm = null;
    _this.quote = '"';
    return _this;
  }

  _createClass(VAttr, [{
    key: "setValue",
    value: function setValue(value) {
      this.nodeValue = value;
    }
  }, {
    key: "onDdestroy",
    value: function onDdestroy() {}
  }]);

  return VAttr;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/model/vcmnt.js":
/*!********************************!*\
  !*** ./src/tpl/model/vcmnt.js ***!
  \********************************/
/*! exports provided: VCmnt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return VCmnt; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VCmnt = /*#__PURE__*/function (_VNode) {
  _inherits(VCmnt, _VNode);

  function VCmnt(value) {
    _classCallCheck(this, VCmnt);

    return _possibleConstructorReturn(this, _getPrototypeOf(VCmnt).call(this, '#comment', value));
  }

  return VCmnt;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/model/velm.js":
/*!*******************************!*\
  !*** ./src/tpl/model/velm.js ***!
  \*******************************/
/*! exports provided: VElm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return VElm; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
/* harmony import */ var _vattr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vattr */ "./src/tpl/model/vattr.js");
/* harmony import */ var _tpl_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl-api */ "./src/tpl/tpl-api.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var VElm = /*#__PURE__*/function (_VNode) {
  _inherits(VElm, _VNode);

  function VElm(name) {
    var _this;

    _classCallCheck(this, VElm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VElm).call(this, name));
    _this.vattrs = [];
    _this.selfClosed = false;
    _this.elm = null;
    return _this;
  }

  _createClass(VElm, [{
    key: "pushAttr",
    value: function pushAttr(attr) {
      attr.velm = this;
      this.vattrs.push(attr);
    }
  }, {
    key: "hasAttr",
    value: function hasAttr() {
      return this.vattrs.length !== 0;
    }
  }, {
    key: "getAttr",
    value: function getAttr(key) {
      var matches = this.vattrs.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (!matches.length) {
        return null;
      }

      return matches[0];
    }
  }, {
    key: "setAttr",
    value: function setAttr(key, value) {
      var target,
          matches = this.vattrs.filter(function (attr) {
        return attr.belongTo(key);
      });

      if (matches.length > 0) {
        target = matches[0];
        target.setValue(value);
      } else {
        target = new _vattr__WEBPACK_IMPORTED_MODULE_1__["VAttr"](key, value);
        target.velm = this;
        target.compile(this.compileOptions);
      }

      this.vattrs.push(target);
      return target;
    }
  }, {
    key: "removeAttr",
    value: function removeAttr(key) {
      var target = [],
          self = this;

      if (key instanceof _vattr__WEBPACK_IMPORTED_MODULE_1__["VAttr"]) {
        var index = this.vattrs.indexOf(key);

        if (index !== -1) {
          target = self.vattrs.splice(index, 1);
        }
      } else {
        this.vattrs.filter(function (attr) {
          return attr.belongTo(key);
        }).forEach(function (match) {
          var index = self.vattrs.indexOf(match);
          match.destroy();
          target = self.vattrs.splice(index, 1);
        });
      }

      return target.length > 0 ? target[0] : null;
    }
  }, {
    key: "appendAttr",
    value: function appendAttr(attr) {
      if (attr.velm != null) {
        throw new Error("Current attribute is not new!");
      }

      attr.velm = this;
      attr.compile(this.compileOptions);
      this.vattrs.push(attr);
      return attr;
    }
  }, {
    key: "setOuterTpl",
    value: function setOuterTpl(tpl) {
      var self = this;
      Object(_tpl_api__WEBPACK_IMPORTED_MODULE_2__["parseTpl"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.parentNode.insertBefore(self, vnode);
      });
      self.parentNode.removeChild(self);
    }
  }, {
    key: "setInnerTpl",
    value: function setInnerTpl(tpl) {
      var self = this;
      this.clearChildNodes();
      Object(_tpl_api__WEBPACK_IMPORTED_MODULE_2__["parseTpl"])(tpl).forEach(function (vnode) {
        vnode.parentNode = null;
        self.appendChild(vnode);
      });
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.vattrs.forEach(function (attr) {
        attr.destroy();
      });
      this.vattrs.length = 0;
    }
  }]);

  return VElm;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/model/vnode.js":
/*!********************************!*\
  !*** ./src/tpl/model/vnode.js ***!
  \********************************/
/*! exports provided: VNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return VNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// virtual node
var VNode = /*#__PURE__*/function () {
  function VNode(name, value) {
    _classCallCheck(this, VNode);

    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.firstChild = null;
    this.lastChild = null;
    this.data = {};
  }

  _createClass(VNode, [{
    key: "pushChild",
    value: function pushChild(child) {
      child.parentNode = this;
      this.childNodes.push(child);
    }
  }, {
    key: "buildSibling",
    value: function buildSibling() {
      if (this.childNodes.length === 0) {
        return;
      }

      var self = this;

      if (this.childNodes.length === 1) {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[0];
      } else {
        this.firstChild = this.childNodes[0];
        this.lastChild = this.childNodes[this.childNodes.length - 1];
        this.childNodes.forEach(function (child, index) {
          if (index === 0) {
            child.nextSibling = self.childNodes[index + 1];
            return;
          }

          if (index === self.childNodes.length - 1) {
            child.previousSibling = self.childNodes[index - 1];
            return;
          }

          child.previousSibling = self.childNodes[index - 1];
          child.nextSibling = self.childNodes[index + 1];
        });
      }

      this.childNodes.forEach(function (child) {
        child.buildSibling();
      });
    }
  }, {
    key: "clearParentAndSibling",
    value: function clearParentAndSibling() {
      this.parentNode = null;
      this.previousSibling = null;
      this.nextSibling = null;
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.parentNode != null) {
        this.parentNode.removeChild(this);
      }
    }
  }, {
    key: "hasChildNodes",
    value: function hasChildNodes() {
      return this.childNodes.length !== 0;
    }
  }, {
    key: "clearChildNodes",
    value: function clearChildNodes() {
      this.childNodes.forEach(function (child) {
        child.destroy();
      });
      this.childNodes.length = 0;
    }
  }, {
    key: "appendChild",
    value: function appendChild(child) {
      if (child.parentNode != null) {
        child.parentNode.removeChild(child);
      }

      child.parentNode = this;

      if (this.childNodes.length === 0) {
        this.firstChild = child;
      } else {
        this.lastChild.nextSibling = child;
        child.previousSibling = this.lastChild;
      }

      child.compile(this.compileOptions);
      this.lastChild = child;
      this.childNodes.push(child);
      return child;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(refChild, newChild) {
      if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
      }

      var index = this.childNodes.indexOf(refChild);

      if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
      }

      newChild.parentNode = this;

      if (refChild.previousSibling != null) {
        newChild.previousSibling = refChild.previousSibling;
        refChild.previousSibling.nextSibling = newChild;
      }

      newChild.nextSibling = refChild;
      refChild.previousSibling = newChild;

      if (index === 0) {
        this.firstChild = newChild;
      }

      newChild.compile(this.compileOptions);
      this.childNodes.splice(index, 0, newChild);
      return newChild;
    }
  }, {
    key: "insertAfter",
    value: function insertAfter(refChild, newChild) {
      if (refChild.nextSibling == null) {
        return this.appendChild(newChild);
      }

      return this.insertBefore(refChild.nextSibling, newChild);
    }
  }, {
    key: "removeChild",
    value: function removeChild(child) {
      var index = this.childNodes.indexOf(child);

      if (index === -1) {
        throw new Error('Remove node is not a child of specified node');
      }

      if (child.previousSibling != null) {
        child.previousSibling.nextSibling = child.nextSibling;
      }

      if (child.nextSibling != null) {
        child.nextSibling.previousSibling = child.previousSibling;
      }

      if (index === 0) {
        this.firstChild = child.nextSibling;
      }

      if (index === this.childNodes.length - 1) {
        this.lastChild = child.previousSibling;
      }

      child.clearParentAndSibling();
      this.childNodes.splice(index, 1);
      return child;
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(refChild, newChild) {
      if (newChild.parentNode != null) {
        newChild.parentNode.removeChild(newChild);
      }

      var index = this.childNodes.indexOf(refChild);

      if (index === -1) {
        throw new Error('Ref node is not a child of specified node');
      }

      newChild.parentNode = this;
      newChild.previousSibling = refChild.previousSibling;
      newChild.nextSibling = refChild.nextSibling;

      if (this.firstChild === refChild) {
        this.firstChild = newChild;
      }

      if (this.lastChild === refChild) {
        this.lastChild = newChild;
      }

      refChild.clearParentAndSibling();
      newChild.compile(this.compileOptions);
      this.childNodes.splice(index, 1, newChild);
      return newChild;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      throw new Error('not implemented');
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.onDestroy && this.onDestroy();
      this.childNodes.map(function (child) {
        child.destroy();
      });
      this.remove();
      this.clearParentAndSibling();
      this.childNodes.length = 0;
      this.firstChild = null;
      this.lastChild = null;
      this.ownerDocument = null;
    } // hoops
    // end of hoops

  }]);

  return VNode;
}();

/***/ }),

/***/ "./src/tpl/model/vtext.js":
/*!********************************!*\
  !*** ./src/tpl/model/vtext.js ***!
  \********************************/
/*! exports provided: VText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return VText; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VText = /*#__PURE__*/function (_VNode) {
  _inherits(VText, _VNode);

  function VText(value) {
    var _this;

    _classCallCheck(this, VText);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VText).call(this, '#text', value));
    _this.elm = null;
    return _this;
  }

  return VText;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/model/vtype.js":
/*!********************************!*\
  !*** ./src/tpl/model/vtype.js ***!
  \********************************/
/*! exports provided: VType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return VType; });
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VType = /*#__PURE__*/function (_VNode) {
  _inherits(VType, _VNode);

  function VType() {
    _classCallCheck(this, VType);

    return _possibleConstructorReturn(this, _getPrototypeOf(VType).call(this));
  }

  return VType;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/tpl-api.js":
/*!****************************!*\
  !*** ./src/tpl/tpl-api.js ***!
  \****************************/
/*! exports provided: lexTpl, parseTpl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return lexTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return parseTpl; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl-lexer */ "./src/tpl/tpl-lexer.js");
/* harmony import */ var _tpl_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tpl-parser */ "./src/tpl/tpl-parser.js");




function lexTpl(tpl) {
  tpl = _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](tpl);
  return new _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__["TplLexer"]().lex(tpl);
}

function parseTpl(tpl) {
  tpl = _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](tpl);
  return new _tpl_parser__WEBPACK_IMPORTED_MODULE_2__["TplParser"](new _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__["TplLexer"]()).parse(tpl);
}



/***/ }),

/***/ "./src/tpl/tpl-builder.js":
/*!********************************!*\
  !*** ./src/tpl/tpl-builder.js ***!
  \********************************/
/*! exports provided: TplBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return TplBuilder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TplBuilder = /*#__PURE__*/function () {
  function TplBuilder() {
    _classCallCheck(this, TplBuilder);
  }

  _createClass(TplBuilder, [{
    key: "build",
    value: function build(vnode) {
      if (this.isText(vnode)) {
        return this.buildText(vnode);
      }

      if (this.isComment(vnode)) {
        return this.buildComment(vnode);
      }

      return this.buildElement(vnode);
    }
  }, {
    key: "isText",
    value: function isText(vnode) {
      return vnode.nodeName === '#text';
    }
  }, {
    key: "isComment",
    value: function isComment(vnode) {
      return vnode.nodeName === '#comment';
    }
  }, {
    key: "buildElement",
    value: function buildElement(velm) {
      var _this = this;

      var attrTpl = velm.vattrs.map(function (vattr) {
        return _this.buildAttribute(vattr);
      }).join(' '),
          childTpl = velm.childNodes.map(function (child) {
        return _this.build(child);
      }).join('');

      if (attrTpl) {
        attrTpl = ' ' + attrTpl;
      }

      var tpl = '<' + velm.nodeName + attrTpl + '>' + childTpl;

      if (!velm.selfClosed) {
        tpl += '</' + velm.nodeName + '>';
      }

      return tpl;
    }
  }, {
    key: "buildAttribute",
    value: function buildAttribute(vattr) {
      return vattr.nodeName + (vattr.nodeValue == null ? '' : '=' + vattr.quote + vattr.nodeValue + vattr.quote);
    }
  }, {
    key: "buildText",
    value: function buildText(vtext) {
      return vtext.nodeValue;
    }
  }, {
    key: "buildComment",
    value: function buildComment(vcmnt) {
      return this.nodeValue;
    }
  }]);

  return TplBuilder;
}();

/***/ }),

/***/ "./src/tpl/tpl-lexer.js":
/*!******************************!*\
  !*** ./src/tpl/tpl-lexer.js ***!
  \******************************/
/*! exports provided: TplLexer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplLexer", function() { return TplLexer; });
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TplLexer = /*#__PURE__*/function (_ExpLexer) {
  _inherits(TplLexer, _ExpLexer);

  function TplLexer(options) {
    _classCallCheck(this, TplLexer);

    return _possibleConstructorReturn(this, _getPrototypeOf(TplLexer).call(this, options));
  }

  _createClass(TplLexer, [{
    key: "isValidIdentifierStart",
    value: function isValidIdentifierStart(ch) {
      return 'a' <= ch && ch <= 'z' || 'A' <= ch && ch <= 'Z' || '_' === ch || ch === '$' || ch === '@' || ch === ':' || ch === '*';
    }
  }, {
    key: "isValidIdentifierContinue",
    value: function isValidIdentifierContinue(ch, cp) {
      return this.isValidIdentifierStart(ch, cp) || this.isNumber(ch) || ch === '-' || ch === '.';
    }
  }, {
    key: "expectString",
    value: function expectString(str) {
      var num = str.length;
      return this.index + num <= this.text.length ? str === this.text.substr(this.index, num) : false;
    } // html comment "<!--comment-->"

  }, {
    key: "readComment",
    value: function readComment(begin, end) {
      var start = this.index;
      this.index += begin.length;
      var string = '';
      var rawString = begin;

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        rawString += ch;

        if (this.expectString(end)) {
          rawString += end;
          this.index += end.length;
          this.tokens.push({
            index: start,
            text: rawString,
            comment: true,
            value: string
          });
          return;
        } else {
          string += ch;
        }

        this.index++;
      }

      this.throwError('Unterminated comment', start);
    } // html text

  }, {
    key: "readText",
    value: function readText() {
      var start = this.index;
      var string = '';

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();

        if (ch === '<' && (this.isIdentifierStart(ch2) || ch2 === '/') || this.expectString('<!--')) {
          break;
        }

        string += ch;
        this.index++;
      }

      this.tokens.push({
        index: start,
        text: string,
        textTag: true
      });
    } // html tag

  }, {
    key: "readTag",
    value: function readTag(begin, end, closing, doctype) {
      this.tokens.push({
        index: this.index,
        text: begin,
        tag: true,
        closing: closing,
        begin: true,
        doctype: doctype
      });
      this.index += begin.length;
      this.readIdent();

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);

        if (!closing) {
          var ch2 = this.peek();
          var str = ch + ch2;

          if (str === '/' + end) {
            this.tokens.push({
              index: this.index,
              text: str,
              tag: true,
              closing: true,
              end: true
            });
            this.index += str.length;
            break;
          }
        }

        if (ch === end) {
          this.tokens.push({
            index: this.index,
            text: end,
            tag: true,
            closing: !!doctype ? true : closing,
            end: true
          });
          this.index += end.length;
          break;
        }

        if (this.isIdentifierStart(this.peekMultichar())) {
          this.readIdent();
        } else if (ch === '"' || ch === '\'') {
          this.readString(ch);
        } else if (this.isWhitespace(ch)) {
          this.index++;
        } else if (ch === '=') {
          this.tokens.push({
            index: this.index,
            text: '=',
            equal: true
          });
          this.index++;
        } else {
          this.throwError('Unexpected next character ', this.index, this.index + 1);
        }
      }
    }
  }, {
    key: "lex",
    value: function lex(text) {
      this.text = text;
      this.index = 0;
      this.tokens = [];
      var allowDocType = !!this.options.allowDocType;

      while (this.index < this.text.length) {
        var ch = this.text.charAt(this.index);
        var ch2 = this.peek();
        var ch3 = this.peek(2);

        if (this.expectString('<!--')) {
          this.readComment('<!--', '-->');
        } else if (ch === '<' && this.isIdentifierStart(ch2)) {
          this.readTag('<', '>', false);
        } else if (this.expectString('</') && this.isIdentifierStart(ch3)) {
          this.readTag('</', '>', true);
        } else if (this.expectString('<!DOCTYPE')) {
          if (allowDocType) {
            this.readTag('<!', '>', true, true);
          } else {
            this.throwError('DOCTYPE is not allowed', this.index, this.index + 1);
          }
        } else {
          this.readText();
        }
      }

      return this.tokens;
    }
  }]);

  return TplLexer;
}(_exp__WEBPACK_IMPORTED_MODULE_0__["ExpLexer"]);

/***/ }),

/***/ "./src/tpl/tpl-parser.js":
/*!*******************************!*\
  !*** ./src/tpl/tpl-parser.js ***!
  \*******************************/
/*! exports provided: TplParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TplParser", function() { return TplParser; });
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model */ "./src/tpl/model/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TplParser = /*#__PURE__*/function (_ExpParser) {
  _inherits(TplParser, _ExpParser);

  function TplParser(lexer, options) {
    _classCallCheck(this, TplParser);

    return _possibleConstructorReturn(this, _getPrototypeOf(TplParser).call(this, lexer, options));
  }

  _createClass(TplParser, [{
    key: "parse",
    value: function parse(text) {
      this.index = 0;
      this.text = text;
      this.tokens = this.lexer.lex(text);
      var root = new _model__WEBPACK_IMPORTED_MODULE_1__["VElm"]();
      var doctype,
          allowDocType = !!this.options.allowDocType;

      while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.doctype) {
          if (allowDocType) {
            if (!doctype) {
              doctype = this.doctype();
              root.childNodes.push(doctype);
            } else {
              this.throwError("DOCTYPE only allow one", token);
            }
          } else {
            this.throwError("DOCTYPE is not allowed", token);
          }
        } else if (token.comment) {
          var comment = new _model__WEBPACK_IMPORTED_MODULE_1__["VCmnt"](token.text);
          root.childNodes.push(comment);
          this.next();
        } else if (token.textTag) {
          var text = new _model__WEBPACK_IMPORTED_MODULE_1__["VText"](token.text);
          root.childNodes.push(text);
          this.next();
        } else if (token.tag && token.begin) {
          root.childNodes.push(this.element());
        } else {
          this.throwError("impossible", token);
        }
      }

      root.buildSibling();
      return root.childNodes;
    }
  }, {
    key: "doctype",
    value: function doctype() {
      this.next();
      var docType = new _model__WEBPACK_IMPORTED_MODULE_1__["VType"]();
      var token = this.current();

      if (token.identifier) {
        docType.nodeValue = token.text;
      } else {
        this.throwError(" Unexpected ", token);
      }

      this.attrs(docType).forEach(function (attr) {
        docType.childNodes.push(attr);
      });
      token = this.current();

      if (token.tag && token.end && token.closing) {
        this.next();
      } else {
        this.throwError(" Unexpected ", token);
      }

      return docType;
    }
  }, {
    key: "element",
    value: function element(p) {
      this.next();
      var ele = new _model__WEBPACK_IMPORTED_MODULE_1__["VElm"]();
      var token = this.current();

      if (token.identifier) {
        ele.nodeName = token.text;
        this.next();
      } else {
        this.throwError(" Unexpected ", token);
      }

      this.attrs(ele).forEach(function (attr) {
        ele.pushAttr(attr);
      });
      token = this.current();

      if (token.tag && token.end) {
        this.next();

        if (ele.nodeName === 'input') {
          ele.selfClosed = true;
          return ele;
        }

        if (!token.closing) {
          this.childElements(ele).forEach(function (child) {
            ele.pushChild(child);
          });
        }
      } else {
        this.throwError(" Unexpected ", token);
      }

      token = this.current();

      if (token.tag && token.begin && token.closing) {
        this.next();
        token = this.current();

        if (token.identifier) {
          if (ele.nodeName === token.text) {
            this.next();
            token = this.current();

            if (token.tag && token.end && token.closing) {
              this.next();
            } else {
              this.throwError(" Unexpected ", token);
            }
          } else {
            this.throwError(" Unexpected ", token);
          }
        } else {
          this.throwError(" Unexpected ", token);
        }
      } else {
        this.throwError(" Unexpected ", token);
      }

      return ele;
    }
  }, {
    key: "childElements",
    value: function childElements(p) {
      var eles = [];

      while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.closing) {
          break;
        } else if (token.comment) {
          var comment = new _model__WEBPACK_IMPORTED_MODULE_1__["VCmnt"](token.text);
          eles.push(comment);
          this.next();
        } else if (token.textTag) {
          var text = new _model__WEBPACK_IMPORTED_MODULE_1__["VText"](token.text);
          eles.push(text);
          this.next();
        } else if (token.tag && token.begin) {
          eles.push(this.element(p));
        } else {
          this.throwError(" Unexpected ", token);
        }
      }

      return eles;
    }
  }, {
    key: "attrs",
    value: function attrs(p) {
      var attrs = [];

      while (this.index < this.tokens.length) {
        var token = this.current();

        if (token.tag && token.end) {
          break;
        }

        var attr = new _model__WEBPACK_IMPORTED_MODULE_1__["VAttr"]();

        if (token.identifier) {
          attr.nodeName = token.text;
          attr.origin = token.text;
          this.next();
          token = this.current();

          if (token.equal) {
            this.next();
            token = this.current();

            if (token.constant) {
              attr.nodeValue = token.value;
              this.next();
            } else {
              this.throwError(" Unexpected ", token);
            }
          }
        }

        attrs.push(attr);
      }

      return attrs;
    }
  }, {
    key: "current",
    value: function current() {
      if (this.index < this.tokens.length) {
        return this.tokens[this.index];
      }

      return {};
    }
  }, {
    key: "next",
    value: function next() {
      this.index++;
    }
  }]);

  return TplParser;
}(_exp__WEBPACK_IMPORTED_MODULE_0__["ExpParser"]);

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDefined", function() { return isDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBlankObject", function() { return isBlankObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDate", function() { return isDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRegExp", function() { return isRegExp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isArray", function() { return isArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isString", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isSame", function() { return isSame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmpty", function() { return isEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return isFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debug", function() { return debug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contains", function() { return contains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containsStr", function() { return containsStr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return orderByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "join", function() { return join; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var debugMode = true,
    toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf;

function forEach(obj, action, ignoreOwn) {
  if (isArray(obj)) {
    for (var index = 0; index < obj.length; index++) {
      if (action(obj[index], index)) {
        return;
      }
    }
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (ignoreOwn || obj.hasOwnProperty(p)) {
        if (action(obj[p], p)) {
          return;
        }
      }
    }
  }
}

function some(obj, action) {
  if (isArray(obj)) {
    for (var index = 0; index < obj.length; index++) {
      if (action(index, obj[index])) {
        return true;
      }
    }
  } else if (isObject(obj)) {
    for (var p in obj) {
      if (obj.hasOwnProperty(p)) {
        if (action(p, obj[p])) {
          return true;
        }
      }
    }
  } else {
    return false;
  }
}

function copy() {
  var deep = false,
      objIndex = 0,
      obj = arguments[objIndex],
      filter;

  if (isBoolean(obj)) {
    deep = obj;
    objIndex++;
    obj = arguments[objIndex];
  }

  if (arguments.length > objIndex + 1) {
    filter = arguments[objIndex + 1];
  }

  if (isArray(obj)) {
    var newArr = [];
    obj.forEach(function (item, index) {
      if (filter == null || filter(obj, index, item)) {
        newArr.push(deep ? copy(item) : item);
      }
    });
    return newArr;
  }

  if (isObject(obj)) {
    var newObj = object(obj);
    forEach(obj, function (value, key) {
      if (filter == null || filter(obj, key, value)) {
        newObj[key] = deep ? copy(value) : value;
      }
    });
    return newObj;
  }

  return obj;
}

function extend() {
  var deep = false,
      index = 0,
      target = arguments[index];

  if (isBoolean(target)) {
    deep = target;
    target = arguments[++index];
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
    Array.prototype.slice.call(arguments, index + 1).forEach(function (item) {
      plainMerge(target, item);
    });
  }
}

function merge() {
  var deep = false,
      index = 0,
      target = {};

  if (isBoolean(arguments[index])) {
    deep = arguments[index];
    index++;
  }

  if (deep) {
    Array.prototype.slice.call(arguments, index).forEach(function (item) {
      deepMerge(target, item);
    });
  } else {
    Array.prototype.slice.call(arguments, index).forEach(function (item) {
      plainMerge(target, item);
    });
  }

  return target;
}

function plainMerge(target, source) {
  forEach(source, function (value, key) {
    target[key] = value;
  });
}

function deepMerge(target, source) {
  forEach(source, function (value, key) {
    if (target[key] == null) {
      target[key] = value;
    } else {
      if (isObject(target[key]) && isObject(value)) {
        deepMerge(target[key], value);
      } else {
        target[key] = value;
      }
    }
  });
}

function object(o) {
  function F() {}

  F.prototype = o;
  return new F();
}

function inheritPrototype(subType, superType) {
  var prototype = object(superType.prototype);
  prototype.constructor = subType;
  subType.prototype = prototype;
}

function inherit(subType, superType) {
  inheritPrototype(subType, superType);

  subType["super"] = function () {
    superType.apply(this, arguments);
  };
}

function lowercase(string) {
  return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
  return isString(string) ? string.toUpperCase() : string;
}

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isDefined(value) {
  return typeof value !== 'undefined';
}

function isArray(obj) {
  return obj instanceof Array;
}

function isMap(obj) {
  return obj instanceof Map;
}

function isObject(value) {
  return value !== null && _typeof(value) === 'object';
}

function isBlankObject(value) {
  return value !== null && _typeof(value) === 'object' && !getPrototypeOf(value);
}

function isString(value) {
  return typeof value === 'string';
}

function isNumber(value) {
  return typeof value === 'number';
}

function isDate(value) {
  return toString.call(value) === '[object Date]';
}

function isFunction(value) {
  return typeof value === 'function';
}

function isRegExp(value) {
  return toString.call(value) === '[object RegExp]';
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isFormData(value) {
  return typeof FormData !== 'undefined' && value instanceof FormData;
}

function isSame(obj1, obj2) {
  var same = obj1 === obj2;

  if (!same) {
    if (isArray(obj1) && isArray(obj2)) {
      if (obj1.length === obj2.length) {
        same = !some(obj1, function (index, value) {
          return !isSame(value, obj2[index]);
        });
      }
    } else if (isObject(obj1) && isObject(obj2) && getPrototypeOf(obj1) === getPrototypeOf(obj2)) {
      same = !some(obj1, function (key, value) {
        return !isSame(value, obj2[key]);
      });
    }
  }

  return same;
}

function isEmpty(value) {
  return !isObject(value) || !some(value, function () {
    return true;
  });
}

function debug(log) {
  if (debugMode) {
    console.log(log);
  }
}

function contains(arr, obj) {
  return arr.some(function (item) {
    return item === obj;
  });
}

function containsStr(arr, str, ignoreCase) {
  return arr.some(function (item) {
    return item === str || ignoreCase && lowercase(item) === lowercase(str);
  });
}

function hasProperty(obj, key, ignoreCase) {
  if (!obj) {
    return false;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (value3, key3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

      if (hasProp) {
        target = value3;
      }

      return hasProp;
    }, true);
  }

  return hasProp;
}

function getProperty(obj, key, ignoreCase) {
  if (!obj) {
    return null;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();
    hasProp = false;
    forEach(target, function (value3, key3) {
      hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

      if (hasProp) {
        target = value3;
      }

      return hasProp;
    }, true);
  }

  return hasProp ? target : null;
}

function setProperty(obj, key, value, ignoreCase) {
  if (!obj) {
    return;
  }

  var key2,
      hasProp = true,
      keys = key.split('.'),
      target = obj;

  while (hasProp && keys.length > 0) {
    key2 = keys.shift();

    if (keys.length === 0) {
      target[key2] = value;
    } else {
      hasProp = false;
      forEach(target, function (value3, key3) {
        hasProp = key3 === key2 || ignoreCase && lowercase(key3) === lowercase(key2);

        if (hasProp) {
          target = value3;
        }

        return hasProp;
      }, true);
    }
  }

  if (!hasProp) {
    throw new Error(key + ': Can not set property of undefined');
  }
}

function concat() {
  return Array.prototype.concat.apply([], arguments);
}

function orderBy(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return -1;
    }

    if (getValue(a) > getValue(b)) {
      return 1;
    }

    return 0;
  });
}

function orderByDescending(arr, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return arr.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return 1;
    }

    if (getValue(a) > getValue(b)) {
      return -1;
    }

    return 0;
  });
}

function toNumber(value) {
  var n = parseFloat(value);
  return isNaN(n) ? value : n;
}

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}

function format() {
  if (arguments.length === 0) {
    return;
  }

  var match,
      matchText,
      index,
      result = '',
      text = arguments[0],
      pattern = /\{(\d+)\}/g,
      lastIndex = pattern.lastIndex;

  while (match = pattern.exec(text)) {
    matchText = match[0];
    index = Number.parseInt(match[1]) + 1;

    if (arguments.length <= index) {
      throw new Error('format item ' + index + 'is not defined');
    }

    result += text.substring(lastIndex, match.index) + arguments[index];
    lastIndex = pattern.lastIndex;
  }

  result += text.substring(lastIndex);
  return result;
}

function escapeHtml(html) {
  return html.replace(/&gt;/g, '>').replace(/&lt;/g, '<').replace(/&amp;/g, '&').replace(/&quote;/g, '');
}

function join(separator, arr) {
  var result = '',
      length = arr.length;
  arr.forEach(function (item, index) {
    result += item;

    if (index + 1 < length) {
      result += separator;
    }
  });
  return result;
}



/***/ }),

/***/ "./src/view/component.js":
/*!*******************************!*\
  !*** ./src/view/component.js ***!
  \*******************************/
/*! exports provided: componentConstructor, Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "componentConstructor", function() { return componentConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../observer */ "./src/observer/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _delayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./delayer */ "./src/view/delayer.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








function componentConstructor(data) {
  this.$$data = null;
  this.$$velm = null;
  this.$$fragment = null;
  this.$$bindings = [];
  this.$$parent = null;
  this.$$children = [];
  this.$$directives = [];
  this.$$injector = _injector__WEBPACK_IMPORTED_MODULE_4__["injector"];
  this.$$render = new _render__WEBPACK_IMPORTED_MODULE_3__["Render"](this);
  this.$$observer = new _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](this);
  this.$$evaluator = new _exp__WEBPACK_IMPORTED_MODULE_6__["Evaluator"](this);
  this.$$delayer = new _delayer__WEBPACK_IMPORTED_MODULE_5__["Delayer"](this.$$doPatch);
  this.$display = 'inherit';
  this.$setData(data);
  _injector__WEBPACK_IMPORTED_MODULE_4__["injector"].injectServices(this, this.$$data);
}
var Component = /*#__PURE__*/function () {
  function Component(data) {
    _classCallCheck(this, Component);

    componentConstructor.call(this, data);
  }

  _createClass(Component, [{
    key: "$setData",
    value: function $setData(data) {
      if (data != null) {
        // create methods
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](data.methods)) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](this, data.methods);
        } // create properties


        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](data.construct)) {
          data.construct.call(this, _core__WEBPACK_IMPORTED_MODULE_1__["Message"]);
        }
      }

      this.$$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
    }
  }, {
    key: "$hasComponent",
    value: function $hasComponent(key) {
      return this.$$injector.hasComponent(key, this.$$data.alias);
    }
  }, {
    key: "$newComponent",
    value: function $newComponent(key) {
      var child = this.$$injector.createComponent(key, this.$$data.alias);
      child.$$parent = this;
      this.$$children.push(child);
      return child;
    }
  }, {
    key: "$hasDirective",
    value: function $hasDirective(key) {
      return this.$$injector.hasDirective(key, this.$$data.alias);
    }
  }, {
    key: "$newDirective",
    value: function $newDirective(key) {
      var directive = this.$$injector.createDirective(key, this.$$data.alias);
      directive.$$scope = this;
      this.$$directives.push(directive);
      return directive;
    }
  }, {
    key: "$hasFilter",
    value: function $hasFilter(key) {
      return this.$$injector.hasFilter(key, this.$$data.alias);
    }
  }, {
    key: "$getFilter",
    value: function $getFilter(key) {
      return this.$$injector.createFilter(key, this.$$data.alias);
    }
  }, {
    key: "$hasAttribute",
    value: function $hasAttribute(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this, key, true);
    }
  }, {
    key: "$setAttribute",
    value: function $setAttribute(key, value) {
      var oldValue = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, key, true);

      if (oldValue !== value) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.toProxy(), key, value, true);
      }
    }
  }, {
    key: "$bind",
    value: function $bind(message, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, message, true);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.on(handler);
      } else {
        throw new Error(message + ' is not a message');
      }
    }
  }, {
    key: "$unbind",
    value: function $unbind(event, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this, message, true);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.off(handler);
      } else {
        throw new Error(message + ' is not a message');
      }
    }
  }, {
    key: "$watch",
    value: function $watch(exp, handler, locals) {
      return this.$$observer.watchExp(this, exp, handler, locals);
    }
  }, {
    key: "$watchCollection",
    value: function $watchCollection(exp, handler, locals) {
      return this.$$observer.watchCollection(this, exp, handler, locals);
    }
  }, {
    key: "$eval",
    value: function $eval(exp) {
      return this.$$evaluator.evaluate(exp);
    }
  }, {
    key: "$getTemplate",
    value: function $getTemplate() {
      var data = this.$$data;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](data.template)) {
        return data.template;
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](data.templateId)) {
        var elm = document.getElementById(data.templateId);

        if (elm != null) {
          return elm.innerHTML;
        }
      }

      return '';
    }
  }, {
    key: "$render",
    value: function $render() {
      var template = this.$getTemplate();
      this.$$fragment = this.$$render.render(template);
      return this.$$fragment;
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement) {
      var element;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      element.appendChild(this.$$fragment);
    }
  }, {
    key: "$unmount",
    value: function $unmount() {}
  }, {
    key: "$patch",
    value: function $patch() {
      this.$$delayer.execute(this);
    }
  }, {
    key: "$$doPatch",
    value: function $$doPatch() {
      this.$$bindings.forEach(function (e) {
        e.patch();
      });
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$$delayer.destroy();
      this.$$observer.destroy();
      this.$$children.forEach(function (child) {
        child.$destroy();
      });
      this.$$directives.forEach(function (item) {
        item.$destroy();
      });
      this.$$bindings.forEach(function (item) {
        item.destroy();
      });
      this.onDestroy && this.onDestroy();
      this.$$parent = null;
      this.$$children.length = 0;
      this.$$directives.length = 0;
      this.$$bindings.length = 0;
    }
  }]);

  return Component;
}();

/***/ }),

/***/ "./src/view/delayer.js":
/*!*****************************!*\
  !*** ./src/view/delayer.js ***!
  \*****************************/
/*! exports provided: Delayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delayer", function() { return Delayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Delayer = /*#__PURE__*/function () {
  function Delayer(handler, timeout) {
    _classCallCheck(this, Delayer);

    this.handler = handler;
    this.timeout = timeout;
    this.delayId = null;
  }

  _createClass(Delayer, [{
    key: "execute",
    value: function execute(scope) {
      var _this = this;

      if (this.delayId != null) {
        return;
      }

      this.delayId = setTimeout(function () {
        _this.delayId = null;

        _this.handler.call(scope);
      }, this.timeout);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.delayId != null) {
        clearTimeout(this.delayId);
      }
    }
  }]);

  return Delayer;
}();

/***/ }),

/***/ "./src/view/directive.js":
/*!*******************************!*\
  !*** ./src/view/directive.js ***!
  \*******************************/
/*! exports provided: directiveConstructor, Directive */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "directiveConstructor", function() { return directiveConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return Directive; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function directiveConstructor() {
  this.$$scope = null;
  this.$$vattr = null; // identify this directive would assign value to binding expression

  this.$assigned = false;
  this.$priority = 9;
}
var Directive = /*#__PURE__*/function () {
  _createClass(Directive, [{
    key: "$scope",
    get: function get() {
      return this.$$scope;
    }
  }, {
    key: "$elm",
    get: function get() {
      return this.$$vattr.velm.elm;
    }
  }, {
    key: "$component",
    get: function get() {
      return this.$$vattr.velm.data.component;
    }
  }, {
    key: "$binding",
    get: function get() {
      return this.$$vattr.data.binding;
    }
  }]);

  function Directive(meatadata) {
    _classCallCheck(this, Directive);

    directiveConstructor.call(this, meatadata);
  } // while compiling


  _createClass(Directive, [{
    key: "$compile",
    value: function $compile() {
      return this.onCompile && this.onCompile(this.$$vattr.velm, this.$$vattr);
    } // the input value is changed

  }, {
    key: "$change",
    value: function $change(value) {
      this.onChange && this.onChange(value);
    }
  }, {
    key: "$link",
    value: function $link() {
      return this.onLink && this.onLink(this.$scope);
    } // before linking
    // $prelink() {
    //     this.beforeLink && this.beforeLink();
    // }
    // after linking

  }, {
    key: "$postlink",
    value: function $postlink() {
      this.afterLink && this.afterLink();
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.onDestroy && this.onDestroy();
    }
  }]);

  return Directive;
}();

/***/ }),

/***/ "./src/view/factory.js":
/*!*****************************!*\
  !*** ./src/view/factory.js ***!
  \*****************************/
/*! exports provided: Factory, factory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Factory", function() { return Factory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factory", function() { return factory; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roles */ "./src/view/roles.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var pattern = /^[a-z_\$][\w\$-]*/i; // constructor factory, create constructor for component, directive, filter and service

var Factory = /*#__PURE__*/function () {
  function Factory() {
    _classCallCheck(this, Factory);
  }

  _createClass(Factory, [{
    key: "rename",
    value: function rename(roleId, key) {
      if (pattern.test(key)) {
        var newName = '';
        var segments = key.split('-');
        segments.forEach(function (segment) {
          newName += _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"](segment[0]) + segment.substring(1);
        });

        switch (roleId) {
          case _roles__WEBPACK_IMPORTED_MODULE_2__["roles"].component:
            newName += 'Component';
            break;

          case _roles__WEBPACK_IMPORTED_MODULE_2__["roles"].directive:
            newName += 'Directive';
            break;

          case _roles__WEBPACK_IMPORTED_MODULE_2__["roles"].filter:
            newName += 'Filter';
            break;

          case _roles__WEBPACK_IMPORTED_MODULE_2__["roles"].service:
            newName += 'Service';
            break;
        }

        return newName;
      } else {
        throw new Error(key + 'is not a valid name');
      }
    }
  }, {
    key: "make",
    value: function make(roleId, metadata) {
      var constructor,
          constructorName = this.rename(roleId, metadata.key),
          onConstruct = function onConstruct() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor["super"])) {
          constructor["super"].call(this);
        } // create properties


        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](metadata.construct)) {
          metadata.construct.call(this, _core__WEBPACK_IMPORTED_MODULE_1__["Message"]);
        }
      };

      constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct); // extends class

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](metadata["extends"])) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, metadata["extends"]);
      } // create methods


      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](metadata.methods)) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](constructor.prototype, metadata.methods);
      }

      return constructor;
    }
  }, {
    key: "makeComponent",
    value: function makeComponent(metadata) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].component, metadata);
    }
  }, {
    key: "makeDirective",
    value: function makeDirective(metadata) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].directive, metadata);
    }
  }, {
    key: "makeFilter",
    value: function makeFilter(metadata) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].filter, metadata);
    }
  }, {
    key: "makeService",
    value: function makeService(metadata) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].service, metadata);
    }
  }]);

  return Factory;
}();
var factory = new Factory();

/***/ }),

/***/ "./src/view/filter.js":
/*!****************************!*\
  !*** ./src/view/filter.js ***!
  \****************************/
/*! exports provided: filterConstructor, Filter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterConstructor", function() { return filterConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return Filter; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function filterConstructor(metadata) {}
var Filter = function Filter(metadata) {
  _classCallCheck(this, Filter);

  filterConstructor.call(this, metadata);
};

/***/ }),

/***/ "./src/view/index.js":
/*!***************************!*\
  !*** ./src/view/index.js ***!
  \***************************/
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, Delayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view-api */ "./src/view/view-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["Directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["Filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["Service"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["isComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["isDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["isFilter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["isService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["namespace"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["bootstrap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["injector"]; });

/* harmony import */ var _delayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./delayer */ "./src/view/delayer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Delayer", function() { return _delayer__WEBPACK_IMPORTED_MODULE_1__["Delayer"]; });




/***/ }),

/***/ "./src/view/injector.js":
/*!******************************!*\
  !*** ./src/view/injector.js ***!
  \******************************/
/*! exports provided: Injector, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Injector", function() { return Injector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return injector; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _roles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roles */ "./src/view/roles.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // metadata example
// { key: '', namespace: '', extends: null, construct: fn, methods: {} }

var Injector = /*#__PURE__*/function () {
  function Injector() {
    _classCallCheck(this, Injector);

    this.classContainer = {};
    this.instanceContainer = {};
  }

  _createClass(Injector, [{
    key: "getClassContainer",
    value: function getClassContainer(roleId) {
      if (!this.classContainer[roleId]) {
        this.classContainer[roleId] = {};
      }

      return this.classContainer[roleId];
    }
  }, {
    key: "getInstanceContainer",
    value: function getInstanceContainer(roleId) {
      if (!this.instanceContainer[roleId]) {
        this.instanceContainer[roleId] = [];
      }

      return this.instanceContainer[roleId];
    }
  }, {
    key: "register",
    value: function register(roleId, key, constructor, metadata) {
      if (key.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
      } // store metadata to prototype


      metadata.key = key;
      constructor.prototype.$$metadata = metadata;
      var container = this.getClassContainer(roleId);

      if (container[key] == null) {
        container[key] = [];
      } else {
        var matches = container[key].filter(function (item) {
          return item.prototype.$$metadata.namespace === constructor.prototype.$$metadata.namespace;
        });

        if (matches.length > 0) {
          throw new Error(key + ' is exist under namespace ' + matches[0].prototype.$$metadata.namespace);
        }
      }

      container[key].push(constructor);
    }
  }, {
    key: "registerComponent",
    value: function registerComponent(key, constructor, metadata) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, constructor, metadata);
    }
  }, {
    key: "registerDirective",
    value: function registerDirective(key, constructor, metadata) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, constructor, metadata);
    }
  }, {
    key: "registerFilter",
    value: function registerFilter(key, constructor, metadata) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, constructor, metadata);
    }
  }, {
    key: "registerService",
    value: function registerService(key, constructor, metadata) {
      this.register(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, constructor, metadata);
    }
  }, {
    key: "has",
    value: function has(roleId, key, ignoreCase, alias) {
      var constructors,
          container = this.getClassContainer(roleId);
      var segments = this.convertAlias(key, alias).split('.');
      var namespace = '';

      if (segments.length > 1) {
        key = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](container, key, true);
      } else {
        constructors = container[key];
      }

      if (constructors == null) {
        return false;
      }

      if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
          var meta = item.prototype.$$metadata;
          return meta.namespace && _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
          return false;
        }
      }

      return true;
    }
  }, {
    key: "hasComponent",
    value: function hasComponent(key, alias) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, true, alias);
    }
  }, {
    key: "hasDirective",
    value: function hasDirective(key, alias) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, true, alias);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter(key, alias) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, true, alias);
    }
  }, {
    key: "hasService",
    value: function hasService(key, alias) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, true, alias);
    }
  }, {
    key: "get",
    value: function get(roleId, key, ignoreCase, alias) {
      var constructors,
          container = this.getClassContainer(roleId);
      var segments = this.convertAlias(key, alias).split('.');
      var namespace = '';

      if (segments.length > 1) {
        key = segments.pop();
        namespace = segments.join('.');
      }

      if (ignoreCase) {
        constructors = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](container, key, true);
      } else {
        constructors = container[key];
      }

      if (constructors == null) {
        throw new Error(roleId + ' ' + key + ' is not defined');
      }

      if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
          var meta = item.prototype.$$metadata;
          return meta.namespace && _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
          throw new Error(key + ' is not exist under namespace ' + namespace);
        }
      }

      if (constructors.length > 1) {
        var namespaces = constructors.map(function (item) {
          return item.prototype.$$metadata.namespace;
        });
        throw new Error('namespace ' + namespaces.join('|') + ' all have ' + key);
      }

      return constructors[0];
    }
  }, {
    key: "getComponent",
    value: function getComponent(key, alias) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, alias);
    }
  }, {
    key: "getDirective",
    value: function getDirective(key, alias) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, alias);
    }
  }, {
    key: "getFilter",
    value: function getFilter(key, alias) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, alias);
    }
  }, {
    key: "getService",
    value: function getService(key, alias) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, alias);
    }
  }, {
    key: "create",
    value: function create(roleId, keyOrConstructor, alias) {
      var constructor;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        constructor = this.get(roleId, keyOrConstructor, alias);

        if (constructor == null) {
          throw new Error('miss constructor for key ' + keyOrConstructor);
        }
      } else if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](keyOrConstructor)) {
        constructor = keyOrConstructor;
      } else {
        throw new Error('Invalid parameter');
      }

      return new constructor();
    }
  }, {
    key: "createComponent",
    value: function createComponent(keyOrConstructor, alias) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, keyOrConstructor, alias);
    }
  }, {
    key: "createDirective",
    value: function createDirective(keyOrConstructor, alias) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, keyOrConstructor, alias);
    }
  }, {
    key: "createFilter",
    value: function createFilter(keyOrConstructor, alias) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getFilter(keyOrConstructor, alias);
      }

      var result = container.filter(function (item) {
        return item instanceof keyOrConstructor;
      });

      if (result.length) {
        instance = result[0];
      } else {
        instance = new keyOrConstructor();
        container.push(instance);
      }

      return instance;
    }
  }, {
    key: "createService",
    value: function createService(keyOrConstructor, alias) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getService(keyOrConstructor, alias);
      }

      if (!keyOrConstructor.prototype.$$metadata.nonShared) {
        var result = container.filter(function (item) {
          return item instanceof keyOrConstructor;
        });

        if (result.length) {
          instance = result[0];
        }
      }

      if (!instance) {
        instance = new keyOrConstructor();
        container.push(instance);
      }

      return instance;
    }
  }, {
    key: "convertAlias",
    value: function convertAlias(key, alias) {
      if (!_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](alias)) {
        return key;
      }

      var segments = key.split('.');

      if (segments.length === 1) {
        return key;
      }

      var className = segments.pop(),
          spaceName = segments.join('.');
      _utils__WEBPACK_IMPORTED_MODULE_0__["some"](alias, function (shortName, fullName) {
        if (shortName === spaceName) {
          key = fullName + '.' + className;
          return true;
        }
      });
      return key;
    }
  }, {
    key: "injectServices",
    value: function injectServices(instance, metadata) {
      var self = this;

      if (metadata && _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](metadata.inject)) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](metadata.inject, function (value, key) {
          Object.defineProperty(instance, key, {
            enumerable: false,
            configurable: false,
            get: function get() {
              var privateKey = '$$' + key;

              if (instance[privateKey] == null) {
                instance[privateKey] = self.createService(value, metadata.alias);
              }

              return instance[privateKey];
            }
          });
        });
      }
    }
  }]);

  return Injector;
}();
var injector = new Injector();

/***/ }),

/***/ "./src/view/roles.js":
/*!***************************!*\
  !*** ./src/view/roles.js ***!
  \***************************/
/*! exports provided: roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
var roles = {
  filter: 0,
  service: 1,
  component: 2,
  directive: 3
};

/***/ }),

/***/ "./src/view/service.js":
/*!*****************************!*\
  !*** ./src/view/service.js ***!
  \*****************************/
/*! exports provided: serviceConstructor, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serviceConstructor", function() { return serviceConstructor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function serviceConstructor(metadata) {}
var Service = function Service(metadata) {
  _classCallCheck(this, Service);

  serviceConstructor.call(this, metadata);
};

/***/ }),

/***/ "./src/view/view-api.js":
/*!******************************!*\
  !*** ./src/view/view-api.js ***!
  \******************************/
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bootstrap", function() { return bootstrap; });
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_0__["Component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_1__["Directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_2__["Filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_3__["Service"]; });

/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./factory */ "./src/view/factory.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"]; });

/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helper */ "./src/helper.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils */ "./src/utils.js");







 // start make constructor function because class can't be call without new.

var componentClass = function () {
  return function Component(metadata) {
    _component__WEBPACK_IMPORTED_MODULE_0__["componentConstructor"].call(this, metadata);
  };
}();

componentClass.prototype = _component__WEBPACK_IMPORTED_MODULE_0__["Component"].prototype;

var directiveClass = function () {
  return function Directive(metadata) {
    _directive__WEBPACK_IMPORTED_MODULE_1__["directiveConstructor"].call(this, metadata);
  };
}();

directiveClass.prototype = _directive__WEBPACK_IMPORTED_MODULE_1__["Directive"].prototype;

var filterClass = function () {
  return function Filter(metadata) {
    _filter__WEBPACK_IMPORTED_MODULE_2__["filterConstructor"].call(this, metadata);
  };
}();

filterClass.prototype = _filter__WEBPACK_IMPORTED_MODULE_2__["Filter"].prototype;

var serviceClass = function () {
  return function Service(metadata) {
    _service__WEBPACK_IMPORTED_MODULE_3__["serviceConstructor"].call(this, metadata);
  };
}();

serviceClass.prototype = _service__WEBPACK_IMPORTED_MODULE_3__["Service"].prototype; // end of make constructor function because class can't be call without new.

function namespace(name) {
  return {
    component: function component(key, metadata) {
      metadata.namespace = name;
      return _component(key, metadata);
    },
    directive: function directive(key, metadata) {
      metadata.namespace = name;
      return _directive(key, metadata);
    },
    service: function service(key, metadata) {
      metadata.namespace = name;
      return _service(key, metadata);
    },
    filter: function filter(key, metadata) {
      metadata.namespace = name;
      return _filter(key, metadata);
    }
  };
}

function _component(key, metadata) {
  metadata["extends"] = componentClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeComponent(metadata);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerComponent(key, constructor, metadata);
  return constructor;
}

function _directive(key, metadata) {
  metadata["extends"] = directiveClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeDirective(metadata);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerDirective(key, constructor, metadata);
  return constructor;
}

function _filter(key, metadata) {
  metadata["extends"] = filterClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeFilter(metadata);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerFilter(key, constructor, metadata);
  return constructor;
}

function _service(key, metadata) {
  metadata["extends"] = serviceClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeService(metadata);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerService(key, constructor, metadata);
  return constructor;
}

function isComponent(instance) {
  return instance instanceof _component__WEBPACK_IMPORTED_MODULE_0__["Component"];
}

function isDirective(instance) {
  return instance instanceof _directive__WEBPACK_IMPORTED_MODULE_1__["Directive"];
}

function isFilter(instance) {
  return instance instanceof _filter__WEBPACK_IMPORTED_MODULE_2__["Filter"];
}

function isService(instance) {
  return instance instanceof _service__WEBPACK_IMPORTED_MODULE_3__["Service"];
}

function bootstrap(selector, metadata) {
  var element = document.querySelector(selector);
  var app = new _component__WEBPACK_IMPORTED_MODULE_0__["Component"](_utils__WEBPACK_IMPORTED_MODULE_7__["merge"]({
    template: element.innerHTML
  }, metadata));
  _helper__WEBPACK_IMPORTED_MODULE_6__["clearChildNodes"](element);
  app.$render();
  app.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvZGlzYWJsZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvc2VsZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci93YXRjaGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9iaW5kaW5nLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvcmVuZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsInByb3BDaGFuZ2luZyIsIk1lc3NhZ2UiLCJwcm9wQ2hhbmdlZCIsIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiZm4iLCJnZXQiLCJvbiIsIm9mZiIsImFyZ3MiLCJzY29wZSIsImZpcmUiLCJoYW5kbGVycyIsInB1c2giLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicmV0dXJuVmFsdWUiLCJ1dGlscyIsImNhbGwiLCJpc01lc3NhZ2UiLCJvYmoiLCJpc1Byb3h5U3ltYm9sIiwiU3ltYm9sIiwidGFyZ2V0U3ltYm9sIiwiaGFuZGxlciIsInRhcmdldCIsImtleSIsInNldCIsInZhbHVlIiwib2xkVmFsdWUiLCJnZXRUYXJnZXQiLCJuZXdWYWx1ZSIsInZhbGlkYXRpb24iLCJ2YWxpZCIsImFwcGx5IiwiZGF0YSIsImlzUHJveHkiLCJwcm94eSIsInVwZGF0ZVByb3h5IiwiUHJveHkiLCJBZ2VudCIsIkFycmF5QWdlbnQiLCJBcnJheSIsInByb3RvdHlwZSIsInNsaWNlIiwiYXJndW1lbnRzIiwiY29uY2F0Iiwiam9pbiIsInJlc3VsdCIsImZvckVhY2giLCJpdGVtIiwiaW5kZXgiLCJjb3B5IiwicmV2ZXJzZSIsInVuZGVmaW5lZCIsInNvcnQiLCJPYmplY3QiLCJ0b1Byb3h5IiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJuYW1lIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsIiRlbG0iLCJpbm5lclRleHQiLCJEaXJlY3RpdmUiLCJIaWRlRGlyZWN0aXZlIiwiaW5pdGlhbCIsInN0eWxlIiwiZGlzcGxheSIsIk1vZGVsRGlyZWN0aXZlIiwidmlld1ZhbHVlIiwibW9kZWxWYWx1ZSIsInBhcnNlcnMiLCJmb3JtYXR0ZXJzIiwidmlld0NoYW5nZUxpc3RlbmVycyIsInZhbGlkYXRvcnMiLCJzdGF0dXMiLCJmZWVkYmFjayIsInByaXN0aW5lIiwiZGlydHkiLCJpbnZhbGlkIiwib3B0aW9ucyIsImNzcyIsImNvbW1pdE1vZGVsVmFsdWUiLCIkc2NvcGUiLCIkY29tcG9uZW50IiwidmFsdWVDaGFuZ2UiLCJzZWxmIiwiY29tbWl0Vmlld1ZhbHVlIiwibmV3dmFsdWUiLCJFcnJvciIsIiQkbWV0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0QXR0cmlidXRlIiwidXBkYXRlRWxtQ3NzQ2xhc3MiLCJtYXJrRGlydHlTdGF0dXMiLCJsaXN0ZW5lciIsInBhcnNlciIsIiRiaW5kaW5nIiwiYXNzaWduIiwiZWxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwidmVsbSIsInZhdHRyIiwibm9kZVZhbHVlIiwicGF0dGVybiIsImV4ZWMiLCJidWlsZGVyIiwiVHBsQnVpbGRlciIsInJlbW92ZUF0dHIiLCJidWlsZCIsImZyYWdtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiY3JlYXRlQ29tbWVudCIsImZvb3RlciIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiZGVsYXllciIsIkRlbGF5ZXIiLCJoZWxwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiJHdhdGNoQ29sbGVjdGlvbiIsImV4ZWN1dGUiLCJpdGVtcyIsIiRldmFsIiwibG9jYWxzIiwiUmVuZGVyIiwiaXRlbUNvbnRlbnQiLCJkZXN0cm95IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsInNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQWNjZXNzb3IiLCJjYWxsZWUiLCJleHAiLCJjaGlsZHJlbiIsIkFuYWx5c2VyIiwicHJvZ3JhbSIsIkV4cEJ1aWxkZXIiLCJhY2Nlc3NvcnMiLCJsb2NhbEFjY2Vzc29ycyIsInBhcnNlRXhwIiwiY2hpbGROb2RlcyIsImNoaWxkIiwiYW5hbHlzZU5vZGUiLCJub2RlIiwiY29udGV4dCIsInR5cGUiLCJBU1QiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiYW5hbHlzZUV4cHJlc3Npb24iLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsImFuYWx5c2VBc3NpZ25tZW50IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYW5hbHlzZUNvbmRpdGlvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiYW5hbHlzZUxvZ2ljIiwiQmluYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VCaW5hcnkiLCJVbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlVW5hcnkiLCJDYWxsRXhwcmVzc2lvbiIsImFuYWx5c2VDYWxsIiwiTWVtYmVyRXhwcmVzc2lvbiIsImFuYWx5c2VNZW1iZXIiLCJJZGVudGlmaWVyIiwiYW5hbHlzZUlkZW50aWZpZXIiLCJMaXRlcmFsIiwiYW5hbHlzZUxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJhbmFseXNlQXJyYXkiLCJQcm9wZXJ0eSIsImFuYWx5c2VQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJhbmFseXNlT2JqZWN0IiwiYXNzaWdubWVudCIsInJpZ2h0IiwiY29uZGl0aW9uIiwidGVzdCIsImFsdGVybmF0ZSIsImNvbnNlcXVlbnQiLCJsb2dpYyIsImxlZnQiLCJiaW5hcnkiLCJ1bmFyeSIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImlkZW50aWZpZXIiLCJjcmVhdGVMb2NhbEFjY2Vzc29yIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiRXZhbHVhdG9yIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImV4cHJlc3Npb24iLCJwcm9wZXJ0eUtleSIsImV2YWx1YXRlRXhwcmVzc2lvbiIsImV2YWx1YXRlQXNzaWdubWVudCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiZXZhbHVhdGVMb2dpYyIsImV2YWx1YXRlQmluYXJ5IiwiZXZhbHVhdGVVbmFyeSIsImV2YWx1YXRlQ2FsbCIsImV2YWx1YXRlTWVtYmVyIiwiZXZhbHVhdGVJZGVudGlmaWVyIiwiZXZhbHVhdGVMaXRlcmFsIiwiZXZhbHVhdGVBcnJheSIsImV2YWx1YXRlUHJvcGVydHkiLCJldmFsdWF0ZU9iamVjdCIsImFzc2lnbm1lbnRMZWZ0IiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIm9wZXJhdG9yIiwiYXJnVmFsdWVzIiwibWFwIiwiJGhhc0ZpbHRlciIsIiRnZXRGaWx0ZXIiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJwYXJzZSIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInNoaWZ0IiwicHJvcHMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpbmRleE9mIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInF1b3RlIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiZXNjYXBlIiwiaGV4IiwibWF0Y2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIkVTQ0FQRSIsIm9wZXJhdG9yVGV4dCIsInNwbGl0IiwibGV4ZXIiLCJtc2ciLCJQcm9ncmFtTm9kZSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsImZpbHRlckNoYWluIiwiYXN0IiwidGVybmFyeSIsImlzQXNzaWduYWJsZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEFORCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImxpdGVyYWxzIiwiaGFzT3duUHJvcGVydHkiLCJMaXRlcmFsTm9kZSIsIm5leHQiLCJwZWVrQWhlYWQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJwYXJzZUFyZ3VtZW50cyIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsImdldENoaWxkTm9kZXMiLCJjbGVhckNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJpbnNlcnROb2RlQWZ0ZXIiLCJsYXN0Q2hpbGQiLCJxdWVyeUVsZW1lbnRMb2FkZWQiLCJjYWxsYmFjayIsImNhbmNlbFRva2VuIiwicXVlcnkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5RWxlbWVudFVubG9hZGVkIiwicXVlcnlFbGVtZW50U3RhdGUiLCJjYWxsYmFja3MiLCJsb2FkZWQiLCJvbkVudGVyIiwib25MZWF2ZSIsImFkZENsYXNzIiwiZWwiLCJjbHMiLCJ0cmltIiwiYyIsImN1ciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwicmVwbGFjZSIsIk9ic2VydmVyIiwib25Qcm9wQ2hhbmdpbmciLCJoYW5kbGVQcm9wQ2hhbmdpbmciLCJvblByb3BDaGFuZ2VkIiwiaGFuZGxlUHJvcENoYW5nZWQiLCJsaXN0ZW5lcnMiLCJpbml0Iiwid2F0Y2hlciIsImdldFdhdGNoZXIiLCJmaXJlS2V5Iiwid2F0Y2hlcnMiLCJmaWx0ZXJzIiwiV2F0Y2hlciIsImNyZWF0ZVdhdGNoZXIiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZVdhdGNoZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJhbmFseXNlciIsImV2YWx1YXRvciIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJldmFsdWF0ZSIsIndhdGNoIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJ3YXRjaEV4cCIsImNvbGxlY3Rpb24iLCJrZXlzIiwiZ2V0SGFuZGxlcnMiLCJCaW5kaW5nIiwiZXhwcmVzc2VkIiwibWVzc2FnZWQiLCJhc3NpZ25lZCIsImF1dG9tYXRpb24iLCJjaGFuZ2VkIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsIiRwYXRjaCIsImNvbXB1dGUiLCJyZWR1Y2UiLCJwcmV2IiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwidm5vZGVzIiwiZGlyZWN0aXZlcyIsImJpbmRpbmciLCIkJGJpbmRpbmdzIiwidHBsIiwicGFyc2VUcGwiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsIm5vZGVOYW1lIiwiY29tcGlsZU5vZGUiLCJpc1RleHQiLCJjb21waWxlVGV4dCIsImlzQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJpc0NvbXBvbmVudCIsIiRoYXNDb21wb25lbnQiLCJjcmVhdGVCaW5kaW5nIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImRvbU1lc3NhZ2VkIiwiaXNEaXJlY3RpdmUiLCIkaGFzRGlyZWN0aXZlIiwiJG5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWduZWQiLCIkY29tcGlsZSIsInJlZ2lzdGVyQXV0b21hdGlvbiIsIiRjaGFuZ2UiLCJzZXRIdG1sQXR0ciIsIiRoYXNBdHRyaWJ1dGUiLCJjb21waWxlIiwidnRleHQiLCJuZXdUZXh0Tm9kZSIsImNyZWF0ZVRleHROb2RlIiwidmNtbnQiLCIkbGluayIsImNyZWF0ZUVsZW1lbnQiLCJpbnN0YW5jZSIsIiRuZXdDb21wb25lbnQiLCIkZGlzcGxheSIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHJlbmRlciIsIiRtb3VudCIsIiRiaW5kIiwibGluayIsInBhdGNoIiwiVkF0dHIiLCJWTm9kZSIsIlZDbW50IiwiVkVsbSIsInNlbGZDbG9zZWQiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImJ1aWxkVGV4dCIsImJ1aWxkQ29tbWVudCIsImJ1aWxkRWxlbWVudCIsImF0dHJUcGwiLCJidWlsZEF0dHJpYnV0ZSIsImNoaWxkVHBsIiwic3RyIiwiYmVnaW4iLCJleHBlY3RTdHJpbmciLCJjb21tZW50IiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZWxlbWVudCIsImRvY1R5cGUiLCJhdHRycyIsInAiLCJwdXNoQXR0ciIsImNoaWxkRWxlbWVudHMiLCJwdXNoQ2hpbGQiLCJlbGVzIiwib3JpZ2luIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImlzQXJyYXkiLCJpc09iamVjdCIsImRlZXAiLCJvYmpJbmRleCIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImlzRW1wdHkiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJ2YWx1ZTMiLCJrZXkzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsIm9yZGVyQnkiLCJnZXR0ZXIiLCJnZXRWYWx1ZSIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJ0b051bWJlciIsIm4iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJlc2NhcGVIdG1sIiwiaHRtbCIsInNlcGFyYXRvciIsImNvbXBvbmVudENvbnN0cnVjdG9yIiwiJCRkYXRhIiwiJCRmcmFnbWVudCIsIiQkcGFyZW50IiwiJCRjaGlsZHJlbiIsIiQkZGlyZWN0aXZlcyIsIiQkaW5qZWN0b3IiLCIkJHJlbmRlciIsIiQkb2JzZXJ2ZXIiLCIkJGV2YWx1YXRvciIsIiQkZGVsYXllciIsIiQkZG9QYXRjaCIsIiRzZXREYXRhIiwiaW5qZWN0U2VydmljZXMiLCJDb21wb25lbnQiLCJtZXRob2RzIiwiY29uc3RydWN0IiwiJCRtZXRhZGF0YSIsImhhc0NvbXBvbmVudCIsImFsaWFzIiwiY3JlYXRlQ29tcG9uZW50IiwiaGFzRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJCRzY29wZSIsImhhc0ZpbHRlciIsImNyZWF0ZUZpbHRlciIsIm1lc3NhZ2UiLCJldmVudCIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlIiwidGVtcGxhdGVJZCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiJGdldFRlbXBsYXRlIiwic2VsZWN0b3JPckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGRlc3Ryb3kiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXJlY3RpdmVDb25zdHJ1Y3RvciIsIm1lYXRhZGF0YSIsIm9uQ29tcGlsZSIsIm9uQ2hhbmdlIiwib25MaW5rIiwiYWZ0ZXJMaW5rIiwiRmFjdG9yeSIsInJvbGVJZCIsIm5ld05hbWUiLCJyb2xlcyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsImZpbHRlckNvbnN0cnVjdG9yIiwiRmlsdGVyIiwiSW5qZWN0b3IiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsImNvbnZlcnRBbGlhcyIsInBvcCIsIm1ldGEiLCJoYXMiLCJuYW1lc3BhY2VzIiwia2V5T3JDb25zdHJ1Y3RvciIsImNyZWF0ZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiZ2V0RmlsdGVyIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImNsYXNzTmFtZSIsInNwYWNlTmFtZSIsInNob3J0TmFtZSIsImZ1bGxOYW1lIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSIsImNyZWF0ZVNlcnZpY2UiLCJzZXJ2aWNlQ29uc3RydWN0b3IiLCJTZXJ2aWNlIiwiY29tcG9uZW50Q2xhc3MiLCJkaXJlY3RpdmVDbGFzcyIsImZpbHRlckNsYXNzIiwic2VydmljZUNsYXNzIiwibWFrZUNvbXBvbmVudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiLCJpc0ZpbHRlciIsImlzU2VydmljZSIsImJvb3RzdHJhcCIsImFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FB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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU1zUSxRQUFiO0FBQ0ksc0JBQWM7QUFBQTs7QUFBQTs7QUFD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QUEzQjtBQUNIOztBQUVELFNBQVN1cUIsUUFBVCxDQUFrQnRPLFFBQWxCLEVBQTRCO0FBQ3hCLFNBQU9BLFFBQVEsWUFBWStMLDhDQUEzQjtBQUNIOztBQUVELFNBQVN3QyxTQUFULENBQW1Cdk8sUUFBbkIsRUFBNkI7QUFDekIsU0FBT0EsUUFBUSxZQUFZNk4sZ0RBQTNCO0FBQ0g7O0FBRUQsU0FBU1csU0FBVCxDQUFtQnZsQixRQUFuQixFQUE2QmhHLFFBQTdCLEVBQXVDO0FBQ25DLE1BQUlvZ0IsT0FBTyxHQUFHOWIsUUFBUSxDQUFDaWpCLGFBQVQsQ0FBdUJ2aEIsUUFBdkIsQ0FBZDtBQUNBLE1BQUl3bEIsR0FBRyxHQUFHLElBQUl0RixvREFBSixDQUFjNW9CLDRDQUFBLENBQVk7QUFDaEMycEIsWUFBUSxFQUFFN0csT0FBTyxDQUFDZ0g7QUFEYyxHQUFaLEVBRXJCcG5CLFFBRnFCLENBQWQsQ0FBVjtBQUdBK0UseURBQUEsQ0FBdUJxYixPQUF2QjtBQUNBb0wsS0FBRyxDQUFDcE8sT0FBSjtBQUNBb08sS0FBRyxDQUFDbk8sTUFBSixDQUFXK0MsT0FBWDtBQUNIIiwiZmlsZSI6ImF1dG9tYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcclxuICAgIHByb3BDaGFuZ2luZzogbmV3IE1lc3NhZ2UoKSxcclxuICAgIHByb3BDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS1idXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJveHknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlLCBlbG0sIGFyZykge1xyXG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZWxtO1xyXG4gICAgICAgIHRoaXMuJGFyZ3VtZW50ID0gYXJnO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZXNbZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tlXSA9IG5ldyBNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW2VdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGUsIGZuKSB7XHJcbiAgICAgICAgdGhpcy5nZXQoZSkub24oZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9mZihmbik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShlLCBhcmdzLCBzY29wZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihmbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShhcmdzLCBzY29wZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2FnZTtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNNZXNzYWdlIH0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcclxuICAgIHRhcmdldFN5bWJvbCA9IFN5bWJvbCgnX190YXJnZXQnKTtcclxuXHJcbnZhciBoYW5kbGVyID0ge1xyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgaWYoa2V5ID09PSBpc1Byb3h5U3ltYm9sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm94eShwcm94eSkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldChwcm94eSkge1xyXG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm94eSh0YXJnZXQsIGtleSkge1xyXG4gICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcclxuICAgICAgICBnZXRUYXJnZXQodGFyZ2V0KVtrZXldID0gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQWdlbnQge1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0W2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQXJyYXlBZ2VudCBleHRlbmRzIEFnZW50IHtcclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBzdXBlcih0YXJnZXQsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdCgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQsIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVuZ3RoLS07XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA+PSAwICl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudGFyZ2V0W2xlbmd0aF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgbGVuZ3RoICsgaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxlbmd0aCArPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICBpZih0aGlzLnRhcmdldC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIGNvcHkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGNvcHkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICBpZihpdGVtICE9PSB0aGlzLnRhcmdldFtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgaW5kZXggLSAxLCB0aGlzLnRhcmdldFtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzbGljZSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydCgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb3J0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGxpY2UoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvcHksIGFyZ3MpO1xyXG5cclxuICAgICAgICBjb3B5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgaWYoaXRlbSAhPT0gdGhpcy50YXJnZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCB0aGlzLnRhcmdldFtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGNvcHkubGVuZ3RoICE9PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGNvcHkubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcclxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XHJcbn07IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIHRhcmdldCwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1iaW5kJ1xyXG59KVxyXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbG0uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1oaWRlJ1xyXG59KVxyXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tbW9kZWwnXHJcbn0pXHJcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiAnJyxcclxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxyXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGVsbS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzTWVzc2FnZSh0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2Uub24oKGUsIGFyZ3MpID0+IHNlbGYuY29tbWl0Vmlld1ZhbHVlKGFyZ3MubmV3dmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgJyArIHRoaXMuJGNvbXBvbmVudC4kJG1ldGEua2V5ICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24obmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVsbUNzc0NsYXNzKCkge1xyXG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbG0sXHJcbiAgICAgICAgICAgIGNzcyA9IHRoaXMub3B0aW9ucy5jc3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5wcmlzdGluZSA9ICFkaXJ0eTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaW52YWxpZCA9ICF2YWxpZDtcclxuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSwgRGVsYXllciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsJztcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1yZXBlYXQnXHJcbn0pXHJcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xyXG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcclxuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XHJcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGJ1aWxkZXIuYnVpbGQodmVsbSk7XHJcblxyXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpbmsoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XHJcblxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgICAgICB0aGlzLmRlbGF5ZXIgPSBuZXcgRGVsYXllcigoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHRoaXMucmVuZGVyKHNjb3BlKTtcclxuICAgICAgICAgICAgaGVscGVyLnJlbW92ZU5vZGVCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcclxuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMuaXRlbXNFeHAsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NvcGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xyXG4gICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IG5ldyBSZW5kZXIoc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtQ29udGVudCA9IHJlbmRlci5yZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGVsYXllciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXNob3cnXHJcbn0pXHJcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRpYWwgPSAnaW5pdGlhbCc7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsID0gdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1jaGVja2VkJ1xufSlcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tcmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIHNlbGVjdG9yOiAnbS1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWxtLmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc2V0QXR0cmlidXRlKHRoaXMua2V5LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0ucmVtb3ZlQXR0cmlidXRlKHRoaXMua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcclxuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xyXG5cclxuY2xhc3MgQWNjZXNzb3Ige1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBleHApIHtcclxuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcclxuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUsIGV4cCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5hbHlzZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwLCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscyB8fCB7fTtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NvcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmxvY2FsQWNjZXNzb3JzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUsIGV4cCkge1xyXG4gICAgICAgIGlmICghdGhpcy5hY2Nlc3NvcnNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yc1trZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxvY2FsQWNjZXNzb3Ioa2V5LCBjYWxsZWUsIGV4cCkge1xyXG4gICAgICAgIGlmICghdGhpcy5sb2NhbEFjY2Vzc29yc1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxBY2Nlc3NvcnNba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5sb2NhbEFjY2Vzc29yc1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2UoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcGFyc2VFeHAodGhpcy5leHApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZU5vZGUobm9kZSwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VDb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTG9naWMobG9naWMpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VCaW5hcnkoYmluYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkubGVmdCk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUodW5hcnkuYXJnKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgY2FsbC5hcmdzLmZvckVhY2goYXJnID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhcmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZighY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjYWxsLmNhbGxlZSwgeyBjYWxsZWU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLm9iamVjdCk7XHJcblxyXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZW1iZXIucHJvcGVydHkudHlwZSA9PT0gQVNULkxpdGVyYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxyXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcclxuICAgICAgICAgICAgY2FsbGVlID0gY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMubG9jYWxzW2tleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlTG9jYWxBY2Nlc3NvcihrZXksIGNhbGxlZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobGl0ZXJhbCk7XHJcblxyXG4gICAgICAgIGlmKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlT2JqZWN0KG9iaikge1xyXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUFycmF5KGFycikge1xyXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2UoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4vZXhwLWFwaSc7XHJcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsdWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscywgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscyB8fCB7fTtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHtcclxuICAgICAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3I6IG51bGxcclxuICAgICAgICB9LCBvcHRpb25zKTtcclxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZSBmcm9tIGV4cHJlc3Npb25cclxuICAgIGV2YWx1YXRlKGV4cCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LiRudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZSB0byBleHByZXNzaW9uXHJcbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChleHByZXNzaW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQub2JqZWN0KSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5wcm9wZXJ0eSwge1xyXG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXk6ICFhc3NpZ25tZW50LmNvbXB1dGVkXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50LnByb3BlcnR5KSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldC5vYmosIHRhcmdldC5wcm9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xyXG5cclxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciByZXN1bHQsXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcclxuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNjb3BlLiRoYXNGaWx0ZXIoY29udGV4dC5wcm9wKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyLmV4ZWN1dGUuYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXHJcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXHJcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICBcclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcclxuXHJcbiAgICAgICAgaWYoY29udGV4dC50YXJnZXROb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMubG9jYWxzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcclxuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xyXG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xyXG5cclxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xyXG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcclxuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xyXG59XHJcblxyXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZChub2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyB1dGlscy5qb2luKCc6JywgYXJnVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcclxuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcclxuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgdXRpbHMuam9pbignLCAnLCBwcm9wcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIHV0aWxzLmpvaW4oJywnLCBpdGVtcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxleCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaXMoY2gsIGNoYXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKGkpIHtcclxuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVtYmVyKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xyXG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcclxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2RlUG9pbnRBdChjaCkge1xyXG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla011bHRpY2hhcigpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkTnVtYmVyKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZElkZW50KCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcclxuXHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pOyIsImltcG9ydCB7XHJcbiAgICBBU1QsXHJcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcclxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcclxuICAgIElkZW50aWZpZXJOb2RlLFxyXG4gICAgTGl0ZXJhbE5vZGUsXHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgUHJvZ3JhbU5vZGUsXHJcbiAgICBQcm9wZXJ0eU5vZGUsXHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxyXG59IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcclxuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcclxuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZSh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZ3JhbSgpIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcclxuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICByZXR1cm4gZXhwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckNoYWluKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcclxuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWdubWVudCgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXJuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxPUigpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxBTkQoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsaXR5KCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXRpb25hbCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRpdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHVuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbWFyeSgpIHtcclxuICAgICAgICB2YXIgcHJpbWFyeTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmV4dDtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcclxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgICAgIH0pLmpvaW4oJy4nKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcigpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcclxuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0YW50KCkge1xyXG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdCgpIHtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWUoZTEpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XHJcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XHJcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xyXG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcclxuQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uID0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJztcclxuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xyXG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xyXG5BU1QuQmluYXJ5RXhwcmVzc2lvbiA9ICdCaW5hcnlFeHByZXNzaW9uJztcclxuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xyXG5BU1QuTWVtYmVyRXhwcmVzc2lvbiA9ICdNZW1iZXJFeHByZXNzaW9uJztcclxuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XHJcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xyXG5BU1QuQXJyYXlFeHByZXNzaW9uID0gJ0FycmF5RXhwcmVzc2lvbic7XHJcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XHJcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiRudWxsID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcclxuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XHJcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2FzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2JpbmFyeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9sb2dpY2FsJztcclxuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcclxuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAgJy4vcHJvZ3JhbSc7XHJcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcclxuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2FycmF5JzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXRlcmFsTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xyXG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgICAgICB0aGlzLmtleSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xyXG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcclxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcclxuICAgIGxpdGVyYWxzOiB7XHJcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxyXG4gICAgICAgIG51bGw6IG51bGwsXHJcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcclxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59OyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRVbmxvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xyXG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2UsIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xyXG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FbnRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25MZWF2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uTGVhdmUuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xyXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XHJcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XHJcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcclxuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcclxuICAgICAgICBpZiAoY3VyKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDaGlsZE5vZGVzLFxyXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxyXG4gICAgcmVwbGFjZU5vZGUsXHJcbiAgICByZW1vdmVOb2RlLFxyXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXHJcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXHJcbiAgICBxdWVyeUVsZW1lbnRMb2FkZWQsXHJcbiAgICBxdWVyeUVsZW1lbnRVbmxvYWRlZCxcclxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxyXG4gICAgYWRkQ2xhc3MsXHJcbiAgICByZW1vdmVDbGFzc1xyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiZXhwb3J0ICogZnJvbSAnLi93YXRjaGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0IHsgZXZlbnRzLCBnZXRUYXJnZXQgfSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBXYXRjaGVyIH0gZnJvbSAnLi93YXRjaGVyJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yLCBBbmFseXNlciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2luZyA9IGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb3BDaGFuZ2luZyhhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9uUHJvcENoYW5nZWQgPSBhcmdzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdlZChhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5vbih0aGlzLm9uUHJvcENoYW5naW5nKTtcclxuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub24odGhpcy5vblByb3BDaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9wQ2hhbmdpbmcoYXJncykge1xyXG4gICAgICAgIHZhciB3YXRjaGVyID0gdGhpcy5nZXRXYXRjaGVyKHRoaXMudmFsaWRhdG9ycywgYXJncy50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAod2F0Y2hlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuZ2V0V2F0Y2hlcih0aGlzLmxpc3RlbmVycywgYXJncy50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAod2F0Y2hlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XHJcbiAgICAgICAgICAgIHdhdGNoZXIuZmlyZUtleSgnKicsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRXYXRjaGVyKHdhdGNoZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciwgZmlsdGVycyA9IHdhdGNoZXJzLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgd2F0Y2hlciA9IGZpbHRlcnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVXYXRjaGVyKHdhdGNoZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciA9IG5ldyBXYXRjaGVyKHRhcmdldCk7XHJcbiAgICAgICAgd2F0Y2hlcnMucHVzaCh3YXRjaGVyKTtcclxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPckNyZWF0ZVdhdGNoZXIod2F0Y2hlcnMsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciB3YXRjaGVyID0gdGhpcy5nZXRXYXRjaGVyKHdhdGNoZXJzLCB0YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAod2F0Y2hlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIgPSB0aGlzLmNyZWF0ZVdhdGNoZXIod2F0Y2hlcnMsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gd2F0Y2hlcjtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIHdhdGNoZXIgPSB0aGlzLmdldE9yQ3JlYXRlV2F0Y2hlcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xyXG5cclxuICAgICAgICB3YXRjaGVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2F0Y2hlci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuZ2V0T3JDcmVhdGVXYXRjaGVyKHRoaXMudmFsaWRhdG9ycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xyXG5cclxuICAgICAgICB3YXRjaGVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2F0Y2hlci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRXhwKHNjb3BlLCBleHAsIGhhbmRsZXIsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoZXhwLCBsb2NhbHMpO1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHNjb3BlLCB7fSwge1xyXG4gICAgICAgICAgICBhbGxvd051bGw6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMpIHtcclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihpdGVtLnVud2F0Y2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcclxuICAgICAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBldmFsdWF0b3IuZXZhbHVhdGUoa2V5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBzZWxmLndhdGNoKHRhcmdldCwga2V5LCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgYXJncy5kYXRhLm5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLmNhbGwodGhpcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogZXZhbHVhdG9yLmV2YWx1YXRlKGV4cClcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIHRhcmdldFtrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbmFseXNlci5hbmFseXNlKCk7XHJcbiAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoYW5hbHlzZXIuYWNjZXNzb3JzLCBzY29wZSk7XHJcbiAgICAgICAgbG9jYWxzICYmIHdhdGNoQWNjZXNzb3JzKGFuYWx5c2VyLmxvY2FsQWNjZXNzb3JzLCBsb2NhbHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGFuYWx5c2VyLmFjY2Vzc29ycyk7XHJcbiAgICAgICAgICAgIGxvY2FscyAmJiB1bndhdGNoQWNjZXNzb3JzKGFuYWx5c2VyLmxvY2FsQWNjZXNzb3JzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoQ29sbGVjdGlvbihzY29wZSwgZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioc2NvcGUsIHt9LCB7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgdmFyIHVud2F0Y2hFeHAgPSB0aGlzLndhdGNoRXhwKHNjb3BlLCBleHAsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9LCBsb2NhbHMpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoKGNvbGxlY3Rpb24sICcqJywgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9mZih0aGlzLm9uUHJvcENoYW5naW5nKTtcclxuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub2ZmKHRoaXMub25Qcm9wQ2hhbmdlZCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgV2F0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmtleXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIYW5kbGVycyhrZXkpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcbiAgICAgICAgLy8gaWRlbnRpZnkgdGV4dCBpcyBhIGV4cHJlc3Npb25cclxuICAgICAgICB0aGlzLmV4cHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlkZW50aXR5IGl0IGlzIGEgZXZlbnQgYmluZGluZ1xyXG4gICAgICAgIHRoaXMubWVzc2FnZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiB0cnVlLCBhc3NpZ24gdmFsdWUgdG8gZXhwcmVzc2lvblxyXG4gICAgICAgIHRoaXMuYXNzaWduZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcclxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZSgpIHtcclxuICAgICAgICBpZih0aGlzLm1lc3NhZ2VkIHx8IHRoaXMuYXNzaWduZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcclxuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGluaygpIHtcclxuICAgICAgICBpZih0aGlzLmFzc2lnbmVkIHx8IHRoaXMubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XHJcbiAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuJHBhdGNoKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubG9jYWxzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWVcclxuICAgIGNvbXB1dGUobG9jYWxzKSB7XHJcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zWzBdLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRleHQgKyAnIGlzIG5vdCB2YWxpZCBleHByZXNzaW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXHJcbiAgICBwYXRjaCgpIHtcclxuICAgICAgICBpZih0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWVcclxuICAgIGNvbXB1dGUoc2NvcGUsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHNjb3BlLCBsb2NhbHMpO1xyXG4gICAgICAgIHJldHVybiBldmFsdWF0b3IuZXZhbHVhdGUodGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGFzc2lnbihzY29wZSwgdmFsdWUsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHNjb3BlLCBsb2NhbHMsIHtcclxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3IodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC50b1Byb3h5KClba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZhbHVhdG9yLmFzc2lnbih0aGlzLnRleHQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwnO1xyXG5pbXBvcnQgeyBMb2NhbCB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcclxuXHJcbi8vIFdpbmRvdyBFdmVudHNcclxuLy8gY2FzZSAnb24tbG9hZCc6XHJcbi8vIGNhc2UgJ29uLXVubG9hZCc6XHJcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcclxuLy8gY2FzZSAnb24tY2hhbmdlJzpcclxuLy8gY2FzZSAnb24tc3VibWl0JzpcclxuLy8gY2FzZSAnb24tcmVzZXQnOlxyXG4vLyBjYXNlICdvbi1zZWxlY3QnOlxyXG4vLyBjYXNlICdvbi1ibHVyJzpcclxuLy8gY2FzZSAnb24tZm9jdXMnOlxyXG4vLyBJbWFnZSBFdmVudHNcclxuLy8gY2FzZSAnb24tYWJvcnQnOlxyXG4vLyBLZXlib2FyZCBFdmVudHNcclxuLy8gY2FzZSAnb24ta2V5ZG93bic6XHJcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcclxuLy8gY2FzZSAnb24ta2V5dXAnOlxyXG4vLyBNb3VzZSBFdmVudHNcclxuLy8gY2FzZSAnb24tY2xpY2snOlxyXG4vLyBjYXNlICdvbi1kYmxjbGljayc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XHJcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3V0JzpcclxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcclxuLy8gY2FzZSAnb24tbW91c2V1cCc6XHJcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xyXG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCaW5kaW5nKHRleHQpIHtcclxuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzKTtcclxuICAgICAgICB0aGlzLnNjb3BlLiQkYmluZGluZ3MucHVzaChiaW5kaW5nKTtcclxuICAgICAgICByZXR1cm4gYmluZGluZztcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIodHBsKSB7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICB0aGlzLnZub2RlcyA9IHBhcnNlVHBsKHRwbCk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHRoaXMudm5vZGVzKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcclxuICAgICAgICAvLyAgICAgZGlyZWN0aXZlLiRwcmVsaW5rKCk7XHJcbiAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgIHRoaXMubGlua05vZGVzKHRoaXMudm5vZGVzKS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZS4kcG9zdGxpbmsoKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGV4dCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0JztcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbW1lbnQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjY29tbWVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZU5vZGVzKHZub2Rlcykge1xyXG4gICAgICAgIHZub2Rlcy5mb3JFYWNoKHZub2RlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZSh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZU5vZGUodm5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZVRleHQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUNvbW1lbnQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlRWxtKHZub2RlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua05vZGVzKHZub2Rlcykge1xyXG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua05vZGUodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtOb2RlKHZub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVGV4dCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0NvbW1lbnQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubGlua0VsbSh2bm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZUVsbSh2ZWxtKSB7XHJcbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcclxuICAgICAgICB2YXIgY3VzdG9tTGlua2VyID0gdmVsbS52YXR0cnMuc29tZSh2YXR0ciA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaCh2YXR0ci5kYXRhLmRpcmVjdGl2ZSk7XHJcbiAgICAgICAgICAgICAgICB2ZWxtLmRhdGEubGlua2VyID0gdmF0dHIuZGF0YS5saW5rZXI7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVsbS5kYXRhLmxpbmtlciAhPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHNvcnQgZGlyZWN0aXZlIGFjY29yZGluZyB0byBpdHMgcHJpb3JpdHlcclxuICAgICAgICB1dGlscy5vcmRlckJ5KGRpcmVjdGl2ZXMsIGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZS4kcHJpb3JpdHk7XHJcbiAgICAgICAgfSkuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlbG0uZGF0YS5pc0NvbXBvbmVudCA9IHRoaXMuc2NvcGUuJGhhc0NvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKCF2ZWxtLmRhdGEuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZUF0dHIodmF0dHIpIHtcclxuICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodmF0dHIubm9kZVZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLm1lc3NhZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLm1lc3NhZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuZG9tTWVzc2FnZWQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIHZhdHRyLmRhdGEua2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuaXNEaXJlY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuZXhwcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLmRhdGEuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGUuJGhhc0RpcmVjdGl2ZSh2YXR0ci5kYXRhLmtleSkpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlID0gdGhpcy5zY29wZS4kbmV3RGlyZWN0aXZlKHZhdHRyLmRhdGEua2V5KTtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlLiQkdmF0dHIgPSB2YXR0cjtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5hc3NpZ25lZCA9IHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRhc3NpZ25lZDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kaXJlY3RpdmUuJGNvbXBpbGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEubGlua2VyID0gdmF0dHIuZGF0YS5kaXJlY3RpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIHZhdHRyLmRhdGEua2V5ICsgJyBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUuJGNoYW5nZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdmF0dHIuZGF0YS5tZXNzYWdlZCkge1xyXG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5rZXkuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgdmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLmNvbXBvbmVudC4kaGFzQXR0cmlidXRlKHZhdHRyLmRhdGEua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLmNvbXBvbmVudC4kc2V0QXR0cmlidXRlKHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIdG1sQXR0cih2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKHNldEh0bWxBdHRyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZ0ZXh0LnBhcmVudE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5wYXJlbnROb2RlLmVsbTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyLnJlcGxhY2VOb2RlKHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2dGV4dC5lbG0gPSBuZXdUZXh0Tm9kZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVDb21tZW50KHZjbW50KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtFbG0odmVsbSkge1xyXG4gICAgICAgIGlmICh2ZWxtLmRhdGEubGlua2VyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZlbG0uZGF0YS5saW5rZXIuJGxpbmsoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZlbG0uZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZWxtLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgaWYgKHZlbG0uZGF0YS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnNjb3BlLiRuZXdDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgICAgICB2ZWxtLmRhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHZlbG0uZWxtLnN0eWxlLmRpc3BsYXkgPSBpbnN0YW5jZS4kZGlzcGxheTtcclxuXHJcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS4kbW91bnQodmVsbS5lbG0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtBdHRyKHZhdHRyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICB2ZWxtLmVsbS5hcHBlbmRDaGlsZCh0aGlzLmxpbmtOb2RlKGNoaWxkKSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XHJcbiAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xyXG5cclxuICAgICAgICBpZiAodmF0dHIuZGF0YS5tZXNzYWdlZCkge1xyXG4gICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kb21NZXNzYWdlZCkge1xyXG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIodmF0dHIuZGF0YS5rZXksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IG5ldyBMb2NhbChlLCBlbG0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh2YXR0ci52ZWxtLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLmNvbXBvbmVudC4kYmluZCh2YXR0ci5kYXRhLmtleSwgZnVuY3Rpb24gKGUsIGFyZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBuZXcgTG9jYWwoZSwgZWxtLCBhcmcpXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmxpbmsoKTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnBhdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLmxpbmsoKTtcclxuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5kYXRhLmJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XHJcbiAgICB9XHJcblxyXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcclxuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWJ1aWxkZXInOyIsImV4cG9ydCAqIGZyb20gJy4vdm5vZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcclxuZXhwb3J0ICogZnJvbSAnLi92Y21udCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmVsbSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Z0eXBlJzsiLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZBdHRyIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICBzdXBlcihuYW1lLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIoJyNjb21tZW50JywgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcbmltcG9ydCB7IFZBdHRyIH0gZnJvbSAnLi92YXR0cic7XHJcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICBzdXBlcihuYW1lKTtcclxuICAgICAgICB0aGlzLnZhdHRycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQXR0cihhdHRyKSB7XHJcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcclxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0F0dHIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmF0dHJzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBdHRyKGtleSkge1xyXG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBdHRyKGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcclxuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgdGFyZ2V0LnZlbG0gPSB0aGlzO1xyXG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2godGFyZ2V0KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVBdHRyKGtleSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBWQXR0cikge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhdHRycy5pbmRleE9mKGtleSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYudmF0dHJzLmluZGV4T2YobWF0Y2gpO1xyXG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZEF0dHIoYXR0cikge1xyXG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XHJcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XHJcbiAgICAgICAgcmV0dXJuIGF0dHI7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcclxuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy52YXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YXR0cnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsIi8vIHZpcnR1YWwgbm9kZVxyXG5leHBvcnQgY2xhc3MgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuYnVpbGRTaWJsaW5nKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xyXG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XHJcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xyXG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBjbG9uZU5vZGUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaG9vcHNcclxuXHJcbiAgICAvLyBlbmQgb2YgaG9vcHNcclxufVxyXG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZUZXh0IGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcignI3RleHQnLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWVHlwZSBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IFRwbExleGVyIH0gZnJvbSAnLi90cGwtbGV4ZXInO1xyXG5pbXBvcnQgeyBUcGxQYXJzZXIgfSBmcm9tICcuL3RwbC1wYXJzZXInO1xyXG5cclxuZnVuY3Rpb24gbGV4VHBsKHRwbCkge1xyXG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xyXG4gICAgcmV0dXJuIG5ldyBUcGxMZXhlcigpLmxleCh0cGwpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZVRwbCh0cGwpIHtcclxuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcclxuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xyXG59XHJcblxyXG5leHBvcnQgeyBsZXhUcGwsIHBhcnNlVHBsIH07IiwiZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKHZub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVGV4dCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0JztcclxuICAgIH1cclxuXHJcbiAgICBpc0NvbW1lbnQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjY29tbWVudCc7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRFbGVtZW50KHZlbG0pIHtcclxuICAgICAgICB2YXIgYXR0clRwbCA9IHZlbG0udmF0dHJzLm1hcCgodmF0dHIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcclxuICAgICAgICAgICAgfSkuam9pbignICcpLFxyXG4gICAgICAgICAgICBjaGlsZFRwbCA9IHZlbG0uY2hpbGROb2Rlcy5tYXAoKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xyXG5cclxuICAgICAgICBpZihhdHRyVHBsKSB7XHJcbiAgICAgICAgICAgIGF0dHJUcGwgPSAnICcgKyBhdHRyVHBsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHZlbG0ubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XHJcblxyXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHZlbG0ubm9kZU5hbWUgKyAnPicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRwbDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEF0dHJpYnV0ZSh2YXR0cikge1xyXG4gICAgICAgIHJldHVybiB2YXR0ci5ub2RlTmFtZSArICh2YXR0ci5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHZhdHRyLnF1b3RlICsgdmF0dHIubm9kZVZhbHVlICsgdmF0dHIucXVvdGUpKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFRleHQodnRleHQpIHtcclxuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRwbExleGVyIGV4dGVuZHMgRXhwTGV4ZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcclxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcclxuICAgICAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcclxuICAgIH1cclxuXHJcbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcclxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgICAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcclxuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwgdGV4dFxyXG4gICAgcmVhZFRleHQoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbCB0YWdcclxuICAgIHJlYWRUYWcoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcclxuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxleCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgICAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7XHJcbiAgICBWRWxtLCBWQXR0ciwgVlRleHQsIFZDbW50LCBWVHlwZVxyXG59IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRwbFBhcnNlciBleHRlbmRzIEV4cFBhcnNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKGxleGVyLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZSh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XHJcbiAgICAgICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJvb3QuYnVpbGRTaWJsaW5nKCk7XHJcblxyXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdHlwZSgpIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB2YXIgZG9jVHlwZSA9IG5ldyBWVHlwZSgpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2NUeXBlO1xyXG4gICAgfVxyXG5cclxuICAgIGVsZW1lbnQocCkge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbGUucHVzaENoaWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XHJcbiAgICAgICAgdmFyIGVsZXMgPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYXR0cnMocCkge1xyXG4gICAgICAgIHZhciBhdHRycyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGF0dHIgPSBuZXcgVkF0dHIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYXR0cnM7XHJcbiAgICB9XHJcblxyXG4gICAgY3VycmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgIH1cclxufSIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxyXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxyXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XHJcblxyXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtpbmRleF0sIGluZGV4KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvcHkoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcclxuICAgICAgICBkZWVwID0gb2JqO1xyXG4gICAgICAgIG9iakluZGV4Kys7XHJcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xyXG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3QXJyID0gW107XHJcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGl0ZW0pIDogaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3QXJyO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xyXG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkodmFsdWUpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gbmV3T2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGV4dGVuZCgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcclxuICAgICAgICBkZWVwID0gdGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtZXJnZSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xyXG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGluZGV4Kys7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5cclxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9iamVjdChvKSB7XHJcbiAgICBmdW5jdGlvbiBGKCkge1xyXG4gICAgfVxyXG5cclxuICAgIEYucHJvdG90eXBlID0gbztcclxuICAgIHJldHVybiBuZXcgRigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcclxuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XHJcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcclxuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XHJcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTYW1lKG9iajEsIG9iajIpIHtcclxuICAgIHZhciBzYW1lID0gKG9iajEgPT09IG9iajIpO1xyXG5cclxuICAgIGlmICghc2FtZSkge1xyXG4gICAgICAgIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcclxuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XHJcbiAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2FtZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuICFpc09iamVjdCh2YWx1ZSkgfHwgIXNvbWUodmFsdWUsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBnZXR0ZXIpIHtcclxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcclxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcclxuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcclxuICAgIGlmIChhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0KCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcclxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuXHJcbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcclxuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcclxuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcclxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gam9pbihzZXBhcmF0b3IsIGFycikge1xyXG4gICAgdmFyIHJlc3VsdCA9ICcnLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG5cclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggKyAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZvckVhY2gsXHJcbiAgICBzb21lLFxyXG4gICAgY29weSxcclxuICAgIGV4dGVuZCxcclxuICAgIG1lcmdlLFxyXG4gICAgb2JqZWN0LFxyXG4gICAgaW5oZXJpdCxcclxuICAgIGxvd2VyY2FzZSxcclxuICAgIHVwcGVyY2FzZSxcclxuICAgIGlzVW5kZWZpbmVkLFxyXG4gICAgaXNEZWZpbmVkLFxyXG4gICAgaXNPYmplY3QsXHJcbiAgICBpc0JsYW5rT2JqZWN0LFxyXG4gICAgaXNOdW1iZXIsXHJcbiAgICBpc0RhdGUsXHJcbiAgICBpc0Z1bmN0aW9uLFxyXG4gICAgaXNSZWdFeHAsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0FycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc1NhbWUsXHJcbiAgICBpc0VtcHR5LFxyXG4gICAgaXNGb3JtRGF0YSxcclxuICAgIGRlYnVnLFxyXG4gICAgY29udGFpbnMsXHJcbiAgICBjb250YWluc1N0cixcclxuICAgIGhhc1Byb3BlcnR5LFxyXG4gICAgZ2V0UHJvcGVydHksXHJcbiAgICBzZXRQcm9wZXJ0eSxcclxuICAgIGNvbmNhdCxcclxuICAgIG9yZGVyQnksXHJcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcclxuICAgIHRvTnVtYmVyLFxyXG4gICAgcmVtb3ZlLFxyXG4gICAgZm9ybWF0LFxyXG4gICAgZXNjYXBlSHRtbCxcclxuICAgIGpvaW5cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgaXNNZXNzYWdlLCBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xyXG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLiQkZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XHJcbiAgICB0aGlzLiQkZnJhZ21lbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJGJpbmRpbmdzID0gW107XHJcbiAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xyXG4gICAgdGhpcy4kJGRpcmVjdGl2ZXMgPSBbXTtcclxuICAgIHRoaXMuJCRpbmplY3RvciA9IGluamVjdG9yO1xyXG4gICAgdGhpcy4kJHJlbmRlciA9IG5ldyBSZW5kZXIodGhpcyk7XHJcbiAgICB0aGlzLiQkb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIodGhpcyk7XHJcbiAgICB0aGlzLiQkZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih0aGlzKTtcclxuICAgIHRoaXMuJCRkZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy4kJGRvUGF0Y2gpO1xyXG4gICAgdGhpcy4kZGlzcGxheSA9ICdpbmhlcml0JztcclxuICAgIHRoaXMuJHNldERhdGEoZGF0YSk7XHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiQkZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0aGlzLCBkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRhdGEuY29uc3RydWN0KSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNDb21wb25lbnQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNDb21wb25lbnQoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNEaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNEaXJlY3RpdmUoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0RpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy4kJGluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0ZpbHRlcihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0ZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy4kJGluamVjdG9yLmNyZWF0ZUZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzQXR0cmlidXRlKGtleSkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGtleSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy50b1Byb3h5KCksIGtleSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYmluZChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBtZXNzYWdlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgKyAnIGlzIG5vdCBhIG1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVuYmluZChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgbWVzc2FnZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5vZmYoaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArICcgaXMgbm90IGEgbWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoRXhwKHRoaXMsIGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24odGhpcywgZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kJGRhdGE7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XHJcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLiQkZnJhZ21lbnQgPSB0aGlzLiQkcmVuZGVyLnJlbmRlcih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJCRmcmFnbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHVubW91bnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICRwYXRjaCgpIHtcclxuICAgICAgICB0aGlzLiQkZGVsYXllci5leGVjdXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgICQkZG9QYXRjaCgpIHtcclxuICAgICAgICB0aGlzLiQkYmluZGluZ3MuZm9yRWFjaChlID0+IHtcclxuICAgICAgICAgICAgZS5wYXRjaCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJCRkZWxheWVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLiQkb2JzZXJ2ZXIuZGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIGNoaWxkLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uJGRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmdzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmdzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZShzY29wZSkge1xyXG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcclxuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xyXG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcclxuICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIGFzc2lnbiB2YWx1ZSB0byBiaW5kaW5nIGV4cHJlc3Npb25cclxuICAgIHRoaXMuJGFzc2lnbmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xyXG4gICAgZ2V0ICRzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkZWxtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5lbG07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ICRjb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmRhdGEuY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkYmluZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLmRhdGEuYmluZGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZWF0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lYXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXHJcbiAgICAkY29tcGlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkNvbXBpbGUgJiYgdGhpcy5vbkNvbXBpbGUodGhpcy4kJHZhdHRyLnZlbG0sIHRoaXMuJCR2YXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcclxuICAgICRjaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uTGluayAmJiB0aGlzLm9uTGluayh0aGlzLiRzY29wZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVmb3JlIGxpbmtpbmdcclxuICAgIC8vICRwcmVsaW5rKCkge1xyXG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhZnRlciBsaW5raW5nXHJcbiAgICAkcG9zdGxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XHJcblxyXG52YXIgcGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xyXG5cclxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXHJcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5hbWUocm9sZUlkLCBrZXkpIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0ga2V5LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlKHJvbGVJZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbWV0YWRhdGEua2V5KSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG1ldGFkYXRhLmNvbnN0cnVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhZGF0YS5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBtZXRhZGF0YS5leHRlbmRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLm1ldGhvZHMpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGFkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VGaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGVsYXllcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5cclxuLy8gbWV0YWRhdGEgZXhhbXBsZVxyXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cclxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIocm9sZUlkLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcclxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gY29udGFpbmVyW2tleV0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyW2tleV0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBhbGlhcykge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NvbXBvbmVudChrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmNvbXBvbmVudCwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNGaWx0ZXIoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgdHJ1ZSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1NlcnZpY2Uoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5zZXJ2aWNlLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHRoaXMuY29udmVydEFsaWFzKGtleSwgYWxpYXMpLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBrZXkgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJvbGVJZCArICcgJyArIGtleSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZmlsdGVyLCBrZXksIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzcyBjb25zdHJ1Y3RvciBmb3Iga2V5ICcgKyBrZXlPckNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpcmVjdGl2ZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEFsaWFzKGtleSwgYWxpYXMpIHtcclxuICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KGFsaWFzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0ga2V5LnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBzZWdtZW50cy5wb3AoKSxcclxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xyXG5cclxuICAgICAgICB1dGlscy5zb21lKGFsaWFzLCBmdW5jdGlvbiAoc2hvcnROYW1lLCBmdWxsTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoc2hvcnROYW1lID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGZ1bGxOYW1lICsgJy4nICsgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUsIG1ldGFkYXRhLmFsaWFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTsiLCJleHBvcnQgdmFyIHJvbGVzID0ge1xyXG4gICAgZmlsdGVyOiAwLFxyXG4gICAgc2VydmljZTogMSxcclxuICAgIGNvbXBvbmVudDogMixcclxuICAgIGRpcmVjdGl2ZTogM1xyXG59OyIsImV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCAgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXHJcbnZhciBjb21wb25lbnRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xyXG5cclxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmRpcmVjdGl2ZUNsYXNzLnByb3RvdHlwZSA9IERpcmVjdGl2ZS5wcm90b3R5cGU7XHJcblxyXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcclxuXHJcbnZhciBzZXJ2aWNlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcclxuICAgIH07XHJcbn0pKCk7XHJcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcclxuLy8gZW5kIG9mIG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxyXG5cclxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgbWV0YWRhdGEpIHtcclxuICAgIG1ldGFkYXRhLmV4dGVuZHMgPSBjb21wb25lbnRDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGl2ZShrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gZGlyZWN0aXZlQ2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VEaXJlY3RpdmUobWV0YWRhdGEpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgbWV0YWRhdGEuZXh0ZW5kcyA9IGZpbHRlckNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKG1ldGFkYXRhKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gc2VydmljZUNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlU2VydmljZShtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3RvciwgbWV0YWRhdGEpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgYXBwID0gbmV3IENvbXBvbmVudCh1dGlscy5tZXJnZSh7XHJcbiAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXHJcbiAgICB9LCBtZXRhZGF0YSkpO1xyXG4gICAgaGVscGVyLmNsZWFyQ2hpbGROb2RlcyhlbGVtZW50KTtcclxuICAgIGFwcC4kcmVuZGVyKCk7XHJcbiAgICBhcHAuJG1vdW50KGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRmlsdGVyLFxyXG4gICAgU2VydmljZSxcclxuICAgIGlzQ29tcG9uZW50LFxyXG4gICAgaXNEaXJlY3RpdmUsXHJcbiAgICBpc0ZpbHRlcixcclxuICAgIGlzU2VydmljZSxcclxuICAgIG5hbWVzcGFjZSxcclxuICAgIGJvb3RzdHJhcCxcclxuICAgIGluamVjdG9yXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==