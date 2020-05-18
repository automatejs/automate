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
/*! exports provided: Local, Message, isMessage, MessageBus, events */
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
/* empty/unused harmony star reexport */





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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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




var ProxyHandler = /*#__PURE__*/function () {
  function ProxyHandler() {
    _classCallCheck(this, ProxyHandler);
  }

  _createClass(ProxyHandler, [{
    key: "set",
    value: function set(target, key, value) {
      var oldValue = target[key];

      if (oldValue !== value || _utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](target) && key === 'length') {
        var validation = {
          valid: true,
          apply: true,
          oldValue: oldValue,
          newValue: value
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
              newValue: value
            }
          });
        }
      }

      return true;
    }
  }]);

  return ProxyHandler;
}();

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
}(Agent);

var proxyHandler = new ProxyHandler();

Object.prototype.delegate = function (handler) {
  var proxy;

  if (_utils__WEBPACK_IMPORTED_MODULE_1__["isDefined"](Proxy)) {
    proxy = new Proxy(this, proxyHandler);
  } else {
    if (_utils__WEBPACK_IMPORTED_MODULE_1__["isArray"](this)) {
      proxy = new ArrayAgent(this);
    } else if (_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](this)) {
      proxy = new Agent(this);
    } else {
      proxy = this;
    }
  }

  if (handler) {
    handler.call(this, proxy);
  }

  return proxy;
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
/* empty/unused harmony star reexport */


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
      scope.$watchCollection(this.itemsExp, function () {
        fragment = _this2.render(scope);
        _helper__WEBPACK_IMPORTED_MODULE_5__["removeNodeBetween"](header, footer);
        footer.parentNode.insertBefore(fragment, footer);
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
    value: function onDestroy() {}
  }]);

  return RepeatDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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

      if (this.locals[identifier.name]) {
        return;
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

        if (this.assignInterceptor == null) {
          target[key] = value;
        } else {
          this.options.assignInterceptor.call(this, target, key);
        }
      } else if (assignment.type === _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier) {
        var key = this.evaluateNode(assignment);

        if (this.assignInterceptor == null) {
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, events, Watcher, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, TplBuilder, Binding, Expression, Render, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, component, directive, filter, service */
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
      var watcher = this.getOrCreateWatcher(this.listeners, target);
      watcher.registerKey(key, action);
      return function () {
        watcher.unregisterKey(key, action);
      };
    }
  }, {
    key: "validate",
    value: function validate(target, key, action) {
      var watcher = this.getOrCreateWatcher(this.validators, target);
      watcher.registerKey(key, action);
      return function () {
        watcher.unregisterKey(key, action);
      };
    }
  }, {
    key: "watchExp",
    value: function watchExp(scope, exp, handler) {
      var self = this;
      var analyser = new _exp__WEBPACK_IMPORTED_MODULE_3__["Analyser"](exp);
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
      return function () {
        unwatchAccessors(analyser.accessors);
      };
    }
  }, {
    key: "watchCollection",
    value: function watchCollection(scope, exp, handler) {
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
      });

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
      var exp = new _expression__WEBPACK_IMPORTED_MODULE_1__["Expression"](this.scope, text, this.locals);
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
        exp.watch(function () {
          _this.detect();

          _this.scope.$patch();
        });
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
      if (this.expressed) {
        return this.expressions[0].compute(locals);
      }

      return this.segments.reduce(function (prev, cur) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](cur)) {
          return prev + cur;
        } // it is a expression


        return prev + cur.compute(locals);
      }, '');
    } // set value

  }, {
    key: "assign",
    value: function assign(value, locals) {
      var evaluator = new Evaluator(this.scope, locals, {
        assignInterceptor: function assignInterceptor(target, key) {
          target.delegate(function (e) {
            e[key] = value;
          });
        }
      });
      evaluator.evaluate(this.text, value);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Expression = /*#__PURE__*/function () {
  function Expression(scope, text, locals) {
    _classCallCheck(this, Expression);

    this.scope = scope;
    this.text = text;
    this.locals = locals;
  }

  _createClass(Expression, [{
    key: "mergeLocals",
    value: function mergeLocals(locals) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({}, this.locals, locals);
    } // get value

  }, {
    key: "compute",
    value: function compute(locals) {
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, this.mergeLocals(locals));
      return evaluator.evaluate(this.text);
    } // set value

  }, {
    key: "assign",
    value: function assign(value, locals) {
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, this.mergeLocals(locals), {
        assignInterceptor: function assignInterceptor(target, key) {
          target.delegate(function (e) {
            e[key] = value;
          });
        }
      });
      evaluator.evaluate(this.text, value);
    }
  }, {
    key: "watch",
    value: function watch(handler) {
      return this.scope.$watchExp(this.text, handler);
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join */
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
  } else {
    action(obj, obj);
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
    return action(obj, obj);
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
  this.$display = 'block';
  this.$setData(data);
  _injector__WEBPACK_IMPORTED_MODULE_4__["injector"].injectServices(this);
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
        // create properties
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](data.construct)) {
          data.construct.call(this, _core__WEBPACK_IMPORTED_MODULE_1__["Message"]);
        } // create methods


        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](data.methods)) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](this, data.methods);
        }
      }

      this.$$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
    }
  }, {
    key: "$hasComponent",
    value: function $hasComponent(key) {
      return this.$$injector.hasComponent(key);
    }
  }, {
    key: "$newComponent",
    value: function $newComponent(key) {
      var child = this.$$injector.createComponent(key);
      child.$$parent = this;
      this.$$children.push(child);
      return child;
    }
  }, {
    key: "$hasDirective",
    value: function $hasDirective(key) {
      return this.$$injector.hasDirective(key);
    }
  }, {
    key: "$newDirective",
    value: function $newDirective(key) {
      var directive = this.$$injector.createDirective(key);
      directive.$$scope = this;
      this.$$directives.push(directive);
      return directive;
    }
  }, {
    key: "$hasFilter",
    value: function $hasFilter(key) {
      return this.$$injector.hasFilter(key);
    }
  }, {
    key: "$getFilter",
    value: function $getFilter(key) {
      return this.$$injector.createFilter(key);
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
        _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.delegate(), key, value, true);
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
    value: function $watch(key, action) {
      return this.$$observer.watch(this, key, action);
    }
  }, {
    key: "$validate",
    value: function $validate(key, action) {
      return this.$$observer.validate(this, key, action);
    }
  }, {
    key: "$watchExp",
    value: function $watchExp(exp, handler) {
      return this.$$observer.watchExp(this, exp, handler);
    }
  }, {
    key: "$watchCollection",
    value: function $watchCollection(exp, handler) {
      return this.$$observer.watchCollection(this, exp, handler);
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
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector */
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
    value: function has(roleId, key, ignoreCase) {
      var constructors,
          container = this.getClassContainer(roleId);
      var segments = key.split('.');
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
    value: function hasComponent(key) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, true);
    }
  }, {
    key: "hasDirective",
    value: function hasDirective(key) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, true);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter(key) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, true);
    }
  }, {
    key: "hasService",
    value: function hasService(key) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, true);
    }
  }, {
    key: "get",
    value: function get(roleId, key, ignoreCase) {
      var constructors,
          container = this.getClassContainer(roleId);
      var segments = key.split('.');
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
    value: function getComponent(key) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key);
    }
  }, {
    key: "getDirective",
    value: function getDirective(key) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key);
    }
  }, {
    key: "getFilter",
    value: function getFilter(key) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key);
    }
  }, {
    key: "getService",
    value: function getService(key) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key);
    }
  }, {
    key: "create",
    value: function create(roleId, keyOrConstructor) {
      var constructor;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        constructor = this.get(roleId, keyOrConstructor);

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
    value: function createComponent(keyOrConstructor) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, keyOrConstructor);
    }
  }, {
    key: "createDirective",
    value: function createDirective(keyOrConstructor) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, keyOrConstructor);
    }
  }, {
    key: "createFilter",
    value: function createFilter(keyOrConstructor) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getFilter(keyOrConstructor);
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
    value: function createService(keyOrConstructor) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getService(keyOrConstructor);
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
    key: "injectServices",
    value: function injectServices(instance) {
      var self = this,
          metadata = instance.$$metadata;

      if (metadata && _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](metadata.inject)) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](metadata.inject, function (value, key) {
          Object.defineProperty(instance, key, {
            enumerable: false,
            configurable: false,
            get: function get() {
              var privateKey = '$$' + key;

              if (instance[privateKey] == null) {
                instance[privateKey] = self.createService(value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvcmVwZWF0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2hlbHBlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9vYnNlcnZlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci93YXRjaGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9iaW5kaW5nLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvcmVuZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbImV2ZW50cyIsInByb3BDaGFuZ2luZyIsIk1lc3NhZ2UiLCJwcm9wQ2hhbmdlZCIsIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiZm4iLCJnZXQiLCJvbiIsIm9mZiIsImFyZ3MiLCJzY29wZSIsImZpcmUiLCJoYW5kbGVycyIsInB1c2giLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwicmV0dXJuVmFsdWUiLCJ1dGlscyIsImNhbGwiLCJpc01lc3NhZ2UiLCJvYmoiLCJQcm94eUhhbmRsZXIiLCJ0YXJnZXQiLCJrZXkiLCJ2YWx1ZSIsIm9sZFZhbHVlIiwidmFsaWRhdGlvbiIsInZhbGlkIiwiYXBwbHkiLCJuZXdWYWx1ZSIsImRhdGEiLCJBZ2VudCIsImhhbmRsZXIiLCJzZXQiLCJBcnJheUFnZW50IiwiQXJyYXkiLCJwcm90b3R5cGUiLCJzbGljZSIsImFyZ3VtZW50cyIsImNvbmNhdCIsImpvaW4iLCJyZXN1bHQiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiY29weSIsInJldmVyc2UiLCJ1bmRlZmluZWQiLCJzb3J0IiwicHJveHlIYW5kbGVyIiwiT2JqZWN0IiwiZGVsZWdhdGUiLCJwcm94eSIsIlByb3h5IiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJuYW1lIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsIiRlbG0iLCJpbm5lclRleHQiLCJEaXJlY3RpdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJ2ZWxtIiwidmF0dHIiLCJub2RlVmFsdWUiLCJwYXR0ZXJuIiwiZXhlYyIsIkVycm9yIiwiYnVpbGRlciIsIlRwbEJ1aWxkZXIiLCJyZW1vdmVBdHRyIiwiYnVpbGQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImhlYWRlciIsImNyZWF0ZUNvbW1lbnQiLCJmb290ZXIiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIiR3YXRjaENvbGxlY3Rpb24iLCJoZWxwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwic2VsZiIsIml0ZW1zIiwiJGV2YWwiLCJsb2NhbHMiLCJSZW5kZXIiLCJpdGVtQ29udGVudCIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInByb2dyYW0iLCJFeHBCdWlsZGVyIiwiYWNjZXNzb3JzIiwicGFyc2VFeHAiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsIm9wdGlvbnMiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsImV2YWx1YXRlTm9kZSIsIiRudWxsIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCIkaGFzRmlsdGVyIiwiJGdldEZpbHRlciIsImV4ZWN1dGUiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJwYXJzZSIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInNoaWZ0IiwicHJvcHMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpbmRleE9mIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInF1b3RlIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiZXNjYXBlIiwiaGV4IiwibWF0Y2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIkVTQ0FQRSIsIm9wZXJhdG9yVGV4dCIsInNwbGl0IiwibGV4ZXIiLCJtc2ciLCJQcm9ncmFtTm9kZSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsImZpbHRlckNoYWluIiwiYXN0IiwidGVybmFyeSIsImlzQXNzaWduYWJsZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEFORCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImxpdGVyYWxzIiwiaGFzT3duUHJvcGVydHkiLCJMaXRlcmFsTm9kZSIsIm5leHQiLCJwZWVrQWhlYWQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJwYXJzZUFyZ3VtZW50cyIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsImdldENoaWxkTm9kZXMiLCJjbGVhckNoaWxkTm9kZXMiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VOb2RlIiwicmVmTm9kZSIsIm5ld05vZGUiLCJyZW1vdmVOb2RlIiwicmVtb3ZlTm9kZUJldHdlZW4iLCJiZWdpbk5vZGUiLCJlbmROb2RlIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJpbnNlcnROb2RlQWZ0ZXIiLCJsYXN0Q2hpbGQiLCJxdWVyeUVsZW1lbnRMb2FkZWQiLCJlbGUiLCJjYWxsYmFjayIsImNhbmNlbFRva2VuIiwicXVlcnkiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInF1ZXJ5RWxlbWVudFVubG9hZGVkIiwicXVlcnlFbGVtZW50U3RhdGUiLCJjYWxsYmFja3MiLCJsb2FkZWQiLCJvbkVudGVyIiwib25MZWF2ZSIsImFkZENsYXNzIiwiZWwiLCJjbHMiLCJ0cmltIiwiY2xhc3NMaXN0IiwiYyIsImFkZCIsImN1ciIsImdldEF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwicmVtb3ZlQXR0cmlidXRlIiwidGFyIiwicmVwbGFjZSIsIk9ic2VydmVyIiwib25Qcm9wQ2hhbmdpbmciLCJoYW5kbGVQcm9wQ2hhbmdpbmciLCJvblByb3BDaGFuZ2VkIiwiaGFuZGxlUHJvcENoYW5nZWQiLCJsaXN0ZW5lcnMiLCJ2YWxpZGF0b3JzIiwiaW5pdCIsIndhdGNoZXIiLCJnZXRXYXRjaGVyIiwiZmlyZUtleSIsIndhdGNoZXJzIiwiZmlsdGVycyIsIldhdGNoZXIiLCJjcmVhdGVXYXRjaGVyIiwiYWN0aW9uIiwiZ2V0T3JDcmVhdGVXYXRjaGVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiYW5hbHlzZXIiLCJldmFsdWF0b3IiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwiZXZhbHVhdGUiLCJ3YXRjaCIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwid2F0Y2hFeHAiLCJjb2xsZWN0aW9uIiwia2V5cyIsImdldEhhbmRsZXJzIiwiQmluZGluZyIsImV4cHJlc3NlZCIsIm1lc3NhZ2VkIiwiYXNzaWduZWQiLCJhdXRvbWF0aW9uIiwiY2hhbmdlZCIsInNlZ21lbnRzIiwiZXhwcmVzc2lvbnMiLCJFeHByZXNzaW9uIiwiY3JlYXRlRXhwcmVzc2lvbiIsImxhc3RJbmRleCIsInNlZ21lbnQiLCJkZXRlY3QiLCIkcGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsIm1lcmdlTG9jYWxzIiwiJHdhdGNoRXhwIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwidm5vZGVzIiwiZGlyZWN0aXZlcyIsImJpbmRpbmciLCIkJGJpbmRpbmdzIiwidHBsIiwicGFyc2VUcGwiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsIm5vZGVOYW1lIiwiY29tcGlsZU5vZGUiLCJpc1RleHQiLCJjb21waWxlVGV4dCIsImlzQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJpc0NvbXBvbmVudCIsIiRoYXNDb21wb25lbnQiLCJjcmVhdGVCaW5kaW5nIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImRvbU1lc3NhZ2VkIiwiaXNEaXJlY3RpdmUiLCIkaGFzRGlyZWN0aXZlIiwiJG5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWduZWQiLCIkY29tcGlsZSIsInJlZ2lzdGVyQXV0b21hdGlvbiIsIiRjaGFuZ2UiLCJzZXRIdG1sQXR0ciIsIiRoYXNBdHRyaWJ1dGUiLCIkc2V0QXR0cmlidXRlIiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5zdGFuY2UiLCIkbmV3Q29tcG9uZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwiJGRpc3BsYXkiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRyZW5kZXIiLCIkbW91bnQiLCJhZGRFdmVudExpc3RlbmVyIiwiJGJpbmQiLCJsaW5rIiwicGF0Y2giLCJWQXR0ciIsIlZOb2RlIiwiVkNtbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImNvbXBpbGVPcHRpb25zIiwiZGVzdHJveSIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImJ1aWxkVGV4dCIsImJ1aWxkQ29tbWVudCIsImJ1aWxkRWxlbWVudCIsImF0dHJUcGwiLCJidWlsZEF0dHJpYnV0ZSIsImNoaWxkVHBsIiwic3RyIiwiYmVnaW4iLCJleHBlY3RTdHJpbmciLCJjb21tZW50IiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZWxlbWVudCIsImRvY1R5cGUiLCJhdHRycyIsInAiLCJwdXNoQXR0ciIsImNoaWxkRWxlbWVudHMiLCJwdXNoQ2hpbGQiLCJlbGVzIiwib3JpZ2luIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImlzQXJyYXkiLCJpc09iamVjdCIsImRlZXAiLCJvYmpJbmRleCIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGRhdGEiLCIkJGZyYWdtZW50IiwiJCRwYXJlbnQiLCIkJGNoaWxkcmVuIiwiJCRkaXJlY3RpdmVzIiwiJCRpbmplY3RvciIsIiQkcmVuZGVyIiwiJCRvYnNlcnZlciIsIiQkZXZhbHVhdG9yIiwiJCRkZWxheWVyIiwiRGVsYXllciIsIiQkZG9QYXRjaCIsIiRzZXREYXRhIiwiaW5qZWN0U2VydmljZXMiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3QiLCJtZXRob2RzIiwiJCRtZXRhZGF0YSIsImhhc0NvbXBvbmVudCIsImNyZWF0ZUNvbXBvbmVudCIsImhhc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJoYXNGaWx0ZXIiLCJjcmVhdGVGaWx0ZXIiLCJtZXNzYWdlIiwiZXZlbnQiLCJ2YWxpZGF0ZSIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlIiwidGVtcGxhdGVJZCIsImdldEVsZW1lbnRCeUlkIiwiaW5uZXJIVE1MIiwiJGdldFRlbXBsYXRlIiwic2VsZWN0b3JPckVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGRlc3Ryb3kiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJkaXJlY3RpdmVDb25zdHJ1Y3RvciIsIm1lYXRhZGF0YSIsIm9uQ29tcGlsZSIsIm9uQ2hhbmdlIiwib25MaW5rIiwiJHNjb3BlIiwiYWZ0ZXJMaW5rIiwiRmFjdG9yeSIsInJvbGVJZCIsIm5ld05hbWUiLCJyb2xlcyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsImZpbHRlckNvbnN0cnVjdG9yIiwiRmlsdGVyIiwiSW5qZWN0b3IiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsInBvcCIsIm1ldGEiLCJoYXMiLCJuYW1lc3BhY2VzIiwia2V5T3JDb25zdHJ1Y3RvciIsImNyZWF0ZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiZ2V0RmlsdGVyIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImluamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaXZhdGVLZXkiLCJjcmVhdGVTZXJ2aWNlIiwic2VydmljZUNvbnN0cnVjdG9yIiwiU2VydmljZSIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsInNlcnZpY2VDbGFzcyIsIm1ha2VDb21wb25lbnQiLCJtYWtlRGlyZWN0aXZlIiwibWFrZUZpbHRlciIsIm1ha2VTZXJ2aWNlIiwiaXNGaWx0ZXIiLCJpc1NlcnZpY2UiLCJib290c3RyYXAiLCJzZWxlY3RvciIsImFwcCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFJQSxNQUFNLEdBQUc7QUFDaEJDLGNBQVksRUFBRSxJQUFJQyxnREFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUcsUUFBYjtBQUNJLHNCQUFjO0FBQUE7O0FBQUE7O0FBQ1YsU0FBS0MsY0FBTCxHQUFzQixVQUFBMVcsSUFBSSxFQUFJO0FBQzFCLFdBQUksQ0FBQzJXLGtCQUFMLENBQXdCM1csSUFBeEI7QUFDSCxLQUZEOztBQUlBLFNBQUs0VyxhQUFMLEdBQXFCLFVBQUE1VyxJQUFJ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QUE4QjBoQixXQUE5QixFQUEyQzFmLFFBQTNDO0FBQ0EsU0FBTzBmLFdBQVA7QUFDSDs7QUFFRCxTQUFTL0csV0FBVCxDQUFxQndCLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWXVKLG9EQUEzQjtBQUNIOztBQUVELFNBQVN6SyxXQUFULENBQXFCa0IsUUFBckIsRUFBK0I7QUFDM0IsU0FBT0EsUUFBUSxZQUFZclosb0RBQTNCO0FBQ0g7O0FBRUQsU0FBUzJuQixRQUFULENBQWtCdE8sUUFBbEIsRUFBNEI7QUFDeEIsU0FBT0EsUUFBUSxZQUFZb00sOENBQTNCO0FBQ0g7O0FBRUQsU0FBU21DLFNBQVQsQ0FBbUJ2TyxRQUFuQixFQUE2QjtBQUN6QixTQUFPQSxRQUFRLFlBQVk2TixnREFBM0I7QUFDSDs7QUFFRCxTQUFTVyxTQUFULENBQW1CQyxRQUFuQixFQUE2QjVvQixRQUE3QixFQUF1QztBQUNuQyxNQUFJNGQsT0FBTyxHQUFHOWIsUUFBUSxDQUFDaWpCLGFBQVQsQ0FBdUI2RCxRQUF2QixDQUFkO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLElBQUluRixvREFBSixDQUFjaG1CLDRDQUFBLENBQVk7QUFDaEMrbUIsWUFBUSxFQUFFN0csT0FBTyxDQUFDZ0g7QUFEYyxHQUFaLEVBRXJCNWtCLFFBRnFCLENBQWQsQ0FBVjtBQUdBc0MseURBQUEsQ0FBdUJzYixPQUF2QjtBQUNBaUwsS0FBRyxDQUFDbk8sT0FBSjtBQUNBbU8sS0FBRyxDQUFDbE8sTUFBSixDQUFXaUQsT0FBWDtBQUNIIiwiZmlsZSI6ImF1dG9tYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcclxuICAgIHByb3BDaGFuZ2luZzogbmV3IE1lc3NhZ2UoKSxcclxuICAgIHByb3BDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS1idXMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V2ZW50cyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcHJveHknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihlLCBlbG0sIGFyZykge1xyXG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcclxuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZWxtO1xyXG4gICAgICAgIHRoaXMuJGFyZ3VtZW50ID0gYXJnO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZXNbZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tlXSA9IG5ldyBNZXNzYWdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW2VdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGUsIGZuKSB7XHJcbiAgICAgICAgdGhpcy5nZXQoZSkub24oZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9mZihmbik7XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShlLCBhcmdzLCBzY29wZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihmbikge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGZuKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZShhcmdzLCBzY29wZSkge1xyXG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcclxuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHRoaXMuaGFuZGxlcnNbaV0uY2FsbChzY29wZSwgYXJncyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2FnZTtcclxufVxyXG5cclxuZXhwb3J0IHsgaXNNZXNzYWdlIH0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmNsYXNzIFByb3h5SGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUgfHwgKHV0aWxzLmlzQXJyYXkodGFyZ2V0KSAmJiBrZXkgPT09ICdsZW5ndGgnKSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFnZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwga2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFycmF5QWdlbnQgZXh0ZW5kcyBBZ2VudCB7XHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxlbmd0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgc3VwZXIodGFyZ2V0LCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBqb2luKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmpvaW4uYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0LCBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxlbmd0aC0tO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPj0gMCApe1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGxlbmd0aCArIGluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZW5ndGggKz0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgaWYodGhpcy50YXJnZXQubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICBjb3B5LnJldmVyc2UoKTtcclxuICAgICAgICBjb3B5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgaWYoaXRlbSAhPT0gdGhpcy50YXJnZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50YXJnZXRbbGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDE7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4IC0gMSwgdGhpcy50YXJnZXRbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2xpY2UoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29ydC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsaWNlKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjb3B5LCBhcmdzKTtcclxuXHJcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgIGlmKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBpbmRleCwgdGhpcy50YXJnZXRbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihjb3B5Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBjb3B5Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG52YXIgcHJveHlIYW5kbGVyID0gbmV3IFByb3h5SGFuZGxlcigpO1xyXG5cclxuT2JqZWN0LnByb3RvdHlwZS5kZWxlZ2F0ZSA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcclxuICAgIHZhciBwcm94eTtcclxuXHJcbiAgICBpZih1dGlscy5pc0RlZmluZWQoUHJveHkpKSB7XHJcbiAgICAgICAgcHJveHkgPSBuZXcgUHJveHkodGhpcywgcHJveHlIYW5kbGVyKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGlmKHV0aWxzLmlzQXJyYXkodGhpcykpIHtcclxuICAgICAgICAgICAgcHJveHkgPSBuZXcgQXJyYXlBZ2VudCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih1dGlscy5pc09iamVjdCh0aGlzKSkge1xyXG4gICAgICAgICAgICBwcm94eSA9IG5ldyBBZ2VudCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHByb3h5ID0gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoaGFuZGxlcikge1xyXG4gICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCBwcm94eSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3h5O1xyXG59OyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tYmluZCdcclxufSlcclxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kZWxtLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnOyIsImltcG9ydCB7IERpcmVjdGl2ZSwgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IFRwbEJ1aWxkZXIgfSBmcm9tICcuLi90cGwnO1xyXG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXJlcGVhdCdcclxufSlcclxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XHJcbiAgICAgICAgdmFyIGFyZyA9IHZhdHRyLm5vZGVWYWx1ZTtcclxuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbS1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcclxuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xyXG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IFRwbEJ1aWxkZXIoKTtcclxuICAgICAgICB2ZWxtLnJlbW92ZUF0dHIodmF0dHIpO1xyXG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gYnVpbGRlci5idWlsZCh2ZWxtKTtcclxuXHJcbiAgICAgICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgdGFrZSBvdmVyIGxpbmsgZnVuY3Rpb24gZm9yIHJlbGF0ZWQgdmlydHVhbCBlbGVtZW50IG5vZGUsIG9uTGluayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTGluayhzY29wZSkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG0tcmVwZWF0Jyk7XHJcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbS1yZXBlYXQnKTtcclxuXHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcihzY29wZSkpO1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XHJcblxyXG4gICAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xyXG4gICAgICAgICAgICBmcmFnbWVudCA9IHRoaXMucmVuZGVyKHNjb3BlKTtcclxuICAgICAgICAgICAgaGVscGVyLnJlbW92ZU5vZGVCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcclxuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24oaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcclxuICAgICAgICAgICAgbG9jYWxzWycka2V5J10gPSBrZXk7XHJcbiAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XHJcbiAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcclxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IG5ldyBSZW5kZXIoc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtQ29udGVudCA9IHJlbmRlci5yZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtQ29udGVudCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuL2V4cC1hcGknO1xyXG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XHJcblxyXG5jbGFzcyBBY2Nlc3NvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGV4cCkge1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xyXG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDaGlsZChrZXksIGNhbGxlZSwgZXhwKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmFseXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihleHAsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcclxuICAgICAgICB0aGlzLmFjY2Vzc29ycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3JzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcnNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHBhcnNlRXhwKHRoaXMuZXhwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xyXG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXJnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoIWNhbGwuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2FsbC5jYWxsZWUsIHsgY2FsbGVlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWVtYmVyLnByb3BlcnR5LnR5cGUgPT09IEFTVC5MaXRlcmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKG1lbWJlci5wcm9wZXJ0eS52YWx1ZSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcclxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaWRlbnRpZmllciksXHJcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTGl0ZXJhbChsaXRlcmFsLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChsaXRlcmFsKTtcclxuXHJcbiAgICAgICAgaWYoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZVByb3BlcnR5KHByb3ApIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHByb3AudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcclxuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzIHx8IHt9O1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2Uoe1xyXG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxyXG4gICAgZXZhbHVhdGUoZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcGFyc2VFeHAoZXhwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuJG51bGwpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cclxuICAgIGFzc2lnbihleHAsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcGFyc2VFeHAoZXhwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnByb2dyYW0uY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IGV4cHJlc3Npb24uY2hpbGROb2Rlc1swXTtcclxuXHJcbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcclxuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQub2JqZWN0KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5vYmplY3QpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZihrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQucHJvcGVydHkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldC5vYmosIHRhcmdldC5wcm9wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xyXG5cclxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciByZXN1bHQsXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcclxuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNjb3BlLiRoYXNGaWx0ZXIoY29udGV4dC5wcm9wKSl7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyLmV4ZWN1dGUuYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXHJcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXHJcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldDtcclxuICAgICAgICBcclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcclxuXHJcbiAgICAgICAgaWYoY29udGV4dC50YXJnZXROb2RlID09IG51bGwpe1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMubG9jYWxzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcclxuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xyXG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xyXG5cclxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xyXG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcclxuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xyXG59XHJcblxyXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZChub2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyB1dGlscy5qb2luKCc6JywgYXJnVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcclxuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcclxuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgdXRpbHMuam9pbignLCAnLCBwcm9wcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIHV0aWxzLmpvaW4oJywnLCBpdGVtcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxleCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaXMoY2gsIGNoYXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKGkpIHtcclxuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVtYmVyKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xyXG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcclxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2RlUG9pbnRBdChjaCkge1xyXG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla011bHRpY2hhcigpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkTnVtYmVyKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZElkZW50KCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcclxuXHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pOyIsImltcG9ydCB7XHJcbiAgICBBU1QsXHJcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcclxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcclxuICAgIElkZW50aWZpZXJOb2RlLFxyXG4gICAgTGl0ZXJhbE5vZGUsXHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgUHJvZ3JhbU5vZGUsXHJcbiAgICBQcm9wZXJ0eU5vZGUsXHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxyXG59IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcclxuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcclxuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZSh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZ3JhbSgpIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcclxuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICByZXR1cm4gZXhwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckNoYWluKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcclxuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWdubWVudCgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXJuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxPUigpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxBTkQoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsaXR5KCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXRpb25hbCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRpdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHVuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbWFyeSgpIHtcclxuICAgICAgICB2YXIgcHJpbWFyeTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmV4dDtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcclxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgICAgIH0pLmpvaW4oJy4nKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcigpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcclxuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0YW50KCkge1xyXG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdCgpIHtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWUoZTEpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XHJcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XHJcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xyXG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcclxuQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uID0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJztcclxuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xyXG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xyXG5BU1QuQmluYXJ5RXhwcmVzc2lvbiA9ICdCaW5hcnlFeHByZXNzaW9uJztcclxuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xyXG5BU1QuTWVtYmVyRXhwcmVzc2lvbiA9ICdNZW1iZXJFeHByZXNzaW9uJztcclxuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XHJcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xyXG5BU1QuQXJyYXlFeHByZXNzaW9uID0gJ0FycmF5RXhwcmVzc2lvbic7XHJcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XHJcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiRudWxsID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcclxuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XHJcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2FzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2JpbmFyeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9sb2dpY2FsJztcclxuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcclxuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAgJy4vcHJvZ3JhbSc7XHJcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcclxuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2FycmF5JzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXRlcmFsTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xyXG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgICAgICB0aGlzLmtleSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xyXG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcclxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcclxuICAgIGxpdGVyYWxzOiB7XHJcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxyXG4gICAgICAgIG51bGw6IG51bGwsXHJcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcclxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59OyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRVbmxvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xyXG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2UsIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xyXG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FbnRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25MZWF2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uTGVhdmUuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xyXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XHJcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XHJcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcclxuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcclxuICAgICAgICBpZiAoY3VyKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDaGlsZE5vZGVzLFxyXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxyXG4gICAgcmVwbGFjZU5vZGUsXHJcbiAgICByZW1vdmVOb2RlLFxyXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXHJcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXHJcbiAgICBxdWVyeUVsZW1lbnRMb2FkZWQsXHJcbiAgICBxdWVyeUVsZW1lbnRVbmxvYWRlZCxcclxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxyXG4gICAgYWRkQ2xhc3MsXHJcbiAgICByZW1vdmVDbGFzc1xyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiZXhwb3J0ICogZnJvbSAnLi93YXRjaGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XHJcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25Qcm9wQ2hhbmdpbmcgPSBhcmdzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdpbmcoYXJncyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2VkID0gYXJncyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvcENoYW5nZWQoYXJncyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcub24odGhpcy5vblByb3BDaGFuZ2luZyk7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9uKHRoaXMub25Qcm9wQ2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvcENoYW5naW5nKGFyZ3MpIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuZ2V0V2F0Y2hlcih0aGlzLnZhbGlkYXRvcnMsIGFyZ3MudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHdhdGNoZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXRjaGVyLmZpcmVLZXkoYXJncy5rZXksIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9wQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgdmFyIHdhdGNoZXIgPSB0aGlzLmdldFdhdGNoZXIodGhpcy5saXN0ZW5lcnMsIGFyZ3MudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHdhdGNoZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXRjaGVyLmZpcmVLZXkoYXJncy5rZXksIGFyZ3MpO1xyXG4gICAgICAgICAgICB3YXRjaGVyLmZpcmVLZXkoJyonLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0V2F0Y2hlcih3YXRjaGVycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHdhdGNoZXIsIGZpbHRlcnMgPSB3YXRjaGVycy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHdhdGNoZXIgPSBmaWx0ZXJzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlV2F0Y2hlcih3YXRjaGVycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIHdhdGNoZXIgPSBuZXcgV2F0Y2hlcih0YXJnZXQpO1xyXG4gICAgICAgIHdhdGNoZXJzLnB1c2god2F0Y2hlcik7XHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JDcmVhdGVXYXRjaGVyKHdhdGNoZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgd2F0Y2hlciA9IHRoaXMuZ2V0V2F0Y2hlcih3YXRjaGVycywgdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKHdhdGNoZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3YXRjaGVyID0gdGhpcy5jcmVhdGVXYXRjaGVyKHdhdGNoZXJzLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHdhdGNoZXI7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2godGFyZ2V0LCBrZXksIGFjdGlvbikge1xyXG4gICAgICAgIHZhciB3YXRjaGVyID0gdGhpcy5nZXRPckNyZWF0ZVdhdGNoZXIodGhpcy5saXN0ZW5lcnMsIHRhcmdldCk7XHJcblxyXG4gICAgICAgIHdhdGNoZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB3YXRjaGVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUodGFyZ2V0LCBrZXksIGFjdGlvbikge1xyXG4gICAgICAgIHZhciB3YXRjaGVyID0gdGhpcy5nZXRPckNyZWF0ZVdhdGNoZXIodGhpcy52YWxpZGF0b3JzLCB0YXJnZXQpO1xyXG5cclxuICAgICAgICB3YXRjaGVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgd2F0Y2hlci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoRXhwKHNjb3BlLCBleHAsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFuYWx5c2VyID0gbmV3IEFuYWx5c2VyKGV4cCk7XHJcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioc2NvcGUsIHt9LCB7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmV4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2godGFyZ2V0LCBrZXksIGZ1bmN0aW9uIChhcmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdGFyZ2V0W2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFuYWx5c2VyLmFuYWx5c2UoKTtcclxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhbmFseXNlci5hY2Nlc3NvcnMsIHNjb3BlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhbmFseXNlci5hY2Nlc3NvcnMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hDb2xsZWN0aW9uKHNjb3BlLCBleHAsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioc2NvcGUsIHt9LCB7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgdmFyIHVud2F0Y2hFeHAgPSB0aGlzLndhdGNoRXhwKHNjb3BlLCBleHAsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hQcm9wcygpIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaChjb2xsZWN0aW9uLCAnKicsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bndhdGNoRXhwLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5vZmYodGhpcy5vblByb3BDaGFuZ2luZyk7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9mZih0aGlzLm9uUHJvcENoYW5nZWQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFdhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleXNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcclxuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG5cclxuICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlS2V5KGtleSwgYXJncywgc2VsZikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcclxuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xyXG4gICAgICAgIC8vIGlkZW50aWZ5IHRleHQgaXMgYSBleHByZXNzaW9uXHJcbiAgICAgICAgdGhpcy5leHByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZGVudGl0eSBpdCBpcyBhIGV2ZW50IGJpbmRpbmdcclxuICAgICAgICB0aGlzLm1lc3NhZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYXNzaWduIHZhbHVlIHRvIGV4cHJlc3Npb25cclxuICAgICAgICB0aGlzLmFzc2lnbmVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXHJcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5wdXNoKGV4cCk7XHJcbiAgICAgICAgcmV0dXJuIGV4cDtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlKCkge1xyXG4gICAgICAgIGlmKHRoaXMubWVzc2FnZWQgfHwgdGhpcy5hc3NpZ25lZCkge1xyXG4gICAgICAgICAgICB0aGlzLmV4cHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5leHByZXNzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzaW9uKHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xyXG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50LCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmRleCA+IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rKCkge1xyXG4gICAgICAgIGlmKHRoaXMuYXNzaWduZWQgfHwgdGhpcy5tZXNzYWdlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRldGVjdCgpO1xyXG5cclxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcclxuICAgICAgICAgICBleHAud2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGUuJHBhdGNoKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZVxyXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcclxuICAgICAgICBpZih0aGlzLmV4cHJlc3NlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKGxvY2Fscyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xyXG4gICAgICAgICAgICBpZih1dGlscy5pc1N0cmluZyhjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cclxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXIuY29tcHV0ZShsb2NhbHMpO1xyXG4gICAgICAgIH0sICcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgbG9jYWxzLCB7XHJcbiAgICAgICAgICAgIGFzc2lnbkludGVyY2VwdG9yOiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxlZ2F0ZShlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZhbHVhdG9yLmV2YWx1YXRlKHRoaXMudGV4dCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXHJcbiAgICBwYXRjaCgpIHtcclxuICAgICAgICBpZih0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcclxuICAgIH1cclxuXHJcbiAgICBtZXJnZUxvY2Fscyhsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe30sIHRoaXMubG9jYWxzLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZVxyXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcclxuICAgICAgICB2YXIgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB0aGlzLm1lcmdlTG9jYWxzKGxvY2FscykpO1xyXG4gICAgICAgIHJldHVybiBldmFsdWF0b3IuZXZhbHVhdGUodGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgdGhpcy5tZXJnZUxvY2Fscyhsb2NhbHMpLCB7XHJcbiAgICAgICAgICAgIGFzc2lnbkludGVyY2VwdG9yOiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC5kZWxlZ2F0ZShlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZhbHVhdG9yLmV2YWx1YXRlKHRoaXMudGV4dCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kd2F0Y2hFeHAodGhpcy50ZXh0LCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxuLy8gV2luZG93IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1sb2FkJzpcclxuLy8gY2FzZSAnb24tdW5sb2FkJzpcclxuLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxyXG4vLyBjYXNlICdvbi1zdWJtaXQnOlxyXG4vLyBjYXNlICdvbi1yZXNldCc6XHJcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XHJcbi8vIGNhc2UgJ29uLWJsdXInOlxyXG4vLyBjYXNlICdvbi1mb2N1cyc6XHJcbi8vIEltYWdlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1hYm9ydCc6XHJcbi8vIEtleWJvYXJkIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcclxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxyXG4vLyBjYXNlICdvbi1rZXl1cCc6XHJcbi8vIE1vdXNlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jbGljayc6XHJcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcclxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcclxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcclxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxyXG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcclxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XHJcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcclxuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJpbmRpbmcodGV4dCkge1xyXG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5zY29wZSwgdGV4dCwgdGhpcy5sb2NhbHMpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUuJCRiaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgICAgIHJldHVybiBiaW5kaW5nO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0cGwpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMudm5vZGVzID0gcGFyc2VUcGwodHBsKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52bm9kZXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xyXG4gICAgICAgIC8vICAgICBkaXJlY3RpdmUuJHByZWxpbmsoKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52bm9kZXMpLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRwb3N0bGluaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUZXh0KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyNjb21tZW50JztcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlTm9kZXModm5vZGVzKSB7XHJcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2RlKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKXtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlQ29tbWVudCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVFbG0odm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rTm9kZSh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua05vZGUodm5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlRWxtKHZlbG0pIHtcclxuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHZhciBjdXN0b21MaW5rZXIgPSB2ZWxtLnZhdHRycy5zb21lKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlQXR0cih2YXR0cik7XHJcblxyXG4gICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kaXJlY3RpdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHZhdHRyLmRhdGEuZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIHZlbG0uZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmxpbmtlcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyICE9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxyXG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlLiRwcmlvcml0eTtcclxuICAgICAgICB9KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlcy5wdXNoKGRpcmVjdGl2ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgICAgIGlmIChjdXN0b21MaW5rZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmVsbS5kYXRhLmlzQ29tcG9uZW50ID0gdGhpcy5zY29wZS4kaGFzQ29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIXZlbG0uZGF0YS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2ZWxtLmNoaWxkTm9kZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlQXR0cih2YXR0cikge1xyXG4gICAgICAgIHZhdHRyLmRhdGEuYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh2YXR0ci5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEubWVzc2FnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubWVzc2FnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5kb21NZXNzYWdlZCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdmF0dHIuZGF0YS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRGlyZWN0aXZlKHZhdHRyLmRhdGEua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUgPSB0aGlzLnNjb3BlLiRuZXdEaXJlY3RpdmUodmF0dHIuZGF0YS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmFzc2lnbmVkID0gdmF0dHIuZGF0YS5kaXJlY3RpdmUuJGFzc2lnbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmRpcmVjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdmF0dHIuZGF0YS5rZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRIdG1sQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmtleS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkoZWxtLCB2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0uY29tcG9uZW50LiRoYXNBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhdHRyLnZlbG0uY29tcG9uZW50LiRzZXRBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVUZXh0KHZ0ZXh0KSB7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5lbG0ucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChuZXdUZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXIucmVwbGFjZU5vZGUodnRleHQuZWxtLCBuZXdUZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5jb21waWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGlua0VsbSh2ZWxtKSB7XHJcbiAgICAgICAgaWYgKHZlbG0uZGF0YS5saW5rZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmVsbS5kYXRhLmxpbmtlci4kbGluaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuc2NvcGUuJG5ld0NvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHZlbG0uZGF0YS5jb21wb25lbnQgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgdmVsbS5lbG0uc3R5bGUuZGlzcGxheSA9IGluc3RhbmNlLiRkaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtBdHRyKHZhdHRyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS4kJHZlbG0gPSB2ZWxtO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCh2ZWxtLmVsbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua0F0dHIodmF0dHIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVsbS5lbG07XHJcbiAgICB9XHJcblxyXG4gICAgbGlua0F0dHIodmF0dHIpIHtcclxuICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRvbU1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcih2YXR0ci5kYXRhLmtleSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsczogbmV3IExvY2FsKGUsIGVsbSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLnZlbG0uY29tcG9uZW50LiRiaW5kKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSwgYXJnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IG5ldyBMb2NhbChlLCBlbG0sIGFyZylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubGluaygpO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucGF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RleHQodnRleHQpIHtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcubGluaygpO1xyXG4gICAgICAgIHZ0ZXh0LmVsbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZ0ZXh0LmRhdGEuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHZjbW50Lm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmF0dHInO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcclxuZXhwb3J0ICogZnJvbSAnLi92dGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVkF0dHIgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnZlbG0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcignI2NvbW1lbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcclxuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwtYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hBdHRyKGF0dHIpIHtcclxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQXR0cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHIoa2V5KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0YXJnZXQudmVsbSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUF0dHIoa2V5KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIFZBdHRyKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XHJcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcclxuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcclxuICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElubmVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xyXG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59IiwiLy8gdmlydHVhbCBub2RlXHJcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkU2libGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmQ2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lTm9kZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBob29wc1xyXG5cclxuICAgIC8vIGVuZCBvZiBob29wc1xyXG59XHJcbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCcjdGV4dCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XHJcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XHJcblxyXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XHJcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XHJcbiAgICByZXR1cm4gbmV3IFRwbExleGVyKCkubGV4KHRwbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVHBsKHRwbCkge1xyXG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xyXG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwgfTsiLCJleHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQodm5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVGV4dCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUZXh0KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyNjb21tZW50JztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEVsZW1lbnQodmVsbSkge1xyXG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcgJyksXHJcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfSkuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcclxuICAgICAgICAgICAgYXR0clRwbCA9ICcgJyArIGF0dHJUcGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdmVsbS5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcclxuXHJcbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcclxuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdmVsbS5ub2RlTmFtZSArICc+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXR0cmlidXRlKHZhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xyXG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xyXG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XHJcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbCB0ZXh0XHJcbiAgICByZWFkVGV4dCgpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIHRhZ1xyXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV4KHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcclxuaW1wb3J0IHtcclxuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXHJcbn0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlKHRleHQpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcclxuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcclxuICAgIH1cclxuXHJcbiAgICBkb2N0eXBlKCkge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudChwKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcclxuICAgICAgICB2YXIgZWxlcyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlcztcclxuICAgIH1cclxuXHJcbiAgICBhdHRycyhwKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhdHRycztcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG59IiwidmFyIGRlYnVnTW9kZSA9IHRydWUsXHJcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXHJcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuXHJcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24sIGlnbm9yZU93bikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW2luZGV4XSwgaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW3BdLCBwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGFjdGlvbihvYmosIG9iaik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcclxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gYWN0aW9uKG9iaiwgb2JqKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xyXG4gICAgICAgIGRlZXAgPSBvYmo7XHJcbiAgICAgICAgb2JqSW5kZXgrKztcclxuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XHJcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcclxuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XHJcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xyXG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XHJcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcclxuICAgIGZ1bmN0aW9uIEYoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgRi5wcm90b3R5cGUgPSBvO1xyXG4gICAgcmV0dXJuIG5ldyBGKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xyXG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcclxuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xyXG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcclxuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xyXG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XHJcblxyXG4gICAgaWYgKCFzYW1lKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcclxuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcclxuICAgIGlmIChkZWJ1Z01vZGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xyXG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcclxuXHJcbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xyXG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcclxuICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghaGFzUHJvcCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29uY2F0KCkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBnZXR0ZXIpIHtcclxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcclxuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcclxuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcclxuICAgIGlmIChhcnIubGVuZ3RoKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0KCkge1xyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcclxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuXHJcbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcclxuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcclxuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xyXG5cclxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcclxuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcclxufVxyXG5cclxuZnVuY3Rpb24gam9pbihzZXBhcmF0b3IsIGFycikge1xyXG4gICAgdmFyIHJlc3VsdCA9ICcnLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xyXG5cclxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgIHJlc3VsdCArPSBpdGVtO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggKyAxIDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGZvckVhY2gsXHJcbiAgICBzb21lLFxyXG4gICAgY29weSxcclxuICAgIGV4dGVuZCxcclxuICAgIG1lcmdlLFxyXG4gICAgb2JqZWN0LFxyXG4gICAgaW5oZXJpdCxcclxuICAgIGxvd2VyY2FzZSxcclxuICAgIHVwcGVyY2FzZSxcclxuICAgIGlzVW5kZWZpbmVkLFxyXG4gICAgaXNEZWZpbmVkLFxyXG4gICAgaXNPYmplY3QsXHJcbiAgICBpc0JsYW5rT2JqZWN0LFxyXG4gICAgaXNOdW1iZXIsXHJcbiAgICBpc0RhdGUsXHJcbiAgICBpc0Z1bmN0aW9uLFxyXG4gICAgaXNSZWdFeHAsXHJcbiAgICBpc0Jvb2xlYW4sXHJcbiAgICBpc0FycmF5LFxyXG4gICAgaXNTdHJpbmcsXHJcbiAgICBpc1NhbWUsXHJcbiAgICBpc0Zvcm1EYXRhLFxyXG4gICAgZGVidWcsXHJcbiAgICBjb250YWlucyxcclxuICAgIGNvbnRhaW5zU3RyLFxyXG4gICAgaGFzUHJvcGVydHksXHJcbiAgICBnZXRQcm9wZXJ0eSxcclxuICAgIHNldFByb3BlcnR5LFxyXG4gICAgY29uY2F0LFxyXG4gICAgb3JkZXJCeSxcclxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxyXG4gICAgdG9OdW1iZXIsXHJcbiAgICByZW1vdmUsXHJcbiAgICBmb3JtYXQsXHJcbiAgICBlc2NhcGVIdG1sLFxyXG4gICAgam9pblxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBpc01lc3NhZ2UsIE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XHJcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCB7IERlbGF5ZXIgfSBmcm9tICcuL2RlbGF5ZXInO1xyXG5pbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi9leHAnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgIHRoaXMuJCRkYXRhID0gbnVsbDtcclxuICAgIHRoaXMuJCR2ZWxtID0gbnVsbDtcclxuICAgIHRoaXMuJCRmcmFnbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkYmluZGluZ3MgPSBbXTtcclxuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XHJcbiAgICB0aGlzLiQkZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgdGhpcy4kJGluamVjdG9yID0gaW5qZWN0b3I7XHJcbiAgICB0aGlzLiQkcmVuZGVyID0gbmV3IFJlbmRlcih0aGlzKTtcclxuICAgIHRoaXMuJCRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0aGlzKTtcclxuICAgIHRoaXMuJCRldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMpO1xyXG4gICAgdGhpcy4kJGRlbGF5ZXIgPSBuZXcgRGVsYXllcih0aGlzLiQkZG9QYXRjaCk7XHJcbiAgICB0aGlzLiRkaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIHRoaXMuJHNldERhdGEoZGF0YSk7XHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihkYXRhLmNvbnN0cnVjdCkpIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0aGlzLCBkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0NvbXBvbmVudChrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgICRuZXdDb21wb25lbnQoa2V5KSB7XHJcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy4kJGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChrZXkpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNEaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNEaXJlY3RpdmUoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAkbmV3RGlyZWN0aXZlKGtleSkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGtleSk7XHJcbiAgICAgICAgZGlyZWN0aXZlLiQkc2NvcGUgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKTtcclxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNGaWx0ZXIoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNGaWx0ZXIoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy4kJGluamVjdG9yLmNyZWF0ZUZpbHRlcihrZXkpO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNBdHRyaWJ1dGUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIGtleSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywga2V5LCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmRlbGVnYXRlKCksIGtleSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYmluZChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBtZXNzYWdlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgKyAnIGlzIG5vdCBhIG1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVuYmluZChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgbWVzc2FnZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5vZmYoaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArICcgaXMgbm90IGEgbWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goa2V5LCBhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKHRoaXMsIGtleSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAkdmFsaWRhdGUoa2V5LCBhY3Rpb24pIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLnZhbGlkYXRlKHRoaXMsIGtleSwgYWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2hFeHAoZXhwLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaEV4cCh0aGlzLCBleHAsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24odGhpcywgZXhwLCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICAkZXZhbChleHApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGV2YWx1YXRvci5ldmFsdWF0ZShleHApO1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRUZW1wbGF0ZSgpIHtcclxuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJCRkYXRhO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGEudGVtcGxhdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZUlkKSkge1xyXG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuJGdldFRlbXBsYXRlKCk7XHJcbiAgICAgICAgdGhpcy4kJGZyYWdtZW50ID0gdGhpcy4kJHJlbmRlci5yZW5kZXIodGVtcGxhdGUpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgJG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiQkZnJhZ21lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgICR1bm1vdW50KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAkcGF0Y2goKSB7XHJcbiAgICAgICAgdGhpcy4kJGRlbGF5ZXIuZXhlY3V0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAkJGRvUGF0Y2goKSB7XHJcbiAgICAgICAgdGhpcy4kJGJpbmRpbmdzLmZvckVhY2goZSA9PiB7XHJcbiAgICAgICAgICAgIGUucGF0Y2goKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLiQkZGVsYXllci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuJCRiaW5kaW5ncy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuJCRiaW5kaW5ncy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcclxuICAgICAgICBpZih0aGlzLmRlbGF5SWQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSk7XHJcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheUlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcclxuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XHJcbiAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCBhc3NpZ24gdmFsdWUgdG8gYmluZGluZyBleHByZXNzaW9uXHJcbiAgICB0aGlzLiRhc3NpZ25lZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcclxuICAgIGdldCAkc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJGVsbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkYmluZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLmRhdGEuYmluZGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZWF0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lYXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXHJcbiAgICAkY29tcGlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkNvbXBpbGUgJiYgdGhpcy5vbkNvbXBpbGUodGhpcy4kJHZhdHRyLnZlbG0sIHRoaXMuJCR2YXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcclxuICAgICRjaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uTGluayAmJiB0aGlzLm9uTGluayh0aGlzLiRzY29wZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVmb3JlIGxpbmtpbmdcclxuICAgIC8vICRwcmVsaW5rKCkge1xyXG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhZnRlciBsaW5raW5nXHJcbiAgICAkcG9zdGxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XHJcblxyXG52YXIgcGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xyXG5cclxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXHJcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5hbWUocm9sZUlkLCBrZXkpIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0ga2V5LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlKHJvbGVJZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbWV0YWRhdGEua2V5KSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG1ldGFkYXRhLmNvbnN0cnVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhZGF0YS5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBtZXRhZGF0YS5leHRlbmRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLm1ldGhvZHMpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGFkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VGaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5cclxuLy8gbWV0YWRhdGEgZXhhbXBsZVxyXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cclxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIocm9sZUlkLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcclxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gY29udGFpbmVyW2tleV0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyW2tleV0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0RpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0ZpbHRlcihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1NlcnZpY2Uoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyb2xlSWQgKyAnICcgKyBrZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsga2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGlyZWN0aXZlKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5maWx0ZXIsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGUocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzcyBjb25zdHJ1Y3RvciBmb3Iga2V5ICcgKyBrZXlPckNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuY29tcG9uZW50LCBrZXlPckNvbnN0cnVjdG9yKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLmZpbHRlcik7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoa2V5T3JDb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgIHZhciBpbnN0YW5jZSwgY29udGFpbmVyID0gdGhpcy5nZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlcy5zZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtleU9yQ29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBtZXRhZGF0YSA9IGluc3RhbmNlLiQkbWV0YWRhdGE7XHJcblxyXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImV4cG9ydCB2YXIgcm9sZXMgPSB7XHJcbiAgICBmaWx0ZXI6IDAsXHJcbiAgICBzZXJ2aWNlOiAxLFxyXG4gICAgY29tcG9uZW50OiAyLFxyXG4gICAgZGlyZWN0aXZlOiAzXHJcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsICBjb21wb25lbnRDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29tcG9uZW50JztcclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBkaXJlY3RpdmVDb25zdHJ1Y3RvciB9IGZyb20gJy4vZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcclxuaW1wb3J0IHsgU2VydmljZSwgc2VydmljZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9zZXJ2aWNlJztcclxuaW1wb3J0IHsgZmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XHJcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG4vLyBzdGFydCBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cclxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBDb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmNvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XHJcblxyXG52YXIgZGlyZWN0aXZlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIERpcmVjdGl2ZShtZXRhZGF0YSkge1xyXG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcclxuXHJcbnZhciBmaWx0ZXJDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5maWx0ZXJDbGFzcy5wcm90b3R5cGUgPSBGaWx0ZXIucHJvdG90eXBlO1xyXG5cclxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gU2VydmljZShtZXRhZGF0YSkge1xyXG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKVxyXG4gICAgfTtcclxufSkoKTtcclxuc2VydmljZUNsYXNzLnByb3RvdHlwZSA9IFNlcnZpY2UucHJvdG90eXBlO1xyXG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXHJcblxyXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBjb21wb25lbnQ6IGZ1bmN0aW9uIChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShrZXksIG1ldGFkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbHRlcjogZnVuY3Rpb24gKGtleSwgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIG1ldGFkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wb25lbnQoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgbWV0YWRhdGEuZXh0ZW5kcyA9IGNvbXBvbmVudENsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KG1ldGFkYXRhKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgbWV0YWRhdGEpIHtcclxuICAgIG1ldGFkYXRhLmV4dGVuZHMgPSBkaXJlY3RpdmVDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbHRlcihrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gZmlsdGVyQ2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VGaWx0ZXIobWV0YWRhdGEpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXJ2aWNlKGtleSwgbWV0YWRhdGEpIHtcclxuICAgIG1ldGFkYXRhLmV4dGVuZHMgPSBzZXJ2aWNlQ2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKG1ldGFkYXRhKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQ29tcG9uZW50KGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBEaXJlY3RpdmU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRmlsdGVyKGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBGaWx0ZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2VydmljZShpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYm9vdHN0cmFwKHNlbGVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcclxuICAgIHZhciBhcHAgPSBuZXcgQ29tcG9uZW50KHV0aWxzLm1lcmdlKHtcclxuICAgICAgICB0ZW1wbGF0ZTogZWxlbWVudC5pbm5lckhUTUxcclxuICAgIH0sIG1ldGFkYXRhKSk7XHJcbiAgICBoZWxwZXIuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xyXG4gICAgYXBwLiRyZW5kZXIoKTtcclxuICAgIGFwcC4kbW91bnQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBGaWx0ZXIsXHJcbiAgICBTZXJ2aWNlLFxyXG4gICAgaXNDb21wb25lbnQsXHJcbiAgICBpc0RpcmVjdGl2ZSxcclxuICAgIGlzRmlsdGVyLFxyXG4gICAgaXNTZXJ2aWNlLFxyXG4gICAgbmFtZXNwYWNlLFxyXG4gICAgYm9vdHN0cmFwLFxyXG4gICAgaW5qZWN0b3JcclxufTsiXSwic291cmNlUm9vdCI6IiJ9