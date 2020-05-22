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





var Evaluator = /*#__PURE__*/function () {
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, TplBuilder, Binding, Expression, Render, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, bootstrap, injector, component, directive, filter, service */
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






var Listener = /*#__PURE__*/function () {
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

var Observer = /*#__PURE__*/function () {
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




var ObjectListener = /*#__PURE__*/function () {
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

var Watcher = /*#__PURE__*/function () {
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
    this.evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, {
      assignInterceptor: function assignInterceptor(target, key) {
        target.toProxy()[key] = value;
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

var Expression = /*#__PURE__*/function () {
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
  this.$$data = null;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvYW5hbHlzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V2YWx1YXRvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLW9wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FycmF5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3NpZ25tZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3Qtbm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NhbGwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pZGVudGlmaWVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbG9naWNhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbWVtYmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC91bmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvcGFyc2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZGVsYXllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92YXR0ci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmNtbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZlbG0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Zub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dGV4dC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnR5cGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiTWVzc2FnZSIsImZuIiwiZ2V0Iiwib24iLCJvZmYiLCJhcmdzIiwic2NvcGUiLCJmaXJlIiwiaGFuZGxlcnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJldHVyblZhbHVlIiwidXRpbHMiLCJjYWxsIiwiaXNNZXNzYWdlIiwib2JqIiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsInZhbHVlIiwiJGVsbSIsImlubmVyVGV4dCIsIkRpcmVjdGl2ZSIsIkhpZGVEaXJlY3RpdmUiLCJpbml0aWFsIiwic3R5bGUiLCJkaXNwbGF5IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwiJGNvbXBvbmVudCIsInZhbHVlQ2hhbmdlIiwic2VsZiIsImNvbW1pdFZpZXdWYWx1ZSIsIm5ld3ZhbHVlIiwiRXJyb3IiLCIkJG1ldGEiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwiJHNldEF0dHJpYnV0ZSIsInVwZGF0ZUVsbUNzc0NsYXNzIiwibWFya0RpcnR5U3RhdHVzIiwibGlzdGVuZXIiLCJwYXJzZXIiLCIkYmluZGluZyIsImFzc2lnbiIsImVsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsInZlbG0iLCJ2YXR0ciIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwiYnVpbGRlciIsIlRwbEJ1aWxkZXIiLCJyZW1vdmVBdHRyIiwiYnVpbGQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImhlYWRlciIsImNyZWF0ZUNvbW1lbnQiLCJmb290ZXIiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIiR3YXRjaENvbGxlY3Rpb24iLCJoZWxwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaXRlbXMiLCIkZXZhbCIsIml0ZW0iLCJsb2NhbHMiLCJSZW5kZXIiLCJpdGVtQ29udGVudCIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJzZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInByb2dyYW0iLCJhY2Nlc3NvciIsIkV4cEJ1aWxkZXIiLCJidWZmZXIiLCJwYXJzZUV4cCIsImFuYWx5c2VQcm9ncmFtIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsImFsbG93TnVsbCIsImFzc2lnbkludGVyY2VwdG9yIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCIkaGFzRmlsdGVyIiwiJGdldEZpbHRlciIsImV4ZWN1dGUiLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInNoaWZ0IiwicHJvcHMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwiaW5kZXgiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsImluZGV4T2YiLCJudW0iLCJjb2RlUG9pbnRBdCIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJlcnJvciIsInN0YXJ0IiwiZW5kIiwiY29sU3RyIiwic3Vic3RyaW5nIiwibnVtYmVyIiwicGVla0NoIiwiaXNFeHBPcGVyYXRvciIsImNvbnN0YW50IiwiTnVtYmVyIiwic2xpY2UiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJzcGxpdCIsImxleGVyIiwibXNnIiwiUHJvZ3JhbU5vZGUiLCJleHByZXNzaW9uU3RhdGVtZW50IiwiZXhwZWN0IiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJmaWx0ZXJDaGFpbiIsImFzdCIsInRlcm5hcnkiLCJpc0Fzc2lnbmFibGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxBTkQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJsaXRlcmFscyIsImhhc093blByb3BlcnR5IiwiTGl0ZXJhbE5vZGUiLCJuZXh0IiwicGVla0FoZWFkIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwicGFyc2VBcmd1bWVudHMiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiam9pbiIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiZ2V0Q2hpbGROb2RlcyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2xlYXJDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0Tm9kZUFmdGVyIiwibGFzdENoaWxkIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImVsIiwiY2xzIiwidHJpbSIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJEZWxheWVyIiwiaGFuZGxlciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImV2ZW50cyIsInByb3BDaGFuZ2luZyIsInByb3BDaGFuZ2VkIiwiTGlzdGVuZXIiLCJ2YWx1ZUNoYW5nZWQiLCJjb2xsZWN0aW9uQ2hhbmdlZCIsIm9sZFZhbHVlIiwiT2JzZXJ2ZXIiLCJhY2Nlc3NvcnMiLCJsaXN0ZW5lcnMiLCJ3YXRjaGVyIiwiV2F0Y2hlciIsImFuYWx5c2VyIiwiZGVsYXllciIsIm5vdGlmeSIsImV2YWx1YXRvciIsImhhc0NoYW5nZSIsInNldE5ld1ZhbHVlIiwic2V0Q29sbGVjdGlvbkNoYW5nZWQiLCJnZXRBY2Nlc3NvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJkYXRhIiwibm90aWZ5Q2hhbmdlIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bndhdGNoUHJvcHMiLCJ3YXRjaFByb3BzIiwidW53YXRjaEV4cCIsImFyZ3VtZW50cyIsImNvbGxlY3Rpb24iLCJkZXN0cm95IiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsInNldCIsImdldFRhcmdldCIsInZhbGlkYXRpb24iLCJpc1Byb3h5IiwicHJveHkiLCJ1cGRhdGVQcm94eSIsIlByb3h5IiwiQWdlbnQiLCJBcnJheUFnZW50IiwiY29uY2F0IiwiY29weSIsInJldmVyc2UiLCJzb3J0IiwiT2JqZWN0IiwidG9Qcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib25Qcm9wQ2hhbmdpbmciLCJoYW5kbGVQcm9wQ2hhbmdpbmciLCJvblByb3BDaGFuZ2VkIiwiaGFuZGxlUHJvcENoYW5nZWQiLCJpbml0IiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiZXhwcmVzc2VkIiwibWVzc2FnZWQiLCJhc3NpZ25lZCIsImF1dG9tYXRpb24iLCJjaGFuZ2VkIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsInBhdGNoIiwiY29tcHV0ZSIsInJlZHVjZSIsInByZXYiLCIkd2F0Y2giLCJldmVudFRleHQiLCJkb21FdmVudHMiLCJ2bm9kZXMiLCJkaXJlY3RpdmVzIiwidHBsIiwicGFyc2VUcGwiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsIm5vZGVOYW1lIiwiY29tcGlsZU5vZGUiLCJpc1RleHQiLCJjb21waWxlVGV4dCIsImlzQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJpc0NvbXBvbmVudCIsIiRoYXNDb21wb25lbnQiLCJiaW5kaW5nIiwiY3JlYXRlQmluZGluZyIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJkb21NZXNzYWdlZCIsImlzRGlyZWN0aXZlIiwiJGhhc0RpcmVjdGl2ZSIsIiRuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbmVkIiwiJGNvbXBpbGUiLCJyZWdpc3RlckF1dG9tYXRpb24iLCIkY2hhbmdlIiwic2V0SHRtbEF0dHIiLCIkaGFzQXR0cmlidXRlIiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5zdGFuY2UiLCIkbmV3Q29tcG9uZW50IiwiJGRpc3BsYXkiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRyZW5kZXIiLCIkbW91bnQiLCIkYmluZCIsImxpbmsiLCJWQXR0ciIsIlZOb2RlIiwiVkNtbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImNvbXBpbGVPcHRpb25zIiwiZmlyc3RDaGlsZCIsImJ1aWxkU2libGluZyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJjbGVhclBhcmVudEFuZFNpYmxpbmciLCJvbkRlc3Ryb3kiLCJvd25lckRvY3VtZW50IiwiVlRleHQiLCJWVHlwZSIsImxleFRwbCIsIlRwbExleGVyIiwiVHBsUGFyc2VyIiwiYnVpbGRUZXh0IiwiYnVpbGRDb21tZW50IiwiYnVpbGRFbGVtZW50IiwiYXR0clRwbCIsImJ1aWxkQXR0cmlidXRlIiwiY2hpbGRUcGwiLCJzdHIiLCJiZWdpbiIsImV4cGVjdFN0cmluZyIsImNvbW1lbnQiLCJ0ZXh0VGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJlcXVhbCIsImFsbG93RG9jVHlwZSIsInJlYWRDb21tZW50IiwicmVhZFRhZyIsInJlYWRUZXh0Iiwicm9vdCIsImN1cnJlbnQiLCJlbGVtZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzUmVnRXhwIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiaXNFbXB0eSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGRhdGEiLCIkJGZyYWdtZW50IiwiJCRwYXJlbnQiLCIkJGNoaWxkcmVuIiwiJCRkaXJlY3RpdmVzIiwiJCRpbmplY3RvciIsIiQkcmVuZGVyIiwiJCRvYnNlcnZlciIsIiQkZXZhbHVhdG9yIiwiJHNldERhdGEiLCJpbmplY3RTZXJ2aWNlcyIsIkNvbXBvbmVudCIsIm1ldGhvZHMiLCJjb25zdHJ1Y3QiLCIkJG1ldGFkYXRhIiwiaGFzQ29tcG9uZW50IiwiYWxpYXMiLCJjcmVhdGVDb21wb25lbnQiLCJoYXNEaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwiaGFzRmlsdGVyIiwiY3JlYXRlRmlsdGVyIiwibWVzc2FnZSIsImV2ZW50Iiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCIkZ2V0VGVtcGxhdGUiLCJzZWxlY3Rvck9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkZGVzdHJveSIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwibWVhdGFkYXRhIiwib25Db21waWxlIiwib25DaGFuZ2UiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJGYWN0b3J5Iiwicm9sZUlkIiwibmV3TmFtZSIsInJvbGVzIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5IiwiZmlsdGVyQ29uc3RydWN0b3IiLCJGaWx0ZXIiLCJJbmplY3RvciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJjb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwiY29udmVydEFsaWFzIiwicG9wIiwibWV0YSIsImhhcyIsIm5hbWVzcGFjZXMiLCJrZXlPckNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJnZXRGaWx0ZXIiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiY2xhc3NOYW1lIiwic3BhY2VOYW1lIiwic2hvcnROYW1lIiwiZnVsbE5hbWUiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5IiwiY3JlYXRlU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIlNlcnZpY2UiLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJzZXJ2aWNlQ2xhc3MiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzRmlsdGVyIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiYXBwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFD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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQTyxJQUFNZ1IsT0FB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dGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL2xvY2FsJztcclxuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcclxuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLWJ1cyc7IiwiZXhwb3J0IGNsYXNzIExvY2FsIHtcclxuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSwgYXJnKSB7XHJcbiAgICAgICAgdGhpcy4kZXZlbnQgPSBlO1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbG07XHJcbiAgICAgICAgdGhpcy4kYXJndW1lbnQgPSBhcmc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1tlXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2VzW2VdID0gbmV3IE1lc3NhZ2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbZV07XHJcbiAgICB9XHJcblxyXG4gICAgb24oZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vbihmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKGUsIGZuKSB7XHJcbiAgICAgICAgdGhpcy5nZXQoZSkub2ZmKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGUsIGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGUpLmZpcmUoYXJncywgc2NvcGUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG9uKGZuKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZm4pIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGFuZGxlcnNbaV0gPT09IGZuKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlKGFyZ3MsIHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHJldHVyblZhbHVlO1xyXG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24odGhpcy5oYW5kbGVyc1tpXSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzTWVzc2FnZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzYWdlO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc01lc3NhZ2UgfSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tYmluZCdcclxufSlcclxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kZWxtLmlubmVyVGV4dCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20taGlkZSdcclxufSlcclxuY2xhc3MgSGlkZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbCA9ICdpbml0aWFsJztcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWwgPSB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID09PSAnbm9uZScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5ID0gdGhpcy5pbml0aWFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9oaWRlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcclxuZXhwb3J0ICogZnJvbSAnLi9zdGF0ZSc7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLW1vZGVsJ1xyXG59KVxyXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucGFyc2VycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xyXG4gICAgICAgICAgICBmZWVkYmFjazogJycsXHJcbiAgICAgICAgICAgIHByaXN0aW5lOiB0cnVlLFxyXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICBpbnZhbGlkOiBmYWxzZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xyXG4gICAgICAgICAgICBjc3M6IHtcclxuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXHJcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxyXG4gICAgICAgICAgICAgICAgdmFsaWQ6ICduLXZhbGlkJyxcclxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhZnRlckxpbmsoKSB7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbG0ubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy4kc2NvcGVbbmFtZV0gPSB0aGlzLnN0YXR1cztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChpc01lc3NhZ2UodGhpcy4kY29tcG9uZW50LnZhbHVlQ2hhbmdlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LnZhbHVlQ2hhbmdlLm9uKChlLCBhcmdzKSA9PiBzZWxmLmNvbW1pdFZpZXdWYWx1ZShhcmdzLm5ld3ZhbHVlKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQ29tcG9uZW50ICcgKyB0aGlzLiRjb21wb25lbnQuJCRtZXRhLmtleSArICdtdXN0IGRlZmluZSBbY2hhbmdlXSBldmVudCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgdGhpcy5tb2RlbFZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBmb3JtYXR0ZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0QXR0cmlidXRlKCd2YWx1ZScsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0udmFsdWUgPSBuZXdWYWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21taXRWaWV3VmFsdWUobmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKGZ1bmN0aW9uIChwYXJzZXIpIHtcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xyXG4gICAgICAgICAgICB2YWxpZGF0b3IuY2FsbChzZWxmLCBuZXdWYWx1ZSwgc2VsZi5tb2RlbFZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbmV3VmFsdWU7XHJcblxyXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcclxuICAgICAgICB2YXIgZWxlID0gdGhpcy4kZWxtLFxyXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnByaXN0aW5lKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuZGlydHkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzLnZhbGlkKSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtEaXJ0eVN0YXR1cyhkaXJ0eSkge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG1hcmtWYWxpZFN0YXR1cyh2YWxpZCwgZmVlZGJhY2spIHtcclxuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuZmVlZGJhY2sgPSBmZWVkYmFjaztcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgVHBsQnVpbGRlciB9IGZyb20gJy4uL3RwbCc7XHJcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4uL2hlbHBlcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tcmVwZWF0J1xyXG59KVxyXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1zRXhwID0gJyc7XHJcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkNvbXBpbGUodmVsbSwgdmF0dHIpIHtcclxuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xyXG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhdHRlcm4uZXhlYyhhcmcpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtLXJlcGVhdDogcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gcmVzdWx0WzFdO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XHJcbiAgICAgICAgdmFyIGJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xyXG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XHJcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSBidWlsZGVyLmJ1aWxkKHZlbG0pO1xyXG5cclxuICAgICAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCB0YWtlIG92ZXIgbGluayBmdW5jdGlvbiBmb3IgcmVsYXRlZCB2aXJ0dWFsIGVsZW1lbnQgbm9kZSwgb25MaW5rIGZ1bmN0aW9uIHdpbGwgYmUgY2FsbGVkXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25MaW5rKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdzdGFydDogbS1yZXBlYXQnKTtcclxuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xyXG5cclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcclxuXHJcbiAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBmcmFnbWVudCA9IHRoaXMucmVuZGVyKHNjb3BlKTtcclxuICAgICAgICAgICAgaGVscGVyLnJlbW92ZU5vZGVCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcclxuICAgICAgICAgICAgZm9vdGVyLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZyYWdtZW50LCBmb290ZXIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24oaXRlbSwga2V5KSB7XHJcbiAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcclxuICAgICAgICAgICAgbG9jYWxzWycka2V5J10gPSBrZXk7XHJcbiAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XHJcbiAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcclxuXHJcbiAgICAgICAgICAgIHZhciByZW5kZXIgPSBuZXcgUmVuZGVyKHNjb3BlLCBsb2NhbHMpO1xyXG4gICAgICAgICAgICB2YXIgaXRlbUNvbnRlbnQgPSByZW5kZXIucmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlKTtcclxuXHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1Db250ZW50KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tc2hvdydcclxufSlcclxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbCA9ICdpbml0aWFsJztcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWwgPSB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jaGVja2VkJ1xyXG59KVxyXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tZGlzYWJsZWQnXHJcbn0pXHJcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXHJcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXHJcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXHJcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1yZWFkb25seSdcclxufSlcclxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIHNlbGVjdG9yOiAnbS1zZWxlY3RlZCdcclxufSlcclxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKGtleSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbG0uaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVsbS5yZW1vdmVBdHRyaWJ1dGUodGhpcy5rZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4vZXhwLWFwaSc7XHJcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcclxuXHJcbmNsYXNzIEFjY2Vzc29yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5ba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xyXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSwgZXhwKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UoZXhwKSB7XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmJ1ZmZlcltleHBdO1xyXG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xyXG4gICAgICAgICAgICBwcm9ncmFtID0gcGFyc2VFeHAoZXhwKTtcclxuICAgICAgICAgICAgdGhpcy5idWZmZXJbZXhwXSA9IHByb2dyYW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2UoZXhwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZVByb2dyYW0odGhpcy5wYXJzZShleHApKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlUHJvZ3JhbShwcm9ncmFtKSB7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgcHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcjtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTm9kZShub2RlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXNzaWdubWVudChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDb25kaXRpb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQmluYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVVuYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VMaXRlcmFsKG5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFycmF5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlUHJvcGVydHkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi50ZXN0KTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMubGVmdCk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5yaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUJpbmFyeShiaW5hcnkpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5yaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZVVuYXJ5KHVuYXJ5KSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZSh1bmFyeS5hcmcpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VDYWxsKGNhbGwpIHtcclxuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjYWxsLmNhbGxlZSwgeyBjYWxsZWU6IHRydWUgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLm9iamVjdCk7XHJcblxyXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtZW1iZXIucHJvcGVydHkudHlwZSA9PT0gQVNULkxpdGVyYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxyXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcclxuICAgICAgICAgICAgY2FsbGVlID0gY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTGl0ZXJhbChsaXRlcmFsLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChsaXRlcmFsKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShwcm9wLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlT2JqZWN0KG9iaikge1xyXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUFycmF5KGFycikge1xyXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2UoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4vZXhwLWFwaSc7XHJcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFdmFsdWF0b3Ige1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2Uoe1xyXG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbFxyXG4gICAgICAgIH0sIG9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZShleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuYnVmZmVyW2V4cF07XHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltleHBdID0gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxyXG4gICAgZXZhbHVhdGUoZXhwLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVByb2dyYW0odGhpcy5wYXJzZShleHApLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtLCBsb2NhbHMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWUgdG8gZXhwcmVzc2lvblxyXG4gICAgYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0odGhpcy5wYXJzZShleHApLCB2YWx1ZSwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gZXhwcmVzc2lvbi5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5vYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5vYmplY3QpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50LnByb3BlcnR5KSkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUxvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5yaWdodCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnJiYnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfHwnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzwnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPD0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPj0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnIT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPT09JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchPT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0LFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHVuYXJ5LmFyZyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodW5hcnkub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUNhbGwoY2FsbCkge1xyXG4gICAgICAgIHZhciBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XHJcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2NvcGUuJGhhc0ZpbHRlcihjb250ZXh0LnByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmlsdGVyLmV4ZWN1dGUuYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xyXG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXHJcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXHJcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcclxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldDtcclxuXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldE5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMubG9jYWxzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0ge307XHJcblxyXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcclxuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xyXG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xyXG5cclxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xyXG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcclxuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xyXG59XHJcblxyXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZChub2RlKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuXHJcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcclxuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xyXG5cclxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XHJcblxyXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyB1dGlscy5qb2luKCc6JywgYXJnVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlcztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcclxuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xyXG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XHJcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcclxuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xyXG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgdXRpbHMuam9pbignLCAnLCBwcm9wcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIHV0aWxzLmpvaW4oJywnLCBpdGVtcykpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxleCh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcclxuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xyXG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaXMoY2gsIGNoYXJzKSB7XHJcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKGkpIHtcclxuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzTnVtYmVyKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xyXG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XHJcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcclxuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcclxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxyXG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb2RlUG9pbnRBdChjaCkge1xyXG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXHJcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla011bHRpY2hhcigpIHtcclxuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgaWYgKCFwZWVrKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcclxuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xyXG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2g7XHJcbiAgICB9XHJcblxyXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xyXG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkTnVtYmVyKCkge1xyXG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxyXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZElkZW50KCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcclxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xyXG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XHJcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcclxuXHJcbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcclxudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XHJcblxyXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xyXG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XHJcbn0pOyIsImltcG9ydCB7XHJcbiAgICBBU1QsXHJcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcclxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcclxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcclxuICAgIElkZW50aWZpZXJOb2RlLFxyXG4gICAgTGl0ZXJhbE5vZGUsXHJcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcclxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgUHJvZ3JhbU5vZGUsXHJcbiAgICBQcm9wZXJ0eU5vZGUsXHJcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxyXG59IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcclxuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcclxuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZSh0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvZ3JhbSgpIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xyXG4gICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcclxuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICByZXR1cm4gZXhwO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlckNoYWluKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcclxuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBleHByZXNzaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XHJcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWdubWVudCgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICB0ZXJuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcclxuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xyXG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0ZXN0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxPUigpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ2ljYWxBTkQoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGVxdWFsaXR5KCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsYXRpb25hbCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRpdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHVuYXJ5KCkge1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbWFyeSgpIHtcclxuICAgICAgICB2YXIgcHJpbWFyeTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgbmV4dDtcclxuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XHJcblxyXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcclxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xyXG4gICAgICAgIH0pLmpvaW4oJy4nKTtcclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcclxuXHJcbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XHJcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZ3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWRlbnRpZmllcigpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcclxuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0YW50KCkge1xyXG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XHJcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcclxuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG5cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIG9iamVjdCgpIHtcclxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN1bWUoZTEpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XHJcbiAgICAgICAgaWYgKCF0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrVG9rZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XHJcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XHJcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XHJcbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xyXG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcclxuQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uID0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJztcclxuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xyXG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xyXG5BU1QuQmluYXJ5RXhwcmVzc2lvbiA9ICdCaW5hcnlFeHByZXNzaW9uJztcclxuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xyXG5BU1QuTWVtYmVyRXhwcmVzc2lvbiA9ICdNZW1iZXJFeHByZXNzaW9uJztcclxuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XHJcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xyXG5BU1QuQXJyYXlFeHByZXNzaW9uID0gJ0FycmF5RXhwcmVzc2lvbic7XHJcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XHJcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLiRudWxsID0gdHJ1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcclxuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xyXG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XHJcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XHJcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XHJcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2FzdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2JpbmFyeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9sb2dpY2FsJztcclxuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcclxuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcclxuZXhwb3J0ICogZnJvbSAgJy4vcHJvZ3JhbSc7XHJcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcclxuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2FycmF5JzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXRlcmFsTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcclxuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xyXG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XHJcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xyXG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcclxuICAgICAgICB0aGlzLmtleSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xyXG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcclxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcclxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcclxuICAgIGxpdGVyYWxzOiB7XHJcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxyXG4gICAgICAgIG51bGw6IG51bGwsXHJcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcclxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxyXG4gICAgfVxyXG59OyIsIlxyXG5mdW5jdGlvbiBnZXRDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlLmNoaWxkTm9kZXMsIDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckNoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgZ2V0Q2hpbGROb2Rlcyhub2RlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlcGxhY2VOb2RlKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUpO1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQocmVmTm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBub2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZUJldHdlZW4oYmVnaW5Ob2RlLCBlbmROb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGJlZ2luTm9kZS5wYXJlbnROb2RlO1xyXG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZE5vZGVzKHBhcmVudE5vZGUpO1xyXG5cclxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBiZWdpbk5vZGUgJiYgY2hpbGQgIT09IGVuZE5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kTm9kZSAmJiBjaGlsZCAhPT0gYmVnaW5Ob2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbnNlcnROb2RlQWZ0ZXIocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcblxyXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSByZWZOb2RlKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdOb2RlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZS5uZXh0U2libGluZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudExvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRVbmxvYWRlZChlbGUsIGNhbGxiYWNrKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA9PT0gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID09IDApIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRTdGF0ZShlbGUsIGNhbGxiYWNrcykge1xyXG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2UsIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xyXG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25FbnRlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uRW50ZXIuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Mub25MZWF2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzLm9uTGVhdmUuY2FsbChjYWxsYmFja3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcblxyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBjYW5jZWxUb2tlbiA9IHRydWU7XHJcbiAgICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWwsIGNscykge1xyXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QuYWRkKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbCwgY2xzKSB7XHJcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlbC5jbGFzc0xpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XHJcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcclxuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcclxuICAgICAgICBpZiAoY3VyKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBnZXRDaGlsZE5vZGVzLFxyXG4gICAgY2xlYXJDaGlsZE5vZGVzLFxyXG4gICAgcmVwbGFjZU5vZGUsXHJcbiAgICByZW1vdmVOb2RlLFxyXG4gICAgcmVtb3ZlTm9kZUJldHdlZW4sXHJcbiAgICBpbnNlcnROb2RlQWZ0ZXIsXHJcbiAgICBxdWVyeUVsZW1lbnRMb2FkZWQsXHJcbiAgICBxdWVyeUVsZW1lbnRVbmxvYWRlZCxcclxuICAgIHF1ZXJ5RWxlbWVudFN0YXRlLFxyXG4gICAgYWRkQ2xhc3MsXHJcbiAgICByZW1vdmVDbGFzc1xyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcclxuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xyXG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcclxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcclxuICAgICAgICBpZih0aGlzLmRlbGF5SWQgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSk7XHJcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheUlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcclxuICAgIHByb3BDaGFuZ2luZzogbmV3IE1lc3NhZ2UoKSxcclxuICAgIHByb3BDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBFdmFsdWF0b3IsIEFuYWx5c2VyIH0gZnJvbSAnLi4vZXhwJztcclxuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XHJcbmltcG9ydCB7IERlbGF5ZXIgfSBmcm9tICcuL2RlbGF5ZXInO1xyXG5cclxuY2xhc3MgTGlzdGVuZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXROZXdWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hhbmdlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlZCB8fCB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeShzY29wZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5uZXdWYWx1ZSxcclxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xyXG5cclxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZXdWYWx1ZTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlLCB7XHJcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxyXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZDogY29sbGVjdGlvbkNoYW5nZWRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLndhdGNoZXIgPSBuZXcgV2F0Y2hlcigpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoKTtcclxuICAgICAgICB0aGlzLmRlbGF5ZXIgPSBuZXcgRGVsYXllcih0aGlzLm5vdGlmeSk7XHJcbiAgICAgICAgdGhpcy5ldmFsdWF0b3IgPSAgbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XHJcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcclxuICAgICAgICAgICAgaWYobGlzdGVuZXIuaGFzQ2hhbmdlKCkpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5vdGlmeUNoYW5nZShsaXN0ZW5lciwgbmV3VmFsdWUpIHtcclxuICAgICAgICBpZiAobmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlbGF5ZXIuZXhlY3V0ZSh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBY2Nlc3NvcihleHApIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYoIXJlc3VsdCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcclxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZXZhbHVhdG9yLmV2YWx1YXRlKGtleSwgbG9jYWxzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih2YWx1ZXMgPT09IHNlbGYuc2NvcGUgJiYgbG9jYWxzICYmIGxvY2Fsc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2hlci53YXRjaCh2YWx1ZXMsIGtleSwgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIGFyZ3MuZGF0YS5uZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XHJcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XHJcbiAgICAgICAgdmFyIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcclxuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bndhdGNoUHJvcHMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xyXG4gICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgfSwgbG9jYWxzKTtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XHJcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaGVyLndhdGNoKGNvbGxlY3Rpb24sICcqJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bndhdGNoRXhwLmNhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG52YXIgaXNQcm94eVN5bWJvbCA9IFN5bWJvbCgnX19pc1Byb3h5JyksXHJcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XHJcblxyXG52YXIgaGFuZGxlciA9IHtcclxuICAgIGdldCh0YXJnZXQsIGtleSkge1xyXG4gICAgICAgIGlmKGtleSA9PT0gaXNQcm94eVN5bWJvbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0W2tleV07XHJcbiAgICB9LFxyXG5cclxuICAgIHNldCh0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XHJcbiAgICAgICAgICAgICAgICB2YWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBldmVudHMucHJvcENoYW5naW5nLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHZhbGlkYXRpb25cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5hcHBseSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdlZC5maXJlKHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0YXJnZXRba2V5XSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJveHkocHJveHkpIHtcclxuICAgIHJldHVybiB1dGlscy5pc09iamVjdChwcm94eSkgJiYgcHJveHlbaXNQcm94eVN5bWJvbF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXJnZXQocHJveHkpIHtcclxuICAgIHJldHVybiBpc1Byb3h5KHByb3h5KSA/IHByb3h5W3RhcmdldFN5bWJvbF0gOiBwcm94eTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlUHJveHkodGFyZ2V0LCBrZXkpIHtcclxuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xyXG5cclxuICAgIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkgJiYgIWlzUHJveHkodmFsdWUpKSB7XHJcbiAgICAgICAgZ2V0VGFyZ2V0KHRhcmdldClba2V5XSA9IG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFnZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldFtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHNldChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwga2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEFycmF5QWdlbnQgZXh0ZW5kcyBBZ2VudCB7XHJcbiAgICBnZXQgbGVuZ3RoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRhcmdldC5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IGxlbmd0aCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgc3VwZXIodGFyZ2V0LCBoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBqb2luKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmpvaW4uYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHBvcCgpIHtcclxuICAgICAgICB2YXIgcmVzdWx0LCBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxlbmd0aC0tO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPj0gMCApe1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaCgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGxlbmd0aCArIGluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBsZW5ndGggKz0gYXJndW1lbnRzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHJldmVyc2UoKSB7XHJcbiAgICAgICAgaWYodGhpcy50YXJnZXQubGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICBjb3B5LnJldmVyc2UoKTtcclxuICAgICAgICBjb3B5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgaWYoaXRlbSAhPT0gdGhpcy50YXJnZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNoaWZ0KCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50YXJnZXRbbGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDE7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAoaW5kZXggPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4IC0gMSwgdGhpcy50YXJnZXRbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCAtIDEpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2xpY2UoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnQoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29ydC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3BsaWNlKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNvcHkgPSB1dGlscy5jb3B5KHRoaXMudGFyZ2V0KTtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseShjb3B5LCBhcmdzKTtcclxuXHJcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgIGlmKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBpbmRleCwgdGhpcy50YXJnZXRbaW5kZXhdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZihjb3B5Lmxlbmd0aCAhPT0gbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBjb3B5Lmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBleHRlbmRzIG9iamVjdCBwcm90b3R5cGUsIGFkZCBmdW5jdGlvbiB0b1Byb3h5XHJcbk9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIGlzUHJveHkodGhpcykgPyB0aGlzIDogbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xyXG59OyIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0IHsgZ2V0VGFyZ2V0IH0gZnJvbSAnLi9wcm94eSc7XHJcblxyXG5jbGFzcyBPYmplY3RMaXN0ZW5lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmtleXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIYW5kbGVycyhrZXkpIHtcclxuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XHJcblxyXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFdhdGNoZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2luZyA9IGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb3BDaGFuZ2luZyhhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm9uUHJvcENoYW5nZWQgPSBhcmdzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdlZChhcmdzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuaW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoKSB7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5vbih0aGlzLm9uUHJvcENoYW5naW5nKTtcclxuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub24odGhpcy5vblByb3BDaGFuZ2VkKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9wQ2hhbmdpbmcoYXJncykge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy52YWxpZGF0b3JzLCBhcmdzLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoYXJncy5rZXksIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVQcm9wQ2hhbmdlZChhcmdzKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgYXJncy50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcclxuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleSgnKicsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0O1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xyXG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcclxuXHJcbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy52YWxpZGF0b3JzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmxlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcub2ZmKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xyXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdlZC5vZmYodGhpcy5vblByb3BDaGFuZ2VkKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcclxuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcbiAgICAgICAgLy8gaWRlbnRpZnkgdGV4dCBpcyBhIGV4cHJlc3Npb25cclxuICAgICAgICB0aGlzLmV4cHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlkZW50aXR5IGl0IGlzIGEgZXZlbnQgYmluZGluZ1xyXG4gICAgICAgIHRoaXMubWVzc2FnZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZiB0cnVlLCBhc3NpZ24gdmFsdWUgdG8gZXhwcmVzc2lvblxyXG4gICAgICAgIHRoaXMuYXNzaWduZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcclxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XHJcbiAgICAgICAgdGhpcy5ldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcclxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3IodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC50b1Byb3h5KClba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZSgpIHtcclxuICAgICAgICBpZih0aGlzLm1lc3NhZ2VkIHx8IHRoaXMuYXNzaWduZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcclxuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGluaygpIHtcclxuICAgICAgICBpZih0aGlzLmFzc2lnbmVkIHx8IHRoaXMubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XHJcbiAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0Y2goKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZVxyXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5leHByZXNzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLmV2YWx1YXRvciwgbG9jYWxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuZXZhbHVhdG9yLCB2YWx1ZSwgbG9jYWxzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xyXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbil7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vZGlmeSB2aWV3IGFjY29yZGluZyB0byBtb2RlbFxyXG4gICAgcGF0Y2goKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGFuZ2VkICYmIHRoaXMuYXV0b21hdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHZhbHVlXHJcbiAgICBjb21wdXRlKGV2YWx1YXRvciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRvci5ldmFsdWF0ZSh0aGlzLnRleHQsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHZhbHVlXHJcbiAgICBhc3NpZ24oZXZhbHVhdG9yLCB2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgZXZhbHVhdG9yLmFzc2lnbih0aGlzLnRleHQsIHZhbHVlLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKHNjb3BlLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gc2NvcGUuJHdhdGNoKHRoaXMudGV4dCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxuLy8gV2luZG93IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1sb2FkJzpcclxuLy8gY2FzZSAnb24tdW5sb2FkJzpcclxuLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxyXG4vLyBjYXNlICdvbi1zdWJtaXQnOlxyXG4vLyBjYXNlICdvbi1yZXNldCc6XHJcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XHJcbi8vIGNhc2UgJ29uLWJsdXInOlxyXG4vLyBjYXNlICdvbi1mb2N1cyc6XHJcbi8vIEltYWdlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1hYm9ydCc6XHJcbi8vIEtleWJvYXJkIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcclxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxyXG4vLyBjYXNlICdvbi1rZXl1cCc6XHJcbi8vIE1vdXNlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jbGljayc6XHJcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcclxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcclxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcclxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxyXG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcclxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XHJcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcclxuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJpbmRpbmcodGV4dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRwbCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBwYXJzZVRwbCh0cGwpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZub2Rlcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGRpcmVjdGl2ZS4kcHJlbGluaygpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZub2RlcykuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbG0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xyXG4gICAgICAgICAgICBkaXJlY3RpdmUuJHBvc3RsaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBpc1RleHQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21tZW50KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcclxuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGUodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtOb2Rlcyh2bm9kZXMpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtOb2RlKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RleHQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtFbG0odm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVFbG0odmVsbSkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRpcmVjdGl2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2godmF0dHIuZGF0YS5kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgdmVsbS5kYXRhLmxpbmtlciA9IHZhdHRyLmRhdGEubGlua2VyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbG0uZGF0YS5saW5rZXIgIT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XHJcbiAgICAgICAgdXRpbHMub3JkZXJCeShkaXJlY3RpdmVzLCBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUuJHByaW9yaXR5O1xyXG4gICAgICAgIH0pLmZvckVhY2goZGlyZWN0aXZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGlyZWN0aXZlIGRlZmluZXMgY3VzdG9tIGxpbmtlciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHJlbmRlciBlbmdpbmUgd2lsbCBub3QgcmVuZGVyIGl0IGFjY29yZGluZyB0byBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWxtLmRhdGEuaXNDb21wb25lbnQgPSB0aGlzLnNjb3BlLiRoYXNDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghdmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XHJcbiAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZhdHRyLm5vZGVWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5tZXNzYWdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5tZXNzYWdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmRvbU1lc3NhZ2VkID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB2YXR0ci5kYXRhLmtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuZXhwcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmlzRGlyZWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3BlLiRoYXNEaXJlY3RpdmUodmF0dHIuZGF0YS5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZSA9IHRoaXMuc2NvcGUuJG5ld0RpcmVjdGl2ZSh2YXR0ci5kYXRhLmtleSk7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuYXNzaWduZWQgPSB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kYXNzaWduZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmxpbmtlciA9IHZhdHRyLmRhdGEuZGlyZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB2YXR0ci5kYXRhLmtleSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLmRhdGEuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhdHRyLmRhdGEubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEua2V5LnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmF0dHIudmVsbS5jb21wb25lbnQuJGhhc0F0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmF0dHIudmVsbS5jb21wb25lbnQuJHNldEF0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21waWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodnRleHQubm9kZVZhbHVlKTtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgZWxtLCBuZXdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlci5yZXBsYWNlTm9kZSh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5rRWxtKHZlbG0pIHtcclxuICAgICAgICBpZiAodmVsbS5kYXRhLmxpbmtlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyLiRsaW5rKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh2ZWxtLmRhdGEuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5zY29wZS4kbmV3Q29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdmVsbS5kYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB2ZWxtLmVsbS5zdHlsZS5kaXNwbGF5ID0gaW5zdGFuY2UuJGRpc3BsYXk7XHJcblxyXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua0F0dHIodmF0dHIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XHJcbiAgICAgICAgICAgIGluc3RhbmNlLiRyZW5kZXIoKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHZlbG0uZWxtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rQXR0cih2YXR0cikge1xyXG4gICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLmRhdGEubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZG9tTWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBuZXcgTG9jYWwoZSwgZWxtKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIudmVsbS5jb21wb25lbnQuJGJpbmQodmF0dHIuZGF0YS5rZXksIGZ1bmN0aW9uIChlLCBhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsczogbmV3IExvY2FsKGUsIGVsbSwgYXJnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5saW5rKCk7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5wYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVGV4dCh2dGV4dCkge1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5saW5rKCk7XHJcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQuZGF0YS5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdnRleHQuZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtDb21tZW50KHZjbW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbC1idWlsZGVyJzsiLCJleHBvcnQgKiBmcm9tICcuL3Zub2RlJztcclxuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZlbG0nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVkNtbnQgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCcjY29tbWVudCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5pbXBvcnQgeyBWQXR0ciB9IGZyb20gJy4vdmF0dHInO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZFbG0gZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy52YXR0cnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEF0dHIoYXR0cikge1xyXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cihrZXkpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgVkF0dHIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcclxuICAgICAgICBpZiAoYXR0ci52ZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xyXG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE91dGVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XHJcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmF0dHJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCIvLyB2aXJ0dWFsIG5vZGVcclxuZXhwb3J0IGNsYXNzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmJ1aWxkU2libGluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xyXG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xyXG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVOb2RlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhvb3BzXHJcblxyXG4gICAgLy8gZW5kIG9mIGhvb3BzXHJcbn1cclxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIoJyN0ZXh0JywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVlR5cGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcclxuaW1wb3J0IHsgVHBsUGFyc2VyIH0gZnJvbSAnLi90cGwtcGFyc2VyJztcclxuXHJcbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcclxuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcclxuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XHJcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XHJcbiAgICByZXR1cm4gbmV3IFRwbFBhcnNlcihuZXcgVHBsTGV4ZXIoKSkucGFyc2UodHBsKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCB9OyIsImV4cG9ydCBjbGFzcyBUcGxCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZCh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RleHQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21tZW50KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XHJcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEF0dHJpYnV0ZSh2YXR0cik7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcclxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgaWYoYXR0clRwbCkge1xyXG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xyXG5cclxuICAgICAgICBpZiAoIXZlbG0uc2VsZkNsb3NlZCkge1xyXG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHZ0ZXh0Lm5vZGVWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENvbW1lbnQodmNtbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XHJcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xyXG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXHJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIHRleHRcclxuICAgIHJlYWRUZXh0KCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwgdGFnXHJcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXgodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQge1xyXG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcclxufSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xyXG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UodGV4dCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xyXG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3R5cGUoKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50KHApIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkRWxlbWVudHMocCkge1xyXG4gICAgICAgIHZhciBlbGVzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJzKHApIHtcclxuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbn0iLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcclxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbcF0sIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XHJcbiAgICAgICAgZGVlcCA9IG9iajtcclxuICAgICAgICBvYmpJbmRleCsrO1xyXG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcclxuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xyXG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcclxuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XHJcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcclxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcclxuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3Qobykge1xyXG4gICAgZnVuY3Rpb24gRigpIHtcclxuICAgIH1cclxuXHJcbiAgICBGLnByb3RvdHlwZSA9IG87XHJcbiAgICByZXR1cm4gbmV3IEYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XHJcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xyXG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XHJcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01hcChvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XHJcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcclxuXHJcbiAgICBpZiAoIXNhbWUpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xyXG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcclxuICAgIHJldHVybiAhaXNPYmplY3QodmFsdWUpIHx8ICFzb21lKHZhbHVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobG9nKSB7XHJcbiAgICBpZiAoZGVidWdNb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhhc1Byb3ApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdCgpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XHJcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGFyciwgZ2V0dGVyKSB7XHJcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XHJcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdCgpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXHJcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XHJcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XHJcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yLCBhcnIpIHtcclxuICAgIHZhciByZXN1bHQgPSAnJywgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICByZXN1bHQgKz0gaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICsgMSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gc2VwYXJhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmb3JFYWNoLFxyXG4gICAgc29tZSxcclxuICAgIGNvcHksXHJcbiAgICBleHRlbmQsXHJcbiAgICBtZXJnZSxcclxuICAgIG9iamVjdCxcclxuICAgIGluaGVyaXQsXHJcbiAgICBsb3dlcmNhc2UsXHJcbiAgICB1cHBlcmNhc2UsXHJcbiAgICBpc1VuZGVmaW5lZCxcclxuICAgIGlzRGVmaW5lZCxcclxuICAgIGlzT2JqZWN0LFxyXG4gICAgaXNCbGFua09iamVjdCxcclxuICAgIGlzTnVtYmVyLFxyXG4gICAgaXNEYXRlLFxyXG4gICAgaXNGdW5jdGlvbixcclxuICAgIGlzUmVnRXhwLFxyXG4gICAgaXNCb29sZWFuLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTYW1lLFxyXG4gICAgaXNFbXB0eSxcclxuICAgIGlzRm9ybURhdGEsXHJcbiAgICBkZWJ1ZyxcclxuICAgIGNvbnRhaW5zLFxyXG4gICAgY29udGFpbnNTdHIsXHJcbiAgICBoYXNQcm9wZXJ0eSxcclxuICAgIGdldFByb3BlcnR5LFxyXG4gICAgc2V0UHJvcGVydHksXHJcbiAgICBjb25jYXQsXHJcbiAgICBvcmRlckJ5LFxyXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXHJcbiAgICB0b051bWJlcixcclxuICAgIHJlbW92ZSxcclxuICAgIGZvcm1hdCxcclxuICAgIGVzY2FwZUh0bWwsXHJcbiAgICBqb2luXHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGlzTWVzc2FnZSwgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmVyJztcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLiQkZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XHJcbiAgICB0aGlzLiQkZnJhZ21lbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMuJCRkaXJlY3RpdmVzID0gW107XHJcbiAgICB0aGlzLiQkaW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICAgIHRoaXMuJCRyZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMpO1xyXG4gICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xyXG4gICAgdGhpcy4kJGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcyk7XHJcbiAgICB0aGlzLiRkaXNwbGF5ID0gJ2luaGVyaXQnO1xyXG4gICAgdGhpcy4kc2V0RGF0YShkYXRhKTtcclxuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJCRkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QoZGF0YS5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICAgICAgdXRpbHMuZXh0ZW5kKHRoaXMsIGRhdGEubWV0aG9kcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZGF0YS5jb25zdHJ1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmNvbnN0cnVjdC5jYWxsKHRoaXMsIE1lc3NhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiQkZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0NvbXBvbmVudChrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkbmV3Q29tcG9uZW50KGtleSkge1xyXG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuJCRpbmplY3Rvci5jcmVhdGVDb21wb25lbnQoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcclxuICAgICAgICByZXR1cm4gY2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0RpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0RpcmVjdGl2ZShrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkbmV3RGlyZWN0aXZlKGtleSkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcztcclxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5wdXNoKGRpcmVjdGl2ZSk7XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzRmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkaW5qZWN0b3IuaGFzRmlsdGVyKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRnZXRGaWx0ZXIoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuICB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRmlsdGVyKGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNBdHRyaWJ1dGUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMsIGtleSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldEF0dHJpYnV0ZShrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywga2V5LCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eSh0aGlzLnRvUHJveHkoKSwga2V5LCB2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICRiaW5kKG1lc3NhZ2UsIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIG1lc3NhZ2UsIHRydWUpO1xyXG5cclxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArICcgaXMgbm90IGEgbWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkdW5iaW5kKGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBtZXNzYWdlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlICsgJyBpcyBub3QgYSBtZXNzYWdlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgJGV2YWwoZXhwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0VGVtcGxhdGUoKSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB0aGlzLiQkZGF0YTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcclxuICAgICAgICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudGVtcGxhdGVJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xyXG4gICAgICAgIHRoaXMuJCRmcmFnbWVudCA9IHRoaXMuJCRyZW5kZXIucmVuZGVyKHRlbXBsYXRlKTtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGZyYWdtZW50O1xyXG4gICAgfVxyXG5cclxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kJGZyYWdtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAkdW5tb3VudCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICBjaGlsZC4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBpdGVtLiRkZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLiQkc2NvcGUgPSBudWxsO1xyXG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcclxuICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIGFzc2lnbiB2YWx1ZSB0byBiaW5kaW5nIGV4cHJlc3Npb25cclxuICAgIHRoaXMuJGFzc2lnbmVkID0gZmFsc2U7XHJcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xyXG4gICAgZ2V0ICRzY29wZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkZWxtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5lbG07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0ICRjb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmRhdGEuY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkYmluZGluZygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLmRhdGEuYmluZGluZztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihtZWF0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1lYXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXHJcbiAgICAkY29tcGlsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkNvbXBpbGUgJiYgdGhpcy5vbkNvbXBpbGUodGhpcy4kJHZhdHRyLnZlbG0sIHRoaXMuJCR2YXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcclxuICAgICRjaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRsaW5rKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9uTGluayAmJiB0aGlzLm9uTGluayh0aGlzLiRzY29wZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmVmb3JlIGxpbmtpbmdcclxuICAgIC8vICRwcmVsaW5rKCkge1xyXG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhZnRlciBsaW5raW5nXHJcbiAgICAkcG9zdGxpbmsoKSB7XHJcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcclxuICAgIH1cclxuXHJcbiAgICAkZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XHJcblxyXG52YXIgcGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xyXG5cclxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXHJcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5hbWUocm9sZUlkLCBrZXkpIHtcclxuICAgICAgICBpZiAocGF0dGVybi50ZXN0KGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0ga2V5LnNwbGl0KCctJyk7XHJcblxyXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcclxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtYWtlKHJvbGVJZCwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbWV0YWRhdGEua2V5KSxcclxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKG1ldGFkYXRhLmNvbnN0cnVjdCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtZXRhZGF0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhZGF0YS5leHRlbmRzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBtZXRhZGF0YS5leHRlbmRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLm1ldGhvZHMpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmV4dGVuZChjb25zdHJ1Y3Rvci5wcm90b3R5cGUsIG1ldGFkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VDb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VGaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiXHJcbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5cclxuLy8gbWV0YWRhdGEgZXhhbXBsZVxyXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cclxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIocm9sZUlkLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcclxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBrZXk7XHJcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcclxuXHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gY29udGFpbmVyW2tleV0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29udGFpbmVyW2tleV0ucHVzaChjb25zdHJ1Y3Rvcik7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBhbGlhcykge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NvbXBvbmVudChrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmNvbXBvbmVudCwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNGaWx0ZXIoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgdHJ1ZSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1NlcnZpY2Uoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5zZXJ2aWNlLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IHRoaXMuY29udmVydEFsaWFzKGtleSwgYWxpYXMpLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgdmFyIG5hbWVzcGFjZSA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBrZXkgPSBzZWdtZW50cy5wb3AoKTtcclxuICAgICAgICAgICAgbmFtZXNwYWNlID0gc2VnbWVudHMuam9pbignLicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHJvbGVJZCArICcgJyArIGtleSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBub3QgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBuYW1lc3BhY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBrZXkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRDb21wb25lbnQoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldERpcmVjdGl2ZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmlsdGVyKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZmlsdGVyLCBrZXksIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRTZXJ2aWNlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3I7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzcyBjb25zdHJ1Y3RvciBmb3Iga2V5ICcgKyBrZXlPckNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xyXG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZURpcmVjdGl2ZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XHJcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xyXG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgY29udmVydEFsaWFzKGtleSwgYWxpYXMpIHtcclxuICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KGFsaWFzKSkge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0ga2V5LnNwbGl0KCcuJyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjbGFzc05hbWUgPSBzZWdtZW50cy5wb3AoKSxcclxuICAgICAgICAgICAgc3BhY2VOYW1lID0gc2VnbWVudHMuam9pbignLicpO1xyXG5cclxuICAgICAgICB1dGlscy5zb21lKGFsaWFzLCBmdW5jdGlvbiAoc2hvcnROYW1lLCBmdWxsTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoc2hvcnROYW1lID09PSBzcGFjZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGZ1bGxOYW1lICsgJy4nICsgY2xhc3NOYW1lO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGtleTtcclxuICAgIH1cclxuXHJcbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcclxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UodmFsdWUsIG1ldGFkYXRhLmFsaWFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB2YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTsiLCJleHBvcnQgdmFyIHJvbGVzID0ge1xyXG4gICAgZmlsdGVyOiAwLFxyXG4gICAgc2VydmljZTogMSxcclxuICAgIGNvbXBvbmVudDogMixcclxuICAgIGRpcmVjdGl2ZTogM1xyXG59OyIsImV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ29tcG9uZW50LCAgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXHJcbnZhciBjb21wb25lbnRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xyXG5cclxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmRpcmVjdGl2ZUNsYXNzLnByb3RvdHlwZSA9IERpcmVjdGl2ZS5wcm90b3R5cGU7XHJcblxyXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcclxuXHJcbnZhciBzZXJ2aWNlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcclxuICAgIH07XHJcbn0pKCk7XHJcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcclxuLy8gZW5kIG9mIG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxyXG5cclxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50KGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIoa2V5LCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgbWV0YWRhdGEpIHtcclxuICAgIG1ldGFkYXRhLmV4dGVuZHMgPSBjb21wb25lbnRDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpcmVjdGl2ZShrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gZGlyZWN0aXZlQ2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VEaXJlY3RpdmUobWV0YWRhdGEpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgbWV0YWRhdGEuZXh0ZW5kcyA9IGZpbHRlckNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKG1ldGFkYXRhKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2VydmljZShrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gc2VydmljZUNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlU2VydmljZShtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgQ29tcG9uZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RpcmVjdGl2ZShpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xyXG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIFNlcnZpY2U7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJvb3RzdHJhcChzZWxlY3RvciwgbWV0YWRhdGEpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgYXBwID0gbmV3IENvbXBvbmVudCh1dGlscy5tZXJnZSh7XHJcbiAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXHJcbiAgICB9LCBtZXRhZGF0YSkpO1xyXG4gICAgaGVscGVyLmNsZWFyQ2hpbGROb2RlcyhlbGVtZW50KTtcclxuICAgIGFwcC4kcmVuZGVyKCk7XHJcbiAgICBhcHAuJG1vdW50KGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgRmlsdGVyLFxyXG4gICAgU2VydmljZSxcclxuICAgIGlzQ29tcG9uZW50LFxyXG4gICAgaXNEaXJlY3RpdmUsXHJcbiAgICBpc0ZpbHRlcixcclxuICAgIGlzU2VydmljZSxcclxuICAgIG5hbWVzcGFjZSxcclxuICAgIGJvb3RzdHJhcCxcclxuICAgIGluamVjdG9yXHJcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==