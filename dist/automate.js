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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
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
        this.$$mainView = new _render__WEBPACK_IMPORTED_MODULE_2__["Renderer"](this.$$parent).render(template);
      }
    }
  }]);

  return SlotComponent;
}(_view__WEBPACK_IMPORTED_MODULE_0__["Component"])) || _class);

/***/ }),

/***/ "./src/core/api.js":
/*!*************************!*\
  !*** ./src/core/api.js ***!
  \*************************/
/*! exports provided: isMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return isMessage; });
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./message */ "./src/core/message.js");

function isMessage(obj) {
  return obj instanceof _message__WEBPACK_IMPORTED_MODULE_0__["Message"];
}

/***/ }),

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
 // global events

var events = {
  propertyChanged: new _message__WEBPACK_IMPORTED_MODULE_0__["Message"](),
  translateChanged: new _message__WEBPACK_IMPORTED_MODULE_0__["Message"]()
};

/***/ }),

/***/ "./src/core/index.js":
/*!***************************!*\
  !*** ./src/core/index.js ***!
  \***************************/
/*! exports provided: Local, Message, events, isMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _local__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./local */ "./src/core/local.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Local", function() { return _local__WEBPACK_IMPORTED_MODULE_0__["Local"]; });

/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message */ "./src/core/message.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _message__WEBPACK_IMPORTED_MODULE_1__["Message"]; });

/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events */ "./src/core/events.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _events__WEBPACK_IMPORTED_MODULE_2__["events"]; });

/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api */ "./src/core/api.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return _api__WEBPACK_IMPORTED_MODULE_3__["isMessage"]; });






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

