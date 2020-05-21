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

    this.listeners = [];
    this.scope = scope;
    this.watcher = new _watcher__WEBPACK_IMPORTED_MODULE_2__["Watcher"]();
    this.delayer = new _delayer__WEBPACK_IMPORTED_MODULE_3__["Delayer"](this.notify);
  }

  _createClass(Observer, [{
    key: "createListener",
    value: function createListener(evaluator, exp, handler) {
      var value = evaluator.evaluate(exp);
      var listener = new Listener(exp, handler, value);
      this.listeners.push(listener);
      return listener;
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
    key: "watch",
    value: function watch(exp, handler, locals) {
      var self = this;
      var analyser = new _exp__WEBPACK_IMPORTED_MODULE_1__["Analyser"](exp, locals);
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, locals, {
        allowNull: true
      });
      var listener = this.createListener(evaluator, exp, handler);

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
          if (item.exp) {
            key = evaluator.evaluate(key);
          }

          item.unwatch = self.watcher.watch(target, key, function (args) {
            unwatchAccessors(item.children);
            watchAccessors(item.children, args.data.newValue);
            self.notifyChange(listener, evaluator.evaluate(exp));
          });
          watchAccessors(item.children, target[key]);
        });
      }

      analyser.analyse();
      watchAccessors(analyser.accessors, this.scope);
      locals && watchAccessors(analyser.localAccessors, locals);
      return function () {
        unwatchAccessors(analyser.accessors);
        locals && unwatchAccessors(analyser.localAccessors);
      };
    }
  }, {
    key: "watchCollection",
    value: function watchCollection(exp, handler, locals) {
      var _arguments = arguments,
          _this2 = this;

      var self = this,
          evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, locals, {
        allowNull: true
      });
      var unwatchProps = watchProps();
      var unwatchExp = this.watch(exp, function () {
        if (unwatchProps != null) {
          unwatchProps.call(_this2);
        }

        unwatchProps = watchProps();
        handler.apply(_this2, _arguments);
      }, locals);
      var listener = this.createListener(evaluator, exp, handler);

      function watchProps() {
        var collection = evaluator.evaluate(exp);

        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](collection) || _utils__WEBPACK_IMPORTED_MODULE_0__["isArray"](collection)) {
          return self.watcher.watch(collection, '*', function () {
            self.notifyChange(listener);
          });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL2xvY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS1idXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9tZXNzYWdlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaGlkZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvYW5hbHlzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V2YWx1YXRvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLW9wZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FycmF5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3NpZ25tZW50LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3Qtbm9kZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9iaW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NhbGwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2NvbmRpdGlvbmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9leHByZXNzaW9uLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pZGVudGlmaWVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbGl0ZXJhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbG9naWNhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvbWVtYmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb2dyYW0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3Byb3BlcnR5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC91bmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvcGFyc2Utb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZGVsYXllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92YXR0ci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmNtbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZlbG0uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Zub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dGV4dC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdnR5cGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC90cGwtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9mYWN0b3J5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3JvbGVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L3ZpZXctYXBpLmpzIl0sIm5hbWVzIjpbIkxvY2FsIiwiZSIsImVsbSIsImFyZyIsIiRldmVudCIsIiRlbGVtZW50IiwiJGFyZ3VtZW50IiwiTWVzc2FnZUJ1cyIsIm1lc3NhZ2VzIiwiTWVzc2FnZSIsImZuIiwiZ2V0Iiwib24iLCJvZmYiLCJhcmdzIiwic2NvcGUiLCJmaXJlIiwiaGFuZGxlcnMiLCJwdXNoIiwiaSIsImxlbmd0aCIsInNwbGljZSIsInJldHVyblZhbHVlIiwidXRpbHMiLCJjYWxsIiwiaXNNZXNzYWdlIiwib2JqIiwiY29tcG9uZW50IiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZERpcmVjdGl2ZSIsIm5hbWVzcGFjZSIsInZhbHVlIiwiJGVsbSIsImlubmVyVGV4dCIsIkRpcmVjdGl2ZSIsIkhpZGVEaXJlY3RpdmUiLCJpbml0aWFsIiwic3R5bGUiLCJkaXNwbGF5IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwiJGNvbXBvbmVudCIsInZhbHVlQ2hhbmdlIiwic2VsZiIsImNvbW1pdFZpZXdWYWx1ZSIsIm5ld3ZhbHVlIiwiRXJyb3IiLCIkJG1ldGEiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VmFsdWUiLCJmb3JFYWNoIiwidmFsaWRhdG9yIiwiZm9ybWF0dGVyIiwiJHNldEF0dHJpYnV0ZSIsInVwZGF0ZUVsbUNzc0NsYXNzIiwibWFya0RpcnR5U3RhdHVzIiwibGlzdGVuZXIiLCJwYXJzZXIiLCIkYmluZGluZyIsImFzc2lnbiIsImVsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsInZlbG0iLCJ2YXR0ciIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwiYnVpbGRlciIsIlRwbEJ1aWxkZXIiLCJyZW1vdmVBdHRyIiwiYnVpbGQiLCJmcmFnbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImhlYWRlciIsImNyZWF0ZUNvbW1lbnQiLCJmb290ZXIiLCJhcHBlbmRDaGlsZCIsInJlbmRlciIsIiR3YXRjaENvbGxlY3Rpb24iLCJoZWxwZXIiLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaXRlbXMiLCIkZXZhbCIsIml0ZW0iLCJsb2NhbHMiLCJSZW5kZXIiLCJpdGVtQ29udGVudCIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJzZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkFjY2Vzc29yIiwiY2FsbGVlIiwiZXhwIiwiY2hpbGRyZW4iLCJBbmFseXNlciIsInByb2dyYW0iLCJFeHBCdWlsZGVyIiwiYWNjZXNzb3JzIiwibG9jYWxBY2Nlc3NvcnMiLCJwYXJzZUV4cCIsImNoaWxkTm9kZXMiLCJjaGlsZCIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJtZW1iZXIiLCJwYXJlbnQiLCJvYmplY3QiLCJjb21wdXRlZCIsInByb3BlcnR5IiwiY3JlYXRlQ2hpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlTG9jYWxBY2Nlc3NvciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsImFsbG93TnVsbCIsImFzc2lnbkludGVyY2VwdG9yIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsIiRoYXNGaWx0ZXIiLCIkZ2V0RmlsdGVyIiwiZXhlY3V0ZSIsImFwcGx5IiwiTnVsbEV4cHJlc3Npb25Ob2RlIiwidGFyZ2V0Tm9kZSIsImRlZiIsImxleEV4cCIsIkV4cExleGVyIiwibGV4IiwiRXhwUGFyc2VyIiwicGFyc2UiLCJidWlsZEV4cHJlc3Npb24iLCJidWlsZEFzc2lnbm1lbnQiLCJidWlsZENvbmRpdGlvbiIsImJ1aWxkTG9naWMiLCJidWlsZEJpbmFyeSIsImJ1aWxkVW5hcnkiLCJidWlsZENhbGwiLCJidWlsZE1lbWJlciIsImJ1aWxkSWRlbnRpZmllciIsImJ1aWxkTGl0ZXJhbCIsImJ1aWxkQXJyYXkiLCJidWlsZFByb3BlcnR5IiwiYnVpbGRPYmplY3QiLCJyZXMiLCJzaGlmdCIsInByb3BzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsImluZGV4IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpbmRleE9mIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInNsaWNlIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0Iiwic3BsaXQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsImpvaW4iLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsInVuZGVmaW5lZCIsImdldENoaWxkTm9kZXMiLCJBcnJheSIsInByb3RvdHlwZSIsImNsZWFyQ2hpbGROb2RlcyIsInJlbW92ZUNoaWxkIiwicmVwbGFjZU5vZGUiLCJyZWZOb2RlIiwibmV3Tm9kZSIsInJlbW92ZU5vZGUiLCJyZW1vdmVOb2RlQmV0d2VlbiIsImJlZ2luTm9kZSIsImVuZE5vZGUiLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImluc2VydE5vZGVBZnRlciIsImxhc3RDaGlsZCIsInF1ZXJ5RWxlbWVudExvYWRlZCIsImNhbGxiYWNrIiwiY2FuY2VsVG9rZW4iLCJxdWVyeSIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicXVlcnlFbGVtZW50VW5sb2FkZWQiLCJxdWVyeUVsZW1lbnRTdGF0ZSIsImNhbGxiYWNrcyIsImxvYWRlZCIsIm9uRW50ZXIiLCJvbkxlYXZlIiwiYWRkQ2xhc3MiLCJlbCIsImNscyIsInRyaW0iLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwiRGVsYXllciIsImhhbmRsZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJldmVudHMiLCJwcm9wQ2hhbmdpbmciLCJwcm9wQ2hhbmdlZCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJkZWxheWVyIiwibm90aWZ5IiwiZXZhbHVhdG9yIiwiZXZhbHVhdGUiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiYW5hbHlzZXIiLCJjcmVhdGVMaXN0ZW5lciIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ3YXRjaCIsImRhdGEiLCJub3RpZnlDaGFuZ2UiLCJ1bndhdGNoUHJvcHMiLCJ3YXRjaFByb3BzIiwidW53YXRjaEV4cCIsImFyZ3VtZW50cyIsImNvbGxlY3Rpb24iLCJkZXN0cm95IiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsInNldCIsImdldFRhcmdldCIsInZhbGlkYXRpb24iLCJpc1Byb3h5IiwicHJveHkiLCJ1cGRhdGVQcm94eSIsIlByb3h5IiwiQWdlbnQiLCJBcnJheUFnZW50IiwiY29uY2F0IiwiY29weSIsInJldmVyc2UiLCJzb3J0IiwiT2JqZWN0IiwidG9Qcm94eSIsIk9iamVjdExpc3RlbmVyIiwia2V5cyIsImdldEhhbmRsZXJzIiwib25Qcm9wQ2hhbmdpbmciLCJoYW5kbGVQcm9wQ2hhbmdpbmciLCJvblByb3BDaGFuZ2VkIiwiaGFuZGxlUHJvcENoYW5nZWQiLCJpbml0IiwiZ2V0TGlzdGVuZXIiLCJmaXJlS2V5IiwiZmlsdGVycyIsImFjdGlvbiIsImdldE9yQ3JlYXRlTGlzdGVuZXIiLCJyZWdpc3RlcktleSIsInVucmVnaXN0ZXJLZXkiLCJCaW5kaW5nIiwiZXhwcmVzc2VkIiwibWVzc2FnZWQiLCJhc3NpZ25lZCIsImF1dG9tYXRpb24iLCJjaGFuZ2VkIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsInBhdGNoIiwiY29tcHV0ZSIsInJlZHVjZSIsInByZXYiLCIkd2F0Y2giLCJldmVudFRleHQiLCJkb21FdmVudHMiLCJ2bm9kZXMiLCJkaXJlY3RpdmVzIiwidHBsIiwicGFyc2VUcGwiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsIm5vZGVOYW1lIiwiY29tcGlsZU5vZGUiLCJpc1RleHQiLCJjb21waWxlVGV4dCIsImlzQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJpc0NvbXBvbmVudCIsIiRoYXNDb21wb25lbnQiLCJiaW5kaW5nIiwiY3JlYXRlQmluZGluZyIsInN0YXJ0c1dpdGgiLCJzdWJzdHIiLCJkb21NZXNzYWdlZCIsImlzRGlyZWN0aXZlIiwiJGhhc0RpcmVjdGl2ZSIsIiRuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbmVkIiwiJGNvbXBpbGUiLCJyZWdpc3RlckF1dG9tYXRpb24iLCIkY2hhbmdlIiwic2V0SHRtbEF0dHIiLCIkaGFzQXR0cmlidXRlIiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJjcmVhdGVUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5zdGFuY2UiLCIkbmV3Q29tcG9uZW50IiwiJGRpc3BsYXkiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRyZW5kZXIiLCIkbW91bnQiLCIkYmluZCIsImxpbmsiLCJWQXR0ciIsIlZOb2RlIiwiVkNtbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImNvbXBpbGVPcHRpb25zIiwiZmlyc3RDaGlsZCIsImJ1aWxkU2libGluZyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJjbGVhclBhcmVudEFuZFNpYmxpbmciLCJvbkRlc3Ryb3kiLCJvd25lckRvY3VtZW50IiwiVlRleHQiLCJWVHlwZSIsImxleFRwbCIsIlRwbExleGVyIiwiVHBsUGFyc2VyIiwiYnVpbGRUZXh0IiwiYnVpbGRDb21tZW50IiwiYnVpbGRFbGVtZW50IiwiYXR0clRwbCIsImJ1aWxkQXR0cmlidXRlIiwiY2hpbGRUcGwiLCJzdHIiLCJiZWdpbiIsImV4cGVjdFN0cmluZyIsImNvbW1lbnQiLCJ0ZXh0VGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJlcXVhbCIsImFsbG93RG9jVHlwZSIsInJlYWRDb21tZW50IiwicmVhZFRhZyIsInJlYWRUZXh0Iiwicm9vdCIsImN1cnJlbnQiLCJlbGVtZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiaXNBcnJheSIsImlzT2JqZWN0IiwiZGVlcCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzUmVnRXhwIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiaXNFbXB0eSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGRhdGEiLCIkJGZyYWdtZW50IiwiJCRwYXJlbnQiLCIkJGNoaWxkcmVuIiwiJCRkaXJlY3RpdmVzIiwiJCRpbmplY3RvciIsIiQkcmVuZGVyIiwiJCRvYnNlcnZlciIsIiQkZXZhbHVhdG9yIiwiJHNldERhdGEiLCJpbmplY3RTZXJ2aWNlcyIsIkNvbXBvbmVudCIsIm1ldGhvZHMiLCJjb25zdHJ1Y3QiLCIkJG1ldGFkYXRhIiwiaGFzQ29tcG9uZW50IiwiYWxpYXMiLCJjcmVhdGVDb21wb25lbnQiLCJoYXNEaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwiaGFzRmlsdGVyIiwiY3JlYXRlRmlsdGVyIiwibWVzc2FnZSIsImV2ZW50Iiwid2F0Y2hDb2xsZWN0aW9uIiwidGVtcGxhdGUiLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lckhUTUwiLCIkZ2V0VGVtcGxhdGUiLCJzZWxlY3Rvck9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkZGVzdHJveSIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwibWVhdGFkYXRhIiwib25Db21waWxlIiwib25DaGFuZ2UiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJGYWN0b3J5Iiwicm9sZUlkIiwibmV3TmFtZSIsInJvbGVzIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5IiwiZmlsdGVyQ29uc3RydWN0b3IiLCJGaWx0ZXIiLCJJbmplY3RvciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJjb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwiY29udmVydEFsaWFzIiwicG9wIiwibWV0YSIsImhhcyIsIm5hbWVzcGFjZXMiLCJrZXlPckNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJnZXRGaWx0ZXIiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiY2xhc3NOYW1lIiwic3BhY2VOYW1lIiwic2hvcnROYW1lIiwiZnVsbE5hbWUiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5IiwiY3JlYXRlU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIlNlcnZpY2UiLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJzZXJ2aWNlQ2xhc3MiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzRmlsdGVyIiwiaXNTZXJ2aWNlIiwiYm9vdHN0cmFwIiwiYXBwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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ckIsRUFBK0I7QUFDM0IsU0FBT0EsUUFBUSxZQUFZZ0osb0RBQTNCO0FBQ0g7O0FBRUQsU0FBU2pLLFdBQVQsQ0FBcUJpQixRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVloZixvREFBM0I7QUFDSDs7QUFFRCxTQUFTK3NCLFFBQVQsQ0FBa0IvTixRQUFsQixFQUE0QjtBQUN4QixTQUFPQSxRQUFRLFlBQVl3TCw4Q0FBM0I7QUFDSDs7QUFFRCxTQUFTd0MsU0FBVCxDQUFtQmhPLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQU9BLFFBQVEsWUFBWXNOLGdEQUEzQjtBQUNIOztBQUVELFNBQVNXLFNBQVQsQ0FBbUI5bkIsUUFBbkIsRUFBNkJwRyxRQUE3QixFQUF1QztBQUNuQyxNQUFJcWpCLE9BQU8sR0FBR3hlLFFBQVEsQ0FBQ3lsQixhQUFULENBQXVCbGtCLFFBQXZCLENBQWQ7QUFDQSxNQUFJK25CLEdBQUcsR0FBRyxJQUFJbEYsb0RBQUosQ0FBY3RwQiw0Q0FBQSxDQUFZO0FBQ2hDcXFCLFlBQVEsRUFBRTNHLE9BQU8sQ0FBQzhHO0FBRGMsR0FBWixFQUVyQm5xQixRQUZxQixDQUFkLENBQVY7QUFHQXFGLHlEQUFBLENBQXVCZ2UsT0FBdkI7QUFDQThLLEtBQUcsQ0FBQzdOLE9BQUo7QUFDQTZOLEtBQUcsQ0FBQzVOLE1BQUosQ0FBVzhDLE9BQVg7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xyXG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UtYnVzJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xyXG4gICAgY29uc3RydWN0b3IoZSwgZWxtLCBhcmcpIHtcclxuICAgICAgICB0aGlzLiRldmVudCA9IGU7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcclxuICAgICAgICB0aGlzLiRhcmd1bWVudCA9IGFyZztcclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VCdXMge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldChlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VzW2VdKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZXNbZV0gPSBuZXcgTWVzc2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5tZXNzYWdlc1tlXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihlLCBmbikge1xyXG4gICAgICAgIHRoaXMuZ2V0KGUpLm9uKGZuKTtcclxuICAgIH1cclxuXHJcbiAgICBvZmYoZSwgZm4pIHtcclxuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoZSwgYXJncywgc2NvcGUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQoZSkuZmlyZShhcmdzLCBzY29wZSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb24oZm4pIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihmbikge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5oYW5kbGVyc1tpXSA9PT0gZm4pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmUoYXJncywgc2NvcGUpIHtcclxuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgc2NvcGUgPSBzY29wZSB8fCB0aGlzO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oYW5kbGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmhhbmRsZXJzW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLmhhbmRsZXJzW2ldLmNhbGwoc2NvcGUsIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGlzTWVzc2FnZSB9IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckNvbXBvbmVudChrZXksIHRhcmdldCwgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlKG1ldGFkYXRhKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xyXG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcclxuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0LCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnO1xyXG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcclxuICAgICAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCB0YXJnZXQsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1iaW5kJ1xyXG59KVxyXG5jbGFzcyBCaW5kRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbG0uaW5uZXJUZXh0ID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1oaWRlJ1xyXG59KVxyXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPT09ICdub25lJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnN0eWxlLmRpc3BsYXkgPSB0aGlzLmluaXRpYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlcGVhdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3Nob3cnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgaXNNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tbW9kZWwnXHJcbn0pXHJcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XHJcbiAgICAgICAgICAgIGZlZWRiYWNrOiAnJyxcclxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXHJcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcclxuICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIGNzczoge1xyXG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcclxuICAgICAgICAgICAgICAgIGRpcnR5OiAnbi1kaXJ0eScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxyXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFmdGVyTGluaygpIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHRoaXMuJGVsbS5uYW1lO1xyXG5cclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLiRzY29wZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGlzTWVzc2FnZSh0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRjb21wb25lbnQudmFsdWVDaGFuZ2Uub24oKGUsIGFyZ3MpID0+IHNlbGYuY29tbWl0Vmlld1ZhbHVlKGFyZ3MubmV3dmFsdWUpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb21wb25lbnQgJyArIHRoaXMuJGNvbXBvbmVudC4kJG1ldGEua2V5ICsgJ211c3QgZGVmaW5lIFtjaGFuZ2VdIGV2ZW50Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS50YXJnZXQudmFsdWUpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgbmV3VmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVsbS52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMuZm9yRWFjaChmdW5jdGlvbiAodmFsaWRhdG9yKSB7XHJcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy4kYmluZGluZy5hc3NpZ24obmV3VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUVsbUNzc0NsYXNzKCkge1xyXG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbG0sXHJcbiAgICAgICAgICAgIGNzcyA9IHRoaXMub3B0aW9ucy5jc3M7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuZGlydHkpO1xyXG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5wcmlzdGluZSk7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmludmFsaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcclxuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLnZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cy5wcmlzdGluZSA9ICFkaXJ0eTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xyXG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMuaW52YWxpZCA9ICF2YWxpZDtcclxuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsJztcclxuaW1wb3J0IHsgUmVuZGVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1yZXBlYXQnXHJcbn0pXHJcbmNsYXNzIFJlcGVhdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9ICcnO1xyXG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xyXG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XHJcbiAgICAgICAgdmFyIHBhdHRlcm4gPSAvXihbYS16X10rXFx3KylcXHMraW5cXHMrKC4rKSQvaTtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XHJcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcclxuICAgICAgICB2YXIgYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XHJcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcclxuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9IGJ1aWxkZXIuYnVpbGQodmVsbSk7XHJcblxyXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkxpbmsoc2NvcGUpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xyXG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XHJcblxyXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XHJcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcclxuICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChmb290ZXIpO1xyXG5cclxuICAgICAgICBzY29wZS4kd2F0Y2hDb2xsZWN0aW9uKHRoaXMuaXRlbXNFeHAsICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xyXG4gICAgICAgICAgICBoZWxwZXIucmVtb3ZlTm9kZUJldHdlZW4oaGVhZGVyLCBmb290ZXIpO1xyXG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoc2NvcGUpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGl0ZW1zID0gc2NvcGUuJGV2YWwodGhpcy5pdGVtc0V4cCk7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICAgICAgICB1dGlscy5mb3JFYWNoKGl0ZW1zLCBmdW5jdGlvbihpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xyXG4gICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcclxuICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xyXG5cclxuICAgICAgICAgICAgdmFyIHJlbmRlciA9IG5ldyBSZW5kZXIoc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgICAgIHZhciBpdGVtQ29udGVudCA9IHJlbmRlci5yZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUpO1xyXG5cclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbUNvbnRlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgb25EZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zaG93J1xyXG59KVxyXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsID0gJ2luaXRpYWwnO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9IHRoaXMuaW5pdGlhbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbCA9IHRoaXMuJGVsbS5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICB0aGlzLiRlbG0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBzZWxlY3RvcjogJ20tc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsbS5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsbS5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxtLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4vZXhwLWFwaSc7XHJcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcclxuXHJcbmNsYXNzIEFjY2Vzc29yIHtcclxuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XHJcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XHJcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5ba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cCwgbG9jYWxzKSB7XHJcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHMgfHwge307XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcclxuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xyXG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XHJcbiAgICAgICAgdGhpcy5sb2NhbEFjY2Vzc29ycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3JzW2tleV0pIHtcclxuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcnNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVMb2NhbEFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcclxuICAgICAgICBpZiAoIXRoaXMubG9jYWxBY2Nlc3NvcnNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsQWNjZXNzb3JzW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9jYWxBY2Nlc3NvcnNba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHBhcnNlRXhwKHRoaXMuZXhwKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcclxuXHJcbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xyXG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXJnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoIWNhbGwuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2FsbC5jYWxsZWUsIHsgY2FsbGVlOiB0cnVlIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xyXG5cclxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWVtYmVyLnByb3BlcnR5LnR5cGUgPT09IEFTVC5MaXRlcmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKG1lbWJlci5wcm9wZXJ0eS52YWx1ZSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xyXG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcclxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaWRlbnRpZmllciksXHJcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmxvY2Fsc1trZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUxvY2FsQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VMaXRlcmFsKGxpdGVyYWwsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xyXG5cclxuICAgICAgICBpZihjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbmFseXNlUHJvcGVydHkocHJvcCkge1xyXG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcclxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcclxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgdGhpcy5hbmFseXNlKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuL2V4cC1hcGknO1xyXG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZhbHVhdG9yIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBsb2NhbHMsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHMgfHwge307XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZSh7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsXHJcbiAgICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWUgZnJvbSBleHByZXNzaW9uXHJcbiAgICBldmFsdWF0ZShleHApIHtcclxuICAgICAgICB2YXIgcmVzdWx0O1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG5cclxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWUgdG8gZXhwcmVzc2lvblxyXG4gICAgYXNzaWduKGV4cCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gZXhwcmVzc2lvbi5jaGlsZE5vZGVzWzBdO1xyXG5cclxuICAgICAgICBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbikge1xyXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5vYmplY3QpO1xyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcclxuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiAhYXNzaWdubWVudC5jb21wdXRlZFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmKGtleSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0LCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULklkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTG9naWMobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVVuYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNhbGwobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVNZW1iZXIobm9kZSwgY29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTGl0ZXJhbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlUHJvcGVydHkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5sZWZ0LCB7XHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUxvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5yaWdodCk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnJiYnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnfHwnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LmxlZnQpO1xyXG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcclxuXHJcbiAgICAgICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcclxuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xyXG4gICAgICAgICAgICBjYXNlICcrJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnLSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJyonOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICcvJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnJSc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzwnOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc+JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPD0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPj0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnIT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnPT09JzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchPT0nOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB2YXIgcmVzdWx0LFxyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHVuYXJ5LmFyZyk7XHJcblxyXG4gICAgICAgIHN3aXRjaCAodW5hcnkub3BlcmF0b3IpIHtcclxuICAgICAgICAgICAgY2FzZSAnKyc6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICctJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICchJzpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUNhbGwoY2FsbCkge1xyXG4gICAgICAgIHZhciBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XHJcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5zY29wZS4kaGFzRmlsdGVyKGNvbnRleHQucHJvcCkpe1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc2NvcGUuJGdldEZpbHRlcihjb250ZXh0LnByb3ApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5leGVjdXRlLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xyXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgb2JqID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLm9iamVjdCk7XHJcblxyXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcclxuICAgICAgICAgICAgb2JqID0gbmV3IE51bGxFeHByZXNzaW9uTm9kZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xyXG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XHJcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxyXG4gICAgICAgICAgICB0YXJnZXROb2RlOiBtZW1iZXIub2JqZWN0LFxyXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXHJcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiBjb250ZXh0ICYmIGNvbnRleHQuYXNzaWdubWVudExlZnRcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XHJcblxyXG4gICAgICAgIGlmKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKXtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zY29wZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHQudGFyZ2V0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY29udGV4dC5hc3NpZ25tZW50TGVmdCB8fCBjb250ZXh0LmNhbGxlZSkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBpZGVudGlmaWVyLm5hbWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2lkZW50aWZpZXIubmFtZV07XHJcblxyXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLmxvY2Fscykge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUxpdGVyYWwobGl0ZXJhbCkge1xyXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGV2YWx1YXRlUHJvcGVydHkocHJvcCkge1xyXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLnZhbHVlKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICB2YXIgZGVmID0gdGhpcy5ldmFsdWF0ZU5vZGUoaXRlbSk7XHJcbiAgICAgICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBldmFsdWF0ZUFycmF5KGFycikge1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcclxuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcclxuXHJcbmZ1bmN0aW9uIGxleEV4cChleHApIHtcclxuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XHJcbiAgICByZXR1cm4gbmV3IEV4cFBhcnNlcihuZXcgRXhwTGV4ZXIoKSkucGFyc2UoZXhwKTtcclxufVxyXG5cclxuZXhwb3J0IHsgbGV4RXhwLCBwYXJzZUV4cCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQobm9kZSkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkRXhwcmVzc2lvbihub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBc3NpZ25tZW50KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDb25kaXRpb24obm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTG9naWMobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRCaW5hcnkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFVuYXJ5KG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENhbGwobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRNZW1iZXIobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRJZGVudGlmaWVyKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTGl0ZXJhbChub2RlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXJyYXkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XHJcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkUHJvcGVydHkobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcclxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRPYmplY3Qobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciByZXN1bHQ7XHJcblxyXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQubGVmdCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH09ezF9JywgdGFyZ2V0LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb25kaXRpb24oY29uZGl0aW9uKSB7XHJcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi50ZXN0KTtcclxuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcclxuICAgICAgICB2YXIgY29uc2VxdWVudCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT97MX06ezJ9JywgdGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZExvZ2ljKGxvZ2ljKSB7XHJcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLnJpZ2h0KTtcclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGxvZ2ljLm9wZXJhdG9yLCByaWdodFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEJpbmFyeShiaW5hcnkpIHtcclxuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XHJcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5yaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBiaW5hcnkub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVW5hcnkodW5hcnkpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9JywgdW5hcnkub3BlcmF0b3IsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZENhbGwoY2FsbCkge1xyXG4gICAgICAgIHZhciByZXMgPSAnJywgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcclxuXHJcbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XHJcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gYXJnVmFsdWVzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJlcyArPSAnIHwgJyArIGZuO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonICsgdXRpbHMuam9pbignOicsIGFyZ1ZhbHVlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJlcyA9IHV0aWxzLmZvcm1hdCgnezB9KHsxfSknLCBmbiwgdXRpbHMuam9pbignLCAnLCBhcmdWYWx1ZXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRNZW1iZXIobWVtYmVyKSB7XHJcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XHJcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XHJcblxyXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9W3sxfV0nLCBvYmosIHByb3ApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG9iaiwgcHJvcCk7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcclxuICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkTGl0ZXJhbChsaXRlcmFsKSB7XHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1wiezB9XCInLCBsaXRlcmFsLnZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkUHJvcGVydHkocHJvcCkge1xyXG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkKHByb3Aua2V5LCB7XHJcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XHJcblxyXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfTp7MX0nLCBrZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZE9iamVjdChvYmopIHtcclxuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGl0ZW0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7ezB9fScsIHV0aWxzLmpvaW4oJywgJywgcHJvcHMpKTtcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEFycmF5KGFycikge1xyXG4gICAgICAgIHZhciBpdGVtcyA9IGFyci5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCB1dGlscy5qb2luKCcsJywgaXRlbXMpKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXgodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcclxuXHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcclxuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcclxuICAgICAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcclxuICAgICAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gICAgfVxyXG5cclxuICAgIGlzKGNoLCBjaGFycykge1xyXG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcGVlayhpKSB7XHJcbiAgICAgICAgdmFyIG51bSA9IGkgfHwgMTtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc051bWJlcihjaCkge1xyXG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcclxuICAgIH1cclxuXHJcbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcclxuICAgICAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcclxuICAgICAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxyXG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XHJcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XHJcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XHJcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcclxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcclxuICAgIH1cclxuXHJcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29kZVBvaW50QXQoY2gpIHtcclxuICAgICAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxyXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xyXG4gICAgfVxyXG5cclxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XHJcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgIGlmICghcGVlaykge1xyXG4gICAgICAgICAgICByZXR1cm4gY2g7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xyXG4gICAgICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XHJcbiAgICAgICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNoO1xyXG4gICAgfVxyXG5cclxuICAgIGlzRXhwT3BlcmF0b3IoY2gpIHtcclxuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xyXG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xyXG4gICAgICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVhZE51bWJlcigpIHtcclxuICAgICAgICB2YXIgbnVtYmVyID0gJyc7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xyXG4gICAgICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcclxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcclxuICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlYWRJZGVudCgpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXHJcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXHJcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWFkU3RyaW5nKHF1b3RlKSB7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcclxuICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcclxuICAgICAgICB2YXIgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgaWYgKGVzY2FwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcclxuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xyXG4gICAgICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XHJcblxyXG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XHJcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xyXG5cclxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcclxuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xyXG59KTsiLCJpbXBvcnQge1xyXG4gICAgQVNULFxyXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUsXHJcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsXHJcbiAgICBJZGVudGlmaWVyTm9kZSxcclxuICAgIExpdGVyYWxOb2RlLFxyXG4gICAgTG9naWNhbEV4cHJlc3Npb25Ob2RlLFxyXG4gICAgTWVtYmVyRXhwcmVzc2lvbk5vZGUsXHJcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcclxuICAgIFByb2dyYW1Ob2RlLFxyXG4gICAgUHJvcGVydHlOb2RlLFxyXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcclxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGVcclxufSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XHJcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHBQYXJzZXIge1xyXG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICB0aHJvd0Vycm9yKG1zZywgdG9rZW4pIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXHJcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2UodGV4dCkge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcclxuXHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2dyYW0oKSB7XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwcmVzc2lvblN0YXRlbWVudCgpIHtcclxuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XHJcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XHJcbiAgICAgICAgcmV0dXJuIGV4cDtcclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJDaGFpbigpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwcmVzc2lvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNBc3NpZ25hYmxlKGFzdCkge1xyXG4gICAgICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGFzc2lnbm1lbnQoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPScpKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Fzc2lnbmFibGUocmVzdWx0KSkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgdGVybmFyeSgpIHtcclxuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XHJcbiAgICAgICAgdmFyIGFsdGVybmF0ZTtcclxuICAgICAgICB2YXIgY29uc2VxdWVudDtcclxuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xyXG4gICAgICAgICAgICBhbHRlcm5hdGUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGVzdDtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpY2FsT1IoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcclxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpY2FsQU5EKCkge1xyXG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xyXG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBlcXVhbGl0eSgpIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsZWZ0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbGF0aW9uYWwoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkaXRpdmUoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgbXVsdGlwbGljYXRpdmUoKSB7XHJcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XHJcbiAgICAgICAgdmFyIHRva2VuO1xyXG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcclxuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICB1bmFyeSgpIHtcclxuICAgICAgICB2YXIgdG9rZW47XHJcbiAgICAgICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaW1hcnkoKSB7XHJcbiAgICAgICAgdmFyIHByaW1hcnk7XHJcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcclxuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XHJcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcclxuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xyXG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIG5leHQ7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygnKCcsICdbJywgJy4nKSB8fCAodGhpcy5wZWVrKCc/JykgJiYgdGhpcy5wZWVrQWhlYWQoMSwgJy4nKSkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XHJcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcclxuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmltYXJ5O1xyXG4gICAgfVxyXG5cclxuICAgIGZpbHRlcihiYXNlRXhwcmVzc2lvbikge1xyXG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXHJcbiAgICAgICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcclxuICAgICAgICB9KS5qb2luKCcuJyk7XHJcblxyXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XHJcblxyXG4gICAgICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xyXG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUFyZ3VtZW50cygpIHtcclxuICAgICAgICB2YXIgYXJncyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xyXG4gICAgICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcclxuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcmdzO1xyXG4gICAgfVxyXG5cclxuICAgIGlkZW50aWZpZXIoKSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XHJcbiAgICAgICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdGFudCgpIHtcclxuICAgICAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxyXG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XHJcbiAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGFycjtcclxuICAgIH1cclxuXHJcbiAgICBvYmplY3QoKSB7XHJcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XHJcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XHJcbiAgICAgICAgICAgIGRvIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XHJcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnN1bWUoJ30nKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdW1lKGUxKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xyXG4gICAgICAgIGlmICghdG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9XHJcblxyXG4gICAgcGVla1Rva2VuKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHBlZWsoZTEsIGUyLCBlMywgZTQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBlZWtBaGVhZChpLCBlMSwgZTIsIGUzLCBlNCkge1xyXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xyXG4gICAgICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxyXG4gICAgICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZXhwZWN0KGUxLCBlMiwgZTMsIGU0KSB7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cC1sZXhlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWFwaSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWJ1aWxkZXInO1xyXG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vYW5hbHlzZXInOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkFycmF5RXhwcmVzc2lvbik7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIEFTVCA9IHt9O1xyXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcclxuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XHJcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XHJcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcclxuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcclxuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XHJcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcclxuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcclxuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XHJcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xyXG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcclxuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xyXG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xyXG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcclxuXHJcbmV4cG9ydCBjbGFzcyBOdWxsRXhwcmVzc2lvbk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkJpbmFyeUV4cHJlc3Npb24pO1xyXG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcclxuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xyXG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcclxuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xyXG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xyXG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FzdC1ub2RlJztcclxuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xyXG5leHBvcnQgKiBmcm9tICcuL2NhbGwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcclxuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcclxuZXhwb3J0ICogZnJvbSAnLi9pZGVudGlmaWVyJztcclxuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcclxuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XHJcbmV4cG9ydCAqIGZyb20gICcuL21lbWJlcic7XHJcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XHJcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xyXG5leHBvcnQgKiBmcm9tICAnLi9wcm9wZXJ0eSc7XHJcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcclxuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoQVNULkxvZ2ljYWxFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1lbWJlckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XHJcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xyXG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XHJcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcclxuXHJcbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xyXG4gICAgICAgIHN1cGVyKEFTVC5PYmplY3RFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xyXG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZ3JhbU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKEFTVC5Qcm9ncmFtKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoQVNULlByb3BlcnR5KTtcclxuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XHJcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcclxuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcclxuICAgICAgICBzdXBlcihBU1QuVW5hcnlFeHByZXNzaW9uKTtcclxuICAgICAgICB0aGlzLnByZWZpeCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xyXG4gICAgICAgIHRoaXMuYXJnID0gYXJnO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XHJcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXHJcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXHJcbiAgICBsaXRlcmFsczoge1xyXG4gICAgICAgIGZhbHNlOiBmYWxzZSxcclxuICAgICAgICBudWxsOiBudWxsLFxyXG4gICAgICAgIHRydWU6IHRydWUsXHJcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcclxuICAgIH1cclxufTsiLCJcclxuZnVuY3Rpb24gZ2V0Q2hpbGROb2Rlcyhub2RlKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZS5jaGlsZE5vZGVzLCAwKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJDaGlsZE5vZGVzKG5vZGUpIHtcclxuICAgIGdldENoaWxkTm9kZXMobm9kZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICBub2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXBsYWNlTm9kZShyZWZOb2RlLCBuZXdOb2RlKSB7XHJcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHJlZk5vZGUucGFyZW50Tm9kZTtcclxuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcclxuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdOb2RlLCByZWZOb2RlKTtcclxuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKHJlZk5vZGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVOb2RlKG5vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xyXG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbW92ZU5vZGVCZXR3ZWVuKGJlZ2luTm9kZSwgZW5kTm9kZSkge1xyXG4gICAgdmFyIHBhcmVudE5vZGUgPSBiZWdpbk5vZGUucGFyZW50Tm9kZTtcclxuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGROb2RlcyhwYXJlbnROb2RlKTtcclxuXHJcbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gYmVnaW5Ob2RlICYmIGNoaWxkICE9PSBlbmROb2RlKSB7XHJcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZE5vZGUgJiYgY2hpbGQgIT09IGJlZ2luTm9kZSkge1xyXG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5zZXJ0Tm9kZUFmdGVyKHJlZk5vZGUsIG5ld05vZGUpIHtcclxuICAgIHZhciBwYXJlbnROb2RlID0gcmVmTm9kZS5wYXJlbnROb2RlO1xyXG5cclxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gcmVmTm9kZSkge1xyXG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld05vZGUsIHJlZk5vZGUubmV4dFNpYmxpbmcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBxdWVyeUVsZW1lbnRMb2FkZWQoZWxlLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XHJcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPiAwICYmIGVsZS5jbGllbnRIZWlnaHQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlFbGVtZW50VW5sb2FkZWQoZWxlLCBjYWxsYmFjaykge1xyXG4gICAgdmFyIGNhbmNlbFRva2VuID0gZmFsc2U7XHJcblxyXG4gICAgZnVuY3Rpb24gcXVlcnkoKSB7XHJcbiAgICAgICAgaWYgKGNhbmNlbFRva2VuKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlbGUuY2xpZW50V2lkdGggPT09IDAgJiYgZWxlLmNsaWVudEhlaWdodCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gcXVlcnlFbGVtZW50U3RhdGUoZWxlLCBjYWxsYmFja3MpIHtcclxuICAgIHZhciBjYW5jZWxUb2tlbiA9IGZhbHNlLCBsb2FkZWQgPSBmYWxzZTtcclxuXHJcbiAgICBmdW5jdGlvbiBxdWVyeSgpIHtcclxuICAgICAgICBpZiAoY2FuY2VsVG9rZW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVsZS5jbGllbnRXaWR0aCA+IDAgJiYgZWxlLmNsaWVudEhlaWdodCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKCFsb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgIGxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uRW50ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkVudGVyLmNhbGwoY2FsbGJhY2tzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgbG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzLm9uTGVhdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrcy5vbkxlYXZlLmNhbGwoY2FsbGJhY2tzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHF1ZXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocXVlcnkpO1xyXG5cclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgY2FuY2VsVG9rZW4gPSB0cnVlO1xyXG4gICAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQ2xhc3MgKGVsLCBjbHMpIHtcclxuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuXHJcbiAgICBpZiAoZWwuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xyXG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWwuY2xhc3NMaXN0LmFkZChjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcclxuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcclxuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWwsIGNscykge1xyXG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG5cclxuICAgIGlmIChlbC5jbGFzc0xpc3QpIHtcclxuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XHJcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbC5jbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZWwuY2xhc3NMaXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWwuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xyXG4gICAgICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XHJcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xyXG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XHJcbiAgICAgICAgaWYgKGN1cikge1xyXG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZ2V0Q2hpbGROb2RlcyxcclxuICAgIGNsZWFyQ2hpbGROb2RlcyxcclxuICAgIHJlcGxhY2VOb2RlLFxyXG4gICAgcmVtb3ZlTm9kZSxcclxuICAgIHJlbW92ZU5vZGVCZXR3ZWVuLFxyXG4gICAgaW5zZXJ0Tm9kZUFmdGVyLFxyXG4gICAgcXVlcnlFbGVtZW50TG9hZGVkLFxyXG4gICAgcXVlcnlFbGVtZW50VW5sb2FkZWQsXHJcbiAgICBxdWVyeUVsZW1lbnRTdGF0ZSxcclxuICAgIGFkZENsYXNzLFxyXG4gICAgcmVtb3ZlQ2xhc3NcclxufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcclxuZXhwb3J0ICogZnJvbSAnLi90cGwnO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9yJztcclxuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnOyIsImV4cG9ydCBjbGFzcyBEZWxheWVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XHJcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlKHNjb3BlKSB7XHJcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xyXG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5cclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wQ2hhbmdpbmc6IG5ldyBNZXNzYWdlKCksXHJcbiAgICBwcm9wQ2hhbmdlZDogbmV3IE1lc3NhZ2UoKVxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgRXZhbHVhdG9yLCBBbmFseXNlciB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7IFdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xyXG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcclxuXHJcbmNsYXNzIExpc3RlbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvbGxlY3Rpb25DaGFuZ2VkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoYW5nZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUNoYW5nZWQgfHwgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkoc2NvcGUpIHtcclxuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxyXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkID0gdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xyXG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcclxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XHJcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUxpc3RlbmVyKGV2YWx1YXRvciwgZXhwLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnkoKSB7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XHJcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5ub3RpZnkodGhpcy5zY29wZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5zZXRDb2xsZWN0aW9uQ2hhbmdlZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGFuYWx5c2VyID0gbmV3IEFuYWx5c2VyKGV4cCwgbG9jYWxzKTtcclxuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgbG9jYWxzLCB7XHJcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXZhbHVhdG9yLCBleHAsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmV4cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2hlci53YXRjaCh0YXJnZXQsIGtleSwgZnVuY3Rpb24gKGFyZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIGFyZ3MuZGF0YS5uZXdWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIHRhcmdldFtrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhbmFseXNlci5hbmFseXNlKCk7XHJcbiAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoYW5hbHlzZXIuYWNjZXNzb3JzLCB0aGlzLnNjb3BlKTtcclxuICAgICAgICBsb2NhbHMgJiYgd2F0Y2hBY2Nlc3NvcnMoYW5hbHlzZXIubG9jYWxBY2Nlc3NvcnMsIGxvY2Fscyk7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYW5hbHlzZXIuYWNjZXNzb3JzKTtcclxuICAgICAgICAgICAgbG9jYWxzICYmIHVud2F0Y2hBY2Nlc3NvcnMoYW5hbHlzZXIubG9jYWxBY2Nlc3NvcnMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxyXG4gICAgICAgICAgICBldmFsdWF0b3IgPSAgbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCBsb2NhbHMsIHtcclxuICAgICAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xyXG4gICAgICAgIHZhciB1bndhdGNoRXhwID0gdGhpcy53YXRjaChleHAsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XHJcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9LCBsb2NhbHMpO1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXZhbHVhdG9yLCBleHAsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xyXG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHApO1xyXG5cclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoZXIud2F0Y2goY29sbGVjdGlvbiwgJyonLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmRlbGF5ZXIuZGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4vZXZlbnRzJztcclxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxudmFyIGlzUHJveHlTeW1ib2wgPSBTeW1ib2woJ19faXNQcm94eScpLFxyXG4gICAgdGFyZ2V0U3ltYm9sID0gU3ltYm9sKCdfX3RhcmdldCcpO1xyXG5cclxudmFyIGhhbmRsZXIgPSB7XHJcbiAgICBnZXQodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICBpZihrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZihrZXkgPT09IHRhcmdldFN5bWJvbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRhcmdldFtrZXldO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXQodGFyZ2V0LCBrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gZ2V0VGFyZ2V0KHRhcmdldFtrZXldKSxcclxuICAgICAgICAgICAgbmV3VmFsdWUgPSBnZXRUYXJnZXQodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBhcHBseTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5maXJlKHtcclxuICAgICAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxyXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24uYXBwbHkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBldmVudHMucHJvcENoYW5nZWQuZmlyZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBrZXksXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XHJcbiAgICByZXR1cm4gdXRpbHMuaXNPYmplY3QocHJveHkpICYmIHByb3h5W2lzUHJveHlTeW1ib2xdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XHJcbiAgICByZXR1cm4gaXNQcm94eShwcm94eSkgPyBwcm94eVt0YXJnZXRTeW1ib2xdIDogcHJveHk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb3h5KHRhcmdldCwga2V5KSB7XHJcbiAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5XTtcclxuXHJcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpICYmICFpc1Byb3h5KHZhbHVlKSkge1xyXG4gICAgICAgIGdldFRhcmdldCh0YXJnZXQpW2tleV0gPSBuZXcgUHJveHkodmFsdWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBZ2VudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcclxuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcclxuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldChrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBBcnJheUFnZW50IGV4dGVuZHMgQWdlbnQge1xyXG4gICAgZ2V0IGxlbmd0aCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBsZW5ndGgodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgaGFuZGxlcikge1xyXG4gICAgICAgIHN1cGVyKHRhcmdldCwgaGFuZGxlcik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0KCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XHJcbiAgICB9XHJcblxyXG4gICAgam9pbigpIHtcclxuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5qb2luLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBwb3AoKSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdCwgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZW5ndGgtLTtcclxuXHJcbiAgICAgICAgaWYobGVuZ3RoID49IDAgKXtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy50YXJnZXRbbGVuZ3RoXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2goKSB7XHJcbiAgICAgICAgdmFyIGxlbmd0aCA9IHRoaXMudGFyZ2V0Lmxlbmd0aDtcclxuXHJcbiAgICAgICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBsZW5ndGggKyBpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbGVuZ3RoICs9IGFyZ3VtZW50cy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcclxuICAgIH1cclxuXHJcbiAgICByZXZlcnNlKCkge1xyXG4gICAgICAgIGlmKHRoaXMudGFyZ2V0Lmxlbmd0aCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgY29weS5yZXZlcnNlKCk7XHJcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgIGlmKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzaGlmdCgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG5cclxuICAgICAgICBpZihsZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGFyZ2V0W2xlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSAxO1xyXG5cclxuICAgICAgICAgICAgd2hpbGUgKGluZGV4IDwgbGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBpbmRleCAtIDEsIHRoaXMudGFyZ2V0W2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNsaWNlKCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0KCkge1xyXG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKTtcclxuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNvcnQuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3MpO1xyXG4gICAgfVxyXG5cclxuICAgIHNwbGljZSgpIHtcclxuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xyXG4gICAgICAgIHZhciBjb3B5ID0gdXRpbHMuY29weSh0aGlzLnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xyXG4gICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY29weSwgYXJncyk7XHJcblxyXG4gICAgICAgIGNvcHkuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICBpZihpdGVtICE9PSB0aGlzLnRhcmdldFtpbmRleF0pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgaW5kZXgsIHRoaXMudGFyZ2V0W2luZGV4XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYoY29weS5sZW5ndGggIT09IGxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCAnbGVuZ3RoJywgY29weS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxyXG5PYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcclxufTsiLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XHJcbmltcG9ydCB7IGdldFRhcmdldCB9IGZyb20gJy4vcHJveHknO1xyXG5cclxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xyXG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XHJcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGhpcy5rZXlzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmtleXNba2V5XSkge1xyXG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcclxuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHVucmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xyXG5cclxuICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlS2V5KGtleSwgYXJncywgc2VsZikge1xyXG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcclxuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJncyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMub25Qcm9wQ2hhbmdpbmcgPSBhcmdzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdpbmcoYXJncyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2VkID0gYXJncyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvcENoYW5nZWQoYXJncyk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KCkge1xyXG4gICAgICAgIGV2ZW50cy5wcm9wQ2hhbmdpbmcub24odGhpcy5vblByb3BDaGFuZ2luZyk7XHJcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9uKHRoaXMub25Qcm9wQ2hhbmdlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvcENoYW5naW5nKGFyZ3MpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMudmFsaWRhdG9ycywgYXJncy50YXJnZXQpO1xyXG5cclxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGFyZ3Mua2V5LCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlUHJvcENoYW5nZWQoYXJncykge1xyXG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGFyZ3MudGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsaXN0ZW5lciA9IGZpbHRlcnNbMF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcclxuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XHJcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE9yQ3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XHJcblxyXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZSh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XHJcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMudmFsaWRhdG9ycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xyXG5cclxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XHJcblxyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5sZW5ndGggPSAwO1xyXG5cclxuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9mZih0aGlzLm9uUHJvcENoYW5naW5nKTtcclxuICAgICAgICBldmVudHMucHJvcENoYW5nZWQub2ZmKHRoaXMub25Qcm9wQ2hhbmdlZCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xyXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2Fscykge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xyXG4gICAgICAgIC8vIGlkZW50aWZ5IHRleHQgaXMgYSBleHByZXNzaW9uXHJcbiAgICAgICAgdGhpcy5leHByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyBpZGVudGl0eSBpdCBpcyBhIGV2ZW50IGJpbmRpbmdcclxuICAgICAgICB0aGlzLm1lc3NhZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYXNzaWduIHZhbHVlIHRvIGV4cHJlc3Npb25cclxuICAgICAgICB0aGlzLmFzc2lnbmVkID0gZmFsc2U7XHJcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXHJcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xyXG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0ZXh0KTtcclxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLnB1c2goZXhwKTtcclxuICAgICAgICByZXR1cm4gZXhwO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5tZXNzYWdlZCB8fCB0aGlzLmFzc2lnbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV4cHJlc3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XHJcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XHJcblxyXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluZGV4ID4gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLmNyZWF0ZUV4cHJlc3Npb24obWF0Y2hbMV0pKTtcclxuXHJcbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcclxuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID4gbGFzdEluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoKSB7XHJcbiAgICAgICAgaWYodGhpcy5hc3NpZ25lZCB8fCB0aGlzLm1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XHJcblxyXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xyXG4gICAgICAgICAgIGV4cC53YXRjaCh0aGlzLnNjb3BlLCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XHJcbiAgICAgICAgICAgIH0sIHRoaXMubG9jYWxzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkZXRlY3QoKSB7XHJcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWVcclxuICAgIGNvbXB1dGUobG9jYWxzKSB7XHJcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zWzBdLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxyXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XHJcbiAgICAgICAgfSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCB2YWx1ZVxyXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcclxuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZXhwcmVzc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRleHQgKyAnIGlzIG5vdCB2YWxpZCBleHByZXNzaW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XHJcbiAgICAgICAgaWYodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKXtcclxuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXHJcbiAgICBwYXRjaCgpIHtcclxuICAgICAgICBpZih0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufSIsImltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXQgdmFsdWVcclxuICAgIGNvbXB1dGUoc2NvcGUsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHNjb3BlLCBsb2NhbHMpO1xyXG4gICAgICAgIHJldHVybiBldmFsdWF0b3IuZXZhbHVhdGUodGhpcy50ZXh0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBzZXQgdmFsdWVcclxuICAgIGFzc2lnbihzY29wZSwgdmFsdWUsIGxvY2Fscykge1xyXG4gICAgICAgIHZhciBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHNjb3BlLCBsb2NhbHMsIHtcclxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3IodGFyZ2V0LCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldC50b1Byb3h5KClba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZXZhbHVhdG9yLmFzc2lnbih0aGlzLnRleHQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xyXG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xyXG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgKiBhcyBoZWxwZXIgZnJvbSAnLi4vaGVscGVyJztcclxuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwnO1xyXG5pbXBvcnQgeyBMb2NhbCB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcclxuXHJcbi8vIFdpbmRvdyBFdmVudHNcclxuLy8gY2FzZSAnb24tbG9hZCc6XHJcbi8vIGNhc2UgJ29uLXVubG9hZCc6XHJcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcclxuLy8gY2FzZSAnb24tY2hhbmdlJzpcclxuLy8gY2FzZSAnb24tc3VibWl0JzpcclxuLy8gY2FzZSAnb24tcmVzZXQnOlxyXG4vLyBjYXNlICdvbi1zZWxlY3QnOlxyXG4vLyBjYXNlICdvbi1ibHVyJzpcclxuLy8gY2FzZSAnb24tZm9jdXMnOlxyXG4vLyBJbWFnZSBFdmVudHNcclxuLy8gY2FzZSAnb24tYWJvcnQnOlxyXG4vLyBLZXlib2FyZCBFdmVudHNcclxuLy8gY2FzZSAnb24ta2V5ZG93bic6XHJcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcclxuLy8gY2FzZSAnb24ta2V5dXAnOlxyXG4vLyBNb3VzZSBFdmVudHNcclxuLy8gY2FzZSAnb24tY2xpY2snOlxyXG4vLyBjYXNlICdvbi1kYmxjbGljayc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XHJcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XHJcbi8vIGNhc2UgJ29uLW1vdXNlb3V0JzpcclxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcclxuLy8gY2FzZSAnb24tbW91c2V1cCc6XHJcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xyXG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBsb2NhbHMpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XHJcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVCaW5kaW5nKHRleHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmcodGhpcy5zY29wZSwgdGV4dCwgdGhpcy5sb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcih0cGwpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIHRoaXMudm5vZGVzID0gcGFyc2VUcGwodHBsKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52bm9kZXMpO1xyXG5cclxuICAgICAgICAvLyB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xyXG4gICAgICAgIC8vICAgICBkaXJlY3RpdmUuJHByZWxpbmsoKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52bm9kZXMpLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZWxtKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlLiRwb3N0bGluaygpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUZXh0KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyNjb21tZW50JztcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlTm9kZXModm5vZGVzKSB7XHJcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2RlKHZub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlTm9kZSh2bm9kZSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVGV4dCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodGhpcy5pc0NvbW1lbnQodm5vZGUpKXtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlQ29tbWVudCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVFbG0odm5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rTm9kZSh2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlua05vZGUodm5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaXNDb21tZW50KHZub2RlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlRWxtKHZlbG0pIHtcclxuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHZhciBjdXN0b21MaW5rZXIgPSB2ZWxtLnZhdHRycy5zb21lKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb21waWxlQXR0cih2YXR0cik7XHJcblxyXG4gICAgICAgICAgICBpZiAodmF0dHIuZGF0YS5kaXJlY3RpdmUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHZhdHRyLmRhdGEuZGlyZWN0aXZlKTtcclxuICAgICAgICAgICAgICAgIHZlbG0uZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmxpbmtlcjtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2ZWxtLmRhdGEubGlua2VyICE9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxyXG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZnVuY3Rpb24gKGRpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlLiRwcmlvcml0eTtcclxuICAgICAgICB9KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aXZlcy5wdXNoKGRpcmVjdGl2ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxyXG4gICAgICAgIGlmIChjdXN0b21MaW5rZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmVsbS5kYXRhLmlzQ29tcG9uZW50ID0gdGhpcy5zY29wZS4kaGFzQ29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAoIXZlbG0uZGF0YS5pc0NvbXBvbmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2ZWxtLmNoaWxkTm9kZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21waWxlQXR0cih2YXR0cikge1xyXG4gICAgICAgIHZhdHRyLmRhdGEuYmluZGluZyA9IHRoaXMuY3JlYXRlQmluZGluZyh2YXR0ci5ub2RlVmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEubWVzc2FnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubWVzc2FnZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5kb21NZXNzYWdlZCA9IHV0aWxzLmNvbnRhaW5zKGRvbUV2ZW50cywgdmF0dHIuZGF0YS5rZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmV4cHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWUuc3Vic3RyKDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCcqJykpIHtcclxuICAgICAgICAgICAgdmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5leHByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmtleSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEua2V5ID0gdmF0dHIubm9kZU5hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmF0dHIuZGF0YS5pc0RpcmVjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zY29wZS4kaGFzRGlyZWN0aXZlKHZhdHRyLmRhdGEua2V5KSkge1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUgPSB0aGlzLnNjb3BlLiRuZXdEaXJlY3RpdmUodmF0dHIuZGF0YS5rZXkpO1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xyXG4gICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmFzc2lnbmVkID0gdmF0dHIuZGF0YS5kaXJlY3RpdmUuJGFzc2lnbmVkO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5saW5rZXIgPSB2YXR0ci5kYXRhLmRpcmVjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgdmF0dHIuZGF0YS5rZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLmlzRGlyZWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKHZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKCF2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgIHZhciBzZXRIdG1sQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmtleS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkoZWxtLCB2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSh2YXR0ci5kYXRhLmtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0uY29tcG9uZW50LiRoYXNBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhdHRyLnZlbG0uY29tcG9uZW50LiRzZXRBdHRyaWJ1dGUodmF0dHIuZGF0YS5rZXksIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLmRhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBpbGVUZXh0KHZ0ZXh0KSB7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XHJcbiAgICAgICAgdnRleHQuZGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5lbG0ucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChuZXdUZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWxwZXIucmVwbGFjZU5vZGUodnRleHQuZWxtLCBuZXdUZXh0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZ0ZXh0LmRhdGEuYmluZGluZy5jb21waWxlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbGlua0VsbSh2ZWxtKSB7XHJcbiAgICAgICAgaWYgKHZlbG0uZGF0YS5saW5rZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdmVsbS5kYXRhLmxpbmtlci4kbGluaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xyXG5cclxuICAgICAgICBpZiAodmVsbS5kYXRhLmlzQ29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuc2NvcGUuJG5ld0NvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcclxuXHJcbiAgICAgICAgICAgIHZlbG0uZGF0YS5jb21wb25lbnQgPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgdmVsbS5lbG0uc3R5bGUuZGlzcGxheSA9IGluc3RhbmNlLiRkaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtBdHRyKHZhdHRyKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS4kJHZlbG0gPSB2ZWxtO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCh2ZWxtLmVsbSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlua0F0dHIodmF0dHIpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdmVsbS5lbG07XHJcbiAgICB9XHJcblxyXG4gICAgbGlua0F0dHIodmF0dHIpIHtcclxuICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XHJcblxyXG4gICAgICAgIGlmICh2YXR0ci5kYXRhLm1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgIGlmICh2YXR0ci5kYXRhLmRvbU1lc3NhZ2VkKSB7XHJcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcih2YXR0ci5kYXRhLmtleSwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcuY29tcHV0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsczogbmV3IExvY2FsKGUsIGVsbSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhdHRyLnZlbG0uaXNDb21wb25lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhdHRyLnZlbG0uY29tcG9uZW50LiRiaW5kKHZhdHRyLmRhdGEua2V5LCBmdW5jdGlvbiAoZSwgYXJnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmF0dHIuZGF0YS5iaW5kaW5nLmNvbXB1dGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbHM6IG5ldyBMb2NhbChlLCBlbG0sIGFyZylcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcubGluaygpO1xyXG4gICAgICAgICAgICB2YXR0ci5kYXRhLmJpbmRpbmcucGF0Y2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlua1RleHQodnRleHQpIHtcclxuICAgICAgICB2dGV4dC5kYXRhLmJpbmRpbmcubGluaygpO1xyXG4gICAgICAgIHZ0ZXh0LmVsbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZ0ZXh0LmRhdGEuYmluZGluZy52YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xyXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHZjbW50Lm5vZGVWYWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcclxuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdmF0dHInO1xyXG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcclxuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcclxuZXhwb3J0ICogZnJvbSAnLi92dGV4dCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVkF0dHIgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnZlbG0gPSBudWxsO1xyXG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkRkZXN0cm95KCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcclxuICAgICAgICBzdXBlcignI2NvbW1lbnQnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVk5vZGUgfSBmcm9tICcuL3Zub2RlJztcclxuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcclxuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwtYXBpJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHN1cGVyKG5hbWUpO1xyXG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1c2hBdHRyKGF0dHIpIHtcclxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzQXR0cigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEF0dHIoa2V5KSB7XHJcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xyXG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0YXJnZXQudmVsbSA9IHRoaXM7XHJcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUF0dHIoa2V5KSB7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcclxuXHJcbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIFZBdHRyKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcclxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xyXG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XHJcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XHJcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcclxuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcclxuICAgICAgICByZXR1cm4gYXR0cjtcclxuICAgIH1cclxuXHJcbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xyXG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldElubmVyVHBsKHRwbCkge1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xyXG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcclxuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59IiwiLy8gdmlydHVhbCBub2RlXHJcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kYXRhID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVzaENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkU2libGluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XHJcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XHJcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcclxuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcclxuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xyXG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcblxyXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XHJcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcclxuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xyXG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaGlsZDtcclxuICAgIH1cclxuXHJcbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XHJcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XHJcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xyXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVmQ2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcclxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb25lTm9kZSgpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcclxuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XHJcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBob29wc1xyXG5cclxuICAgIC8vIGVuZCBvZiBob29wc1xyXG59XHJcbiIsImltcG9ydCB7IFZOb2RlIH0gZnJvbSAnLi92bm9kZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xyXG4gICAgICAgIHN1cGVyKCcjdGV4dCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBWTm9kZSB9IGZyb20gJy4vdm5vZGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XHJcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XHJcblxyXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XHJcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XHJcbiAgICByZXR1cm4gbmV3IFRwbExleGVyKCkubGV4KHRwbCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBhcnNlVHBsKHRwbCkge1xyXG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xyXG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwgfTsiLCJleHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGQodm5vZGUpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1RleHQodm5vZGUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVGV4dCh2bm9kZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmlzQ29tbWVudCh2bm9kZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNUZXh0KHZub2RlKSB7XHJcbiAgICAgICAgcmV0dXJuIHZub2RlLm5vZGVOYW1lID09PSAnI3RleHQnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ29tbWVudCh2bm9kZSkge1xyXG4gICAgICAgIHJldHVybiB2bm9kZS5ub2RlTmFtZSA9PT0gJyNjb21tZW50JztcclxuICAgIH1cclxuXHJcbiAgICBidWlsZEVsZW1lbnQodmVsbSkge1xyXG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xyXG4gICAgICAgICAgICB9KS5qb2luKCcgJyksXHJcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcclxuICAgICAgICAgICAgfSkuam9pbignJyk7XHJcblxyXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcclxuICAgICAgICAgICAgYXR0clRwbCA9ICcgJyArIGF0dHJUcGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdmVsbS5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcclxuXHJcbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcclxuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdmVsbS5ub2RlTmFtZSArICc+Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHBsO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkQXR0cmlidXRlKHZhdHRyKSB7XHJcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xyXG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZVZhbHVlO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xyXG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxyXG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XHJcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxyXG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xyXG4gICAgfVxyXG5cclxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcclxuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxyXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xyXG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XHJcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XHJcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xyXG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xyXG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHRtbCB0ZXh0XHJcbiAgICByZWFkVGV4dCgpIHtcclxuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xyXG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcclxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcclxuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxyXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodG1sIHRhZ1xyXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XHJcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcclxuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV4KHRleHQpIHtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XHJcblxyXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XHJcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcclxuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcclxuaW1wb3J0IHtcclxuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXHJcbn0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlKHRleHQpIHtcclxuICAgICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XHJcblxyXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcclxuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XHJcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcclxuICAgIH1cclxuXHJcbiAgICBkb2N0eXBlKCkge1xyXG4gICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcclxuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XHJcbiAgICB9XHJcblxyXG4gICAgZWxlbWVudChwKSB7XHJcbiAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XHJcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XHJcblxyXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XHJcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XHJcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGVsZTtcclxuICAgIH1cclxuXHJcbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcclxuICAgICAgICB2YXIgZWxlcyA9IFtdO1xyXG5cclxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XHJcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xyXG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZWxlcztcclxuICAgIH1cclxuXHJcbiAgICBhdHRycyhwKSB7XHJcbiAgICAgICAgdmFyIGF0dHJzID0gW107XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhdHRycztcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICAgfVxyXG59IiwidmFyIGRlYnVnTW9kZSA9IHRydWUsXHJcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXHJcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcclxuXHJcbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24sIGlnbm9yZU93bikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW2luZGV4XSwgaW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChpc09iamVjdChvYmopKSB7XHJcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW3BdLCBwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KHApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29weSgpIHtcclxuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xyXG4gICAgICAgIGRlZXAgPSBvYmo7XHJcbiAgICAgICAgb2JqSW5kZXgrKztcclxuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XHJcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xyXG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcclxuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcclxuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoaXRlbSkgOiBpdGVtKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdBcnI7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcclxuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XHJcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weSh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBuZXdPYmo7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuZnVuY3Rpb24gZXh0ZW5kKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xyXG5cclxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xyXG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XHJcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZWVwKSB7XHJcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1lcmdlKCkge1xyXG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcclxuXHJcbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XHJcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XHJcbiAgICAgICAgaW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZGVlcCkge1xyXG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xyXG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XHJcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcclxuICAgIGZ1bmN0aW9uIEYoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgRi5wcm90b3R5cGUgPSBvO1xyXG4gICAgcmV0dXJuIG5ldyBGKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XHJcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xyXG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcclxuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xyXG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xyXG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcclxuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNNYXAob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcclxuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcclxuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcclxuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcclxufVxyXG5cclxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcclxuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xyXG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XHJcblxyXG4gICAgaWYgKCFzYW1lKSB7XHJcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xyXG4gICAgICAgICAgICBpZiAob2JqMS5sZW5ndGggPT09IG9iajIubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChpc09iamVjdChvYmoxKSAmJiBpc09iamVjdChvYmoyKSAmJiBnZXRQcm90b3R5cGVPZihvYmoxKSA9PT0gZ2V0UHJvdG90eXBlT2Yob2JqMikpIHtcclxuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzYW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gIWlzT2JqZWN0KHZhbHVlKSB8fCAhc29tZSh2YWx1ZSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xyXG4gICAgaWYgKGRlYnVnTW9kZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGxvZyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gb2JqO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XHJcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSA9PT0gc3RyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShpdGVtKSA9PT0gbG93ZXJjYXNlKHN0cikpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xyXG4gICAgaWYgKCFvYmopIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XHJcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xyXG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBoYXNQcm9wID8gdGFyZ2V0IDogbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvcGVydHkob2JqLCBrZXksIHZhbHVlLCBpZ25vcmVDYXNlKSB7XHJcbiAgICBpZiAoIW9iaikge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xyXG5cclxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XHJcbiAgICAgICAgaWYgKGtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xyXG4gICAgICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xyXG4gICAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFoYXNQcm9wKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb25jYXQoKSB7XHJcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZnVuY3Rpb24gb3JkZXJCeShhcnIsIGdldHRlcikge1xyXG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhhcnIsIGdldHRlcikge1xyXG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xyXG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcclxuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlKGFyciwgaXRlbSkge1xyXG4gICAgaWYgKGFyci5sZW5ndGgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmb3JtYXQoKSB7XHJcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxyXG4gICAgICAgIHBhdHRlcm4gPSAvXFx7KFxcZCspXFx9L2csIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG5cclxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xyXG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xyXG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XHJcblxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCkgKyBhcmd1bWVudHNbaW5kZXhdO1xyXG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbCkge1xyXG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBqb2luKHNlcGFyYXRvciwgYXJyKSB7XHJcbiAgICB2YXIgcmVzdWx0ID0gJycsIGxlbmd0aCA9IGFyci5sZW5ndGg7XHJcblxyXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IGl0ZW07XHJcblxyXG4gICAgICAgIGlmIChpbmRleCArIDEgPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IHNlcGFyYXRvcjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQge1xyXG4gICAgZm9yRWFjaCxcclxuICAgIHNvbWUsXHJcbiAgICBjb3B5LFxyXG4gICAgZXh0ZW5kLFxyXG4gICAgbWVyZ2UsXHJcbiAgICBvYmplY3QsXHJcbiAgICBpbmhlcml0LFxyXG4gICAgbG93ZXJjYXNlLFxyXG4gICAgdXBwZXJjYXNlLFxyXG4gICAgaXNVbmRlZmluZWQsXHJcbiAgICBpc0RlZmluZWQsXHJcbiAgICBpc09iamVjdCxcclxuICAgIGlzQmxhbmtPYmplY3QsXHJcbiAgICBpc051bWJlcixcclxuICAgIGlzRGF0ZSxcclxuICAgIGlzRnVuY3Rpb24sXHJcbiAgICBpc1JlZ0V4cCxcclxuICAgIGlzQm9vbGVhbixcclxuICAgIGlzQXJyYXksXHJcbiAgICBpc1N0cmluZyxcclxuICAgIGlzU2FtZSxcclxuICAgIGlzRW1wdHksXHJcbiAgICBpc0Zvcm1EYXRhLFxyXG4gICAgZGVidWcsXHJcbiAgICBjb250YWlucyxcclxuICAgIGNvbnRhaW5zU3RyLFxyXG4gICAgaGFzUHJvcGVydHksXHJcbiAgICBnZXRQcm9wZXJ0eSxcclxuICAgIHNldFByb3BlcnR5LFxyXG4gICAgY29uY2F0LFxyXG4gICAgb3JkZXJCeSxcclxuICAgIG9yZGVyQnlEZXNjZW5kaW5nLFxyXG4gICAgdG9OdW1iZXIsXHJcbiAgICByZW1vdmUsXHJcbiAgICBmb3JtYXQsXHJcbiAgICBlc2NhcGVIdG1sLFxyXG4gICAgam9pblxyXG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5pbXBvcnQgeyBpc01lc3NhZ2UsIE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2ZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XHJcbmltcG9ydCB7IFJlbmRlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XHJcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50Q29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgdGhpcy4kJGRhdGEgPSBudWxsO1xyXG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xyXG4gICAgdGhpcy4kJGZyYWdtZW50ID0gbnVsbDtcclxuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XHJcbiAgICB0aGlzLiQkZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgdGhpcy4kJGluamVjdG9yID0gaW5qZWN0b3I7XHJcbiAgICB0aGlzLiQkcmVuZGVyID0gbmV3IFJlbmRlcih0aGlzKTtcclxuICAgIHRoaXMuJCRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0aGlzKTtcclxuICAgIHRoaXMuJCRldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMpO1xyXG4gICAgdGhpcy4kZGlzcGxheSA9ICdpbmhlcml0JztcclxuICAgIHRoaXMuJHNldERhdGEoZGF0YSk7XHJcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiQkZGF0YSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgJHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcclxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGRhdGEubWV0aG9kcykpIHtcclxuICAgICAgICAgICAgICAgIHV0aWxzLmV4dGVuZCh0aGlzLCBkYXRhLm1ldGhvZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGRhdGEuY29uc3RydWN0KSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy4kJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNDb21wb25lbnQoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNDb21wb25lbnQoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0NvbXBvbmVudChrZXkpIHtcclxuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGtleSwgdGhpcy4kJGRhdGEuYWxpYXMpO1xyXG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcclxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xyXG4gICAgfVxyXG5cclxuICAgICRoYXNEaXJlY3RpdmUoa2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5oYXNEaXJlY3RpdmUoa2V5LCB0aGlzLiQkZGF0YS5hbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgJG5ld0RpcmVjdGl2ZShrZXkpIHtcclxuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy4kJGluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xyXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XHJcbiAgICB9XHJcblxyXG4gICAgJGhhc0ZpbHRlcihrZXkpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmhhc0ZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkZ2V0RmlsdGVyKGtleSkge1xyXG4gICAgICAgIHJldHVybiAgdGhpcy4kJGluamVjdG9yLmNyZWF0ZUZpbHRlcihrZXksIHRoaXMuJCRkYXRhLmFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICAkaGFzQXR0cmlidXRlKGtleSkge1xyXG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLCBrZXksIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgICRzZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMsIGtleSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy50b1Byb3h5KCksIGtleSwgdmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkYmluZChtZXNzYWdlLCBoYW5kbGVyKSB7XHJcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLCBtZXNzYWdlLCB0cnVlKTtcclxuXHJcbiAgICAgICAgaWYgKGlzTWVzc2FnZShtZXNzYWdlKSkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UgKyAnIGlzIG5vdCBhIG1lc3NhZ2UnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgJHVuYmluZChldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIHZhciBtZXNzYWdlID0gdXRpbHMuZ2V0UHJvcGVydHkodGhpcywgbWVzc2FnZSwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5vZmYoaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSArICcgaXMgbm90IGEgbWVzc2FnZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcclxuICAgIH1cclxuXHJcbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xyXG4gICAgfVxyXG5cclxuICAgICRldmFsKGV4cCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGdldFRlbXBsYXRlKCkge1xyXG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kJGRhdGE7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XHJcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcclxuICAgICAgICB0aGlzLiQkZnJhZ21lbnQgPSB0aGlzLiQkcmVuZGVyLnJlbmRlcih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRmcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuJCRmcmFnbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgJHVubW91bnQoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICRkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuJCRvYnNlcnZlci5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgY2hpbGQuJGRlc3Ryb3koKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgaXRlbS4kZGVzdHJveSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xyXG4gICAgICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJcclxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcclxuICAgIHRoaXMuJCR2YXR0ciA9IG51bGw7XHJcbiAgICAvLyBpZGVudGlmeSB0aGlzIGRpcmVjdGl2ZSB3b3VsZCBhc3NpZ24gdmFsdWUgdG8gYmluZGluZyBleHByZXNzaW9uXHJcbiAgICB0aGlzLiRhc3NpZ25lZCA9IGZhbHNlO1xyXG4gICAgdGhpcy4kcHJpb3JpdHkgPSA5O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlyZWN0aXZlIHtcclxuICAgIGdldCAkc2NvcGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJGVsbSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCAkY29tcG9uZW50KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIudmVsbS5kYXRhLmNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgJGJpbmRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5kYXRhLmJpbmRpbmc7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IobWVhdGFkYXRhKSB7XHJcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZWF0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdoaWxlIGNvbXBpbGluZ1xyXG4gICAgJGNvbXBpbGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXHJcbiAgICAkY2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAkbGluaygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJlZm9yZSBsaW5raW5nXHJcbiAgICAvLyAkcHJlbGluaygpIHtcclxuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xyXG4gICAgJHBvc3RsaW5rKCkge1xyXG4gICAgICAgIHRoaXMuYWZ0ZXJMaW5rICYmIHRoaXMuYWZ0ZXJMaW5rKCk7XHJcbiAgICB9XHJcblxyXG4gICAgJGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcclxuICAgIH1cclxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xyXG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xyXG5cclxudmFyIHBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcclxuXHJcbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxyXG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcmVuYW1lKHJvbGVJZCwga2V5KSB7XHJcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChrZXkpKSB7XHJcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gJyc7XHJcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IGtleS5zcGxpdCgnLScpO1xyXG5cclxuICAgICAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnQ29tcG9uZW50JztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZGlyZWN0aXZlOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0RpcmVjdGl2ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcclxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdGaWx0ZXInO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5zZXJ2aWNlOlxyXG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ1NlcnZpY2UnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZShyb2xlSWQsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yLCBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLnJlbmFtZShyb2xlSWQsIG1ldGFkYXRhLmtleSksXHJcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihtZXRhZGF0YS5jb25zdHJ1Y3QpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWV0YWRhdGEuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xyXG5cclxuICAgICAgICAvLyBleHRlbmRzIGNsYXNzXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24obWV0YWRhdGEuZXh0ZW5kcykpIHtcclxuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3RvciwgbWV0YWRhdGEuZXh0ZW5kcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xyXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChtZXRhZGF0YS5tZXRob2RzKSkge1xyXG4gICAgICAgICAgICB1dGlscy5leHRlbmQoY29uc3RydWN0b3IucHJvdG90eXBlLCBtZXRhZGF0YS5tZXRob2RzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlQ29tcG9uZW50KG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5jb21wb25lbnQsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRGlyZWN0aXZlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlRmlsdGVyKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5maWx0ZXIsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBtYWtlU2VydmljZShtZXRhZGF0YSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuc2VydmljZSwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGZhY3RvcnkgPSBuZXcgRmFjdG9yeSgpOyIsIlxyXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xyXG4gICAgY29uc3RydWN0b3IobWV0YWRhdGEpIHtcclxuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcclxuXHJcbi8vIG1ldGFkYXRhIGV4YW1wbGVcclxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XHJcbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyID0ge307XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lciA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGdldENsYXNzQ29udGFpbmVyKHJvbGVJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3RvcmUgbWV0YWRhdGEgdG8gcHJvdG90eXBlXHJcbiAgICAgICAgbWV0YWRhdGEua2V5ID0ga2V5O1xyXG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XHJcblxyXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcblxyXG4gICAgICAgIGlmIChjb250YWluZXJba2V5XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lcltrZXldID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGNvbnRhaW5lcltrZXldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnRhaW5lcltrZXldLnB1c2goY29uc3RydWN0b3IpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmZpbHRlciwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xyXG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhcyhyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgYWxpYXMpIHtcclxuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XHJcbiAgICAgICAgdmFyIHNlZ21lbnRzID0gdGhpcy5jb252ZXJ0QWxpYXMoa2V5LCBhbGlhcykuc3BsaXQoJy4nKTtcclxuICAgICAgICB2YXIgbmFtZXNwYWNlID0gJyc7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGtleSA9IHNlZ21lbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBuYW1lc3BhY2UgPSBzZWdtZW50cy5qb2luKCcuJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNDb21wb25lbnQoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgdHJ1ZSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0RpcmVjdGl2ZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzRmlsdGVyKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNTZXJ2aWNlKGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCB0cnVlLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBhbGlhcykge1xyXG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcclxuICAgICAgICB2YXIgc2VnbWVudHMgPSB0aGlzLmNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKS5zcGxpdCgnLicpO1xyXG4gICAgICAgIHZhciBuYW1lc3BhY2UgPSAnJztcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAga2V5ID0gc2VnbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgIG5hbWVzcGFjZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihyb2xlSWQgKyAnICcgKyBrZXkgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgbm90IGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbmFtZXNwYWNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsga2V5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Q29tcG9uZW50KGtleSwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuY29tcG9uZW50LCBrZXksIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXJlY3RpdmUoa2V5LCBhbGlhcykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpbHRlcihrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VydmljZShrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLnNlcnZpY2UsIGtleSwgYWxpYXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZShyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3MgY29uc3RydWN0b3IgZm9yIGtleSAnICsga2V5T3JDb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLmZpbHRlcik7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xyXG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgYWxpYXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XHJcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIGFsaWFzKSB7XHJcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLnNlcnZpY2UpO1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAga2V5T3JDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBhbGlhcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWtleU9yQ29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubm9uU2hhcmVkKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcclxuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRBbGlhcyhrZXksIGFsaWFzKSB7XHJcbiAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdChhbGlhcykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBzZWdtZW50cyA9IGtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgY2xhc3NOYW1lID0gc2VnbWVudHMucG9wKCksXHJcbiAgICAgICAgICAgIHNwYWNlTmFtZSA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcclxuXHJcbiAgICAgICAgdXRpbHMuc29tZShhbGlhcywgZnVuY3Rpb24gKHNob3J0TmFtZSwgZnVsbE5hbWUpIHtcclxuICAgICAgICAgICAgaWYgKHNob3J0TmFtZSA9PT0gc3BhY2VOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBmdWxsTmFtZSArICcuJyArIGNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG5cclxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xyXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHZhbHVlLCBtZXRhZGF0YS5hbGlhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcclxuICAgIGZpbHRlcjogMCxcclxuICAgIHNlcnZpY2U6IDEsXHJcbiAgICBjb21wb25lbnQ6IDIsXHJcbiAgICBkaXJlY3RpdmU6IDNcclxufTsiLCJleHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xyXG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbXBvbmVudCwgIGNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBGaWx0ZXIsIGZpbHRlckNvbnN0cnVjdG9yIH0gZnJvbSAnLi9maWx0ZXInO1xyXG5pbXBvcnQgeyBTZXJ2aWNlLCBzZXJ2aWNlQ29uc3RydWN0b3IgfSBmcm9tICcuL3NlcnZpY2UnO1xyXG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcclxuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcclxuaW1wb3J0ICogYXMgaGVscGVyIGZyb20gJy4uL2hlbHBlcic7XHJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxyXG52YXIgY29tcG9uZW50Q2xhc3MgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIENvbXBvbmVudChtZXRhZGF0YSkge1xyXG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xyXG4gICAgfTtcclxufSkoKTtcclxuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcclxuXHJcbnZhciBkaXJlY3RpdmVDbGFzcyA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XHJcbiAgICB9O1xyXG59KSgpO1xyXG5kaXJlY3RpdmVDbGFzcy5wcm90b3R5cGUgPSBEaXJlY3RpdmUucHJvdG90eXBlO1xyXG5cclxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBGaWx0ZXIobWV0YWRhdGEpIHtcclxuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcclxuICAgIH07XHJcbn0pKCk7XHJcbmZpbHRlckNsYXNzLnByb3RvdHlwZSA9IEZpbHRlci5wcm90b3R5cGU7XHJcblxyXG52YXIgc2VydmljZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiBTZXJ2aWNlKG1ldGFkYXRhKSB7XHJcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXHJcbiAgICB9O1xyXG59KSgpO1xyXG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XHJcbi8vIGVuZCBvZiBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cclxuXHJcbmZ1bmN0aW9uIG5hbWVzcGFjZShuYW1lKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIG1ldGFkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpcmVjdGl2ZTogZnVuY3Rpb24gKGtleSwgbWV0YWRhdGEpIHtcclxuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcclxuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIG1ldGFkYXRhKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcnZpY2U6IGZ1bmN0aW9uIChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXJ2aWNlKGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgbWV0YWRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbXBvbmVudChrZXksIG1ldGFkYXRhKSB7XHJcbiAgICBtZXRhZGF0YS5leHRlbmRzID0gY29tcG9uZW50Q2xhc3M7XHJcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQobWV0YWRhdGEpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xyXG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgbWV0YWRhdGEuZXh0ZW5kcyA9IGRpcmVjdGl2ZUNsYXNzO1xyXG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKG1ldGFkYXRhKTtcclxuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gZmlsdGVyKGtleSwgbWV0YWRhdGEpIHtcclxuICAgIG1ldGFkYXRhLmV4dGVuZHMgPSBmaWx0ZXJDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihtZXRhZGF0YSk7XHJcbiAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XHJcbiAgICByZXR1cm4gY29uc3RydWN0b3I7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNlcnZpY2Uoa2V5LCBtZXRhZGF0YSkge1xyXG4gICAgbWV0YWRhdGEuZXh0ZW5kcyA9IHNlcnZpY2VDbGFzcztcclxuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2UobWV0YWRhdGEpO1xyXG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcclxuICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIERpcmVjdGl2ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNGaWx0ZXIoaW5zdGFuY2UpIHtcclxuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XHJcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBib290c3RyYXAoc2VsZWN0b3IsIG1ldGFkYXRhKSB7XHJcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xyXG4gICAgdmFyIGFwcCA9IG5ldyBDb21wb25lbnQodXRpbHMubWVyZ2Uoe1xyXG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxyXG4gICAgfSwgbWV0YWRhdGEpKTtcclxuICAgIGhlbHBlci5jbGVhckNoaWxkTm9kZXMoZWxlbWVudCk7XHJcbiAgICBhcHAuJHJlbmRlcigpO1xyXG4gICAgYXBwLiRtb3VudChlbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICAgIENvbXBvbmVudCxcclxuICAgIERpcmVjdGl2ZSxcclxuICAgIEZpbHRlcixcclxuICAgIFNlcnZpY2UsXHJcbiAgICBpc0NvbXBvbmVudCxcclxuICAgIGlzRGlyZWN0aXZlLFxyXG4gICAgaXNGaWx0ZXIsXHJcbiAgICBpc1NlcnZpY2UsXHJcbiAgICBuYW1lc3BhY2UsXHJcbiAgICBib290c3RyYXAsXHJcbiAgICBpbmplY3RvclxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=