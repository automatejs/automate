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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, Observer, parseOptions, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, lexTpl, parseTpl, TplBuilder, Binding, Expression, Render, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, component, directive, filter, service, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, VNode, VAttr, VCmnt, VElm, VText, VType */
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
/* empty/unused harmony star reexport */









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
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expression */ "./src/render/expression.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Binding =
/*#__PURE__*/
function () {
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
    var self = this;
    this.evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, {
      assignInterceptor: function assignInterceptor(target, key, value) {
        var p = self.scope.delegate(target);
        p[key] = value;
      }
    });
  }

  _createClass(Binding, [{
    key: "createExpression",
    value: function createExpression(text) {
      var exp = new _expression__WEBPACK_IMPORTED_MODULE_2__["Expression"](text);
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
  }

  _createClass(Render, [{
    key: "createBinding",
    value: function createBinding(text) {
      return new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, this.locals);
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
  this.$$evaluator = new _exp__WEBPACK_IMPORTED_MODULE_5__["Evaluator"](this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvYW5hbHlzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V2YWx1YXRvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLW9wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FycmF5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3NpZ25tZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3Qtbm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NhbGwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pZGVudGlmaWVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbG9naWNhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbWVtYmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC91bmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvcGFyc2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZGVsYXllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92YXR0ci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmNtbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZlbG0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Zub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dGV4dC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnR5cGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiTWVzc2FnZSIsImZuIiwiZ2V0Iiwib24iLCJvZmYiLCJhcmdzIiwic2NvcGUiLCJmaXJlIiwiaGFuZGxlcnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJldHVyblZhbHVlIiwidXRpbHMiLCJjYWxsIiwiaXNNZXNzYWdlIiwib2JqIiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwicHJvdG90eXBlIiwiJCRtZXRhZGF0YSIsImluamVjdG9yIiwicmVnaXN0ZXJDb21wb25lbnQiLCJkaXJlY3RpdmUiLCJyZWdpc3RlckRpcmVjdGl2ZSIsImZpbHRlciIsInJlZ2lzdGVyRmlsdGVyIiwic2VydmljZSIsInJlZ2lzdGVyU2VydmljZSIsIkJpbmREaXJlY3RpdmUiLCJuYW1lc3BhY2UiLCJ2YWx1ZSIsIiRlbG0iLCJpbm5lclRleHQiLCJEaXJlY3RpdmUiLCJIaWRlRGlyZWN0aXZlIiwiaW5pdGlhbCIsInN0eWxlIiwiZGlzcGxheSIsIk1vZGVsRGlyZWN0aXZlIiwidmlld1ZhbHVlIiwibW9kZWxWYWx1ZSIsInBhcnNlcnMiLCJmb3JtYXR0ZXJzIiwidmlld0NoYW5nZUxpc3RlbmVycyIsInZhbGlkYXRvcnMiLCJzdGF0dXMiLCJmZWVkYmFjayIsInByaXN0aW5lIiwiZGlydHkiLCJ2YWxpZCIsImludmFsaWQiLCJvcHRpb25zIiwiY3NzIiwiY29tbWl0TW9kZWxWYWx1ZSIsIiRzY29wZSIsIiRjb21wb25lbnQiLCJ2YWx1ZUNoYW5nZSIsInNlbGYiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsIkVycm9yIiwiJCRtZXRhIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5ld1ZhbHVlIiwiZm9yRWFjaCIsInZhbGlkYXRvciIsImZvcm1hdHRlciIsIiRzZXRBdHRyaWJ1dGUiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJ2ZWxtIiwidmF0dHIiLCJub2RlVmFsdWUiLCJwYXR0ZXJuIiwicmVzdWx0IiwiZXhlYyIsImJ1aWxkZXIiLCJUcGxCdWlsZGVyIiwicmVtb3ZlQXR0ciIsImJ1aWxkIiwiZnJhZ21lbnQiLCJkb2N1bWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJoZWFkZXIiLCJjcmVhdGVDb21tZW50IiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCJyZW5kZXIiLCIkd2F0Y2hDb2xsZWN0aW9uIiwiaGVscGVyIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJpdGVtIiwibG9jYWxzIiwiUmVuZGVyIiwiaXRlbUNvbnRlbnQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwic2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwcm9ncmFtIiwiYWNjZXNzb3IiLCJFeHBCdWlsZGVyIiwiYnVmZmVyIiwicGFyc2VFeHAiLCJhbmFseXNlUHJvZ3JhbSIsInBhcnNlIiwiY2hpbGROb2RlcyIsImNoaWxkIiwiYW5hbHlzZU5vZGUiLCJub2RlIiwiY29udGV4dCIsInR5cGUiLCJBU1QiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiYW5hbHlzZUV4cHJlc3Npb24iLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsImFuYWx5c2VBc3NpZ25tZW50IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYW5hbHlzZUNvbmRpdGlvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiYW5hbHlzZUxvZ2ljIiwiQmluYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VCaW5hcnkiLCJVbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlVW5hcnkiLCJDYWxsRXhwcmVzc2lvbiIsImFuYWx5c2VDYWxsIiwiTWVtYmVyRXhwcmVzc2lvbiIsImFuYWx5c2VNZW1iZXIiLCJJZGVudGlmaWVyIiwiYW5hbHlzZUlkZW50aWZpZXIiLCJMaXRlcmFsIiwiYW5hbHlzZUxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJhbmFseXNlQXJyYXkiLCJQcm9wZXJ0eSIsImFuYWx5c2VQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJhbmFseXNlT2JqZWN0IiwiYXNzaWdubWVudCIsInJpZ2h0IiwiY29uZGl0aW9uIiwidGVzdCIsImFsdGVybmF0ZSIsImNvbnNlcXVlbnQiLCJsb2dpYyIsImxlZnQiLCJiaW5hcnkiLCJ1bmFyeSIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImlkZW50aWZpZXIiLCJjcmVhdGVBY2Nlc3NvciIsImxpdGVyYWwiLCJwcm9wIiwicHJvcGVydGllcyIsImFyciIsImFuYWx5c2UiLCJFdmFsdWF0b3IiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsImV2YWx1YXRlUHJvZ3JhbSIsImV2YWx1YXRlTm9kZSIsIiRudWxsIiwiYXNzaWduUHJvZ3JhbSIsImV4cHJlc3Npb24iLCJwcm9wZXJ0eUtleSIsImV2YWx1YXRlRXhwcmVzc2lvbiIsImV2YWx1YXRlQXNzaWdubWVudCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiZXZhbHVhdGVMb2dpYyIsImV2YWx1YXRlQmluYXJ5IiwiZXZhbHVhdGVVbmFyeSIsImV2YWx1YXRlQ2FsbCIsImV2YWx1YXRlTWVtYmVyIiwiZXZhbHVhdGVJZGVudGlmaWVyIiwiZXZhbHVhdGVMaXRlcmFsIiwiZXZhbHVhdGVBcnJheSIsImV2YWx1YXRlUHJvcGVydHkiLCJldmFsdWF0ZU9iamVjdCIsImFzc2lnbm1lbnRMZWZ0IiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIm9wZXJhdG9yIiwiYXJnVmFsdWVzIiwibWFwIiwiJGhhc0ZpbHRlciIsIiRnZXRGaWx0ZXIiLCJleGVjdXRlIiwiYXBwbHkiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJidWlsZEV4cHJlc3Npb24iLCJidWlsZEFzc2lnbm1lbnQiLCJidWlsZENvbmRpdGlvbiIsImJ1aWxkTG9naWMiLCJidWlsZEJpbmFyeSIsImJ1aWxkVW5hcnkiLCJidWlsZENhbGwiLCJidWlsZE1lbWJlciIsImJ1aWxkSWRlbnRpZmllciIsImJ1aWxkTGl0ZXJhbCIsImJ1aWxkQXJyYXkiLCJidWlsZFByb3BlcnR5IiwiYnVpbGRPYmplY3QiLCJyZXMiLCJzaGlmdCIsInByb3BzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsImluZGV4IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpbmRleE9mIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInNsaWNlIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0Iiwic3BsaXQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsInVuZGVmaW5lZCIsImdldENoaWxkTm9kZXMiLCJBcnJheSIsImNsZWFyQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwicmVwbGFjZU5vZGUiLCJyZWZOb2RlIiwibmV3Tm9kZSIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlQmV0d2VlbiIsImJlZ2luTm9kZSIsImVuZE5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImluc2VydE5vZGVBZnRlciIsImxhc3RDaGlsZCIsInF1ZXJ5RWxlbWVudExvYWRlZCIsImNhbGxiYWNrIiwiY2FuY2VsVG9rZW4iLCJxdWVyeSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlFbGVtZW50VW5sb2FkZWQiLCJxdWVyeUVsZW1lbnRTdGF0ZSIsImNhbGxiYWNrcyIsImxvYWRlZCIsIm9uRW50ZXIiLCJvbkxlYXZlIiwiYWRkQ2xhc3MiLCJlbCIsImNscyIsInRyaW0iLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwiRGVsYXllciIsImhhbmRsZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJldmVudHMiLCJwcm9wQ2hhbmdpbmciLCJwcm9wQ2hhbmdlZCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJldmFsdWF0b3IiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZ2V0QWNjZXNzb3IiLCJjcmVhdGVMaXN0ZW5lciIsImV2YWx1YXRlIiwidW53YXRjaEFjY2Vzc29ycyIsInVud2F0Y2giLCJ3YXRjaEFjY2Vzc29ycyIsInZhbHVlcyIsIndhdGNoIiwiZGF0YSIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiZGVzdHJveSIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldCIsInNldFByb3h5IiwiT2JqZWN0IiwidG9Qcm94eSIsImlzUHJveHkiLCJQcm94eSIsIkFnZW50IiwiQXJyYXlBZ2VudCIsImNvbmNhdCIsImNvcHkiLCJyZXZlcnNlIiwic29ydCIsInByb3h5IiwiZ2V0VGFyZ2V0IiwidXBkYXRlUHJveHkiLCJ2YWxpZGF0aW9uIiwiT2JqZWN0TGlzdGVuZXIiLCJrZXlzIiwiZ2V0SGFuZGxlcnMiLCJvblByb3BDaGFuZ2luZyIsImhhbmRsZVByb3BDaGFuZ2luZyIsIm9uUHJvcENoYW5nZWQiLCJoYW5kbGVQcm9wQ2hhbmdlZCIsImluaXQiLCJnZXRMaXN0ZW5lciIsImZpcmVLZXkiLCJmaWx0ZXJzIiwiYWN0aW9uIiwiZ2V0T3JDcmVhdGVMaXN0ZW5lciIsInJlZ2lzdGVyS2V5IiwidW5yZWdpc3RlcktleSIsIkJpbmRpbmciLCJleHByZXNzZWQiLCJtZXNzYWdlZCIsImFzc2lnbmVkIiwiYXV0b21hdGlvbiIsImNoYW5nZWQiLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwicCIsImRlbGVnYXRlIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsInZub2RlcyIsImRpcmVjdGl2ZXMiLCJ0cGwiLCJwYXJzZVRwbCIsImNvbXBpbGVOb2RlcyIsImxpbmtOb2RlcyIsIiRwb3N0bGluayIsInZub2RlIiwibm9kZU5hbWUiLCJjb21waWxlTm9kZSIsImlzVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNDb21tZW50IiwiY29tcGlsZUNvbW1lbnQiLCJjb21waWxlRWxtIiwibGlua05vZGUiLCJsaW5rVGV4dCIsImxpbmtDb21tZW50IiwibGlua0VsbSIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJjb21waWxlQXR0ciIsImxpbmtlciIsIiRwcmlvcml0eSIsImlzQ29tcG9uZW50IiwiJGhhc0NvbXBvbmVudCIsImJpbmRpbmciLCJjcmVhdGVCaW5kaW5nIiwic3RhcnRzV2l0aCIsInN1YnN0ciIsImRvbU1lc3NhZ2VkIiwiaXNEaXJlY3RpdmUiLCIkaGFzRGlyZWN0aXZlIiwiJG5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWduZWQiLCIkY29tcGlsZSIsInJlZ2lzdGVyQXV0b21hdGlvbiIsIiRjaGFuZ2UiLCJzZXRIdG1sQXR0ciIsIiRoYXNQcm9wZXJ0eSIsIiRzZXRQcm9wZXJ0eSIsImNvbXBpbGUiLCJ2dGV4dCIsIm5ld1RleHROb2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiY3JlYXRlRWxlbWVudCIsImluc3RhbmNlIiwiJG5ld0NvbXBvbmVudCIsIiRkaXNwbGF5IiwibGlua0F0dHIiLCIkJHZlbG0iLCIkcmVuZGVyIiwiJG1vdW50IiwiJGJpbmQiLCJsaW5rIiwiVkF0dHIiLCJWTm9kZSIsIlZDbW50IiwiVkVsbSIsInNlbGZDbG9zZWQiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImJ1aWxkVGV4dCIsImJ1aWxkQ29tbWVudCIsImJ1aWxkRWxlbWVudCIsImF0dHJUcGwiLCJidWlsZEF0dHJpYnV0ZSIsImNoaWxkVHBsIiwic3RyIiwiYmVnaW4iLCJleHBlY3RTdHJpbmciLCJjb21tZW50IiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZWxlbWVudCIsImRvY1R5cGUiLCJhdHRycyIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzUmVnRXhwIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiaXNFbXB0eSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGZyYWdtZW50IiwiJCRwYXJlbnQiLCIkJGNoaWxkcmVuIiwiJCRkaXJlY3RpdmVzIiwiJCRpbmplY3RvciIsIiQkcmVuZGVyIiwiJCRvYnNlcnZlciIsIiQkZXZhbHVhdG9yIiwiJCRkYXRhIiwiJGluaXREYXRhIiwiaW5qZWN0U2VydmljZXMiLCJDb21wb25lbnQiLCJoYXNDb21wb25lbnQiLCJhbGlhcyIsImNyZWF0ZUNvbXBvbmVudCIsImhhc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJoYXNGaWx0ZXIiLCJjcmVhdGVGaWx0ZXIiLCJtZXNzYWdlIiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCIkZ2V0VGVtcGxhdGUiLCJzZWxlY3Rvck9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkZGVzdHJveSIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwibWVhdGFkYXRhIiwib25Db21waWxlIiwib25DaGFuZ2UiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJGaWx0ZXIiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsInNlcnZpY2VDbGFzcyIsIlNlcnZpY2UiLCJzZXJ2aWNlQ29uc3RydWN0b3IiLCJGYWN0b3J5Iiwicm9sZUlkIiwibmV3TmFtZSIsInJvbGVzIiwiY29uZmlnIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJjb25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5IiwiSW5qZWN0b3IiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwiY29udGFpbmVyIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsImNvbnZlcnRBbGlhcyIsInBvcCIsIm1ldGEiLCJoYXMiLCJuYW1lc3BhY2VzIiwia2V5T3JDb25zdHJ1Y3RvciIsImNyZWF0ZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiZ2V0RmlsdGVyIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImNsYXNzTmFtZSIsInNwYWNlTmFtZSIsInNob3J0TmFtZSIsImZ1bGxOYW1lIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSIsImNyZWF0ZVNlcnZpY2UiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzRmlsdGVyIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiUm9vdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFD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QUFDQU0sb0RBQVEsQ0FBQ08sZUFBVCxDQUF5QlgsR0FBekIsRUFBOEI0bEIsV0FBOUI7QUFDQSxTQUFPQSxXQUFQO0FBQ0g7O0FBRUQsU0FBUzFHLFdBQVQsQ0FBcUJ5QixRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVkrSSxvREFBM0I7QUFDSDs7QUFFRCxTQUFTakssV0FBVCxDQUFxQmtCLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWTFmLG9EQUEzQjtBQUNIOztBQUVELFNBQVNzdEIsUUFBVCxDQUFrQjVOLFFBQWxCLEVBQTRCO0FBQ3hCLFNBQU9BLFFBQVEsWUFBWTJLLDhDQUEzQjtBQUNIOztBQUVELFNBQVNrRCxTQUFULENBQW1CN04sUUFBbkIsRUFBNkI7QUFDekIsU0FBT0EsUUFBUSxZQUFZOEssZ0RBQTNCO0FBQ0g7O0FBRUQsU0FBU2dELFNBQVQsQ0FBbUJyb0IsUUFBbkIsRUFBNkIybEIsTUFBN0IsRUFBcUM7QUFDakMsTUFBSWhJLE9BQU8sR0FBR2xmLFFBQVEsQ0FBQzhsQixhQUFULENBQXVCdmtCLFFBQXZCLENBQWQ7QUFDQSxNQUFJc29CLElBQUksR0FBR3BDLGdEQUFPLENBQUM2QixhQUFSLENBQXNCLE1BQXRCLEVBQThCcEMsTUFBOUIsRUFBc0M7QUFDN0MxQixZQUFRLEVBQUV0RyxPQUFPLENBQUN5RztBQUQyQixHQUF0QyxDQUFYO0FBR0EsTUFBSTNHLElBQUksR0FBRyxJQUFJNkssSUFBSixFQUFYO0FBRUFycEIseURBQUEsQ0FBdUIwZSxPQUF2QjtBQUNBRixNQUFJLENBQUM3QyxPQUFMO0FBQ0E2QyxNQUFJLENBQUM1QyxNQUFMLENBQVk4QyxPQUFaO0FBQ0giLCJmaWxlIjoiYXV0b21hdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2xvY2FsJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZSc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UtYnVzJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSwgYXJnKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICAgICAgdGhpcy4kYXJndW1lbnQgPSBhcmc7XG4gICAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZUJ1cyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXQoZSkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZXNbZV0pIHtcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbZV0gPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzW2VdO1xuICAgIH1cblxuICAgIG9uKGUsIGZuKSB7XG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChlKS5maXJlKGFyZ3MsIHNjb3BlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIG9mZihmbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShhcmdzLCBzY29wZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmhhbmRsZXJzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XG59XG5cbmV4cG9ydCB7IGlzTWVzc2FnZSB9IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudChtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9maWx0ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVsbS5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXRpYWwgPSAnaW5pdGlhbCc7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWwgPSB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheTtcbiAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9IHRoaXMuaW5pdGlhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnOyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1tb2RlbCdcbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgZmVlZGJhY2s6ICcnLFxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXG4gICAgICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kZWxtLm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGlzTWVzc2FnZSh0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2UpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LnZhbHVlQ2hhbmdlLm9uKChlLCBhcmdzKSA9PiBzZWxmLmNvbW1pdFZpZXdWYWx1ZShhcmdzLm5ld3ZhbHVlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNle1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50ICcgKyB0aGlzLiRjb21wb25lbnQuJCRtZXRhLmtleSArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxtLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsbS52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxtQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbG0sXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgVHBsQnVpbGRlciB9IGZyb20gJy4uL3RwbCc7XG5pbXBvcnQgeyBSZW5kZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4uL2hlbHBlcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZhciBidWlsZGVyID0gbmV3IFRwbEJ1aWxkZXIoKTtcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBidWlsZGVyLmJ1aWxkKHZlbG0pO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBoZWxwZXIucmVtb3ZlTm9kZUJldHdlZW4oaGVhZGVyLCBmb290ZXIpO1xuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgcmVuZGVyKHNjb3BlKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcbiAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcblxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IG5ldyBSZW5kZXIoc2NvcGUsIGxvY2Fscyk7XG4gICAgICAgICAgICB2YXIgaXRlbUNvbnRlbnQgPSByZW5kZXIucmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlKTtcblxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zaG93J1xufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmluaXRpYWwgPSAnaW5pdGlhbCc7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsID0gdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXk7XG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBzZWxlY3RvcjogJ20tc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsbS5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIHBhcnNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuYnVmZmVyW2V4cF07XG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltleHBdID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2UoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB7fTtcbiAgICB9XG5cbiAgICBwYXJzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmJ1ZmZlcltleHBdO1xuICAgICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbZXhwXSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCksIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0odGhpcy5wYXJzZShleHApLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XG4gICAgICAgICAgICBjYWxsZWU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRmlsdGVyKGNvbnRleHQucHJvcCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5leGVjdXRlLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcblxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XG59XG5cbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQobm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcblxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIHV0aWxzLmpvaW4oJzonLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCB1dGlscy5qb2luKCcsICcsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCB1dGlscy5qb2luKCcsJywgaXRlbXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJcbmZ1bmN0aW9uIGdldENoaWxkTm9kZXMobm9kZSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IGJlZ2luTm9kZSAmJiBjaGlsZCAhPT0gZW5kTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmROb2RlICYmIGNoaWxkICE9PSBiZWdpbk5vZGUpIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydE5vZGVBZnRlcihyZWZOb2RlLCBuZXdOb2RlKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IHJlZk5vZGUpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFVubG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPT09IDAgJiYgZWxlLmNsaWVudEhlaWdodCA9PSAwKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gcXVlcnlFbGVtZW50U3RhdGUoZWxlLCBjYWxsYmFja3MpIHtcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZSwgbG9hZGVkID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xuICAgICAgICAgICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FbnRlciAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVudGVyLmNhbGwoY2FsbGJhY2tzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkxlYXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uTGVhdmUuY2FsbChjYWxsYmFja3MpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XG4gICAgfVxuXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQge1xuICAgIGdldENoaWxkTm9kZXMsXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxuICAgIHJlcGxhY2VOb2RlLFxuICAgIHJlbW92ZU5vZGUsXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXG4gICAgaW5zZXJ0Tm9kZUFmdGVyLFxuICAgIHF1ZXJ5RWxlbWVudExvYWRlZCxcbiAgICBxdWVyeUVsZW1lbnRVbmxvYWRlZCxcbiAgICBxdWVyeUVsZW1lbnRTdGF0ZSxcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzc1xufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNjb3BlKSB7XG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcblxuZXhwb3J0IHZhciBldmVudHMgPSB7XG4gICAgcHJvcENoYW5naW5nOiBuZXcgTWVzc2FnZSgpLFxuICAgIHByb3BDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXG59OyIsImV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnkpO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXksIGxvY2Fscyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gIHRoaXMuZXZhbHVhdG9yO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2Fscyk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmNsYXNzIEFnZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmNsYXNzIEFycmF5QWdlbnQgZXh0ZW5kcyBBZ2VudCB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKHRhcmdldCwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uY2F0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBqb2luKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB2YXIgcmVzdWx0LCBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGhdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdXNoKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGxlbmd0aCArIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZW5ndGggKz0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICBjb3B5LnJldmVyc2UoKTtcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4IC0gMSwgdGhpcy50YXJnZXRbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzbGljZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBzb3J0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29ydC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgc3BsaWNlKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY29weSwgYXJncyk7XG5cbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCB0aGlzLnRhcmdldFtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29weS5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGNvcHkubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgZ2V0VGFyZ2V0KHRhcmdldClba2V5XSA9IG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXG4gICAgICAgICAgICBhcHBseTogdHJ1ZSxcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcuZmlyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXRcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2luZyA9IGFyZ3MgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdpbmcoYXJncyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2VkID0gYXJncyA9PiB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9uKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub24odGhpcy5vblByb3BDaGFuZ2VkKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wQ2hhbmdpbmcoYXJncykge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMudmFsaWRhdG9ycywgYXJncy50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgYXJncy50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBhcmdzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLnZhbGlkYXRvcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcblxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5sZW5ndGggPSAwO1xuXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcub2ZmKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub2ZmKHRoaXMub25Qcm9wQ2hhbmdlZCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgLy8gaWRlbnRpZnkgdGV4dCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5leHByZXNzZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gaWRlbnRpdHkgaXQgaXMgYSBldmVudCBiaW5kaW5nXG4gICAgICAgIHRoaXMubWVzc2FnZWQgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYXNzaWduIHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5hc3NpZ25lZCA9IGZhbHNlO1xuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBbXTtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwge1xuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3IodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHAgPSBzZWxmLnNjb3BlLmRlbGVnYXRlKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgcFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmKHRoaXMubWVzc2FnZWQgfHwgdGhpcy5hc3NpZ25lZCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgaWYodGhpcy5hc3NpZ25lZCB8fCB0aGlzLm1lc3NhZ2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdCgpO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUobG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmKHRoaXMuZXhwcmVzc2VkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuZXZhbHVhdG9yLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXIuY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zWzBdLmFzc2lnbih0aGlzLmV2YWx1YXRvciwgdmFsdWUsIGxvY2Fscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbil7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmKHRoaXMuY2hhbmdlZCAmJiB0aGlzLmF1dG9tYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG5cbiAgICB9XG59IiwiXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUoZXZhbHVhdG9yLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRvci5ldmFsdWF0ZSh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKGV2YWx1YXRvciwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBldmFsdWF0b3IuYXNzaWduKHRoaXMudGV4dCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgd2F0Y2goc2NvcGUsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gc2NvcGUuJHdhdGNoKHRoaXMudGV4dCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuXG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzKTtcbiAgICB9XG5cbiAgICByZW5kZXIodHBsKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB0aGlzLnZub2RlcyA9IHBhcnNlVHBsKHRwbCk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52bm9kZXMpO1xuXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgIC8vICAgICBkaXJlY3RpdmUuJHByZWxpbmsoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52bm9kZXMpLmZvckVhY2goZWxtID0+IHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICBkaXJlY3RpdmUuJHBvc3RsaW5rKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICBpc1RleHQodm5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xuICAgIH1cblxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjY29tbWVudCc7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGVzKHZub2Rlcykge1xuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2RlKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpe1xuICAgICAgICAgICAgdGhpcy5jb21waWxlQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVFbG0odm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua05vZGVzKHZub2Rlcykge1xuICAgICAgICByZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rTm9kZSh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxpbmtOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0NvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGlua0VsbSh2bm9kZSk7XG4gICAgfVxuXG4gICAgY29tcGlsZUVsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW107XG4gICAgICAgIHZhciBjdXN0b21MaW5rZXIgPSB2ZWxtLnZhdHRycy5zb21lKHZhdHRyID0+IHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaCh2YXR0ci5kYXRhLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdmVsbS5kYXRhLmxpbmtlciA9IHZhdHRyLmRhdGEubGlua2VyO1xuICAgICAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyICE9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxuICAgICAgICB1dGlscy5vcmRlckJ5KGRpcmVjdGl2ZXMsIGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUuJHByaW9yaXR5O1xuICAgICAgICB9KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVsbS5kYXRhLmlzQ29tcG9uZW50ID0gdGhpcy5zY29wZS4kaGFzQ29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmICghdmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2ZWxtLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZUF0dHIodmF0dHIpIHtcbiAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZhdHRyLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5tZXNzYWdlZCA9IHRydWU7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubWVzc2FnZWQgPSB0cnVlO1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmRvbU1lc3NhZ2VkID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB2YXR0ci5kYXRhLmtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuZXhwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuZXhwcmVzc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRGlyZWN0aXZlKHZhdHRyLmRhdGEua2V5KSkge1xuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlID0gdGhpcy5zY29wZS4kbmV3RGlyZWN0aXZlKHZhdHRyLmRhdGEua2V5KTtcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmFzc2lnbmVkID0gdmF0dHIuZGF0YS5kaXJlY3RpdmUuJGFzc2lnbmVkO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmRpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB2YXR0ci5kYXRhLmtleSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoIXZhdHRyLmRhdGEubWVzc2FnZWQpIHtcbiAgICAgICAgICAgIHZhciBzZXRIdG1sQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcblxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmtleS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgdmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLmNvbXBvbmVudC4kaGFzUHJvcGVydHkodmF0dHIuZGF0YS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLmNvbXBvbmVudC4kc2V0UHJvcGVydHkodmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaGVscGVyLnJlcGxhY2VOb2RlKHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVDb21tZW50KHZjbW50KSB7XG5cbiAgICB9XG5cbiAgICBsaW5rRWxtKHZlbG0pIHtcbiAgICAgICAgaWYgKHZlbG0uZGF0YS5saW5rZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHZlbG0uZGF0YS5saW5rZXIuJGxpbmsoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlbG0uZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAodmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLnNjb3BlLiRuZXdDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgICAgIHZlbG0uZGF0YS5jb21wb25lbnQgPSBpbnN0YW5jZTtcbiAgICAgICAgICAgIHZlbG0uZWxtLnN0eWxlLmRpc3BsYXkgPSBpbnN0YW5jZS4kZGlzcGxheTtcblxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRyZW5kZXIoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCh2ZWxtLmVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtBdHRyKHZhdHRyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVsbS5lbG07XG4gICAgfVxuXG4gICAgbGlua0F0dHIodmF0dHIpIHtcbiAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XG4gICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kb21NZXNzYWdlZCkge1xuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IG5ldyBMb2NhbChlLCBlbG0pXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhdHRyLnZlbG0uY29tcG9uZW50LiRiaW5kKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSwgYXJnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21wdXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsczogbmV3IExvY2FsKGUsIGVsbSwgYXJnKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5saW5rKCk7XG4gICAgICAgIHZ0ZXh0LmVsbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZ0ZXh0LmRhdGEuYmluZGluZy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XG4gICAgfVxuXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZBdHRyIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkRkZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKCcjY29tbWVudCcsIHZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5cbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobmFtZSk7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgcHVzaEF0dHIoYXR0cikge1xuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cihrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0LnZlbG0gPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBWQXR0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCIvLyB2aXJ0dWFsIG5vZGVcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcignI3RleHQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICB9XG59IiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxMZXhlcigpLmxleCh0cGwpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XG59XG5cbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwgfTsiLCJleHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZCh2bm9kZSkge1xuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcbiAgICB9XG5cbiAgICBpc1RleHQodm5vZGUpIHtcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xuICAgIH1cblxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjY29tbWVudCc7XG4gICAgfVxuXG4gICAgYnVpbGRFbGVtZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xuICAgICAgICAgICAgfSkuam9pbignICcpLFxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgPSAnICcgKyBhdHRyVHBsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHZlbG0ubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHZlbG0ubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBidWlsZEF0dHJpYnV0ZSh2YXR0cikge1xuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGNsYXNzIFRwbExleGVyIGV4dGVuZHMgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG4gICAgfVxuXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGV4dFxuICAgIHJlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRhZ1xuICAgIHJlYWRUYWcoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHtcbiAgICBWRWxtLCBWQXR0ciwgVlRleHQsIFZDbW50LCBWVHlwZVxufSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRwbFBhcnNlciBleHRlbmRzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xuICAgIH1cblxuICAgIGRvY3R5cGUoKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZG9jVHlwZSA9IG5ldyBWVHlwZSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XG4gICAgfVxuXG4gICAgZWxlbWVudChwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlO1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMocCkge1xuICAgICAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVzO1xuICAgIH1cblxuICAgIGF0dHJzKHApIHtcbiAgICAgICAgdmFyIGF0dHJzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICAgIGN1cnJlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG59IiwidmFyIGRlYnVnTW9kZSA9IHRydWUsXG4gICAgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG5mdW5jdGlvbiBmb3JFYWNoKG9iaiwgYWN0aW9uLCBpZ25vcmVPd24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtpbmRleF0sIGluZGV4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW3BdLCBwKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihwLCBvYmpbcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weShkZWVwLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1hcDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cblxuZnVuY3Rpb24gaXNTYW1lKG9iajEsIG9iajIpIHtcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcblxuICAgIGlmICghc2FtZSkge1xuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcbiAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc2FtZTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh2YWx1ZSkge1xuICAgIHJldHVybiAhaXNPYmplY3QodmFsdWUpIHx8ICFzb21lKHZhbHVlLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWJ1Zyhsb2cpIHtcbiAgICBpZiAoZGVidWdNb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb250YWlucyhhcnIsIG9iaikge1xuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gb2JqO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBjb250YWluc1N0cihhcnIsIHN0ciwgaWdub3JlQ2FzZSkge1xuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSA9PT0gc3RyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShpdGVtKSA9PT0gbG93ZXJjYXNlKHN0cikpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3A7XG59XG5cbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNQcm9wID8gdGFyZ2V0IDogbnVsbDtcbn1cblxuZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqLCBrZXksIHZhbHVlLCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5Ml0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XG4gICAgICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgICAgIH0sIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFoYXNQcm9wKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnOiBDYW4gbm90IHNldCBwcm9wZXJ0eSBvZiB1bmRlZmluZWQnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeShhcnIsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGFyciwgaXRlbSkge1xuICAgIGlmIChhcnIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHBhdHRlcm4gPSAvXFx7KFxcZCspXFx9L2csIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XG59XG5cbmZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yLCBhcnIpIHtcbiAgICB2YXIgcmVzdWx0ID0gJycsIGxlbmd0aCA9IGFyci5sZW5ndGg7XG5cbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmVzdWx0ICs9IGl0ZW07XG5cbiAgICAgICAgaWYgKGluZGV4ICsgMSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHNlcGFyYXRvcjtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IHtcbiAgICBmb3JFYWNoLFxuICAgIHNvbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBpc1VuZGVmaW5lZCxcbiAgICBpc0RlZmluZWQsXG4gICAgaXNPYmplY3QsXG4gICAgaXNCbGFua09iamVjdCxcbiAgICBpc051bWJlcixcbiAgICBpc0RhdGUsXG4gICAgaXNGdW5jdGlvbixcbiAgICBpc1JlZ0V4cCxcbiAgICBpc0Jvb2xlYW4sXG4gICAgaXNBcnJheSxcbiAgICBpc1N0cmluZyxcbiAgICBpc1NhbWUsXG4gICAgaXNFbXB0eSxcbiAgICBpc0Zvcm1EYXRhLFxuICAgIGRlYnVnLFxuICAgIGNvbnRhaW5zLFxuICAgIGNvbnRhaW5zU3RyLFxuICAgIGhhc1Byb3BlcnR5LFxuICAgIGdldFByb3BlcnR5LFxuICAgIHNldFByb3BlcnR5LFxuICAgIGNvbmNhdCxcbiAgICBvcmRlckJ5LFxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxuICAgIHRvTnVtYmVyLFxuICAgIHJlbW92ZSxcbiAgICBmb3JtYXQsXG4gICAgZXNjYXBlSHRtbCxcbiAgICBqb2luXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmVyJztcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLnByb3BzID0ge307XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XG4gICAgdGhpcy4kJGZyYWdtZW50ID0gbnVsbDtcbiAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcbiAgICB0aGlzLiQkY2hpbGRyZW4gPSBbXTtcbiAgICB0aGlzLiQkZGlyZWN0aXZlcyA9IFtdO1xuICAgIHRoaXMuJCRpbmplY3RvciA9IGluamVjdG9yO1xuICAgIHRoaXMuJCRyZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMpO1xuICAgIHRoaXMuJCRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0aGlzKTtcbiAgICB0aGlzLiQkZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih0aGlzKTtcbiAgICB0aGlzLiRkaXNwbGF5ID0gJ2luaGVyaXQnO1xuICAgIHRoaXMuJCRkYXRhID0gdGhpcy4kaW5pdERhdGEoZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBkZWxlZ2F0ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQudG9Qcm94eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0YXJnZXQgaXMgbm90IGEgb2JqZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcyk7XG4gICAgfVxuXG4gICAgJGluaXREYXRhKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgfVxuXG4gICAgJHNldERhdGEoZGF0YSkge1xuICAgICAgICB1dGlscy5leHRlbmQodGhpcy4kJGRhdGEsIGRhdGEpO1xuICAgIH1cblxuICAgICRoYXNDb21wb25lbnQoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkaW5qZWN0b3IuaGFzQ29tcG9uZW50KGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgIH1cblxuICAgICRuZXdDb21wb25lbnQoa2V5KSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuJCRpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgJGhhc0RpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNEaXJlY3RpdmUoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XG4gICAgfVxuXG4gICAgJG5ld0RpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuJCRpbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgICRoYXNGaWx0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkaW5qZWN0b3IuaGFzRmlsdGVyKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgIH1cblxuICAgICRnZXRGaWx0ZXIoa2V5KSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRmlsdGVyKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xuICAgIH1cblxuICAgICRoYXNQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgJGdldFByb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB0cnVlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMuZGVsZWdhdGUodGhpcy5wcm9wcyksIGtleSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhhc01lc3NhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcbiAgICB9XG5cbiAgICAkYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVuYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kJGRhdGE7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy4kJGZyYWdtZW50ID0gdGhpcy4kJHJlbmRlci5yZW5kZXIodGVtcGxhdGUpO1xuICAgICAgICByZXR1cm4gdGhpcy4kJGZyYWdtZW50O1xuICAgIH1cblxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudDtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJCRmcmFnbWVudCk7XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuICAgICAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsIlxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCBhc3NpZ24gdmFsdWUgdG8gYmluZGluZyBleHByZXNzaW9uXG4gICAgdGhpcy4kYXNzaWduZWQgPSBmYWxzZTtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRlbG0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5lbG07XG4gICAgfVxuXG4gICAgZ2V0ICRjb21wb25lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5kYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIuZGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKG1lYXRhZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lYXRhZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAvLyB0aGUgaW5wdXQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICRjaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBwYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZy5leHRlbmRzID0gY29tcG9uZW50Q2xhc3M7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnLmV4dGVuZHMgPSBkaXJlY3RpdmVDbGFzcztcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcuZXh0ZW5kcyA9IGZpbHRlckNsYXNzO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcuZXh0ZW5kcyA9IHNlcnZpY2VDbGFzcztcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcblxufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcblxuLy8gbWV0YWRhdGEgZXhhbXBsZVxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XG5leHBvcnQgY2xhc3MgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXIgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcltrZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGNvbnRhaW5lcltrZXldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lcltrZXldLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuY29tcG9uZW50LCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmZpbHRlciwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLnNlcnZpY2UsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBoYXMocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIGFsaWFzKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gdGhpcy5jb252ZXJ0QWxpYXMoa2V5LCBhbGlhcykuc3BsaXQoJy4nKTtcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBrZXkgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnQoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBoYXNTZXJ2aWNlKGtleSwgYWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgdHJ1ZSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldChyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgYWxpYXMpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGtleSA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Iocm9sZUlkICsgJyAnICsga2V5ICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihrZXksIGFsaWFzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5maWx0ZXIsIGtleSwgYWxpYXMpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoa2V5LCBhbGlhcykge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBhbGlhcyk7XG4gICAgfVxuXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3MgY29uc3RydWN0b3IgZm9yIGtleSAnICsga2V5T3JDb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmRpcmVjdGl2ZSwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY29udmVydEFsaWFzKGtleSwgYWxpYXMpIHtcbiAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdChhbGlhcykpIHtcbiAgICAgICAgICAgIHJldHVybiBrZXk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VnbWVudHMgPSBrZXkuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNsYXNzTmFtZSA9IHNlZ21lbnRzLnBvcCgpLFxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgIHV0aWxzLnNvbWUoYWxpYXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUsIGZ1bGxOYW1lKSB7XG4gICAgICAgICAgICBpZiAoc2hvcnROYW1lID09PSBzcGFjZU5hbWUpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBmdWxsTmFtZSArICcuJyArIGNsYXNzTmFtZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUsIG1ldGFkYXRhLmFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImV4cG9ydCB2YXIgcm9sZXMgPSB7XG4gICAgZmlsdGVyOiAwLFxuICAgIHNlcnZpY2U6IDEsXG4gICAgY29tcG9uZW50OiAyLFxuICAgIGRpcmVjdGl2ZTogM1xufTsiLCJleHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9XG59IiwiXG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gYm9vdHN0cmFwKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBSb290ID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnLCB7XG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgIH0pO1xuICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcbiAgICBcbiAgICBoZWxwZXIuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xuICAgIHJvb3QuJHJlbmRlcigpO1xuICAgIHJvb3QuJG1vdW50KGVsZW1lbnQpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRmlsdGVyLFxuICAgIFNlcnZpY2UsXG4gICAgaXNDb21wb25lbnQsXG4gICAgaXNEaXJlY3RpdmUsXG4gICAgaXNGaWx0ZXIsXG4gICAgaXNTZXJ2aWNlLFxuICAgIG5hbWVzcGFjZSxcbiAgICBib290c3RyYXAsXG4gICAgaW5qZWN0b3Jcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==