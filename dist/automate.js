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
      assignInterceptor: function assignInterceptor(target, key, value) {
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
    value: function make(roleId, name, config) {
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
      }

      return constructor;
    }
  }, {
    key: "makeComponent",
    value: function makeComponent(name, config) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].component, name, config);
    }
  }, {
    key: "makeDirective",
    value: function makeDirective(name, config) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].directive, name, config);
    }
  }, {
    key: "makeFilter",
    value: function makeFilter(name, config) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].filter, name, config);
    }
  }, {
    key: "makeService",
    value: function makeService(name, config) {
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].service, name, config);
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
  config["extends"] = componentClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeComponent(key, config);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerComponent(key, constructor, metadata);
  return constructor;
}

function _directive(key, config, metadata) {
  config["extends"] = directiveClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeDirective(key, config);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerDirective(key, constructor, metadata);
  return constructor;
}

function _filter(key, config, metadata) {
  config["extends"] = filterClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeFilter(key, config);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].registerFilter(key, constructor, metadata);
  return constructor;
}

function _service(key, config, metadata) {
  config["extends"] = serviceClass;
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeService(key, config);
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

function bootstrap(selector, config) {
  config["extends"] = componentClass;
  var element = document.querySelector(selector);
  var App = _factory__WEBPACK_IMPORTED_MODULE_4__["factory"].makeComponent('root', config);
  var app = new App();
  app.$setData({
    template: element.innerHTML
  });
  _helper__WEBPACK_IMPORTED_MODULE_6__["clearChildNodes"](element);
  app.$render();
  app.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvYW5hbHlzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V2YWx1YXRvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLW9wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FycmF5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3NpZ25tZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3Qtbm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NhbGwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pZGVudGlmaWVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbG9naWNhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbWVtYmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC91bmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvcGFyc2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZGVsYXllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92YXR0ci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmNtbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZlbG0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Zub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dGV4dC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnR5cGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiTWVzc2FnZSIsImZuIiwiZ2V0Iiwib24iLCJvZmYiLCJhcmdzIiwic2NvcGUiLCJmaXJlIiwiaGFuZGxlcnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJldHVyblZhbHVlIiwidXRpbHMiLCJjYWxsIiwiaXNNZXNzYWdlIiwib2JqIiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsInZhbHVlIiwiJGVsbSIsImlubmVyVGV4dCIsIkRpcmVjdGl2ZSIsIkhpZGVEaXJlY3RpdmUiLCJpbml0aWFsIiwic3R5bGUiLCJkaXNwbGF5IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwiJGNvbXBvbmVudCIsInZhbHVlQ2hhbmdlIiwic2VsZiIsImNvbW1pdFZpZXdWYWx1ZSIsIm5ld3ZhbHVlIiwiRXJyb3IiLCIkJG1ldGEiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwiJHNldEF0dHJpYnV0ZSIsInVwZGF0ZUVsbUNzc0NsYXNzIiwibWFya0RpcnR5U3RhdHVzIiwibGlzdGVuZXIiLCJwYXJzZXIiLCIkYmluZGluZyIsImFzc2lnbiIsImVsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsInZlbG0iLCJ2YXR0ciIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwiYnVpbGRlciIsIlRwbEJ1aWxkZXIiLCJyZW1vdmVBdHRyIiwiYnVpbGQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImhlYWRlciIsImNyZWF0ZUNvbW1lbnQiLCJmb290ZXIiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIiR3YXRjaENvbGxlY3Rpb24iLCJoZWxwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaXRlbXMiLCIkZXZhbCIsIml0ZW0iLCJsb2NhbHMiLCJSZW5kZXIiLCJpdGVtQ29udGVudCIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJzZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInByb2dyYW0iLCJhY2Nlc3NvciIsIkV4cEJ1aWxkZXIiLCJidWZmZXIiLCJwYXJzZUV4cCIsImFuYWx5c2VQcm9ncmFtIiwicGFyc2UiLCJjaGlsZE5vZGVzIiwiY2hpbGQiLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsImFsbG93TnVsbCIsImFzc2lnbkludGVyY2VwdG9yIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCIkaGFzRmlsdGVyIiwiJGdldEZpbHRlciIsImV4ZWN1dGUiLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInNoaWZ0IiwicHJvcHMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwiaW5kZXgiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsImluZGV4T2YiLCJudW0iLCJjb2RlUG9pbnRBdCIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJlcnJvciIsInN0YXJ0IiwiZW5kIiwiY29sU3RyIiwic3Vic3RyaW5nIiwibnVtYmVyIiwicGVla0NoIiwiaXNFeHBPcGVyYXRvciIsImNvbnN0YW50IiwiTnVtYmVyIiwic2xpY2UiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJzcGxpdCIsImxleGVyIiwibXNnIiwiUHJvZ3JhbU5vZGUiLCJleHByZXNzaW9uU3RhdGVtZW50IiwiZXhwZWN0IiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJmaWx0ZXJDaGFpbiIsImFzdCIsInRlcm5hcnkiLCJpc0Fzc2lnbmFibGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxBTkQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJsaXRlcmFscyIsImhhc093blByb3BlcnR5IiwiTGl0ZXJhbE5vZGUiLCJuZXh0IiwicGVla0FoZWFkIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwicGFyc2VBcmd1bWVudHMiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiam9pbiIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiZ2V0Q2hpbGROb2RlcyIsIkFycmF5IiwicHJvdG90eXBlIiwiY2xlYXJDaGlsZE5vZGVzIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlTm9kZSIsInJlZk5vZGUiLCJuZXdOb2RlIiwicmVtb3ZlTm9kZSIsInJlbW92ZU5vZGVCZXR3ZWVuIiwiYmVnaW5Ob2RlIiwiZW5kTm9kZSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiaW5zZXJ0Tm9kZUFmdGVyIiwibGFzdENoaWxkIiwicXVlcnlFbGVtZW50TG9hZGVkIiwiY2FsbGJhY2siLCJjYW5jZWxUb2tlbiIsInF1ZXJ5IiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJxdWVyeUVsZW1lbnRVbmxvYWRlZCIsInF1ZXJ5RWxlbWVudFN0YXRlIiwiY2FsbGJhY2tzIiwibG9hZGVkIiwib25FbnRlciIsIm9uTGVhdmUiLCJhZGRDbGFzcyIsImVsIiwiY2xzIiwidHJpbSIsImMiLCJjdXIiLCJnZXRBdHRyaWJ1dGUiLCJyZW1vdmVDbGFzcyIsInRhciIsInJlcGxhY2UiLCJEZWxheWVyIiwiaGFuZGxlciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsImV2ZW50cyIsInByb3BDaGFuZ2luZyIsInByb3BDaGFuZ2VkIiwiTGlzdGVuZXIiLCJ2YWx1ZUNoYW5nZWQiLCJjb2xsZWN0aW9uQ2hhbmdlZCIsIm9sZFZhbHVlIiwiT2JzZXJ2ZXIiLCJhY2Nlc3NvcnMiLCJsaXN0ZW5lcnMiLCJ3YXRjaGVyIiwiV2F0Y2hlciIsImFuYWx5c2VyIiwiZGVsYXllciIsIm5vdGlmeSIsImV2YWx1YXRvciIsImhhc0NoYW5nZSIsInNldE5ld1ZhbHVlIiwic2V0Q29sbGVjdGlvbkNoYW5nZWQiLCJnZXRBY2Nlc3NvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJkYXRhIiwibm90aWZ5Q2hhbmdlIiwicmVtb3ZlTGlzdGVuZXIiLCJ1bndhdGNoUHJvcHMiLCJ3YXRjaFByb3BzIiwidW53YXRjaEV4cCIsImFyZ3VtZW50cyIsImNvbGxlY3Rpb24iLCJkZXN0cm95IiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsInNldCIsImdldFRhcmdldCIsInZhbGlkYXRpb24iLCJpc1Byb3h5IiwicHJveHkiLCJ1cGRhdGVQcm94eSIsIlByb3h5IiwiQWdlbnQiLCJBcnJheUFnZW50IiwiY29uY2F0IiwiY29weSIsInJldmVyc2UiLCJzb3J0IiwiT2JqZWN0IiwidG9Qcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib25Qcm9wQ2hhbmdpbmciLCJoYW5kbGVQcm9wQ2hhbmdpbmciLCJvblByb3BDaGFuZ2VkIiwiaGFuZGxlUHJvcENoYW5nZWQiLCJpbml0IiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiZXhwcmVzc2VkIiwibWVzc2FnZWQiLCJhc3NpZ25lZCIsImF1dG9tYXRpb24iLCJjaGFuZ2VkIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsInBhdGNoIiwiY29tcHV0ZSIsInJlZHVjZSIsInByZXYiLCIkd2F0Y2giLCJldmVudFRleHQiLCJkb21FdmVudHMiLCJ2bm9kZXMiLCJkaXJlY3RpdmVzIiwidHBsIiwicGFyc2VUcGwiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsIm5vZGVOYW1lIiwiY29tcGlsZU5vZGUiLCJpc1RleHQiLCJjb21waWxlVGV4dCIsImlzQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJpc0NvbXBvbmVudCIsIiRoYXNDb21wb25lbnQiLCJiaW5kaW5nIiwiY3JlYXRlQmluZGluZyIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJkb21NZXNzYWdlZCIsImlzRGlyZWN0aXZlIiwiJGhhc0RpcmVjdGl2ZSIsIiRuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbmVkIiwiJGNvbXBpbGUiLCJyZWdpc3RlckF1dG9tYXRpb24iLCIkY2hhbmdlIiwic2V0SHRtbEF0dHIiLCIkaGFzQXR0cmlidXRlIiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5zdGFuY2UiLCIkbmV3Q29tcG9uZW50IiwiJGRpc3BsYXkiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRyZW5kZXIiLCIkbW91bnQiLCIkYmluZCIsImxpbmsiLCJWQXR0ciIsIlZOb2RlIiwiVkNtbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImNvbXBpbGVPcHRpb25zIiwiZmlyc3RDaGlsZCIsImJ1aWxkU2libGluZyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJjbGVhclBhcmVudEFuZFNpYmxpbmciLCJvbkRlc3Ryb3kiLCJvd25lckRvY3VtZW50IiwiVlRleHQiLCJWVHlwZSIsImxleFRwbCIsIlRwbExleGVyIiwiVHBsUGFyc2VyIiwiYnVpbGRUZXh0IiwiYnVpbGRDb21tZW50IiwiYnVpbGRFbGVtZW50IiwiYXR0clRwbCIsImJ1aWxkQXR0cmlidXRlIiwiY2hpbGRUcGwiLCJzdHIiLCJiZWdpbiIsImV4cGVjdFN0cmluZyIsImNvbW1lbnQiLCJ0ZXh0VGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJlcXVhbCIsImFsbG93RG9jVHlwZSIsInJlYWRDb21tZW50IiwicmVhZFRhZyIsInJlYWRUZXh0Iiwicm9vdCIsImN1cnJlbnQiLCJlbGVtZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzUmVnRXhwIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiaXNFbXB0eSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGRhdGEiLCIkJGZyYWdtZW50IiwiJCRwYXJlbnQiLCIkJGNoaWxkcmVuIiwiJCRkaXJlY3RpdmVzIiwiJCRpbmplY3RvciIsIiQkcmVuZGVyIiwiJCRvYnNlcnZlciIsIiQkZXZhbHVhdG9yIiwiJHNldERhdGEiLCJpbmplY3RTZXJ2aWNlcyIsIkNvbXBvbmVudCIsIiQkbWV0YWRhdGEiLCJoYXNDb21wb25lbnQiLCJhbGlhcyIsImNyZWF0ZUNvbXBvbmVudCIsImhhc0RpcmVjdGl2ZSIsImNyZWF0ZURpcmVjdGl2ZSIsIiQkc2NvcGUiLCJoYXNGaWx0ZXIiLCJjcmVhdGVGaWx0ZXIiLCJtZXNzYWdlIiwiZXZlbnQiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZSIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsImlubmVySFRNTCIsIiRnZXRUZW1wbGF0ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRkZXN0cm95IiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCJtZWF0YWRhdGEiLCJvbkNvbXBpbGUiLCJvbkNoYW5nZSIsIm9uTGluayIsImFmdGVyTGluayIsIkZhY3RvcnkiLCJyb2xlSWQiLCJuZXdOYW1lIiwicm9sZXMiLCJjb25maWciLCJjb25zdHJ1Y3Rvck5hbWUiLCJyZW5hbWUiLCJvbkNvbnN0cnVjdCIsImNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwibWFrZSIsImZhY3RvcnkiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsIkZpbHRlciIsIkluamVjdG9yIiwiY2xhc3NDb250YWluZXIiLCJpbnN0YW5jZUNvbnRhaW5lciIsImNvbnRhaW5lciIsImdldENsYXNzQ29udGFpbmVyIiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvcnMiLCJjb252ZXJ0QWxpYXMiLCJwb3AiLCJtZXRhIiwiaGFzIiwibmFtZXNwYWNlcyIsImtleU9yQ29uc3RydWN0b3IiLCJjcmVhdGUiLCJnZXRJbnN0YW5jZUNvbnRhaW5lciIsImdldEZpbHRlciIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJjbGFzc05hbWUiLCJzcGFjZU5hbWUiLCJzaG9ydE5hbWUiLCJmdWxsTmFtZSIsImluamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaXZhdGVLZXkiLCJjcmVhdGVTZXJ2aWNlIiwic2VydmljZUNvbnN0cnVjdG9yIiwiU2VydmljZSIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsInNlcnZpY2VDbGFzcyIsIm1ha2VDb21wb25lbnQiLCJtYWtlRGlyZWN0aXZlIiwibWFrZUZpbHRlciIsIm1ha2VTZXJ2aWNlIiwiaXNGaWx0ZXIiLCJpc1NlcnZpY2UiLCJib290c3RyYXAiLCJBcHAiLCJhcHAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFr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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUFDNmxCLGFBQVQsQ0FBdUJ0a0IsUUFBdkIsQ0FBZDtBQUNBLE1BQUlxb0IsR0FBRyxHQUFHNUMsZ0RBQU8sQ0FBQ3FDLGFBQVIsQ0FBc0IsTUFBdEIsRUFBOEI1QyxNQUE5QixDQUFWO0FBQ0EsTUFBSW9ELEdBQUcsR0FBRyxJQUFJRCxHQUFKLEVBQVY7QUFDQUMsS0FBRyxDQUFDckYsUUFBSixDQUFhO0FBQ1RlLFlBQVEsRUFBRXpHLE9BQU8sQ0FBQzRHO0FBRFQsR0FBYjtBQUdBbGxCLHlEQUFBLENBQXVCc2UsT0FBdkI7QUFDQStLLEtBQUcsQ0FBQzlOLE9BQUo7QUFDQThOLEtBQUcsQ0FBQzdOLE1BQUosQ0FBVzhDLE9BQVg7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UtYnVzJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xyXG4gICAgY29uc3RydWN0b3IoZSwgZWxtLCBhcmcpIHtcclxuICAgICAgICB0aGlzLiRldmVudCA9IGU7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcclxuICAgICAgICB0aGlzLiRhcmd1bWVudCA9IGFyZztcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldChlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VzW2VdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbZV0gPSBuZXcgTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1tlXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb24oZm4pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihmbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcclxuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmhhbmRsZXJzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzTWVzc2FnZSB9IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIHRhcmdldCwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1iaW5kJ1xyXG59KVxyXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbG0uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1oaWRlJ1xyXG59KVxyXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tbW9kZWwnXHJcbn0pXHJcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiAnJyxcclxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxyXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGVsbS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzTWVzc2FnZSh0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2Uub24oKGUsIGFyZ3MpID0+IHNlbGYuY29tbWl0Vmlld1ZhbHVlKGFyZ3MubmV3dmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgJyArIHRoaXMuJGNvbXBvbmVudC4kJG1ldGEua2V5ICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24obmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVsbUNzc0NsYXNzKCkge1xyXG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbG0sXHJcbiAgICAgICAgICAgIGNzcyA9IHRoaXMub3B0aW9ucy5jc3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5wcmlzdGluZSA9ICFkaXJ0eTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaW52YWxpZCA9ICF2YWxpZDtcclxuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsJztcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1yZXBlYXQnXHJcbn0pXHJcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xyXG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcclxuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XHJcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGJ1aWxkZXIuYnVpbGQodmVsbSk7XHJcblxyXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpbmsoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XHJcblxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMuaXRlbXNFeHAsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xyXG4gICAgICAgICAgICBoZWxwZXIucmVtb3ZlTm9kZUJldHdlZW4oaGVhZGVyLCBmb290ZXIpO1xyXG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NvcGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xyXG4gICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IG5ldyBSZW5kZXIoc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtQ29udGVudCA9IHJlbmRlci5yZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zaG93J1xyXG59KVxyXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9IHRoaXMuaW5pdGlhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNoZWNrZWQnXHJcbn0pXHJcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1kaXNhYmxlZCdcclxufSlcclxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcclxuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcclxuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXJlYWRvbmx5J1xyXG59KVxyXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAgc2VsZWN0b3I6ICdtLXNlbGVjdGVkJ1xyXG59KVxyXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmtleSA9IGtleTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsbS5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc2V0QXR0cmlidXRlKHRoaXMua2V5LCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbG0uaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcclxuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xyXG5cclxuY2xhc3MgQWNjZXNzb3Ige1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBleHApIHtcclxuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcclxuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUsIGV4cCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQW5hbHlzZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XHJcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3Jba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3Jba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZShleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuYnVmZmVyW2V4cF07XHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltleHBdID0gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZShleHApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcclxuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xyXG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXJnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFjYWxsLmZpbHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIub2JqZWN0KTtcclxuXHJcbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xyXG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChtZW1iZXIucHJvcGVydHkudmFsdWUsIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcclxuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXHJcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGlkZW50aWZpZXIpLFxyXG4gICAgICAgICAgICBjYWxsZWUgPSBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlO1xyXG5cclxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VMaXRlcmFsKGxpdGVyYWwsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xyXG5cclxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZVByb3BlcnR5KHByb3ApIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHByb3AudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQXJyYXkoYXJyKSB7XHJcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcclxuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZSh7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcclxuICAgICAgICB0aGlzLmJ1ZmZlciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlKGV4cCkge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5idWZmZXJbZXhwXTtcclxuICAgICAgICBpZiAoIXByb2dyYW0pIHtcclxuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnVmZmVyW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWUgZnJvbSBleHByZXNzaW9uXHJcbiAgICBldmFsdWF0ZShleHAsIGxvY2Fscykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCksIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscykge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcblxyXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LiRudWxsKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZSB0byBleHByZXNzaW9uXHJcbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWduUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCksIHZhbHVlLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChleHByZXNzaW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XHJcblxyXG4gICAgICAgIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiAhYXNzaWdubWVudC5jb21wdXRlZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQucHJvcGVydHkpKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTG9naWMobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVVuYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNhbGwobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVNZW1iZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTGl0ZXJhbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlUHJvcGVydHkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5sZWZ0LCB7XHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0Lm9iaiwgdGFyZ2V0LnByb3AsIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcmJic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd8fCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xyXG5cclxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xyXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJysnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnKic6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy8nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICclJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPCc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJz4nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc8PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchPSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc9PT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xyXG4gICAgICAgIHZhciByZXN1bHQsXHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJy0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyEnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XHJcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGFyZyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcclxuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRmlsdGVyKGNvbnRleHQucHJvcCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnNjb3BlLiRnZXRGaWx0ZXIoY29udGV4dC5wcm9wKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuZXhlY3V0ZS5hcHBseShmaWx0ZXIsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xyXG5cclxuICAgICAgICBpZiAob2JqID09IG51bGwgJiYgKHRoaXMub3B0aW9ucy5hbGxvd051bGwgfHwgbWVtYmVyLm9iamVjdC5hbGxvd051bGwpKSB7XHJcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcclxuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xyXG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZTogbWVtYmVyLm9iamVjdCxcclxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLFxyXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0O1xyXG5cclxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc2NvcGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBjb250ZXh0LnRhcmdldFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgcHJvcDogaWRlbnRpZmllci5uYW1lXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eUtleSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgdGhpcy5sb2NhbHMpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcclxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZVByb3BlcnR5KHByb3ApIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC5rZXksIHtcclxuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlT2JqZWN0KG9iaikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xyXG4gICAgICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVBcnJheShhcnIpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XHJcbmltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4vZXhwLXBhcnNlcic7XHJcblxyXG5mdW5jdGlvbiBsZXhFeHAoZXhwKSB7XHJcbiAgICByZXR1cm4gbmV3IEV4cExleGVyKCkubGV4KGV4cCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xyXG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkKG5vZGUpIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEV4cHJlc3Npb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXNzaWdubWVudChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ29uZGl0aW9uKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExvZ2ljKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQmluYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRVbmFyeShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDYWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTWVtYmVyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkSWRlbnRpZmllcihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExpdGVyYWwobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFycmF5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFByb3BlcnR5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkT2JqZWN0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5idWlsZChhc3NpZ25tZW50LmxlZnQpO1xyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5yaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5idWlsZChjb25kaXRpb24udGVzdCk7XHJcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0/ezF9OnsyfScsIHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRMb2dpYyhsb2dpYykge1xyXG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLmxlZnQpO1xyXG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBsb2dpYy5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRCaW5hcnkoYmluYXJ5KSB7XHJcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgYmluYXJ5Lm9wZXJhdG9yLCByaWdodFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFVuYXJ5KHVuYXJ5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZCh1bmFyeS5hcmcpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcclxuICAgICAgICB2YXIgcmVzID0gJycsIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoYXJnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdmFyIGZuID0gdGhpcy5idWlsZChjYWxsLmNhbGxlZSk7XHJcblxyXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xyXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIHV0aWxzLmpvaW4oJzonLCBhcmdWYWx1ZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXMgPSB1dGlscy5mb3JtYXQoJ3swfSh7MX0pJywgZm4sIHV0aWxzLmpvaW4oJywgJywgYXJnVmFsdWVzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTWVtYmVyKG1lbWJlcikge1xyXG4gICAgICAgIHZhciBvYmogPSB0aGlzLmJ1aWxkKG1lbWJlci5vYmplY3QpO1xyXG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XHJcbiAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZExpdGVyYWwobGl0ZXJhbCkge1xyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhsaXRlcmFsLnZhbHVlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZChwcm9wLmtleSwge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHByb3AudmFsdWUpO1xyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH06ezF9Jywga2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgdmFyIHByb3BzID0gb2JqLnByb3BlcnRpZXMubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCB1dGlscy5qb2luKCcsICcsIHByb3BzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBcnJheShhcnIpIHtcclxuICAgICAgICB2YXIgaXRlbXMgPSBhcnIuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1t7MH1dJywgdXRpbHMuam9pbignLCcsIGl0ZW1zKSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IE9QRVJBVE9SUyB9IGZyb20gJy4vZXhwLW9wZXJhdG9ycyc7XHJcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwTGV4ZXIge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgbGV4KHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XHJcbiAgICAgICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcclxuICAgIH1cclxuXHJcbiAgICBpcyhjaCwgY2hhcnMpIHtcclxuICAgICAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHBlZWsoaSkge1xyXG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaXNOdW1iZXIoY2gpIHtcclxuICAgICAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNXaGl0ZXNwYWNlKGNoKSB7XHJcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXHJcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcclxuICAgICAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0lkZW50aWZpZXJTdGFydChjaCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xyXG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XHJcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNJZGVudGlmaWVyQ29udGludWUoY2gpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cclxuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvZGVQb2ludEF0KGNoKSB7XHJcbiAgICAgICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcclxuICAgICAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrTXVsdGljaGFyKCkge1xyXG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICBpZiAoIXBlZWspIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcclxuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaCArIHBlZWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjaDtcclxuICAgIH1cclxuXHJcbiAgICBpc0V4cE9wZXJhdG9yKGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93RXJyb3IoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcclxuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcclxuICAgICAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWROdW1iZXIoKSB7XHJcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcclxuICAgICAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICB0ZXh0OiBudW1iZXIsXHJcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkSWRlbnQoKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxyXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZFN0cmluZyhxdW90ZSkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgICAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XHJcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIGlmIChlc2NhcGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcclxuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIE9QRVJBVE9SUyA9IHt9O1xyXG5cclxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xyXG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcclxuXHJcbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XHJcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcclxufSk7IiwiaW1wb3J0IHtcclxuICAgIEFTVCxcclxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSxcclxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSxcclxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxyXG4gICAgSWRlbnRpZmllck5vZGUsXHJcbiAgICBMaXRlcmFsTm9kZSxcclxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcclxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLFxyXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBQcm9ncmFtTm9kZSxcclxuICAgIFByb3BlcnR5Tm9kZSxcclxuICAgIFVuYXJ5RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXHJcbn0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xyXG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5sZXhlciA9IGxleGVyO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xyXG4gICAgICAgICAgICAnIG9mIHRoZSBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10gc3RhcnRpbmcgYXQgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHRva2VuLmluZGV4KSArICddLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlKHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9ncmFtKCkge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XHJcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XHJcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XHJcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xyXG4gICAgICAgIGV4cC5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckNoYWluKCkpO1xyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyQ2hhaW4oKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGV4cHJlc3Npb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcclxuICAgICAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcclxuICAgIH1cclxuXHJcbiAgICBhc3NpZ25tZW50KCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHRlcm5hcnkoKSB7XHJcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xyXG4gICAgICAgIHZhciBhbHRlcm5hdGU7XHJcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcclxuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRlc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naWNhbE9SKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naWNhbEFORCgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXF1YWxpdHkoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICByZWxhdGlvbmFsKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZGl0aXZlKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIG11bHRpcGxpY2F0aXZlKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgdW5hcnkoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcmltYXJ5KCkge1xyXG4gICAgICAgIHZhciBwcmltYXJ5O1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBuZXh0O1xyXG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xyXG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJpbWFyeTtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXIoYmFzZUV4cHJlc3Npb24pIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBwbHVzIG5hbWVzcGFjZVxyXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWU7XHJcbiAgICAgICAgfSkuam9pbignLicpO1xyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xyXG5cclxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcclxuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcclxuICAgICAgICAgICAgZG8ge1xyXG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJncztcclxuICAgIH1cclxuXHJcbiAgICBpZGVudGlmaWVyKCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xyXG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RhbnQoKSB7XHJcbiAgICAgICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcclxuICAgICAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBhcnJheURlY2xhcmF0aW9uKCkge1xyXG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcblxyXG4gICAgICAgIHJldHVybiBhcnI7XHJcbiAgICB9XHJcblxyXG4gICAgb2JqZWN0KCkge1xyXG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xyXG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xyXG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3VtZShlMSkge1xyXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcclxuICAgICAgICBpZiAoIXRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfVxyXG5cclxuICAgIHBlZWtUb2tlbigpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcclxuICAgIH1cclxuXHJcbiAgICBwZWVrQWhlYWQoaSwgZTEsIGUyLCBlMywgZTQpIHtcclxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcclxuICAgICAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcclxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVjdChlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XHJcbiAgICAgICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHAtbGV4ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cC1wYXJzZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cC1idWlsZGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9ldmFsdWF0b3InO1xyXG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcclxuICAgICAgICBzdXBlcihBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcclxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XHJcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xyXG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xyXG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XHJcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XHJcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xyXG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XHJcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xyXG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcclxuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XHJcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcclxuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcclxuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XHJcblxyXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xyXG4gICAgICAgIHN1cGVyKEFTVC5DYWxsRXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcclxuICAgICAgICB0aGlzLmZpbHRlciA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcclxuICAgICAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcclxuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULklkZW50aWZpZXIpO1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcclxuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWdubWVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcclxuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb25kaXRpb25hbCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vbGl0ZXJhbCc7XHJcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xyXG5leHBvcnQgKiBmcm9tICAnLi9vYmplY3QnO1xyXG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcclxuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xyXG5leHBvcnQgKiBmcm9tICAnLi91bmFyeSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5MaXRlcmFsKTtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcclxuICAgICAgICBzdXBlcihBU1QuTWVtYmVyRXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcclxuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcclxuICAgICAgICBzdXBlcihBU1QuT2JqZWN0RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb2dyYW1Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Qcm9wZXJ0eSk7XHJcbiAgICAgICAgdGhpcy5raW5kID0gJ2luaXQnO1xyXG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYXJnKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5wcmVmaXggPSB0cnVlO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLmFyZyA9IGFyZztcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgcGFyc2VPcHRpb25zID0ge1xyXG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxyXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxyXG4gICAgbGl0ZXJhbHM6IHtcclxuICAgICAgICBmYWxzZTogZmFsc2UsXHJcbiAgICAgICAgbnVsbDogbnVsbCxcclxuICAgICAgICB0cnVlOiB0cnVlLFxyXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXHJcbiAgICB9XHJcbn07IiwiXHJcbmZ1bmN0aW9uIGdldENoaWxkTm9kZXMobm9kZSkge1xyXG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGUuY2hpbGROb2RlcywgMCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyQ2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICBnZXRDaGlsZE5vZGVzKG5vZGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVwbGFjZU5vZGUocmVmTm9kZSwgbmV3Tm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSByZWZOb2RlLnBhcmVudE5vZGU7XHJcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3Tm9kZSwgcmVmTm9kZSk7XHJcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChyZWZOb2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlTm9kZShub2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlQmV0d2VlbihiZWdpbk5vZGUsIGVuZE5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gYmVnaW5Ob2RlLnBhcmVudE5vZGU7XHJcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkTm9kZXMocGFyZW50Tm9kZSk7XHJcblxyXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IGJlZ2luTm9kZSAmJiBjaGlsZCAhPT0gZW5kTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmROb2RlICYmIGNoaWxkICE9PSBiZWdpbk5vZGUpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluc2VydE5vZGVBZnRlcihyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuXHJcbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IHJlZk5vZGUpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld05vZGUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlLm5leHRTaWJsaW5nKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlFbGVtZW50TG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xyXG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID4gMCAmJiBlbGUuY2xpZW50SGVpZ2h0ID4gMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFVubG9hZGVkKGVsZSwgY2FsbGJhY2spIHtcclxuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlO1xyXG5cclxuICAgIGZ1bmN0aW9uIHF1ZXJ5KCkge1xyXG4gICAgICAgIGlmIChjYW5jZWxUb2tlbikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZWxlLmNsaWVudFdpZHRoID09PSAwICYmIGVsZS5jbGllbnRIZWlnaHQgPT0gMCkge1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHF1ZXJ5RWxlbWVudFN0YXRlKGVsZSwgY2FsbGJhY2tzKSB7XHJcbiAgICB2YXIgY2FuY2VsVG9rZW4gPSBmYWxzZSwgbG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XHJcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmICghbG9hZGVkKSB7XHJcbiAgICAgICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkVudGVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25FbnRlci5jYWxsKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChsb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcy5vbkxlYXZlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Mub25MZWF2ZS5jYWxsKGNhbGxiYWNrcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShxdWVyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuXHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNhbmNlbFRva2VuID0gdHJ1ZTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZENsYXNzIChlbCwgY2xzKSB7XHJcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGVsLmNsYXNzTGlzdCkge1xyXG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcclxuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsLmNsYXNzTGlzdC5hZGQoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xzKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XHJcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XHJcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsLCBjbHMpIHtcclxuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xyXG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVsLmNsYXNzTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcclxuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xyXG4gICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcclxuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXIgPSBjdXIudHJpbSgpO1xyXG4gICAgICAgIGlmIChjdXIpIHtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIGdldENoaWxkTm9kZXMsXHJcbiAgICBjbGVhckNoaWxkTm9kZXMsXHJcbiAgICByZXBsYWNlTm9kZSxcclxuICAgIHJlbW92ZU5vZGUsXHJcbiAgICByZW1vdmVOb2RlQmV0d2VlbixcclxuICAgIGluc2VydE5vZGVBZnRlcixcclxuICAgIHF1ZXJ5RWxlbWVudExvYWRlZCxcclxuICAgIHF1ZXJ5RWxlbWVudFVubG9hZGVkLFxyXG4gICAgcXVlcnlFbGVtZW50U3RhdGUsXHJcbiAgICBhZGRDbGFzcyxcclxuICAgIHJlbW92ZUNsYXNzXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcclxuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XHJcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0aW1lb3V0KSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xyXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXhlY3V0ZShzY29wZSkge1xyXG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcclxuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlJZCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcclxuXHJcbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xyXG4gICAgcHJvcENoYW5naW5nOiBuZXcgTWVzc2FnZSgpLFxyXG4gICAgcHJvcENoYW5nZWQ6IG5ldyBNZXNzYWdlKClcclxufTsiLCJleHBvcnQgKiBmcm9tICcuL29ic2VydmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBXYXRjaGVyIH0gZnJvbSAnLi93YXRjaGVyJztcclxuaW1wb3J0IHsgRGVsYXllciB9IGZyb20gJy4vZGVsYXllcic7XHJcblxyXG5jbGFzcyBMaXN0ZW5lciB7XHJcbiAgICBjb25zdHJ1Y3RvcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE5ld1ZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRDb2xsZWN0aW9uQ2hhbmdlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDaGFuZ2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KHNjb3BlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLFxyXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5ld1ZhbHVlO1xyXG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUsIHtcclxuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkOiBjb2xsZWN0aW9uQ2hhbmdlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5hY2Nlc3NvcnMgPSB7fTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IG5ldyBBbmFseXNlcigpO1xyXG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKHRoaXMubm90aWZ5KTtcclxuICAgICAgICB0aGlzLmV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcclxuICAgICAgICAgICAgYWxsb3dOdWxsOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcclxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcclxuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5KCkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xyXG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xyXG5cclxuICAgICAgICBpZighcmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xyXG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yc1tleHBdID0gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmNvcHkodHJ1ZSwgcmVzdWx0KTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XHJcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9ICB0aGlzLmV2YWx1YXRvcjtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzKSB7XHJcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaC5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRhcmdldDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcclxuICAgICAgICAgICAgICAgICAgICBrZXkgPSBldmFsdWF0b3IuZXZhbHVhdGUoa2V5LCBsb2NhbHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlcyA9PT0gc2VsZi5zY29wZSAmJiBsb2NhbHMgJiYgbG9jYWxzW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xyXG4gICAgICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgYXJncy5kYXRhLm5ld1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IsIHRoaXMuc2NvcGUpO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29yKTtcclxuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXHJcbiAgICAgICAgICAgIGV2YWx1YXRvciA9ICB0aGlzLmV2YWx1YXRvcjtcclxuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xyXG4gICAgICAgIHZhciB1bndhdGNoRXhwID0gdGhpcy53YXRjaChleHAsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9LCBsb2NhbHMpO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hQcm9wcygpIHtcclxuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoZXIud2F0Y2goY29sbGVjdGlvbiwgJyonLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xyXG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5kZWxheWVyLmRlc3Ryb3koKTtcclxuICAgICAgICB0aGlzLndhdGNoZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcclxuICAgIHRhcmdldFN5bWJvbCA9IFN5bWJvbCgnX190YXJnZXQnKTtcclxuXHJcbnZhciBoYW5kbGVyID0ge1xyXG4gICAgZ2V0KHRhcmdldCwga2V5KSB7XHJcbiAgICAgICAgaWYoa2V5ID09PSBpc1Byb3h5U3ltYm9sKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXRba2V5XTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0KHRhcmdldCwga2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgdmFsaWRhdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXBwbHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcclxuICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgZGF0YTogdmFsaWRhdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLmZpcmUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNQcm94eShwcm94eSkge1xyXG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhcmdldChwcm94eSkge1xyXG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm94eSh0YXJnZXQsIGtleSkge1xyXG4gICAgdmFyIHZhbHVlID0gdGFyZ2V0W2tleV07XHJcblxyXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcclxuICAgICAgICBnZXRUYXJnZXQodGFyZ2V0KVtrZXldID0gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQWdlbnQge1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0W2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0KGtleSwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgQXJyYXlBZ2VudCBleHRlbmRzIEFnZW50IHtcclxuICAgIGdldCBsZW5ndGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICBzdXBlcih0YXJnZXQsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdCgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIGpvaW4oKSB7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgcG9wKCkge1xyXG4gICAgICAgIHZhciByZXN1bHQsIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID09PSAwKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGVuZ3RoLS07XHJcblxyXG4gICAgICAgIGlmKGxlbmd0aCA+PSAwICl7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMudGFyZ2V0W2xlbmd0aF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoKCkge1xyXG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XHJcblxyXG4gICAgICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgbGVuZ3RoICsgaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGxlbmd0aCArPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgcmV2ZXJzZSgpIHtcclxuICAgICAgICBpZih0aGlzLnRhcmdldC5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIGNvcHkucmV2ZXJzZSgpO1xyXG4gICAgICAgIGNvcHkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICBpZihpdGVtICE9PSB0aGlzLnRhcmdldFtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hpZnQoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gMTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgaW5kZXggLSAxLCB0aGlzLnRhcmdldFtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgbGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICBzbGljZSgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgc29ydCgpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zb3J0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzcGxpY2UoKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KGNvcHksIGFyZ3MpO1xyXG5cclxuICAgICAgICBjb3B5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgaWYoaXRlbSAhPT0gdGhpcy50YXJnZXRbaW5kZXhdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCB0aGlzLnRhcmdldFtpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmKGNvcHkubGVuZ3RoICE9PSBsZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGNvcHkubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcclxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XHJcbn07IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi9ldmVudHMnO1xyXG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcclxuXHJcbmNsYXNzIE9iamVjdExpc3RlbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xyXG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xyXG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhhbmRsZXJzKGtleSkge1xyXG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBbXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XHJcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcclxuXHJcbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBoYW5kbGVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcclxuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XHJcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgV2F0Y2hlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm9uUHJvcENoYW5naW5nID0gYXJncyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvcENoYW5naW5nKGFyZ3MpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMub25Qcm9wQ2hhbmdlZCA9IGFyZ3MgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5pbml0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdCgpIHtcclxuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9uKHRoaXMub25Qcm9wQ2hhbmdpbmcpO1xyXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdlZC5vbih0aGlzLm9uUHJvcENoYW5nZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByb3BDaGFuZ2luZyhhcmdzKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLnZhbGlkYXRvcnMsIGFyZ3MudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVByb3BDaGFuZ2VkKGFyZ3MpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBhcmdzLnRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoYXJncy5rZXksIGFyZ3MpO1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyLCBmaWx0ZXJzID0gbGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IE9iamVjdExpc3RlbmVyKHRhcmdldCk7XHJcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XHJcblxyXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2godGFyZ2V0LCBrZXksIGFjdGlvbikge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xyXG5cclxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGUodGFyZ2V0LCBrZXksIGFjdGlvbikge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLnZhbGlkYXRvcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcclxuXHJcbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMubGVuZ3RoID0gMDtcclxuXHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5vZmYodGhpcy5vblByb3BDaGFuZ2luZyk7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9mZih0aGlzLm9uUHJvcENoYW5nZWQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBFdmFsdWF0b3IgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5kaW5nIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcclxuICAgICAgICAvLyBpZGVudGlmeSB0ZXh0IGlzIGEgZXhwcmVzc2lvblxyXG4gICAgICAgIHRoaXMuZXhwcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWRlbnRpdHkgaXQgaXMgYSBldmVudCBiaW5kaW5nXHJcbiAgICAgICAgdGhpcy5tZXNzYWdlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGlmIHRydWUsIGFzc2lnbiB2YWx1ZSB0byBleHByZXNzaW9uXHJcbiAgICAgICAgdGhpcy5hc3NpZ25lZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIGhhbmRsZXIgdG8gdXBkYXRlIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZVxyXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLmV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwge1xyXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcih0YXJnZXQsIGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC50b1Byb3h5KClba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XHJcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xyXG4gICAgICAgIHJldHVybiBleHA7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZSgpIHtcclxuICAgICAgICBpZih0aGlzLm1lc3NhZ2VkIHx8IHRoaXMuYXNzaWduZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcclxuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGluaygpIHtcclxuICAgICAgICBpZih0aGlzLmFzc2lnbmVkIHx8IHRoaXMubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuXHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XHJcbiAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF0Y2goKTtcclxuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGRldGVjdCgpIHtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldCB2YWx1ZVxyXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5leHByZXNzZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLmV2YWx1YXRvciwgbG9jYWxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuZXZhbHVhdG9yLCB2YWx1ZSwgbG9jYWxzKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xyXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xyXG4gICAgICAgIGlmKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbil7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIG1vZGlmeSB2aWV3IGFjY29yZGluZyB0byBtb2RlbFxyXG4gICAgcGF0Y2goKSB7XHJcbiAgICAgICAgaWYodGhpcy5jaGFuZ2VkICYmIHRoaXMuYXV0b21hdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IHZhbHVlXHJcbiAgICBjb21wdXRlKGV2YWx1YXRvciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIGV2YWx1YXRvci5ldmFsdWF0ZSh0aGlzLnRleHQsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0IHZhbHVlXHJcbiAgICBhc3NpZ24oZXZhbHVhdG9yLCB2YWx1ZSwgbG9jYWxzKSB7XHJcbiAgICAgICAgZXZhbHVhdG9yLmFzc2lnbih0aGlzLnRleHQsIHZhbHVlLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHdhdGNoKHNjb3BlLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gc2NvcGUuJHdhdGNoKHRoaXMudGV4dCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCAqIGFzIGhlbHBlciBmcm9tICcuLi9oZWxwZXInO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xyXG5cclxuLy8gV2luZG93IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1sb2FkJzpcclxuLy8gY2FzZSAnb24tdW5sb2FkJzpcclxuLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxyXG4vLyBjYXNlICdvbi1zdWJtaXQnOlxyXG4vLyBjYXNlICdvbi1yZXNldCc6XHJcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XHJcbi8vIGNhc2UgJ29uLWJsdXInOlxyXG4vLyBjYXNlICdvbi1mb2N1cyc6XHJcbi8vIEltYWdlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1hYm9ydCc6XHJcbi8vIEtleWJvYXJkIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcclxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxyXG4vLyBjYXNlICdvbi1rZXl1cCc6XHJcbi8vIE1vdXNlIEV2ZW50c1xyXG4vLyBjYXNlICdvbi1jbGljayc6XHJcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcclxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcclxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcclxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxyXG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxyXG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcclxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XHJcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXIge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcclxuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUJpbmRpbmcodGV4dCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHRwbCkge1xyXG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuXHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBwYXJzZVRwbCh0cGwpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZub2Rlcyk7XHJcblxyXG4gICAgICAgIC8vIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGRpcmVjdGl2ZS4kcHJlbGluaygpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZub2RlcykuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbG0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xyXG4gICAgICAgICAgICBkaXJlY3RpdmUuJHBvc3RsaW5rKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBpc1RleHQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21tZW50KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcclxuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGUodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUZXh0KHZub2RlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmtOb2Rlcyh2bm9kZXMpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtOb2RlKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RleHQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtFbG0odm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVFbG0odmVsbSkge1xyXG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRpcmVjdGl2ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2godmF0dHIuZGF0YS5kaXJlY3RpdmUpO1xyXG4gICAgICAgICAgICAgICAgdmVsbS5kYXRhLmxpbmtlciA9IHZhdHRyLmRhdGEubGlua2VyO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbG0uZGF0YS5saW5rZXIgIT0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XHJcbiAgICAgICAgdXRpbHMub3JkZXJCeShkaXJlY3RpdmVzLCBmdW5jdGlvbiAoZGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUuJHByaW9yaXR5O1xyXG4gICAgICAgIH0pLmZvckVhY2goZGlyZWN0aXZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gZGlyZWN0aXZlIGRlZmluZXMgY3VzdG9tIGxpbmtlciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHJlbmRlciBlbmdpbmUgd2lsbCBub3QgcmVuZGVyIGl0IGFjY29yZGluZyB0byBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWxtLmRhdGEuaXNDb21wb25lbnQgPSB0aGlzLnNjb3BlLiRoYXNDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICghdmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XHJcbiAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZhdHRyLm5vZGVWYWx1ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5tZXNzYWdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5tZXNzYWdlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmRvbU1lc3NhZ2VkID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB2YXR0ci5kYXRhLmtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJzonKSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuZXhwcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmlzRGlyZWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5rZXkgPSB2YXR0ci5ub2RlTmFtZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNjb3BlLiRoYXNEaXJlY3RpdmUodmF0dHIuZGF0YS5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZSA9IHRoaXMuc2NvcGUuJG5ld0RpcmVjdGl2ZSh2YXR0ci5kYXRhLmtleSk7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuYXNzaWduZWQgPSB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kYXNzaWduZWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmxpbmtlciA9IHZhdHRyLmRhdGEuZGlyZWN0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB2YXR0ci5kYXRhLmtleSArICcgaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLmRhdGEuaXNEaXJlY3RpdmUpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoIXZhdHRyLmRhdGEubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEua2V5LnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKHZhdHRyLmRhdGEua2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodmF0dHIudmVsbS5jb21wb25lbnQuJGhhc0F0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmF0dHIudmVsbS5jb21wb25lbnQuJHNldEF0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21waWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodnRleHQubm9kZVZhbHVlKTtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YXIgZWxtLCBuZXdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlbHBlci5yZXBsYWNlTm9kZSh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBsaW5rRWxtKHZlbG0pIHtcclxuICAgICAgICBpZiAodmVsbS5kYXRhLmxpbmtlciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyLiRsaW5rKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XHJcblxyXG4gICAgICAgIGlmICh2ZWxtLmRhdGEuaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5zY29wZS4kbmV3Q29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICAgICAgdmVsbS5kYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xyXG4gICAgICAgICAgICB2ZWxtLmVsbS5zdHlsZS5kaXNwbGF5ID0gaW5zdGFuY2UuJGRpc3BsYXk7XHJcblxyXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua0F0dHIodmF0dHIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XHJcbiAgICAgICAgICAgIGluc3RhbmNlLiRyZW5kZXIoKTtcclxuICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHZlbG0uZWxtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rQXR0cih2YXR0cikge1xyXG4gICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcclxuXHJcbiAgICAgICAgaWYgKHZhdHRyLmRhdGEubWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgaWYgKHZhdHRyLmRhdGEuZG9tTWVzc2FnZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5jb21wdXRlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxzOiBuZXcgTG9jYWwoZSwgZWxtKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodmF0dHIudmVsbS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIudmVsbS5jb21wb25lbnQuJGJpbmQodmF0dHIuZGF0YS5rZXksIGZ1bmN0aW9uIChlLCBhcmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsczogbmV3IExvY2FsKGUsIGVsbSwgYXJnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5saW5rKCk7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5wYXRjaCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rVGV4dCh2dGV4dCkge1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5saW5rKCk7XHJcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQuZGF0YS5iaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICByZXR1cm4gdnRleHQuZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmtDb21tZW50KHZjbW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xyXG5leHBvcnQgKiBmcm9tICcuL3RwbC1idWlsZGVyJzsiLCJleHBvcnQgKiBmcm9tICcuL3Zub2RlJztcclxuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZlbG0nO1xyXG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcclxuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGRlc3Ryb3koKSB7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVkNtbnQgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCcjY29tbWVudCcsIHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5pbXBvcnQgeyBWQXR0ciB9IGZyb20gJy4vdmF0dHInO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZFbG0gZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgdGhpcy52YXR0cnMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaEF0dHIoYXR0cikge1xyXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNBdHRyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXR0cihrZXkpIHtcclxuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XHJcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgVkF0dHIoa2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcclxuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XHJcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcclxuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcclxuICAgICAgICBpZiAoYXR0ci52ZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xyXG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIHJldHVybiBhdHRyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE91dGVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XHJcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XHJcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmF0dHJzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCIvLyB2aXJ0dWFsIG5vZGVcclxuZXhwb3J0IGNsYXNzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRTaWJsaW5nKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcclxuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmJ1aWxkU2libGluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcclxuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xyXG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcclxuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xyXG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcclxuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcclxuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcclxuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgY2xvbmVOb2RlKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm90IGltcGxlbWVudGVkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG5cclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGhvb3BzXHJcblxyXG4gICAgLy8gZW5kIG9mIGhvb3BzXHJcbn1cclxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIoJyN0ZXh0JywgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVlR5cGUgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcclxuaW1wb3J0IHsgVHBsUGFyc2VyIH0gZnJvbSAnLi90cGwtcGFyc2VyJztcclxuXHJcbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcclxuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcclxuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XHJcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XHJcbiAgICByZXR1cm4gbmV3IFRwbFBhcnNlcihuZXcgVHBsTGV4ZXIoKSkucGFyc2UodHBsKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCB9OyIsImV4cG9ydCBjbGFzcyBUcGxCdWlsZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBidWlsZCh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1RleHQodm5vZGUpIHtcclxuICAgICAgICByZXR1cm4gdm5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNDb21tZW50KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI2NvbW1lbnQnO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XHJcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEF0dHJpYnV0ZSh2YXR0cik7XHJcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcclxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcclxuXHJcbiAgICAgICAgaWYoYXR0clRwbCkge1xyXG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xyXG5cclxuICAgICAgICBpZiAoIXZlbG0uc2VsZkNsb3NlZCkge1xyXG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0cGw7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcclxuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XHJcbiAgICAgICAgcmV0dXJuIHZ0ZXh0Lm5vZGVWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENvbW1lbnQodmNtbnQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ub2RlVmFsdWU7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XHJcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xyXG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXHJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XHJcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XHJcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIHRleHRcclxuICAgIHJlYWRUZXh0KCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0bWwgdGFnXHJcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xyXG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcclxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsZXgodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQge1xyXG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcclxufSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xyXG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UodGV4dCkge1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xyXG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcclxuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xyXG5cclxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3R5cGUoKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xyXG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcclxuICAgIH1cclxuXHJcbiAgICBlbGVtZW50KHApIHtcclxuICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcclxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xyXG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlO1xyXG4gICAgfVxyXG5cclxuICAgIGNoaWxkRWxlbWVudHMocCkge1xyXG4gICAgICAgIHZhciBlbGVzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcclxuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBlbGVzO1xyXG4gICAgfVxyXG5cclxuICAgIGF0dHJzKHApIHtcclxuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGF0dHJzO1xyXG4gICAgfVxyXG5cclxuICAgIGN1cnJlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICB9XHJcbn0iLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcclxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcclxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xyXG5cclxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlT3duIHx8IG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbcF0sIHApKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb21lKG9iaiwgYWN0aW9uKSB7XHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbihpbmRleCwgb2JqW2luZGV4XSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb3B5KCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XHJcbiAgICAgICAgZGVlcCA9IG9iajtcclxuICAgICAgICBvYmpJbmRleCsrO1xyXG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcclxuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XHJcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xyXG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xyXG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xyXG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcclxuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG5ld09iajtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleHRlbmQoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XHJcblxyXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XHJcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcclxuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlZXApIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbWVyZ2UoKSB7XHJcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcclxuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcclxuICAgICAgICBpbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcclxuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xyXG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvYmplY3Qobykge1xyXG4gICAgZnVuY3Rpb24gRigpIHtcclxuICAgIH1cclxuXHJcbiAgICBGLnByb3RvdHlwZSA9IG87XHJcbiAgICByZXR1cm4gbmV3IEYoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcclxuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XHJcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xyXG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XHJcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xyXG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0FycmF5KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc01hcChvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xyXG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XHJcbiAgICB2YXIgc2FtZSA9IChvYmoxID09PSBvYmoyKTtcclxuXHJcbiAgICBpZiAoIXNhbWUpIHtcclxuICAgICAgICBpZiAoaXNBcnJheShvYmoxKSAmJiBpc0FycmF5KG9iajIpKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xyXG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2tleV0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHNhbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcclxuICAgIHJldHVybiAhaXNPYmplY3QodmFsdWUpIHx8ICFzb21lKHZhbHVlLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGVidWcobG9nKSB7XHJcbiAgICBpZiAoZGVidWdNb2RlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcclxuICAgIHJldHVybiBhcnIuc29tZShmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3A7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcclxuICAgIGlmICghb2JqKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XHJcblxyXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcclxuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XHJcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XHJcbiAgICAgICAgICAgIH0sIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWhhc1Byb3ApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbmNhdCgpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XHJcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9yZGVyQnlEZXNjZW5kaW5nKGFyciwgZ2V0dGVyKSB7XHJcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XHJcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xyXG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XHJcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKGl0ZW0pO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZvcm1hdCgpIHtcclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXHJcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcblxyXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XHJcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XHJcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcclxuXHJcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XHJcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yLCBhcnIpIHtcclxuICAgIHZhciByZXN1bHQgPSAnJywgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuXHJcbiAgICBhcnIuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICByZXN1bHQgKz0gaXRlbTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ICsgMSA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXN1bHQgKz0gc2VwYXJhdG9yO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBmb3JFYWNoLFxyXG4gICAgc29tZSxcclxuICAgIGNvcHksXHJcbiAgICBleHRlbmQsXHJcbiAgICBtZXJnZSxcclxuICAgIG9iamVjdCxcclxuICAgIGluaGVyaXQsXHJcbiAgICBsb3dlcmNhc2UsXHJcbiAgICB1cHBlcmNhc2UsXHJcbiAgICBpc1VuZGVmaW5lZCxcclxuICAgIGlzRGVmaW5lZCxcclxuICAgIGlzT2JqZWN0LFxyXG4gICAgaXNCbGFua09iamVjdCxcclxuICAgIGlzTnVtYmVyLFxyXG4gICAgaXNEYXRlLFxyXG4gICAgaXNGdW5jdGlvbixcclxuICAgIGlzUmVnRXhwLFxyXG4gICAgaXNCb29sZWFuLFxyXG4gICAgaXNBcnJheSxcclxuICAgIGlzU3RyaW5nLFxyXG4gICAgaXNTYW1lLFxyXG4gICAgaXNFbXB0eSxcclxuICAgIGlzRm9ybURhdGEsXHJcbiAgICBkZWJ1ZyxcclxuICAgIGNvbnRhaW5zLFxyXG4gICAgY29udGFpbnNTdHIsXHJcbiAgICBoYXNQcm9wZXJ0eSxcclxuICAgIGdldFByb3BlcnR5LFxyXG4gICAgc2V0UHJvcGVydHksXHJcbiAgICBjb25jYXQsXHJcbiAgICBvcmRlckJ5LFxyXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXHJcbiAgICB0b051bWJlcixcclxuICAgIHJlbW92ZSxcclxuICAgIGZvcm1hdCxcclxuICAgIGVzY2FwZUh0bWwsXHJcbiAgICBqb2luXHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZlciB9IGZyb20gJy4uL29ic2VydmVyJztcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICB0aGlzLiQkZGF0YSA9IG51bGw7XHJcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XHJcbiAgICB0aGlzLiQkZnJhZ21lbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XHJcbiAgICB0aGlzLiQkY2hpbGRyZW4gPSBbXTtcclxuICAgIHRoaXMuJCRkaXJlY3RpdmVzID0gW107XHJcbiAgICB0aGlzLiQkaW5qZWN0b3IgPSBpbmplY3RvcjtcclxuICAgIHRoaXMuJCRyZW5kZXIgPSBuZXcgUmVuZGVyKHRoaXMpO1xyXG4gICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xyXG4gICAgdGhpcy4kJGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcyk7XHJcbiAgICB0aGlzLiRkaXNwbGF5ID0gJ2luaGVyaXQnO1xyXG4gICAgdGhpcy4kc2V0RGF0YShkYXRhKTtcclxuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJCRkYXRhKTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAkc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy4kJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNDb21wb25lbnQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNDb21wb25lbnQoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNEaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNEaXJlY3RpdmUoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0RpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy4kJGluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0ZpbHRlcihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0ZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy4kJGluamVjdG9yLmNyZWF0ZUZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzQXR0cmlidXRlKGtleSkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGtleSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy50b1Byb3h5KCksIGtleSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYmluZChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBtZXNzYWdlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgKyAnIGlzIG5vdCBhIG1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVuYmluZChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgbWVzc2FnZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5vZmYoaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArICcgaXMgbm90IGEgbWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kJGRhdGE7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XHJcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLiQkZnJhZ21lbnQgPSB0aGlzLiQkcmVuZGVyLnJlbmRlcih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJCRmcmFnbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHVubW91bnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJCRvYnNlcnZlci5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuJGRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcclxuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XHJcbiAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCBhc3NpZ24gdmFsdWUgdG8gYmluZGluZyBleHByZXNzaW9uXHJcbiAgICB0aGlzLiRhc3NpZ25lZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcclxuICAgIGdldCAkc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJGVsbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkY29tcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5kYXRhLmNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJGJpbmRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5kYXRhLmJpbmRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVhdGFkYXRhKSB7XHJcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZWF0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdoaWxlIGNvbXBpbGluZ1xyXG4gICAgJGNvbXBpbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXHJcbiAgICAkY2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkbGluaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlZm9yZSBsaW5raW5nXHJcbiAgICAvLyAkcHJlbGluaygpIHtcclxuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xyXG4gICAgJHBvc3RsaW5rKCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJMaW5rICYmIHRoaXMuYWZ0ZXJMaW5rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5cclxudmFyIHBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcclxuXHJcbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxyXG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xyXG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QobmFtZSkpIHtcclxuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSAnJztcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZGlyZWN0aXZlOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5zZXJ2aWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbmFtZSksXHJcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuY29uc3RydWN0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XHJcblxyXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcclxuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3RvciwgY29uZmlnLmV4dGVuZHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICdleHRlbmRzJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3QnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbmFtZSwgY29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZGlyZWN0aXZlLCBuYW1lLCBjb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5maWx0ZXIsIG5hbWUsIGNvbmZpZyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGZhY3RvcnkgPSBuZXcgRmFjdG9yeSgpOyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcclxuXHJcbi8vIG1ldGFkYXRhIGV4YW1wbGVcclxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsYXNzQ29udGFpbmVyKHJvbGVJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgbWV0YWRhdGEgdG8gcHJvdG90eXBlXHJcbiAgICAgICAgbWV0YWRhdGEua2V5ID0ga2V5O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XHJcblxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcblxyXG4gICAgICAgIGlmIChjb250YWluZXJba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcltrZXldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGNvbnRhaW5lcltrZXldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lcltrZXldLnB1c2goY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmZpbHRlciwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gdGhpcy5jb252ZXJ0QWxpYXMoa2V5LCBhbGlhcykuc3BsaXQoJy4nKTtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb21wb25lbnQoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgdHJ1ZSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0RpcmVjdGl2ZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRmlsdGVyKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXJ2aWNlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBhbGlhcykge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyb2xlSWQgKyAnICcgKyBrZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsga2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50KGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuY29tcG9uZW50LCBrZXksIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbHRlcihrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLnNlcnZpY2UsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3MgY29uc3RydWN0b3IgZm9yIGtleSAnICsga2V5T3JDb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLmZpbHRlcik7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLnNlcnZpY2UpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAga2V5T3JDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtleU9yQ29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdChhbGlhcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gc2VnbWVudHMucG9wKCksXHJcbiAgICAgICAgICAgIHNwYWNlTmFtZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuXHJcbiAgICAgICAgdXRpbHMuc29tZShhbGlhcywgZnVuY3Rpb24gKHNob3J0TmFtZSwgZnVsbE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHNob3J0TmFtZSA9PT0gc3BhY2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBmdWxsTmFtZSArICcuJyArIGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHZhbHVlLCBtZXRhZGF0YS5hbGlhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcclxuICAgIGZpbHRlcjogMCxcclxuICAgIHNlcnZpY2U6IDEsXHJcbiAgICBjb21wb25lbnQ6IDIsXHJcbiAgICBkaXJlY3RpdmU6IDNcclxufTsiLCJleHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XHJcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XHJcbmltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xyXG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXHJcbnZhciBjb21wb25lbnRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xyXG5cclxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcclxuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmRpcmVjdGl2ZUNsYXNzLnByb3RvdHlwZSA9IERpcmVjdGl2ZS5wcm90b3R5cGU7XHJcblxyXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIEZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSkoKTtcclxuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcclxuXHJcbnZhciBzZXJ2aWNlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcclxuICAgIH07XHJcbn0pKCk7XHJcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcclxuLy8gZW5kIG9mIG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxyXG5cclxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcclxuICAgIGNvbmZpZy5leHRlbmRzID0gY29tcG9uZW50Q2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoa2V5LCBjb25maWcpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XHJcbiAgICBjb25maWcuZXh0ZW5kcyA9IGRpcmVjdGl2ZUNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKGtleSwgY29uZmlnKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xyXG4gICAgY29uZmlnLmV4dGVuZHMgPSBmaWx0ZXJDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZyk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XHJcbiAgICBjb25maWcuZXh0ZW5kcyA9IHNlcnZpY2VDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2Uoa2V5LCBjb25maWcpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGaWx0ZXIoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3IsIGNvbmZpZykge1xyXG4gICAgY29uZmlnLmV4dGVuZHMgPSBjb21wb25lbnRDbGFzcztcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XHJcbiAgICB2YXIgQXBwID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnKTtcclxuICAgIHZhciBhcHAgPSBuZXcgQXBwKCk7XHJcbiAgICBhcHAuJHNldERhdGEoe1xyXG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxyXG4gICAgfSk7XHJcbiAgICBoZWxwZXIuY2xlYXJDaGlsZE5vZGVzKGVsZW1lbnQpO1xyXG4gICAgYXBwLiRyZW5kZXIoKTtcclxuICAgIGFwcC4kbW91bnQoZWxlbWVudCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBEaXJlY3RpdmUsXHJcbiAgICBGaWx0ZXIsXHJcbiAgICBTZXJ2aWNlLFxyXG4gICAgaXNDb21wb25lbnQsXHJcbiAgICBpc0RpcmVjdGl2ZSxcclxuICAgIGlzRmlsdGVyLFxyXG4gICAgaXNTZXJ2aWNlLFxyXG4gICAgbmFtZXNwYWNlLFxyXG4gICAgYm9vdHN0cmFwLFxyXG4gICAgaW5qZWN0b3JcclxufTsiXSwic291cmNlUm9vdCI6IiJ9