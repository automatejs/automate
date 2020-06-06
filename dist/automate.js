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

function convertToHumpName(name, separator, uppercaseFirstLetter) {
  return name.split(separator).map(function (value, index) {
    if (index === 0 && !uppercaseFirstLetter) {
      return value;
    }

    if (value.length === 1) {
      return value.toUpperCase();
    }

    return value.charAt(0).toUpperCase() + value.substring(1);
  }).join('');
}

function convertFromHumpName(name, separator, uppercaseFirstLetter) {
  var i = 0,
      newName = '',
      _char;

  while (i < name.length) {
    _char = name[i];

    if ((i !== 0 || uppercaseFirstLetter) && /[A-Z]/.test(_char)) {
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
        var newName = _utils__WEBPACK_IMPORTED_MODULE_0__["convertToHumpName"](name, '-', true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkbWFpblZpZXciLCJSZW5kZXJlciIsInJlbmRlciIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCIkaGlkZUVsZW1lbnQiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIiRyZW1vdmVFbGVtZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImRlc3Ryb3kiLCJidWZmZXIiLCJkYXRhSXRlbSIsImhhcyIsImdldCIsImxlbmd0aCIsInNoaWZ0Iiwic2V0IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsInNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiZmlyZSIsImNoZWNrRGVmYXVsdCIsImdldENoaWxkcmVuT2ZFbGVtZW50IiwiQXJyYXkiLCJzbGljZSIsImNoaWxkTm9kZXMiLCJjbGVhckNoaWxkcmVuT2ZFbGVtZW50IiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbGVtZW50IiwibmV3RWxtIiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZUVsZW1lbnRzQmV0d2VlbiIsInN0YXJ0RWxtIiwiZW5kRWxtIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJhcHBlbmRFbGVtZW50IiwibGFzdENoaWxkIiwiYWRkQ2xhc3MiLCJjbHMiLCJ0cmltIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwYXJzZUV4cHJlc3Npb24iLCJwYXJzZUV4cCIsInByb2dyYW0iLCJhY2Nlc3NvciIsImJ1aWxkZXIiLCJFeHBCdWlsZGVyIiwiYW5hbHlzZVByb2dyYW0iLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwiYXJncyIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImJ1aWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsImRlZmF1bHRPcHRpb25zIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJFdmFsdWF0b3IiLCIkcGFyc2VyIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCJyZXNvbHZlRmlsdGVyIiwiZXhlY3V0ZSIsImFwcGx5IiwiTnVsbEV4cHJlc3Npb25Ob2RlIiwidGFyZ2V0Tm9kZSIsImRlZiIsImxleEV4cCIsIkV4cExleGVyIiwibGV4IiwiRXhwUGFyc2VyIiwicGFyc2UiLCJidWlsZEV4cHJlc3Npb24iLCJidWlsZEFzc2lnbm1lbnQiLCJidWlsZENvbmRpdGlvbiIsImJ1aWxkTG9naWMiLCJidWlsZEJpbmFyeSIsImJ1aWxkVW5hcnkiLCJidWlsZENhbGwiLCJidWlsZE1lbWJlciIsImJ1aWxkSWRlbnRpZmllciIsImJ1aWxkTGl0ZXJhbCIsImJ1aWxkQXJyYXkiLCJidWlsZFByb3BlcnR5IiwiYnVpbGRPYmplY3QiLCJyZXMiLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0IiwidG9rZW5zIiwiY2giLCJjaGFyQXQiLCJyZWFkU3RyaW5nIiwiaXNOdW1iZXIiLCJwZWVrIiwicmVhZE51bWJlciIsImlzSWRlbnRpZmllclN0YXJ0IiwicGVla011bHRpY2hhciIsInJlYWRJZGVudCIsImlzIiwiaXNXaGl0ZXNwYWNlIiwiY2gyIiwiY2gzIiwib3AxIiwiT1BFUkFUT1JTIiwib3AyIiwib3AzIiwidG9rZW4iLCJ0aHJvd0Vycm9yIiwiY2hhcnMiLCJpIiwibnVtIiwiY29kZVBvaW50QXQiLCJpc1ZhbGlkSWRlbnRpZmllclN0YXJ0IiwiaXNJZGVudGlmaWVyQ29udGludWUiLCJpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlIiwiY3AiLCJjaGFyQ29kZUF0IiwiY3AxIiwiY3AyIiwiZXJyb3IiLCJzdGFydCIsImVuZCIsImNvbFN0ciIsInN1YnN0cmluZyIsIm51bWJlciIsInBlZWtDaCIsImlzRXhwT3BlcmF0b3IiLCJjb25zdGFudCIsIk51bWJlciIsInF1b3RlIiwic3RyaW5nIiwicmF3U3RyaW5nIiwiZXNjYXBlIiwiaGV4IiwibWF0Y2giLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJwYXJzZUludCIsInJlcCIsIkVTQ0FQRSIsIm9wZXJhdG9yVGV4dCIsImxleGVyIiwibXNnIiwiUHJvZ3JhbU5vZGUiLCJleHByZXNzaW9uU3RhdGVtZW50IiwiZXhwZWN0IiwiRXhwcmVzc2lvblN0YXRlbWVudE5vZGUiLCJmaWx0ZXJDaGFpbiIsImFzdCIsInRlcm5hcnkiLCJpc0Fzc2lnbmFibGUiLCJBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsT1IiLCJjb25zdW1lIiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxBTkQiLCJMb2dpY2FsRXhwcmVzc2lvbk5vZGUiLCJlcXVhbGl0eSIsInJlbGF0aW9uYWwiLCJCaW5hcnlFeHByZXNzaW9uTm9kZSIsImFkZGl0aXZlIiwibXVsdGlwbGljYXRpdmUiLCJVbmFyeUV4cHJlc3Npb25Ob2RlIiwicHJpbWFyeSIsImFycmF5RGVjbGFyYXRpb24iLCJsaXRlcmFscyIsImhhc093blByb3BlcnR5IiwiTGl0ZXJhbE5vZGUiLCJuZXh0IiwicGVla0FoZWFkIiwiQ2FsbEV4cHJlc3Npb25Ob2RlIiwicGFyc2VBcmd1bWVudHMiLCJNZW1iZXJFeHByZXNzaW9uTm9kZSIsImJhc2VFeHByZXNzaW9uIiwiaWRlbnRpZmllcnMiLCJlbnRpcmVOYW1lIiwiSWRlbnRpZmllck5vZGUiLCJwZWVrVG9rZW4iLCJBcnJheUV4cHJlc3Npb25Ob2RlIiwiUHJvcGVydHlOb2RlIiwiT2JqZWN0RXhwcmVzc2lvbk5vZGUiLCJlMSIsImUyIiwiZTMiLCJlNCIsInQiLCJBc3ROb2RlIiwiUHJvZ3JhbSIsImtpbmQiLCJwcmVmaXgiLCJ1bmRlZmluZWQiLCJEZWxheWVyIiwidGltZW91dCIsImRlbGF5SWQiLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiTGlzdGVuZXIiLCJ2YWx1ZUNoYW5nZWQiLCJjb2xsZWN0aW9uQ2hhbmdlZCIsIm9sZFZhbHVlIiwiT2JzZXJ2ZXIiLCJhY2Nlc3NvcnMiLCJsaXN0ZW5lcnMiLCJ3YXRjaGVyIiwiV2F0Y2hlciIsImFuYWx5c2VyIiwiZGVsYXllciIsIm5vdGlmeSIsImhhc0NoYW5nZSIsInNldE5ld1ZhbHVlIiwic2V0Q29sbGVjdGlvbkNoYW5nZWQiLCJnZXRBY2Nlc3NvciIsImV2YWx1YXRvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJub3RpZnlDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwiYXJndW1lbnRzIiwiY29sbGVjdGlvbiIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldFByb3h5IiwiaXNQcm94eSIsInByb3h5IiwiZ2V0VGFyZ2V0IiwibWFrZVByb3h5IiwiUHJveHkiLCJPYmplY3RMaXN0ZW5lciIsImtleXMiLCJnZXRIYW5kbGVycyIsIm9mZlByb3BlcnR5Q2hhbmdlZCIsImhhbmRsZVByb3BlcnR5Q2hhbmdlZCIsImdldExpc3RlbmVyIiwiZmlyZUtleSIsImZpbHRlcnMiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZUxpc3RlbmVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiQmluZGluZyIsImlzRXhwIiwibG9naWNhbCIsImF1dG9tYXRpb24iLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsImhhc1RyYW5zbGF0aW9uIiwiJGFzc2lnbiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIiRpbmplY3RvciIsImJpbmRpbmciLCJiaW5kaW5ncyIsImNyZWF0ZUNvbXBvbmVudCIsIiRhcHBlbmRDaGlsZCIsImNvbXBvbmVudHMiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwicmVzb2x2ZUNvbXBvbmVudCIsIm5vZGVOYW1lIiwicmVzb2x2ZURpcmVjdGl2ZSIsIm5vZGVEYXRhIiwiY29udGFpbmVyIiwiVmlldyIsInZub2RlcyIsInBhcnNlVGVtcGxhdGUiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCJkaXJlY3RpdmVzIiwiJHBvc3RsaW5rIiwibm9kZXMiLCJ2bm9kZSIsImNvbXBpbGVOb2RlIiwiaXNWVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNWQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJlbG1EYXRhIiwicmVjb2duaXplQ29tcG9uZW50IiwiY3VzdG9tTGlua2VyIiwidmF0dHJzIiwic29tZSIsImF0dHJEYXRhIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJzZWVrU2xvdCIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwibmV3QmluZGluZyIsInN0YXJ0c1dpdGgiLCJpc0V2ZW50Iiwic3Vic3RyIiwiaXNEb21FdmVudCIsInJlY29nbml6ZURpcmVjdGl2ZSIsIm5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWdubWVudCIsIiRjb21waWxlIiwic2V0SHRtbEF0dHIiLCJyZWdpc3RlckF1dG9tYXRpb24iLCJwcm9wZXJ0eU5hbWUiLCIkaGFzUHJvcGVydHkiLCJjb21waWxlIiwidnRleHQiLCJuZXdUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJpbnN0YW5jZSIsIm5ld0NvbXBvbmVudCIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHNldFNsb3QiLCIkbW91bnQiLCJldmVudE5hbWUiLCJsaW5rIiwiJGNoYW5nZSIsImlzVkVsbSIsInNsb3QiLCJnZXRBdHRyIiwiZ2V0SW5uZXJUcGwiLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsInVwcGVyY2FzZUZpcnN0TGV0dGVyIiwiY29udmVydEZyb21IdW1wTmFtZSIsIm5ld05hbWUiLCJjaGFyIiwib2JqSW5kZXgiLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJmdW5jIiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJjb25jYXQiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwiaGFzUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkY2hpbGRyZW4iLCJQYXJzZXIiLCIkb2JzZXJ2ZXIiLCIkZGVsZWdhdGUiLCIkZGF0YSIsImluamVjdFNlcnZpY2VzIiwibWVzc2FnZSIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsIiRnZXRUZW1wbGF0ZSIsIm1vdW50IiwiJHJlbW92ZUNoaWxkIiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCIkcmVuZGVyZXIiLCJvbkNvbXBpbGUiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJvbkNoYW5nZSIsIiRrZXkiLCIkJHNlYXJjaERpcmVjdGl2ZSIsInllcyIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwiU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJyb2xlcyIsImNvbmZpZyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsIkluamVjdG9yIiwiY2xhc3NDb250YWluZXIiLCJpbnN0YW5jZUNvbnRhaW5lciIsInNlcnZpY2VTdGFjayIsImdldENsYXNzQ29udGFpbmVyIiwicmVnaXN0ZXIiLCJpZ25vcmVDYXNlIiwiY29uc3RydWN0b3JzIiwibWV0YSIsIm5hbWVzcGFjZXMiLCJrZXlPckNvbnN0cnVjdG9yIiwiY3JlYXRlIiwiZ2V0SW5zdGFuY2VDb250YWluZXIiLCJnZXRGaWx0ZXIiLCJnZXRTZXJ2aWNlIiwibm9uU2hhcmVkIiwiYWxpYXMiLCJucyIsInBvcCIsInNob3J0TmFtZSIsImZ1bGxOYW1lIiwiY2hlY2tMb29wRGVwZW5kZW5jeSIsInNlcnZpY2VGdWxsTmFtZSIsImhhc0xvb3BEZXBlbmRlbmN5IiwiaW5qZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwicHJpdmF0ZUtleSIsInBhcnNlRnVsbE5hbWUiLCJjcmVhdGVTZXJ2aWNlIiwicHJvZ3JhbXMiLCJuc0FsaWFzIiwiZ2V0Q29tcG9uZW50IiwiZ2V0RGlyZWN0aXZlIiwiY3JlYXRlRmlsdGVyIiwibWVyZ2VNZXRhZGF0YSIsIm1ha2VDb21wb25lbnQiLCJtYWtlRGlyZWN0aXZlIiwibWFrZUZpbHRlciIsIm1ha2VTZXJ2aWNlIiwiaXNDb21wb25lbnQiLCJpc0RpcmVjdGl2ZSIsImlzRmlsdGVyIiwiaXNTZXJ2aWNlIiwiUm9vdCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87UUNWQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FB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aUN0dEIsUUFBakMsQ0FBbEI7QUFDQUksb0RBQVEsQ0FBQ08sZUFBVCxDQUF5QmhELEdBQXpCLEVBQThCZ3RCLFdBQTlCO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVM0RixXQUFULENBQXFCdE8sUUFBckIsRUFBK0I7QUFDM0IsU0FBT0EsUUFBUSxZQUFZN2pCLG9EQUEzQjtBQUNIOztBQUVELFNBQVNveUIsV0FBVCxDQUFxQnZPLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWWxoQixvREFBM0I7QUFDSDs7QUFFRCxTQUFTMHZCLFFBQVQsQ0FBa0J4TyxRQUFsQixFQUE0QjtBQUN4QixTQUFPQSxRQUFRLFlBQVk2Syw4Q0FBM0I7QUFDSDs7QUFFRCxTQUFTNEQsU0FBVCxDQUFtQnpPLFFBQW5CLEVBQTZCO0FBQ3pCLFNBQU9BLFFBQVEsWUFBWWdMLGdEQUEzQjtBQUNIOztBQUVELFNBQVM5dUIsTUFBVCxDQUFnQjhJLFFBQWhCLEVBQTBCcW1CLE1BQTFCLEVBQWtDO0FBQzlCLE1BQUl2SyxPQUFPLEdBQUd6aEIsUUFBUSxDQUFDMGhCLGFBQVQsQ0FBdUIvYixRQUF2QixDQUFkO0FBQ0EsTUFBSTBwQixJQUFJLEdBQUc5QyxnREFBTyxDQUFDc0MsYUFBUixDQUFzQixNQUF0QixFQUE4QjdDLE1BQTlCLEVBQXNDO0FBQzdDdHZCLFlBQVEsRUFBRStrQixPQUFPLENBQUNqaUI7QUFEMkIsR0FBdEMsQ0FBWDtBQUdBLE1BQUkrbEIsSUFBSSxHQUFHLElBQUk4SixJQUFKLEVBQVg7QUFFQTl3Qiw2REFBQSxDQUEyQmtqQixPQUEzQjtBQUNBOEQsTUFBSSxDQUFDL2dCLE9BQUw7QUFDQStnQixNQUFJLENBQUN2RSxNQUFMLENBQVlTLE9BQVo7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2xvdCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuXHJcbkBjb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc2xvdCdcclxufSlcclxuY2xhc3MgU2xvdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gdGhpcy4kJHBhcmVudC5zbG90cztcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBzbG90c1t0aGlzLnByb3BzLm5hbWVdO1xyXG5cclxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3ID0gbmV3IFJlbmRlcmVyKHRoaXMuJCRwYXJlbnQpLnJlbmRlcih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8vIGdsb2JhbCBldmVudHNcclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wZXJ0eUNoYW5nZWQ6IG5ldyBNZXNzYWdlKCksXHJcbiAgICB0cmFuc2xhdGVDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgLy8gbm90IGZvdW5kXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHJlZ2lzdGVyIHNhbWUgZXZlbnQgaGFuZGxlciBtb3JlIHRoYW4gb25jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGRhdGEsIHNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgLy8gYXR0YWNoIGV2ZW50IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmNhbGwoc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWJpbmQtaHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KHZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20taWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCF2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLW1vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbS1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSB2ZWxtLmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgdGFrZSBvdmVyIGxpbmsgZnVuY3Rpb24gZm9yIHJlbGF0ZWQgdmlydHVhbCBlbGVtZW50IG5vZGUsIG9uTGluayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG0tcmVwZWF0Jyk7XG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlRWxlbWVudHNCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBpdGVtVmlld3MgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1WaWV3ID0gc2VsZi5nZXRWaWV3RnJvbUJ1ZmZlcihzZWxmLml0ZW1WaWV3cywgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmICghaXRlbVZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxzID0ge307XG4gICAgICAgICAgICAgICAgbG9jYWxzWycka2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbVZpZXcgPSBzZWxmLiRyZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUsIGxvY2Fscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc2V0Vmlld1RvQnVmZmVyKGl0ZW1WaWV3cywgaXRlbSwgaXRlbVZpZXcpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbVZpZXcuY29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzID0gaXRlbVZpZXdzO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICBnZXRWaWV3RnJvbUJ1ZmZlcihidWZmZXIsIGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciB2aWV3O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcblxuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGxpc3Quc2hpZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmRlbGV0ZShkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBzZXRWaWV3VG9CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSwgdmlldykge1xuICAgICAgICB2YXIgbGlzdDtcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGJ1ZmZlci5zZXQoZGF0YUl0ZW0sIGxpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKHZpZXcpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pdGVtVmlld3MuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5mb3JFYWNoKHZpZXcgPT4gdmlldy5kZXN0cm95KCkpKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiAmJiB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zaG93J1xufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KCF2YWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1jaGVja2VkJ1xufSlcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tcmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIHNlbGVjdG9yOiAnbS1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5rZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcy1ldmVuJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0V2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzLW9kZCdcclxufSlcclxuY2xhc3MgQ2xhc3NPZGREaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKG5ld0NsYXNzLCBvbGRDbGFzcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9sZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBvbGRDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBuZXdDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXN0eWxlLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3R5bGUnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXdTdHlsZSwgb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChvbGRTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChuZXdTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC1kZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ20tc3dpdGNoLWRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnbS1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5tYXRjaERlZmF1bHQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC13aGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbS1zd2l0Y2gtd2hlbicpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdtLXN3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLmNoYW5nZWQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLnN3aXRjaEN0cmwudmFsdWUgPT09IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5tYXRjaGVkICE9IG1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IG1hdGNoZWQ7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLnBsdXNNYXRjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWludXNNYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghbWF0Y2hlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQgPSBuZXcgTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwbHVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCsrO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG1pbnVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudC0tO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoZWNrRGVmYXVsdCgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRNYXRjaGVkID0gdGhpcy5tYXRjaENvdW50IDw9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1hdGNoZWQgIT09IGRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gZGVmYXVsdE1hdGNoZWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdC5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxtLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0pO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0JldHdlZW4oc3RhcnRFbG0sIGVuZEVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gc3RhcnRFbG0ucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkcmVuT2ZFbGVtZW50KHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBzdGFydEVsbSAmJiBjaGlsZCAhPT0gZW5kRWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZEVsbSAmJiBjaGlsZCAhPT0gc3RhcnRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSBlbG0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxtLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZVN0cmluZyhjc3MpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXBwZW5kRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIHJlcGxhY2VFbGVtZW50LFxuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnRzQmV0d2VlbixcbiAgICBjbGVhckNoaWxkcmVuT2ZFbGVtZW50LFxuICAgIGxvYWRTdHlsZVN0cmluZ1xufTsiLCJpbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5cbmNsYXNzIEFjY2Vzc29yIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGV4cCkge1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZChrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXNlciB7XG4gICAgY29uc3RydWN0b3IocGFyc2VyKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyIHx8IHtcbiAgICAgICAgICAgIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIGFuYWx5c2UoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4gdGhpcy5hbmFseXNlTm9kZShhcmcpKTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHRoaXMuYW5hbHlzZU5vZGUoaXRlbSkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2UoY2hpbGQpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsLFxuICAgIGxvY2FsczogbnVsbFxufTtcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlciB8fCB7cGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cH07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHRoaXMuZXZhbHVhdGVOb2RlKGFyZykpO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnBhcnNlci5yZXNvbHZlRmlsdGVyKGNvbnRleHQucHJvcCk7XG5cbiAgICAgICAgICAgIGlmKGZpbHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIuZXhlY3V0ZS5hcHBseShmaWx0ZXIsIGFyZ1ZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm4gPSBjb250ZXh0Lm9ialtjb250ZXh0LnByb3BdO1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oZm4pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGNvbnRleHQub2JqLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGNvbnRleHQucHJvcCArICcgaXMgbm90IGEgZnVuY3Rpb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgb2JqID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG9iaiA9PSBudWxsICYmICh0aGlzLm9wdGlvbnMuYWxsb3dOdWxsIHx8IG1lbWJlci5vYmplY3QuYWxsb3dOdWxsKSkge1xuICAgICAgICAgICAgb2JqID0gbmV3IE51bGxFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdmFyIHByb3AgPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHkpO1xuICAgICAgICAgICAgcmV0dXJuIG9ialtwcm9wXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHRhcmdldDogb2JqLFxuICAgICAgICAgICAgdGFyZ2V0Tm9kZTogbWVtYmVyLm9iamVjdCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSxcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiBjb250ZXh0ICYmIGNvbnRleHQuYXNzaWdubWVudExlZnRcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHRhcmdldDtcblxuICAgICAgICBjb250ZXh0ID0gY29udGV4dCB8fCB7fTtcblxuICAgICAgICBpZiAoY29udGV4dC50YXJnZXROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuc2NvcGU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBjb250ZXh0LnRhcmdldFxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQuYXNzaWdubWVudExlZnQgfHwgY29udGV4dC5jYWxsZWUpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgb2JqOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgcHJvcDogaWRlbnRpZmllci5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQucHJvcGVydHlLZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gdGFyZ2V0W2lkZW50aWZpZXIubmFtZV07XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsICYmIHRoaXMub3B0aW9ucy5sb2NhbHMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMub3B0aW9ucy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcblxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XG59XG5cbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQobm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcblxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIGFyZ1ZhbHVlcy5qb2luKCc6Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXMgPSB1dGlscy5mb3JtYXQoJ3swfSh7MX0pJywgZm4sIGFyZ1ZhbHVlcy5qb2luKCcsICcpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgYnVpbGRNZW1iZXIobWVtYmVyKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmJ1aWxkKG1lbWJlci5vYmplY3QpO1xuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgIH1cblxuICAgIGJ1aWxkTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhsaXRlcmFsLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfTp7MX0nLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZE9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHByb3BzID0gb2JqLnByb3BlcnRpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgcHJvcHMuam9pbignLCAnKSk7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCBpdGVtcy5qb2luKCcsJykpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBPUEVSQVRPUlMgfSBmcm9tICcuL2V4cC1vcGVyYXRvcnMnO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcblxuZXhwb3J0IGNsYXNzIEV4cExleGVyIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgbGV4KHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudG9rZW5zID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLicgJiYgdGhpcy5pc051bWJlcih0aGlzLnBlZWsoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWROdW1iZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzKGNoLCAnKCl7fVtdLiw7Oj8nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogY2ggfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSBjaCArIHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBjaDMgPSBjaDIgKyB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICAgICAgdmFyIG9wMSA9IE9QRVJBVE9SU1tjaF07XG4gICAgICAgICAgICAgICAgdmFyIG9wMiA9IE9QRVJBVE9SU1tjaDJdO1xuICAgICAgICAgICAgICAgIHZhciBvcDMgPSBPUEVSQVRPUlNbY2gzXTtcbiAgICAgICAgICAgICAgICBpZiAob3AxIHx8IG9wMiB8fCBvcDMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gb3AzID8gY2gzIDogKG9wMiA/IGNoMiA6IGNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiB0b2tlbiwgb3BlcmF0b3I6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gdG9rZW4ubGVuZ3RoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2VucztcbiAgICB9XG5cbiAgICBpcyhjaCwgY2hhcnMpIHtcbiAgICAgICAgcmV0dXJuIGNoYXJzLmluZGV4T2YoY2gpICE9PSAtMTtcbiAgICB9XG5cbiAgICBwZWVrKGkpIHtcbiAgICAgICAgdmFyIG51bSA9IGkgfHwgMTtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDwgdGhpcy50ZXh0Lmxlbmd0aCkgPyB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXggKyBudW0pIDogZmFsc2U7XG4gICAgfVxuXG4gICAgaXNOdW1iZXIoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnMCcgPD0gY2ggJiYgY2ggPD0gJzknKSAmJiB0eXBlb2YgY2ggPT09ICdzdHJpbmcnO1xuICAgIH1cblxuICAgIGlzV2hpdGVzcGFjZShjaCkge1xuICAgICAgICAvLyBJRSB0cmVhdHMgbm9uLWJyZWFraW5nIHNwYWNlIGFzIFxcdTAwQTBcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJyAnIHx8IGNoID09PSAnXFxyJyB8fCBjaCA9PT0gJ1xcdCcgfHxcbiAgICAgICAgICAgIGNoID09PSAnXFxuJyB8fCBjaCA9PT0gJ1xcdicgfHwgY2ggPT09ICdcXHUwMEEwJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydCA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gpIHtcbiAgICAgICAgcmV0dXJuICgnYScgPD0gY2ggJiYgY2ggPD0gJ3onIHx8XG4gICAgICAgICAgICAnQScgPD0gY2ggJiYgY2ggPD0gJ1onIHx8XG4gICAgICAgICAgICAnXycgPT09IGNoIHx8IGNoID09PSAnJCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllckNvbnRpbnVlKGNoLCBjcCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoLCBjcCkgfHwgdGhpcy5pc051bWJlcihjaCk7XG4gICAgfVxuXG4gICAgY29kZVBvaW50QXQoY2gpIHtcbiAgICAgICAgaWYgKGNoLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWJpdHdpc2VcbiAgICAgICAgcmV0dXJuIChjaC5jaGFyQ29kZUF0KDApIDw8IDEwKSArIGNoLmNoYXJDb2RlQXQoMSkgLSAweDM1RkRDMDA7XG4gICAgfVxuXG4gICAgcGVla011bHRpY2hhcigpIHtcbiAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgdmFyIHBlZWsgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgaWYgKCFwZWVrKSB7XG4gICAgICAgICAgICByZXR1cm4gY2g7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGNwMSA9IGNoLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIHZhciBjcDIgPSBwZWVrLmNoYXJDb2RlQXQoMCk7XG4gICAgICAgIGlmIChjcDEgPj0gMHhEODAwICYmIGNwMSA8PSAweERCRkYgJiYgY3AyID49IDB4REMwMCAmJiBjcDIgPD0gMHhERkZGKSB7XG4gICAgICAgICAgICByZXR1cm4gY2ggKyBwZWVrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjaDtcbiAgICB9XG5cbiAgICBpc0V4cE9wZXJhdG9yKGNoKSB7XG4gICAgICAgIHJldHVybiAoY2ggPT09ICctJyB8fCBjaCA9PT0gJysnIHx8IHRoaXMuaXNOdW1iZXIoY2gpKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKGVycm9yLCBzdGFydCwgZW5kKSB7XG4gICAgICAgIGVuZCA9IGVuZCB8fCB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgY29sU3RyID0gKHV0aWxzLmlzRGVmaW5lZChzdGFydCkgPyAncyAnICsgc3RhcnQgKyAnLScgKyB0aGlzLmluZGV4ICsgJyBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcoc3RhcnQsIGVuZCkgKyAnXScgOiAnICcgKyBlbmQpO1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0xleGVyIEVycm9yOiAnICsgZXJyb3IgKyAnIGF0IGNvbHVtbicgKyBjb2xTdHIgKyAnIGluIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXS4nKTtcbiAgICB9XG5cbiAgICByZWFkTnVtYmVyKCkge1xuICAgICAgICB2YXIgbnVtYmVyID0gJyc7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdXRpbHMubG93ZXJjYXNlKHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCkpO1xuICAgICAgICAgICAgaWYgKGNoID09PSAnLicgfHwgdGhpcy5pc051bWJlcihjaCkpIHtcbiAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBwZWVrQ2ggPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICdlJyAmJiB0aGlzLmlzRXhwT3BlcmF0b3IocGVla0NoKSkge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgIHBlZWtDaCAmJiB0aGlzLmlzTnVtYmVyKHBlZWtDaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICBudW1iZXIgKz0gY2g7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzRXhwT3BlcmF0b3IoY2gpICYmXG4gICAgICAgICAgICAgICAgICAgICghcGVla0NoIHx8ICF0aGlzLmlzTnVtYmVyKHBlZWtDaCkpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIGV4cG9uZW50Jyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogbnVtYmVyLFxuICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICB2YWx1ZTogTnVtYmVyKG51bWJlcilcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZElkZW50KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4ICs9IHRoaXMucGVla011bHRpY2hhcigpLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnBlZWtNdWx0aWNoYXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0lkZW50aWZpZXJDb250aW51ZShjaCkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gY2gubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogdGhpcy50ZXh0LnNsaWNlKHN0YXJ0LCB0aGlzLmluZGV4KSxcbiAgICAgICAgICAgIGlkZW50aWZpZXI6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVhZFN0cmluZyhxdW90ZSkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IHF1b3RlO1xuICAgICAgICB2YXIgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHJhd1N0cmluZyArPSBjaDtcbiAgICAgICAgICAgIGlmIChlc2NhcGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2ggPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGV4ID0gdGhpcy50ZXh0LnN1YnN0cmluZyh0aGlzLmluZGV4ICsgMSwgdGhpcy5pbmRleCArIDUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWhleC5tYXRjaCgvW1xcZGEtZl17NH0vaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCB1bmljb2RlIGVzY2FwZSBbXFxcXHUnICsgaGV4ICsgJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IDQ7XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGhleCwgMTYpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcmVwID0gRVNDQVBFW2NoXTtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nID0gc3RyaW5nICsgKHJlcCB8fCBjaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gJ1xcXFwnKSB7XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09IHF1b3RlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29uc3RhbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBxdW90ZScsIHN0YXJ0KTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBPUEVSQVRPUlMgPSB7fTtcblxudmFyIG9wZXJhdG9yVGV4dCA9ICcrIC0gKiAvICUgPT09ICE9PSA9PSAhPSA8ID4gPD0gPj0gJiYgfHwgISA9IHwnO1xudmFyIEVTQ0FQRSA9IHsgJ24nOiAnXFxuJywgJ2YnOiAnXFxmJywgJ3InOiAnXFxyJywgJ3QnOiAnXFx0JywgJ3YnOiAnXFx2JywgJ1xcJyc6ICdcXCcnLCAnXCInOiAnXCInIH07XG5cbm9wZXJhdG9yVGV4dC5zcGxpdCgnICcpLmZvckVhY2goZnVuY3Rpb24gKG9wZXJhdG9yKSB7XG4gICAgT1BFUkFUT1JTW29wZXJhdG9yXSA9IHRydWU7XG59KTsiLCJpbXBvcnQge1xuICAgIEFTVCxcbiAgICBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUsXG4gICAgQmluYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQ2FsbEV4cHJlc3Npb25Ob2RlLFxuICAgIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUsXG4gICAgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUsXG4gICAgSWRlbnRpZmllck5vZGUsXG4gICAgTGl0ZXJhbE5vZGUsXG4gICAgTG9naWNhbEV4cHJlc3Npb25Ob2RlLFxuICAgIE1lbWJlckV4cHJlc3Npb25Ob2RlLFxuICAgIE9iamVjdEV4cHJlc3Npb25Ob2RlLFxuICAgIFByb2dyYW1Ob2RlLFxuICAgIFByb3BlcnR5Tm9kZSxcbiAgICBVbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIEFycmF5RXhwcmVzc2lvbk5vZGVcbn0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxleGVyLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMubGV4ZXIgPSBsZXhlcjtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICB0aHJvd0Vycm9yKG1zZywgdG9rZW4pIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTeW50YXggRXJyb3I6IFRva2VuIFxcJycgKyB0b2tlbi50ZXh0ICsgJ1xcJycgKyBtc2cgKyAnIGF0IGNvbHVtbiAnICsgKHRva2VuLmluZGV4ICsgMSkgK1xuICAgICAgICAgICAgJyBvZiB0aGUgZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddIHN0YXJ0aW5nIGF0IFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyh0b2tlbi5pbmRleCkgKyAnXS4nKTtcbiAgICB9XG5cbiAgICBwYXJzZSh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5wcm9ncmFtKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBhbiB1bmV4cGVjdGVkIHRva2VuJywgdGhpcy50b2tlbnNbMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHByb2dyYW0oKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gbmV3IFByb2dyYW1Ob2RlKCk7XG4gICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gMCAmJiAhdGhpcy5wZWVrKCd9JywgJyknLCAnOycsICddJykpIHtcbiAgICAgICAgICAgICAgICBwcm9ncmFtLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvblN0YXRlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5leHBlY3QoJzsnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9ncmFtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvblN0YXRlbWVudCgpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSgpO1xuICAgICAgICBleHAuYXBwZW5kQ2hpbGQodGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBmaWx0ZXJDaGFpbigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSB0aGlzLmZpbHRlcihsZWZ0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBleHByZXNzaW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25tZW50KCk7XG4gICAgfVxuXG4gICAgaXNBc3NpZ25hYmxlKGFzdCkge1xuICAgICAgICByZXR1cm4gYXN0LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyIHx8IGFzdC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbjtcbiAgICB9XG5cbiAgICBhc3NpZ25tZW50KCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy50ZXJuYXJ5KCk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPScpKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNBc3NpZ25hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RyeWluZyB0byBhc3NpZ24gYSB2YWx1ZSB0byBhIG5vbiBsLXZhbHVlJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlc3VsdCA9IG5ldyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUocmVzdWx0LCB0aGlzLmFzc2lnbm1lbnQoKSwgJz0nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHRlcm5hcnkoKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5sb2dpY2FsT1IoKTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQ7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICBhbHRlcm5hdGUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnN1bWUoJzonKSkge1xuICAgICAgICAgICAgICAgIGNvbnNlcXVlbnQgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVzdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsT1IoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5sb2dpY2FsQU5EKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfHwnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJ3x8JywgbGVmdCwgdGhpcy5sb2dpY2FsQU5EKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxBTkQoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5lcXVhbGl0eSgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJyYmJykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCcmJicsIGxlZnQsIHRoaXMuZXF1YWxpdHkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXF1YWxpdHkoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5yZWxhdGlvbmFsKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc9PScsICchPScsICc9PT0nLCAnIT09JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMucmVsYXRpb25hbCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICByZWxhdGlvbmFsKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuYWRkaXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJzwnLCAnPicsICc8PScsICc+PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLmFkZGl0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGFkZGl0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubXVsdGlwbGljYXRpdmUoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLm11bHRpcGxpY2F0aXZlKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIG11bHRpcGxpY2F0aXZlKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMudW5hcnkoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJyonLCAnLycsICclJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgdW5hcnkoKSB7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgaWYgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nLCAnIScpKSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBVbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIHRoaXMudW5hcnkoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcmltYXJ5KCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcmltYXJ5KCkge1xuICAgICAgICB2YXIgcHJpbWFyeTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCcoJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmZpbHRlckNoYWluKCk7XG4gICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgnWycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5hcnJheURlY2xhcmF0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ3snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMub2JqZWN0KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLmxpdGVyYWxzLmhhc093blByb3BlcnR5KHRoaXMucGVlaygpLnRleHQpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gbmV3IExpdGVyYWxOb2RlKHRoaXMub3B0aW9ucy5saXRlcmFsc1t0aGlzLmNvbnN1bWUoKS50ZXh0XSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdub3QgYSBwcmltYXJ5IGV4cHJlc3Npb24nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbmV4dDtcbiAgICAgICAgd2hpbGUgKHRoaXMucGVlaygnKCcsICdbJywgJy4nKSB8fCAodGhpcy5wZWVrKCc/JykgJiYgdGhpcy5wZWVrQWhlYWQoMSwgJy4nKSkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGVjdCgnPycpKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeS5hbGxvd051bGwgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5leHBlY3QoJygnLCAnWycsICcuJyk7XG5cbiAgICAgICAgICAgIGlmIChuZXh0LnRleHQgPT09ICcoJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMucGFyc2VBcmd1bWVudHMoKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJ1snKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmV4cHJlc3Npb24oKSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5leHQudGV4dCA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBNZW1iZXJFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLmlkZW50aWZpZXIoKSwgZmFsc2UpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0lNUE9TU0lCTEUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJpbWFyeTtcbiAgICB9XG5cbiAgICBmaWx0ZXIoYmFzZUV4cHJlc3Npb24pIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbYmFzZUV4cHJlc3Npb25dLCBpZGVudGlmaWVycyA9IFt0aGlzLmlkZW50aWZpZXIoKV07XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcuJykpIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXJzLnB1c2godGhpcy5pZGVudGlmaWVyKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGx1cyBuYW1lc3BhY2VcbiAgICAgICAgdmFyIGVudGlyZU5hbWUgPSBpZGVudGlmaWVycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWU7XG4gICAgICAgIH0pLmpvaW4oJy4nKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShuZXcgSWRlbnRpZmllck5vZGUoZW50aXJlTmFtZSksIGFyZ3MpO1xuXG4gICAgICAgIHJlc3VsdC5maWx0ZXIgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnOicpKSB7XG4gICAgICAgICAgICBhcmdzLnB1c2godGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBwYXJzZUFyZ3VtZW50cygpIHtcbiAgICAgICAgdmFyIGFyZ3MgPSBbXTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJyknKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJncztcbiAgICB9XG5cbiAgICBpZGVudGlmaWVyKCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmNvbnN1bWUoKTtcbiAgICAgICAgaWYgKCF0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIG5vdCBhIHZhbGlkIGlkZW50aWZpZXInLCB0b2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyTm9kZSh0b2tlbi50ZXh0KTtcbiAgICB9XG5cbiAgICBjb25zdGFudCgpIHtcbiAgICAgICAgLy8gVE9ETyBjaGVjayB0aGF0IGl0IGlzIGEgY29uc3RhbnRcbiAgICAgICAgcmV0dXJuIG5ldyBMaXRlcmFsTm9kZSh0aGlzLmNvbnN1bWUoKS52YWx1ZSk7XG4gICAgfVxuXG4gICAgYXJyYXlEZWNsYXJhdGlvbigpIHtcbiAgICAgICAgdmFyIGFyciA9IG5ldyBBcnJheUV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICddJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ10nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBhcnIuYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG5cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBvYmplY3QoKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gW10sIHByb3BlcnR5O1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnfScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCd9JykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydHkgPSBuZXcgUHJvcGVydHlOb2RlKCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygpLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuaWRlbnRpZmllcigpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCc6JykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gcHJvcGVydHkua2V5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoJ1snKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ1snKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaW52YWxpZCBrZXknLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnRpZXMucHVzaChwcm9wZXJ0eSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ30nKTtcblxuICAgICAgICByZXR1cm4gbmV3IE9iamVjdEV4cHJlc3Npb25Ob2RlKHByb3BlcnRpZXMpO1xuICAgIH1cblxuICAgIGNvbnN1bWUoZTEpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuZXhwZWN0KGUxKTtcbiAgICAgICAgaWYgKCF0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyB1bmV4cGVjdGVkLCBleHBlY3RpbmcgWycgKyBlMSArICddJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9XG5cbiAgICBwZWVrVG9rZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zWzBdO1xuICAgIH1cblxuICAgIHBlZWsoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGVla0FoZWFkKDAsIGUxLCBlMiwgZTMsIGU0KTtcbiAgICB9XG5cbiAgICBwZWVrQWhlYWQoaSwgZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IGkpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMudG9rZW5zW2ldO1xuICAgICAgICAgICAgdmFyIHQgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgaWYgKHQgPT09IGUxIHx8IHQgPT09IGUyIHx8IHQgPT09IGUzIHx8IHQgPT09IGU0IHx8XG4gICAgICAgICAgICAgICAgKCFlMSAmJiAhZTIgJiYgIWUzICYmICFlNCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGV4cGVjdChlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnBlZWsoZTEsIGUyLCBlMywgZTQpO1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtbGV4ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtcGFyc2VyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWFwaSc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1idWlsZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXZhbHVhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vYW5hbHlzZXInOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEFycmF5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULkFycmF5RXhwcmVzc2lvbik7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGxlZnQsIHJpZ2h0LCBvcGVyYXRvcikge1xuICAgICAgICBzdXBlcihBU1QuQXNzaWdubWVudEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUpIHtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIEFTVCA9IHt9O1xuXG5BU1QuUHJvZ3JhbSA9ICdQcm9ncmFtJztcbkFTVC5FeHByZXNzaW9uU3RhdGVtZW50ID0gJ0V4cHJlc3Npb25TdGF0ZW1lbnQnO1xuQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uID0gJ0Fzc2lnbm1lbnRFeHByZXNzaW9uJztcbkFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24gPSAnQ29uZGl0aW9uYWxFeHByZXNzaW9uJztcbkFTVC5Mb2dpY2FsRXhwcmVzc2lvbiA9ICdMb2dpY2FsRXhwcmVzc2lvbic7XG5BU1QuQmluYXJ5RXhwcmVzc2lvbiA9ICdCaW5hcnlFeHByZXNzaW9uJztcbkFTVC5VbmFyeUV4cHJlc3Npb24gPSAnVW5hcnlFeHByZXNzaW9uJztcbkFTVC5DYWxsRXhwcmVzc2lvbiA9ICdDYWxsRXhwcmVzc2lvbic7XG5BU1QuTWVtYmVyRXhwcmVzc2lvbiA9ICdNZW1iZXJFeHByZXNzaW9uJztcbkFTVC5JZGVudGlmaWVyID0gJ0lkZW50aWZpZXInO1xuQVNULkxpdGVyYWwgPSAnTGl0ZXJhbCc7XG5BU1QuQXJyYXlFeHByZXNzaW9uID0gJ0FycmF5RXhwcmVzc2lvbic7XG5BU1QuUHJvcGVydHkgPSAnUHJvcGVydHknO1xuQVNULk9iamVjdEV4cHJlc3Npb24gPSAnT2JqZWN0RXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBOdWxsRXhwcmVzc2lvbk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiRudWxsID0gdHJ1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQmluYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgc3VwZXIoQVNULkJpbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ2FsbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBhcmdzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5DYWxsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgICAgICB0aGlzLmZpbHRlciA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnRlc3QgPSB0ZXN0O1xuICAgICAgICB0aGlzLmFsdGVybmF0ZSA9IGFsdGVybmF0ZTtcbiAgICAgICAgdGhpcy5jb25zZXF1ZW50ID0gY29uc2VxdWVudDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBJZGVudGlmaWVyTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgc3VwZXIoQVNULklkZW50aWZpZXIpO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2FzdCc7XG5leHBvcnQgKiBmcm9tICcuL2FzdC1ub2RlJztcbmV4cG9ydCAqIGZyb20gJy4vYXNzaWdubWVudCc7XG5leHBvcnQgKiBmcm9tICcuL2JpbmFyeSc7XG5leHBvcnQgKiBmcm9tICcuL2NhbGwnO1xuZXhwb3J0ICogZnJvbSAnLi9jb25kaXRpb25hbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9pZGVudGlmaWVyJztcbmV4cG9ydCAqIGZyb20gJy4vbGl0ZXJhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9sb2dpY2FsJztcbmV4cG9ydCAqIGZyb20gICcuL21lbWJlcic7XG5leHBvcnQgKiBmcm9tICAnLi9vYmplY3QnO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvZ3JhbSc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9wZXJ0eSc7XG5leHBvcnQgKiBmcm9tICAnLi91bmFyeSc7XG5leHBvcnQgKiBmcm9tICcuL2FycmF5JzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBMaXRlcmFsTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKEFTVC5MaXRlcmFsKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgbGVmdCwgcmlnaHQpIHtcbiAgICAgICAgc3VwZXIoQVNULkxvZ2ljYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE1lbWJlckV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob2JqZWN0LCBwcm9wZXJ0eSwgY29tcHV0ZWQpIHtcbiAgICAgICAgc3VwZXIoQVNULk1lbWJlckV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0eSA9IHByb3BlcnR5O1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gY29tcHV0ZWQ7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIE9iamVjdEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IocHJvcGVydGllcykge1xuICAgICAgICBzdXBlcihBU1QuT2JqZWN0RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb2dyYW1Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9ncmFtKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Qcm9wZXJ0eSk7XG4gICAgICAgIHRoaXMua2luZCA9ICdpbml0JztcbiAgICAgICAgdGhpcy5rZXkgPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBVbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGFyZykge1xuICAgICAgICBzdXBlcihBU1QuVW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcmVmaXggPSB0cnVlO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMuYXJnID0gYXJnO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIHBhcnNlT3B0aW9ucyA9IHtcbiAgICBpc0lkZW50aWZpZXJDb250aW51ZTogZmFsc2UsXG4gICAgaXNJZGVudGlmaWVyU3RhcnQ6IGZhbHNlLFxuICAgIGxpdGVyYWxzOiB7XG4gICAgICAgIGZhbHNlOiBmYWxzZSxcbiAgICAgICAgbnVsbDogbnVsbCxcbiAgICAgICAgdHJ1ZTogdHJ1ZSxcbiAgICAgICAgdW5kZWZpbmVkOiB1bmRlZmluZWRcbiAgICB9XG59OyIsImV4cG9ydCAqIGZyb20gJy4vdXRpbHMnO1xuZXhwb3J0ICogZnJvbSAnLi9jb3JlJztcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXInO1xuZXhwb3J0ICogZnJvbSAnLi92aWV3JztcbmV4cG9ydCAqIGZyb20gJy4vZGVjb3JhdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JzsiLCJleHBvcnQgY2xhc3MgRGVsYXllciB7XG4gICAgY29uc3RydWN0b3IoaGFuZGxlciwgdGltZW91dCkge1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGV4ZWN1dGUoc2NvcGUpIHtcbiAgICAgICAgaWYodGhpcy5kZWxheUlkICE9IG51bGwpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZWxheUlkID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRlbGF5SWQgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmICh0aGlzLmRlbGF5SWQgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuZGVsYXlJZCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9wcm94eSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vb2JzZXJ2ZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV2YWx1YXRvciwgQW5hbHlzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHsgV2F0Y2hlciB9IGZyb20gJy4vd2F0Y2hlcic7XG5pbXBvcnQgeyBEZWxheWVyIH0gZnJvbSAnLi9kZWxheWVyJztcblxuY2xhc3MgTGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKGV4cCwgaGFuZGxlciwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0TmV3VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5uZXdWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgc2V0Q29sbGVjdGlvbkNoYW5nZWQodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IHZhbHVlO1xuICAgIH1cblxuICAgIGhhc0NoYW5nZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVDaGFuZ2VkIHx8IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG4gICAgfVxuXG4gICAgbm90aWZ5KHNjb3BlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHRoaXMudmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMubmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZCA9IHRoaXMuY29sbGVjdGlvbkNoYW5nZWQ7XG5cbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubmV3VmFsdWU7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSwge1xuICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQ6IGNvbGxlY3Rpb25DaGFuZ2VkXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9ic2VydmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuYWNjZXNzb3JzID0ge307XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMud2F0Y2hlciA9IG5ldyBXYXRjaGVyKCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZXIgPSBuZXcgQW5hbHlzZXIoc2NvcGUuJHBhcnNlcik7XG4gICAgICAgIHRoaXMuZGVsYXllciA9IG5ldyBEZWxheWVyKHRoaXMubm90aWZ5LCAxNik7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcblxuICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3JzW2V4cF0gPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuY29weSh0cnVlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihpdGVtLnVud2F0Y2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMsIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKCF1dGlscy5pc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKGFjY2Vzc29ycywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0YXJnZXQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5leHApIHtcbiAgICAgICAgICAgICAgICAgICAga2V5ID0gZXZhbHVhdG9yLmV2YWx1YXRlKGtleSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvciwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcy5zY29wZSwgeyBhbGxvd051bGw6IHRydWUsIGxvY2FsczogbG9jYWxzIH0pO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHApKTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKTtcblxuICAgICAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KGNvbGxlY3Rpb24pIHx8IHV0aWxzLmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi53YXRjaGVyLndhdGNoKGNvbGxlY3Rpb24sICcqJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEV4cC5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgdW53YXRjaFByb3BzICYmIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5kZWxheWVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy53YXRjaGVyLmRlc3Ryb3koKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IG51bGw7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG52YXIgaXNQcm94eVN5bWJvbCA9IFN5bWJvbCgnX19pc1Byb3h5JyksXG4gICAgdGFyZ2V0U3ltYm9sID0gU3ltYm9sKCdfX3RhcmdldCcpO1xuXG52YXIgaGFuZGxlciA9IHtcbiAgICBnZXQ6IGdldFByb3h5LFxuICAgIHNldDogc2V0UHJveHlcbn07XG5cbi8vIGV4dGVuZHMgb2JqZWN0IHByb3RvdHlwZSwgYWRkIGZ1bmN0aW9uIHRvUHJveHlcbi8vIE9iamVjdC5wcm90b3R5cGUudG9Qcm94eSA9IGZ1bmN0aW9uICgpIHtcbi8vICAgICByZXR1cm4gaXNQcm94eSh0aGlzKSA/IHRoaXMgOiBuZXcgUHJveHkodGhpcywgaGFuZGxlcik7XG4vLyB9O1xuXG5mdW5jdGlvbiBpc1Byb3h5KHByb3h5KSB7XG4gICAgcmV0dXJuIHV0aWxzLmlzT2JqZWN0KHByb3h5KSAmJiBwcm94eVtpc1Byb3h5U3ltYm9sXTtcbn1cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHByb3h5KSB7XG4gICAgcmV0dXJuIGlzUHJveHkocHJveHkpID8gcHJveHlbdGFyZ2V0U3ltYm9sXSA6IHByb3h5O1xufVxuXG5mdW5jdGlvbiBtYWtlUHJveHkodmFsdWUpIHtcbiAgICBpZiAodXRpbHMuaXNPYmplY3QodmFsdWUpICYmICFpc1Byb3h5KHZhbHVlKSkge1xuICAgICAgICB1dGlscy5mb3JFYWNoKHZhbHVlLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICB2YWx1ZVtrZXldID0gbWFrZVByb3h5KGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRQcm94eSh0YXJnZXQsIGtleSkge1xuICAgIGlmIChrZXkgPT09IGlzUHJveHlTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleSA9PT0gdGFyZ2V0U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldFtrZXldO1xufVxuXG5mdW5jdGlvbiBzZXRQcm94eSh0YXJnZXQsIGtleSwgdmFsdWUpIHtcbiAgICB2YXIgb2xkVmFsdWUgPSBnZXRUYXJnZXQodGFyZ2V0W2tleV0pLFxuICAgICAgICBuZXdWYWx1ZSA9IGdldFRhcmdldCh2YWx1ZSk7XG5cbiAgICBpZiAob2xkVmFsdWUgIT09IG5ld1ZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gbWFrZVByb3h5KHZhbHVlKTtcbiAgICAgICAgZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5maXJlKHtcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWU6IG9sZFZhbHVlLFxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGFyZ2V0W2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNQcm94eSxcbiAgICBnZXRUYXJnZXQsXG4gICAgaGFuZGxlclxufSIsImltcG9ydCB7IGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgZ2V0VGFyZ2V0IH0gZnJvbSAnLi9wcm94eSc7XG5cbmNsYXNzIE9iamVjdExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQ7XG4gICAgICAgIHRoaXMua2V5cyA9IHt9O1xuICAgIH1cblxuICAgIGdldEhhbmRsZXJzKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMua2V5c1trZXldKSB7XG4gICAgICAgICAgICB0aGlzLmtleXNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMua2V5c1trZXldO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLnB1c2goaGFuZGxlcik7XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuXG4gICAgICAgIGlmIChoYW5kbGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhbmRsZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBoYW5kbGVycy5pbmRleE9mKGhhbmRsZXIpO1xuXG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZpcmVLZXkoa2V5LCBhcmdzLCBzZWxmKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChoYW5kbGVyID0+IHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChzZWxmLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgV2F0Y2hlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzID0gW107XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkID0gZXZlbnRzLnByb3BlcnR5Q2hhbmdlZC5vbihlID0+IHRoaXMuaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGUuZGF0YSkpO1xuICAgIH1cblxuICAgIGhhbmRsZVByb3BlcnR5Q2hhbmdlZChkYXRhKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGRhdGEudGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleShkYXRhLmtleSwgZGF0YSk7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KCcqJywgZGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIsIGZpbHRlcnMgPSBsaXN0ZW5lcnMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udGFyZ2V0ID09PSB0YXJnZXQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChmaWx0ZXJzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZmlsdGVyc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgT2JqZWN0TGlzdGVuZXIodGFyZ2V0KTtcbiAgICAgICAgbGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgZ2V0T3JDcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcblxuICAgICAgICBpZiAobGlzdGVuZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICB3YXRjaCh0YXJnZXQsIGtleSwgYWN0aW9uKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0T3JDcmVhdGVMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZ2V0VGFyZ2V0KHRhcmdldCkpO1xuXG4gICAgICAgIGxpc3RlbmVyLnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbGlzdGVuZXIudW5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQoKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXhwcmVzc2lvbiB9IGZyb20gJy4vZXhwcmVzc2lvbic7XG5cbmV4cG9ydCBjbGFzcyBCaW5kaW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGV4dCwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIC8vIGlzIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5pc0V4cCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBsb2dpY2FsIGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5sb2dpY2FsID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGFzc2lnbm1lbnQgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICAgICAgLy8gaGFuZGxlciB0byB1cGRhdGUgdmlldyBmcm9tIG1vZGVsIHZhbHVlXG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm9sZFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2VnbWVudHMgPSBbXTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucyA9IFtdO1xuICAgIH1cblxuICAgIGNyZWF0ZUV4cHJlc3Npb24odGV4dCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb24odGV4dCk7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMucHVzaChleHApO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGNvbXBpbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmxvZ2ljYWwgfHwgdGhpcy5hc3NpZ25tZW50KSB7XG4gICAgICAgICAgICB0aGlzLmlzRXhwID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUV4cHJlc3Npb24odGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gL3t7KFtefV0qKX19L2c7XG4gICAgICAgICAgICB2YXIgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICB2YXIgc2VnbWVudCwgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcblxuICAgICAgICAgICAgd2hpbGUgKG1hdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2guaW5kZXggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2godGhpcy5jcmVhdGVFeHByZXNzaW9uKG1hdGNoWzFdKSk7XG5cbiAgICAgICAgICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy50ZXh0Lmxlbmd0aCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGluaygpIHtcbiAgICAgICAgaWYgKHRoaXMuYXNzaWdubWVudCB8fCB0aGlzLmxvZ2ljYWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGV0ZWN0KCk7XG5cbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAud2F0Y2godGhpcy5zY29wZSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGV0ZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXRjaCgpO1xuICAgICAgICAgICAgfSwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBkZXRlY3QoKSB7XG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IHRoaXMuY29tcHV0ZSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnZhbHVlICE9IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwcmVzc2lvbnNbMF0uY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuc2VnbWVudHMucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhjdXIpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByZXYgKyBjdXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpdCBpcyBhIGV4cHJlc3Npb25cbiAgICAgICAgICAgIHJldHVybiBwcmV2ICsgKGN1ci5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2FscykgfHwgJycpO1xuICAgICAgICB9LCAnJyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuZXhwcmVzc2lvbnNbMF0uYXNzaWduKHRoaXMuc2NvcGUsIHZhbHVlLCBsb2NhbHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHRoaXMudGV4dCArICcgaXMgbm90IHZhbGlkIGV4cHJlc3Npb24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IGF1dG9tYXRpb247XG4gICAgfVxuXG4gICAgdW5yZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICBpZiAodGhpcy5hdXRvbWF0aW9uID09PSBhdXRvbWF0aW9uKSB7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbW9kaWZ5IHZpZXcgYWNjb3JkaW5nIHRvIG1vZGVsXG4gICAgcGF0Y2goKSB7XG4gICAgICAgIGlmICh0aGlzLmNoYW5nZWQgJiYgdGhpcy5hdXRvbWF0aW9uICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uLmNhbGwodGhpcywgdGhpcy52YWx1ZSwgdGhpcy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1RyYW5zbGF0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vdmlldyc7XG5cbi8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBpbmplY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGluamVjdG9yO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyO1xuICAgICAgICB0aGlzLnZpZXcgPSBudWxsO1xuICAgIH1cblxuICAgIG5ld0JpbmRpbmcodGV4dCkge1xuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzKTtcbiAgICAgICAgdGhpcy52aWV3LmJpbmRpbmdzLnB1c2goYmluZGluZyk7XG4gICAgICAgIHJldHVybiBiaW5kaW5nO1xuICAgIH1cblxuICAgIG5ld0NvbXBvbmVudChjbHMpIHtcbiAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5pbmplY3Rvci5jcmVhdGVDb21wb25lbnQoY2xzKTtcblxuICAgICAgICB0aGlzLnNjb3BlLiRhcHBlbmRDaGlsZChjaGlsZCk7XG4gICAgICAgIHRoaXMudmlldy5jb21wb25lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBuZXdEaXJlY3RpdmUoY2xzKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLmluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShjbHMpO1xuXG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcy5zY29wZTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIHJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBjb21wb25lbnQgPSB0aGlzLnBhcnNlci5yZXNvbHZlQ29tcG9uZW50KHZlbG0ubm9kZU5hbWUpO1xuXG4gICAgICAgIC8vIHZlbG0ubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMucGFyc2VyLnJlc29sdmVEaXJlY3RpdmUodmF0dHIubm9kZURhdGEubmFtZSk7XG5cbiAgICAgICAgLy8gdmF0dHIubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZW5kZXIodGVtcGxhdGUpIHtcbiAgICAgICAgLy8gbXVzdCBzZXQgYSByb290IGVsZW1lbnQgZm9yIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIFwiYWZ0ZXJMaW5rXCIgaG9vcHNcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB0aGlzLnZpZXcgPSBuZXcgVmlldygpO1xuXG4gICAgICAgIHRoaXMudmlldy52bm9kZXMgPSB0aGlzLnBhcnNlci5wYXJzZVRlbXBsYXRlKHRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKTtcblxuICAgICAgICAvLyB0aGlzLmVudGl0eS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJlbGluaygpKTtcblxuICAgICAgICB0aGlzLmxpbmtOb2Rlcyh0aGlzLnZpZXcudm5vZGVzKS5mb3JFYWNoKG5vZGUgPT4gY29udGFpbmVyLmFwcGVuZENoaWxkKG5vZGUpKTtcblxuICAgICAgICAvLyBjYWxsIGRpcmVjdGl2ZSBsaWZlIGN5Y2xlIGhvb3BzXG4gICAgICAgIHRoaXMudmlldy5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcG9zdGxpbmsoKSk7XG5cbiAgICAgICAgLy8gY2FjaGUgdGhlIGdlbmVyYXRlZCBlbGVtZW50c1xuICAgICAgICBkb20uZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoY29udGFpbmVyKS5mb3JFYWNoKG5vZGUgPT4gdGhpcy52aWV3Lm5vZGVzLnB1c2gobm9kZSkpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLnZpZXc7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGVzKHZub2Rlcykge1xuICAgICAgICB2bm9kZXMuZm9yRWFjaCh2bm9kZSA9PiB0aGlzLmNvbXBpbGVOb2RlKHZub2RlKSk7XG4gICAgfVxuXG4gICAgY29tcGlsZU5vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzVkNvbW1lbnQodm5vZGUpKXtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUNvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlRWxtKHZub2RlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgcmV0dXJuIHZub2Rlcy5tYXAodm5vZGUgPT4gdGhpcy5saW5rTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGxpbmtOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua1RleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmxpbmtFbG0odm5vZGUpO1xuICAgIH1cblxuICAgIGNvbXBpbGVFbG0odmVsbSkge1xuICAgICAgICB2YXIgZWxtRGF0YSA9IHZlbG0ubm9kZURhdGE7XG5cbiAgICAgICAgZWxtRGF0YS5jb21wb25lbnQgPSB0aGlzLnJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKTtcblxuICAgICAgICB2YXIgZGlyZWN0aXZlcyA9IFtdO1xuICAgICAgICB2YXIgY3VzdG9tTGlua2VyID0gdmVsbS52YXR0cnMuc29tZSh2YXR0ciA9PiB7XG4gICAgICAgICAgICB2YXIgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YTtcblxuICAgICAgICAgICAgdGhpcy5jb21waWxlQXR0cih2YXR0cik7XG5cbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5kaXJlY3RpdmUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXMucHVzaChhdHRyRGF0YS5kaXJlY3RpdmUpO1xuICAgICAgICAgICAgICAgIGVsbURhdGEubGlua2VyID0gYXR0ckRhdGEubGlua2VyO1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG1EYXRhLmxpbmtlciAhPSBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIHNvcnQgZGlyZWN0aXZlIGFjY29yZGluZyB0byBpdHMgcHJpb3JpdHlcbiAgICAgICAgdXRpbHMub3JkZXJCeShkaXJlY3RpdmVzLCBkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwcmlvcml0eSkuZm9yRWFjaChkaXJlY3RpdmUgPT4gdGhpcy52aWV3LmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpKTtcblxuICAgICAgICBlbG1EYXRhLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGVsbURhdGEuc2xvdHMgPSB0aGlzLnNlZWtTbG90KHZlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHZhdHRyLm5vZGVOYW1lLCBhdHRyVmFsdWUgPSB2YXR0ci5ub2RlVmFsdWUsXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLCBiaW5kaW5nO1xuXG4gICAgICAgIGlmKGF0dHJWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRG9tRXZlbnQgPSB1dGlscy5zb21lKGRvbUV2ZW50cywgZSA9PiBlID09PSBhdHRyRGF0YS5uYW1lKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcubG9naWNhbCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJzonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGJpbmRpbmcgJiYgKGJpbmRpbmcuaXNFeHAgPSB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMucmVjb2duaXplRGlyZWN0aXZlKHZhdHRyKTtcblxuICAgICAgICAgICAgaWYgKGRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgICAgIGF0dHJEYXRhLmRpcmVjdGl2ZSA9IHRoaXMubmV3RGlyZWN0aXZlKGRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlLiQkdmF0dHIgPSB2YXR0cjtcblxuICAgICAgICAgICAgICAgIGlmKGJpbmRpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nLmFzc2lnbm1lbnQgPSBhdHRyRGF0YS5kaXJlY3RpdmUuJGFzc2lnbm1lbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZS4kY29tcGlsZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJEYXRhLmxpbmtlciA9IGF0dHJEYXRhLmRpcmVjdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZGlyZWN0aXZlICcgKyBhdHRyRGF0YS5uYW1lICsgJyBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYmluZGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIShhdHRyRGF0YS5pc0V2ZW50IHx8IGF0dHJEYXRhLmRpcmVjdGl2ZSkpIHtcbiAgICAgICAgICAgIHZhciBzZXRIdG1sQXR0ciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbG0gPSB2YXR0ci52ZWxtLmVsbTtcblxuICAgICAgICAgICAgICAgIGlmIChhdHRyRGF0YS5uYW1lLnN0YXJ0c1dpdGgoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkoZWxtLCBhdHRyRGF0YS5uYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAodmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbXBvbmVudCA9IHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvcGVydHlOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUoYXR0ckRhdGEubmFtZSwgJy0nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50LiRoYXNQcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuJHNldFByb3BlcnR5KHByb3BlcnR5TmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5saW5rZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyLiRsaW5rKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLm5ld0NvbXBvbmVudChlbG1EYXRhLmNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh2ZWxtLmVsbSwgTV9DTVBfQ0xBU1MpO1xuXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHZlbG0uZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgdmVsbSA9IHZhdHRyLnZlbG0sXG4gICAgICAgICAgICBlbG0gPSB2ZWxtLmVsbSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsXG4gICAgICAgICAgICBiaW5kaW5nID0gYXR0ckRhdGEuYmluZGluZztcblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBldmVudE5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShhdHRyRGF0YS5uYW1lLCAnLScpO1xuICAgICAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuY29tcG9uZW50LiRiaW5kKGV2ZW50TmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGJpbmRpbmcubGluaygpO1xuICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmVnaXN0ZXIgYmluZGluZyBjaGFuZ2UgaGFuZGxlciBhZnRlciBmaXJzdCBwYXRjaFxuICAgICAgICBpZihhdHRyRGF0YS5kaXJlY3RpdmUpIHtcbiAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKChuZXdWYWx1ZSwgb2xkVmFsdWUpID0+IGF0dHJEYXRhLmRpcmVjdGl2ZS4kY2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua1RleHQodnRleHQpIHtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5saW5rKCk7XG4gICAgICAgIHZ0ZXh0LmVsbSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcudmFsdWUpO1xuICAgICAgICByZXR1cm4gdnRleHQuZWxtO1xuICAgIH1cblxuICAgIGxpbmtDb21tZW50KHZjbW50KSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVDb21tZW50KHZjbW50Lm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgc2Vla1Nsb3QodmVsbSkge1xuICAgICAgICB2YXIgc2xvdHMgPSB7fTtcblxuICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZihpc1ZFbG0oY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNsb3QgPSBjaGlsZC5nZXRBdHRyKCdzbG90Jyk7XG5cbiAgICAgICAgICAgICAgICBpZihzbG90KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsb3RzW3Nsb3Qubm9kZVZhbHVlXSA9IGNoaWxkLmdldElubmVyVHBsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gIHNsb3RzO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgICBnZXQgY29udGVudCgpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICB0aGlzLm5vZGVzLmZvckVhY2gobm9kZSA9PiBjb250ZW50LmFwcGVuZENoaWxkKG5vZGUpKTtcclxuICAgICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLm5vZGVzID0gW107XHJcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzID0gW107XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzID0gW107XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcclxuICAgICAgICB2YXIgZWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlbGVjdG9yT3JFbGVtZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYmluZFRyYW5zbGF0ZUNoYW5nZWQoKSB7XHJcbiAgICAvLyAgICAgdmFyIGJpbmRpbmdzID0gdGhpcy5lbnRpdHkuYmluZGluZ3M7XHJcbiAgICAvL1xyXG4gICAgLy8gICAgIGlmKCFiaW5kaW5ncy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vXHJcbiAgICAvLyAgICAgLy8gdXBkYXRlIHRleHQgd2hpbGUgdHJhbnNsYXRlIGNoYW5nZWRcclxuICAgIC8vICAgICB0aGlzLnVuYmluZFRyYW5zbGF0ZUNoYW5nZWQgPSBldmVudHMudHJhbnNsYXRlQ2hhbmdlZC5vbigoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIGJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICBiaW5kaW5nLmRldGVjdCgpO1xyXG4gICAgLy8gICAgICAgICAgICAgYmluZGluZy5wYXRjaCgpO1xyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uJGRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS5kZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMudm5vZGVzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZub2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMubm9kZXMubGVuZ3RoID0gMDtcclxuICAgIH1cclxufSIsImV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsLWJ1aWxkZXInOyIsImV4cG9ydCAqIGZyb20gJy4vdm5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi92YXR0cic7XG5leHBvcnQgKiBmcm9tICcuL3ZjbW50JztcbmV4cG9ydCAqIGZyb20gJy4vdmVsbSc7XG5leHBvcnQgKiBmcm9tICcuL3Z0ZXh0JztcbmV4cG9ydCAqIGZyb20gJy4vdnR5cGUnOyIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkF0dHIgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSwgdmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMudmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMucXVvdGUgPSAnXCInO1xuICAgIH1cblxuICAgIHNldFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkF0dHIodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcblxuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVkNtbnQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuY29tbWVudCwgJyNjb21tZW50JywgdmFsdWUpO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZDbW50KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcbmltcG9ydCB7IFZBdHRyIH0gZnJvbSAnLi92YXR0cic7XG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbC1hcGknO1xuaW1wb3J0IHsgVHBsQnVpbGRlciB9IGZyb20gJy4uL3RwbC1idWlsZGVyJztcblxuZXhwb3J0IGNsYXNzIFZFbG0gZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5lbGVtZW50LCBuYW1lKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgICAgICB0aGlzLnZhdHRycyA9IFtdO1xuICAgICAgICB0aGlzLnNlbGZDbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IFRwbEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBwdXNoQXR0cihhdHRyKSB7XG4gICAgICAgIGF0dHIudmVsbSA9IHRoaXM7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgfVxuXG4gICAgaGFzQXR0cigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudmF0dHJzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBnZXRBdHRyKGtleSkge1xuICAgICAgICB2YXIgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIubm9kZU5hbWUgPT09IGtleTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKCFtYXRjaGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWF0Y2hlc1swXTtcbiAgICB9XG5cbiAgICBzZXRBdHRyKGtleSwgdmFsdWUpIHtcbiAgICAgICAgdmFyIHRhcmdldCwgbWF0Y2hlcyA9IHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gbWF0Y2hlc1swXTtcbiAgICAgICAgICAgIHRhcmdldC5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBuZXcgVkF0dHIoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB0YXJnZXQudmVsbSA9IHRoaXM7XG4gICAgICAgICAgICB0YXJnZXQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2godGFyZ2V0KTtcblxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJlbW92ZUF0dHIoa2V5KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSBbXSwgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKGtleSBpbnN0YW5jZW9mIFZBdHRyKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0aGlzLnZhdHRycy5pbmRleE9mKGtleSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gc2VsZi52YXR0cnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudmF0dHJzLmZpbHRlcihmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhdHRyLmJlbG9uZ1RvKGtleSk7XG4gICAgICAgICAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IHNlbGYudmF0dHJzLmluZGV4T2YobWF0Y2gpO1xuICAgICAgICAgICAgICAgIG1hdGNoLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGFyZ2V0Lmxlbmd0aCA+IDAgPyB0YXJnZXRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgIGFwcGVuZEF0dHIoYXR0cikge1xuICAgICAgICBpZiAoYXR0ci52ZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkN1cnJlbnQgYXR0cmlidXRlIGlzIG5vdCBuZXchXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgYXR0ci5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLnZhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICByZXR1cm4gYXR0cjtcbiAgICB9XG5cbiAgICBnZXRPdXRlclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZCh0aGlzKTtcbiAgICB9XG5cbiAgICBnZXRJbm5lclRwbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRlci5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuICAgIH1cblxuICAgIHNldE91dGVyVHBsKHRwbCkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHBhcnNlVHBsKHRwbCkuZm9yRWFjaChmdW5jdGlvbiAodm5vZGUpIHtcbiAgICAgICAgICAgIHZub2RlLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICAgICAgc2VsZi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLCB2bm9kZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZik7XG4gICAgfVxuXG4gICAgc2V0SW5uZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkTm9kZXMoKTtcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLmFwcGVuZENoaWxkKHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHZhciBub2RlID0gbmV3IFZFbG0odGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuXG4gICAgICAgIG5vZGUudmF0dHJzID0gdGhpcy52YXR0cnMubWFwKGZ1bmN0aW9uICh2YXR0cikge1xuICAgICAgICAgICAgdmFyIGNvcHkgPSB2YXR0ci5jbG9uZU5vZGUoKTtcbiAgICAgICAgICAgIGNvcHkudmVsbSA9IG5vZGU7XG4gICAgICAgICAgICByZXR1cm4gY29weTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLnZhdHRycy5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBhdHRyLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52YXR0cnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBub2RlVHlwZSA9IHtcbiAgICBlbGVtZW50OiAxLFxuICAgIGF0dHJpYnV0ZTogMixcbiAgICB0ZXh0OiAzLFxuICAgIGNkYXRhU2VjdGlvbjogNCxcbiAgICBlbnRpdHlSZWZlcmVuY2U6IDUsXG4gICAgZW50aXR5OiA2LFxuICAgIHByb2Nlc3NpbmdJbnN0cnVjdGlvbjogNyxcbiAgICBjb21tZW50OiA4LFxuICAgIGRvY3VtZW50OiA5LFxuICAgIGRvY3VtZW50VHlwZTogMTAsXG4gICAgZG9jdW1lbnRGcmFnbWVudDogMTEsXG4gICAgbm90YXRpb246IDEyXG59XG5cbi8vIHZpcnR1YWwgbm9kZVxuZXhwb3J0IGNsYXNzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBuYW1lLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLm5vZGVUeXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy5ub2RlTmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMubm9kZVZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgIHRoaXMucHJldmlvdXNTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5uZXh0U2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubm9kZURhdGEgPSB7fTtcbiAgICB9XG5cbiAgICBwdXNoQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG5cbiAgICBidWlsZFNpYmxpbmcoKSB7XG4gICAgICAgIGlmICh0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAoc2VsZi5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHNlbGYuY2hpbGROb2Rlc1tpbmRleCAtIDFdO1xuICAgICAgICAgICAgICAgIGNoaWxkLm5leHRTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuYnVpbGRTaWJsaW5nKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyUGFyZW50QW5kU2libGluZygpIHtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ2hpbGROb2RlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggIT09IDA7XG4gICAgfVxuXG4gICAgY2xlYXJDaGlsZE5vZGVzKCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQubmV4dFNpYmxpbmcgPSBjaGlsZDtcbiAgICAgICAgICAgIGNoaWxkLnByZXZpb3VzU2libGluZyA9IHRoaXMubGFzdENoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgY2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZDtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QmVmb3JlKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuXG4gICAgICAgIGlmIChyZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkO1xuICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSBuZXdDaGlsZDtcblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMCwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgaW5zZXJ0QWZ0ZXIocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChyZWZDaGlsZC5uZXh0U2libGluZyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hcHBlbmRDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnRCZWZvcmUocmVmQ2hpbGQubmV4dFNpYmxpbmcsIG5ld0NoaWxkKTtcbiAgICB9XG5cbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihjaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVtb3ZlIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nLm5leHRTaWJsaW5nID0gY2hpbGQubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcucHJldmlvdXNTaWJsaW5nID0gY2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggLSAxKSkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIHJlcGxhY2VDaGlsZChyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKG5ld0NoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuZXdDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZE5vZGVzLmluZGV4T2YocmVmQ2hpbGQpO1xuICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlZiBub2RlIGlzIG5vdCBhIGNoaWxkIG9mIHNwZWNpZmllZCBub2RlJyk7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgbmV3Q2hpbGQucHJldmlvdXNTaWJsaW5nID0gcmVmQ2hpbGQucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICBuZXdDaGlsZC5uZXh0U2libGluZyA9IHJlZkNoaWxkLm5leHRTaWJsaW5nO1xuXG4gICAgICAgIGlmICh0aGlzLmZpcnN0Q2hpbGQgPT09IHJlZkNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmxhc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMubGFzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICByZWZDaGlsZC5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgbmV3Q2hpbGQuY29tcGlsZSh0aGlzLmNvbXBpbGVPcHRpb25zKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnNwbGljZShpbmRleCwgMSwgbmV3Q2hpbGQpO1xuICAgICAgICByZXR1cm4gbmV3Q2hpbGQ7XG4gICAgfVxuXG4gICAgY2xvbmVOb2RlKGRlZXApIHtcbiAgICAgICAgdmFyIG5vZGUgPSB0aGlzLm9uQ2xvbmVOb2RlKGRlZXApO1xuXG4gICAgICAgIGlmKGRlZXApIHtcbiAgICAgICAgICAgIG5vZGUuY2hpbGROb2RlcyA9IHRoaXMuY2hpbGROb2Rlcy5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLmNsb25lTm9kZShkZWVwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbm9kZS5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBub2RlO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIGNoaWxkLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgdGhpcy5jbGVhclBhcmVudEFuZFNpYmxpbmcoKTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5vd25lckRvY3VtZW50ID0gbnVsbDtcbiAgICB9XG5cbiAgICAvLyBob29wc1xuXG4gICAgLy8gZW5kIG9mIGhvb3BzXG59XG4iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUZXh0IGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHZhbHVlKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLnRleHQsICcjdGV4dCcsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5lbG0gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ2xvbmVOb2RlKCkge1xuICAgICAgICByZXR1cm4gbmV3IFZUZXh0KHRoaXMubm9kZU5hbWUsIHRoaXMubm9kZVZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWVHlwZSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUuZG9jdW1lbnRUeXBlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgVHBsTGV4ZXIgfSBmcm9tICcuL3RwbC1sZXhlcic7XG5pbXBvcnQgeyBUcGxQYXJzZXIgfSBmcm9tICcuL3RwbC1wYXJzZXInO1xuaW1wb3J0IHsgbm9kZVR5cGUgfSBmcm9tICcuL21vZGVsJztcblxuZnVuY3Rpb24gbGV4VHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbExleGVyKCkubGV4KHRwbCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlVHBsKHRwbCkge1xuICAgIHRwbCA9IHV0aWxzLmVzY2FwZUh0bWwodHBsKTtcbiAgICByZXR1cm4gbmV3IFRwbFBhcnNlcihuZXcgVHBsTGV4ZXIoKSkucGFyc2UodHBsKTtcbn1cblxuZnVuY3Rpb24gaXNWRWxtKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5lbGVtZW50O1xufVxuXG5mdW5jdGlvbiBpc1ZBdHRyKHZub2RlKSB7XG4gICAgcmV0dXJuIHZub2RlLm5vZGVUeXBlID09PSBub2RlVHlwZS5hdHRyaWJ1dGU7XG59XG5cbmZ1bmN0aW9uIGlzVlRleHQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLnRleHQ7XG59XG5cbmZ1bmN0aW9uIGlzVkNvbW1lbnQodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmNvbW1lbnQ7XG59XG5cbmV4cG9ydCB7IGxleFRwbCwgcGFyc2VUcGwsIGlzVkVsbSwgaXNWQXR0ciwgaXNWVGV4dCwgaXNWQ29tbWVudCB9OyIsImltcG9ydCB7IGlzVlRleHQsIGlzVkNvbW1lbnQgfSBmcm9tICcuL3RwbC1hcGknXG5cbmV4cG9ydCBjbGFzcyBUcGxCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZENvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGRFbGVtZW50KHZub2RlKTtcbiAgICB9XG5cbiAgICBidWlsZEVsZW1lbnQodmVsbSkge1xuICAgICAgICB2YXIgYXR0clRwbCA9IHZlbG0udmF0dHJzLm1hcCgodmF0dHIpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZEF0dHJpYnV0ZSh2YXR0cik7XG4gICAgICAgICAgICB9KS5qb2luKCcgJyksXG4gICAgICAgICAgICBjaGlsZFRwbCA9IHZlbG0uY2hpbGROb2Rlcy5tYXAoKGNoaWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgaWYoYXR0clRwbCkge1xuICAgICAgICAgICAgYXR0clRwbCA9ICcgJyArIGF0dHJUcGw7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdHBsID0gJzwnICsgdmVsbS5ub2RlTmFtZSArIGF0dHJUcGwgKyAnPicgKyBjaGlsZFRwbDtcblxuICAgICAgICBpZiAoIXZlbG0uc2VsZkNsb3NlZCkge1xuICAgICAgICAgICAgdHBsICs9ICgnPC8nICsgdmVsbS5ub2RlTmFtZSArICc+Jyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHBsO1xuICAgIH1cblxuICAgIGJ1aWxkQXR0cmlidXRlKHZhdHRyKSB7XG4gICAgICAgIHJldHVybiB2YXR0ci5ub2RlTmFtZSArICh2YXR0ci5ub2RlVmFsdWUgPT0gbnVsbCA/ICcnIDogKCc9JyArIHZhdHRyLnF1b3RlICsgdmF0dHIubm9kZVZhbHVlICsgdmF0dHIucXVvdGUpKTtcbiAgICB9XG5cbiAgICBidWlsZFRleHQodnRleHQpIHtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0Lm5vZGVWYWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZENvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIHZjbW50Lm5vZGVWYWx1ZTtcbiAgICB9XG59XG5cbiIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGNsYXNzIFRwbExleGVyIGV4dGVuZHMgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyB8fFxuICAgICAgICAgICAgY2ggPT09ICdAJyB8fCBjaCA9PT0gJzonIHx8IGNoID09PSAnKicpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy0nIHx8IGNoID09PSAnLic7XG4gICAgfVxuXG4gICAgZXhwZWN0U3RyaW5nKHN0cikge1xuICAgICAgICB2YXIgbnVtID0gc3RyLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuICh0aGlzLmluZGV4ICsgbnVtIDw9IHRoaXMudGV4dC5sZW5ndGgpID8gKHN0ciA9PT0gdGhpcy50ZXh0LnN1YnN0cih0aGlzLmluZGV4LCBudW0pKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGh0bWwgY29tbWVudCBcIjwhLS1jb21tZW50LS0+XCJcbiAgICByZWFkQ29tbWVudChiZWdpbiwgZW5kKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBiZWdpbjtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKGVuZCkpIHtcbiAgICAgICAgICAgICAgICByYXdTdHJpbmcgKz0gZW5kO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0cmluZyArPSBjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VudGVybWluYXRlZCBjb21tZW50Jywgc3RhcnQpO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGV4dFxuICAgIHJlYWRUZXh0KCkge1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIGlmICgoY2ggPT09ICc8JyAmJiAodGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDIpIHx8IGNoMiA9PT0gJy8nKSkgfHwgdGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgdGV4dDogc3RyaW5nLFxuICAgICAgICAgICAgdGV4dFRhZzogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBodG1sIHRhZ1xuICAgIHJlYWRUYWcoYmVnaW4sIGVuZCwgY2xvc2luZywgZG9jdHlwZSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGJlZ2luLCB0YWc6IHRydWUsIGNsb3Npbmc6IGNsb3NpbmcsIGJlZ2luOiB0cnVlLCBkb2N0eXBlOiBkb2N0eXBlIH0pO1xuICAgICAgICB0aGlzLmluZGV4ICs9IGJlZ2luLmxlbmd0aDtcbiAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG5cbiAgICAgICAgICAgIGlmICghY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgc3RyID0gY2ggKyBjaDI7XG4gICAgICAgICAgICAgICAgaWYgKHN0ciA9PT0gJy8nICsgZW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogc3RyLCB0YWc6IHRydWUsIGNsb3Npbmc6IHRydWUsIGVuZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBzdHIubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjaCA9PT0gZW5kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiB0aGlzLmluZGV4LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBlbmQsXG4gICAgICAgICAgICAgICAgICAgIHRhZzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2xvc2luZzogISFkb2N0eXBlID8gdHJ1ZSA6IGNsb3NpbmcsXG4gICAgICAgICAgICAgICAgICAgIGVuZDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gZW5kLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnXCInIHx8IGNoID09PSAnXFwnJykge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFN0cmluZyhjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmlzV2hpdGVzcGFjZShjaCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJz0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiAnPScsIGVxdWFsOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignVW5leHBlY3RlZCBuZXh0IGNoYXJhY3RlciAnLCB0aGlzLmluZGV4LCB0aGlzLmluZGV4ICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB2YXIgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICB2YXIgY2gyID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICB2YXIgY2gzID0gdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8IS0tJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRDb21tZW50KCc8IS0tJywgJy0tPicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICc8JyAmJiB0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwnLCAnPicsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuZXhwZWN0U3RyaW5nKCc8LycpICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gzKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPC8nLCAnPicsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhRE9DVFlQRScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlYWRUYWcoJzwhJywgJz4nLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignRE9DVFlQRSBpcyBub3QgYWxsb3dlZCcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRUZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuLi9leHAnO1xuaW1wb3J0IHtcbiAgICBWRWxtLCBWQXR0ciwgVlRleHQsIFZDbW50LCBWVHlwZVxufSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIFRwbFBhcnNlciBleHRlbmRzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIobGV4ZXIsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy5pbmRleCA9IDA7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMudG9rZW5zID0gdGhpcy5sZXhlci5sZXgodGV4dCk7XG5cbiAgICAgICAgdmFyIHJvb3QgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgZG9jdHlwZSwgYWxsb3dEb2NUeXBlID0gISF0aGlzLm9wdGlvbnMuYWxsb3dEb2NUeXBlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5kb2N0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFsbG93RG9jVHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3R5cGUgPSB0aGlzLmRvY3R5cGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGRvY3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBvbmx5IGFsbG93IG9uZVwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIkRPQ1RZUEUgaXMgbm90IGFsbG93ZWRcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaChjb21tZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRleHRUYWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGV4dCA9IG5ldyBWVGV4dCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICByb290LmNoaWxkTm9kZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRoaXMuZWxlbWVudCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcImltcG9zc2libGVcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm9vdC5idWlsZFNpYmxpbmcoKTtcblxuICAgICAgICByZXR1cm4gcm9vdC5jaGlsZE5vZGVzO1xuICAgIH1cblxuICAgIGRvY3R5cGUoKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZG9jVHlwZSA9IG5ldyBWVHlwZSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZG9jVHlwZS5ub2RlVmFsdWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZG9jVHlwZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZG9jVHlwZS5jaGlsZE5vZGVzLnB1c2goYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQgJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRvY1R5cGU7XG4gICAgfVxuXG4gICAgZWxlbWVudChwKSB7XG4gICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB2YXIgZWxlID0gbmV3IFZFbG0oKTtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIGVsZS5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmF0dHJzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoYXR0cikge1xuICAgICAgICAgICAgZWxlLnB1c2hBdHRyKGF0dHIpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09ICdpbnB1dCcpIHtcbiAgICAgICAgICAgICAgICBlbGUuc2VsZkNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRFbGVtZW50cyhlbGUpLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZS5wdXNoQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uYmVnaW4gJiYgdG9rZW4uY2xvc2luZykge1xuICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgaWYgKHRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlLm5vZGVOYW1lID09PSB0b2tlbi50ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlO1xuICAgIH1cblxuICAgIGNoaWxkRWxlbWVudHMocCkge1xuICAgICAgICB2YXIgZWxlcyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi5jb21tZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbW1lbnQgPSBuZXcgVkNtbnQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0ZXh0KTtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbikge1xuICAgICAgICAgICAgICAgIGVsZXMucHVzaCh0aGlzLmVsZW1lbnQocCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVzO1xuICAgIH1cblxuICAgIGF0dHJzKHApIHtcbiAgICAgICAgdmFyIGF0dHJzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgYXR0ciA9IG5ldyBWQXR0cigpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGF0dHIubm9kZU5hbWUgPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIGF0dHIub3JpZ2luID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgIGlmICh0b2tlbi5lcXVhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLmNvbnN0YW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyLm5vZGVWYWx1ZSA9IHRva2VuLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhdHRycy5wdXNoKGF0dHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgIH1cblxuICAgIGN1cnJlbnQoKSB7XG4gICAgICAgIGlmICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbdGhpcy5pbmRleF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHt9O1xuICAgIH1cblxuICAgIG5leHQoKSB7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICB9XG59IiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyxcbiAgICBnZXRQcm90b3R5cGVPZiA9IE9iamVjdC5nZXRQcm90b3R5cGVPZjtcblxuLy8gaXNcbmZ1bmN0aW9uIGlzVW5kZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzRGVmaW5lZCh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnO1xufVxuXG5mdW5jdGlvbiBpc0FycmF5KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGlzTWFwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuLy8gZW5kIG9mIGlzXG5cbi8vIHZhbHVlXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiBsb3dlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9Mb3dlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gdXBwZXJjYXNlKHN0cmluZykge1xuICAgIHJldHVybiBpc1N0cmluZyhzdHJpbmcpID8gc3RyaW5nLnRvVXBwZXJDYXNlKCkgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb0h1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICByZXR1cm4gbmFtZS5zcGxpdChzZXBhcmF0b3IpLm1hcChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiAhdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdmFsdWUuc3Vic3RyaW5nKDEpO1xuICAgIH0pLmpvaW4oJycpO1xufVxuXG5mdW5jdGlvbiBjb252ZXJ0RnJvbUh1bXBOYW1lKG5hbWUsIHNlcGFyYXRvciwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpIHtcbiAgICB2YXIgaSA9IDAsIG5ld05hbWUgPSAnJywgY2hhcjtcblxuICAgIHdoaWxlIChpIDwgbmFtZS5sZW5ndGgpIHtcbiAgICAgICAgY2hhciA9IG5hbWVbaV07XG5cbiAgICAgICAgaWYgKChpICE9PSAwIHx8IHVwcGVyY2FzZUZpcnN0TGV0dGVyKSAmJiAvW0EtWl0vLnRlc3QoY2hhcikpIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gc2VwYXJhdG9yO1xuICAgICAgICAgICAgbmV3TmFtZSArPSBjaGFyLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3TmFtZTtcbn1cbi8vIGVuZCBpZiB2YWx1ZVxuXG4vLyBvYmplY3RcbmZ1bmN0aW9uIGNvcHkoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgb2JqSW5kZXggPSAwLCBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdLCBmaWx0ZXI7XG5cbiAgICBpZiAoaXNCb29sZWFuKG9iaikpIHtcbiAgICAgICAgZGVlcCA9IG9iajtcbiAgICAgICAgb2JqSW5kZXgrKztcbiAgICAgICAgb2JqID0gYXJndW1lbnRzW29iakluZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IG9iakluZGV4ICsgMSkge1xuICAgICAgICBmaWx0ZXIgPSBhcmd1bWVudHNbb2JqSW5kZXggKyAxXTtcbiAgICB9XG5cbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIHZhciBuZXdBcnIgPSBbXTtcbiAgICAgICAgb2JqLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwgaW5kZXgsIGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goZGVlcCA/IGNvcHkoZGVlcCwgaXRlbSkgOiBpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdBcnI7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld09iaiA9IG9iamVjdChvYmopO1xuICAgICAgICBmb3JFYWNoKG9iaiwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBrZXksIHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIG5ld09ialtrZXldID0gZGVlcCA/IGNvcHkoZGVlcCwgdmFsdWUpIDogdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3T2JqO1xuICAgIH1cblxuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIGV4dGVuZCgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IGFyZ3VtZW50c1tpbmRleF07XG5cbiAgICBpZiAoaXNCb29sZWFuKHRhcmdldCkpIHtcbiAgICAgICAgZGVlcCA9IHRhcmdldDtcbiAgICAgICAgdGFyZ2V0ID0gYXJndW1lbnRzWysraW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0ge307XG5cbiAgICBpZiAoaXNCb29sZWFuKGFyZ3VtZW50c1tpbmRleF0pKSB7XG4gICAgICAgIGRlZXAgPSBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBpbmRleCsrO1xuICAgIH1cblxuICAgIGlmIChkZWVwKSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXgpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gcGxhaW5NZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkZWVwTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgaWYgKHRhcmdldFtrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNPYmplY3QodGFyZ2V0W2tleV0pICYmIGlzT2JqZWN0KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXRba2V5XSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuLy8gZW5kIG9mIG9iamVjdFxuXG4vLyBpdGVyYXRvclxuZnVuY3Rpb24gZm9yRWFjaCh0YXJnZXQsIGFjdGlvbikge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgdGFyZ2V0LmZvckVhY2goYWN0aW9uKTtcbiAgICB9IGVsc2UgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uKHRhcmdldFtrZXldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzb21lKHRhcmdldCwgZnVuYykge1xuICAgIGlmIChpc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldC5zb21lKGZ1bmMpO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIGlmIChmdW5jKHRhcmdldFtrZXldLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIGVuZCBvZiBpdGVyYXRvclxuXG4vLyBhcnJheVxuZnVuY3Rpb24gb3JkZXJCeShsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcobGlzdCwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBsaXN0LnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgaWYgKGdldFZhbHVlKGEpIDwgZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdCgpIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLmNvbmNhdC5hcHBseShbXSwgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKGxpc3QsIHZhbHVlKSB7XG4gICAgdmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHZhbHVlKTtcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHJldHVybiBsaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxufVxuLy8gZW5kIG9mIGFycmF5XG5cbmZ1bmN0aW9uIG9iamVjdChvKSB7XG4gICAgZnVuY3Rpb24gRigpIHtcbiAgICB9XG5cbiAgICBGLnByb3RvdHlwZSA9IG87XG4gICAgcmV0dXJuIG5ldyBGKCk7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgdmFyIHByb3RvdHlwZSA9IG9iamVjdChzdXBlclR5cGUucHJvdG90eXBlKTtcbiAgICBwcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJUeXBlO1xuICAgIHN1YlR5cGUucHJvdG90eXBlID0gcHJvdG90eXBlO1xufVxuXG5mdW5jdGlvbiBpbmhlcml0KHN1YlR5cGUsIHN1cGVyVHlwZSkge1xuICAgIGluaGVyaXRQcm90b3R5cGUoc3ViVHlwZSwgc3VwZXJUeXBlKTtcbiAgICBzdWJUeXBlLnN1cGVyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBzdXBlclR5cGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBoYXNQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gaXNPYmplY3QodGFyZ2V0KSAmJiB0YXJnZXQuaGFzT3duUHJvcGVydHkoa2V5cy5zaGlmdCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBpZighaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5LCB2YWx1ZSkge1xuICAgIHZhciBrZXksIGtleXMgPSBwcm9wZXJ0eS5zcGxpdCgnLicpO1xuXG4gICAgd2hpbGUgKGtleXMubGVuZ3RoID4gMSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGtleSA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W2tleV07XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZm9ybWF0KCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2gsIG1hdGNoVGV4dCwgaW5kZXgsIHJlc3VsdCA9ICcnLCB0ZXh0ID0gYXJndW1lbnRzWzBdLFxuICAgICAgICBwYXR0ZXJuID0gL1xceyhcXGQrKVxcfS9nLCBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcblxuICAgIHdoaWxlIChtYXRjaCA9IHBhdHRlcm4uZXhlYyh0ZXh0KSkge1xuICAgICAgICBtYXRjaFRleHQgPSBtYXRjaFswXTtcbiAgICAgICAgaW5kZXggPSBOdW1iZXIucGFyc2VJbnQobWF0Y2hbMV0pICsgMTtcblxuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSBpbmRleCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdmb3JtYXQgaXRlbSAnICsgaW5kZXggKyAnaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KSArIGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgIH1cblxuICAgIHJlc3VsdCArPSB0ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSHRtbChodG1sKSB7XG4gICAgcmV0dXJuIGh0bWwucmVwbGFjZSgvJmd0Oy9nLCAnPicpLnJlcGxhY2UoLyZsdDsvZywgJzwnKS5yZXBsYWNlKC8mYW1wOy9nLCAnJicpLnJlcGxhY2UoLyZxdW90ZTsvZywgJycpO1xufVxuXG5leHBvcnQge1xuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzRm9ybURhdGEsXG4gICAgdG9OdW1iZXIsXG4gICAgbG93ZXJjYXNlLFxuICAgIHVwcGVyY2FzZSxcbiAgICBjb252ZXJ0VG9IdW1wTmFtZSxcbiAgICBjb252ZXJ0RnJvbUh1bXBOYW1lLFxuICAgIGNvcHksXG4gICAgZXh0ZW5kLFxuICAgIG1lcmdlLFxuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICByZW1vdmUsXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgb2JqZWN0LFxuICAgIGluaGVyaXQsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgZm9ybWF0LFxuICAgIGVzY2FwZUh0bWxcbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IE9ic2VydmVyLCBoYW5kbGVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJCRtYWluVmlldyA9IG51bGw7XG4gICAgdGhpcy4kcGFyc2VyID0gbmV3IFBhcnNlcih0aGlzKTtcbiAgICB0aGlzLiRvYnNlcnZlciA9IG5ldyBPYnNlcnZlcih0aGlzKTtcbiAgICB0aGlzLnNsb3RzID0ge307XG4gICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB0aGlzLnByb3BzID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnQge1xuICAgIGdldCAkaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBpbmplY3RvcjtcbiAgICB9XG5cbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAkc2V0U2xvdChzbG90cykge1xuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XG4gICAgfVxuXG4gICAgJHNldFN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZShwcm9wcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgICRoYXNQcm9wZXJ0eShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG4gICAgfVxuXG4gICAgJGdldFByb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuZ2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcGVydHkoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuXG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHV0aWxzLnNldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGhhc01lc3NhZ2Uoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5oYXNQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcbiAgICB9XG5cbiAgICAkYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9uKGhhbmRsZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnXCJ7MH1cIiBpcyBub3QgYSB2YWxpZCBldmVudCcsIGtleSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHVuYmluZChrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIG1lc3NhZ2UgPSB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLmV2ZW50cywga2V5KTtcblxuICAgICAgICBpZiAoaXNNZXNzYWdlKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICBtZXNzYWdlLm9mZihoYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR3YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJG9ic2VydmVyLndhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGV2YWwoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFdmFsdWF0b3IodGhpcywge2xvY2FsczogbG9jYWxzfSkuZXZhbHVhdGUoZXhwKTtcbiAgICB9XG5cbiAgICAkYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5hc3NpZ24oZXhwLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGRhdGE7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy4kJG1haW5WaWV3ID0gbmV3IFJlbmRlcmVyKHRoaXMpLnJlbmRlcih0ZW1wbGF0ZSk7XG4gICAgfVxuXG4gICAgJG1vdW50KHNlbGVjdG9yT3JFbGVtZW50KSB7XG4gICAgICAgIGlmICh0aGlzLiQkbWFpblZpZXcgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50IGNvbXBvbmVudCBpcyBub3QgcmVuZGVyZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJCRtYWluVmlldy5tb3VudChzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5tb3VudCgpIHtcblxuICAgIH1cblxuICAgICRhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLiQkY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIGNoaWxkLiQkcGFyZW50ID0gdGhpcztcbiAgICB9XG5cbiAgICAkcmVtb3ZlQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kJGNoaWxkcmVuLmluZGV4T2YoY2hpbGQpO1xuXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJCRjaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkbWFpblZpZXcgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3LmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgaWYodGhpcy4kJHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50LiRyZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1fSElERV9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG4gICAgLy8gYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudFxuICAgIHRoaXMuJGFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLiRwbGFjZWhvbGRlciA9IG51bGw7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAka2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLmtleTtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkcmVuZGVyZXIoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGUuJHJlbmRlcmVyO1xuICAgIH1cblxuICAgIGdldCAkZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIubm9kZURhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcblxuICAgICAgICBpZiAodGhpcy4kYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjaGFuZ2UodGhpcy4kYmluZGluZy52YWx1ZSwgdGhpcy4kYmluZGluZy5vbGRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0aGUgaW5wdXQgdmFsdWUgaXMgY2hhbmdlZFxuICAgICRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdGhpcy5vbkNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpO1xuICAgIH1cblxuICAgICRkZXN0cm95KCkge1xuICAgICAgICB0aGlzLm9uRGVzdHJveSAmJiB0aGlzLm9uRGVzdHJveSgpO1xuICAgIH1cblxuICAgICQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdmVsbS5ub2RlRGF0YS5kaXJlY3RpdmVzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLiRrZXkgPT09IGtleTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQubGVuZ3RoID8gcmVzdWx0WzBdIDogbnVsbDtcbiAgICB9XG5cbiAgICAkc2Vla0RpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkc2Vla1VwRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtLnBhcmVudE5vZGU7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoeWVzKSB7XG4gICAgICAgIGlmICh0aGlzLiRwbGFjZWhvbGRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3lvdSBtdXN0IGRlZmluZSBlbGVtZW50IHBsYWNlaG9sZGVyIScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHllcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJGVsZW1lbnQsIHRoaXMuJHBsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGRvbS5yZXBsYWNlRWxlbWVudCh0aGlzLiRwbGFjZWhvbGRlciwgdGhpcy4kZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGlkZUVsZW1lbnQoeWVzKSB7XG4gICAgICAgIGlmICh5ZXMpIHtcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBNX0hJREVfQ0xBU1MpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLiRiaW5kaW5nLmxvY2FscywgbG9jYWxzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRldmFsKGV4cCwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLiRiaW5kaW5nLmxvY2FscywgbG9jYWxzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJHNjb3BlLiRhc3NpZ24oZXhwLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgJHJlbmRlcih0ZW1wbGF0ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVuZGVyZXIodGhpcy4kc2NvcGUsIGxvY2FscykucmVuZGVyKHRlbXBsYXRlKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBwYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKG5hbWUsICctJywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAocm9sZUlkKSB7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5jb21wb25lbnQ6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0NvbXBvbmVudCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZGlyZWN0aXZlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdEaXJlY3RpdmUnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmZpbHRlcjpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRmlsdGVyJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5zZXJ2aWNlOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdTZXJ2aWNlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBuZXdOYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKG5hbWUgKyAnaXMgbm90IGEgdmFsaWQgbmFtZScpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFrZShyb2xlSWQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yLCBjb25zdHJ1Y3Rvck5hbWUgPSB0aGlzLnJlbmFtZShyb2xlSWQsIG5hbWUpLFxuICAgICAgICAgICAgb25Db25zdHJ1Y3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uc3RydWN0b3Iuc3VwZXIpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnN1cGVyLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBwcm9wZXJ0aWVzXG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmNvbnN0cnVjdCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnLmNvbnN0cnVjdC5jYWxsKHRoaXMsIE1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgY29uc3RydWN0b3IgPSBuZXcgRnVuY3Rpb24oJ29uQ29uc3RydWN0JywgJ1widXNlIHN0cmljdFwiO3JldHVybiBmdW5jdGlvbiAnICsgY29uc3RydWN0b3JOYW1lICsgJygpe29uQ29uc3RydWN0LmNhbGwodGhpcyk7fTsnKShvbkNvbnN0cnVjdCk7XG5cbiAgICAgICAgLy8gZXh0ZW5kcyBjbGFzc1xuICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuZXh0ZW5kcykpIHtcbiAgICAgICAgICAgIHV0aWxzLmluaGVyaXQoY29uc3RydWN0b3IsIGNvbmZpZy5leHRlbmRzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNyZWF0ZSBtZXRob2RzXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBjb25maWcpIHtcbiAgICAgICAgICAgIGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT09ICdleHRlbmRzJyAmJiBrZXkgIT09ICdjb25zdHJ1Y3QnKSB7XG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlW2tleV0gPSBjb25maWdba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3JlIG1ldGFkYXRhIHRvIHByb3RvdHlwZVxuICAgICAgICBtZXRhZGF0YS5rZXkgPSBuYW1lO1xuICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcjtcbiAgICB9XG5cbiAgICBtYWtlQ29tcG9uZW50KG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogY29tcG9uZW50Q2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5jb21wb25lbnQsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VEaXJlY3RpdmUobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBkaXJlY3RpdmVDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmRpcmVjdGl2ZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZUZpbHRlcihuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGZpbHRlckNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZmlsdGVyLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlU2VydmljZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IHNlcnZpY2VDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLnNlcnZpY2UsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cbn1cblxuZXhwb3J0IHZhciBmYWN0b3J5ID0gbmV3IEZhY3RvcnkoKTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vdmlldy1hcGknOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IHJvbGVzIH0gZnJvbSAnLi9yb2xlcyc7XG5cbi8vIG1ldGFkYXRhIGV4YW1wbGVcbi8vIHsga2V5OiAnJywgbmFtZXNwYWNlOiAnJywgZXh0ZW5kczogbnVsbCwgY29uc3RydWN0OiBmbiwgbWV0aG9kczoge30gfVxuZXhwb3J0IGNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMuc2VydmljZVN0YWNrID0gW107XG4gICAgfVxuXG4gICAgZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIGdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG5cbiAgICByZWdpc3Rlcihyb2xlSWQsIGtleSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgaWYgKGtleS5pbmRleE9mKCcuJykgIT09IC0xKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lsbGVnYWwgY2hhcmFjdGVyIFwiLlwiJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChjb250YWluZXJba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250YWluZXJba2V5XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBjb250YWluZXJba2V5XS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UgPT09IGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICcgaXMgZXhpc3QgdW5kZXIgbmFtZXNwYWNlICcgKyBtYXRjaGVzWzBdLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250YWluZXJba2V5XS5wdXNoKGNvbnN0cnVjdG9yKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNvbXBvbmVudChrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmNvbXBvbmVudCwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZGlyZWN0aXZlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5maWx0ZXIsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5zZXJ2aWNlLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgaGFzKHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBoYXNDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmNvbXBvbmVudCwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0RpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZGlyZWN0aXZlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzRmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5maWx0ZXIsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5zZXJ2aWNlLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0KHJvbGVJZCwga2V5LCBpZ25vcmVDYXNlLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9ycywgY29udGFpbmVyID0gdGhpcy5nZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpO1xuXG4gICAgICAgIGlmIChpZ25vcmVDYXNlKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSB1dGlscy5nZXRQcm9wZXJ0eShjb250YWluZXIsIGtleSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb250YWluZXJba2V5XTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB2YXIgbmFtZXNwYWNlcyA9IGNvbnN0cnVjdG9ycy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbmFtZXNwYWNlICcgKyBuYW1lc3BhY2VzLmpvaW4oJ3wnKSArICcgYWxsIGhhdmUgJyArIGtleSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3JzWzBdO1xuICAgIH1cblxuICAgIGdldENvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuY29tcG9uZW50LCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0RGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5kaXJlY3RpdmUsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXRGaWx0ZXIoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmZpbHRlciwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldFNlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLnNlcnZpY2UsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGUocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSB0aGlzLmdldChyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdtaXNzIGNvbnN0cnVjdG9yIGZvciBrZXkgJyArIGtleU9yQ29uc3RydWN0b3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHV0aWxzLmlzRnVuY3Rpb24oa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0ga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSW52YWxpZCBwYXJhbWV0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXcgY29uc3RydWN0b3IoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wb25lbnQoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmNvbXBvbmVudCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVEaXJlY3RpdmUoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5kaXJlY3RpdmUsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuZmlsdGVyKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldEZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIGNyZWF0ZVNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgY29udGFpbmVyID0gdGhpcy5nZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlcy5zZXJ2aWNlKTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGtleU9yQ29uc3RydWN0b3IgPSB0aGlzLmdldFNlcnZpY2Uoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgha2V5T3JDb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5ub25TaGFyZWQpIHtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgcGFyc2VGdWxsTmFtZShuYW1lLCBhbGlhcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge25zOiAnJywga2V5OiAnJ30sXG4gICAgICAgICAgICBzZWdtZW50cyA9IG5hbWUuc3BsaXQoJy4nKTtcblxuICAgICAgICBpZiAoc2VnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXN1bHQua2V5ID0gbmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdC5rZXkgPSBzZWdtZW50cy5wb3AoKTtcbiAgICAgICAgICAgIHJlc3VsdC5ucyA9IHNlZ21lbnRzLmpvaW4oJy4nKTtcblxuICAgICAgICAgICAgaWYgKGFsaWFzKSB7XG4gICAgICAgICAgICAgICAgdXRpbHMuc29tZShhbGlhcywgZnVuY3Rpb24gKHNob3J0TmFtZSwgZnVsbE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNob3J0TmFtZSA9PT0gcmVzdWx0Lm5zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubnMgPSBmdWxsTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGluamVjdFNlcnZpY2VzKGluc3RhbmNlLCBtZXRhZGF0YSwgY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXMsIHNlcnZpY2VGdWxsTmFtZSwgaGFzTG9vcERlcGVuZGVuY3kgPSBmYWxzZTtcblxuICAgICAgICBpZihjaGVja0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAvLyBjcmVhdGluZyBhIHNlcnZpY2UgaW5zdGFuY2UgYXQgdGhlIG1vbWVudFxuICAgICAgICAgICAgc2VydmljZUZ1bGxOYW1lID0gdXRpbHMuZm9ybWF0KCd7MH0uezF9JywgbWV0YWRhdGEubmFtZXNwYWNlLCBtZXRhZGF0YS5rZXkpO1xuICAgICAgICAgICAgaGFzTG9vcERlcGVuZGVuY3kgPSB0aGlzLnNlcnZpY2VTdGFjay5pbmRleE9mKHNlcnZpY2VGdWxsTmFtZSkgIT09IC0xO1xuXG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5wdXNoKHNlcnZpY2VGdWxsTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChoYXNMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgICAgIC8vIGNsZWFyIHNlcnZpY2UgZGVwZW5kZW5jeSBzdGFja1xuICAgICAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLmxlbmd0aCA9IDA7XG4gICAgICAgICAgICAgICAgLy8gb2NjdXJzIGxvb3AgZGVwZW5kZW5jeVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxvb3AgZGVwZW5kZW5jeTogXCIgKyB0aGlzLnNlcnZpY2VTdGFjay5qb2luKCctPicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRhZGF0YSAmJiB1dGlscy5pc09iamVjdChtZXRhZGF0YS5pbmplY3QpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG1ldGFkYXRhLmluamVjdCwgZnVuY3Rpb24gKHNlcnZpY2UsIGtleSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnN0YW5jZSwga2V5LCB7XG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwcml2YXRlS2V5ID0gJyQkJyArIGtleTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlW3ByaXZhdGVLZXldID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VydmljZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlkZW50aWZpZXIgPSBzZWxmLnBhcnNlRnVsbE5hbWUoc2VydmljZSwgbWV0YWRhdGEuYWxpYXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2Uoc2VydmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VbcHJpdmF0ZUtleV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucG9wKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTsiLCJpbXBvcnQgeyBwYXJzZUV4cCB9IGZyb20gJy4uL2V4cCc7XHJcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsJztcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJzZXIge1xyXG4gICAgZ2V0IGluamVjdG9yKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgbnNBbGlhcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kZGF0YS5hbGlhcztcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihzY29wZSkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcclxuICAgICAgICB0aGlzLnByb2dyYW1zID0ge307XHJcbiAgICAgICAgdGhpcy50eXBlID0ge1xyXG4gICAgICAgICAgICBjb21wb25lbnRzOiB7fSxcclxuICAgICAgICAgICAgZGlyZWN0aXZlczoge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlRXhwcmVzc2lvbihleHApIHtcclxuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucHJvZ3JhbXNbZXhwXTtcclxuXHJcbiAgICAgICAgaWYgKCFwcm9ncmFtKSB7XHJcbiAgICAgICAgICAgIHByb2dyYW0gPSBwYXJzZUV4cChleHApO1xyXG4gICAgICAgICAgICB0aGlzLnByb2dyYW1zW2V4cF0gPSBwcm9ncmFtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHByb2dyYW07XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VUZW1wbGF0ZSh0cGwpIHtcclxuICAgICAgICByZXR1cm4gcGFyc2VUcGwodHBsKTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlQ29tcG9uZW50KG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgY29tcG9uZW50LFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuY29tcG9uZW50cztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGJ1ZmZlcltuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pbmplY3Rvci5wYXJzZUZ1bGxOYW1lKG5hbWUsIHRoaXMubnNBbGlhcyk7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0Q29tcG9uZW50KGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gY29tcG9uZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRGlyZWN0aXZlKG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgZGlyZWN0aXZlLFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuZGlyZWN0aXZlcztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGJ1ZmZlcltuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pbmplY3Rvci5wYXJzZUZ1bGxOYW1lKG5hbWUsIHRoaXMubnNBbGlhcyk7XHJcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0RGlyZWN0aXZlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gZGlyZWN0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXNvbHZlRmlsdGVyKG5hbWUpIHtcclxuICAgICAgICB2YXIgaWRlbnRpZmllciwgZmlsdGVyLFxyXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLmZpbHRlcnM7XHJcblxyXG4gICAgICAgIGlmIChidWZmZXJbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSBidWZmZXJbbmFtZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaW5qZWN0b3IucGFyc2VGdWxsTmFtZShuYW1lLCB0aGlzLm5zQWxpYXMpO1xyXG4gICAgICAgICAgICBmaWx0ZXIgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUZpbHRlcihpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XHJcbiAgICAgICAgICAgIGJ1ZmZlcltuYW1lXSA9IGZpbHRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmaWx0ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcclxuICAgIH1cclxufSIsImV4cG9ydCB2YXIgcm9sZXMgPSB7XG4gICAgZmlsdGVyOiAwLFxuICAgIHNlcnZpY2U6IDEsXG4gICAgY29tcG9uZW50OiAyLFxuICAgIGRpcmVjdGl2ZTogM1xufTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZUNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhLCB0cnVlKTtcbn1cblxuZXhwb3J0IGNsYXNzIFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgZmFjdG9yeSB9IGZyb20gJy4vZmFjdG9yeSc7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQnO1xuaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSB9IGZyb20gJy4vc2VydmljZSc7XG5cbmZ1bmN0aW9uIG5hbWVzcGFjZShuYW1lKSB7XG4gICAgZnVuY3Rpb24gbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkge1xuICAgICAgICByZXR1cm4gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgbmFtZXNwYWNlOm5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0b3IsIGNvbmZpZykge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgdmFyIFJvb3QgPSBmYWN0b3J5Lm1ha2VDb21wb25lbnQoJ3Jvb3QnLCBjb25maWcsIHtcbiAgICAgICAgdGVtcGxhdGU6IGVsZW1lbnQuaW5uZXJIVE1MXG4gICAgfSk7XG4gICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuXG4gICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgcm9vdC4kcmVuZGVyKCk7XG4gICAgcm9vdC4kbW91bnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIHJlbmRlcixcbiAgICBpbmplY3RvclxufTsiXSwic291cmNlUm9vdCI6IiJ9