/***/ "./src/core/message.js":
/*!*****************************!*\
  !*** ./src/core/message.js ***!
  \*****************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
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
      var _this = this;

      var index = this.handlers.indexOf(fn); // not found

      if (index === -1) {
        this.handlers.push(fn);
      } else {
        throw new Error('can not register same event handler more than once');
      }

      return function () {
        return _this.off(fn);
      };
    }
  }, {
    key: "off",
    value: function off(fn) {
      var index = this.handlers.indexOf(fn);

      if (index !== -1) {
        this.handlers.splice(index, 1);
      }
    }
  }, {
    key: "fire",
    value: function fire(data, scope) {
      var _this2 = this;

      scope = scope || this; // attach event data

      this.data = data || {};
      this.handlers.forEach(function (handler) {
        return handler.call(scope, _this2);
      });
    }
  }]);

  return Message;
}();

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
    _this.itemViews = new Map();
    _this.unwatchCollection = null;
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
      this.unwatchCollection = scope.$watchCollection(this.itemsExp, function () {
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
      var itemViews = new Map();
      _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (item, key) {
        var itemView = self.getViewFromBuffer(self.itemViews, item);

        if (!itemView) {
          var locals = {};
          locals['$key'] = key;
          locals['$index'] = key;
          locals[self.itemExp] = item;
          itemView = self.$render(self.itemTemplate, locals);
        }

        self.setViewToBuffer(itemViews, item, itemView);
        fragment.appendChild(itemView.content);
      });
      this.itemViews.forEach(function (list) {
        list.forEach(function (view) {
          view.destroy();
        });
      });
      this.itemViews = itemViews;
      return fragment;
    }
  }, {
    key: "getViewFromBuffer",
    value: function getViewFromBuffer(buffer, dataItem) {
      var view;

      if (buffer.has(dataItem)) {
        var list = buffer.get(dataItem);

        if (list.length) {
          view = list.shift();
        } else {
          buffer["delete"](dataItem);
        }
      }

      return view;
    }
  }, {
    key: "setViewToBuffer",
    value: function setViewToBuffer(buffer, dataItem, view) {
      var list;

      if (buffer.has(dataItem)) {
        list = buffer.get(dataItem);
      } else {
        list = [];
        buffer.set(dataItem, list);
      }

      list.push(view);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.itemViews.forEach(function (list) {
        return list.forEach(function (view) {
          return view.destroy();
        });
      });
      this.unwatchCollection && this.unwatchCollection();
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
      var index = this.$eval('$index');
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
      var index = this.$eval('$index');
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
        _dom__WEBPACK_IMPORTED_MODULE_2__["removeClass"](this.$element, oldClass.join(' '));
      }

      if (newClass) {
        _dom__WEBPACK_IMPORTED_MODULE_2__["addClass"](this.$element, newClass.join(' '));
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
      var index = this.$eval('$index');
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
      var index = this.$eval('$index');
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
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model */ "./src/exp/model/index.js");
/* harmony import */ var _exp_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exp-api */ "./src/exp/exp-api.js");
/* harmony import */ var _exp_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp-builder */ "./src/exp/exp-builder.js");
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
  function Analyser(parser) {
    _classCallCheck(this, Analyser);

    this.parser = parser || {
      parseExpression: _exp_api__WEBPACK_IMPORTED_MODULE_1__["parseExp"]
    };
    this.program = null;
    this.accessor = {};
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_2__["ExpBuilder"]();
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
    key: "analyse",
    value: function analyse(exp) {
      var program = this.parser.parseExpression(exp);
      return this.analyseProgram(program);
    }
  }, {
    key: "analyseProgram",
    value: function analyseProgram(program) {
      var _this = this;

      this.accessor = {};
      this.program = program;
      program.childNodes.forEach(function (child) {
        return _this.analyseNode(child);
      });
      return this.accessor;
    }
  }, {
    key: "analyseNode",
    value: function analyseNode(node, context) {
      var result = null;

      switch (node.type) {
        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].ExpressionStatement:
          this.analyseExpression(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].AssignmentExpression:
          this.analyseAssignment(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].ConditionalExpression:
          this.analyseCondition(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].LogicalExpression:
          this.analyseLogic(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].BinaryExpression:
          this.analyseBinary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].UnaryExpression:
          this.analyseUnary(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].CallExpression:
          this.analyseCall(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].MemberExpression:
          result = this.analyseMember(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].Identifier:
          result = this.analyseIdentifier(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].Literal:
          result = this.analyseLiteral(node, context);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].ArrayExpression:
          this.analyseArray(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].Property:
          this.analyseProperty(node);
          break;

        case _model__WEBPACK_IMPORTED_MODULE_0__["AST"].ObjectExpression:
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
        return _this2.analyseNode(child);
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
        return _this3.analyseNode(arg);
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

        if (member.property.type === _model__WEBPACK_IMPORTED_MODULE_0__["AST"].Literal) {
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
        return _this4.analyseNode(item);
      });
    }
  }, {
    key: "analyseArray",
    value: function analyseArray(arr) {
      var _this5 = this;

      arr.childNodes.forEach(function (child) {
        return _this5.analyse(child);
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
/* harmony import */ var _exp_builder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exp-builder */ "./src/exp/exp-builder.js");
/* harmony import */ var _exp_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exp-api */ "./src/exp/exp-api.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var defaultOptions = {
  allowNull: false,
  assignInterceptor: null,
  locals: null
};
var Evaluator = /*#__PURE__*/function () {
  function Evaluator(scope, options) {
    _classCallCheck(this, Evaluator);

    this.scope = scope;
    this.options = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](defaultOptions, options);
    this.program = null;
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_2__["ExpBuilder"]();
    this.parser = scope.$parser || {
      parseExpression: _exp_api__WEBPACK_IMPORTED_MODULE_3__["parseExp"]
    };
  } // get value from expression


  _createClass(Evaluator, [{
    key: "evaluate",
    value: function evaluate(exp) {
      var program = this.parser.parseExpression(exp);
      return this.evaluateProgram(program);
    }
  }, {
    key: "evaluateProgram",
    value: function evaluateProgram(program) {
      var _this = this;

      var result;
      this.program = program;
      this.program.childNodes.forEach(function (child) {
        return result = _this.evaluateNode(child);
      });

      if (result && result.$null) {
        result = null;
      }

      return result;
    } // set value to expression

  }, {
    key: "assign",
    value: function assign(exp, value) {
      var program = this.parser.parseExpression(exp);
      return this.assignProgram(program, value);
    }
  }, {
    key: "assignProgram",
    value: function assignProgram(program, value) {
      this.program = program;

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
        return result = _this2.evaluateNode(child);
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
        var filter = this.parser.resolveFilter(context.prop);

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

      if (result == null && this.options.locals) {
        result = this.options.locals[identifier.name];
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
          res += ':' + argValues.join(':');
        }
      } else {
        res = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}({1})', fn, argValues.join(', '));
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
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{{0}}', props.join(', '));
    }
  }, {
    key: "buildArray",
    value: function buildArray(arr) {
      var _this4 = this;

      var items = arr.childNodes.map(function (child) {
        return _this4.build(child);
      });
      return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('[{0}]', items.join(','));
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
/*! exports provided: isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isFormData, toNumber, lowercase, uppercase, convertToHumpName, convertFromHumpName, copy, extend, merge, forEach, some, remove, concat, orderBy, orderByDescending, object, inherit, hasProperty, getProperty, setProperty, format, escapeHtml, Local, Message, events, isMessage, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, render, injector, component, directive, filter, service, ClassDirective, StyleDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/utils.js");
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["isFormData"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["toNumber"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["lowercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["uppercase"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertToHumpName", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "convertFromHumpName", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["convertFromHumpName"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["copy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["extend"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["merge"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["forEach"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "some", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["some"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["remove"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["concat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["orderByDescending"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "object", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["object"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return _utils__WEBPACK_IMPORTED_MODULE_0__["escapeHtml"]; });

/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core */ "./src/core/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Local", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Local"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["Message"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "events", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["events"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isMessage", function() { return _core__WEBPACK_IMPORTED_MODULE_1__["isMessage"]; });

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
    this.analyser = new _exp__WEBPACK_IMPORTED_MODULE_1__["Analyser"](scope.$parser);
    this.delayer = new _delayer__WEBPACK_IMPORTED_MODULE_3__["Delayer"](this.notify, 16);
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
      var evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, {
        allowNull: true,
        locals: locals
      });
      var listener = this.createListener(exp, handler, evaluator.evaluate(exp));

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
            key = evaluator.evaluate(key);
          }

          if (values === self.scope && locals && locals[key]) {
            values = locals;
          }

          item.unwatch = self.watcher.watch(values, key, function (args) {
            unwatchAccessors(item.children);
            watchAccessors(item.children, args.data.newValue);
            self.notifyChange(listener, evaluator.evaluate(exp));
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
          evaluator = new _exp__WEBPACK_IMPORTED_MODULE_1__["Evaluator"](this.scope, {
        allowNull: true,
        locals: locals
      });
      var unwatchProps = watchProps();
      var unwatchExp = this.watch(exp, function () {
        if (unwatchProps != null) {
          unwatchProps.call(_this2);
        }

        unwatchProps = watchProps();
        handler.apply(_this2, _arguments);
      }, locals);
      var listener = this.createListener(exp, handler, evaluator.evaluate(exp));

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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var isProxySymbol = Symbol('__isProxy'),
    targetSymbol = Symbol('__target');
var handler = {
  get: getProxy,
  set: setProxy
}; // extends object prototype, add function toProxy
// Object.prototype.toProxy = function () {
//     return isProxy(this) ? this : new Proxy(this, handler);
// };

function isProxy(proxy) {
  return _utils__WEBPACK_IMPORTED_MODULE_1__["isObject"](proxy) && proxy[isProxySymbol];
}

function getTarget(proxy) {
  return isProxy(proxy) ? proxy[targetSymbol] : proxy;
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
    target[key] = makeProxy(value);
    _core__WEBPACK_IMPORTED_MODULE_0__["events"].propertyChanged.fire({
      target: target,
      key: key,
      data: {
        oldValue: oldValue,
        newValue: newValue
      }
    });
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
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

    this.listeners = [];
    this.offPropertyChanged = _core__WEBPACK_IMPORTED_MODULE_0__["events"].propertyChanged.on(function (e) {
      return _this.handlePropertyChanged(e.data);
    });
  }

  _createClass(Watcher, [{
    key: "handlePropertyChanged",
    value: function handlePropertyChanged(data) {
      var listener = this.getListener(this.listeners, data.target);

      if (listener != null) {
        listener.fireKey(data.key, data);
        listener.fireKey('*', data);
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
    key: "destroy",
    value: function destroy() {
      this.listeners.length = 0;
      this.offPropertyChanged();
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
    key: "destroy",
    value: function destroy() {
      this.expressions.forEach(function (exp) {
        exp.destroy();
      });
    }
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
    this.program = null;
    this.unwatch = null;
    this.hasTranslation = false;
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
      this.unwatch = scope.$watch(this.text, handler, locals);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      if (this.unwatch != null) {
        this.unwatch();
      }
    }
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
/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./view */ "./src/render/view.js");
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
  _createClass(Renderer, [{
    key: "injector",
    get: function get() {
      return this.scope.$injector;
    }
  }]);

  function Renderer(scope, locals) {
    _classCallCheck(this, Renderer);

    this.scope = scope;
    this.locals = locals;
    this.parser = scope.$parser;
    this.view = null;
  }

  _createClass(Renderer, [{
    key: "newBinding",
    value: function newBinding(text) {
      var binding = new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, this.locals);
      this.view.bindings.push(binding);
      return binding;
    }
  }, {
    key: "newComponent",
    value: function newComponent(cls) {
      var child = this.injector.createComponent(cls);
      this.scope.$appendChild(child);
      this.view.components.push(child);
      return child;
    }
  }, {
    key: "newDirective",
    value: function newDirective(cls) {
      var directive = this.injector.createDirective(cls);
      directive.$$scope = this.scope;
      return directive;
    }
  }, {
    key: "recognizeComponent",
    value: function recognizeComponent(velm) {
      var component = this.parser.resolveComponent(velm.nodeName); // velm.nodeData.identifier = identifier;

      return component;
    }
  }, {
    key: "recognizeDirective",
    value: function recognizeDirective(vattr) {
      var directive = this.parser.resolveDirective(vattr.nodeData.name); // vattr.nodeData.identifier = identifier;

      return directive;
    }
  }, {
    key: "render",
    value: function render(template) {
      var _this = this;

      // must set a root element for directive life cycle "afterLink" hoops
      var container = document.createDocumentFragment();
      this.view = new _view__WEBPACK_IMPORTED_MODULE_6__["View"]();
      this.view.vnodes = this.parser.parseTemplate(template);
      this.compileNodes(this.view.vnodes); // this.entity.directives.forEach(directive => directive.$prelink());

      this.linkNodes(this.view.vnodes).forEach(function (node) {
        return container.appendChild(node);
      }); // call directive life cycle hoops

      this.view.directives.forEach(function (directive) {
        return directive.$postlink();
      }); // cache the generated elements

      _dom__WEBPACK_IMPORTED_MODULE_1__["getChildrenOfElement"](container).forEach(function (node) {
        return _this.view.nodes.push(node);
      });
      return this.view;
    }
  }, {
    key: "compileNodes",
    value: function compileNodes(vnodes) {
      var _this2 = this;

      vnodes.forEach(function (vnode) {
        return _this2.compileNode(vnode);
      });
    }
  }, {
    key: "compileNode",
    value: function compileNode(vnode) {
      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVText"])(vnode)) {
        this.compileText(vnode);
      } else if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVComment"])(vnode)) {
        this.compileComment(vnode);
      } else {
        this.compileElm(vnode);
      }
    }
  }, {
    key: "linkNodes",
    value: function linkNodes(vnodes) {
      var _this3 = this;

      return vnodes.map(function (vnode) {
        return _this3.linkNode(vnode);
      });
    }
  }, {
    key: "linkNode",
    value: function linkNode(vnode) {
      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVText"])(vnode)) {
        return this.linkText(vnode);
      }

      if (Object(_tpl__WEBPACK_IMPORTED_MODULE_2__["isVComment"])(vnode)) {
        return this.linkComment(vnode);
      }

      return this.linkElm(vnode);
    }
  }, {
    key: "compileElm",
    value: function compileElm(velm) {
      var _this4 = this;

      var elmData = velm.nodeData;
      elmData.component = this.recognizeComponent(velm);
      var directives = [];
      var customLinker = velm.vattrs.some(function (vattr) {
        var attrData = vattr.nodeData;

        _this4.compileAttr(vattr);

        if (attrData.directive != null) {
          directives.push(attrData.directive);
          elmData.linker = attrData.linker;
          return elmData.linker != null;
        }

        return false;
      }); // sort directive according to its priority

      _utils__WEBPACK_IMPORTED_MODULE_0__["orderBy"](directives, function (directive) {
        return directive.$priority;
      }).forEach(function (directive) {
        return _this4.view.directives.push(directive);
      });
      elmData.directives = directives; // directive defines custom linker for this virtual node, render engine will not render it according to default behavior

      if (customLinker) {
        return;
      }

      if (elmData.component) {
        elmData.slots = this.seekSlot(velm);
      } else {
        this.compileNodes(velm.childNodes);
      }
    }
  }, {
    key: "compileAttr",
    value: function compileAttr(vattr) {
      var attrName = vattr.nodeName,
          attrValue = vattr.nodeValue,
          attrData = vattr.nodeData,
          binding;

      if (attrValue != null) {
        binding = this.newBinding(attrValue);
        attrData.binding = binding;
      }

      if (attrName.startsWith('@')) {
        attrData.isEvent = true;
        attrData.name = attrName.substr(1);
        attrData.isDomEvent = _utils__WEBPACK_IMPORTED_MODULE_0__["some"](domEvents, function (e) {
          return e === attrData.name;
        });
        binding && (binding.logical = true);
      } else if (attrName.startsWith(':')) {
        attrData.name = attrName.substr(1);
        binding && (binding.isExp = true);
      } else if (attrName.startsWith('*')) {
        attrData.directive = true;
        attrData.name = attrName.substr(1);
        binding && (binding.isExp = true);
      } else {
        attrData.name = attrName;
      }

      if (attrData.directive) {
        var directive = this.recognizeDirective(vattr);

        if (directive) {
          attrData.directive = this.newDirective(directive);
          attrData.directive.$$vattr = vattr;

          if (binding != null) {
            binding.assignment = attrData.directive.$assignment;
          }

          if (attrData.directive.$compile()) {
            attrData.linker = attrData.directive;
            return;
          }
        } else {
          throw new Error('directive ' + attrData.name + ' is not defined');
        }
      }

      if (binding == null) {
        return;
      }

      if (!(attrData.isEvent || attrData.directive)) {
        var setHtmlAttr = function setHtmlAttr(value) {
          var elm = vattr.velm.elm;

          if (attrData.name.startsWith('style')) {
            _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](elm, attrData.name, value);
          } else {
            elm.setAttribute(attrData.name, value);
          }
        };

        if (vattr.velm.nodeData.component) {
          binding.registerAutomation(function (value) {
            var component = vattr.velm.nodeData.component;
            var propertyName = _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"](attrData.name, '-');

            if (component.$hasProperty(propertyName)) {
              component.$setProperty(propertyName, value);
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
    value: function compileText(vtext) {
      vtext.nodeData.binding = this.newBinding(vtext.nodeValue);
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
      var _this5 = this;

      var elmData = velm.nodeData;

      if (elmData.linker != null) {
        return elmData.linker.$link();
      }

      velm.elm = document.createElement(velm.nodeName);

      if (elmData.component) {
        var instance = this.newComponent(elmData.component);
        elmData.component = instance;
        _dom__WEBPACK_IMPORTED_MODULE_1__["addClass"](velm.elm, _css__WEBPACK_IMPORTED_MODULE_5__["M_CMP_CLASS"]);
        velm.vattrs.forEach(function (vattr) {
          return _this5.linkAttr(vattr);
        });
        instance.$$velm = velm;
        instance.$setSlot(elmData.slots);
        instance.$render();
        instance.$mount(velm.elm);
      } else {
        velm.vattrs.forEach(function (vattr) {
          return _this5.linkAttr(vattr);
        });
        velm.childNodes.forEach(function (child) {
          return velm.elm.appendChild(_this5.linkNode(child));
        });
      }

      return velm.elm;
    }
  }, {
    key: "linkAttr",
    value: function linkAttr(vattr) {
      var velm = vattr.velm,
          elm = velm.elm,
          attrData = vattr.nodeData,
          binding = attrData.binding;

      if (binding == null) {
        return;
      }

      if (attrData.isEvent) {
        if (attrData.isDomEvent) {
          elm.addEventListener(attrData.name, function (e) {
            return binding.compute(new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm));
          });
        } else if (velm.nodeData.component) {
          var eventName = _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"](attrData.name, '-');
          velm.nodeData.component.$bind(eventName, function (e) {
            return binding.compute(new _core__WEBPACK_IMPORTED_MODULE_3__["Local"](e, elm));
          });
        }
      } else {
        binding.link();
        binding.patch();
      } // register binding change handler after first patch


      if (attrData.directive) {
        binding.registerAutomation(function (newValue, oldValue) {
          return attrData.directive.$change(newValue, oldValue);
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
  }]);

  return Renderer;
}();

/***/ }),

/***/ "./src/render/view.js":
/*!****************************!*\
  !*** ./src/render/view.js ***!
  \****************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var View = /*#__PURE__*/function () {
  _createClass(View, [{
    key: "content",
    get: function get() {
      var content = document.createDocumentFragment();
      this.nodes.forEach(function (node) {
        return content.appendChild(node);
      });
      return content;
    }
  }]);

  function View() {
    _classCallCheck(this, View);

    this.nodes = [];
    this.vnodes = [];
    this.bindings = [];
    this.directives = [];
    this.components = [];
  }

  _createClass(View, [{
    key: "mount",
    value: function mount(selectorOrElement) {
      var element;

      if (_utils__WEBPACK_IMPORTED_MODULE_0__["isString"](selectorOrElement)) {
        element = document.querySelector(selectorOrElement);
      } else {
        element = selectorOrElement;
      }

      element.appendChild(this.content);
    } // bindTranslateChanged() {
    //     var bindings = this.entity.bindings;
    //
    //     if(!bindings.length) {
    //         return;
    //     }
    //
    //     // update text while translate changed
    //     this.unbindTranslateChanged = events.translateChanged.on(() => {
    //         bindings.forEach(binding => {
    //             binding.detect();
    //             binding.patch();
    //         });
    //     });
    // }

  }, {
    key: "destroy",
    value: function destroy() {
      this.components.forEach(function (item) {
        return item.$destroy();
      });
      this.directives.forEach(function (item) {
        return item.$destroy();
      });
      this.bindings.forEach(function (item) {
        return item.destroy();
      });
      this.vnodes.forEach(function (item) {
        return item.destroy();
      });
      this.components.length = 0;
      this.directives.length = 0;
      this.bindings.length = 0;
      this.vnodes.length = 0;
      this.nodes.length = 0;
    }
  }]);

  return View;
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
/*! exports provided: isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isFormData, toNumber, lowercase, uppercase, convertToHumpName, convertFromHumpName, copy, extend, merge, forEach, some, remove, concat, orderBy, orderByDescending, object, inherit, hasProperty, getProperty, setProperty, format, escapeHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFormData", function() { return isFormData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toNumber", function() { return toNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lowercase", function() { return lowercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uppercase", function() { return uppercase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertToHumpName", function() { return convertToHumpName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "convertFromHumpName", function() { return convertFromHumpName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forEach", function() { return forEach; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "some", function() { return some; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "remove", function() { return remove; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "concat", function() { return concat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderBy", function() { return orderBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "orderByDescending", function() { return orderByDescending; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "object", function() { return object; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasProperty", function() { return hasProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProperty", function() { return getProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setProperty", function() { return setProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "escapeHtml", function() { return escapeHtml; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var toString = Object.prototype.toString,
    getPrototypeOf = Object.getPrototypeOf; // is

function isUndefined(value) {
  return typeof value === 'undefined';
}

function isDefined(value) {
  return typeof value !== 'undefined';
}

function isArray(value) {
  return value instanceof Array;
}

function isMap(value) {
  return value instanceof Map;
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
} // end of is
// value


function toNumber(value) {
  var n = parseFloat(value);
  return isNaN(n) ? value : n;
}

function lowercase(string) {
  return isString(string) ? string.toLowerCase() : string;
}

function uppercase(string) {
  return isString(string) ? string.toUpperCase() : string;
}

function convertToHumpName(name, separator) {
  return name.split(separator).map(function (value, index) {
    if (index === 0) {
      return value;
    }

    if (value.length === 1) {
      return value.toUpperCase();
    }

    return value.charAt(0).toUpperCase() + value.substring(1);
  }).join('');
}

function convertFromHumpName(name, separator) {
  var i = 0,
      newName = '',
      _char;

  while (i < name.length) {
    _char = name[i];

    if (i !== 0 && /[A-Z]/.test(_char)) {
      newName += separator;
      newName += _char.toLowerCase();
    } else {
      newName += _char;
    }
  }

  return newName;
} // end if value
// object


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
} // end of object
// iterator


function forEach(target, action) {
  if (isArray(target)) {
    target.forEach(action);
  } else if (isObject(target)) {
    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        action(target[key], key);
      }
    }
  }
}

function some(target, func) {
  if (isArray(target)) {
    return target.some(func);
  }

  if (isObject(target)) {
    for (var key in target) {
      if (target.hasOwnProperty(key)) {
        if (func(target[key], key)) {
          return true;
        }
      }
    }
  }
} // end of iterator
// array


function orderBy(list, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return list.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return -1;
    }

    if (getValue(a) > getValue(b)) {
      return 1;
    }

    return 0;
  });
}

function orderByDescending(list, getter) {
  var getValue = function getValue(item) {
    if (getter == null) {
      return item;
    }

    return getter(item);
  };

  return list.sort(function (a, b) {
    if (getValue(a) < getValue(b)) {
      return 1;
    }

    if (getValue(a) > getValue(b)) {
      return -1;
    }

    return 0;
  });
}

function concat() {
  return Array.prototype.concat.apply([], arguments);
}

function remove(list, value) {
  var index = list.indexOf(value);

  if (index !== -1) {
    return list.splice(index, 1);
  }
} // end of array


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

function hasProperty(target, property) {
  var key,
      keys = property.split('.');

  while (keys.length > 1) {
    if (!isObject(target)) {
      return false;
    }

    key = keys.shift();
    target = target[key];
  }

  return isObject(target) && target.hasOwnProperty(keys.shift());
}

function getProperty(target, property) {
  var key,
      keys = property.split('.');

  while (keys.length > 0) {
    if (!isObject(target)) {
      return;
    }

    key = keys.shift();
    target = target[key];
  }

  return target;
}

function setProperty(target, property, value) {
  var key,
      keys = property.split('.');

  while (keys.length > 1) {
    if (!isObject(target)) {
      return;
    }

    key = keys.shift();
    target = target[key];
  }

  if (isObject(target)) {
    key = keys.shift();
    target[key] = value;
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
/* harmony import */ var _parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./parser */ "./src/view/parser.js");
/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../observer */ "./src/observer/index.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








function componentConstructor(data) {
  this.$$velm = null;
  this.$$parent = null;
  this.$$children = [];
  this.$$mainView = null;
  this.$parser = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"](this);
  this.$observer = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](this);
  this.slots = {};
  this.events = {};
  this.props = this.$delegate({});
  this.state = this.$delegate({});
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  _injector__WEBPACK_IMPORTED_MODULE_5__["injector"].injectServices(this, this.$data);
}
var Component = /*#__PURE__*/function () {
  _createClass(Component, [{
    key: "$delegate",
    value: function $delegate(target) {
      return new Proxy(target, _observer__WEBPACK_IMPORTED_MODULE_3__["handler"]);
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
  }, {
    key: "$injector",
    get: function get() {
      return _injector__WEBPACK_IMPORTED_MODULE_5__["injector"];
    }
  }]);

  function Component(data) {
    _classCallCheck(this, Component);

    componentConstructor.call(this, data);
  }

  _createClass(Component, [{
    key: "$hasProperty",
    value: function $hasProperty(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this.props, key);
    }
  }, {
    key: "$getProperty",
    value: function $getProperty(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.props, key);
    }
  }, {
    key: "$setProperty",
    value: function $setProperty(key, value) {
      var oldValue = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.props, key);

      if (oldValue !== value) {
        _utils__WEBPACK_IMPORTED_MODULE_0__["setProperty"](this.props, key, value);
      }
    }
  }, {
    key: "$hasMessage",
    value: function $hasMessage(key) {
      return _utils__WEBPACK_IMPORTED_MODULE_0__["hasProperty"](this.events, key);
    }
  }, {
    key: "$bind",
    value: function $bind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.on(handler);
      } else {
        throw new Error(_utils__WEBPACK_IMPORTED_MODULE_0__["format"]('"{0}" is not a valid event', key));
      }
    }
  }, {
    key: "$unbind",
    value: function $unbind(key, handler) {
      var message = _utils__WEBPACK_IMPORTED_MODULE_0__["getProperty"](this.events, key);

      if (Object(_core__WEBPACK_IMPORTED_MODULE_1__["isMessage"])(message)) {
        message.off(handler);
      }
    }
  }, {
    key: "$watch",
    value: function $watch(exp, handler, locals) {
      return this.$observer.watch(exp, handler, locals);
    }
  }, {
    key: "$watchCollection",
    value: function $watchCollection(exp, handler, locals) {
      return this.$observer.watchCollection(exp, handler, locals);
    }
  }, {
    key: "$eval",
    value: function $eval(exp, locals) {
      return new _exp__WEBPACK_IMPORTED_MODULE_6__["Evaluator"](this, {
        locals: locals
      }).evaluate(exp);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      return new _exp__WEBPACK_IMPORTED_MODULE_6__["Evaluator"](this, {
        locals: locals
      }).assign(exp, value);
    }
  }, {
    key: "$getTemplate",
    value: function $getTemplate() {
      var data = this.$data;

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
      this.$$mainView = new _render__WEBPACK_IMPORTED_MODULE_4__["Renderer"](this).render(template);
    }
  }, {
    key: "$mount",
    value: function $mount(selectorOrElement) {
      if (this.$$mainView == null) {
        throw new Error('current component is not rendered');
      } else {
        this.$$mainView.mount(selectorOrElement);
      }
    }
  }, {
    key: "$unmount",
    value: function $unmount() {}
  }, {
    key: "$appendChild",
    value: function $appendChild(child) {
      this.$$children.push(child);
      child.$$parent = this;
    }
  }, {
    key: "$removeChild",
    value: function $removeChild(child) {
      var index = this.$$children.indexOf(child);

      if (index !== -1) {
        this.$$children.splice(index, 1);
        child.$$parent = null;
      }
    }
  }, {
    key: "$destroy",
    value: function $destroy() {
      this.$observer.destroy();

      if (this.$$mainView != null) {
        this.$$mainView.destroy();
      }

      this.onDestroy && this.onDestroy();

      if (this.$$parent != null) {
        this.$$parent.$removeChild(this);
      }
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css */ "./src/css.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






function directiveConstructor(data) {
  this.$$scope = null;
  this.$$vattr = null;
  this.$priority = 9; // binding text is a assignment

  this.$assignment = false;
  this.$placeholder = null;
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_1__["merge"](this.$$metadata, data);
  _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].injectServices(this, this.$data);
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
      return this.$$scope.$renderer;
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

  function Directive(data) {
    _classCallCheck(this, Directive);

    directiveConstructor.call(this, data);
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
        _dom__WEBPACK_IMPORTED_MODULE_0__["addClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_2__["M_HIDE_CLASS"]);
      } else {
        _dom__WEBPACK_IMPORTED_MODULE_0__["removeClass"](this.$element, _css__WEBPACK_IMPORTED_MODULE_2__["M_HIDE_CLASS"]);
      }
    }
  }, {
    key: "$eval",
    value: function $eval(exp, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_1__["merge"](this.$binding.locals, locals);
      return this.$scope.$eval(exp, locals);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_1__["merge"](this.$binding.locals, locals);
      return this.$scope.$assign(exp, value);
    }
  }, {
    key: "$render",
    value: function $render(template, locals) {
      return new _render__WEBPACK_IMPORTED_MODULE_4__["Renderer"](this.$scope, locals).render(template);
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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function filterConstructor(data) {
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this, this.$data);
}
var Filter = function Filter(data) {
  _classCallCheck(this, Filter);

  filterConstructor.call(this, data);
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
    this.serviceStack = [];
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
    value: function injectServices(instance, metadata, checkLoopDependency) {
      var self = this,
          serviceFullName,
          hasLoopDependency = false;

      if (checkLoopDependency) {
        // creating a service instance at the moment
        serviceFullName = _utils__WEBPACK_IMPORTED_MODULE_0__["format"]('{0}.{1}', metadata.namespace, metadata.key);
        hasLoopDependency = this.serviceStack.indexOf(serviceFullName) !== -1;
        this.serviceStack.push(serviceFullName);

        if (hasLoopDependency) {
          // clear service dependency stack
          this.serviceStack.length = 0; // occurs loop dependency

          throw new Error("Loop dependency: " + this.serviceStack.join('->'));
        }
      }

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

      if (checkLoopDependency) {
        this.serviceStack.pop();
      }
    }
  }]);

  return Injector;
}();
var injector = new Injector();

/***/ }),

/***/ "./src/view/parser.js":
/*!****************************!*\
  !*** ./src/view/parser.js ***!
  \****************************/
/*! exports provided: Parser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony import */ var _exp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../exp */ "./src/exp/index.js");
/* harmony import */ var _tpl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tpl */ "./src/tpl/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Parser = /*#__PURE__*/function () {
  _createClass(Parser, [{
    key: "injector",
    get: function get() {
      return this.scope.$injector;
    }
  }, {
    key: "nsAlias",
    get: function get() {
      return this.scope.$data.alias;
    }
  }]);

  function Parser(scope) {
    _classCallCheck(this, Parser);

    this.scope = scope;
    this.programs = {};
    this.type = {
      components: {},
      directives: {}
    };
    this.filters = {};
  }

  _createClass(Parser, [{
    key: "parseExpression",
    value: function parseExpression(exp) {
      var program = this.programs[exp];

      if (!program) {
        program = Object(_exp__WEBPACK_IMPORTED_MODULE_0__["parseExp"])(exp);
        this.programs[exp] = program;
      }

      return program;
    }
  }, {
    key: "parseTemplate",
    value: function parseTemplate(tpl) {
      return Object(_tpl__WEBPACK_IMPORTED_MODULE_1__["parseTpl"])(tpl);
    }
  }, {
    key: "resolveComponent",
    value: function resolveComponent(name) {
      var identifier,
          component,
          buffer = this.type.components;

      if (buffer[name] !== undefined) {
        component = buffer[name];
      } else {
        identifier = this.injector.parseFullName(name, this.nsAlias);
        component = this.injector.getComponent(identifier.key, identifier.ns);
        buffer[name] = component;
      }

      return component;
    }
  }, {
    key: "resolveDirective",
    value: function resolveDirective(name) {
      var identifier,
          directive,
          buffer = this.type.directives;

      if (buffer[name] !== undefined) {
        directive = buffer[name];
      } else {
        identifier = this.injector.parseFullName(name, this.nsAlias);
        directive = this.injector.getDirective(identifier.key, identifier.ns);
        buffer[name] = directive;
      }

      return directive;
    }
  }, {
    key: "resolveFilter",
    value: function resolveFilter(name) {
      var identifier,
          filter,
          buffer = this.filters;

      if (buffer[name] !== undefined) {
        filter = buffer[name];
      } else {
        identifier = this.injector.parseFullName(name, this.nsAlias);
        filter = this.injector.createFilter(identifier.key, identifier.ns);
        buffer[name] = filter;
      }

      return filter;
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.scope = null;
    }
  }]);

  return Parser;
}();

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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



function serviceConstructor(data) {
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this, this.$data, true);
}
var Service = function Service(data) {
  _classCallCheck(this, Service);

  serviceConstructor.call(this, data);
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
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dom */ "./src/dom.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");
/* harmony import */ var _factory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factory */ "./src/view/factory.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "injector", function() { return _injector__WEBPACK_IMPORTED_MODULE_3__["injector"]; });

/* harmony import */ var _component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component */ "./src/view/component.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return _component__WEBPACK_IMPORTED_MODULE_4__["Component"]; });

/* harmony import */ var _directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directive */ "./src/view/directive.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Directive", function() { return _directive__WEBPACK_IMPORTED_MODULE_5__["Directive"]; });

