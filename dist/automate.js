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

/***/ "./src/component/index.js":
/*!********************************!*\
  !*** ./src/component/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _slot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slot */ "./src/component/slot.js");
/* empty/unused harmony star reexport */

/***/ }),

/***/ "./src/component/slot.js":
/*!*******************************!*\
  !*** ./src/component/slot.js ***!
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



var SlotComponent = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["component"])({
  namespace: 'automate',
  key: 'slot'
}), _dec(_class = /*#__PURE__*/function (_Component) {
  _inherits(SlotComponent, _Component);

  function SlotComponent() {
    var _this;

    _classCallCheck(this, SlotComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SlotComponent).call(this));
    _this.props.name = '';
    return _this;
  }

  _createClass(SlotComponent, [{
    key: "$render",
    value: function $render() {
      var slots = this.$$parent.slots;
      var template = slots[this.props.name];

      if (template) {
        this.$$view = this.$$parent.$$renderer.render(template);
      }

      return this.$$view;
    }
  }]);

  return SlotComponent;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);

/***/ }),

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

var Local = function Local(e, elm) {
  _classCallCheck(this, Local);

  this.$event = e;
  this.$element = elm;
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
    value: function fire(e, data, scope) {
      return this.get(e).fire(data, scope);
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

    this.data = {};
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
    value: function fire(data, scope) {
      var returnValue;
      scope = scope || this;
      this.data = data || {};

      for (var i = 0; i < this.handlers.length; i++) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isFunction"](this.handlers[i])) {
          returnValue = this.handlers[i].call(scope, this);
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

/***/ "./src/css.js":
/*!********************!*\
  !*** ./src/css.js ***!
  \********************/
/*! exports provided: M_CMP_CLASS, M_HIDE_CLASS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_CMP_CLASS", function() { return M_CMP_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_HIDE_CLASS", function() { return M_HIDE_CLASS; });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

_dom__WEBPACK_IMPORTED_MODULE_0__["loadStyleString"]('.m-component{display:inherit;} .m-hide{display:none !important;}');
var M_CMP_CLASS = 'm-component';
var M_HIDE_CLASS = 'm-hide';

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

/***/ "./src/directive/bind-html.js":
/*!************************************!*\
  !*** ./src/directive/bind-html.js ***!
  \************************************/
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



var BindHtmlDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-bind-html'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(BindHtmlDirective, _Directive);

  function BindHtmlDirective() {
    _classCallCheck(this, BindHtmlDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(BindHtmlDirective).call(this));
  }

  _createClass(BindHtmlDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.$element.innerHTML = value;
    }
  }]);

  return BindHtmlDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

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
      this.$element.innerText = value;
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
    _classCallCheck(this, HideDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(HideDirective).call(this));
  }

  _createClass(HideDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.$hideElement(value);
    }
  }]);

  return HideDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/if.js":
/*!*****************************!*\
  !*** ./src/directive/if.js ***!
  \*****************************/
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



var IfDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-if'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(IfDirective, _Directive);

  function IfDirective() {
    var _this;

    _classCallCheck(this, IfDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IfDirective).call(this));
    _this.$placeholder = document.createComment('n-if');
    return _this;
  }

  _createClass(IfDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.$removeElement(!value);
    }
  }]);

  return IfDirective;
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
/* empty/unused harmony star reexport *//* harmony import */ var _bind_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bind-html */ "./src/directive/bind-html.js");
/* empty/unused harmony star reexport *//* harmony import */ var _repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./repeat */ "./src/directive/repeat.js");
/* empty/unused harmony star reexport *//* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/directive/model.js");
/* empty/unused harmony star reexport *//* harmony import */ var _hide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hide */ "./src/directive/hide.js");
/* empty/unused harmony star reexport *//* harmony import */ var _show__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./show */ "./src/directive/show.js");
/* empty/unused harmony star reexport *//* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state */ "./src/directive/state/index.js");
/* empty/unused harmony star reexport *//* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./style */ "./src/directive/style/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _style__WEBPACK_IMPORTED_MODULE_7__["StyleDirective"]; });

