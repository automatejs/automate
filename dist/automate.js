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

        return filter.transform.apply(filter, argValues);
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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



function filterConstructor(data) {
  this.$data = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.$$metadata, data);
  _injector__WEBPACK_IMPORTED_MODULE_1__["injector"].injectServices(this, this.$data);
}
var Filter = /*#__PURE__*/function () {
  function Filter(data) {
    _classCallCheck(this, Filter);

    filterConstructor.call(this, data);
  }

  _createClass(Filter, [{
    key: "transform",
    value: function transform() {
      return this.onTransform && this.onTransform.apply(this, arguments);
    }
  }]);

  return Filter;
}();

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

function render(selector, config, metadata) {
  var element = document.querySelector(selector);
  var Root = _factory__WEBPACK_IMPORTED_MODULE_2__["factory"].makeComponent('root', config, _utils__WEBPACK_IMPORTED_MODULE_1__["merge"]({
    template: element.innerHTML
  }, metadata));
  var root = new Root();
  _dom__WEBPACK_IMPORTED_MODULE_0__["clearChildrenOfElement"](element);
  root.$render();
  root.$mount(element);
}



/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3JlbmRlci92aWV3LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkbWFpblZpZXciLCJSZW5kZXJlciIsInJlbmRlciIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCIkaGlkZUVsZW1lbnQiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIiRyZW1vdmVFbGVtZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJpdGVtVmlld3MiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJ1dGlscyIsIml0ZW0iLCJpdGVtVmlldyIsImdldFZpZXdGcm9tQnVmZmVyIiwibG9jYWxzIiwiJHJlbmRlciIsInNldFZpZXdUb0J1ZmZlciIsImNvbnRlbnQiLCJsaXN0IiwidmlldyIsImRlc3Ryb3kiLCJidWZmZXIiLCJkYXRhSXRlbSIsImhhcyIsImdldCIsImxlbmd0aCIsInNoaWZ0Iiwic2V0IiwiU2hvd0RpcmVjdGl2ZSIsIkNoZWNrZWREaXJlY3RpdmUiLCJTdGF0ZURpcmVjdGl2ZSIsIkRpc2FibGVkRGlyZWN0aXZlIiwiUmVhZG9ubHlEaXJlY3RpdmUiLCJTZWxlY3RlZERpcmVjdGl2ZSIsInNlbGVjdG9yIiwiaGFzQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiQ2xhc3NFdmVuRGlyZWN0aXZlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiZmlyZSIsImNoZWNrRGVmYXVsdCIsImdldENoaWxkcmVuT2ZFbGVtZW50IiwiQXJyYXkiLCJzbGljZSIsImNoaWxkTm9kZXMiLCJjbGVhckNoaWxkcmVuT2ZFbGVtZW50IiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbGVtZW50IiwibmV3RWxtIiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZUVsZW1lbnRzQmV0d2VlbiIsInN0YXJ0RWxtIiwiZW5kRWxtIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJhcHBlbmRFbGVtZW50IiwibGFzdENoaWxkIiwiYWRkQ2xhc3MiLCJjbHMiLCJ0cmltIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwYXJzZUV4cHJlc3Npb24iLCJwYXJzZUV4cCIsInByb2dyYW0iLCJhY2Nlc3NvciIsImJ1aWxkZXIiLCJFeHBCdWlsZGVyIiwiYW5hbHlzZVByb2dyYW0iLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwiYXJncyIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImJ1aWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsImRlZmF1bHRPcHRpb25zIiwiYWxsb3dOdWxsIiwiYXNzaWduSW50ZXJjZXB0b3IiLCJFdmFsdWF0b3IiLCIkcGFyc2VyIiwiZXZhbHVhdGVQcm9ncmFtIiwiZXZhbHVhdGVOb2RlIiwiJG51bGwiLCJhc3NpZ25Qcm9ncmFtIiwiZXhwcmVzc2lvbiIsInByb3BlcnR5S2V5IiwiZXZhbHVhdGVFeHByZXNzaW9uIiwiZXZhbHVhdGVBc3NpZ25tZW50IiwiZXZhbHVhdGVDb25kaXRpb24iLCJldmFsdWF0ZUxvZ2ljIiwiZXZhbHVhdGVCaW5hcnkiLCJldmFsdWF0ZVVuYXJ5IiwiZXZhbHVhdGVDYWxsIiwiZXZhbHVhdGVNZW1iZXIiLCJldmFsdWF0ZUlkZW50aWZpZXIiLCJldmFsdWF0ZUxpdGVyYWwiLCJldmFsdWF0ZUFycmF5IiwiZXZhbHVhdGVQcm9wZXJ0eSIsImV2YWx1YXRlT2JqZWN0IiwiYXNzaWdubWVudExlZnQiLCJsZWZ0VmFsdWUiLCJyaWdodFZhbHVlIiwib3BlcmF0b3IiLCJhcmdWYWx1ZXMiLCJtYXAiLCJyZXNvbHZlRmlsdGVyIiwidHJhbnNmb3JtIiwiYXBwbHkiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJwYXJzZSIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInBhcnNlT3B0aW9ucyIsInRleHQiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsImkiLCJudW0iLCJjb2RlUG9pbnRBdCIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJlcnJvciIsInN0YXJ0IiwiZW5kIiwiY29sU3RyIiwic3Vic3RyaW5nIiwibnVtYmVyIiwicGVla0NoIiwiaXNFeHBPcGVyYXRvciIsImNvbnN0YW50IiwiTnVtYmVyIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0IiwibGV4ZXIiLCJtc2ciLCJQcm9ncmFtTm9kZSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsImZpbHRlckNoYWluIiwiYXN0IiwidGVybmFyeSIsImlzQXNzaWduYWJsZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEFORCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImxpdGVyYWxzIiwiaGFzT3duUHJvcGVydHkiLCJMaXRlcmFsTm9kZSIsIm5leHQiLCJwZWVrQWhlYWQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJwYXJzZUFyZ3VtZW50cyIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsInVuZGVmaW5lZCIsIkRlbGF5ZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJMaXN0ZW5lciIsInZhbHVlQ2hhbmdlZCIsImNvbGxlY3Rpb25DaGFuZ2VkIiwib2xkVmFsdWUiLCJPYnNlcnZlciIsImFjY2Vzc29ycyIsImxpc3RlbmVycyIsIndhdGNoZXIiLCJXYXRjaGVyIiwiYW5hbHlzZXIiLCJkZWxheWVyIiwibm90aWZ5IiwiaGFzQ2hhbmdlIiwic2V0TmV3VmFsdWUiLCJzZXRDb2xsZWN0aW9uQ2hhbmdlZCIsImV4ZWN1dGUiLCJnZXRBY2Nlc3NvciIsImV2YWx1YXRvciIsImNyZWF0ZUxpc3RlbmVyIiwiZXZhbHVhdGUiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJub3RpZnlDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwiYXJndW1lbnRzIiwiY29sbGVjdGlvbiIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldFByb3h5IiwiaXNQcm94eSIsInByb3h5IiwiZ2V0VGFyZ2V0IiwibWFrZVByb3h5IiwiUHJveHkiLCJPYmplY3RMaXN0ZW5lciIsImtleXMiLCJnZXRIYW5kbGVycyIsIm9mZlByb3BlcnR5Q2hhbmdlZCIsImhhbmRsZVByb3BlcnR5Q2hhbmdlZCIsImdldExpc3RlbmVyIiwiZmlyZUtleSIsImZpbHRlcnMiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZUxpc3RlbmVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiQmluZGluZyIsImlzRXhwIiwibG9naWNhbCIsImF1dG9tYXRpb24iLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsImhhc1RyYW5zbGF0aW9uIiwiJGFzc2lnbiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIiRpbmplY3RvciIsImJpbmRpbmciLCJiaW5kaW5ncyIsImNyZWF0ZUNvbXBvbmVudCIsIiRhcHBlbmRDaGlsZCIsImNvbXBvbmVudHMiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwicmVzb2x2ZUNvbXBvbmVudCIsIm5vZGVOYW1lIiwicmVzb2x2ZURpcmVjdGl2ZSIsIm5vZGVEYXRhIiwiY29udGFpbmVyIiwiVmlldyIsInZub2RlcyIsInBhcnNlVGVtcGxhdGUiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCJkaXJlY3RpdmVzIiwiJHBvc3RsaW5rIiwibm9kZXMiLCJ2bm9kZSIsImNvbXBpbGVOb2RlIiwiaXNWVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNWQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJlbG1EYXRhIiwicmVjb2duaXplQ29tcG9uZW50IiwiY3VzdG9tTGlua2VyIiwidmF0dHJzIiwic29tZSIsImF0dHJEYXRhIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJzZWVrU2xvdCIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwibmV3QmluZGluZyIsInN0YXJ0c1dpdGgiLCJpc0V2ZW50Iiwic3Vic3RyIiwiaXNEb21FdmVudCIsInJlY29nbml6ZURpcmVjdGl2ZSIsIm5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWdubWVudCIsIiRjb21waWxlIiwic2V0SHRtbEF0dHIiLCJyZWdpc3RlckF1dG9tYXRpb24iLCJwcm9wZXJ0eU5hbWUiLCIkaGFzUHJvcGVydHkiLCJjb21waWxlIiwidnRleHQiLCJuZXdUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJpbnN0YW5jZSIsIm5ld0NvbXBvbmVudCIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHNldFNsb3QiLCIkbW91bnQiLCJldmVudE5hbWUiLCJsaW5rIiwiJGNoYW5nZSIsImlzVkVsbSIsInNsb3QiLCJnZXRBdHRyIiwiZ2V0SW5uZXJUcGwiLCJzZWxlY3Rvck9yRWxlbWVudCIsImVsZW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsImVudGl0eSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJ0b1N0cmluZyIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc0FycmF5IiwiaXNNYXAiLCJpc09iamVjdCIsImlzQmxhbmtPYmplY3QiLCJpc1N0cmluZyIsImlzRGF0ZSIsImlzRnVuY3Rpb24iLCJpc1JlZ0V4cCIsImlzQm9vbGVhbiIsImlzRm9ybURhdGEiLCJGb3JtRGF0YSIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImxvd2VyY2FzZSIsInRvTG93ZXJDYXNlIiwidXBwZXJjYXNlIiwidG9VcHBlckNhc2UiLCJjb252ZXJ0VG9IdW1wTmFtZSIsInNlcGFyYXRvciIsInVwcGVyY2FzZUZpcnN0TGV0dGVyIiwiY29udmVydEZyb21IdW1wTmFtZSIsIm5ld05hbWUiLCJjaGFyIiwib2JqSW5kZXgiLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJmdW5jIiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJjb25jYXQiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwiaGFzUHJvcGVydHkiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiZm9ybWF0IiwibWF0Y2hUZXh0IiwiZXNjYXBlSHRtbCIsImh0bWwiLCJjb21wb25lbnRDb25zdHJ1Y3RvciIsIiQkY2hpbGRyZW4iLCJQYXJzZXIiLCIkb2JzZXJ2ZXIiLCIkZGVsZWdhdGUiLCIkZGF0YSIsImluamVjdFNlcnZpY2VzIiwibWVzc2FnZSIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsIiRnZXRUZW1wbGF0ZSIsIm1vdW50IiwiJHJlbW92ZUNoaWxkIiwiZGlyZWN0aXZlQ29uc3RydWN0b3IiLCIkcmVuZGVyZXIiLCJvbkNvbXBpbGUiLCJvbkxpbmsiLCJhZnRlckxpbmsiLCJvbkNoYW5nZSIsIiRrZXkiLCIkJHNlYXJjaERpcmVjdGl2ZSIsInllcyIsImNvbXBvbmVudENsYXNzIiwiZGlyZWN0aXZlQ2xhc3MiLCJmaWx0ZXJDbGFzcyIsIkZpbHRlciIsImZpbHRlckNvbnN0cnVjdG9yIiwic2VydmljZUNsYXNzIiwiU2VydmljZSIsInNlcnZpY2VDb25zdHJ1Y3RvciIsIkZhY3RvcnkiLCJyb2xlSWQiLCJyb2xlcyIsImNvbmZpZyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsIm9uVHJhbnNmb3JtIiwiSW5qZWN0b3IiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwic2VydmljZVN0YWNrIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImlnbm9yZUNhc2UiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhIiwibmFtZXNwYWNlcyIsImtleU9yQ29uc3RydWN0b3IiLCJjcmVhdGUiLCJnZXRJbnN0YW5jZUNvbnRhaW5lciIsImdldEZpbHRlciIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJhbGlhcyIsIm5zIiwicG9wIiwic2hvcnROYW1lIiwiZnVsbE5hbWUiLCJjaGVja0xvb3BEZXBlbmRlbmN5Iiwic2VydmljZUZ1bGxOYW1lIiwiaGFzTG9vcERlcGVuZGVuY3kiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5IiwicGFyc2VGdWxsTmFtZSIsImNyZWF0ZVNlcnZpY2UiLCJwcm9ncmFtcyIsIm5zQWxpYXMiLCJnZXRDb21wb25lbnQiLCJnZXREaXJlY3RpdmUiLCJjcmVhdGVGaWx0ZXIiLCJtZXJnZU1ldGFkYXRhIiwibWFrZUNvbXBvbmVudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiLCJpc0NvbXBvbmVudCIsImlzRGlyZWN0aXZlIiwiaXNGaWx0ZXIiLCJpc1NlcnZpY2UiLCJSb290Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtR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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUk8sSUFBTUMsT0FBYjtBQUNJLG1CQUFZelosT0FBWixFQUFxQjBaLE9BQXJCLEVBQThCO0FBQUE7O0FBQzFCLFNBQUsxWixPQUFMLEdBQWVBLE9BQWY7QUFDQSxTQUFLMFosT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFMTDtBQUFBO0FBQUEsNEJBT1k3WixLQVBaLEVBT21CO0FBQUE7O0FBQ1gsVUFBRyxLQUFLNlosT0FBTCxJQUFnQixJQUFuQixFQUF3QjtBQUNwQjtBQUNIOztBQUVELFdBQUtBLE9BQUwsR0FBZUMsVUFBVSxDQUFDLFlBQU07QUFDNUIsYUFBSSxDQUFDRCxPQUFMLEdBQWUsSUFBZjs7QUFDQSxhQUFJLENBQUMzWixPQUFMLENBQWFDLElBQWIsQ0FBa0JILEtBQWxCO0FBQ0gsT0FId0IsRUFHdEIsS0FBSzRaLE9BSGlCLENBQXpCO0FBSUg7QUFoQkw7QUFBQTtBQUFBLDhCQWtCYztBQUNOLFVBQUksS0FBS0MsT0FBTCxJQUFnQixJQUFwQixFQUEwQjtBQUN0QkUsb0JBQVksQ0FBQyxLQUFLRixPQUFOLENBQVo7QUFDSDtBQUNKO0FBdEJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7O0lBRU1HLFE7QUFDRixvQkFBWXZPLEdBQVosRUFBaUJ2TCxPQUFqQixFQUEwQmtCLEtBQTFCLEVBQWlDO0FBQUE7O0FBQzdCLFNBQUtxSyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLdkwsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsU0FBS2tCLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUttQyxRQUFMLEdBQWdCbkMsS0FBaEI7QUFDQSxTQUFLNlksWUFBTCxHQUFvQixLQUFwQjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLEtBQXpCO0FBQ0g7Ozs7Z0NBRVc5WSxLLEVBQU87QUFDZixXQUFLbUMsUUFBTCxHQUFnQm5DLEtBQWhCO0FBQ0EsV0FBSzZZLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDs7O3lDQUVvQjdZLEssRUFBTztBQUN4QixXQUFLOFksaUJBQUwsR0FBeUI5WSxLQUF6QjtBQUNIOzs7Z0NBRVc7QUFDUixhQUFPLEtBQUs2WSxZQUFMLElBQXFCLEtBQUtDLGlCQUFqQztBQUNIOzs7MkJBRU1sYSxLLEVBQU87QUFDVixVQUFJbWEsUUFBUSxHQUFHLEtBQUsvWSxLQUFwQjtBQUFBLFVBQ0ltQyxRQUFRLEdBQUcsS0FBS0EsUUFEcEI7QUFBQSxVQUVJMlcsaUJBQWlCLEdBQUcsS0FBS0EsaUJBRjdCO0FBSUEsV0FBSzlZLEtBQUwsR0FBYSxLQUFLbUMsUUFBbEI7QUFDQSxXQUFLMlcsaUJBQUwsR0FBeUIsS0FBekI7QUFFQSxXQUFLaGEsT0FBTCxDQUFhQyxJQUFiLENBQWtCSCxLQUFsQixFQUF5QjtBQUNyQm1hLGdCQUFRLEVBQUVBLFFBRFc7QUFFckI1VyxnQkFBUSxFQUFFQSxRQUZXO0FBR3JCMlcseUJBQWlCLEVBQUVBO0FBSEUsT0FBekI7QUFLSDs7Ozs7O0FBR0UsSUFBTUUsUUFBYjtBQUNJLG9CQUFZcGEsS0FBWixFQUFtQjtBQUFBOztBQUNmLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtxYSxTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyxnREFBSixFQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixJQUFJOU8sNkNBQUosQ0FBYTNMLEtBQUssQ0FBQytQLE9BQW5CLENBQWhCO0FBQ0EsU0FBSzJLLE9BQUwsR0FBZSxJQUFJZixnREFBSixDQUFZLEtBQUtnQixNQUFqQixFQUF5QixFQUF6QixDQUFmO0FBQ0g7O0FBUkw7QUFBQTtBQUFBLG1DQVVtQmxQLEdBVm5CLEVBVXdCdkwsT0FWeEIsRUFVaUNrQixLQVZqQyxFQVV3QztBQUNoQyxVQUFJMEMsUUFBUSxHQUFHLElBQUlrVyxRQUFKLENBQWF2TyxHQUFiLEVBQWtCdkwsT0FBbEIsRUFBMkJrQixLQUEzQixDQUFmO0FBQ0EsV0FBS2taLFNBQUwsQ0FBZTFhLElBQWYsQ0FBb0JrRSxRQUFwQjtBQUNBLGFBQU9BLFFBQVA7QUFDSDtBQWRMO0FBQUE7QUFBQSxtQ0FnQm1CQSxRQWhCbkIsRUFnQjZCO0FBQ3JCLFVBQUlwRSxLQUFLLEdBQUcsS0FBSzRhLFNBQUwsQ0FBZTNhLE9BQWYsQ0FBdUJtRSxRQUF2QixDQUFaOztBQUNBLFVBQUdwRSxLQUFLLEtBQUssQ0FBQyxDQUFkLEVBQWlCO0FBQ2IsYUFBSzRhLFNBQUwsQ0FBZXZhLE1BQWYsQ0FBc0JMLEtBQXRCLEVBQTZCLENBQTdCO0FBQ0g7QUFDSjtBQXJCTDtBQUFBO0FBQUEsNkJBdUJhO0FBQUE7O0FBQ0wsV0FBSzRhLFNBQUwsQ0FBZXJhLE9BQWYsQ0FBdUIsVUFBQTZELFFBQVEsRUFBSTtBQUMvQixZQUFHQSxRQUFRLENBQUM4VyxTQUFULEVBQUgsRUFBeUI7QUFDckI5VyxrQkFBUSxDQUFDNlcsTUFBVCxDQUFnQixLQUFJLENBQUMzYSxLQUFyQjtBQUNIO0FBQ0osT0FKRDtBQUtIO0FBN0JMO0FBQUE7QUFBQSxpQ0ErQmlCOEQsUUEvQmpCLEVBK0IyQlAsUUEvQjNCLEVBK0JxQztBQUM3QixVQUFJQSxRQUFKLEVBQWM7QUFDVk8sZ0JBQVEsQ0FBQytXLFdBQVQsQ0FBcUJ0WCxRQUFyQjtBQUNILE9BRkQsTUFFTztBQUNITyxnQkFBUSxDQUFDZ1gsb0JBQVQsQ0FBOEIsSUFBOUI7QUFDSDs7QUFDRCxXQUFLSixPQUFMLENBQWFLLE9BQWIsQ0FBcUIsSUFBckI7QUFDSDtBQXRDTDtBQUFBO0FBQUEsZ0NBd0NnQnRQLEdBeENoQixFQXdDcUI7QUFDYixVQUFJdkcsTUFBTSxHQUFHLEtBQUttVixTQUFMLENBQWU1TyxHQUFmLENBQWI7O0FBRUEsVUFBRyxDQUFDdkcsTUFBSixFQUFZO0FBQ1JBLGNBQU0sR0FBRyxLQUFLdVYsUUFBTCxDQUFjL0ssT0FBZCxDQUFzQmpFLEdBQXRCLENBQVQ7QUFDQSxhQUFLNE8sU0FBTCxDQUFlNU8sR0FBZixJQUFzQnZHLE1BQXRCO0FBQ0g7O0FBRUQsYUFBT2MsMkNBQUEsQ0FBVyxJQUFYLEVBQWlCZCxNQUFqQixDQUFQO0FBQ0g7QUFqREw7QUFBQTtBQUFBLDBCQW1EVXVHLEdBbkRWLEVBbURldkwsT0FuRGYsRUFtRHdCa0csTUFuRHhCLEVBbURnQztBQUN4QixVQUFJNUMsSUFBSSxHQUFHLElBQVg7QUFDQSxVQUFJdUksUUFBUSxHQUFHLEtBQUtpUCxXQUFMLENBQWlCdlAsR0FBakIsQ0FBZjtBQUNBLFVBQUl3UCxTQUFTLEdBQUksSUFBSW5MLDhDQUFKLENBQWMsS0FBSzlQLEtBQW5CLEVBQTBCO0FBQUU0UCxpQkFBUyxFQUFFLElBQWI7QUFBbUJ4SixjQUFNLEVBQUVBO0FBQTNCLE9BQTFCLENBQWpCO0FBQ0EsVUFBSXRDLFFBQVEsR0FBRyxLQUFLb1gsY0FBTCxDQUFvQnpQLEdBQXBCLEVBQXlCdkwsT0FBekIsRUFBa0MrYSxTQUFTLENBQUNFLFFBQVYsQ0FBbUIxUCxHQUFuQixDQUFsQyxDQUFmOztBQUVBLGVBQVMyUCxnQkFBVCxDQUEwQmYsU0FBMUIsRUFBcUM7QUFDakNyVSxzREFBQSxDQUFjcVUsU0FBZCxFQUF5QixVQUFVcFUsSUFBVixFQUFnQjtBQUNyQyxjQUFJRCxpREFBQSxDQUFpQkMsSUFBSSxDQUFDb1YsT0FBdEIsQ0FBSixFQUFvQztBQUNoQ3BWLGdCQUFJLENBQUNvVixPQUFMLENBQWFsYixJQUFiLENBQWtCLElBQWxCO0FBQ0E4RixnQkFBSSxDQUFDb1YsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFDREQsMEJBQWdCLENBQUNuVixJQUFJLENBQUN5RixRQUFOLENBQWhCO0FBQ0gsU0FORDtBQU9IOztBQUVELGVBQVM0UCxjQUFULENBQXdCakIsU0FBeEIsRUFBbUM3WixNQUFuQyxFQUEyQztBQUN2QyxZQUFJLENBQUN3RiwrQ0FBQSxDQUFleEYsTUFBZixDQUFMLEVBQTZCO0FBQ3pCO0FBQ0g7O0FBRUR3RixzREFBQSxDQUFjcVUsU0FBZCxFQUF5QixVQUFVcFUsSUFBVixFQUFnQi9ILEdBQWhCLEVBQXFCO0FBQzFDLGNBQUlxZCxNQUFNLEdBQUcvYSxNQUFiOztBQUVBLGNBQUl5RixJQUFJLENBQUN3RixHQUFULEVBQWM7QUFDVnZOLGVBQUcsR0FBRytjLFNBQVMsQ0FBQ0UsUUFBVixDQUFtQmpkLEdBQW5CLENBQU47QUFDSDs7QUFFRCxjQUFHcWQsTUFBTSxLQUFLL1gsSUFBSSxDQUFDeEQsS0FBaEIsSUFBeUJvRyxNQUF6QixJQUFtQ0EsTUFBTSxDQUFDbEksR0FBRCxDQUE1QyxFQUFtRDtBQUMvQ3FkLGtCQUFNLEdBQUduVixNQUFUO0FBQ0g7O0FBRURILGNBQUksQ0FBQ29WLE9BQUwsR0FBZTdYLElBQUksQ0FBQytXLE9BQUwsQ0FBYWlCLEtBQWIsQ0FBbUJELE1BQW5CLEVBQTJCcmQsR0FBM0IsRUFBZ0MsVUFBVTBRLElBQVYsRUFBZ0I7QUFDM0R3TSw0QkFBZ0IsQ0FBQ25WLElBQUksQ0FBQ3lGLFFBQU4sQ0FBaEI7QUFDQTRQLDBCQUFjLENBQUNyVixJQUFJLENBQUN5RixRQUFOLEVBQWdCa0QsSUFBSSxDQUFDclAsSUFBTCxDQUFVZ0UsUUFBMUIsQ0FBZDtBQUNBQyxnQkFBSSxDQUFDaVksWUFBTCxDQUFrQjNYLFFBQWxCLEVBQTRCbVgsU0FBUyxDQUFDRSxRQUFWLENBQW1CMVAsR0FBbkIsQ0FBNUI7QUFDSCxXQUpjLENBQWY7QUFNQTZQLHdCQUFjLENBQUNyVixJQUFJLENBQUN5RixRQUFOLEVBQWdCNlAsTUFBTSxDQUFDcmQsR0FBRCxDQUF0QixDQUFkO0FBQ0gsU0FsQkQ7QUFtQkg7O0FBRURvZCxvQkFBYyxDQUFDdlAsUUFBRCxFQUFXLEtBQUsvTCxLQUFoQixDQUFkO0FBRUEsYUFBTyxZQUFZO0FBQ2ZvYix3QkFBZ0IsQ0FBQ3JQLFFBQUQsQ0FBaEI7QUFDQXZJLFlBQUksQ0FBQ2tZLGNBQUwsQ0FBb0I1WCxRQUFwQjtBQUNILE9BSEQ7QUFJSDtBQW5HTDtBQUFBO0FBQUEsb0NBcUdvQjJILEdBckdwQixFQXFHeUJ2TCxPQXJHekIsRUFxR2tDa0csTUFyR2xDLEVBcUcwQztBQUFBO0FBQUE7O0FBQ2xDLFVBQUk1QyxJQUFJLEdBQUcsSUFBWDtBQUFBLFVBQ0l5WCxTQUFTLEdBQUcsSUFBSW5MLDhDQUFKLENBQWMsS0FBSzlQLEtBQW5CLEVBQTBCO0FBQUU0UCxpQkFBUyxFQUFFLElBQWI7QUFBbUJ4SixjQUFNLEVBQUVBO0FBQTNCLE9BQTFCLENBRGhCO0FBRUEsVUFBSXVWLFlBQVksR0FBR0MsVUFBVSxFQUE3QjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxLQUFLTCxLQUFMLENBQVcvUCxHQUFYLEVBQWdCLFlBQU07QUFDbkMsWUFBSWtRLFlBQVksSUFBSSxJQUFwQixFQUEwQjtBQUN0QkEsc0JBQVksQ0FBQ3hiLElBQWIsQ0FBa0IsTUFBbEI7QUFDSDs7QUFDRHdiLG9CQUFZLEdBQUdDLFVBQVUsRUFBekI7QUFDQTFiLGVBQU8sQ0FBQ3lSLEtBQVIsQ0FBYyxNQUFkLEVBQW9CbUssVUFBcEI7QUFDSCxPQU5nQixFQU1kMVYsTUFOYyxDQUFqQjtBQU9BLFVBQUl0QyxRQUFRLEdBQUcsS0FBS29YLGNBQUwsQ0FBb0J6UCxHQUFwQixFQUF5QnZMLE9BQXpCLEVBQWtDK2EsU0FBUyxDQUFDRSxRQUFWLENBQW1CMVAsR0FBbkIsQ0FBbEMsQ0FBZjs7QUFFQSxlQUFTbVEsVUFBVCxHQUFzQjtBQUNsQixZQUFJRyxVQUFVLEdBQUdkLFNBQVMsQ0FBQ0UsUUFBVixDQUFtQjFQLEdBQW5CLENBQWpCOztBQUVBLFlBQUl6RiwrQ0FBQSxDQUFlK1YsVUFBZixLQUE4Qi9WLDhDQUFBLENBQWMrVixVQUFkLENBQWxDLEVBQTZEO0FBQ3pELGlCQUFPdlksSUFBSSxDQUFDK1csT0FBTCxDQUFhaUIsS0FBYixDQUFtQk8sVUFBbkIsRUFBK0IsR0FBL0IsRUFBb0MsWUFBWTtBQUNuRHZZLGdCQUFJLENBQUNpWSxZQUFMLENBQWtCM1gsUUFBbEI7QUFDSCxXQUZNLENBQVA7QUFHSDtBQUNKOztBQUVELGFBQU8sWUFBWTtBQUNmK1gsa0JBQVUsQ0FBQzFiLElBQVgsQ0FBZ0IsSUFBaEI7QUFDQXdiLG9CQUFZLElBQUlBLFlBQVksQ0FBQ3hiLElBQWIsQ0FBa0IsSUFBbEIsQ0FBaEI7QUFDQXFELFlBQUksQ0FBQ2tZLGNBQUwsQ0FBb0I1WCxRQUFwQjtBQUNILE9BSkQ7QUFLSDtBQWpJTDtBQUFBO0FBQUEsOEJBbUljO0FBQ04sV0FBSzRXLE9BQUwsQ0FBYWhVLE9BQWI7QUFDQSxXQUFLNlQsT0FBTCxDQUFhN1QsT0FBYjtBQUNBLFdBQUsxRyxLQUFMLEdBQWEsSUFBYjtBQUNBLFdBQUtzYSxTQUFMLENBQWV2VCxNQUFmLEdBQXdCLENBQXhCO0FBQ0g7QUF4SUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUM1Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQUlpVixhQUFhLEdBQUdDLE1BQU0sQ0FBQyxXQUFELENBQTFCO0FBQUEsSUFDSUMsWUFBWSxHQUFHRCxNQUFNLENBQUMsVUFBRCxDQUR6QjtBQUdBLElBQUkvYixPQUFPLEdBQUc7QUFDVjRHLEtBQUcsRUFBRXFWLFFBREs7QUFFVmxWLEtBQUcsRUFBRW1WO0FBRkssQ0FBZCxDLENBS0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsT0FBVCxDQUFpQkMsS0FBakIsRUFBd0I7QUFDcEIsU0FBT3RXLCtDQUFBLENBQWVzVyxLQUFmLEtBQXlCQSxLQUFLLENBQUNOLGFBQUQsQ0FBckM7QUFDSDs7QUFFRCxTQUFTTyxTQUFULENBQW1CRCxLQUFuQixFQUEwQjtBQUN0QixTQUFPRCxPQUFPLENBQUNDLEtBQUQsQ0FBUCxHQUFpQkEsS0FBSyxDQUFDSixZQUFELENBQXRCLEdBQXVDSSxLQUE5QztBQUNIOztBQUVELFNBQVNFLFNBQVQsQ0FBbUJwYixLQUFuQixFQUEwQjtBQUN0QixNQUFJNEUsK0NBQUEsQ0FBZTVFLEtBQWYsS0FBeUIsQ0FBQ2liLE9BQU8sQ0FBQ2piLEtBQUQsQ0FBckMsRUFBOEM7QUFDMUM0RSxrREFBQSxDQUFjNUUsS0FBZCxFQUFxQixVQUFVNkUsSUFBVixFQUFnQi9ILEdBQWhCLEVBQXFCO0FBQ3RDa0QsV0FBSyxDQUFDbEQsR0FBRCxDQUFMLEdBQWFzZSxTQUFTLENBQUN2VyxJQUFELENBQXRCO0FBQ0gsS0FGRDtBQUdBLFdBQU8sSUFBSXdXLEtBQUosQ0FBVXJiLEtBQVYsRUFBaUJsQixPQUFqQixDQUFQO0FBQ0g7O0FBRUQsU0FBT2tCLEtBQVA7QUFDSDs7QUFFRCxTQUFTK2EsUUFBVCxDQUFrQjNiLE1BQWxCLEVBQTBCdEMsR0FBMUIsRUFBK0I7QUFDM0IsTUFBSUEsR0FBRyxLQUFLOGQsYUFBWixFQUEyQjtBQUN2QixXQUFPLElBQVA7QUFDSDs7QUFFRCxNQUFJOWQsR0FBRyxLQUFLZ2UsWUFBWixFQUEwQjtBQUN0QixXQUFPMWIsTUFBUDtBQUNIOztBQUVELFNBQU9BLE1BQU0sQ0FBQ3RDLEdBQUQsQ0FBYjtBQUNIOztBQUVELFNBQVNrZSxRQUFULENBQWtCNWIsTUFBbEIsRUFBMEJ0QyxHQUExQixFQUErQmtELEtBQS9CLEVBQXNDO0FBQ2xDLE1BQUkrWSxRQUFRLEdBQUdvQyxTQUFTLENBQUMvYixNQUFNLENBQUN0QyxHQUFELENBQVAsQ0FBeEI7QUFBQSxNQUNJcUYsUUFBUSxHQUFHZ1osU0FBUyxDQUFDbmIsS0FBRCxDQUR4Qjs7QUFHQSxNQUFJK1ksUUFBUSxLQUFLNVcsUUFBakIsRUFBMkI7QUFDdkIvQyxVQUFNLENBQUN0QyxHQUFELENBQU4sR0FBY3NlLFNBQVMsQ0FBQ3BiLEtBQUQsQ0FBdkI7QUFDQXJDLGdEQUFNLENBQUNDLGVBQVAsQ0FBdUJzSyxJQUF2QixDQUE0QjtBQUN4QjlJLFlBQU0sRUFBRUEsTUFEZ0I7QUFFeEJ0QyxTQUFHLEVBQUVBLEdBRm1CO0FBR3hCcUIsVUFBSSxFQUFFO0FBQ0Y0YSxnQkFBUSxFQUFFQSxRQURSO0FBRUY1VyxnQkFBUSxFQUFFQTtBQUZSO0FBSGtCLEtBQTVCO0FBUUgsR0FWRCxNQVdLLElBQUkvQyxNQUFNLENBQUN0QyxHQUFELENBQU4sS0FBZ0JrRCxLQUFwQixFQUEyQjtBQUM1QlosVUFBTSxDQUFDdEMsR0FBRCxDQUFOLEdBQWNrRCxLQUFkO0FBQ0g7O0FBRUQsU0FBTyxJQUFQO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FRDtBQUNBOztJQUVNc2IsYztBQUNGLDBCQUFZbGMsTUFBWixFQUFvQjtBQUFBOztBQUNoQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLbWMsSUFBTCxHQUFZLEVBQVo7QUFDSDs7OztnQ0FFV3plLEcsRUFBSztBQUNiLFVBQUksQ0FBQyxLQUFLeWUsSUFBTCxDQUFVemUsR0FBVixDQUFMLEVBQXFCO0FBQ2pCLGFBQUt5ZSxJQUFMLENBQVV6ZSxHQUFWLElBQWlCLEVBQWpCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLeWUsSUFBTCxDQUFVemUsR0FBVixDQUFQO0FBQ0g7OztnQ0FFV0EsRyxFQUFLZ0MsTyxFQUFTO0FBQ3RCLFVBQUlWLFFBQVEsR0FBRyxLQUFLb2QsV0FBTCxDQUFpQjFlLEdBQWpCLENBQWY7QUFDQXNCLGNBQVEsQ0FBQ0ksSUFBVCxDQUFjTSxPQUFkO0FBQ0g7OztrQ0FFYWhDLEcsRUFBS2dDLE8sRUFBUztBQUN4QixVQUFJVixRQUFRLEdBQUcsS0FBS29kLFdBQUwsQ0FBaUIxZSxHQUFqQixDQUFmOztBQUVBLFVBQUlnQyxPQUFPLElBQUksSUFBZixFQUFxQjtBQUNqQlYsZ0JBQVEsQ0FBQ3VILE1BQVQsR0FBa0IsQ0FBbEI7QUFDSCxPQUZELE1BR0s7QUFDRCxZQUFJckgsS0FBSyxHQUFHRixRQUFRLENBQUNHLE9BQVQsQ0FBaUJPLE9BQWpCLENBQVo7O0FBRUEsWUFBSVIsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkRixrQkFBUSxDQUFDTyxNQUFULENBQWdCTCxLQUFoQixFQUF1QixDQUF2QjtBQUNIO0FBQ0o7QUFDSjs7OzRCQUVPeEIsRyxFQUFLMFEsSSxFQUFNcEwsSSxFQUFNO0FBQ3JCLFVBQUloRSxRQUFRLEdBQUcsS0FBS29kLFdBQUwsQ0FBaUIxZSxHQUFqQixDQUFmO0FBQ0FzQixjQUFRLENBQUNTLE9BQVQsQ0FBaUIsVUFBQUMsT0FBTyxFQUFJO0FBQ3hCQSxlQUFPLENBQUNDLElBQVIsQ0FBYXFELElBQWIsRUFBbUJvTCxJQUFuQjtBQUNILE9BRkQ7QUFHSDs7Ozs7O0FBR0UsSUFBTTRMLE9BQWI7QUFDSSxxQkFBYztBQUFBOztBQUFBOztBQUNWLFNBQUtGLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxTQUFLdUMsa0JBQUwsR0FBMEI5ZCw0Q0FBTSxDQUFDQyxlQUFQLENBQXVCNkosRUFBdkIsQ0FBMEIsVUFBQTFKLENBQUM7QUFBQSxhQUFJLEtBQUksQ0FBQzJkLHFCQUFMLENBQTJCM2QsQ0FBQyxDQUFDSSxJQUE3QixDQUFKO0FBQUEsS0FBM0IsQ0FBMUI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsMENBTTBCQSxJQU4xQixFQU1nQztBQUN4QixVQUFJdUUsUUFBUSxHQUFHLEtBQUtpWixXQUFMLENBQWlCLEtBQUt6QyxTQUF0QixFQUFpQy9hLElBQUksQ0FBQ2lCLE1BQXRDLENBQWY7O0FBRUEsVUFBSXNELFFBQVEsSUFBSSxJQUFoQixFQUFzQjtBQUNsQkEsZ0JBQVEsQ0FBQ2taLE9BQVQsQ0FBaUJ6ZCxJQUFJLENBQUNyQixHQUF0QixFQUEyQnFCLElBQTNCO0FBQ0F1RSxnQkFBUSxDQUFDa1osT0FBVCxDQUFpQixHQUFqQixFQUFzQnpkLElBQXRCO0FBQ0g7QUFDSjtBQWJMO0FBQUE7QUFBQSxnQ0FlZ0IrYSxTQWZoQixFQWUyQjlaLE1BZjNCLEVBZW1DO0FBQzNCLFVBQUlzRCxRQUFKO0FBQUEsVUFBY21aLE9BQU8sR0FBRzNDLFNBQVMsQ0FBQ3ZaLE1BQVYsQ0FBaUIsVUFBQWtGLElBQUksRUFBSTtBQUM3QyxlQUFPQSxJQUFJLENBQUN6RixNQUFMLEtBQWdCQSxNQUF2QjtBQUNILE9BRnVCLENBQXhCOztBQUlBLFVBQUl5YyxPQUFPLENBQUNsVyxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCakQsZ0JBQVEsR0FBR21aLE9BQU8sQ0FBQyxDQUFELENBQWxCO0FBQ0g7O0FBRUQsYUFBT25aLFFBQVA7QUFDSDtBQXpCTDtBQUFBO0FBQUEsbUNBMkJtQndXLFNBM0JuQixFQTJCOEI5WixNQTNCOUIsRUEyQnNDO0FBQzlCLFVBQUlzRCxRQUFRLEdBQUcsSUFBSTRZLGNBQUosQ0FBbUJsYyxNQUFuQixDQUFmO0FBQ0E4WixlQUFTLENBQUMxYSxJQUFWLENBQWVrRSxRQUFmO0FBQ0EsYUFBT0EsUUFBUDtBQUNIO0FBL0JMO0FBQUE7QUFBQSx3Q0FpQ3dCd1csU0FqQ3hCLEVBaUNtQzlaLE1BakNuQyxFQWlDMkM7QUFDbkMsVUFBSXNELFFBQVEsR0FBRyxLQUFLaVosV0FBTCxDQUFpQnpDLFNBQWpCLEVBQTRCOVosTUFBNUIsQ0FBZjs7QUFFQSxVQUFJc0QsUUFBUSxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCQSxnQkFBUSxHQUFHLEtBQUtvWCxjQUFMLENBQW9CWixTQUFwQixFQUErQjlaLE1BQS9CLENBQVg7QUFDSDs7QUFFRCxhQUFPc0QsUUFBUDtBQUNIO0FBekNMO0FBQUE7QUFBQSwwQkEyQ1V0RCxNQTNDVixFQTJDa0J0QyxHQTNDbEIsRUEyQ3VCZ2YsTUEzQ3ZCLEVBMkMrQjtBQUN2QixVQUFJcFosUUFBUSxHQUFHLEtBQUtxWixtQkFBTCxDQUF5QixLQUFLN0MsU0FBOUIsRUFBeUNpQyx3REFBUyxDQUFDL2IsTUFBRCxDQUFsRCxDQUFmO0FBRUFzRCxjQUFRLENBQUNzWixXQUFULENBQXFCbGYsR0FBckIsRUFBMEJnZixNQUExQjtBQUVBLGFBQU8sWUFBWTtBQUNmcFosZ0JBQVEsQ0FBQ3VaLGFBQVQsQ0FBdUJuZixHQUF2QixFQUE0QmdmLE1BQTVCO0FBQ0gsT0FGRDtBQUdIO0FBbkRMO0FBQUE7QUFBQSw4QkFxRGM7QUFDTixXQUFLNUMsU0FBTCxDQUFldlQsTUFBZixHQUF3QixDQUF4QjtBQUNBLFdBQUs4VixrQkFBTDtBQUNIO0FBeERMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdDQTtBQUNBO0FBRU8sSUFBTVMsT0FBYjtBQUNJLG1CQUFZdGQsS0FBWixFQUFtQm1ULElBQW5CLEVBQXlCL00sTUFBekIsRUFBaUM7QUFBQTs7QUFDN0IsU0FBS3BHLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUttVCxJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLL00sTUFBTCxHQUFjQSxNQUFkLENBSDZCLENBSTdCOztBQUNBLFNBQUttWCxLQUFMLEdBQWEsS0FBYixDQUw2QixDQU03Qjs7QUFDQSxTQUFLQyxPQUFMLEdBQWUsS0FBZixDQVA2QixDQVE3Qjs7QUFDQSxTQUFLdFAsVUFBTCxHQUFrQixLQUFsQixDQVQ2QixDQVU3Qjs7QUFDQSxTQUFLdVAsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUtyYyxLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUsrWSxRQUFMLEdBQWdCLElBQWhCO0FBQ0EsU0FBS2xSLE9BQUwsR0FBZSxLQUFmO0FBQ0EsU0FBS3lVLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLQyxXQUFMLEdBQW1CLEVBQW5CO0FBQ0g7O0FBbEJMO0FBQUE7QUFBQSxxQ0FvQnFCeEssSUFwQnJCLEVBb0IyQjtBQUNuQixVQUFJMUgsR0FBRyxHQUFHLElBQUltUyxzREFBSixDQUFlekssSUFBZixDQUFWO0FBQ0EsV0FBS3dLLFdBQUwsQ0FBaUIvZCxJQUFqQixDQUFzQjZMLEdBQXRCO0FBQ0EsYUFBT0EsR0FBUDtBQUNIO0FBeEJMO0FBQUE7QUFBQSw4QkEwQmM7QUFDTixVQUFJLEtBQUsrUixPQUFMLElBQWdCLEtBQUt0UCxVQUF6QixFQUFxQztBQUNqQyxhQUFLcVAsS0FBTCxHQUFhLElBQWI7QUFDSDs7QUFFRCxVQUFJLEtBQUtBLEtBQVQsRUFBZ0I7QUFDWixhQUFLTSxnQkFBTCxDQUFzQixLQUFLMUssSUFBM0I7QUFDSCxPQUZELE1BR0s7QUFDRCxZQUFJbE8sT0FBTyxHQUFHLGNBQWQ7QUFDQSxZQUFJNlksU0FBUyxHQUFHN1ksT0FBTyxDQUFDNlksU0FBeEI7QUFDQSxZQUFJQyxPQUFKO0FBQUEsWUFBYTdILEtBQUssR0FBR2pSLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLEtBQUtnTyxJQUFsQixDQUFyQjs7QUFFQSxlQUFPK0MsS0FBSyxJQUFJLElBQWhCLEVBQXNCO0FBQ2xCLGNBQUlBLEtBQUssQ0FBQ3hXLEtBQU4sR0FBY29lLFNBQWxCLEVBQTZCO0FBQ3pCQyxtQkFBTyxHQUFHLEtBQUs1SyxJQUFMLENBQVVvQyxTQUFWLENBQW9CdUksU0FBcEIsRUFBK0I1SCxLQUFLLENBQUN4VyxLQUFyQyxDQUFWO0FBQ0EsaUJBQUtnZSxRQUFMLENBQWM5ZCxJQUFkLENBQW1CbWUsT0FBbkI7QUFDSDs7QUFFRCxlQUFLTCxRQUFMLENBQWM5ZCxJQUFkLENBQW1CLEtBQUtpZSxnQkFBTCxDQUFzQjNILEtBQUssQ0FBQyxDQUFELENBQTNCLENBQW5CO0FBRUE0SCxtQkFBUyxHQUFHN1ksT0FBTyxDQUFDNlksU0FBcEI7QUFDQTVILGVBQUssR0FBR2pSLE9BQU8sQ0FBQ0UsSUFBUixDQUFhLEtBQUtnTyxJQUFsQixDQUFSO0FBQ0g7O0FBRUQsWUFBSSxLQUFLQSxJQUFMLENBQVVwTSxNQUFWLEdBQW1CK1csU0FBdkIsRUFBa0M7QUFDOUJDLGlCQUFPLEdBQUcsS0FBSzVLLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0J1SSxTQUFwQixDQUFWO0FBQ0EsZUFBS0osUUFBTCxDQUFjOWQsSUFBZCxDQUFtQm1lLE9BQW5CO0FBQ0g7QUFDSjtBQUNKO0FBeERMO0FBQUE7QUFBQSwyQkEwRFc7QUFBQTs7QUFDSCxVQUFJLEtBQUs3UCxVQUFMLElBQW1CLEtBQUtzUCxPQUE1QixFQUFxQztBQUNqQztBQUNIOztBQUVELFdBQUtRLE1BQUw7QUFFQSxXQUFLTCxXQUFMLENBQWlCMWQsT0FBakIsQ0FBeUIsVUFBQXdMLEdBQUcsRUFBSTtBQUM1QkEsV0FBRyxDQUFDK1AsS0FBSixDQUFVLEtBQUksQ0FBQ3hiLEtBQWYsRUFBc0IsWUFBTTtBQUN4QixlQUFJLENBQUNnZSxNQUFMOztBQUNBLGVBQUksQ0FBQ0MsS0FBTDtBQUNILFNBSEQsRUFHRyxLQUFJLENBQUM3WCxNQUhSO0FBSUgsT0FMRDtBQU1IO0FBdkVMO0FBQUE7QUFBQSw2QkF5RWE7QUFDTCxVQUFJN0MsUUFBUSxHQUFHLEtBQUsyYSxPQUFMLEVBQWY7O0FBRUEsVUFBSSxLQUFLOWMsS0FBTCxJQUFjbUMsUUFBbEIsRUFBNEI7QUFDeEIsYUFBSzBGLE9BQUwsR0FBZSxJQUFmO0FBQ0EsYUFBS2tSLFFBQUwsR0FBZ0IsS0FBSy9ZLEtBQXJCO0FBQ0EsYUFBS0EsS0FBTCxHQUFhbUMsUUFBYjtBQUNIO0FBQ0osS0FqRkwsQ0FtRkk7O0FBbkZKO0FBQUE7QUFBQSw0QkFvRlk2QyxNQXBGWixFQW9Gb0I7QUFBQTs7QUFDWkEsWUFBTSxHQUFHSiw0Q0FBQSxDQUFZLEtBQUtJLE1BQWpCLEVBQXlCQSxNQUF6QixDQUFUOztBQUVBLFVBQUksS0FBS21YLEtBQVQsRUFBZ0I7QUFDWixlQUFPLEtBQUtJLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0JPLE9BQXBCLENBQTRCLEtBQUtsZSxLQUFqQyxFQUF3Q29HLE1BQXhDLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtzWCxRQUFMLENBQWNTLE1BQWQsQ0FBcUIsVUFBQ0MsSUFBRCxFQUFPdFQsR0FBUCxFQUFlO0FBQ3ZDLFlBQUk5RSwrQ0FBQSxDQUFlOEUsR0FBZixDQUFKLEVBQXlCO0FBQ3JCLGlCQUFPc1QsSUFBSSxHQUFHdFQsR0FBZDtBQUNILFNBSHNDLENBSXZDOzs7QUFDQSxlQUFPc1QsSUFBSSxJQUFJdFQsR0FBRyxDQUFDb1QsT0FBSixDQUFZLE1BQUksQ0FBQ2xlLEtBQWpCLEVBQXdCb0csTUFBeEIsS0FBbUMsRUFBdkMsQ0FBWDtBQUNILE9BTk0sRUFNSixFQU5JLENBQVA7QUFPSCxLQWxHTCxDQW9HSTs7QUFwR0o7QUFBQTtBQUFBLDJCQXFHV2hGLEtBckdYLEVBcUdrQmdGLE1BckdsQixFQXFHMEI7QUFDbEJBLFlBQU0sR0FBR0osNENBQUEsQ0FBWSxLQUFLSSxNQUFqQixFQUF5QkEsTUFBekIsQ0FBVDs7QUFFQSxVQUFJLEtBQUttWCxLQUFULEVBQWdCO0FBQ1osYUFBS0ksV0FBTCxDQUFpQixDQUFqQixFQUFvQjFaLE1BQXBCLENBQTJCLEtBQUtqRSxLQUFoQyxFQUF1Q29CLEtBQXZDLEVBQThDZ0YsTUFBOUM7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFNLElBQUl2RyxLQUFKLENBQVUsS0FBS3NULElBQUwsR0FBWSwwQkFBdEIsQ0FBTjtBQUNIO0FBQ0o7QUE3R0w7QUFBQTtBQUFBLHVDQStHdUJzSyxVQS9HdkIsRUErR21DO0FBQzNCLFdBQUtBLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0g7QUFqSEw7QUFBQTtBQUFBLHlDQW1IeUJBLFVBbkh6QixFQW1IcUM7QUFDN0IsVUFBSSxLQUFLQSxVQUFMLEtBQW9CQSxVQUF4QixFQUFvQztBQUNoQyxhQUFLQSxVQUFMLEdBQWtCLElBQWxCO0FBQ0g7QUFDSixLQXZITCxDQXlISTs7QUF6SEo7QUFBQTtBQUFBLDRCQTBIWTtBQUNKLFVBQUksS0FBS3hVLE9BQUwsSUFBZ0IsS0FBS3dVLFVBQUwsSUFBbUIsSUFBdkMsRUFBNkM7QUFDekMsYUFBS3hVLE9BQUwsR0FBZSxLQUFmO0FBQ0EsYUFBS3dVLFVBQUwsQ0FBZ0J0ZCxJQUFoQixDQUFxQixJQUFyQixFQUEyQixLQUFLaUIsS0FBaEMsRUFBdUMsS0FBSytZLFFBQTVDO0FBQ0g7QUFDSjtBQS9ITDtBQUFBO0FBQUEsOEJBaUljO0FBQ04sV0FBS3dELFdBQUwsQ0FBaUIxZCxPQUFqQixDQUF5QixVQUFBd0wsR0FBRyxFQUFJO0FBQzVCQSxXQUFHLENBQUMvRSxPQUFKO0FBQ0gsT0FGRDtBQUdIO0FBcklMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNa1gsVUFBYjtBQUNJLHNCQUFZekssSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtySCxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUt1UCxPQUFMLEdBQWUsSUFBZjtBQUNBLFNBQUtnRCxjQUFMLEdBQXNCLEtBQXRCO0FBQ0gsR0FOTCxDQVFJOzs7QUFSSjtBQUFBO0FBQUEsNEJBU1lyZSxLQVRaLEVBU21Cb0csTUFUbkIsRUFTMkI7QUFDbkIsYUFBT3BHLEtBQUssQ0FBQytGLEtBQU4sQ0FBWSxLQUFLb04sSUFBakIsRUFBdUIvTSxNQUF2QixDQUFQO0FBQ0gsS0FYTCxDQWFJOztBQWJKO0FBQUE7QUFBQSwyQkFjV3BHLEtBZFgsRUFja0JvQixLQWRsQixFQWN5QmdGLE1BZHpCLEVBY2lDO0FBQ3pCcEcsV0FBSyxDQUFDc2UsT0FBTixDQUFjLEtBQUtuTCxJQUFuQixFQUF5Qi9SLEtBQXpCLEVBQWdDZ0YsTUFBaEM7QUFDSDtBQWhCTDtBQUFBO0FBQUEsMEJBa0JVcEcsS0FsQlYsRUFrQmlCRSxPQWxCakIsRUFrQjBCa0csTUFsQjFCLEVBa0JrQztBQUMxQixXQUFLaVYsT0FBTCxHQUFlcmIsS0FBSyxDQUFDdWUsTUFBTixDQUFhLEtBQUtwTCxJQUFsQixFQUF3QmpULE9BQXhCLEVBQWlDa0csTUFBakMsQ0FBZjtBQUNIO0FBcEJMO0FBQUE7QUFBQSw4QkFzQmM7QUFDTixVQUFHLEtBQUtpVixPQUFMLElBQWdCLElBQW5CLEVBQXlCO0FBQ3JCLGFBQUtBLE9BQUw7QUFDSDtBQUNKO0FBMUJMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQUltRCxTQUFTLEdBQUcsOElBQWhCO0FBQ0EsSUFBSUMsU0FBUyxHQUFHRCxTQUFTLENBQUM1VCxLQUFWLENBQWdCLEdBQWhCLENBQWhCO0FBRU8sSUFBTW5NLFFBQWI7QUFBQTtBQUFBO0FBQUEsd0JBQ21CO0FBQ1gsYUFBTyxLQUFLdUIsS0FBTCxDQUFXMGUsU0FBbEI7QUFDSDtBQUhMOztBQUtJLG9CQUFZMWUsS0FBWixFQUFtQm9HLE1BQW5CLEVBQTJCO0FBQUE7O0FBQ3ZCLFNBQUtwRyxLQUFMLEdBQWFBLEtBQWI7QUFDQSxTQUFLb0csTUFBTCxHQUFjQSxNQUFkO0FBQ0EsU0FBS3JDLE1BQUwsR0FBYy9ELEtBQUssQ0FBQytQLE9BQXBCO0FBQ0EsU0FBS3RKLElBQUwsR0FBWSxJQUFaO0FBQ0g7O0FBVkw7QUFBQTtBQUFBLCtCQVllME0sSUFaZixFQVlxQjtBQUNiLFVBQUl3TCxPQUFPLEdBQUcsSUFBSXJCLGdEQUFKLENBQVksS0FBS3RkLEtBQWpCLEVBQXdCbVQsSUFBeEIsRUFBOEIsS0FBSy9NLE1BQW5DLENBQWQ7QUFDQSxXQUFLSyxJQUFMLENBQVVtWSxRQUFWLENBQW1CaGYsSUFBbkIsQ0FBd0IrZSxPQUF4QjtBQUNBLGFBQU9BLE9BQVA7QUFDSDtBQWhCTDtBQUFBO0FBQUEsaUNBa0JpQmpVLEdBbEJqQixFQWtCc0I7QUFDZCxVQUFJYixLQUFLLEdBQUcsS0FBS2xKLFFBQUwsQ0FBY2tlLGVBQWQsQ0FBOEJuVSxHQUE5QixDQUFaO0FBRUEsV0FBSzFLLEtBQUwsQ0FBVzhlLFlBQVgsQ0FBd0JqVixLQUF4QjtBQUNBLFdBQUtwRCxJQUFMLENBQVVzWSxVQUFWLENBQXFCbmYsSUFBckIsQ0FBMEJpSyxLQUExQjtBQUVBLGFBQU9BLEtBQVA7QUFDSDtBQXpCTDtBQUFBO0FBQUEsaUNBMkJpQmEsR0EzQmpCLEVBMkJzQjtBQUNkLFVBQUk3SixTQUFTLEdBQUcsS0FBS0YsUUFBTCxDQUFjcWUsZUFBZCxDQUE4QnRVLEdBQTlCLENBQWhCO0FBRUE3SixlQUFTLENBQUNvZSxPQUFWLEdBQW9CLEtBQUtqZixLQUF6QjtBQUVBLGFBQU9hLFNBQVA7QUFDSDtBQWpDTDtBQUFBO0FBQUEsdUNBbUN1QmdFLElBbkN2QixFQW1DNkI7QUFDckIsVUFBSTdHLFNBQVMsR0FBRyxLQUFLK0YsTUFBTCxDQUFZbWIsZ0JBQVosQ0FBNkJyYSxJQUFJLENBQUNzYSxRQUFsQyxDQUFoQixDQURxQixDQUdyQjs7QUFFQSxhQUFPbmhCLFNBQVA7QUFDSDtBQXpDTDtBQUFBO0FBQUEsdUNBMkN1QjhHLEtBM0N2QixFQTJDOEI7QUFDdEIsVUFBSWpFLFNBQVMsR0FBRyxLQUFLa0QsTUFBTCxDQUFZcWIsZ0JBQVosQ0FBNkJ0YSxLQUFLLENBQUN1YSxRQUFOLENBQWVqaEIsSUFBNUMsQ0FBaEIsQ0FEc0IsQ0FHdEI7O0FBRUEsYUFBT3lDLFNBQVA7QUFDSDtBQWpETDtBQUFBO0FBQUEsMkJBbURXdEMsUUFuRFgsRUFtRHFCO0FBQUE7O0FBQ2I7QUFDQSxVQUFJK2dCLFNBQVMsR0FBR3pkLFFBQVEsQ0FBQzBELHNCQUFULEVBQWhCO0FBRUEsV0FBS2tCLElBQUwsR0FBWSxJQUFJOFksMENBQUosRUFBWjtBQUVBLFdBQUs5WSxJQUFMLENBQVUrWSxNQUFWLEdBQW1CLEtBQUt6YixNQUFMLENBQVkwYixhQUFaLENBQTBCbGhCLFFBQTFCLENBQW5CO0FBRUEsV0FBS21oQixZQUFMLENBQWtCLEtBQUtqWixJQUFMLENBQVUrWSxNQUE1QixFQVJhLENBVWI7O0FBRUEsV0FBS0csU0FBTCxDQUFlLEtBQUtsWixJQUFMLENBQVUrWSxNQUF6QixFQUFpQ3ZmLE9BQWpDLENBQXlDLFVBQUFtTSxJQUFJO0FBQUEsZUFBSWtULFNBQVMsQ0FBQzVaLFdBQVYsQ0FBc0IwRyxJQUF0QixDQUFKO0FBQUEsT0FBN0MsRUFaYSxDQWNiOztBQUNBLFdBQUszRixJQUFMLENBQVVtWixVQUFWLENBQXFCM2YsT0FBckIsQ0FBNkIsVUFBQVksU0FBUztBQUFBLGVBQUlBLFNBQVMsQ0FBQ2dmLFNBQVYsRUFBSjtBQUFBLE9BQXRDLEVBZmEsQ0FpQmI7O0FBQ0F6ZiwrREFBQSxDQUF5QmtmLFNBQXpCLEVBQW9DcmYsT0FBcEMsQ0FBNEMsVUFBQW1NLElBQUk7QUFBQSxlQUFJLEtBQUksQ0FBQzNGLElBQUwsQ0FBVXFaLEtBQVYsQ0FBZ0JsZ0IsSUFBaEIsQ0FBcUJ3TSxJQUFyQixDQUFKO0FBQUEsT0FBaEQ7QUFFQSxhQUFPLEtBQUszRixJQUFaO0FBQ0g7QUF4RUw7QUFBQTtBQUFBLGlDQTBFaUIrWSxNQTFFakIsRUEwRXlCO0FBQUE7O0FBQ2pCQSxZQUFNLENBQUN2ZixPQUFQLENBQWUsVUFBQThmLEtBQUs7QUFBQSxlQUFJLE1BQUksQ0FBQ0MsV0FBTCxDQUFpQkQsS0FBakIsQ0FBSjtBQUFBLE9BQXBCO0FBQ0g7QUE1RUw7QUFBQTtBQUFBLGdDQThFZ0JBLEtBOUVoQixFQThFdUI7QUFDZixVQUFJRSxvREFBTyxDQUFDRixLQUFELENBQVgsRUFBb0I7QUFDaEIsYUFBS0csV0FBTCxDQUFpQkgsS0FBakI7QUFDSCxPQUZELE1BR0ssSUFBR0ksdURBQVUsQ0FBQ0osS0FBRCxDQUFiLEVBQXFCO0FBQ3RCLGFBQUtLLGNBQUwsQ0FBb0JMLEtBQXBCO0FBQ0gsT0FGSSxNQUdBO0FBQ0QsYUFBS00sVUFBTCxDQUFnQk4sS0FBaEI7QUFDSDtBQUNKO0FBeEZMO0FBQUE7QUFBQSw4QkEwRmNQLE1BMUZkLEVBMEZzQjtBQUFBOztBQUNkLGFBQU9BLE1BQU0sQ0FBQ2hPLEdBQVAsQ0FBVyxVQUFBdU8sS0FBSztBQUFBLGVBQUksTUFBSSxDQUFDTyxRQUFMLENBQWNQLEtBQWQsQ0FBSjtBQUFBLE9BQWhCLENBQVA7QUFDSDtBQTVGTDtBQUFBO0FBQUEsNkJBOEZhQSxLQTlGYixFQThGb0I7QUFDWixVQUFJRSxvREFBTyxDQUFDRixLQUFELENBQVgsRUFBb0I7QUFDaEIsZUFBTyxLQUFLUSxRQUFMLENBQWNSLEtBQWQsQ0FBUDtBQUNIOztBQUVELFVBQUdJLHVEQUFVLENBQUNKLEtBQUQsQ0FBYixFQUFzQjtBQUNsQixlQUFPLEtBQUtTLFdBQUwsQ0FBaUJULEtBQWpCLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtVLE9BQUwsQ0FBYVYsS0FBYixDQUFQO0FBQ0g7QUF4R0w7QUFBQTtBQUFBLCtCQTBHZWxiLElBMUdmLEVBMEdxQjtBQUFBOztBQUNiLFVBQUk2YixPQUFPLEdBQUc3YixJQUFJLENBQUN3YSxRQUFuQjtBQUVBcUIsYUFBTyxDQUFDMWlCLFNBQVIsR0FBb0IsS0FBSzJpQixrQkFBTCxDQUF3QjliLElBQXhCLENBQXBCO0FBRUEsVUFBSSthLFVBQVUsR0FBRyxFQUFqQjtBQUNBLFVBQUlnQixZQUFZLEdBQUcvYixJQUFJLENBQUNnYyxNQUFMLENBQVlDLElBQVosQ0FBaUIsVUFBQWhjLEtBQUssRUFBSTtBQUN6QyxZQUFJaWMsUUFBUSxHQUFHamMsS0FBSyxDQUFDdWEsUUFBckI7O0FBRUEsY0FBSSxDQUFDMkIsV0FBTCxDQUFpQmxjLEtBQWpCOztBQUVBLFlBQUlpYyxRQUFRLENBQUNsZ0IsU0FBVCxJQUFzQixJQUExQixFQUFnQztBQUM1QitlLG9CQUFVLENBQUNoZ0IsSUFBWCxDQUFnQm1oQixRQUFRLENBQUNsZ0IsU0FBekI7QUFDQTZmLGlCQUFPLENBQUNPLE1BQVIsR0FBaUJGLFFBQVEsQ0FBQ0UsTUFBMUI7QUFDQSxpQkFBT1AsT0FBTyxDQUFDTyxNQUFSLElBQWtCLElBQXpCO0FBQ0g7O0FBRUQsZUFBTyxLQUFQO0FBQ0gsT0Faa0IsQ0FBbkIsQ0FOYSxDQW9CYjs7QUFDQWpiLG9EQUFBLENBQWM0WixVQUFkLEVBQTBCLFVBQUEvZSxTQUFTO0FBQUEsZUFBSUEsU0FBUyxDQUFDcWdCLFNBQWQ7QUFBQSxPQUFuQyxFQUE0RGpoQixPQUE1RCxDQUFvRSxVQUFBWSxTQUFTO0FBQUEsZUFBSSxNQUFJLENBQUM0RixJQUFMLENBQVVtWixVQUFWLENBQXFCaGdCLElBQXJCLENBQTBCaUIsU0FBMUIsQ0FBSjtBQUFBLE9BQTdFO0FBRUE2ZixhQUFPLENBQUNkLFVBQVIsR0FBcUJBLFVBQXJCLENBdkJhLENBeUJiOztBQUNBLFVBQUlnQixZQUFKLEVBQWtCO0FBQ2Q7QUFDSDs7QUFFRCxVQUFJRixPQUFPLENBQUMxaUIsU0FBWixFQUF1QjtBQUNuQjBpQixlQUFPLENBQUNyaUIsS0FBUixHQUFnQixLQUFLOGlCLFFBQUwsQ0FBY3RjLElBQWQsQ0FBaEI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLNmEsWUFBTCxDQUFrQjdhLElBQUksQ0FBQzhFLFVBQXZCO0FBQ0g7QUFDSjtBQTlJTDtBQUFBO0FBQUEsZ0NBZ0pnQjdFLEtBaEpoQixFQWdKdUI7QUFDZixVQUFJc2MsUUFBUSxHQUFHdGMsS0FBSyxDQUFDcWEsUUFBckI7QUFBQSxVQUErQmtDLFNBQVMsR0FBR3ZjLEtBQUssQ0FBQ0UsU0FBakQ7QUFBQSxVQUNJK2IsUUFBUSxHQUFHamMsS0FBSyxDQUFDdWEsUUFEckI7QUFBQSxVQUMrQlYsT0FEL0I7O0FBR0EsVUFBRzBDLFNBQVMsSUFBSSxJQUFoQixFQUFzQjtBQUNsQjFDLGVBQU8sR0FBRyxLQUFLMkMsVUFBTCxDQUFnQkQsU0FBaEIsQ0FBVjtBQUNBTixnQkFBUSxDQUFDcEMsT0FBVCxHQUFtQkEsT0FBbkI7QUFDSDs7QUFFRCxVQUFJeUMsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDMUJSLGdCQUFRLENBQUNTLE9BQVQsR0FBbUIsSUFBbkI7QUFDQVQsZ0JBQVEsQ0FBQzNpQixJQUFULEdBQWdCZ2pCLFFBQVEsQ0FBQ0ssTUFBVCxDQUFnQixDQUFoQixDQUFoQjtBQUNBVixnQkFBUSxDQUFDVyxVQUFULEdBQXNCMWIsMkNBQUEsQ0FBV3lZLFNBQVgsRUFBc0IsVUFBQXRmLENBQUM7QUFBQSxpQkFBSUEsQ0FBQyxLQUFLNGhCLFFBQVEsQ0FBQzNpQixJQUFuQjtBQUFBLFNBQXZCLENBQXRCO0FBQ0F1Z0IsZUFBTyxLQUFLQSxPQUFPLENBQUNuQixPQUFSLEdBQWtCLElBQXZCLENBQVA7QUFDSCxPQUxELE1BTUssSUFBSTRELFFBQVEsQ0FBQ0csVUFBVCxDQUFvQixHQUFwQixDQUFKLEVBQThCO0FBQy9CUixnQkFBUSxDQUFDM2lCLElBQVQsR0FBZ0JnakIsUUFBUSxDQUFDSyxNQUFULENBQWdCLENBQWhCLENBQWhCO0FBQ0E5QyxlQUFPLEtBQUtBLE9BQU8sQ0FBQ3BCLEtBQVIsR0FBZ0IsSUFBckIsQ0FBUDtBQUNILE9BSEksTUFJQSxJQUFJNkQsUUFBUSxDQUFDRyxVQUFULENBQW9CLEdBQXBCLENBQUosRUFBOEI7QUFDL0JSLGdCQUFRLENBQUNsZ0IsU0FBVCxHQUFxQixJQUFyQjtBQUNBa2dCLGdCQUFRLENBQUMzaUIsSUFBVCxHQUFnQmdqQixRQUFRLENBQUNLLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFDQTlDLGVBQU8sS0FBS0EsT0FBTyxDQUFDcEIsS0FBUixHQUFnQixJQUFyQixDQUFQO0FBQ0gsT0FKSSxNQUtBO0FBQ0R3RCxnQkFBUSxDQUFDM2lCLElBQVQsR0FBZ0JnakIsUUFBaEI7QUFDSDs7QUFFRCxVQUFJTCxRQUFRLENBQUNsZ0IsU0FBYixFQUF3QjtBQUNwQixZQUFJQSxTQUFTLEdBQUcsS0FBSzhnQixrQkFBTCxDQUF3QjdjLEtBQXhCLENBQWhCOztBQUVBLFlBQUlqRSxTQUFKLEVBQWU7QUFDWGtnQixrQkFBUSxDQUFDbGdCLFNBQVQsR0FBcUIsS0FBSytnQixZQUFMLENBQWtCL2dCLFNBQWxCLENBQXJCO0FBQ0FrZ0Isa0JBQVEsQ0FBQ2xnQixTQUFULENBQW1CZ2hCLE9BQW5CLEdBQTZCL2MsS0FBN0I7O0FBRUEsY0FBRzZaLE9BQU8sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCQSxtQkFBTyxDQUFDelEsVUFBUixHQUFxQjZTLFFBQVEsQ0FBQ2xnQixTQUFULENBQW1CaWhCLFdBQXhDO0FBQ0g7O0FBRUQsY0FBSWYsUUFBUSxDQUFDbGdCLFNBQVQsQ0FBbUJraEIsUUFBbkIsRUFBSixFQUFtQztBQUMvQmhCLG9CQUFRLENBQUNFLE1BQVQsR0FBa0JGLFFBQVEsQ0FBQ2xnQixTQUEzQjtBQUNBO0FBQ0g7QUFDSixTQVpELE1BYUs7QUFDRCxnQkFBTSxJQUFJaEIsS0FBSixDQUFVLGVBQWVraEIsUUFBUSxDQUFDM2lCLElBQXhCLEdBQStCLGlCQUF6QyxDQUFOO0FBQ0g7QUFDSjs7QUFFRCxVQUFHdWdCLE9BQU8sSUFBSSxJQUFkLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBRUQsVUFBSSxFQUFFb0MsUUFBUSxDQUFDUyxPQUFULElBQW9CVCxRQUFRLENBQUNsZ0IsU0FBL0IsQ0FBSixFQUErQztBQUMzQyxZQUFJbWhCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQVU1Z0IsS0FBVixFQUFpQjtBQUMvQixjQUFJaEMsR0FBRyxHQUFHMEYsS0FBSyxDQUFDRCxJQUFOLENBQVd6RixHQUFyQjs7QUFFQSxjQUFJMmhCLFFBQVEsQ0FBQzNpQixJQUFULENBQWNtakIsVUFBZCxDQUF5QixPQUF6QixDQUFKLEVBQXVDO0FBQ25DdmIsOERBQUEsQ0FBa0I1RyxHQUFsQixFQUF1QjJoQixRQUFRLENBQUMzaUIsSUFBaEMsRUFBc0NnRCxLQUF0QztBQUNILFdBRkQsTUFHSztBQUNEaEMsZUFBRyxDQUFDc0ksWUFBSixDQUFpQnFaLFFBQVEsQ0FBQzNpQixJQUExQixFQUFnQ2dELEtBQWhDO0FBQ0g7QUFDSixTQVREOztBQVdBLFlBQUkwRCxLQUFLLENBQUNELElBQU4sQ0FBV3dhLFFBQVgsQ0FBb0JyaEIsU0FBeEIsRUFBbUM7QUFDL0IyZ0IsaUJBQU8sQ0FBQ3NELGtCQUFSLENBQTJCLFVBQVU3Z0IsS0FBVixFQUFpQjtBQUN4QyxnQkFBSXBELFNBQVMsR0FBRzhHLEtBQUssQ0FBQ0QsSUFBTixDQUFXd2EsUUFBWCxDQUFvQnJoQixTQUFwQztBQUNBLGdCQUFJa2tCLFlBQVksR0FBR2xjLHdEQUFBLENBQXdCK2EsUUFBUSxDQUFDM2lCLElBQWpDLEVBQXVDLEdBQXZDLENBQW5COztBQUVBLGdCQUFJSixTQUFTLENBQUNta0IsWUFBVixDQUF1QkQsWUFBdkIsQ0FBSixFQUEwQztBQUN0Q2xrQix1QkFBUyxDQUFDMkYsWUFBVixDQUF1QnVlLFlBQXZCLEVBQXFDOWdCLEtBQXJDO0FBQ0gsYUFGRCxNQUdLO0FBQ0Q0Z0IseUJBQVcsQ0FBQzVnQixLQUFELENBQVg7QUFDSDtBQUNKLFdBVkQ7QUFXSCxTQVpELE1BYUs7QUFDRHVkLGlCQUFPLENBQUNzRCxrQkFBUixDQUEyQkQsV0FBM0I7QUFDSDtBQUNKOztBQUVEckQsYUFBTyxDQUFDeUQsT0FBUjtBQUNIO0FBcE9MO0FBQUE7QUFBQSxnQ0FzT2dCQyxLQXRPaEIsRUFzT3VCO0FBQ2ZBLFdBQUssQ0FBQ2hELFFBQU4sQ0FBZVYsT0FBZixHQUF5QixLQUFLMkMsVUFBTCxDQUFnQmUsS0FBSyxDQUFDcmQsU0FBdEIsQ0FBekI7QUFDQXFkLFdBQUssQ0FBQ2hELFFBQU4sQ0FBZVYsT0FBZixDQUF1QnNELGtCQUF2QixDQUEwQyxVQUFVN2dCLEtBQVYsRUFBaUI7QUFDdkQsWUFBSWhDLEdBQUo7QUFBQSxZQUFTa2pCLFdBQVcsR0FBR3pnQixRQUFRLENBQUN3SixjQUFULENBQXdCakssS0FBeEIsQ0FBdkI7O0FBRUEsWUFBSWloQixLQUFLLENBQUN6YyxVQUFOLElBQW9CLElBQXhCLEVBQThCO0FBQzFCLGNBQUl5YyxLQUFLLENBQUNqakIsR0FBTixJQUFhLElBQWpCLEVBQXVCO0FBQ25CQSxlQUFHLEdBQUdpakIsS0FBSyxDQUFDampCLEdBQU4sQ0FBVXdHLFVBQWhCO0FBQ0g7QUFDSixTQUpELE1BS0s7QUFDRHhHLGFBQUcsR0FBR2lqQixLQUFLLENBQUN6YyxVQUFOLENBQWlCeEcsR0FBdkI7QUFDSDs7QUFFRCxZQUFJQSxHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNiLGNBQUlpakIsS0FBSyxDQUFDampCLEdBQU4sSUFBYSxJQUFqQixFQUF1QjtBQUNuQkEsZUFBRyxDQUFDc0csV0FBSixDQUFnQjRjLFdBQWhCO0FBQ0gsV0FGRCxNQUdLO0FBQ0RsaUIsK0RBQUEsQ0FBbUJpaUIsS0FBSyxDQUFDampCLEdBQXpCLEVBQThCa2pCLFdBQTlCO0FBQ0g7QUFDSjs7QUFFREQsYUFBSyxDQUFDampCLEdBQU4sR0FBWWtqQixXQUFaO0FBQ0gsT0F0QkQ7QUF1QkFELFdBQUssQ0FBQ2hELFFBQU4sQ0FBZVYsT0FBZixDQUF1QnlELE9BQXZCO0FBQ0g7QUFoUUw7QUFBQTtBQUFBLG1DQWtRbUJHLEtBbFFuQixFQWtRMEIsQ0FFckI7QUFwUUw7QUFBQTtBQUFBLDRCQXNRWTFkLElBdFFaLEVBc1FrQjtBQUFBOztBQUNWLFVBQUk2YixPQUFPLEdBQUc3YixJQUFJLENBQUN3YSxRQUFuQjs7QUFFQSxVQUFJcUIsT0FBTyxDQUFDTyxNQUFSLElBQWtCLElBQXRCLEVBQTRCO0FBQ3hCLGVBQU9QLE9BQU8sQ0FBQ08sTUFBUixDQUFldUIsS0FBZixFQUFQO0FBQ0g7O0FBRUQzZCxVQUFJLENBQUN6RixHQUFMLEdBQVd5QyxRQUFRLENBQUN1SixhQUFULENBQXVCdkcsSUFBSSxDQUFDc2EsUUFBNUIsQ0FBWDs7QUFFQSxVQUFJdUIsT0FBTyxDQUFDMWlCLFNBQVosRUFBdUI7QUFDbkIsWUFBSXlrQixRQUFRLEdBQUcsS0FBS0MsWUFBTCxDQUFrQmhDLE9BQU8sQ0FBQzFpQixTQUExQixDQUFmO0FBRUEwaUIsZUFBTyxDQUFDMWlCLFNBQVIsR0FBb0J5a0IsUUFBcEI7QUFFQXJpQixxREFBQSxDQUFheUUsSUFBSSxDQUFDekYsR0FBbEIsRUFBdUJpQixnREFBdkI7QUFFQXdFLFlBQUksQ0FBQ2djLE1BQUwsQ0FBWTVnQixPQUFaLENBQW9CLFVBQUE2RSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDNmQsUUFBTCxDQUFjN2QsS0FBZCxDQUFKO0FBQUEsU0FBekI7QUFFQTJkLGdCQUFRLENBQUNHLE1BQVQsR0FBa0IvZCxJQUFsQjtBQUNBNGQsZ0JBQVEsQ0FBQ0ksUUFBVCxDQUFrQm5DLE9BQU8sQ0FBQ3JpQixLQUExQjtBQUNBb2tCLGdCQUFRLENBQUNwYyxPQUFUO0FBQ0FvYyxnQkFBUSxDQUFDSyxNQUFULENBQWdCamUsSUFBSSxDQUFDekYsR0FBckI7QUFDSCxPQWJELE1BY0s7QUFDRHlGLFlBQUksQ0FBQ2djLE1BQUwsQ0FBWTVnQixPQUFaLENBQW9CLFVBQUE2RSxLQUFLO0FBQUEsaUJBQUksTUFBSSxDQUFDNmQsUUFBTCxDQUFjN2QsS0FBZCxDQUFKO0FBQUEsU0FBekI7QUFDQUQsWUFBSSxDQUFDOEUsVUFBTCxDQUFnQjFKLE9BQWhCLENBQXdCLFVBQUE0SixLQUFLO0FBQUEsaUJBQUloRixJQUFJLENBQUN6RixHQUFMLENBQVNzRyxXQUFULENBQXFCLE1BQUksQ0FBQzRhLFFBQUwsQ0FBY3pXLEtBQWQsQ0FBckIsQ0FBSjtBQUFBLFNBQTdCO0FBQ0g7O0FBRUQsYUFBT2hGLElBQUksQ0FBQ3pGLEdBQVo7QUFDSDtBQW5TTDtBQUFBO0FBQUEsNkJBcVNhMEYsS0FyU2IsRUFxU29CO0FBQ1osVUFBSUQsSUFBSSxHQUFHQyxLQUFLLENBQUNELElBQWpCO0FBQUEsVUFDSXpGLEdBQUcsR0FBR3lGLElBQUksQ0FBQ3pGLEdBRGY7QUFBQSxVQUVJMmhCLFFBQVEsR0FBR2pjLEtBQUssQ0FBQ3VhLFFBRnJCO0FBQUEsVUFHSVYsT0FBTyxHQUFHb0MsUUFBUSxDQUFDcEMsT0FIdkI7O0FBS0EsVUFBR0EsT0FBTyxJQUFJLElBQWQsRUFBb0I7QUFDaEI7QUFDSDs7QUFFRCxVQUFJb0MsUUFBUSxDQUFDUyxPQUFiLEVBQXNCO0FBQ2xCLFlBQUlULFFBQVEsQ0FBQ1csVUFBYixFQUF5QjtBQUNyQnRpQixhQUFHLENBQUNrRSxnQkFBSixDQUFxQnlkLFFBQVEsQ0FBQzNpQixJQUE5QixFQUFvQyxVQUFBZSxDQUFDO0FBQUEsbUJBQUl3ZixPQUFPLENBQUNULE9BQVIsQ0FBZ0IsSUFBSWhmLDJDQUFKLENBQVVDLENBQVYsRUFBYUMsR0FBYixDQUFoQixDQUFKO0FBQUEsV0FBckM7QUFDSCxTQUZELE1BR0ssSUFBSXlGLElBQUksQ0FBQ3dhLFFBQUwsQ0FBY3JoQixTQUFsQixFQUE2QjtBQUM5QixjQUFJK2tCLFNBQVMsR0FBRy9jLHdEQUFBLENBQXdCK2EsUUFBUSxDQUFDM2lCLElBQWpDLEVBQXVDLEdBQXZDLENBQWhCO0FBQ0F5RyxjQUFJLENBQUN3YSxRQUFMLENBQWNyaEIsU0FBZCxDQUF3Qm1GLEtBQXhCLENBQThCNGYsU0FBOUIsRUFBeUMsVUFBQTVqQixDQUFDO0FBQUEsbUJBQUl3ZixPQUFPLENBQUNULE9BQVIsQ0FBZ0IsSUFBSWhmLDJDQUFKLENBQVVDLENBQVYsRUFBYUMsR0FBYixDQUFoQixDQUFKO0FBQUEsV0FBMUM7QUFDSDtBQUNKLE9BUkQsTUFTSztBQUNEdWYsZUFBTyxDQUFDcUUsSUFBUjtBQUNBckUsZUFBTyxDQUFDVixLQUFSO0FBQ0gsT0F0QlcsQ0F3Qlo7OztBQUNBLFVBQUc4QyxRQUFRLENBQUNsZ0IsU0FBWixFQUF1QjtBQUNuQjhkLGVBQU8sQ0FBQ3NELGtCQUFSLENBQTJCLFVBQUMxZSxRQUFELEVBQVc0VyxRQUFYO0FBQUEsaUJBQXdCNEcsUUFBUSxDQUFDbGdCLFNBQVQsQ0FBbUJvaUIsT0FBbkIsQ0FBMkIxZixRQUEzQixFQUFxQzRXLFFBQXJDLENBQXhCO0FBQUEsU0FBM0I7QUFDSDtBQUNKO0FBalVMO0FBQUE7QUFBQSw2QkFtVWFrSSxLQW5VYixFQW1Vb0I7QUFDWkEsV0FBSyxDQUFDaEQsUUFBTixDQUFlVixPQUFmLENBQXVCcUUsSUFBdkI7QUFDQVgsV0FBSyxDQUFDampCLEdBQU4sR0FBWXlDLFFBQVEsQ0FBQ3dKLGNBQVQsQ0FBd0JnWCxLQUFLLENBQUNoRCxRQUFOLENBQWVWLE9BQWYsQ0FBdUJ2ZCxLQUEvQyxDQUFaO0FBQ0EsYUFBT2loQixLQUFLLENBQUNqakIsR0FBYjtBQUNIO0FBdlVMO0FBQUE7QUFBQSxnQ0F5VWdCbWpCLEtBelVoQixFQXlVdUI7QUFDZixhQUFPMWdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QnlnQixLQUFLLENBQUN2ZCxTQUE3QixDQUFQO0FBQ0g7QUEzVUw7QUFBQTtBQUFBLDZCQTZVYUgsSUE3VWIsRUE2VW1CO0FBQ1gsVUFBSXhHLEtBQUssR0FBRyxFQUFaO0FBRUF3RyxVQUFJLENBQUM4RSxVQUFMLENBQWdCMUosT0FBaEIsQ0FBd0IsVUFBQTRKLEtBQUssRUFBSTtBQUM3QixZQUFHcVosbURBQU0sQ0FBQ3JaLEtBQUQsQ0FBVCxFQUFrQjtBQUNkLGNBQUlzWixJQUFJLEdBQUd0WixLQUFLLENBQUN1WixPQUFOLENBQWMsTUFBZCxDQUFYOztBQUVBLGNBQUdELElBQUgsRUFBUztBQUNMOWtCLGlCQUFLLENBQUM4a0IsSUFBSSxDQUFDbmUsU0FBTixDQUFMLEdBQXdCNkUsS0FBSyxDQUFDd1osV0FBTixFQUF4QjtBQUNIO0FBQ0o7QUFDSixPQVJEO0FBVUEsYUFBUWhsQixLQUFSO0FBQ0g7QUEzVkw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFFTyxJQUFNa2hCLElBQWI7QUFBQTtBQUFBO0FBQUEsd0JBQ2tCO0FBQ1YsVUFBSWhaLE9BQU8sR0FBRzFFLFFBQVEsQ0FBQzBELHNCQUFULEVBQWQ7QUFDQSxXQUFLdWEsS0FBTCxDQUFXN2YsT0FBWCxDQUFtQixVQUFBbU0sSUFBSTtBQUFBLGVBQUk3RixPQUFPLENBQUNiLFdBQVIsQ0FBb0IwRyxJQUFwQixDQUFKO0FBQUEsT0FBdkI7QUFDQSxhQUFPN0YsT0FBUDtBQUNIO0FBTEw7O0FBT0ksa0JBQWM7QUFBQTs7QUFDVixTQUFLdVosS0FBTCxHQUFhLEVBQWI7QUFDQSxTQUFLTixNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtaLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLZ0IsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUtiLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFiTDtBQUFBO0FBQUEsMEJBZVV1RSxpQkFmVixFQWU2QjtBQUNyQixVQUFJQyxPQUFKOztBQUVBLFVBQUl2ZCwrQ0FBQSxDQUFlc2QsaUJBQWYsQ0FBSixFQUF1QztBQUNuQ0MsZUFBTyxHQUFHMWhCLFFBQVEsQ0FBQzJoQixhQUFULENBQXVCRixpQkFBdkIsQ0FBVjtBQUNILE9BRkQsTUFHSztBQUNEQyxlQUFPLEdBQUdELGlCQUFWO0FBQ0g7O0FBRURDLGFBQU8sQ0FBQzdkLFdBQVIsQ0FBb0IsS0FBS2EsT0FBekI7QUFDSCxLQTFCTCxDQTRCSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBMUNKO0FBQUE7QUFBQSw4QkE0Q2M7QUFDTixXQUFLd1ksVUFBTCxDQUFnQjllLE9BQWhCLENBQXdCLFVBQUFnRyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDd2QsUUFBTCxFQUFKO0FBQUEsT0FBNUI7QUFDQSxXQUFLN0QsVUFBTCxDQUFnQjNmLE9BQWhCLENBQXdCLFVBQUFnRyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDd2QsUUFBTCxFQUFKO0FBQUEsT0FBNUI7QUFDQSxXQUFLN0UsUUFBTCxDQUFjM2UsT0FBZCxDQUFzQixVQUFBZ0csSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ1MsT0FBTCxFQUFKO0FBQUEsT0FBMUI7QUFDQSxXQUFLOFksTUFBTCxDQUFZdmYsT0FBWixDQUFvQixVQUFBZ0csSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ1MsT0FBTCxFQUFKO0FBQUEsT0FBeEI7QUFFQSxXQUFLcVksVUFBTCxDQUFnQmhZLE1BQWhCLEdBQXlCLENBQXpCO0FBQ0EsV0FBSzZZLFVBQUwsQ0FBZ0I3WSxNQUFoQixHQUF5QixDQUF6QjtBQUNBLFdBQUs2WCxRQUFMLENBQWM3WCxNQUFkLEdBQXVCLENBQXZCO0FBQ0EsV0FBS3lZLE1BQUwsQ0FBWXpZLE1BQVosR0FBcUIsQ0FBckI7QUFDQSxXQUFLK1ksS0FBTCxDQUFXL1ksTUFBWCxHQUFvQixDQUFwQjtBQUNIO0FBdkRMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFTyxJQUFNMmMsS0FBYjtBQUFBOztBQUNJLGlCQUFZdGxCLElBQVosRUFBa0JnRCxLQUFsQixFQUF5QjtBQUFBOztBQUFBOztBQUNyQiwrRUFBTXVpQiwrQ0FBUSxDQUFDQyxTQUFmLEVBQTBCeGxCLElBQTFCLEVBQWdDZ0QsS0FBaEM7QUFDQSxVQUFLeUQsSUFBTCxHQUFZLElBQVo7QUFDQSxVQUFLZ1IsS0FBTCxHQUFhLEdBQWI7QUFIcUI7QUFJeEI7O0FBTEw7QUFBQTtBQUFBLDZCQU9helUsS0FQYixFQU9vQjtBQUNaLFdBQUs0RCxTQUFMLEdBQWlCNUQsS0FBakI7QUFDSDtBQVRMO0FBQUE7QUFBQSxrQ0FXa0I7QUFDVixhQUFPLElBQUlzaUIsS0FBSixDQUFVLEtBQUt2RSxRQUFmLEVBQXlCLEtBQUtuYSxTQUE5QixDQUFQO0FBQ0g7QUFiTDtBQUFBO0FBQUEsZ0NBZWdCLENBRVg7QUFqQkw7O0FBQUE7QUFBQSxFQUEyQjZlLDRDQUEzQixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFDSSxpQkFBWTFpQixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsOEVBQ1R1aUIsK0NBQVEsQ0FBQ0ksT0FEQSxFQUNTLFVBRFQsRUFDcUIzaUIsS0FEckI7QUFFbEI7O0FBSEw7QUFBQTtBQUFBLGtDQUtrQjtBQUNWLGFBQU8sSUFBSTBpQixLQUFKLENBQVUsS0FBSzNFLFFBQWYsRUFBeUIsS0FBS25hLFNBQTlCLENBQVA7QUFDSDtBQVBMOztBQUFBO0FBQUEsRUFBMkI2ZSw0Q0FBM0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFTyxJQUFNRyxJQUFiO0FBQUE7O0FBQ0ksZ0JBQVk1bEIsSUFBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhFQUFNdWxCLCtDQUFRLENBQUNKLE9BQWYsRUFBd0JubEIsSUFBeEI7QUFDQSxVQUFLZ0IsR0FBTCxHQUFXLElBQVg7QUFDQSxVQUFLeWhCLE1BQUwsR0FBYyxFQUFkO0FBQ0EsVUFBS29ELFVBQUwsR0FBa0IsS0FBbEI7QUFDQSxVQUFLalksT0FBTCxHQUFlLElBQUlrWSx1REFBSixFQUFmO0FBTGM7QUFNakI7O0FBUEw7QUFBQTtBQUFBLDZCQVNhQyxJQVRiLEVBU21CO0FBQ1hBLFVBQUksQ0FBQ3RmLElBQUwsR0FBWSxJQUFaO0FBQ0EsV0FBS2djLE1BQUwsQ0FBWWpoQixJQUFaLENBQWlCdWtCLElBQWpCO0FBQ0g7QUFaTDtBQUFBO0FBQUEsOEJBY2M7QUFDTixhQUFPLEtBQUt0RCxNQUFMLENBQVk5WixNQUFaLEtBQXVCLENBQTlCO0FBQ0g7QUFoQkw7QUFBQTtBQUFBLDRCQWtCWTdJLEdBbEJaLEVBa0JpQjtBQUNULFVBQUlrbUIsT0FBTyxHQUFHLEtBQUt2RCxNQUFMLENBQVk5ZixNQUFaLENBQW1CLFVBQVVvakIsSUFBVixFQUFnQjtBQUM3QyxlQUFPQSxJQUFJLENBQUNoRixRQUFMLEtBQWtCamhCLEdBQXpCO0FBQ0gsT0FGYSxDQUFkOztBQUlBLFVBQUksQ0FBQ2ttQixPQUFPLENBQUNyZCxNQUFiLEVBQXFCO0FBQ2pCLGVBQU8sSUFBUDtBQUNIOztBQUVELGFBQU9xZCxPQUFPLENBQUMsQ0FBRCxDQUFkO0FBQ0g7QUE1Qkw7QUFBQTtBQUFBLDRCQThCWWxtQixHQTlCWixFQThCaUJrRCxLQTlCakIsRUE4QndCO0FBQ2hCLFVBQUlaLE1BQUo7QUFBQSxVQUFZNGpCLE9BQU8sR0FBRyxLQUFLdkQsTUFBTCxDQUFZOWYsTUFBWixDQUFtQixVQUFVb2pCLElBQVYsRUFBZ0I7QUFDckQsZUFBT0EsSUFBSSxDQUFDRSxRQUFMLENBQWNubUIsR0FBZCxDQUFQO0FBQ0gsT0FGcUIsQ0FBdEI7O0FBSUEsVUFBSWttQixPQUFPLENBQUNyZCxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCdkcsY0FBTSxHQUFHNGpCLE9BQU8sQ0FBQyxDQUFELENBQWhCO0FBQ0E1akIsY0FBTSxDQUFDOGpCLFFBQVAsQ0FBZ0JsakIsS0FBaEI7QUFDSCxPQUhELE1BSUs7QUFDRFosY0FBTSxHQUFHLElBQUlrakIsNENBQUosQ0FBVXhsQixHQUFWLEVBQWVrRCxLQUFmLENBQVQ7QUFDQVosY0FBTSxDQUFDcUUsSUFBUCxHQUFjLElBQWQ7QUFDQXJFLGNBQU0sQ0FBQzRoQixPQUFQLENBQWUsS0FBS21DLGNBQXBCO0FBQ0g7O0FBRUQsV0FBSzFELE1BQUwsQ0FBWWpoQixJQUFaLENBQWlCWSxNQUFqQjtBQUVBLGFBQU9BLE1BQVA7QUFDSDtBQWhETDtBQUFBO0FBQUEsK0JBa0RldEMsR0FsRGYsRUFrRG9CO0FBQ1osVUFBSXNDLE1BQU0sR0FBRyxFQUFiO0FBQUEsVUFBaUJnRCxJQUFJLEdBQUcsSUFBeEI7O0FBRUEsVUFBSXRGLEdBQUcsWUFBWXdsQiw0Q0FBbkIsRUFBMEI7QUFDdEIsWUFBSWhrQixLQUFLLEdBQUcsS0FBS21oQixNQUFMLENBQVlsaEIsT0FBWixDQUFvQnpCLEdBQXBCLENBQVo7O0FBQ0EsWUFBSXdCLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZGMsZ0JBQU0sR0FBR2dELElBQUksQ0FBQ3FkLE1BQUwsQ0FBWTlnQixNQUFaLENBQW1CTCxLQUFuQixFQUEwQixDQUExQixDQUFUO0FBQ0g7QUFDSixPQUxELE1BTUs7QUFDRCxhQUFLbWhCLE1BQUwsQ0FBWTlmLE1BQVosQ0FBbUIsVUFBVW9qQixJQUFWLEVBQWdCO0FBQy9CLGlCQUFPQSxJQUFJLENBQUNFLFFBQUwsQ0FBY25tQixHQUFkLENBQVA7QUFDSCxTQUZELEVBRUcrQixPQUZILENBRVcsVUFBVWlXLEtBQVYsRUFBaUI7QUFDeEIsY0FBSXhXLEtBQUssR0FBRzhELElBQUksQ0FBQ3FkLE1BQUwsQ0FBWWxoQixPQUFaLENBQW9CdVcsS0FBcEIsQ0FBWjtBQUNBQSxlQUFLLENBQUN4UCxPQUFOO0FBQ0FsRyxnQkFBTSxHQUFHZ0QsSUFBSSxDQUFDcWQsTUFBTCxDQUFZOWdCLE1BQVosQ0FBbUJMLEtBQW5CLEVBQTBCLENBQTFCLENBQVQ7QUFDSCxTQU5EO0FBT0g7O0FBRUQsYUFBT2MsTUFBTSxDQUFDdUcsTUFBUCxHQUFnQixDQUFoQixHQUFvQnZHLE1BQU0sQ0FBQyxDQUFELENBQTFCLEdBQWdDLElBQXZDO0FBQ0g7QUF0RUw7QUFBQTtBQUFBLCtCQXdFZTJqQixJQXhFZixFQXdFcUI7QUFDYixVQUFJQSxJQUFJLENBQUN0ZixJQUFMLElBQWEsSUFBakIsRUFBdUI7QUFDbkIsY0FBTSxJQUFJaEYsS0FBSixDQUFVLCtCQUFWLENBQU47QUFDSDs7QUFFRHNrQixVQUFJLENBQUN0ZixJQUFMLEdBQVksSUFBWjtBQUNBc2YsVUFBSSxDQUFDL0IsT0FBTCxDQUFhLEtBQUttQyxjQUFsQjtBQUNBLFdBQUsxRCxNQUFMLENBQVlqaEIsSUFBWixDQUFpQnVrQixJQUFqQjtBQUNBLGFBQU9BLElBQVA7QUFDSDtBQWpGTDtBQUFBO0FBQUEsa0NBbUZrQjtBQUNWLGFBQU8sS0FBS25ZLE9BQUwsQ0FBYW1ELEtBQWIsQ0FBbUIsSUFBbkIsQ0FBUDtBQUNIO0FBckZMO0FBQUE7QUFBQSxrQ0F1RmtCO0FBQUE7O0FBQ1YsYUFBTyxLQUFLeEYsVUFBTCxDQUFnQjZILEdBQWhCLENBQW9CLFVBQUEzSCxLQUFLLEVBQUk7QUFDaEMsZUFBTyxNQUFJLENBQUNtQyxPQUFMLENBQWFtRCxLQUFiLENBQW1CdEYsS0FBbkIsQ0FBUDtBQUNILE9BRk0sRUFFSjNCLElBRkksQ0FFQyxFQUZELENBQVA7QUFHSDtBQTNGTDtBQUFBO0FBQUEsZ0NBNkZnQnNjLEdBN0ZoQixFQTZGcUI7QUFDYixVQUFJaGhCLElBQUksR0FBRyxJQUFYO0FBQ0FpaEIsK0RBQVEsQ0FBQ0QsR0FBRCxDQUFSLENBQWN2a0IsT0FBZCxDQUFzQixVQUFVOGYsS0FBVixFQUFpQjtBQUNuQ0EsYUFBSyxDQUFDbmEsVUFBTixHQUFtQixJQUFuQjtBQUNBcEMsWUFBSSxDQUFDb0MsVUFBTCxDQUFnQkMsWUFBaEIsQ0FBNkJyQyxJQUE3QixFQUFtQ3VjLEtBQW5DO0FBQ0gsT0FIRDtBQUlBdmMsVUFBSSxDQUFDb0MsVUFBTCxDQUFnQmtFLFdBQWhCLENBQTRCdEcsSUFBNUI7QUFDSDtBQXBHTDtBQUFBO0FBQUEsZ0NBc0dnQmdoQixHQXRHaEIsRUFzR3FCO0FBQ2IsVUFBSWhoQixJQUFJLEdBQUcsSUFBWDtBQUNBLFdBQUtraEIsZUFBTDtBQUNBRCwrREFBUSxDQUFDRCxHQUFELENBQVIsQ0FBY3ZrQixPQUFkLENBQXNCLFVBQVU4ZixLQUFWLEVBQWlCO0FBQ25DQSxhQUFLLENBQUNuYSxVQUFOLEdBQW1CLElBQW5CO0FBQ0FwQyxZQUFJLENBQUNrQyxXQUFMLENBQWlCcWEsS0FBakI7QUFDSCxPQUhEO0FBSUg7QUE3R0w7QUFBQTtBQUFBLGtDQStHa0I7QUFDVixVQUFJM1QsSUFBSSxHQUFHLElBQUk0WCxJQUFKLENBQVMsS0FBSzdFLFFBQWQsRUFBd0IsS0FBS25hLFNBQTdCLENBQVg7QUFFQW9ILFVBQUksQ0FBQ3lVLE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlyUCxHQUFaLENBQWdCLFVBQVUxTSxLQUFWLEVBQWlCO0FBQzNDLFlBQUk2ZixJQUFJLEdBQUc3ZixLQUFLLENBQUM4ZixTQUFOLEVBQVg7QUFDQUQsWUFBSSxDQUFDOWYsSUFBTCxHQUFZdUgsSUFBWjtBQUNBLGVBQU91WSxJQUFQO0FBQ0gsT0FKYSxDQUFkO0FBTUEsYUFBT3ZZLElBQVA7QUFDSDtBQXpITDtBQUFBO0FBQUEsZ0NBMkhnQjtBQUNSLFdBQUt5VSxNQUFMLENBQVk1Z0IsT0FBWixDQUFvQixVQUFVa2tCLElBQVYsRUFBZ0I7QUFDaENBLFlBQUksQ0FBQ3pkLE9BQUw7QUFDSCxPQUZEO0FBSUEsV0FBS21hLE1BQUwsQ0FBWTlaLE1BQVosR0FBcUIsQ0FBckI7QUFDSDtBQWpJTDs7QUFBQTtBQUFBLEVBQTBCOGMsNENBQTFCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xPLElBQUlGLFFBQVEsR0FBRztBQUNsQkosU0FBTyxFQUFFLENBRFM7QUFFbEJLLFdBQVMsRUFBRSxDQUZPO0FBR2xCelEsTUFBSSxFQUFFLENBSFk7QUFJbEIwUixjQUFZLEVBQUUsQ0FKSTtBQUtsQkMsaUJBQWUsRUFBRSxDQUxDO0FBTWxCQyxRQUFNLEVBQUUsQ0FOVTtBQU9sQkMsdUJBQXFCLEVBQUUsQ0FQTDtBQVFsQmpCLFNBQU8sRUFBRSxDQVJTO0FBU2xCbGlCLFVBQVEsRUFBRSxDQVRRO0FBVWxCb2pCLGNBQVksRUFBRSxFQVZJO0FBV2xCQyxrQkFBZ0IsRUFBRSxFQVhBO0FBWWxCQyxVQUFRLEVBQUU7QUFaUSxDQUFmLEMsQ0FlUDs7QUFDTyxJQUFNdEIsS0FBYjtBQUNJLGlCQUFZdlgsSUFBWixFQUFrQmxPLElBQWxCLEVBQXdCZ0QsS0FBeEIsRUFBK0I7QUFBQTs7QUFDM0IsU0FBS3VpQixRQUFMLEdBQWdCclgsSUFBaEI7QUFDQSxTQUFLNlMsUUFBTCxHQUFnQi9nQixJQUFoQjtBQUNBLFNBQUs0RyxTQUFMLEdBQWlCNUQsS0FBakI7QUFDQSxTQUFLdUksVUFBTCxHQUFrQixFQUFsQjtBQUNBLFNBQUt5YixVQUFMLEdBQWtCLElBQWxCO0FBQ0EsU0FBSzVhLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLNUUsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFNBQUt5RSxlQUFMLEdBQXVCLElBQXZCO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFNBQUsrVSxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7O0FBWkw7QUFBQTtBQUFBLDhCQWNjeFYsS0FkZCxFQWNxQjtBQUNiQSxXQUFLLENBQUNqRSxVQUFOLEdBQW1CLElBQW5CO0FBQ0EsV0FBSytELFVBQUwsQ0FBZ0IvSixJQUFoQixDQUFxQmlLLEtBQXJCO0FBQ0g7QUFqQkw7QUFBQTtBQUFBLG1DQW1CbUI7QUFDWCxVQUFJLEtBQUtGLFVBQUwsQ0FBZ0I1QyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUM5QjtBQUNIOztBQUVELFVBQUl2RCxJQUFJLEdBQUcsSUFBWDs7QUFFQSxVQUFJLEtBQUttRyxVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBL0IsRUFBa0M7QUFDOUIsYUFBS3FlLFVBQUwsR0FBa0IsS0FBS3piLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBbEI7QUFDQSxhQUFLYSxTQUFMLEdBQWlCLEtBQUtiLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBakI7QUFDSCxPQUhELE1BSUs7QUFDRCxhQUFLeWIsVUFBTCxHQUFrQixLQUFLemIsVUFBTCxDQUFnQixDQUFoQixDQUFsQjtBQUNBLGFBQUthLFNBQUwsR0FBaUIsS0FBS2IsVUFBTCxDQUFnQixLQUFLQSxVQUFMLENBQWdCNUMsTUFBaEIsR0FBeUIsQ0FBekMsQ0FBakI7QUFFQSxhQUFLNEMsVUFBTCxDQUFnQjFKLE9BQWhCLENBQXdCLFVBQVU0SixLQUFWLEVBQWlCbkssS0FBakIsRUFBd0I7QUFDNUMsY0FBSUEsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYm1LLGlCQUFLLENBQUNTLFdBQU4sR0FBb0I5RyxJQUFJLENBQUNtRyxVQUFMLENBQWdCakssS0FBSyxHQUFHLENBQXhCLENBQXBCO0FBQ0E7QUFDSDs7QUFDRCxjQUFJQSxLQUFLLEtBQU04RCxJQUFJLENBQUNtRyxVQUFMLENBQWdCNUMsTUFBaEIsR0FBeUIsQ0FBeEMsRUFBNEM7QUFDeEM4QyxpQkFBSyxDQUFDUSxlQUFOLEdBQXdCN0csSUFBSSxDQUFDbUcsVUFBTCxDQUFnQmpLLEtBQUssR0FBRyxDQUF4QixDQUF4QjtBQUNBO0FBQ0g7O0FBQ0RtSyxlQUFLLENBQUNRLGVBQU4sR0FBd0I3RyxJQUFJLENBQUNtRyxVQUFMLENBQWdCakssS0FBSyxHQUFHLENBQXhCLENBQXhCO0FBQ0FtSyxlQUFLLENBQUNTLFdBQU4sR0FBb0I5RyxJQUFJLENBQUNtRyxVQUFMLENBQWdCakssS0FBSyxHQUFHLENBQXhCLENBQXBCO0FBQ0gsU0FYRDtBQVlIOztBQUVELFdBQUtpSyxVQUFMLENBQWdCMUosT0FBaEIsQ0FBd0IsVUFBVTRKLEtBQVYsRUFBaUI7QUFDckNBLGFBQUssQ0FBQ3diLFlBQU47QUFDSCxPQUZEO0FBR0g7QUFuREw7QUFBQTtBQUFBLDRDQXFENEI7QUFDcEIsV0FBS3pmLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLeUUsZUFBTCxHQUF1QixJQUF2QjtBQUNBLFdBQUtDLFdBQUwsR0FBbUIsSUFBbkI7QUFDSDtBQXpETDtBQUFBO0FBQUEsNkJBMkRhO0FBQ0wsVUFBSSxLQUFLMUUsVUFBTCxJQUFtQixJQUF2QixFQUE2QjtBQUN6QixhQUFLQSxVQUFMLENBQWdCa0UsV0FBaEIsQ0FBNEIsSUFBNUI7QUFDSDtBQUNKO0FBL0RMO0FBQUE7QUFBQSxvQ0FpRW9CO0FBQ1osYUFBTyxLQUFLSCxVQUFMLENBQWdCNUMsTUFBaEIsS0FBMkIsQ0FBbEM7QUFDSDtBQW5FTDtBQUFBO0FBQUEsc0NBcUVzQjtBQUNkLFdBQUs0QyxVQUFMLENBQWdCMUosT0FBaEIsQ0FBd0IsVUFBVTRKLEtBQVYsRUFBaUI7QUFDckNBLGFBQUssQ0FBQ25ELE9BQU47QUFDSCxPQUZEO0FBR0EsV0FBS2lELFVBQUwsQ0FBZ0I1QyxNQUFoQixHQUF5QixDQUF6QjtBQUNIO0FBMUVMO0FBQUE7QUFBQSxnQ0E0RWdCOEMsS0E1RWhCLEVBNEV1QjtBQUNmLFVBQUlBLEtBQUssQ0FBQ2pFLFVBQU4sSUFBb0IsSUFBeEIsRUFBOEI7QUFDMUJpRSxhQUFLLENBQUNqRSxVQUFOLENBQWlCa0UsV0FBakIsQ0FBNkJELEtBQTdCO0FBQ0g7O0FBRURBLFdBQUssQ0FBQ2pFLFVBQU4sR0FBbUIsSUFBbkI7O0FBRUEsVUFBSSxLQUFLK0QsVUFBTCxDQUFnQjVDLE1BQWhCLEtBQTJCLENBQS9CLEVBQWtDO0FBQzlCLGFBQUtxZSxVQUFMLEdBQWtCdmIsS0FBbEI7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLVyxTQUFMLENBQWVGLFdBQWYsR0FBNkJULEtBQTdCO0FBQ0FBLGFBQUssQ0FBQ1EsZUFBTixHQUF3QixLQUFLRyxTQUE3QjtBQUNIOztBQUVEWCxXQUFLLENBQUN1WSxPQUFOLENBQWMsS0FBS21DLGNBQW5CO0FBQ0EsV0FBSy9aLFNBQUwsR0FBaUJYLEtBQWpCO0FBQ0EsV0FBS0YsVUFBTCxDQUFnQi9KLElBQWhCLENBQXFCaUssS0FBckI7QUFDQSxhQUFPQSxLQUFQO0FBQ0g7QUEvRkw7QUFBQTtBQUFBLGlDQWlHaUJ5YixRQWpHakIsRUFpRzJCQyxRQWpHM0IsRUFpR3FDO0FBQzdCLFVBQUlBLFFBQVEsQ0FBQzNmLFVBQVQsSUFBdUIsSUFBM0IsRUFBaUM7QUFDN0IyZixnQkFBUSxDQUFDM2YsVUFBVCxDQUFvQmtFLFdBQXBCLENBQWdDeWIsUUFBaEM7QUFDSDs7QUFDRCxVQUFJN2xCLEtBQUssR0FBRyxLQUFLaUssVUFBTCxDQUFnQmhLLE9BQWhCLENBQXdCMmxCLFFBQXhCLENBQVo7O0FBQ0EsVUFBSTVsQixLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsY0FBTSxJQUFJRyxLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNIOztBQUVEMGxCLGNBQVEsQ0FBQzNmLFVBQVQsR0FBc0IsSUFBdEI7O0FBRUEsVUFBSTBmLFFBQVEsQ0FBQ2piLGVBQVQsSUFBNEIsSUFBaEMsRUFBc0M7QUFDbENrYixnQkFBUSxDQUFDbGIsZUFBVCxHQUEyQmliLFFBQVEsQ0FBQ2piLGVBQXBDO0FBQ0FpYixnQkFBUSxDQUFDamIsZUFBVCxDQUF5QkMsV0FBekIsR0FBdUNpYixRQUF2QztBQUNIOztBQUVEQSxjQUFRLENBQUNqYixXQUFULEdBQXVCZ2IsUUFBdkI7QUFDQUEsY0FBUSxDQUFDamIsZUFBVCxHQUEyQmtiLFFBQTNCOztBQUVBLFVBQUk3bEIsS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLMGxCLFVBQUwsR0FBa0JHLFFBQWxCO0FBQ0g7O0FBRURBLGNBQVEsQ0FBQ25ELE9BQVQsQ0FBaUIsS0FBS21DLGNBQXRCO0FBQ0EsV0FBSzVhLFVBQUwsQ0FBZ0I1SixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUIsRUFBaUM2bEIsUUFBakM7QUFDQSxhQUFPQSxRQUFQO0FBQ0g7QUEzSEw7QUFBQTtBQUFBLGdDQTZIZ0JELFFBN0hoQixFQTZIMEJDLFFBN0gxQixFQTZIb0M7QUFDNUIsVUFBSUQsUUFBUSxDQUFDaGIsV0FBVCxJQUF3QixJQUE1QixFQUFrQztBQUM5QixlQUFPLEtBQUs1RSxXQUFMLENBQWlCNmYsUUFBakIsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBSzFmLFlBQUwsQ0FBa0J5ZixRQUFRLENBQUNoYixXQUEzQixFQUF3Q2liLFFBQXhDLENBQVA7QUFDSDtBQW5JTDtBQUFBO0FBQUEsZ0NBcUlnQjFiLEtBckloQixFQXFJdUI7QUFDZixVQUFJbkssS0FBSyxHQUFHLEtBQUtpSyxVQUFMLENBQWdCaEssT0FBaEIsQ0FBd0JrSyxLQUF4QixDQUFaOztBQUNBLFVBQUluSyxLQUFLLEtBQUssQ0FBQyxDQUFmLEVBQWtCO0FBQ2QsY0FBTSxJQUFJRyxLQUFKLENBQVUsOENBQVYsQ0FBTjtBQUNIOztBQUVELFVBQUlnSyxLQUFLLENBQUNRLGVBQU4sSUFBeUIsSUFBN0IsRUFBbUM7QUFDL0JSLGFBQUssQ0FBQ1EsZUFBTixDQUFzQkMsV0FBdEIsR0FBb0NULEtBQUssQ0FBQ1MsV0FBMUM7QUFDSDs7QUFFRCxVQUFJVCxLQUFLLENBQUNTLFdBQU4sSUFBcUIsSUFBekIsRUFBK0I7QUFDM0JULGFBQUssQ0FBQ1MsV0FBTixDQUFrQkQsZUFBbEIsR0FBb0NSLEtBQUssQ0FBQ1EsZUFBMUM7QUFDSDs7QUFFRCxVQUFJM0ssS0FBSyxLQUFLLENBQWQsRUFBaUI7QUFDYixhQUFLMGxCLFVBQUwsR0FBa0J2YixLQUFLLENBQUNTLFdBQXhCO0FBQ0g7O0FBRUQsVUFBSTVLLEtBQUssS0FBTSxLQUFLaUssVUFBTCxDQUFnQjVDLE1BQWhCLEdBQXlCLENBQXhDLEVBQTRDO0FBQ3hDLGFBQUt5RCxTQUFMLEdBQWlCWCxLQUFLLENBQUNRLGVBQXZCO0FBQ0g7O0FBRURSLFdBQUssQ0FBQzJiLHFCQUFOO0FBQ0EsV0FBSzdiLFVBQUwsQ0FBZ0I1SixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUI7QUFFQSxhQUFPbUssS0FBUDtBQUNIO0FBL0pMO0FBQUE7QUFBQSxpQ0FpS2lCeWIsUUFqS2pCLEVBaUsyQkMsUUFqSzNCLEVBaUtxQztBQUM3QixVQUFJQSxRQUFRLENBQUMzZixVQUFULElBQXVCLElBQTNCLEVBQWlDO0FBQzdCMmYsZ0JBQVEsQ0FBQzNmLFVBQVQsQ0FBb0JrRSxXQUFwQixDQUFnQ3liLFFBQWhDO0FBQ0g7O0FBQ0QsVUFBSTdsQixLQUFLLEdBQUcsS0FBS2lLLFVBQUwsQ0FBZ0JoSyxPQUFoQixDQUF3QjJsQixRQUF4QixDQUFaOztBQUNBLFVBQUk1bEIsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGNBQU0sSUFBSUcsS0FBSixDQUFVLDJDQUFWLENBQU47QUFDSDs7QUFFRDBsQixjQUFRLENBQUMzZixVQUFULEdBQXNCLElBQXRCO0FBQ0EyZixjQUFRLENBQUNsYixlQUFULEdBQTJCaWIsUUFBUSxDQUFDamIsZUFBcEM7QUFDQWtiLGNBQVEsQ0FBQ2piLFdBQVQsR0FBdUJnYixRQUFRLENBQUNoYixXQUFoQzs7QUFFQSxVQUFJLEtBQUs4YSxVQUFMLEtBQW9CRSxRQUF4QixFQUFrQztBQUM5QixhQUFLRixVQUFMLEdBQWtCRyxRQUFsQjtBQUNIOztBQUVELFVBQUksS0FBSy9hLFNBQUwsS0FBbUI4YSxRQUF2QixFQUFpQztBQUM3QixhQUFLOWEsU0FBTCxHQUFpQithLFFBQWpCO0FBQ0g7O0FBRURELGNBQVEsQ0FBQ0UscUJBQVQ7QUFDQUQsY0FBUSxDQUFDbkQsT0FBVCxDQUFpQixLQUFLbUMsY0FBdEI7QUFDQSxXQUFLNWEsVUFBTCxDQUFnQjVKLE1BQWhCLENBQXVCTCxLQUF2QixFQUE4QixDQUE5QixFQUFpQzZsQixRQUFqQztBQUNBLGFBQU9BLFFBQVA7QUFDSDtBQTFMTDtBQUFBO0FBQUEsOEJBNExjRSxJQTVMZCxFQTRMb0I7QUFDWixVQUFJclosSUFBSSxHQUFHLEtBQUtzWixXQUFMLENBQWlCRCxJQUFqQixDQUFYOztBQUVBLFVBQUdBLElBQUgsRUFBUztBQUNMclosWUFBSSxDQUFDekMsVUFBTCxHQUFrQixLQUFLQSxVQUFMLENBQWdCNkgsR0FBaEIsQ0FBb0IsVUFBVTNILEtBQVYsRUFBaUI7QUFDbkQsaUJBQU9BLEtBQUssQ0FBQythLFNBQU4sQ0FBZ0JhLElBQWhCLENBQVA7QUFDSCxTQUZpQixDQUFsQjtBQUdBclosWUFBSSxDQUFDaVosWUFBTDtBQUNIOztBQUVELGFBQU9qWixJQUFQO0FBQ0g7QUF2TUw7QUFBQTtBQUFBLDhCQXlNYztBQUNOLFdBQUt1WixTQUFMLElBQWtCLEtBQUtBLFNBQUwsRUFBbEI7QUFFQSxXQUFLaGMsVUFBTCxDQUFnQjZILEdBQWhCLENBQW9CLFVBQVUzSCxLQUFWLEVBQWlCO0FBQ2pDQSxhQUFLLENBQUNuRCxPQUFOO0FBQ0gsT0FGRDtBQUlBLFdBQUtyQyxNQUFMO0FBQ0EsV0FBS21oQixxQkFBTDtBQUNBLFdBQUs3YixVQUFMLENBQWdCNUMsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQSxXQUFLcWUsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFdBQUs1YSxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsV0FBS29iLGFBQUwsR0FBcUIsSUFBckI7QUFDSCxLQXROTCxDQXdOSTtBQUVBOztBQTFOSjs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUVPLElBQU1DLEtBQWI7QUFBQTs7QUFDSSxpQkFBWXprQixLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YsK0VBQU11aUIsK0NBQVEsQ0FBQ3hRLElBQWYsRUFBcUIsT0FBckIsRUFBOEIvUixLQUE5QjtBQUNBLFVBQUtoQyxHQUFMLEdBQVcsSUFBWDtBQUZlO0FBR2xCOztBQUpMO0FBQUE7QUFBQSxrQ0FNa0I7QUFDVixhQUFPLElBQUl5bUIsS0FBSixDQUFVLEtBQUsxRyxRQUFmLEVBQXlCLEtBQUtuYSxTQUE5QixDQUFQO0FBQ0g7QUFSTDs7QUFBQTtBQUFBLEVBQTJCNmUsNENBQTNCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNaUMsS0FBYjtBQUFBOztBQUNJLG1CQUFjO0FBQUE7O0FBQUEsOEVBQ0puQywrQ0FBUSxDQUFDc0IsWUFETDtBQUViOztBQUhMO0FBQUEsRUFBMkJwQiw0Q0FBM0IsRTs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNrQyxNQUFULENBQWdCdkIsR0FBaEIsRUFBcUI7QUFDakJBLEtBQUcsR0FBR3hlLGlEQUFBLENBQWlCd2UsR0FBakIsQ0FBTjtBQUNBLFNBQU8sSUFBSXdCLG1EQUFKLEdBQWUvVCxHQUFmLENBQW1CdVMsR0FBbkIsQ0FBUDtBQUNIOztBQUVELFNBQVNDLFFBQVQsQ0FBa0JELEdBQWxCLEVBQXVCO0FBQ25CQSxLQUFHLEdBQUd4ZSxpREFBQSxDQUFpQndlLEdBQWpCLENBQU47QUFDQSxTQUFPLElBQUl5QixxREFBSixDQUFjLElBQUlELG1EQUFKLEVBQWQsRUFBOEI3VCxLQUE5QixDQUFvQ3FTLEdBQXBDLENBQVA7QUFDSDs7QUFFRCxTQUFTdEIsTUFBVCxDQUFnQm5ELEtBQWhCLEVBQXVCO0FBQ25CLFNBQU9BLEtBQUssQ0FBQzRELFFBQU4sS0FBbUJBLCtDQUFRLENBQUNKLE9BQW5DO0FBQ0g7O0FBRUQsU0FBUzJDLE9BQVQsQ0FBaUJuRyxLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLENBQUM0RCxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDQyxTQUFuQztBQUNIOztBQUVELFNBQVMzRCxPQUFULENBQWlCRixLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLENBQUM0RCxRQUFOLEtBQW1CQSwrQ0FBUSxDQUFDeFEsSUFBbkM7QUFDSDs7QUFFRCxTQUFTZ04sVUFBVCxDQUFvQkosS0FBcEIsRUFBMkI7QUFDdkIsU0FBT0EsS0FBSyxDQUFDNEQsUUFBTixLQUFtQkEsK0NBQVEsQ0FBQ0ksT0FBbkM7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3QkQ7QUFFTyxJQUFNRyxVQUFiO0FBQ0ksd0JBQWM7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSwwQkFLVW5FLEtBTFYsRUFLaUI7QUFDVCxVQUFJRSx3REFBTyxDQUFDRixLQUFELENBQVgsRUFBb0I7QUFDaEIsZUFBTyxLQUFLb0csU0FBTCxDQUFlcEcsS0FBZixDQUFQO0FBQ0g7O0FBRUQsVUFBR0ksMkRBQVUsQ0FBQ0osS0FBRCxDQUFiLEVBQXNCO0FBQ2xCLGVBQU8sS0FBS3FHLFlBQUwsQ0FBa0JyRyxLQUFsQixDQUFQO0FBQ0g7O0FBRUQsYUFBTyxLQUFLc0csWUFBTCxDQUFrQnRHLEtBQWxCLENBQVA7QUFDSDtBQWZMO0FBQUE7QUFBQSxpQ0FpQmlCbGIsSUFqQmpCLEVBaUJ1QjtBQUFBOztBQUNmLFVBQUl5aEIsT0FBTyxHQUFHemhCLElBQUksQ0FBQ2djLE1BQUwsQ0FBWXJQLEdBQVosQ0FBZ0IsVUFBQzFNLEtBQUQsRUFBVztBQUNqQyxlQUFPLEtBQUksQ0FBQ3loQixjQUFMLENBQW9CemhCLEtBQXBCLENBQVA7QUFDSCxPQUZTLEVBRVBvRCxJQUZPLENBRUYsR0FGRSxDQUFkO0FBQUEsVUFHSXNlLFFBQVEsR0FBRzNoQixJQUFJLENBQUM4RSxVQUFMLENBQWdCNkgsR0FBaEIsQ0FBb0IsVUFBQzNILEtBQUQsRUFBVztBQUN0QyxlQUFPLEtBQUksQ0FBQ3NGLEtBQUwsQ0FBV3RGLEtBQVgsQ0FBUDtBQUNILE9BRlUsRUFFUjNCLElBRlEsQ0FFSCxFQUZHLENBSGY7O0FBT0EsVUFBR29lLE9BQUgsRUFBWTtBQUNSQSxlQUFPLEdBQUcsTUFBTUEsT0FBaEI7QUFDSDs7QUFFRCxVQUFJOUIsR0FBRyxHQUFHLE1BQU0zZixJQUFJLENBQUNzYSxRQUFYLEdBQXNCbUgsT0FBdEIsR0FBZ0MsR0FBaEMsR0FBc0NFLFFBQWhEOztBQUVBLFVBQUksQ0FBQzNoQixJQUFJLENBQUNvZixVQUFWLEVBQXNCO0FBQ2xCTyxXQUFHLElBQUssT0FBTzNmLElBQUksQ0FBQ3NhLFFBQVosR0FBdUIsR0FBL0I7QUFDSDs7QUFFRCxhQUFPcUYsR0FBUDtBQUNIO0FBcENMO0FBQUE7QUFBQSxtQ0FzQ21CMWYsS0F0Q25CLEVBc0MwQjtBQUNsQixhQUFPQSxLQUFLLENBQUNxYSxRQUFOLElBQWtCcmEsS0FBSyxDQUFDRSxTQUFOLElBQW1CLElBQW5CLEdBQTBCLEVBQTFCLEdBQWdDLE1BQU1GLEtBQUssQ0FBQytRLEtBQVosR0FBb0IvUSxLQUFLLENBQUNFLFNBQTFCLEdBQXNDRixLQUFLLENBQUMrUSxLQUE5RixDQUFQO0FBQ0g7QUF4Q0w7QUFBQTtBQUFBLDhCQTBDY3dNLEtBMUNkLEVBMENxQjtBQUNiLGFBQU9BLEtBQUssQ0FBQ3JkLFNBQWI7QUFDSDtBQTVDTDtBQUFBO0FBQUEsaUNBOENpQnVkLEtBOUNqQixFQThDd0I7QUFDaEIsYUFBT0EsS0FBSyxDQUFDdmQsU0FBYjtBQUNIO0FBaERMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFFTyxJQUFNZ2hCLFFBQWI7QUFBQTs7QUFDSSxvQkFBWW5qQixPQUFaLEVBQXFCO0FBQUE7O0FBQUEsaUZBQ1hBLE9BRFc7QUFFcEI7O0FBSEw7QUFBQTtBQUFBLDJDQUsyQndRLEVBTDNCLEVBSytCO0FBQ3ZCLGFBQVEsT0FBT0EsRUFBUCxJQUFhQSxFQUFFLElBQUksR0FBbkIsSUFDSixPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQURmLElBRUosUUFBUUEsRUFGSixJQUVVQSxFQUFFLEtBQUssR0FGakIsSUFHSkEsRUFBRSxLQUFLLEdBSEgsSUFHVUEsRUFBRSxLQUFLLEdBSGpCLElBR3dCQSxFQUFFLEtBQUssR0FIdkM7QUFJSDtBQVZMO0FBQUE7QUFBQSw4Q0FZOEJBLEVBWjlCLEVBWWtDMEIsRUFabEMsRUFZc0M7QUFDOUIsYUFBTyxLQUFLSCxzQkFBTCxDQUE0QnZCLEVBQTVCLEVBQWdDMEIsRUFBaEMsS0FBdUMsS0FBS3ZCLFFBQUwsQ0FBY0gsRUFBZCxDQUF2QyxJQUE0REEsRUFBRSxLQUFLLEdBQW5FLElBQTBFQSxFQUFFLEtBQUssR0FBeEY7QUFDSDtBQWRMO0FBQUE7QUFBQSxpQ0FnQmlCb1QsR0FoQmpCLEVBZ0JzQjtBQUNkLFVBQUkvUixHQUFHLEdBQUcrUixHQUFHLENBQUMxZixNQUFkO0FBQ0EsYUFBUSxLQUFLckgsS0FBTCxHQUFhZ1YsR0FBYixJQUFvQixLQUFLdkIsSUFBTCxDQUFVcE0sTUFBL0IsR0FBMEMwZixHQUFHLEtBQUssS0FBS3RULElBQUwsQ0FBVXNPLE1BQVYsQ0FBaUIsS0FBSy9oQixLQUF0QixFQUE2QmdWLEdBQTdCLENBQWxELEdBQXVGLEtBQTlGO0FBQ0gsS0FuQkwsQ0FxQkk7O0FBckJKO0FBQUE7QUFBQSxnQ0FzQmdCZ1MsS0F0QmhCLEVBc0J1QnJSLEdBdEJ2QixFQXNCNEI7QUFDcEIsVUFBSUQsS0FBSyxHQUFHLEtBQUsxVixLQUFqQjtBQUNBLFdBQUtBLEtBQUwsSUFBY2duQixLQUFLLENBQUMzZixNQUFwQjtBQUNBLFVBQUkrTyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLFNBQVMsR0FBRzJRLEtBQWhCOztBQUNBLGFBQU8sS0FBS2huQixLQUFMLEdBQWEsS0FBS3lULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUs1VCxLQUF0QixDQUFUO0FBQ0FxVyxpQkFBUyxJQUFJMUMsRUFBYjs7QUFDQSxZQUFJLEtBQUtzVCxZQUFMLENBQWtCdFIsR0FBbEIsQ0FBSixFQUE0QjtBQUN4QlUsbUJBQVMsSUFBSVYsR0FBYjtBQUNBLGVBQUszVixLQUFMLElBQWMyVixHQUFHLENBQUN0TyxNQUFsQjtBQUNBLGVBQUtxTSxNQUFMLENBQVl4VCxJQUFaLENBQWlCO0FBQ2JGLGlCQUFLLEVBQUUwVixLQURNO0FBRWJqQyxnQkFBSSxFQUFFNEMsU0FGTztBQUdiZ08sbUJBQU8sRUFBRSxJQUhJO0FBSWIzaUIsaUJBQUssRUFBRTBVO0FBSk0sV0FBakI7QUFNQTtBQUNILFNBVkQsTUFVTztBQUNIQSxnQkFBTSxJQUFJekMsRUFBVjtBQUNIOztBQUNELGFBQUszVCxLQUFMO0FBQ0g7O0FBQ0QsV0FBSzZVLFVBQUwsQ0FBZ0Isc0JBQWhCLEVBQXdDYSxLQUF4QztBQUNILEtBOUNMLENBZ0RJOztBQWhESjtBQUFBO0FBQUEsK0JBaURlO0FBQ1AsVUFBSUEsS0FBSyxHQUFHLEtBQUsxVixLQUFqQjtBQUNBLFVBQUlvVyxNQUFNLEdBQUcsRUFBYjs7QUFDQSxhQUFPLEtBQUtwVyxLQUFMLEdBQWEsS0FBS3lULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUs1VCxLQUF0QixDQUFUO0FBQ0EsWUFBSXNVLEdBQUcsR0FBRyxLQUFLUCxJQUFMLEVBQVY7O0FBQ0EsWUFBS0osRUFBRSxLQUFLLEdBQVAsS0FBZSxLQUFLTSxpQkFBTCxDQUF1QkssR0FBdkIsS0FBK0JBLEdBQUcsS0FBSyxHQUF0RCxDQUFELElBQWdFLEtBQUsyUyxZQUFMLENBQWtCLE1BQWxCLENBQXBFLEVBQStGO0FBQzNGO0FBQ0g7O0FBQ0Q3USxjQUFNLElBQUl6QyxFQUFWO0FBQ0EsYUFBSzNULEtBQUw7QUFDSDs7QUFDRCxXQUFLMFQsTUFBTCxDQUFZeFQsSUFBWixDQUFpQjtBQUNiRixhQUFLLEVBQUUwVixLQURNO0FBRWJqQyxZQUFJLEVBQUUyQyxNQUZPO0FBR2I4USxlQUFPLEVBQUU7QUFISSxPQUFqQjtBQUtILEtBbEVMLENBb0VJOztBQXBFSjtBQUFBO0FBQUEsNEJBcUVZRixLQXJFWixFQXFFbUJyUixHQXJFbkIsRUFxRXdCd1IsT0FyRXhCLEVBcUVpQ0MsT0FyRWpDLEVBcUUwQztBQUNsQyxXQUFLMVQsTUFBTCxDQUFZeFQsSUFBWixDQUFpQjtBQUFFRixhQUFLLEVBQUUsS0FBS0EsS0FBZDtBQUFxQnlULFlBQUksRUFBRXVULEtBQTNCO0FBQWtDSyxXQUFHLEVBQUUsSUFBdkM7QUFBNkNGLGVBQU8sRUFBRUEsT0FBdEQ7QUFBK0RILGFBQUssRUFBRSxJQUF0RTtBQUE0RUksZUFBTyxFQUFFQTtBQUFyRixPQUFqQjtBQUNBLFdBQUtwbkIsS0FBTCxJQUFjZ25CLEtBQUssQ0FBQzNmLE1BQXBCO0FBQ0EsV0FBSzhNLFNBQUw7O0FBRUEsYUFBTyxLQUFLblUsS0FBTCxHQUFhLEtBQUt5VCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHLEtBQUtGLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLNVQsS0FBdEIsQ0FBVDs7QUFFQSxZQUFJLENBQUNtbkIsT0FBTCxFQUFjO0FBQ1YsY0FBSTdTLEdBQUcsR0FBRyxLQUFLUCxJQUFMLEVBQVY7QUFDQSxjQUFJZ1QsR0FBRyxHQUFHcFQsRUFBRSxHQUFHVyxHQUFmOztBQUNBLGNBQUl5UyxHQUFHLEtBQUssTUFBTXBSLEdBQWxCLEVBQXVCO0FBQ25CLGlCQUFLakMsTUFBTCxDQUFZeFQsSUFBWixDQUFpQjtBQUFFRixtQkFBSyxFQUFFLEtBQUtBLEtBQWQ7QUFBcUJ5VCxrQkFBSSxFQUFFc1QsR0FBM0I7QUFBZ0NNLGlCQUFHLEVBQUUsSUFBckM7QUFBMkNGLHFCQUFPLEVBQUUsSUFBcEQ7QUFBMER4UixpQkFBRyxFQUFFO0FBQS9ELGFBQWpCO0FBQ0EsaUJBQUszVixLQUFMLElBQWMrbUIsR0FBRyxDQUFDMWYsTUFBbEI7QUFDQTtBQUNIO0FBQ0o7O0FBRUQsWUFBSXNNLEVBQUUsS0FBS2dDLEdBQVgsRUFBZ0I7QUFDWixlQUFLakMsTUFBTCxDQUFZeFQsSUFBWixDQUFpQjtBQUNiRixpQkFBSyxFQUFFLEtBQUtBLEtBREM7QUFFYnlULGdCQUFJLEVBQUVrQyxHQUZPO0FBR2IwUixlQUFHLEVBQUUsSUFIUTtBQUliRixtQkFBTyxFQUFFLENBQUMsQ0FBQ0MsT0FBRixHQUFZLElBQVosR0FBbUJELE9BSmY7QUFLYnhSLGVBQUcsRUFBRTtBQUxRLFdBQWpCO0FBT0EsZUFBSzNWLEtBQUwsSUFBYzJWLEdBQUcsQ0FBQ3RPLE1BQWxCO0FBQ0E7QUFDSDs7QUFFRCxZQUFJLEtBQUs0TSxpQkFBTCxDQUF1QixLQUFLQyxhQUFMLEVBQXZCLENBQUosRUFBa0Q7QUFDOUMsZUFBS0MsU0FBTDtBQUNILFNBRkQsTUFHSyxJQUFJUixFQUFFLEtBQUssR0FBUCxJQUFjQSxFQUFFLEtBQUssSUFBekIsRUFBK0I7QUFDaEMsZUFBS0UsVUFBTCxDQUFnQkYsRUFBaEI7QUFDSCxTQUZJLE1BR0EsSUFBSSxLQUFLVSxZQUFMLENBQWtCVixFQUFsQixDQUFKLEVBQTJCO0FBQzVCLGVBQUszVCxLQUFMO0FBQ0gsU0FGSSxNQUdBLElBQUkyVCxFQUFFLEtBQUssR0FBWCxFQUFnQjtBQUNqQixlQUFLRCxNQUFMLENBQVl4VCxJQUFaLENBQWlCO0FBQUVGLGlCQUFLLEVBQUUsS0FBS0EsS0FBZDtBQUFxQnlULGdCQUFJLEVBQUUsR0FBM0I7QUFBZ0M2VCxpQkFBSyxFQUFFO0FBQXZDLFdBQWpCO0FBQ0EsZUFBS3RuQixLQUFMO0FBQ0gsU0FISSxNQUlBO0FBQ0QsZUFBSzZVLFVBQUwsQ0FBZ0IsNEJBQWhCLEVBQThDLEtBQUs3VSxLQUFuRCxFQUEwRCxLQUFLQSxLQUFMLEdBQWEsQ0FBdkU7QUFDSDtBQUNKO0FBQ0o7QUFwSEw7QUFBQTtBQUFBLHdCQXNIUXlULElBdEhSLEVBc0hjO0FBQ04sV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS3pULEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBSzBULE1BQUwsR0FBYyxFQUFkO0FBRUEsVUFBSTZULFlBQVksR0FBRyxDQUFDLENBQUMsS0FBS3BrQixPQUFMLENBQWFva0IsWUFBbEM7O0FBQ0EsYUFBTyxLQUFLdm5CLEtBQUwsR0FBYSxLQUFLeVQsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBSzVULEtBQXRCLENBQVQ7QUFDQSxZQUFJc1UsR0FBRyxHQUFHLEtBQUtQLElBQUwsRUFBVjtBQUNBLFlBQUlRLEdBQUcsR0FBRyxLQUFLUixJQUFMLENBQVUsQ0FBVixDQUFWOztBQUNBLFlBQUksS0FBS2tULFlBQUwsQ0FBa0IsTUFBbEIsQ0FBSixFQUErQjtBQUMzQixlQUFLTyxXQUFMLENBQWlCLE1BQWpCLEVBQXlCLEtBQXpCO0FBQ0gsU0FGRCxNQUdLLElBQUk3VCxFQUFFLEtBQUssR0FBUCxJQUFjLEtBQUtNLGlCQUFMLENBQXVCSyxHQUF2QixDQUFsQixFQUErQztBQUNoRCxlQUFLbVQsT0FBTCxDQUFhLEdBQWIsRUFBa0IsR0FBbEIsRUFBdUIsS0FBdkI7QUFDSCxTQUZJLE1BR0EsSUFBSSxLQUFLUixZQUFMLENBQWtCLElBQWxCLEtBQTJCLEtBQUtoVCxpQkFBTCxDQUF1Qk0sR0FBdkIsQ0FBL0IsRUFBNEQ7QUFDN0QsZUFBS2tULE9BQUwsQ0FBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLElBQXhCO0FBQ0gsU0FGSSxNQUdBLElBQUksS0FBS1IsWUFBTCxDQUFrQixXQUFsQixDQUFKLEVBQW9DO0FBQ3JDLGNBQUlNLFlBQUosRUFBa0I7QUFDZCxpQkFBS0UsT0FBTCxDQUFhLElBQWIsRUFBbUIsR0FBbkIsRUFBd0IsSUFBeEIsRUFBOEIsSUFBOUI7QUFDSCxXQUZELE1BR0s7QUFDRCxpQkFBSzVTLFVBQUwsQ0FBZ0Isd0JBQWhCLEVBQTBDLEtBQUs3VSxLQUEvQyxFQUFzRCxLQUFLQSxLQUFMLEdBQWEsQ0FBbkU7QUFDSDtBQUNKLFNBUEksTUFRQTtBQUNELGVBQUswbkIsUUFBTDtBQUNIO0FBQ0o7O0FBQ0QsYUFBTyxLQUFLaFUsTUFBWjtBQUNIO0FBdEpMOztBQUFBO0FBQUEsRUFBOEJwQiw2Q0FBOUIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFJTyxJQUFNaVUsU0FBYjtBQUFBOztBQUNJLHFCQUFZeFAsS0FBWixFQUFtQjVULE9BQW5CLEVBQTRCO0FBQUE7O0FBQUEsa0ZBQ2xCNFQsS0FEa0IsRUFDWDVULE9BRFc7QUFFM0I7O0FBSEw7QUFBQTtBQUFBLDBCQUtVc1EsSUFMVixFQUtnQjtBQUNSLFdBQUt6VCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFdBQUt5VCxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBS3FELEtBQUwsQ0FBV3hFLEdBQVgsQ0FBZWtCLElBQWYsQ0FBZDtBQUVBLFVBQUlrVSxJQUFJLEdBQUcsSUFBSXJELDJDQUFKLEVBQVg7QUFDQSxVQUFJOEMsT0FBSjtBQUFBLFVBQWFHLFlBQVksR0FBRyxDQUFDLENBQUMsS0FBS3BrQixPQUFMLENBQWFva0IsWUFBM0M7O0FBQ0EsYUFBTyxLQUFLdm5CLEtBQUwsR0FBYSxLQUFLMFQsTUFBTCxDQUFZck0sTUFBaEMsRUFBd0M7QUFDcEMsWUFBSXVOLEtBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFaOztBQUVBLFlBQUloVCxLQUFLLENBQUN3UyxPQUFWLEVBQW1CO0FBQ2YsY0FBSUcsWUFBSixFQUFrQjtBQUNkLGdCQUFJLENBQUNILE9BQUwsRUFBYztBQUNWQSxxQkFBTyxHQUFHLEtBQUtBLE9BQUwsRUFBVjtBQUNBTyxrQkFBSSxDQUFDMWQsVUFBTCxDQUFnQi9KLElBQWhCLENBQXFCa25CLE9BQXJCO0FBQ0gsYUFIRCxNQUlLO0FBQ0QsbUJBQUt2UyxVQUFMLENBQWdCLHdCQUFoQixFQUEwQ0QsS0FBMUM7QUFDSDtBQUNKLFdBUkQsTUFTSztBQUNELGlCQUFLQyxVQUFMLENBQWdCLHdCQUFoQixFQUEwQ0QsS0FBMUM7QUFDSDtBQUNKLFNBYkQsTUFjSyxJQUFJQSxLQUFLLENBQUN5UCxPQUFWLEVBQW1CO0FBQ3BCLGNBQUlBLE9BQU8sR0FBRyxJQUFJRCw0Q0FBSixDQUFVeFAsS0FBSyxDQUFDbkIsSUFBaEIsQ0FBZDtBQUNBa1UsY0FBSSxDQUFDMWQsVUFBTCxDQUFnQi9KLElBQWhCLENBQXFCbWtCLE9BQXJCO0FBQ0EsZUFBSzNMLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ3NTLE9BQVYsRUFBbUI7QUFDcEIsY0FBSXpULElBQUksR0FBRyxJQUFJMFMsNENBQUosQ0FBVXZSLEtBQUssQ0FBQ25CLElBQWhCLENBQVg7QUFDQWtVLGNBQUksQ0FBQzFkLFVBQUwsQ0FBZ0IvSixJQUFoQixDQUFxQnVULElBQXJCO0FBQ0EsZUFBS2lGLElBQUw7QUFDSCxTQUpJLE1BS0EsSUFBSTlELEtBQUssQ0FBQ3lTLEdBQU4sSUFBYXpTLEtBQUssQ0FBQ29TLEtBQXZCLEVBQThCO0FBQy9CVyxjQUFJLENBQUMxZCxVQUFMLENBQWdCL0osSUFBaEIsQ0FBcUIsS0FBSzJqQixPQUFMLEVBQXJCO0FBQ0gsU0FGSSxNQUdBO0FBQ0QsZUFBS2hQLFVBQUwsQ0FBZ0IsWUFBaEIsRUFBOEJELEtBQTlCO0FBQ0g7QUFDSjs7QUFFRCtTLFVBQUksQ0FBQ2hDLFlBQUw7QUFFQSxhQUFPZ0MsSUFBSSxDQUFDMWQsVUFBWjtBQUNIO0FBbERMO0FBQUE7QUFBQSw4QkFvRGM7QUFDTixXQUFLeU8sSUFBTDtBQUNBLFVBQUltUCxPQUFPLEdBQUcsSUFBSXpCLDRDQUFKLEVBQWQ7QUFDQSxVQUFJeFIsS0FBSyxHQUFHLEtBQUtnVCxPQUFMLEVBQVo7O0FBRUEsVUFBSWhULEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEJtWSxlQUFPLENBQUN2aUIsU0FBUixHQUFvQnNQLEtBQUssQ0FBQ25CLElBQTFCO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBS29CLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7O0FBRUQsV0FBS2tULEtBQUwsQ0FBV0QsT0FBWCxFQUFvQnRuQixPQUFwQixDQUE0QixVQUFVa2tCLElBQVYsRUFBZ0I7QUFDeENvRCxlQUFPLENBQUM1ZCxVQUFSLENBQW1CL0osSUFBbkIsQ0FBd0J1a0IsSUFBeEI7QUFDSCxPQUZEO0FBSUE3UCxXQUFLLEdBQUcsS0FBS2dULE9BQUwsRUFBUjs7QUFFQSxVQUFJaFQsS0FBSyxDQUFDeVMsR0FBTixJQUFhelMsS0FBSyxDQUFDZSxHQUFuQixJQUEwQmYsS0FBSyxDQUFDdVMsT0FBcEMsRUFBNkM7QUFDekMsYUFBS3pPLElBQUw7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLN0QsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDs7QUFFRCxhQUFPaVQsT0FBUDtBQUNIO0FBOUVMO0FBQUE7QUFBQSw0QkFnRllFLENBaEZaLEVBZ0ZlO0FBQ1AsV0FBS3JQLElBQUw7QUFDQSxVQUFJbFUsR0FBRyxHQUFHLElBQUk4ZiwyQ0FBSixFQUFWO0FBQ0EsVUFBSTFQLEtBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFaOztBQUVBLFVBQUloVCxLQUFLLENBQUNsRixVQUFWLEVBQXNCO0FBQ2xCbEwsV0FBRyxDQUFDaWIsUUFBSixHQUFlN0ssS0FBSyxDQUFDbkIsSUFBckI7QUFDQSxhQUFLaUYsSUFBTDtBQUNILE9BSEQsTUFJSztBQUNELGFBQUs3RCxVQUFMLENBQWdCLGNBQWhCLEVBQWdDRCxLQUFoQztBQUNIOztBQUVELFdBQUtrVCxLQUFMLENBQVd0akIsR0FBWCxFQUFnQmpFLE9BQWhCLENBQXdCLFVBQVVra0IsSUFBVixFQUFnQjtBQUNwQ2pnQixXQUFHLENBQUN3akIsUUFBSixDQUFhdkQsSUFBYjtBQUNILE9BRkQ7QUFJQTdQLFdBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFSOztBQUVBLFVBQUloVCxLQUFLLENBQUN5UyxHQUFOLElBQWF6UyxLQUFLLENBQUNlLEdBQXZCLEVBQTRCO0FBQ3hCLGFBQUsrQyxJQUFMOztBQUNBLFlBQUlsVSxHQUFHLENBQUNpYixRQUFKLEtBQWlCLE9BQXJCLEVBQThCO0FBQzFCamIsYUFBRyxDQUFDK2YsVUFBSixHQUFpQixJQUFqQjtBQUNBLGlCQUFPL2YsR0FBUDtBQUNIOztBQUNELFlBQUksQ0FBQ29RLEtBQUssQ0FBQ3VTLE9BQVgsRUFBb0I7QUFDaEIsZUFBS2MsYUFBTCxDQUFtQnpqQixHQUFuQixFQUF3QmpFLE9BQXhCLENBQWdDLFVBQVU0SixLQUFWLEVBQWlCO0FBQzdDM0YsZUFBRyxDQUFDMGpCLFNBQUosQ0FBYy9kLEtBQWQ7QUFDSCxXQUZEO0FBR0g7QUFDSixPQVhELE1BWUs7QUFDRCxhQUFLMEssVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDs7QUFFREEsV0FBSyxHQUFHLEtBQUtnVCxPQUFMLEVBQVI7O0FBQ0EsVUFBSWhULEtBQUssQ0FBQ3lTLEdBQU4sSUFBYXpTLEtBQUssQ0FBQ29TLEtBQW5CLElBQTRCcFMsS0FBSyxDQUFDdVMsT0FBdEMsRUFBK0M7QUFDM0MsYUFBS3pPLElBQUw7QUFDQTlELGFBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFSOztBQUNBLFlBQUloVCxLQUFLLENBQUNsRixVQUFWLEVBQXNCO0FBQ2xCLGNBQUlsTCxHQUFHLENBQUNpYixRQUFKLEtBQWlCN0ssS0FBSyxDQUFDbkIsSUFBM0IsRUFBaUM7QUFDN0IsaUJBQUtpRixJQUFMO0FBQ0E5RCxpQkFBSyxHQUFHLEtBQUtnVCxPQUFMLEVBQVI7O0FBQ0EsZ0JBQUloVCxLQUFLLENBQUN5UyxHQUFOLElBQWF6UyxLQUFLLENBQUNlLEdBQW5CLElBQTBCZixLQUFLLENBQUN1UyxPQUFwQyxFQUE2QztBQUN6QyxtQkFBS3pPLElBQUw7QUFDSCxhQUZELE1BR0s7QUFDRCxtQkFBSzdELFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7QUFDSixXQVRELE1BVUs7QUFDRCxpQkFBS0MsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKLFNBZEQsTUFlSztBQUNELGVBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7QUFDSixPQXJCRCxNQXNCSztBQUNELGFBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0NELEtBQWhDO0FBQ0g7O0FBRUQsYUFBT3BRLEdBQVA7QUFDSDtBQS9JTDtBQUFBO0FBQUEsa0NBaUprQnVqQixDQWpKbEIsRUFpSnFCO0FBQ2IsVUFBSUksSUFBSSxHQUFHLEVBQVg7O0FBRUEsYUFBTyxLQUFLbm9CLEtBQUwsR0FBYSxLQUFLMFQsTUFBTCxDQUFZck0sTUFBaEMsRUFBd0M7QUFDcEMsWUFBSXVOLEtBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFaOztBQUVBLFlBQUloVCxLQUFLLENBQUN5UyxHQUFOLElBQWF6UyxLQUFLLENBQUN1UyxPQUF2QixFQUFnQztBQUM1QjtBQUNILFNBRkQsTUFHSyxJQUFJdlMsS0FBSyxDQUFDeVAsT0FBVixFQUFtQjtBQUNwQixjQUFJQSxPQUFPLEdBQUcsSUFBSUQsNENBQUosQ0FBVXhQLEtBQUssQ0FBQ25CLElBQWhCLENBQWQ7QUFDQTBVLGNBQUksQ0FBQ2pvQixJQUFMLENBQVVta0IsT0FBVjtBQUNBLGVBQUszTCxJQUFMO0FBQ0gsU0FKSSxNQUtBLElBQUk5RCxLQUFLLENBQUNzUyxPQUFWLEVBQW1CO0FBQ3BCLGNBQUl6VCxJQUFJLEdBQUcsSUFBSTBTLDRDQUFKLENBQVV2UixLQUFLLENBQUNuQixJQUFoQixDQUFYO0FBQ0EwVSxjQUFJLENBQUNqb0IsSUFBTCxDQUFVdVQsSUFBVjtBQUNBLGVBQUtpRixJQUFMO0FBQ0gsU0FKSSxNQUtBLElBQUk5RCxLQUFLLENBQUN5UyxHQUFOLElBQWF6UyxLQUFLLENBQUNvUyxLQUF2QixFQUE4QjtBQUMvQm1CLGNBQUksQ0FBQ2pvQixJQUFMLENBQVUsS0FBSzJqQixPQUFMLENBQWFrRSxDQUFiLENBQVY7QUFDSCxTQUZJLE1BR0E7QUFDRCxlQUFLbFQsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKOztBQUVELGFBQU91VCxJQUFQO0FBQ0g7QUE3S0w7QUFBQTtBQUFBLDBCQStLVUosQ0EvS1YsRUErS2E7QUFDTCxVQUFJRCxLQUFLLEdBQUcsRUFBWjs7QUFFQSxhQUFPLEtBQUs5bkIsS0FBTCxHQUFhLEtBQUswVCxNQUFMLENBQVlyTSxNQUFoQyxFQUF3QztBQUNwQyxZQUFJdU4sS0FBSyxHQUFHLEtBQUtnVCxPQUFMLEVBQVo7O0FBRUEsWUFBSWhULEtBQUssQ0FBQ3lTLEdBQU4sSUFBYXpTLEtBQUssQ0FBQ2UsR0FBdkIsRUFBNEI7QUFDeEI7QUFDSDs7QUFFRCxZQUFJOE8sSUFBSSxHQUFHLElBQUlULDRDQUFKLEVBQVg7O0FBRUEsWUFBSXBQLEtBQUssQ0FBQ2xGLFVBQVYsRUFBc0I7QUFDbEIrVSxjQUFJLENBQUNoRixRQUFMLEdBQWdCN0ssS0FBSyxDQUFDbkIsSUFBdEI7QUFDQWdSLGNBQUksQ0FBQzJELE1BQUwsR0FBY3hULEtBQUssQ0FBQ25CLElBQXBCO0FBQ0EsZUFBS2lGLElBQUw7QUFDQTlELGVBQUssR0FBRyxLQUFLZ1QsT0FBTCxFQUFSOztBQUNBLGNBQUloVCxLQUFLLENBQUMwUyxLQUFWLEVBQWlCO0FBQ2IsaUJBQUs1TyxJQUFMO0FBQ0E5RCxpQkFBSyxHQUFHLEtBQUtnVCxPQUFMLEVBQVI7O0FBQ0EsZ0JBQUloVCxLQUFLLENBQUNxQixRQUFWLEVBQW9CO0FBQ2hCd08sa0JBQUksQ0FBQ25mLFNBQUwsR0FBaUJzUCxLQUFLLENBQUNsVCxLQUF2QjtBQUNBLG1CQUFLZ1gsSUFBTDtBQUNILGFBSEQsTUFJSztBQUNELG1CQUFLN0QsVUFBTCxDQUFnQixjQUFoQixFQUFnQ0QsS0FBaEM7QUFDSDtBQUNKO0FBQ0o7O0FBRURrVCxhQUFLLENBQUM1bkIsSUFBTixDQUFXdWtCLElBQVg7QUFDSDs7QUFFRCxhQUFPcUQsS0FBUDtBQUNIO0FBak5MO0FBQUE7QUFBQSw4QkFtTmM7QUFDTixVQUFJLEtBQUs5bkIsS0FBTCxHQUFhLEtBQUswVCxNQUFMLENBQVlyTSxNQUE3QixFQUFxQztBQUNqQyxlQUFPLEtBQUtxTSxNQUFMLENBQVksS0FBSzFULEtBQWpCLENBQVA7QUFDSDs7QUFDRCxhQUFPLEVBQVA7QUFDSDtBQXhOTDtBQUFBO0FBQUEsMkJBME5XO0FBQ0gsV0FBS0EsS0FBTDtBQUNIO0FBNU5MOztBQUFBO0FBQUEsRUFBK0J3Uyw4Q0FBL0IsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEEsSUFBSTZWLFFBQVEsR0FBR0MsTUFBTSxDQUFDdm5CLFNBQVAsQ0FBaUJzbkIsUUFBaEM7QUFBQSxJQUNJRSxjQUFjLEdBQUdELE1BQU0sQ0FBQ0MsY0FENUIsQyxDQUdBOztBQUNBLFNBQVNDLFdBQVQsQ0FBcUI5bUIsS0FBckIsRUFBNEI7QUFDeEIsU0FBTyxPQUFPQSxLQUFQLEtBQWlCLFdBQXhCO0FBQ0g7O0FBRUQsU0FBUyttQixTQUFULENBQW1CL21CLEtBQW5CLEVBQTBCO0FBQ3RCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixXQUF4QjtBQUNIOztBQUVELFNBQVNnbkIsT0FBVCxDQUFpQmhuQixLQUFqQixFQUF3QjtBQUNwQixTQUFPQSxLQUFLLFlBQVlxSSxLQUF4QjtBQUNIOztBQUVELFNBQVM0ZSxLQUFULENBQWVqbkIsS0FBZixFQUFzQjtBQUNsQixTQUFPQSxLQUFLLFlBQVl1RCxHQUF4QjtBQUNIOztBQUVELFNBQVMyakIsUUFBVCxDQUFrQmxuQixLQUFsQixFQUF5QjtBQUNyQixTQUFPQSxLQUFLLEtBQUssSUFBVixJQUFrQixRQUFPQSxLQUFQLE1BQWlCLFFBQTFDO0FBQ0g7O0FBRUQsU0FBU21uQixhQUFULENBQXVCbm5CLEtBQXZCLEVBQThCO0FBQzFCLFNBQU9BLEtBQUssS0FBSyxJQUFWLElBQWtCLFFBQU9BLEtBQVAsTUFBaUIsUUFBbkMsSUFBK0MsQ0FBQzZtQixjQUFjLENBQUM3bUIsS0FBRCxDQUFyRTtBQUNIOztBQUVELFNBQVNvbkIsUUFBVCxDQUFrQnBuQixLQUFsQixFQUF5QjtBQUNyQixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsUUFBeEI7QUFDSDs7QUFFRCxTQUFTb1MsUUFBVCxDQUFrQnBTLEtBQWxCLEVBQXlCO0FBQ3JCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixRQUF4QjtBQUNIOztBQUVELFNBQVNxbkIsTUFBVCxDQUFnQnJuQixLQUFoQixFQUF1QjtBQUNuQixTQUFPMm1CLFFBQVEsQ0FBQzVuQixJQUFULENBQWNpQixLQUFkLE1BQXlCLGVBQWhDO0FBQ0g7O0FBRUQsU0FBU3NuQixVQUFULENBQW9CdG5CLEtBQXBCLEVBQTJCO0FBQ3ZCLFNBQU8sT0FBT0EsS0FBUCxLQUFpQixVQUF4QjtBQUNIOztBQUVELFNBQVN1bkIsUUFBVCxDQUFrQnZuQixLQUFsQixFQUF5QjtBQUNyQixTQUFPMm1CLFFBQVEsQ0FBQzVuQixJQUFULENBQWNpQixLQUFkLE1BQXlCLGlCQUFoQztBQUNIOztBQUVELFNBQVN3bkIsU0FBVCxDQUFtQnhuQixLQUFuQixFQUEwQjtBQUN0QixTQUFPLE9BQU9BLEtBQVAsS0FBaUIsU0FBeEI7QUFDSDs7QUFFRCxTQUFTeW5CLFVBQVQsQ0FBb0J6bkIsS0FBcEIsRUFBMkI7QUFDdkIsU0FBUSxPQUFPMG5CLFFBQVAsS0FBb0IsV0FBckIsSUFBc0MxbkIsS0FBSyxZQUFZMG5CLFFBQTlEO0FBQ0gsQyxDQUNEO0FBRUE7OztBQUNBLFNBQVNDLFFBQVQsQ0FBa0IzbkIsS0FBbEIsRUFBeUI7QUFDckIsTUFBSTRuQixDQUFDLEdBQUdDLFVBQVUsQ0FBQzduQixLQUFELENBQWxCO0FBQ0EsU0FBTzhuQixLQUFLLENBQUNGLENBQUQsQ0FBTCxHQUFXNW5CLEtBQVgsR0FBbUI0bkIsQ0FBMUI7QUFDSDs7QUFFRCxTQUFTRyxTQUFULENBQW1CclQsTUFBbkIsRUFBMkI7QUFDdkIsU0FBTzBTLFFBQVEsQ0FBQzFTLE1BQUQsQ0FBUixHQUFtQkEsTUFBTSxDQUFDc1QsV0FBUCxFQUFuQixHQUEwQ3RULE1BQWpEO0FBQ0g7O0FBRUQsU0FBU3VULFNBQVQsQ0FBbUJ2VCxNQUFuQixFQUEyQjtBQUN2QixTQUFPMFMsUUFBUSxDQUFDMVMsTUFBRCxDQUFSLEdBQW1CQSxNQUFNLENBQUN3VCxXQUFQLEVBQW5CLEdBQTBDeFQsTUFBakQ7QUFDSDs7QUFFRCxTQUFTeVQsaUJBQVQsQ0FBMkJuckIsSUFBM0IsRUFBaUNvckIsU0FBakMsRUFBNENDLG9CQUE1QyxFQUFrRTtBQUM5RCxTQUFPcnJCLElBQUksQ0FBQ3dNLEtBQUwsQ0FBVzRlLFNBQVgsRUFBc0JoWSxHQUF0QixDQUEwQixVQUFVcFEsS0FBVixFQUFpQjFCLEtBQWpCLEVBQXdCO0FBQ3JELFFBQUlBLEtBQUssS0FBSyxDQUFWLElBQWUsQ0FBQytwQixvQkFBcEIsRUFBMEM7QUFDdEMsYUFBT3JvQixLQUFQO0FBQ0g7O0FBRUQsUUFBSUEsS0FBSyxDQUFDMkYsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQixhQUFPM0YsS0FBSyxDQUFDa29CLFdBQU4sRUFBUDtBQUNIOztBQUVELFdBQU9sb0IsS0FBSyxDQUFDa1MsTUFBTixDQUFhLENBQWIsRUFBZ0JnVyxXQUFoQixLQUFnQ2xvQixLQUFLLENBQUNtVSxTQUFOLENBQWdCLENBQWhCLENBQXZDO0FBQ0gsR0FWTSxFQVVKck4sSUFWSSxDQVVDLEVBVkQsQ0FBUDtBQVdIOztBQUVELFNBQVN3aEIsbUJBQVQsQ0FBNkJ0ckIsSUFBN0IsRUFBbUNvckIsU0FBbkMsRUFBOENDLG9CQUE5QyxFQUFvRTtBQUNoRSxNQUFJaFYsQ0FBQyxHQUFHLENBQVI7QUFBQSxNQUFXa1YsT0FBTyxHQUFHLEVBQXJCO0FBQUEsTUFBeUJDLEtBQXpCOztBQUVBLFNBQU9uVixDQUFDLEdBQUdyVyxJQUFJLENBQUMySSxNQUFoQixFQUF3QjtBQUNwQjZpQixTQUFJLEdBQUd4ckIsSUFBSSxDQUFDcVcsQ0FBRCxDQUFYOztBQUVBLFFBQUksQ0FBQ0EsQ0FBQyxLQUFLLENBQU4sSUFBV2dWLG9CQUFaLEtBQXFDLFFBQVFwYixJQUFSLENBQWF1YixLQUFiLENBQXpDLEVBQTZEO0FBQ3pERCxhQUFPLElBQUlILFNBQVg7QUFDQUcsYUFBTyxJQUFJQyxLQUFJLENBQUNSLFdBQUwsRUFBWDtBQUNILEtBSEQsTUFHTztBQUNITyxhQUFPLElBQUlDLEtBQVg7QUFDSDtBQUNKOztBQUVELFNBQU9ELE9BQVA7QUFDSCxDLENBQ0Q7QUFFQTs7O0FBQ0EsU0FBU2hGLElBQVQsR0FBZ0I7QUFDWixNQUFJYyxJQUFJLEdBQUcsS0FBWDtBQUFBLE1BQWtCb0UsUUFBUSxHQUFHLENBQTdCO0FBQUEsTUFBZ0NockIsR0FBRyxHQUFHaWQsU0FBUyxDQUFDK04sUUFBRCxDQUEvQztBQUFBLE1BQTJEOW9CLE1BQTNEOztBQUVBLE1BQUk2bkIsU0FBUyxDQUFDL3BCLEdBQUQsQ0FBYixFQUFvQjtBQUNoQjRtQixRQUFJLEdBQUc1bUIsR0FBUDtBQUNBZ3JCLFlBQVE7QUFDUmhyQixPQUFHLEdBQUdpZCxTQUFTLENBQUMrTixRQUFELENBQWY7QUFDSDs7QUFFRCxNQUFJL04sU0FBUyxDQUFDL1UsTUFBVixHQUFtQjhpQixRQUFRLEdBQUcsQ0FBbEMsRUFBcUM7QUFDakM5b0IsVUFBTSxHQUFHK2EsU0FBUyxDQUFDK04sUUFBUSxHQUFHLENBQVosQ0FBbEI7QUFDSDs7QUFFRCxNQUFJekIsT0FBTyxDQUFDdnBCLEdBQUQsQ0FBWCxFQUFrQjtBQUNkLFFBQUlpckIsTUFBTSxHQUFHLEVBQWI7QUFDQWpyQixPQUFHLENBQUNvQixPQUFKLENBQVksVUFBVWdHLElBQVYsRUFBZ0J2RyxLQUFoQixFQUF1QjtBQUMvQixVQUFJcUIsTUFBTSxJQUFJLElBQVYsSUFBa0JBLE1BQU0sQ0FBQ2xDLEdBQUQsRUFBTWEsS0FBTixFQUFhdUcsSUFBYixDQUE1QixFQUFnRDtBQUM1QzZqQixjQUFNLENBQUNscUIsSUFBUCxDQUFZNmxCLElBQUksR0FBR2QsSUFBSSxDQUFDYyxJQUFELEVBQU94ZixJQUFQLENBQVAsR0FBc0JBLElBQXRDO0FBQ0g7QUFDSixLQUpEO0FBS0EsV0FBTzZqQixNQUFQO0FBQ0g7O0FBRUQsTUFBSXhCLFFBQVEsQ0FBQ3pwQixHQUFELENBQVosRUFBbUI7QUFDZixRQUFJa3JCLE1BQU0sR0FBR2hiLE1BQU0sQ0FBQ2xRLEdBQUQsQ0FBbkI7QUFDQW9CLFdBQU8sQ0FBQ3BCLEdBQUQsRUFBTSxVQUFVdUMsS0FBVixFQUFpQmxELEdBQWpCLEVBQXNCO0FBQy9CLFVBQUk2QyxNQUFNLElBQUksSUFBVixJQUFrQkEsTUFBTSxDQUFDbEMsR0FBRCxFQUFNWCxHQUFOLEVBQVdrRCxLQUFYLENBQTVCLEVBQStDO0FBQzNDMm9CLGNBQU0sQ0FBQzdyQixHQUFELENBQU4sR0FBY3VuQixJQUFJLEdBQUdkLElBQUksQ0FBQ2MsSUFBRCxFQUFPcmtCLEtBQVAsQ0FBUCxHQUF1QkEsS0FBekM7QUFDSDtBQUNKLEtBSk0sQ0FBUDtBQUtBLFdBQU8yb0IsTUFBUDtBQUNIOztBQUVELFNBQU9sckIsR0FBUDtBQUNIOztBQUVELFNBQVNtckIsTUFBVCxHQUFrQjtBQUNkLE1BQUl2RSxJQUFJLEdBQUcsS0FBWDtBQUFBLE1BQWtCL2xCLEtBQUssR0FBRyxDQUExQjtBQUFBLE1BQTZCYyxNQUFNLEdBQUdzYixTQUFTLENBQUNwYyxLQUFELENBQS9DOztBQUVBLE1BQUlrcEIsU0FBUyxDQUFDcG9CLE1BQUQsQ0FBYixFQUF1QjtBQUNuQmlsQixRQUFJLEdBQUdqbEIsTUFBUDtBQUNBQSxVQUFNLEdBQUdzYixTQUFTLENBQUMsRUFBRXBjLEtBQUgsQ0FBbEI7QUFDSDs7QUFFRCxNQUFJK2xCLElBQUosRUFBVTtBQUNOaGMsU0FBSyxDQUFDaEosU0FBTixDQUFnQmlKLEtBQWhCLENBQXNCdkosSUFBdEIsQ0FBMkIyYixTQUEzQixFQUFzQ3BjLEtBQUssR0FBRyxDQUE5QyxFQUFpRE8sT0FBakQsQ0FBeUQsVUFBVWdHLElBQVYsRUFBZ0I7QUFDckVna0IsZUFBUyxDQUFDenBCLE1BQUQsRUFBU3lGLElBQVQsQ0FBVDtBQUNILEtBRkQ7QUFHSCxHQUpELE1BS0s7QUFDRHdELFNBQUssQ0FBQ2hKLFNBQU4sQ0FBZ0JpSixLQUFoQixDQUFzQnZKLElBQXRCLENBQTJCMmIsU0FBM0IsRUFBc0NwYyxLQUFLLEdBQUcsQ0FBOUMsRUFBaURPLE9BQWpELENBQXlELFVBQVVnRyxJQUFWLEVBQWdCO0FBQ3JFaWtCLGdCQUFVLENBQUMxcEIsTUFBRCxFQUFTeUYsSUFBVCxDQUFWO0FBQ0gsS0FGRDtBQUdIO0FBQ0o7O0FBRUQsU0FBU2trQixLQUFULEdBQWlCO0FBQ2IsTUFBSTFFLElBQUksR0FBRyxLQUFYO0FBQUEsTUFBa0IvbEIsS0FBSyxHQUFHLENBQTFCO0FBQUEsTUFBNkJjLE1BQU0sR0FBRyxFQUF0Qzs7QUFFQSxNQUFJb29CLFNBQVMsQ0FBQzlNLFNBQVMsQ0FBQ3BjLEtBQUQsQ0FBVixDQUFiLEVBQWlDO0FBQzdCK2xCLFFBQUksR0FBRzNKLFNBQVMsQ0FBQ3BjLEtBQUQsQ0FBaEI7QUFDQUEsU0FBSztBQUNSOztBQUVELE1BQUkrbEIsSUFBSixFQUFVO0FBQ05oYyxTQUFLLENBQUNoSixTQUFOLENBQWdCaUosS0FBaEIsQ0FBc0J2SixJQUF0QixDQUEyQjJiLFNBQTNCLEVBQXNDcGMsS0FBdEMsRUFBNkNPLE9BQTdDLENBQXFELFVBQVVnRyxJQUFWLEVBQWdCO0FBQ2pFZ2tCLGVBQVMsQ0FBQ3pwQixNQUFELEVBQVN5RixJQUFULENBQVQ7QUFDSCxLQUZEO0FBR0gsR0FKRCxNQUtLO0FBQ0R3RCxTQUFLLENBQUNoSixTQUFOLENBQWdCaUosS0FBaEIsQ0FBc0J2SixJQUF0QixDQUEyQjJiLFNBQTNCLEVBQXNDcGMsS0FBdEMsRUFBNkNPLE9BQTdDLENBQXFELFVBQVVnRyxJQUFWLEVBQWdCO0FBQ2pFaWtCLGdCQUFVLENBQUMxcEIsTUFBRCxFQUFTeUYsSUFBVCxDQUFWO0FBQ0gsS0FGRDtBQUdIOztBQUVELFNBQU96RixNQUFQO0FBQ0g7O0FBRUQsU0FBUzBwQixVQUFULENBQW9CMXBCLE1BQXBCLEVBQTRCNHBCLE1BQTVCLEVBQW9DO0FBQ2hDbnFCLFNBQU8sQ0FBQ21xQixNQUFELEVBQVMsVUFBVWhwQixLQUFWLEVBQWlCbEQsR0FBakIsRUFBc0I7QUFDbENzQyxVQUFNLENBQUN0QyxHQUFELENBQU4sR0FBY2tELEtBQWQ7QUFDSCxHQUZNLENBQVA7QUFHSDs7QUFFRCxTQUFTNm9CLFNBQVQsQ0FBbUJ6cEIsTUFBbkIsRUFBMkI0cEIsTUFBM0IsRUFBbUM7QUFDL0JucUIsU0FBTyxDQUFDbXFCLE1BQUQsRUFBUyxVQUFVaHBCLEtBQVYsRUFBaUJsRCxHQUFqQixFQUFzQjtBQUNsQyxRQUFJc0MsTUFBTSxDQUFDdEMsR0FBRCxDQUFOLElBQWUsSUFBbkIsRUFBeUI7QUFDckJzQyxZQUFNLENBQUN0QyxHQUFELENBQU4sR0FBY2tELEtBQWQ7QUFDSCxLQUZELE1BR0s7QUFDRCxVQUFJa25CLFFBQVEsQ0FBQzluQixNQUFNLENBQUN0QyxHQUFELENBQVAsQ0FBUixJQUF5Qm9xQixRQUFRLENBQUNsbkIsS0FBRCxDQUFyQyxFQUE4QztBQUMxQzZvQixpQkFBUyxDQUFDenBCLE1BQU0sQ0FBQ3RDLEdBQUQsQ0FBUCxFQUFja0QsS0FBZCxDQUFUO0FBQ0gsT0FGRCxNQUdLO0FBQ0RaLGNBQU0sQ0FBQ3RDLEdBQUQsQ0FBTixHQUFja0QsS0FBZDtBQUNIO0FBQ0o7QUFDSixHQVpNLENBQVA7QUFhSCxDLENBQ0Q7QUFFQTs7O0FBQ0EsU0FBU25CLE9BQVQsQ0FBaUJPLE1BQWpCLEVBQXlCMGMsTUFBekIsRUFBaUM7QUFDN0IsTUFBSWtMLE9BQU8sQ0FBQzVuQixNQUFELENBQVgsRUFBcUI7QUFDakJBLFVBQU0sQ0FBQ1AsT0FBUCxDQUFlaWQsTUFBZjtBQUNILEdBRkQsTUFFTyxJQUFJb0wsUUFBUSxDQUFDOW5CLE1BQUQsQ0FBWixFQUFzQjtBQUN6QixTQUFLLElBQUl0QyxHQUFULElBQWdCc0MsTUFBaEIsRUFBd0I7QUFDcEIsVUFBSUEsTUFBTSxDQUFDMFgsY0FBUCxDQUFzQmhhLEdBQXRCLENBQUosRUFBZ0M7QUFDNUJnZixjQUFNLENBQUMxYyxNQUFNLENBQUN0QyxHQUFELENBQVAsRUFBY0EsR0FBZCxDQUFOO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRUQsU0FBUzRpQixJQUFULENBQWN0Z0IsTUFBZCxFQUFzQjZwQixJQUF0QixFQUE0QjtBQUN4QixNQUFJakMsT0FBTyxDQUFDNW5CLE1BQUQsQ0FBWCxFQUFxQjtBQUNqQixXQUFPQSxNQUFNLENBQUNzZ0IsSUFBUCxDQUFZdUosSUFBWixDQUFQO0FBQ0g7O0FBRUQsTUFBSS9CLFFBQVEsQ0FBQzluQixNQUFELENBQVosRUFBc0I7QUFDbEIsU0FBSyxJQUFJdEMsR0FBVCxJQUFnQnNDLE1BQWhCLEVBQXdCO0FBQ3BCLFVBQUlBLE1BQU0sQ0FBQzBYLGNBQVAsQ0FBc0JoYSxHQUF0QixDQUFKLEVBQWdDO0FBQzVCLFlBQUltc0IsSUFBSSxDQUFDN3BCLE1BQU0sQ0FBQ3RDLEdBQUQsQ0FBUCxFQUFjQSxHQUFkLENBQVIsRUFBNEI7QUFDeEIsaUJBQU8sSUFBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKO0FBQ0osQyxDQUNEO0FBRUE7OztBQUNBLFNBQVNvc0IsT0FBVCxDQUFpQjlqQixJQUFqQixFQUF1QitqQixNQUF2QixFQUErQjtBQUMzQixNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVdmtCLElBQVYsRUFBZ0I7QUFDM0IsUUFBSXNrQixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNoQixhQUFPdGtCLElBQVA7QUFDSDs7QUFFRCxXQUFPc2tCLE1BQU0sQ0FBQ3RrQixJQUFELENBQWI7QUFDSCxHQU5EOztBQVFBLFNBQU9PLElBQUksQ0FBQ2lrQixJQUFMLENBQVUsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzdCLFFBQUlILFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csQ0FBRCxDQUExQixFQUErQjtBQUMzQixhQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELFFBQUlILFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csQ0FBRCxDQUExQixFQUErQjtBQUMzQixhQUFPLENBQVA7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFFRCxTQUFTQyxpQkFBVCxDQUEyQnBrQixJQUEzQixFQUFpQytqQixNQUFqQyxFQUF5QztBQUNyQyxNQUFJQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFVdmtCLElBQVYsRUFBZ0I7QUFDM0IsUUFBSXNrQixNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNoQixhQUFPdGtCLElBQVA7QUFDSDs7QUFFRCxXQUFPc2tCLE1BQU0sQ0FBQ3RrQixJQUFELENBQWI7QUFDSCxHQU5EOztBQVFBLFNBQU9PLElBQUksQ0FBQ2lrQixJQUFMLENBQVUsVUFBVUMsQ0FBVixFQUFhQyxDQUFiLEVBQWdCO0FBQzdCLFFBQUlILFFBQVEsQ0FBQ0UsQ0FBRCxDQUFSLEdBQWNGLFFBQVEsQ0FBQ0csQ0FBRCxDQUExQixFQUErQjtBQUMzQixhQUFPLENBQVA7QUFDSDs7QUFDRCxRQUFJSCxRQUFRLENBQUNFLENBQUQsQ0FBUixHQUFjRixRQUFRLENBQUNHLENBQUQsQ0FBMUIsRUFBK0I7QUFDM0IsYUFBTyxDQUFDLENBQVI7QUFDSDs7QUFDRCxXQUFPLENBQVA7QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFFRCxTQUFTRSxNQUFULEdBQWtCO0FBQ2QsU0FBT3BoQixLQUFLLENBQUNoSixTQUFOLENBQWdCb3FCLE1BQWhCLENBQXVCbFosS0FBdkIsQ0FBNkIsRUFBN0IsRUFBaUNtSyxTQUFqQyxDQUFQO0FBQ0g7O0FBRUQsU0FBU3pYLE1BQVQsQ0FBZ0JtQyxJQUFoQixFQUFzQnBGLEtBQXRCLEVBQTZCO0FBQ3pCLE1BQUkxQixLQUFLLEdBQUc4RyxJQUFJLENBQUM3RyxPQUFMLENBQWF5QixLQUFiLENBQVo7O0FBQ0EsTUFBSTFCLEtBQUssS0FBSyxDQUFDLENBQWYsRUFBa0I7QUFDZCxXQUFPOEcsSUFBSSxDQUFDekcsTUFBTCxDQUFZTCxLQUFaLEVBQW1CLENBQW5CLENBQVA7QUFDSDtBQUNKLEMsQ0FDRDs7O0FBRUEsU0FBU3FQLE1BQVQsQ0FBZ0IrYixDQUFoQixFQUFtQjtBQUNmLFdBQVNDLENBQVQsR0FBYSxDQUNaOztBQUVEQSxHQUFDLENBQUN0cUIsU0FBRixHQUFjcXFCLENBQWQ7QUFDQSxTQUFPLElBQUlDLENBQUosRUFBUDtBQUNIOztBQUVELFNBQVNDLGdCQUFULENBQTBCQyxPQUExQixFQUFtQ0MsU0FBbkMsRUFBOEM7QUFDMUMsTUFBSXpxQixTQUFTLEdBQUdzTyxNQUFNLENBQUNtYyxTQUFTLENBQUN6cUIsU0FBWCxDQUF0QjtBQUNBQSxXQUFTLENBQUMwcUIsV0FBVixHQUF3QkYsT0FBeEI7QUFDQUEsU0FBTyxDQUFDeHFCLFNBQVIsR0FBb0JBLFNBQXBCO0FBQ0g7O0FBRUQsU0FBUzJxQixPQUFULENBQWlCSCxPQUFqQixFQUEwQkMsU0FBMUIsRUFBcUM7QUFDakNGLGtCQUFnQixDQUFDQyxPQUFELEVBQVVDLFNBQVYsQ0FBaEI7O0FBQ0FELFNBQU8sU0FBUCxHQUFnQixZQUFZO0FBQ3hCQyxhQUFTLENBQUN2WixLQUFWLENBQWdCLElBQWhCLEVBQXNCbUssU0FBdEI7QUFDSCxHQUZEO0FBR0g7O0FBRUQsU0FBU3VQLFdBQVQsQ0FBcUI3cUIsTUFBckIsRUFBNkJ5TyxRQUE3QixFQUF1QztBQUNuQyxNQUFJL1EsR0FBSjtBQUFBLE1BQVN5ZSxJQUFJLEdBQUcxTixRQUFRLENBQUNyRSxLQUFULENBQWUsR0FBZixDQUFoQjs7QUFFQSxTQUFPK1IsSUFBSSxDQUFDNVYsTUFBTCxHQUFjLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUksQ0FBQ3VoQixRQUFRLENBQUM5bkIsTUFBRCxDQUFiLEVBQXVCO0FBQ25CLGFBQU8sS0FBUDtBQUNIOztBQUVEdEMsT0FBRyxHQUFHeWUsSUFBSSxDQUFDM1YsS0FBTCxFQUFOO0FBQ0F4RyxVQUFNLEdBQUdBLE1BQU0sQ0FBQ3RDLEdBQUQsQ0FBZjtBQUNIOztBQUVELFNBQU9vcUIsUUFBUSxDQUFDOW5CLE1BQUQsQ0FBUixJQUFvQkEsTUFBTSxDQUFDMFgsY0FBUCxDQUFzQnlFLElBQUksQ0FBQzNWLEtBQUwsRUFBdEIsQ0FBM0I7QUFDSDs7QUFFRCxTQUFTc2tCLFdBQVQsQ0FBcUI5cUIsTUFBckIsRUFBNkJ5TyxRQUE3QixFQUF1QztBQUNuQyxNQUFJL1EsR0FBSjtBQUFBLE1BQVN5ZSxJQUFJLEdBQUcxTixRQUFRLENBQUNyRSxLQUFULENBQWUsR0FBZixDQUFoQjs7QUFFQSxTQUFPK1IsSUFBSSxDQUFDNVYsTUFBTCxHQUFjLENBQXJCLEVBQXdCO0FBQ3BCLFFBQUcsQ0FBQ3VoQixRQUFRLENBQUM5bkIsTUFBRCxDQUFaLEVBQXNCO0FBQ2xCO0FBQ0g7O0FBRUR0QyxPQUFHLEdBQUd5ZSxJQUFJLENBQUMzVixLQUFMLEVBQU47QUFDQXhHLFVBQU0sR0FBR0EsTUFBTSxDQUFDdEMsR0FBRCxDQUFmO0FBQ0g7O0FBRUQsU0FBT3NDLE1BQVA7QUFDSDs7QUFFRCxTQUFTK3FCLFdBQVQsQ0FBcUIvcUIsTUFBckIsRUFBNkJ5TyxRQUE3QixFQUF1QzdOLEtBQXZDLEVBQThDO0FBQzFDLE1BQUlsRCxHQUFKO0FBQUEsTUFBU3llLElBQUksR0FBRzFOLFFBQVEsQ0FBQ3JFLEtBQVQsQ0FBZSxHQUFmLENBQWhCOztBQUVBLFNBQU8rUixJQUFJLENBQUM1VixNQUFMLEdBQWMsQ0FBckIsRUFBd0I7QUFDcEIsUUFBSSxDQUFDdWhCLFFBQVEsQ0FBQzluQixNQUFELENBQWIsRUFBdUI7QUFDbkI7QUFDSDs7QUFFRHRDLE9BQUcsR0FBR3llLElBQUksQ0FBQzNWLEtBQUwsRUFBTjtBQUNBeEcsVUFBTSxHQUFHQSxNQUFNLENBQUN0QyxHQUFELENBQWY7QUFDSDs7QUFFRCxNQUFJb3FCLFFBQVEsQ0FBQzluQixNQUFELENBQVosRUFBc0I7QUFDbEJ0QyxPQUFHLEdBQUd5ZSxJQUFJLENBQUMzVixLQUFMLEVBQU47QUFDQXhHLFVBQU0sQ0FBQ3RDLEdBQUQsQ0FBTixHQUFja0QsS0FBZDtBQUNIO0FBQ0o7O0FBRUQsU0FBU29xQixNQUFULEdBQWtCO0FBQ2QsTUFBSTFQLFNBQVMsQ0FBQy9VLE1BQVYsS0FBcUIsQ0FBekIsRUFBNEI7QUFDeEI7QUFDSDs7QUFFRCxNQUFJbVAsS0FBSjtBQUFBLE1BQVd1VixTQUFYO0FBQUEsTUFBc0IvckIsS0FBdEI7QUFBQSxNQUE2QndGLE1BQU0sR0FBRyxFQUF0QztBQUFBLE1BQTBDaU8sSUFBSSxHQUFHMkksU0FBUyxDQUFDLENBQUQsQ0FBMUQ7QUFBQSxNQUNJN1csT0FBTyxHQUFHLFlBRGQ7QUFBQSxNQUM0QjZZLFNBQVMsR0FBRzdZLE9BQU8sQ0FBQzZZLFNBRGhEOztBQUdBLFNBQU81SCxLQUFLLEdBQUdqUixPQUFPLENBQUNFLElBQVIsQ0FBYWdPLElBQWIsQ0FBZixFQUFtQztBQUMvQnNZLGFBQVMsR0FBR3ZWLEtBQUssQ0FBQyxDQUFELENBQWpCO0FBQ0F4VyxTQUFLLEdBQUdrVyxNQUFNLENBQUNTLFFBQVAsQ0FBZ0JILEtBQUssQ0FBQyxDQUFELENBQXJCLElBQTRCLENBQXBDOztBQUVBLFFBQUk0RixTQUFTLENBQUMvVSxNQUFWLElBQW9CckgsS0FBeEIsRUFBK0I7QUFDM0IsWUFBTSxJQUFJRyxLQUFKLENBQVUsaUJBQWlCSCxLQUFqQixHQUF5QixnQkFBbkMsQ0FBTjtBQUNIOztBQUVEd0YsVUFBTSxJQUFJaU8sSUFBSSxDQUFDb0MsU0FBTCxDQUFldUksU0FBZixFQUEwQjVILEtBQUssQ0FBQ3hXLEtBQWhDLElBQXlDb2MsU0FBUyxDQUFDcGMsS0FBRCxDQUE1RDtBQUNBb2UsYUFBUyxHQUFHN1ksT0FBTyxDQUFDNlksU0FBcEI7QUFDSDs7QUFFRDVZLFFBQU0sSUFBSWlPLElBQUksQ0FBQ29DLFNBQUwsQ0FBZXVJLFNBQWYsQ0FBVjtBQUVBLFNBQU81WSxNQUFQO0FBQ0g7O0FBRUQsU0FBU3dtQixVQUFULENBQW9CQyxJQUFwQixFQUEwQjtBQUN0QixTQUFPQSxJQUFJLENBQUN6Z0IsT0FBTCxDQUFhLE9BQWIsRUFBc0IsR0FBdEIsRUFBMkJBLE9BQTNCLENBQW1DLE9BQW5DLEVBQTRDLEdBQTVDLEVBQWlEQSxPQUFqRCxDQUF5RCxRQUF6RCxFQUFtRSxHQUFuRSxFQUF3RUEsT0FBeEUsQ0FBZ0YsVUFBaEYsRUFBNEYsRUFBNUYsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoWUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFTyxTQUFTMGdCLG9CQUFULENBQThCcnNCLElBQTlCLEVBQW9DO0FBQ3ZDLE9BQUtxakIsTUFBTCxHQUFjLElBQWQ7QUFDQSxPQUFLdGtCLFFBQUwsR0FBZ0IsSUFBaEI7QUFDQSxPQUFLdXRCLFVBQUwsR0FBa0IsRUFBbEI7QUFDQSxPQUFLcnRCLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxPQUFLdVIsT0FBTCxHQUFlLElBQUkrYiw4Q0FBSixDQUFXLElBQVgsQ0FBZjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsSUFBSTNSLGtEQUFKLENBQWEsSUFBYixDQUFqQjtBQUNBLE9BQUsvYixLQUFMLEdBQWEsRUFBYjtBQUNBLE9BQUtVLE1BQUwsR0FBYyxFQUFkO0FBQ0EsT0FBS1osS0FBTCxHQUFhLEtBQUs2dEIsU0FBTCxDQUFlLEVBQWYsQ0FBYjtBQUNBLE9BQUsvb0IsS0FBTCxHQUFhLEtBQUsrb0IsU0FBTCxDQUFlLEVBQWYsQ0FBYjtBQUNBLE9BQUtDLEtBQUwsR0FBYWptQiw0Q0FBQSxDQUFZLEtBQUt0RixVQUFqQixFQUE2Qm5CLElBQTdCLENBQWI7QUFDQW9CLG9EQUFRLENBQUN1ckIsY0FBVCxDQUF3QixJQUF4QixFQUE4QixLQUFLRCxLQUFuQztBQUNIO0FBRU0sSUFBTXR0QixTQUFiO0FBQUE7QUFBQTtBQUFBLDhCQUtjNkIsTUFMZCxFQUtzQjtBQUNkLGFBQU8sSUFBSWljLEtBQUosQ0FBVWpjLE1BQVYsRUFBa0JOLGlEQUFsQixDQUFQO0FBQ0g7QUFQTDtBQUFBO0FBQUEsNkJBU2E3QixLQVRiLEVBU29CO0FBQ1osV0FBS0EsS0FBTCxHQUFhQSxLQUFLLElBQUksRUFBdEI7QUFDSDtBQVhMO0FBQUE7QUFBQSw4QkFhYzRFLEtBYmQsRUFhcUI7QUFDYixXQUFLQSxLQUFMLEdBQWEsS0FBSytvQixTQUFMLENBQWUvb0IsS0FBZixDQUFiO0FBQ0g7QUFmTDtBQUFBO0FBQUEsOEJBaUJjOUUsS0FqQmQsRUFpQnFCO0FBQ2IsV0FBS0EsS0FBTCxHQUFhLEtBQUs2dEIsU0FBTCxDQUFlN3RCLEtBQWYsQ0FBYjtBQUNIO0FBbkJMO0FBQUE7QUFBQSx3QkFDb0I7QUFDWixhQUFPd0Msa0RBQVA7QUFDSDtBQUhMOztBQXFCSSxxQkFBWXBCLElBQVosRUFBa0I7QUFBQTs7QUFDZHFzQix3QkFBb0IsQ0FBQ3pyQixJQUFyQixDQUEwQixJQUExQixFQUFnQ1osSUFBaEM7QUFDSDs7QUF2Qkw7QUFBQTtBQUFBLGlDQXlCaUJyQixHQXpCakIsRUF5QnNCO0FBQ2QsYUFBTzhILGtEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsQ0FBUDtBQUNIO0FBM0JMO0FBQUE7QUFBQSxpQ0E2QmlCQSxHQTdCakIsRUE2QnNCO0FBQ2QsYUFBTzhILGtEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsQ0FBUDtBQUNIO0FBL0JMO0FBQUE7QUFBQSxpQ0FpQ2lCQSxHQWpDakIsRUFpQ3NCa0QsS0FqQ3RCLEVBaUM2QjtBQUNyQixVQUFJK1ksUUFBUSxHQUFHblUsa0RBQUEsQ0FBa0IsS0FBSzdILEtBQXZCLEVBQThCRCxHQUE5QixDQUFmOztBQUVBLFVBQUlpYyxRQUFRLEtBQUsvWSxLQUFqQixFQUF3QjtBQUNwQjRFLDBEQUFBLENBQWtCLEtBQUs3SCxLQUF2QixFQUE4QkQsR0FBOUIsRUFBbUNrRCxLQUFuQztBQUNIO0FBQ0o7QUF2Q0w7QUFBQTtBQUFBLGdDQXlDZ0JsRCxHQXpDaEIsRUF5Q3FCO0FBQ2IsYUFBTzhILGtEQUFBLENBQWtCLEtBQUtqSCxNQUF2QixFQUErQmIsR0FBL0IsQ0FBUDtBQUNIO0FBM0NMO0FBQUE7QUFBQSwwQkE2Q1VBLEdBN0NWLEVBNkNlZ0MsT0E3Q2YsRUE2Q3dCO0FBQ2hCLFVBQUlpc0IsT0FBTyxHQUFHbm1CLGtEQUFBLENBQWtCLEtBQUtqSCxNQUF2QixFQUErQmIsR0FBL0IsQ0FBZDs7QUFFQSxVQUFJVSx1REFBUyxDQUFDdXRCLE9BQUQsQ0FBYixFQUF3QjtBQUNwQkEsZUFBTyxDQUFDdGpCLEVBQVIsQ0FBVzNJLE9BQVg7QUFDSCxPQUZELE1BRU87QUFDSCxjQUFNLElBQUlMLEtBQUosQ0FBVW1HLDZDQUFBLENBQWEsNEJBQWIsRUFBMkM5SCxHQUEzQyxDQUFWLENBQU47QUFDSDtBQUNKO0FBckRMO0FBQUE7QUFBQSw0QkF1RFlBLEdBdkRaLEVBdURpQmdDLE9BdkRqQixFQXVEMEI7QUFDbEIsVUFBSWlzQixPQUFPLEdBQUdubUIsa0RBQUEsQ0FBa0IsS0FBS2pILE1BQXZCLEVBQStCYixHQUEvQixDQUFkOztBQUVBLFVBQUlVLHVEQUFTLENBQUN1dEIsT0FBRCxDQUFiLEVBQXdCO0FBQ3BCQSxlQUFPLENBQUNyc0IsR0FBUixDQUFZSSxPQUFaO0FBQ0g7QUFDSjtBQTdETDtBQUFBO0FBQUEsMkJBK0RXdUwsR0EvRFgsRUErRGdCdkwsT0EvRGhCLEVBK0R5QmtHLE1BL0R6QixFQStEaUM7QUFDekIsYUFBTyxLQUFLMmxCLFNBQUwsQ0FBZXZRLEtBQWYsQ0FBcUIvUCxHQUFyQixFQUEwQnZMLE9BQTFCLEVBQW1Da0csTUFBbkMsQ0FBUDtBQUNIO0FBakVMO0FBQUE7QUFBQSxxQ0FtRXFCcUYsR0FuRXJCLEVBbUUwQnZMLE9BbkUxQixFQW1FbUNrRyxNQW5FbkMsRUFtRTJDO0FBQ25DLGFBQU8sS0FBSzJsQixTQUFMLENBQWVLLGVBQWYsQ0FBK0IzZ0IsR0FBL0IsRUFBb0N2TCxPQUFwQyxFQUE2Q2tHLE1BQTdDLENBQVA7QUFDSDtBQXJFTDtBQUFBO0FBQUEsMEJBdUVVcUYsR0F2RVYsRUF1RWVyRixNQXZFZixFQXVFdUI7QUFDZixhQUFPLElBQUkwSiw4Q0FBSixDQUFjLElBQWQsRUFBb0I7QUFBQzFKLGNBQU0sRUFBRUE7QUFBVCxPQUFwQixFQUFzQytVLFFBQXRDLENBQStDMVAsR0FBL0MsQ0FBUDtBQUNIO0FBekVMO0FBQUE7QUFBQSw0QkEyRVlBLEdBM0VaLEVBMkVpQnJLLEtBM0VqQixFQTJFd0JnRixNQTNFeEIsRUEyRWdDO0FBQ3hCLGFBQU8sSUFBSTBKLDhDQUFKLENBQWMsSUFBZCxFQUFvQjtBQUFDMUosY0FBTSxFQUFFQTtBQUFULE9BQXBCLEVBQXNDbkMsTUFBdEMsQ0FBNkN3SCxHQUE3QyxFQUFrRHJLLEtBQWxELENBQVA7QUFDSDtBQTdFTDtBQUFBO0FBQUEsbUNBK0VtQjtBQUNYLFVBQUk3QixJQUFJLEdBQUcsS0FBSzBzQixLQUFoQjs7QUFFQSxVQUFJam1CLCtDQUFBLENBQWV6RyxJQUFJLENBQUNoQixRQUFwQixDQUFKLEVBQW1DO0FBQy9CLGVBQU9nQixJQUFJLENBQUNoQixRQUFaO0FBQ0g7O0FBRUQsVUFBSXlILCtDQUFBLENBQWV6RyxJQUFJLENBQUM4c0IsVUFBcEIsQ0FBSixFQUFxQztBQUNqQyxZQUFJanRCLEdBQUcsR0FBR3lDLFFBQVEsQ0FBQ3lxQixjQUFULENBQXdCL3NCLElBQUksQ0FBQzhzQixVQUE3QixDQUFWOztBQUVBLFlBQUlqdEIsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDYixpQkFBT0EsR0FBRyxDQUFDaUMsU0FBWDtBQUNIO0FBQ0o7O0FBRUQsYUFBTyxFQUFQO0FBQ0g7QUEvRkw7QUFBQTtBQUFBLDhCQWlHYztBQUNOLFVBQUk5QyxRQUFRLEdBQUcsS0FBS2d1QixZQUFMLEVBQWY7QUFDQSxXQUFLL3RCLFVBQUwsR0FBa0IsSUFBSUMsZ0RBQUosQ0FBYSxJQUFiLEVBQW1CQyxNQUFuQixDQUEwQkgsUUFBMUIsQ0FBbEI7QUFDSDtBQXBHTDtBQUFBO0FBQUEsMkJBc0dXK2tCLGlCQXRHWCxFQXNHOEI7QUFDdEIsVUFBSSxLQUFLOWtCLFVBQUwsSUFBbUIsSUFBdkIsRUFBNkI7QUFDekIsY0FBTSxJQUFJcUIsS0FBSixDQUFVLG1DQUFWLENBQU47QUFDSCxPQUZELE1BRU87QUFDSCxhQUFLckIsVUFBTCxDQUFnQmd1QixLQUFoQixDQUFzQmxKLGlCQUF0QjtBQUNIO0FBQ0o7QUE1R0w7QUFBQTtBQUFBLCtCQThHZSxDQUVWO0FBaEhMO0FBQUE7QUFBQSxpQ0FrSGlCelosS0FsSGpCLEVBa0h3QjtBQUNoQixXQUFLZ2lCLFVBQUwsQ0FBZ0Jqc0IsSUFBaEIsQ0FBcUJpSyxLQUFyQjtBQUNBQSxXQUFLLENBQUN2TCxRQUFOLEdBQWlCLElBQWpCO0FBQ0g7QUFySEw7QUFBQTtBQUFBLGlDQXVIaUJ1TCxLQXZIakIsRUF1SHdCO0FBQ2hCLFVBQUluSyxLQUFLLEdBQUcsS0FBS21zQixVQUFMLENBQWdCbHNCLE9BQWhCLENBQXdCa0ssS0FBeEIsQ0FBWjs7QUFFQSxVQUFJbkssS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGFBQUttc0IsVUFBTCxDQUFnQjlyQixNQUFoQixDQUF1QkwsS0FBdkIsRUFBOEIsQ0FBOUI7QUFDQW1LLGFBQUssQ0FBQ3ZMLFFBQU4sR0FBaUIsSUFBakI7QUFDSDtBQUNKO0FBOUhMO0FBQUE7QUFBQSwrQkFnSWU7QUFDUCxXQUFLeXRCLFNBQUwsQ0FBZXJsQixPQUFmOztBQUVBLFVBQUcsS0FBS2xJLFVBQUwsSUFBbUIsSUFBdEIsRUFBNEI7QUFDeEIsYUFBS0EsVUFBTCxDQUFnQmtJLE9BQWhCO0FBQ0g7O0FBRUQsV0FBS2lmLFNBQUwsSUFBa0IsS0FBS0EsU0FBTCxFQUFsQjs7QUFFQSxVQUFHLEtBQUtybkIsUUFBTCxJQUFpQixJQUFwQixFQUEwQjtBQUN0QixhQUFLQSxRQUFMLENBQWNtdUIsWUFBZCxDQUEyQixJQUEzQjtBQUNIO0FBQ0o7QUE1SUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sU0FBU0Msb0JBQVQsQ0FBOEJudEIsSUFBOUIsRUFBb0M7QUFDdkMsT0FBSzBmLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBSzRDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsT0FBS1gsU0FBTCxHQUFpQixDQUFqQixDQUh1QyxDQUl2Qzs7QUFDQSxPQUFLWSxXQUFMLEdBQW1CLEtBQW5CO0FBQ0EsT0FBS2xnQixZQUFMLEdBQW9CLElBQXBCO0FBQ0EsT0FBS3FxQixLQUFMLEdBQWFqbUIsNENBQUEsQ0FBWSxLQUFLdEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDdXJCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0QsS0FBbkM7QUFDSDtBQUVNLElBQU0zcUIsU0FBYjtBQUFBO0FBQUE7QUFBQSx3QkFDZTtBQUNQLGFBQU8sS0FBS1osVUFBTCxDQUFnQnhDLEdBQXZCO0FBQ0g7QUFITDtBQUFBO0FBQUEsd0JBS2lCO0FBQ1QsYUFBTyxLQUFLK2dCLE9BQVo7QUFDSDtBQVBMO0FBQUE7QUFBQSx3QkFTb0I7QUFDWixhQUFPLEtBQUtBLE9BQUwsQ0FBYTBOLFNBQXBCO0FBQ0g7QUFYTDtBQUFBO0FBQUEsd0JBYW1CO0FBQ1gsYUFBTyxLQUFLOUssT0FBTCxDQUFhaGQsSUFBYixDQUFrQnpGLEdBQXpCO0FBQ0g7QUFmTDtBQUFBO0FBQUEsd0JBaUJtQjtBQUNYLGFBQU8sS0FBS3lpQixPQUFMLENBQWF4QyxRQUFiLENBQXNCVixPQUE3QjtBQUNIO0FBbkJMO0FBQUE7QUFBQSx3QkFxQnFCO0FBQ2IsYUFBTyxLQUFLa0QsT0FBTCxDQUFhaGQsSUFBYixDQUFrQndhLFFBQWxCLENBQTJCcmhCLFNBQWxDO0FBQ0g7QUF2Qkw7O0FBeUJJLHFCQUFZdUIsSUFBWixFQUFrQjtBQUFBOztBQUNkbXRCLHdCQUFvQixDQUFDdnNCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDWixJQUFoQztBQUNILEdBM0JMLENBNkJJOzs7QUE3Qko7QUFBQTtBQUFBLCtCQThCZTtBQUNQLGFBQU8sS0FBS3F0QixTQUFMLElBQWtCLEtBQUtBLFNBQUwsQ0FBZSxLQUFLL0ssT0FBTCxDQUFhaGQsSUFBNUIsRUFBa0MsS0FBS2dkLE9BQXZDLENBQXpCO0FBQ0g7QUFoQ0w7QUFBQTtBQUFBLDRCQWtDWTtBQUNKLGFBQU8sS0FBS2dMLE1BQUwsSUFBZSxLQUFLQSxNQUFMLENBQVksS0FBSzdwQixNQUFqQixDQUF0QjtBQUNILEtBcENMLENBc0NJO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBM0NKO0FBQUE7QUFBQSxnQ0E0Q2dCO0FBQ1IsV0FBSzhwQixTQUFMLElBQWtCLEtBQUtBLFNBQUwsRUFBbEI7O0FBRUEsVUFBSSxLQUFLOW9CLFFBQUwsSUFBaUIsSUFBckIsRUFBMkI7QUFDdkIsYUFBS2lmLE9BQUwsQ0FBYSxLQUFLamYsUUFBTCxDQUFjNUMsS0FBM0IsRUFBa0MsS0FBSzRDLFFBQUwsQ0FBY21XLFFBQWhEO0FBQ0g7QUFDSixLQWxETCxDQW9ESTs7QUFwREo7QUFBQTtBQUFBLDRCQXFEWTVXLFFBckRaLEVBcURzQjRXLFFBckR0QixFQXFEZ0M7QUFDeEIsV0FBSzRTLFFBQUwsSUFBaUIsS0FBS0EsUUFBTCxDQUFjeHBCLFFBQWQsRUFBd0I0VyxRQUF4QixDQUFqQjtBQUNIO0FBdkRMO0FBQUE7QUFBQSwrQkF5RGU7QUFDUCxXQUFLd0wsU0FBTCxJQUFrQixLQUFLQSxTQUFMLEVBQWxCO0FBQ0g7QUEzREw7QUFBQTtBQUFBLHNDQTZEc0I5Z0IsSUE3RHRCLEVBNkQ0QjNHLEdBN0Q1QixFQTZEaUM7QUFDekIsVUFBSWdILE1BQU0sR0FBR0wsSUFBSSxDQUFDd2EsUUFBTCxDQUFjTyxVQUFkLENBQXlCN2UsTUFBekIsQ0FBZ0MsVUFBQWtGLElBQUksRUFBSTtBQUNqRCxlQUFPQSxJQUFJLENBQUMrbUIsSUFBTCxLQUFjOXVCLEdBQXJCO0FBQ0gsT0FGWSxDQUFiO0FBR0EsYUFBT2dILE1BQU0sQ0FBQzZCLE1BQVAsR0FBZ0I3QixNQUFNLENBQUMsQ0FBRCxDQUF0QixHQUE0QixJQUFuQztBQUNIO0FBbEVMO0FBQUE7QUFBQSxtQ0FvRW1CaEgsR0FwRW5CLEVBb0V3QjtBQUNoQixVQUFJMkcsSUFBSSxHQUFHLEtBQUtnZCxPQUFMLENBQWFoZCxJQUF4QjtBQUNBLGFBQU8sS0FBS29vQixpQkFBTCxDQUF1QnBvQixJQUF2QixFQUE2QjNHLEdBQTdCLENBQVA7QUFDSDtBQXZFTDtBQUFBO0FBQUEscUNBeUVxQkEsR0F6RXJCLEVBeUUwQjtBQUNsQixVQUFJMkcsSUFBSSxHQUFHLEtBQUtnZCxPQUFMLENBQWFoZCxJQUFiLENBQWtCZSxVQUE3QjtBQUNBLGFBQU8sS0FBS3FuQixpQkFBTCxDQUF1QnBvQixJQUF2QixFQUE2QjNHLEdBQTdCLENBQVA7QUFDSDtBQTVFTDtBQUFBO0FBQUEsbUNBOEVtQmd2QixHQTlFbkIsRUE4RXdCO0FBQ2hCLFVBQUksS0FBS3RyQixZQUFMLElBQXFCLElBQXpCLEVBQStCO0FBQzNCLGNBQU0sSUFBSS9CLEtBQUosQ0FBVSxzQ0FBVixDQUFOO0FBQ0g7O0FBRUQsVUFBSXF0QixHQUFKLEVBQVM7QUFDTCxZQUFJLEtBQUs1dEIsUUFBTCxDQUFjc0csVUFBZCxJQUE0QixJQUFoQyxFQUFzQztBQUNsQ3hGLDZEQUFBLENBQW1CLEtBQUtkLFFBQXhCLEVBQWtDLEtBQUtzQyxZQUF2QztBQUNIO0FBQ0osT0FKRCxNQUlPO0FBQ0gsWUFBSSxLQUFLdEMsUUFBTCxDQUFjc0csVUFBZCxJQUE0QixJQUFoQyxFQUFzQztBQUNsQ3hGLDZEQUFBLENBQW1CLEtBQUt3QixZQUF4QixFQUFzQyxLQUFLdEMsUUFBM0M7QUFDSDtBQUNKO0FBQ0o7QUE1Rkw7QUFBQTtBQUFBLGlDQThGaUI0dEIsR0E5RmpCLEVBOEZzQjtBQUNkLFVBQUlBLEdBQUosRUFBUztBQUNMOXNCLHFEQUFBLENBQWEsS0FBS2QsUUFBbEIsRUFBNEJnQixpREFBNUI7QUFDSCxPQUZELE1BRU87QUFDSEYsd0RBQUEsQ0FBZ0IsS0FBS2QsUUFBckIsRUFBK0JnQixpREFBL0I7QUFDSDtBQUNKO0FBcEdMO0FBQUE7QUFBQSwwQkFzR1VtTCxHQXRHVixFQXNHZXJGLE1BdEdmLEVBc0d1QjtBQUNmQSxZQUFNLEdBQUdKLDRDQUFBLENBQVksS0FBS2hDLFFBQUwsQ0FBY29DLE1BQTFCLEVBQWtDQSxNQUFsQyxDQUFUO0FBQ0EsYUFBTyxLQUFLcEQsTUFBTCxDQUFZK0MsS0FBWixDQUFrQjBGLEdBQWxCLEVBQXVCckYsTUFBdkIsQ0FBUDtBQUNIO0FBekdMO0FBQUE7QUFBQSw0QkEyR1lxRixHQTNHWixFQTJHaUJySyxLQTNHakIsRUEyR3dCZ0YsTUEzR3hCLEVBMkdnQztBQUN4QkEsWUFBTSxHQUFHSiw0Q0FBQSxDQUFZLEtBQUtoQyxRQUFMLENBQWNvQyxNQUExQixFQUFrQ0EsTUFBbEMsQ0FBVDtBQUNBLGFBQU8sS0FBS3BELE1BQUwsQ0FBWXNiLE9BQVosQ0FBb0I3UyxHQUFwQixFQUF5QnJLLEtBQXpCLENBQVA7QUFDSDtBQTlHTDtBQUFBO0FBQUEsNEJBZ0hZN0MsUUFoSFosRUFnSHNCNkgsTUFoSHRCLEVBZ0g4QjtBQUN0QixhQUFPLElBQUkzSCxnREFBSixDQUFhLEtBQUt1RSxNQUFsQixFQUEwQm9ELE1BQTFCLEVBQWtDMUgsTUFBbEMsQ0FBeUNILFFBQXpDLENBQVA7QUFDSDtBQWxITDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFJMEcsT0FBTyxHQUFHLG9CQUFkLEMsQ0FFQTs7QUFDQSxJQUFJa29CLGNBQWMsR0FBSSxZQUFZO0FBQzlCLFNBQU8sU0FBU3h1QixTQUFULENBQW1CNEIsUUFBbkIsRUFBNkI7QUFDaENxckIsbUVBQW9CLENBQUN6ckIsSUFBckIsQ0FBMEIsSUFBMUIsRUFBZ0NJLFFBQWhDO0FBQ0gsR0FGRDtBQUdILENBSm9CLEVBQXJCOztBQUtBNHNCLGNBQWMsQ0FBQzFzQixTQUFmLEdBQTJCOUIsb0RBQVMsQ0FBQzhCLFNBQXJDOztBQUVBLElBQUkyc0IsY0FBYyxHQUFJLFlBQVk7QUFDOUIsU0FBTyxTQUFTOXJCLFNBQVQsQ0FBbUJmLFFBQW5CLEVBQTZCO0FBQ2hDbXNCLG1FQUFvQixDQUFDdnNCLElBQXJCLENBQTBCLElBQTFCLEVBQWdDSSxRQUFoQztBQUNILEdBRkQ7QUFHSCxDQUpvQixFQUFyQjs7QUFLQTZzQixjQUFjLENBQUMzc0IsU0FBZixHQUEyQmEsb0RBQVMsQ0FBQ2IsU0FBckM7O0FBRUEsSUFBSTRzQixXQUFXLEdBQUksWUFBWTtBQUMzQixTQUFPLFNBQVNDLE1BQVQsQ0FBZ0Ivc0IsUUFBaEIsRUFBMEI7QUFDN0JndEIsNkRBQWlCLENBQUNwdEIsSUFBbEIsQ0FBdUIsSUFBdkIsRUFBNkJJLFFBQTdCO0FBQ0gsR0FGRDtBQUdILENBSmlCLEVBQWxCOztBQUtBOHNCLFdBQVcsQ0FBQzVzQixTQUFaLEdBQXdCNnNCLDhDQUFNLENBQUM3c0IsU0FBL0I7O0FBRUEsSUFBSStzQixZQUFZLEdBQUksWUFBWTtBQUM1QixTQUFPLFNBQVNDLE9BQVQsQ0FBaUJsdEIsUUFBakIsRUFBMkI7QUFDOUJtdEIsK0RBQWtCLENBQUN2dEIsSUFBbkIsQ0FBd0IsSUFBeEIsRUFBOEJJLFFBQTlCO0FBQ0gsR0FGRDtBQUdILENBSmtCLEVBQW5COztBQUtBaXRCLFlBQVksQ0FBQy9zQixTQUFiLEdBQXlCZ3RCLGdEQUFPLENBQUNodEIsU0FBakMsQyxDQUNBO0FBRUE7O0FBQ08sSUFBTWt0QixPQUFiO0FBQ0kscUJBQWM7QUFBQTtBQUViOztBQUhMO0FBQUE7QUFBQSwyQkFLV0MsTUFMWCxFQUttQnh2QixJQUxuQixFQUt5QjtBQUNqQixVQUFJNkcsT0FBTyxDQUFDb0osSUFBUixDQUFhalEsSUFBYixDQUFKLEVBQXdCO0FBQ3BCLFlBQUl1ckIsT0FBTyxHQUFHM2pCLHdEQUFBLENBQXdCNUgsSUFBeEIsRUFBOEIsR0FBOUIsRUFBbUMsSUFBbkMsQ0FBZDs7QUFFQSxnQkFBUXd2QixNQUFSO0FBQ0ksZUFBS0MsNENBQUssQ0FBQzd2QixTQUFYO0FBQ0kyckIsbUJBQU8sSUFBSSxXQUFYO0FBQ0E7O0FBQ0osZUFBS2tFLDRDQUFLLENBQUNodEIsU0FBWDtBQUNJOG9CLG1CQUFPLElBQUksV0FBWDtBQUNBOztBQUNKLGVBQUtrRSw0Q0FBSyxDQUFDOXNCLE1BQVg7QUFDSTRvQixtQkFBTyxJQUFJLFFBQVg7QUFDQTs7QUFDSixlQUFLa0UsNENBQUssQ0FBQzVzQixPQUFYO0FBQ0kwb0IsbUJBQU8sSUFBSSxTQUFYO0FBQ0E7QUFaUjs7QUFlQSxlQUFPQSxPQUFQO0FBQ0gsT0FuQkQsTUFtQk87QUFDSCxjQUFNLElBQUk5cEIsS0FBSixDQUFVekIsSUFBSSxHQUFHLHFCQUFqQixDQUFOO0FBQ0g7QUFDSjtBQTVCTDtBQUFBO0FBQUEseUJBOEJTd3ZCLE1BOUJULEVBOEJpQnh2QixJQTlCakIsRUE4QnVCMHZCLE1BOUJ2QixFQThCK0J2dEIsUUE5Qi9CLEVBOEJ5QztBQUNqQyxVQUFJNHFCLFdBQUo7QUFBQSxVQUFpQjRDLGVBQWUsR0FBRyxLQUFLQyxNQUFMLENBQVlKLE1BQVosRUFBb0J4dkIsSUFBcEIsQ0FBbkM7QUFBQSxVQUNJNnZCLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQVk7QUFDdEIsWUFBSWpvQixpREFBQSxDQUFpQm1sQixXQUFXLFNBQTVCLENBQUosRUFBeUM7QUFDckNBLHFCQUFXLFNBQVgsQ0FBa0JockIsSUFBbEIsQ0FBdUIsSUFBdkI7QUFDSCxTQUhxQixDQUl0Qjs7O0FBQ0EsWUFBSTZGLGlEQUFBLENBQWlCOG5CLE1BQU0sQ0FBQ0ksU0FBeEIsQ0FBSixFQUF3QztBQUNwQ0osZ0JBQU0sQ0FBQ0ksU0FBUCxDQUFpQi90QixJQUFqQixDQUFzQixJQUF0QixFQUE0QnJCLDZDQUE1QjtBQUNIO0FBQ0osT0FUTDs7QUFXQXFzQixpQkFBVyxHQUFHLElBQUlnRCxRQUFKLENBQWEsYUFBYixFQUE0QixrQ0FBa0NKLGVBQWxDLEdBQW9ELDhCQUFoRixFQUFnSEUsV0FBaEgsQ0FBZCxDQVppQyxDQWNqQzs7QUFDQSxVQUFJam9CLGlEQUFBLENBQWlCOG5CLE1BQU0sV0FBdkIsQ0FBSixFQUFzQztBQUNsQzluQixzREFBQSxDQUFjbWxCLFdBQWQsRUFBMkIyQyxNQUFNLFdBQWpDO0FBQ0gsT0FqQmdDLENBbUJqQzs7O0FBQ0EsV0FBSyxJQUFJNXZCLEdBQVQsSUFBZ0I0dkIsTUFBaEIsRUFBd0I7QUFDcEIsWUFBSUEsTUFBTSxDQUFDNVYsY0FBUCxDQUFzQmhhLEdBQXRCLEtBQThCQSxHQUFHLEtBQUssU0FBdEMsSUFBbURBLEdBQUcsS0FBSyxXQUEvRCxFQUE0RTtBQUN4RWl0QixxQkFBVyxDQUFDMXFCLFNBQVosQ0FBc0J2QyxHQUF0QixJQUE2QjR2QixNQUFNLENBQUM1dkIsR0FBRCxDQUFuQztBQUNIO0FBQ0osT0F4QmdDLENBMEJqQzs7O0FBQ0FxQyxjQUFRLENBQUNyQyxHQUFULEdBQWVFLElBQWY7QUFDQStzQixpQkFBVyxDQUFDMXFCLFNBQVosQ0FBc0JDLFVBQXRCLEdBQW1DSCxRQUFuQztBQUVBLGFBQU80cUIsV0FBUDtBQUNIO0FBN0RMO0FBQUE7QUFBQSxrQ0ErRGtCL3NCLElBL0RsQixFQStEd0IwdkIsTUEvRHhCLEVBK0RnQ3Z0QixRQS9EaEMsRUErRDBDO0FBQ2xDdXRCLFlBQU0sR0FBRzluQiw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTbW5CO0FBRFEsT0FBWixFQUVOVyxNQUZNLENBQVQ7QUFHQSxhQUFPLEtBQUtNLElBQUwsQ0FBVVAsNENBQUssQ0FBQzd2QixTQUFoQixFQUEyQkksSUFBM0IsRUFBaUMwdkIsTUFBakMsRUFBeUN2dEIsUUFBekMsQ0FBUDtBQUNIO0FBcEVMO0FBQUE7QUFBQSxrQ0FzRWtCbkMsSUF0RWxCLEVBc0V3QjB2QixNQXRFeEIsRUFzRWdDdnRCLFFBdEVoQyxFQXNFMEM7QUFDbEN1dEIsWUFBTSxHQUFHOW5CLDRDQUFBLENBQVk7QUFDakIsbUJBQVNvbkI7QUFEUSxPQUFaLEVBRU5VLE1BRk0sQ0FBVDtBQUdBLGFBQU8sS0FBS00sSUFBTCxDQUFVUCw0Q0FBSyxDQUFDaHRCLFNBQWhCLEVBQTJCekMsSUFBM0IsRUFBaUMwdkIsTUFBakMsRUFBeUN2dEIsUUFBekMsQ0FBUDtBQUNIO0FBM0VMO0FBQUE7QUFBQSwrQkE2RWVuQyxJQTdFZixFQTZFcUIwdkIsTUE3RXJCLEVBNkU2QnZ0QixRQTdFN0IsRUE2RXVDO0FBQy9CdXRCLFlBQU0sR0FBRzluQiw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTcW5CO0FBRFEsT0FBWixFQUVOUyxNQUZNLENBQVQ7QUFHQSxhQUFPLEtBQUtNLElBQUwsQ0FBVVAsNENBQUssQ0FBQzlzQixNQUFoQixFQUF3QjNDLElBQXhCLEVBQThCMHZCLE1BQTlCLEVBQXNDdnRCLFFBQXRDLENBQVA7QUFDSDtBQWxGTDtBQUFBO0FBQUEsZ0NBb0ZnQm5DLElBcEZoQixFQW9Gc0IwdkIsTUFwRnRCLEVBb0Y4QnZ0QixRQXBGOUIsRUFvRndDO0FBQ2hDdXRCLFlBQU0sR0FBRzluQiw0Q0FBQSxDQUFZO0FBQ2pCLG1CQUFTd25CO0FBRFEsT0FBWixFQUVOTSxNQUZNLENBQVQ7QUFHQSxhQUFPLEtBQUtNLElBQUwsQ0FBVVAsNENBQUssQ0FBQzVzQixPQUFoQixFQUF5QjdDLElBQXpCLEVBQStCMHZCLE1BQS9CLEVBQXVDdnRCLFFBQXZDLENBQVA7QUFDSDtBQXpGTDs7QUFBQTtBQUFBO0FBNEZPLElBQUk4dEIsT0FBTyxHQUFHLElBQUlWLE9BQUosRUFBZCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JJUDtBQUNBO0FBRU8sU0FBU0osaUJBQVQsQ0FBMkJodUIsSUFBM0IsRUFBaUM7QUFDcEMsT0FBSzBzQixLQUFMLEdBQWFqbUIsNENBQUEsQ0FBWSxLQUFLdEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDdXJCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0QsS0FBbkM7QUFDSDtBQUVNLElBQU1xQixNQUFiO0FBQ0ksa0JBQVkvdEIsSUFBWixFQUFrQjtBQUFBOztBQUNkZ3VCLHFCQUFpQixDQUFDcHRCLElBQWxCLENBQXVCLElBQXZCLEVBQTZCWixJQUE3QjtBQUNIOztBQUhMO0FBQUE7QUFBQSxnQ0FLZ0I7QUFDUixhQUFPLEtBQUsrdUIsV0FBTCxJQUFvQixLQUFLQSxXQUFMLENBQWlCM2MsS0FBakIsQ0FBdUIsSUFBdkIsRUFBNkJtSyxTQUE3QixDQUEzQjtBQUNIO0FBUEw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0NBR0E7QUFDQTs7QUFDTyxJQUFNeVMsUUFBYjtBQUNJLHNCQUFjO0FBQUE7O0FBQ1YsU0FBS0MsY0FBTCxHQUFzQixFQUF0QjtBQUNBLFNBQUtDLGlCQUFMLEdBQXlCLEVBQXpCO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixFQUFwQjtBQUNIOztBQUxMO0FBQUE7QUFBQSxzQ0FPc0JkLE1BUHRCLEVBTzhCO0FBQ3RCLFVBQUksQ0FBQyxLQUFLWSxjQUFMLENBQW9CWixNQUFwQixDQUFMLEVBQWtDO0FBQzlCLGFBQUtZLGNBQUwsQ0FBb0JaLE1BQXBCLElBQThCLEVBQTlCO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLWSxjQUFMLENBQW9CWixNQUFwQixDQUFQO0FBQ0g7QUFaTDtBQUFBO0FBQUEseUNBY3lCQSxNQWR6QixFQWNpQztBQUN6QixVQUFJLENBQUMsS0FBS2EsaUJBQUwsQ0FBdUJiLE1BQXZCLENBQUwsRUFBcUM7QUFDakMsYUFBS2EsaUJBQUwsQ0FBdUJiLE1BQXZCLElBQWlDLEVBQWpDO0FBQ0g7O0FBQ0QsYUFBTyxLQUFLYSxpQkFBTCxDQUF1QmIsTUFBdkIsQ0FBUDtBQUNIO0FBbkJMO0FBQUE7QUFBQSw2QkFxQmFBLE1BckJiLEVBcUJxQjF2QixHQXJCckIsRUFxQjBCaXRCLFdBckIxQixFQXFCdUM7QUFDL0IsVUFBSWp0QixHQUFHLENBQUN5QixPQUFKLENBQVksR0FBWixNQUFxQixDQUFDLENBQTFCLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSUUsS0FBSixDQUFVLHVCQUFWLENBQU47QUFDSDs7QUFFRCxVQUFJeWYsU0FBUyxHQUFHLEtBQUtxUCxpQkFBTCxDQUF1QmYsTUFBdkIsQ0FBaEI7O0FBRUEsVUFBSXRPLFNBQVMsQ0FBQ3BoQixHQUFELENBQVQsSUFBa0IsSUFBdEIsRUFBNEI7QUFDeEJvaEIsaUJBQVMsQ0FBQ3BoQixHQUFELENBQVQsR0FBaUIsRUFBakI7QUFDSCxPQUZELE1BR0s7QUFDRCxZQUFJa21CLE9BQU8sR0FBRzlFLFNBQVMsQ0FBQ3BoQixHQUFELENBQVQsQ0FBZTZDLE1BQWYsQ0FBc0IsVUFBVWtGLElBQVYsRUFBZ0I7QUFDaEQsaUJBQU9BLElBQUksQ0FBQ3hGLFNBQUwsQ0FBZUMsVUFBZixDQUEwQnpDLFNBQTFCLEtBQXdDa3RCLFdBQVcsQ0FBQzFxQixTQUFaLENBQXNCQyxVQUF0QixDQUFpQ3pDLFNBQWhGO0FBQ0gsU0FGYSxDQUFkOztBQUlBLFlBQUltbUIsT0FBTyxDQUFDcmQsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQixnQkFBTSxJQUFJbEgsS0FBSixDQUFVM0IsR0FBRyxHQUFHLDRCQUFOLEdBQXFDa21CLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBVzNqQixTQUFYLENBQXFCQyxVQUFyQixDQUFnQ3pDLFNBQS9FLENBQU47QUFDSDtBQUNKOztBQUVEcWhCLGVBQVMsQ0FBQ3BoQixHQUFELENBQVQsQ0FBZTBCLElBQWYsQ0FBb0J1ckIsV0FBcEI7QUFDSDtBQTFDTDtBQUFBO0FBQUEsc0NBNENzQmp0QixHQTVDdEIsRUE0QzJCaXRCLFdBNUMzQixFQTRDd0M1cUIsUUE1Q3hDLEVBNENrRDtBQUMxQyxXQUFLcXVCLFFBQUwsQ0FBY2YsNENBQUssQ0FBQzd2QixTQUFwQixFQUErQkUsR0FBL0IsRUFBb0NpdEIsV0FBcEMsRUFBaUQ1cUIsUUFBakQ7QUFDSDtBQTlDTDtBQUFBO0FBQUEsc0NBZ0RzQnJDLEdBaER0QixFQWdEMkJpdEIsV0FoRDNCLEVBZ0R3QzVxQixRQWhEeEMsRUFnRGtEO0FBQzFDLFdBQUtxdUIsUUFBTCxDQUFjZiw0Q0FBSyxDQUFDaHRCLFNBQXBCLEVBQStCM0MsR0FBL0IsRUFBb0NpdEIsV0FBcEMsRUFBaUQ1cUIsUUFBakQ7QUFDSDtBQWxETDtBQUFBO0FBQUEsbUNBb0RtQnJDLEdBcERuQixFQW9Ed0JpdEIsV0FwRHhCLEVBb0RxQzVxQixRQXBEckMsRUFvRCtDO0FBQ3ZDLFdBQUtxdUIsUUFBTCxDQUFjZiw0Q0FBSyxDQUFDOXNCLE1BQXBCLEVBQTRCN0MsR0FBNUIsRUFBaUNpdEIsV0FBakMsRUFBOEM1cUIsUUFBOUM7QUFDSDtBQXRETDtBQUFBO0FBQUEsb0NBd0RvQnJDLEdBeERwQixFQXdEeUJpdEIsV0F4RHpCLEVBd0RzQzVxQixRQXhEdEMsRUF3RGdEO0FBQ3hDLFdBQUtxdUIsUUFBTCxDQUFjZiw0Q0FBSyxDQUFDNXNCLE9BQXBCLEVBQTZCL0MsR0FBN0IsRUFBa0NpdEIsV0FBbEMsRUFBK0M1cUIsUUFBL0M7QUFDSDtBQTFETDtBQUFBO0FBQUEsd0JBNERRcXRCLE1BNURSLEVBNERnQjF2QixHQTVEaEIsRUE0RHFCMndCLFVBNURyQixFQTREaUM1d0IsU0E1RGpDLEVBNEQ0QztBQUNwQyxVQUFJNndCLFlBQUo7QUFBQSxVQUFrQnhQLFNBQVMsR0FBRyxLQUFLcVAsaUJBQUwsQ0FBdUJmLE1BQXZCLENBQTlCOztBQUVBLFVBQUlpQixVQUFKLEVBQWdCO0FBQ1pDLG9CQUFZLEdBQUc5b0Isa0RBQUEsQ0FBa0JzWixTQUFsQixFQUE2QnBoQixHQUE3QixFQUFrQyxJQUFsQyxDQUFmO0FBQ0gsT0FGRCxNQUdLO0FBQ0Q0d0Isb0JBQVksR0FBR3hQLFNBQVMsQ0FBQ3BoQixHQUFELENBQXhCO0FBQ0g7O0FBRUQsVUFBSTR3QixZQUFZLElBQUksSUFBcEIsRUFBMEI7QUFDdEIsZUFBTyxLQUFQO0FBQ0g7O0FBRUQsVUFBSTd3QixTQUFTLElBQUk2d0IsWUFBWSxDQUFDL25CLE1BQWIsR0FBc0IsQ0FBdkMsRUFBMEM7QUFDdEMrbkIsb0JBQVksR0FBR0EsWUFBWSxDQUFDL3RCLE1BQWIsQ0FBb0IsVUFBVWtGLElBQVYsRUFBZ0I7QUFDL0MsY0FBSThvQixJQUFJLEdBQUc5b0IsSUFBSSxDQUFDeEYsU0FBTCxDQUFlQyxVQUExQjtBQUNBLGlCQUFPcXVCLElBQUksQ0FBQzl3QixTQUFMLElBQWtCK0gsZ0RBQUEsQ0FBZ0Irb0IsSUFBSSxDQUFDOXdCLFNBQXJCLE1BQW9DK0gsZ0RBQUEsQ0FBZ0IvSCxTQUFoQixDQUE3RDtBQUNILFNBSGMsQ0FBZjs7QUFLQSxZQUFJNndCLFlBQVksQ0FBQy9uQixNQUFiLEtBQXdCLENBQTVCLEVBQStCO0FBQzNCLGlCQUFPLEtBQVA7QUFDSDtBQUNKOztBQUVELGFBQU8sSUFBUDtBQUNIO0FBdEZMO0FBQUE7QUFBQSxpQ0F3RmlCN0ksR0F4RmpCLEVBd0ZzQkQsU0F4RnRCLEVBd0ZpQztBQUN6QixhQUFPLEtBQUs0SSxHQUFMLENBQVNnbkIsNENBQUssQ0FBQzd2QixTQUFmLEVBQTBCRSxHQUExQixFQUErQixJQUEvQixFQUFxQ0QsU0FBckMsQ0FBUDtBQUNIO0FBMUZMO0FBQUE7QUFBQSxpQ0E0RmlCQyxHQTVGakIsRUE0RnNCRCxTQTVGdEIsRUE0RmlDO0FBQ3pCLGFBQU8sS0FBSzRJLEdBQUwsQ0FBU2duQiw0Q0FBSyxDQUFDaHRCLFNBQWYsRUFBMEIzQyxHQUExQixFQUErQixJQUEvQixFQUFxQ0QsU0FBckMsQ0FBUDtBQUNIO0FBOUZMO0FBQUE7QUFBQSw4QkFnR2NDLEdBaEdkLEVBZ0dtQkQsU0FoR25CLEVBZ0c4QjtBQUN0QixhQUFPLEtBQUs0SSxHQUFMLENBQVNnbkIsNENBQUssQ0FBQzlzQixNQUFmLEVBQXVCN0MsR0FBdkIsRUFBNEIsSUFBNUIsRUFBa0NELFNBQWxDLENBQVA7QUFDSDtBQWxHTDtBQUFBO0FBQUEsK0JBb0dlQyxHQXBHZixFQW9Hb0JELFNBcEdwQixFQW9HK0I7QUFDdkIsYUFBTyxLQUFLNEksR0FBTCxDQUFTZ25CLDRDQUFLLENBQUM1c0IsT0FBZixFQUF3Qi9DLEdBQXhCLEVBQTZCLElBQTdCLEVBQW1DRCxTQUFuQyxDQUFQO0FBQ0g7QUF0R0w7QUFBQTtBQUFBLHdCQXdHUTJ2QixNQXhHUixFQXdHZ0IxdkIsR0F4R2hCLEVBd0dxQjJ3QixVQXhHckIsRUF3R2lDNXdCLFNBeEdqQyxFQXdHNEM7QUFDcEMsVUFBSTZ3QixZQUFKO0FBQUEsVUFBa0J4UCxTQUFTLEdBQUcsS0FBS3FQLGlCQUFMLENBQXVCZixNQUF2QixDQUE5Qjs7QUFFQSxVQUFJaUIsVUFBSixFQUFnQjtBQUNaQyxvQkFBWSxHQUFHOW9CLGtEQUFBLENBQWtCc1osU0FBbEIsRUFBNkJwaEIsR0FBN0IsRUFBa0MsSUFBbEMsQ0FBZjtBQUNILE9BRkQsTUFHSztBQUNENHdCLG9CQUFZLEdBQUd4UCxTQUFTLENBQUNwaEIsR0FBRCxDQUF4QjtBQUNIOztBQUVELFVBQUk0d0IsWUFBWSxJQUFJLElBQXBCLEVBQTBCO0FBQ3RCLGVBQU8sSUFBUDtBQUNIOztBQUVELFVBQUk3d0IsU0FBUyxJQUFJNndCLFlBQVksQ0FBQy9uQixNQUFiLEdBQXNCLENBQXZDLEVBQTBDO0FBQ3RDK25CLG9CQUFZLEdBQUdBLFlBQVksQ0FBQy90QixNQUFiLENBQW9CLFVBQVVrRixJQUFWLEVBQWdCO0FBQy9DLGNBQUk4b0IsSUFBSSxHQUFHOW9CLElBQUksQ0FBQ3hGLFNBQUwsQ0FBZUMsVUFBMUI7QUFDQSxpQkFBT3F1QixJQUFJLENBQUM5d0IsU0FBTCxJQUFrQitILGdEQUFBLENBQWdCK29CLElBQUksQ0FBQzl3QixTQUFyQixNQUFvQytILGdEQUFBLENBQWdCL0gsU0FBaEIsQ0FBN0Q7QUFDSCxTQUhjLENBQWY7O0FBS0EsWUFBSTZ3QixZQUFZLENBQUMvbkIsTUFBYixLQUF3QixDQUE1QixFQUErQjtBQUMzQixpQkFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFFRCxVQUFJK25CLFlBQVksQ0FBQy9uQixNQUFiLEdBQXNCLENBQTFCLEVBQTZCO0FBQ3pCLFlBQUlpb0IsVUFBVSxHQUFHRixZQUFZLENBQUN0ZCxHQUFiLENBQWlCLFVBQVV2TCxJQUFWLEVBQWdCO0FBQzlDLGlCQUFPQSxJQUFJLENBQUN4RixTQUFMLENBQWVDLFVBQWYsQ0FBMEJ6QyxTQUFqQztBQUNILFNBRmdCLENBQWpCO0FBR0EsY0FBTSxJQUFJNEIsS0FBSixDQUFVLGVBQWVtdkIsVUFBVSxDQUFDOW1CLElBQVgsQ0FBZ0IsR0FBaEIsQ0FBZixHQUFzQyxZQUF0QyxHQUFxRGhLLEdBQS9ELENBQU47QUFDSDs7QUFFRCxhQUFPNHdCLFlBQVksQ0FBQyxDQUFELENBQW5CO0FBQ0g7QUF6SUw7QUFBQTtBQUFBLGlDQTJJaUI1d0IsR0EzSWpCLEVBMklzQkQsU0EzSXRCLEVBMklpQztBQUN6QixhQUFPLEtBQUs2SSxHQUFMLENBQVMrbUIsNENBQUssQ0FBQzd2QixTQUFmLEVBQTBCRSxHQUExQixFQUErQkQsU0FBL0IsQ0FBUDtBQUNIO0FBN0lMO0FBQUE7QUFBQSxpQ0ErSWlCQyxHQS9JakIsRUErSXNCRCxTQS9JdEIsRUErSWlDO0FBQ3pCLGFBQU8sS0FBSzZJLEdBQUwsQ0FBUyttQiw0Q0FBSyxDQUFDaHRCLFNBQWYsRUFBMEIzQyxHQUExQixFQUErQkQsU0FBL0IsQ0FBUDtBQUNIO0FBakpMO0FBQUE7QUFBQSw4QkFtSmNDLEdBbkpkLEVBbUptQkQsU0FuSm5CLEVBbUo4QjtBQUN0QixhQUFPLEtBQUs2SSxHQUFMLENBQVMrbUIsNENBQUssQ0FBQzlzQixNQUFmLEVBQXVCN0MsR0FBdkIsRUFBNEJELFNBQTVCLENBQVA7QUFDSDtBQXJKTDtBQUFBO0FBQUEsK0JBdUplQyxHQXZKZixFQXVKb0JELFNBdkpwQixFQXVKK0I7QUFDdkIsYUFBTyxLQUFLNkksR0FBTCxDQUFTK21CLDRDQUFLLENBQUM1c0IsT0FBZixFQUF3Qi9DLEdBQXhCLEVBQTZCRCxTQUE3QixDQUFQO0FBQ0g7QUF6Skw7QUFBQTtBQUFBLDJCQTJKVzJ2QixNQTNKWCxFQTJKbUJxQixnQkEzSm5CLEVBMkpxQ2h4QixTQTNKckMsRUEySmdEO0FBQ3hDLFVBQUlrdEIsV0FBSjs7QUFFQSxVQUFJbmxCLCtDQUFBLENBQWVpcEIsZ0JBQWYsQ0FBSixFQUFzQztBQUNsQzlELG1CQUFXLEdBQUcsS0FBS3JrQixHQUFMLENBQVM4bUIsTUFBVCxFQUFpQnFCLGdCQUFqQixFQUFtQ2h4QixTQUFuQyxDQUFkOztBQUVBLFlBQUlrdEIsV0FBVyxJQUFJLElBQW5CLEVBQXlCO0FBQ3JCLGdCQUFNLElBQUl0ckIsS0FBSixDQUFVLDhCQUE4Qm92QixnQkFBeEMsQ0FBTjtBQUNIO0FBQ0osT0FORCxNQU1PLElBQUlqcEIsaURBQUEsQ0FBaUJpcEIsZ0JBQWpCLENBQUosRUFBd0M7QUFDM0M5RCxtQkFBVyxHQUFHOEQsZ0JBQWQ7QUFDSCxPQUZNLE1BRUE7QUFDSCxjQUFNLElBQUlwdkIsS0FBSixDQUFVLG1CQUFWLENBQU47QUFDSDs7QUFFRCxhQUFPLElBQUlzckIsV0FBSixFQUFQO0FBQ0g7QUEzS0w7QUFBQTtBQUFBLG9DQTZLb0I4RCxnQkE3S3BCLEVBNktzQ2h4QixTQTdLdEMsRUE2S2lEO0FBQzFDLGFBQU8sS0FBS2l4QixNQUFMLENBQVlyQiw0Q0FBSyxDQUFDN3ZCLFNBQWxCLEVBQTZCaXhCLGdCQUE3QixFQUErQ2h4QixTQUEvQyxDQUFQO0FBQ0Y7QUEvS0w7QUFBQTtBQUFBLG9DQWlMb0JneEIsZ0JBakxwQixFQWlMc0NoeEIsU0FqTHRDLEVBaUxpRDtBQUN6QyxhQUFPLEtBQUtpeEIsTUFBTCxDQUFZckIsNENBQUssQ0FBQ2h0QixTQUFsQixFQUE2Qm91QixnQkFBN0IsRUFBK0NoeEIsU0FBL0MsQ0FBUDtBQUNIO0FBbkxMO0FBQUE7QUFBQSxpQ0FxTGlCZ3hCLGdCQXJMakIsRUFxTG1DaHhCLFNBckxuQyxFQXFMOEM7QUFDdEMsVUFBSXdrQixRQUFKO0FBQUEsVUFBY25ELFNBQVMsR0FBRyxLQUFLNlAsb0JBQUwsQ0FBMEJ0Qiw0Q0FBSyxDQUFDOXNCLE1BQWhDLENBQTFCOztBQUVBLFVBQUlpRiwrQ0FBQSxDQUFlaXBCLGdCQUFmLENBQUosRUFBc0M7QUFDbENBLHdCQUFnQixHQUFHLEtBQUtHLFNBQUwsQ0FBZUgsZ0JBQWYsRUFBaUNoeEIsU0FBakMsQ0FBbkI7QUFDSDs7QUFFRCxVQUFJaUgsTUFBTSxHQUFHb2EsU0FBUyxDQUFDdmUsTUFBVixDQUFpQixVQUFVa0YsSUFBVixFQUFnQjtBQUMxQyxlQUFPQSxJQUFJLFlBQVlncEIsZ0JBQXZCO0FBQ0gsT0FGWSxDQUFiOztBQUlBLFVBQUkvcEIsTUFBTSxDQUFDNkIsTUFBWCxFQUFtQjtBQUNmMGIsZ0JBQVEsR0FBR3ZkLE1BQU0sQ0FBQyxDQUFELENBQWpCO0FBQ0gsT0FGRCxNQUVPO0FBQ0h1ZCxnQkFBUSxHQUFHLElBQUl3TSxnQkFBSixFQUFYO0FBQ0EzUCxpQkFBUyxDQUFDMWYsSUFBVixDQUFlNmlCLFFBQWY7QUFDSDs7QUFFRCxhQUFPQSxRQUFQO0FBQ0g7QUF4TUw7QUFBQTtBQUFBLGtDQTBNa0J3TSxnQkExTWxCLEVBME1vQ2h4QixTQTFNcEMsRUEwTStDO0FBQ3ZDLFVBQUl3a0IsUUFBSjtBQUFBLFVBQWNuRCxTQUFTLEdBQUcsS0FBSzZQLG9CQUFMLENBQTBCdEIsNENBQUssQ0FBQzVzQixPQUFoQyxDQUExQjs7QUFFQSxVQUFJK0UsK0NBQUEsQ0FBZWlwQixnQkFBZixDQUFKLEVBQXNDO0FBQ2xDQSx3QkFBZ0IsR0FBRyxLQUFLSSxVQUFMLENBQWdCSixnQkFBaEIsRUFBa0NoeEIsU0FBbEMsQ0FBbkI7QUFDSDs7QUFFRCxVQUFJLENBQUNneEIsZ0JBQWdCLENBQUN4dUIsU0FBakIsQ0FBMkJDLFVBQTNCLENBQXNDNHVCLFNBQTNDLEVBQXNEO0FBQ2xELFlBQUlwcUIsTUFBTSxHQUFHb2EsU0FBUyxDQUFDdmUsTUFBVixDQUFpQixVQUFVa0YsSUFBVixFQUFnQjtBQUMxQyxpQkFBT0EsSUFBSSxZQUFZZ3BCLGdCQUF2QjtBQUNILFNBRlksQ0FBYjs7QUFJQSxZQUFJL3BCLE1BQU0sQ0FBQzZCLE1BQVgsRUFBbUI7QUFDZjBiLGtCQUFRLEdBQUd2ZCxNQUFNLENBQUMsQ0FBRCxDQUFqQjtBQUNIO0FBQ0o7O0FBRUQsVUFBSSxDQUFDdWQsUUFBTCxFQUFlO0FBQ1hBLGdCQUFRLEdBQUcsSUFBSXdNLGdCQUFKLEVBQVg7QUFDQTNQLGlCQUFTLENBQUMxZixJQUFWLENBQWU2aUIsUUFBZjtBQUNIOztBQUVELGFBQU9BLFFBQVA7QUFDSDtBQWpPTDtBQUFBO0FBQUEsa0NBbU9rQnJrQixJQW5PbEIsRUFtT3dCbXhCLEtBbk94QixFQW1PK0I7QUFDdkIsVUFBSXJxQixNQUFNLEdBQUc7QUFBQ3NxQixVQUFFLEVBQUUsRUFBTDtBQUFTdHhCLFdBQUcsRUFBRTtBQUFkLE9BQWI7QUFBQSxVQUNJd2YsUUFBUSxHQUFHdGYsSUFBSSxDQUFDd00sS0FBTCxDQUFXLEdBQVgsQ0FEZjs7QUFHQSxVQUFJOFMsUUFBUSxDQUFDM1csTUFBVCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QjdCLGNBQU0sQ0FBQ2hILEdBQVAsR0FBYUUsSUFBYjtBQUNILE9BRkQsTUFFTztBQUNIOEcsY0FBTSxDQUFDaEgsR0FBUCxHQUFhd2YsUUFBUSxDQUFDK1IsR0FBVCxFQUFiO0FBQ0F2cUIsY0FBTSxDQUFDc3FCLEVBQVAsR0FBWTlSLFFBQVEsQ0FBQ3hWLElBQVQsQ0FBYyxHQUFkLENBQVo7O0FBRUEsWUFBSXFuQixLQUFKLEVBQVc7QUFDUHZwQixxREFBQSxDQUFXdXBCLEtBQVgsRUFBa0IsVUFBVUcsU0FBVixFQUFxQkMsUUFBckIsRUFBK0I7QUFDN0MsZ0JBQUlELFNBQVMsS0FBS3hxQixNQUFNLENBQUNzcUIsRUFBekIsRUFBNkI7QUFDekJ0cUIsb0JBQU0sQ0FBQ3NxQixFQUFQLEdBQVlHLFFBQVo7QUFDQSxxQkFBTyxJQUFQO0FBQ0g7QUFDSixXQUxEO0FBTUg7QUFDSjs7QUFFRCxhQUFPenFCLE1BQVA7QUFDSDtBQXhQTDtBQUFBO0FBQUEsbUNBMFBtQnVkLFFBMVBuQixFQTBQNkJsaUIsUUExUDdCLEVBMFB1Q3F2QixtQkExUHZDLEVBMFA0RDtBQUNwRCxVQUFJcHNCLElBQUksR0FBRyxJQUFYO0FBQUEsVUFBaUJxc0IsZUFBakI7QUFBQSxVQUFrQ0MsaUJBQWlCLEdBQUcsS0FBdEQ7O0FBRUEsVUFBR0YsbUJBQUgsRUFBd0I7QUFDcEI7QUFDQUMsdUJBQWUsR0FBRzdwQiw2Q0FBQSxDQUFhLFNBQWIsRUFBd0J6RixRQUFRLENBQUN0QyxTQUFqQyxFQUE0Q3NDLFFBQVEsQ0FBQ3JDLEdBQXJELENBQWxCO0FBQ0E0eEIseUJBQWlCLEdBQUcsS0FBS3BCLFlBQUwsQ0FBa0IvdUIsT0FBbEIsQ0FBMEJrd0IsZUFBMUIsTUFBK0MsQ0FBQyxDQUFwRTtBQUVBLGFBQUtuQixZQUFMLENBQWtCOXVCLElBQWxCLENBQXVCaXdCLGVBQXZCOztBQUVBLFlBQUlDLGlCQUFKLEVBQXVCO0FBQ25CO0FBQ0EsZUFBS3BCLFlBQUwsQ0FBa0IzbkIsTUFBbEIsR0FBMkIsQ0FBM0IsQ0FGbUIsQ0FHbkI7O0FBQ0EsZ0JBQU0sSUFBSWxILEtBQUosQ0FBVSxzQkFBc0IsS0FBSzZ1QixZQUFMLENBQWtCeG1CLElBQWxCLENBQXVCLElBQXZCLENBQWhDLENBQU47QUFDSDtBQUNKOztBQUVELFVBQUkzSCxRQUFRLElBQUl5RiwrQ0FBQSxDQUFlekYsUUFBUSxDQUFDd3ZCLE1BQXhCLENBQWhCLEVBQWlEO0FBQzdDL3BCLHNEQUFBLENBQWN6RixRQUFRLENBQUN3dkIsTUFBdkIsRUFBK0IsVUFBVTl1QixPQUFWLEVBQW1CL0MsR0FBbkIsRUFBd0I7QUFDbkQ4cEIsZ0JBQU0sQ0FBQ2dJLGNBQVAsQ0FBc0J2TixRQUF0QixFQUFnQ3ZrQixHQUFoQyxFQUFxQztBQUNqQyt4QixzQkFBVSxFQUFFLEtBRHFCO0FBRWpDQyx3QkFBWSxFQUFFLEtBRm1CO0FBR2pDcHBCLGVBQUcsRUFBRSxlQUFZO0FBQ2Isa0JBQUlxcEIsVUFBVSxHQUFHLE9BQU9qeUIsR0FBeEI7O0FBRUEsa0JBQUl1a0IsUUFBUSxDQUFDME4sVUFBRCxDQUFSLElBQXdCLElBQTVCLEVBQWtDO0FBQzlCLG9CQUFJbnFCLCtDQUFBLENBQWUvRSxPQUFmLENBQUosRUFBNkI7QUFDekIsc0JBQUltTyxVQUFVLEdBQUc1TCxJQUFJLENBQUM0c0IsYUFBTCxDQUFtQm52QixPQUFuQixFQUE0QlYsUUFBUSxDQUFDZ3ZCLEtBQXJDLENBQWpCO0FBQ0E5TSwwQkFBUSxDQUFDME4sVUFBRCxDQUFSLEdBQXVCM3NCLElBQUksQ0FBQzZzQixhQUFMLENBQW1CamhCLFVBQVUsQ0FBQ2xSLEdBQTlCLEVBQW1Da1IsVUFBVSxDQUFDb2dCLEVBQTlDLENBQXZCO0FBQ0gsaUJBSEQsTUFHTztBQUNIL00sMEJBQVEsQ0FBQzBOLFVBQUQsQ0FBUixHQUF1QjNzQixJQUFJLENBQUM2c0IsYUFBTCxDQUFtQnB2QixPQUFuQixDQUF2QjtBQUNIO0FBQ0o7O0FBRUQscUJBQU93aEIsUUFBUSxDQUFDME4sVUFBRCxDQUFmO0FBQ0g7QUFoQmdDLFdBQXJDO0FBa0JILFNBbkJEO0FBb0JIOztBQUVELFVBQUdQLG1CQUFILEVBQXdCO0FBQ3BCLGFBQUtsQixZQUFMLENBQWtCZSxHQUFsQjtBQUNIO0FBQ0o7QUF0U0w7O0FBQUE7QUFBQTtBQXlTTyxJQUFJOXVCLFFBQVEsR0FBRyxJQUFJNHRCLFFBQUosRUFBZixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOVNQO0FBQ0E7QUFFTyxJQUFNekMsTUFBYjtBQUFBO0FBQUE7QUFBQSx3QkFDbUI7QUFDWCxhQUFPLEtBQUs5ckIsS0FBTCxDQUFXMGUsU0FBbEI7QUFDSDtBQUhMO0FBQUE7QUFBQSx3QkFLa0I7QUFDVixhQUFPLEtBQUsxZSxLQUFMLENBQVdpc0IsS0FBWCxDQUFpQnNELEtBQXhCO0FBQ0g7QUFQTDs7QUFTSSxrQkFBWXZ2QixLQUFaLEVBQW1CO0FBQUE7O0FBQ2YsU0FBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBS3N3QixRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsU0FBS2hrQixJQUFMLEdBQVk7QUFDUnlTLGdCQUFVLEVBQUUsRUFESjtBQUVSYSxnQkFBVSxFQUFFO0FBRkosS0FBWjtBQUlBLFNBQUszQyxPQUFMLEdBQWUsRUFBZjtBQUNIOztBQWpCTDtBQUFBO0FBQUEsb0NBbUJvQnhSLEdBbkJwQixFQW1CeUI7QUFDakIsVUFBSUssT0FBTyxHQUFHLEtBQUt3a0IsUUFBTCxDQUFjN2tCLEdBQWQsQ0FBZDs7QUFFQSxVQUFJLENBQUNLLE9BQUwsRUFBYztBQUNWQSxlQUFPLEdBQUdELHFEQUFRLENBQUNKLEdBQUQsQ0FBbEI7QUFDQSxhQUFLNmtCLFFBQUwsQ0FBYzdrQixHQUFkLElBQXFCSyxPQUFyQjtBQUNIOztBQUVELGFBQU9BLE9BQVA7QUFDSDtBQTVCTDtBQUFBO0FBQUEsa0NBOEJrQjBZLEdBOUJsQixFQThCdUI7QUFDZixhQUFPQyxxREFBUSxDQUFDRCxHQUFELENBQWY7QUFDSDtBQWhDTDtBQUFBO0FBQUEscUNBa0NxQnBtQixJQWxDckIsRUFrQzJCO0FBQ25CLFVBQUlnUixVQUFKO0FBQUEsVUFBZ0JwUixTQUFoQjtBQUFBLFVBQ0kySSxNQUFNLEdBQUcsS0FBSzJGLElBQUwsQ0FBVXlTLFVBRHZCOztBQUdBLFVBQUlwWSxNQUFNLENBQUN2SSxJQUFELENBQU4sS0FBaUJzYixTQUFyQixFQUFnQztBQUM1QjFiLGlCQUFTLEdBQUcySSxNQUFNLENBQUN2SSxJQUFELENBQWxCO0FBQ0gsT0FGRCxNQUVPO0FBQ0hnUixrQkFBVSxHQUFHLEtBQUt6TyxRQUFMLENBQWN5dkIsYUFBZCxDQUE0Qmh5QixJQUE1QixFQUFrQyxLQUFLbXlCLE9BQXZDLENBQWI7QUFDQXZ5QixpQkFBUyxHQUFHLEtBQUsyQyxRQUFMLENBQWM2dkIsWUFBZCxDQUEyQnBoQixVQUFVLENBQUNsUixHQUF0QyxFQUEyQ2tSLFVBQVUsQ0FBQ29nQixFQUF0RCxDQUFaO0FBQ0E3b0IsY0FBTSxDQUFDdkksSUFBRCxDQUFOLEdBQWVKLFNBQWY7QUFDSDs7QUFFRCxhQUFPQSxTQUFQO0FBQ0g7QUEvQ0w7QUFBQTtBQUFBLHFDQWlEcUJJLElBakRyQixFQWlEMkI7QUFDbkIsVUFBSWdSLFVBQUo7QUFBQSxVQUFnQnZPLFNBQWhCO0FBQUEsVUFDSThGLE1BQU0sR0FBRyxLQUFLMkYsSUFBTCxDQUFVc1QsVUFEdkI7O0FBR0EsVUFBSWpaLE1BQU0sQ0FBQ3ZJLElBQUQsQ0FBTixLQUFpQnNiLFNBQXJCLEVBQWdDO0FBQzVCN1ksaUJBQVMsR0FBRzhGLE1BQU0sQ0FBQ3ZJLElBQUQsQ0FBbEI7QUFDSCxPQUZELE1BRU87QUFDSGdSLGtCQUFVLEdBQUcsS0FBS3pPLFFBQUwsQ0FBY3l2QixhQUFkLENBQTRCaHlCLElBQTVCLEVBQWtDLEtBQUtteUIsT0FBdkMsQ0FBYjtBQUNBMXZCLGlCQUFTLEdBQUcsS0FBS0YsUUFBTCxDQUFjOHZCLFlBQWQsQ0FBMkJyaEIsVUFBVSxDQUFDbFIsR0FBdEMsRUFBMkNrUixVQUFVLENBQUNvZ0IsRUFBdEQsQ0FBWjtBQUNBN29CLGNBQU0sQ0FBQ3ZJLElBQUQsQ0FBTixHQUFleUMsU0FBZjtBQUNIOztBQUVELGFBQU9BLFNBQVA7QUFDSDtBQTlETDtBQUFBO0FBQUEsa0NBZ0VrQnpDLElBaEVsQixFQWdFd0I7QUFDaEIsVUFBSWdSLFVBQUo7QUFBQSxVQUFnQnJPLE1BQWhCO0FBQUEsVUFDSTRGLE1BQU0sR0FBRyxLQUFLc1csT0FEbEI7O0FBR0EsVUFBSXRXLE1BQU0sQ0FBQ3ZJLElBQUQsQ0FBTixLQUFpQnNiLFNBQXJCLEVBQWdDO0FBQzVCM1ksY0FBTSxHQUFHNEYsTUFBTSxDQUFDdkksSUFBRCxDQUFmO0FBQ0gsT0FGRCxNQUVPO0FBQ0hnUixrQkFBVSxHQUFHLEtBQUt6TyxRQUFMLENBQWN5dkIsYUFBZCxDQUE0Qmh5QixJQUE1QixFQUFrQyxLQUFLbXlCLE9BQXZDLENBQWI7QUFDQXh2QixjQUFNLEdBQUcsS0FBS0osUUFBTCxDQUFjK3ZCLFlBQWQsQ0FBMkJ0aEIsVUFBVSxDQUFDbFIsR0FBdEMsRUFBMkNrUixVQUFVLENBQUNvZ0IsRUFBdEQsQ0FBVDtBQUNBN29CLGNBQU0sQ0FBQ3ZJLElBQUQsQ0FBTixHQUFlMkMsTUFBZjtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSDtBQTdFTDtBQUFBO0FBQUEsOEJBK0VjO0FBQ04sV0FBS2YsS0FBTCxHQUFhLElBQWI7QUFDSDtBQWpGTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBTyxJQUFJNnRCLEtBQUssR0FBRztBQUNmOXNCLFFBQU0sRUFBRSxDQURPO0FBRWZFLFNBQU8sRUFBRSxDQUZNO0FBR2ZqRCxXQUFTLEVBQUUsQ0FISTtBQUlmNkMsV0FBUyxFQUFFO0FBSkksQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVA7QUFDQTtBQUVPLFNBQVM2c0Isa0JBQVQsQ0FBNEJudUIsSUFBNUIsRUFBa0M7QUFDckMsT0FBSzBzQixLQUFMLEdBQWFqbUIsNENBQUEsQ0FBWSxLQUFLdEYsVUFBakIsRUFBNkJuQixJQUE3QixDQUFiO0FBQ0FvQixvREFBUSxDQUFDdXJCLGNBQVQsQ0FBd0IsSUFBeEIsRUFBOEIsS0FBS0QsS0FBbkMsRUFBMEMsSUFBMUM7QUFDSDtBQUVNLElBQU13QixPQUFiLEdBQ0ksaUJBQVlsdUIsSUFBWixFQUFrQjtBQUFBOztBQUNkbXVCLG9CQUFrQixDQUFDdnRCLElBQW5CLENBQXdCLElBQXhCLEVBQThCWixJQUE5QjtBQUNILENBSEwsQzs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVN0QixTQUFULENBQW1CRyxJQUFuQixFQUF5QjtBQUNyQixXQUFTdXlCLGFBQVQsQ0FBdUJwd0IsUUFBdkIsRUFBaUM7QUFDN0IsV0FBT3lGLDRDQUFBLENBQVk7QUFDZi9ILGVBQVMsRUFBRUc7QUFESSxLQUFaLEVBRUptQyxRQUZJLENBQVA7QUFHSDs7QUFFRCxTQUFPO0FBQ0h2QyxhQUFTLEVBQUUsbUJBQVVFLEdBQVYsRUFBZTR2QixNQUFmLEVBQXVCdnRCLFFBQXZCLEVBQWlDO0FBQ3hDLGFBQU92QyxVQUFTLENBQUNFLEdBQUQsRUFBTTR2QixNQUFOLEVBQWM2QyxhQUFhLENBQUNwd0IsUUFBRCxDQUEzQixDQUFoQjtBQUNILEtBSEU7QUFJSE0sYUFBUyxFQUFFLG1CQUFVM0MsR0FBVixFQUFlNHZCLE1BQWYsRUFBdUJ2dEIsUUFBdkIsRUFBaUM7QUFDeEMsYUFBT00sVUFBUyxDQUFDM0MsR0FBRCxFQUFNNHZCLE1BQU4sRUFBYzZDLGFBQWEsQ0FBQ3B3QixRQUFELENBQTNCLENBQWhCO0FBQ0gsS0FORTtBQU9IVSxXQUFPLEVBQUUsaUJBQVUvQyxHQUFWLEVBQWU0dkIsTUFBZixFQUF1QnZ0QixRQUF2QixFQUFpQztBQUN0QyxhQUFPVSxRQUFPLENBQUMvQyxHQUFELEVBQU00dkIsTUFBTixFQUFjNkMsYUFBYSxDQUFDcHdCLFFBQUQsQ0FBM0IsQ0FBZDtBQUNILEtBVEU7QUFVSFEsVUFBTSxFQUFFLGdCQUFVN0MsR0FBVixFQUFlNHZCLE1BQWYsRUFBdUJ2dEIsUUFBdkIsRUFBaUM7QUFDckMsYUFBT1EsT0FBTSxDQUFDN0MsR0FBRCxFQUFNNHZCLE1BQU4sRUFBYzZDLGFBQWEsQ0FBQ3B3QixRQUFELENBQTNCLENBQWI7QUFDSDtBQVpFLEdBQVA7QUFjSDs7QUFFRCxTQUFTdkMsVUFBVCxDQUFtQkUsR0FBbkIsRUFBd0I0dkIsTUFBeEIsRUFBZ0N2dEIsUUFBaEMsRUFBMEM7QUFDdEMsTUFBSTRxQixXQUFXLEdBQUdrRCxnREFBTyxDQUFDdUMsYUFBUixDQUFzQjF5QixHQUF0QixFQUEyQjR2QixNQUEzQixFQUFtQ3Z0QixRQUFuQyxDQUFsQjtBQUNBSSxvREFBUSxDQUFDQyxpQkFBVCxDQUEyQjFDLEdBQTNCLEVBQWdDaXRCLFdBQWhDO0FBQ0EsU0FBT0EsV0FBUDtBQUNIOztBQUVELFNBQVN0cUIsVUFBVCxDQUFtQjNDLEdBQW5CLEVBQXdCNHZCLE1BQXhCLEVBQWdDdnRCLFFBQWhDLEVBQTBDO0FBQ3RDLE1BQUk0cUIsV0FBVyxHQUFHa0QsZ0RBQU8sQ0FBQ3dDLGFBQVIsQ0FBc0IzeUIsR0FBdEIsRUFBMkI0dkIsTUFBM0IsRUFBbUN2dEIsUUFBbkMsQ0FBbEI7QUFDQUksb0RBQVEsQ0FBQ0csaUJBQVQsQ0FBMkI1QyxHQUEzQixFQUFnQ2l0QixXQUFoQztBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTcHFCLE9BQVQsQ0FBZ0I3QyxHQUFoQixFQUFxQjR2QixNQUFyQixFQUE2QnZ0QixRQUE3QixFQUF1QztBQUNuQyxNQUFJNHFCLFdBQVcsR0FBR2tELGdEQUFPLENBQUN5QyxVQUFSLENBQW1CNXlCLEdBQW5CLEVBQXdCNHZCLE1BQXhCLEVBQWdDdnRCLFFBQWhDLENBQWxCO0FBQ0FJLG9EQUFRLENBQUNLLGNBQVQsQ0FBd0I5QyxHQUF4QixFQUE2Qml0QixXQUE3QjtBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTbHFCLFFBQVQsQ0FBaUIvQyxHQUFqQixFQUFzQjR2QixNQUF0QixFQUE4QnZ0QixRQUE5QixFQUF3QztBQUNwQyxNQUFJNHFCLFdBQVcsR0FBR2tELGdEQUFPLENBQUMwQyxXQUFSLENBQW9CN3lCLEdBQXBCLEVBQXlCNHZCLE1BQXpCLEVBQWlDdnRCLFFBQWpDLENBQWxCO0FBQ0FJLG9EQUFRLENBQUNPLGVBQVQsQ0FBeUJoRCxHQUF6QixFQUE4Qml0QixXQUE5QjtBQUNBLFNBQU9BLFdBQVA7QUFDSDs7QUFFRCxTQUFTNkYsV0FBVCxDQUFxQnZPLFFBQXJCLEVBQStCO0FBQzNCLFNBQU9BLFFBQVEsWUFBWTlqQixvREFBM0I7QUFDSDs7QUFFRCxTQUFTc3lCLFdBQVQsQ0FBcUJ4TyxRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVluaEIsb0RBQTNCO0FBQ0g7O0FBRUQsU0FBUzR2QixRQUFULENBQWtCek8sUUFBbEIsRUFBNEI7QUFDeEIsU0FBT0EsUUFBUSxZQUFZNkssOENBQTNCO0FBQ0g7O0FBRUQsU0FBUzZELFNBQVQsQ0FBbUIxTyxRQUFuQixFQUE2QjtBQUN6QixTQUFPQSxRQUFRLFlBQVlnTCxnREFBM0I7QUFDSDs7QUFFRCxTQUFTL3VCLE1BQVQsQ0FBZ0I4SSxRQUFoQixFQUEwQnNtQixNQUExQixFQUFrQ3Z0QixRQUFsQyxFQUE0QztBQUN4QyxNQUFJZ2pCLE9BQU8sR0FBRzFoQixRQUFRLENBQUMyaEIsYUFBVCxDQUF1QmhjLFFBQXZCLENBQWQ7QUFDQSxNQUFJNHBCLElBQUksR0FBRy9DLGdEQUFPLENBQUN1QyxhQUFSLENBQXNCLE1BQXRCLEVBQThCOUMsTUFBOUIsRUFBc0M5bkIsNENBQUEsQ0FBWTtBQUN6RHpILFlBQVEsRUFBRWdsQixPQUFPLENBQUNsaUI7QUFEdUMsR0FBWixFQUU5Q2QsUUFGOEMsQ0FBdEMsQ0FBWDtBQUdBLE1BQUk4bUIsSUFBSSxHQUFHLElBQUkrSixJQUFKLEVBQVg7QUFFQWh4Qiw2REFBQSxDQUEyQm1qQixPQUEzQjtBQUNBOEQsTUFBSSxDQUFDaGhCLE9BQUw7QUFDQWdoQixNQUFJLENBQUN2RSxNQUFMLENBQVlTLE9BQVo7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2xvdCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuXHJcbkBjb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc2xvdCdcclxufSlcclxuY2xhc3MgU2xvdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gdGhpcy4kJHBhcmVudC5zbG90cztcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBzbG90c1t0aGlzLnByb3BzLm5hbWVdO1xyXG5cclxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3ID0gbmV3IFJlbmRlcmVyKHRoaXMuJCRwYXJlbnQpLnJlbmRlcih0ZW1wbGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8vIGdsb2JhbCBldmVudHNcclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wZXJ0eUNoYW5nZWQ6IG5ldyBNZXNzYWdlKCksXHJcbiAgICB0cmFuc2xhdGVDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgLy8gbm90IGZvdW5kXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHJlZ2lzdGVyIHNhbWUgZXZlbnQgaGFuZGxlciBtb3JlIHRoYW4gb25jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGRhdGEsIHNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgLy8gYXR0YWNoIGV2ZW50IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmNhbGwoc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWJpbmQtaHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KHZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20taWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCF2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLW1vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1WaWV3cyA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbS1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSB2ZWxtLmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgdGFrZSBvdmVyIGxpbmsgZnVuY3Rpb24gZm9yIHJlbGF0ZWQgdmlydHVhbCBlbGVtZW50IG5vZGUsIG9uTGluayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG0tcmVwZWF0Jyk7XG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlRWxlbWVudHNCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBpdGVtVmlld3MgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1WaWV3ID0gc2VsZi5nZXRWaWV3RnJvbUJ1ZmZlcihzZWxmLml0ZW1WaWV3cywgaXRlbSk7XG5cbiAgICAgICAgICAgIGlmICghaXRlbVZpZXcpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9jYWxzID0ge307XG4gICAgICAgICAgICAgICAgbG9jYWxzWycka2V5J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzWyckaW5kZXgnXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbc2VsZi5pdGVtRXhwXSA9IGl0ZW07XG4gICAgICAgICAgICAgICAgaXRlbVZpZXcgPSBzZWxmLiRyZW5kZXIoc2VsZi5pdGVtVGVtcGxhdGUsIGxvY2Fscyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYuc2V0Vmlld1RvQnVmZmVyKGl0ZW1WaWV3cywgaXRlbSwgaXRlbVZpZXcpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaXRlbVZpZXcuY29udGVudCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzLmZvckVhY2goZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAodmlldykge1xuICAgICAgICAgICAgICAgIHZpZXcuZGVzdHJveSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuaXRlbVZpZXdzID0gaXRlbVZpZXdzO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICBnZXRWaWV3RnJvbUJ1ZmZlcihidWZmZXIsIGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciB2aWV3O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcblxuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmlldyA9IGxpc3Quc2hpZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyLmRlbGV0ZShkYXRhSXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBzZXRWaWV3VG9CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSwgdmlldykge1xuICAgICAgICB2YXIgbGlzdDtcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3QgPSBbXTtcbiAgICAgICAgICAgIGJ1ZmZlci5zZXQoZGF0YUl0ZW0sIGxpc3QpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKHZpZXcpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5pdGVtVmlld3MuZm9yRWFjaCgobGlzdCkgPT4gbGlzdC5mb3JFYWNoKHZpZXcgPT4gdmlldy5kZXN0cm95KCkpKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiAmJiB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zaG93J1xufSlcbmNsYXNzIFNob3dEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KCF2YWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1jaGVja2VkJ1xufSlcbmNsYXNzIENoZWNrZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdjaGVja2VkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1kaXNhYmxlZCdcbn0pXG5jbGFzcyBEaXNhYmxlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2Rpc2FibGVkJyk7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vY2hlY2tlZCdcbmV4cG9ydCAqIGZyb20gJy4vZGlzYWJsZWQnXG5leHBvcnQgKiBmcm9tICcuL3JlYWRvbmx5J1xuZXhwb3J0ICogZnJvbSAnLi9zZWxlY3RlZCciLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tcmVhZG9ubHknXG59KVxuY2xhc3MgUmVhZG9ubHlEaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdyZWFkb25seScpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIHNlbGVjdG9yOiAnbS1zZWxlY3RlZCdcbn0pXG5jbGFzcyBTZWxlY3RlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3NlbGVjdGVkJyk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuXG5leHBvcnQgY2xhc3MgU3RhdGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKGtleSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmtleSA9IGtleTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5zZXRBdHRyaWJ1dGUodGhpcy5rZXksICcnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcy1ldmVuJ1xyXG59KVxyXG5jbGFzcyBDbGFzc0V2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzLW9kZCdcclxufSlcclxuY2xhc3MgQ2xhc3NPZGREaXJlY3RpdmUgZXh0ZW5kcyBDbGFzc0RpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGV2YWwoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uLy4uL2RvbSc7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3MnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbGFzc0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKG5ld0NsYXNzLCBvbGRDbGFzcykge1xyXG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9sZENsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyh0aGlzLiRlbGVtZW50LCBvbGRDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld0NsYXNzKSB7XHJcbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLiRlbGVtZW50LCBuZXdDbGFzcy5qb2luKCcgJykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9jbGFzcyc7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3MtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vY2xhc3Mtb2RkJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtZXZlbic7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUtb2RkJzsiLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXN0eWxlLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIFN0eWxlRXZlbkRpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tc3R5bGUtb2RkJ1xyXG59KVxyXG5jbGFzcyBTdHlsZU9kZERpcmVjdGl2ZSBleHRlbmRzIFN0eWxlRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kZXZhbCgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uLy4uL3V0aWxzJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3R5bGUnXG59KVxuZXhwb3J0IGNsYXNzIFN0eWxlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZShuZXdTdHlsZSwgb2xkU3R5bGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIGlmIChvbGRTdHlsZSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChvbGRTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSAnJztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzT2JqZWN0KG5ld1N0eWxlKSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChuZXdTdHlsZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBzZWxmLiRlbGVtZW50LnN0eWxlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC1kZWZhdWx0J1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtd2hlbiciLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC1kZWZhdWx0J1xufSlcbmNsYXNzIFN3aXRjaERlZmF1bHREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ20tc3dpdGNoLWRlZmF1bHQnKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnbS1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5tYXRjaERlZmF1bHQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaC13aGVuJ1xufSlcbmNsYXNzIFN3aXRjaFdoZW5EaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbS1zd2l0Y2gtd2hlbicpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdtLXN3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLmNoYW5nZWQub24oKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIG1hdGNoZWQgPSB0aGlzLnN3aXRjaEN0cmwudmFsdWUgPT09IHRoaXMudmFsdWU7XG5cbiAgICAgICAgaWYodGhpcy5tYXRjaGVkICE9IG1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hlZCA9IG1hdGNoZWQ7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLnBsdXNNYXRjaCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWludXNNYXRjaCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghbWF0Y2hlZCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3dpdGNoJ1xufSlcbmNsYXNzIFN3aXRjaERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQgPSAwO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQgPSBuZXcgTWVzc2FnZSgpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGFuZ2VkLmZpcmUoKTtcbiAgICB9XG5cbiAgICBwbHVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCsrO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIG1pbnVzTWF0Y2goKSB7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudC0tO1xuICAgICAgICB0aGlzLmNoZWNrRGVmYXVsdCgpO1xuICAgIH1cblxuICAgIGNoZWNrRGVmYXVsdCgpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRNYXRjaGVkID0gdGhpcy5tYXRjaENvdW50IDw9IDA7XG5cbiAgICAgICAgaWYgKHRoaXMuZGVmYXVsdE1hdGNoZWQgIT09IGRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRNYXRjaGVkID0gZGVmYXVsdE1hdGNoZWQ7XG4gICAgICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdC5maXJlKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiXG5mdW5jdGlvbiBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoZWxtLmNoaWxkTm9kZXMsIDApO1xufVxuXG5mdW5jdGlvbiBjbGVhckNoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgZWxtLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0pO1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsbSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFbGVtZW50c0JldHdlZW4oc3RhcnRFbG0sIGVuZEVsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gc3RhcnRFbG0ucGFyZW50Tm9kZTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IGdldENoaWxkcmVuT2ZFbGVtZW50KHBhcmVudE5vZGUpO1xuXG4gICAgY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBpZiAoY2hpbGQucHJldmlvdXNTaWJsaW5nID09PSBzdGFydEVsbSAmJiBjaGlsZCAhPT0gZW5kRWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hpbGQubmV4dFNpYmxpbmcgPT09IGVuZEVsbSAmJiBjaGlsZCAhPT0gc3RhcnRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZEVsZW1lbnQoZWxtLCBuZXdFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudE5vZGUubGFzdENoaWxkID09PSBlbG0pIHtcbiAgICAgICAgcGFyZW50Tm9kZS5hcHBlbmRDaGlsZChuZXdFbG0pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtLm5leHRTaWJsaW5nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZENsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LmFkZChjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5hZGQoY2xzKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICBpZiAoY3VyLmluZGV4T2YoJyAnICsgY2xzICsgJyAnKSA8IDApIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgKGN1ciArIGNscykudHJpbSgpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LnJlbW92ZShjbHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghZWxtLmNsYXNzTGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgdmFyIHRhciA9ICcgJyArIGNscyArICcgJztcbiAgICAgICAgd2hpbGUgKGN1ci5pbmRleE9mKHRhcikgPj0gMCkge1xuICAgICAgICAgICAgY3VyID0gY3VyLnJlcGxhY2UodGFyLCAnICcpO1xuICAgICAgICB9XG4gICAgICAgIGN1ciA9IGN1ci50cmltKCk7XG4gICAgICAgIGlmIChjdXIpIHtcbiAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgY3VyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRTdHlsZVN0cmluZyhjc3MpIHtcbiAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICAgIHZhciBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbmV4cG9ydCB7XG4gICAgYWRkQ2xhc3MsXG4gICAgcmVtb3ZlQ2xhc3MsXG4gICAgYXBwZW5kRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50LFxuICAgIHJlcGxhY2VFbGVtZW50LFxuICAgIGdldENoaWxkcmVuT2ZFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnRzQmV0d2VlbixcbiAgICBjbGVhckNoaWxkcmVuT2ZFbGVtZW50LFxuICAgIGxvYWRTdHlsZVN0cmluZ1xufTsiLCJpbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5cbmNsYXNzIEFjY2Vzc29yIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGV4cCkge1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5leHAgPSBleHA7XG4gICAgICAgIHRoaXMuY2hpbGRyZW4gPSB7fTtcbiAgICB9XG5cbiAgICBjcmVhdGVDaGlsZChrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5jaGlsZHJlbltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRyZW5ba2V5XTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBbmFseXNlciB7XG4gICAgY29uc3RydWN0b3IocGFyc2VyKSB7XG4gICAgICAgIHRoaXMucGFyc2VyID0gcGFyc2VyIHx8IHtcbiAgICAgICAgICAgIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHBcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmFjY2Vzc29yW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3Jba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcltrZXldO1xuICAgIH1cblxuICAgIGFuYWx5c2UoZXhwKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VQcm9ncmFtKHByb2dyYW0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdGhpcy5hY2Nlc3NvciA9IHt9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICBwcm9ncmFtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yO1xuICAgIH1cblxuICAgIGFuYWx5c2VOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IG51bGw7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTGl0ZXJhbChub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGFuYWx5c2VFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMb2dpYyhsb2dpYykge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGxvZ2ljLnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VVbmFyeSh1bmFyeSkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHVuYXJ5LmFyZyk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUNhbGwoY2FsbCkge1xuICAgICAgICBjYWxsLmFyZ3MuZm9yRWFjaChhcmcgPT4gdGhpcy5hbmFseXNlTm9kZShhcmcpKTtcblxuICAgICAgICBpZiAoIWNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNhbGwuY2FsbGVlLCB7IGNhbGxlZTogdHJ1ZSB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1lbWJlci5wcm9wZXJ0eS50eXBlID09PSBBU1QuTGl0ZXJhbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQobWVtYmVyLnByb3BlcnR5LnZhbHVlLCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgIHBhcmVudDogcGFyZW50LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGFuYWx5c2VJZGVudGlmaWVyKGlkZW50aWZpZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChpZGVudGlmaWVyKSxcbiAgICAgICAgICAgIGNhbGxlZSA9IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWU7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNhbGxlZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxpdGVyYWwobGl0ZXJhbCwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGxpdGVyYWwpO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFuYWx5c2VQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUocHJvcC52YWx1ZSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZU9iamVjdChvYmopIHtcbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHRoaXMuYW5hbHlzZU5vZGUoaXRlbSkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBcnJheShhcnIpIHtcbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2UoY2hpbGQpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNULCBOdWxsRXhwcmVzc2lvbk5vZGUgfSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcbmltcG9ydCB7IHBhcnNlRXhwIH0gIGZyb20gJy4vZXhwLWFwaSc7XG5cbnZhciBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIGFzc2lnbkludGVyY2VwdG9yOiBudWxsLFxuICAgIGxvY2FsczogbnVsbFxufTtcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgICAgIHRoaXMucGFyc2VyID0gc2NvcGUuJHBhcnNlciB8fCB7cGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cH07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0pIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKTtcbiAgICB9XG5cbiAgICBhc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG5cbiAgICAgICAgaWYgKHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBleHByZXNzaW9uID0gdGhpcy5wcm9ncmFtLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGV4cHJlc3Npb24uY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGFzc2lnbm1lbnQgPSBleHByZXNzaW9uLmNoaWxkTm9kZXNbMF07XG5cbiAgICAgICAgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb24pIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50Lm9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50Lm9iamVjdCkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eUtleTogIWFzc2lnbm1lbnQuY29tcHV0ZWRcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5wcm9wZXJ0eSkpKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuSWRlbnRpZmllcikge1xuICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50KTtcblxuICAgICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zY29wZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0aGlzLnNjb3BlLCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU1lbWJlcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LmxlZnQsIHtcbiAgICAgICAgICAgIGFzc2lnbm1lbnRMZWZ0OiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcblxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgIHRhcmdldC5vYmpbdGFyZ2V0LnByb3BdID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQub2JqLCB0YXJnZXQucHJvcCwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24udGVzdCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUobG9naWMucmlnaHQpO1xuXG4gICAgICAgIHN3aXRjaCAobG9naWMub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJyYmJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3x8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJiYgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LnJpZ2h0KTtcblxuICAgICAgICAvLyAnKycsICctJywgJyonLCAnLycsICclJywgJzwnLCAnPicsICc8PScsICc+PScsICc9PScsICchPScsICc9PT0nLCAnIT09J1xuICAgICAgICBzd2l0Y2ggKGJpbmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICsgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAtIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcqJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC8gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyUnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAlIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPCByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID4gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPD0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPj0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz09PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgIT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdCxcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUodW5hcnkuYXJnKTtcblxuICAgICAgICBzd2l0Y2ggKHVuYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IC12YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyEnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICF2YWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHRoaXMuZXZhbHVhdGVOb2RlKGFyZykpO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnBhcnNlci5yZXNvbHZlRmlsdGVyKGNvbnRleHQucHJvcCk7XG5cbiAgICAgICAgICAgIGlmKGZpbHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGaWx0ZXIgXCInICsgY29udGV4dC5wcm9wICsgJ1wiIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmaWx0ZXIudHJhbnNmb3JtLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAob2JqID09IG51bGwgJiYgKHRoaXMub3B0aW9ucy5hbGxvd051bGwgfHwgbWVtYmVyLm9iamVjdC5hbGxvd051bGwpKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICB0YXJnZXROb2RlOiBtZW1iZXIub2JqZWN0LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLFxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zY29wZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHQudGFyZ2V0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5hc3NpZ25tZW50TGVmdCB8fCBjb250ZXh0LmNhbGxlZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBwcm9wOiBpZGVudGlmaWVyLm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgdGhpcy5vcHRpb25zLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5vcHRpb25zLmxvY2Fsc1tpZGVudGlmaWVyLm5hbWVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxpdGVyYWwobGl0ZXJhbCkge1xuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLnZhbHVlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZU9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICB2YXIgZGVmID0gdGhpcy5ldmFsdWF0ZU5vZGUoaXRlbSk7XG4gICAgICAgICAgICByZXN1bHRbZGVmLmtleV0gPSBkZWYudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG59IiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBFeHBQYXJzZXIgfSBmcm9tICcuL2V4cC1wYXJzZXInO1xuXG5mdW5jdGlvbiBsZXhFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBMZXhlcigpLmxleChleHApO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cFBhcnNlcihuZXcgRXhwTGV4ZXIoKSkucGFyc2UoZXhwKTtcbn1cblxuZXhwb3J0IHsgbGV4RXhwLCBwYXJzZUV4cCB9OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgRXhwQnVpbGRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICBidWlsZChub2RlKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTWVtYmVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkSWRlbnRpZmllcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZExpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBidWlsZEFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5idWlsZChhc3NpZ25tZW50LmxlZnQpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH09ezF9JywgdGFyZ2V0LCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gdGhpcy5idWlsZChjb25kaXRpb24udGVzdCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGUgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB2YXIgY29uc2VxdWVudCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0/ezF9OnsyfScsIHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYnVpbGRMb2dpYyhsb2dpYykge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBsb2dpYy5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmJ1aWxkKGJpbmFyeS5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgYmluYXJ5Lm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZFVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQodW5hcnkuYXJnKTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9JywgdW5hcnkub3BlcmF0b3IsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENhbGwoY2FsbCkge1xuICAgICAgICB2YXIgcmVzID0gJycsIGFyZ1ZhbHVlcyA9IGNhbGwuYXJncy5tYXAoYXJnID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBmbiA9IHRoaXMuYnVpbGQoY2FsbC5jYWxsZWUpO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzID0gYXJnVmFsdWVzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJlcyArPSAnIHwgJyArIGZuO1xuXG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgKz0gJzonICsgYXJnVmFsdWVzLmpvaW4oJzonKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHV0aWxzLmZvcm1hdCgnezB9KHsxfSknLCBmbiwgYXJnVmFsdWVzLmpvaW4oJywgJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCBwcm9wcy5qb2luKCcsICcpKTtcbiAgICB9XG5cbiAgICBidWlsZEFycmF5KGFycikge1xuICAgICAgICB2YXIgaXRlbXMgPSBhcnIuY2hpbGROb2Rlcy5tYXAoY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdbezB9XScsIGl0ZW1zLmpvaW4oJywnKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9QRVJBVE9SUyB9IGZyb20gJy4vZXhwLW9wZXJhdG9ycyc7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xuICAgICAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGlzKGNoLCBjaGFycykge1xuICAgICAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xuICAgIH1cblxuICAgIHBlZWsoaSkge1xuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc051bWJlcihjaCkge1xuICAgICAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgaXNXaGl0ZXNwYWNlKGNoKSB7XG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxuICAgICAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyQ29udGludWUoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcbiAgICB9XG5cbiAgICBjb2RlUG9pbnRBdChjaCkge1xuICAgICAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbiAgICB9XG5cbiAgICBwZWVrTXVsdGljaGFyKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cblxuICAgIGlzRXhwT3BlcmF0b3IoY2gpIHtcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xuICAgIH1cblxuICAgIHJlYWROdW1iZXIoKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkSWRlbnQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU3RyaW5nKHF1b3RlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIE9QRVJBVE9SUyA9IHt9O1xuXG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pOyIsImltcG9ydCB7XG4gICAgQVNULFxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSxcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUsXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSxcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcbiAgICBJZGVudGlmaWVyTm9kZSxcbiAgICBMaXRlcmFsTm9kZSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXG4gICAgTWVtYmVyRXhwcmVzc2lvbk5vZGUsXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUsXG4gICAgUHJvZ3JhbU5vZGUsXG4gICAgUHJvcGVydHlOb2RlLFxuICAgIFVuYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxufSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICAgICAnIG9mIHRoZSBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10gc3RhcnRpbmcgYXQgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHRva2VuLmluZGV4KSArICddLicpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvZ3JhbSgpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgICAgIGV4cC5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGZpbHRlckNoYWluKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xuICAgIH1cblxuICAgIGFzc2lnbm1lbnQoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGVybmFyeSgpIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xuICAgICAgICB2YXIgY29uc2VxdWVudDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxPUigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbG9naWNhbEFORCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBlcXVhbGl0eSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHJlbGF0aW9uYWwoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgYWRkaXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbXVsdGlwbGljYXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICB1bmFyeSgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW1hcnkoKSB7XG4gICAgICAgIHZhciBwcmltYXJ5O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKTtcblxuICAgICAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmltYXJ5O1xuICAgIH1cblxuICAgIGZpbHRlcihiYXNlRXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICAgICAgfSkuam9pbignLicpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0YW50KCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhcnJheURlY2xhcmF0aW9uKCkge1xuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIG9iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgY29uc3VtZShlMSkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHBlZWtUb2tlbigpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG4gICAgfVxuXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xuICAgIH1cblxuICAgIHBlZWtBaGVhZChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhwZWN0KGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1sZXhlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ldmFsdWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XG5cbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgICAgICBzdXBlcihBU1QuTWVtYmVyRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5raW5kID0gJ2luaXQnO1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYXJnKSB7XG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnOyIsImV4cG9ydCBjbGFzcyBEZWxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzY29wZSkge1xuICAgICAgICBpZih0aGlzLmRlbGF5SWQgIT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSk7XG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheUlkKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Byb3h5JztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXZhbHVhdG9yLCBBbmFseXNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQgeyBXYXRjaGVyIH0gZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCB7IERlbGF5ZXIgfSBmcm9tICcuL2RlbGF5ZXInO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXROZXdWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDb2xsZWN0aW9uQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUNoYW5nZWQgfHwgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBub3RpZnkoc2NvcGUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5uZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkID0gdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlLCB7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZDogY29sbGVjdGlvbkNoYW5nZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NvcnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy53YXRjaGVyID0gbmV3IFdhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IG5ldyBBbmFseXNlcihzY29wZS4kcGFyc2VyKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnksIDE2KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7IGFsbG93TnVsbDogdHJ1ZSwgbG9jYWxzOiBsb2NhbHMgfSk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmV4cCkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBldmFsdWF0b3IuZXZhbHVhdGUoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZXMgPT09IHNlbGYuc2NvcGUgJiYgbG9jYWxzICYmIGxvY2Fsc1trZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlcyA9IGxvY2FscztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2ggPSBzZWxmLndhdGNoZXIud2F0Y2godmFsdWVzLCBrZXksIGZ1bmN0aW9uIChhcmdzKSB7XG4gICAgICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIHdhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4sIGFyZ3MuZGF0YS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7IGFsbG93TnVsbDogdHJ1ZSwgbG9jYWxzOiBsb2NhbHMgfSk7XG4gICAgICAgIHZhciB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XG4gICAgICAgIHZhciB1bndhdGNoRXhwID0gdGhpcy53YXRjaChleHAsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh1bndhdGNoUHJvcHMgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHVud2F0Y2hQcm9wcy5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICAgICAgaGFuZGxlci5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9LCBsb2NhbHMpO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCkpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHApO1xuXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QoY29sbGVjdGlvbikgfHwgdXRpbHMuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoZXIud2F0Y2goY29sbGVjdGlvbiwgJyonLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bndhdGNoRXhwLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgJiYgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLndhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuLy8gT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuLy8gICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbi8vIH07XG5cbmZ1bmN0aW9uIGlzUHJveHkocHJveHkpIHtcbiAgICByZXR1cm4gdXRpbHMuaXNPYmplY3QocHJveHkpICYmIHByb3h5W2lzUHJveHlTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXQocHJveHkpIHtcbiAgICByZXR1cm4gaXNQcm94eShwcm94eSkgPyBwcm94eVt0YXJnZXRTeW1ib2xdIDogcHJveHk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm94eSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkgJiYgIWlzUHJveHkodmFsdWUpKSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBtYWtlUHJveHkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3h5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gaXNQcm94eVN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG59XG5cbmZ1bmN0aW9uIHNldFByb3h5KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXG4gICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcblxuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtYWtlUHJveHkodmFsdWUpO1xuICAgICAgICBldmVudHMucHJvcGVydHlDaGFuZ2VkLmZpcmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBpc1Byb3h5LFxuICAgIGdldFRhcmdldCxcbiAgICBoYW5kbGVyXG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQgPSBldmVudHMucHJvcGVydHlDaGFuZ2VkLm9uKGUgPT4gdGhpcy5oYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZS5kYXRhKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZGF0YS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGRhdGEua2V5LCBkYXRhKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgLy8gaXMgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGxvZ2ljYWwgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmxvZ2ljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IGZhbHNlO1xuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0ZXh0KTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5wdXNoKGV4cCk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naWNhbCB8fCB0aGlzLmFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHZhciBzZWdtZW50LCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLmNyZWF0ZUV4cHJlc3Npb24obWF0Y2hbMV0pKTtcblxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50IHx8IHRoaXMubG9naWNhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC53YXRjaCh0aGlzLnNjb3BlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUobG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAoY3VyLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKSB8fCAnJyk7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24odmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc1swXS5hc3NpZ24odGhpcy5zY29wZSwgdmFsdWUsIGxvY2Fscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24gPT09IGF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgdmlldyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICBwYXRjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZCAmJiB0aGlzLmF1dG9tYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlLCB0aGlzLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICAgZXhwLmRlc3Ryb3koKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBFeHByZXNzaW9uIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGFzVHJhbnNsYXRpb24gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWVcbiAgICBjb21wdXRlKHNjb3BlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHNjb3BlLiRldmFsKHRoaXMudGV4dCwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24oc2NvcGUsIHZhbHVlLCBsb2NhbHMpIHtcbiAgICAgICAgc2NvcGUuJGFzc2lnbih0aGlzLnRleHQsIHZhbHVlLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIHdhdGNoKHNjb3BlLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy51bndhdGNoID0gc2NvcGUuJHdhdGNoKHRoaXMudGV4dCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZih0aGlzLnVud2F0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy51bndhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kaW5nJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IGlzVlRleHQsIGlzVkNvbW1lbnQsIGlzVkVsbSB9IGZyb20gJy4uL3RwbCc7XG5pbXBvcnQgeyBMb2NhbCB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5pbXBvcnQgeyBNX0NNUF9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi92aWV3JztcblxuLy8gV2luZG93IEV2ZW50c1xuLy8gY2FzZSAnb24tbG9hZCc6XG4vLyBjYXNlICdvbi11bmxvYWQnOlxuLy8gRm9ybSBFbGVtZW50IEV2ZW50c1xuLy8gY2FzZSAnb24tY2hhbmdlJzpcbi8vIGNhc2UgJ29uLXN1Ym1pdCc6XG4vLyBjYXNlICdvbi1yZXNldCc6XG4vLyBjYXNlICdvbi1zZWxlY3QnOlxuLy8gY2FzZSAnb24tYmx1cic6XG4vLyBjYXNlICdvbi1mb2N1cyc6XG4vLyBJbWFnZSBFdmVudHNcbi8vIGNhc2UgJ29uLWFib3J0Jzpcbi8vIEtleWJvYXJkIEV2ZW50c1xuLy8gY2FzZSAnb24ta2V5ZG93bic6XG4vLyBjYXNlICdvbi1rZXlwcmVzcyc6XG4vLyBjYXNlICdvbi1rZXl1cCc6XG4vLyBNb3VzZSBFdmVudHNcbi8vIGNhc2UgJ29uLWNsaWNrJzpcbi8vIGNhc2UgJ29uLWRibGNsaWNrJzpcbi8vIGNhc2UgJ29uLW1vdXNlZG93bic6XG4vLyBjYXNlICdvbi1tb3VzZW1vdmUnOlxuLy8gY2FzZSAnb24tbW91c2VvdXQnOlxuLy8gY2FzZSAnb24tbW91c2VvdmVyJzpcbi8vIGNhc2UgJ29uLW1vdXNldXAnOlxudmFyIGV2ZW50VGV4dCA9ICdsb2FkIHVubG9hZCBjaGFuZ2Ugc3VibWl0IHJlc2V0IHNlbGVjdCBibHVyIGZvY3VzIGFib3J0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgY2xpY2sgZGJsY2xpY2sgbW91c2Vkb3duIG1vdXNlbW92ZSBtb3VzZW91dCBtb3VzZW92ZXIgbW91c2V1cCc7XG52YXIgZG9tRXZlbnRzID0gZXZlbnRUZXh0LnNwbGl0KCcgJyk7XG5cbmV4cG9ydCBjbGFzcyBSZW5kZXJlciB7XG4gICAgZ2V0IGluamVjdG9yKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kaW5qZWN0b3I7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXI7XG4gICAgICAgIHRoaXMudmlldyA9IG51bGw7XG4gICAgfVxuXG4gICAgbmV3QmluZGluZyh0ZXh0KSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5zY29wZSwgdGV4dCwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB0aGlzLnZpZXcuYmluZGluZ3MucHVzaChiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgfVxuXG4gICAgbmV3Q29tcG9uZW50KGNscykge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjbHMpO1xuXG4gICAgICAgIHRoaXMuc2NvcGUuJGFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgdGhpcy52aWV3LmNvbXBvbmVudHMucHVzaChjaGlsZCk7XG5cbiAgICAgICAgcmV0dXJuIGNoaWxkO1xuICAgIH1cblxuICAgIG5ld0RpcmVjdGl2ZShjbHMpIHtcbiAgICAgICAgdmFyIGRpcmVjdGl2ZSA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlRGlyZWN0aXZlKGNscyk7XG5cbiAgICAgICAgZGlyZWN0aXZlLiQkc2NvcGUgPSB0aGlzLnNjb3BlO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgcmVjb2duaXplQ29tcG9uZW50KHZlbG0pIHtcbiAgICAgICAgdmFyIGNvbXBvbmVudCA9IHRoaXMucGFyc2VyLnJlc29sdmVDb21wb25lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgLy8gdmVsbS5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cikge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5wYXJzZXIucmVzb2x2ZURpcmVjdGl2ZSh2YXR0ci5ub2RlRGF0YS5uYW1lKTtcblxuICAgICAgICAvLyB2YXR0ci5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIHJlbmRlcih0ZW1wbGF0ZSkge1xuICAgICAgICAvLyBtdXN0IHNldCBhIHJvb3QgZWxlbWVudCBmb3IgZGlyZWN0aXZlIGxpZmUgY3ljbGUgXCJhZnRlckxpbmtcIiBob29wc1xuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMudmlldyA9IG5ldyBWaWV3KCk7XG5cbiAgICAgICAgdGhpcy52aWV3LnZub2RlcyA9IHRoaXMucGFyc2VyLnBhcnNlVGVtcGxhdGUodGVtcGxhdGUpO1xuXG4gICAgICAgIHRoaXMuY29tcGlsZU5vZGVzKHRoaXMudmlldy52bm9kZXMpO1xuXG4gICAgICAgIC8vIHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwcmVsaW5rKCkpO1xuXG4gICAgICAgIHRoaXMubGlua05vZGVzKHRoaXMudmlldy52bm9kZXMpLmZvckVhY2gobm9kZSA9PiBjb250YWluZXIuYXBwZW5kQ2hpbGQobm9kZSkpO1xuXG4gICAgICAgIC8vIGNhbGwgZGlyZWN0aXZlIGxpZmUgY3ljbGUgaG9vcHNcbiAgICAgICAgdGhpcy52aWV3LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwb3N0bGluaygpKTtcblxuICAgICAgICAvLyBjYWNoZSB0aGUgZ2VuZXJhdGVkIGVsZW1lbnRzXG4gICAgICAgIGRvbS5nZXRDaGlsZHJlbk9mRWxlbWVudChjb250YWluZXIpLmZvckVhY2gobm9kZSA9PiB0aGlzLnZpZXcubm9kZXMucHVzaChub2RlKSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmlldztcbiAgICB9XG5cbiAgICBjb21waWxlTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHZub2Rlcy5mb3JFYWNoKHZub2RlID0+IHRoaXMuY29tcGlsZU5vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBjb21waWxlTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZVRleHQodm5vZGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNWQ29tbWVudCh2bm9kZSkpe1xuICAgICAgICAgICAgdGhpcy5jb21waWxlQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVFbG0odm5vZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGlua05vZGVzKHZub2Rlcykge1xuICAgICAgICByZXR1cm4gdm5vZGVzLm1hcCh2bm9kZSA9PiB0aGlzLmxpbmtOb2RlKHZub2RlKSk7XG4gICAgfVxuXG4gICAgbGlua05vZGUodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihpc1ZDb21tZW50KHZub2RlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMubGlua0NvbW1lbnQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMubGlua0VsbSh2bm9kZSk7XG4gICAgfVxuXG4gICAgY29tcGlsZUVsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBlbG1EYXRhLmNvbXBvbmVudCA9IHRoaXMucmVjb2duaXplQ29tcG9uZW50KHZlbG0pO1xuXG4gICAgICAgIHZhciBkaXJlY3RpdmVzID0gW107XG4gICAgICAgIHZhciBjdXN0b21MaW5rZXIgPSB2ZWxtLnZhdHRycy5zb21lKHZhdHRyID0+IHtcbiAgICAgICAgICAgIHZhciBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhO1xuXG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVBdHRyKHZhdHRyKTtcblxuICAgICAgICAgICAgaWYgKGF0dHJEYXRhLmRpcmVjdGl2ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlcy5wdXNoKGF0dHJEYXRhLmRpcmVjdGl2ZSk7XG4gICAgICAgICAgICAgICAgZWxtRGF0YS5saW5rZXIgPSBhdHRyRGF0YS5saW5rZXI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyICE9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gc29ydCBkaXJlY3RpdmUgYWNjb3JkaW5nIHRvIGl0cyBwcmlvcml0eVxuICAgICAgICB1dGlscy5vcmRlckJ5KGRpcmVjdGl2ZXMsIGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHByaW9yaXR5KS5mb3JFYWNoKGRpcmVjdGl2ZSA9PiB0aGlzLnZpZXcuZGlyZWN0aXZlcy5wdXNoKGRpcmVjdGl2ZSkpO1xuXG4gICAgICAgIGVsbURhdGEuZGlyZWN0aXZlcyA9IGRpcmVjdGl2ZXM7XG5cbiAgICAgICAgLy8gZGlyZWN0aXZlIGRlZmluZXMgY3VzdG9tIGxpbmtlciBmb3IgdGhpcyB2aXJ0dWFsIG5vZGUsIHJlbmRlciBlbmdpbmUgd2lsbCBub3QgcmVuZGVyIGl0IGFjY29yZGluZyB0byBkZWZhdWx0IGJlaGF2aW9yXG4gICAgICAgIGlmIChjdXN0b21MaW5rZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbG1EYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgZWxtRGF0YS5zbG90cyA9IHRoaXMuc2Vla1Nsb3QodmVsbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh2ZWxtLmNoaWxkTm9kZXMpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcGlsZUF0dHIodmF0dHIpIHtcbiAgICAgICAgdmFyIGF0dHJOYW1lID0gdmF0dHIubm9kZU5hbWUsIGF0dHJWYWx1ZSA9IHZhdHRyLm5vZGVWYWx1ZSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsIGJpbmRpbmc7XG5cbiAgICAgICAgaWYoYXR0clZhbHVlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLm5ld0JpbmRpbmcoYXR0clZhbHVlKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmJpbmRpbmcgPSBiaW5kaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJ0AnKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuaXNFdmVudCA9IHRydWU7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYXR0ckRhdGEuaXNEb21FdmVudCA9IHV0aWxzLnNvbWUoZG9tRXZlbnRzLCBlID0+IGUgPT09IGF0dHJEYXRhLm5hbWUpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5sb2dpY2FsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5yZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdGhpcy5uZXdEaXJlY3RpdmUoZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuXG4gICAgICAgICAgICAgICAgaWYoYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuYXNzaWdubWVudCA9IGF0dHJEYXRhLmRpcmVjdGl2ZS4kYXNzaWdubWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ckRhdGEubGlua2VyID0gYXR0ckRhdGEuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIGF0dHJEYXRhLm5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGF0dHJEYXRhLmlzRXZlbnQgfHwgYXR0ckRhdGEuZGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLm5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQ7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9wZXJ0eU5hbWUgPSB1dGlscy5jb252ZXJ0VG9IdW1wTmFtZShhdHRyRGF0YS5uYW1lLCAnLScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb21wb25lbnQuJGhhc1Byb3BlcnR5KHByb3BlcnR5TmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kc2V0UHJvcGVydHkocHJvcGVydHlOYW1lLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIdG1sQXR0cih2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKHNldEh0bWxBdHRyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcgPSB0aGlzLm5ld0JpbmRpbmcodnRleHQubm9kZVZhbHVlKTtcbiAgICAgICAgdnRleHQubm9kZURhdGEuYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgZWxtLCBuZXdUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHZhbHVlKTtcblxuICAgICAgICAgICAgaWYgKHZ0ZXh0LnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5lbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbG0gPSB2dGV4dC5wYXJlbnROb2RlLmVsbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZ0ZXh0LmVsbSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5hcHBlbmRDaGlsZChuZXdUZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodnRleHQuZWxtLCBuZXdUZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2dGV4dC5lbG0gPSBuZXdUZXh0Tm9kZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcuY29tcGlsZSgpO1xuICAgIH1cblxuICAgIGNvbXBpbGVDb21tZW50KHZjbW50KSB7XG5cbiAgICB9XG5cbiAgICBsaW5rRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGlmIChlbG1EYXRhLmxpbmtlciAhPSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIuJGxpbmsoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZlbG0uZWxtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh2ZWxtLm5vZGVOYW1lKTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMubmV3Q29tcG9uZW50KGVsbURhdGEuY29tcG9uZW50KTtcblxuICAgICAgICAgICAgZWxtRGF0YS5jb21wb25lbnQgPSBpbnN0YW5jZTtcblxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHZlbG0uZWxtLCBNX0NNUF9DTEFTUyk7XG5cbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuXG4gICAgICAgICAgICBpbnN0YW5jZS4kJHZlbG0gPSB2ZWxtO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHNldFNsb3QoZWxtRGF0YS5zbG90cyk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kcmVuZGVyKCk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kbW91bnQodmVsbS5lbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmVsbS52YXR0cnMuZm9yRWFjaCh2YXR0ciA9PiB0aGlzLmxpbmtBdHRyKHZhdHRyKSk7XG4gICAgICAgICAgICB2ZWxtLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB2ZWxtLmVsbS5hcHBlbmRDaGlsZCh0aGlzLmxpbmtOb2RlKGNoaWxkKSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZlbG0uZWxtO1xuICAgIH1cblxuICAgIGxpbmtBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciB2ZWxtID0gdmF0dHIudmVsbSxcbiAgICAgICAgICAgIGVsbSA9IHZlbG0uZWxtLFxuICAgICAgICAgICAgYXR0ckRhdGEgPSB2YXR0ci5ub2RlRGF0YSxcbiAgICAgICAgICAgIGJpbmRpbmcgPSBhdHRyRGF0YS5iaW5kaW5nO1xuXG4gICAgICAgIGlmKGJpbmRpbmcgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGF0dHJEYXRhLmlzRXZlbnQpIHtcbiAgICAgICAgICAgIGlmIChhdHRyRGF0YS5pc0RvbUV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxtLmFkZEV2ZW50TGlzdGVuZXIoYXR0ckRhdGEubmFtZSwgZSA9PiBiaW5kaW5nLmNvbXB1dGUobmV3IExvY2FsKGUsIGVsbSkpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZlbG0ubm9kZURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV2ZW50TmFtZSA9IHV0aWxzLmNvbnZlcnRUb0h1bXBOYW1lKGF0dHJEYXRhLm5hbWUsICctJyk7XG4gICAgICAgICAgICAgICAgdmVsbS5ub2RlRGF0YS5jb21wb25lbnQuJGJpbmQoZXZlbnROYW1lLCBlID0+IGJpbmRpbmcuY29tcHV0ZShuZXcgTG9jYWwoZSwgZWxtKSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgYmluZGluZy5saW5rKCk7XG4gICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZWdpc3RlciBiaW5kaW5nIGNoYW5nZSBoYW5kbGVyIGFmdGVyIGZpcnN0IHBhdGNoXG4gICAgICAgIGlmKGF0dHJEYXRhLmRpcmVjdGl2ZSkge1xuICAgICAgICAgICAgYmluZGluZy5yZWdpc3RlckF1dG9tYXRpb24oKG5ld1ZhbHVlLCBvbGRWYWx1ZSkgPT4gYXR0ckRhdGEuZGlyZWN0aXZlLiRjaGFuZ2UobmV3VmFsdWUsIG9sZFZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgdnRleHQuZWxtID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodnRleHQubm9kZURhdGEuYmluZGluZy52YWx1ZSk7XG4gICAgICAgIHJldHVybiB2dGV4dC5lbG07XG4gICAgfVxuXG4gICAgbGlua0NvbW1lbnQodmNtbnQpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodmNtbnQubm9kZVZhbHVlKTtcbiAgICB9XG5cbiAgICBzZWVrU2xvdCh2ZWxtKSB7XG4gICAgICAgIHZhciBzbG90cyA9IHt9O1xuXG4gICAgICAgIHZlbG0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmKGlzVkVsbShjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2xvdCA9IGNoaWxkLmdldEF0dHIoJ3Nsb3QnKTtcblxuICAgICAgICAgICAgICAgIGlmKHNsb3QpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xvdHNbc2xvdC5ub2RlVmFsdWVdID0gY2hpbGQuZ2V0SW5uZXJUcGwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAgc2xvdHM7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICAgIGdldCBjb250ZW50KCkge1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHRoaXMubm9kZXMuZm9yRWFjaChub2RlID0+IGNvbnRlbnQuYXBwZW5kQ2hpbGQobm9kZSkpO1xyXG4gICAgICAgIHJldHVybiBjb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubm9kZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmluZGluZ3MgPSBbXTtcclxuICAgICAgICB0aGlzLmRpcmVjdGl2ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VudChzZWxlY3Rvck9yRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBlbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yT3JFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQgPSBzZWxlY3Rvck9yRWxlbWVudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBiaW5kVHJhbnNsYXRlQ2hhbmdlZCgpIHtcclxuICAgIC8vICAgICB2YXIgYmluZGluZ3MgPSB0aGlzLmVudGl0eS5iaW5kaW5ncztcclxuICAgIC8vXHJcbiAgICAvLyAgICAgaWYoIWJpbmRpbmdzLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy9cclxuICAgIC8vICAgICAvLyB1cGRhdGUgdGV4dCB3aGlsZSB0cmFuc2xhdGUgY2hhbmdlZFxyXG4gICAgLy8gICAgIHRoaXMudW5iaW5kVHJhbnNsYXRlQ2hhbmdlZCA9IGV2ZW50cy50cmFuc2xhdGVDaGFuZ2VkLm9uKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgYmluZGluZ3MuZm9yRWFjaChiaW5kaW5nID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGJpbmRpbmcuZGV0ZWN0KCk7XHJcbiAgICAvLyAgICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goaXRlbSA9PiBpdGVtLiRkZXN0cm95KCkpO1xyXG4gICAgICAgIHRoaXMuZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcclxuICAgICAgICB0aGlzLmJpbmRpbmdzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRlc3Ryb3koKSk7XHJcbiAgICAgICAgdGhpcy52bm9kZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5kaXJlY3RpdmVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5iaW5kaW5ncy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMudm5vZGVzLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgdGhpcy5ub2Rlcy5sZW5ndGggPSAwO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkNtbnQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5ub2RlTmFtZSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgVkVsbSh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgbm9kZS52YXR0cnMgPSB0aGlzLnZhdHRycy5tYXAoZnVuY3Rpb24gKHZhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHZhdHRyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgY29weS52ZWxtID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIG5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTJcbn1cblxuLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub25DbG9uZU5vZGUoZGVlcCk7XG5cbiAgICAgICAgaWYoZGVlcCkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuY2xvbmVOb2RlKGRlZXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUudGV4dCwgJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlRleHQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5pbXBvcnQgeyBub2RlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5mdW5jdGlvbiBpc1ZFbG0odm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVkF0dHIodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gaXNWVGV4dCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUudGV4dDtcbn1cblxuZnVuY3Rpb24gaXNWQ29tbWVudCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuY29tbWVudDtcbn1cblxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCwgaXNWRWxtLCBpc1ZBdHRyLCBpc1ZUZXh0LCBpc1ZDb21tZW50IH07IiwiaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCB9IGZyb20gJy4vdHBsLWFwaSdcblxuZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdmNtbnQubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbiAgICB9XG5cbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0ZXh0XG4gICAgcmVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGFnXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQge1xuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXG59IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xuXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgZG9jdHlwZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcbiAgICB9XG5cbiAgICBlbGVtZW50KHApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XG4gICAgICAgIHZhciBlbGVzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZXM7XG4gICAgfVxuXG4gICAgYXR0cnMocCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgY3VycmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbn0iLCJ2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLFxuICAgIGdldFByb3RvdHlwZU9mID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuXG4vLyBpc1xuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNNYXAodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBNYXA7XG59XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCc7XG59XG5cbmZ1bmN0aW9uIGlzQmxhbmtPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAhZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xufVxuXG5mdW5jdGlvbiBpc1N0cmluZyh2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnO1xufVxuXG5mdW5jdGlvbiBpc051bWJlcih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgICByZXR1cm4gdG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzUmVnRXhwKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBSZWdFeHBdJztcbn1cblxuZnVuY3Rpb24gaXNCb29sZWFuKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nO1xufVxuXG5mdW5jdGlvbiBpc0Zvcm1EYXRhKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0eXBlb2YgRm9ybURhdGEgIT09ICd1bmRlZmluZWQnKSAmJiAodmFsdWUgaW5zdGFuY2VvZiBGb3JtRGF0YSk7XG59XG4vLyBlbmQgb2YgaXNcblxuLy8gdmFsdWVcbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gICAgdmFyIG4gPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICByZXR1cm4gaXNOYU4obikgPyB2YWx1ZSA6IG47XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gY29udmVydFRvSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHJldHVybiBuYW1lLnNwbGl0KHNlcGFyYXRvcikubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwICYmICF1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB2YWx1ZS5zdWJzdHJpbmcoMSk7XG4gICAgfSkuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRGcm9tSHVtcE5hbWUobmFtZSwgc2VwYXJhdG9yLCB1cHBlcmNhc2VGaXJzdExldHRlcikge1xuICAgIHZhciBpID0gMCwgbmV3TmFtZSA9ICcnLCBjaGFyO1xuXG4gICAgd2hpbGUgKGkgPCBuYW1lLmxlbmd0aCkge1xuICAgICAgICBjaGFyID0gbmFtZVtpXTtcblxuICAgICAgICBpZiAoKGkgIT09IDAgfHwgdXBwZXJjYXNlRmlyc3RMZXR0ZXIpICYmIC9bQS1aXS8udGVzdChjaGFyKSkge1xuICAgICAgICAgICAgbmV3TmFtZSArPSBzZXBhcmF0b3I7XG4gICAgICAgICAgICBuZXdOYW1lICs9IGNoYXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld05hbWUgKz0gY2hhcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXdOYW1lO1xufVxuLy8gZW5kIGlmIHZhbHVlXG5cbi8vIG9iamVjdFxuZnVuY3Rpb24gY29weSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBvYmpJbmRleCA9IDAsIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF0sIGZpbHRlcjtcblxuICAgIGlmIChpc0Jvb2xlYW4ob2JqKSkge1xuICAgICAgICBkZWVwID0gb2JqO1xuICAgICAgICBvYmpJbmRleCsrO1xuICAgICAgICBvYmogPSBhcmd1bWVudHNbb2JqSW5kZXhdO1xuICAgIH1cblxuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gb2JqSW5kZXggKyAxKSB7XG4gICAgICAgIGZpbHRlciA9IGFyZ3VtZW50c1tvYmpJbmRleCArIDFdO1xuICAgIH1cblxuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgdmFyIG5ld0FyciA9IFtdO1xuICAgICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmIChmaWx0ZXIgPT0gbnVsbCB8fCBmaWx0ZXIob2JqLCBpbmRleCwgaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChkZWVwID8gY29weShkZWVwLCBpdGVtKSA6IGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld0FycjtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3Qob2JqKSkge1xuICAgICAgICB2YXIgbmV3T2JqID0gb2JqZWN0KG9iaik7XG4gICAgICAgIGZvckVhY2gob2JqLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGtleSwgdmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgbmV3T2JqW2tleV0gPSBkZWVwID8gY29weShkZWVwLCB2YWx1ZSkgOiB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXdPYmo7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZXh0ZW5kKCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIGluZGV4ID0gMCwgdGFyZ2V0ID0gYXJndW1lbnRzW2luZGV4XTtcblxuICAgIGlmIChpc0Jvb2xlYW4odGFyZ2V0KSkge1xuICAgICAgICBkZWVwID0gdGFyZ2V0O1xuICAgICAgICB0YXJnZXQgPSBhcmd1bWVudHNbKytpbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGRlZXBNZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgaW5kZXggKyAxKS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2UoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSB7fTtcblxuICAgIGlmIChpc0Jvb2xlYW4oYXJndW1lbnRzW2luZGV4XSkpIHtcbiAgICAgICAgZGVlcCA9IGFyZ3VtZW50c1tpbmRleF07XG4gICAgICAgIGluZGV4Kys7XG4gICAgfVxuXG4gICAgaWYgKGRlZXApIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcGxhaW5NZXJnZSh0YXJnZXQsIGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBwbGFpbk1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZXBNZXJnZSh0YXJnZXQsIHNvdXJjZSkge1xuICAgIGZvckVhY2goc291cmNlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICBpZiAodGFyZ2V0W2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc09iamVjdCh0YXJnZXRba2V5XSkgJiYgaXNPYmplY3QodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldFtrZXldLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG4vLyBlbmQgb2Ygb2JqZWN0XG5cbi8vIGl0ZXJhdG9yXG5mdW5jdGlvbiBmb3JFYWNoKHRhcmdldCwgYWN0aW9uKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICB0YXJnZXQuZm9yRWFjaChhY3Rpb24pO1xuICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICBhY3Rpb24odGFyZ2V0W2tleV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUodGFyZ2V0LCBmdW5jKSB7XG4gICAgaWYgKGlzQXJyYXkodGFyZ2V0KSkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0LnNvbWUoZnVuYyk7XG4gICAgfVxuXG4gICAgaWYgKGlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGZ1bmModGFyZ2V0W2tleV0sIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gZW5kIG9mIGl0ZXJhdG9yXG5cbi8vIGFycmF5XG5mdW5jdGlvbiBvcmRlckJ5KGxpc3QsIGdldHRlcikge1xuICAgIHZhciBnZXRWYWx1ZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIGlmIChnZXR0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZ2V0dGVyKGl0ZW0pO1xuICAgIH07XG5cbiAgICByZXR1cm4gbGlzdC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5RGVzY2VuZGluZyhsaXN0LCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGxpc3Quc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldFZhbHVlKGEpID4gZ2V0VmFsdWUoYikpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmUobGlzdCwgdmFsdWUpIHtcbiAgICB2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodmFsdWUpO1xuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgcmV0dXJuIGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG59XG4vLyBlbmQgb2YgYXJyYXlcblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KHRhcmdldCwgcHJvcGVydHkpIHtcbiAgICB2YXIga2V5LCBrZXlzID0gcHJvcGVydHkuc3BsaXQoJy4nKTtcblxuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgaWYgKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiBpc09iamVjdCh0YXJnZXQpICYmIHRhcmdldC5oYXNPd25Qcm9wZXJ0eShrZXlzLnNoaWZ0KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5KSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGlmKCFpc09iamVjdCh0YXJnZXQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldCA9IHRhcmdldFtrZXldO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHNldFByb3BlcnR5KHRhcmdldCwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIGtleSwga2V5cyA9IHByb3BlcnR5LnNwbGl0KCcuJyk7XG5cbiAgICB3aGlsZSAoa2V5cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAga2V5ID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICB0YXJnZXQgPSB0YXJnZXRba2V5XTtcbiAgICB9XG5cbiAgICBpZiAoaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICBrZXkgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBtYXRjaCwgbWF0Y2hUZXh0LCBpbmRleCwgcmVzdWx0ID0gJycsIHRleHQgPSBhcmd1bWVudHNbMF0sXG4gICAgICAgIHBhdHRlcm4gPSAvXFx7KFxcZCspXFx9L2csIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuXG4gICAgd2hpbGUgKG1hdGNoID0gcGF0dGVybi5leGVjKHRleHQpKSB7XG4gICAgICAgIG1hdGNoVGV4dCA9IG1hdGNoWzBdO1xuICAgICAgICBpbmRleCA9IE51bWJlci5wYXJzZUludChtYXRjaFsxXSkgKyAxO1xuXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoIDw9IGluZGV4KSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2Zvcm1hdCBpdGVtICcgKyBpbmRleCArICdpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpICsgYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgfVxuXG4gICAgcmVzdWx0ICs9IHRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgICByZXR1cm4gaHRtbC5yZXBsYWNlKC8mZ3Q7L2csICc+JykucmVwbGFjZSgvJmx0Oy9nLCAnPCcpLnJlcGxhY2UoLyZhbXA7L2csICcmJykucmVwbGFjZSgvJnF1b3RlOy9nLCAnJyk7XG59XG5cbmV4cG9ydCB7XG4gICAgaXNVbmRlZmluZWQsXG4gICAgaXNEZWZpbmVkLFxuICAgIGlzT2JqZWN0LFxuICAgIGlzQmxhbmtPYmplY3QsXG4gICAgaXNOdW1iZXIsXG4gICAgaXNEYXRlLFxuICAgIGlzRnVuY3Rpb24sXG4gICAgaXNSZWdFeHAsXG4gICAgaXNCb29sZWFuLFxuICAgIGlzQXJyYXksXG4gICAgaXNTdHJpbmcsXG4gICAgaXNGb3JtRGF0YSxcbiAgICB0b051bWJlcixcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGNvbnZlcnRUb0h1bXBOYW1lLFxuICAgIGNvbnZlcnRGcm9tSHVtcE5hbWUsXG4gICAgY29weSxcbiAgICBleHRlbmQsXG4gICAgbWVyZ2UsXG4gICAgZm9yRWFjaCxcbiAgICBzb21lLFxuICAgIHJlbW92ZSxcbiAgICBjb25jYXQsXG4gICAgb3JkZXJCeSxcbiAgICBvcmRlckJ5RGVzY2VuZGluZyxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBoYXNQcm9wZXJ0eSxcbiAgICBnZXRQcm9wZXJ0eSxcbiAgICBzZXRQcm9wZXJ0eSxcbiAgICBmb3JtYXQsXG4gICAgZXNjYXBlSHRtbFxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGlzTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgUGFyc2VyIH0gZnJvbSAnLi9wYXJzZXInO1xuaW1wb3J0IHsgT2JzZXJ2ZXIsIGhhbmRsZXIgfSBmcm9tICcuLi9vYnNlcnZlcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuaW1wb3J0IHsgRXZhbHVhdG9yIH0gZnJvbSAnLi4vZXhwJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBvbmVudENvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiQkdmVsbSA9IG51bGw7XG4gICAgdGhpcy4kJHBhcmVudCA9IG51bGw7XG4gICAgdGhpcy4kJGNoaWxkcmVuID0gW107XG4gICAgdGhpcy4kJG1haW5WaWV3ID0gbnVsbDtcbiAgICB0aGlzLiRwYXJzZXIgPSBuZXcgUGFyc2VyKHRoaXMpO1xuICAgIHRoaXMuJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuc2xvdHMgPSB7fTtcbiAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZSh7fSk7XG4gICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgZ2V0ICRpbmplY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIGluamVjdG9yO1xuICAgIH1cblxuICAgICRkZWxlZ2F0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm94eSh0YXJnZXQsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgICRzZXRTbG90KHNsb3RzKSB7XG4gICAgICAgIHRoaXMuc2xvdHMgPSBzbG90cyB8fCB7fTtcbiAgICB9XG5cbiAgICAkc2V0U3RhdGUoc3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHRoaXMuJGRlbGVnYXRlKHN0YXRlKTtcbiAgICB9XG5cbiAgICAkc2V0UHJvcHMocHJvcHMpIHtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHByb3BzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgJGhhc1Byb3BlcnR5KGtleSkge1xuICAgICAgICByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5KTtcbiAgICB9XG5cbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXkpO1xuICAgIH1cblxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXkpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRvYnNlcnZlci53YXRjaChleHAsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJHdhdGNoQ29sbGVjdGlvbihleHAsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gdGhpcy4kb2JzZXJ2ZXIud2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICAkZXZhbChleHAsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gbmV3IEV2YWx1YXRvcih0aGlzLCB7bG9jYWxzOiBsb2NhbHN9KS5ldmFsdWF0ZShleHApO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBuZXcgRXZhbHVhdG9yKHRoaXMsIHtsb2NhbHM6IGxvY2Fsc30pLmFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkZ2V0VGVtcGxhdGUoKSB7XG4gICAgICAgIHZhciBkYXRhID0gdGhpcy4kZGF0YTtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoZGF0YS50ZW1wbGF0ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkYXRhLnRlbXBsYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBlbG0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChkYXRhLnRlbXBsYXRlSWQpO1xuXG4gICAgICAgICAgICBpZiAoZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmlubmVySFRNTDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICAkcmVuZGVyKCkge1xuICAgICAgICB2YXIgdGVtcGxhdGUgPSB0aGlzLiRnZXRUZW1wbGF0ZSgpO1xuICAgICAgICB0aGlzLiQkbWFpblZpZXcgPSBuZXcgUmVuZGVyZXIodGhpcykucmVuZGVyKHRlbXBsYXRlKTtcbiAgICB9XG5cbiAgICAkbW91bnQoc2VsZWN0b3JPckVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuJCRtYWluVmlldyA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2N1cnJlbnQgY29tcG9uZW50IGlzIG5vdCByZW5kZXJlZCcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kJG1haW5WaWV3Lm1vdW50KHNlbGVjdG9yT3JFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgJGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZC4kJHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kb2JzZXJ2ZXIuZGVzdHJveSgpO1xuXG4gICAgICAgIGlmKHRoaXMuJCRtYWluVmlldyAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkbWFpblZpZXcuZGVzdHJveSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkcGFyZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJCRwYXJlbnQuJHJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTV9ISURFX0NMQVNTIH0gZnJvbSAnLi4vY3NzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmVDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHNjb3BlID0gbnVsbDtcbiAgICB0aGlzLiQkdmF0dHIgPSBudWxsO1xuICAgIHRoaXMuJHByaW9yaXR5ID0gOTtcbiAgICAvLyBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50XG4gICAgdGhpcy4kYXNzaWdubWVudCA9IGZhbHNlO1xuICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gbnVsbDtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIERpcmVjdGl2ZSB7XG4gICAgZ2V0ICRrZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkbWV0YWRhdGEua2V5O1xuICAgIH1cblxuICAgIGdldCAkc2NvcGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2NvcGU7XG4gICAgfVxuXG4gICAgZ2V0ICRyZW5kZXJlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzY29wZS4kcmVuZGVyZXI7XG4gICAgfVxuXG4gICAgZ2V0ICRlbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0uZWxtO1xuICAgIH1cblxuICAgIGdldCAkYmluZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci5ub2RlRGF0YS5iaW5kaW5nO1xuICAgIH1cblxuICAgIGdldCAkY29tcG9uZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHZhdHRyLnZlbG0ubm9kZURhdGEuY29tcG9uZW50O1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICAvLyB3aGlsZSBjb21waWxpbmdcbiAgICAkY29tcGlsZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25Db21waWxlICYmIHRoaXMub25Db21waWxlKHRoaXMuJCR2YXR0ci52ZWxtLCB0aGlzLiQkdmF0dHIpO1xuICAgIH1cblxuICAgICRsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbkxpbmsgJiYgdGhpcy5vbkxpbmsodGhpcy4kc2NvcGUpO1xuICAgIH1cblxuICAgIC8vIGJlZm9yZSBsaW5raW5nXG4gICAgLy8gJHByZWxpbmsoKSB7XG4gICAgLy8gICAgIHRoaXMuYmVmb3JlTGluayAmJiB0aGlzLmJlZm9yZUxpbmsoKTtcbiAgICAvLyB9XG5cbiAgICAvLyBhZnRlciBsaW5raW5nXG4gICAgJHBvc3RsaW5rKCkge1xuICAgICAgICB0aGlzLmFmdGVyTGluayAmJiB0aGlzLmFmdGVyTGluaygpO1xuXG4gICAgICAgIGlmICh0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uJGtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGggPyByZXN1bHRbMF0gOiBudWxsO1xuICAgIH1cblxuICAgICRzZWVrRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNlYXJjaERpcmVjdGl2ZSh2ZWxtLCBrZXkpO1xuICAgIH1cblxuICAgICRzZWVrVXBEaXJlY3RpdmUoa2V5KSB7XG4gICAgICAgIHZhciB2ZWxtID0gdGhpcy4kJHZhdHRyLnZlbG0ucGFyZW50Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkcmVtb3ZlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kZWxlbWVudCwgdGhpcy4kcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJHBsYWNlaG9sZGVyLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoaWRlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHllcykge1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRldmFsKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGV2YWwoZXhwLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMuJGJpbmRpbmcubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy4kc2NvcGUuJGFzc2lnbihleHAsIHZhbHVlKTtcbiAgICB9XG5cbiAgICAkcmVuZGVyKHRlbXBsYXRlLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBSZW5kZXJlcih0aGlzLiRzY29wZSwgbG9jYWxzKS5yZW5kZXIodGVtcGxhdGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuaW1wb3J0IHsgQ29tcG9uZW50LCBjb21wb25lbnRDb25zdHJ1Y3RvciB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSwgZGlyZWN0aXZlQ29uc3RydWN0b3IgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIsIGZpbHRlckNvbnN0cnVjdG9yIH0gZnJvbSAnLi9maWx0ZXInO1xuaW1wb3J0IHsgU2VydmljZSwgc2VydmljZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxudmFyIHBhdHRlcm4gPSAvXlthLXpfXFwkXVtcXHdcXCQtXSovaTtcblxuLy8gc3RhcnQgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG52YXIgY29tcG9uZW50Q2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBDb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICAgICAgY29tcG9uZW50Q29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5jb21wb25lbnRDbGFzcy5wcm90b3R5cGUgPSBDb21wb25lbnQucHJvdG90eXBlO1xuXG52YXIgZGlyZWN0aXZlQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBEaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICAgICAgZGlyZWN0aXZlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5kaXJlY3RpdmVDbGFzcy5wcm90b3R5cGUgPSBEaXJlY3RpdmUucHJvdG90eXBlO1xuXG52YXIgZmlsdGVyQ2xhc3MgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmdW5jdGlvbiBGaWx0ZXIobWV0YWRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSk7XG4gICAgfTtcbn0pKCk7XG5maWx0ZXJDbGFzcy5wcm90b3R5cGUgPSBGaWx0ZXIucHJvdG90eXBlO1xuXG52YXIgc2VydmljZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gU2VydmljZShtZXRhZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBtZXRhZGF0YSlcbiAgICB9O1xufSkoKTtcbnNlcnZpY2VDbGFzcy5wcm90b3R5cGUgPSBTZXJ2aWNlLnByb3RvdHlwZTtcbi8vIGVuZCBvZiBtYWtlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGJlY2F1c2UgY2xhc3MgY2FuJ3QgYmUgY2FsbCB3aXRob3V0IG5ldy5cblxuLy8gY29uc3RydWN0b3IgZmFjdG9yeSwgY3JlYXRlIGNvbnN0cnVjdG9yIGZvciBjb21wb25lbnQsIGRpcmVjdGl2ZSwgZmlsdGVyIGFuZCBzZXJ2aWNlXG5leHBvcnQgY2xhc3MgRmFjdG9yeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICB9XG5cbiAgICByZW5hbWUocm9sZUlkLCBuYW1lKSB7XG4gICAgICAgIGlmIChwYXR0ZXJuLnRlc3QobmFtZSkpIHtcbiAgICAgICAgICAgIHZhciBuZXdOYW1lID0gdXRpbHMuY29udmVydFRvSHVtcE5hbWUobmFtZSwgJy0nLCB0cnVlKTtcblxuICAgICAgICAgICAgc3dpdGNoIChyb2xlSWQpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmNvbXBvbmVudDpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnQ29tcG9uZW50JztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5kaXJlY3RpdmU6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0RpcmVjdGl2ZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuZmlsdGVyOlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdGaWx0ZXInO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLnNlcnZpY2U6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ1NlcnZpY2UnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ld05hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobmFtZSArICdpcyBub3QgYSB2YWxpZCBuYW1lJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYWtlKHJvbGVJZCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3IsIGNvbnN0cnVjdG9yTmFtZSA9IHRoaXMucmVuYW1lKHJvbGVJZCwgbmFtZSksXG4gICAgICAgICAgICBvbkNvbnN0cnVjdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25zdHJ1Y3Rvci5zdXBlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3RydWN0b3Iuc3VwZXIuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihjb25maWcuY29uc3RydWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBjb25maWcuY29uc3RydWN0LmNhbGwodGhpcywgTWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICBjb25zdHJ1Y3RvciA9IG5ldyBGdW5jdGlvbignb25Db25zdHJ1Y3QnLCAnXCJ1c2Ugc3RyaWN0XCI7cmV0dXJuIGZ1bmN0aW9uICcgKyBjb25zdHJ1Y3Rvck5hbWUgKyAnKCl7b25Db25zdHJ1Y3QuY2FsbCh0aGlzKTt9OycpKG9uQ29uc3RydWN0KTtcblxuICAgICAgICAvLyBleHRlbmRzIGNsYXNzXG4gICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5leHRlbmRzKSkge1xuICAgICAgICAgICAgdXRpbHMuaW5oZXJpdChjb25zdHJ1Y3RvciwgY29uZmlnLmV4dGVuZHMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY3JlYXRlIG1ldGhvZHNcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGNvbmZpZykge1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPT0gJ2V4dGVuZHMnICYmIGtleSAhPT0gJ2NvbnN0cnVjdCcpIHtcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5wcm90b3R5cGVba2V5XSA9IGNvbmZpZ1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3RvcmUgbWV0YWRhdGEgdG8gcHJvdG90eXBlXG4gICAgICAgIG1ldGFkYXRhLmtleSA9IG5hbWU7XG4gICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIG1ha2VDb21wb25lbnQobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBjb21wb25lbnRDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmNvbXBvbmVudCwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZURpcmVjdGl2ZShuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGRpcmVjdGl2ZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuZGlyZWN0aXZlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRmlsdGVyKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZmlsdGVyQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5maWx0ZXIsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VTZXJ2aWNlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogc2VydmljZUNsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuc2VydmljZSwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGZhY3RvcnkgPSBuZXcgRmFjdG9yeSgpOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBmaWx0ZXJDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICAgICAgZmlsdGVyQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG5cbiAgICB0cmFuc2Zvcm0oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uVHJhbnNmb3JtICYmIHRoaXMub25UcmFuc2Zvcm0uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi92aWV3LWFwaSc7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcblxuLy8gbWV0YWRhdGEgZXhhbXBsZVxuLy8geyBrZXk6ICcnLCBuYW1lc3BhY2U6ICcnLCBleHRlbmRzOiBudWxsLCBjb25zdHJ1Y3Q6IGZuLCBtZXRob2RzOiB7fSB9XG5leHBvcnQgY2xhc3MgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNsYXNzQ29udGFpbmVyID0ge307XG4gICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sgPSBbXTtcbiAgICB9XG5cbiAgICBnZXRDbGFzc0NvbnRhaW5lcihyb2xlSWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNsYXNzQ29udGFpbmVyW3JvbGVJZF07XG4gICAgfVxuXG4gICAgZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZUlkKSB7XG4gICAgICAgIGlmICghdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdKSB7XG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZUNvbnRhaW5lcltyb2xlSWRdO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyKHJvbGVJZCwga2V5LCBjb25zdHJ1Y3Rvcikge1xuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJy4nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignSWxsZWdhbCBjaGFyYWN0ZXIgXCIuXCInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcltrZXldID09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lcltrZXldID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlcyA9IGNvbnRhaW5lcltrZXldLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZSA9PT0gY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3Ioa2V5ICsgJyBpcyBleGlzdCB1bmRlciBuYW1lc3BhY2UgJyArIG1hdGNoZXNbMF0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRhaW5lcltrZXldLnB1c2goY29uc3RydWN0b3IpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuY29tcG9uZW50LCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5kaXJlY3RpdmUsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckZpbHRlcihrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmZpbHRlciwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyU2VydmljZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLnNlcnZpY2UsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBoYXMocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIGNvbnN0cnVjdG9ycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvcnMgPSBjb25zdHJ1Y3RvcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgdmFyIG1ldGEgPSBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhO1xuICAgICAgICAgICAgICAgIHJldHVybiBtZXRhLm5hbWVzcGFjZSAmJiB1dGlscy5sb3dlcmNhc2UobWV0YS5uYW1lc3BhY2UpID09PSB1dGlscy5sb3dlcmNhc2UobmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGhhc0NvbXBvbmVudChrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuY29tcG9uZW50LCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzRGlyZWN0aXZlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5kaXJlY3RpdmUsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNGaWx0ZXIoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmZpbHRlciwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc1NlcnZpY2Uoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLnNlcnZpY2UsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXQocm9sZUlkLCBrZXksIGlnbm9yZUNhc2UsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3JzLCBjb250YWluZXIgPSB0aGlzLmdldENsYXNzQ29udGFpbmVyKHJvbGVJZCk7XG5cbiAgICAgICAgaWYgKGlnbm9yZUNhc2UpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IHV0aWxzLmdldFByb3BlcnR5KGNvbnRhaW5lciwga2V5LCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnRhaW5lcltrZXldO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnN0cnVjdG9ycyA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHZhciBuYW1lc3BhY2VzID0gY29uc3RydWN0b3JzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5hbWVzcGFjZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCduYW1lc3BhY2UgJyArIG5hbWVzcGFjZXMuam9pbignfCcpICsgJyBhbGwgaGF2ZSAnICsga2V5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3RvcnNbMF07XG4gICAgfVxuXG4gICAgZ2V0Q29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5jb21wb25lbnQsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXREaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldEZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZmlsdGVyLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0U2VydmljZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuc2VydmljZSwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZShyb2xlSWQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgY29uc3RydWN0b3I7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IHRoaXMuZ2V0KHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ21pc3MgY29uc3RydWN0b3IgZm9yIGtleSAnICsga2V5T3JDb25zdHJ1Y3Rvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodXRpbHMuaXNGdW5jdGlvbihrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3IgPSBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIHBhcmFtZXRlcicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ldyBjb25zdHJ1Y3RvcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBvbmVudChrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuY29tcG9uZW50LCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZURpcmVjdGl2ZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlKHJvbGVzLmRpcmVjdGl2ZSwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSwgY29udGFpbmVyID0gdGhpcy5nZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlcy5maWx0ZXIpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAga2V5T3JDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0RmlsdGVyKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0gaW5zdGFuY2VvZiBrZXlPckNvbnN0cnVjdG9yO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSByZXN1bHRbMF07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBrZXlPckNvbnN0cnVjdG9yKCk7XG4gICAgICAgICAgICBjb250YWluZXIucHVzaChpbnN0YW5jZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuXG4gICAgY3JlYXRlU2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLnNlcnZpY2UpO1xuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhrZXlPckNvbnN0cnVjdG9yKSkge1xuICAgICAgICAgICAga2V5T3JDb25zdHJ1Y3RvciA9IHRoaXMuZ2V0U2VydmljZShrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFrZXlPckNvbnN0cnVjdG9yLnByb3RvdHlwZS4kJG1ldGFkYXRhLm5vblNoYXJlZCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IGNvbnRhaW5lci5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBwYXJzZUZ1bGxOYW1lKG5hbWUsIGFsaWFzKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7bnM6ICcnLCBrZXk6ICcnfSxcbiAgICAgICAgICAgIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xuXG4gICAgICAgIGlmIChzZWdtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdC5rZXkgPSBuYW1lO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzdWx0LmtleSA9IHNlZ21lbnRzLnBvcCgpO1xuICAgICAgICAgICAgcmVzdWx0Lm5zID0gc2VnbWVudHMuam9pbignLicpO1xuXG4gICAgICAgICAgICBpZiAoYWxpYXMpIHtcbiAgICAgICAgICAgICAgICB1dGlscy5zb21lKGFsaWFzLCBmdW5jdGlvbiAoc2hvcnROYW1lLCBmdWxsTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvcnROYW1lID09PSByZXN1bHQubnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5ucyA9IGZ1bGxOYW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgaW5qZWN0U2VydmljZXMoaW5zdGFuY2UsIG1ldGFkYXRhLCBjaGVja0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgc2VydmljZUZ1bGxOYW1lLCBoYXNMb29wRGVwZW5kZW5jeSA9IGZhbHNlO1xuXG4gICAgICAgIGlmKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIC8vIGNyZWF0aW5nIGEgc2VydmljZSBpbnN0YW5jZSBhdCB0aGUgbW9tZW50XG4gICAgICAgICAgICBzZXJ2aWNlRnVsbE5hbWUgPSB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBtZXRhZGF0YS5uYW1lc3BhY2UsIG1ldGFkYXRhLmtleSk7XG4gICAgICAgICAgICBoYXNMb29wRGVwZW5kZW5jeSA9IHRoaXMuc2VydmljZVN0YWNrLmluZGV4T2Yoc2VydmljZUZ1bGxOYW1lKSAhPT0gLTE7XG5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnB1c2goc2VydmljZUZ1bGxOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGhhc0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICAgICAgLy8gY2xlYXIgc2VydmljZSBkZXBlbmRlbmN5IHN0YWNrXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2subGVuZ3RoID0gMDtcbiAgICAgICAgICAgICAgICAvLyBvY2N1cnMgbG9vcCBkZXBlbmRlbmN5XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9vcCBkZXBlbmRlbmN5OiBcIiArIHRoaXMuc2VydmljZVN0YWNrLmpvaW4oJy0+JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGFkYXRhICYmIHV0aWxzLmlzT2JqZWN0KG1ldGFkYXRhLmluamVjdCkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobWV0YWRhdGEuaW5qZWN0LCBmdW5jdGlvbiAoc2VydmljZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGluc3RhbmNlLCBrZXksIHtcbiAgICAgICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByaXZhdGVLZXkgPSAnJCQnICsga2V5O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2VbcHJpdmF0ZUtleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhzZXJ2aWNlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaWRlbnRpZmllciA9IHNlbGYucGFyc2VGdWxsTmFtZShzZXJ2aWNlLCBtZXRhZGF0YS5hbGlhcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZVtwcml2YXRlS2V5XSA9IHNlbGYuY3JlYXRlU2VydmljZShzZXJ2aWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZVtwcml2YXRlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihjaGVja0xvb3BEZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IHZhciBpbmplY3RvciA9IG5ldyBJbmplY3RvcigpOyIsImltcG9ydCB7IHBhcnNlRXhwIH0gZnJvbSAnLi4vZXhwJztcclxuaW1wb3J0IHsgcGFyc2VUcGwgfSBmcm9tICcuLi90cGwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnNlciB7XHJcbiAgICBnZXQgaW5qZWN0b3IoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGluamVjdG9yO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBuc0FsaWFzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRkYXRhLmFsaWFzO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgICAgICB0aGlzLnR5cGUgPSB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IHt9LFxyXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5maWx0ZXJzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcGFyc2VFeHByZXNzaW9uKGV4cCkge1xyXG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wcm9ncmFtc1tleHBdO1xyXG5cclxuICAgICAgICBpZiAoIXByb2dyYW0pIHtcclxuICAgICAgICAgICAgcHJvZ3JhbSA9IHBhcnNlRXhwKGV4cCk7XHJcbiAgICAgICAgICAgIHRoaXMucHJvZ3JhbXNbZXhwXSA9IHByb2dyYW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcHJvZ3JhbTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZVRlbXBsYXRlKHRwbCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZVRwbCh0cGwpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVDb21wb25lbnQobmFtZSkge1xyXG4gICAgICAgIHZhciBpZGVudGlmaWVyLCBjb21wb25lbnQsXHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMudHlwZS5jb21wb25lbnRzO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW25hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gYnVmZmVyW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmluamVjdG9yLnBhcnNlRnVsbE5hbWUobmFtZSwgdGhpcy5uc0FsaWFzKTtcclxuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5pbmplY3Rvci5nZXRDb21wb25lbnQoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xyXG4gICAgICAgICAgICBidWZmZXJbbmFtZV0gPSBjb21wb25lbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVEaXJlY3RpdmUobmFtZSkge1xyXG4gICAgICAgIHZhciBpZGVudGlmaWVyLCBkaXJlY3RpdmUsXHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMudHlwZS5kaXJlY3RpdmVzO1xyXG5cclxuICAgICAgICBpZiAoYnVmZmVyW25hbWVdICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgZGlyZWN0aXZlID0gYnVmZmVyW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmluamVjdG9yLnBhcnNlRnVsbE5hbWUobmFtZSwgdGhpcy5uc0FsaWFzKTtcclxuICAgICAgICAgICAgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5nZXREaXJlY3RpdmUoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xyXG4gICAgICAgICAgICBidWZmZXJbbmFtZV0gPSBkaXJlY3RpdmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc29sdmVGaWx0ZXIobmFtZSkge1xyXG4gICAgICAgIHZhciBpZGVudGlmaWVyLCBmaWx0ZXIsXHJcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMuZmlsdGVycztcclxuXHJcbiAgICAgICAgaWYgKGJ1ZmZlcltuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IGJ1ZmZlcltuYW1lXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZGVudGlmaWVyID0gdGhpcy5pbmplY3Rvci5wYXJzZUZ1bGxOYW1lKG5hbWUsIHRoaXMubnNBbGlhcyk7XHJcbiAgICAgICAgICAgIGZpbHRlciA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlRmlsdGVyKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcclxuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gZmlsdGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZpbHRlcjtcclxuICAgIH1cclxuXHJcbiAgICBkZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHZhciByb2xlcyA9IHtcbiAgICBmaWx0ZXI6IDAsXG4gICAgc2VydmljZTogMSxcbiAgICBjb21wb25lbnQ6IDIsXG4gICAgZGlyZWN0aXZlOiAzXG59OyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEsIHRydWUpO1xufVxuXG5leHBvcnQgY2xhc3MgU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBzZXJ2aWNlQ29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL2ZpbHRlcic7XG5pbXBvcnQgeyBTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlJztcblxuZnVuY3Rpb24gbmFtZXNwYWNlKG5hbWUpIHtcbiAgICBmdW5jdGlvbiBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSB7XG4gICAgICAgIHJldHVybiB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBuYW1lc3BhY2U6IG5hbWVcbiAgICAgICAgfSwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudChrZXksIGNvbmZpZywgbWVyZ2VNZXRhZGF0YShtZXRhZGF0YSkpO1xuICAgICAgICB9LFxuICAgICAgICBkaXJlY3RpdmU6IGZ1bmN0aW9uIChrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgICAgIHJldHVybiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2VydmljZTogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1lcmdlTWV0YWRhdGEobWV0YWRhdGEpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyKGtleSwgY29uZmlnLCBtZXJnZU1ldGFkYXRhKG1ldGFkYXRhKSk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG5mdW5jdGlvbiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBkaXJlY3RpdmUoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgdmFyIGNvbnN0cnVjdG9yID0gZmFjdG9yeS5tYWtlRmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJGaWx0ZXIoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBzZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZVNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICBpbmplY3Rvci5yZWdpc3RlclNlcnZpY2Uoa2V5LCBjb25zdHJ1Y3Rvcik7XG4gICAgcmV0dXJuIGNvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBpc0NvbXBvbmVudChpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIENvbXBvbmVudDtcbn1cblxuZnVuY3Rpb24gaXNEaXJlY3RpdmUoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBEaXJlY3RpdmU7XG59XG5cbmZ1bmN0aW9uIGlzRmlsdGVyKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRmlsdGVyO1xufVxuXG5mdW5jdGlvbiBpc1NlcnZpY2UoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBTZXJ2aWNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoc2VsZWN0b3IsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBSb290ID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnLCB1dGlscy5tZXJnZSh7XG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgIH0sIG1ldGFkYXRhKSk7XG4gICAgdmFyIHJvb3QgPSBuZXcgUm9vdCgpO1xuXG4gICAgZG9tLmNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxlbWVudCk7XG4gICAgcm9vdC4kcmVuZGVyKCk7XG4gICAgcm9vdC4kbW91bnQoZWxlbWVudCk7XG59XG5cbmV4cG9ydCB7XG4gICAgQ29tcG9uZW50LFxuICAgIERpcmVjdGl2ZSxcbiAgICBGaWx0ZXIsXG4gICAgU2VydmljZSxcbiAgICBpc0NvbXBvbmVudCxcbiAgICBpc0RpcmVjdGl2ZSxcbiAgICBpc0ZpbHRlcixcbiAgICBpc1NlcnZpY2UsXG4gICAgbmFtZXNwYWNlLFxuICAgIHJlbmRlcixcbiAgICBpbmplY3RvclxufTsiXSwic291cmNlUm9vdCI6IiJ9