/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filter */ "./src/view/filter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Filter", function() { return _filter__WEBPACK_IMPORTED_MODULE_6__["Filter"]; });

/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./service */ "./src/view/service.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return _service__WEBPACK_IMPORTED_MODULE_7__["Service"]; });










function namespace(name) {
  function mergeMetadata(metadata) {
    return _utils__WEBPACK_IMPORTED_MODULE_1__["merge"]({
      namespace: name
    }, metadata);
  }

  return {
    component: function component(key, config, metadata) {
      return _component(key, config, mergeMetadata(metadata));
    },
    directive: function directive(key, config, metadata) {
      return _directive(key, config, mergeMetadata(metadata));
    },
    service: function service(key, config, metadata) {
      return _service(key, config, mergeMetadata(metadata));
    },
    filter: function filter(key, config, metadata) {
      return _filter(key, config, mergeMetadata(metadata));
    }
  };
}

function _component(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeComponent(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].registerComponent(key, constructor);
  return constructor;
}

function _directive(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeDirective(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].registerDirective(key, constructor);
  return constructor;
}

function _filter(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeFilter(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].registerFilter(key, constructor);
  return constructor;
}

function _service(key, config, metadata) {
  var constructor = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeService(key, config, metadata);
  _injector__WEBPACK_IMPORTED_MODULE_3__["injector"].registerService(key, constructor);
  return constructor;
}

function isComponent(instance) {
  return instance instanceof _component__WEBPACK_IMPORTED_MODULE_4__["Component"];
}

function isDirective(instance) {
  return instance instanceof _directive__WEBPACK_IMPORTED_MODULE_5__["Directive"];
}

function isFilter(instance) {
  return instance instanceof _filter__WEBPACK_IMPORTED_MODULE_6__["Filter"];
}

function isService(instance) {
  return instance instanceof _service__WEBPACK_IMPORTED_MODULE_7__["Service"];
}