/* harmony import */ var _if__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./if */ "./src/directive/if.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/index.js");
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

      var name = this.$element.name;

      if (name) {
        this.$scope.state[name] = this.status;
      }

      if (this.$component != null) {
        this.$component.$bind('change', function (e) {
          return _this2.commitViewValue(e.data.newvalue);
        });
      } else {
        this.$element.addEventListener('input', function (e) {
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
        this.$component.$setProperty('value', newValue);
      } else {
        this.$element.value = newValue;
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
      var ele = this.$element,
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
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
      velm.removeAttr(vattr);
      this.itemTemplate = velm.getOuterTpl(); // identify this directive would take over link function for related virtual element node, onLink function will be called

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

        _dom__WEBPACK_IMPORTED_MODULE_3__["removeElementsBetween"](header, footer);
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
      _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (item, key) {
        var locals = {};
        locals['$key'] = key;
        locals['$index'] = key;
        locals[self.itemExp] = item;
        var itemContent = self.$renderer.render(self.itemTemplate, locals);
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
    _classCallCheck(this, ShowDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ShowDirective).call(this));
  }

  _createClass(ShowDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.$hideElement(!value);
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
        if (!this.$element.hasAttribute(this.key)) {
          this.$element.setAttribute(this.key, '');
        }
      } else {
        if (this.$element.hasAttribute(this.key)) {
          this.$element.removeAttribute(this.key);
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class = /*#__PURE__*/function (_ClassDirective) {
  _inherits(ClassEvenDirective, _ClassDirective);

  function ClassEvenDirective() {
    _classCallCheck(this, ClassEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassEvenDirective).call(this));
  }

  _createClass(ClassEvenDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$binding.evaluate('$index');
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  key: 'm-class-odd'
}), _dec(_class = /*#__PURE__*/function (_ClassDirective) {
  _inherits(ClassOddDirective, _ClassDirective);

  function ClassOddDirective() {
    _classCallCheck(this, ClassOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassOddDirective).call(this));
  }

  _createClass(ClassOddDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$binding.evaluate('$index');
      return index & 1 === 0;
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../dom */ "./src/dom.js");
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




var ClassDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-class'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(ClassDirective, _Directive);

  function ClassDirective() {
    _classCallCheck(this, ClassDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClassDirective).call(this));
  }

  _createClass(ClassDirective, [{
    key: "onChange",
    value: function onChange(newClass, oldClass) {
      if (this.skipCurrentElm()) {
        return;
      }

      if (oldClass) {
        _dom__WEBPACK_IMPORTED_MODULE_2__["removeClass"](this.$element, oldClass.join(''));
      }

      if (newClass) {
        _dom__WEBPACK_IMPORTED_MODULE_2__["addClass"](this.$element, newClass.join(''));
      }
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
}), _dec(_class = /*#__PURE__*/function (_StyleDirective) {
  _inherits(StyleEvenDirective, _StyleDirective);

  function StyleEvenDirective() {
    _classCallCheck(this, StyleEvenDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleEvenDirective).call(this));
  }

  _createClass(StyleEvenDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$binding.evaluate('$index');
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  key: 'm-style-odd'
}), _dec(_class = /*#__PURE__*/function (_StyleDirective) {
  _inherits(StyleOddDirective, _StyleDirective);

  function StyleOddDirective() {
    _classCallCheck(this, StyleOddDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleOddDirective).call(this));
  }

  _createClass(StyleOddDirective, [{
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      var index = this.$binding.evaluate('$index');
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

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
  key: 'm-style'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(StyleDirective, _Directive);

  function StyleDirective() {
    _classCallCheck(this, StyleDirective);

    return _possibleConstructorReturn(this, _getPrototypeOf(StyleDirective).call(this));
  }

  _createClass(StyleDirective, [{
    key: "onChange",
    value: function onChange(newStyle, oldStyle) {
      if (this.skipCurrentElm()) {
        return;
      }

      var self = this;

      if (oldStyle) {
        _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](oldStyle, function (value, key) {
          self.$element.style[key] = '';
        });
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_2__["isObject"](newStyle)) {
        _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](newStyle, function (value, key) {
          self.$element.style[key] = value;
        });
      }
    }
  }, {
    key: "skipCurrentElm",
    value: function skipCurrentElm() {
      return false;
    }
  }]);

  return StyleDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/index.js":
/*!***************************************!*\
  !*** ./src/directive/switch/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _switch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch */ "./src/directive/switch/switch.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_default__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./switch-default */ "./src/directive/switch/switch-default.js");
/* empty/unused harmony star reexport *//* harmony import */ var _switch_when__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./switch-when */ "./src/directive/switch/switch-when.js");
/* empty/unused harmony star reexport */



/***/ }),

/***/ "./src/directive/switch/switch-default.js":
/*!************************************************!*\
  !*** ./src/directive/switch/switch-default.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
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



var SwitchDefaultDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-switch-default'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(SwitchDefaultDirective, _Directive);

  function SwitchDefaultDirective() {
    var _this;

    _classCallCheck(this, SwitchDefaultDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDefaultDirective).call(this));
    _this.switchCtrl = null;
    _this.$placeholder = document.createComment('m-switch-default');
    return _this;
  }

  _createClass(SwitchDefaultDirective, [{
    key: "afterLink",
    value: function afterLink() {
      var _this2 = this;

      this.switchCtrl = this.$seekUpDirective('m-switch');

      if (this.switchCtrl == null) {
        throw new Error('Require m-switch directive');
      }

      this.switchCtrl.matchDefault.on(function () {
        _this2.$removeElement(!_this2.switchCtrl.defaultMatched);
      });

      if (!this.switchCtrl.defaultMatched) {
        this.$removeElement(true);
      }
    }
  }]);

  return SwitchDefaultDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch-when.js":
/*!*********************************************!*\
  !*** ./src/directive/switch/switch-when.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/core/index.js");
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




var SwitchWhenDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-switch-when'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(SwitchWhenDirective, _Directive);

  function SwitchWhenDirective() {
    var _this;

    _classCallCheck(this, SwitchWhenDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchWhenDirective).call(this));
    _this.value = null;
    _this.matched = false;
    _this.switchCtrl = null;
    _this.changed = new _core__WEBPACK_IMPORTED_MODULE_2__["Message"]();
    _this.$placeholder = document.createComment('m-switch-when');
    return _this;
  }

  _createClass(SwitchWhenDirective, [{
    key: "afterLink",
    value: function afterLink() {
      var _this2 = this;

      this.switchCtrl = this.$seekUpDirective('m-switch');

      if (this.switchCtrl == null) {
        throw new Error('Require m-switch directive');
      }

      this.switchCtrl.changed.on(function () {
        _this2.render();
      });
    }
  }, {
    key: "onChange",
    value: function onChange(value) {
      this.value = value;
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      var matched = this.switchCtrl.value === this.value;

      if (this.matched != matched) {
        this.matched = matched;

        if (matched) {
          this.switchCtrl.plusMatch();
        } else {
          this.switchCtrl.minusMatch();
        }
      }

      this.$removeElement(!matched);
    }
  }]);

  return SwitchWhenDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/directive/switch/switch.js":
/*!****************************************!*\
  !*** ./src/directive/switch/switch.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../view */ "./src/view/index.js");
/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../decorator */ "./src/decorator/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core */ "./src/core/index.js");
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




var SwitchDirective = (_dec = Object(_decorator__WEBPACK_IMPORTED_MODULE_1__["directive"])({
  namespace: 'automate',
  key: 'm-switch'
}), _dec(_class = /*#__PURE__*/function (_Directive) {
  _inherits(SwitchDirective, _Directive);

  function SwitchDirective() {
    var _this;

    _classCallCheck(this, SwitchDirective);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SwitchDirective).call(this));
    _this.value = null;
    _this.matchCount = 0;
    _this.changed = new _core__WEBPACK_IMPORTED_MODULE_2__["Message"]();
    _this.defaultMatched = true;
    _this.matchDefault = new _core__WEBPACK_IMPORTED_MODULE_2__["Message"]();
    return _this;
  }

  _createClass(SwitchDirective, [{
    key: "onChange",
    value: function onChange(value) {
      this.value = value;
      this.changed.fire();
    }
  }, {
    key: "plusMatch",
    value: function plusMatch() {
      this.matchCount++;
      this.checkDefault();
    }
  }, {
    key: "minusMatch",
    value: function minusMatch() {
      this.matchCount--;
      this.checkDefault();
    }
  }, {
    key: "checkDefault",
    value: function checkDefault() {
      var defaultMatched = this.matchCount <= 0;

      if (this.defaultMatched !== defaultMatched) {
        this.defaultMatched = defaultMatched;
        this.matchDefault.fire();
      }
    }
  }]);

  return SwitchDirective;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Directive"])) || _class);

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: addClass, removeClass, appendElement, removeElement, replaceElement, getChildrenOfElement, removeElementsBetween, clearChildrenOfElement, loadStyleString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addClass", function() { return addClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeClass", function() { return removeClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendElement", function() { return appendElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElement", function() { return removeElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "replaceElement", function() { return replaceElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getChildrenOfElement", function() { return getChildrenOfElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeElementsBetween", function() { return removeElementsBetween; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearChildrenOfElement", function() { return clearChildrenOfElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyleString", function() { return loadStyleString; });
function getChildrenOfElement(elm) {
  return Array.prototype.slice.call(elm.childNodes, 0);
}

function clearChildrenOfElement(elm) {
  getChildrenOfElement(elm).forEach(function (child) {
    elm.removeChild(child);
  });
}

function replaceElement(elm, newElm) {
  var parentNode = elm.parentNode;

  if (parentNode != null) {
    parentNode.insertBefore(newElm, elm);
    parentNode.removeChild(elm);
  }
}

function removeElement(elm) {
  var parentNode = elm.parentNode;

  if (parentNode != null) {
    parentNode.removeChild(elm);
  }
}

function removeElementsBetween(startElm, endElm) {
  var parentNode = startElm.parentNode;
  var childNodes = getChildrenOfElement(parentNode);
  childNodes.forEach(function (child) {
    if (child.previousSibling === startElm && child !== endElm) {
      parentNode.removeChild(child);
    }

    if (child.nextSibling === endElm && child !== startElm) {
      parentNode.removeChild(child);
    }
  });
}

function appendElement(elm, newElm) {
  var parentNode = elm.parentNode;

  if (parentNode.lastChild === elm) {
    parentNode.appendChild(newElm);
  } else {
    parentNode.insertBefore(newElm, elm.nextSibling);
  }
}

function addClass(elm, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (elm.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return elm.classList.add(c);
      });
    } else {
      elm.classList.add(cls);
    }
  } else {
    var cur = " " + (elm.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      elm.setAttribute('class', (cur + cls).trim());
    }
  }
}

function removeClass(elm, cls) {
  if (!cls || !(cls = cls.trim())) {
    return;
  }

  if (elm.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) {
        return elm.classList.remove(c);
      });
    } else {
      elm.classList.remove(cls);
    }

    if (!elm.classList.length) {
      elm.removeAttribute('class');
    }
  } else {
    var cur = " " + (elm.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      elm.setAttribute('class', cur);
    } else {
      elm.removeAttribute('class');
    }
  }
}

function loadStyleString(css) {
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  var header = document.getElementsByTagName('head')[0];
  header.appendChild(style);
}



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

    this.scope = scope;
    this.options = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
      allowNull: false,
      assignInterceptor: null
    }, options);
    this.program = null;
    this.locals = null;
    this.buffer = {};
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_3__["ExpBuilder"]();
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
        var filter = this.scope.$getFilter(context.prop);

        if (filter == null) {
          throw new Error('Filter "' + context.prop + '" is not defined');
        }

        return filter.execute.apply(filter, argValues);
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, isMessage, MessageBus, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, render, injector, component, directive, filter, service, ClassDirective, StyleDirective */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["getTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return _observer__WEBPACK_IMPORTED_MODULE_2__["handler"]; });

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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeType", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["nodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VCmnt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["VType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["lexTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["parseTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVElm", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["isVElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVAttr", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["isVAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVText", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["isVText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVComment", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["isVComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return _tpl__WEBPACK_IMPORTED_MODULE_4__["TplBuilder"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./render */ "./src/render/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Binding"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Expression"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["Renderer"]; });

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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _view__WEBPACK_IMPORTED_MODULE_6__["injector"]; });

/* harmony import */ var _decorator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./decorator */ "./src/decorator/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "component", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "directive", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["directive"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filter", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["filter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "service", function() { return _decorator__WEBPACK_IMPORTED_MODULE_7__["service"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./directive */ "./src/directive/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClassDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_8__["ClassDirective"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StyleDirective", function() { return _directive__WEBPACK_IMPORTED_MODULE_8__["StyleDirective"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component */ "./src/component/index.js");
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
/*! exports provided: isProxy, getTarget, handler, Observer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./proxy */ "./src/observer/proxy.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return _proxy__WEBPACK_IMPORTED_MODULE_0__["isProxy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return _proxy__WEBPACK_IMPORTED_MODULE_0__["getTarget"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return _proxy__WEBPACK_IMPORTED_MODULE_0__["handler"]; });

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
/*! exports provided: isProxy, getTarget, handler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isProxy", function() { return isProxy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTarget", function() { return getTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handler", function() { return handler; });
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
  get: getProxy,
  set: setProxy
}; // extends object prototype, add function toProxy

Object.prototype.toProxy = function () {
  return isProxy(this) ? this : new Proxy(this, handler);
};

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

function isProxy(proxy) {
  return _utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](proxy) && proxy[isProxySymbol];
}

function getTarget(proxy) {
  return isProxy(proxy) ? proxy[targetSymbol] : proxy;
}

function updateProxy(target, key) {
  var value = target[key];

  if (_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](value) && !isProxy(value)) {
    target = getTarget(target);
    target[key] = new Proxy(value, handler);
  }
}

function makeProxy(value) {
  if (_utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](value) && !isProxy(value)) {
    _utils__WEBPACK_IMPORTED_MODULE_1__["forEach"](value, function (item, key) {
      value[key] = makeProxy(item);
    });
    return new Proxy(value, handler);
  }

  return value;
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
      target[key] = makeProxy(value);
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

    this.onPropChanging = function (e) {
      _this.handlePropChanging(e.data);
    };

    this.onPropChanged = function (e) {
      _this.handlePropChanged(e.data);
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
    this.locals = locals; // is true, binding text is a expression

    this.isExp = false; // if true, binding text is a logical expression

    this.logical = false; // if true, binding text is a assignment expression

    this.assignment = false; // handler to update view from model value

    this.automation = null;
    this.value = null;
    this.oldValue = null;
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
      if (this.logical || this.assignment) {
        this.isExp = true;
      }

      if (this.isExp) {
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

      if (this.assignment || this.logical) {
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
        this.oldValue = this.value;
        this.value = newValue;
      }
    } // get value

  }, {
    key: "compute",
    value: function compute(locals) {
      var _this2 = this;

      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);

      if (this.isExp) {
        return this.expressions[0].compute(this.scope, locals);
      }

      return this.segments.reduce(function (prev, cur) {
        if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](cur)) {
          return prev + cur;
        } // it is a expression


        return prev + (cur.compute(_this2.scope, locals) || '');
      }, '');
    } // set value

  }, {
    key: "assign",
    value: function assign(value, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);

      if (this.isExp) {
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
        this.automation.call(this, this.value, this.oldValue);
      }
    }
  }, {
    key: "evaluate",
    value: function evaluate(exp, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);
      return this.scope.$eval(exp, locals);
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
    value: function compute(scope, locals) {
      return scope.$eval(this.text, locals);
    } // set value

  }, {
    key: "assign",
    value: function assign(scope, value, locals) {
      scope.$assign(this.text, value, locals);
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
/*! exports provided: Binding, Expression, Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding */ "./src/render/binding.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return _binding__WEBPACK_IMPORTED_MODULE_0__["Binding"]; });

/* harmony import */ var _expression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expression */ "./src/render/expression.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Expression", function() { return _expression__WEBPACK_IMPORTED_MODULE_1__["Expression"]; });

/* harmony import */ var _renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderer */ "./src/render/renderer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return _renderer__WEBPACK_IMPORTED_MODULE_2__["Renderer"]; });





/***/ }),

/***/ "./src/render/renderer.js":
/*!********************************!*\
  !*** ./src/render/renderer.js ***!
  \********************************/
/*! exports provided: Renderer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Renderer", function() { return Renderer; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tpl */ "./src/tpl/index.js");
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./binding */ "./src/render/binding.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css */ "./src/css.js");
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
var Renderer = /*#__PURE__*/function () {
  function Renderer(scope) {
    _classCallCheck(this, Renderer);

    this.scope = scope;
    this.buffer = {
      components: {},
      directives: {}
    };
  }

  _createClass(Renderer, [{
    key: "createBinding",
    value: function createBinding(text, context) {
      return new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, context.locals);
    }
  }, {
    key: "render",
    value: function render(tpl, locals) {
      var fragment = document.createDocumentFragment();
      var vnodes = Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["parseTpl"])(tpl);
      var context = {
        locals: locals,
        directives: []
      };
      this.compileNodes(vnodes, context); // context.directives.forEach(directive => {
      //     directive.$prelink();
      // });

      this.linkNodes(vnodes, context).forEach(function (elm) {
        fragment.appendChild(elm);
      });
      context.directives.forEach(function (directive) {
        directive.$postlink();
      });
      return fragment;
    }
  }, {
    key: "compileNodes",
    value: function compileNodes(vnodes, context) {
      var _this = this;

      vnodes.forEach(function (vnode) {
        _this.compileNode(vnode, context);
      });
    }
  }, {
    key: "compileNode",
    value: function compileNode(vnode, context) {
      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVText"])(vnode)) {
        this.compileText(vnode, context);
      } else if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVComment"])(vnode, context)) {
        this.compileComment(vnode, context);
      } else {
        this.compileElm(vnode, context);
      }
    }
  }, {
    key: "linkNodes",
    value: function linkNodes(vnodes, context) {
      var _this2 = this;

      return vnodes.map(function (vnode) {
        return _this2.linkNode(vnode, context);
      });
    }
  }, {
    key: "linkNode",
    value: function linkNode(vnode, context) {
      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVText"])(vnode)) {
        return this.linkText(vnode, context);
      }

      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVComment"])(vnode, context)) {
        return this.linkComment(vnode, context);
      }

      return this.linkElm(vnode, context);
    }
  }, {
    key: "compileElm",
    value: function compileElm(velm, context) {
      var _this3 = this;

      velm.nodeData.component = this.recognizeComponent(velm);
      var directives = [];
      var customLinker = velm.vattrs.some(function (vattr) {
        _this3.compileAttr(vattr, context);

        if (vattr.nodeData.directive != null) {
          directives.push(vattr.nodeData.directive);
          velm.nodeData.linker = vattr.nodeData.linker;
          return velm.nodeData.linker != null;
        }

        return false;
      }); // sort directive according to its priority

      _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"](directives, function (directive) {
        return directive.$priority;
      }).forEach(function (directive) {
        context.directives.push(directive);
      });
      velm.nodeData.directives = directives; // directive defines custom linker for this virtual node, render engine will not render it according to default behavior

      if (customLinker) {
        return;
      }

      if (velm.nodeData.component) {
        velm.nodeData.slots = this.seekSlot(velm);
      } else {
        this.compileNodes(velm.childNodes, context);
      }
    }
  }, {
    key: "compileAttr",
    value: function compileAttr(vattr, context) {
      var binding;

      if (vattr.nodeValue != null) {
        binding = this.createBinding(vattr.nodeValue, context);
        vattr.nodeData.binding = binding;
      }

      if (vattr.nodeName.startsWith('@')) {
        vattr.nodeData.isEvent = true;
        binding && (binding.logical = true);
        vattr.nodeData.name = vattr.nodeName.substr(1);
        vattr.nodeData.isDomEvent = _utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, vattr.nodeData.name);
      } else if (vattr.nodeName.startsWith(':')) {
        binding && (binding.isExp = true);
        vattr.nodeData.name = vattr.nodeName.substr(1);
      } else if (vattr.nodeName.startsWith('*')) {
        vattr.nodeData.directive = true;
        binding && (binding.isExp = true);
        vattr.nodeData.name = vattr.nodeName.substr(1);
      } else {
        vattr.nodeData.name = vattr.nodeName;
      }

      if (vattr.nodeData.directive) {
        var directive = this.recognizeDirective(vattr);

        if (directive) {
          vattr.nodeData.directive = this.scope.$newDirective(directive);
          vattr.nodeData.directive.$$vattr = vattr;

          if (binding) {
            binding.assignment = vattr.nodeData.directive.$assignment;
          }

          if (vattr.nodeData.directive.$compile()) {
            vattr.nodeData.linker = vattr.nodeData.directive;
            return;
          }
        } else {
          throw new Error('directive ' + vattr.nodeData.name + ' is not defined');
        }
      }

      if (!binding) {
        return;
      }

      if (!(vattr.nodeData.isEvent || vattr.nodeData.directive)) {
        var setHtmlAttr = function setHtmlAttr(value) {
          var elm = vattr.velm.elm;

          if (vattr.nodeData.name.startsWith('style')) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](elm, vattr.nodeData.name, value);
          } else {
            elm.setAttribute(vattr.nodeData.name, value);
          }
        };

        if (vattr.velm.nodeData.component) {
          binding.registerAutomation(function (value) {
            if (vattr.velm.nodeData.component.$hasProperty(vattr.nodeData.name)) {
              vattr.velm.nodeData.component.$setProperty(vattr.nodeData.name, value);
            } else {
              setHtmlAttr(value);
            }
          });
        } else {
          binding.registerAutomation(setHtmlAttr);
        }
      }

      binding.compile();
    }
  }, {
    key: "compileText",
    value: function compileText(vtext, context) {
      vtext.nodeData.binding = this.createBinding(vtext.nodeValue, context);
      vtext.nodeData.binding.registerAutomation(function (value) {
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
            _dom__WEBPACK_IMPORTED_MODULE_1__["replaceElement"](vtext.elm, newTextNode);
          }
        }

        vtext.elm = newTextNode;
      });
      vtext.nodeData.binding.compile();
    }
  }, {
    key: "compileComment",
    value: function compileComment(vcmnt) {}
  }, {
    key: "linkElm",
    value: function linkElm(velm) {
      var _this4 = this;

      if (velm.nodeData.linker != null) {
        return velm.nodeData.linker.$link();
      }

      velm.elm = document.createElement(velm.nodeName);

      if (velm.nodeData.component) {
        var instance = this.scope.$newComponent(velm.nodeData.component);
        velm.nodeData.component = instance;
        _dom__WEBPACK_IMPORTED_MODULE_1__["addClass"](velm.elm, _css__WEBPACK_IMPORTED_MODULE_5__["M_CMP_CLASS"]);
        velm.vattrs.forEach(function (vattr) {
          _this4.linkAttr(vattr);
        });
        instance.$$velm = velm;
        instance.$setSlot(velm.nodeData.slots);
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
      var elm = vattr.velm.elm,
          binding = vattr.nodeData.binding;

      if (!binding) {
        return;
      }

      if (vattr.nodeData.isEvent) {
        if (vattr.nodeData.isDomEvent) {
          elm.addEventListener(vattr.nodeData.name, function (e) {
            binding.compute(new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm));
          });
        } else if (vattr.velm.nodeData.component) {
          vattr.velm.nodeData.component.$bind(vattr.nodeData.name, function (e) {
            binding.compute(new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm));
          });
        }
      } else {
        binding.link();
        binding.patch();
      } // register binding change handler after first patch


      if (vattr.nodeData.directive) {
        binding.registerAutomation(function (newValue, oldValue) {
          vattr.nodeData.directive.$change(newValue, oldValue);
        });
      }
    }
  }, {
    key: "linkText",
    value: function linkText(vtext) {
      vtext.nodeData.binding.link();
      vtext.elm = document.createTextNode(vtext.nodeData.binding.value);
      return vtext.elm;
    }
  }, {
    key: "linkComment",
    value: function linkComment(vcmnt) {
      return document.createComment(vcmnt.nodeValue);
    }
  }, {
    key: "seekSlot",
    value: function seekSlot(velm) {
      var slots = {};
      velm.childNodes.forEach(function (child) {
        if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVElm"])(child)) {
          var slot = child.getAttr('slot');

          if (slot) {
            slots[slot.nodeValue] = child.getInnerTpl();
          }
        }
      });
      return slots;
    }
  }, {
    key: "recognizeComponent",
    value: function recognizeComponent(velm) {
      var identifier,
          component,
          name = velm.nodeName,
          buffer = this.buffer.components;

      if (buffer[name] !== undefined) {
        component = buffer[name];
      } else {
        identifier = this.scope.$parseFullName(name);
        component = this.scope.$getComponent(identifier.key, identifier.ns);
        buffer[name] = component;
      } // velm.nodeData.identifier = identifier;


      return component;
    }
  }, {
    key: "recognizeDirective",
    value: function recognizeDirective(vattr) {
      var identifier,
          directive,
          name = vattr.nodeData.name,
          buffer = this.buffer.directives;

      if (buffer[name] !== undefined) {
        directive = buffer[name];
      } else {
        identifier = this.scope.$parseFullName(vattr.nodeData.name);
        directive = this.scope.$getDirective(identifier.key, identifier.ns);
        buffer[name] = directive;
      } // vattr.nodeData.identifier = identifier;


      return directive;
    }
  }]);

  return Renderer;
}();

