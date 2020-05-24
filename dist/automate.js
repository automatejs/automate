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

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: Local, Message, isMessage, MessageBus */
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


var MessageBus =
/*#__PURE__*/
function () {
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


var Message =
/*#__PURE__*/
function () {
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
    target.prototype.$$metadata = metadata;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerComponent(key, target);
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
    target.prototype.$$metadata = metadata;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerDirective(key, target);
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
    target.prototype.$$metadata = metadata;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerFilter(key, target);
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
    target.prototype.$$metadata = metadata;
    _view__WEBPACK_IMPORTED_MODULE_0__["injector"].registerService(key, target);
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
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
/*! exports provided: ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bind__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bind */ "./src/directive/bind.js");
/* empty/unused harmony star reexport *//* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./repeat */ "./src/directive/repeat.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/directive/model.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hide */ "./src/directive/hide.js");
/* empty/unused harmony star reexport *//* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./show */ "./src/directive/show.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style */ "./src/directive/style/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_6__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_6__["StyleDirective"]; });









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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
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
        var fragment = _this2.render(scope);

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CheckedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-checked'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var DisabledDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-disabled'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ReadonlyDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-readonly'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SelectedDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  selector: 'm-selected'
}), _dec(_class =
/*#__PURE__*/
function (_StateDirective) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var StateDirective =
/*#__PURE__*/
function (_Directive) {
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

/***/ "./src/directive/style/class-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/class-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ClassEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-class-even'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassEvenDirective, _ClassDirective);

  function ClassEvenDirective() {
    _classCallCheck(this, ClassEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassEvenDirective).call(this));
  }

  _createClass(ClassEvenDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$evaluator.evaluate('$index');
      return index & 1 === 1;
    }
  }]);

  return ClassEvenDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/class-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ClassOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  selector: 'm-class-odd'
}), _dec(_class =
/*#__PURE__*/
function (_ClassDirective) {
  _inherits(ClassOddDirective, _ClassDirective);

  function ClassOddDirective() {
    _classCallCheck(this, ClassOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassOddDirective).call(this));
  }

  _createClass(ClassOddDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$evaluator.evaluate('$index');
      return ndex & 1 === 0;
    }
  }]);

  return ClassOddDirective;
}(_class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/class.js":
/*!**************************************!*\
  !*** ./src/directive/style/class.js ***!
  \**************************************/
/*! exports provided: ClassDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return ClassDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ClassDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-class'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(ClassDirective, _Directive);

  function ClassDirective() {
    var _this;

    _classCallCheck(this, ClassDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ClassDirective).call(this));
    _this.valueText = null;
    return _this;
  }

  _createClass(ClassDirective, [{
    key: "onCompile",
    value: function onCompile(velm, vattr) {
      this.valueText = vattr.nodeValue;
      return true;
    }
  }, {
    key: "onLink",
    value: function onLink(scope) {
      var _this2 = this;

      if (this.skipCurrentElm()) {
        return;
      }

      scope.$watchCollection(this.valueText, function (args) {
        _this2.setElmClass(args.newValue);
      });
      this.setElmClass(scope.$eval(this.valueText));
    }
  }, {
    key: "setElmClass",
    value: function setElmClass(value) {
      if (_utils__WEBPACK_IMPORTED_MODULE_2__["isArray"](value)) {
        value = value.join(' ');
      } else if (!_utils__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        throw new Error('directive "m-class" should bind string or array');
      }

      this.$elm["class"] = value;
    }
  }, {
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      return false;
    }
  }]);

  return ClassDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/style/index.js":
/*!**************************************!*\
  !*** ./src/directive/style/index.js ***!
  \**************************************/
/*! exports provided: ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class */ "./src/directive/style/class.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _class__WEBPACK_IMPORTED_MODULE_0__["ClassDirective"]; });

/* harmony import */ var _class_even__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-even */ "./src/directive/style/class-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _class_odd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class-odd */ "./src/directive/style/class-odd.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_3__["StyleDirective"]; });

/* harmony import */ var _style_even__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style-even */ "./src/directive/style/style-even.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style_odd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style-odd */ "./src/directive/style/style-odd.js");
/* empty/unused harmony star reexport */






/***/ }),

/***/ "./src/directive/style/style-even.js":
/*!*******************************************!*\
  !*** ./src/directive/style/style-even.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyleEvenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-style-even'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleEvenDirective, _StyleDirective);

  function StyleEvenDirective() {
    _classCallCheck(this, StyleEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleEvenDirective).call(this));
  }

  _createClass(StyleEvenDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$evaluator.evaluate('$index');
      return index & 1 === 1;
    }
  }]);

  return StyleEvenDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style-odd.js":
/*!******************************************!*\
  !*** ./src/directive/style/style-odd.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ "./src/directive/style/style.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StyleOddDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  selector: 'm-style-odd'
}), _dec(_class =
/*#__PURE__*/
function (_StyleDirective) {
  _inherits(StyleOddDirective, _StyleDirective);

  function StyleOddDirective() {
    _classCallCheck(this, StyleOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleOddDirective).call(this));
  }

  _createClass(StyleOddDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$evaluator.evaluate('$index');
      return index & 1 === 0;
    }
  }]);

  return StyleOddDirective;
}(_style__WEBPACK_IMPORTED_MODULE_0__["StyleDirective"])) || _class);

/***/ }),

/***/ "./src/directive/style/style.js":
/*!**************************************!*\
  !*** ./src/directive/style/style.js ***!
  \**************************************/
/*! exports provided: StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return StyleDirective; });
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils.js");
var _dec, _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var StyleDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  selector: 'm-style'
}), _dec(_class =
/*#__PURE__*/
function (_Directive) {
  _inherits(StyleDirective, _Directive);

  function StyleDirective() {
    var _this;

    _classCallCheck(this, StyleDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this));
    _this.valueText = null;
    return _this;
  }

  _createClass(StyleDirective, [{
    key: "onCompile",
    value: function onCompile(velm, vattr) {
      this.valueText = vattr.nodeValue;
      return true;
    }
  }, {
    key: "onLink",
    value: function onLink(scope) {
      var _this2 = this;

      if (this.skipCurrentElm()) {
        return;
      }

      scope.$watchCollection(this.valueText, function (args) {
        _this2.setElmStyle(args.newValue);
      });
      this.setElmStyle(scope.$eval(this.valueText));
    }
  }, {
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      return false;
    }
  }, {
    key: "setElmStyle",
    value: function setElmStyle(value) {
      // clean up style
      this.$elm.style = ''; // set new style

      if (_utils__WEBPACK_IMPORTED_MODULE_2__["isString"](value)) {
        this.$elm.style = value;
      } else if (_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"](value)) {
        _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](value, function (value, key) {
          element.style[key] = value;
        });
      } else {
        throw new Error('Parameter of n-style should be string or object');
      }
    }
  }]);

  return StyleDirective;
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