function render(selector, config) {
  var element = document.querySelector(selector);
  var Root = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeComponent('root', config, {
    template: element.innerHTML
  });
  var root = new Root();
  _dom__WEBPACK_IMPORTED_MODULE_0__["clearChildrenOfElement"](element);
  root.$render();
  root.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkbWFpblZpZXciLCJSZW5kZXJlciIsInJlbmRlciIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCIkaGlkZUVsZW1lbnQiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIiRyZW1vdmVFbGVtZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImRlc3Ryb3kiLCJidWZmZXIiLCJkYXRhSXRlbSIsImhhcyIsImdldCIsImxlbmd0aCIsInNoaWZ0Iiwic2V0IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsInNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiZmlyZSIsImNoZWNrRGVmYXVsdCIsImdldENoaWxkcmVuT2ZFbGVtZW50IiwiQXJyYXkiLCJzbGljZSIsImNoaWxkTm9kZXMiLCJjbGVhckNoaWxkcmVuT2ZFbGVtZW50IiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbGVtZW50IiwibmV3RWxtIiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZUVsZW1lbnRzQmV0d2VlbiIsInN0YXJ0RWxtIiwiZW5kRWxtIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJhcHBlbmRFbGVtZW50IiwibGFzdENoaWxkIiwiYWRkQ2xhc3MiLCJjbHMiLCJ0cmltIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwYXJzZUV4cHJlc3Npb24iLCJwYXJzZUV4cCIsInByb2dyYW0iLCJhY2Nlc3NvciIsImJ1aWxkZXIiLCJFeHBCdWlsZGVyIiwiYW5hbHlzZVByb2dyYW0iLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwiYXJncyIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImJ1aWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsImRlZmF1bHRPcHRpb25zIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJFdmFsdWF0b3IiLCIkcGFyc2VyIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCJyZXNvbHZlRmlsdGVyIiwiZXhlY3V0ZSIsImFwcGx5IiwiTnVsbEV4cHJlc3Npb25Ob2RlIiwidGFyZ2V0Tm9kZSIsImRlZiIsImxleEV4cCIsIkV4cExleGVyIiwibGV4IiwiRXhwUGFyc2VyIiwicGFyc2UiLCJidWlsZEV4cHJlc3Npb24iLCJidWlsZEFzc2lnbm1lbnQiLCJidWlsZENvbmRpdGlvbiIsImJ1aWxkTG9naWMiLCJidWlsZEJpbmFyeSIsImJ1aWxkVW5hcnkiLCJidWlsZENhbGwiLCJidWlsZE1lbWJlciIsImJ1aWxkSWRlbnRpZmllciIsImJ1aWxkTGl0ZXJhbCIsImJ1aWxkQXJyYXkiLCJidWlsZFByb3BlcnR5IiwiYnVpbGRPYmplY3QiLCJyZXMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInF1b3RlIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiZXNjYXBlIiwiaGV4IiwibWF0Y2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIkVTQ0FQRSIsIm9wZXJhdG9yVGV4dCIsImxleGVyIiwibXNnIiwiUHJvZ3JhbU5vZGUiLCJleHByZXNzaW9uU3RhdGVtZW50IiwiZXhwZWN0IiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJmaWx0ZXJDaGFpbiIsImFzdCIsInRlcm5hcnkiLCJpc0Fzc2lnbmFibGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxBTkQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJsaXRlcmFscyIsImhhc093blByb3BlcnR5IiwiTGl0ZXJhbE5vZGUiLCJuZXh0IiwicGVla0FoZWFkIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwicGFyc2VBcmd1bWVudHMiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiSWRlbnRpZmllck5vZGUiLCJwZWVrVG9rZW4iLCJBcnJheUV4cHJlc3Npb25Ob2RlIiwiUHJvcGVydHlOb2RlIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJlMSIsImUyIiwiZTMiLCJlNCIsInQiLCJBc3ROb2RlIiwiUHJvZ3JhbSIsImtpbmQiLCJwcmVmaXgiLCJ1bmRlZmluZWQiLCJEZWxheWVyIiwidGltZW91dCIsImRlbGF5SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTGlzdGVuZXIiLCJ2YWx1ZUNoYW5nZWQiLCJjb2xsZWN0aW9uQ2hhbmdlZCIsIm9sZFZhbHVlIiwiT2JzZXJ2ZXIiLCJhY2Nlc3NvcnMiLCJsaXN0ZW5lcnMiLCJ3YXRjaGVyIiwiV2F0Y2hlciIsImFuYWx5c2VyIiwiZGVsYXllciIsIm5vdGlmeSIsImhhc0NoYW5nZSIsInNldE5ld1ZhbHVlIiwic2V0Q29sbGVjdGlvbkNoYW5nZWQiLCJnZXRBY2Nlc3NvciIsImV2YWx1YXRvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJub3RpZnlDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwiYXJndW1lbnRzIiwiY29sbGVjdGlvbiIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldFByb3h5IiwiaXNQcm94eSIsInByb3h5IiwiZ2V0VGFyZ2V0IiwibWFrZVByb3h5IiwiUHJveHkiLCJPYmplY3RMaXN0ZW5lciIsImtleXMiLCJnZXRIYW5kbGVycyIsIm9mZlByb3BlcnR5Q2hhbmdlZCIsImhhbmRsZVByb3BlcnR5Q2hhbmdlZCIsImdldExpc3RlbmVyIiwiZmlyZUtleSIsImZpbHRlcnMiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZUxpc3RlbmVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiQmluZGluZyIsImlzRXhwIiwibG9naWNhbCIsImF1dG9tYXRpb24iLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsImhhc1RyYW5zbGF0aW9uIiwiJGFzc2lnbiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIiRpbmplY3RvciIsImJpbmRpbmciLCJiaW5kaW5ncyIsImNyZWF0ZUNvbXBvbmVudCIsIiRhcHBlbmRDaGlsZCIsImNvbXBvbmVudHMiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwicmVzb2x2ZUNvbXBvbmVudCIsIm5vZGVOYW1lIiwicmVzb2x2ZURpcmVjdGl2ZSIsIm5vZGVEYXRhIiwiY29udGFpbmVyIiwiVmlldyIsInZub2RlcyIsInBhcnNlVGVtcGxhdGUiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCJkaXJlY3RpdmVzIiwiJHBvc3RsaW5rIiwibm9kZXMiLCJ2bm9kZSIsImNvbXBpbGVOb2RlIiwiaXNWVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNWQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJlbG1EYXRhIiwicmVjb2duaXplQ29tcG9uZW50IiwiY3VzdG9tTGlua2VyIiwidmF0dHJzIiwic29tZSIsImF0dHJEYXRhIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJzZWVrU2xvdCIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwibmV3QmluZGluZyIsInN0YXJ0c1dpdGgiLCJpc0V2ZW50Iiwic3Vic3RyIiwiaXNEb21FdmVudCIsInJlY29nbml6ZURpcmVjdGl2ZSIsIm5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWdubWVudCIsIiRjb21waWxlIiwic2V0SHRtbEF0dHIiLCJyZWdpc3RlckF1dG9tYXRpb24iLCJwcm9wZXJ0eU5hbWUiLCIkaGFzUHJvcGVydHkiLCJjb21waWxlIiwidnRleHQiLCJuZXdUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJpbnN0YW5jZSIsIm5ld0NvbXBvbmVudCIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHNldFNsb3QiLCIkbW91bnQiLCJldmVudE5hbWUiLCJsaW5rIiwiJGNoYW5nZSIsImlzVkVsbSIsInNsb3QiLCJnZXRBdHRyIiwiZ2V0SW5uZXJUcGwiLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsImNvbnZlcnRGcm9tSHVtcE5hbWUiLCJuZXdOYW1lIiwiY2hhciIsIm9iakluZGV4IiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwiZnVuYyIsIm9yZGVyQnkiLCJnZXR0ZXIiLCJnZXRWYWx1ZSIsInNvcnQiLCJhIiwiYiIsIm9yZGVyQnlEZXNjZW5kaW5nIiwiY29uY2F0IiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImhhc1Byb3BlcnR5IiwiZ2V0UHJvcGVydHkiLCJzZXRQcm9wZXJ0eSIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGNoaWxkcmVuIiwiUGFyc2VyIiwiJG9ic2VydmVyIiwiJGRlbGVnYXRlIiwiJGRhdGEiLCJpbmplY3RTZXJ2aWNlcyIsIm1lc3NhZ2UiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCIkZ2V0VGVtcGxhdGUiLCJtb3VudCIsIiRyZW1vdmVDaGlsZCIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwiJHJlbmRlcmVyIiwib25Db21waWxlIiwib25MaW5rIiwiYWZ0ZXJMaW5rIiwib25DaGFuZ2UiLCIka2V5IiwiJCRzZWFyY2hEaXJlY3RpdmUiLCJ5ZXMiLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJGaWx0ZXIiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsInNlcnZpY2VDbGFzcyIsIlNlcnZpY2UiLCJzZXJ2aWNlQ29uc3RydWN0b3IiLCJGYWN0b3J5Iiwicm9sZUlkIiwicm9sZXMiLCJjb25maWciLCJjb25zdHJ1Y3Rvck5hbWUiLCJyZW5hbWUiLCJvbkNvbnN0cnVjdCIsImNvbnN0cnVjdCIsIkZ1bmN0aW9uIiwibWFrZSIsImZhY3RvcnkiLCJJbmplY3RvciIsImNsYXNzQ29udGFpbmVyIiwiaW5zdGFuY2VDb250YWluZXIiLCJzZXJ2aWNlU3RhY2siLCJnZXRDbGFzc0NvbnRhaW5lciIsInJlZ2lzdGVyIiwiaWdub3JlQ2FzZSIsImNvbnN0cnVjdG9ycyIsIm1ldGEiLCJuYW1lc3BhY2VzIiwia2V5T3JDb25zdHJ1Y3RvciIsImNyZWF0ZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiZ2V0RmlsdGVyIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsImFsaWFzIiwibnMiLCJwb3AiLCJzaG9ydE5hbWUiLCJmdWxsTmFtZSIsImNoZWNrTG9vcERlcGVuZGVuY3kiLCJzZXJ2aWNlRnVsbE5hbWUiLCJoYXNMb29wRGVwZW5kZW5jeSIsImluamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaXZhdGVLZXkiLCJwYXJzZUZ1bGxOYW1lIiwiY3JlYXRlU2VydmljZSIsInByb2dyYW1zIiwibnNBbGlhcyIsImdldENvbXBvbmVudCIsImdldERpcmVjdGl2ZSIsImNyZWF0ZUZpbHRlciIsIm1lcmdlTWV0YWRhdGEiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzQ29tcG9uZW50IiwiaXNEaXJlY3RpdmUiLCJpc0ZpbHRlciIsImlzU2VydmljZSIsIlJvb3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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a1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhdXRvbWF0ZVwiXSA9IGZhY3RvcnkoKTtcbn0pKHdpbmRvdywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgKiBmcm9tICcuL3Nsb3QnOyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBjb21wb25lbnQgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XHJcblxyXG5AY29tcG9uZW50KHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ3Nsb3QnXHJcbn0pXHJcbmNsYXNzIFNsb3RDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzLm5hbWUgPSAnJztcclxuICAgIH1cclxuXHJcbiAgICAkcmVuZGVyKCkge1xyXG4gICAgICAgIHZhciBzbG90cyA9IHRoaXMuJCRwYXJlbnQuc2xvdHM7XHJcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gc2xvdHNbdGhpcy5wcm9wcy5uYW1lXTtcclxuXHJcbiAgICAgICAgaWYgKHRlbXBsYXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldyA9IG5ldyBSZW5kZXJlcih0aGlzLiQkcGFyZW50KS5yZW5kZXIodGVtcGxhdGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzYWdlO1xyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG4vLyBnbG9iYWwgZXZlbnRzXHJcbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xyXG4gICAgcHJvcGVydHlDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpLFxyXG4gICAgdHJhbnNsYXRlQ2hhbmdlZDogbmV3IE1lc3NhZ2UoKVxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSkge1xuICAgICAgICB0aGlzLiRldmVudCA9IGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbG07XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIC8vIG5vdCBmb3VuZFxuICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCByZWdpc3RlciBzYW1lIGV2ZW50IGhhbmRsZXIgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShkYXRhLCBzY29wZSkge1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIC8vIGF0dGFjaCBldmVudCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5jYWxsKHNjb3BlLCB0aGlzKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSc7XHJcblxyXG5kb20ubG9hZFN0eWxlU3RyaW5nKCcubS1jb21wb25lbnR7ZGlzcGxheTppbmhlcml0O30gLm0taGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9Jyk7XHJcblxyXG5leHBvcnQgdmFyIE1fQ01QX0NMQVNTID0gJ20tY29tcG9uZW50JztcclxuZXhwb3J0IHZhciBNX0hJREVfQ0xBU1MgPSAnbS1oaWRlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1iaW5kLWh0bWwnXHJcbn0pXHJcbmNsYXNzIEJpbmRIdG1sRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20taGlkZSdcbn0pXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRoaWRlRWxlbWVudCh2YWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWlmJ1xyXG59KVxyXG5jbGFzcyBJZkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghdmFsdWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZC1odG1sJztcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvdyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pZic7XG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCc7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1tb2RlbCdcbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgZmVlZGJhY2s6ICcnLFxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXG4gICAgICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kZWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5zdGF0ZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJGJpbmQoJ2NoYW5nZScsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS5kYXRhLm5ld3ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0UHJvcGVydHkoJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxtQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzcztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuc3RhdHVzLnByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVmlld3MgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdmVsbS5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xuICAgICAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnRzQmV0d2VlbihoZWFkZXIsIGZvb3Rlcik7XG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICByZW5kZXIoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbCh0aGlzLml0ZW1zRXhwKTtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaXRlbVZpZXdzID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciBpdGVtVmlldyA9IHNlbGYuZ2V0Vmlld0Zyb21CdWZmZXIoc2VsZi5pdGVtVmlld3MsIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoIWl0ZW1WaWV3KSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIGl0ZW1WaWV3ID0gc2VsZi4kcmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlLCBsb2NhbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnNldFZpZXdUb0J1ZmZlcihpdGVtVmlld3MsIGl0ZW0sIGl0ZW1WaWV3KTtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGl0ZW1WaWV3LmNvbnRlbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0KSB7XG4gICAgICAgICAgICBsaXN0LmZvckVhY2goZnVuY3Rpb24gKHZpZXcpIHtcbiAgICAgICAgICAgICAgICB2aWV3LmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IGl0ZW1WaWV3cztcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgZ2V0Vmlld0Zyb21CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSkge1xuICAgICAgICB2YXIgdmlldztcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZpZXcgPSBsaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5kZWxldGUoZGF0YUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG4gICAgc2V0Vmlld1RvQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0sIHZpZXcpIHtcbiAgICAgICAgdmFyIGxpc3Q7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICBidWZmZXIuc2V0KGRhdGFJdGVtLCBsaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaCh2aWV3KTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goKGxpc3QpID0+IGxpc3QuZm9yRWFjaCh2aWV3ID0+IHZpZXcuZGVzdHJveSgpKSk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gJiYgdGhpcy51bndhdGNoQ29sbGVjdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc2hvdydcbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRoaWRlRWxlbWVudCghdmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBzZWxlY3RvcjogJ20tc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMua2V5LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3MtZXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcy1vZGQnXHJcbn0pXHJcbmNsYXNzIENsYXNzT2RkRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRldmFsKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20nO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShuZXdDbGFzcywgb2xkQ2xhc3MpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvbGRDbGFzcykge1xyXG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgb2xkQ2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDbGFzcykge1xyXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgbmV3Q2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zdHlsZS1ldmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXN0eWxlLW9kZCdcclxufSlcclxuY2xhc3MgU3R5bGVPZGREaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN0eWxlJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gob2xkU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChuZXdTdHlsZSkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobmV3U3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNraXBDdXJyZW50RWxtKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zd2l0Y2gtZGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtLXN3aXRjaC1kZWZhdWx0Jyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSB0aGlzLiRzZWVrVXBEaXJlY3RpdmUoJ20tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWF0Y2hEZWZhdWx0Lm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCF0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ20tc3dpdGNoLXdoZW4nKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnbS1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5jaGFuZ2VkLm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gdGhpcy5zd2l0Y2hDdHJsLnZhbHVlID09PSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMubWF0Y2hlZCAhPSBtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5wbHVzTWF0Y2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1pbnVzTWF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoIW1hdGNoZWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0ID0gbmV3IE1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hhbmdlZC5maXJlKCk7XG4gICAgfVxuXG4gICAgcGx1c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQrKztcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBtaW51c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQtLTtcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjaGVja0RlZmF1bHQoKSB7XG4gICAgICAgIHZhciBkZWZhdWx0TWF0Y2hlZCA9IHRoaXMubWF0Y2hDb3VudCA8PSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRNYXRjaGVkICE9PSBkZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IGRlZmF1bHRNYXRjaGVkO1xuICAgICAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQuZmlyZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsbS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCZXR3ZWVuKHN0YXJ0RWxtLCBlbmRFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHN0YXJ0RWxtLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZHJlbk9mRWxlbWVudChwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gc3RhcnRFbG0gJiYgY2hpbGQgIT09IGVuZEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmRFbG0gJiYgY2hpbGQgIT09IHN0YXJ0RWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gZWxtKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsbS5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU3R5bGVTdHJpbmcoY3NzKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGFwcGVuZEVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudCxcbiAgICByZXBsYWNlRWxlbWVudCxcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50c0JldHdlZW4sXG4gICAgY2xlYXJDaGlsZHJlbk9mRWxlbWVudCxcbiAgICBsb2FkU3R5bGVTdHJpbmdcbn07IiwiaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuXG5jbGFzcyBBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBleHApIHtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgfVxuXG4gICAgY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5ba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5hbHlzZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcnNlcikge1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlciB8fCB7XG4gICAgICAgICAgICBwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5hY2Nlc3NvcltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3Jba2V5XTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBhbmFseXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgcHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcjtcbiAgICB9XG5cbiAgICBhbmFseXNlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhbmFseXNlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBhbmFseXNlTG9naWMobG9naWMpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZSh1bmFyeS5hcmcpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDYWxsKGNhbGwpIHtcbiAgICAgICAgY2FsbC5hcmdzLmZvckVhY2goYXJnID0+IHRoaXMuYW5hbHlzZU5vZGUoYXJnKSk7XG5cbiAgICAgICAgaWYgKCFjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjYWxsLmNhbGxlZSwgeyBjYWxsZWU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIucHJvcGVydHkudHlwZSA9PT0gQVNULkxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKG1lbWJlci5wcm9wZXJ0eS52YWx1ZSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaWRlbnRpZmllciksXG4gICAgICAgICAgICBjYWxsZWUgPSBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMaXRlcmFsKGxpdGVyYWwsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChsaXRlcmFsKTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHByb3AudmFsdWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB0aGlzLmFuYWx5c2VOb2RlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXJyYXkoYXJyKSB7XG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlKGNoaWxkKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuXG52YXIgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbCxcbiAgICBsb2NhbHM6IG51bGxcbn07XG5cbmV4cG9ydCBjbGFzcyBFdmFsdWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UoZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXIgfHwge3BhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHB9O1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZSBmcm9tIGV4cHJlc3Npb25cbiAgICBldmFsdWF0ZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcblxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuJG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZSB0byBleHByZXNzaW9uXG4gICAgYXNzaWduKGV4cCwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWduUHJvZ3JhbShwcm9ncmFtLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYXNzaWduUHJvZ3JhbShwcm9ncmFtLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChleHByZXNzaW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gZXhwcmVzc2lvbi5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5vYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5vYmplY3QpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXk6ICFhc3NpZ25tZW50LmNvbXB1dGVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQucHJvcGVydHkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULklkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGhpcy5zY29wZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5sZWZ0LCB7XG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0Lm9iaiwgdGFyZ2V0LnByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLnRlc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcblxuICAgICAgICBzd2l0Y2ggKGxvZ2ljLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5yaWdodCk7XG5cbiAgICAgICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICAgICAgc3dpdGNoIChiaW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHVuYXJ5LmFyZyk7XG5cbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB0aGlzLmV2YWx1YXRlTm9kZShhcmcpKTtcblxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNhbGwuY2FsbGVlLCB7XG4gICAgICAgICAgICBjYWxsZWU6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB2YXIgZmlsdGVyID0gdGhpcy5wYXJzZXIucmVzb2x2ZUZpbHRlcihjb250ZXh0LnByb3ApO1xuXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyLmV4ZWN1dGUuYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLm9wdGlvbnMubG9jYWxzKSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLm9wdGlvbnMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV2YWx1YXRlT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcbiAgICAgICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFycmF5KGFycikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4vZXhwLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGxleEV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cExleGVyKCkubGV4KGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xufVxuXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRNZW1iZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRJZGVudGlmaWVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQubGVmdCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT97MX06ezJ9JywgdGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBidWlsZExvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGxvZ2ljLm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZEJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBiaW5hcnkub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZCh1bmFyeS5hcmcpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciByZXMgPSAnJywgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZuID0gdGhpcy5idWlsZChjYWxsLmNhbGxlZSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XG5cbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyBhcmdWYWx1ZXMuam9pbignOicpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCBhcmdWYWx1ZXMuam9pbignLCAnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cblxuICAgIGJ1aWxkTWVtYmVyKG1lbWJlcikge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5idWlsZChtZW1iZXIub2JqZWN0KTtcbiAgICAgICAgdmFyIHByb3AgPSB0aGlzLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9W3sxfV0nLCBvYmosIHByb3ApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG9iaiwgcHJvcCk7XG4gICAgfVxuXG4gICAgYnVpbGRJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICB9XG5cbiAgICBidWlsZExpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcobGl0ZXJhbC52YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1wiezB9XCInLCBsaXRlcmFsLnZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZChwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH06ezF9Jywga2V5LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciBwcm9wcyA9IG9iai5wcm9wZXJ0aWVzLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGl0ZW0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7ezB9fScsIHByb3BzLmpvaW4oJywgJykpO1xuICAgIH1cblxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGFyci5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1t7MH1dJywgaXRlbXMuam9pbignLCcpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcblxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNjb3BlKSB7XG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vcHJveHknO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFdmFsdWF0b3IsIEFuYWx5c2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7IFdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xuaW1wb3J0IHsgRGVsYXllciB9IGZyb20gJy4vZGVsYXllcic7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE5ld1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENvbGxlY3Rpb25DaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlZCB8fCB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuICAgIH1cblxuICAgIG5vdGlmeShzY29wZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUsIHtcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkOiBjb2xsZWN0aW9uQ2hhbmdlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmFjY2Vzc29ycyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLndhdGNoZXIgPSBuZXcgV2F0Y2hlcigpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyID0gbmV3IEFuYWx5c2VyKHNjb3BlLiRwYXJzZXIpO1xuICAgICAgICB0aGlzLmRlbGF5ZXIgPSBuZXcgRGVsYXllcih0aGlzLm5vdGlmeSwgMTYpO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKGV4cCwgaGFuZGxlciwgdmFsdWUpO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMubGlzdGVuZXJzLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZihpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBub3RpZnkoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2gobGlzdGVuZXIgPT4ge1xuICAgICAgICAgICAgaWYobGlzdGVuZXIuaGFzQ2hhbmdlKCkpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lci5ub3RpZnkodGhpcy5zY29wZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG5vdGlmeUNoYW5nZShsaXN0ZW5lciwgbmV3VmFsdWUpIHtcbiAgICAgICAgaWYgKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5zZXROZXdWYWx1ZShuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5zZXRDb2xsZWN0aW9uQ2hhbmdlZCh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmRlbGF5ZXIuZXhlY3V0ZSh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRBY2Nlc3NvcihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuYWNjZXNzb3JzW2V4cF07XG5cbiAgICAgICAgaWYoIXJlc3VsdCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlci5hbmFseXNlKGV4cCk7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yc1tleHBdID0gcmVzdWx0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmNvcHkodHJ1ZSwgcmVzdWx0KTtcbiAgICB9XG5cbiAgICB3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBhY2Nlc3NvciA9IHRoaXMuZ2V0QWNjZXNzb3IoZXhwKTtcbiAgICAgICAgdmFyIGV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHsgYWxsb3dOdWxsOiB0cnVlLCBsb2NhbHM6IGxvY2FscyB9KTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHZhbHVlcyA9PT0gc2VsZi5zY29wZSAmJiBsb2NhbHMgJiYgbG9jYWxzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2hlci53YXRjaCh2YWx1ZXMsIGtleSwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgYXJncy5kYXRhLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIHZhbHVlc1trZXldKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IsIHRoaXMuc2NvcGUpO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29yKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICAgICBldmFsdWF0b3IgPSBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHsgYWxsb3dOdWxsOiB0cnVlLCBsb2NhbHM6IGxvY2FscyB9KTtcbiAgICAgICAgdmFyIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgdmFyIHVud2F0Y2hFeHAgPSB0aGlzLndhdGNoKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XG4gICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGxvY2Fscyk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hQcm9wcygpIHtcbiAgICAgICAgICAgIHZhciBjb2xsZWN0aW9uID0gZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxudmFyIGlzUHJveHlTeW1ib2wgPSBTeW1ib2woJ19faXNQcm94eScpLFxuICAgIHRhcmdldFN5bWJvbCA9IFN5bWJvbCgnX190YXJnZXQnKTtcblxudmFyIGhhbmRsZXIgPSB7XG4gICAgZ2V0OiBnZXRQcm94eSxcbiAgICBzZXQ6IHNldFByb3h5XG59O1xuXG4vLyBleHRlbmRzIG9iamVjdCBwcm90b3R5cGUsIGFkZCBmdW5jdGlvbiB0b1Byb3h5XG4vLyBPYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbiAoKSB7XG4vLyAgICAgcmV0dXJuIGlzUHJveHkodGhpcykgPyB0aGlzIDogbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xuLy8gfTtcblxuZnVuY3Rpb24gaXNQcm94eShwcm94eSkge1xuICAgIHJldHVybiB1dGlscy5pc09iamVjdChwcm94eSkgJiYgcHJveHlbaXNQcm94eVN5bWJvbF07XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldChwcm94eSkge1xuICAgIHJldHVybiBpc1Byb3h5KHByb3h5KSA/IHByb3h5W3RhcmdldFN5bWJvbF0gOiBwcm94eTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb3h5KHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IG1ha2VQcm94eShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJveHkodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBpc1Byb3h5U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IHRhcmdldFN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbn1cblxuZnVuY3Rpb24gc2V0UHJveHkodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZ2V0VGFyZ2V0KHRhcmdldFtrZXldKSxcbiAgICAgICAgbmV3VmFsdWUgPSBnZXRUYXJnZXQodmFsdWUpO1xuXG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IG1ha2VQcm94eSh2YWx1ZSk7XG4gICAgICAgIGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge1xuICAgIGlzUHJveHksXG4gICAgZ2V0VGFyZ2V0LFxuICAgIGhhbmRsZXJcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGdldFRhcmdldCB9IGZyb20gJy4vcHJveHknO1xuXG5jbGFzcyBPYmplY3RMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRIYW5kbGVycyhrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleXNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcbiAgICB9XG5cbiAgICByZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcblxuICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlS2V5KGtleSwgYXJncywgc2VsZikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCA9IGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQub24oZSA9PiB0aGlzLmhhbmRsZVByb3BlcnR5Q2hhbmdlZChlLmRhdGEpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZGF0YSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBkYXRhLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoZGF0YS5rZXksIGRhdGEpO1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleSgnKicsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyLCBmaWx0ZXJzID0gbGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGZpbHRlcnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IE9iamVjdExpc3RlbmVyKHRhcmdldCk7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGdldE9yQ3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgd2F0Y2godGFyZ2V0LCBrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcblxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICAvLyBpcyB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgbG9naWNhbCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMubG9naWNhbCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50IGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgICAgIC8vIGhhbmRsZXIgdG8gdXBkYXRlIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZVxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeHByZXNzaW9uKHRleHQpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLnB1c2goZXhwKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpY2FsIHx8IHRoaXMuYXNzaWdubWVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0V4cCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzaW9uKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgfHwgdGhpcy5sb2dpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdCgpO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0Y2goKTtcbiAgICAgICAgICAgIH0sIHRoaXMubG9jYWxzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zWzBdLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY3VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIChjdXIuY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpIHx8ICcnKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zWzBdLmFzc2lnbih0aGlzLnNjb3BlLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRleHQgKyAnIGlzIG5vdCB2YWxpZCBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBhdXRvbWF0aW9uO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGlmeSB2aWV3IGFjY29yZGluZyB0byBtb2RlbFxuICAgIHBhdGNoKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkICYmIHRoaXMuYXV0b21hdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUsIHRoaXMub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNUcmFuc2xhdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUoc2NvcGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gc2NvcGUuJGV2YWwodGhpcy50ZXh0LCBsb2NhbHMpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbihzY29wZSwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBzY29wZS4kYXNzaWduKHRoaXMudGV4dCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgd2F0Y2goc2NvcGUsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBzY29wZS4kd2F0Y2godGhpcy50ZXh0LCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCwgaXNWRWxtIH0gZnJvbSAnLi4vdHBsJztcbmltcG9ydCB7IExvY2FsIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSAnLi9iaW5kaW5nJztcbmltcG9ydCB7IE1fQ01QX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuL3ZpZXcnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlcjtcbiAgICAgICAgdGhpcy52aWV3ID0gbnVsbDtcbiAgICB9XG5cbiAgICBuZXdCaW5kaW5nKHRleHQpIHtcbiAgICAgICAgdmFyIGJpbmRpbmcgPSBuZXcgQmluZGluZyh0aGlzLnNjb3BlLCB0ZXh0LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIHRoaXMudmlldy5iaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICB9XG5cbiAgICBuZXdDb21wb25lbnQoY2xzKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNscyk7XG5cbiAgICAgICAgdGhpcy5zY29wZS4kYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB0aGlzLnZpZXcuY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgbmV3RGlyZWN0aXZlKGNscykge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoY2xzKTtcblxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXMuc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgY29tcG9uZW50ID0gdGhpcy5wYXJzZXIucmVzb2x2ZUNvbXBvbmVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICAvLyB2ZWxtLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBjb21wb25lbnQ7XG4gICAgfVxuXG4gICAgcmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnBhcnNlci5yZXNvbHZlRGlyZWN0aXZlKHZhdHRyLm5vZGVEYXRhLm5hbWUpO1xuXG4gICAgICAgIC8vIHZhdHRyLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVuZGVyKHRlbXBsYXRlKSB7XG4gICAgICAgIC8vIG11c3Qgc2V0IGEgcm9vdCBlbGVtZW50IGZvciBkaXJlY3RpdmUgbGlmZSBjeWNsZSBcImFmdGVyTGlua1wiIGhvb3BzXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG5cbiAgICAgICAgdGhpcy52aWV3ID0gbmV3IFZpZXcoKTtcblxuICAgICAgICB0aGlzLnZpZXcudm5vZGVzID0gdGhpcy5wYXJzZXIucGFyc2VUZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52aWV3LnZub2Rlcyk7XG5cbiAgICAgICAgLy8gdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHByZWxpbmsoKSk7XG5cbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52aWV3LnZub2RlcykuZm9yRWFjaChub2RlID0+IGNvbnRhaW5lci5hcHBlbmRDaGlsZChub2RlKSk7XG5cbiAgICAgICAgLy8gY2FsbCBkaXJlY3RpdmUgbGlmZSBjeWNsZSBob29wc1xuICAgICAgICB0aGlzLnZpZXcuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHBvc3RsaW5rKCkpO1xuXG4gICAgICAgIC8vIGNhY2hlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHNcbiAgICAgICAgZG9tLmdldENoaWxkcmVuT2ZFbGVtZW50KGNvbnRhaW5lcikuZm9yRWFjaChub2RlID0+IHRoaXMudmlldy5ub2Rlcy5wdXNoKG5vZGUpKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMudmlldy5kaXJlY3RpdmVzLnB1c2goZGlyZWN0aXZlKSk7XG5cbiAgICAgICAgZWxtRGF0YS5kaXJlY3RpdmVzID0gZGlyZWN0aXZlcztcblxuICAgICAgICAvLyBkaXJlY3RpdmUgZGVmaW5lcyBjdXN0b20gbGlua2VyIGZvciB0aGlzIHZpcnR1YWwgbm9kZSwgcmVuZGVyIGVuZ2luZSB3aWxsIG5vdCByZW5kZXIgaXQgYWNjb3JkaW5nIHRvIGRlZmF1bHQgYmVoYXZpb3JcbiAgICAgICAgaWYgKGN1c3RvbUxpbmtlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICBlbG1EYXRhLnNsb3RzID0gdGhpcy5zZWVrU2xvdCh2ZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHZlbG0uY2hpbGROb2Rlcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21waWxlQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgYXR0ck5hbWUgPSB2YXR0ci5ub2RlTmFtZSwgYXR0clZhbHVlID0gdmF0dHIubm9kZVZhbHVlLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSwgYmluZGluZztcblxuICAgICAgICBpZihhdHRyVmFsdWUgIT0gbnVsbCkge1xuICAgICAgICAgICAgYmluZGluZyA9IHRoaXMubmV3QmluZGluZyhhdHRyVmFsdWUpO1xuICAgICAgICAgICAgYXR0ckRhdGEuYmluZGluZyA9IGJpbmRpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnQCcpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0V2ZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5pc0RvbUV2ZW50ID0gdXRpbHMuc29tZShkb21FdmVudHMsIGUgPT4gZSA9PT0gYXR0ckRhdGEubmFtZSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmxvZ2ljYWwgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCc6JykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnKicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLnJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChkaXJlY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUgPSB0aGlzLm5ld0RpcmVjdGl2ZShkaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZS4kJHZhdHRyID0gdmF0dHI7XG5cbiAgICAgICAgICAgICAgICBpZihiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy5hc3NpZ25tZW50ID0gYXR0ckRhdGEuZGlyZWN0aXZlLiRhc3NpZ25tZW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUuJGNvbXBpbGUoKSkge1xuICAgICAgICAgICAgICAgICAgICBhdHRyRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5kaXJlY3RpdmU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RpcmVjdGl2ZSAnICsgYXR0ckRhdGEubmFtZSArICcgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCEoYXR0ckRhdGEuaXNFdmVudCB8fCBhdHRyRGF0YS5kaXJlY3RpdmUpKSB7XG4gICAgICAgICAgICB2YXIgc2V0SHRtbEF0dHIgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgZWxtID0gdmF0dHIudmVsbS5lbG07XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEubmFtZS5zdGFydHNXaXRoKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KGVsbSwgYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZShhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjb21wb25lbnQgPSB2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb3BlcnR5TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkocHJvcGVydHlOYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LiRzZXRQcm9wZXJ0eShwcm9wZXJ0eU5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEh0bWxBdHRyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oc2V0SHRtbEF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZVRleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZyA9IHRoaXMubmV3QmluZGluZyh2dGV4dC5ub2RlVmFsdWUpO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBlbG0sIG5ld1RleHROb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAodnRleHQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LmVsbS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsbSA9IHZ0ZXh0LnBhcmVudE5vZGUuZWxtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtLmFwcGVuZENoaWxkKG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh2dGV4dC5lbG0sIG5ld1RleHROb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZ0ZXh0LmVsbSA9IG5ld1RleHROb2RlO1xuICAgICAgICB9KTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5jb21waWxlKCk7XG4gICAgfVxuXG4gICAgY29tcGlsZUNvbW1lbnQodmNtbnQpIHtcblxuICAgIH1cblxuICAgIGxpbmtFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgaWYgKGVsbURhdGEubGlua2VyICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlci4kbGluaygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmVsbS5lbG0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gdGhpcy5uZXdDb21wb25lbnQoZWxtRGF0YS5jb21wb25lbnQpO1xuXG4gICAgICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModmVsbS5lbG0sIE1fQ01QX0NMQVNTKTtcblxuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG5cbiAgICAgICAgICAgIGluc3RhbmNlLiQkdmVsbSA9IHZlbG07XG4gICAgICAgICAgICBpbnN0YW5jZS4kc2V0U2xvdChlbG1EYXRhLnNsb3RzKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRyZW5kZXIoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRtb3VudCh2ZWxtLmVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcbiAgICAgICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHZlbG0uZWxtLmFwcGVuZENoaWxkKHRoaXMubGlua05vZGUoY2hpbGQpKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVsbS5lbG07XG4gICAgfVxuXG4gICAgbGlua0F0dHIodmF0dHIpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB2YXR0ci52ZWxtLFxuICAgICAgICAgICAgZWxtID0gdmVsbS5lbG0sXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLFxuICAgICAgICAgICAgYmluZGluZyA9IGF0dHJEYXRhLmJpbmRpbmc7XG5cbiAgICAgICAgaWYoYmluZGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuaXNFdmVudCkge1xuICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmlzRG9tRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbG0uYWRkRXZlbnRMaXN0ZW5lcihhdHRyRGF0YS5uYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnROYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoYXR0ckRhdGEubmFtZSwgJy0nKTtcbiAgICAgICAgICAgICAgICB2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudC4kYmluZChldmVudE5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGJpbmRpbmcgY2hhbmdlIGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcGF0Y2hcbiAgICAgICAgaWYoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbigobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBhdHRyRGF0YS5kaXJlY3RpdmUuJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIHNlZWtTbG90KHZlbG0pIHtcbiAgICAgICAgdmFyIHNsb3RzID0ge307XG5cbiAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYoaXNWRWxtKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90ID0gY2hpbGQuZ2V0QXR0cignc2xvdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90c1tzbG90Lm5vZGVWYWx1ZV0gPSBjaGlsZC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICBzbG90cztcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gICAgZ2V0IGNvbnRlbnQoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5mb3JFYWNoKG5vZGUgPT4gY29udGVudC5hcHBlbmRDaGlsZChub2RlKSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XHJcbiAgICAgICAgdmFyIGVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZWxlY3Rvck9yRWxlbWVudCkpIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JPckVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbWVudCA9IHNlbGVjdG9yT3JFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJpbmRUcmFuc2xhdGVDaGFuZ2VkKCkge1xyXG4gICAgLy8gICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuZW50aXR5LmJpbmRpbmdzO1xyXG4gICAgLy9cclxuICAgIC8vICAgICBpZighYmluZGluZ3MubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIC8vIHVwZGF0ZSB0ZXh0IHdoaWxlIHRyYW5zbGF0ZSBjaGFuZ2VkXHJcbiAgICAvLyAgICAgdGhpcy51bmJpbmRUcmFuc2xhdGVDaGFuZ2VkID0gZXZlbnRzLnRyYW5zbGF0ZUNoYW5nZWQub24oKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICBiaW5kaW5ncy5mb3JFYWNoKGJpbmRpbmcgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgYmluZGluZy5kZXRlY3QoKTtcclxuICAgIC8vICAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmZvckVhY2goaXRlbSA9PiBpdGVtLiRkZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLnZub2Rlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG5cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy52bm9kZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLm5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1idWlsZGVyJzsiLCJleHBvcnQgKiBmcm9tICcuL3Zub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vdmF0dHInO1xuZXhwb3J0ICogZnJvbSAnLi92Y21udCc7XG5leHBvcnQgKiBmcm9tICcuL3ZlbG0nO1xuZXhwb3J0ICogZnJvbSAnLi92dGV4dCc7XG5leHBvcnQgKiBmcm9tICcuL3Z0eXBlJzsiLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZBdHRyIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmF0dHJpYnV0ZSwgbmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLnZlbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnF1b3RlID0gJ1wiJztcbiAgICB9XG5cbiAgICBzZXRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZBdHRyKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZDbW50IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmNvbW1lbnQsICcjY29tbWVudCcsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQ21udCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5pbXBvcnQgeyBWQXR0ciB9IGZyb20gJy4vdmF0dHInO1xuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwtYXBpJztcbmltcG9ydCB7IFRwbEJ1aWxkZXIgfSBmcm9tICcuLi90cGwtYnVpbGRlcic7XG5cbmV4cG9ydCBjbGFzcyBWRWxtIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZWxlbWVudCwgbmFtZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy52YXR0cnMgPSBbXTtcbiAgICAgICAgdGhpcy5zZWxmQ2xvc2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBUcGxCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgcHVzaEF0dHIoYXR0cikge1xuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgIH1cblxuICAgIGhhc0F0dHIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhdHRycy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgZ2V0QXR0cihrZXkpIHtcbiAgICAgICAgdmFyIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLm5vZGVOYW1lID09PSBrZXk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICghbWF0Y2hlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG1hdGNoZXNbMF07XG4gICAgfVxuXG4gICAgc2V0QXR0cihrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciB0YXJnZXQsIG1hdGNoZXMgPSB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG1hdGNoZXNbMF07XG4gICAgICAgICAgICB0YXJnZXQuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbmV3IFZBdHRyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgdGFyZ2V0LnZlbG0gPSB0aGlzO1xuICAgICAgICAgICAgdGFyZ2V0LmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKHRhcmdldCk7XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZW1vdmVBdHRyKGtleSkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gW10sIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChrZXkgaW5zdGFuY2VvZiBWQXR0cikge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy52YXR0cnMuaW5kZXhPZihrZXkpO1xuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhdHRycy5maWx0ZXIoZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICAgICAgfSkuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBzZWxmLnZhdHRycy5pbmRleE9mKG1hdGNoKTtcbiAgICAgICAgICAgICAgICBtYXRjaC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRhcmdldC5sZW5ndGggPiAwID8gdGFyZ2V0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICBhcHBlbmRBdHRyKGF0dHIpIHtcbiAgICAgICAgaWYgKGF0dHIudmVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDdXJyZW50IGF0dHJpYnV0ZSBpcyBub3QgbmV3IVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIGF0dHIuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgcmV0dXJuIGF0dHI7XG4gICAgfVxuXG4gICAgZ2V0T3V0ZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0SW5uZXJUcGwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkZXIuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KS5qb2luKCcnKTtcbiAgICB9XG5cbiAgICBzZXRPdXRlclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZiwgdm5vZGUpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2VsZi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNlbGYpO1xuICAgIH1cblxuICAgIHNldElubmVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2xlYXJDaGlsZE5vZGVzKCk7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5hcHBlbmRDaGlsZCh2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICB2YXIgbm9kZSA9IG5ldyBWRWxtKHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcblxuICAgICAgICBub2RlLnZhdHRycyA9IHRoaXMudmF0dHJzLm1hcChmdW5jdGlvbiAodmF0dHIpIHtcbiAgICAgICAgICAgIHZhciBjb3B5ID0gdmF0dHIuY2xvbmVOb2RlKCk7XG4gICAgICAgICAgICBjb3B5LnZlbG0gPSBub2RlO1xuICAgICAgICAgICAgcmV0dXJuIGNvcHk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy52YXR0cnMuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgYXR0ci5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmF0dHJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgbm9kZVR5cGUgPSB7XG4gICAgZWxlbWVudDogMSxcbiAgICBhdHRyaWJ1dGU6IDIsXG4gICAgdGV4dDogMyxcbiAgICBjZGF0YVNlY3Rpb246IDQsXG4gICAgZW50aXR5UmVmZXJlbmNlOiA1LFxuICAgIGVudGl0eTogNixcbiAgICBwcm9jZXNzaW5nSW5zdHJ1Y3Rpb246IDcsXG4gICAgY29tbWVudDogOCxcbiAgICBkb2N1bWVudDogOSxcbiAgICBkb2N1bWVudFR5cGU6IDEwLFxuICAgIGRvY3VtZW50RnJhZ21lbnQ6IDExLFxuICAgIG5vdGF0aW9uOiAxMlxufVxuXG4vLyB2aXJ0dWFsIG5vZGVcbmV4cG9ydCBjbGFzcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSwgbmFtZSwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMubm9kZU5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLm5vZGVWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5vZGVEYXRhID0ge307XG4gICAgfVxuXG4gICAgcHVzaENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxuXG4gICAgYnVpbGRTaWJsaW5nKCkge1xuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzW3RoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxXTtcblxuICAgICAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gKHNlbGYuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggLSAxXTtcbiAgICAgICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCArIDFdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhclBhcmVudEFuZFNpYmxpbmcoKSB7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhc0NoaWxkTm9kZXMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGNsZWFyQ2hpbGROb2RlcygpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkLm5leHRTaWJsaW5nID0gY2hpbGQ7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEJlZm9yZShyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAocmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZDtcbiAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nID0gbmV3Q2hpbGQ7XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDAsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGluc2VydEFmdGVyKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAocmVmQ2hpbGQubmV4dFNpYmxpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBwZW5kQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLm5leHRTaWJsaW5nLCBuZXdDaGlsZCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YoY2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlbW92ZSBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZy5uZXh0U2libGluZyA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nLnByZXZpb3VzU2libGluZyA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09ICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICByZXBsYWNlQ2hpbGQocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIG5ld0NoaWxkLnByZXZpb3VzU2libGluZyA9IHJlZkNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgbmV3Q2hpbGQubmV4dFNpYmxpbmcgPSByZWZDaGlsZC5uZXh0U2libGluZztcblxuICAgICAgICBpZiAodGhpcy5maXJzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5sYXN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVmQ2hpbGQuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIG5ld0NoaWxkLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5zcGxpY2UoaW5kZXgsIDEsIG5ld0NoaWxkKTtcbiAgICAgICAgcmV0dXJuIG5ld0NoaWxkO1xuICAgIH1cblxuICAgIGNsb25lTm9kZShkZWVwKSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcy5vbkNsb25lTm9kZShkZWVwKTtcblxuICAgICAgICBpZihkZWVwKSB7XG4gICAgICAgICAgICBub2RlLmNoaWxkTm9kZXMgPSB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5jbG9uZU5vZGUoZGVlcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG5vZGUuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMub3duZXJEb2N1bWVudCA9IG51bGw7XG4gICAgfVxuXG4gICAgLy8gaG9vcHNcblxuICAgIC8vIGVuZCBvZiBob29wc1xufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVGV4dCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS50ZXh0LCAnI3RleHQnLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZWxtID0gbnVsbDtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWVGV4dCh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlR5cGUgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmRvY3VtZW50VHlwZSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IFRwbExleGVyIH0gZnJvbSAnLi90cGwtbGV4ZXInO1xuaW1wb3J0IHsgVHBsUGFyc2VyIH0gZnJvbSAnLi90cGwtcGFyc2VyJztcbmltcG9ydCB7IG5vZGVUeXBlIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmZ1bmN0aW9uIGxleFRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxMZXhlcigpLmxleCh0cGwpO1xufVxuXG5mdW5jdGlvbiBwYXJzZVRwbCh0cGwpIHtcbiAgICB0cGwgPSB1dGlscy5lc2NhcGVIdG1sKHRwbCk7XG4gICAgcmV0dXJuIG5ldyBUcGxQYXJzZXIobmV3IFRwbExleGVyKCkpLnBhcnNlKHRwbCk7XG59XG5cbmZ1bmN0aW9uIGlzVkVsbSh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuZWxlbWVudDtcbn1cblxuZnVuY3Rpb24gaXNWQXR0cih2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuYXR0cmlidXRlO1xufVxuXG5mdW5jdGlvbiBpc1ZUZXh0KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS50ZXh0O1xufVxuXG5mdW5jdGlvbiBpc1ZDb21tZW50KHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5jb21tZW50O1xufVxuXG5leHBvcnQgeyBsZXhUcGwsIHBhcnNlVHBsLCBpc1ZFbG0sIGlzVkF0dHIsIGlzVlRleHQsIGlzVkNvbW1lbnQgfTsiLCJpbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50IH0gZnJvbSAnLi90cGwtYXBpJ1xuXG5leHBvcnQgY2xhc3MgVHBsQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZCh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1ZDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmJ1aWxkRWxlbWVudCh2bm9kZSk7XG4gICAgfVxuXG4gICAgYnVpbGRFbGVtZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGF0dHJUcGwgPSB2ZWxtLnZhdHRycy5tYXAoKHZhdHRyKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRBdHRyaWJ1dGUodmF0dHIpO1xuICAgICAgICAgICAgfSkuam9pbignICcpLFxuICAgICAgICAgICAgY2hpbGRUcGwgPSB2ZWxtLmNoaWxkTm9kZXMubWFwKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIGlmKGF0dHJUcGwpIHtcbiAgICAgICAgICAgIGF0dHJUcGwgPSAnICcgKyBhdHRyVHBsO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRwbCA9ICc8JyArIHZlbG0ubm9kZU5hbWUgKyBhdHRyVHBsICsgJz4nICsgY2hpbGRUcGw7XG5cbiAgICAgICAgaWYgKCF2ZWxtLnNlbGZDbG9zZWQpIHtcbiAgICAgICAgICAgIHRwbCArPSAoJzwvJyArIHZlbG0ubm9kZU5hbWUgKyAnPicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRwbDtcbiAgICB9XG5cbiAgICBidWlsZEF0dHJpYnV0ZSh2YXR0cikge1xuICAgICAgICByZXR1cm4gdmF0dHIubm9kZU5hbWUgKyAodmF0dHIubm9kZVZhbHVlID09IG51bGwgPyAnJyA6ICgnPScgKyB2YXR0ci5xdW90ZSArIHZhdHRyLm5vZGVWYWx1ZSArIHZhdHRyLnF1b3RlKSk7XG4gICAgfVxuXG4gICAgYnVpbGRUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHJldHVybiB2dGV4dC5ub2RlVmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiB2Y21udC5ub2RlVmFsdWU7XG4gICAgfVxufVxuXG4iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxMZXhlciBleHRlbmRzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnQCcgfHwgY2ggPT09ICc6JyB8fCBjaCA9PT0gJyonKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICctJyB8fCBjaCA9PT0gJy4nO1xuICAgIH1cblxuICAgIGV4cGVjdFN0cmluZyhzdHIpIHtcbiAgICAgICAgdmFyIG51bSA9IHN0ci5sZW5ndGg7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8PSB0aGlzLnRleHQubGVuZ3RoKSA/IChzdHIgPT09IHRoaXMudGV4dC5zdWJzdHIodGhpcy5pbmRleCwgbnVtKSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBodG1sIGNvbW1lbnQgXCI8IS0tY29tbWVudC0tPlwiXG4gICAgcmVhZENvbW1lbnQoYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gYmVnaW47XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZyhlbmQpKSB7XG4gICAgICAgICAgICAgICAgcmF3U3RyaW5nICs9IGVuZDtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb21tZW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgY29tbWVudCcsIHN0YXJ0KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRleHRcbiAgICByZWFkVGV4dCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICBpZiAoKGNoID09PSAnPCcgJiYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSB8fCBjaDIgPT09ICcvJykpIHx8IHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgIHRleHRUYWc6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0YWdcbiAgICByZWFkVGFnKGJlZ2luLCBlbmQsIGNsb3NpbmcsIGRvY3R5cGUpIHtcbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBiZWdpbiwgdGFnOiB0cnVlLCBjbG9zaW5nOiBjbG9zaW5nLCBiZWdpbjogdHJ1ZSwgZG9jdHlwZTogZG9jdHlwZSB9KTtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHRoaXMucmVhZElkZW50KCk7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuXG4gICAgICAgICAgICBpZiAoIWNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIHN0ciA9IGNoICsgY2gyO1xuICAgICAgICAgICAgICAgIGlmIChzdHIgPT09ICcvJyArIGVuZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHN0ciwgdGFnOiB0cnVlLCBjbG9zaW5nOiB0cnVlLCBlbmQ6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gc3RyLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY2ggPT09IGVuZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogdGhpcy5pbmRleCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogZW5kLFxuICAgICAgICAgICAgICAgICAgICB0YWc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNsb3Npbmc6ICEhZG9jdHlwZSA/IHRydWUgOiBjbG9zaW5nLFxuICAgICAgICAgICAgICAgICAgICBlbmQ6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IGVuZC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc9Jykge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogJz0nLCBlcXVhbDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgdmFyIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgdmFyIGNoMyA9IHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkQ29tbWVudCgnPCEtLScsICctLT4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPCcgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8JywgJz4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPC8nKSAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwvJywgJz4nLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IURPQ1RZUEUnKSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8IScsICc+JywgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0RPQ1RZUEUgaXMgbm90IGFsbG93ZWQnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7XG4gICAgVkVsbSwgVkF0dHIsIFZUZXh0LCBWQ21udCwgVlR5cGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBUcGxQYXJzZXIgZXh0ZW5kcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKGxleGVyLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciByb290ID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIGRvY3R5cGUsIGFsbG93RG9jVHlwZSA9ICEhdGhpcy5vcHRpb25zLmFsbG93RG9jVHlwZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgIGlmIChhbGxvd0RvY1R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb2N0eXBlID0gdGhpcy5kb2N0eXBlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChkb2N0eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgb25seSBhbGxvdyBvbmVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIGlzIG5vdCBhbGxvd2VkXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0aGlzLmVsZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJpbXBvc3NpYmxlXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvb3QuYnVpbGRTaWJsaW5nKCk7XG5cbiAgICAgICAgcmV0dXJuIHJvb3QuY2hpbGROb2RlcztcbiAgICB9XG5cbiAgICBkb2N0eXBlKCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGRvY1R5cGUgPSBuZXcgVlR5cGUoKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUubm9kZVZhbHVlID0gdG9rZW4udGV4dDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGRvY1R5cGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGRvY1R5cGUuY2hpbGROb2Rlcy5wdXNoKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkb2NUeXBlO1xuICAgIH1cblxuICAgIGVsZW1lbnQocCkge1xuICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgdmFyIGVsZSA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBlbGUubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGVsZS5wdXNoQXR0cihhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSAnaW5wdXQnKSB7XG4gICAgICAgICAgICAgICAgZWxlLnNlbGZDbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkRWxlbWVudHMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgICAgICBlbGUucHVzaENoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZTtcbiAgICB9XG5cbiAgICBjaGlsZEVsZW1lbnRzKHApIHtcbiAgICAgICAgdmFyIGVsZXMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGV4dCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4pIHtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2godGhpcy5lbGVtZW50KHApKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlcztcbiAgICB9XG5cbiAgICBhdHRycyhwKSB7XG4gICAgICAgIHZhciBhdHRycyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGF0dHIgPSBuZXcgVkF0dHIoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBhdHRyLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICBhdHRyLm9yaWdpbiA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICBpZiAodG9rZW4uZXF1YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0ci5ub2RlVmFsdWUgPSB0b2tlbi52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYXR0cnMucHVzaChhdHRyKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhdHRycztcbiAgICB9XG5cbiAgICBjdXJyZW50KCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBuZXh0KCkge1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgfVxufSIsInZhciB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbi8vIGlzXG5mdW5jdGlvbiBpc1VuZGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc01hcCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIE1hcDtcbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jztcbn1cblxuZnVuY3Rpb24gaXNCbGFua09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFnZXRQcm90b3R5cGVPZih2YWx1ZSk7XG59XG5cbmZ1bmN0aW9uIGlzU3RyaW5nKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZyc7XG59XG5cbmZ1bmN0aW9uIGlzTnVtYmVyKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcic7XG59XG5cbmZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgRGF0ZV0nO1xufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNSZWdFeHAodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufVxuXG5mdW5jdGlvbiBpc0Jvb2xlYW4odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzRm9ybURhdGEodmFsdWUpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBGb3JtRGF0YSAhPT0gJ3VuZGVmaW5lZCcpICYmICh2YWx1ZSBpbnN0YW5jZW9mIEZvcm1EYXRhKTtcbn1cbi8vIGVuZCBvZiBpc1xuXG4vLyB2YWx1ZVxuZnVuY3Rpb24gdG9OdW1iZXIodmFsdWUpIHtcbiAgICB2YXIgbiA9IHBhcnNlRmxvYXQodmFsdWUpO1xuICAgIHJldHVybiBpc05hTihuKSA/IHZhbHVlIDogbjtcbn1cblxuZnVuY3Rpb24gbG93ZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvTG93ZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIHVwcGVyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b1VwcGVyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0VG9IdW1wTmFtZShuYW1lLCBzZXBhcmF0b3IpIHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdChzZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGcm9tSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yKSB7XG4gICAgdmFyIGkgPSAwLCBuZXdOYW1lID0gJycsIGNoYXI7XG5cbiAgICB3aGlsZSAoaSA8IG5hbWUubGVuZ3RoKSB7XG4gICAgICAgIGNoYXIgPSBuYW1lW2ldO1xuXG4gICAgICAgIGlmIChpICE9PSAwICYmIC9bQS1aXS8udGVzdChjaGFyKSkge1xuICAgICAgICAgICAgbmV3TmFtZSArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOYW1lO1xufVxuLy8gZW5kIGlmIHZhbHVlXG5cbi8vIG9iamVjdFxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weShkZWVwLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBlbmQgb2Ygb2JqZWN0XG5cbi8vIGl0ZXJhdG9yXG5mdW5jdGlvbiBmb3JFYWNoKHRhcmdldCwgYWN0aW9uKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24odGFyZ2V0W2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUodGFyZ2V0LCBmdW5jKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnNvbWUoZnVuYyk7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmModGFyZ2V0W2tleV0sIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gZW5kIG9mIGl0ZXJhdG9yXG5cbi8vIGFycmF5XG5mdW5jdGlvbiBvcmRlckJ5KGxpc3QsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobGlzdCwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyBlbmQgb2YgYXJyYXlcblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpICYmIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXlzLnNoaWZ0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHBhdHRlcm4gPSAvXFx7KFxcZCspXFx9L2csIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNGb3JtRGF0YSxcbiAgICB0b051bWJlcixcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGNvbnZlcnRUb0h1bXBOYW1lLFxuICAgIGNvbnZlcnRGcm9tSHVtcE5hbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIHJlbW92ZSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBmb3JtYXQsXG4gICAgZXNjYXBlSHRtbFxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIGhhbmRsZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XG4gICAgdGhpcy4kJG1haW5WaWV3ID0gbnVsbDtcbiAgICB0aGlzLiRwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMpO1xuICAgIHRoaXMuJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuc2xvdHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgZ2V0ICRpbmplY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yO1xuICAgIH1cblxuICAgICRkZWxlZ2F0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgICRzZXRTbG90KHNsb3RzKSB7XG4gICAgICAgIHRoaXMuc2xvdHMgPSBzbG90cyB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgJGhhc1Byb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcbiAgICB9XG5cbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuICAgIH1cblxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvYnNlcnZlci53YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5ldmFsdWF0ZShleHApO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZhbHVhdG9yKHRoaXMsIHtsb2NhbHM6IGxvY2Fsc30pLmFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZGF0YTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcykucmVuZGVyKHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRtYWluVmlldyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N1cnJlbnQgY29tcG9uZW50IGlzIG5vdCByZW5kZXJlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3Lm1vdW50KHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgJGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZC4kJHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kb2JzZXJ2ZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIGlmKHRoaXMuJCRtYWluVmlldyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkcGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnQuJHJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTV9ISURFX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcbiAgICB0aGlzLiQkdmF0dHIgPSBudWxsO1xuICAgIHRoaXMuJHByaW9yaXR5ID0gOTtcbiAgICAvLyBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50XG4gICAgdGhpcy4kYXNzaWdubWVudCA9IGZhbHNlO1xuICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gbnVsbDtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRrZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEua2V5O1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRyZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZS4kcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0ICRlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkYmluZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uJGtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgICRzZWVrRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXkpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciB2ZWxtID0gdGhpcy4kJHZhdHRyLnZlbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkcmVtb3ZlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kZWxlbWVudCwgdGhpcy4kcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJHBsYWNlaG9sZGVyLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoaWRlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHllcykge1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRldmFsKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGV2YWwoZXhwLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHRlbXBsYXRlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlcih0aGlzLiRzY29wZSwgbG9jYWxzKS5yZW5kZXIodGVtcGxhdGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wb25lbnRDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIsIGZpbHRlckNvbnN0cnVjdG9yIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSwgc2VydmljZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxudmFyIHBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcblxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG52YXIgY29tcG9uZW50Q2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBDb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG52YXIgZGlyZWN0aXZlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5kaXJlY3RpdmVDbGFzcy5wcm90b3R5cGUgPSBEaXJlY3RpdmUucHJvdG90eXBlO1xuXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBGaWx0ZXIobWV0YWRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5maWx0ZXJDbGFzcy5wcm90b3R5cGUgPSBGaWx0ZXIucHJvdG90eXBlO1xuXG52YXIgc2VydmljZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gU2VydmljZShtZXRhZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcbiAgICB9O1xufSkoKTtcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcbi8vIGVuZCBvZiBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cblxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICByZW5hbWUocm9sZUlkLCBuYW1lKSB7XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gJyc7XG4gICAgICAgICAgICB2YXIgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCctJyk7XG5cbiAgICAgICAgICAgIHNlZ21lbnRzLmZvckVhY2goZnVuY3Rpb24gKHNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICBuZXdOYW1lICs9IHV0aWxzLnVwcGVyY2FzZShzZWdtZW50WzBdKSArIHNlZ21lbnQuc3Vic3RyaW5nKDEpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZShyb2xlSWQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yLCBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLnJlbmFtZShyb2xlSWQsIG5hbWUpLFxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnN1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNvbnN0cnVjdC5jYWxsKHRoaXMsIE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgLy8gZXh0ZW5kcyBjbGFzc1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIGNvbmZpZy5leHRlbmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICdleHRlbmRzJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3JlIG1ldGFkYXRhIHRvIHByb3RvdHlwZVxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBuYW1lO1xuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBtYWtlQ29tcG9uZW50KG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogY29tcG9uZW50Q2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5jb21wb25lbnQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VEaXJlY3RpdmUobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBkaXJlY3RpdmVDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZUZpbHRlcihuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGZpbHRlckNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZmlsdGVyLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlU2VydmljZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IHNlcnZpY2VDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLnNlcnZpY2UsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBmYWN0b3J5ID0gbmV3IEZhY3RvcnkoKTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5cbi8vIG1ldGFkYXRhIGV4YW1wbGVcbi8vIHsga2V5OiAnJywgbmFtZXNwYWNlOiAnJywgZXh0ZW5kczogbnVsbCwgY29uc3RydWN0OiBmbiwgbWV0aG9kczoge30gfVxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMuc2VydmljZVN0YWNrID0gW107XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChjb250YWluZXJba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250YWluZXJba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBjb250YWluZXJba2V5XS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXJba2V5XS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5maWx0ZXIsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmNvbXBvbmVudCwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzRmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5zZXJ2aWNlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzIGNvbnN0cnVjdG9yIGZvciBrZXkgJyArIGtleU9yQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgY29udGFpbmVyID0gdGhpcy5nZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlcy5zZXJ2aWNlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcGFyc2VGdWxsTmFtZShuYW1lLCBhbGlhcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge25zOiAnJywga2V5OiAnJ30sXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQua2V5ID0gbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5rZXkgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIHJlc3VsdC5ucyA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcblxuICAgICAgICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc29tZShhbGlhcywgZnVuY3Rpb24gKHNob3J0TmFtZSwgZnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3J0TmFtZSA9PT0gcmVzdWx0Lm5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubnMgPSBmdWxsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlLCBtZXRhZGF0YSwgY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHNlcnZpY2VGdWxsTmFtZSwgaGFzTG9vcERlcGVuZGVuY3kgPSBmYWxzZTtcblxuICAgICAgICBpZihjaGVja0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGluZyBhIHNlcnZpY2UgaW5zdGFuY2UgYXQgdGhlIG1vbWVudFxuICAgICAgICAgICAgc2VydmljZUZ1bGxOYW1lID0gdXRpbHMuZm9ybWF0KCd7MH0uezF9JywgbWV0YWRhdGEubmFtZXNwYWNlLCBtZXRhZGF0YS5rZXkpO1xuICAgICAgICAgICAgaGFzTG9vcERlcGVuZGVuY3kgPSB0aGlzLnNlcnZpY2VTdGFjay5pbmRleE9mKHNlcnZpY2VGdWxsTmFtZSkgIT09IC0xO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5wdXNoKHNlcnZpY2VGdWxsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHNlcnZpY2UgZGVwZW5kZW5jeSBzdGFja1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gb2NjdXJzIGxvb3AgZGVwZW5kZW5jeVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvb3AgZGVwZW5kZW5jeTogXCIgKyB0aGlzLnNlcnZpY2VTdGFjay5qb2luKCctPicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHNlcnZpY2UsIGtleSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5ID0gJyQkJyArIGtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VydmljZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBzZWxmLnBhcnNlRnVsbE5hbWUoc2VydmljZSwgbWV0YWRhdGEuYWxpYXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2Uoc2VydmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTsiLCJpbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgZ2V0IGluamVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnNBbGlhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kZGF0YS5hbGlhcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2dyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy50eXBlID0ge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7fSxcclxuICAgICAgICAgICAgZGlyZWN0aXZlczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbXNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VUZW1wbGF0ZSh0cGwpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VUcGwodHBsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29tcG9uZW50KG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgY29tcG9uZW50LFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuY29tcG9uZW50cztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGJ1ZmZlcltuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pbmplY3Rvci5wYXJzZUZ1bGxOYW1lKG5hbWUsIHRoaXMubnNBbGlhcyk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0Q29tcG9uZW50KGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gY29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRGlyZWN0aXZlKG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgZGlyZWN0aXZlLFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuZGlyZWN0aXZlcztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGJ1ZmZlcltuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pbmplY3Rvci5wYXJzZUZ1bGxOYW1lKG5hbWUsIHRoaXMubnNBbGlhcyk7XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0RGlyZWN0aXZlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gZGlyZWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRmlsdGVyKG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgZmlsdGVyLFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChidWZmZXJbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSBidWZmZXJbbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaW5qZWN0b3IucGFyc2VGdWxsTmFtZShuYW1lLCB0aGlzLm5zQWxpYXMpO1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUZpbHRlcihpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltuYW1lXSA9IGZpbHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgcm9sZXMgPSB7XG4gICAgZmlsdGVyOiAwLFxuICAgIHNlcnZpY2U6IDEsXG4gICAgY29tcG9uZW50OiAyLFxuICAgIGRpcmVjdGl2ZTogM1xufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhLCB0cnVlKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShuYW1lKSB7XG4gICAgZnVuY3Rpb24gbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgbmFtZXNwYWNlOm5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ3Jvb3QnLCBjb25maWcsIHtcbiAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfSk7XG4gICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuXG4gICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgcm9vdC4kcmVuZGVyKCk7XG4gICAgcm9vdC4kbW91bnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIHJlbmRlcixcbiAgICBpbmplY3RvclxufTsiXSwic291cmNlUm9vdCI6IiJ9