/***/ }),

/***/ "./src/tpl/index.js":
/*!**************************!*\
  !*** ./src/tpl/index.js ***!
  \**************************/
/*! exports provided: nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/tpl/model/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeType", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["nodeType"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VAttr", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VCmnt", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VCmnt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VElm", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VText", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "VType", function() { return _model__WEBPACK_IMPORTED_MODULE_0__["VType"]; });

/* harmony import */ var _tpl_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl-api */ "./src/tpl/tpl-api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["lexTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["parseTpl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVElm", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["isVElm"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVAttr", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["isVAttr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVText", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["isVText"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isVComment", function() { return _tpl_api__WEBPACK_IMPORTED_MODULE_1__["isVComment"]; });

/* harmony import */ var _tpl_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tpl-builder */ "./src/tpl/tpl-builder.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TplBuilder", function() { return _tpl_builder__WEBPACK_IMPORTED_MODULE_2__["TplBuilder"]; });





/***/ }),

/***/ "./src/tpl/model/index.js":
/*!********************************!*\
  !*** ./src/tpl/model/index.js ***!
  \********************************/
/*! exports provided: nodeType, VNode, VAttr, VCmnt, VElm, VText, VType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vnode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vnode */ "./src/tpl/model/vnode.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nodeType", function() { return _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"]; });

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VAttr).call(this, _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"].attribute, name, value));
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
    key: "onCloneNode",
    value: function onCloneNode() {
      return new VAttr(this.nodeName, this.nodeValue);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {}
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var VCmnt = /*#__PURE__*/function (_VNode) {
  _inherits(VCmnt, _VNode);

  function VCmnt(value) {
    _classCallCheck(this, VCmnt);

    return _possibleConstructorReturn(this, _getPrototypeOf(VCmnt).call(this, _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"].comment, '#comment', value));
  }

  _createClass(VCmnt, [{
    key: "onCloneNode",
    value: function onCloneNode() {
      return new VCmnt(this.nodeName, this.nodeValue);
    }
  }]);

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
/* harmony import */ var _tpl_builder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tpl-builder */ "./src/tpl/tpl-builder.js");
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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VElm).call(this, _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"].element, name));
    _this.elm = null;
    _this.vattrs = [];
    _this.selfClosed = false;
    _this.builder = new _tpl_builder__WEBPACK_IMPORTED_MODULE_3__["TplBuilder"]();
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
        return attr.nodeName === key;
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
    key: "getOuterTpl",
    value: function getOuterTpl() {
      return this.builder.build(this);
    }
  }, {
    key: "getInnerTpl",
    value: function getInnerTpl() {
      var _this2 = this;

      return this.childNodes.map(function (child) {
        return _this2.builder.build(child);
      }).join('');
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
    key: "onCloneNode",
    value: function onCloneNode() {
      var node = new VElm(this.nodeName, this.nodeValue);
      node.vattrs = this.vattrs.map(function (vattr) {
        var copy = vattr.cloneNode();
        copy.velm = node;
        return copy;
      });
      return node;
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
/*! exports provided: nodeType, VNode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeType", function() { return nodeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VNode", function() { return VNode; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var nodeType = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entity: 6,
  processingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
}; // virtual node

var VNode = /*#__PURE__*/function () {
  function VNode(type, name, value) {
    _classCallCheck(this, VNode);

    this.nodeType = type;
    this.nodeName = name;
    this.nodeValue = value;
    this.childNodes = [];
    this.firstChild = null;
    this.lastChild = null;
    this.parentNode = null;
    this.previousSibling = null;
    this.nextSibling = null;
    this.nodeData = {};
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
    value: function cloneNode(deep) {
      var node = this.onCloneNode(deep);

      if (deep) {
        node.childNodes = this.childNodes.map(function (child) {
          return child.cloneNode(deep);
        });
        node.buildSibling();
      }

      return node;
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

    _this = _possibleConstructorReturn(this, _getPrototypeOf(VText).call(this, _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"].text, '#text', value));
    _this.elm = null;
    return _this;
  }

  _createClass(VText, [{
    key: "onCloneNode",
    value: function onCloneNode() {
      return new VText(this.nodeName, this.nodeValue);
    }
  }]);

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

    return _possibleConstructorReturn(this, _getPrototypeOf(VType).call(this, _vnode__WEBPACK_IMPORTED_MODULE_0__["nodeType"].documentType));
  }

  return VType;
}(_vnode__WEBPACK_IMPORTED_MODULE_0__["VNode"]);

/***/ }),

/***/ "./src/tpl/tpl-api.js":
/*!****************************!*\
  !*** ./src/tpl/tpl-api.js ***!
  \****************************/
/*! exports provided: lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lexTpl", function() { return lexTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTpl", function() { return parseTpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVElm", function() { return isVElm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVAttr", function() { return isVAttr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVText", function() { return isVText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isVComment", function() { return isVComment; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tpl-lexer */ "./src/tpl/tpl-lexer.js");
/* harmony import */ var _tpl_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tpl-parser */ "./src/tpl/tpl-parser.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./model */ "./src/tpl/model/index.js");





function lexTpl(tpl) {
  tpl = _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](tpl);
  return new _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__["TplLexer"]().lex(tpl);
}

function parseTpl(tpl) {
  tpl = _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"](tpl);
  return new _tpl_parser__WEBPACK_IMPORTED_MODULE_2__["TplParser"](new _tpl_lexer__WEBPACK_IMPORTED_MODULE_1__["TplLexer"]()).parse(tpl);
}

function isVElm(vnode) {
  return vnode.nodeType === _model__WEBPACK_IMPORTED_MODULE_3__["nodeType"].element;
}

function isVAttr(vnode) {
  return vnode.nodeType === _model__WEBPACK_IMPORTED_MODULE_3__["nodeType"].attribute;
}

function isVText(vnode) {
  return vnode.nodeType === _model__WEBPACK_IMPORTED_MODULE_3__["nodeType"].text;
}

function isVComment(vnode) {
  return vnode.nodeType === _model__WEBPACK_IMPORTED_MODULE_3__["nodeType"].comment;
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
/* harmony import */ var _tpl_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tpl-api */ "./src/tpl/tpl-api.js");
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
      if (Object(_tpl_api__WEBPACK_IMPORTED_MODULE_0__["isVText"])(vnode)) {
        return this.buildText(vnode);
      }

      if (Object(_tpl_api__WEBPACK_IMPORTED_MODULE_0__["isVComment"])(vnode)) {
        return this.buildComment(vnode);
      }

      return this.buildElement(vnode);
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
      return vcmnt.nodeValue;
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
  this.$$velm = null;
  this.$$view = null;
  this.$$parent = null;
  this.$$children = [];
  this.$$directives = [];
  this.$$data = this.$initData(data);
  this.$$injector = _injector__WEBPACK_IMPORTED_MODULE_4__["injector"];
  this.$$renderer = new _render__WEBPACK_IMPORTED_MODULE_3__["Renderer"](this);
  this.$$observer = new _observer__WEBPACK_IMPORTED_MODULE_2__["Observer"](this);
  this.$$evaluator = new _exp__WEBPACK_IMPORTED_MODULE_5__["Evaluator"](this);
  this.slots = {};
  this.events = {};
  this.props = this.$delegate({});
  this.state = this.$delegate({});
  _injector__WEBPACK_IMPORTED_MODULE_4__["injector"].injectServices(this, this.$$data);
}
var Component = /*#__PURE__*/function () {
  _createClass(Component, [{
    key: "$delegate",
    value: function $delegate(target) {
      return new Proxy(target, _observer__WEBPACK_IMPORTED_MODULE_2__["handler"]);
    }
  }, {
    key: "$setSlot",
    value: function $setSlot(slots) {
      this.slots = slots || {};
    }
  }, {
    key: "$setState",
    value: function $setState(state) {
      this.state = this.$delegate(state);
    }
  }, {
    key: "$setProps",
    value: function $setProps(props) {
      this.props = this.$delegate(props);
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
    key: "$getNsAlias",
    value: function $getNsAlias() {
      return this.$$data.alias;
    }
  }, {
    key: "$parseFullName",
    value: function $parseFullName(fullName) {
      return this.$$injector.parseFullName(fullName, this.$getNsAlias());
    }
  }, {
    key: "$getComponent",
    value: function $getComponent(key, namespace) {
      return this.$$injector.getComponent(key, namespace);
    }
  }, {
    key: "$newComponent",
    value: function $newComponent(cls) {
      var child = this.$$injector.createComponent(cls);
      child.$$parent = this;
      this.$$children.push(child);
      return child;
    }
  }, {
    key: "$getDirective",
    value: function $getDirective(key, namespace) {
      return this.$$injector.getDirective(key, namespace);
    }
  }, {
    key: "$newDirective",
    value: function $newDirective(cls) {
      var directive = this.$$injector.createDirective(cls);
      directive.$$scope = this;
      this.$$directives.push(directive);
      return directive;
    }
  }, {
    key: "$getFilter",
    value: function $getFilter(fullName) {
      var identifier = this.$parseFullName(fullName);
      return this.$$injector.createFilter(identifier.key, identifier.ns);
    }
  }, {
    key: "$hasProperty",
    value: function $hasProperty(key) {
      // return utils.hasProperty(this.props, key, true);
      return this.$getProperty(key) !== undefined;
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
        _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.props, key, value, true);
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
      } else {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('"{0}" is not a valid event', key));
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
    value: function $eval(exp, locals) {
      return this.$$evaluator.evaluate(exp, locals);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      return this.$$evaluator.assign(exp, value, locals);
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
      this.$$view = this.$$renderer.render(template);
      return this.$$view;
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

      element.appendChild(this.$$view);
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css */ "./src/css.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function directiveConstructor() {
  this.$$scope = null;
  this.$$vattr = null;
  this.$priority = 9; // binding text is a assignment

  this.$assignment = false;
  this.$placeholder = null;
}
var Directive = /*#__PURE__*/function () {
  _createClass(Directive, [{
    key: "$key",
    get: function get() {
      return this.$$metadata.key;
    }
  }, {
    key: "$scope",
    get: function get() {
      return this.$$scope;
    }
  }, {
    key: "$renderer",
    get: function get() {
      return this.$scope.$$renderer;
    }
  }, {
    key: "$element",
    get: function get() {
      return this.$$vattr.velm.elm;
    }
  }, {
    key: "$binding",
    get: function get() {
      return this.$$vattr.nodeData.binding;
    }
  }, {
    key: "$component",
    get: function get() {
      return this.$$vattr.velm.nodeData.component;
    }
  }]);

  function Directive(metadata) {
    _classCallCheck(this, Directive);

    directiveConstructor.call(this, metadata);
  } // while compiling


  _createClass(Directive, [{
    key: "$compile",
    value: function $compile() {
      return this.onCompile && this.onCompile(this.$$vattr.velm, this.$$vattr);
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

      if (this.$binding != null) {
        this.$change(this.$binding.value, this.$binding.oldValue);
      }
    } // the input value is changed

  }, {
    key: "$change",
    value: function $change(newValue, oldValue) {
      this.onChange && this.onChange(newValue, oldValue);
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.onDestroy && this.onDestroy();
    }
  }, {
    key: "$$searchDirective",
    value: function $$searchDirective(velm, key) {
      var result = velm.nodeData.directives.filter(function (item) {
        return item.$key === key;
      });
      return result.length ? result[0] : null;
    }
  }, {
    key: "$seekDirective",
    value: function $seekDirective(key) {
      var velm = this.$$vattr.velm;
      return this.$$searchDirective(velm, key);
    }
  }, {
    key: "$seekUpDirective",
    value: function $seekUpDirective(key) {
      var velm = this.$$vattr.velm.parentNode;
      return this.$$searchDirective(velm, key);
    }
  }, {
    key: "$removeElement",
    value: function $removeElement(yes) {
      if (this.$placeholder == null) {
        throw new Error('you must define element placeholder!');
      }

      if (yes) {
        if (this.$element.parentNode != null) {
          _dom__WEBPACK_IMPORTED_MODULE_0__["replaceElement"](this.$element, this.$placeholder);
        }
      } else {
        if (this.$element.parentNode == null) {
          _dom__WEBPACK_IMPORTED_MODULE_0__["replaceElement"](this.$placeholder, this.$element);
        }
      }
    }
  }, {
    key: "$hideElement",
    value: function $hideElement(yes) {
      if (yes) {
        _dom__WEBPACK_IMPORTED_MODULE_0__["addClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_1__["M_HIDE_CLASS"]);
      } else {
        _dom__WEBPACK_IMPORTED_MODULE_0__["removeClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_1__["M_HIDE_CLASS"]);
      }
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
      config = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
        "extends": componentClass
      }, config);
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].component, name, config, metadata);
    }
  }, {
    key: "makeDirective",
    value: function makeDirective(name, config, metadata) {
      config = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
        "extends": directiveClass
      }, config);
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].directive, name, config, metadata);
    }
  }, {
    key: "makeFilter",
    value: function makeFilter(name, config, metadata) {
      config = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
        "extends": filterClass
      }, config);
      return this.make(_roles__WEBPACK_IMPORTED_MODULE_2__["roles"].filter, name, config, metadata);
    }
  }, {
    key: "makeService",
    value: function makeService(name, config, metadata) {
      config = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]({
        "extends": serviceClass
      }, config);
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
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, render, injector */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _view_api__WEBPACK_IMPORTED_MODULE_0__["render"]; });

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
    value: function has(roleId, key, ignoreCase, namespace) {
      var constructors,
          container = this.getClassContainer(roleId);

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
    value: function hasComponent(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, true, namespace);
    }
  }, {
    key: "hasDirective",
    value: function hasDirective(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, true, namespace);
    }
  }, {
    key: "hasFilter",
    value: function hasFilter(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, true, namespace);
    }
  }, {
    key: "hasService",
    value: function hasService(key, namespace) {
      return this.has(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, true, namespace);
    }
  }, {
    key: "get",
    value: function get(roleId, key, ignoreCase, namespace) {
      var constructors,
          container = this.getClassContainer(roleId);

      if (ignoreCase) {
        constructors = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](container, key, true);
      } else {
        constructors = container[key];
      }

      if (constructors == null) {
        return null;
      }

      if (namespace && constructors.length > 0) {
        constructors = constructors.filter(function (item) {
          var meta = item.prototype.$$metadata;
          return meta.namespace && _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](meta.namespace) === _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"](namespace);
        });

        if (constructors.length === 0) {
          return null;
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
    value: function getComponent(key, namespace) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, key, namespace);
    }
  }, {
    key: "getDirective",
    value: function getDirective(key, namespace) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, key, namespace);
    }
  }, {
    key: "getFilter",
    value: function getFilter(key, namespace) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter, key, namespace);
    }
  }, {
    key: "getService",
    value: function getService(key, namespace) {
      return this.get(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service, key, namespace);
    }
  }, {
    key: "create",
    value: function create(roleId, keyOrConstructor, namespace) {
      var constructor;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        constructor = this.get(roleId, keyOrConstructor, namespace);

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
    value: function createComponent(keyOrConstructor, namespace) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].component, keyOrConstructor, namespace);
    }
  }, {
    key: "createDirective",
    value: function createDirective(keyOrConstructor, namespace) {
      return this.create(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].directive, keyOrConstructor, namespace);
    }
  }, {
    key: "createFilter",
    value: function createFilter(keyOrConstructor, namespace) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].filter);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getFilter(keyOrConstructor, namespace);
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
    value: function createService(keyOrConstructor, namespace) {
      var instance,
          container = this.getInstanceContainer(_roles__WEBPACK_IMPORTED_MODULE_1__["roles"].service);

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](keyOrConstructor)) {
        keyOrConstructor = this.getService(keyOrConstructor, namespace);
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
    key: "parseFullName",
    value: function parseFullName(name, alias) {
      var result = {
        ns: '',
        key: ''
      },
          segments = name.split('.');

      if (segments.length === 1) {
        result.key = name;
      } else {
        result.key = segments.pop();
        result.ns = segments.join('.');

        if (alias) {
          _utils__WEBPACK_IMPORTED_MODULE_0__["some"](alias, function (shortName, fullName) {
            if (shortName === result.ns) {
              result.ns = fullName;
              return true;
            }
          });
        }
      }

      return result;
    }
  }, {
    key: "injectServices",
    value: function injectServices(instance, metadata) {
      var self = this;

      if (metadata && _utils__WEBPACK_IMPORTED_MODULE_0__["isObject"](metadata.inject)) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"](metadata.inject, function (service, key) {
          Object.defineProperty(instance, key, {
            enumerable: false,
            configurable: false,
            get: function get() {
              var privateKey = '$$' + key;

              if (instance[privateKey] == null) {
                if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](service)) {
                  var identifier = self.parseFullName(service, metadata.alias);
                  instance[privateKey] = self.createService(identifier.key, identifier.ns);
                } else {
                  instance[privateKey] = self.createService(service);
                }
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
/*! exports provided: Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, render, injector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponent", function() { return isComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDirective", function() { return isDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFilter", function() { return isFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isService", function() { return isService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespace", function() { return namespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factory */ "./src/view/factory.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_1__["injector"]; });

/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
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

function render(selector, config) {
  var element = document.querySelector(selector);
  var Root = _factory__WEBPACK_IMPORTED_MODULE_0__["factory"].makeComponent('root', config, {
    template: element.innerHTML
  });
  var root = new Root();
  _dom__WEBPACK_IMPORTED_MODULE_2__["clearChildrenOfElement"](element);
  root.$render();
  root.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UtYnVzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvbWVzc2FnZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jc3MuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZGlyZWN0aXZlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLWh0bWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL2JpbmQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL2hpZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL2lmLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3JlcGVhdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc2hvdy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvY2hlY2tlZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvZGlzYWJsZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9yZWFkb25seS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvc2VsZWN0ZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3N0YXRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy1ldmVuLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy1vZGQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL2NsYXNzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9zdHlsZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLWRlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2gtd2hlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2FuYWx5c2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9ldmFsdWF0b3IuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1hcGkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1idWlsZGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtbGV4ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1vcGVyYXRvcnMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2V4cC1wYXJzZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hcnJheS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXNzaWdubWVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXN0LW5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYmluYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9jYWxsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9jb25kaXRpb25hbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvaWRlbnRpZmllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2xpdGVyYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2xvZ2ljYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL21lbWJlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvb2JqZWN0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9wcm9ncmFtLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9wcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvdW5hcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL3BhcnNlLW9wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvZGVsYXllci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9vYnNlcnZlci9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkdmlldyIsIiQkcmVuZGVyZXIiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJMb2NhbCIsImUiLCJlbG0iLCIkZXZlbnQiLCIkZWxlbWVudCIsIk1lc3NhZ2VCdXMiLCJtZXNzYWdlcyIsIk1lc3NhZ2UiLCJmbiIsImdldCIsIm9uIiwib2ZmIiwiZGF0YSIsInNjb3BlIiwiZmlyZSIsImhhbmRsZXJzIiwicHVzaCIsImkiLCJsZW5ndGgiLCJzcGxpY2UiLCJyZXR1cm5WYWx1ZSIsInV0aWxzIiwiY2FsbCIsImlzTWVzc2FnZSIsIm9iaiIsImRvbSIsIk1fQ01QX0NMQVNTIiwiTV9ISURFX0NMQVNTIiwibWV0YWRhdGEiLCJ0YXJnZXQiLCJwcm90b3R5cGUiLCIkJG1ldGFkYXRhIiwiaW5qZWN0b3IiLCJyZWdpc3RlckNvbXBvbmVudCIsImRpcmVjdGl2ZSIsInJlZ2lzdGVyRGlyZWN0aXZlIiwiZmlsdGVyIiwicmVnaXN0ZXJGaWx0ZXIiLCJzZXJ2aWNlIiwicmVnaXN0ZXJTZXJ2aWNlIiwiQmluZEh0bWxEaXJlY3RpdmUiLCJ2YWx1ZSIsImlubmVySFRNTCIsIkRpcmVjdGl2ZSIsIkJpbmREaXJlY3RpdmUiLCJpbm5lclRleHQiLCJIaWRlRGlyZWN0aXZlIiwiJGhpZGVFbGVtZW50IiwiSWZEaXJlY3RpdmUiLCIkcGxhY2Vob2xkZXIiLCJkb2N1bWVudCIsImNyZWF0ZUNvbW1lbnQiLCIkcmVtb3ZlRWxlbWVudCIsIk1vZGVsRGlyZWN0aXZlIiwidmlld1ZhbHVlIiwibW9kZWxWYWx1ZSIsInBhcnNlcnMiLCJmb3JtYXR0ZXJzIiwidmlld0NoYW5nZUxpc3RlbmVycyIsInZhbGlkYXRvcnMiLCJzdGF0dXMiLCJmZWVkYmFjayIsInByaXN0aW5lIiwiZGlydHkiLCJ2YWxpZCIsImludmFsaWQiLCJvcHRpb25zIiwiY3NzIiwiY29tbWl0TW9kZWxWYWx1ZSIsIiRzY29wZSIsInN0YXRlIiwiJGNvbXBvbmVudCIsIiRiaW5kIiwiY29tbWl0Vmlld1ZhbHVlIiwibmV3dmFsdWUiLCJhZGRFdmVudExpc3RlbmVyIiwibmV3VmFsdWUiLCJzZWxmIiwiZm9yRWFjaCIsInZhbGlkYXRvciIsImZvcm1hdHRlciIsIiRzZXRQcm9wZXJ0eSIsInVwZGF0ZUVsbUNzc0NsYXNzIiwibWFya0RpcnR5U3RhdHVzIiwibGlzdGVuZXIiLCJwYXJzZXIiLCIkYmluZGluZyIsImFzc2lnbiIsImVsZSIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsIlJlcGVhdERpcmVjdGl2ZSIsIml0ZW1FeHAiLCJpdGVtc0V4cCIsIml0ZW1UZW1wbGF0ZSIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwiRXJyb3IiLCJyZW1vdmVBdHRyIiwiZ2V0T3V0ZXJUcGwiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJoZWFkZXIiLCJmb290ZXIiLCJhcHBlbmRDaGlsZCIsIiR3YXRjaENvbGxlY3Rpb24iLCJwYXJlbnROb2RlIiwiaW5zZXJ0QmVmb3JlIiwiaXRlbXMiLCIkZXZhbCIsIml0ZW0iLCJsb2NhbHMiLCJpdGVtQ29udGVudCIsIiRyZW5kZXJlciIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJzZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkNsYXNzRXZlbkRpcmVjdGl2ZSIsImluZGV4IiwiZXZhbHVhdGUiLCJDbGFzc0RpcmVjdGl2ZSIsIkNsYXNzT2RkRGlyZWN0aXZlIiwibmV3Q2xhc3MiLCJvbGRDbGFzcyIsInNraXBDdXJyZW50RWxtIiwiam9pbiIsIlN0eWxlRXZlbkRpcmVjdGl2ZSIsIlN0eWxlRGlyZWN0aXZlIiwiU3R5bGVPZGREaXJlY3RpdmUiLCJuZXdTdHlsZSIsIm9sZFN0eWxlIiwic3R5bGUiLCJTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIiwic3dpdGNoQ3RybCIsIiRzZWVrVXBEaXJlY3RpdmUiLCJtYXRjaERlZmF1bHQiLCJkZWZhdWx0TWF0Y2hlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiY2hlY2tEZWZhdWx0IiwiZ2V0Q2hpbGRyZW5PZkVsZW1lbnQiLCJBcnJheSIsInNsaWNlIiwiY2hpbGROb2RlcyIsImNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQiLCJjaGlsZCIsInJlbW92ZUNoaWxkIiwicmVwbGFjZUVsZW1lbnQiLCJuZXdFbG0iLCJyZW1vdmVFbGVtZW50IiwicmVtb3ZlRWxlbWVudHNCZXR3ZWVuIiwic3RhcnRFbG0iLCJlbmRFbG0iLCJwcmV2aW91c1NpYmxpbmciLCJuZXh0U2libGluZyIsImFwcGVuZEVsZW1lbnQiLCJsYXN0Q2hpbGQiLCJhZGRDbGFzcyIsImNscyIsInRyaW0iLCJpbmRleE9mIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwcm9ncmFtIiwiYWNjZXNzb3IiLCJidWlsZGVyIiwiRXhwQnVpbGRlciIsImJ1ZmZlciIsInBhcnNlRXhwIiwiYW5hbHlzZVByb2dyYW0iLCJwYXJzZSIsImFuYWx5c2VOb2RlIiwibm9kZSIsImNvbnRleHQiLCJ0eXBlIiwiQVNUIiwiRXhwcmVzc2lvblN0YXRlbWVudCIsImFuYWx5c2VFeHByZXNzaW9uIiwiQXNzaWdubWVudEV4cHJlc3Npb24iLCJhbmFseXNlQXNzaWdubWVudCIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbiIsImFuYWx5c2VDb25kaXRpb24iLCJMb2dpY2FsRXhwcmVzc2lvbiIsImFuYWx5c2VMb2dpYyIsIkJpbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlQmluYXJ5IiwiVW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZVVuYXJ5IiwiQ2FsbEV4cHJlc3Npb24iLCJhbmFseXNlQ2FsbCIsIk1lbWJlckV4cHJlc3Npb24iLCJhbmFseXNlTWVtYmVyIiwiSWRlbnRpZmllciIsImFuYWx5c2VJZGVudGlmaWVyIiwiTGl0ZXJhbCIsImFuYWx5c2VMaXRlcmFsIiwiQXJyYXlFeHByZXNzaW9uIiwiYW5hbHlzZUFycmF5IiwiUHJvcGVydHkiLCJhbmFseXNlUHJvcGVydHkiLCJPYmplY3RFeHByZXNzaW9uIiwiYW5hbHlzZU9iamVjdCIsImFzc2lnbm1lbnQiLCJyaWdodCIsImNvbmRpdGlvbiIsInRlc3QiLCJhbHRlcm5hdGUiLCJjb25zZXF1ZW50IiwibG9naWMiLCJsZWZ0IiwiYmluYXJ5IiwidW5hcnkiLCJhcmdzIiwibWVtYmVyIiwicGFyZW50Iiwib2JqZWN0IiwiY29tcHV0ZWQiLCJwcm9wZXJ0eSIsImNyZWF0ZUNoaWxkIiwiYnVpbGQiLCJpZGVudGlmaWVyIiwiY3JlYXRlQWNjZXNzb3IiLCJsaXRlcmFsIiwicHJvcCIsInByb3BlcnRpZXMiLCJhcnIiLCJhbmFseXNlIiwiRXZhbHVhdG9yIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsIiRnZXRGaWx0ZXIiLCJleGVjdXRlIiwiYXBwbHkiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJidWlsZEV4cHJlc3Npb24iLCJidWlsZEFzc2lnbm1lbnQiLCJidWlsZENvbmRpdGlvbiIsImJ1aWxkTG9naWMiLCJidWlsZEJpbmFyeSIsImJ1aWxkVW5hcnkiLCJidWlsZENhbGwiLCJidWlsZE1lbWJlciIsImJ1aWxkSWRlbnRpZmllciIsImJ1aWxkTGl0ZXJhbCIsImJ1aWxkQXJyYXkiLCJidWlsZFByb3BlcnR5IiwiYnVpbGRPYmplY3QiLCJyZXMiLCJzaGlmdCIsInBhcnNlT3B0aW9ucyIsInRleHQiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsImhhbmRsZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJldmVudHMiLCJwcm9wQ2hhbmdpbmciLCJwcm9wQ2hhbmdlZCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJldmFsdWF0b3IiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZ2V0QWNjZXNzb3IiLCJjcmVhdGVMaXN0ZW5lciIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiZGVzdHJveSIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldCIsInNldFByb3h5IiwiT2JqZWN0IiwidG9Qcm94eSIsImlzUHJveHkiLCJQcm94eSIsIkFnZW50IiwiQXJyYXlBZ2VudCIsImNvbmNhdCIsImNvcHkiLCJyZXZlcnNlIiwic29ydCIsInByb3h5IiwiZ2V0VGFyZ2V0IiwidXBkYXRlUHJveHkiLCJtYWtlUHJveHkiLCJ2YWxpZGF0aW9uIiwiT2JqZWN0TGlzdGVuZXIiLCJrZXlzIiwiZ2V0SGFuZGxlcnMiLCJvblByb3BDaGFuZ2luZyIsImhhbmRsZVByb3BDaGFuZ2luZyIsIm9uUHJvcENoYW5nZWQiLCJoYW5kbGVQcm9wQ2hhbmdlZCIsImluaXQiLCJnZXRMaXN0ZW5lciIsImZpcmVLZXkiLCJmaWx0ZXJzIiwiYWN0aW9uIiwiZ2V0T3JDcmVhdGVMaXN0ZW5lciIsInJlZ2lzdGVyS2V5IiwidW5yZWdpc3RlcktleSIsIkJpbmRpbmciLCJpc0V4cCIsImxvZ2ljYWwiLCJhdXRvbWF0aW9uIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsInBhdGNoIiwiY29tcHV0ZSIsInJlZHVjZSIsInByZXYiLCIkYXNzaWduIiwiJHdhdGNoIiwiZXZlbnRUZXh0IiwiZG9tRXZlbnRzIiwiUmVuZGVyZXIiLCJjb21wb25lbnRzIiwiZGlyZWN0aXZlcyIsInRwbCIsInZub2RlcyIsInBhcnNlVHBsIiwiY29tcGlsZU5vZGVzIiwibGlua05vZGVzIiwiJHBvc3RsaW5rIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwibm9kZURhdGEiLCJyZWNvZ25pemVDb21wb25lbnQiLCJjdXN0b21MaW5rZXIiLCJ2YXR0cnMiLCJzb21lIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJzZWVrU2xvdCIsImJpbmRpbmciLCJjcmVhdGVCaW5kaW5nIiwibm9kZU5hbWUiLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCIkbmV3RGlyZWN0aXZlIiwiJCR2YXR0ciIsIiRhc3NpZ25tZW50IiwiJGNvbXBpbGUiLCJzZXRIdG1sQXR0ciIsInJlZ2lzdGVyQXV0b21hdGlvbiIsIiRoYXNQcm9wZXJ0eSIsImNvbXBpbGUiLCJ2dGV4dCIsIm5ld1RleHROb2RlIiwidmNtbnQiLCIkbGluayIsImluc3RhbmNlIiwiJG5ld0NvbXBvbmVudCIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHNldFNsb3QiLCIkcmVuZGVyIiwiJG1vdW50IiwibGluayIsIiRjaGFuZ2UiLCJpc1ZFbG0iLCJzbG90IiwiZ2V0QXR0ciIsImdldElubmVyVHBsIiwiJHBhcnNlRnVsbE5hbWUiLCIkZ2V0Q29tcG9uZW50IiwibnMiLCIkZ2V0RGlyZWN0aXZlIiwiVkF0dHIiLCJub2RlVHlwZSIsImF0dHJpYnV0ZSIsIlZOb2RlIiwiVkNtbnQiLCJjb21tZW50IiwiVkVsbSIsImVsZW1lbnQiLCJzZWxmQ2xvc2VkIiwiVHBsQnVpbGRlciIsImF0dHIiLCJtYXRjaGVzIiwiYmVsb25nVG8iLCJzZXRWYWx1ZSIsImNvbXBpbGVPcHRpb25zIiwiY2xlYXJDaGlsZE5vZGVzIiwiY2xvbmVOb2RlIiwiY2RhdGFTZWN0aW9uIiwiZW50aXR5UmVmZXJlbmNlIiwiZW50aXR5IiwicHJvY2Vzc2luZ0luc3RydWN0aW9uIiwiZG9jdW1lbnRUeXBlIiwiZG9jdW1lbnRGcmFnbWVudCIsIm5vdGF0aW9uIiwiZmlyc3RDaGlsZCIsImJ1aWxkU2libGluZyIsInJlZkNoaWxkIiwibmV3Q2hpbGQiLCJjbGVhclBhcmVudEFuZFNpYmxpbmciLCJkZWVwIiwib25DbG9uZU5vZGUiLCJvbkRlc3Ryb3kiLCJvd25lckRvY3VtZW50IiwiVlRleHQiLCJWVHlwZSIsImxleFRwbCIsIlRwbExleGVyIiwiVHBsUGFyc2VyIiwiaXNWQXR0ciIsImJ1aWxkVGV4dCIsImJ1aWxkQ29tbWVudCIsImJ1aWxkRWxlbWVudCIsImF0dHJUcGwiLCJidWlsZEF0dHJpYnV0ZSIsImNoaWxkVHBsIiwic3RyIiwiYmVnaW4iLCJleHBlY3RTdHJpbmciLCJ0ZXh0VGFnIiwiY2xvc2luZyIsImRvY3R5cGUiLCJ0YWciLCJlcXVhbCIsImFsbG93RG9jVHlwZSIsInJlYWRDb21tZW50IiwicmVhZFRhZyIsInJlYWRUZXh0Iiwicm9vdCIsImN1cnJlbnQiLCJkb2NUeXBlIiwiYXR0cnMiLCJwIiwicHVzaEF0dHIiLCJjaGlsZEVsZW1lbnRzIiwicHVzaENoaWxkIiwiZWxlcyIsIm9yaWdpbiIsImRlYnVnTW9kZSIsInRvU3RyaW5nIiwiZ2V0UHJvdG90eXBlT2YiLCJpZ25vcmVPd24iLCJpc0FycmF5IiwiaXNPYmplY3QiLCJvYmpJbmRleCIsImlzQm9vbGVhbiIsIm5ld0FyciIsIm5ld09iaiIsImV4dGVuZCIsImRlZXBNZXJnZSIsInBsYWluTWVyZ2UiLCJtZXJnZSIsInNvdXJjZSIsIm8iLCJGIiwiaW5oZXJpdFByb3RvdHlwZSIsInN1YlR5cGUiLCJzdXBlclR5cGUiLCJjb25zdHJ1Y3RvciIsImluaGVyaXQiLCJsb3dlcmNhc2UiLCJpc1N0cmluZyIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJpc1VuZGVmaW5lZCIsImlzRGVmaW5lZCIsImlzTWFwIiwiTWFwIiwiaXNCbGFua09iamVjdCIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsImlzU2FtZSIsIm9iajEiLCJvYmoyIiwic2FtZSIsImlzRW1wdHkiLCJkZWJ1ZyIsImxvZyIsImNvbnNvbGUiLCJjb250YWlucyIsImNvbnRhaW5zU3RyIiwiaWdub3JlQ2FzZSIsImhhc1Byb3BlcnR5Iiwia2V5MiIsImhhc1Byb3AiLCJ2YWx1ZTMiLCJrZXkzIiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsIm9yZGVyQnkiLCJnZXR0ZXIiLCJnZXRWYWx1ZSIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJ0b051bWJlciIsIm4iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJlc2NhcGVIdG1sIiwiaHRtbCIsInNlcGFyYXRvciIsImNvbXBvbmVudENvbnN0cnVjdG9yIiwiJCRjaGlsZHJlbiIsIiQkZGlyZWN0aXZlcyIsIiQkZGF0YSIsIiRpbml0RGF0YSIsIiQkaW5qZWN0b3IiLCIkJG9ic2VydmVyIiwiJCRldmFsdWF0b3IiLCIkZGVsZWdhdGUiLCJpbmplY3RTZXJ2aWNlcyIsImFsaWFzIiwiZnVsbE5hbWUiLCJwYXJzZUZ1bGxOYW1lIiwiJGdldE5zQWxpYXMiLCJnZXRDb21wb25lbnQiLCJjcmVhdGVDb21wb25lbnQiLCJnZXREaXJlY3RpdmUiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwiY3JlYXRlRmlsdGVyIiwiJGdldFByb3BlcnR5IiwibWVzc2FnZSIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsIiRnZXRUZW1wbGF0ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRkZXN0cm95IiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCJvbkNvbXBpbGUiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJvbkNoYW5nZSIsIiRrZXkiLCIkJHNlYXJjaERpcmVjdGl2ZSIsInllcyIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwiU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJuZXdOYW1lIiwicm9sZXMiLCJjb25maWciLCJjb25zdHJ1Y3Rvck5hbWUiLCJyZW5hbWUiLCJvbkNvbnN0cnVjdCIsImNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwibWFrZSIsImZhY3RvcnkiLCJJbmplY3RvciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJjb250YWluZXIiLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiY29uc3RydWN0b3JzIiwibWV0YSIsImhhcyIsIm5hbWVzcGFjZXMiLCJrZXlPckNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJnZXRGaWx0ZXIiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwicG9wIiwic2hvcnROYW1lIiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSIsImNyZWF0ZVNlcnZpY2UiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzQ29tcG9uZW50IiwiaXNEaXJlY3RpdmUiLCJpc0ZpbHRlciIsImlzU2VydmljZSIsIlJvb3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFB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LEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWXJnQixvREFBM0I7QUFDSDs7QUFFRCxTQUFTc3ZCLFFBQVQsQ0FBa0JqUCxRQUFsQixFQUE0QjtBQUN4QixTQUFPQSxRQUFRLFlBQVlrTSw4Q0FBM0I7QUFDSDs7QUFFRCxTQUFTZ0QsU0FBVCxDQUFtQmxQLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQU9BLFFBQVEsWUFBWXFNLGdEQUEzQjtBQUNIOztBQUVELFNBQVN2dkIsTUFBVCxDQUFnQmdJLFFBQWhCLEVBQTBCNm5CLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUluTCxPQUFPLEdBQUd0aEIsUUFBUSxDQUFDbXJCLGFBQVQsQ0FBdUJ2bUIsUUFBdkIsQ0FBZDtBQUNBLE1BQUlxcUIsSUFBSSxHQUFHakMsZ0RBQU8sQ0FBQ3lCLGFBQVIsQ0FBc0IsTUFBdEIsRUFBOEJoQyxNQUE5QixFQUFzQztBQUM3Q2h3QixZQUFRLEVBQUU2a0IsT0FBTyxDQUFDOWhCO0FBRDJCLEdBQXRDLENBQVg7QUFHQSxNQUFJZ2xCLElBQUksR0FBRyxJQUFJeUssSUFBSixFQUFYO0FBRUExd0IsNkRBQUEsQ0FBMkIraUIsT0FBM0I7QUFDQWtELE1BQUksQ0FBQ3JFLE9BQUw7QUFDQXFFLE1BQUksQ0FBQ3BFLE1BQUwsQ0FBWWtCLE9BQVo7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2xvdCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3Nsb3QnXHJcbn0pXHJcbmNsYXNzIFNsb3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm5hbWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzbG90cyA9IHRoaXMuJCRwYXJlbnQuc2xvdHM7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gc2xvdHNbdGhpcy5wcm9wcy5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHZpZXcgPSB0aGlzLiQkcGFyZW50LiQkcmVuZGVyZXIucmVuZGVyKHRlbXBsYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLiQkdmlldztcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vbWVzc2FnZS1idXMnOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlQnVzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHt9O1xuICAgIH1cblxuICAgIGdldChlKSB7XG4gICAgICAgIGlmICghdGhpcy5tZXNzYWdlc1tlXSkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlc1tlXSA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNbZV07XG4gICAgfVxuXG4gICAgb24oZSwgZm4pIHtcbiAgICAgICAgdGhpcy5nZXQoZSkub24oZm4pO1xuICAgIH1cblxuICAgIG9mZihlLCBmbikge1xuICAgICAgICB0aGlzLmdldChlKS5vZmYoZm4pO1xuICAgIH1cblxuICAgIGZpcmUoZSwgZGF0YSwgc2NvcGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KGUpLmZpcmUoZGF0YSwgc2NvcGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgIH1cblxuICAgIG9mZihmbikge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaGFuZGxlcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhhbmRsZXJzW2ldID09PSBmbikge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShkYXRhLCBzY29wZSkge1xuICAgICAgICB2YXIgcmV0dXJuVmFsdWU7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmhhbmRsZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbih0aGlzLmhhbmRsZXJzW2ldKSkge1xuICAgICAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5oYW5kbGVyc1tpXS5jYWxsKHNjb3BlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc01lc3NhZ2Uob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XG59XG5cbmV4cG9ydCB7IGlzTWVzc2FnZSB9IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWJpbmQtaHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KHZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20taWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCF2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLW1vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdmVsbS5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlRWxlbWVudHNCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24oaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YXIgbG9jYWxzID0ge307XG5cbiAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcbiAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcblxuICAgICAgICAgICAgdmFyIGl0ZW1Db250ZW50ID0gc2VsZi4kcmVuZGVyZXIucmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlLCBsb2NhbHMpO1xuXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChpdGVtQ29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXNob3cnXG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kaGlkZUVsZW1lbnQoIXZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWRpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAgc2VsZWN0b3I6ICdtLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3Mtb2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIENsYXNzRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UobmV3Q2xhc3MsIG9sZENsYXNzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2xkQ2xhc3MpIHtcclxuICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIG9sZENsYXNzLmpvaW4oJycpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDbGFzcykge1xyXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgbmV3Q2xhc3Muam9pbignJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXN0eWxlLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3R5bGUnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXdTdHlsZSwgb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChvbGRTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChuZXdTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC1kZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ20tc3dpdGNoLWRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnbS1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5tYXRjaERlZmF1bHQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC13aGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbS1zd2l0Y2gtd2hlbicpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdtLXN3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLmNoYW5nZWQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLnN3aXRjaEN0cmwudmFsdWUgPT09IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5tYXRjaGVkICE9IG1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IG1hdGNoZWQ7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLnBsdXNNYXRjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWludXNNYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghbWF0Y2hlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQgPSBuZXcgTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwbHVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCsrO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG1pbnVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudC0tO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoZWNrRGVmYXVsdCgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRNYXRjaGVkID0gdGhpcy5tYXRjaENvdW50IDw9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1hdGNoZWQgIT09IGRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gZGVmYXVsdE1hdGNoZWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdC5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxtLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0pO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0JldHdlZW4oc3RhcnRFbG0sIGVuZEVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gc3RhcnRFbG0ucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkcmVuT2ZFbGVtZW50KHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBzdGFydEVsbSAmJiBjaGlsZCAhPT0gZW5kRWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZEVsbSAmJiBjaGlsZCAhPT0gc3RhcnRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSBlbG0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxtLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZVN0cmluZyhjc3MpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXBwZW5kRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIHJlcGxhY2VFbGVtZW50LFxuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnRzQmV0d2VlbixcbiAgICBjbGVhckNoaWxkcmVuT2ZFbGVtZW50LFxuICAgIGxvYWRTdHlsZVN0cmluZ1xufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIHBhcnNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMuYnVmZmVyW2V4cF07XG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XG4gICAgICAgICAgICB0aGlzLmJ1ZmZlcltleHBdID0gcHJvZ3JhbTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4ge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2UoY2hpbGQpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3I6IG51bGxcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWZmZXIgPSB7fTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBwYXJzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLmJ1ZmZlcltleHBdO1xuICAgICAgICBpZiAoIXByb2dyYW0pIHtcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xuICAgICAgICAgICAgdGhpcy5idWZmZXJbZXhwXSA9IHByb2dyYW07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbSh0aGlzLnBhcnNlKGV4cCksIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0odGhpcy5wYXJzZShleHApLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XG4gICAgICAgICAgICBjYWxsZWU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5zY29wZS4kZ2V0RmlsdGVyKGNvbnRleHQucHJvcCk7XG5cbiAgICAgICAgICAgIGlmKGZpbHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuZXhlY3V0ZS5hcHBseShmaWx0ZXIsIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xuICAgICAgICAgICAgb2JqID0gbmV3IE51bGxFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZTogbWVtYmVyLm9iamVjdCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiBjb250ZXh0ICYmIGNvbnRleHQuYXNzaWdubWVudExlZnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcblxuICAgICAgICBpZiAoY29udGV4dC50YXJnZXROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBjb250ZXh0LnRhcmdldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgcHJvcDogaWRlbnRpZmllci5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2lkZW50aWZpZXIubmFtZV07XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMubG9jYWxzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YXIgZGVmID0gdGhpcy5ldmFsdWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xuXG5mdW5jdGlvbiBsZXhFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cFBhcnNlcihuZXcgRXhwTGV4ZXIoKSkucGFyc2UoZXhwKTtcbn1cblxuZXhwb3J0IHsgbGV4RXhwLCBwYXJzZUV4cCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRXhwQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZChub2RlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTWVtYmVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkSWRlbnRpZmllcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5idWlsZChhc3NpZ25tZW50LmxlZnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH09ezF9JywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5idWlsZChjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB2YXIgY29uc2VxdWVudCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0/ezF9OnsyfScsIHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYnVpbGRMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBsb2dpYy5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgYmluYXJ5Lm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZFVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9JywgdW5hcnkub3BlcmF0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENhbGwoY2FsbCkge1xuICAgICAgICB2YXIgcmVzID0gJycsIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gYXJnVmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcyArPSAnIHwgJyArIGZuO1xuXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonICsgdXRpbHMuam9pbignOicsIGFyZ1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMgPSB1dGlscy5mb3JtYXQoJ3swfSh7MX0pJywgZm4sIHV0aWxzLmpvaW4oJywgJywgYXJnVmFsdWVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGJ1aWxkTWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9W3sxfV0nLCBvYmosIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG9iaiwgcHJvcCk7XG4gICAgfVxuXG4gICAgYnVpbGRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICB9XG5cbiAgICBidWlsZExpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1wiezB9XCInLCBsaXRlcmFsLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZChwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH06ezF9Jywga2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7ezB9fScsIHV0aWxzLmpvaW4oJywgJywgcHJvcHMpKTtcbiAgICB9XG5cbiAgICBidWlsZEFycmF5KGFycikge1xuICAgICAgICB2YXIgaXRlbXMgPSBhcnIuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIHV0aWxzLmpvaW4oJywnLCBpdGVtcykpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xuICAgICAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBpcyhjaCwgY2hhcnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwZWVrKGkpIHtcbiAgICAgICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xuICAgICAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG4gICAgfVxuXG4gICAgY29kZVBvaW50QXQoY2gpIHtcbiAgICAgICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XG4gICAgfVxuXG4gICAgcGVla011bHRpY2hhcigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgaWYgKCFwZWVrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9XG5cbiAgICBpc0V4cE9wZXJhdG9yKGNoKSB7XG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcbiAgICB9XG5cbiAgICByZWFkTnVtYmVyKCkge1xuICAgICAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxuICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZElkZW50KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZFN0cmluZyhxdW90ZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xuICAgICAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcblxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTsiLCJpbXBvcnQge1xuICAgIEFTVCxcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLFxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsXG4gICAgSWRlbnRpZmllck5vZGUsXG4gICAgTGl0ZXJhbE5vZGUsXG4gICAgTG9naWNhbEV4cHJlc3Npb25Ob2RlLFxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLFxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxuICAgIFByb2dyYW1Ob2RlLFxuICAgIFByb3BlcnR5Tm9kZSxcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKG1zZywgdG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHByb2dyYW0oKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvblN0YXRlbWVudCgpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBmaWx0ZXJDaGFpbigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XG4gICAgfVxuXG4gICAgaXNBc3NpZ25hYmxlKGFzdCkge1xuICAgICAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBhc3NpZ25tZW50KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPScpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRlcm5hcnkoKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBhbHRlcm5hdGUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsT1IoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxBTkQoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXF1YWxpdHkoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICByZWxhdGlvbmFsKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGFkZGl0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIG11bHRpcGxpY2F0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgdW5hcnkoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltYXJ5KCkge1xuICAgICAgICB2YXIgcHJpbWFyeTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygnKCcsICdbJywgJy4nKSB8fCAodGhpcy5wZWVrKCc/JykgJiYgdGhpcy5wZWVrQWhlYWQoMSwgJy4nKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpbWFyeTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYmFzZUV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcbiAgICAgICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgICAgIH0pLmpvaW4oJy4nKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwYXJzZUFyZ3VtZW50cygpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBpZGVudGlmaWVyKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdGFudCgpIHtcbiAgICAgICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XG4gICAgfVxuXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBvYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ30nKTtcblxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN1bWUoZTEpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBwZWVrVG9rZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xuICAgIH1cblxuICAgIHBlZWsoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcbiAgICB9XG5cbiAgICBwZWVrQWhlYWQoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XG4gICAgICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGV4cGVjdChlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtbGV4ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1idWlsZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vYW5hbHlzZXInOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULkFycmF5RXhwcmVzc2lvbik7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgICAgICBzdXBlcihBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIEFTVCA9IHt9O1xuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE1lbWJlckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihBU1QuT2JqZWN0RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9ncmFtKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9wZXJ0eSk7XG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xuICAgICAgICBzdXBlcihBU1QuVW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMuYXJnID0gYXJnO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxuICAgIGxpdGVyYWxzOiB7XG4gICAgICAgIGZhbHNlOiBmYWxzZSxcbiAgICAgICAgbnVsbDogbnVsbCxcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcbiAgICB9XG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXInO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuXG5leHBvcnQgdmFyIGV2ZW50cyA9IHtcbiAgICBwcm9wQ2hhbmdpbmc6IG5ldyBNZXNzYWdlKCksXG4gICAgcHJvcENoYW5nZWQ6IG5ldyBNZXNzYWdlKClcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnkpO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXksIGxvY2Fscyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gIHRoaXMuZXZhbHVhdG9yO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2Fscyk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmNsYXNzIEFnZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgfVxuXG4gICAgZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmhhbmRsZXIuc2V0KHRoaXMudGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICB9XG59XG5cbmNsYXNzIEFycmF5QWdlbnQgZXh0ZW5kcyBBZ2VudCB7XG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFyZ2V0Lmxlbmd0aDtcbiAgICB9XG5cbiAgICBzZXQgbGVuZ3RoKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCBoYW5kbGVyKSB7XG4gICAgICAgIHN1cGVyKHRhcmdldCwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgY29uY2F0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBqb2luKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuam9pbi5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICB2YXIgcmVzdWx0LCBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGVuZ3RoLS07XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGhdO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwdXNoKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGxlbmd0aCArIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsZW5ndGggKz0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsICdsZW5ndGgnLCBsZW5ndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxlbmd0aDtcbiAgICB9XG5cbiAgICByZXZlcnNlKCkge1xuICAgICAgICBpZiAodGhpcy50YXJnZXQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICBjb3B5LnJldmVyc2UoKTtcbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIHZhciBsZW5ndGggPSB0aGlzLnRhcmdldC5sZW5ndGg7XG5cbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRhcmdldFtsZW5ndGggLSAxXTtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IDE7XG5cbiAgICAgICAgICAgIHdoaWxlIChpbmRleCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4IC0gMSwgdGhpcy50YXJnZXRbaW5kZXhdKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGxlbmd0aCAtIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBzbGljZSgpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgICAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmFwcGx5KHRoaXMudGFyZ2V0LCBhcmdzKTtcbiAgICB9XG5cbiAgICBzb3J0KCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc29ydC5hcHBseSh0aGlzLnRhcmdldCwgYXJncyk7XG4gICAgfVxuXG4gICAgc3BsaWNlKCkge1xuICAgICAgICB2YXIgbGVuZ3RoID0gdGhpcy50YXJnZXQubGVuZ3RoO1xuICAgICAgICB2YXIgY29weSA9IHV0aWxzLmNvcHkodGhpcy50YXJnZXQpO1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIHZhciByZXN1bHQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuYXBwbHkoY29weSwgYXJncyk7XG5cbiAgICAgICAgY29weS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0gIT09IHRoaXMudGFyZ2V0W2luZGV4XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlci5zZXQodGhpcy50YXJnZXQsIGluZGV4LCB0aGlzLnRhcmdldFtpbmRleF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY29weS5sZW5ndGggIT09IGxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLnNldCh0aGlzLnRhcmdldCwgJ2xlbmd0aCcsIGNvcHkubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIHZhciB2YWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgdGFyZ2V0ID0gZ2V0VGFyZ2V0KHRhcmdldCk7XG4gICAgICAgIHRhcmdldFtrZXldID0gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm94eSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkgJiYgIWlzUHJveHkodmFsdWUpKSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBtYWtlUHJveHkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3h5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gaXNQcm94eVN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG59XG5cbmZ1bmN0aW9uIHNldFByb3h5KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXG4gICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcblxuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdmFyIHZhbGlkYXRpb24gPSB7XG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGFwcGx5OiB0cnVlLFxuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgIH07XG5cbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5maXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkYXRhOiB2YWxpZGF0aW9uXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICh2YWxpZGF0aW9uLmFwcGx5KSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IG1ha2VQcm94eSh2YWx1ZSk7XG4gICAgICAgICAgICBldmVudHMucHJvcENoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge1xuICAgIGlzUHJveHksXG4gICAgZ2V0VGFyZ2V0LFxuICAgIGhhbmRsZXJcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuL2V2ZW50cyc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5vblByb3BDaGFuZ2luZyA9IGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVQcm9wQ2hhbmdpbmcoZS5kYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLm9uUHJvcENoYW5nZWQgPSBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlUHJvcENoYW5nZWQoZS5kYXRhKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2luZy5vbih0aGlzLm9uUHJvcENoYW5naW5nKTtcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9uKHRoaXMub25Qcm9wQ2hhbmdlZCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvcENoYW5naW5nKGFyZ3MpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLnZhbGlkYXRvcnMsIGFyZ3MudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wQ2hhbmdlZChhcmdzKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGFyZ3MudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShhcmdzLmtleSwgYXJncyk7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xuXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgdmFsaWRhdGUodGFyZ2V0LCBrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy52YWxpZGF0b3JzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMubGVuZ3RoID0gMDtcblxuICAgICAgICBldmVudHMucHJvcENoYW5naW5nLm9mZih0aGlzLm9uUHJvcENoYW5naW5nKTtcbiAgICAgICAgZXZlbnRzLnByb3BDaGFuZ2VkLm9mZih0aGlzLm9uUHJvcENoYW5nZWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgLy8gaXMgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGxvZ2ljYWwgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmxvZ2ljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IGZhbHNlO1xuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0ZXh0KTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5wdXNoKGV4cCk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naWNhbCB8fCB0aGlzLmFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHZhciBzZWdtZW50LCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLmNyZWF0ZUV4cHJlc3Npb24obWF0Y2hbMV0pKTtcblxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50IHx8IHRoaXMubG9naWNhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC53YXRjaCh0aGlzLnNjb3BlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUobG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAoY3VyLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKSB8fCAnJyk7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24odmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc1swXS5hc3NpZ24odGhpcy5zY29wZSwgdmFsdWUsIGxvY2Fscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24gPT09IGF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgdmlldyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICBwYXRjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZCAmJiB0aGlzLmF1dG9tYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlLCB0aGlzLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kZXZhbChleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcblxuICAgIH1cbn0iLCJcbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kd2F0Y2godGhpcy50ZXh0LCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG5cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IHBhcnNlVHBsLCBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYnVmZmVyID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlQmluZGluZyh0ZXh0LCBjb250ZXh0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCBjb250ZXh0LmxvY2Fscyk7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRwbCwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB2YXIgdm5vZGVzID0gcGFyc2VUcGwodHBsKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHtcbiAgICAgICAgICAgIGxvY2FsczogbG9jYWxzLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW11cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2bm9kZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIC8vIGNvbnRleHQuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgIC8vICAgICBkaXJlY3RpdmUuJHByZWxpbmsoKTtcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgdGhpcy5saW5rTm9kZXModm5vZGVzLCBjb250ZXh0KS5mb3JFYWNoKGVsbSA9PiB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbG0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4ge1xuICAgICAgICAgICAgZGlyZWN0aXZlLiRwb3N0bGluaygpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGVzKHZub2RlcywgY29udGV4dCkge1xuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2RlKHZub2RlLCBjb250ZXh0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGUodm5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVUZXh0KHZub2RlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzVkNvbW1lbnQodm5vZGUsIGNvbnRleHQpKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUNvbW1lbnQodm5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlRWxtKHZub2RlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtOb2Rlcyh2bm9kZXMsIGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua05vZGUodm5vZGUsIGNvbnRleHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSwgY29udGV4dCkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlLCBjb250ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUsIGNvbnRleHQpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSwgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlLCBjb250ZXh0KTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0sIGNvbnRleHQpIHtcbiAgICAgICAgdmVsbS5ub2RlRGF0YS5jb21wb25lbnQgPSB0aGlzLnJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKTtcblxuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VzdG9tTGlua2VyID0gdmVsbS52YXR0cnMuc29tZSh2YXR0ciA9PiB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyLCBjb250ZXh0KTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgdmVsbS5ub2RlRGF0YS5saW5rZXIgPSB2YXR0ci5ub2RlRGF0YS5saW5rZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZlbG0ubm9kZURhdGEubGlua2VyICE9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxuICAgICAgICB1dGlscy5vcmRlckJ5KGRpcmVjdGl2ZXMsIGZ1bmN0aW9uIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUuJHByaW9yaXR5O1xuICAgICAgICB9KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB7XG4gICAgICAgICAgICBjb250ZXh0LmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuc2xvdHMgPSB0aGlzLnNlZWtTbG90KHZlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzLCBjb250ZXh0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBiaW5kaW5nO1xuICAgICAgICBcbiAgICAgICAgaWYodmF0dHIubm9kZVZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLmNyZWF0ZUJpbmRpbmcodmF0dHIubm9kZVZhbHVlLCBjb250ZXh0KTtcbiAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhdHRyLm5vZGVOYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgICAgdmF0dHIubm9kZURhdGEuaXNFdmVudCA9IHRydWU7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmxvZ2ljYWwgPSB0cnVlKTtcbiAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLm5hbWUgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICB2YXR0ci5ub2RlRGF0YS5pc0RvbUV2ZW50ID0gdXRpbHMuY29udGFpbnMoZG9tRXZlbnRzLCB2YXR0ci5ub2RlRGF0YS5uYW1lKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh2YXR0ci5ub2RlTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLm5hbWUgPSB2YXR0ci5ub2RlTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodmF0dHIubm9kZU5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XG4gICAgICAgICAgICB2YXR0ci5ub2RlRGF0YS5kaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICAgICAgdmF0dHIubm9kZURhdGEubmFtZSA9IHZhdHRyLm5vZGVOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLm5hbWUgPSB2YXR0ci5ub2RlTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YXR0ci5ub2RlRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci5ub2RlRGF0YS5kaXJlY3RpdmUgPSB0aGlzLnNjb3BlLiRuZXdEaXJlY3RpdmUoZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICB2YXR0ci5ub2RlRGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuXG4gICAgICAgICAgICAgICAgaWYoYmluZGluZykge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmFzc2lnbm1lbnQgPSB2YXR0ci5ub2RlRGF0YS5kaXJlY3RpdmUuJGFzc2lnbm1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLmxpbmtlciA9IHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyB2YXR0ci5ub2RlRGF0YS5uYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJpbmRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKHZhdHRyLm5vZGVEYXRhLmlzRXZlbnQgfHwgdmF0dHIubm9kZURhdGEuZGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgICAgICAgICAgaWYgKHZhdHRyLm5vZGVEYXRhLm5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIHZhdHRyLm5vZGVEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUodmF0dHIubm9kZURhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQuJGhhc1Byb3BlcnR5KHZhdHRyLm5vZGVEYXRhLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudC4kc2V0UHJvcGVydHkodmF0dHIubm9kZURhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCwgY29udGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nID0gdGhpcy5jcmVhdGVCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSwgY29udGV4dCk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIGlmICh2ZWxtLm5vZGVEYXRhLmxpbmtlciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVsbS5ub2RlRGF0YS5saW5rZXIuJGxpbmsoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlbG0uZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAodmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuc2NvcGUuJG5ld0NvbXBvbmVudCh2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh2ZWxtLmVsbSwgTV9DTVBfQ0xBU1MpO1xuXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpbmtBdHRyKHZhdHRyKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpbnN0YW5jZS4kJHZlbG0gPSB2ZWxtO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHNldFNsb3QodmVsbS5ub2RlRGF0YS5zbG90cyk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kbW91bnQodmVsbS5lbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5saW5rQXR0cih2YXR0cik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgIHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbSxcbiAgICAgICAgICAgIGJpbmRpbmcgPSB2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuXG4gICAgICAgIGlmKCFiaW5kaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodmF0dHIubm9kZURhdGEuaXNFdmVudCkge1xuICAgICAgICAgICAgaWYgKHZhdHRyLm5vZGVEYXRhLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcih2YXR0ci5ub2RlRGF0YS5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudC4kYmluZCh2YXR0ci5ub2RlRGF0YS5uYW1lLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWdpc3RlciBiaW5kaW5nIGNoYW5nZSBoYW5kbGVyIGFmdGVyIGZpcnN0IHBhdGNoXG4gICAgICAgIGlmKHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhdHRyLm5vZGVEYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIHNlZWtTbG90KHZlbG0pIHtcbiAgICAgICAgdmFyIHNsb3RzID0ge307XG5cbiAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYoaXNWRWxtKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90ID0gY2hpbGQuZ2V0QXR0cignc2xvdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90c1tzbG90Lm5vZGVWYWx1ZV0gPSBjaGlsZC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICBzbG90cztcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgaWRlbnRpZmllciwgY29tcG9uZW50LFxuICAgICAgICAgICAgbmFtZSA9IHZlbG0ubm9kZU5hbWUsXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmJ1ZmZlci5jb21wb25lbnRzO1xuXG4gICAgICAgIGlmIChidWZmZXJbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gYnVmZmVyW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuc2NvcGUuJHBhcnNlRnVsbE5hbWUobmFtZSk7XG4gICAgICAgICAgICBjb21wb25lbnQgPSB0aGlzLnNjb3BlLiRnZXRDb21wb25lbnQoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVsbS5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cikge1xuICAgICAgICB2YXIgaWRlbnRpZmllciwgZGlyZWN0aXZlLFxuICAgICAgICAgICAgbmFtZSA9IHZhdHRyLm5vZGVEYXRhLm5hbWUsXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmJ1ZmZlci5kaXJlY3RpdmVzO1xuXG4gICAgICAgIGlmKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBkaXJlY3RpdmUgPSBidWZmZXJbbmFtZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5zY29wZS4kcGFyc2VGdWxsTmFtZSh2YXR0ci5ub2RlRGF0YS5uYW1lKTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IHRoaXMuc2NvcGUuJGdldERpcmVjdGl2ZShpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XG4gICAgICAgICAgICBidWZmZXJbbmFtZV0gPSBkaXJlY3RpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB2YXR0ci5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1idWlsZGVyJzsiLCJleHBvcnQgKiBmcm9tICcuL3Zub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vdmF0dHInO1xuZXhwb3J0ICogZnJvbSAnLi92Y21udCc7XG5leHBvcnQgKiBmcm9tICcuL3ZlbG0nO1xuZXhwb3J0ICogZnJvbSAnLi92dGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3Z0eXBlJzsiLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZBdHRyIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnZlbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQ21udCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5pbXBvcnQgeyBWQXR0ciB9IGZyb20gJy4vdmF0dHInO1xuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwtYXBpJztcbmltcG9ydCB7IFRwbEJ1aWxkZXIgfSBmcm9tICcuLi90cGwtYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy52YXR0cnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgcHVzaEF0dHIoYXR0cikge1xuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cihrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLm5vZGVOYW1lID09PSBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0LnZlbG0gPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBWQXR0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xuICAgIH1cblxuICAgIHNldElubmVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBWRWxtKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcblxuICAgICAgICBub2RlLnZhdHRycyA9IHRoaXMudmF0dHJzLm1hcChmdW5jdGlvbiAodmF0dHIpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdmF0dHIuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICBjb3B5LnZlbG0gPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52YXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmF0dHJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgbm9kZVR5cGUgPSB7XG4gICAgZWxlbWVudDogMSxcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgdGV4dDogMyxcbiAgICBjZGF0YVNlY3Rpb246IDQsXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIGVudGl0eTogNixcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgY29tbWVudDogOCxcbiAgICBkb2N1bWVudDogOSxcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIG5vdGF0aW9uOiAxMlxufVxuXG4vLyB2aXJ0dWFsIG5vZGVcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVEYXRhID0ge307XG4gICAgfVxuXG4gICAgcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgYnVpbGRTaWJsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGNsb25lTm9kZShkZWVwKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vbkNsb25lTm9kZShkZWVwKTtcblxuICAgICAgICBpZihkZWVwKSB7XG4gICAgICAgICAgICBub2RlLmNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5jbG9uZU5vZGUoZGVlcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaG9vcHNcblxuICAgIC8vIGVuZCBvZiBob29wc1xufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS50ZXh0LCAnI3RleHQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWVGV4dCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlR5cGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFRwbExleGVyIH0gZnJvbSAnLi90cGwtbGV4ZXInO1xuaW1wb3J0IHsgVHBsUGFyc2VyIH0gZnJvbSAnLi90cGwtcGFyc2VyJztcbmltcG9ydCB7IG5vZGVUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxMZXhlcigpLmxleCh0cGwpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XG59XG5cbmZ1bmN0aW9uIGlzVkVsbSh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNWQXR0cih2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuYXR0cmlidXRlO1xufVxuXG5mdW5jdGlvbiBpc1ZUZXh0KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS50ZXh0O1xufVxuXG5mdW5jdGlvbiBpc1ZDb21tZW50KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5jb21tZW50O1xufVxuXG5leHBvcnQgeyBsZXhUcGwsIHBhcnNlVHBsLCBpc1ZFbG0sIGlzVkF0dHIsIGlzVlRleHQsIGlzVkNvbW1lbnQgfTsiLCJpbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50IH0gZnJvbSAnLi90cGwtYXBpJ1xuXG5leHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZCh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1ZDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XG4gICAgfVxuXG4gICAgYnVpbGRFbGVtZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xuICAgICAgICAgICAgfSkuam9pbignICcpLFxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgPSAnICcgKyBhdHRyVHBsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHZlbG0ubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHZlbG0ubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBidWlsZEF0dHJpYnV0ZSh2YXR0cikge1xuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiB2Y21udC5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xuICAgIH1cblxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRleHRcbiAgICByZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0YWdcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7XG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxleGVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuYnVpbGRTaWJsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBkb2N0eXBlKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NUeXBlO1xuICAgIH1cblxuICAgIGVsZW1lbnQocCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUucHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcbiAgICAgICAgdmFyIGVsZXMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlcztcbiAgICB9XG5cbiAgICBhdHRycyhwKSB7XG4gICAgICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHIgPSBuZXcgVkF0dHIoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG5cbiAgICBjdXJyZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxufSIsInZhciBkZWJ1Z01vZGUgPSB0cnVlLFxuICAgIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuZnVuY3Rpb24gZm9yRWFjaChvYmosIGFjdGlvbiwgaWdub3JlT3duKSB7XG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgb2JqLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbaW5kZXhdLCBpbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKGlnbm9yZU93biB8fCBvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKG9ialtwXSwgcCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gc29tZShvYmosIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24oaW5kZXgsIG9ialtpbmRleF0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24ocCwgb2JqW3BdKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoZGVlcCwgaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkoZGVlcCwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvYmplY3Qobykge1xuICAgIGZ1bmN0aW9uIEYoKSB7XG4gICAgfVxuXG4gICAgRi5wcm90b3R5cGUgPSBvO1xuICAgIHJldHVybiBuZXcgRigpO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIHZhciBwcm90b3R5cGUgPSBvYmplY3Qoc3VwZXJUeXBlLnByb3RvdHlwZSk7XG4gICAgcHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViVHlwZTtcbiAgICBzdWJUeXBlLnByb3RvdHlwZSA9IHByb3RvdHlwZTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdChzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICBpbmhlcml0UHJvdG90eXBlKHN1YlR5cGUsIHN1cGVyVHlwZSk7XG4gICAgc3ViVHlwZS5zdXBlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc3VwZXJUeXBlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheShvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG5cbmZ1bmN0aW9uIGlzU2FtZShvYmoxLCBvYmoyKSB7XG4gICAgdmFyIHNhbWUgPSAob2JqMSA9PT0gb2JqMik7XG5cbiAgICBpZiAoIXNhbWUpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkob2JqMSkgJiYgaXNBcnJheShvYmoyKSkge1xuICAgICAgICAgICAgaWYgKG9iajEubGVuZ3RoID09PSBvYmoyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHNhbWUgPSAhc29tZShvYmoxLCBmdW5jdGlvbiAoaW5kZXgsIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAhaXNTYW1lKHZhbHVlLCBvYmoyW2luZGV4XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqMSkgJiYgaXNPYmplY3Qob2JqMikgJiYgZ2V0UHJvdG90eXBlT2Yob2JqMSkgPT09IGdldFByb3RvdHlwZU9mKG9iajIpKSB7XG4gICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltrZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHNhbWU7XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkodmFsdWUpIHtcbiAgICByZXR1cm4gIWlzT2JqZWN0KHZhbHVlKSB8fCAhc29tZSh2YWx1ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVidWcobG9nKSB7XG4gICAgaWYgKGRlYnVnTW9kZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhsb2cpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29udGFpbnMoYXJyLCBvYmopIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IG9iajtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29udGFpbnNTdHIoYXJyLCBzdHIsIGlnbm9yZUNhc2UpIHtcbiAgICByZXR1cm4gYXJyLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gPT09IHN0ciB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2UoaXRlbSkgPT09IGxvd2VyY2FzZShzdHIpKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGFzUHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgIGZvckVhY2godGFyZ2V0LCBmdW5jdGlvbiAodmFsdWUzLCBrZXkzKSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdmFsdWUzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgIH0sIHRydWUpO1xuICAgIH1cblxuICAgIHJldHVybiBoYXNQcm9wO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eShvYmosIGtleSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcCA/IHRhcmdldCA6IG51bGw7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSwgaWdub3JlQ2FzZSkge1xuICAgIGlmICghb2JqKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGlmIChrZXlzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleTJdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBoYXNQcm9wID0gZmFsc2U7XG4gICAgICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc1Byb3A7XG4gICAgICAgICAgICB9LCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaGFzUHJvcCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJzogQ2FuIG5vdCBzZXQgcHJvcGVydHkgb2YgdW5kZWZpbmVkJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXQoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5jb25jYXQuYXBwbHkoW10sIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIG9yZGVyQnkoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhhcnIsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gYXJyLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIHJlbW92ZShhcnIsIGl0ZW0pIHtcbiAgICBpZiAoYXJyLmxlbmd0aCkge1xuICAgICAgICB2YXIgaW5kZXggPSBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcblxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xufVxuXG5mdW5jdGlvbiBqb2luKHNlcGFyYXRvciwgYXJyKSB7XG4gICAgdmFyIHJlc3VsdCA9ICcnLCBsZW5ndGggPSBhcnIubGVuZ3RoO1xuXG4gICAgYXJyLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJlc3VsdCArPSBpdGVtO1xuXG4gICAgICAgIGlmIChpbmRleCArIDEgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCB7XG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIG9iamVjdCxcbiAgICBpbmhlcml0LFxuICAgIGxvd2VyY2FzZSxcbiAgICB1cHBlcmNhc2UsXG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNTYW1lLFxuICAgIGlzRW1wdHksXG4gICAgaXNGb3JtRGF0YSxcbiAgICBkZWJ1ZyxcbiAgICBjb250YWlucyxcbiAgICBjb250YWluc1N0cixcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICB0b051bWJlcixcbiAgICByZW1vdmUsXG4gICAgZm9ybWF0LFxuICAgIGVzY2FwZUh0bWwsXG4gICAgam9pblxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIGhhbmRsZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XG4gICAgdGhpcy4kJHZpZXcgPSBudWxsO1xuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJCRkaXJlY3RpdmVzID0gW107XG4gICAgdGhpcy4kJGRhdGEgPSB0aGlzLiRpbml0RGF0YShkYXRhKTtcbiAgICB0aGlzLiQkaW5qZWN0b3IgPSBpbmplY3RvcjtcbiAgICB0aGlzLiQkcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcyk7XG4gICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuJCRldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMpO1xuICAgIHRoaXMuc2xvdHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiQkZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgICRkZWxlZ2F0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgICRzZXRTbG90KHNsb3RzKSB7XG4gICAgICAgIHRoaXMuc2xvdHMgPSBzbG90cyB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzKTtcbiAgICB9XG5cbiAgICAkaW5pdERhdGEoZGF0YSkge1xuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICB9XG5cbiAgICAkc2V0RGF0YShkYXRhKSB7XG4gICAgICAgIHV0aWxzLmV4dGVuZCh0aGlzLiQkZGF0YSwgZGF0YSk7XG4gICAgfVxuXG4gICAgJGdldE5zQWxpYXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkZGF0YS5hbGlhcztcbiAgICB9XG5cbiAgICAkcGFyc2VGdWxsTmFtZShmdWxsTmFtZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLnBhcnNlRnVsbE5hbWUoZnVsbE5hbWUsIHRoaXMuJGdldE5zQWxpYXMoKSk7XG4gICAgfVxuXG4gICAgJGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGluamVjdG9yLmdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgJG5ld0NvbXBvbmVudChjbHMpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy4kJGluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjbHMpO1xuICAgICAgICBjaGlsZC4kJHBhcmVudCA9IHRoaXM7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgICRnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5nZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgICRuZXdEaXJlY3RpdmUoY2xzKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLiQkaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGNscyk7XG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcztcbiAgICAgICAgdGhpcy4kJGRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpO1xuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgICRnZXRGaWx0ZXIoZnVsbE5hbWUpIHtcbiAgICAgICAgdmFyIGlkZW50aWZpZXIgPSB0aGlzLiRwYXJzZUZ1bGxOYW1lKGZ1bGxOYW1lKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRpbmplY3Rvci5jcmVhdGVGaWx0ZXIoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgIH1cblxuICAgICRoYXNQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgLy8gcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLiRnZXRQcm9wZXJ0eShrZXkpICE9PSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgJGdldFByb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB0cnVlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdmFsdWUsIHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhhc01lc3NhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcbiAgICB9XG5cbiAgICAkYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnXCJ7MH1cIiBpcyBub3QgYSB2YWxpZCBldmVudCcsIGtleSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVuYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5LCB0cnVlKTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG9ic2VydmVyLndhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kJGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGFzc2lnbihleHAsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRldmFsdWF0b3IuYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJCRkYXRhO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEudGVtcGxhdGU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZUlkKSkge1xuICAgICAgICAgICAgdmFyIGVsbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRhdGEudGVtcGxhdGVJZCk7XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uaW5uZXJIVE1MO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgICRyZW5kZXIoKSB7XG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHRoaXMuJGdldFRlbXBsYXRlKCk7XG4gICAgICAgIHRoaXMuJCR2aWV3ID0gdGhpcy4kJHJlbmRlcmVyLnJlbmRlcih0ZW1wbGF0ZSk7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmlldztcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGVsZW1lbnQ7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLiQkdmlldyk7XG4gICAgfVxuXG4gICAgJHVubW91bnQoKSB7XG5cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLiQkY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBjaGlsZC4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiQkZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaXRlbS4kZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuICAgICAgICB0aGlzLiQkcGFyZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy4kJGNoaWxkcmVuLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuJCRkaXJlY3RpdmVzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgTV9ISURFX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZUNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG4gICAgLy8gYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudFxuICAgIHRoaXMuJGFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLiRwbGFjZWhvbGRlciA9IG51bGw7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAka2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLmtleTtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRzY29wZS4kJHJlbmRlcmVyO1xuICAgIH1cblxuICAgIGdldCAkZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIubm9kZURhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmKHRoaXMuJGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY2hhbmdlKHRoaXMuJGJpbmRpbmcudmFsdWUsIHRoaXMuJGJpbmRpbmcub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGhlIGlucHV0IHZhbHVlIGlzIGNoYW5nZWRcbiAgICAkY2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkge1xuICAgICAgICB0aGlzLm9uQ2hhbmdlICYmIHRoaXMub25DaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKTtcbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcbiAgICB9XG5cbiAgICAkJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHZlbG0ubm9kZURhdGEuZGlyZWN0aXZlcy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS4ka2V5ID09PSBrZXk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0Lmxlbmd0aD8gcmVzdWx0WzBdOiBudWxsO1xuICAgIH1cblxuICAgICRzZWVrRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXkpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciB2ZWxtID0gdGhpcy4kJHZhdHRyLnZlbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkcmVtb3ZlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYodGhpcy4kcGxhY2Vob2xkZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd5b3UgbXVzdCBkZWZpbmUgZWxlbWVudCBwbGFjZWhvbGRlciEnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh5ZXMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRlbGVtZW50LCB0aGlzLiRwbGFjZWhvbGRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kcGxhY2Vob2xkZXIsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhpZGVFbGVtZW50KHllcykge1xuICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5pbXBvcnQgeyBDb21wb25lbnQsIGNvbXBvbmVudENvbnN0cnVjdG9yIH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlLCBkaXJlY3RpdmVDb25zdHJ1Y3RvciB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciwgZmlsdGVyQ29uc3RydWN0b3IgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlLCBzZXJ2aWNlQ29uc3RydWN0b3IgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG52YXIgcGF0dGVybiA9IC9eW2Etel9cXCRdW1xcd1xcJC1dKi9pO1xuXG4vLyBzdGFydCBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cbnZhciBjb21wb25lbnRDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIENvbXBvbmVudChtZXRhZGF0YSkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmNvbXBvbmVudENsYXNzLnByb3RvdHlwZSA9IENvbXBvbmVudC5wcm90b3R5cGU7XG5cbnZhciBkaXJlY3RpdmVDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIERpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgICAgICBkaXJlY3RpdmVDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmRpcmVjdGl2ZUNsYXNzLnByb3RvdHlwZSA9IERpcmVjdGl2ZS5wcm90b3R5cGU7XG5cbnZhciBmaWx0ZXJDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIEZpbHRlcihtZXRhZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKTtcbiAgICB9O1xufSkoKTtcbmZpbHRlckNsYXNzLnByb3RvdHlwZSA9IEZpbHRlci5wcm90b3R5cGU7XG5cbnZhciBzZXJ2aWNlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBTZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIG1ldGFkYXRhKVxuICAgIH07XG59KSgpO1xuc2VydmljZUNsYXNzLnByb3RvdHlwZSA9IFNlcnZpY2UucHJvdG90eXBlO1xuLy8gZW5kIG9mIG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxuXG4vLyBjb25zdHJ1Y3RvciBmYWN0b3J5LCBjcmVhdGUgY29uc3RydWN0b3IgZm9yIGNvbXBvbmVudCwgZGlyZWN0aXZlLCBmaWx0ZXIgYW5kIHNlcnZpY2VcbmV4cG9ydCBjbGFzcyBGYWN0b3J5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIHJlbmFtZShyb2xlSWQsIG5hbWUpIHtcbiAgICAgICAgaWYgKHBhdHRlcm4udGVzdChuYW1lKSkge1xuICAgICAgICAgICAgdmFyIG5ld05hbWUgPSAnJztcbiAgICAgICAgICAgIHZhciBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy0nKTtcblxuICAgICAgICAgICAgc2VnbWVudHMuZm9yRWFjaChmdW5jdGlvbiAoc2VnbWVudCkge1xuICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gdXRpbHMudXBwZXJjYXNlKHNlZ21lbnRbMF0pICsgc2VnbWVudC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgc3dpdGNoIChyb2xlSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlKHJvbGVJZCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbmFtZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuY29uc3RydWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcblxuICAgICAgICAvLyBleHRlbmRzIGNsYXNzXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5leHRlbmRzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3RvciwgY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gJ2V4dGVuZHMnICYmIGtleSAhPT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgbWV0YWRhdGEgdG8gcHJvdG90eXBlXG4gICAgICAgIG1ldGFkYXRhLmtleSA9IG5hbWU7XG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIG1ha2VDb21wb25lbnQobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBjb21wb25lbnRDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZURpcmVjdGl2ZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGRpcmVjdGl2ZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZGlyZWN0aXZlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRmlsdGVyKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZmlsdGVyQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5maWx0ZXIsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VTZXJ2aWNlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogc2VydmljZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuc2VydmljZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGZhY3RvcnkgPSBuZXcgRmFjdG9yeSgpOyIsIlxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKG1ldGFkYXRhKSB7XG5cbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IobWV0YWRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5cbi8vIG1ldGFkYXRhIGV4YW1wbGVcbi8vIHsga2V5OiAnJywgbmFtZXNwYWNlOiAnJywgZXh0ZW5kczogbnVsbCwgY29uc3RydWN0OiBmbiwgbWV0aG9kczoge30gfVxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChjb250YWluZXJba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250YWluZXJba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBjb250YWluZXJba2V5XS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXJba2V5XS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5maWx0ZXIsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmNvbXBvbmVudCwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzRmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5zZXJ2aWNlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzIGNvbnN0cnVjdG9yIGZvciBrZXkgJyArIGtleU9yQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgY29udGFpbmVyID0gdGhpcy5nZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlcy5zZXJ2aWNlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcGFyc2VGdWxsTmFtZShuYW1lLCBhbGlhcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge25zOiAnJywga2V5OiAnJ30sXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQua2V5ID0gbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5rZXkgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIHJlc3VsdC5ucyA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcblxuICAgICAgICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc29tZShhbGlhcywgZnVuY3Rpb24gKHNob3J0TmFtZSwgZnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3J0TmFtZSA9PT0gcmVzdWx0Lm5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubnMgPSBmdWxsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlLCBtZXRhZGF0YSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG1ldGFkYXRhICYmIHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLmluamVjdCkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAoc2VydmljZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZXJ2aWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWRlbnRpZmllciA9IHNlbGYucGFyc2VGdWxsTmFtZShzZXJ2aWNlLCBtZXRhZGF0YS5hbGlhcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShzZXJ2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTsiLCJleHBvcnQgdmFyIHJvbGVzID0ge1xuICAgIGZpbHRlcjogMCxcbiAgICBzZXJ2aWNlOiAxLFxuICAgIGNvbXBvbmVudDogMixcbiAgICBkaXJlY3RpdmU6IDNcbn07IiwiZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xuXG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihtZXRhZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfVxufSIsImltcG9ydCB7IGZhY3RvcnkgfSBmcm9tICcuL2ZhY3RvcnknO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShuYW1lKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tcG9uZW50OiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNlcnZpY2U6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXI6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIG1ldGFkYXRhLm5hbWVzcGFjZSA9IG5hbWU7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ3Jvb3QnLCBjb25maWcsIHtcbiAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfSk7XG4gICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuICAgIFxuICAgIGRvbS5jbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsZW1lbnQpO1xuICAgIHJvb3QuJHJlbmRlcigpO1xuICAgIHJvb3QuJG1vdW50KGVsZW1lbnQpO1xufVxuXG5leHBvcnQge1xuICAgIENvbXBvbmVudCxcbiAgICBEaXJlY3RpdmUsXG4gICAgRmlsdGVyLFxuICAgIFNlcnZpY2UsXG4gICAgaXNDb21wb25lbnQsXG4gICAgaXNEaXJlY3RpdmUsXG4gICAgaXNGaWx0ZXIsXG4gICAgaXNTZXJ2aWNlLFxuICAgIG5hbWVzcGFjZSxcbiAgICByZW5kZXIsXG4gICAgaW5qZWN0b3Jcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==