var Accessor =
/*#__PURE__*/
function () {
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

var Analyser =
/*#__PURE__*/
function () {
  function Analyser() {
    _classCallCheck(this, Analyser);

    this.program = null;
    this.accessor = {};
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]();
    this.buffer = {};
  }

  _createClass(Analyser, [{
    key: "createAccessor",
    value: function createAccessor(key, callee, exp) {
      if (!this.accessor[key]) {
        this.accessor[key] = new Accessor(callee, exp);
      }

      return this.accessor[key];
    }
  }, {
    key: "parse",
    value: function parse(exp) {
      var program = this.buffer[exp];

      if (!program) {
        program = Object(_exp_api__WEBPACK_IMPORTED_MODULE_2__["parseExp"])(exp);
        this.buffer[exp] = program;
      }

      return program;
    }
  }, {
    key: "analyse",
    value: function analyse(exp) {
      return this.analyseProgram(this.parse(exp));
    }
  }, {
    key: "analyseProgram",
    value: function analyseProgram(program) {
      var _this = this;

      this.accessor = {};
      this.program = program;
      program.childNodes.forEach(function (child) {
        _this.analyseNode(child);
      });
      return this.accessor;
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





var Evaluator =
/*#__PURE__*/
function () {
  function Evaluator(scope, options) {
    _classCallCheck(this, Evaluator);

    this.locals = null;
    this.program = null;
    this.scope = scope;
    this.options = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
      allowNull: false,
      assignInterceptor: null
    }, options);
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]();
    this.buffer = {};
  }

  _createClass(Evaluator, [{
    key: "parse",
    value: function parse(exp) {
      var program = this.buffer[exp];

      if (!program) {
        program = Object(_exp_api__WEBPACK_IMPORTED_MODULE_2__["parseExp"])(exp);
        this.buffer[exp] = program;
      }

      return program;
    } // get value from expression

  }, {
    key: "evaluate",
    value: function evaluate(exp, locals) {
      return this.evaluateProgram(this.parse(exp), locals);
    }
  }, {
    key: "evaluateProgram",
    value: function evaluateProgram(program, locals) {
      var _this = this;

      var result;
      this.program = program;
      this.locals = locals;
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
    value: function assign(exp, value, locals) {
      return this.assignProgram(this.parse(exp), value, locals);
    }
  }, {
    key: "assignProgram",
    value: function assignProgram(program, value, locals) {
      this.program = program;
      this.locals = locals;

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
          this.options.assignInterceptor.call(this, target, key, value);
        }
      } else if (assignment.type === _model__WEBPACK_IMPORTED_MODULE_1__["AST"].Identifier) {
        var key = this.builder.build(assignment);

        if (this.options.assignInterceptor == null) {
          this.scope[key] = value;
        } else {
          this.options.assignInterceptor.call(this, this.scope, key, value);
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
        this.options.assignInterceptor.call(this, target.obj, target.prop, value);
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



var ExpBuilder =
/*#__PURE__*/
function () {
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




var ExpLexer =
/*#__PURE__*/
function () {
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





var ExpParser =
/*#__PURE__*/
function () {
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
/*! exports provided: parseOptions, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode */
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ArrayExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var AssignmentExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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

var AstNode =
/*#__PURE__*/
function () {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var BinaryExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var CallExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ConditionalExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ExpressionStatementNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IdentifierNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LiteralNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LogicalExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var MemberExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ObjectExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ProgramNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var PropertyNode =
/*#__PURE__*/
function (_AstNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var UnaryExpressionNode =
/*#__PURE__*/
function (_AstNode) {
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, Observer, parseOptions, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, lexTpl, parseTpl, TplBuilder, Binding, Expression, Render, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, component, directive, filter, service, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, VNode, VAttr, VCmnt, VElm, VText, VType, ClassDirective, StyleDirective */
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

/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./observer */ "./src/observer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"]; });

/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp */ "./src/exp/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseOptions", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["parseOptions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpLexer", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpLexer"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpParser", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpParser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["lexExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseExp", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["parseExp"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExpBuilder", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Evaluator", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["Evaluator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Analyser", function() { return _exp__WEBPACK_IMPORTED_MODULE_3__["Analyser"]; });

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

/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tpl */ "./src/tpl/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["lexTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["parseTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["TplBuilder"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VCmnt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VType"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_8__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_8__["StyleDirective"]; });











/***/ }),

/***/ "./src/observer/delayer.js":
/*!*********************************!*\
  !*** ./src/observer/delayer.js ***!
  \*********************************/
/*! exports provided: Delayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delayer", function() { return Delayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Delayer =
/*#__PURE__*/
function () {
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

/***/ "./src/observer/events.js":
/*!********************************!*\
  !*** ./src/observer/events.js ***!
  \********************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/core/index.js");

var events = {
  propChanging: new _core__WEBPACK_IMPORTED_MODULE_0__["Message"](),
  propChanged: new _core__WEBPACK_IMPORTED_MODULE_0__["Message"]()
};

/***/ }),

/***/ "./src/observer/index.js":
/*!*******************************!*\
  !*** ./src/observer/index.js ***!
  \*******************************/
/*! exports provided: Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ "./src/observer/observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Observer", function() { return _observer__WEBPACK_IMPORTED_MODULE_0__["Observer"]; });



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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
/* harmony import */ var _watcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./watcher */ "./src/observer/watcher.js");
/* harmony import */ var _delayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./delayer */ "./src/observer/delayer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Listener =
/*#__PURE__*/
function () {
  function Listener(exp, handler, value) {
    _classCallCheck(this, Listener);

    this.exp = exp;
    this.handler = handler;
    this.value = value;
    this.newValue = value;
    this.valueChanged = false;
    this.collectionChanged = false;
  }

  _createClass(Listener, [{
    key: "setNewValue",
    value: function setNewValue(value) {
      this.newValue = value;
      this.valueChanged = true;
    }
  }, {
    key: "setCollectionChanged",
    value: function setCollectionChanged(value) {
      this.collectionChanged = value;
    }
  }, {
    key: "hasChange",
    value: function hasChange() {
      return this.valueChanged || this.collectionChanged;
    }
  }, {
    key: "notify",
    value: function notify(scope) {
      var oldValue = this.value,
          newValue = this.newValue,
          collectionChanged = this.collectionChanged;
      this.value = this.newValue;
      this.collectionChanged = false;
      this.handler.call(scope, {
        oldValue: oldValue,
        newValue: newValue,
        collectionChanged: collectionChanged
      });
    }
  }]);

  return Listener;
}();

var Observer =
/*#__PURE__*/
function () {
  function Observer(scope) {
    _classCallCheck(this, Observer);

    this.scope = scope;
    this.accessors = {};
    this.listeners = [];
    this.watcher = new _watcher__WEBPACK_IMPORTED_MODULE_2__["Watcher"]();
    this.analyser = new _exp__WEBPACK_IMPORTED_MODULE_1__["Analyser"]();
    this.delayer = new _delayer__WEBPACK_IMPORTED_MODULE_3__["Delayer"](this.notify);
    this.evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, {
      allowNull: true
    });
  }

  _createClass(Observer, [{
    key: "createListener",
    value: function createListener(exp, handler, value) {
      var listener = new Listener(exp, handler, value);
      this.listeners.push(listener);
      return listener;
    }
  }, {
    key: "removeListener",
    value: function removeListener(listener) {
      var index = this.listeners.indexOf(listener);

      if (index !== -1) {
        this.listeners.splice(index, 1);
      }
    }
  }, {
    key: "notify",
    value: function notify() {
      var _this = this;

      this.listeners.forEach(function (listener) {
        if (listener.hasChange()) {
          listener.notify(_this.scope);
        }
      });
    }
  }, {
    key: "notifyChange",
    value: function notifyChange(listener, newValue) {
      if (newValue) {
        listener.setNewValue(newValue);
      } else {
        listener.setCollectionChanged(true);
      }

      this.delayer.execute(this);
    }
  }, {
    key: "getAccessor",
    value: function getAccessor(exp) {
      var result = this.accessors[exp];

      if (!result) {
        result = this.analyser.analyse(exp);
        this.accessors[exp] = result;
      }

      return _utils__WEBPACK_IMPORTED_MODULE_0__["copy"](true, result);
    }
  }, {
    key: "watch",
    value: function watch(exp, handler, locals) {
      var self = this;
      var accessor = this.getAccessor(exp);
      var evaluator = this.evaluator;
      var listener = this.createListener(exp, handler, evaluator.evaluate(exp, locals));

      function unwatchAccessors(accessors) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](accessors, function (item) {
          if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](item.unwatch)) {
            item.unwatch.call(this);
            item.unwatch = null;
          }

          unwatchAccessors(item.children);
        });
      }

      function watchAccessors(accessors, target) {
        if (!_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](target)) {
          return;
        }

        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](accessors, function (item, key) {
          var values = target;

          if (item.exp) {
            key = evaluator.evaluate(key, locals);
          }

          if (values === self.scope && locals && locals[key]) {
            values = locals;
          }

          item.unwatch = self.watcher.watch(values, key, function (args) {
            unwatchAccessors(item.children);
            watchAccessors(item.children, args.data.newValue);
            self.notifyChange(listener, evaluator.evaluate(exp, locals));
          });
          watchAccessors(item.children, values[key]);
        });
      }

      watchAccessors(accessor, this.scope);
      return function () {
        unwatchAccessors(accessor);
        self.removeListener(listener);
      };
    }
  }, {
    key: "watchCollection",
    value: function watchCollection(exp, handler, locals) {
      var _arguments = arguments,
          _this2 = this;

      var self = this,
          evaluator = this.evaluator;
      var unwatchProps = watchProps();
      var unwatchExp = this.watch(exp, function () {
        if (unwatchProps != null) {
          unwatchProps.call(_this2);
        }

        unwatchProps = watchProps();
        handler.apply(_this2, _arguments);
      }, locals);
      var listener = this.createListener(exp, handler, evaluator.evaluate(exp, locals));

      function watchProps() {
        var collection = evaluator.evaluate(exp, locals);

        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](collection) || _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](collection)) {
          return self.watcher.watch(collection, '*', function () {
            self.notifyChange(listener);
          });
        }
      }

      return function () {
        unwatchExp.call(this);
        unwatchProps && unwatchProps.call(this);
        self.removeListener(listener);
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.delayer.destroy();
      this.watcher.destroy();
      this.scope = null;
      this.listeners.length = 0;
    }
  }]);

  return Observer;
}();

/***/ }),

/***/ "./src/observer/proxy.js":
/*!*******************************!*\
  !*** ./src/observer/proxy.js ***!
  \*******************************/
/*! exports provided: isProxy, getTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/observer/events.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  get: getProxy,
  set: setProxy
}; // extends object prototype, add function toProxy

Object.prototype.toProxy = function () {
  return isProxy(this) ? this : new Proxy(this, handler);
};

var Agent =
/*#__PURE__*/
function () {
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

var ArrayAgent =
/*#__PURE__*/
function (_Agent) {
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

function getProxy(target, key) {
  if (key === isProxySymbol) {
    return true;
  }

  if (key === targetSymbol) {
    return target;
  }

  return target[key];
}

function setProxy(target, key, value) {
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
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./events */ "./src/observer/events.js");
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./proxy */ "./src/observer/proxy.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var ObjectListener =
/*#__PURE__*/
function () {
  function ObjectListener(target) {
    _classCallCheck(this, ObjectListener);

    this.target = target;
    this.keys = {};
  }

  _createClass(ObjectListener, [{
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

  return ObjectListener;
}();

var Watcher =
/*#__PURE__*/
function () {
  function Watcher() {
    var _this = this;

    _classCallCheck(this, Watcher);

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

  _createClass(Watcher, [{
    key: "init",
    value: function init() {
      _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanging.on(this.onPropChanging);
      _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanged.on(this.onPropChanged);
    }
  }, {
    key: "handlePropChanging",
    value: function handlePropChanging(args) {
      var listener = this.getListener(this.validators, args.target);

      if (listener != null) {
        listener.fireKey(args.key, args);
      }
    }
  }, {
    key: "handlePropChanged",
    value: function handlePropChanged(args) {
      var listener = this.getListener(this.listeners, args.target);

      if (listener != null) {
        listener.fireKey(args.key, args);
        listener.fireKey('*', args);
      }
    }
  }, {
    key: "getListener",
    value: function getListener(listeners, target) {
      var listener,
          filters = listeners.filter(function (item) {
        return item.target === target;
      });

      if (filters.length > 0) {
        listener = filters[0];
      }

      return listener;
    }
  }, {
    key: "createListener",
    value: function createListener(listeners, target) {
      var listener = new ObjectListener(target);
      listeners.push(listener);
      return listener;
    }
  }, {
    key: "getOrCreateListener",
    value: function getOrCreateListener(listeners, target) {
      var listener = this.getListener(listeners, target);

      if (listener == null) {
        listener = this.createListener(listeners, target);
      }

      return listener;
    }
  }, {
    key: "watch",
    value: function watch(target, key, action) {
      var listener = this.getOrCreateListener(this.listeners, Object(_proxy__WEBPACK_IMPORTED_MODULE_1__["getTarget"])(target));
      listener.registerKey(key, action);
      return function () {
        listener.unregisterKey(key, action);
      };
    }
  }, {
    key: "validate",
    value: function validate(target, key, action) {
      var listener = this.getOrCreateListener(this.validators, Object(_proxy__WEBPACK_IMPORTED_MODULE_1__["getTarget"])(target));
      listener.registerKey(key, action);
      return function () {
        listener.unregisterKey(key, action);
      };
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.listeners.length = 0;
      this.validators.length = 0;
      _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanging.off(this.onPropChanging);
      _events__WEBPACK_IMPORTED_MODULE_0__["events"].propChanged.off(this.onPropChanged);
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



var Binding =
/*#__PURE__*/
function () {
  function Binding(scope, text, locals, evaluator) {
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
    this.evaluator = evaluator;
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

          _this.patch();
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
        return this.expressions[0].compute(this.evaluator, locals);
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
        this.expressions[0].assign(this.evaluator, value, locals);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Expression =
/*#__PURE__*/
function () {
  function Expression(text) {
    _classCallCheck(this, Expression);

    this.text = text;
  } // get value


  _createClass(Expression, [{
    key: "compute",
    value: function compute(evaluator, locals) {
      return evaluator.evaluate(this.text, locals);
    } // set value

  }, {
    key: "assign",
    value: function assign(evaluator, value, locals) {
      evaluator.assign(this.text, value, locals);
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
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
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
var Render =
/*#__PURE__*/
function () {
  function Render(scope, locals) {
    _classCallCheck(this, Render);

    this.scope = scope;
    this.locals = locals;
    this.vnodes = [];
    this.directives = [];
    this.evaluator = new _exp__WEBPACK_IMPORTED_MODULE_5__["Evaluator"](scope, {
      assignInterceptor: function assignInterceptor(target, key, value) {
        var p = scope.delegate(target);
        p[key] = value;
      }
    }, locals);
  }

  _createClass(Render, [{
    key: "createBinding",
    value: function createBinding(text) {
      return new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, this.locals, this.evaluator);
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
            if (vattr.velm.component.$hasProperty(vattr.data.key)) {
              vattr.velm.component.$setProperty(vattr.data.key, value);
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
/*! exports provided: lexTpl, parseTpl, TplBuilder, VNode, VAttr, VCmnt, VElm, VText, VType */
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VAttr =
/*#__PURE__*/
function (_VNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VCmnt =
/*#__PURE__*/
function (_VNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var VElm =
/*#__PURE__*/
function (_VNode) {
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
var VNode =
/*#__PURE__*/
function () {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VText =
/*#__PURE__*/
function (_VNode) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VType =
/*#__PURE__*/
function (_VNode) {
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

var TplBuilder =
/*#__PURE__*/
function () {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var TplLexer =
/*#__PURE__*/
function (_ExpLexer) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TplParser =
/*#__PURE__*/
function (_ExpParser) {
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
        newArr.push(deep ? copy(deep, item) : item);
      }
    });
    return newArr;
  }

  if (isObject(obj)) {
    var newObj = object(obj);
    forEach(obj, function (value, key) {
      if (filter == null || filter(obj, key, value)) {
        newObj[key] = deep ? copy(deep, value) : value;
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
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







function componentConstructor(data) {
  this.props = {};
  this.events = {};
  this.$$velm = null;
  this.$$fragment = null;
  this.$$parent = null;
  this.$$children = [];
  this.$$directives = [];
  this.$$injector = _injector__WEBPACK_IMPORTED_MODULE_4__["injector"];
  this.$$render = new _render__WEBPACK_IMPORTED_MODULE_3__["Render"](this);
  this.$$observer = new _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](this);
  this.$$evaluator = new _exp__WEBPACK_IMPORTED_MODULE_5__["Evaluator"](this, {
    assignInterceptor: function assignInterceptor(target, key, value) {
      var p = self.scope.delegate(target);
      p[key] = value;
    }
  });
  this.$display = 'inherit';
  this.$$data = this.$initData(data);
  _injector__WEBPACK_IMPORTED_MODULE_4__["injector"].injectServices(this, this.$$data);
}
var Component =
/*#__PURE__*/
function () {
  _createClass(Component, [{
    key: "delegate",
    value: function delegate(target) {
      if (target == null) {
        target = this;
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](target)) {
        return target.toProxy();
      }

      throw new Error('target is not a object');
    }
  }]);

  function Component() {
    _classCallCheck(this, Component);

    componentConstructor.call(this);
  }

  _createClass(Component, [{
    key: "$initData",
    value: function $initData(data) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
    }
  }, {
    key: "$setData",
    value: function $setData(data) {
      _utils__WEBPACK_IMPORTED_MODULE_0__["extend"](this.$$data, data);
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
    key: "$hasProperty",
    value: function $hasProperty(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this.props, key, true);
    }
  }, {
    key: "$getProperty",
    value: function $getProperty(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.props, key, true);
    }
  }, {
    key: "$setProperty",
    value: function $setProperty(key, value) {
      var oldValue = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.props, key, true);

      if (oldValue !== value) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.delegate(this.props), key, value, true);
      }
    }
  }, {
    key: "$hasMessage",
    value: function $hasMessage(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this.events, key, true);
    }
  }, {
    key: "$bind",
    value: function $bind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key, true);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.on(handler);
      }
    }
  }, {
    key: "$unbind",
    value: function $unbind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key, true);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.off(handler);
      }
    }
  }, {
    key: "$watch",
    value: function $watch(exp, handler, locals) {
      return this.$$observer.watch(exp, handler, locals);
    }
  }, {
    key: "$watchCollection",
    value: function $watchCollection(exp, handler, locals) {
      return this.$$observer.watchCollection(exp, handler, locals);
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
    key: "$destroy",
    value: function $destroy() {
      this.$$observer.destroy();
      this.$$children.forEach(function (child) {
        child.$destroy();
      });
      this.$$directives.forEach(function (item) {
        item.$destroy();
      });
      this.onDestroy && this.onDestroy();
      this.$$parent = null;
      this.$$children.length = 0;
      this.$$directives.length = 0;
    }
  }]);

  return Component;
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
var Directive =
/*#__PURE__*/
function () {
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
  }, {
    key: "$evaluator",
    get: function get() {
      return this.$binding.evaluator;
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
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var pattern = /^[a-z_\$][\w\$-]*/i; // start make constructor function because class can't be call without new.

var componentClass = function () {
  return function Component(metadata) {
    _component__WEBPACK_IMPORTED_MODULE_3__["componentConstructor"].call(this, metadata);
  };
}();

componentClass.prototype = _component__WEBPACK_IMPORTED_MODULE_3__["Component"].prototype;

var directiveClass = function () {
  return function Directive(metadata) {
    _directive__WEBPACK_IMPORTED_MODULE_4__["directiveConstructor"].call(this, metadata);
  };
}();

directiveClass.prototype = _directive__WEBPACK_IMPORTED_MODULE_4__["Directive"].prototype;

var filterClass = function () {
  return function Filter(metadata) {
    _filter__WEBPACK_IMPORTED_MODULE_5__["filterConstructor"].call(this, metadata);
  };
}();

filterClass.prototype = _filter__WEBPACK_IMPORTED_MODULE_5__["Filter"].prototype;

var serviceClass = function () {
  return function Service(metadata) {
    _service__WEBPACK_IMPORTED_MODULE_6__["serviceConstructor"].call(this, metadata);
  };
}();

serviceClass.prototype = _service__WEBPACK_IMPORTED_MODULE_6__["Service"].prototype; // end of make constructor function because class can't be call without new.
// constructor factory, create constructor for component, directive, filter and service

var Factory =
/*#__PURE__*/
function () {
  function Factory() {
    _classCallCheck(this, Factory);
  }

  _createClass(Factory, [{
    key: "rename",
    value: function rename(roleId, name) {
      if (pattern.test(name)) {
        var newName = '';
        var segments = name.split('-');
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
        throw new Error(name + 'is not a valid name');
      }
    }
  }, {
    key: "make",
    value: function make(roleId, name, config, metadata) {
      var constructor,
          constructorName = this.rename(roleId, name),
          onConstruct = function onConstruct() {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](constructor["super"])) {
          constructor["super"].call(this);
        } // create properties


        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](config.construct)) {
          config.construct.call(this, _core__WEBPACK_IMPORTED_MODULE_1__["Message"]);
        }
      };

      constructor = new Function('onConstruct', '"use strict";return function ' + constructorName + '(){onConstruct.call(this);};')(onConstruct); // extends class

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](config["extends"])) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"](constructor, config["extends"]);
      } // create methods


      for (var key in config) {
        if (config.hasOwnProperty(key) && key !== 'extends' && key !== 'construct') {
          constructor.prototype[key] = config[key];
        }
      } // store metadata to prototype


      metadata.key = name;
      constructor.prototype.$$metadata = metadata;
      return constructor;
    }
  }, {
    key: "makeComponent",
    value: function makeComponent(name, config, metadata) {
      config["extends"] = componentClass;
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].component, name, config, metadata);
    }
  }, {
    key: "makeDirective",
    value: function makeDirective(name, config, metadata) {
      config["extends"] = directiveClass;
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].directive, name, config, metadata);
    }
  }, {
    key: "makeFilter",
    value: function makeFilter(name, config, metadata) {
      config["extends"] = filterClass;
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].filter, name, config, metadata);
    }
  }, {
    key: "makeService",
    value: function makeService(name, config, metadata) {
      config["extends"] = serviceClass;
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].service, name, config, metadata);
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

var Injector =
/*#__PURE__*/
function () {
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
    value: function register(roleId, key, constructor) {
      if (key.indexOf('.') !== -1) {
        throw new Error('Illegal character "."');
      }

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
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/view/factory.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helper */ "./src/helper.js");
/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_3__["Component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_4__["Directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_5__["Filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_6__["Service"]; });









function namespace(name) {
  return {
    component: function component(key, config, metadata) {
      metadata.namespace = name;
      return _component(key, config, metadata);
    },
    directive: function directive(key, config, metadata) {
      metadata.namespace = name;
      return _directive(key, config, metadata);
    },
    service: function service(key, config, metadata) {
      metadata.namespace = name;
      return _service(key, config, metadata);
    },
    filter: function filter(key, config, metadata) {
      metadata.namespace = name;
      return _filter(key, config, metadata);
    }
  };
}

function _component(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeComponent(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].registerComponent(key, constructor);
  return constructor;
}

function _directive(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeDirective(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].registerDirective(key, constructor);
  return constructor;
}

function _filter(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeFilter(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].registerFilter(key, constructor);
  return constructor;
}

function _service(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeService(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].registerService(key, constructor);
  return constructor;
}

function isComponent(instance) {
  return instance instanceof _component__WEBPACK_IMPORTED_MODULE_3__["Component"];
}

function isDirective(instance) {
  return instance instanceof _directive__WEBPACK_IMPORTED_MODULE_4__["Directive"];
}

function isFilter(instance) {
  return instance instanceof _filter__WEBPACK_IMPORTED_MODULE_5__["Filter"];
}

function isService(instance) {
  return instance instanceof _service__WEBPACK_IMPORTED_MODULE_6__["Service"];
}

function bootstrap(selector, config) {
  var element = document.querySelector(selector);
  var Root = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeComponent('root', config, {
    template: element.innerHTML
  });
  var root = new Root();
  _helper__WEBPACK_IMPORTED_MODULE_2__["clearChildNodes"](element);
  root.$render();
  root.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2FuYWx5c2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9ldmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hcnJheS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXNzaWdubWVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LW5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYmluYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9jYWxsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9jb25kaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvaWRlbnRpZmllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2xpdGVyYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2xvZ2ljYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL21lbWJlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvb2JqZWN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9wcm9ncmFtLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvdW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL3BhcnNlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaGVscGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL29ic2VydmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL3Byb3h5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL3dhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL2JpbmRpbmcuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmF0dHIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZjbW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92ZWxtLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92bm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnRleHQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0eXBlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvY29tcG9uZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9yb2xlcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy92aWV3LWFwaS5qcyJdLCJuYW1lcyI6WyJMb2NhbCIsImUiLCJlbG0iLCJhcmciLCIkZXZlbnQiLCIkZWxlbWVudCIsIiRhcmd1bWVudCIsIk1lc3NhZ2VCdXMiLCJtZXNzYWdlcyIsIk1lc3NhZ2UiLCJmbiIsImdldCIsIm9uIiwib2ZmIiwiYXJncyIsInNjb3BlIiwiZmlyZSIsImhhbmRsZXJzIiwicHVzaCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJyZXR1cm5WYWx1ZSIsInV0aWxzIiwiY2FsbCIsImlzTWVzc2FnZSIsIm9iaiIsImNvbXBvbmVudCIsIm1ldGFkYXRhIiwidGFyZ2V0Iiwia2V5IiwibmFtZSIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kRGlyZWN0aXZlIiwibmFtZXNwYWNlIiwidmFsdWUiLCIkZWxtIiwiaW5uZXJUZXh0IiwiRGlyZWN0aXZlIiwiSGlkZURpcmVjdGl2ZSIsImluaXRpYWwiLCJzdHlsZSIsImRpc3BsYXkiLCJNb2RlbERpcmVjdGl2ZSIsInZpZXdWYWx1ZSIsIm1vZGVsVmFsdWUiLCJwYXJzZXJzIiwiZm9ybWF0dGVycyIsInZpZXdDaGFuZ2VMaXN0ZW5lcnMiLCJ2YWxpZGF0b3JzIiwic3RhdHVzIiwiZmVlZGJhY2siLCJwcmlzdGluZSIsImRpcnR5IiwidmFsaWQiLCJpbnZhbGlkIiwib3B0aW9ucyIsImNzcyIsImNvbW1pdE1vZGVsVmFsdWUiLCIkc2NvcGUiLCIkY29tcG9uZW50IiwidmFsdWVDaGFuZ2UiLCJzZWxmIiwiY29tbWl0Vmlld1ZhbHVlIiwibmV3dmFsdWUiLCJFcnJvciIsIiQkbWV0YSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsImZvckVhY2giLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0QXR0cmlidXRlIiwidXBkYXRlRWxtQ3NzQ2xhc3MiLCJtYXJrRGlydHlTdGF0dXMiLCJsaXN0ZW5lciIsInBhcnNlciIsIiRiaW5kaW5nIiwiYXNzaWduIiwiZWxlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiUmVwZWF0RGlyZWN0aXZlIiwiaXRlbUV4cCIsIml0ZW1zRXhwIiwiaXRlbVRlbXBsYXRlIiwidmVsbSIsInZhdHRyIiwibm9kZVZhbHVlIiwicGF0dGVybiIsInJlc3VsdCIsImV4ZWMiLCJidWlsZGVyIiwiVHBsQnVpbGRlciIsInJlbW92ZUF0dHIiLCJidWlsZCIsImZyYWdtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiY3JlYXRlQ29tbWVudCIsImZvb3RlciIsImFwcGVuZENoaWxkIiwicmVuZGVyIiwiJHdhdGNoQ29sbGVjdGlvbiIsImhlbHBlciIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJpdGVtcyIsIiRldmFsIiwiaXRlbSIsImxvY2FscyIsIlJlbmRlciIsIml0ZW1Db250ZW50IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsInNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiaW5kZXgiLCIkZXZhbHVhdG9yIiwiZXZhbHVhdGUiLCJDbGFzc0RpcmVjdGl2ZSIsIkNsYXNzT2RkRGlyZWN0aXZlIiwibmRleCIsInZhbHVlVGV4dCIsInNraXBDdXJyZW50RWxtIiwic2V0RWxtQ2xhc3MiLCJqb2luIiwiU3R5bGVFdmVuRGlyZWN0aXZlIiwiU3R5bGVEaXJlY3RpdmUiLCJTdHlsZU9kZERpcmVjdGl2ZSIsInNldEVsbVN0eWxlIiwiZWxlbWVudCIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInByb2dyYW0iLCJhY2Nlc3NvciIsIkV4cEJ1aWxkZXIiLCJidWZmZXIiLCJwYXJzZUV4cCIsImFuYWx5c2VQcm9ncmFtIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsImFsbG93TnVsbCIsImFzc2lnbkludGVyY2VwdG9yIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCIkaGFzRmlsdGVyIiwiJGdldEZpbHRlciIsImV4ZWN1dGUiLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInNoaWZ0IiwicHJvcHMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpbmRleE9mIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInNsaWNlIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0Iiwic3BsaXQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiZ2V0Q2hpbGROb2RlcyIsIkFycmF5IiwiY2xlYXJDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0Tm9kZUFmdGVyIiwibGFzdENoaWxkIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImVsIiwiY2xzIiwidHJpbSIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJEZWxheWVyIiwiaGFuZGxlciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImV2ZW50cyIsInByb3BDaGFuZ2luZyIsInByb3BDaGFuZ2VkIiwiTGlzdGVuZXIiLCJ2YWx1ZUNoYW5nZWQiLCJjb2xsZWN0aW9uQ2hhbmdlZCIsIm9sZFZhbHVlIiwiT2JzZXJ2ZXIiLCJhY2Nlc3NvcnMiLCJsaXN0ZW5lcnMiLCJ3YXRjaGVyIiwiV2F0Y2hlciIsImFuYWx5c2VyIiwiZGVsYXllciIsIm5vdGlmeSIsImV2YWx1YXRvciIsImhhc0NoYW5nZSIsInNldE5ld1ZhbHVlIiwic2V0Q29sbGVjdGlvbkNoYW5nZWQiLCJnZXRBY2Nlc3NvciIsImNyZWF0ZUxpc3RlbmVyIiwidW53YXRjaEFjY2Vzc29ycyIsInVud2F0Y2giLCJ3YXRjaEFjY2Vzc29ycyIsInZhbHVlcyIsIndhdGNoIiwiZGF0YSIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiZGVzdHJveSIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldCIsInNldFByb3h5IiwiT2JqZWN0IiwidG9Qcm94eSIsImlzUHJveHkiLCJQcm94eSIsIkFnZW50IiwiQXJyYXlBZ2VudCIsImNvbmNhdCIsImNvcHkiLCJyZXZlcnNlIiwic29ydCIsInByb3h5IiwiZ2V0VGFyZ2V0IiwidXBkYXRlUHJveHkiLCJ2YWxpZGF0aW9uIiwiT2JqZWN0TGlzdGVuZXIiLCJrZXlzIiwiZ2V0SGFuZGxlcnMiLCJvblByb3BDaGFuZ2luZyIsImhhbmRsZVByb3BDaGFuZ2luZyIsIm9uUHJvcENoYW5nZWQiLCJoYW5kbGVQcm9wQ2hhbmdlZCIsImluaXQiLCJnZXRMaXN0ZW5lciIsImZpcmVLZXkiLCJmaWx0ZXJzIiwiYWN0aW9uIiwiZ2V0T3JDcmVhdGVMaXN0ZW5lciIsInJlZ2lzdGVyS2V5IiwidW5yZWdpc3RlcktleSIsIkJpbmRpbmciLCJleHByZXNzZWQiLCJtZXNzYWdlZCIsImFzc2lnbmVkIiwiYXV0b21hdGlvbiIsImNoYW5nZWQiLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsInZub2RlcyIsImRpcmVjdGl2ZXMiLCJwIiwiZGVsZWdhdGUiLCJ0cGwiLCJwYXJzZVRwbCIsImNvbXBpbGVOb2RlcyIsImxpbmtOb2RlcyIsIiRwb3N0bGluayIsInZub2RlIiwibm9kZU5hbWUiLCJjb21waWxlTm9kZSIsImlzVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNDb21tZW50IiwiY29tcGlsZUNvbW1lbnQiLCJjb21waWxlRWxtIiwibGlua05vZGUiLCJsaW5rVGV4dCIsImxpbmtDb21tZW50IiwibGlua0VsbSIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJjb21waWxlQXR0ciIsImxpbmtlciIsIiRwcmlvcml0eSIsImlzQ29tcG9uZW50IiwiJGhhc0NvbXBvbmVudCIsImJpbmRpbmciLCJjcmVhdGVCaW5kaW5nIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImRvbU1lc3NhZ2VkIiwiaXNEaXJlY3RpdmUiLCIkaGFzRGlyZWN0aXZlIiwiJG5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWduZWQiLCIkY29tcGlsZSIsInJlZ2lzdGVyQXV0b21hdGlvbiIsIiRjaGFuZ2UiLCJzZXRIdG1sQXR0ciIsIiRoYXNQcm9wZXJ0eSIsIiRzZXRQcm9wZXJ0eSIsImNvbXBpbGUiLCJ2dGV4dCIsIm5ld1RleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiY3JlYXRlRWxlbWVudCIsImluc3RhbmNlIiwiJG5ld0NvbXBvbmVudCIsIiRkaXNwbGF5IiwibGlua0F0dHIiLCIkJHZlbG0iLCIkcmVuZGVyIiwiJG1vdW50IiwiJGJpbmQiLCJsaW5rIiwiVkF0dHIiLCJWTm9kZSIsIlZDbW50IiwiVkVsbSIsInNlbGZDbG9zZWQiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImJ1aWxkVGV4dCIsImJ1aWxkQ29tbWVudCIsImJ1aWxkRWxlbWVudCIsImF0dHJUcGwiLCJidWlsZEF0dHJpYnV0ZSIsImNoaWxkVHBsIiwic3RyIiwiYmVnaW4iLCJleHBlY3RTdHJpbmciLCJjb21tZW50IiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicHVzaEF0dHIiLCJjaGlsZEVsZW1lbnRzIiwicHVzaENoaWxkIiwiZWxlcyIsIm9yaWdpbiIsImRlYnVnTW9kZSIsInRvU3RyaW5nIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVPd24iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJkZWVwIiwib2JqSW5kZXgiLCJpc0Jvb2xlYW4iLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwibG93ZXJjYXNlIiwiaXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc01hcCIsIk1hcCIsImlzQmxhbmtPYmplY3QiLCJpc0RhdGUiLCJpc0Z1bmN0aW9uIiwiaXNSZWdFeHAiLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJpc0VtcHR5IiwiZGVidWciLCJsb2ciLCJjb25zb2xlIiwiY29udGFpbnMiLCJjb250YWluc1N0ciIsImlnbm9yZUNhc2UiLCJoYXNQcm9wZXJ0eSIsImtleTIiLCJoYXNQcm9wIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJhIiwiYiIsIm9yZGVyQnlEZXNjZW5kaW5nIiwidG9OdW1iZXIiLCJuIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJzZXBhcmF0b3IiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkZnJhZ21lbnQiLCIkJHBhcmVudCIsIiQkY2hpbGRyZW4iLCIkJGRpcmVjdGl2ZXMiLCIkJGluamVjdG9yIiwiJCRyZW5kZXIiLCIkJG9ic2VydmVyIiwiJCRldmFsdWF0b3IiLCIkJGRhdGEiLCIkaW5pdERhdGEiLCJpbmplY3RTZXJ2aWNlcyIsIkNvbXBvbmVudCIsImhhc0NvbXBvbmVudCIsImFsaWFzIiwiY3JlYXRlQ29tcG9uZW50IiwiaGFzRGlyZWN0aXZlIiwiY3JlYXRlRGlyZWN0aXZlIiwiJCRzY29wZSIsImhhc0ZpbHRlciIsImNyZWF0ZUZpbHRlciIsIm1lc3NhZ2UiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIiRnZXRUZW1wbGF0ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRkZXN0cm95IiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCJtZWF0YWRhdGEiLCJvbkNvbXBpbGUiLCJvbkNoYW5nZSIsIm9uTGluayIsImFmdGVyTGluayIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwiU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJuZXdOYW1lIiwicm9sZXMiLCJjb25maWciLCJjb25zdHJ1Y3Rvck5hbWUiLCJyZW5hbWUiLCJvbkNvbnN0cnVjdCIsImNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwibWFrZSIsImZhY3RvcnkiLCJJbmplY3RvciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJjb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwiY29udmVydEFsaWFzIiwicG9wIiwibWV0YSIsImhhcyIsIm5hbWVzcGFjZXMiLCJrZXlPckNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJnZXRGaWx0ZXIiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiY2xhc3NOYW1lIiwic3BhY2VOYW1lIiwic2hvcnROYW1lIiwiZnVsbE5hbWUiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5IiwiY3JlYXRlU2VydmljZSIsIm1ha2VDb21wb25lbnQiLCJtYWtlRGlyZWN0aXZlIiwibWFrZUZpbHRlciIsIm1ha2VTZXJ2aWNlIiwiaXNGaWx0ZXIiLCJpc1NlcnZpY2UiLCJib290c3RyYXAiLCJSb290Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BPLElBQU02UixPQUFiO0FBQUE7QUFBQTtBQUNJLG1CQUFZQyxPQUFaLEVBQXFCQyxPQUFyQixFQUE4QjtBQUFBOztBQUMxQixTQUFLRCxPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxT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RCxTQUFTa3VCLFFBQVQsQ0FBa0IzTixRQUFsQixFQUE0QjtBQUN4QixTQUFPQSxRQUFRLFlBQVkwSyw4Q0FBM0I7QUFDSDs7QUFFRCxTQUFTa0QsU0FBVCxDQUFtQjVOLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQU9BLFFBQVEsWUFBWTZLLGdEQUEzQjtBQUNIOztBQUVELFNBQVNnRCxTQUFULENBQW1CanBCLFFBQW5CLEVBQTZCdW1CLE1BQTdCLEVBQXFDO0FBQ2pDLE1BQUlwbEIsT0FBTyxHQUFHMUMsUUFBUSxDQUFDMG1CLGFBQVQsQ0FBdUJubEIsUUFBdkIsQ0FBZDtBQUNBLE1BQUlrcEIsSUFBSSxHQUFHcEMsZ0RBQU8sQ0FBQzZCLGFBQVIsQ0FBc0IsTUFBdEIsRUFBOEJwQyxNQUE5QixFQUFzQztBQUM3QzFCLFlBQVEsRUFBRTFqQixPQUFPLENBQUM2akI7QUFEMkIsR0FBdEMsQ0FBWDtBQUdBLE1BQUkxRyxJQUFJLEdBQUcsSUFBSTRLLElBQUosRUFBWDtBQUVBanFCLHlEQUFBLENBQXVCa0MsT0FBdkI7QUFDQW1kLE1BQUksQ0FBQzdDLE9BQUw7QUFDQTZDLE1BQUksQ0FBQzVDLE1BQUwsQ0FBWXZhLE9BQVo7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS1idXMnOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtLCBhcmcpIHtcbiAgICAgICAgdGhpcy4kZXZlbnQgPSBlO1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gZWxtO1xuICAgICAgICB0aGlzLiRhcmd1bWVudCA9IGFyZztcbiAgICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xuICAgIH1cblxuICAgIGdldChlKSB7XG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1tlXSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tlXSA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbZV07XG4gICAgfVxuXG4gICAgb24oZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub24oZm4pO1xuICAgIH1cblxuICAgIG9mZihlLCBmbikge1xuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xuICAgIH1cblxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGUpLmZpcmUoYXJncywgc2NvcGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMucHVzaChmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHZhciByZXR1cm5WYWx1ZTtcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKHRoaXMuaGFuZGxlcnNbaV0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzTWVzc2FnZShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWVzc2FnZTtcbn1cblxuZXhwb3J0IHsgaXNNZXNzYWdlIH0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxtLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWhpZGUnXG59KVxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW5pdGlhbCA9ICdpbml0aWFsJztcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZCc7XG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vaGlkZSc7XG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSc7XG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tbW9kZWwnXG59KVxuY2xhc3MgTW9kZWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyc2VycyA9IFtdO1xuICAgICAgICB0aGlzLmZvcm1hdHRlcnMgPSBbXTtcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IHtcbiAgICAgICAgICAgIGZlZWRiYWNrOiAnJyxcbiAgICAgICAgICAgIHByaXN0aW5lOiB0cnVlLFxuICAgICAgICAgICAgZGlydHk6IGZhbHNlLFxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBpbnZhbGlkOiBmYWxzZVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgICAgICAgICBjc3M6IHtcbiAgICAgICAgICAgICAgICBwcmlzdGluZTogJ24tcHJpc3RpbmUnLFxuICAgICAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXG4gICAgICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcbiAgICAgICAgICAgICAgICBpbnZhbGlkOiAnbi1pbnZhbGlkJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29tbWl0TW9kZWxWYWx1ZSh2YWx1ZSk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGVsbS5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChpc01lc3NhZ2UodGhpcy4kY29tcG9uZW50LnZhbHVlQ2hhbmdlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC52YWx1ZUNoYW5nZS5vbigoZSwgYXJncykgPT4gc2VsZi5jb21taXRWaWV3VmFsdWUoYXJncy5uZXd2YWx1ZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZXtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvbXBvbmVudCAnICsgdGhpcy4kY29tcG9uZW50LiQkbWV0YS5rZXkgKyAnbXVzdCBkZWZpbmUgW2NoYW5nZV0gZXZlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS50YXJnZXQudmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cblxuICAgIGNvbW1pdE1vZGVsVmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgdGhpcy5tb2RlbFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJHNldEF0dHJpYnV0ZSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbG0udmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBjb21taXRWaWV3VmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMubWFya0RpcnR5U3RhdHVzKHRydWUpO1xuXG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSwgc2VsZi52aWV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gcGFyc2VyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZih0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgc2VsZi5tb2RlbFZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24obmV3VmFsdWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZUVsbUNzc0NsYXNzKCkge1xuICAgICAgICB2YXIgZWxlID0gdGhpcy4kZWxtLFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzcztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuc3RhdHVzLnByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IFRwbEJ1aWxkZXIgfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICB9XG5cbiAgICBvbkNvbXBpbGUodmVsbSwgdmF0dHIpIHtcbiAgICAgICAgdmFyIGFyZyA9IHZhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xuICAgICAgICB0aGlzLml0ZW1zRXhwID0gcmVzdWx0WzJdO1xuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gYnVpbGRlci5idWlsZCh2ZWxtKTtcblxuICAgICAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCB0YWtlIG92ZXIgbGluayBmdW5jdGlvbiBmb3IgcmVsYXRlZCB2aXJ0dWFsIGVsZW1lbnQgbm9kZSwgb25MaW5rIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIG9uTGluayhzY29wZSkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbS1yZXBlYXQnKTtcbiAgICAgICAgdmFyIGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ2VuZDogbS1yZXBlYXQnKTtcblxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZCh0aGlzLnJlbmRlcihzY29wZSkpO1xuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xuXG4gICAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xuICAgICAgICAgICAgaGVscGVyLnJlbW92ZU5vZGVCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxzID0ge307XG4gICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcbiAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XG4gICAgICAgICAgICBsb2NhbHNbc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG5cbiAgICAgICAgICAgIHZhciByZW5kZXIgPSBuZXcgUmVuZGVyKHNjb3BlLCBsb2NhbHMpO1xuICAgICAgICAgICAgdmFyIGl0ZW1Db250ZW50ID0gcmVuZGVyLnJlbmRlcihzZWxmLml0ZW1UZW1wbGF0ZSk7XG5cbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1Db250ZW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc2hvdydcbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9IHRoaXMuaW5pdGlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xuICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWRpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAgc2VsZWN0b3I6ICdtLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbG0uaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5zZXRBdHRyaWJ1dGUodGhpcy5rZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbG0uaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3MtZXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsdWF0b3IuZXZhbHVhdGUoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBzZWxlY3RvcjogJ20tY2xhc3Mtb2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbHVhdG9yLmV2YWx1YXRlKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnZhbHVlVGV4dCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZVRleHQgPSB2YXR0ci5ub2RlVmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25MaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMudmFsdWVUZXh0LCAoYXJncykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldEVsbUNsYXNzKGFyZ3MubmV3VmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnNldEVsbUNsYXNzKHNjb3BlLiRldmFsKHRoaXMudmFsdWVUZXh0KSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RWxtQ2xhc3ModmFsdWUpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5qb2luKCcgJyk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghdXRpbHMuaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlIFwibS1jbGFzc1wiIHNob3VsZCBiaW5kIHN0cmluZyBvciBhcnJheScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kZWxtLmNsYXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zdHlsZS1ldmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWx1YXRvci5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIHNlbGVjdG9yOiAnbS1zdHlsZS1vZGQnXHJcbn0pXHJcbmNsYXNzIFN0eWxlT2RkRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsdWF0b3IuZXZhbHVhdGUoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBzZWxlY3RvcjogJ20tc3R5bGUnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZVRleHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB0aGlzLnZhbHVlVGV4dCA9IHZhdHRyLm5vZGVWYWx1ZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy52YWx1ZVRleHQsIChhcmdzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNldEVsbVN0eWxlKGFyZ3MubmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnNldEVsbVN0eWxlKHNjb3BlLiRldmFsKHRoaXMudmFsdWVUZXh0KSk7XG4gICAgfVxuXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXRFbG1TdHlsZSh2YWx1ZSkge1xuICAgICAgICAvLyBjbGVhbiB1cCBzdHlsZVxuICAgICAgICB0aGlzLiRlbG0uc3R5bGUgPSAnJztcblxuICAgICAgICAvLyBzZXQgbmV3IHN0eWxlXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQYXJhbWV0ZXIgb2Ygbi1zdHlsZSBzaG91bGQgYmUgc3RyaW5nIG9yIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIHBhcnNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuYnVmZmVyW2V4cF07XG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltleHBdID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2UoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB7fTtcbiAgICB9XG5cbiAgICBwYXJzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmJ1ZmZlcltleHBdO1xuICAgICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbZXhwXSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCksIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0odGhpcy5wYXJzZShleHApLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XG4gICAgICAgICAgICBjYWxsZWU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRmlsdGVyKGNvbnRleHQucHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5leGVjdXRlLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcblxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XG59XG5cbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQobm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcblxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIHV0aWxzLmpvaW4oJzonLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCB1dGlscy5qb2luKCcsICcsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCB1dGlscy5qb2luKCcsJywgaXRlbXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJcbmZ1bmN0aW9uIGdldENoaWxkTm9kZXMobm9kZSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IGJlZ2luTm9kZSAmJiBjaGlsZCAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmROb2RlICYmIGNoaWxkICE9PSBiZWdpbk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGVBZnRlcihyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFVubG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPT09IDAgJiYgZWxlLmNsaWVudEhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50U3RhdGUoZWxlLCBjYWxsYmFja3MpIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZSwgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FbnRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVudGVyLmNhbGwoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkxlYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uTGVhdmUuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGdldENoaWxkTm9kZXMsXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxuICAgIHJlcGxhY2VOb2RlLFxuICAgIHJlbW92ZU5vZGUsXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXG4gICAgaW5zZXJ0Tm9kZUFmdGVyLFxuICAgIHF1ZXJ5RWxlbWVudExvYWRlZCxcbiAgICBxdWVyeUVsZW1lbnRVbmxvYWRlZCxcbiAgICBxdWVyeUVsZW1lbnRTdGF0ZSxcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzc1xufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNjb3BlKSB7XG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IHZhciBldmVudHMgPSB7XG4gICAgcHJvcENoYW5naW5nOiBuZXcgTWVzc2FnZSgpLFxuICAgIHByb3BDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXG59OyIsImV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnkpO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXksIGxvY2Fscyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gIHRoaXMuZXZhbHVhdG9yO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2Fscyk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmNsYXNzIEFnZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmNsYXNzIEFycmF5QWdlbnQgZXh0ZW5kcyBBZ2VudCB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKHRhcmdldCwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uY2F0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBqb2luKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB2YXIgcmVzdWx0LCBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGhdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdXNoKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGxlbmd0aCArIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZW5ndGggKz0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICBjb3B5LnJldmVyc2UoKTtcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4IC0gMSwgdGhpcy50YXJnZXRbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzbGljZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBzb3J0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29ydC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgc3BsaWNlKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY29weSwgYXJncyk7XG5cbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCB0aGlzLnRhcmdldFtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29weS5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGNvcHkubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgZ2V0VGFyZ2V0KHRhcmdldClba2V5XSA9IG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBhcHBseTogdHJ1ZSxcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcuZmlyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXRcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2luZyA9IGFyZ3MgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdpbmcoYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2VkID0gYXJncyA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9uKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub24odGhpcy5vblByb3BDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wQ2hhbmdpbmcoYXJncykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMudmFsaWRhdG9ycywgYXJncy50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgYXJncy50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLnZhbGlkYXRvcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcblxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5sZW5ndGggPSAwO1xuXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcub2ZmKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub2ZmKHRoaXMub25Qcm9wQ2hhbmdlZCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2FscywgZXZhbHVhdG9yKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIC8vIGlkZW50aWZ5IHRleHQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuZXhwcmVzc2VkID0gZmFsc2U7XG4gICAgICAgIC8vIGlkZW50aXR5IGl0IGlzIGEgZXZlbnQgYmluZGluZ1xuICAgICAgICB0aGlzLm1lc3NhZ2VkID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGFzc2lnbiB2YWx1ZSB0byBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuYXNzaWduZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgICAgIHRoaXMuZXZhbHVhdG9yID0gZXZhbHVhdG9yO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLm1lc3NhZ2VkIHx8IHRoaXMuYXNzaWduZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzaW9uKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmFzc2lnbmVkIHx8IHRoaXMubWVzc2FnZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRjaCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuZXZhbHVhdG9yLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjdXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3NlZCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc1swXS5hc3NpZ24odGhpcy5ldmFsdWF0b3IsIHZhbHVlLCBsb2NhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudGV4dCArICcgaXMgbm90IHZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmNhbGwodGhpcywgdGhpcy52YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuXG4gICAgfVxufSIsIlxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKGV2YWx1YXRvciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBldmFsdWF0b3IuZXZhbHVhdGUodGhpcy50ZXh0LCBsb2NhbHMpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbihldmFsdWF0b3IsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgZXZhbHVhdG9yLmFzc2lnbih0aGlzLnRleHQsIHZhbHVlLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIHdhdGNoKHNjb3BlLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcblxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsJztcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbi8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMudm5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3Ioc2NvcGUsIHtcbiAgICAgICAgICAgIGFzc2lnbkludGVyY2VwdG9yKHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBwID0gc2NvcGUuZGVsZWdhdGUodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBwW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzLCB0aGlzLmV2YWx1YXRvcik7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRwbCkge1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdGhpcy52bm9kZXMgPSBwYXJzZVRwbCh0cGwpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHRoaXMudm5vZGVzKTtcblxuICAgICAgICAvLyB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAvLyAgICAgZGlyZWN0aXZlLiRwcmVsaW5rKCk7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIHRoaXMubGlua05vZGVzKHRoaXMudm5vZGVzKS5mb3JFYWNoKGVsbSA9PiB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgZGlyZWN0aXZlLiRwb3N0bGluaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgaXNUZXh0KHZub2RlKSB7XG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0JztcbiAgICB9XG5cbiAgICBpc0NvbW1lbnQodm5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZSh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZVRleHQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUNvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlRWxtKHZub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua05vZGUodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtFbG0odm5vZGUpO1xuICAgIH1cblxuICAgIGNvbXBpbGVFbG0odmVsbSkge1xuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VzdG9tTGlua2VyID0gdmVsbS52YXR0cnMuc29tZSh2YXR0ciA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyKTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2godmF0dHIuZGF0YS5kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIHZlbG0uZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmVsbS5kYXRhLmxpbmtlciAhPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNvcnQgZGlyZWN0aXZlIGFjY29yZGluZyB0byBpdHMgcHJpb3JpdHlcbiAgICAgICAgdXRpbHMub3JkZXJCeShkaXJlY3RpdmVzLCBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlLiRwcmlvcml0eTtcbiAgICAgICAgfSkuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gZGlyZWN0aXZlIGRlZmluZXMgY3VzdG9tIGxpbmtlciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHJlbmRlciBlbmdpbmUgd2lsbCBub3QgcmVuZGVyIGl0IGFjY29yZGluZyB0byBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIGlmIChjdXN0b21MaW5rZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlbG0uZGF0YS5pc0NvbXBvbmVudCA9IHRoaXMuc2NvcGUuJGhhc0NvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAoIXZlbG0uZGF0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhdHRyLmRhdGEuYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh2YXR0ci5ub2RlVmFsdWUpO1xuXG4gICAgICAgIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEubWVzc2FnZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLm1lc3NhZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5kb21NZXNzYWdlZCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdmF0dHIuZGF0YS5rZXkpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkge1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuaXNEaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGUuJGhhc0RpcmVjdGl2ZSh2YXR0ci5kYXRhLmtleSkpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZSA9IHRoaXMuc2NvcGUuJG5ld0RpcmVjdGl2ZSh2YXR0ci5kYXRhLmtleSk7XG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5hc3NpZ25lZCA9IHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRhc3NpZ25lZDtcblxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEubGlua2VyID0gdmF0dHIuZGF0YS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdmF0dHIuZGF0YS5rZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKHZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKCF2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XG5cbiAgICAgICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5rZXkuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmF0dHIudmVsbS5jb21wb25lbnQuJGhhc1Byb3BlcnR5KHZhdHRyLmRhdGEua2V5KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmF0dHIudmVsbS5jb21wb25lbnQuJHNldFByb3BlcnR5KHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIdG1sQXR0cih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodnRleHQubm9kZVZhbHVlKTtcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlbHBlci5yZXBsYWNlTm9kZSh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIGlmICh2ZWxtLmRhdGEubGlua2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyLiRsaW5rKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKHZlbG0uZGF0YS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5zY29wZS4kbmV3Q29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgICAgICB2ZWxtLmRhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG4gICAgICAgICAgICB2ZWxtLmVsbS5zdHlsZS5kaXNwbGF5ID0gaW5zdGFuY2UuJGRpc3BsYXk7XG5cbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubGlua0F0dHIodmF0dHIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kbW91bnQodmVsbS5lbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcblxuICAgICAgICBpZiAodmF0dHIuZGF0YS5tZXNzYWdlZCkge1xuICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZG9tTWVzc2FnZWQpIHtcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcih2YXR0ci5kYXRhLmtleSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXB1dGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBuZXcgTG9jYWwoZSwgZWxtKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLmNvbXBvbmVudC4kYmluZCh2YXR0ci5kYXRhLmtleSwgZnVuY3Rpb24gKGUsIGFyZykge1xuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IG5ldyBMb2NhbChlLCBlbG0sIGFyZylcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5kYXRhLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICByZXR1cm4gdnRleHQuZWxtO1xuICAgIH1cblxuICAgIGxpbmtDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHZjbW50Lm5vZGVWYWx1ZSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWJ1aWxkZXInOyIsImV4cG9ydCAqIGZyb20gJy4vdm5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVsbSc7XG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25EZGVzdHJveSgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcignI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCB7IFZBdHRyIH0gZnJvbSAnLi92YXR0cic7XG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5hbWUpO1xuICAgICAgICB0aGlzLnZhdHRycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YXR0cnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBob29wc1xuXG4gICAgLy8gZW5kIG9mIGhvb3BzXG59XG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxufSIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVHlwZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XG5pbXBvcnQgeyBUcGxQYXJzZXIgfSBmcm9tICcuL3RwbC1wYXJzZXInO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5leHBvcnQgeyBsZXhUcGwsIHBhcnNlVHBsIH07IiwiZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XG4gICAgfVxuXG4gICAgaXNUZXh0KHZub2RlKSB7XG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyN0ZXh0JztcbiAgICB9XG5cbiAgICBpc0NvbW1lbnQodm5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xuICAgIH1cblxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRleHRcbiAgICByZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0YWdcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7XG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxleGVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuYnVpbGRTaWJsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBkb2N0eXBlKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NUeXBlO1xuICAgIH1cblxuICAgIGVsZW1lbnQocCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUucHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcbiAgICAgICAgdmFyIGVsZXMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlcztcbiAgICB9XG5cbiAgICBhdHRycyhwKSB7XG4gICAgICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHIgPSBuZXcgVkF0dHIoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG5cbiAgICBjdXJyZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxufSIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoZGVlcCwgaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkoZGVlcCwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzT2JqZWN0KHZhbHVlKSB8fCAhc29tZSh2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNQcm9wO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzUHJvcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhhcnIsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcblxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xufVxuXG5mdW5jdGlvbiBqb2luKHNlcGFyYXRvciwgYXJyKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJlc3VsdCArPSBpdGVtO1xuXG4gICAgICAgIGlmIChpbmRleCArIDEgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7XG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNTYW1lLFxuICAgIGlzRW1wdHksXG4gICAgaXNGb3JtRGF0YSxcbiAgICBkZWJ1ZyxcbiAgICBjb250YWlucyxcbiAgICBjb250YWluc1N0cixcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICB0b051bWJlcixcbiAgICByZW1vdmUsXG4gICAgZm9ybWF0LFxuICAgIGVzY2FwZUh0bWwsXG4gICAgam9pblxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy5wcm9wcyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xuICAgIHRoaXMuJCRmcmFnbWVudCA9IG51bGw7XG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XG4gICAgdGhpcy4kJGRpcmVjdGl2ZXMgPSBbXTtcbiAgICB0aGlzLiQkaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgICB0aGlzLiQkcmVuZGVyID0gbmV3IFJlbmRlcih0aGlzKTtcbiAgICB0aGlzLiQkb2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXIodGhpcyk7XG4gICAgdGhpcy4kJGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcywgIHtcbiAgICAgICAgYXNzaWduSW50ZXJjZXB0b3IodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcCA9IHNlbGYuc2NvcGUuZGVsZWdhdGUodGFyZ2V0KTtcbiAgICAgICAgICAgIHBba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy4kZGlzcGxheSA9ICdpbmhlcml0JztcbiAgICB0aGlzLiQkZGF0YSA9IHRoaXMuJGluaXREYXRhKGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJCRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0LnRvUHJveHkoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcigndGFyZ2V0IGlzIG5vdCBhIG9iamVjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMpO1xuICAgIH1cblxuICAgICRpbml0RGF0YShkYXRhKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIH1cblxuICAgICRzZXREYXRhKGRhdGEpIHtcbiAgICAgICAgdXRpbHMuZXh0ZW5kKHRoaXMuJCRkYXRhLCBkYXRhKTtcbiAgICB9XG5cbiAgICAkaGFzQ29tcG9uZW50KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0NvbXBvbmVudChrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcbiAgICB9XG5cbiAgICAkbmV3Q29tcG9uZW50KGtleSkge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgICAgICBjaGlsZC4kJHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgICRoYXNEaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkaW5qZWN0b3IuaGFzRGlyZWN0aXZlKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgIH1cblxuICAgICRuZXdEaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKTtcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICAkaGFzRmlsdGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0ZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcbiAgICB9XG5cbiAgICAkZ2V0RmlsdGVyKGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmNyZWF0ZUZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcbiAgICB9XG5cbiAgICAkaGFzUHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHRydWUpO1xuICAgIH1cblxuICAgICRnZXRQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BlcnR5KGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB0cnVlKTtcblxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLmRlbGVnYXRlKHRoaXMucHJvcHMpLCBrZXksIHZhbHVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoYXNNZXNzYWdlKGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5ldmVudHMsIGtleSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJGJpbmQoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5ldmVudHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgICAgICAgbWVzc2FnZS5vbihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR1bmJpbmQoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5ldmVudHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xuICAgICAgICAgICAgbWVzc2FnZS5vZmYoaGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJCRkYXRhO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZUlkKSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudGVtcGxhdGVJZCk7XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuJGdldFRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuJCRmcmFnbWVudCA9IHRoaXMuJCRyZW5kZXIucmVuZGVyKHRlbXBsYXRlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRmcmFnbWVudDtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiQkZnJhZ21lbnQpO1xuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJCRvYnNlcnZlci5kZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgY2hpbGQuJGRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGl0ZW0uJGRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJcbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVDb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XG4gICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgYXNzaWduIHZhbHVlIHRvIGJpbmRpbmcgZXhwcmVzc2lvblxuICAgIHRoaXMuJGFzc2lnbmVkID0gZmFsc2U7XG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xufVxuXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkZWxtKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZGF0YS5jb21wb25lbnQ7XG4gICAgfVxuXG4gICAgZ2V0ICRiaW5kaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLmRhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGV2YWx1YXRvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGJpbmRpbmcuZXZhbHVhdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1lYXRhZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lYXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaW5wdXQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICRjaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBwYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZy5leHRlbmRzID0gY29tcG9uZW50Q2xhc3M7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnLmV4dGVuZHMgPSBkaXJlY3RpdmVDbGFzcztcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcuZXh0ZW5kcyA9IGZpbHRlckNsYXNzO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcuZXh0ZW5kcyA9IHNlcnZpY2VDbGFzcztcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcblxuLy8gbWV0YWRhdGEgZXhhbXBsZVxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XG5leHBvcnQgY2xhc3MgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXIgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcltrZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGNvbnRhaW5lcltrZXldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lcltrZXldLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuY29tcG9uZW50LCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmZpbHRlciwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLnNlcnZpY2UsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBoYXMocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIGFsaWFzKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gdGhpcy5jb252ZXJ0QWxpYXMoa2V5LCBhbGlhcykuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBrZXkgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnQoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNTZXJ2aWNlKGtleSwgYWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgdHJ1ZSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldChyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgYWxpYXMpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGtleSA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iocm9sZUlkICsgJyAnICsga2V5ICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5maWx0ZXIsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBhbGlhcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3MgY29uc3RydWN0b3IgZm9yIGtleSAnICsga2V5T3JDb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmRpcmVjdGl2ZSwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29udmVydEFsaWFzKGtleSwgYWxpYXMpIHtcbiAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdChhbGlhcykpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VnbWVudHMgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIHV0aWxzLnNvbWUoYWxpYXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUsIGZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoc2hvcnROYW1lID09PSBzcGFjZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBmdWxsTmFtZSArICcuJyArIGNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUsIG1ldGFkYXRhLmFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImV4cG9ydCB2YXIgcm9sZXMgPSB7XG4gICAgZmlsdGVyOiAwLFxuICAgIHNlcnZpY2U6IDEsXG4gICAgY29tcG9uZW50OiAyLFxuICAgIGRpcmVjdGl2ZTogM1xufTsiLCJleHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9XG59IiwiXG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBSb290ID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnLCB7XG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgIH0pO1xuICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcbiAgICBcbiAgICBoZWxwZXIuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xuICAgIHJvb3QuJHJlbmRlcigpO1xuICAgIHJvb3QuJG1vdW50KGVsZW1lbnQpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRmlsdGVyLFxuICAgIFNlcnZpY2UsXG4gICAgaXNDb21wb25lbnQsXG4gICAgaXNEaXJlY3RpdmUsXG4gICAgaXNGaWx0ZXIsXG4gICAgaXNTZXJ2aWNlLFxuICAgIG5hbWVzcGFjZSxcbiAgICBib290c3RyYXAsXG4gICAgaW5qZWN0b3Jcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==