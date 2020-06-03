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
        this.$$renderer = new _render__WEBPACK_IMPORTED_MODULE_2__["Renderer"](this.$$parent, template);
        this.$$renderer.render();
        return this.$$renderer;
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
    _this.buffer = new Map();
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
      var newBuffer = new Map();
      _utils__WEBPACK_IMPORTED_MODULE_2__["forEach"](items, function (item, key) {
        var renderer = self.getRendererFromBuffer(self.buffer, item);

        if (!renderer) {
          var locals = {};
          locals['$key'] = key;
          locals['$index'] = key;
          locals[self.itemExp] = item;
          renderer = self.$render(self.itemTemplate, locals);
        }

        self.setRendererToBuffer(newBuffer, item, renderer);
        fragment.appendChild(renderer.view);
      });
      this.buffer.entries(function (list) {
        list.forEach(function (renderer) {
          renderer.destroy();
        });
      });
      this.buffer = newBuffer;
      return fragment;
    }
  }, {
    key: "getRendererFromBuffer",
    value: function getRendererFromBuffer(buffer, dataItem) {
      var renderer;

      if (buffer.has(dataItem)) {
        var list = buffer.get(dataItem);

        if (list.length) {
          renderer = list.shift();
        } else {
          buffer["delete"](dataItem);
        }
      }

      return renderer;
    }
  }, {
    key: "setRendererToBuffer",
    value: function setRendererToBuffer(buffer, dataItem, renderer) {
      var list;

      if (buffer.has(dataItem)) {
        list = buffer.get(dataItem);
      } else {
        list = [];
        buffer.set(dataItem, list);
      }

      list.push(renderer);
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      this.buffer = null;
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
    this.builder = new _exp_builder__WEBPACK_IMPORTED_MODULE_2__["ExpBuilder"]();
    this.parser = scope.$parser || {
      parseExpression: _exp_api__WEBPACK_IMPORTED_MODULE_3__["parseExp"]
    };
  } // get value from expression


  _createClass(Evaluator, [{
    key: "evaluate",
    value: function evaluate(exp, locals) {
      var program = this.parser.parseExpression(exp);
      return this.evaluateProgram(program, locals);
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
      var program = this.parser.parseExpression(exp);
      return this.assignProgram(program, value, locals);
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
/*! exports provided: forEach, some, copy, extend, merge, object, inherit, lowercase, uppercase, isUndefined, isDefined, isObject, isBlankObject, isNumber, isDate, isFunction, isRegExp, isBoolean, isArray, isString, isSame, isEmpty, isFormData, debug, contains, containsStr, hasProperty, getProperty, setProperty, concat, orderBy, orderByDescending, toNumber, remove, format, escapeHtml, join, Local, Message, events, isMessage, isProxy, getTarget, handler, Observer, parseOptions, AST, NullExpressionNode, AstNode, AssignmentExpressionNode, BinaryExpressionNode, CallExpressionNode, ConditionalExpressionNode, ExpressionStatementNode, IdentifierNode, LiteralNode, LogicalExpressionNode, MemberExpressionNode, ObjectExpressionNode, ProgramNode, PropertyNode, UnaryExpressionNode, ArrayExpressionNode, ExpLexer, ExpParser, lexExp, parseExp, ExpBuilder, Evaluator, Analyser, nodeType, VNode, VAttr, VCmnt, VElm, VText, VType, lexTpl, parseTpl, isVElm, isVAttr, isVText, isVComment, TplBuilder, Binding, Expression, Renderer, Component, Directive, Filter, Service, isComponent, isDirective, isFilter, isService, namespace, render, injector, component, directive, filter, service, ClassDirective, StyleDirective */
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
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/core/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./src/utils.js");


var isProxySymbol = Symbol('__isProxy'),
    targetSymbol = Symbol('__target');
var handler = {
  get: getProxy,
  set: setProxy
}; // extends object prototype, add function toProxy

Object.prototype.toProxy = function () {
  return isProxy(this) ? this : new Proxy(this, handler);
};

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
    key: "evaluate",
    value: function evaluate(exp, locals) {
      locals = _utils__WEBPACK_IMPORTED_MODULE_0__["merge"](this.locals, locals);
      return this.scope.$eval(exp, locals);
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
  }, {
    key: "nsAlias",
    get: function get() {
      return this.scope.$data.alias;
    }
  }, {
    key: "view",
    get: function get() {
      var view = document.createDocumentFragment();
      this.elms.forEach(function (elm) {
        return view.appendChild(elm);
      });
      return view;
    }
  }]);

  function Renderer(scope, template, locals) {
    _classCallCheck(this, Renderer);

    this.scope = scope;
    this.template = template;
    this.locals = locals;
    this.elms = [];
    this.vnodes = [];
    this.type = {
      components: {},
      directives: {}
    };
    this.entity = {
      bindings: [],
      components: [],
      directives: []
    };
    this.parser = scope.$parser;
  }

  _createClass(Renderer, [{
    key: "newBinding",
    value: function newBinding(text) {
      var binding = new _binding__WEBPACK_IMPORTED_MODULE_4__["Binding"](this.scope, text, this.locals);
      this.entity.bindings.push(binding);
      return binding;
    }
  }, {
    key: "newComponent",
    value: function newComponent(cls) {
      var child = this.injector.createComponent(cls);
      this.scope.$appendChild(child);
      this.entity.components.push(child);
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
      var identifier,
          component,
          name = velm.nodeName,
          buffer = this.type.components;

      if (buffer[name] !== undefined) {
        component = buffer[name];
      } else {
        identifier = this.injector.parseFullName(name, this.nsAlias);
        component = this.injector.getComponent(identifier.key, identifier.ns);
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
          buffer = this.type.directives;

      if (buffer[name] !== undefined) {
        directive = buffer[name];
      } else {
        identifier = this.injector.parseFullName(name, this.nsAlias);
        directive = this.injector.getDirective(identifier.key, identifier.ns);
        buffer[name] = directive;
      } // vattr.nodeData.identifier = identifier;


      return directive;
    }
  }, {
    key: "bindTranslateChanged",
    value: function bindTranslateChanged() {
      var bindings = this.entity.bindings;

      if (!bindings.length) {
        return;
      } // update text while translate changed


      this.unbindTranslateChanged = _core__WEBPACK_IMPORTED_MODULE_3__["events"].translateChanged.on(function () {
        bindings.forEach(function (binding) {
          binding.detect();
          binding.patch();
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      // must set a root element for directive life cycle "afterLink" hoops
      var view = document.createDocumentFragment();
      this.vnodes = this.parser.parseTemplate(this.template);
      this.compileNodes(this.vnodes); // this.entity.directives.forEach(directive => directive.$prelink());

      this.linkNodes(this.vnodes).forEach(function (elm) {
        return view.appendChild(elm);
      }); // call directive life cycle hoops

      this.entity.directives.forEach(function (directive) {
        return directive.$postlink();
      }); // cache the generated elements

      _dom__WEBPACK_IMPORTED_MODULE_1__["getChildrenOfElement"](view).forEach(function (elm) {
        return _this.elms.push(elm);
      });
      return view;
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
        return _this4.entity.directives.push(directive);
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
        attrData.isDomEvent = _utils__WEBPACK_IMPORTED_MODULE_0__["contains"](domEvents, attrData.name);
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

            if (component.$hasProperty(attrData.name)) {
              component.$setProperty(attrData.name, value);
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
          velm.nodeData.component.$bind(attrData.name, function (e) {
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
  }, {
    key: "destroy",
    value: function destroy() {
      this.unbindTranslateChanged();
      this.entity.components.forEach(function (item) {
        return item.$destroy();
      });
      this.entity.directives.forEach(function (item) {
        return item.$destroy();
      });
      this.entity.bindings.forEach(function (item) {
        return item.destroy();
      });
      this.vnodes.forEach(function (item) {
        return item.destroy();
      });
      this.entity.components.length = 0;
      this.entity.directives.length = 0;
      this.entity.bindings.length = 0;
      this.vnodes.length = 0;
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
  this.$$renderer = null;
  this.$$observer = new _observer__WEBPACK_IMPORTED_MODULE_3__["Observer"](this);
  this.$injector = _injector__WEBPACK_IMPORTED_MODULE_5__["injector"];
  this.$parser = new _parser__WEBPACK_IMPORTED_MODULE_2__["Parser"]();
  this.$evaluator = new _exp__WEBPACK_IMPORTED_MODULE_6__["Evaluator"](this);
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
  }]);

  function Component(data) {
    _classCallCheck(this, Component);

    componentConstructor.call(this, data);
  }

  _createClass(Component, [{
    key: "$getFilter",
    value: function $getFilter(fullName) {
      var identifier = this.$injector.parseFullName(fullName, this.$data.alias);
      return this.$injector.createFilter(identifier.key, identifier.ns);
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
      return this.$evaluator.evaluate(exp, locals);
    }
  }, {
    key: "$assign",
    value: function $assign(exp, value, locals) {
      return this.$evaluator.assign(exp, value, locals);
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
      this.$$renderer = new _render__WEBPACK_IMPORTED_MODULE_4__["Renderer"](this, template);
      this.$$renderer.render();
      return this.$$renderer;
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

      if (this.$$renderer == null) {
        throw new Error('current component is not rendered');
      }

      element.appendChild(this.$$renderer.view);
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
      this.$$observer.destroy();

      if (this.$$renderer != null) {
        this.$$renderer.destroy();
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
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../render */ "./src/render/index.js");
/* harmony import */ var _injector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./injector */ "./src/view/injector.js");
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
  _injector__WEBPACK_IMPORTED_MODULE_4__["injector"].injectServices(this, this.$data);
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
    key: "$render",
    value: function $render(template, locals) {
      var renderer = new _render__WEBPACK_IMPORTED_MODULE_3__["Renderer"](this.$scope, template, locals);
      renderer.render();
      return renderer;
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
        hasLoopDependency = this.serviceStack.indexOf(serviceFullName) === -1;
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
  function Parser() {
    _classCallCheck(this, Parser);

    this.programs = {};
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
    key: "destroy",
    value: function destroy() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkcmVuZGVyZXIiLCJSZW5kZXJlciIsInJlbmRlciIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCIkaGlkZUVsZW1lbnQiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIiRyZW1vdmVFbGVtZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJidWZmZXIiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJuZXdCdWZmZXIiLCJ1dGlscyIsIml0ZW0iLCJyZW5kZXJlciIsImdldFJlbmRlcmVyRnJvbUJ1ZmZlciIsImxvY2FscyIsIiRyZW5kZXIiLCJzZXRSZW5kZXJlclRvQnVmZmVyIiwidmlldyIsImVudHJpZXMiLCJsaXN0IiwiZGVzdHJveSIsImRhdGFJdGVtIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwic2hpZnQiLCJzZXQiLCJTaG93RGlyZWN0aXZlIiwiQ2hlY2tlZERpcmVjdGl2ZSIsIlN0YXRlRGlyZWN0aXZlIiwiRGlzYWJsZWREaXJlY3RpdmUiLCJSZWFkb25seURpcmVjdGl2ZSIsIlNlbGVjdGVkRGlyZWN0aXZlIiwic2VsZWN0b3IiLCJoYXNBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiLCJDbGFzc0V2ZW5EaXJlY3RpdmUiLCJldmFsdWF0ZSIsIkNsYXNzRGlyZWN0aXZlIiwiQ2xhc3NPZGREaXJlY3RpdmUiLCJuZXdDbGFzcyIsIm9sZENsYXNzIiwic2tpcEN1cnJlbnRFbG0iLCJqb2luIiwiU3R5bGVFdmVuRGlyZWN0aXZlIiwiU3R5bGVEaXJlY3RpdmUiLCJTdHlsZU9kZERpcmVjdGl2ZSIsIm5ld1N0eWxlIiwib2xkU3R5bGUiLCJzdHlsZSIsIlN3aXRjaERlZmF1bHREaXJlY3RpdmUiLCJzd2l0Y2hDdHJsIiwiJHNlZWtVcERpcmVjdGl2ZSIsIm1hdGNoRGVmYXVsdCIsIm9uIiwiZGVmYXVsdE1hdGNoZWQiLCJTd2l0Y2hXaGVuRGlyZWN0aXZlIiwibWF0Y2hlZCIsImNoYW5nZWQiLCJwbHVzTWF0Y2giLCJtaW51c01hdGNoIiwiU3dpdGNoRGlyZWN0aXZlIiwibWF0Y2hDb3VudCIsImZpcmUiLCJjaGVja0RlZmF1bHQiLCJnZXRDaGlsZHJlbk9mRWxlbWVudCIsIkFycmF5Iiwic2xpY2UiLCJjaGlsZE5vZGVzIiwiY2xlYXJDaGlsZHJlbk9mRWxlbWVudCIsImNoaWxkIiwicmVtb3ZlQ2hpbGQiLCJyZXBsYWNlRWxlbWVudCIsIm5ld0VsbSIsInJlbW92ZUVsZW1lbnQiLCJyZW1vdmVFbGVtZW50c0JldHdlZW4iLCJzdGFydEVsbSIsImVuZEVsbSIsInByZXZpb3VzU2libGluZyIsIm5leHRTaWJsaW5nIiwiYXBwZW5kRWxlbWVudCIsImxhc3RDaGlsZCIsImFkZENsYXNzIiwiY2xzIiwidHJpbSIsInNwbGl0IiwiYyIsImN1ciIsImdldEF0dHJpYnV0ZSIsInJlbW92ZUNsYXNzIiwidGFyIiwicmVwbGFjZSIsImxvYWRTdHlsZVN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJjcmVhdGVUZXh0Tm9kZSIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiQWNjZXNzb3IiLCJjYWxsZWUiLCJleHAiLCJjaGlsZHJlbiIsIkFuYWx5c2VyIiwicGFyc2VFeHByZXNzaW9uIiwicGFyc2VFeHAiLCJwcm9ncmFtIiwiYWNjZXNzb3IiLCJidWlsZGVyIiwiRXhwQnVpbGRlciIsImFuYWx5c2VQcm9ncmFtIiwiYW5hbHlzZU5vZGUiLCJub2RlIiwiY29udGV4dCIsInR5cGUiLCJBU1QiLCJFeHByZXNzaW9uU3RhdGVtZW50IiwiYW5hbHlzZUV4cHJlc3Npb24iLCJBc3NpZ25tZW50RXhwcmVzc2lvbiIsImFuYWx5c2VBc3NpZ25tZW50IiwiQ29uZGl0aW9uYWxFeHByZXNzaW9uIiwiYW5hbHlzZUNvbmRpdGlvbiIsIkxvZ2ljYWxFeHByZXNzaW9uIiwiYW5hbHlzZUxvZ2ljIiwiQmluYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VCaW5hcnkiLCJVbmFyeUV4cHJlc3Npb24iLCJhbmFseXNlVW5hcnkiLCJDYWxsRXhwcmVzc2lvbiIsImFuYWx5c2VDYWxsIiwiTWVtYmVyRXhwcmVzc2lvbiIsImFuYWx5c2VNZW1iZXIiLCJJZGVudGlmaWVyIiwiYW5hbHlzZUlkZW50aWZpZXIiLCJMaXRlcmFsIiwiYW5hbHlzZUxpdGVyYWwiLCJBcnJheUV4cHJlc3Npb24iLCJhbmFseXNlQXJyYXkiLCJQcm9wZXJ0eSIsImFuYWx5c2VQcm9wZXJ0eSIsIk9iamVjdEV4cHJlc3Npb24iLCJhbmFseXNlT2JqZWN0IiwiYXNzaWdubWVudCIsInJpZ2h0IiwiY29uZGl0aW9uIiwidGVzdCIsImFsdGVybmF0ZSIsImNvbnNlcXVlbnQiLCJsb2dpYyIsImxlZnQiLCJiaW5hcnkiLCJ1bmFyeSIsImFyZ3MiLCJtZW1iZXIiLCJwYXJlbnQiLCJvYmplY3QiLCJjb21wdXRlZCIsInByb3BlcnR5IiwiY3JlYXRlQ2hpbGQiLCJidWlsZCIsImlkZW50aWZpZXIiLCJjcmVhdGVBY2Nlc3NvciIsImxpdGVyYWwiLCJwcm9wIiwicHJvcGVydGllcyIsImFyciIsImFuYWx5c2UiLCJFdmFsdWF0b3IiLCJhbGxvd051bGwiLCJhc3NpZ25JbnRlcmNlcHRvciIsIiRwYXJzZXIiLCJldmFsdWF0ZVByb2dyYW0iLCJldmFsdWF0ZU5vZGUiLCIkbnVsbCIsImFzc2lnblByb2dyYW0iLCJleHByZXNzaW9uIiwicHJvcGVydHlLZXkiLCJldmFsdWF0ZUV4cHJlc3Npb24iLCJldmFsdWF0ZUFzc2lnbm1lbnQiLCJldmFsdWF0ZUNvbmRpdGlvbiIsImV2YWx1YXRlTG9naWMiLCJldmFsdWF0ZUJpbmFyeSIsImV2YWx1YXRlVW5hcnkiLCJldmFsdWF0ZUNhbGwiLCJldmFsdWF0ZU1lbWJlciIsImV2YWx1YXRlSWRlbnRpZmllciIsImV2YWx1YXRlTGl0ZXJhbCIsImV2YWx1YXRlQXJyYXkiLCJldmFsdWF0ZVByb3BlcnR5IiwiZXZhbHVhdGVPYmplY3QiLCJhc3NpZ25tZW50TGVmdCIsImxlZnRWYWx1ZSIsInJpZ2h0VmFsdWUiLCJvcGVyYXRvciIsImFyZ1ZhbHVlcyIsIm1hcCIsIiRnZXRGaWx0ZXIiLCJleGVjdXRlIiwiYXBwbHkiLCJOdWxsRXhwcmVzc2lvbk5vZGUiLCJ0YXJnZXROb2RlIiwiZGVmIiwibGV4RXhwIiwiRXhwTGV4ZXIiLCJsZXgiLCJFeHBQYXJzZXIiLCJwYXJzZSIsImJ1aWxkRXhwcmVzc2lvbiIsImJ1aWxkQXNzaWdubWVudCIsImJ1aWxkQ29uZGl0aW9uIiwiYnVpbGRMb2dpYyIsImJ1aWxkQmluYXJ5IiwiYnVpbGRVbmFyeSIsImJ1aWxkQ2FsbCIsImJ1aWxkTWVtYmVyIiwiYnVpbGRJZGVudGlmaWVyIiwiYnVpbGRMaXRlcmFsIiwiYnVpbGRBcnJheSIsImJ1aWxkUHJvcGVydHkiLCJidWlsZE9iamVjdCIsInJlcyIsInBhcnNlT3B0aW9ucyIsInRleHQiLCJ0b2tlbnMiLCJjaCIsImNoYXJBdCIsInJlYWRTdHJpbmciLCJpc051bWJlciIsInBlZWsiLCJyZWFkTnVtYmVyIiwiaXNJZGVudGlmaWVyU3RhcnQiLCJwZWVrTXVsdGljaGFyIiwicmVhZElkZW50IiwiaXMiLCJpc1doaXRlc3BhY2UiLCJjaDIiLCJjaDMiLCJvcDEiLCJPUEVSQVRPUlMiLCJvcDIiLCJvcDMiLCJ0b2tlbiIsInRocm93RXJyb3IiLCJjaGFycyIsImkiLCJudW0iLCJjb2RlUG9pbnRBdCIsImlzVmFsaWRJZGVudGlmaWVyU3RhcnQiLCJpc0lkZW50aWZpZXJDb250aW51ZSIsImlzVmFsaWRJZGVudGlmaWVyQ29udGludWUiLCJjcCIsImNoYXJDb2RlQXQiLCJjcDEiLCJjcDIiLCJlcnJvciIsInN0YXJ0IiwiZW5kIiwiY29sU3RyIiwic3Vic3RyaW5nIiwibnVtYmVyIiwicGVla0NoIiwiaXNFeHBPcGVyYXRvciIsImNvbnN0YW50IiwiTnVtYmVyIiwicXVvdGUiLCJzdHJpbmciLCJyYXdTdHJpbmciLCJlc2NhcGUiLCJoZXgiLCJtYXRjaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInBhcnNlSW50IiwicmVwIiwiRVNDQVBFIiwib3BlcmF0b3JUZXh0IiwibGV4ZXIiLCJtc2ciLCJQcm9ncmFtTm9kZSIsImV4cHJlc3Npb25TdGF0ZW1lbnQiLCJleHBlY3QiLCJFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSIsImZpbHRlckNoYWluIiwiYXN0IiwidGVybmFyeSIsImlzQXNzaWduYWJsZSIsIkFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSIsImxvZ2ljYWxPUiIsImNvbnN1bWUiLCJDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbEFORCIsIkxvZ2ljYWxFeHByZXNzaW9uTm9kZSIsImVxdWFsaXR5IiwicmVsYXRpb25hbCIsIkJpbmFyeUV4cHJlc3Npb25Ob2RlIiwiYWRkaXRpdmUiLCJtdWx0aXBsaWNhdGl2ZSIsIlVuYXJ5RXhwcmVzc2lvbk5vZGUiLCJwcmltYXJ5IiwiYXJyYXlEZWNsYXJhdGlvbiIsImxpdGVyYWxzIiwiaGFzT3duUHJvcGVydHkiLCJMaXRlcmFsTm9kZSIsIm5leHQiLCJwZWVrQWhlYWQiLCJDYWxsRXhwcmVzc2lvbk5vZGUiLCJwYXJzZUFyZ3VtZW50cyIsIk1lbWJlckV4cHJlc3Npb25Ob2RlIiwiYmFzZUV4cHJlc3Npb24iLCJpZGVudGlmaWVycyIsImVudGlyZU5hbWUiLCJJZGVudGlmaWVyTm9kZSIsInBlZWtUb2tlbiIsIkFycmF5RXhwcmVzc2lvbk5vZGUiLCJQcm9wZXJ0eU5vZGUiLCJPYmplY3RFeHByZXNzaW9uTm9kZSIsImUxIiwiZTIiLCJlMyIsImU0IiwidCIsIkFzdE5vZGUiLCJQcm9ncmFtIiwia2luZCIsInByZWZpeCIsInVuZGVmaW5lZCIsIkRlbGF5ZXIiLCJ0aW1lb3V0IiwiZGVsYXlJZCIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJMaXN0ZW5lciIsInZhbHVlQ2hhbmdlZCIsImNvbGxlY3Rpb25DaGFuZ2VkIiwib2xkVmFsdWUiLCJPYnNlcnZlciIsImFjY2Vzc29ycyIsImxpc3RlbmVycyIsIndhdGNoZXIiLCJXYXRjaGVyIiwiYW5hbHlzZXIiLCJkZWxheWVyIiwibm90aWZ5IiwiZXZhbHVhdG9yIiwiaGFzQ2hhbmdlIiwic2V0TmV3VmFsdWUiLCJzZXRDb2xsZWN0aW9uQ2hhbmdlZCIsImdldEFjY2Vzc29yIiwiY3JlYXRlTGlzdGVuZXIiLCJ1bndhdGNoQWNjZXNzb3JzIiwidW53YXRjaCIsIndhdGNoQWNjZXNzb3JzIiwidmFsdWVzIiwid2F0Y2giLCJub3RpZnlDaGFuZ2UiLCJyZW1vdmVMaXN0ZW5lciIsInVud2F0Y2hQcm9wcyIsIndhdGNoUHJvcHMiLCJ1bndhdGNoRXhwIiwiYXJndW1lbnRzIiwiY29sbGVjdGlvbiIsImlzUHJveHlTeW1ib2wiLCJTeW1ib2wiLCJ0YXJnZXRTeW1ib2wiLCJnZXRQcm94eSIsInNldFByb3h5IiwiT2JqZWN0IiwidG9Qcm94eSIsImlzUHJveHkiLCJQcm94eSIsInByb3h5IiwiZ2V0VGFyZ2V0IiwibWFrZVByb3h5IiwiT2JqZWN0TGlzdGVuZXIiLCJrZXlzIiwiZ2V0SGFuZGxlcnMiLCJvZmZQcm9wZXJ0eUNoYW5nZWQiLCJoYW5kbGVQcm9wZXJ0eUNoYW5nZWQiLCJnZXRMaXN0ZW5lciIsImZpcmVLZXkiLCJmaWx0ZXJzIiwiYWN0aW9uIiwiZ2V0T3JDcmVhdGVMaXN0ZW5lciIsInJlZ2lzdGVyS2V5IiwidW5yZWdpc3RlcktleSIsIkJpbmRpbmciLCJpc0V4cCIsImxvZ2ljYWwiLCJhdXRvbWF0aW9uIiwic2VnbWVudHMiLCJleHByZXNzaW9ucyIsIkV4cHJlc3Npb24iLCJjcmVhdGVFeHByZXNzaW9uIiwibGFzdEluZGV4Iiwic2VnbWVudCIsImRldGVjdCIsInBhdGNoIiwiY29tcHV0ZSIsInJlZHVjZSIsInByZXYiLCJoYXNUcmFuc2xhdGlvbiIsIiRhc3NpZ24iLCIkd2F0Y2giLCJldmVudFRleHQiLCJkb21FdmVudHMiLCIkaW5qZWN0b3IiLCIkZGF0YSIsImFsaWFzIiwiZWxtcyIsInZub2RlcyIsImNvbXBvbmVudHMiLCJkaXJlY3RpdmVzIiwiZW50aXR5IiwiYmluZGluZ3MiLCJiaW5kaW5nIiwiY3JlYXRlQ29tcG9uZW50IiwiJGFwcGVuZENoaWxkIiwiY3JlYXRlRGlyZWN0aXZlIiwiJCRzY29wZSIsIm5vZGVOYW1lIiwicGFyc2VGdWxsTmFtZSIsIm5zQWxpYXMiLCJnZXRDb21wb25lbnQiLCJucyIsIm5vZGVEYXRhIiwiZ2V0RGlyZWN0aXZlIiwidW5iaW5kVHJhbnNsYXRlQ2hhbmdlZCIsInBhcnNlVGVtcGxhdGUiLCJjb21waWxlTm9kZXMiLCJsaW5rTm9kZXMiLCIkcG9zdGxpbmsiLCJ2bm9kZSIsImNvbXBpbGVOb2RlIiwiaXNWVGV4dCIsImNvbXBpbGVUZXh0IiwiaXNWQ29tbWVudCIsImNvbXBpbGVDb21tZW50IiwiY29tcGlsZUVsbSIsImxpbmtOb2RlIiwibGlua1RleHQiLCJsaW5rQ29tbWVudCIsImxpbmtFbG0iLCJlbG1EYXRhIiwicmVjb2duaXplQ29tcG9uZW50IiwiY3VzdG9tTGlua2VyIiwidmF0dHJzIiwic29tZSIsImF0dHJEYXRhIiwiY29tcGlsZUF0dHIiLCJsaW5rZXIiLCIkcHJpb3JpdHkiLCJzZWVrU2xvdCIsImF0dHJOYW1lIiwiYXR0clZhbHVlIiwibmV3QmluZGluZyIsInN0YXJ0c1dpdGgiLCJpc0V2ZW50Iiwic3Vic3RyIiwiaXNEb21FdmVudCIsInJlY29nbml6ZURpcmVjdGl2ZSIsIm5ld0RpcmVjdGl2ZSIsIiQkdmF0dHIiLCIkYXNzaWdubWVudCIsIiRjb21waWxlIiwic2V0SHRtbEF0dHIiLCJyZWdpc3RlckF1dG9tYXRpb24iLCIkaGFzUHJvcGVydHkiLCJjb21waWxlIiwidnRleHQiLCJuZXdUZXh0Tm9kZSIsInZjbW50IiwiJGxpbmsiLCJpbnN0YW5jZSIsIm5ld0NvbXBvbmVudCIsImxpbmtBdHRyIiwiJCR2ZWxtIiwiJHNldFNsb3QiLCIkbW91bnQiLCJsaW5rIiwiJGNoYW5nZSIsImlzVkVsbSIsInNsb3QiLCJnZXRBdHRyIiwiZ2V0SW5uZXJUcGwiLCIkZGVzdHJveSIsIlZBdHRyIiwibm9kZVR5cGUiLCJhdHRyaWJ1dGUiLCJWTm9kZSIsIlZDbW50IiwiY29tbWVudCIsIlZFbG0iLCJlbGVtZW50Iiwic2VsZkNsb3NlZCIsIlRwbEJ1aWxkZXIiLCJhdHRyIiwibWF0Y2hlcyIsImJlbG9uZ1RvIiwic2V0VmFsdWUiLCJjb21waWxlT3B0aW9ucyIsInRwbCIsInBhcnNlVHBsIiwiY2xlYXJDaGlsZE5vZGVzIiwiY29weSIsImNsb25lTm9kZSIsImNkYXRhU2VjdGlvbiIsImVudGl0eVJlZmVyZW5jZSIsInByb2Nlc3NpbmdJbnN0cnVjdGlvbiIsImRvY3VtZW50VHlwZSIsImRvY3VtZW50RnJhZ21lbnQiLCJub3RhdGlvbiIsImZpcnN0Q2hpbGQiLCJidWlsZFNpYmxpbmciLCJyZWZDaGlsZCIsIm5ld0NoaWxkIiwiY2xlYXJQYXJlbnRBbmRTaWJsaW5nIiwiZGVlcCIsIm9uQ2xvbmVOb2RlIiwib25EZXN0cm95Iiwib3duZXJEb2N1bWVudCIsIlZUZXh0IiwiVlR5cGUiLCJsZXhUcGwiLCJUcGxMZXhlciIsIlRwbFBhcnNlciIsImlzVkF0dHIiLCJidWlsZFRleHQiLCJidWlsZENvbW1lbnQiLCJidWlsZEVsZW1lbnQiLCJhdHRyVHBsIiwiYnVpbGRBdHRyaWJ1dGUiLCJjaGlsZFRwbCIsInN0ciIsImJlZ2luIiwiZXhwZWN0U3RyaW5nIiwidGV4dFRhZyIsImNsb3NpbmciLCJkb2N0eXBlIiwidGFnIiwiZXF1YWwiLCJhbGxvd0RvY1R5cGUiLCJyZWFkQ29tbWVudCIsInJlYWRUYWciLCJyZWFkVGV4dCIsInJvb3QiLCJjdXJyZW50IiwiZG9jVHlwZSIsImF0dHJzIiwicCIsInB1c2hBdHRyIiwiY2hpbGRFbGVtZW50cyIsInB1c2hDaGlsZCIsImVsZXMiLCJvcmlnaW4iLCJkZWJ1Z01vZGUiLCJ0b1N0cmluZyIsImdldFByb3RvdHlwZU9mIiwiaWdub3JlT3duIiwiaXNBcnJheSIsImlzT2JqZWN0Iiwib2JqSW5kZXgiLCJpc0Jvb2xlYW4iLCJuZXdBcnIiLCJuZXdPYmoiLCJleHRlbmQiLCJkZWVwTWVyZ2UiLCJwbGFpbk1lcmdlIiwibWVyZ2UiLCJzb3VyY2UiLCJvIiwiRiIsImluaGVyaXRQcm90b3R5cGUiLCJzdWJUeXBlIiwic3VwZXJUeXBlIiwiY29uc3RydWN0b3IiLCJpbmhlcml0IiwibG93ZXJjYXNlIiwiaXNTdHJpbmciLCJ0b0xvd2VyQ2FzZSIsInVwcGVyY2FzZSIsInRvVXBwZXJDYXNlIiwiaXNVbmRlZmluZWQiLCJpc0RlZmluZWQiLCJpc01hcCIsImlzQmxhbmtPYmplY3QiLCJpc0RhdGUiLCJpc0Z1bmN0aW9uIiwiaXNSZWdFeHAiLCJpc0Zvcm1EYXRhIiwiRm9ybURhdGEiLCJpc1NhbWUiLCJvYmoxIiwib2JqMiIsInNhbWUiLCJpc0VtcHR5IiwiZGVidWciLCJsb2ciLCJjb25zb2xlIiwiY29udGFpbnMiLCJjb250YWluc1N0ciIsImlnbm9yZUNhc2UiLCJoYXNQcm9wZXJ0eSIsImtleTIiLCJoYXNQcm9wIiwidmFsdWUzIiwia2V5MyIsImdldFByb3BlcnR5Iiwic2V0UHJvcGVydHkiLCJjb25jYXQiLCJvcmRlckJ5IiwiZ2V0dGVyIiwiZ2V0VmFsdWUiLCJzb3J0IiwiYSIsImIiLCJvcmRlckJ5RGVzY2VuZGluZyIsInRvTnVtYmVyIiwibiIsInBhcnNlRmxvYXQiLCJpc05hTiIsImZvcm1hdCIsIm1hdGNoVGV4dCIsImVzY2FwZUh0bWwiLCJodG1sIiwic2VwYXJhdG9yIiwiY29tcG9uZW50Q29uc3RydWN0b3IiLCIkJGNoaWxkcmVuIiwiJCRvYnNlcnZlciIsIlBhcnNlciIsIiRldmFsdWF0b3IiLCIkZGVsZWdhdGUiLCJpbmplY3RTZXJ2aWNlcyIsImZ1bGxOYW1lIiwiY3JlYXRlRmlsdGVyIiwiJGdldFByb3BlcnR5IiwibWVzc2FnZSIsIndhdGNoQ29sbGVjdGlvbiIsInRlbXBsYXRlSWQiLCJnZXRFbGVtZW50QnlJZCIsIiRnZXRUZW1wbGF0ZSIsInNlbGVjdG9yT3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsIiRyZW1vdmVDaGlsZCIsImRpcmVjdGl2ZUNvbnN0cnVjdG9yIiwib25Db21waWxlIiwib25MaW5rIiwiYWZ0ZXJMaW5rIiwib25DaGFuZ2UiLCIka2V5IiwiJCRzZWFyY2hEaXJlY3RpdmUiLCJ5ZXMiLCJjb21wb25lbnRDbGFzcyIsImRpcmVjdGl2ZUNsYXNzIiwiZmlsdGVyQ2xhc3MiLCJGaWx0ZXIiLCJmaWx0ZXJDb25zdHJ1Y3RvciIsInNlcnZpY2VDbGFzcyIsIlNlcnZpY2UiLCJzZXJ2aWNlQ29uc3RydWN0b3IiLCJGYWN0b3J5Iiwicm9sZUlkIiwibmV3TmFtZSIsInJvbGVzIiwiY29uZmlnIiwiY29uc3RydWN0b3JOYW1lIiwicmVuYW1lIiwib25Db25zdHJ1Y3QiLCJjb25zdHJ1Y3QiLCJGdW5jdGlvbiIsIm1ha2UiLCJmYWN0b3J5IiwiSW5qZWN0b3IiLCJjbGFzc0NvbnRhaW5lciIsImluc3RhbmNlQ29udGFpbmVyIiwic2VydmljZVN0YWNrIiwiY29udGFpbmVyIiwiZ2V0Q2xhc3NDb250YWluZXIiLCJyZWdpc3RlciIsImNvbnN0cnVjdG9ycyIsIm1ldGEiLCJuYW1lc3BhY2VzIiwia2V5T3JDb25zdHJ1Y3RvciIsImNyZWF0ZSIsImdldEluc3RhbmNlQ29udGFpbmVyIiwiZ2V0RmlsdGVyIiwiZ2V0U2VydmljZSIsIm5vblNoYXJlZCIsInBvcCIsInNob3J0TmFtZSIsImNoZWNrTG9vcERlcGVuZGVuY3kiLCJzZXJ2aWNlRnVsbE5hbWUiLCJoYXNMb29wRGVwZW5kZW5jeSIsImluamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInByaXZhdGVLZXkiLCJjcmVhdGVTZXJ2aWNlIiwicHJvZ3JhbXMiLCJtYWtlQ29tcG9uZW50IiwibWFrZURpcmVjdGl2ZSIsIm1ha2VGaWx0ZXIiLCJtYWtlU2VydmljZSIsImlzQ29tcG9uZW50IiwiaXNEaXJlY3RpdmUiLCJpc0ZpbHRlciIsImlzU2VydmljZSIsIlJvb3QiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO1FDVkE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQSx3Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0lBTU1BLGEsV0FKTEMsNERBQVMsQ0FBQztBQUNQQyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLDJCQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLQyxLQUFMLENBQVdDLElBQVgsR0FBa0IsRUFBbEI7QUFGVTtBQUdiOzs7OzhCQUVTO0FBQ04sVUFBSUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0QsS0FBMUI7QUFDQSxVQUFJRSxRQUFRLEdBQUdGLEtBQUssQ0FBQyxLQUFLRixLQUFMLENBQVdDLElBQVosQ0FBcEI7O0FBRUEsVUFBSUcsUUFBSixFQUFjO0FBQ1YsYUFBS0MsVUFBTCxHQUFrQixJQUFJQyxnREFBSixDQUFhLEtBQUtILFFBQWxCLEVBQTRCQyxRQUE1QixDQUFsQjtBQUNBLGFBQUtDLFVBQUwsQ0FBZ0JFLE1BQWhCO0FBQ0EsZUFBTyxLQUFLRixVQUFaO0FBQ0g7QUFDSjs7OztFQWZ1QkcsK0M7Ozs7Ozs7Ozs7OztBQ1I1QjtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNDLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCO0FBQzNCLFNBQU9BLEdBQUcsWUFBWUMsZ0RBQXRCO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDSkQ7QUFBQTtBQUFBO0NBRUE7O0FBQ08sSUFBSUMsTUFBTSxHQUFHO0FBQ2hCQyxpQkFBZSxFQUFFLElBQUlGLGdEQUFKLEVBREQ7QUFFaEJHLGtCQUFnQixFQUFFLElBQUlILGdEQUFKO0FBRkYsQ0FBYixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGTyxJQUFNSSxLQUFiLEdBQ0ksZUFBWUMsQ0FBWixFQUFlQyxHQUFmLEVBQW9CO0FBQUE7O0FBQ2hCLE9BQUtDLE1BQUwsR0FBY0YsQ0FBZDtBQUNBLE9BQUtHLFFBQUwsR0FBZ0JGLEdBQWhCO0FBQ0gsQ0FKTCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1OLE9BQWI7QUFDSSxxQkFBYztBQUFBOztBQUNWLFNBQUtTLElBQUwsR0FBWSxFQUFaO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNIOztBQUpMO0FBQUE7QUFBQSx1QkFNT0MsRUFOUCxFQU1XO0FBQUE7O0FBQ0gsVUFBSUMsS0FBSyxHQUFHLEtBQUtGLFFBQUwsQ0FBY0csT0FBZCxDQUFzQkYsRUFBdEIsQ0FBWixDQURHLENBR0g7O0FBQ0EsVUFBR0MsS0FBSyxLQUFLLENBQUMsQ0FBZCxFQUFnQjtBQUNaLGFBQUtGLFFBQUwsQ0FBY0ksSUFBZCxDQUFtQkgsRUFBbkI7QUFDSCxPQUZELE1BR0s7QUFDRCxjQUFNLElBQUlJLEtBQUosQ0FBVSxvREFBVixDQUFOO0FBQ0g7O0FBRUQsYUFBTztBQUFBLGVBQU0sS0FBSSxDQUFDQyxHQUFMLENBQVNMLEVBQVQsQ0FBTjtBQUFBLE9BQVA7QUFDSDtBQWxCTDtBQUFBO0FBQUEsd0JBb0JRQSxFQXBCUixFQW9CWTtBQUNKLFVBQUlDLEtBQUssR0FBRyxLQUFLRixRQUFMLENBQWNHLE9BQWQsQ0FBc0JGLEVBQXRCLENBQVo7O0FBRUEsVUFBSUMsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNkLGFBQUtGLFFBQUwsQ0FBY08sTUFBZCxDQUFxQkwsS0FBckIsRUFBNEIsQ0FBNUI7QUFDSDtBQUNKO0FBMUJMO0FBQUE7QUFBQSx5QkE0QlNILElBNUJULEVBNEJlUyxLQTVCZixFQTRCc0I7QUFBQTs7QUFDZEEsV0FBSyxHQUFHQSxLQUFLLElBQUksSUFBakIsQ0FEYyxDQUVkOztBQUNBLFdBQUtULElBQUwsR0FBWUEsSUFBSSxJQUFJLEVBQXBCO0FBRUEsV0FBS0MsUUFBTCxDQUFjUyxPQUFkLENBQXNCLFVBQUFDLE9BQU87QUFBQSxlQUFJQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsS0FBYixFQUFvQixNQUFwQixDQUFKO0FBQUEsT0FBN0I7QUFDSDtBQWxDTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQUksb0RBQUEsQ0FBb0Isa0VBQXBCO0FBRU8sSUFBSUMsV0FBVyxHQUFHLGFBQWxCO0FBQ0EsSUFBSUMsWUFBWSxHQUFHLFFBQW5CLEM7Ozs7Ozs7Ozs7OztBQ0xQO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU3RDLFNBQVQsQ0FBbUJ1QyxRQUFuQixFQUE2QjtBQUNoQyxTQUFPLFVBQVVDLE1BQVYsRUFBa0I7QUFDckIsUUFBSXRDLEdBQUcsR0FBR3FDLFFBQVEsQ0FBQ3JDLEdBQVQsSUFBZ0JzQyxNQUFNLENBQUNwQyxJQUFqQztBQUNBb0MsVUFBTSxDQUFDQyxTQUFQLENBQWlCQyxVQUFqQixHQUE4QkgsUUFBOUI7QUFDQUksa0RBQVEsQ0FBQ0MsaUJBQVQsQ0FBMkIxQyxHQUEzQixFQUFnQ3NDLE1BQWhDO0FBQ0gsR0FKRDtBQUtILEM7Ozs7Ozs7Ozs7OztBQ1JEO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU0ssU0FBVCxDQUFtQk4sUUFBbkIsRUFBNkI7QUFDaEMsU0FBTyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3JCLFFBQUl0QyxHQUFHLEdBQUdxQyxRQUFRLENBQUNyQyxHQUFULElBQWdCc0MsTUFBTSxDQUFDcEMsSUFBakM7QUFDQW9DLFVBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsVUFBakIsR0FBOEJILFFBQTlCO0FBQ0FJLGtEQUFRLENBQUNHLGlCQUFULENBQTJCNUMsR0FBM0IsRUFBZ0NzQyxNQUFoQztBQUNILEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUVPLFNBQVNPLE1BQVQsQ0FBZ0JSLFFBQWhCLEVBQTBCO0FBQzdCLFNBQU8sVUFBVUMsTUFBVixFQUFrQjtBQUNyQixRQUFJdEMsR0FBRyxHQUFHcUMsUUFBUSxDQUFDckMsR0FBVCxJQUFnQnNDLE1BQU0sQ0FBQ3BDLElBQWpDO0FBQ0FvQyxVQUFNLENBQUNDLFNBQVAsQ0FBaUJDLFVBQWpCLEdBQThCSCxRQUE5QjtBQUNBSSxrREFBUSxDQUFDSyxjQUFULENBQXdCOUMsR0FBeEIsRUFBNkJzQyxNQUE3QjtBQUNILEdBSkQ7QUFLSCxDOzs7Ozs7Ozs7Ozs7QUNSRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQUE7QUFBQTtBQUFBO0FBRU8sU0FBU1MsT0FBVCxDQUFpQlYsUUFBakIsRUFBMkI7QUFDOUIsU0FBTyxVQUFVQyxNQUFWLEVBQWtCO0FBQ3JCLFFBQUl0QyxHQUFHLEdBQUdxQyxRQUFRLENBQUNyQyxHQUFULElBQWdCc0MsTUFBTSxDQUFDcEMsSUFBakM7QUFDQW9DLFVBQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsVUFBakIsR0FBOEJILFFBQTlCO0FBQ0FJLGtEQUFRLENBQUNPLGVBQVQsQ0FBeUJoRCxHQUF6QixFQUE4QnNDLE1BQTlCO0FBQ0gsR0FKRDtBQUtILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7QUFDQTtJQU1NVyxpQixXQUpMTiw0REFBUyxDQUFDO0FBQ1A1QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7Ozs2QkFFUWtELEssRUFBTztBQUNaLFdBQUs5QixRQUFMLENBQWMrQixTQUFkLEdBQTBCRCxLQUExQjtBQUNIOzs7O0VBUDJCRSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEM7QUFDQTtJQU1NQyxhLFdBSkxWLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sMkJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRa0QsSyxFQUFPO0FBQ1osV0FBSzlCLFFBQUwsQ0FBY2tDLFNBQWQsR0FBMEJKLEtBQTFCO0FBQ0g7Ozs7RUFQdUJFLCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUNBO0lBTU1HLGEsV0FKTFosNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwyQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7NkJBRVFrRCxLLEVBQU87QUFDWixXQUFLTSxZQUFMLENBQWtCTixLQUFsQjtBQUNIOzs7O0VBUHVCRSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQNUI7QUFDQTtJQU1NSyxXLFdBSkxkLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04seUJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUswRCxZQUFMLEdBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBcEI7QUFGVTtBQUdiOzs7OzZCQUVRVixLLEVBQU87QUFDWixXQUFLVyxjQUFMLENBQW9CLENBQUNYLEtBQXJCO0FBQ0g7Ozs7RUFScUJFLCtDOzs7Ozs7Ozs7Ozs7QUNQMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0lBTU1VLGMsV0FKTG5CLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sNEJBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUsrRCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtDLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLG1CQUFMLEdBQTJCLEVBQTNCO0FBQ0EsVUFBS0MsVUFBTCxHQUFrQixFQUFsQjtBQUNBLFVBQUtDLE1BQUwsR0FBYztBQUNWQyxjQUFRLEVBQUUsRUFEQTtBQUVWQyxjQUFRLEVBQUUsSUFGQTtBQUdWQyxXQUFLLEVBQUUsS0FIRztBQUlWQyxXQUFLLEVBQUUsSUFKRztBQUtWQyxhQUFPLEVBQUU7QUFMQyxLQUFkO0FBT0EsVUFBS0MsT0FBTCxHQUFlO0FBQ1hDLFNBQUcsRUFBRTtBQUNETCxnQkFBUSxFQUFFLFlBRFQ7QUFFREMsYUFBSyxFQUFFLFNBRk47QUFHREMsYUFBSyxFQUFFLFNBSE47QUFJREMsZUFBTyxFQUFFO0FBSlI7QUFETSxLQUFmO0FBZlU7QUF1QmI7Ozs7NkJBRVF4QixLLEVBQU87QUFDWixXQUFLMkIsZ0JBQUwsQ0FBc0IzQixLQUF0QjtBQUNIOzs7Z0NBRVc7QUFBQTs7QUFDUixVQUFJaEQsSUFBSSxHQUFHLEtBQUtrQixRQUFMLENBQWNsQixJQUF6Qjs7QUFFQSxVQUFJQSxJQUFKLEVBQVU7QUFDTixhQUFLNEUsTUFBTCxDQUFZQyxLQUFaLENBQWtCN0UsSUFBbEIsSUFBMEIsS0FBS21FLE1BQS9CO0FBQ0g7O0FBRUQsVUFBSSxLQUFLVyxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLFFBQXRCLEVBQWdDLFVBQUFoRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDaUUsZUFBTCxDQUFxQmpFLENBQUMsQ0FBQ0ksSUFBRixDQUFPOEQsUUFBNUIsQ0FBSjtBQUFBLFNBQWpDO0FBQ0gsT0FGRCxNQUdLO0FBQ0QsYUFBSy9ELFFBQUwsQ0FBY2dFLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFVBQUFuRSxDQUFDO0FBQUEsaUJBQUksTUFBSSxDQUFDaUUsZUFBTCxDQUFxQmpFLENBQUMsQ0FBQ3FCLE1BQUYsQ0FBU1ksS0FBOUIsQ0FBSjtBQUFBLFNBQXpDO0FBQ0g7QUFDSjs7O2dDQUVXLENBRVg7OztxQ0FFZ0JtQyxRLEVBQVU7QUFDdkIsVUFBSSxLQUFLckIsVUFBTCxLQUFvQnFCLFFBQXhCLEVBQWtDO0FBQzlCO0FBQ0g7O0FBRUQsVUFBSUMsSUFBSSxHQUFHLElBQVg7QUFFQSxXQUFLbEIsVUFBTCxDQUFnQnJDLE9BQWhCLENBQXdCLFVBQVV3RCxTQUFWLEVBQXFCO0FBQ3pDQSxpQkFBUyxDQUFDdEQsSUFBVixDQUFlcUQsSUFBZixFQUFxQkQsUUFBckIsRUFBK0IsS0FBS3JCLFVBQXBDO0FBQ0gsT0FGRDtBQUlBLFdBQUtBLFVBQUwsR0FBa0JxQixRQUFsQjtBQUVBLFdBQUtuQixVQUFMLENBQWdCbkMsT0FBaEIsQ0FBd0IsVUFBVXlELFNBQVYsRUFBcUI7QUFDekNILGdCQUFRLEdBQUdHLFNBQVMsQ0FBQ3ZELElBQVYsQ0FBZXFELElBQWYsRUFBcUJELFFBQXJCLENBQVg7QUFDSCxPQUZEOztBQUlBLFVBQUksS0FBS3RCLFNBQUwsS0FBbUJzQixRQUF2QixFQUFpQztBQUM3QjtBQUNIOztBQUVELFdBQUt0QixTQUFMLEdBQWlCc0IsUUFBakI7O0FBRUEsVUFBSSxLQUFLTCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGFBQUtBLFVBQUwsQ0FBZ0JTLFlBQWhCLENBQTZCLE9BQTdCLEVBQXNDSixRQUF0QztBQUNILE9BRkQsTUFFTztBQUNILGFBQUtqRSxRQUFMLENBQWM4QixLQUFkLEdBQXNCbUMsUUFBdEI7QUFDSDs7QUFFRCxXQUFLSyxpQkFBTDtBQUNIOzs7b0NBRWVMLFEsRUFBVTtBQUN0QixVQUFJLEtBQUt0QixTQUFMLEtBQW1Cc0IsUUFBdkIsRUFBaUM7QUFDN0I7QUFDSDs7QUFFRCxVQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBLFdBQUtLLGVBQUwsQ0FBcUIsSUFBckI7QUFFQSxXQUFLeEIsbUJBQUwsQ0FBeUJwQyxPQUF6QixDQUFpQyxVQUFVNkQsUUFBVixFQUFvQjtBQUNqREEsZ0JBQVEsQ0FBQzNELElBQVQsQ0FBY3FELElBQWQsRUFBb0JELFFBQXBCLEVBQThCQyxJQUFJLENBQUN2QixTQUFuQztBQUNILE9BRkQ7QUFJQSxXQUFLQSxTQUFMLEdBQWlCc0IsUUFBakI7QUFFQSxXQUFLcEIsT0FBTCxDQUFhbEMsT0FBYixDQUFxQixVQUFVOEQsTUFBVixFQUFrQjtBQUNuQ1IsZ0JBQVEsR0FBR1EsTUFBTSxDQUFDNUQsSUFBUCxDQUFZcUQsSUFBWixFQUFrQkQsUUFBbEIsQ0FBWDtBQUNILE9BRkQ7O0FBSUEsVUFBRyxLQUFLckIsVUFBTCxLQUFvQnFCLFFBQXZCLEVBQWlDO0FBQzdCO0FBQ0g7O0FBRUQsV0FBS2pCLFVBQUwsQ0FBZ0JyQyxPQUFoQixDQUF3QixVQUFVd0QsU0FBVixFQUFxQjtBQUN6Q0EsaUJBQVMsQ0FBQ3RELElBQVYsQ0FBZXFELElBQWYsRUFBcUJELFFBQXJCLEVBQStCQyxJQUFJLENBQUN0QixVQUFwQztBQUNILE9BRkQ7QUFJQSxXQUFLQSxVQUFMLEdBQWtCcUIsUUFBbEI7QUFFQSxXQUFLUyxRQUFMLENBQWNDLE1BQWQsQ0FBcUJWLFFBQXJCO0FBQ0g7Ozt3Q0FFbUI7QUFDaEIsVUFBSVcsR0FBRyxHQUFHLEtBQUs1RSxRQUFmO0FBQUEsVUFDSXdELEdBQUcsR0FBRyxLQUFLRCxPQUFMLENBQWFDLEdBRHZCOztBQUdBLFVBQUksS0FBS1AsTUFBTCxDQUFZRyxLQUFoQixFQUF1QjtBQUNuQndCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCdEIsR0FBRyxDQUFDSixLQUF0QjtBQUNBd0IsV0FBRyxDQUFDQyxTQUFKLENBQWNFLE1BQWQsQ0FBcUJ2QixHQUFHLENBQUNMLFFBQXpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0h5QixXQUFHLENBQUNDLFNBQUosQ0FBY0MsR0FBZCxDQUFrQnRCLEdBQUcsQ0FBQ0wsUUFBdEI7QUFDQXlCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjRSxNQUFkLENBQXFCdkIsR0FBRyxDQUFDSixLQUF6QjtBQUNIOztBQUVELFVBQUksS0FBS0gsTUFBTCxDQUFZSSxLQUFoQixFQUF1QjtBQUNuQnVCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCdEIsR0FBRyxDQUFDSCxLQUF0QjtBQUNBdUIsV0FBRyxDQUFDQyxTQUFKLENBQWNFLE1BQWQsQ0FBcUJ2QixHQUFHLENBQUNGLE9BQXpCO0FBQ0gsT0FIRCxNQUdPO0FBQ0hzQixXQUFHLENBQUNDLFNBQUosQ0FBY0MsR0FBZCxDQUFrQnRCLEdBQUcsQ0FBQ0YsT0FBdEI7QUFDQXNCLFdBQUcsQ0FBQ0MsU0FBSixDQUFjRSxNQUFkLENBQXFCdkIsR0FBRyxDQUFDSCxLQUF6QjtBQUNIO0FBQ0o7OztvQ0FFZUQsSyxFQUFPO0FBQ25CLFdBQUtILE1BQUwsQ0FBWUcsS0FBWixHQUFvQkEsS0FBcEI7QUFDQSxXQUFLSCxNQUFMLENBQVlFLFFBQVosR0FBdUIsQ0FBQ0MsS0FBeEI7QUFDQSxXQUFLa0IsaUJBQUw7QUFDSDs7O29DQUVlakIsSyxFQUFPSCxRLEVBQVU7QUFDN0IsV0FBS0QsTUFBTCxDQUFZSSxLQUFaLEdBQW9CQSxLQUFwQjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUssT0FBWixHQUFzQixDQUFDRCxLQUF2QjtBQUNBLFdBQUtKLE1BQUwsQ0FBWUMsUUFBWixHQUF1QkEsUUFBdkI7QUFDQSxXQUFLb0IsaUJBQUw7QUFDSDs7OztFQWpKd0J0QywrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A3QjtBQUNBO0FBQ0E7QUFDQTtJQU1NZ0QsZSxXQUpMekQsNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiw2QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS3FHLE9BQUwsR0FBZSxFQUFmO0FBQ0EsVUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxVQUFLQyxNQUFMLEdBQWMsSUFBSUMsR0FBSixFQUFkO0FBQ0EsVUFBS0MsaUJBQUwsR0FBeUIsSUFBekI7QUFOVTtBQU9iOzs7OzhCQUVTQyxJLEVBQU1DLEssRUFBTztBQUNuQixVQUFJQyxHQUFHLEdBQUdELEtBQUssQ0FBQ0UsU0FBaEI7QUFDQSxVQUFJQyxPQUFPLEdBQUcsNkJBQWQ7QUFDQSxVQUFJQyxNQUFNLEdBQUdELE9BQU8sQ0FBQ0UsSUFBUixDQUFhSixHQUFiLENBQWI7O0FBRUEsVUFBSUcsTUFBTSxJQUFJLElBQWQsRUFBb0I7QUFDaEIsY0FBTSxJQUFJckYsS0FBSixDQUFVLGtDQUFWLENBQU47QUFDSDs7QUFFRCxXQUFLMEUsT0FBTCxHQUFlVyxNQUFNLENBQUMsQ0FBRCxDQUFyQjtBQUNBLFdBQUtWLFFBQUwsR0FBZ0JVLE1BQU0sQ0FBQyxDQUFELENBQXRCO0FBQ0FMLFVBQUksQ0FBQ08sVUFBTCxDQUFnQk4sS0FBaEI7QUFDQSxXQUFLTCxZQUFMLEdBQW9CSSxJQUFJLENBQUNRLFdBQUwsRUFBcEIsQ0FabUIsQ0FjbkI7O0FBQ0EsYUFBTyxJQUFQO0FBQ0g7OzsyQkFFTXJGLEssRUFBTztBQUFBOztBQUNWLFVBQUlzRixRQUFRLEdBQUd6RCxRQUFRLENBQUMwRCxzQkFBVCxFQUFmO0FBQ0EsVUFBSUMsTUFBTSxHQUFHM0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLGlCQUF2QixDQUFiO0FBQ0EsVUFBSTJELE1BQU0sR0FBRzVELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFiO0FBRUF3RCxjQUFRLENBQUNJLFdBQVQsQ0FBcUJGLE1BQXJCO0FBQ0FGLGNBQVEsQ0FBQ0ksV0FBVCxDQUFxQixLQUFLaEgsTUFBTCxDQUFZc0IsS0FBWixDQUFyQjtBQUNBc0YsY0FBUSxDQUFDSSxXQUFULENBQXFCRCxNQUFyQjtBQUVBLFdBQUtiLGlCQUFMLEdBQXlCNUUsS0FBSyxDQUFDMkYsZ0JBQU4sQ0FBdUIsS0FBS25CLFFBQTVCLEVBQXNDLFlBQU07QUFDakUsWUFBSWMsUUFBUSxHQUFHLE1BQUksQ0FBQzVHLE1BQUwsQ0FBWXNCLEtBQVosQ0FBZjs7QUFDQUksa0VBQUEsQ0FBMEJvRixNQUExQixFQUFrQ0MsTUFBbEM7QUFDQUEsY0FBTSxDQUFDRyxVQUFQLENBQWtCQyxZQUFsQixDQUErQlAsUUFBL0IsRUFBeUNHLE1BQXpDO0FBQ0gsT0FKd0IsQ0FBekI7QUFNQSxhQUFPSCxRQUFQO0FBQ0g7OzsyQkFFTXRGLEssRUFBTztBQUNWLFVBQUl3RCxJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlzQyxLQUFLLEdBQUc5RixLQUFLLENBQUMrRixLQUFOLENBQVksS0FBS3ZCLFFBQWpCLENBQVo7QUFDQSxVQUFJYyxRQUFRLEdBQUd6RCxRQUFRLENBQUMwRCxzQkFBVCxFQUFmO0FBQ0EsVUFBSVMsU0FBUyxHQUFHLElBQUlyQixHQUFKLEVBQWhCO0FBRUFzQixvREFBQSxDQUFjSCxLQUFkLEVBQXFCLFVBQVVJLElBQVYsRUFBZ0JoSSxHQUFoQixFQUFxQjtBQUN0QyxZQUFJaUksUUFBUSxHQUFHM0MsSUFBSSxDQUFDNEMscUJBQUwsQ0FBMkI1QyxJQUFJLENBQUNrQixNQUFoQyxFQUF3Q3dCLElBQXhDLENBQWY7O0FBRUEsWUFBSSxDQUFDQyxRQUFMLEVBQWU7QUFDWCxjQUFJRSxNQUFNLEdBQUcsRUFBYjtBQUNBQSxnQkFBTSxDQUFDLE1BQUQsQ0FBTixHQUFpQm5JLEdBQWpCO0FBQ0FtSSxnQkFBTSxDQUFDLFFBQUQsQ0FBTixHQUFtQm5JLEdBQW5CO0FBQ0FtSSxnQkFBTSxDQUFDN0MsSUFBSSxDQUFDZSxPQUFOLENBQU4sR0FBdUIyQixJQUF2QjtBQUNBQyxrQkFBUSxHQUFHM0MsSUFBSSxDQUFDOEMsT0FBTCxDQUFhOUMsSUFBSSxDQUFDaUIsWUFBbEIsRUFBZ0M0QixNQUFoQyxDQUFYO0FBQ0g7O0FBRUQ3QyxZQUFJLENBQUMrQyxtQkFBTCxDQUF5QlAsU0FBekIsRUFBb0NFLElBQXBDLEVBQTBDQyxRQUExQztBQUNBYixnQkFBUSxDQUFDSSxXQUFULENBQXFCUyxRQUFRLENBQUNLLElBQTlCO0FBQ0gsT0FiRDtBQWVBLFdBQUs5QixNQUFMLENBQVkrQixPQUFaLENBQW9CLFVBQVVDLElBQVYsRUFBZ0I7QUFDaENBLFlBQUksQ0FBQ3pHLE9BQUwsQ0FBYSxVQUFVa0csUUFBVixFQUFvQjtBQUM3QkEsa0JBQVEsQ0FBQ1EsT0FBVDtBQUNILFNBRkQ7QUFHSCxPQUpEO0FBTUEsV0FBS2pDLE1BQUwsR0FBY3NCLFNBQWQ7QUFFQSxhQUFPVixRQUFQO0FBQ0g7OzswQ0FFcUJaLE0sRUFBUWtDLFEsRUFBVTtBQUNwQyxVQUFJVCxRQUFKOztBQUVBLFVBQUl6QixNQUFNLENBQUNtQyxHQUFQLENBQVdELFFBQVgsQ0FBSixFQUEwQjtBQUN0QixZQUFJRixJQUFJLEdBQUdoQyxNQUFNLENBQUNvQyxHQUFQLENBQVdGLFFBQVgsQ0FBWDs7QUFFQSxZQUFJRixJQUFJLENBQUNLLE1BQVQsRUFBaUI7QUFDYlosa0JBQVEsR0FBR08sSUFBSSxDQUFDTSxLQUFMLEVBQVg7QUFDSCxTQUZELE1BRU87QUFDSHRDLGdCQUFNLFVBQU4sQ0FBY2tDLFFBQWQ7QUFDSDtBQUNKOztBQUVELGFBQU9ULFFBQVA7QUFDSDs7O3dDQUVtQnpCLE0sRUFBUWtDLFEsRUFBVVQsUSxFQUFVO0FBQzVDLFVBQUlPLElBQUo7O0FBRUEsVUFBSWhDLE1BQU0sQ0FBQ21DLEdBQVAsQ0FBV0QsUUFBWCxDQUFKLEVBQTBCO0FBQ3RCRixZQUFJLEdBQUdoQyxNQUFNLENBQUNvQyxHQUFQLENBQVdGLFFBQVgsQ0FBUDtBQUNILE9BRkQsTUFFTztBQUNIRixZQUFJLEdBQUcsRUFBUDtBQUNBaEMsY0FBTSxDQUFDdUMsR0FBUCxDQUFXTCxRQUFYLEVBQXFCRixJQUFyQjtBQUNIOztBQUVEQSxVQUFJLENBQUM5RyxJQUFMLENBQVV1RyxRQUFWO0FBQ0g7OztnQ0FFVztBQUNSLFdBQUt6QixNQUFMLEdBQWMsSUFBZDtBQUNBLFdBQUtFLGlCQUFMLElBQTBCLEtBQUtBLGlCQUFMLEVBQTFCO0FBQ0g7Ozs7RUE5R3lCdEQsK0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVDlCO0FBQ0E7SUFNTTRGLGEsV0FKTHJHLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sMkJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRa0QsSyxFQUFPO0FBQ1osV0FBS00sWUFBTCxDQUFrQixDQUFDTixLQUFuQjtBQUNIOzs7O0VBUHVCRSwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1A1QjtBQUNBO0lBTU02RixnQixXQUpMdEcsNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiw4QkFBYztBQUFBOztBQUFBLHlGQUNKLFNBREk7QUFFYjs7O0VBSDBCa0oscUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQL0I7QUFDQTtJQU1NQyxpQixXQUpMeEcsNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwrQkFBYztBQUFBOztBQUFBLDBGQUNKLFVBREk7QUFFYjs7O0VBSDJCa0oscUQ7Ozs7Ozs7Ozs7OztBQ1BoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7SUFNTUUsaUIsV0FKTHpHLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sK0JBQWM7QUFBQTs7QUFBQSwwRkFDSixVQURJO0FBRWI7OztFQUgyQmtKLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGhDO0FBQ0E7SUFNTUcsaUIsV0FKTDFHLDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVB1SixVQUFRLEVBQUU7QUFGSCxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUEsMEZBQ0osVUFESTtBQUViOzs7RUFIMkJKLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQaEM7QUFFTyxJQUFNQSxjQUFiO0FBQUE7O0FBQ0ksMEJBQVlsSixHQUFaLEVBQWlCO0FBQUE7O0FBQUE7O0FBQ2I7QUFDQSxVQUFLQSxHQUFMLEdBQVdBLEdBQVg7QUFGYTtBQUdoQjs7QUFKTDtBQUFBO0FBQUEsNkJBTWFrRCxLQU5iLEVBTW9CO0FBQ1osVUFBSUEsS0FBSixFQUFXO0FBQ1AsWUFBSSxDQUFDLEtBQUs5QixRQUFMLENBQWNtSSxZQUFkLENBQTJCLEtBQUt2SixHQUFoQyxDQUFMLEVBQTJDO0FBQ3ZDLGVBQUtvQixRQUFMLENBQWNvSSxZQUFkLENBQTJCLEtBQUt4SixHQUFoQyxFQUFxQyxFQUFyQztBQUNIO0FBQ0osT0FKRCxNQUlPO0FBQ0gsWUFBSSxLQUFLb0IsUUFBTCxDQUFjbUksWUFBZCxDQUEyQixLQUFLdkosR0FBaEMsQ0FBSixFQUEwQztBQUN0QyxlQUFLb0IsUUFBTCxDQUFjcUksZUFBZCxDQUE4QixLQUFLekosR0FBbkM7QUFDSDtBQUNKO0FBQ0o7QUFoQkw7O0FBQUE7QUFBQSxFQUFvQ29ELCtDQUFwQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7SUFNTXNHLGtCLFdBSkwvRyw0REFBUyxDQUFDO0FBQ1A1QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLGdDQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztxQ0FFZ0I7QUFDYixVQUFJd0IsS0FBSyxHQUFHLEtBQUtzRSxRQUFMLENBQWM2RCxRQUFkLENBQXVCLFFBQXZCLENBQVo7QUFDQSxhQUFPbkksS0FBSyxHQUFHLE1BQU0sQ0FBckI7QUFDSDs7OztFQVI0Qm9JLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BqQztBQUNBO0lBTU1DLGlCLFdBSkxsSCw0REFBUyxDQUFDO0FBQ1A1QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELEM7OztBQUtOLCtCQUFjO0FBQUE7O0FBQUE7QUFFYjs7OztxQ0FFZ0I7QUFDYixVQUFJd0IsS0FBSyxHQUFHLEtBQUtzRSxRQUFMLENBQWM2RCxRQUFkLENBQXVCLFFBQXZCLENBQVo7QUFDQSxhQUFPbkksS0FBSyxHQUFHLE1BQU0sQ0FBckI7QUFDSDs7OztFQVIyQm9JLHFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUGhDO0FBQ0E7QUFDQTtBQU1PLElBQU1BLGNBQWIsV0FKQ2pILDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQ0FJVjtBQUFBOztBQUNJLDRCQUFjO0FBQUE7O0FBQUE7QUFFYjs7QUFITDtBQUFBO0FBQUEsNkJBS2E4SixRQUxiLEVBS3VCQyxRQUx2QixFQUtpQztBQUN6QixVQUFJLEtBQUtDLGNBQUwsRUFBSixFQUEyQjtBQUN2QjtBQUNIOztBQUVELFVBQUlELFFBQUosRUFBYztBQUNWN0gsd0RBQUEsQ0FBZ0IsS0FBS2QsUUFBckIsRUFBK0IySSxRQUFRLENBQUNFLElBQVQsQ0FBYyxHQUFkLENBQS9CO0FBQ0g7O0FBRUQsVUFBSUgsUUFBSixFQUFjO0FBQ1Y1SCxxREFBQSxDQUFhLEtBQUtkLFFBQWxCLEVBQTRCMEksUUFBUSxDQUFDRyxJQUFULENBQWMsR0FBZCxDQUE1QjtBQUNIO0FBQ0o7QUFqQkw7QUFBQTtBQUFBLHFDQW1CcUI7QUFDYixhQUFPLEtBQVA7QUFDSDtBQXJCTDs7QUFBQTtBQUFBLEVBQW9DN0csK0NBQXBDLGM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0lBTU04RyxrQixXQUpMdkgsNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTixnQ0FBYztBQUFBOztBQUFBO0FBRWI7Ozs7cUNBRWdCO0FBQ2IsVUFBSXdCLEtBQUssR0FBRyxLQUFLc0UsUUFBTCxDQUFjNkQsUUFBZCxDQUF1QixRQUF2QixDQUFaO0FBQ0EsYUFBT25JLEtBQUssR0FBRyxNQUFNLENBQXJCO0FBQ0g7Ozs7RUFSNEIySSxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQakM7QUFDQTtJQU1NQyxpQixXQUpMekgsNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiwrQkFBYztBQUFBOztBQUFBO0FBRWI7Ozs7cUNBRWdCO0FBQ2IsVUFBSXdCLEtBQUssR0FBRyxLQUFLc0UsUUFBTCxDQUFjNkQsUUFBZCxDQUF1QixRQUF2QixDQUFaO0FBQ0EsYUFBT25JLEtBQUssR0FBRyxNQUFNLENBQXJCO0FBQ0g7Ozs7RUFSMkIySSxxRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BoQztBQUNBO0FBQ0E7QUFNTyxJQUFNQSxjQUFiLFdBSkN4SCw0REFBUyxDQUFDO0FBQ1A1QyxXQUFTLEVBQUUsVUFESjtBQUVQQyxLQUFHLEVBQUU7QUFGRSxDQUFELENBSVY7QUFBQTs7QUFDSSw0QkFBYztBQUFBOztBQUFBO0FBRWI7O0FBSEw7QUFBQTtBQUFBLDZCQUthcUssUUFMYixFQUt1QkMsUUFMdkIsRUFLaUM7QUFDekIsVUFBSSxLQUFLTixjQUFMLEVBQUosRUFBMkI7QUFDdkI7QUFDSDs7QUFFRCxVQUFJMUUsSUFBSSxHQUFHLElBQVg7O0FBRUEsVUFBSWdGLFFBQUosRUFBYztBQUNWdkMsc0RBQUEsQ0FBY3VDLFFBQWQsRUFBd0IsVUFBVXBILEtBQVYsRUFBaUJsRCxHQUFqQixFQUFzQjtBQUMxQ3NGLGNBQUksQ0FBQ2xFLFFBQUwsQ0FBY21KLEtBQWQsQ0FBb0J2SyxHQUFwQixJQUEyQixFQUEzQjtBQUNILFNBRkQ7QUFHSDs7QUFFRCxVQUFJK0gsK0NBQUEsQ0FBZXNDLFFBQWYsQ0FBSixFQUE4QjtBQUMxQnRDLHNEQUFBLENBQWNzQyxRQUFkLEVBQXdCLFVBQVVuSCxLQUFWLEVBQWlCbEQsR0FBakIsRUFBc0I7QUFDMUNzRixjQUFJLENBQUNsRSxRQUFMLENBQWNtSixLQUFkLENBQW9CdkssR0FBcEIsSUFBMkJrRCxLQUEzQjtBQUNILFNBRkQ7QUFHSDtBQUNKO0FBdkJMO0FBQUE7QUFBQSxxQ0F5QnFCO0FBQ2IsYUFBTyxLQUFQO0FBQ0g7QUEzQkw7O0FBQUE7QUFBQSxFQUFvQ0UsK0NBQXBDLGM7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtJQU1Nb0gsc0IsV0FKTDdILDREQUFTLENBQUM7QUFDUDVDLFdBQVMsRUFBRSxVQURKO0FBRVBDLEtBQUcsRUFBRTtBQUZFLENBQUQsQzs7O0FBS04sb0NBQWM7QUFBQTs7QUFBQTs7QUFDVjtBQUNBLFVBQUt5SyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsVUFBSy9HLFlBQUwsR0FBb0JDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBcEI7QUFIVTtBQUliOzs7O2dDQUVXO0FBQUE7O0FBQ1IsV0FBSzZHLFVBQUwsR0FBa0IsS0FBS0MsZ0JBQUwsQ0FBc0IsVUFBdEIsQ0FBbEI7O0FBRUEsVUFBSSxLQUFLRCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSTlJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsV0FBSzhJLFVBQUwsQ0FBZ0JFLFlBQWhCLENBQTZCQyxFQUE3QixDQUFnQyxZQUFNO0FBQ2xDLGNBQUksQ0FBQy9HLGNBQUwsQ0FBb0IsQ0FBQyxNQUFJLENBQUM0RyxVQUFMLENBQWdCSSxjQUFyQztBQUNILE9BRkQ7O0FBSUEsVUFBRyxDQUFDLEtBQUtKLFVBQUwsQ0FBZ0JJLGNBQXBCLEVBQW9DO0FBQ2hDLGFBQUtoSCxjQUFMLENBQW9CLElBQXBCO0FBQ0g7QUFDSjs7OztFQXJCZ0NULCtDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQckM7QUFDQTtBQUNBO0lBTU0wSCxtQixXQUpMbkksNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTixpQ0FBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS2tELEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBSzZILE9BQUwsR0FBZSxLQUFmO0FBQ0EsVUFBS04sVUFBTCxHQUFrQixJQUFsQjtBQUNBLFVBQUtPLE9BQUwsR0FBZSxJQUFJcEssNkNBQUosRUFBZjtBQUNBLFVBQUs4QyxZQUFMLEdBQW9CQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBcEI7QUFOVTtBQU9iOzs7O2dDQUVXO0FBQUE7O0FBQ1IsV0FBSzZHLFVBQUwsR0FBa0IsS0FBS0MsZ0JBQUwsQ0FBc0IsVUFBdEIsQ0FBbEI7O0FBRUEsVUFBSSxLQUFLRCxVQUFMLElBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLGNBQU0sSUFBSTlJLEtBQUosQ0FBVSw0QkFBVixDQUFOO0FBQ0g7O0FBRUQsV0FBSzhJLFVBQUwsQ0FBZ0JPLE9BQWhCLENBQXdCSixFQUF4QixDQUEyQixZQUFNO0FBQzdCLGNBQUksQ0FBQ3BLLE1BQUw7QUFDSCxPQUZEO0FBR0g7Ozs2QkFFUTBDLEssRUFBTztBQUNaLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUsxQyxNQUFMO0FBQ0g7Ozs2QkFFUTtBQUNMLFVBQUl1SyxPQUFPLEdBQUcsS0FBS04sVUFBTCxDQUFnQnZILEtBQWhCLEtBQTBCLEtBQUtBLEtBQTdDOztBQUVBLFVBQUcsS0FBSzZILE9BQUwsSUFBZ0JBLE9BQW5CLEVBQTRCO0FBQ3hCLGFBQUtBLE9BQUwsR0FBZUEsT0FBZjs7QUFFQSxZQUFJQSxPQUFKLEVBQWE7QUFDVCxlQUFLTixVQUFMLENBQWdCUSxTQUFoQjtBQUNILFNBRkQsTUFFTztBQUNILGVBQUtSLFVBQUwsQ0FBZ0JTLFVBQWhCO0FBQ0g7QUFDSjs7QUFFRCxXQUFLckgsY0FBTCxDQUFvQixDQUFDa0gsT0FBckI7QUFDSDs7OztFQXpDNkIzSCwrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUmxDO0FBQ0E7QUFDQTtJQU1NK0gsZSxXQUpMeEksNERBQVMsQ0FBQztBQUNQNUMsV0FBUyxFQUFFLFVBREo7QUFFUEMsS0FBRyxFQUFFO0FBRkUsQ0FBRCxDOzs7QUFLTiw2QkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS2tELEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBS2tJLFVBQUwsR0FBa0IsQ0FBbEI7QUFDQSxVQUFLSixPQUFMLEdBQWUsSUFBSXBLLDZDQUFKLEVBQWY7QUFDQSxVQUFLaUssY0FBTCxHQUFzQixJQUF0QjtBQUNBLFVBQUtGLFlBQUwsR0FBb0IsSUFBSS9KLDZDQUFKLEVBQXBCO0FBTlU7QUFPYjs7Ozs2QkFFUXNDLEssRUFBTztBQUNaLFdBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUs4SCxPQUFMLENBQWFLLElBQWI7QUFDSDs7O2dDQUVXO0FBQ1IsV0FBS0QsVUFBTDtBQUNBLFdBQUtFLFlBQUw7QUFDSDs7O2lDQUVZO0FBQ1QsV0FBS0YsVUFBTDtBQUNBLFdBQUtFLFlBQUw7QUFDSDs7O21DQUVjO0FBQ1gsVUFBSVQsY0FBYyxHQUFHLEtBQUtPLFVBQUwsSUFBbUIsQ0FBeEM7O0FBRUEsVUFBSSxLQUFLUCxjQUFMLEtBQXdCQSxjQUE1QixFQUE0QztBQUN4QyxhQUFLQSxjQUFMLEdBQXNCQSxjQUF0QjtBQUNBLGFBQUtGLFlBQUwsQ0FBa0JVLElBQWxCO0FBQ0g7QUFDSjs7OztFQWhDeUJqSSwrQzs7Ozs7Ozs7Ozs7O0FDUDlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FBU21JLG9CQUFULENBQThCckssR0FBOUIsRUFBbUM7QUFDL0IsU0FBT3NLLEtBQUssQ0FBQ2pKLFNBQU4sQ0FBZ0JrSixLQUFoQixDQUFzQnhKLElBQXRCLENBQTJCZixHQUFHLENBQUN3SyxVQUEvQixFQUEyQyxDQUEzQyxDQUFQO0FBQ0g7O0FBRUQsU0FBU0Msc0JBQVQsQ0FBZ0N6SyxHQUFoQyxFQUFxQztBQUNqQ3FLLHNCQUFvQixDQUFDckssR0FBRCxDQUFwQixDQUEwQmEsT0FBMUIsQ0FBa0MsVUFBVTZKLEtBQVYsRUFBaUI7QUFDL0MxSyxPQUFHLENBQUMySyxXQUFKLENBQWdCRCxLQUFoQjtBQUNILEdBRkQ7QUFHSDs7QUFFRCxTQUFTRSxjQUFULENBQXdCNUssR0FBeEIsRUFBNkI2SyxNQUE3QixFQUFxQztBQUNqQyxNQUFJckUsVUFBVSxHQUFHeEcsR0FBRyxDQUFDd0csVUFBckI7O0FBQ0EsTUFBSUEsVUFBVSxJQUFJLElBQWxCLEVBQXdCO0FBQ3BCQSxjQUFVLENBQUNDLFlBQVgsQ0FBd0JvRSxNQUF4QixFQUFnQzdLLEdBQWhDO0FBQ0F3RyxjQUFVLENBQUNtRSxXQUFYLENBQXVCM0ssR0FBdkI7QUFDSDtBQUNKOztBQUVELFNBQVM4SyxhQUFULENBQXVCOUssR0FBdkIsRUFBNEI7QUFDeEIsTUFBSXdHLFVBQVUsR0FBR3hHLEdBQUcsQ0FBQ3dHLFVBQXJCOztBQUNBLE1BQUlBLFVBQVUsSUFBSSxJQUFsQixFQUF3QjtBQUNwQkEsY0FBVSxDQUFDbUUsV0FBWCxDQUF1QjNLLEdBQXZCO0FBQ0g7QUFDSjs7QUFFRCxTQUFTK0sscUJBQVQsQ0FBK0JDLFFBQS9CLEVBQXlDQyxNQUF6QyxFQUFpRDtBQUM3QyxNQUFJekUsVUFBVSxHQUFHd0UsUUFBUSxDQUFDeEUsVUFBMUI7QUFDQSxNQUFJZ0UsVUFBVSxHQUFHSCxvQkFBb0IsQ0FBQzdELFVBQUQsQ0FBckM7QUFFQWdFLFlBQVUsQ0FBQzNKLE9BQVgsQ0FBbUIsVUFBVTZKLEtBQVYsRUFBaUI7QUFDaEMsUUFBSUEsS0FBSyxDQUFDUSxlQUFOLEtBQTBCRixRQUExQixJQUFzQ04sS0FBSyxLQUFLTyxNQUFwRCxFQUE0RDtBQUN4RHpFLGdCQUFVLENBQUNtRSxXQUFYLENBQXVCRCxLQUF2QjtBQUNIOztBQUNELFFBQUlBLEtBQUssQ0FBQ1MsV0FBTixLQUFzQkYsTUFBdEIsSUFBZ0NQLEtBQUssS0FBS00sUUFBOUMsRUFBd0Q7QUFDcER4RSxnQkFBVSxDQUFDbUUsV0FBWCxDQUF1QkQsS0FBdkI7QUFDSDtBQUNKLEdBUEQ7QUFRSDs7QUFFRCxTQUFTVSxhQUFULENBQXVCcEwsR0FBdkIsRUFBNEI2SyxNQUE1QixFQUFvQztBQUNoQyxNQUFJckUsVUFBVSxHQUFHeEcsR0FBRyxDQUFDd0csVUFBckI7O0FBRUEsTUFBSUEsVUFBVSxDQUFDNkUsU0FBWCxLQUF5QnJMLEdBQTdCLEVBQWtDO0FBQzlCd0csY0FBVSxDQUFDRixXQUFYLENBQXVCdUUsTUFBdkI7QUFDSCxHQUZELE1BRU87QUFDSHJFLGNBQVUsQ0FBQ0MsWUFBWCxDQUF3Qm9FLE1BQXhCLEVBQWdDN0ssR0FBRyxDQUFDbUwsV0FBcEM7QUFDSDtBQUNKOztBQUVELFNBQVNHLFFBQVQsQ0FBbUJ0TCxHQUFuQixFQUF3QnVMLEdBQXhCLEVBQTZCO0FBQ3pCLE1BQUksQ0FBQ0EsR0FBRCxJQUFRLEVBQUVBLEdBQUcsR0FBR0EsR0FBRyxDQUFDQyxJQUFKLEVBQVIsQ0FBWixFQUFpQztBQUM3QjtBQUNIOztBQUVELE1BQUl4TCxHQUFHLENBQUMrRSxTQUFSLEVBQW1CO0FBQ2YsUUFBSXdHLEdBQUcsQ0FBQ2hMLE9BQUosQ0FBWSxHQUFaLElBQW1CLENBQUMsQ0FBeEIsRUFBMkI7QUFDdkJnTCxTQUFHLENBQUNFLEtBQUosQ0FBVSxLQUFWLEVBQWlCNUssT0FBakIsQ0FBeUIsVUFBVTZLLENBQVYsRUFBYTtBQUNsQyxlQUFPMUwsR0FBRyxDQUFDK0UsU0FBSixDQUFjQyxHQUFkLENBQWtCMEcsQ0FBbEIsQ0FBUDtBQUNILE9BRkQ7QUFHSCxLQUpELE1BSU87QUFDSDFMLFNBQUcsQ0FBQytFLFNBQUosQ0FBY0MsR0FBZCxDQUFrQnVHLEdBQWxCO0FBQ0g7QUFDSixHQVJELE1BUU87QUFDSCxRQUFJSSxHQUFHLEdBQUcsT0FBTzNMLEdBQUcsQ0FBQzRMLFlBQUosQ0FBaUIsT0FBakIsS0FBNkIsRUFBcEMsSUFBMEMsR0FBcEQ7O0FBQ0EsUUFBSUQsR0FBRyxDQUFDcEwsT0FBSixDQUFZLE1BQU1nTCxHQUFOLEdBQVksR0FBeEIsSUFBK0IsQ0FBbkMsRUFBc0M7QUFDbEN2TCxTQUFHLENBQUNzSSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCLENBQUNxRCxHQUFHLEdBQUdKLEdBQVAsRUFBWUMsSUFBWixFQUExQjtBQUNIO0FBQ0o7QUFDSjs7QUFFRCxTQUFTSyxXQUFULENBQXNCN0wsR0FBdEIsRUFBMkJ1TCxHQUEzQixFQUFnQztBQUM1QixNQUFJLENBQUNBLEdBQUQsSUFBUSxFQUFFQSxHQUFHLEdBQUdBLEdBQUcsQ0FBQ0MsSUFBSixFQUFSLENBQVosRUFBaUM7QUFDN0I7QUFDSDs7QUFFRCxNQUFJeEwsR0FBRyxDQUFDK0UsU0FBUixFQUFtQjtBQUNmLFFBQUl3RyxHQUFHLENBQUNoTCxPQUFKLENBQVksR0FBWixJQUFtQixDQUFDLENBQXhCLEVBQTJCO0FBQ3ZCZ0wsU0FBRyxDQUFDRSxLQUFKLENBQVUsS0FBVixFQUFpQjVLLE9BQWpCLENBQXlCLFVBQVU2SyxDQUFWLEVBQWE7QUFDbEMsZUFBTzFMLEdBQUcsQ0FBQytFLFNBQUosQ0FBY0UsTUFBZCxDQUFxQnlHLENBQXJCLENBQVA7QUFDSCxPQUZEO0FBR0gsS0FKRCxNQUlPO0FBQ0gxTCxTQUFHLENBQUMrRSxTQUFKLENBQWNFLE1BQWQsQ0FBcUJzRyxHQUFyQjtBQUNIOztBQUNELFFBQUksQ0FBQ3ZMLEdBQUcsQ0FBQytFLFNBQUosQ0FBYzRDLE1BQW5CLEVBQTJCO0FBQ3ZCM0gsU0FBRyxDQUFDdUksZUFBSixDQUFvQixPQUFwQjtBQUNIO0FBQ0osR0FYRCxNQVdPO0FBQ0gsUUFBSW9ELEdBQUcsR0FBRyxPQUFPM0wsR0FBRyxDQUFDNEwsWUFBSixDQUFpQixPQUFqQixLQUE2QixFQUFwQyxJQUEwQyxHQUFwRDtBQUNBLFFBQUlFLEdBQUcsR0FBRyxNQUFNUCxHQUFOLEdBQVksR0FBdEI7O0FBQ0EsV0FBT0ksR0FBRyxDQUFDcEwsT0FBSixDQUFZdUwsR0FBWixLQUFvQixDQUEzQixFQUE4QjtBQUMxQkgsU0FBRyxHQUFHQSxHQUFHLENBQUNJLE9BQUosQ0FBWUQsR0FBWixFQUFpQixHQUFqQixDQUFOO0FBQ0g7O0FBQ0RILE9BQUcsR0FBR0EsR0FBRyxDQUFDSCxJQUFKLEVBQU47O0FBQ0EsUUFBSUcsR0FBSixFQUFTO0FBQ0wzTCxTQUFHLENBQUNzSSxZQUFKLENBQWlCLE9BQWpCLEVBQTBCcUQsR0FBMUI7QUFDSCxLQUZELE1BRU87QUFDSDNMLFNBQUcsQ0FBQ3VJLGVBQUosQ0FBb0IsT0FBcEI7QUFDSDtBQUNKO0FBQ0o7O0FBRUQsU0FBU3lELGVBQVQsQ0FBeUJ0SSxHQUF6QixFQUE4QjtBQUMxQixNQUFJMkYsS0FBSyxHQUFHNUcsUUFBUSxDQUFDd0osYUFBVCxDQUF1QixPQUF2QixDQUFaO0FBQ0E1QyxPQUFLLENBQUMvQyxXQUFOLENBQWtCN0QsUUFBUSxDQUFDeUosY0FBVCxDQUF3QnhJLEdBQXhCLENBQWxCO0FBQ0EsTUFBSTBDLE1BQU0sR0FBRzNELFFBQVEsQ0FBQzBKLG9CQUFULENBQThCLE1BQTlCLEVBQXNDLENBQXRDLENBQWI7QUFDQS9GLFFBQU0sQ0FBQ0UsV0FBUCxDQUFtQitDLEtBQW5CO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzR0Q7QUFDQTtBQUNBOztJQUVNK0MsUTtBQUNGLG9CQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFBOztBQUNyQixTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7Ozs7Z0NBRVd6TixHLEVBQUt1TixNLEVBQVFDLEcsRUFBSztBQUMxQixVQUFJLENBQUMsS0FBS0MsUUFBTCxDQUFjek4sR0FBZCxDQUFMLEVBQXlCO0FBQ3JCLGFBQUt5TixRQUFMLENBQWN6TixHQUFkLElBQXFCLElBQUlzTixRQUFKLENBQWFDLE1BQWIsRUFBcUJDLEdBQXJCLENBQXJCO0FBQ0g7O0FBRUQsYUFBTyxLQUFLQyxRQUFMLENBQWN6TixHQUFkLENBQVA7QUFDSDs7Ozs7O0FBR0UsSUFBTTBOLFFBQWI7QUFDSSxvQkFBWTdILE1BQVosRUFBb0I7QUFBQTs7QUFDaEIsU0FBS0EsTUFBTCxHQUFjQSxNQUFNLElBQUk7QUFDcEI4SCxxQkFBZSxFQUFFQyxpREFBUUE7QUFETCxLQUF4QjtBQUdBLFNBQUtDLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxJQUFJQyx1REFBSixFQUFmO0FBQ0g7O0FBUkw7QUFBQTtBQUFBLG1DQVVtQmhPLEdBVm5CLEVBVXdCdU4sTUFWeEIsRUFVZ0NDLEdBVmhDLEVBVXFDO0FBQzdCLFVBQUksQ0FBQyxLQUFLTSxRQUFMLENBQWM5TixHQUFkLENBQUwsRUFBeUI7QUFDckIsYUFBSzhOLFFBQUwsQ0FBYzlOLEdBQWQsSUFBcUIsSUFBSXNOLFFBQUosQ0FBYUMsTUFBYixFQUFxQkMsR0FBckIsQ0FBckI7QUFDSDs7QUFFRCxhQUFPLEtBQUtNLFFBQUwsQ0FBYzlOLEdBQWQsQ0FBUDtBQUNIO0FBaEJMO0FBQUE7QUFBQSw0QkFrQll3TixHQWxCWixFQWtCaUI7QUFDVCxVQUFJSyxPQUFPLEdBQUcsS0FBS2hJLE1BQUwsQ0FBWThILGVBQVosQ0FBNEJILEdBQTVCLENBQWQ7QUFDQSxhQUFPLEtBQUtTLGNBQUwsQ0FBb0JKLE9BQXBCLENBQVA7QUFDSDtBQXJCTDtBQUFBO0FBQUEsbUNBdUJtQkEsT0F2Qm5CLEVBdUI0QjtBQUFBOztBQUNwQixXQUFLQyxRQUFMLEdBQWdCLEVBQWhCO0FBQ0EsV0FBS0QsT0FBTCxHQUFlQSxPQUFmO0FBQ0FBLGFBQU8sQ0FBQ25DLFVBQVIsQ0FBbUIzSixPQUFuQixDQUEyQixVQUFBNkosS0FBSztBQUFBLGVBQUksS0FBSSxDQUFDc0MsV0FBTCxDQUFpQnRDLEtBQWpCLENBQUo7QUFBQSxPQUFoQztBQUNBLGFBQU8sS0FBS2tDLFFBQVo7QUFDSDtBQTVCTDtBQUFBO0FBQUEsZ0NBOEJnQkssSUE5QmhCLEVBOEJzQkMsT0E5QnRCLEVBOEIrQjtBQUN2QixVQUFJcEgsTUFBTSxHQUFHLElBQWI7O0FBRUEsY0FBUW1ILElBQUksQ0FBQ0UsSUFBYjtBQUNJLGFBQUtDLDBDQUFHLENBQUNDLG1CQUFUO0FBQ0ksZUFBS0MsaUJBQUwsQ0FBdUJMLElBQXZCO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ0csb0JBQVQ7QUFDSSxlQUFLQyxpQkFBTCxDQUF1QlAsSUFBdkI7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDSyxxQkFBVDtBQUNJLGVBQUtDLGdCQUFMLENBQXNCVCxJQUF0QjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNPLGlCQUFUO0FBQ0ksZUFBS0MsWUFBTCxDQUFrQlgsSUFBbEI7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDUyxnQkFBVDtBQUNJLGVBQUtDLGFBQUwsQ0FBbUJiLElBQW5CO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1csZUFBVDtBQUNJLGVBQUtDLFlBQUwsQ0FBa0JmLElBQWxCO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ2EsY0FBVDtBQUNJLGVBQUtDLFdBQUwsQ0FBaUJqQixJQUFqQjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNlLGdCQUFUO0FBQ0lySSxnQkFBTSxHQUFHLEtBQUtzSSxhQUFMLENBQW1CbkIsSUFBbkIsRUFBeUJDLE9BQXpCLENBQVQ7QUFDQTs7QUFDSixhQUFLRSwwQ0FBRyxDQUFDaUIsVUFBVDtBQUNJdkksZ0JBQU0sR0FBRyxLQUFLd0ksaUJBQUwsQ0FBdUJyQixJQUF2QixFQUE2QkMsT0FBN0IsQ0FBVDtBQUNBOztBQUNKLGFBQUtFLDBDQUFHLENBQUNtQixPQUFUO0FBQ0l6SSxnQkFBTSxHQUFHLEtBQUswSSxjQUFMLENBQW9CdkIsSUFBcEIsRUFBMEJDLE9BQTFCLENBQVQ7QUFDQTs7QUFDSixhQUFLRSwwQ0FBRyxDQUFDcUIsZUFBVDtBQUNJLGVBQUtDLFlBQUwsQ0FBa0J6QixJQUFsQjtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUN1QixRQUFUO0FBQ0ksZUFBS0MsZUFBTCxDQUFxQjNCLElBQXJCO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ3lCLGdCQUFUO0FBQ0ksZUFBS0MsYUFBTCxDQUFtQjdCLElBQW5CO0FBQ0E7QUF2Q1I7O0FBMENBLGFBQU9uSCxNQUFQO0FBQ0g7QUE1RUw7QUFBQTtBQUFBLHNDQThFc0J3RyxHQTlFdEIsRUE4RTJCO0FBQUE7O0FBQ25CQSxTQUFHLENBQUM5QixVQUFKLENBQWUzSixPQUFmLENBQXVCLFVBQUE2SixLQUFLO0FBQUEsZUFBSSxNQUFJLENBQUNzQyxXQUFMLENBQWlCdEMsS0FBakIsQ0FBSjtBQUFBLE9BQTVCO0FBQ0g7QUFoRkw7QUFBQTtBQUFBLHNDQWtGc0JxRSxVQWxGdEIsRUFrRmtDO0FBQzFCLFdBQUsvQixXQUFMLENBQWlCK0IsVUFBVSxDQUFDQyxLQUE1QjtBQUNIO0FBcEZMO0FBQUE7QUFBQSxxQ0FzRnFCQyxTQXRGckIsRUFzRmdDO0FBQ3hCLFdBQUtqQyxXQUFMLENBQWlCaUMsU0FBUyxDQUFDQyxJQUEzQjtBQUNBLFdBQUtsQyxXQUFMLENBQWlCaUMsU0FBUyxDQUFDRSxTQUEzQjtBQUNBLFdBQUtuQyxXQUFMLENBQWlCaUMsU0FBUyxDQUFDRyxVQUEzQjtBQUNIO0FBMUZMO0FBQUE7QUFBQSxpQ0E0RmlCQyxLQTVGakIsRUE0RndCO0FBQ2hCLFdBQUtyQyxXQUFMLENBQWlCcUMsS0FBSyxDQUFDQyxJQUF2QjtBQUNBLFdBQUt0QyxXQUFMLENBQWlCcUMsS0FBSyxDQUFDTCxLQUF2QjtBQUNIO0FBL0ZMO0FBQUE7QUFBQSxrQ0FpR2tCTyxNQWpHbEIsRUFpRzBCO0FBQ2xCLFdBQUt2QyxXQUFMLENBQWlCdUMsTUFBTSxDQUFDRCxJQUF4QjtBQUNBLFdBQUt0QyxXQUFMLENBQWlCdUMsTUFBTSxDQUFDUCxLQUF4QjtBQUNIO0FBcEdMO0FBQUE7QUFBQSxpQ0FzR2lCUSxLQXRHakIsRUFzR3dCO0FBQ2hCLFdBQUt4QyxXQUFMLENBQWlCd0MsS0FBSyxDQUFDN0osR0FBdkI7QUFDSDtBQXhHTDtBQUFBO0FBQUEsZ0NBMEdnQjVFLElBMUdoQixFQTBHc0I7QUFBQTs7QUFDZEEsVUFBSSxDQUFDME8sSUFBTCxDQUFVNU8sT0FBVixDQUFrQixVQUFBOEUsR0FBRztBQUFBLGVBQUksTUFBSSxDQUFDcUgsV0FBTCxDQUFpQnJILEdBQWpCLENBQUo7QUFBQSxPQUFyQjs7QUFFQSxVQUFJLENBQUM1RSxJQUFJLENBQUNZLE1BQVYsRUFBa0I7QUFDZCxhQUFLcUwsV0FBTCxDQUFpQmpNLElBQUksQ0FBQ3NMLE1BQXRCLEVBQThCO0FBQUVBLGdCQUFNLEVBQUU7QUFBVixTQUE5QjtBQUNIO0FBQ0o7QUFoSEw7QUFBQTtBQUFBLGtDQWtIa0JxRCxNQWxIbEIsRUFrSDBCeEMsT0FsSDFCLEVBa0htQztBQUMzQixVQUFJeUMsTUFBTSxHQUFHLEtBQUszQyxXQUFMLENBQWlCMEMsTUFBTSxDQUFDRSxNQUF4QixDQUFiOztBQUVBLFVBQUlGLE1BQU0sQ0FBQ0csUUFBWCxFQUFxQjtBQUNqQixhQUFLN0MsV0FBTCxDQUFpQjBDLE1BQU0sQ0FBQ0ksUUFBeEIsRUFBa0M7QUFDOUJ6RCxnQkFBTSxFQUFFYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ2I7QUFERyxTQUFsQzs7QUFJQSxZQUFJcUQsTUFBTSxDQUFDSSxRQUFQLENBQWdCM0MsSUFBaEIsS0FBeUJDLDBDQUFHLENBQUNtQixPQUFqQyxFQUEwQztBQUN0QyxpQkFBT29CLE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQkwsTUFBTSxDQUFDSSxRQUFQLENBQWdCOU4sS0FBbkMsRUFBMENrTCxPQUFPLElBQUlBLE9BQU8sQ0FBQ2IsTUFBN0QsQ0FBUDtBQUNIOztBQUVELFlBQUl2TixHQUFHLEdBQUcsS0FBSytOLE9BQUwsQ0FBYW1ELEtBQWIsQ0FBbUJOLE1BQU0sQ0FBQ0ksUUFBMUIsQ0FBVjtBQUVBLGVBQU9ILE1BQU0sQ0FBQ0ksV0FBUCxDQUFtQmpSLEdBQW5CLEVBQXdCb08sT0FBTyxJQUFJQSxPQUFPLENBQUNiLE1BQTNDLEVBQW1ELElBQW5ELENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUtXLFdBQUwsQ0FBaUIwQyxNQUFNLENBQUNJLFFBQXhCLEVBQWtDO0FBQ3JDSCxjQUFNLEVBQUVBLE1BRDZCO0FBRXJDdEQsY0FBTSxFQUFFYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ2I7QUFGVSxPQUFsQyxDQUFQO0FBSUg7QUF2SUw7QUFBQTtBQUFBLHNDQXlJc0I0RCxVQXpJdEIsRUF5SWtDL0MsT0F6SWxDLEVBeUkyQztBQUNuQyxVQUFJcE8sR0FBRyxHQUFHLEtBQUsrTixPQUFMLENBQWFtRCxLQUFiLENBQW1CQyxVQUFuQixDQUFWO0FBQUEsVUFDSTVELE1BQU0sR0FBR2EsT0FBTyxJQUFJQSxPQUFPLENBQUNiLE1BRGhDOztBQUdBLFVBQUlhLE9BQU8sSUFBSUEsT0FBTyxDQUFDeUMsTUFBdkIsRUFBK0I7QUFDM0IsZUFBT3pDLE9BQU8sQ0FBQ3lDLE1BQVIsQ0FBZUksV0FBZixDQUEyQmpSLEdBQTNCLEVBQWdDdU4sTUFBaEMsQ0FBUDtBQUNIOztBQUVELGFBQU8sS0FBSzZELGNBQUwsQ0FBb0JwUixHQUFwQixFQUF5QnVOLE1BQXpCLENBQVA7QUFDSDtBQWxKTDtBQUFBO0FBQUEsbUNBb0ptQjhELE9BcEpuQixFQW9KNEJqRCxPQXBKNUIsRUFvSnFDO0FBQzdCLFVBQUlwTyxHQUFHLEdBQUcsS0FBSytOLE9BQUwsQ0FBYW1ELEtBQWIsQ0FBbUJHLE9BQW5CLENBQVY7O0FBRUEsVUFBSWpELE9BQU8sSUFBSUEsT0FBTyxDQUFDeUMsTUFBdkIsRUFBK0I7QUFDM0IsZUFBT3pDLE9BQU8sQ0FBQ3lDLE1BQVIsQ0FBZUksV0FBZixDQUEyQmpSLEdBQTNCLENBQVA7QUFDSDtBQUNKO0FBMUpMO0FBQUE7QUFBQSxvQ0E0Sm9Cc1IsSUE1SnBCLEVBNEowQjtBQUNsQixXQUFLcEQsV0FBTCxDQUFpQm9ELElBQUksQ0FBQ3BPLEtBQXRCO0FBQ0g7QUE5Skw7QUFBQTtBQUFBLGtDQWdLa0J2QyxHQWhLbEIsRUFnS3VCO0FBQUE7O0FBQ2ZBLFNBQUcsQ0FBQzRRLFVBQUosQ0FBZXhQLE9BQWYsQ0FBdUIsVUFBQWlHLElBQUk7QUFBQSxlQUFJLE1BQUksQ0FBQ2tHLFdBQUwsQ0FBaUJsRyxJQUFqQixDQUFKO0FBQUEsT0FBM0I7QUFDSDtBQWxLTDtBQUFBO0FBQUEsaUNBb0tpQndKLEdBcEtqQixFQW9Lc0I7QUFBQTs7QUFDZEEsU0FBRyxDQUFDOUYsVUFBSixDQUFlM0osT0FBZixDQUF1QixVQUFBNkosS0FBSztBQUFBLGVBQUksTUFBSSxDQUFDNkYsT0FBTCxDQUFhN0YsS0FBYixDQUFKO0FBQUEsT0FBNUI7QUFDSDtBQXRLTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLElBQU04RixTQUFiO0FBQ0kscUJBQVk1UCxLQUFaLEVBQW1CNkMsT0FBbkIsRUFBNEI7QUFBQTs7QUFDeEIsU0FBSzdDLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUs2QyxPQUFMLEdBQWVvRCw0Q0FBQSxDQUFZO0FBQ3ZCNEosZUFBUyxFQUFFLEtBRFk7QUFFdkJDLHVCQUFpQixFQUFFO0FBRkksS0FBWixFQUdaak4sT0FIWSxDQUFmO0FBSUEsU0FBS2tKLE9BQUwsR0FBZSxJQUFmO0FBQ0EsU0FBSzFGLE1BQUwsR0FBYyxJQUFkO0FBQ0EsU0FBSzRGLE9BQUwsR0FBZSxJQUFJQyx1REFBSixFQUFmO0FBQ0EsU0FBS25JLE1BQUwsR0FBYy9ELEtBQUssQ0FBQytQLE9BQU4sSUFBa0I7QUFDNUJsRSxxQkFBZSxFQUFFQyxpREFBUUE7QUFERyxLQUFoQztBQUdILEdBYkwsQ0FlSTs7O0FBZko7QUFBQTtBQUFBLDZCQWdCYUosR0FoQmIsRUFnQmtCckYsTUFoQmxCLEVBZ0IwQjtBQUNsQixVQUFJMEYsT0FBTyxHQUFHLEtBQUtoSSxNQUFMLENBQVk4SCxlQUFaLENBQTRCSCxHQUE1QixDQUFkO0FBQ0EsYUFBTyxLQUFLc0UsZUFBTCxDQUFxQmpFLE9BQXJCLEVBQThCMUYsTUFBOUIsQ0FBUDtBQUNIO0FBbkJMO0FBQUE7QUFBQSxvQ0FxQm9CMEYsT0FyQnBCLEVBcUI2QjFGLE1BckI3QixFQXFCcUM7QUFBQTs7QUFDN0IsVUFBSW5CLE1BQUo7QUFFQSxXQUFLNkcsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBSzFGLE1BQUwsR0FBY0EsTUFBZDtBQUVBLFdBQUswRixPQUFMLENBQWFuQyxVQUFiLENBQXdCM0osT0FBeEIsQ0FBZ0MsVUFBQTZKLEtBQUssRUFBSTtBQUNyQzVFLGNBQU0sR0FBRyxLQUFJLENBQUMrSyxZQUFMLENBQWtCbkcsS0FBbEIsQ0FBVDtBQUNILE9BRkQ7O0FBSUEsVUFBSTVFLE1BQU0sSUFBSUEsTUFBTSxDQUFDZ0wsS0FBckIsRUFBNEI7QUFDeEJoTCxjQUFNLEdBQUcsSUFBVDtBQUNIOztBQUVELGFBQU9BLE1BQVA7QUFDSCxLQXBDTCxDQXNDSTs7QUF0Q0o7QUFBQTtBQUFBLDJCQXVDV3dHLEdBdkNYLEVBdUNnQnRLLEtBdkNoQixFQXVDdUJpRixNQXZDdkIsRUF1QytCO0FBQ3ZCLFVBQUkwRixPQUFPLEdBQUcsS0FBS2hJLE1BQUwsQ0FBWThILGVBQVosQ0FBNEJILEdBQTVCLENBQWQ7QUFDQSxhQUFPLEtBQUt5RSxhQUFMLENBQW1CcEUsT0FBbkIsRUFBNEIzSyxLQUE1QixFQUFtQ2lGLE1BQW5DLENBQVA7QUFDSDtBQTFDTDtBQUFBO0FBQUEsa0NBNENrQjBGLE9BNUNsQixFQTRDMkIzSyxLQTVDM0IsRUE0Q2tDaUYsTUE1Q2xDLEVBNEMwQztBQUNsQyxXQUFLMEYsT0FBTCxHQUFlQSxPQUFmO0FBQ0EsV0FBSzFGLE1BQUwsR0FBY0EsTUFBZDs7QUFFQSxVQUFJLEtBQUswRixPQUFMLENBQWFuQyxVQUFiLENBQXdCN0MsTUFBeEIsS0FBbUMsQ0FBdkMsRUFBMEM7QUFDdEMsY0FBTSxJQUFJbEgsS0FBSixDQUFVb0csNkNBQUEsQ0FBYSwrQkFBYixFQUE4Q3lGLEdBQTlDLENBQVYsQ0FBTjtBQUNIOztBQUVELFVBQUkwRSxVQUFVLEdBQUcsS0FBS3JFLE9BQUwsQ0FBYW5DLFVBQWIsQ0FBd0IsQ0FBeEIsQ0FBakI7O0FBRUEsVUFBSXdHLFVBQVUsQ0FBQ3hHLFVBQVgsQ0FBc0I3QyxNQUF0QixHQUErQixDQUFuQyxFQUFzQztBQUNsQyxjQUFNLElBQUlsSCxLQUFKLENBQVVvRyw2Q0FBQSxDQUFhLCtCQUFiLEVBQThDeUYsR0FBOUMsQ0FBVixDQUFOO0FBQ0g7O0FBRUQsVUFBSXlDLFVBQVUsR0FBR2lDLFVBQVUsQ0FBQ3hHLFVBQVgsQ0FBc0IsQ0FBdEIsQ0FBakI7O0FBRUEsVUFBSXVFLFVBQVUsQ0FBQzVCLElBQVgsS0FBb0JDLDBDQUFHLENBQUNlLGdCQUE1QixFQUE4QztBQUMxQyxZQUFJL00sTUFBTSxHQUFHLEtBQUt5UCxZQUFMLENBQWtCOUIsVUFBVSxDQUFDYSxNQUE3QixDQUFiOztBQUVBLFlBQUl4TyxNQUFNLElBQUksSUFBZCxFQUFvQjtBQUNoQixnQkFBTSxJQUFJWCxLQUFKLENBQVVvRyw2Q0FBQSxDQUFhLDBCQUFiLEVBQXlDLEtBQUtnRyxPQUFMLENBQWFtRCxLQUFiLENBQW1CakIsVUFBVSxDQUFDYSxNQUE5QixDQUF6QyxDQUFWLENBQU47QUFDSDs7QUFFRCxZQUFJOVEsR0FBRyxHQUFHLEtBQUsrUixZQUFMLENBQWtCOUIsVUFBVSxDQUFDZSxRQUE3QixFQUF1QztBQUM3Q21CLHFCQUFXLEVBQUUsQ0FBQ2xDLFVBQVUsQ0FBQ2M7QUFEb0IsU0FBdkMsQ0FBVjs7QUFJQSxZQUFJL1EsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFDYixnQkFBTSxJQUFJMkIsS0FBSixDQUFVb0csNkNBQUEsQ0FBYSwwQkFBYixFQUF5QyxLQUFLZ0csT0FBTCxDQUFhbUQsS0FBYixDQUFtQmpCLFVBQVUsQ0FBQ2UsUUFBOUIsQ0FBekMsQ0FBVixDQUFOO0FBQ0g7O0FBRUQsWUFBSSxLQUFLck0sT0FBTCxDQUFhaU4saUJBQWIsSUFBa0MsSUFBdEMsRUFBNEM7QUFDeEN0UCxnQkFBTSxDQUFDdEMsR0FBRCxDQUFOLEdBQWNrRCxLQUFkO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZUFBS3lCLE9BQUwsQ0FBYWlOLGlCQUFiLENBQStCM1AsSUFBL0IsQ0FBb0MsSUFBcEMsRUFBMENLLE1BQTFDLEVBQWtEdEMsR0FBbEQsRUFBdURrRCxLQUF2RDtBQUNIO0FBQ0osT0FyQkQsTUFzQkssSUFBSStNLFVBQVUsQ0FBQzVCLElBQVgsS0FBb0JDLDBDQUFHLENBQUNpQixVQUE1QixFQUF3QztBQUN6QyxZQUFJdlAsR0FBRyxHQUFHLEtBQUsrTixPQUFMLENBQWFtRCxLQUFiLENBQW1CakIsVUFBbkIsQ0FBVjs7QUFFQSxZQUFJLEtBQUt0TCxPQUFMLENBQWFpTixpQkFBYixJQUFrQyxJQUF0QyxFQUE0QztBQUN4QyxlQUFLOVAsS0FBTCxDQUFXOUIsR0FBWCxJQUFrQmtELEtBQWxCO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZUFBS3lCLE9BQUwsQ0FBYWlOLGlCQUFiLENBQStCM1AsSUFBL0IsQ0FBb0MsSUFBcEMsRUFBMEMsS0FBS0gsS0FBL0MsRUFBc0Q5QixHQUF0RCxFQUEyRGtELEtBQTNEO0FBQ0g7QUFDSixPQVRJLE1BVUE7QUFDRCxjQUFNLElBQUl2QixLQUFKLENBQVVvRyw2Q0FBQSxDQUFhLCtCQUFiLEVBQThDeUYsR0FBOUMsQ0FBVixDQUFOO0FBQ0g7QUFDSjtBQS9GTDtBQUFBO0FBQUEsaUNBaUdpQlcsSUFqR2pCLEVBaUd1QkMsT0FqR3ZCLEVBaUdnQztBQUN4QixVQUFJcEgsTUFBSjs7QUFFQSxjQUFRbUgsSUFBSSxDQUFDRSxJQUFiO0FBQ0ksYUFBS0MsMENBQUcsQ0FBQ0MsbUJBQVQ7QUFDSXZILGdCQUFNLEdBQUcsS0FBS29MLGtCQUFMLENBQXdCakUsSUFBeEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNHLG9CQUFUO0FBQ0l6SCxnQkFBTSxHQUFHLEtBQUtxTCxrQkFBTCxDQUF3QmxFLElBQXhCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDSyxxQkFBVDtBQUNJM0gsZ0JBQU0sR0FBRyxLQUFLc0wsaUJBQUwsQ0FBdUJuRSxJQUF2QixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ08saUJBQVQ7QUFDSTdILGdCQUFNLEdBQUcsS0FBS3VMLGFBQUwsQ0FBbUJwRSxJQUFuQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1MsZ0JBQVQ7QUFDSS9ILGdCQUFNLEdBQUcsS0FBS3dMLGNBQUwsQ0FBb0JyRSxJQUFwQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1csZUFBVDtBQUNJakksZ0JBQU0sR0FBRyxLQUFLeUwsYUFBTCxDQUFtQnRFLElBQW5CLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDYSxjQUFUO0FBQ0luSSxnQkFBTSxHQUFHLEtBQUswTCxZQUFMLENBQWtCdkUsSUFBbEIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNlLGdCQUFUO0FBQ0lySSxnQkFBTSxHQUFHLEtBQUsyTCxjQUFMLENBQW9CeEUsSUFBcEIsRUFBMEJDLE9BQTFCLENBQVQ7QUFDQTs7QUFDSixhQUFLRSwwQ0FBRyxDQUFDaUIsVUFBVDtBQUNJdkksZ0JBQU0sR0FBRyxLQUFLNEwsa0JBQUwsQ0FBd0J6RSxJQUF4QixFQUE4QkMsT0FBOUIsQ0FBVDtBQUNBOztBQUNKLGFBQUtFLDBDQUFHLENBQUNtQixPQUFUO0FBQ0l6SSxnQkFBTSxHQUFHLEtBQUs2TCxlQUFMLENBQXFCMUUsSUFBckIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUNxQixlQUFUO0FBQ0kzSSxnQkFBTSxHQUFHLEtBQUs4TCxhQUFMLENBQW1CM0UsSUFBbkIsQ0FBVDtBQUNBOztBQUNKLGFBQUtHLDBDQUFHLENBQUN1QixRQUFUO0FBQ0k3SSxnQkFBTSxHQUFHLEtBQUsrTCxnQkFBTCxDQUFzQjVFLElBQXRCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDeUIsZ0JBQVQ7QUFDSS9JLGdCQUFNLEdBQUcsS0FBS2dNLGNBQUwsQ0FBb0I3RSxJQUFwQixDQUFUO0FBQ0E7QUF2Q1I7O0FBMENBLGFBQU9uSCxNQUFQO0FBQ0g7QUEvSUw7QUFBQTtBQUFBLHVDQWlKdUJ3RyxHQWpKdkIsRUFpSjRCO0FBQUE7O0FBQ3BCLFVBQUl4RyxNQUFKO0FBRUF3RyxTQUFHLENBQUM5QixVQUFKLENBQWUzSixPQUFmLENBQXVCLFVBQUE2SixLQUFLLEVBQUk7QUFDNUI1RSxjQUFNLEdBQUcsTUFBSSxDQUFDK0ssWUFBTCxDQUFrQm5HLEtBQWxCLENBQVQ7QUFDSCxPQUZEO0FBSUEsYUFBTzVFLE1BQVA7QUFDSDtBQXpKTDtBQUFBO0FBQUEsdUNBMkp1QmlKLFVBM0p2QixFQTJKbUM7QUFDM0IsVUFBSTNOLE1BQU0sR0FBRyxLQUFLeVAsWUFBTCxDQUFrQjlCLFVBQVUsQ0FBQ08sSUFBN0IsRUFBbUM7QUFDNUN5QyxzQkFBYyxFQUFFO0FBRDRCLE9BQW5DLENBQWI7QUFHQSxVQUFJL1AsS0FBSyxHQUFHLEtBQUs2TyxZQUFMLENBQWtCOUIsVUFBVSxDQUFDQyxLQUE3QixDQUFaOztBQUVBLFVBQUksS0FBS3ZMLE9BQUwsQ0FBYWlOLGlCQUFiLElBQWtDLElBQXRDLEVBQTRDO0FBQ3hDdFAsY0FBTSxDQUFDM0IsR0FBUCxDQUFXMkIsTUFBTSxDQUFDZ1AsSUFBbEIsSUFBMEJwTyxLQUExQjtBQUNILE9BRkQsTUFHSztBQUNELGFBQUt5QixPQUFMLENBQWFpTixpQkFBYixDQUErQjNQLElBQS9CLENBQW9DLElBQXBDLEVBQTBDSyxNQUFNLENBQUMzQixHQUFqRCxFQUFzRDJCLE1BQU0sQ0FBQ2dQLElBQTdELEVBQW1FcE8sS0FBbkU7QUFDSDtBQUNKO0FBdktMO0FBQUE7QUFBQSxzQ0F5S3NCaU4sU0F6S3RCLEVBeUtpQztBQUN6QixVQUFJLEtBQUs0QixZQUFMLENBQWtCNUIsU0FBUyxDQUFDQyxJQUE1QixDQUFKLEVBQXVDO0FBQ25DLGVBQU8sS0FBSzJCLFlBQUwsQ0FBa0I1QixTQUFTLENBQUNFLFNBQTVCLENBQVA7QUFDSDs7QUFFRCxhQUFPLEtBQUswQixZQUFMLENBQWtCNUIsU0FBUyxDQUFDRyxVQUE1QixDQUFQO0FBQ0g7QUEvS0w7QUFBQTtBQUFBLGtDQWlMa0JDLEtBakxsQixFQWlMeUI7QUFDakIsVUFBSXZKLE1BQUo7QUFDQSxVQUFJa00sU0FBUyxHQUFHLEtBQUtuQixZQUFMLENBQWtCeEIsS0FBSyxDQUFDQyxJQUF4QixDQUFoQjtBQUNBLFVBQUkyQyxVQUFVLEdBQUcsS0FBS3BCLFlBQUwsQ0FBa0J4QixLQUFLLENBQUNMLEtBQXhCLENBQWpCOztBQUVBLGNBQVFLLEtBQUssQ0FBQzZDLFFBQWQ7QUFDSSxhQUFLLElBQUw7QUFDSXBNLGdCQUFNLEdBQUdrTSxTQUFTLElBQUlDLFVBQXRCO0FBQ0E7O0FBQ0osYUFBSyxJQUFMO0FBQ0luTSxnQkFBTSxHQUFHa00sU0FBUyxJQUFJQyxVQUF0QjtBQUNBO0FBTlI7O0FBU0EsYUFBT25NLE1BQVA7QUFDSDtBQWhNTDtBQUFBO0FBQUEsbUNBa01tQnlKLE1BbE1uQixFQWtNMkI7QUFDbkIsVUFBSXpKLE1BQUo7QUFDQSxVQUFJa00sU0FBUyxHQUFHLEtBQUtuQixZQUFMLENBQWtCdEIsTUFBTSxDQUFDRCxJQUF6QixDQUFoQjtBQUNBLFVBQUkyQyxVQUFVLEdBQUcsS0FBS3BCLFlBQUwsQ0FBa0J0QixNQUFNLENBQUNQLEtBQXpCLENBQWpCLENBSG1CLENBS25COztBQUNBLGNBQVFPLE1BQU0sQ0FBQzJDLFFBQWY7QUFDSSxhQUFLLEdBQUw7QUFDSXBNLGdCQUFNLEdBQUdrTSxTQUFTLEdBQUdDLFVBQXJCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0luTSxnQkFBTSxHQUFHa00sU0FBUyxHQUFHQyxVQUFyQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJbk0sZ0JBQU0sR0FBR2tNLFNBQVMsR0FBR0MsVUFBckI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSW5NLGdCQUFNLEdBQUdrTSxTQUFTLEdBQUdDLFVBQXJCO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0luTSxnQkFBTSxHQUFHa00sU0FBUyxHQUFHQyxVQUFyQjtBQUNBOztBQUNKLGFBQUssR0FBTDtBQUNJbk0sZ0JBQU0sR0FBR2tNLFNBQVMsR0FBR0MsVUFBckI7QUFDQTs7QUFDSixhQUFLLEdBQUw7QUFDSW5NLGdCQUFNLEdBQUdrTSxTQUFTLEdBQUdDLFVBQXJCO0FBQ0E7O0FBQ0osYUFBSyxJQUFMO0FBQ0luTSxnQkFBTSxHQUFHa00sU0FBUyxJQUFJQyxVQUF0QjtBQUNBOztBQUNKLGFBQUssSUFBTDtBQUNJbk0sZ0JBQU0sR0FBR2tNLFNBQVMsSUFBSUMsVUFBdEI7QUFDQTs7QUFDSixhQUFLLElBQUw7QUFDSW5NLGdCQUFNLEdBQUdrTSxTQUFTLElBQUlDLFVBQXRCO0FBQ0E7O0FBQ0osYUFBSyxJQUFMO0FBQ0luTSxnQkFBTSxHQUFHa00sU0FBUyxJQUFJQyxVQUF0QjtBQUNBOztBQUNKLGFBQUssS0FBTDtBQUNJbk0sZ0JBQU0sR0FBR2tNLFNBQVMsS0FBS0MsVUFBdkI7QUFDQTs7QUFDSixhQUFLLEtBQUw7QUFDSW5NLGdCQUFNLEdBQUdrTSxTQUFTLEtBQUtDLFVBQXZCO0FBQ0E7QUF2Q1I7O0FBMENBLGFBQU9uTSxNQUFQO0FBQ0g7QUFuUEw7QUFBQTtBQUFBLGtDQXFQa0IwSixLQXJQbEIsRUFxUHlCO0FBQ2pCLFVBQUkxSixNQUFKO0FBQUEsVUFDSTlELEtBQUssR0FBRyxLQUFLNk8sWUFBTCxDQUFrQnJCLEtBQUssQ0FBQzdKLEdBQXhCLENBRFo7O0FBR0EsY0FBUTZKLEtBQUssQ0FBQzBDLFFBQWQ7QUFDSSxhQUFLLEdBQUw7QUFDSXBNLGdCQUFNLEdBQUc5RCxLQUFUO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0k4RCxnQkFBTSxHQUFHLENBQUM5RCxLQUFWO0FBQ0E7O0FBQ0osYUFBSyxHQUFMO0FBQ0k4RCxnQkFBTSxHQUFHLENBQUM5RCxLQUFWO0FBQ0E7QUFUUjs7QUFZQSxhQUFPOEQsTUFBUDtBQUNIO0FBdFFMO0FBQUE7QUFBQSxpQ0F3UWlCL0UsSUF4UWpCLEVBd1F1QjtBQUFBOztBQUNmLFVBQUlvUixTQUFTLEdBQUdwUixJQUFJLENBQUMwTyxJQUFMLENBQVUyQyxHQUFWLENBQWMsVUFBQXpNLEdBQUcsRUFBSTtBQUNqQyxlQUFPLE1BQUksQ0FBQ2tMLFlBQUwsQ0FBa0JsTCxHQUFsQixDQUFQO0FBQ0gsT0FGZSxDQUFoQjtBQUlBLFVBQUl1SCxPQUFPLEdBQUcsS0FBSzJELFlBQUwsQ0FBa0I5UCxJQUFJLENBQUNzTCxNQUF2QixFQUErQjtBQUN6Q0EsY0FBTSxFQUFFO0FBRGlDLE9BQS9CLENBQWQ7O0FBSUEsVUFBSXRMLElBQUksQ0FBQ1ksTUFBVCxFQUFpQjtBQUNiLFlBQUlBLE1BQU0sR0FBRyxLQUFLZixLQUFMLENBQVd5UixVQUFYLENBQXNCbkYsT0FBTyxDQUFDa0QsSUFBOUIsQ0FBYjs7QUFFQSxZQUFHek8sTUFBTSxJQUFJLElBQWIsRUFBbUI7QUFDZixnQkFBTSxJQUFJbEIsS0FBSixDQUFVLGFBQWF5TSxPQUFPLENBQUNrRCxJQUFyQixHQUE0QixrQkFBdEMsQ0FBTjtBQUNIOztBQUVELGVBQU96TyxNQUFNLENBQUMyUSxPQUFQLENBQWVDLEtBQWYsQ0FBcUI1USxNQUFyQixFQUE2QndRLFNBQTdCLENBQVA7QUFDSCxPQVJELE1BU0s7QUFDRCxZQUFJOVIsRUFBRSxHQUFHNk0sT0FBTyxDQUFDek4sR0FBUixDQUFZeU4sT0FBTyxDQUFDa0QsSUFBcEIsQ0FBVDs7QUFDQSxZQUFJdkosaURBQUEsQ0FBaUJ4RyxFQUFqQixDQUFKLEVBQTBCO0FBQ3RCLGlCQUFPQSxFQUFFLENBQUNrUyxLQUFILENBQVNyRixPQUFPLENBQUN6TixHQUFqQixFQUFzQjBTLFNBQXRCLENBQVA7QUFDSDs7QUFDRCxjQUFNLElBQUkxUixLQUFKLENBQVV5TSxPQUFPLENBQUNrRCxJQUFSLEdBQWUsb0JBQXpCLENBQU47QUFDSDtBQUNKO0FBalNMO0FBQUE7QUFBQSxtQ0FtU21CVixNQW5TbkIsRUFtUzJCeEMsT0FuUzNCLEVBbVNvQztBQUM1QixVQUFJek4sR0FBRyxHQUFHLEtBQUtvUixZQUFMLENBQWtCbkIsTUFBTSxDQUFDRSxNQUF6QixDQUFWOztBQUVBLFVBQUluUSxHQUFHLElBQUksSUFBUCxLQUFnQixLQUFLZ0UsT0FBTCxDQUFhZ04sU0FBYixJQUEwQmYsTUFBTSxDQUFDRSxNQUFQLENBQWNhLFNBQXhELENBQUosRUFBd0U7QUFDcEVoUixXQUFHLEdBQUcsSUFBSStTLHlEQUFKLEVBQU47QUFDSDs7QUFFRCxVQUFJOUMsTUFBTSxDQUFDRyxRQUFYLEVBQXFCO0FBQ2pCLFlBQUlPLElBQUksR0FBRyxLQUFLUyxZQUFMLENBQWtCbkIsTUFBTSxDQUFDSSxRQUF6QixDQUFYO0FBQ0EsZUFBT3JRLEdBQUcsQ0FBQzJRLElBQUQsQ0FBVjtBQUNIOztBQUVELGFBQU8sS0FBS1MsWUFBTCxDQUFrQm5CLE1BQU0sQ0FBQ0ksUUFBekIsRUFBbUM7QUFDdEMxTyxjQUFNLEVBQUUzQixHQUQ4QjtBQUV0Q2dULGtCQUFVLEVBQUUvQyxNQUFNLENBQUNFLE1BRm1CO0FBR3RDdkQsY0FBTSxFQUFFYSxPQUFPLElBQUlBLE9BQU8sQ0FBQ2IsTUFIVztBQUl0QzBGLHNCQUFjLEVBQUU3RSxPQUFPLElBQUlBLE9BQU8sQ0FBQzZFO0FBSkcsT0FBbkMsQ0FBUDtBQU1IO0FBclRMO0FBQUE7QUFBQSx1Q0F1VHVCOUIsVUF2VHZCLEVBdVRtQy9DLE9BdlRuQyxFQXVUNEM7QUFDcEMsVUFBSTlMLE1BQUo7QUFFQThMLGFBQU8sR0FBR0EsT0FBTyxJQUFJLEVBQXJCOztBQUVBLFVBQUlBLE9BQU8sQ0FBQ3VGLFVBQVIsSUFBc0IsSUFBMUIsRUFBZ0M7QUFDNUJyUixjQUFNLEdBQUcsS0FBS1IsS0FBZDtBQUNILE9BRkQsTUFHSztBQUNEUSxjQUFNLEdBQUc4TCxPQUFPLENBQUM5TCxNQUFqQjtBQUNIOztBQUVELFVBQUk4TCxPQUFPLENBQUM2RSxjQUFSLElBQTBCN0UsT0FBTyxDQUFDYixNQUF0QyxFQUE4QztBQUMxQyxlQUFPO0FBQ0g1TSxhQUFHLEVBQUUyQixNQURGO0FBRUhnUCxjQUFJLEVBQUVILFVBQVUsQ0FBQ2pSO0FBRmQsU0FBUDtBQUlIOztBQUVELFVBQUlrTyxPQUFPLENBQUMrRCxXQUFaLEVBQXlCO0FBQ3JCLGVBQU9oQixVQUFVLENBQUNqUixJQUFsQjtBQUNIOztBQUVELFVBQUk4RyxNQUFNLEdBQUcxRSxNQUFNLENBQUM2TyxVQUFVLENBQUNqUixJQUFaLENBQW5COztBQUVBLFVBQUk4RyxNQUFNLElBQUksSUFBVixJQUFrQixLQUFLbUIsTUFBM0IsRUFBbUM7QUFDL0JuQixjQUFNLEdBQUcsS0FBS21CLE1BQUwsQ0FBWWdKLFVBQVUsQ0FBQ2pSLElBQXZCLENBQVQ7QUFDSDs7QUFFRCxhQUFPOEcsTUFBUDtBQUNIO0FBclZMO0FBQUE7QUFBQSxvQ0F1Vm9CcUssT0F2VnBCLEVBdVY2QjtBQUNyQixhQUFPQSxPQUFPLENBQUNuTyxLQUFmO0FBQ0g7QUF6Vkw7QUFBQTtBQUFBLHFDQTJWcUJvTyxJQTNWckIsRUEyVjJCO0FBQ25CLFVBQUl0UixHQUFHLEdBQUcsS0FBSytSLFlBQUwsQ0FBa0JULElBQUksQ0FBQ3RSLEdBQXZCLEVBQTRCO0FBQ2xDbVMsbUJBQVcsRUFBRTtBQURxQixPQUE1QixDQUFWO0FBSUEsVUFBSWpQLEtBQUssR0FBRyxLQUFLNk8sWUFBTCxDQUFrQlQsSUFBSSxDQUFDcE8sS0FBdkIsQ0FBWjtBQUVBLGFBQU87QUFDSGxELFdBQUcsRUFBRUEsR0FERjtBQUVIa0QsYUFBSyxFQUFFQTtBQUZKLE9BQVA7QUFJSDtBQXRXTDtBQUFBO0FBQUEsbUNBd1dtQnZDLEdBeFduQixFQXdXd0I7QUFBQTs7QUFDaEIsVUFBSXFHLE1BQU0sR0FBRyxFQUFiO0FBRUFyRyxTQUFHLENBQUM0USxVQUFKLENBQWV4UCxPQUFmLENBQXVCLFVBQUFpRyxJQUFJLEVBQUk7QUFDM0IsWUFBSTRMLEdBQUcsR0FBRyxNQUFJLENBQUM3QixZQUFMLENBQWtCL0osSUFBbEIsQ0FBVjs7QUFDQWhCLGNBQU0sQ0FBQzRNLEdBQUcsQ0FBQzVULEdBQUwsQ0FBTixHQUFrQjRULEdBQUcsQ0FBQzFRLEtBQXRCO0FBQ0gsT0FIRDtBQUtBLGFBQU84RCxNQUFQO0FBQ0g7QUFqWEw7QUFBQTtBQUFBLGtDQW1Ya0J3SyxHQW5YbEIsRUFtWHVCO0FBQUE7O0FBQ2YsVUFBSXhLLE1BQU0sR0FBRyxFQUFiO0FBRUF3SyxTQUFHLENBQUM5RixVQUFKLENBQWUzSixPQUFmLENBQXVCLFVBQUE2SixLQUFLLEVBQUk7QUFDNUI1RSxjQUFNLENBQUN0RixJQUFQLENBQVksTUFBSSxDQUFDcVEsWUFBTCxDQUFrQm5HLEtBQWxCLENBQVo7QUFDSCxPQUZEO0FBSUEsYUFBTzVFLE1BQVA7QUFDSDtBQTNYTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLFNBQVM2TSxNQUFULENBQWdCckcsR0FBaEIsRUFBcUI7QUFDakIsU0FBTyxJQUFJc0csbURBQUosR0FBZUMsR0FBZixDQUFtQnZHLEdBQW5CLENBQVA7QUFDSDs7QUFFRCxTQUFTSSxRQUFULENBQWtCSixHQUFsQixFQUF1QjtBQUNuQixTQUFPLElBQUl3RyxxREFBSixDQUFjLElBQUlGLG1EQUFKLEVBQWQsRUFBOEJHLEtBQTlCLENBQW9DekcsR0FBcEMsQ0FBUDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNURDtBQUNBO0FBRU8sSUFBTVEsVUFBYjtBQUNJLHdCQUFjO0FBQUE7QUFFYjs7QUFITDtBQUFBO0FBQUEsMEJBS1VHLElBTFYsRUFLZ0I7QUFDUixVQUFJbkgsTUFBSjs7QUFFQSxjQUFRbUgsSUFBSSxDQUFDRSxJQUFiO0FBQ0ksYUFBS0MsMENBQUcsQ0FBQ0MsbUJBQVQ7QUFDSXZILGdCQUFNLEdBQUcsS0FBS2tOLGVBQUwsQ0FBcUIvRixJQUFyQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ0csb0JBQVQ7QUFDSXpILGdCQUFNLEdBQUcsS0FBS21OLGVBQUwsQ0FBcUJoRyxJQUFyQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ0sscUJBQVQ7QUFDSTNILGdCQUFNLEdBQUcsS0FBS29OLGNBQUwsQ0FBb0JqRyxJQUFwQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ08saUJBQVQ7QUFDSTdILGdCQUFNLEdBQUcsS0FBS3FOLFVBQUwsQ0FBZ0JsRyxJQUFoQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1MsZ0JBQVQ7QUFDSS9ILGdCQUFNLEdBQUcsS0FBS3NOLFdBQUwsQ0FBaUJuRyxJQUFqQixDQUFUO0FBQ0E7O0FBQ0osYUFBS0csMENBQUcsQ0FBQ1csZUFBVDtBQUNJakksZ0JBQU0sR0FBRyxLQUFLdU4sVUFBTCxDQUFnQnBHLElBQWhCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDYSxjQUFUO0FBQ0luSSxnQkFBTSxHQUFHLEtBQUt3TixTQUFMLENBQWVyRyxJQUFmLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDZSxnQkFBVDtBQUNJckksZ0JBQU0sR0FBRyxLQUFLeU4sV0FBTCxDQUFpQnRHLElBQWpCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDaUIsVUFBVDtBQUNJdkksZ0JBQU0sR0FBRyxLQUFLME4sZUFBTCxDQUFxQnZHLElBQXJCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDbUIsT0FBVDtBQUNJekksZ0JBQU0sR0FBRyxLQUFLMk4sWUFBTCxDQUFrQnhHLElBQWxCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDcUIsZUFBVDtBQUNJM0ksZ0JBQU0sR0FBRyxLQUFLNE4sVUFBTCxDQUFnQnpHLElBQWhCLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDdUIsUUFBVDtBQUNJN0ksZ0JBQU0sR0FBRyxLQUFLNk4sYUFBTCxDQUFtQjFHLElBQW5CLENBQVQ7QUFDQTs7QUFDSixhQUFLRywwQ0FBRyxDQUFDeUIsZ0JBQVQ7QUFDSS9JLGdCQUFNLEdBQUcsS0FBSzhOLFdBQUwsQ0FBaUIzRyxJQUFqQixDQUFUO0FBQ0E7QUF2Q1I7O0FBMENBLGFBQU9uSCxNQUFQO0FBQ0g7QUFuREw7QUFBQTtBQUFBLG9DQXFEb0J3RyxHQXJEcEIsRUFxRHlCO0FBQUE7O0FBQ2pCLFVBQUl4RyxNQUFKO0FBRUF3RyxTQUFHLENBQUM5QixVQUFKLENBQWUzSixPQUFmLENBQXVCLFVBQUE2SixLQUFLLEVBQUk7QUFDNUI1RSxjQUFNLEdBQUcsS0FBSSxDQUFDa0ssS0FBTCxDQUFXdEYsS0FBWCxDQUFUO0FBQ0gsT0FGRDtBQUlBLGFBQU81RSxNQUFQO0FBQ0g7QUE3REw7QUFBQTtBQUFBLG9DQStEb0JpSixVQS9EcEIsRUErRGdDO0FBQ3hCLFVBQUkzTixNQUFNLEdBQUcsS0FBSzRPLEtBQUwsQ0FBV2pCLFVBQVUsQ0FBQ08sSUFBdEIsQ0FBYjtBQUNBLFVBQUl0TixLQUFLLEdBQUcsS0FBS2dPLEtBQUwsQ0FBV2pCLFVBQVUsQ0FBQ0MsS0FBdEIsQ0FBWjtBQUNBLGFBQU9uSSw2Q0FBQSxDQUFhLFNBQWIsRUFBd0J6RixNQUF4QixFQUFnQ1ksS0FBaEMsQ0FBUDtBQUNIO0FBbkVMO0FBQUE7QUFBQSxtQ0FxRW1CaU4sU0FyRW5CLEVBcUU4QjtBQUN0QixVQUFJQyxJQUFJLEdBQUcsS0FBS2MsS0FBTCxDQUFXZixTQUFTLENBQUNDLElBQXJCLENBQVg7QUFDQSxVQUFJQyxTQUFTLEdBQUcsS0FBS2EsS0FBTCxDQUFXZixTQUFTLENBQUNFLFNBQXJCLENBQWhCO0FBQ0EsVUFBSUMsVUFBVSxHQUFHLEtBQUtZLEtBQUwsQ0FBV2YsU0FBUyxDQUFDRyxVQUFyQixDQUFqQjtBQUNBLGFBQU92SSw2Q0FBQSxDQUFhLGFBQWIsRUFBNEJxSSxJQUE1QixFQUFrQ0MsU0FBbEMsRUFBNkNDLFVBQTdDLENBQVA7QUFDSDtBQTFFTDtBQUFBO0FBQUEsK0JBNEVlQyxLQTVFZixFQTRFc0I7QUFDZCxVQUFJMkMsU0FBUyxHQUFHLEtBQUtoQyxLQUFMLENBQVdYLEtBQUssQ0FBQ0MsSUFBakIsQ0FBaEI7QUFDQSxVQUFJMkMsVUFBVSxHQUFHLEtBQUtqQyxLQUFMLENBQVdYLEtBQUssQ0FBQ0wsS0FBakIsQ0FBakI7QUFDQSxhQUFPbkksNkNBQUEsQ0FBYSxXQUFiLEVBQTBCbUwsU0FBMUIsRUFBcUMzQyxLQUFLLENBQUM2QyxRQUEzQyxFQUFxREQsVUFBckQsQ0FBUDtBQUNIO0FBaEZMO0FBQUE7QUFBQSxnQ0FrRmdCMUMsTUFsRmhCLEVBa0Z3QjtBQUNoQixVQUFJeUMsU0FBUyxHQUFHLEtBQUtoQyxLQUFMLENBQVdULE1BQU0sQ0FBQ0QsSUFBbEIsQ0FBaEI7QUFDQSxVQUFJMkMsVUFBVSxHQUFHLEtBQUtqQyxLQUFMLENBQVdULE1BQU0sQ0FBQ1AsS0FBbEIsQ0FBakI7QUFDQSxhQUFPbkksNkNBQUEsQ0FBYSxXQUFiLEVBQTBCbUwsU0FBMUIsRUFBcUN6QyxNQUFNLENBQUMyQyxRQUE1QyxFQUFzREQsVUFBdEQsQ0FBUDtBQUNIO0FBdEZMO0FBQUE7QUFBQSwrQkF3RmV6QyxLQXhGZixFQXdGc0I7QUFDZCxVQUFJeE4sS0FBSyxHQUFHLEtBQUtnTyxLQUFMLENBQVdSLEtBQUssQ0FBQzdKLEdBQWpCLENBQVo7QUFDQSxhQUFPa0IsNkNBQUEsQ0FBYSxRQUFiLEVBQXVCMkksS0FBSyxDQUFDMEMsUUFBN0IsRUFBdUNsUSxLQUF2QyxDQUFQO0FBQ0g7QUEzRkw7QUFBQTtBQUFBLDhCQTZGY2pCLElBN0ZkLEVBNkZvQjtBQUFBOztBQUNaLFVBQUk4UyxHQUFHLEdBQUcsRUFBVjtBQUFBLFVBQWMxQixTQUFTLEdBQUdwUixJQUFJLENBQUMwTyxJQUFMLENBQVUyQyxHQUFWLENBQWMsVUFBQXpNLEdBQUcsRUFBSTtBQUMzQyxlQUFPLE1BQUksQ0FBQ3FLLEtBQUwsQ0FBV3JLLEdBQVgsQ0FBUDtBQUNILE9BRnlCLENBQTFCO0FBSUEsVUFBSXRGLEVBQUUsR0FBRyxLQUFLMlAsS0FBTCxDQUFXalAsSUFBSSxDQUFDc0wsTUFBaEIsQ0FBVDs7QUFFQSxVQUFJdEwsSUFBSSxDQUFDWSxNQUFULEVBQWlCO0FBQ2IsWUFBSXdRLFNBQVMsQ0FBQ3hLLE1BQVYsR0FBbUIsQ0FBdkIsRUFBMEI7QUFDdEJrTSxhQUFHLEdBQUcxQixTQUFTLENBQUN2SyxLQUFWLEVBQU47QUFDSDs7QUFFRGlNLFdBQUcsSUFBSSxRQUFReFQsRUFBZjs7QUFFQSxZQUFJOFIsU0FBUyxDQUFDeEssTUFBVixHQUFtQixDQUF2QixFQUEwQjtBQUN0QmtNLGFBQUcsSUFBSSxNQUFNaE4sMkNBQUEsQ0FBVyxHQUFYLEVBQWdCc0wsU0FBaEIsQ0FBYjtBQUNIO0FBQ0osT0FWRCxNQVdLO0FBQ0QwQixXQUFHLEdBQUdoTiw2Q0FBQSxDQUFhLFVBQWIsRUFBeUJ4RyxFQUF6QixFQUE2QndHLDJDQUFBLENBQVcsSUFBWCxFQUFpQnNMLFNBQWpCLENBQTdCLENBQU47QUFDSDs7QUFFRCxhQUFPMEIsR0FBUDtBQUNIO0FBcEhMO0FBQUE7QUFBQSxnQ0FzSGdCbkUsTUF0SGhCLEVBc0h3QjtBQUNoQixVQUFJalEsR0FBRyxHQUFHLEtBQUt1USxLQUFMLENBQVdOLE1BQU0sQ0FBQ0UsTUFBbEIsQ0FBVjtBQUNBLFVBQUlRLElBQUksR0FBRyxLQUFLSixLQUFMLENBQVdOLE1BQU0sQ0FBQ0ksUUFBbEIsQ0FBWDs7QUFFQSxVQUFJSixNQUFNLENBQUNHLFFBQVgsRUFBcUI7QUFDakIsZUFBT2hKLDZDQUFBLENBQWEsVUFBYixFQUF5QnBILEdBQXpCLEVBQThCMlEsSUFBOUIsQ0FBUDtBQUNIOztBQUVELGFBQU92Siw2Q0FBQSxDQUFhLFNBQWIsRUFBd0JwSCxHQUF4QixFQUE2QjJRLElBQTdCLENBQVA7QUFDSDtBQS9ITDtBQUFBO0FBQUEsb0NBaUlvQkgsVUFqSXBCLEVBaUlnQztBQUN4QixhQUFPQSxVQUFVLENBQUNqUixJQUFsQjtBQUNIO0FBbklMO0FBQUE7QUFBQSxpQ0FxSWlCbVIsT0FySWpCLEVBcUkwQjtBQUNsQixVQUFJdEosK0NBQUEsQ0FBZXNKLE9BQU8sQ0FBQ25PLEtBQXZCLENBQUosRUFBbUM7QUFDL0IsZUFBTzZFLDZDQUFBLENBQWEsT0FBYixFQUFzQnNKLE9BQU8sQ0FBQ25PLEtBQTlCLENBQVA7QUFDSDs7QUFFRCxhQUFPbU8sT0FBTyxDQUFDbk8sS0FBZjtBQUNIO0FBM0lMO0FBQUE7QUFBQSxrQ0E2SWtCb08sSUE3SWxCLEVBNkl3QjtBQUNoQixVQUFJdFIsR0FBRyxHQUFHLEtBQUtrUixLQUFMLENBQVdJLElBQUksQ0FBQ3RSLEdBQWhCLEVBQXFCO0FBQzNCbVMsbUJBQVcsRUFBRTtBQURjLE9BQXJCLENBQVY7QUFJQSxVQUFJalAsS0FBSyxHQUFHLEtBQUtnTyxLQUFMLENBQVdJLElBQUksQ0FBQ3BPLEtBQWhCLENBQVo7QUFFQSxhQUFPNkUsNkNBQUEsQ0FBYSxTQUFiLEVBQXdCL0gsR0FBeEIsRUFBNkJrRCxLQUE3QixDQUFQO0FBQ0g7QUFySkw7QUFBQTtBQUFBLGdDQXVKZ0J2QyxHQXZKaEIsRUF1SnFCO0FBQUE7O0FBQ2IsVUFBSVYsS0FBSyxHQUFHVSxHQUFHLENBQUM0USxVQUFKLENBQWUrQixHQUFmLENBQW1CLFVBQUF0TCxJQUFJLEVBQUk7QUFDbkMsZUFBTyxNQUFJLENBQUNrSixLQUFMLENBQVdsSixJQUFYLENBQVA7QUFDSCxPQUZXLENBQVo7QUFJQSxhQUFPRCw2Q0FBQSxDQUFhLE9BQWIsRUFBc0JBLDJDQUFBLENBQVcsSUFBWCxFQUFpQjlILEtBQWpCLENBQXRCLENBQVA7QUFDSDtBQTdKTDtBQUFBO0FBQUEsK0JBK0pldVIsR0EvSmYsRUErSm9CO0FBQUE7O0FBQ1osVUFBSTVKLEtBQUssR0FBRzRKLEdBQUcsQ0FBQzlGLFVBQUosQ0FBZTRILEdBQWYsQ0FBbUIsVUFBQTFILEtBQUssRUFBSTtBQUNwQyxlQUFPLE1BQUksQ0FBQ3NGLEtBQUwsQ0FBV3RGLEtBQVgsQ0FBUDtBQUNILE9BRlcsQ0FBWjtBQUlBLGFBQU83RCw2Q0FBQSxDQUFhLE9BQWIsRUFBc0JBLDJDQUFBLENBQVcsR0FBWCxFQUFnQkgsS0FBaEIsQ0FBdEIsQ0FBUDtBQUNIO0FBcktMOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFFTyxJQUFNa00sUUFBYjtBQUNJLG9CQUFZblAsT0FBWixFQUFxQjtBQUFBOztBQUNqQixTQUFLQSxPQUFMLEdBQWVvRCw0Q0FBQSxDQUFZaU4sMkRBQVosRUFBMEJyUSxPQUExQixDQUFmO0FBQ0g7O0FBSEw7QUFBQTtBQUFBLHdCQUtRc1EsSUFMUixFQUtjO0FBQ04sV0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsV0FBS3pULEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBSzBULE1BQUwsR0FBYyxFQUFkOztBQUVBLGFBQU8sS0FBSzFULEtBQUwsR0FBYSxLQUFLeVQsSUFBTCxDQUFVcE0sTUFBOUIsRUFBc0M7QUFDbEMsWUFBSXNNLEVBQUUsR0FBRyxLQUFLRixJQUFMLENBQVVHLE1BQVYsQ0FBaUIsS0FBSzVULEtBQXRCLENBQVQ7O0FBQ0EsWUFBSTJULEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxJQUF6QixFQUErQjtBQUMzQixlQUFLRSxVQUFMLENBQWdCRixFQUFoQjtBQUNILFNBRkQsTUFFTyxJQUFJLEtBQUtHLFFBQUwsQ0FBY0gsRUFBZCxLQUFxQkEsRUFBRSxLQUFLLEdBQVAsSUFBYyxLQUFLRyxRQUFMLENBQWMsS0FBS0MsSUFBTCxFQUFkLENBQXZDLEVBQW1FO0FBQ3RFLGVBQUtDLFVBQUw7QUFDSCxTQUZNLE1BRUEsSUFBSSxLQUFLQyxpQkFBTCxDQUF1QixLQUFLQyxhQUFMLEVBQXZCLENBQUosRUFBa0Q7QUFDckQsZUFBS0MsU0FBTDtBQUNILFNBRk0sTUFFQSxJQUFJLEtBQUtDLEVBQUwsQ0FBUVQsRUFBUixFQUFZLGFBQVosQ0FBSixFQUFnQztBQUNuQyxlQUFLRCxNQUFMLENBQVl4VCxJQUFaLENBQWlCO0FBQUVGLGlCQUFLLEVBQUUsS0FBS0EsS0FBZDtBQUFxQnlULGdCQUFJLEVBQUVFO0FBQTNCLFdBQWpCO0FBQ0EsZUFBSzNULEtBQUw7QUFDSCxTQUhNLE1BR0EsSUFBSSxLQUFLcVUsWUFBTCxDQUFrQlYsRUFBbEIsQ0FBSixFQUEyQjtBQUM5QixlQUFLM1QsS0FBTDtBQUNILFNBRk0sTUFFQTtBQUNILGNBQUlzVSxHQUFHLEdBQUdYLEVBQUUsR0FBRyxLQUFLSSxJQUFMLEVBQWY7QUFDQSxjQUFJUSxHQUFHLEdBQUdELEdBQUcsR0FBRyxLQUFLUCxJQUFMLENBQVUsQ0FBVixDQUFoQjtBQUNBLGNBQUlTLEdBQUcsR0FBR0Msd0RBQVMsQ0FBQ2QsRUFBRCxDQUFuQjtBQUNBLGNBQUllLEdBQUcsR0FBR0Qsd0RBQVMsQ0FBQ0gsR0FBRCxDQUFuQjtBQUNBLGNBQUlLLEdBQUcsR0FBR0Ysd0RBQVMsQ0FBQ0YsR0FBRCxDQUFuQjs7QUFDQSxjQUFJQyxHQUFHLElBQUlFLEdBQVAsSUFBY0MsR0FBbEIsRUFBdUI7QUFDbkIsZ0JBQUlDLEtBQUssR0FBR0QsR0FBRyxHQUFHSixHQUFILEdBQVVHLEdBQUcsR0FBR0osR0FBSCxHQUFTWCxFQUFyQztBQUNBLGlCQUFLRCxNQUFMLENBQVl4VCxJQUFaLENBQWlCO0FBQUVGLG1CQUFLLEVBQUUsS0FBS0EsS0FBZDtBQUFxQnlULGtCQUFJLEVBQUVtQixLQUEzQjtBQUFrQ2hELHNCQUFRLEVBQUU7QUFBNUMsYUFBakI7QUFDQSxpQkFBSzVSLEtBQUwsSUFBYzRVLEtBQUssQ0FBQ3ZOLE1BQXBCO0FBQ0gsV0FKRCxNQUlPO0FBQ0gsaUJBQUt3TixVQUFMLENBQWdCLDRCQUFoQixFQUE4QyxLQUFLN1UsS0FBbkQsRUFBMEQsS0FBS0EsS0FBTCxHQUFhLENBQXZFO0FBQ0g7QUFDSjtBQUNKOztBQUNELGFBQU8sS0FBSzBULE1BQVo7QUFDSDtBQXZDTDtBQUFBO0FBQUEsdUJBeUNPQyxFQXpDUCxFQXlDV21CLEtBekNYLEVBeUNrQjtBQUNWLGFBQU9BLEtBQUssQ0FBQzdVLE9BQU4sQ0FBYzBULEVBQWQsTUFBc0IsQ0FBQyxDQUE5QjtBQUNIO0FBM0NMO0FBQUE7QUFBQSx5QkE2Q1NvQixDQTdDVCxFQTZDWTtBQUNKLFVBQUlDLEdBQUcsR0FBR0QsQ0FBQyxJQUFJLENBQWY7QUFDQSxhQUFRLEtBQUsvVSxLQUFMLEdBQWFnVixHQUFiLEdBQW1CLEtBQUt2QixJQUFMLENBQVVwTSxNQUE5QixHQUF3QyxLQUFLb00sSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUs1VCxLQUFMLEdBQWFnVixHQUE5QixDQUF4QyxHQUE2RSxLQUFwRjtBQUNIO0FBaERMO0FBQUE7QUFBQSw2QkFrRGFyQixFQWxEYixFQWtEaUI7QUFDVCxhQUFRLE9BQU9BLEVBQVAsSUFBYUEsRUFBRSxJQUFJLEdBQXBCLElBQTRCLE9BQU9BLEVBQVAsS0FBYyxRQUFqRDtBQUNIO0FBcERMO0FBQUE7QUFBQSxpQ0FzRGlCQSxFQXREakIsRUFzRHFCO0FBQ2I7QUFDQSxhQUFRQSxFQUFFLEtBQUssR0FBUCxJQUFjQSxFQUFFLEtBQUssSUFBckIsSUFBNkJBLEVBQUUsS0FBSyxJQUFwQyxJQUNKQSxFQUFFLEtBQUssSUFESCxJQUNXQSxFQUFFLEtBQUssSUFEbEIsSUFDMEJBLEVBQUUsS0FBSyxNQUR6QztBQUVIO0FBMURMO0FBQUE7QUFBQSxzQ0E0RHNCQSxFQTVEdEIsRUE0RDBCO0FBQ2xCLGFBQU8sS0FBS3hRLE9BQUwsQ0FBYThRLGlCQUFiLEdBQ0gsS0FBSzlRLE9BQUwsQ0FBYThRLGlCQUFiLENBQStCTixFQUEvQixFQUFtQyxLQUFLc0IsV0FBTCxDQUFpQnRCLEVBQWpCLENBQW5DLENBREcsR0FFSCxLQUFLdUIsc0JBQUwsQ0FBNEJ2QixFQUE1QixDQUZKO0FBR0g7QUFoRUw7QUFBQTtBQUFBLDJDQWtFMkJBLEVBbEUzQixFQWtFK0I7QUFDdkIsYUFBUSxPQUFPQSxFQUFQLElBQWFBLEVBQUUsSUFBSSxHQUFuQixJQUNKLE9BQU9BLEVBQVAsSUFBYUEsRUFBRSxJQUFJLEdBRGYsSUFFSixRQUFRQSxFQUZKLElBRVVBLEVBQUUsS0FBSyxHQUZ6QjtBQUdIO0FBdEVMO0FBQUE7QUFBQSx5Q0F3RXlCQSxFQXhFekIsRUF3RTZCO0FBQ3JCLGFBQU8sS0FBS3hRLE9BQUwsQ0FBYWdTLG9CQUFiLEdBQ0gsS0FBS2hTLE9BQUwsQ0FBYWdTLG9CQUFiLENBQWtDeEIsRUFBbEMsRUFBc0MsS0FBS3NCLFdBQUwsQ0FBaUJ0QixFQUFqQixDQUF0QyxDQURHLEdBRUgsS0FBS3lCLHlCQUFMLENBQStCekIsRUFBL0IsQ0FGSjtBQUdIO0FBNUVMO0FBQUE7QUFBQSw4Q0E4RThCQSxFQTlFOUIsRUE4RWtDMEIsRUE5RWxDLEVBOEVzQztBQUM5QixhQUFPLEtBQUtILHNCQUFMLENBQTRCdkIsRUFBNUIsRUFBZ0MwQixFQUFoQyxLQUF1QyxLQUFLdkIsUUFBTCxDQUFjSCxFQUFkLENBQTlDO0FBQ0g7QUFoRkw7QUFBQTtBQUFBLGdDQWtGZ0JBLEVBbEZoQixFQWtGb0I7QUFDWixVQUFJQSxFQUFFLENBQUN0TSxNQUFILEtBQWMsQ0FBbEIsRUFBcUI7QUFDakIsZUFBT3NNLEVBQUUsQ0FBQzJCLFVBQUgsQ0FBYyxDQUFkLENBQVA7QUFDSCxPQUhXLENBSVo7OztBQUNBLGFBQU8sQ0FBQzNCLEVBQUUsQ0FBQzJCLFVBQUgsQ0FBYyxDQUFkLEtBQW9CLEVBQXJCLElBQTJCM0IsRUFBRSxDQUFDMkIsVUFBSCxDQUFjLENBQWQsQ0FBM0IsR0FBOEMsU0FBckQ7QUFDSDtBQXhGTDtBQUFBO0FBQUEsb0NBMEZvQjtBQUNaLFVBQUkzQixFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUs1VCxLQUF0QixDQUFUO0FBQ0EsVUFBSStULElBQUksR0FBRyxLQUFLQSxJQUFMLEVBQVg7O0FBQ0EsVUFBSSxDQUFDQSxJQUFMLEVBQVc7QUFDUCxlQUFPSixFQUFQO0FBQ0g7O0FBQ0QsVUFBSTRCLEdBQUcsR0FBRzVCLEVBQUUsQ0FBQzJCLFVBQUgsQ0FBYyxDQUFkLENBQVY7QUFDQSxVQUFJRSxHQUFHLEdBQUd6QixJQUFJLENBQUN1QixVQUFMLENBQWdCLENBQWhCLENBQVY7O0FBQ0EsVUFBSUMsR0FBRyxJQUFJLE1BQVAsSUFBaUJBLEdBQUcsSUFBSSxNQUF4QixJQUFrQ0MsR0FBRyxJQUFJLE1BQXpDLElBQW1EQSxHQUFHLElBQUksTUFBOUQsRUFBc0U7QUFDbEUsZUFBTzdCLEVBQUUsR0FBR0ksSUFBWjtBQUNIOztBQUNELGFBQU9KLEVBQVA7QUFDSDtBQXRHTDtBQUFBO0FBQUEsa0NBd0drQkEsRUF4R2xCLEVBd0dzQjtBQUNkLGFBQVFBLEVBQUUsS0FBSyxHQUFQLElBQWNBLEVBQUUsS0FBSyxHQUFyQixJQUE0QixLQUFLRyxRQUFMLENBQWNILEVBQWQsQ0FBcEM7QUFDSDtBQTFHTDtBQUFBO0FBQUEsK0JBNEdlOEIsS0E1R2YsRUE0R3NCQyxLQTVHdEIsRUE0RzZCQyxHQTVHN0IsRUE0R2tDO0FBQzFCQSxTQUFHLEdBQUdBLEdBQUcsSUFBSSxLQUFLM1YsS0FBbEI7QUFDQSxVQUFJNFYsTUFBTSxHQUFJclAsZ0RBQUEsQ0FBZ0JtUCxLQUFoQixJQUF5QixPQUFPQSxLQUFQLEdBQWUsR0FBZixHQUFxQixLQUFLMVYsS0FBMUIsR0FBa0MsSUFBbEMsR0FBeUMsS0FBS3lULElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0JILEtBQXBCLEVBQTJCQyxHQUEzQixDQUF6QyxHQUEyRSxHQUFwRyxHQUEwRyxNQUFNQSxHQUE5SDtBQUNBLFlBQU0sSUFBSXhWLEtBQUosQ0FBVSxrQkFBa0JzVixLQUFsQixHQUEwQixZQUExQixHQUF5Q0csTUFBekMsR0FBa0Qsa0JBQWxELEdBQXVFLEtBQUtuQyxJQUE1RSxHQUFtRixJQUE3RixDQUFOO0FBQ0g7QUFoSEw7QUFBQTtBQUFBLGlDQWtIaUI7QUFDVCxVQUFJcUMsTUFBTSxHQUFHLEVBQWI7QUFDQSxVQUFJSixLQUFLLEdBQUcsS0FBSzFWLEtBQWpCOztBQUNBLGFBQU8sS0FBS0EsS0FBTCxHQUFhLEtBQUt5VCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHcE4sZ0RBQUEsQ0FBZ0IsS0FBS2tOLElBQUwsQ0FBVUcsTUFBVixDQUFpQixLQUFLNVQsS0FBdEIsQ0FBaEIsQ0FBVDs7QUFDQSxZQUFJMlQsRUFBRSxLQUFLLEdBQVAsSUFBYyxLQUFLRyxRQUFMLENBQWNILEVBQWQsQ0FBbEIsRUFBcUM7QUFDakNtQyxnQkFBTSxJQUFJbkMsRUFBVjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUlvQyxNQUFNLEdBQUcsS0FBS2hDLElBQUwsRUFBYjs7QUFDQSxjQUFJSixFQUFFLEtBQUssR0FBUCxJQUFjLEtBQUtxQyxhQUFMLENBQW1CRCxNQUFuQixDQUFsQixFQUE4QztBQUMxQ0Qsa0JBQU0sSUFBSW5DLEVBQVY7QUFDSCxXQUZELE1BRU8sSUFBSSxLQUFLcUMsYUFBTCxDQUFtQnJDLEVBQW5CLEtBQ1BvQyxNQURPLElBQ0csS0FBS2pDLFFBQUwsQ0FBY2lDLE1BQWQsQ0FESCxJQUVQRCxNQUFNLENBQUNsQyxNQUFQLENBQWNrQyxNQUFNLENBQUN6TyxNQUFQLEdBQWdCLENBQTlCLE1BQXFDLEdBRmxDLEVBRXVDO0FBQzFDeU8sa0JBQU0sSUFBSW5DLEVBQVY7QUFDSCxXQUpNLE1BSUEsSUFBSSxLQUFLcUMsYUFBTCxDQUFtQnJDLEVBQW5CLE1BQ04sQ0FBQ29DLE1BQUQsSUFBVyxDQUFDLEtBQUtqQyxRQUFMLENBQWNpQyxNQUFkLENBRE4sS0FFUEQsTUFBTSxDQUFDbEMsTUFBUCxDQUFja0MsTUFBTSxDQUFDek8sTUFBUCxHQUFnQixDQUE5QixNQUFxQyxHQUZsQyxFQUV1QztBQUMxQyxpQkFBS3dOLFVBQUwsQ0FBZ0Isa0JBQWhCO0FBQ0gsV0FKTSxNQUlBO0FBQ0g7QUFDSDtBQUNKOztBQUNELGFBQUs3VSxLQUFMO0FBQ0g7O0FBQ0QsV0FBSzBULE1BQUwsQ0FBWXhULElBQVosQ0FBaUI7QUFDYkYsYUFBSyxFQUFFMFYsS0FETTtBQUViakMsWUFBSSxFQUFFcUMsTUFGTztBQUdiRyxnQkFBUSxFQUFFLElBSEc7QUFJYnZVLGFBQUssRUFBRXdVLE1BQU0sQ0FBQ0osTUFBRDtBQUpBLE9BQWpCO0FBTUg7QUFqSkw7QUFBQTtBQUFBLGdDQW1KZ0I7QUFDUixVQUFJSixLQUFLLEdBQUcsS0FBSzFWLEtBQWpCO0FBQ0EsV0FBS0EsS0FBTCxJQUFjLEtBQUtrVSxhQUFMLEdBQXFCN00sTUFBbkM7O0FBQ0EsYUFBTyxLQUFLckgsS0FBTCxHQUFhLEtBQUt5VCxJQUFMLENBQVVwTSxNQUE5QixFQUFzQztBQUNsQyxZQUFJc00sRUFBRSxHQUFHLEtBQUtPLGFBQUwsRUFBVDs7QUFDQSxZQUFJLENBQUMsS0FBS2lCLG9CQUFMLENBQTBCeEIsRUFBMUIsQ0FBTCxFQUFvQztBQUNoQztBQUNIOztBQUNELGFBQUszVCxLQUFMLElBQWMyVCxFQUFFLENBQUN0TSxNQUFqQjtBQUNIOztBQUNELFdBQUtxTSxNQUFMLENBQVl4VCxJQUFaLENBQWlCO0FBQ2JGLGFBQUssRUFBRTBWLEtBRE07QUFFYmpDLFlBQUksRUFBRSxLQUFLQSxJQUFMLENBQVV4SixLQUFWLENBQWdCeUwsS0FBaEIsRUFBdUIsS0FBSzFWLEtBQTVCLENBRk87QUFHYjJQLGtCQUFVLEVBQUU7QUFIQyxPQUFqQjtBQUtIO0FBbEtMO0FBQUE7QUFBQSwrQkFvS2V3RyxLQXBLZixFQW9Lc0I7QUFDZCxVQUFJVCxLQUFLLEdBQUcsS0FBSzFWLEtBQWpCO0FBQ0EsV0FBS0EsS0FBTDtBQUNBLFVBQUlvVyxNQUFNLEdBQUcsRUFBYjtBQUNBLFVBQUlDLFNBQVMsR0FBR0YsS0FBaEI7QUFDQSxVQUFJRyxNQUFNLEdBQUcsS0FBYjs7QUFDQSxhQUFPLEtBQUt0VyxLQUFMLEdBQWEsS0FBS3lULElBQUwsQ0FBVXBNLE1BQTlCLEVBQXNDO0FBQ2xDLFlBQUlzTSxFQUFFLEdBQUcsS0FBS0YsSUFBTCxDQUFVRyxNQUFWLENBQWlCLEtBQUs1VCxLQUF0QixDQUFUO0FBQ0FxVyxpQkFBUyxJQUFJMUMsRUFBYjs7QUFDQSxZQUFJMkMsTUFBSixFQUFZO0FBQ1IsY0FBSTNDLEVBQUUsS0FBSyxHQUFYLEVBQWdCO0FBQ1osZ0JBQUk0QyxHQUFHLEdBQUcsS0FBSzlDLElBQUwsQ0FBVW9DLFNBQVYsQ0FBb0IsS0FBSzdWLEtBQUwsR0FBYSxDQUFqQyxFQUFvQyxLQUFLQSxLQUFMLEdBQWEsQ0FBakQsQ0FBVjs7QUFDQSxnQkFBSSxDQUFDdVcsR0FBRyxDQUFDQyxLQUFKLENBQVUsYUFBVixDQUFMLEVBQStCO0FBQzNCLG1CQUFLM0IsVUFBTCxDQUFnQixnQ0FBZ0MwQixHQUFoQyxHQUFzQyxHQUF0RDtBQUNIOztBQUNELGlCQUFLdlcsS0FBTCxJQUFjLENBQWQ7QUFDQW9XLGtCQUFNLElBQUlLLE1BQU0sQ0FBQ0MsWUFBUCxDQUFvQkMsUUFBUSxDQUFDSixHQUFELEVBQU0sRUFBTixDQUE1QixDQUFWO0FBQ0gsV0FQRCxNQU9PO0FBQ0gsZ0JBQUlLLEdBQUcsR0FBR0MsTUFBTSxDQUFDbEQsRUFBRCxDQUFoQjtBQUNBeUMsa0JBQU0sR0FBR0EsTUFBTSxJQUFJUSxHQUFHLElBQUlqRCxFQUFYLENBQWY7QUFDSDs7QUFDRDJDLGdCQUFNLEdBQUcsS0FBVDtBQUNILFNBYkQsTUFhTyxJQUFJM0MsRUFBRSxLQUFLLElBQVgsRUFBaUI7QUFDcEIyQyxnQkFBTSxHQUFHLElBQVQ7QUFDSCxTQUZNLE1BRUEsSUFBSTNDLEVBQUUsS0FBS3dDLEtBQVgsRUFBa0I7QUFDckIsZUFBS25XLEtBQUw7QUFDQSxlQUFLMFQsTUFBTCxDQUFZeFQsSUFBWixDQUFpQjtBQUNiRixpQkFBSyxFQUFFMFYsS0FETTtBQUViakMsZ0JBQUksRUFBRTRDLFNBRk87QUFHYkosb0JBQVEsRUFBRSxJQUhHO0FBSWJ2VSxpQkFBSyxFQUFFMFU7QUFKTSxXQUFqQjtBQU1BO0FBQ0gsU0FUTSxNQVNBO0FBQ0hBLGdCQUFNLElBQUl6QyxFQUFWO0FBQ0g7O0FBQ0QsYUFBSzNULEtBQUw7QUFDSDs7QUFDRCxXQUFLNlUsVUFBTCxDQUFnQixvQkFBaEIsRUFBc0NhLEtBQXRDO0FBQ0g7QUEzTUw7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7QUNKQTtBQUFBO0FBQU8sSUFBSWpCLFNBQVMsR0FBRyxFQUFoQjtBQUVQLElBQUlxQyxZQUFZLEdBQUcsK0NBQW5CO0FBQ0EsSUFBSUQsTUFBTSxHQUFHO0FBQUUsT0FBSyxJQUFQO0FBQWEsT0FBSyxJQUFsQjtBQUF3QixPQUFLLElBQTdCO0FBQW1DLE9BQUssSUFBeEM7QUFBOEMsT0FBSyxJQUFuRDtBQUF5RCxRQUFNLElBQS9EO0FBQXFFLE9BQUs7QUFBMUUsQ0FBYjtBQUVBQyxZQUFZLENBQUMzTCxLQUFiLENBQW1CLEdBQW5CLEVBQXdCNUssT0FBeEIsQ0FBZ0MsVUFBVXFSLFFBQVYsRUFBb0I7QUFDaEQ2QyxXQUFTLENBQUM3QyxRQUFELENBQVQsR0FBc0IsSUFBdEI7QUFDSCxDQUZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBaUJBO0FBQ0E7QUFDQTtBQUVPLElBQU1ZLFNBQWI7QUFDSSxxQkFBWXVFLEtBQVosRUFBbUI1VCxPQUFuQixFQUE0QjtBQUFBOztBQUN4QixTQUFLNFQsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsU0FBSzVULE9BQUwsR0FBZW9ELDRDQUFBLENBQVlpTiwyREFBWixFQUEwQnJRLE9BQTFCLENBQWY7QUFDSDs7QUFKTDtBQUFBO0FBQUEsK0JBTWU2VCxHQU5mLEVBTW9CcEMsS0FOcEIsRUFNMkI7QUFDbkIsWUFBTSxJQUFJelUsS0FBSixDQUFVLDJCQUEyQnlVLEtBQUssQ0FBQ25CLElBQWpDLEdBQXdDLElBQXhDLEdBQStDdUQsR0FBL0MsR0FBcUQsYUFBckQsSUFBc0VwQyxLQUFLLENBQUM1VSxLQUFOLEdBQWMsQ0FBcEYsSUFDWixzQkFEWSxHQUNhLEtBQUt5VCxJQURsQixHQUN5QixpQkFEekIsR0FDNkMsS0FBS0EsSUFBTCxDQUFVb0MsU0FBVixDQUFvQmpCLEtBQUssQ0FBQzVVLEtBQTFCLENBRDdDLEdBQ2dGLElBRDFGLENBQU47QUFFSDtBQVRMO0FBQUE7QUFBQSwwQkFXVXlULElBWFYsRUFXZ0I7QUFDUixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQyxNQUFMLEdBQWMsS0FBS3FELEtBQUwsQ0FBV3hFLEdBQVgsQ0FBZWtCLElBQWYsQ0FBZDtBQUVBLFVBQUkvUixLQUFLLEdBQUcsS0FBSzJLLE9BQUwsRUFBWjs7QUFFQSxVQUFJLEtBQUtxSCxNQUFMLENBQVlyTSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGFBQUt3TixVQUFMLENBQWdCLHdCQUFoQixFQUEwQyxLQUFLbkIsTUFBTCxDQUFZLENBQVosQ0FBMUM7QUFDSDs7QUFFRCxhQUFPaFMsS0FBUDtBQUNIO0FBdEJMO0FBQUE7QUFBQSw4QkF3QmM7QUFDTixVQUFJMkssT0FBTyxHQUFHLElBQUk0SyxrREFBSixFQUFkOztBQUNBLGFBQU8sSUFBUCxFQUFhO0FBQ1QsWUFBSSxLQUFLdkQsTUFBTCxDQUFZck0sTUFBWixHQUFxQixDQUFyQixJQUEwQixDQUFDLEtBQUswTSxJQUFMLENBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekIsQ0FBL0IsRUFBOEQ7QUFDMUQxSCxpQkFBTyxDQUFDckcsV0FBUixDQUFvQixLQUFLa1IsbUJBQUwsRUFBcEI7QUFDSDs7QUFDRCxZQUFJLENBQUMsS0FBS0MsTUFBTCxDQUFZLEdBQVosQ0FBTCxFQUF1QjtBQUNuQixpQkFBTzlLLE9BQVA7QUFDSDtBQUNKO0FBQ0o7QUFsQ0w7QUFBQTtBQUFBLDBDQW9DMEI7QUFDbEIsVUFBSUwsR0FBRyxHQUFHLElBQUlvTCw4REFBSixFQUFWO0FBQ0FwTCxTQUFHLENBQUNoRyxXQUFKLENBQWdCLEtBQUtxUixXQUFMLEVBQWhCO0FBQ0EsYUFBT3JMLEdBQVA7QUFDSDtBQXhDTDtBQUFBO0FBQUEsa0NBMENrQjtBQUNWLFVBQUlnRCxJQUFJLEdBQUcsS0FBSzBCLFVBQUwsRUFBWDs7QUFDQSxhQUFPLEtBQUt5RyxNQUFMLENBQVksR0FBWixDQUFQLEVBQXlCO0FBQ3JCbkksWUFBSSxHQUFHLEtBQUszTixNQUFMLENBQVkyTixJQUFaLENBQVA7QUFDSDs7QUFDRCxhQUFPQSxJQUFQO0FBQ0g7QUFoREw7QUFBQTtBQUFBLGlDQWtEaUI7QUFDVCxhQUFPLEtBQUtQLFVBQUwsRUFBUDtBQUNIO0FBcERMO0FBQUE7QUFBQSxpQ0FzRGlCNkksR0F0RGpCLEVBc0RzQjtBQUNkLGFBQU9BLEdBQUcsQ0FBQ3pLLElBQUosS0FBYUMsMENBQUcsQ0FBQ2lCLFVBQWpCLElBQStCdUosR0FBRyxDQUFDekssSUFBSixLQUFhQywwQ0FBRyxDQUFDZSxnQkFBdkQ7QUFDSDtBQXhETDtBQUFBO0FBQUEsaUNBMERpQjtBQUNULFVBQUlySSxNQUFNLEdBQUcsS0FBSytSLE9BQUwsRUFBYjs7QUFDQSxVQUFJLEtBQUtKLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDbEIsWUFBSSxDQUFDLEtBQUtLLFlBQUwsQ0FBa0JoUyxNQUFsQixDQUFMLEVBQWdDO0FBQzVCLGdCQUFNLElBQUlyRixLQUFKLENBQVUsMkNBQVYsQ0FBTjtBQUNIOztBQUVEcUYsY0FBTSxHQUFHLElBQUlpUywrREFBSixDQUE2QmpTLE1BQTdCLEVBQXFDLEtBQUtpSixVQUFMLEVBQXJDLEVBQXdELEdBQXhELENBQVQ7QUFDSDs7QUFDRCxhQUFPakosTUFBUDtBQUNIO0FBcEVMO0FBQUE7QUFBQSw4QkFzRWM7QUFDTixVQUFJb0osSUFBSSxHQUFHLEtBQUs4SSxTQUFMLEVBQVg7QUFDQSxVQUFJN0ksU0FBSjtBQUNBLFVBQUlDLFVBQUo7O0FBQ0EsVUFBSSxLQUFLcUksTUFBTCxDQUFZLEdBQVosQ0FBSixFQUFzQjtBQUNsQnRJLGlCQUFTLEdBQUcsS0FBSzZCLFVBQUwsRUFBWjs7QUFDQSxZQUFJLEtBQUtpSCxPQUFMLENBQWEsR0FBYixDQUFKLEVBQXVCO0FBQ25CN0ksb0JBQVUsR0FBRyxLQUFLNEIsVUFBTCxFQUFiO0FBQ0EsaUJBQU8sSUFBSWtILGdFQUFKLENBQThCaEosSUFBOUIsRUFBb0NDLFNBQXBDLEVBQStDQyxVQUEvQyxDQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPRixJQUFQO0FBQ0g7QUFsRkw7QUFBQTtBQUFBLGdDQW9GZ0I7QUFDUixVQUFJSSxJQUFJLEdBQUcsS0FBSzZJLFVBQUwsRUFBWDs7QUFDQSxhQUFPLEtBQUtWLE1BQUwsQ0FBWSxJQUFaLENBQVAsRUFBMEI7QUFDdEJuSSxZQUFJLEdBQUcsSUFBSThJLDREQUFKLENBQTBCLElBQTFCLEVBQWdDOUksSUFBaEMsRUFBc0MsS0FBSzZJLFVBQUwsRUFBdEMsQ0FBUDtBQUNIOztBQUNELGFBQU83SSxJQUFQO0FBQ0g7QUExRkw7QUFBQTtBQUFBLGlDQTRGaUI7QUFDVCxVQUFJQSxJQUFJLEdBQUcsS0FBSytJLFFBQUwsRUFBWDs7QUFDQSxhQUFPLEtBQUtaLE1BQUwsQ0FBWSxJQUFaLENBQVAsRUFBMEI7QUFDdEJuSSxZQUFJLEdBQUcsSUFBSThJLDREQUFKLENBQTBCLElBQTFCLEVBQWdDOUksSUFBaEMsRUFBc0MsS0FBSytJLFFBQUwsRUFBdEMsQ0FBUDtBQUNIOztBQUNELGFBQU8vSSxJQUFQO0FBQ0g7QUFsR0w7QUFBQTtBQUFBLCtCQW9HZTtBQUNQLFVBQUlBLElBQUksR0FBRyxLQUFLZ0osVUFBTCxFQUFYO0FBQ0EsVUFBSXBELEtBQUo7O0FBQ0EsYUFBUUEsS0FBSyxHQUFHLEtBQUt1QyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixFQUF3QixLQUF4QixFQUErQixLQUEvQixDQUFoQixFQUF3RDtBQUNwRG5JLFlBQUksR0FBRyxJQUFJaUosMkRBQUosQ0FBeUJyRCxLQUFLLENBQUNuQixJQUEvQixFQUFxQ3pFLElBQXJDLEVBQTJDLEtBQUtnSixVQUFMLEVBQTNDLENBQVA7QUFDSDs7QUFDRCxhQUFPaEosSUFBUDtBQUNIO0FBM0dMO0FBQUE7QUFBQSxpQ0E2R2lCO0FBQ1QsVUFBSUEsSUFBSSxHQUFHLEtBQUtrSixRQUFMLEVBQVg7QUFDQSxVQUFJdEQsS0FBSjs7QUFDQSxhQUFRQSxLQUFLLEdBQUcsS0FBS3VDLE1BQUwsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLElBQXRCLEVBQTRCLElBQTVCLENBQWhCLEVBQW9EO0FBQ2hEbkksWUFBSSxHQUFHLElBQUlpSiwyREFBSixDQUF5QnJELEtBQUssQ0FBQ25CLElBQS9CLEVBQXFDekUsSUFBckMsRUFBMkMsS0FBS2tKLFFBQUwsRUFBM0MsQ0FBUDtBQUNIOztBQUNELGFBQU9sSixJQUFQO0FBQ0g7QUFwSEw7QUFBQTtBQUFBLCtCQXNIZTtBQUNQLFVBQUlBLElBQUksR0FBRyxLQUFLbUosY0FBTCxFQUFYO0FBQ0EsVUFBSXZELEtBQUo7O0FBQ0EsYUFBUUEsS0FBSyxHQUFHLEtBQUt1QyxNQUFMLENBQVksR0FBWixFQUFpQixHQUFqQixDQUFoQixFQUF3QztBQUNwQ25JLFlBQUksR0FBRyxJQUFJaUosMkRBQUosQ0FBeUJyRCxLQUFLLENBQUNuQixJQUEvQixFQUFxQ3pFLElBQXJDLEVBQTJDLEtBQUttSixjQUFMLEVBQTNDLENBQVA7QUFDSDs7QUFDRCxhQUFPbkosSUFBUDtBQUNIO0FBN0hMO0FBQUE7QUFBQSxxQ0ErSHFCO0FBQ2IsVUFBSUEsSUFBSSxHQUFHLEtBQUtFLEtBQUwsRUFBWDtBQUNBLFVBQUkwRixLQUFKOztBQUNBLGFBQVFBLEtBQUssR0FBRyxLQUFLdUMsTUFBTCxDQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0FBaEIsRUFBNkM7QUFDekNuSSxZQUFJLEdBQUcsSUFBSWlKLDJEQUFKLENBQXlCckQsS0FBSyxDQUFDbkIsSUFBL0IsRUFBcUN6RSxJQUFyQyxFQUEyQyxLQUFLRSxLQUFMLEVBQTNDLENBQVA7QUFDSDs7QUFDRCxhQUFPRixJQUFQO0FBQ0g7QUF0SUw7QUFBQTtBQUFBLDRCQXdJWTtBQUNKLFVBQUk0RixLQUFKOztBQUNBLFVBQUtBLEtBQUssR0FBRyxLQUFLdUMsTUFBTCxDQUFZLEdBQVosRUFBaUIsR0FBakIsRUFBc0IsR0FBdEIsQ0FBYixFQUEwQztBQUN0QyxlQUFPLElBQUlpQiwwREFBSixDQUF3QnhELEtBQUssQ0FBQ25CLElBQTlCLEVBQW9DLEtBQUt2RSxLQUFMLEVBQXBDLENBQVA7QUFDSCxPQUZELE1BRU87QUFDSCxlQUFPLEtBQUttSixPQUFMLEVBQVA7QUFDSDtBQUNKO0FBL0lMO0FBQUE7QUFBQSw4QkFpSmM7QUFDTixVQUFJQSxPQUFKOztBQUNBLFVBQUksS0FBS2xCLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDbEJrQixlQUFPLEdBQUcsS0FBS2hCLFdBQUwsRUFBVjtBQUNBLGFBQUtNLE9BQUwsQ0FBYSxHQUFiO0FBQ0gsT0FIRCxNQUdPLElBQUksS0FBS1IsTUFBTCxDQUFZLEdBQVosQ0FBSixFQUFzQjtBQUN6QmtCLGVBQU8sR0FBRyxLQUFLQyxnQkFBTCxFQUFWO0FBQ0gsT0FGTSxNQUVBLElBQUksS0FBS25CLE1BQUwsQ0FBWSxHQUFaLENBQUosRUFBc0I7QUFDekJrQixlQUFPLEdBQUcsS0FBSy9JLE1BQUwsRUFBVjtBQUNILE9BRk0sTUFFQSxJQUFJLEtBQUtuTSxPQUFMLENBQWFvVixRQUFiLENBQXNCQyxjQUF0QixDQUFxQyxLQUFLekUsSUFBTCxHQUFZTixJQUFqRCxDQUFKLEVBQTREO0FBQy9ENEUsZUFBTyxHQUFHLElBQUlJLGtEQUFKLENBQWdCLEtBQUt0VixPQUFMLENBQWFvVixRQUFiLENBQXNCLEtBQUtaLE9BQUwsR0FBZWxFLElBQXJDLENBQWhCLENBQVY7QUFDSCxPQUZNLE1BRUEsSUFBSSxLQUFLTSxJQUFMLEdBQVlwRSxVQUFoQixFQUE0QjtBQUMvQjBJLGVBQU8sR0FBRyxLQUFLMUksVUFBTCxFQUFWO0FBQ0gsT0FGTSxNQUVBLElBQUksS0FBS29FLElBQUwsR0FBWWtDLFFBQWhCLEVBQTBCO0FBQzdCb0MsZUFBTyxHQUFHLEtBQUtwQyxRQUFMLEVBQVY7QUFDSCxPQUZNLE1BRUE7QUFDSCxhQUFLcEIsVUFBTCxDQUFnQiwwQkFBaEIsRUFBNEMsS0FBS2QsSUFBTCxFQUE1QztBQUNIOztBQUVELFVBQUkyRSxJQUFKOztBQUNBLGFBQU8sS0FBSzNFLElBQUwsQ0FBVSxHQUFWLEVBQWUsR0FBZixFQUFvQixHQUFwQixLQUE2QixLQUFLQSxJQUFMLENBQVUsR0FBVixLQUFrQixLQUFLNEUsU0FBTCxDQUFlLENBQWYsRUFBa0IsR0FBbEIsQ0FBdEQsRUFBK0U7QUFDM0UsWUFBSSxLQUFLeEIsTUFBTCxDQUFZLEdBQVosQ0FBSixFQUFzQjtBQUNsQmtCLGlCQUFPLENBQUNsSSxTQUFSLEdBQW9CLElBQXBCO0FBQ0g7O0FBRUR1SSxZQUFJLEdBQUcsS0FBS3ZCLE1BQUwsQ0FBWSxHQUFaLEVBQWlCLEdBQWpCLEVBQXNCLEdBQXRCLENBQVA7O0FBRUEsWUFBSXVCLElBQUksQ0FBQ2pGLElBQUwsS0FBYyxHQUFsQixFQUF1QjtBQUNuQjRFLGlCQUFPLEdBQUcsSUFBSU8seURBQUosQ0FBdUJQLE9BQXZCLEVBQWdDLEtBQUtRLGNBQUwsRUFBaEMsQ0FBVjtBQUNBLGVBQUtsQixPQUFMLENBQWEsR0FBYjtBQUNILFNBSEQsTUFHTyxJQUFJZSxJQUFJLENBQUNqRixJQUFMLEtBQWMsR0FBbEIsRUFBdUI7QUFDMUI0RSxpQkFBTyxHQUFHLElBQUlTLDJEQUFKLENBQXlCVCxPQUF6QixFQUFrQyxLQUFLM0gsVUFBTCxFQUFsQyxFQUFxRCxJQUFyRCxDQUFWO0FBQ0EsZUFBS2lILE9BQUwsQ0FBYSxHQUFiO0FBQ0gsU0FITSxNQUdBLElBQUllLElBQUksQ0FBQ2pGLElBQUwsS0FBYyxHQUFsQixFQUF1QjtBQUMxQjRFLGlCQUFPLEdBQUcsSUFBSVMsMkRBQUosQ0FBeUJULE9BQXpCLEVBQWtDLEtBQUsxSSxVQUFMLEVBQWxDLEVBQXFELEtBQXJELENBQVY7QUFDSCxTQUZNLE1BRUE7QUFDSCxlQUFLa0YsVUFBTCxDQUFnQixZQUFoQjtBQUNIO0FBQ0o7O0FBQ0QsYUFBT3dELE9BQVA7QUFDSDtBQXpMTDtBQUFBO0FBQUEsMkJBMkxXVSxjQTNMWCxFQTJMMkI7QUFDbkIsVUFBSTVKLElBQUksR0FBRyxDQUFDNEosY0FBRCxDQUFYO0FBQUEsVUFBNkJDLFdBQVcsR0FBRyxDQUFDLEtBQUtySixVQUFMLEVBQUQsQ0FBM0M7O0FBRUEsYUFBTyxLQUFLd0gsTUFBTCxDQUFZLEdBQVosQ0FBUCxFQUF5QjtBQUNyQjZCLG1CQUFXLENBQUM5WSxJQUFaLENBQWlCLEtBQUt5UCxVQUFMLEVBQWpCO0FBQ0gsT0FMa0IsQ0FPbkI7OztBQUNBLFVBQUlzSixVQUFVLEdBQUdELFdBQVcsQ0FBQ2xILEdBQVosQ0FBZ0IsVUFBVXRMLElBQVYsRUFBZ0I7QUFDN0MsZUFBT0EsSUFBSSxDQUFDOUgsSUFBWjtBQUNILE9BRmdCLEVBRWQrSixJQUZjLENBRVQsR0FGUyxDQUFqQjtBQUlBLFVBQUlqRCxNQUFNLEdBQUcsSUFBSW9ULHlEQUFKLENBQXVCLElBQUlNLHFEQUFKLENBQW1CRCxVQUFuQixDQUF2QixFQUF1RDlKLElBQXZELENBQWI7QUFFQTNKLFlBQU0sQ0FBQ25FLE1BQVAsR0FBZ0IsSUFBaEI7O0FBRUEsYUFBTyxLQUFLOFYsTUFBTCxDQUFZLEdBQVosQ0FBUCxFQUF5QjtBQUNyQmhJLFlBQUksQ0FBQ2pQLElBQUwsQ0FBVSxLQUFLd1EsVUFBTCxFQUFWO0FBQ0g7O0FBRUQsYUFBT2xMLE1BQVA7QUFDSDtBQWhOTDtBQUFBO0FBQUEscUNBa05xQjtBQUNiLFVBQUkySixJQUFJLEdBQUcsRUFBWDs7QUFDQSxVQUFJLEtBQUtnSyxTQUFMLEdBQWlCMUYsSUFBakIsS0FBMEIsR0FBOUIsRUFBbUM7QUFDL0IsV0FBRztBQUNDdEUsY0FBSSxDQUFDalAsSUFBTCxDQUFVLEtBQUttWCxXQUFMLEVBQVY7QUFDSCxTQUZELFFBRVMsS0FBS0YsTUFBTCxDQUFZLEdBQVosQ0FGVDtBQUdIOztBQUNELGFBQU9oSSxJQUFQO0FBQ0g7QUExTkw7QUFBQTtBQUFBLGlDQTROaUI7QUFDVCxVQUFJeUYsS0FBSyxHQUFHLEtBQUsrQyxPQUFMLEVBQVo7O0FBQ0EsVUFBSSxDQUFDL0MsS0FBSyxDQUFDakYsVUFBWCxFQUF1QjtBQUNuQixhQUFLa0YsVUFBTCxDQUFnQiwyQkFBaEIsRUFBNkNELEtBQTdDO0FBQ0g7O0FBQ0QsYUFBTyxJQUFJc0UscURBQUosQ0FBbUJ0RSxLQUFLLENBQUNuQixJQUF6QixDQUFQO0FBQ0g7QUFsT0w7QUFBQTtBQUFBLCtCQW9PZTtBQUNQO0FBQ0EsYUFBTyxJQUFJZ0Ysa0RBQUosQ0FBZ0IsS0FBS2QsT0FBTCxHQUFlalcsS0FBL0IsQ0FBUDtBQUNIO0FBdk9MO0FBQUE7QUFBQSx1Q0F5T3VCO0FBQ2YsVUFBSXNPLEdBQUcsR0FBRyxJQUFJb0osMERBQUosRUFBVjs7QUFDQSxVQUFJLEtBQUtELFNBQUwsR0FBaUIxRixJQUFqQixLQUEwQixHQUE5QixFQUFtQztBQUMvQixXQUFHO0FBQ0MsY0FBSSxLQUFLTSxJQUFMLENBQVUsR0FBVixDQUFKLEVBQW9CO0FBQ2hCO0FBQ0E7QUFDSDs7QUFDRC9ELGFBQUcsQ0FBQ2hLLFdBQUosQ0FBZ0IsS0FBSzBLLFVBQUwsRUFBaEI7QUFDSCxTQU5ELFFBTVMsS0FBS3lHLE1BQUwsQ0FBWSxHQUFaLENBTlQ7QUFPSDs7QUFDRCxXQUFLUSxPQUFMLENBQWEsR0FBYjtBQUVBLGFBQU8zSCxHQUFQO0FBQ0g7QUF2UEw7QUFBQTtBQUFBLDZCQXlQYTtBQUNMLFVBQUlELFVBQVUsR0FBRyxFQUFqQjtBQUFBLFVBQXFCUCxRQUFyQjs7QUFDQSxVQUFJLEtBQUsySixTQUFMLEdBQWlCMUYsSUFBakIsS0FBMEIsR0FBOUIsRUFBbUM7QUFDL0IsV0FBRztBQUNDLGNBQUksS0FBS00sSUFBTCxDQUFVLEdBQVYsQ0FBSixFQUFvQjtBQUNoQjtBQUNBO0FBQ0g7O0FBQ0R2RSxrQkFBUSxHQUFHLElBQUk2SixtREFBSixFQUFYOztBQUNBLGNBQUksS0FBS3RGLElBQUwsR0FBWWtDLFFBQWhCLEVBQTBCO0FBQ3RCekcsb0JBQVEsQ0FBQ2hSLEdBQVQsR0FBZSxLQUFLeVgsUUFBTCxFQUFmO0FBQ0F6RyxvQkFBUSxDQUFDRCxRQUFULEdBQW9CLEtBQXBCO0FBQ0EsaUJBQUtvSSxPQUFMLENBQWEsR0FBYjtBQUNBbkksb0JBQVEsQ0FBQzlOLEtBQVQsR0FBaUIsS0FBS2dQLFVBQUwsRUFBakI7QUFDSCxXQUxELE1BS08sSUFBSSxLQUFLcUQsSUFBTCxHQUFZcEUsVUFBaEIsRUFBNEI7QUFDL0JILG9CQUFRLENBQUNoUixHQUFULEdBQWUsS0FBS21SLFVBQUwsRUFBZjtBQUNBSCxvQkFBUSxDQUFDRCxRQUFULEdBQW9CLEtBQXBCOztBQUNBLGdCQUFJLEtBQUt3RSxJQUFMLENBQVUsR0FBVixDQUFKLEVBQW9CO0FBQ2hCLG1CQUFLNEQsT0FBTCxDQUFhLEdBQWI7QUFDQW5JLHNCQUFRLENBQUM5TixLQUFULEdBQWlCLEtBQUtnUCxVQUFMLEVBQWpCO0FBQ0gsYUFIRCxNQUdPO0FBQ0hsQixzQkFBUSxDQUFDOU4sS0FBVCxHQUFpQjhOLFFBQVEsQ0FBQ2hSLEdBQTFCO0FBQ0g7QUFDSixXQVRNLE1BU0EsSUFBSSxLQUFLdVYsSUFBTCxDQUFVLEdBQVYsQ0FBSixFQUFvQjtBQUN2QixpQkFBSzRELE9BQUwsQ0FBYSxHQUFiO0FBQ0FuSSxvQkFBUSxDQUFDaFIsR0FBVCxHQUFlLEtBQUtrUyxVQUFMLEVBQWY7QUFDQSxpQkFBS2lILE9BQUwsQ0FBYSxHQUFiO0FBQ0FuSSxvQkFBUSxDQUFDRCxRQUFULEdBQW9CLElBQXBCO0FBQ0EsaUJBQUtvSSxPQUFMLENBQWEsR0FBYjtBQUNBbkksb0JBQVEsQ0FBQzlOLEtBQVQsR0FBaUIsS0FBS2dQLFVBQUwsRUFBakI7QUFDSCxXQVBNLE1BT0E7QUFDSCxpQkFBS21FLFVBQUwsQ0FBZ0IsYUFBaEIsRUFBK0IsS0FBS2QsSUFBTCxFQUEvQjtBQUNIOztBQUNEaEUsb0JBQVUsQ0FBQzdQLElBQVgsQ0FBZ0JzUCxRQUFoQjtBQUNILFNBL0JELFFBK0JTLEtBQUsySCxNQUFMLENBQVksR0FBWixDQS9CVDtBQWdDSDs7QUFDRCxXQUFLUSxPQUFMLENBQWEsR0FBYjtBQUVBLGFBQU8sSUFBSTJCLDJEQUFKLENBQXlCdkosVUFBekIsQ0FBUDtBQUNIO0FBaFNMO0FBQUE7QUFBQSw0QkFrU1l3SixFQWxTWixFQWtTZ0I7QUFDUixVQUFJLEtBQUs3RixNQUFMLENBQVlyTSxNQUFaLEtBQXVCLENBQTNCLEVBQThCO0FBQzFCLGNBQU0sSUFBSWxILEtBQUosQ0FBVSxtQ0FBbUMsS0FBS3NULElBQWxELENBQU47QUFDSDs7QUFFRCxVQUFJbUIsS0FBSyxHQUFHLEtBQUt1QyxNQUFMLENBQVlvQyxFQUFaLENBQVo7O0FBQ0EsVUFBSSxDQUFDM0UsS0FBTCxFQUFZO0FBQ1IsYUFBS0MsVUFBTCxDQUFnQiwrQkFBK0IwRSxFQUEvQixHQUFvQyxHQUFwRCxFQUF5RCxLQUFLeEYsSUFBTCxFQUF6RDtBQUNIOztBQUNELGFBQU9hLEtBQVA7QUFDSDtBQTVTTDtBQUFBO0FBQUEsZ0NBOFNnQjtBQUNSLFVBQUksS0FBS2xCLE1BQUwsQ0FBWXJNLE1BQVosS0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsY0FBTSxJQUFJbEgsS0FBSixDQUFVLG1DQUFtQyxLQUFLc1QsSUFBbEQsQ0FBTjtBQUNIOztBQUNELGFBQU8sS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBUDtBQUNIO0FBblRMO0FBQUE7QUFBQSx5QkFxVFM2RixFQXJUVCxFQXFUYUMsRUFyVGIsRUFxVGlCQyxFQXJUakIsRUFxVHFCQyxFQXJUckIsRUFxVHlCO0FBQ2pCLGFBQU8sS0FBS2YsU0FBTCxDQUFlLENBQWYsRUFBa0JZLEVBQWxCLEVBQXNCQyxFQUF0QixFQUEwQkMsRUFBMUIsRUFBOEJDLEVBQTlCLENBQVA7QUFDSDtBQXZUTDtBQUFBO0FBQUEsOEJBeVRjM0UsQ0F6VGQsRUF5VGlCd0UsRUF6VGpCLEVBeVRxQkMsRUF6VHJCLEVBeVR5QkMsRUF6VHpCLEVBeVQ2QkMsRUF6VDdCLEVBeVRpQztBQUN6QixVQUFJLEtBQUtoRyxNQUFMLENBQVlyTSxNQUFaLEdBQXFCME4sQ0FBekIsRUFBNEI7QUFDeEIsWUFBSUgsS0FBSyxHQUFHLEtBQUtsQixNQUFMLENBQVlxQixDQUFaLENBQVo7QUFDQSxZQUFJNEUsQ0FBQyxHQUFHL0UsS0FBSyxDQUFDbkIsSUFBZDs7QUFDQSxZQUFJa0csQ0FBQyxLQUFLSixFQUFOLElBQVlJLENBQUMsS0FBS0gsRUFBbEIsSUFBd0JHLENBQUMsS0FBS0YsRUFBOUIsSUFBb0NFLENBQUMsS0FBS0QsRUFBMUMsSUFDQyxDQUFDSCxFQUFELElBQU8sQ0FBQ0MsRUFBUixJQUFjLENBQUNDLEVBQWYsSUFBcUIsQ0FBQ0MsRUFEM0IsRUFDZ0M7QUFDNUIsaUJBQU85RSxLQUFQO0FBQ0g7QUFDSjs7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQW5VTDtBQUFBO0FBQUEsMkJBcVVXMkUsRUFyVVgsRUFxVWVDLEVBclVmLEVBcVVtQkMsRUFyVW5CLEVBcVV1QkMsRUFyVXZCLEVBcVUyQjtBQUNuQixVQUFJOUUsS0FBSyxHQUFHLEtBQUtiLElBQUwsQ0FBVXdGLEVBQVYsRUFBY0MsRUFBZCxFQUFrQkMsRUFBbEIsRUFBc0JDLEVBQXRCLENBQVo7O0FBQ0EsVUFBSTlFLEtBQUosRUFBVztBQUNQLGFBQUtsQixNQUFMLENBQVlwTSxLQUFaO0FBQ0EsZUFBT3NOLEtBQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDtBQTVVTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBRU8sSUFBTXdFLG1CQUFiO0FBQUE7O0FBQ0ksaUNBQWM7QUFBQTs7QUFBQSw0RkFDSnRNLHdDQUFHLENBQUNxQixlQURBO0FBRWI7O0FBSEw7QUFBQSxFQUF5Q3lMLGlEQUF6QyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTW5DLHdCQUFiO0FBQUE7O0FBQ0ksb0NBQVl6SSxJQUFaLEVBQWtCTixLQUFsQixFQUF5QmtELFFBQXpCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQy9CLGtHQUFNOUUsd0NBQUcsQ0FBQ0csb0JBQVY7QUFDQSxVQUFLK0IsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS04sS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS2tELFFBQUwsR0FBZ0JBLFFBQWhCO0FBSitCO0FBS2xDOztBQU5MO0FBQUEsRUFBOENnSSxpREFBOUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNITyxJQUFNQSxPQUFiO0FBQ0ksbUJBQVkvTSxJQUFaLEVBQWtCO0FBQUE7O0FBQ2QsU0FBS0EsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBSzNDLFVBQUwsR0FBa0IsRUFBbEI7QUFDSDs7QUFKTDtBQUFBO0FBQUEsZ0NBTWdCRSxLQU5oQixFQU11QjtBQUNmLFdBQUtGLFVBQUwsQ0FBZ0JoSyxJQUFoQixDQUFxQmtLLEtBQXJCO0FBQ0g7QUFSTDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBSTBDLEdBQUcsR0FBRyxFQUFWO0FBRVBBLEdBQUcsQ0FBQytNLE9BQUosR0FBYyxTQUFkO0FBQ0EvTSxHQUFHLENBQUNDLG1CQUFKLEdBQTBCLHFCQUExQjtBQUNBRCxHQUFHLENBQUNHLG9CQUFKLEdBQTJCLHNCQUEzQjtBQUNBSCxHQUFHLENBQUNLLHFCQUFKLEdBQTRCLHVCQUE1QjtBQUNBTCxHQUFHLENBQUNPLGlCQUFKLEdBQXdCLG1CQUF4QjtBQUNBUCxHQUFHLENBQUNTLGdCQUFKLEdBQXVCLGtCQUF2QjtBQUNBVCxHQUFHLENBQUNXLGVBQUosR0FBc0IsaUJBQXRCO0FBQ0FYLEdBQUcsQ0FBQ2EsY0FBSixHQUFxQixnQkFBckI7QUFDQWIsR0FBRyxDQUFDZSxnQkFBSixHQUF1QixrQkFBdkI7QUFDQWYsR0FBRyxDQUFDaUIsVUFBSixHQUFpQixZQUFqQjtBQUNBakIsR0FBRyxDQUFDbUIsT0FBSixHQUFjLFNBQWQ7QUFDQW5CLEdBQUcsQ0FBQ3FCLGVBQUosR0FBc0IsaUJBQXRCO0FBQ0FyQixHQUFHLENBQUN1QixRQUFKLEdBQWUsVUFBZjtBQUNBdkIsR0FBRyxDQUFDeUIsZ0JBQUosR0FBdUIsa0JBQXZCO0FBRU8sSUFBTTJELGtCQUFiLEdBQ0ksOEJBQWM7QUFBQTs7QUFDVixPQUFLMUIsS0FBTCxHQUFhLElBQWI7QUFDSCxDQUhMLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUNBO0FBRU8sSUFBTXlILG9CQUFiO0FBQUE7O0FBQ0ksZ0NBQVlyRyxRQUFaLEVBQXNCNUMsSUFBdEIsRUFBNEJOLEtBQTVCLEVBQW1DO0FBQUE7O0FBQUE7O0FBQy9CLDhGQUFNNUIsd0NBQUcsQ0FBQ1MsZ0JBQVY7QUFDQSxVQUFLcUUsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLNUMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS04sS0FBTCxHQUFhQSxLQUFiO0FBSitCO0FBS2xDOztBQU5MO0FBQUEsRUFBMENrTCxpREFBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU1oQixrQkFBYjtBQUFBOztBQUNJLDhCQUFZN00sTUFBWixFQUFvQm9ELElBQXBCLEVBQTBCO0FBQUE7O0FBQUE7O0FBQ3RCLDRGQUFNckMsd0NBQUcsQ0FBQ2EsY0FBVjtBQUNBLFVBQUs1QixNQUFMLEdBQWNBLE1BQWQ7QUFDQSxVQUFLb0QsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBSzlOLE1BQUwsR0FBYyxLQUFkO0FBSnNCO0FBS3pCOztBQU5MO0FBQUEsRUFBd0N1WSxpREFBeEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU1oQyx5QkFBYjtBQUFBOztBQUNJLHFDQUFZaEosSUFBWixFQUFrQkMsU0FBbEIsRUFBNkJDLFVBQTdCLEVBQXlDO0FBQUE7O0FBQUE7O0FBQ3JDLG1HQUFNaEMsd0NBQUcsQ0FBQ0sscUJBQVY7QUFDQSxVQUFLeUIsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQkEsU0FBakI7QUFDQSxVQUFLQyxVQUFMLEdBQWtCQSxVQUFsQjtBQUpxQztBQUt4Qzs7QUFOTDtBQUFBLEVBQStDOEssaURBQS9DLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNeEMsdUJBQWI7QUFBQTs7QUFDSSxxQ0FBYztBQUFBOztBQUFBLGdHQUNKdEssd0NBQUcsQ0FBQ0MsbUJBREE7QUFFYjs7QUFITDtBQUFBLEVBQTZDNk0saURBQTdDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNVixjQUFiO0FBQUE7O0FBQ0ksMEJBQVl4YSxJQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2Qsd0ZBQU1vTyx3Q0FBRyxDQUFDaUIsVUFBVjtBQUNBLFVBQUtyUCxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLeVIsU0FBTCxHQUFpQixLQUFqQjtBQUhjO0FBSWpCOztBQUxMO0FBQUEsRUFBb0N5SixpREFBcEMsRTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVPLElBQU1uQixXQUFiO0FBQUE7O0FBQ0ksdUJBQVkvVyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7O0FBQ2YscUZBQU1vTCx3Q0FBRyxDQUFDbUIsT0FBVjtBQUNBLFVBQUt2TSxLQUFMLEdBQWFBLEtBQWI7QUFGZTtBQUdsQjs7QUFKTDtBQUFBLEVBQWlDa1ksaURBQWpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNOUIscUJBQWI7QUFBQTs7QUFDSSxpQ0FBWWxHLFFBQVosRUFBc0I1QyxJQUF0QixFQUE0Qk4sS0FBNUIsRUFBbUM7QUFBQTs7QUFBQTs7QUFDL0IsK0ZBQU01Qix3Q0FBRyxDQUFDTyxpQkFBVjtBQUNBLFVBQUt1RSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUs1QyxJQUFMLEdBQVlBLElBQVo7QUFDQSxVQUFLTixLQUFMLEdBQWFBLEtBQWI7QUFKK0I7QUFLbEM7O0FBTkw7QUFBQSxFQUEyQ2tMLGlEQUEzQyxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBRU8sSUFBTWQsb0JBQWI7QUFBQTs7QUFDSSxnQ0FBWXhKLE1BQVosRUFBb0JFLFFBQXBCLEVBQThCRCxRQUE5QixFQUF3QztBQUFBOztBQUFBOztBQUNwQyw4RkFBTXpDLHdDQUFHLENBQUNlLGdCQUFWO0FBQ0EsVUFBS3lCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFVBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsVUFBS0QsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxVQUFLWSxTQUFMLEdBQWlCLEtBQWpCO0FBTG9DO0FBTXZDOztBQVBMO0FBQUEsRUFBMEN5SixpREFBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU1OLG9CQUFiO0FBQUE7O0FBQ0ksZ0NBQVl2SixVQUFaLEVBQXdCO0FBQUE7O0FBQUE7O0FBQ3BCLDhGQUFNakQsd0NBQUcsQ0FBQ3lCLGdCQUFWO0FBQ0EsVUFBS3dCLFVBQUwsR0FBa0JBLFVBQWxCO0FBRm9CO0FBR3ZCOztBQUpMO0FBQUEsRUFBMEM2SixpREFBMUMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU0zQyxXQUFiO0FBQUE7O0FBQ0kseUJBQWM7QUFBQTs7QUFBQSxvRkFDSm5LLHdDQUFHLENBQUMrTSxPQURBO0FBRWI7O0FBSEw7QUFBQSxFQUFpQ0QsaURBQWpDLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFFTyxJQUFNUCxZQUFiO0FBQUE7O0FBQ0ksMEJBQWM7QUFBQTs7QUFBQTs7QUFDVixzRkFBTXZNLHdDQUFHLENBQUN1QixRQUFWO0FBQ0EsVUFBS3lMLElBQUwsR0FBWSxNQUFaO0FBQ0EsVUFBS3RiLEdBQUwsR0FBVyxJQUFYO0FBQ0EsVUFBS2tELEtBQUwsR0FBYSxJQUFiO0FBQ0EsVUFBSzZOLFFBQUwsR0FBZ0IsS0FBaEI7QUFMVTtBQU1iOztBQVBMO0FBQUEsRUFBa0NxSyxpREFBbEMsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUVPLElBQU14QixtQkFBYjtBQUFBOztBQUNJLCtCQUFZeEcsUUFBWixFQUFzQnZNLEdBQXRCLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3ZCLDZGQUFNeUgsd0NBQUcsQ0FBQ1csZUFBVjtBQUNBLFVBQUtzTSxNQUFMLEdBQWMsSUFBZDtBQUNBLFVBQUtuSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFVBQUt2TSxHQUFMLEdBQVdBLEdBQVg7QUFKdUI7QUFLMUI7O0FBTkw7QUFBQSxFQUF5Q3VVLGlEQUF6QyxFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQU8sSUFBSXBHLFlBQVksR0FBRztBQUN0QjJCLHNCQUFvQixFQUFFLEtBREE7QUFFdEJsQixtQkFBaUIsRUFBRSxLQUZHO0FBR3RCc0UsVUFBUSxFQUFFO0FBQ04sYUFBTyxLQUREO0FBRU4sWUFBTSxJQUZBO0FBR04sWUFBTSxJQUhBO0FBSU55QixhQUFTLEVBQUVBO0FBSkw7QUFIWSxDQUFuQixDOzs7Ozs7Ozs7Ozs7QUNBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFB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T0EsUUFBUSxZQUFZdmhCLG9EQUEzQjtBQUNIOztBQUVELFNBQVNnd0IsUUFBVCxDQUFrQnpPLFFBQWxCLEVBQTRCO0FBQ3hCLFNBQU9BLFFBQVEsWUFBWXNMLDhDQUEzQjtBQUNIOztBQUVELFNBQVNvRCxTQUFULENBQW1CMU8sUUFBbkIsRUFBNkI7QUFDekIsU0FBT0EsUUFBUSxZQUFZeUwsZ0RBQTNCO0FBQ0g7O0FBRUQsU0FBUzV2QixNQUFULENBQWdCOEksUUFBaEIsRUFBMEJvbkIsTUFBMUIsRUFBa0M7QUFDOUIsTUFBSTNLLE9BQU8sR0FBR3BpQixRQUFRLENBQUN5ckIsYUFBVCxDQUF1QjlsQixRQUF2QixDQUFkO0FBQ0EsTUFBSWdxQixJQUFJLEdBQUdyQyxnREFBTyxDQUFDNkIsYUFBUixDQUFzQixNQUF0QixFQUE4QnBDLE1BQTlCLEVBQXNDO0FBQzdDcndCLFlBQVEsRUFBRTBsQixPQUFPLENBQUM1aUI7QUFEMkIsR0FBdEMsQ0FBWDtBQUdBLE1BQUlnbUIsSUFBSSxHQUFHLElBQUltSyxJQUFKLEVBQVg7QUFFQXB4Qiw2REFBQSxDQUEyQjZqQixPQUEzQjtBQUNBb0QsTUFBSSxDQUFDL2dCLE9BQUw7QUFDQStnQixNQUFJLENBQUNuRSxNQUFMLENBQVllLE9BQVo7QUFDSCIsImZpbGUiOiJhdXRvbWF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImF1dG9tYXRlXCJdID0gZmFjdG9yeSgpO1xufSkod2luZG93LCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2xvdCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGNvbXBvbmVudCB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSAnLi4vcmVuZGVyJztcclxuXHJcbkBjb21wb25lbnQoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnc2xvdCdcclxufSlcclxuY2xhc3MgU2xvdENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucHJvcHMubmFtZSA9ICcnO1xyXG4gICAgfVxyXG5cclxuICAgICRyZW5kZXIoKSB7XHJcbiAgICAgICAgdmFyIHNsb3RzID0gdGhpcy4kJHBhcmVudC5zbG90cztcclxuICAgICAgICB2YXIgdGVtcGxhdGUgPSBzbG90c1t0aGlzLnByb3BzLm5hbWVdO1xyXG5cclxuICAgICAgICBpZiAodGVtcGxhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy4kJHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMuJCRwYXJlbnQsIHRlbXBsYXRlKTtcclxuICAgICAgICAgICAgdGhpcy4kJHJlbmRlcmVyLnJlbmRlcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kJHJlbmRlcmVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL21lc3NhZ2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTWVzc2FnZShvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBNZXNzYWdlO1xyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG4vLyBnbG9iYWwgZXZlbnRzXHJcbmV4cG9ydCB2YXIgZXZlbnRzID0ge1xyXG4gICAgcHJvcGVydHlDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpLFxyXG4gICAgdHJhbnNsYXRlQ2hhbmdlZDogbmV3IE1lc3NhZ2UoKVxyXG59OyIsImV4cG9ydCAqIGZyb20gJy4vbG9jYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vZXZlbnRzJztcbmV4cG9ydCAqIGZyb20gJy4vYXBpJzsiLCJleHBvcnQgY2xhc3MgTG9jYWwge1xuICAgIGNvbnN0cnVjdG9yKGUsIGVsbSkge1xuICAgICAgICB0aGlzLiRldmVudCA9IGU7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSBlbG07XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBNZXNzYWdlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuaGFuZGxlcnMgPSBbXTtcbiAgICB9XG5cbiAgICBvbihmbikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmhhbmRsZXJzLmluZGV4T2YoZm4pO1xuXG4gICAgICAgIC8vIG5vdCBmb3VuZFxuICAgICAgICBpZihpbmRleCA9PT0gLTEpe1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5wdXNoKGZuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2FuIG5vdCByZWdpc3RlciBzYW1lIGV2ZW50IGhhbmRsZXIgbW9yZSB0aGFuIG9uY2UnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLm9mZihmbik7XG4gICAgfVxuXG4gICAgb2ZmKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZShkYXRhLCBzY29wZSkge1xuICAgICAgICBzY29wZSA9IHNjb3BlIHx8IHRoaXM7XG4gICAgICAgIC8vIGF0dGFjaCBldmVudCBkYXRhXG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGEgfHwge307XG5cbiAgICAgICAgdGhpcy5oYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4gaGFuZGxlci5jYWxsKHNjb3BlLCB0aGlzKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIGRvbSBmcm9tICcuL2RvbSc7XHJcblxyXG5kb20ubG9hZFN0eWxlU3RyaW5nKCcubS1jb21wb25lbnR7ZGlzcGxheTppbmhlcml0O30gLm0taGlkZXtkaXNwbGF5Om5vbmUgIWltcG9ydGFudDt9Jyk7XHJcblxyXG5leHBvcnQgdmFyIE1fQ01QX0NMQVNTID0gJ20tY29tcG9uZW50JztcclxuZXhwb3J0IHZhciBNX0hJREVfQ0xBU1MgPSAnbS1oaWRlJzsiLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RpdmUobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJEaXJlY3RpdmUoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlcihtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckZpbHRlcihrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJleHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2ZpbHRlcic7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2UnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXJ2aWNlKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyU2VydmljZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1iaW5kLWh0bWwnXHJcbn0pXHJcbmNsYXNzIEJpbmRIdG1sRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRlbGVtZW50LmlubmVySFRNTCA9IHZhbHVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1iaW5kJ1xufSlcbmNsYXNzIEJpbmREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20taGlkZSdcbn0pXG5jbGFzcyBIaWRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRoaWRlRWxlbWVudCh2YWx1ZSk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWlmJ1xyXG59KVxyXG5jbGFzcyBJZkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbi1pZicpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy4kcmVtb3ZlRWxlbWVudCghdmFsdWUpO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0ICogZnJvbSAnLi9iaW5kJztcbmV4cG9ydCAqIGZyb20gJy4vYmluZC1odG1sJztcbmV4cG9ydCAqIGZyb20gJy4vcmVwZWF0JztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xuZXhwb3J0ICogZnJvbSAnLi9oaWRlJztcbmV4cG9ydCAqIGZyb20gJy4vc2hvdyc7XG5leHBvcnQgKiBmcm9tICcuL3N0YXRlJztcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9pZic7XG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaCc7IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1tb2RlbCdcbn0pXG5jbGFzcyBNb2RlbERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tb2RlbFZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gW107XG4gICAgICAgIHRoaXMuZm9ybWF0dGVycyA9IFtdO1xuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy52YWxpZGF0b3JzID0gW107XG4gICAgICAgIHRoaXMuc3RhdHVzID0ge1xuICAgICAgICAgICAgZmVlZGJhY2s6ICcnLFxuICAgICAgICAgICAgcHJpc3RpbmU6IHRydWUsXG4gICAgICAgICAgICBkaXJ0eTogZmFsc2UsXG4gICAgICAgICAgICB2YWxpZDogdHJ1ZSxcbiAgICAgICAgICAgIGludmFsaWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIHByaXN0aW5lOiAnbi1wcmlzdGluZScsXG4gICAgICAgICAgICAgICAgZGlydHk6ICduLWRpcnR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZDogJ24tdmFsaWQnLFxuICAgICAgICAgICAgICAgIGludmFsaWQ6ICduLWludmFsaWQnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy5jb21taXRNb2RlbFZhbHVlKHZhbHVlKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHZhciBuYW1lID0gdGhpcy4kZWxlbWVudC5uYW1lO1xuXG4gICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICB0aGlzLiRzY29wZS5zdGF0ZVtuYW1lXSA9IHRoaXMuc3RhdHVzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuJGNvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiRjb21wb25lbnQuJGJpbmQoJ2NoYW5nZScsIGUgPT4gdGhpcy5jb21taXRWaWV3VmFsdWUoZS5kYXRhLm5ld3ZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLnRhcmdldC52YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxuXG4gICAgY29tbWl0TW9kZWxWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCB0aGlzLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLmZvcm1hdHRlcnMuZm9yRWFjaChmdW5jdGlvbiAoZm9ybWF0dGVyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHRoaXMudmlld1ZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kc2V0UHJvcGVydHkoJ3ZhbHVlJywgbmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy4kZWxlbWVudC52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy51cGRhdGVFbG1Dc3NDbGFzcygpO1xuICAgIH1cblxuICAgIGNvbW1pdFZpZXdWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy5tYXJrRGlydHlTdGF0dXModHJ1ZSk7XG5cbiAgICAgICAgdGhpcy52aWV3Q2hhbmdlTGlzdGVuZXJzLmZvckVhY2goZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLnZpZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMudmlld1ZhbHVlID0gbmV3VmFsdWU7XG5cbiAgICAgICAgdGhpcy5wYXJzZXJzLmZvckVhY2goZnVuY3Rpb24gKHBhcnNlcikge1xuICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZXIuY2FsbChzZWxmLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKHRoaXMubW9kZWxWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudmFsaWRhdG9ycy5mb3JFYWNoKGZ1bmN0aW9uICh2YWxpZGF0b3IpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5jYWxsKHNlbGYsIG5ld1ZhbHVlLCBzZWxmLm1vZGVsVmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLiRiaW5kaW5nLmFzc2lnbihuZXdWYWx1ZSk7XG4gICAgfVxuXG4gICAgdXBkYXRlRWxtQ3NzQ2xhc3MoKSB7XG4gICAgICAgIHZhciBlbGUgPSB0aGlzLiRlbGVtZW50LFxuICAgICAgICAgICAgY3NzID0gdGhpcy5vcHRpb25zLmNzcztcblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMuZGlydHkpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5kaXJ0eSk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MucHJpc3RpbmUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnByaXN0aW5lKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5kaXJ0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zdGF0dXMudmFsaWQpIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MuaW52YWxpZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MuaW52YWxpZCk7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LnJlbW92ZShjc3MudmFsaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWFya0RpcnR5U3RhdHVzKGRpcnR5KSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLmRpcnR5ID0gZGlydHk7XG4gICAgICAgIHRoaXMuc3RhdHVzLnByaXN0aW5lID0gIWRpcnR5O1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgbWFya1ZhbGlkU3RhdHVzKHZhbGlkLCBmZWVkYmFjaykge1xuICAgICAgICB0aGlzLnN0YXR1cy52YWxpZCA9IHZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5pbnZhbGlkID0gIXZhbGlkO1xuICAgICAgICB0aGlzLnN0YXR1cy5mZWVkYmFjayA9IGZlZWRiYWNrO1xuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZXBlYXQnXG59KVxuY2xhc3MgUmVwZWF0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5pdGVtRXhwID0gJyc7XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSAnJztcbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gPSBudWxsO1xuICAgIH1cblxuICAgIG9uQ29tcGlsZSh2ZWxtLCB2YXR0cikge1xuICAgICAgICB2YXIgYXJnID0gdmF0dHIubm9kZVZhbHVlO1xuICAgICAgICB2YXIgcGF0dGVybiA9IC9eKFthLXpfXStcXHcrKVxccytpblxccysoLispJC9pO1xuICAgICAgICB2YXIgcmVzdWx0ID0gcGF0dGVybi5leGVjKGFyZyk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ20tcmVwZWF0OiBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLml0ZW1FeHAgPSByZXN1bHRbMV07XG4gICAgICAgIHRoaXMuaXRlbXNFeHAgPSByZXN1bHRbMl07XG4gICAgICAgIHZlbG0ucmVtb3ZlQXR0cih2YXR0cik7XG4gICAgICAgIHRoaXMuaXRlbVRlbXBsYXRlID0gdmVsbS5nZXRPdXRlclRwbCgpO1xuXG4gICAgICAgIC8vIGlkZW50aWZ5IHRoaXMgZGlyZWN0aXZlIHdvdWxkIHRha2Ugb3ZlciBsaW5rIGZ1bmN0aW9uIGZvciByZWxhdGVkIHZpcnR1YWwgZWxlbWVudCBub2RlLCBvbkxpbmsgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgb25MaW5rKHNjb3BlKSB7XG4gICAgICAgIHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgICAgICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ3N0YXJ0OiBtLXJlcGVhdCcpO1xuICAgICAgICB2YXIgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnZW5kOiBtLXJlcGVhdCcpO1xuXG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKHRoaXMucmVuZGVyKHNjb3BlKSk7XG4gICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGZvb3Rlcik7XG5cbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IHNjb3BlLiR3YXRjaENvbGxlY3Rpb24odGhpcy5pdGVtc0V4cCwgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gdGhpcy5yZW5kZXIoc2NvcGUpO1xuICAgICAgICAgICAgZG9tLnJlbW92ZUVsZW1lbnRzQmV0d2VlbihoZWFkZXIsIGZvb3Rlcik7XG4gICAgICAgICAgICBmb290ZXIucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZnJhZ21lbnQsIGZvb3Rlcik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiBmcmFnbWVudDtcbiAgICB9XG5cbiAgICByZW5kZXIoc2NvcGUpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgaXRlbXMgPSBzY29wZS4kZXZhbCh0aGlzLml0ZW1zRXhwKTtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgbmV3QnVmZmVyID0gbmV3IE1hcCgpO1xuXG4gICAgICAgIHV0aWxzLmZvckVhY2goaXRlbXMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhciByZW5kZXJlciA9IHNlbGYuZ2V0UmVuZGVyZXJGcm9tQnVmZmVyKHNlbGYuYnVmZmVyLCBpdGVtKTtcblxuICAgICAgICAgICAgaWYgKCFyZW5kZXJlcikge1xuICAgICAgICAgICAgICAgIHZhciBsb2NhbHMgPSB7fTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRrZXknXSA9IGtleTtcbiAgICAgICAgICAgICAgICBsb2NhbHNbJyRpbmRleCddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1tzZWxmLml0ZW1FeHBdID0gaXRlbTtcbiAgICAgICAgICAgICAgICByZW5kZXJlciA9IHNlbGYuJHJlbmRlcihzZWxmLml0ZW1UZW1wbGF0ZSwgbG9jYWxzKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5zZXRSZW5kZXJlclRvQnVmZmVyKG5ld0J1ZmZlciwgaXRlbSwgcmVuZGVyZXIpO1xuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIudmlldyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYnVmZmVyLmVudHJpZXMoZnVuY3Rpb24gKGxpc3QpIHtcbiAgICAgICAgICAgIGxpc3QuZm9yRWFjaChmdW5jdGlvbiAocmVuZGVyZXIpIHtcbiAgICAgICAgICAgICAgICByZW5kZXJlci5kZXN0cm95KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWZmZXIgPSBuZXdCdWZmZXI7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIGdldFJlbmRlcmVyRnJvbUJ1ZmZlcihidWZmZXIsIGRhdGFJdGVtKSB7XG4gICAgICAgIHZhciByZW5kZXJlcjtcblxuICAgICAgICBpZiAoYnVmZmVyLmhhcyhkYXRhSXRlbSkpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG5cbiAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyID0gbGlzdC5zaGlmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidWZmZXIuZGVsZXRlKGRhdGFJdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZW5kZXJlcjtcbiAgICB9XG5cbiAgICBzZXRSZW5kZXJlclRvQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0sIHJlbmRlcmVyKSB7XG4gICAgICAgIHZhciBsaXN0O1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgbGlzdCA9IGJ1ZmZlci5nZXQoZGF0YUl0ZW0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdCA9IFtdO1xuICAgICAgICAgICAgYnVmZmVyLnNldChkYXRhSXRlbSwgbGlzdCk7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2gocmVuZGVyZXIpO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5idWZmZXIgPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uICYmIHRoaXMudW53YXRjaENvbGxlY3Rpb24oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXNob3cnXG59KVxuY2xhc3MgU2hvd0RpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kaGlkZUVsZW1lbnQoIXZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWNoZWNrZWQnXG59KVxuY2xhc3MgQ2hlY2tlZERpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ2NoZWNrZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWRpc2FibGVkJ1xufSlcbmNsYXNzIERpc2FibGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignZGlzYWJsZWQnKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9jaGVja2VkJ1xuZXhwb3J0ICogZnJvbSAnLi9kaXNhYmxlZCdcbmV4cG9ydCAqIGZyb20gJy4vcmVhZG9ubHknXG5leHBvcnQgKiBmcm9tICcuL3NlbGVjdGVkJyIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1yZWFkb25seSdcbn0pXG5jbGFzcyBSZWFkb25seURpcmVjdGl2ZSBleHRlbmRzIFN0YXRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoJ3JlYWRvbmx5Jyk7XG4gICAgfVxufSIsImltcG9ydCB7IFN0YXRlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdGF0ZSc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAgc2VsZWN0b3I6ICdtLXNlbGVjdGVkJ1xufSlcbmNsYXNzIFNlbGVjdGVkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignc2VsZWN0ZWQnKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5cbmV4cG9ydCBjbGFzcyBTdGF0ZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3Ioa2V5KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMua2V5ID0ga2V5O1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLiRlbGVtZW50Lmhhc0F0dHJpYnV0ZSh0aGlzLmtleSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmtleSwgJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMua2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDbGFzc0RpcmVjdGl2ZSB9IGZyb20gJy4vY2xhc3MnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzLWV2ZW4nXHJcbn0pXHJcbmNsYXNzIENsYXNzRXZlbkRpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3Mtb2RkJ1xyXG59KVxyXG5jbGFzcyBDbGFzc09kZERpcmVjdGl2ZSBleHRlbmRzIENsYXNzRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy4kYmluZGluZy5ldmFsdWF0ZSgnJGluZGV4Jyk7XHJcbiAgICAgICAgcmV0dXJuIGluZGV4ICYgMSA9PT0gMDtcclxuICAgIH1cclxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vLi4vZG9tJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcydcclxufSlcclxuZXhwb3J0IGNsYXNzIENsYXNzRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UobmV3Q2xhc3MsIG9sZENsYXNzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2tpcEN1cnJlbnRFbG0oKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAob2xkQ2xhc3MpIHtcclxuICAgICAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHRoaXMuJGVsZW1lbnQsIG9sZENsYXNzLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV3Q2xhc3MpIHtcclxuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIG5ld0NsYXNzLmpvaW4oJyAnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2NsYXNzJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9jbGFzcy1vZGQnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1ldmVuJztcclxuZXhwb3J0ICogZnJvbSAnLi9zdHlsZS1vZGQnOyIsImltcG9ydCB7IFN0eWxlRGlyZWN0aXZlIH0gZnJvbSAnLi9zdHlsZSc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tc3R5bGUtZXZlbidcclxufSlcclxuY2xhc3MgU3R5bGVFdmVuRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRiaW5kaW5nLmV2YWx1YXRlKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zdHlsZS1vZGQnXHJcbn0pXHJcbmNsYXNzIFN0eWxlT2RkRGlyZWN0aXZlIGV4dGVuZHMgU3R5bGVEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRiaW5kaW5nLmV2YWx1YXRlKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zdHlsZSdcbn0pXG5leHBvcnQgY2xhc3MgU3R5bGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKG5ld1N0eWxlLCBvbGRTdHlsZSkge1xuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgaWYgKG9sZFN0eWxlKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG9sZFN0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9ICcnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QobmV3U3R5bGUpKSB7XG4gICAgICAgICAgICB1dGlscy5mb3JFYWNoKG5ld1N0eWxlLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIHNlbGYuJGVsZW1lbnQuc3R5bGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBza2lwQ3VycmVudEVsbSgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3N3aXRjaCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLWRlZmF1bHQnXG5leHBvcnQgKiBmcm9tICcuL3N3aXRjaC13aGVuJyIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3dpdGNoLWRlZmF1bHQnXG59KVxuY2xhc3MgU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IG51bGw7XG4gICAgICAgIHRoaXMuJHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnbS1zd2l0Y2gtZGVmYXVsdCcpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gdGhpcy4kc2Vla1VwRGlyZWN0aXZlKCdtLXN3aXRjaCcpO1xuXG4gICAgICAgIGlmICh0aGlzLnN3aXRjaEN0cmwgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZXF1aXJlIG0tc3dpdGNoIGRpcmVjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1hdGNoRGVmYXVsdC5vbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCF0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZighdGhpcy5zd2l0Y2hDdHJsLmRlZmF1bHRNYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KHRydWUpO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuLi8uLi9jb3JlJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc3dpdGNoLXdoZW4nXG59KVxuY2xhc3MgU3dpdGNoV2hlbkRpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1hdGNoZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtLXN3aXRjaC13aGVuJyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSB0aGlzLiRzZWVrVXBEaXJlY3RpdmUoJ20tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwuY2hhbmdlZC5vbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICB2YXIgbWF0Y2hlZCA9IHRoaXMuc3dpdGNoQ3RybC52YWx1ZSA9PT0gdGhpcy52YWx1ZTtcblxuICAgICAgICBpZih0aGlzLm1hdGNoZWQgIT0gbWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5tYXRjaGVkID0gbWF0Y2hlZDtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaEN0cmwucGx1c01hdGNoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5taW51c01hdGNoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCFtYXRjaGVkKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zd2l0Y2gnXG59KVxuY2xhc3MgU3dpdGNoRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm1hdGNoRGVmYXVsdCA9IG5ldyBNZXNzYWdlKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmNoYW5nZWQuZmlyZSgpO1xuICAgIH1cblxuICAgIHBsdXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50Kys7XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgbWludXNNYXRjaCgpIHtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50LS07XG4gICAgICAgIHRoaXMuY2hlY2tEZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgY2hlY2tEZWZhdWx0KCkge1xuICAgICAgICB2YXIgZGVmYXVsdE1hdGNoZWQgPSB0aGlzLm1hdGNoQ291bnQgPD0gMDtcblxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0TWF0Y2hlZCAhPT0gZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdE1hdGNoZWQgPSBkZWZhdWx0TWF0Y2hlZDtcbiAgICAgICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0LmZpcmUoKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJcbmZ1bmN0aW9uIGdldENoaWxkcmVuT2ZFbGVtZW50KGVsbSkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbG0uY2hpbGROb2RlcywgMCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKS5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICBlbG0ucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiByZXBsYWNlRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG4gICAgaWYgKHBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbSk7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnQoZWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxtKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUVsZW1lbnRzQmV0d2VlbihzdGFydEVsbSwgZW5kRWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBzdGFydEVsbS5wYXJlbnROb2RlO1xuICAgIHZhciBjaGlsZE5vZGVzID0gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQocGFyZW50Tm9kZSk7XG5cbiAgICBjaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGlmIChjaGlsZC5wcmV2aW91c1NpYmxpbmcgPT09IHN0YXJ0RWxtICYmIGNoaWxkICE9PSBlbmRFbG0pIHtcbiAgICAgICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyA9PT0gZW5kRWxtICYmIGNoaWxkICE9PSBzdGFydEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYXBwZW5kRWxlbWVudChlbG0sIG5ld0VsbSkge1xuICAgIHZhciBwYXJlbnROb2RlID0gZWxtLnBhcmVudE5vZGU7XG5cbiAgICBpZiAocGFyZW50Tm9kZS5sYXN0Q2hpbGQgPT09IGVsbSkge1xuICAgICAgICBwYXJlbnROb2RlLmFwcGVuZENoaWxkKG5ld0VsbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobmV3RWxtLCBlbG0ubmV4dFNpYmxpbmcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYWRkQ2xhc3MgKGVsbSwgY2xzKSB7XG4gICAgaWYgKCFjbHMgfHwgIShjbHMgPSBjbHMudHJpbSgpKSkge1xuICAgICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoZWxtLmNsYXNzTGlzdCkge1xuICAgICAgICBpZiAoY2xzLmluZGV4T2YoJyAnKSA+IC0xKSB7XG4gICAgICAgICAgICBjbHMuc3BsaXQoL1xccysvKS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5jbGFzc0xpc3QuYWRkKGMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0uY2xhc3NMaXN0LmFkZChjbHMpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIGlmIChjdXIuaW5kZXhPZignICcgKyBjbHMgKyAnICcpIDwgMCkge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoY3VyICsgY2xzKS50cmltKCkpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QucmVtb3ZlKGNscyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlbG0uY2xhc3NMaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjdXIgPSBcIiBcIiArIChlbG0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKSArIFwiIFwiO1xuICAgICAgICB2YXIgdGFyID0gJyAnICsgY2xzICsgJyAnO1xuICAgICAgICB3aGlsZSAoY3VyLmluZGV4T2YodGFyKSA+PSAwKSB7XG4gICAgICAgICAgICBjdXIgPSBjdXIucmVwbGFjZSh0YXIsICcgJyk7XG4gICAgICAgIH1cbiAgICAgICAgY3VyID0gY3VyLnRyaW0oKTtcbiAgICAgICAgaWYgKGN1cikge1xuICAgICAgICAgICAgZWxtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBjdXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9hZFN0eWxlU3RyaW5nKGNzcykge1xuICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gICAgdmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxuZXhwb3J0IHtcbiAgICBhZGRDbGFzcyxcbiAgICByZW1vdmVDbGFzcyxcbiAgICBhcHBlbmRFbGVtZW50LFxuICAgIHJlbW92ZUVsZW1lbnQsXG4gICAgcmVwbGFjZUVsZW1lbnQsXG4gICAgZ2V0Q2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudHNCZXR3ZWVuLFxuICAgIGNsZWFyQ2hpbGRyZW5PZkVsZW1lbnQsXG4gICAgbG9hZFN0eWxlU3RyaW5nXG59OyIsImltcG9ydCB7IEFTVCB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcbmltcG9ydCB7IEV4cEJ1aWxkZXIgfSBmcm9tICcuL2V4cC1idWlsZGVyJztcblxuY2xhc3MgQWNjZXNzb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIHRoaXMuY2FsbGVlID0gY2FsbGVlO1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgIH1cblxuICAgIGNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlLCBleHApIHtcbiAgICAgICAgaWYgKCF0aGlzLmNoaWxkcmVuW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW5ba2V5XSA9IG5ldyBBY2Nlc3NvcihjYWxsZWUsIGV4cCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltrZXldO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIEFuYWx5c2VyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXJzZXIpIHtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBwYXJzZXIgfHwge1xuICAgICAgICAgICAgcGFyc2VFeHByZXNzaW9uOiBwYXJzZUV4cFxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMuYnVpbGRlciA9IG5ldyBFeHBCdWlsZGVyKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuYWNjZXNzb3Jba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFjY2Vzc29yW2tleV07XG4gICAgfVxuXG4gICAgYW5hbHlzZShleHApIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb2dyYW0ocHJvZ3JhbSkge1xuICAgICAgICB0aGlzLmFjY2Vzc29yID0ge307XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZU5vZGUoY2hpbGQpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3I7XG4gICAgfVxuXG4gICAgYW5hbHlzZU5vZGUobm9kZSwgY29udGV4dCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gbnVsbDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5hbmFseXNlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VMaXRlcmFsKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZU9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYW5hbHlzZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgIH1cblxuICAgIGFuYWx5c2VBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUobG9naWMucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VCaW5hcnkoYmluYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGJpbmFyeS5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUodW5hcnkuYXJnKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQ2FsbChjYWxsKSB7XG4gICAgICAgIGNhbGwuYXJncy5mb3JFYWNoKGFyZyA9PiB0aGlzLmFuYWx5c2VOb2RlKGFyZykpO1xuXG4gICAgICAgIGlmICghY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY2FsbC5jYWxsZWUsIHsgY2FsbGVlOiB0cnVlIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHBhcmVudCA9IHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLm9iamVjdCk7XG5cbiAgICAgICAgaWYgKG1lbWJlci5jb21wdXRlZCkge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShtZW1iZXIucHJvcGVydHksIHtcbiAgICAgICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAobWVtYmVyLnByb3BlcnR5LnR5cGUgPT09IEFTVC5MaXRlcmFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChtZW1iZXIucHJvcGVydHkudmFsdWUsIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKG1lbWJlci5wcm9wZXJ0eSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgcGFyZW50OiBwYXJlbnQsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGlkZW50aWZpZXIpLFxuICAgICAgICAgICAgY2FsbGVlID0gY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSwgY2FsbGVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUFjY2Vzc29yKGtleSwgY2FsbGVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlTGl0ZXJhbChsaXRlcmFsLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobGl0ZXJhbCk7XG5cbiAgICAgICAgaWYgKGNvbnRleHQgJiYgY29udGV4dC5wYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb250ZXh0LnBhcmVudC5jcmVhdGVDaGlsZChrZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYW5hbHlzZVByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShwcm9wLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhbmFseXNlT2JqZWN0KG9iaikge1xuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5hbmFseXNlTm9kZShpdGVtKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFycmF5KGFycikge1xuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHRoaXMuYW5hbHlzZShjaGlsZCkpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QsIE51bGxFeHByZXNzaW9uTm9kZSB9IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuaW1wb3J0IHsgcGFyc2VFeHAgfSAgZnJvbSAnLi9leHAtYXBpJztcblxuZXhwb3J0IGNsYXNzIEV2YWx1YXRvciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgICAgICAgICAgYXNzaWduSW50ZXJjZXB0b3I6IG51bGxcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbnVsbDtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyIHx8ICB7XG4gICAgICAgICAgICBwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlIGZyb20gZXhwcmVzc2lvblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvZ3JhbShwcm9ncmFtLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcblxuICAgICAgICB0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuJG51bGwpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZSB0byBleHByZXNzaW9uXG4gICAgYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hc3NpZ25Qcm9ncmFtKHByb2dyYW0sIHZhbHVlLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBwcm9ncmFtO1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcblxuICAgICAgICBpZiAodGhpcy5wcm9ncmFtLmNoaWxkTm9kZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGV4cHJlc3Npb24gPSB0aGlzLnByb2dyYW0uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoZXhwcmVzc2lvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IGV4cHJlc3Npb24uY2hpbGROb2Rlc1swXTtcblxuICAgICAgICBpZiAoYXNzaWdubWVudC50eXBlID09PSBBU1QuTWVtYmVyRXhwcmVzc2lvbikge1xuICAgICAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQub2JqZWN0KTtcblxuICAgICAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQub2JqZWN0KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5S2V5OiAhYXNzaWdubWVudC5jb21wdXRlZFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBudWxsIG9yIHVuZGVmaW5lZCcsIHRoaXMuYnVpbGRlci5idWlsZChhc3NpZ25tZW50LnByb3BlcnR5KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5JZGVudGlmaWVyKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNjb3BlW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRoaXMuc2NvcGUsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgc3dpdGNoIChub2RlLnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQ6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXNzaWdubWVudChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQ29uZGl0aW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTG9naWNhbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQmluYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuVW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVVbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkNhbGxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTWVtYmVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuSWRlbnRpZmllcjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlSWRlbnRpZmllcihub2RlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxpdGVyYWw6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUxpdGVyYWwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUFycmF5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuUHJvcGVydHk6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVByb3BlcnR5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuT2JqZWN0RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUV4cHJlc3Npb24oZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG5cbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQubGVmdCwge1xuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0Lm9ialt0YXJnZXQucHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvci5jYWxsKHRoaXMsIHRhcmdldC5vYmosIHRhcmdldC5wcm9wLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZUNvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi50ZXN0KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUxvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciByZXN1bHQ7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShsb2dpYy5yaWdodCk7XG5cbiAgICAgICAgc3dpdGNoIChsb2dpYy5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnJiYnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnfHwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAmJiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5sZWZ0KTtcbiAgICAgICAgdmFyIHJpZ2h0VmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZShiaW5hcnkucmlnaHQpO1xuXG4gICAgICAgIC8vICcrJywgJy0nLCAnKicsICcvJywgJyUnLCAnPCcsICc+JywgJzw9JywgJz49JywgJz09JywgJyE9JywgJz09PScsICchPT0nXG4gICAgICAgIHN3aXRjaCAoYmluYXJ5Lm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgKyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIC0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAqIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLyByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnJSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICUgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPiByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA8PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPj0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnIT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPT09JzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgPT09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAhPT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0LFxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmV2YWx1YXRlTm9kZSh1bmFyeS5hcmcpO1xuXG4gICAgICAgIHN3aXRjaCAodW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gLXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnISc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gIXZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUNhbGwoY2FsbCkge1xuICAgICAgICB2YXIgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKGFyZyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2FsbC5jYWxsZWUsIHtcbiAgICAgICAgICAgIGNhbGxlZTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIHZhciBmaWx0ZXIgPSB0aGlzLnNjb3BlLiRnZXRGaWx0ZXIoY29udGV4dC5wcm9wKTtcblxuICAgICAgICAgICAgaWYoZmlsdGVyID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZpbHRlciBcIicgKyBjb250ZXh0LnByb3AgKyAnXCIgaXMgbm90IGRlZmluZWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlci5leGVjdXRlLmFwcGx5KGZpbHRlciwgYXJnVmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmbiA9IGNvbnRleHQub2JqW2NvbnRleHQucHJvcF07XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNGdW5jdGlvbihmbikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dC5vYmosIGFyZ1ZhbHVlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoY29udGV4dC5wcm9wICsgJyBpcyBub3QgYSBmdW5jdGlvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVNZW1iZXIobWVtYmVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmV2YWx1YXRlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAob2JqID09IG51bGwgJiYgKHRoaXMub3B0aW9ucy5hbGxvd051bGwgfHwgbWVtYmVyLm9iamVjdC5hbGxvd051bGwpKSB7XG4gICAgICAgICAgICBvYmogPSBuZXcgTnVsbEV4cHJlc3Npb25Ob2RlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSk7XG4gICAgICAgICAgICByZXR1cm4gb2JqW3Byb3BdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgdGFyZ2V0OiBvYmosXG4gICAgICAgICAgICB0YXJnZXROb2RlOiBtZW1iZXIub2JqZWN0LFxuICAgICAgICAgICAgY2FsbGVlOiBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlLFxuICAgICAgICAgICAgYXNzaWdubWVudExlZnQ6IGNvbnRleHQgJiYgY29udGV4dC5hc3NpZ25tZW50TGVmdFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUlkZW50aWZpZXIoaWRlbnRpZmllciwgY29udGV4dCkge1xuICAgICAgICB2YXIgdGFyZ2V0O1xuXG4gICAgICAgIGNvbnRleHQgPSBjb250ZXh0IHx8IHt9O1xuXG4gICAgICAgIGlmIChjb250ZXh0LnRhcmdldE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGFyZ2V0ID0gdGhpcy5zY29wZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IGNvbnRleHQudGFyZ2V0XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5hc3NpZ25tZW50TGVmdCB8fCBjb250ZXh0LmNhbGxlZSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBvYmo6IHRhcmdldCxcbiAgICAgICAgICAgICAgICBwcm9wOiBpZGVudGlmaWVyLm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5wcm9wZXJ0eUtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXIubmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSB0YXJnZXRbaWRlbnRpZmllci5uYW1lXTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwgJiYgdGhpcy5sb2NhbHMpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMubG9jYWxzW2lkZW50aWZpZXIubmFtZV07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIHJldHVybiBsaXRlcmFsLnZhbHVlO1xuICAgIH1cblxuICAgIGV2YWx1YXRlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB2YXIga2V5ID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGV2YWx1YXRlT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHZhciBkZWYgPSB0aGlzLmV2YWx1YXRlTm9kZShpdGVtKTtcbiAgICAgICAgICAgIHJlc3VsdFtkZWYua2V5XSA9IGRlZi52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFycmF5KGFycikge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgYXJyLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh0aGlzLmV2YWx1YXRlTm9kZShjaGlsZCkpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBFeHBMZXhlciB9IGZyb20gJy4vZXhwLWxleGVyJztcbmltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4vZXhwLXBhcnNlcic7XG5cbmZ1bmN0aW9uIGxleEV4cChleHApIHtcbiAgICByZXR1cm4gbmV3IEV4cExleGVyKCkubGV4KGV4cCk7XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwUGFyc2VyKG5ldyBFeHBMZXhlcigpKS5wYXJzZShleHApO1xufVxuXG5leHBvcnQgeyBsZXhFeHAsIHBhcnNlRXhwIH07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5cbmV4cG9ydCBjbGFzcyBFeHBCdWlsZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgIH1cblxuICAgIGJ1aWxkKG5vZGUpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZFVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRNZW1iZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRJZGVudGlmaWVyKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGQoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGJ1aWxkQXNzaWdubWVudChhc3NpZ25tZW50KSB7XG4gICAgICAgIHZhciB0YXJnZXQgPSB0aGlzLmJ1aWxkKGFzc2lnbm1lbnQubGVmdCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT17MX0nLCB0YXJnZXQsIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZENvbmRpdGlvbihjb25kaXRpb24pIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi50ZXN0KTtcbiAgICAgICAgdmFyIGFsdGVybmF0ZSA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIHZhciBjb25zZXF1ZW50ID0gdGhpcy5idWlsZChjb25kaXRpb24uY29uc2VxdWVudCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfT97MX06ezJ9JywgdGVzdCwgYWx0ZXJuYXRlLCBjb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBidWlsZExvZ2ljKGxvZ2ljKSB7XG4gICAgICAgIHZhciBsZWZ0VmFsdWUgPSB0aGlzLmJ1aWxkKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGxvZ2ljLm9wZXJhdG9yLCByaWdodFZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZEJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuYnVpbGQoYmluYXJ5LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9ezF9ezJ9JywgbGVmdFZhbHVlLCBiaW5hcnkub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZCh1bmFyeS5hcmcpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX0nLCB1bmFyeS5vcGVyYXRvciwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciByZXMgPSAnJywgYXJnVmFsdWVzID0gY2FsbC5hcmdzLm1hcChhcmcgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGZuID0gdGhpcy5idWlsZChjYWxsLmNhbGxlZSk7XG5cbiAgICAgICAgaWYgKGNhbGwuZmlsdGVyKSB7XG4gICAgICAgICAgICBpZiAoYXJnVmFsdWVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICByZXMgPSBhcmdWYWx1ZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzICs9ICcgfCAnICsgZm47XG5cbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyArPSAnOicgKyB1dGlscy5qb2luKCc6JywgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHV0aWxzLmZvcm1hdCgnezB9KHsxfSknLCBmbiwgdXRpbHMuam9pbignLCAnLCBhcmdWYWx1ZXMpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfVxuXG4gICAgYnVpbGRNZW1iZXIobWVtYmVyKSB7XG4gICAgICAgIHZhciBvYmogPSB0aGlzLmJ1aWxkKG1lbWJlci5vYmplY3QpO1xuICAgICAgICB2YXIgcHJvcCA9IHRoaXMuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH1bezF9XScsIG9iaiwgcHJvcCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH0uezF9Jywgb2JqLCBwcm9wKTtcbiAgICB9XG5cbiAgICBidWlsZElkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgIH1cblxuICAgIGJ1aWxkTGl0ZXJhbChsaXRlcmFsKSB7XG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhsaXRlcmFsLnZhbHVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnXCJ7MH1cIicsIGxpdGVyYWwudmFsdWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgYnVpbGRQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkKHByb3Aua2V5LCB7XG4gICAgICAgICAgICBwcm9wZXJ0eUtleTogdHJ1ZVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHByb3AudmFsdWUpO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfTp7MX0nLCBrZXksIHZhbHVlKTtcbiAgICB9XG5cbiAgICBidWlsZE9iamVjdChvYmopIHtcbiAgICAgICAgdmFyIHByb3BzID0gb2JqLnByb3BlcnRpZXMubWFwKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYnVpbGQoaXRlbSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3t7MH19JywgdXRpbHMuam9pbignLCAnLCBwcm9wcykpO1xuICAgIH1cblxuICAgIGJ1aWxkQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciBpdGVtcyA9IGFyci5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ1t7MH1dJywgdXRpbHMuam9pbignLCcsIGl0ZW1zKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE9QRVJBVE9SUyB9IGZyb20gJy4vZXhwLW9wZXJhdG9ycyc7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuXG5leHBvcnQgY2xhc3MgRXhwTGV4ZXIge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdXRpbHMubWVyZ2UocGFyc2VPcHRpb25zLCBvcHRpb25zKTtcbiAgICB9XG5cbiAgICBsZXgodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc051bWJlcihjaCkgfHwgY2ggPT09ICcuJyAmJiB0aGlzLmlzTnVtYmVyKHRoaXMucGVlaygpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZE51bWJlcigpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KHRoaXMucGVla011bHRpY2hhcigpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZElkZW50KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXMoY2gsICcoKXt9W10uLDs6PycpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBjaCB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IGNoICsgdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgdmFyIGNoMyA9IGNoMiArIHRoaXMucGVlaygyKTtcbiAgICAgICAgICAgICAgICB2YXIgb3AxID0gT1BFUkFUT1JTW2NoXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AyID0gT1BFUkFUT1JTW2NoMl07XG4gICAgICAgICAgICAgICAgdmFyIG9wMyA9IE9QRVJBVE9SU1tjaDNdO1xuICAgICAgICAgICAgICAgIGlmIChvcDEgfHwgb3AyIHx8IG9wMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBvcDMgPyBjaDMgOiAob3AyID8gY2gyIDogY2gpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IHRva2VuLCBvcGVyYXRvcjogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSB0b2tlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudG9rZW5zO1xuICAgIH1cblxuICAgIGlzKGNoLCBjaGFycykge1xuICAgICAgICByZXR1cm4gY2hhcnMuaW5kZXhPZihjaCkgIT09IC0xO1xuICAgIH1cblxuICAgIHBlZWsoaSkge1xuICAgICAgICB2YXIgbnVtID0gaSB8fCAxO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPCB0aGlzLnRleHQubGVuZ3RoKSA/IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCArIG51bSkgOiBmYWxzZTtcbiAgICB9XG5cbiAgICBpc051bWJlcihjaCkge1xuICAgICAgICByZXR1cm4gKCcwJyA8PSBjaCAmJiBjaCA8PSAnOScpICYmIHR5cGVvZiBjaCA9PT0gJ3N0cmluZyc7XG4gICAgfVxuXG4gICAgaXNXaGl0ZXNwYWNlKGNoKSB7XG4gICAgICAgIC8vIElFIHRyZWF0cyBub24tYnJlYWtpbmcgc3BhY2UgYXMgXFx1MDBBMFxuICAgICAgICByZXR1cm4gKGNoID09PSAnICcgfHwgY2ggPT09ICdcXHInIHx8IGNoID09PSAnXFx0JyB8fFxuICAgICAgICAgICAgY2ggPT09ICdcXG4nIHx8IGNoID09PSAnXFx2JyB8fCBjaCA9PT0gJ1xcdTAwQTAnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0ID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJTdGFydChjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCkge1xuICAgICAgICByZXR1cm4gKCdhJyA8PSBjaCAmJiBjaCA8PSAneicgfHxcbiAgICAgICAgICAgICdBJyA8PSBjaCAmJiBjaCA8PSAnWicgfHxcbiAgICAgICAgICAgICdfJyA9PT0gY2ggfHwgY2ggPT09ICckJyk7XG4gICAgfVxuXG4gICAgaXNJZGVudGlmaWVyQ29udGludWUoY2gpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZSA/XG4gICAgICAgICAgICB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyQ29udGludWUoY2gsIHRoaXMuY29kZVBvaW50QXQoY2gpKSA6XG4gICAgICAgICAgICB0aGlzLmlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gpO1xuICAgIH1cblxuICAgIGlzVmFsaWRJZGVudGlmaWVyQ29udGludWUoY2gsIGNwKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRJZGVudGlmaWVyU3RhcnQoY2gsIGNwKSB8fCB0aGlzLmlzTnVtYmVyKGNoKTtcbiAgICB9XG5cbiAgICBjb2RlUG9pbnRBdChjaCkge1xuICAgICAgICBpZiAoY2gubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tYml0d2lzZVxuICAgICAgICByZXR1cm4gKGNoLmNoYXJDb2RlQXQoMCkgPDwgMTApICsgY2guY2hhckNvZGVBdCgxKSAtIDB4MzVGREMwMDtcbiAgICB9XG5cbiAgICBwZWVrTXVsdGljaGFyKCkge1xuICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICB2YXIgcGVlayA9IHRoaXMucGVlaygpO1xuICAgICAgICBpZiAoIXBlZWspIHtcbiAgICAgICAgICAgIHJldHVybiBjaDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgY3AxID0gY2guY2hhckNvZGVBdCgwKTtcbiAgICAgICAgdmFyIGNwMiA9IHBlZWsuY2hhckNvZGVBdCgwKTtcbiAgICAgICAgaWYgKGNwMSA+PSAweEQ4MDAgJiYgY3AxIDw9IDB4REJGRiAmJiBjcDIgPj0gMHhEQzAwICYmIGNwMiA8PSAweERGRkYpIHtcbiAgICAgICAgICAgIHJldHVybiBjaCArIHBlZWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoO1xuICAgIH1cblxuICAgIGlzRXhwT3BlcmF0b3IoY2gpIHtcbiAgICAgICAgcmV0dXJuIChjaCA9PT0gJy0nIHx8IGNoID09PSAnKycgfHwgdGhpcy5pc051bWJlcihjaCkpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IoZXJyb3IsIHN0YXJ0LCBlbmQpIHtcbiAgICAgICAgZW5kID0gZW5kIHx8IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBjb2xTdHIgPSAodXRpbHMuaXNEZWZpbmVkKHN0YXJ0KSA/ICdzICcgKyBzdGFydCArICctJyArIHRoaXMuaW5kZXggKyAnIFsnICsgdGhpcy50ZXh0LnN1YnN0cmluZyhzdGFydCwgZW5kKSArICddJyA6ICcgJyArIGVuZCk7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTGV4ZXIgRXJyb3I6ICcgKyBlcnJvciArICcgYXQgY29sdW1uJyArIGNvbFN0ciArICcgaW4gZXhwcmVzc2lvbiBbJyArIHRoaXMudGV4dCArICddLicpO1xuICAgIH1cblxuICAgIHJlYWROdW1iZXIoKSB7XG4gICAgICAgIHZhciBudW1iZXIgPSAnJztcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB1dGlscy5sb3dlcmNhc2UodGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KSk7XG4gICAgICAgICAgICBpZiAoY2ggPT09ICcuJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSkge1xuICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlZWtDaCA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ2UnICYmIHRoaXMuaXNFeHBPcGVyYXRvcihwZWVrQ2gpKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgcGVla0NoICYmIHRoaXMuaXNOdW1iZXIocGVla0NoKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bWJlciArPSBjaDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNFeHBPcGVyYXRvcihjaCkgJiZcbiAgICAgICAgICAgICAgICAgICAgKCFwZWVrQ2ggfHwgIXRoaXMuaXNOdW1iZXIocGVla0NoKSkgJiZcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyLmNoYXJBdChudW1iZXIubGVuZ3RoIC0gMSkgPT09ICdlJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgZXhwb25lbnQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBudW1iZXIsXG4gICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIobnVtYmVyKVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkSWRlbnQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gdGhpcy5wZWVrTXVsdGljaGFyKCkubGVuZ3RoO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMucGVla011bHRpY2hhcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzSWRlbnRpZmllckNvbnRpbnVlKGNoKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCArPSBjaC5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLnRleHQuc2xpY2Uoc3RhcnQsIHRoaXMuaW5kZXgpLFxuICAgICAgICAgICAgaWRlbnRpZmllcjogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWFkU3RyaW5nKHF1b3RlKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgdmFyIHN0cmluZyA9ICcnO1xuICAgICAgICB2YXIgcmF3U3RyaW5nID0gcXVvdGU7XG4gICAgICAgIHZhciBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgcmF3U3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgaWYgKGVzY2FwZSkge1xuICAgICAgICAgICAgICAgIGlmIChjaCA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBoZXggPSB0aGlzLnRleHQuc3Vic3RyaW5nKHRoaXMuaW5kZXggKyAxLCB0aGlzLmluZGV4ICsgNSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaGV4Lm1hdGNoKC9bXFxkYS1mXXs0fS9pKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJbnZhbGlkIHVuaWNvZGUgZXNjYXBlIFtcXFxcdScgKyBoZXggKyAnXScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5kZXggKz0gNDtcbiAgICAgICAgICAgICAgICAgICAgc3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocGFyc2VJbnQoaGV4LCAxNikpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZXAgPSBFU0NBUEVbY2hdO1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcgKyAocmVwIHx8IGNoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXNjYXBlID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSAnXFxcXCcpIHtcbiAgICAgICAgICAgICAgICBlc2NhcGUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChjaCA9PT0gcXVvdGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmF3U3RyaW5nLFxuICAgICAgICAgICAgICAgICAgICBjb25zdGFudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIHF1b3RlJywgc3RhcnQpO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIE9QRVJBVE9SUyA9IHt9O1xuXG52YXIgb3BlcmF0b3JUZXh0ID0gJysgLSAqIC8gJSA9PT0gIT09ID09ICE9IDwgPiA8PSA+PSAmJiB8fCAhID0gfCc7XG52YXIgRVNDQVBFID0geyAnbic6ICdcXG4nLCAnZic6ICdcXGYnLCAncic6ICdcXHInLCAndCc6ICdcXHQnLCAndic6ICdcXHYnLCAnXFwnJzogJ1xcJycsICdcIic6ICdcIicgfTtcblxub3BlcmF0b3JUZXh0LnNwbGl0KCcgJykuZm9yRWFjaChmdW5jdGlvbiAob3BlcmF0b3IpIHtcbiAgICBPUEVSQVRPUlNbb3BlcmF0b3JdID0gdHJ1ZTtcbn0pOyIsImltcG9ydCB7XG4gICAgQVNULFxuICAgIEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZSxcbiAgICBCaW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBDYWxsRXhwcmVzc2lvbk5vZGUsXG4gICAgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSxcbiAgICBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSxcbiAgICBJZGVudGlmaWVyTm9kZSxcbiAgICBMaXRlcmFsTm9kZSxcbiAgICBMb2dpY2FsRXhwcmVzc2lvbk5vZGUsXG4gICAgTWVtYmVyRXhwcmVzc2lvbk5vZGUsXG4gICAgT2JqZWN0RXhwcmVzc2lvbk5vZGUsXG4gICAgUHJvZ3JhbU5vZGUsXG4gICAgUHJvcGVydHlOb2RlLFxuICAgIFVuYXJ5RXhwcmVzc2lvbk5vZGUsXG4gICAgQXJyYXlFeHByZXNzaW9uTm9kZVxufSBmcm9tICcuL21vZGVsJztcbmltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgcGFyc2VPcHRpb25zIH0gZnJvbSAnLi9wYXJzZS1vcHRpb25zJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxuZXhwb3J0IGNsYXNzIEV4cFBhcnNlciB7XG4gICAgY29uc3RydWN0b3IobGV4ZXIsIG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5sZXhlciA9IGxleGVyO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHRocm93RXJyb3IobXNnLCB0b2tlbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N5bnRheCBFcnJvcjogVG9rZW4gXFwnJyArIHRva2VuLnRleHQgKyAnXFwnJyArIG1zZyArICcgYXQgY29sdW1uICcgKyAodG9rZW4uaW5kZXggKyAxKSArXG4gICAgICAgICAgICAnIG9mIHRoZSBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10gc3RhcnRpbmcgYXQgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHRva2VuLmluZGV4KSArICddLicpO1xuICAgIH1cblxuICAgIHBhcnNlKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLnByb2dyYW0oKTtcblxuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIGFuIHVuZXhwZWN0ZWQgdG9rZW4nLCB0aGlzLnRva2Vuc1swXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgcHJvZ3JhbSgpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSBuZXcgUHJvZ3JhbU5vZGUoKTtcbiAgICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiAwICYmICF0aGlzLnBlZWsoJ30nLCAnKScsICc7JywgJ10nKSkge1xuICAgICAgICAgICAgICAgIHByb2dyYW0uYXBwZW5kQ2hpbGQodGhpcy5leHByZXNzaW9uU3RhdGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmV4cGVjdCgnOycpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb2dyYW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHByZXNzaW9uU3RhdGVtZW50KCkge1xuICAgICAgICB2YXIgZXhwID0gbmV3IEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlKCk7XG4gICAgICAgIGV4cC5hcHBlbmRDaGlsZCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICByZXR1cm4gZXhwO1xuICAgIH1cblxuICAgIGZpbHRlckNoYWluKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3wnKSkge1xuICAgICAgICAgICAgbGVmdCA9IHRoaXMuZmlsdGVyKGxlZnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGV4cHJlc3Npb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnbm1lbnQoKTtcbiAgICB9XG5cbiAgICBpc0Fzc2lnbmFibGUoYXN0KSB7XG4gICAgICAgIHJldHVybiBhc3QudHlwZSA9PT0gQVNULklkZW50aWZpZXIgfHwgYXN0LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uO1xuICAgIH1cblxuICAgIGFzc2lnbm1lbnQoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLnRlcm5hcnkoKTtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc9JykpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0Fzc2lnbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIGFzc2lnbiBhIHZhbHVlIHRvIGEgbm9uIGwtdmFsdWUnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdWx0ID0gbmV3IEFzc2lnbm1lbnRFeHByZXNzaW9uTm9kZShyZXN1bHQsIHRoaXMuYXNzaWdubWVudCgpLCAnPScpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgdGVybmFyeSgpIHtcbiAgICAgICAgdmFyIHRlc3QgPSB0aGlzLmxvZ2ljYWxPUigpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlO1xuICAgICAgICB2YXIgY29uc2VxdWVudDtcbiAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgIGFsdGVybmF0ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgaWYgKHRoaXMuY29uc3VtZSgnOicpKSB7XG4gICAgICAgICAgICAgICAgY29uc2VxdWVudCA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSh0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0ZXN0O1xuICAgIH1cblxuICAgIGxvZ2ljYWxPUigpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmxvZ2ljYWxBTkQoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCd8fCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnfHwnLCBsZWZ0LCB0aGlzLmxvZ2ljYWxBTkQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbG9naWNhbEFORCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmVxdWFsaXR5KCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnJiYnKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBMb2dpY2FsRXhwcmVzc2lvbk5vZGUoJyYmJywgbGVmdCwgdGhpcy5lcXVhbGl0eSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBlcXVhbGl0eSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnJlbGF0aW9uYWwoKTtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICB3aGlsZSAoKHRva2VuID0gdGhpcy5leHBlY3QoJz09JywgJyE9JywgJz09PScsICchPT0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5yZWxhdGlvbmFsKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHJlbGF0aW9uYWwoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5hZGRpdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPCcsICc+JywgJzw9JywgJz49JykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMuYWRkaXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgYWRkaXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5tdWx0aXBsaWNhdGl2ZSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJykpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IEJpbmFyeUV4cHJlc3Npb25Ob2RlKHRva2VuLnRleHQsIGxlZnQsIHRoaXMubXVsdGlwbGljYXRpdmUoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgbXVsdGlwbGljYXRpdmUoKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy51bmFyeSgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKicsICcvJywgJyUnKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICB1bmFyeSgpIHtcbiAgICAgICAgdmFyIHRva2VuO1xuICAgICAgICBpZiAoKHRva2VuID0gdGhpcy5leHBlY3QoJysnLCAnLScsICchJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVuYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgdGhpcy51bmFyeSgpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByaW1hcnkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaW1hcnkoKSB7XG4gICAgICAgIHZhciBwcmltYXJ5O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJygnKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuZmlsdGVyQ2hhaW4oKTtcbiAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCdbJykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmFycmF5RGVjbGFyYXRpb24oKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmV4cGVjdCgneycpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5vYmplY3QoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMubGl0ZXJhbHMuaGFzT3duUHJvcGVydHkodGhpcy5wZWVrKCkudGV4dCkpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTGl0ZXJhbE5vZGUodGhpcy5vcHRpb25zLmxpdGVyYWxzW3RoaXMuY29uc3VtZSgpLnRleHRdKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ25vdCBhIHByaW1hcnkgZXhwcmVzc2lvbicsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBuZXh0O1xuICAgICAgICB3aGlsZSAodGhpcy5wZWVrKCcoJywgJ1snLCAnLicpIHx8ICh0aGlzLnBlZWsoJz8nKSAmJiB0aGlzLnBlZWtBaGVhZCgxLCAnLicpKSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZXhwZWN0KCc/JykpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5LmFsbG93TnVsbCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG5leHQgPSB0aGlzLmV4cGVjdCgnKCcsICdbJywgJy4nKTtcblxuICAgICAgICAgICAgaWYgKG5leHQudGV4dCA9PT0gJygnKSB7XG4gICAgICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5wYXJzZUFyZ3VtZW50cygpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJyknKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnWycpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuZXhwcmVzc2lvbigpLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobmV4dC50ZXh0ID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IE1lbWJlckV4cHJlc3Npb25Ob2RlKHByaW1hcnksIHRoaXMuaWRlbnRpZmllcigpLCBmYWxzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSU1QT1NTSUJMRScpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmltYXJ5O1xuICAgIH1cblxuICAgIGZpbHRlcihiYXNlRXhwcmVzc2lvbikge1xuICAgICAgICB2YXIgYXJncyA9IFtiYXNlRXhwcmVzc2lvbl0sIGlkZW50aWZpZXJzID0gW3RoaXMuaWRlbnRpZmllcigpXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJy4nKSkge1xuICAgICAgICAgICAgaWRlbnRpZmllcnMucHVzaCh0aGlzLmlkZW50aWZpZXIoKSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwbHVzIG5hbWVzcGFjZVxuICAgICAgICB2YXIgZW50aXJlTmFtZSA9IGlkZW50aWZpZXJzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgICAgICAgfSkuam9pbignLicpO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgQ2FsbEV4cHJlc3Npb25Ob2RlKG5ldyBJZGVudGlmaWVyTm9kZShlbnRpcmVOYW1lKSwgYXJncyk7XG5cbiAgICAgICAgcmVzdWx0LmZpbHRlciA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCc6JykpIHtcbiAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHBhcnNlQXJndW1lbnRzKCkge1xuICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnKScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBhcmdzLnB1c2godGhpcy5maWx0ZXJDaGFpbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcmdzO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXIoKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY29uc3VtZSgpO1xuICAgICAgICBpZiAoIXRva2VuLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgbm90IGEgdmFsaWQgaWRlbnRpZmllcicsIHRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3IElkZW50aWZpZXJOb2RlKHRva2VuLnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0YW50KCkge1xuICAgICAgICAvLyBUT0RPIGNoZWNrIHRoYXQgaXQgaXMgYSBjb25zdGFudFxuICAgICAgICByZXR1cm4gbmV3IExpdGVyYWxOb2RlKHRoaXMuY29uc3VtZSgpLnZhbHVlKTtcbiAgICB9XG5cbiAgICBhcnJheURlY2xhcmF0aW9uKCkge1xuICAgICAgICB2YXIgYXJyID0gbmV3IEFycmF5RXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ10nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnXScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFyci5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb24oKSk7XG4gICAgICAgICAgICB9IHdoaWxlICh0aGlzLmV4cGVjdCgnLCcpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcblxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIG9iamVjdCgpIHtcbiAgICAgICAgdmFyIHByb3BlcnRpZXMgPSBbXSwgcHJvcGVydHk7XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICd9Jykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJ30nKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBTdXBwb3J0IHRyYWlsaW5nIGNvbW1hcyBwZXIgRVM1LjEuXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0eSA9IG5ldyBQcm9wZXJ0eU5vZGUoKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCkuY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5jb25zdGFudCgpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5jb21wdXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkua2V5ID0gdGhpcy5pZGVudGlmaWVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoJzonKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSBwcm9wZXJ0eS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygnWycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnWycpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCddJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpbnZhbGlkIGtleScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvcGVydGllcy5wdXNoKHByb3BlcnR5KTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnfScpO1xuXG4gICAgICAgIHJldHVybiBuZXcgT2JqZWN0RXhwcmVzc2lvbk5vZGUocHJvcGVydGllcyk7XG4gICAgfVxuXG4gICAgY29uc3VtZShlMSkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5leHBlY3QoZTEpO1xuICAgICAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2lzIHVuZXhwZWN0ZWQsIGV4cGVjdGluZyBbJyArIGUxICsgJ10nLCB0aGlzLnBlZWsoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH1cblxuICAgIHBlZWtUb2tlbigpIHtcbiAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmV4cGVjdGVkIGVuZCBvZiBleHByZXNzaW9uOiAnICsgdGhpcy50ZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnNbMF07XG4gICAgfVxuXG4gICAgcGVlayhlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wZWVrQWhlYWQoMCwgZTEsIGUyLCBlMywgZTQpO1xuICAgIH1cblxuICAgIHBlZWtBaGVhZChpLCBlMSwgZTIsIGUzLCBlNCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID4gaSkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy50b2tlbnNbaV07XG4gICAgICAgICAgICB2YXIgdCA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICBpZiAodCA9PT0gZTEgfHwgdCA9PT0gZTIgfHwgdCA9PT0gZTMgfHwgdCA9PT0gZTQgfHxcbiAgICAgICAgICAgICAgICAoIWUxICYmICFlMiAmJiAhZTMgJiYgIWU0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgZXhwZWN0KGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMucGVlayhlMSwgZTIsIGUzLCBlNCk7XG4gICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgdGhpcy50b2tlbnMuc2hpZnQoKTtcbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4iLCJleHBvcnQgKiBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1sZXhlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1wYXJzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYXBpJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuZXhwb3J0ICogZnJvbSAnLi9ldmFsdWF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9hbmFseXNlcic7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXJyYXlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuQXJyYXlFeHByZXNzaW9uKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobGVmdCwgcmlnaHQsIG9wZXJhdG9yKSB7XG4gICAgICAgIHN1cGVyKEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodHlwZSkge1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMgPSBbXTtcbiAgICB9XG5cbiAgICBhcHBlbmRDaGlsZChjaGlsZCkge1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgQVNUID0ge307XG5cbkFTVC5Qcm9ncmFtID0gJ1Byb2dyYW0nO1xuQVNULkV4cHJlc3Npb25TdGF0ZW1lbnQgPSAnRXhwcmVzc2lvblN0YXRlbWVudCc7XG5BU1QuQXNzaWdubWVudEV4cHJlc3Npb24gPSAnQXNzaWdubWVudEV4cHJlc3Npb24nO1xuQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbiA9ICdDb25kaXRpb25hbEV4cHJlc3Npb24nO1xuQVNULkxvZ2ljYWxFeHByZXNzaW9uID0gJ0xvZ2ljYWxFeHByZXNzaW9uJztcbkFTVC5CaW5hcnlFeHByZXNzaW9uID0gJ0JpbmFyeUV4cHJlc3Npb24nO1xuQVNULlVuYXJ5RXhwcmVzc2lvbiA9ICdVbmFyeUV4cHJlc3Npb24nO1xuQVNULkNhbGxFeHByZXNzaW9uID0gJ0NhbGxFeHByZXNzaW9uJztcbkFTVC5NZW1iZXJFeHByZXNzaW9uID0gJ01lbWJlckV4cHJlc3Npb24nO1xuQVNULklkZW50aWZpZXIgPSAnSWRlbnRpZmllcic7XG5BU1QuTGl0ZXJhbCA9ICdMaXRlcmFsJztcbkFTVC5BcnJheUV4cHJlc3Npb24gPSAnQXJyYXlFeHByZXNzaW9uJztcbkFTVC5Qcm9wZXJ0eSA9ICdQcm9wZXJ0eSc7XG5BU1QuT2JqZWN0RXhwcmVzc2lvbiA9ICdPYmplY3RFeHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIE51bGxFeHByZXNzaW9uTm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuJG51bGwgPSB0cnVlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBCaW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuQmluYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBDYWxsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihjYWxsZWUsIGFyZ3MpIHtcbiAgICAgICAgc3VwZXIoQVNULkNhbGxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuYXJncyA9IGFyZ3M7XG4gICAgICAgIHRoaXMuZmlsdGVyID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpIHtcbiAgICAgICAgc3VwZXIoQVNULkNvbmRpdGlvbmFsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMudGVzdCA9IHRlc3Q7XG4gICAgICAgIHRoaXMuYWx0ZXJuYXRlID0gYWx0ZXJuYXRlO1xuICAgICAgICB0aGlzLmNvbnNlcXVlbnQgPSBjb25zZXF1ZW50O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBFeHByZXNzaW9uU3RhdGVtZW50Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuRXhwcmVzc2lvblN0YXRlbWVudCk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIElkZW50aWZpZXJOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICBzdXBlcihBU1QuSWRlbnRpZmllcik7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuYWxsb3dOdWxsID0gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYXN0JztcbmV4cG9ydCAqIGZyb20gJy4vYXN0LW5vZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3NpZ25tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vYmluYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vY2FsbCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbmRpdGlvbmFsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwcmVzc2lvbic7XG5leHBvcnQgKiBmcm9tICcuL2lkZW50aWZpZXInO1xuZXhwb3J0ICogZnJvbSAnLi9saXRlcmFsJztcbmV4cG9ydCAqIGZyb20gICcuL2xvZ2ljYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbWVtYmVyJztcbmV4cG9ydCAqIGZyb20gICcuL29iamVjdCc7XG5leHBvcnQgKiBmcm9tICAnLi9wcm9ncmFtJztcbmV4cG9ydCAqIGZyb20gICcuL3Byb3BlcnR5JztcbmV4cG9ydCAqIGZyb20gICcuL3VuYXJ5JztcbmV4cG9ydCAqIGZyb20gJy4vYXJyYXknOyIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExpdGVyYWxOb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIoQVNULkxpdGVyYWwpO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIExvZ2ljYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBsZWZ0LCByaWdodCkge1xuICAgICAgICBzdXBlcihBU1QuTG9naWNhbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTWVtYmVyRXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvYmplY3QsIHByb3BlcnR5LCBjb21wdXRlZCkge1xuICAgICAgICBzdXBlcihBU1QuTWVtYmVyRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgICAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBjb21wdXRlZDtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgT2JqZWN0RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHN1cGVyKEFTVC5PYmplY3RFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgUHJvZ3JhbU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb2dyYW0pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eU5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoQVNULlByb3BlcnR5KTtcbiAgICAgICAgdGhpcy5raW5kID0gJ2luaXQnO1xuICAgICAgICB0aGlzLmtleSA9IG51bGw7XG4gICAgICAgIHRoaXMudmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNvbXB1dGVkID0gZmFsc2U7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFVuYXJ5RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihvcGVyYXRvciwgYXJnKSB7XG4gICAgICAgIHN1cGVyKEFTVC5VbmFyeUV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByZWZpeCA9IHRydWU7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5hcmcgPSBhcmc7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgcGFyc2VPcHRpb25zID0ge1xuICAgIGlzSWRlbnRpZmllckNvbnRpbnVlOiBmYWxzZSxcbiAgICBpc0lkZW50aWZpZXJTdGFydDogZmFsc2UsXG4gICAgbGl0ZXJhbHM6IHtcbiAgICAgICAgZmFsc2U6IGZhbHNlLFxuICAgICAgICBudWxsOiBudWxsLFxuICAgICAgICB0cnVlOiB0cnVlLFxuICAgICAgICB1bmRlZmluZWQ6IHVuZGVmaW5lZFxuICAgIH1cbn07IiwiZXhwb3J0ICogZnJvbSAnLi91dGlscyc7XG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbCc7XG5leHBvcnQgKiBmcm9tICcuL3JlbmRlcic7XG5leHBvcnQgKiBmcm9tICcuL3ZpZXcnO1xuZXhwb3J0ICogZnJvbSAnLi9kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9kaXJlY3RpdmUnO1xuZXhwb3J0ICogZnJvbSAnLi9jb21wb25lbnQnOyIsImV4cG9ydCBjbGFzcyBEZWxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihoYW5kbGVyLCB0aW1lb3V0KSB7XG4gICAgICAgIHRoaXMuaGFuZGxlciA9IGhhbmRsZXI7XG4gICAgICAgIHRoaXMudGltZW91dCA9IHRpbWVvdXQ7XG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgfVxuXG4gICAgZXhlY3V0ZShzY29wZSkge1xuICAgICAgICBpZih0aGlzLmRlbGF5SWQgIT0gbnVsbCl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRlbGF5SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZGVsYXlJZCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIuY2FsbChzY29wZSk7XG4gICAgICAgIH0sIHRoaXMudGltZW91dCk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYgKHRoaXMuZGVsYXlJZCAhPSBudWxsKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWxheUlkKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3Byb3h5JztcclxuZXhwb3J0ICogZnJvbSAnLi9vYnNlcnZlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgRXZhbHVhdG9yLCBBbmFseXNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQgeyBXYXRjaGVyIH0gZnJvbSAnLi93YXRjaGVyJztcbmltcG9ydCB7IERlbGF5ZXIgfSBmcm9tICcuL2RlbGF5ZXInO1xuXG5jbGFzcyBMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmV4cCA9IGV4cDtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXROZXdWYWx1ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLm5ld1ZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMudmFsdWVDaGFuZ2VkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBzZXRDb2xsZWN0aW9uQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gdmFsdWU7XG4gICAgfVxuXG4gICAgaGFzQ2hhbmdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWx1ZUNoYW5nZWQgfHwgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcbiAgICB9XG5cbiAgICBub3RpZnkoc2NvcGUpIHtcbiAgICAgICAgdmFyIG9sZFZhbHVlID0gdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5uZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkID0gdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZDtcblxuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5uZXdWYWx1ZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlLCB7XG4gICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWUsXG4gICAgICAgICAgICBjb2xsZWN0aW9uQ2hhbmdlZDogY29sbGVjdGlvbkNoYW5nZWRcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgT2JzZXJ2ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlKSB7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5hY2Nlc3NvcnMgPSB7fTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy53YXRjaGVyID0gbmV3IFdhdGNoZXIoKTtcbiAgICAgICAgdGhpcy5hbmFseXNlciA9IG5ldyBBbmFseXNlcihzY29wZS4kcGFyc2VyKTtcbiAgICAgICAgdGhpcy5kZWxheWVyID0gbmV3IERlbGF5ZXIodGhpcy5ub3RpZnksIDE2KTtcbiAgICAgICAgdGhpcy5ldmFsdWF0b3IgPSAgbmV3IEV2YWx1YXRvcih0aGlzLnNjb3BlLCB7XG4gICAgICAgICAgICBhbGxvd051bGw6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSBuZXcgTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgcmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5saXN0ZW5lcnMuaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5vdGlmeSgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuZm9yRWFjaChsaXN0ZW5lciA9PiB7XG4gICAgICAgICAgICBpZihsaXN0ZW5lci5oYXNDaGFuZ2UoKSkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyLm5vdGlmeSh0aGlzLnNjb3BlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbm90aWZ5Q2hhbmdlKGxpc3RlbmVyLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldE5ld1ZhbHVlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnNldENvbGxlY3Rpb25DaGFuZ2VkKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGVsYXllci5leGVjdXRlKHRoaXMpO1xuICAgIH1cblxuICAgIGdldEFjY2Vzc29yKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gdGhpcy5hY2Nlc3NvcnNbZXhwXTtcblxuICAgICAgICBpZighcmVzdWx0KSB7XG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VyLmFuYWx5c2UoZXhwKTtcbiAgICAgICAgICAgIHRoaXMuYWNjZXNzb3JzW2V4cF0gPSByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdXRpbHMuY29weSh0cnVlLCByZXN1bHQpO1xuICAgIH1cblxuICAgIHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgdmFyIGFjY2Vzc29yID0gdGhpcy5nZXRBY2Nlc3NvcihleHApO1xuICAgICAgICB2YXIgZXZhbHVhdG9yID0gIHRoaXMuZXZhbHVhdG9yO1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmNyZWF0ZUxpc3RlbmVyKGV4cCwgaGFuZGxlciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XG5cbiAgICAgICAgZnVuY3Rpb24gdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3NvcnMpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGl0ZW0udW53YXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycywgdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoIXV0aWxzLmlzT2JqZWN0KHRhcmdldCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2goYWNjZXNzb3JzLCBmdW5jdGlvbiAoaXRlbSwga2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlcyA9IHRhcmdldDtcblxuICAgICAgICAgICAgICAgIGlmIChpdGVtLmV4cCkge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBldmFsdWF0b3IuZXZhbHVhdGUoa2V5LCBsb2NhbHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmKHZhbHVlcyA9PT0gc2VsZi5zY29wZSAmJiBsb2NhbHMgJiYgbG9jYWxzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gbG9jYWxzO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGl0ZW0udW53YXRjaCA9IHNlbGYud2F0Y2hlci53YXRjaCh2YWx1ZXMsIGtleSwgZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgYXJncy5kYXRhLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgd2F0Y2hBY2Nlc3NvcnMoaXRlbS5jaGlsZHJlbiwgdmFsdWVzW2tleV0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICB3YXRjaEFjY2Vzc29ycyhhY2Nlc3NvciwgdGhpcy5zY29wZSk7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3IpO1xuICAgICAgICAgICAgc2VsZi5yZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcik7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgd2F0Y2hDb2xsZWN0aW9uKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgICAgIGV2YWx1YXRvciA9ICB0aGlzLmV2YWx1YXRvcjtcbiAgICAgICAgdmFyIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgdmFyIHVud2F0Y2hFeHAgPSB0aGlzLndhdGNoKGV4cCwgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHVud2F0Y2hQcm9wcyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgPSB3YXRjaFByb3BzKCk7XG4gICAgICAgICAgICBoYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sIGxvY2Fscyk7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcblxuICAgICAgICBmdW5jdGlvbiB3YXRjaFByb3BzKCkge1xuICAgICAgICAgICAgdmFyIGNvbGxlY3Rpb24gPSBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpO1xuXG4gICAgICAgICAgICBpZiAodXRpbHMuaXNPYmplY3QoY29sbGVjdGlvbikgfHwgdXRpbHMuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLndhdGNoZXIud2F0Y2goY29sbGVjdGlvbiwgJyonLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm90aWZ5Q2hhbmdlKGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB1bndhdGNoRXhwLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB1bndhdGNoUHJvcHMgJiYgdW53YXRjaFByb3BzLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmRlbGF5ZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLndhdGNoZXIuZGVzdHJveSgpO1xuICAgICAgICB0aGlzLnNjb3BlID0gbnVsbDtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5cbnZhciBpc1Byb3h5U3ltYm9sID0gU3ltYm9sKCdfX2lzUHJveHknKSxcbiAgICB0YXJnZXRTeW1ib2wgPSBTeW1ib2woJ19fdGFyZ2V0Jyk7XG5cbnZhciBoYW5kbGVyID0ge1xuICAgIGdldDogZ2V0UHJveHksXG4gICAgc2V0OiBzZXRQcm94eVxufTtcblxuLy8gZXh0ZW5kcyBvYmplY3QgcHJvdG90eXBlLCBhZGQgZnVuY3Rpb24gdG9Qcm94eVxuT2JqZWN0LnByb3RvdHlwZS50b1Byb3h5ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBpc1Byb3h5KHRoaXMpID8gdGhpcyA6IG5ldyBQcm94eSh0aGlzLCBoYW5kbGVyKTtcbn07XG5cbmZ1bmN0aW9uIGlzUHJveHkocHJveHkpIHtcbiAgICByZXR1cm4gdXRpbHMuaXNPYmplY3QocHJveHkpICYmIHByb3h5W2lzUHJveHlTeW1ib2xdO1xufVxuXG5mdW5jdGlvbiBnZXRUYXJnZXQocHJveHkpIHtcbiAgICByZXR1cm4gaXNQcm94eShwcm94eSkgPyBwcm94eVt0YXJnZXRTeW1ib2xdIDogcHJveHk7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm94eSh2YWx1ZSkge1xuICAgIGlmICh1dGlscy5pc09iamVjdCh2YWx1ZSkgJiYgIWlzUHJveHkodmFsdWUpKSB7XG4gICAgICAgIHV0aWxzLmZvckVhY2godmFsdWUsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgIHZhbHVlW2tleV0gPSBtYWtlUHJveHkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIGdldFByb3h5KHRhcmdldCwga2V5KSB7XG4gICAgaWYgKGtleSA9PT0gaXNQcm94eVN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5ID09PSB0YXJnZXRTeW1ib2wpIHtcbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0W2tleV07XG59XG5cbmZ1bmN0aW9uIHNldFByb3h5KHRhcmdldCwga2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGRWYWx1ZSA9IGdldFRhcmdldCh0YXJnZXRba2V5XSksXG4gICAgICAgIG5ld1ZhbHVlID0gZ2V0VGFyZ2V0KHZhbHVlKTtcblxuICAgIGlmIChvbGRWYWx1ZSAhPT0gbmV3VmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSBtYWtlUHJveHkodmFsdWUpO1xuICAgICAgICBldmVudHMucHJvcGVydHlDaGFuZ2VkLmZpcmUoe1xuICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZTogb2xkVmFsdWUsXG4gICAgICAgICAgICAgICAgbmV3VmFsdWU6IG5ld1ZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0YXJnZXRba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbn1cblxuZXhwb3J0IHtcbiAgICBpc1Byb3h5LFxuICAgIGdldFRhcmdldCxcbiAgICBoYW5kbGVyXG59IiwiaW1wb3J0IHsgZXZlbnRzIH0gZnJvbSAnLi4vY29yZSc7XG5pbXBvcnQgeyBnZXRUYXJnZXQgfSBmcm9tICcuL3Byb3h5JztcblxuY2xhc3MgT2JqZWN0TGlzdGVuZXIge1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldDtcbiAgICAgICAgdGhpcy5rZXlzID0ge307XG4gICAgfVxuXG4gICAgZ2V0SGFuZGxlcnMoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5rZXlzW2tleV0pIHtcbiAgICAgICAgICAgIHRoaXMua2V5c1trZXldID0gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5rZXlzW2tleV07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcbiAgICAgICAgaGFuZGxlcnMucHVzaChoYW5kbGVyKTtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyS2V5KGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG5cbiAgICAgICAgaWYgKGhhbmRsZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgaGFuZGxlcnMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGhhbmRsZXJzLmluZGV4T2YoaGFuZGxlcik7XG5cbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZmlyZUtleShrZXksIGFyZ3MsIHNlbGYpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5mb3JFYWNoKGhhbmRsZXIgPT4ge1xuICAgICAgICAgICAgaGFuZGxlci5jYWxsKHNlbGYsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBXYXRjaGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgdGhpcy5vZmZQcm9wZXJ0eUNoYW5nZWQgPSBldmVudHMucHJvcGVydHlDaGFuZ2VkLm9uKGUgPT4gdGhpcy5oYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZS5kYXRhKSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUHJvcGVydHlDaGFuZ2VkKGRhdGEpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcih0aGlzLmxpc3RlbmVycywgZGF0YS50YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciAhPSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci5maXJlS2V5KGRhdGEua2V5LCBkYXRhKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoJyonLCBkYXRhKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGdldExpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciwgZmlsdGVycyA9IGxpc3RlbmVycy5maWx0ZXIoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS50YXJnZXQgPT09IHRhcmdldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGZpbHRlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBmaWx0ZXJzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBPYmplY3RMaXN0ZW5lcih0YXJnZXQpO1xuICAgICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICBnZXRPckNyZWF0ZUxpc3RlbmVyKGxpc3RlbmVycywgdGFyZ2V0KSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuXG4gICAgICAgIGlmIChsaXN0ZW5lciA9PSBudWxsKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIHdhdGNoKHRhcmdldCwga2V5LCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRPckNyZWF0ZUxpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBnZXRUYXJnZXQodGFyZ2V0KSk7XG5cbiAgICAgICAgbGlzdGVuZXIucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lci51bnJlZ2lzdGVyS2V5KGtleSwgYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCgpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFeHByZXNzaW9uIH0gZnJvbSAnLi9leHByZXNzaW9uJztcblxuZXhwb3J0IGNsYXNzIEJpbmRpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlLCB0ZXh0LCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLmxvY2FscyA9IGxvY2FscztcbiAgICAgICAgLy8gaXMgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmlzRXhwID0gZmFsc2U7XG4gICAgICAgIC8vIGlmIHRydWUsIGJpbmRpbmcgdGV4dCBpcyBhIGxvZ2ljYWwgZXhwcmVzc2lvblxuICAgICAgICB0aGlzLmxvZ2ljYWwgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuYXNzaWdubWVudCA9IGZhbHNlO1xuICAgICAgICAvLyBoYW5kbGVyIHRvIHVwZGF0ZSB2aWV3IGZyb20gbW9kZWwgdmFsdWVcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMub2xkVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zZWdtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zID0gW107XG4gICAgfVxuXG4gICAgY3JlYXRlRXhwcmVzc2lvbih0ZXh0KSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvbih0ZXh0KTtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5wdXNoKGV4cCk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgY29tcGlsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMubG9naWNhbCB8fCB0aGlzLmFzc2lnbm1lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuaXNFeHAgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRXhwcmVzc2lvbih0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSAve3soW159XSopfX0vZztcbiAgICAgICAgICAgIHZhciBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICAgICAgICAgIHZhciBzZWdtZW50LCBtYXRjaCA9IHBhdHRlcm4uZXhlYyh0aGlzLnRleHQpO1xuXG4gICAgICAgICAgICB3aGlsZSAobWF0Y2ggIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaC5pbmRleCA+IGxhc3RJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgsIG1hdGNoLmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHNlZ21lbnQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaCh0aGlzLmNyZWF0ZUV4cHJlc3Npb24obWF0Y2hbMV0pKTtcblxuICAgICAgICAgICAgICAgIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgICAgIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnRleHQubGVuZ3RoID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgc2VnbWVudCA9IHRoaXMudGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rKCkge1xuICAgICAgICBpZiAodGhpcy5hc3NpZ25tZW50IHx8IHRoaXMubG9naWNhbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5kZXRlY3QoKTtcblxuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC53YXRjaCh0aGlzLnNjb3BlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdGNoKCk7XG4gICAgICAgICAgICB9LCB0aGlzLmxvY2Fscyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGRldGVjdCgpIHtcbiAgICAgICAgdmFyIG5ld1ZhbHVlID0gdGhpcy5jb21wdXRlKCk7XG5cbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLm9sZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUobG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHByZXNzaW9uc1swXS5jb21wdXRlKHRoaXMuc2NvcGUsIGxvY2Fscyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5zZWdtZW50cy5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xuICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGN1cikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGl0IGlzIGEgZXhwcmVzc2lvblxuICAgICAgICAgICAgcmV0dXJuIHByZXYgKyAoY3VyLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKSB8fCAnJyk7XG4gICAgICAgIH0sICcnKTtcbiAgICB9XG5cbiAgICAvLyBzZXQgdmFsdWVcbiAgICBhc3NpZ24odmFsdWUsIGxvY2Fscykge1xuICAgICAgICBsb2NhbHMgPSB1dGlscy5tZXJnZSh0aGlzLmxvY2FscywgbG9jYWxzKTtcblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5leHByZXNzaW9uc1swXS5hc3NpZ24odGhpcy5zY29wZSwgdmFsdWUsIGxvY2Fscyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodGhpcy50ZXh0ICsgJyBpcyBub3QgdmFsaWQgZXhwcmVzc2lvbicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gYXV0b21hdGlvbjtcbiAgICB9XG5cbiAgICB1bnJlZ2lzdGVyQXV0b21hdGlvbihhdXRvbWF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLmF1dG9tYXRpb24gPT09IGF1dG9tYXRpb24pIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtb2RpZnkgdmlldyBhY2NvcmRpbmcgdG8gbW9kZWxcbiAgICBwYXRjaCgpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlZCAmJiB0aGlzLmF1dG9tYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmF1dG9tYXRpb24uY2FsbCh0aGlzLCB0aGlzLnZhbHVlLCB0aGlzLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kZXZhbChleHAsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5leHByZXNzaW9ucy5mb3JFYWNoKGV4cCA9PiB7XG4gICAgICAgICAgICBleHAuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIEV4cHJlc3Npb24ge1xuICAgIGNvbnN0cnVjdG9yKHRleHQpIHtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy51bndhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oYXNUcmFuc2xhdGlvbiA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGdldCB2YWx1ZVxuICAgIGNvbXB1dGUoc2NvcGUsIGxvY2Fscykge1xuICAgICAgICByZXR1cm4gc2NvcGUuJGV2YWwodGhpcy50ZXh0LCBsb2NhbHMpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbihzY29wZSwgdmFsdWUsIGxvY2Fscykge1xuICAgICAgICBzY29wZS4kYXNzaWduKHRoaXMudGV4dCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgd2F0Y2goc2NvcGUsIGhhbmRsZXIsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBzY29wZS4kd2F0Y2godGhpcy50ZXh0LCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIGlmKHRoaXMudW53YXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnVud2F0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmRpbmcnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyZXInOyIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi9kb20nO1xuaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCwgaXNWRWxtIH0gZnJvbSAnLi4vdHBsJztcbmltcG9ydCB7IExvY2FsLCBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tICcuL2JpbmRpbmcnO1xuaW1wb3J0IHsgTV9DTVBfQ0xBU1MgfSBmcm9tICcuLi9jc3MnO1xuXG4vLyBXaW5kb3cgRXZlbnRzXG4vLyBjYXNlICdvbi1sb2FkJzpcbi8vIGNhc2UgJ29uLXVubG9hZCc6XG4vLyBGb3JtIEVsZW1lbnQgRXZlbnRzXG4vLyBjYXNlICdvbi1jaGFuZ2UnOlxuLy8gY2FzZSAnb24tc3VibWl0Jzpcbi8vIGNhc2UgJ29uLXJlc2V0Jzpcbi8vIGNhc2UgJ29uLXNlbGVjdCc6XG4vLyBjYXNlICdvbi1ibHVyJzpcbi8vIGNhc2UgJ29uLWZvY3VzJzpcbi8vIEltYWdlIEV2ZW50c1xuLy8gY2FzZSAnb24tYWJvcnQnOlxuLy8gS2V5Ym9hcmQgRXZlbnRzXG4vLyBjYXNlICdvbi1rZXlkb3duJzpcbi8vIGNhc2UgJ29uLWtleXByZXNzJzpcbi8vIGNhc2UgJ29uLWtleXVwJzpcbi8vIE1vdXNlIEV2ZW50c1xuLy8gY2FzZSAnb24tY2xpY2snOlxuLy8gY2FzZSAnb24tZGJsY2xpY2snOlxuLy8gY2FzZSAnb24tbW91c2Vkb3duJzpcbi8vIGNhc2UgJ29uLW1vdXNlbW92ZSc6XG4vLyBjYXNlICdvbi1tb3VzZW91dCc6XG4vLyBjYXNlICdvbi1tb3VzZW92ZXInOlxuLy8gY2FzZSAnb24tbW91c2V1cCc6XG52YXIgZXZlbnRUZXh0ID0gJ2xvYWQgdW5sb2FkIGNoYW5nZSBzdWJtaXQgcmVzZXQgc2VsZWN0IGJsdXIgZm9jdXMgYWJvcnQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjbGljayBkYmxjbGljayBtb3VzZWRvd24gbW91c2Vtb3ZlIG1vdXNlb3V0IG1vdXNlb3ZlciBtb3VzZXVwJztcbnZhciBkb21FdmVudHMgPSBldmVudFRleHQuc3BsaXQoJyAnKTtcblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgICBnZXQgaW5qZWN0b3IoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRpbmplY3RvcjtcbiAgICB9XG5cbiAgICBnZXQgbnNBbGlhcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGRhdGEuYWxpYXM7XG4gICAgfVxuXG4gICAgZ2V0IHZpZXcoKSB7XG4gICAgICAgIHZhciB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB0aGlzLmVsbXMuZm9yRWFjaChlbG0gPT4gdmlldy5hcHBlbmRDaGlsZChlbG0pKTtcbiAgICAgICAgcmV0dXJuIHZpZXc7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRlbXBsYXRlLCBsb2NhbHMpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLnRlbXBsYXRlID0gdGVtcGxhdGU7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICB0aGlzLmVsbXMgPSBbXTtcbiAgICAgICAgdGhpcy52bm9kZXMgPSBbXTtcbiAgICAgICAgdGhpcy50eXBlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50czoge30sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiB7fVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVudGl0eSA9IHtcbiAgICAgICAgICAgIGJpbmRpbmdzOiBbXSxcbiAgICAgICAgICAgIGNvbXBvbmVudHM6IFtdLFxuICAgICAgICAgICAgZGlyZWN0aXZlczogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5wYXJzZXIgPSBzY29wZS4kcGFyc2VyO1xuICAgIH1cblxuICAgIG5ld0JpbmRpbmcodGV4dCkge1xuICAgICAgICB2YXIgYmluZGluZyA9IG5ldyBCaW5kaW5nKHRoaXMuc2NvcGUsIHRleHQsIHRoaXMubG9jYWxzKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuYmluZGluZ3MucHVzaChiaW5kaW5nKTtcbiAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgfVxuXG4gICAgbmV3Q29tcG9uZW50KGNscykge1xuICAgICAgICB2YXIgY2hpbGQgPSB0aGlzLmluamVjdG9yLmNyZWF0ZUNvbXBvbmVudChjbHMpO1xuXG4gICAgICAgIHRoaXMuc2NvcGUuJGFwcGVuZENoaWxkKGNoaWxkKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuY29tcG9uZW50cy5wdXNoKGNoaWxkKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgbmV3RGlyZWN0aXZlKGNscykge1xuICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5jcmVhdGVEaXJlY3RpdmUoY2xzKTtcblxuICAgICAgICBkaXJlY3RpdmUuJCRzY29wZSA9IHRoaXMuc2NvcGU7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICByZWNvZ25pemVDb21wb25lbnQodmVsbSkge1xuICAgICAgICB2YXIgaWRlbnRpZmllciwgY29tcG9uZW50LFxuICAgICAgICAgICAgbmFtZSA9IHZlbG0ubm9kZU5hbWUsXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuY29tcG9uZW50cztcblxuICAgICAgICBpZiAoYnVmZmVyW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IGJ1ZmZlcltuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmluamVjdG9yLnBhcnNlRnVsbE5hbWUobmFtZSwgdGhpcy5uc0FsaWFzKTtcbiAgICAgICAgICAgIGNvbXBvbmVudCA9IHRoaXMuaW5qZWN0b3IuZ2V0Q29tcG9uZW50KGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcbiAgICAgICAgICAgIGJ1ZmZlcltuYW1lXSA9IGNvbXBvbmVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZlbG0ubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG5cbiAgICByZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpIHtcbiAgICAgICAgdmFyIGlkZW50aWZpZXIsIGRpcmVjdGl2ZSxcbiAgICAgICAgICAgIG5hbWUgPSB2YXR0ci5ub2RlRGF0YS5uYW1lLFxuICAgICAgICAgICAgYnVmZmVyID0gdGhpcy50eXBlLmRpcmVjdGl2ZXM7XG5cbiAgICAgICAgaWYoYnVmZmVyW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IGJ1ZmZlcltuYW1lXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlkZW50aWZpZXIgPSB0aGlzLmluamVjdG9yLnBhcnNlRnVsbE5hbWUobmFtZSwgdGhpcy5uc0FsaWFzKTtcbiAgICAgICAgICAgIGRpcmVjdGl2ZSA9IHRoaXMuaW5qZWN0b3IuZ2V0RGlyZWN0aXZlKGlkZW50aWZpZXIua2V5LCBpZGVudGlmaWVyLm5zKTtcbiAgICAgICAgICAgIGJ1ZmZlcltuYW1lXSA9IGRpcmVjdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHZhdHRyLm5vZGVEYXRhLmlkZW50aWZpZXIgPSBpZGVudGlmaWVyO1xuXG4gICAgICAgIHJldHVybiBkaXJlY3RpdmU7XG4gICAgfVxuXG4gICAgYmluZFRyYW5zbGF0ZUNoYW5nZWQoKSB7XG4gICAgICAgIHZhciBiaW5kaW5ncyA9IHRoaXMuZW50aXR5LmJpbmRpbmdzO1xuXG4gICAgICAgIGlmKCFiaW5kaW5ncy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSB0ZXh0IHdoaWxlIHRyYW5zbGF0ZSBjaGFuZ2VkXG4gICAgICAgIHRoaXMudW5iaW5kVHJhbnNsYXRlQ2hhbmdlZCA9IGV2ZW50cy50cmFuc2xhdGVDaGFuZ2VkLm9uKCgpID0+IHtcbiAgICAgICAgICAgIGJpbmRpbmdzLmZvckVhY2goYmluZGluZyA9PiB7XG4gICAgICAgICAgICAgICAgYmluZGluZy5kZXRlY3QoKTtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnBhdGNoKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBtdXN0IHNldCBhIHJvb3QgZWxlbWVudCBmb3IgZGlyZWN0aXZlIGxpZmUgY3ljbGUgXCJhZnRlckxpbmtcIiBob29wc1xuICAgICAgICB2YXIgdmlldyA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcblxuICAgICAgICB0aGlzLnZub2RlcyA9IHRoaXMucGFyc2VyLnBhcnNlVGVtcGxhdGUodGhpcy50ZW1wbGF0ZSk7XG5cbiAgICAgICAgdGhpcy5jb21waWxlTm9kZXModGhpcy52bm9kZXMpO1xuXG4gICAgICAgIC8vIHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMuZm9yRWFjaChkaXJlY3RpdmUgPT4gZGlyZWN0aXZlLiRwcmVsaW5rKCkpO1xuXG4gICAgICAgIHRoaXMubGlua05vZGVzKHRoaXMudm5vZGVzKS5mb3JFYWNoKGVsbSA9PiB2aWV3LmFwcGVuZENoaWxkKGVsbSkpO1xuXG4gICAgICAgIC8vIGNhbGwgZGlyZWN0aXZlIGxpZmUgY3ljbGUgaG9vcHNcbiAgICAgICAgdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHBvc3RsaW5rKCkpO1xuXG4gICAgICAgIC8vIGNhY2hlIHRoZSBnZW5lcmF0ZWQgZWxlbWVudHNcbiAgICAgICAgZG9tLmdldENoaWxkcmVuT2ZFbGVtZW50KHZpZXcpLmZvckVhY2goZWxtID0+IHRoaXMuZWxtcy5wdXNoKGVsbSkpO1xuXG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpKTtcblxuICAgICAgICBlbG1EYXRhLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGVsbURhdGEuc2xvdHMgPSB0aGlzLnNlZWtTbG90KHZlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHZhdHRyLm5vZGVOYW1lLCBhdHRyVmFsdWUgPSB2YXR0ci5ub2RlVmFsdWUsXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLCBiaW5kaW5nO1xuXG4gICAgICAgIGlmKGF0dHJWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIGF0dHJEYXRhLm5hbWUpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5sb2dpY2FsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5yZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdGhpcy5uZXdEaXJlY3RpdmUoZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuXG4gICAgICAgICAgICAgICAgaWYoYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuYXNzaWdubWVudCA9IGF0dHJEYXRhLmRpcmVjdGl2ZS4kYXNzaWdubWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ckRhdGEubGlua2VyID0gYXR0ckRhdGEuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIGF0dHJEYXRhLm5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGF0dHJEYXRhLmlzRXZlbnQgfHwgYXR0ckRhdGEuZGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLm5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkoYXR0ckRhdGEubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kc2V0UHJvcGVydHkoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5saW5rZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyLiRsaW5rKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLm5ld0NvbXBvbmVudChlbG1EYXRhLmNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh2ZWxtLmVsbSwgTV9DTVBfQ0xBU1MpO1xuXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHZlbG0uZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgdmVsbSA9IHZhdHRyLnZlbG0sXG4gICAgICAgICAgICBlbG0gPSB2ZWxtLmVsbSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsXG4gICAgICAgICAgICBiaW5kaW5nID0gYXR0ckRhdGEuYmluZGluZztcblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuY29tcG9uZW50LiRiaW5kKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGJpbmRpbmcgY2hhbmdlIGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcGF0Y2hcbiAgICAgICAgaWYoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbigobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBhdHRyRGF0YS5kaXJlY3RpdmUuJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIHNlZWtTbG90KHZlbG0pIHtcbiAgICAgICAgdmFyIHNsb3RzID0ge307XG5cbiAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYoaXNWRWxtKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90ID0gY2hpbGQuZ2V0QXR0cignc2xvdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90c1tzbG90Lm5vZGVWYWx1ZV0gPSBjaGlsZC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICBzbG90cztcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZFRyYW5zbGF0ZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuYmluZGluZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy52bm9kZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcblxuICAgICAgICB0aGlzLmVudGl0eS5jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5lbnRpdHkuYmluZGluZ3MubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy52bm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkNtbnQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5ub2RlTmFtZSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgVkVsbSh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgbm9kZS52YXR0cnMgPSB0aGlzLnZhdHRycy5tYXAoZnVuY3Rpb24gKHZhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHZhdHRyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgY29weS52ZWxtID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIG5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTJcbn1cblxuLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub25DbG9uZU5vZGUoZGVlcCk7XG5cbiAgICAgICAgaWYoZGVlcCkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuY2xvbmVOb2RlKGRlZXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUudGV4dCwgJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlRleHQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5pbXBvcnQgeyBub2RlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5mdW5jdGlvbiBpc1ZFbG0odm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVkF0dHIodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gaXNWVGV4dCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUudGV4dDtcbn1cblxuZnVuY3Rpb24gaXNWQ29tbWVudCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuY29tbWVudDtcbn1cblxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCwgaXNWRWxtLCBpc1ZBdHRyLCBpc1ZUZXh0LCBpc1ZDb21tZW50IH07IiwiaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCB9IGZyb20gJy4vdHBsLWFwaSdcblxuZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdmNtbnQubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbiAgICB9XG5cbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0ZXh0XG4gICAgcmVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGFnXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQge1xuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXG59IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xuXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgZG9jdHlwZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcbiAgICB9XG5cbiAgICBlbGVtZW50KHApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XG4gICAgICAgIHZhciBlbGVzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZXM7XG4gICAgfVxuXG4gICAgYXR0cnMocCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgY3VycmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbn0iLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24sIGlnbm9yZU93bikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW2luZGV4XSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbcF0sIHApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xuXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIGRlZXAgPSBvYmo7XG4gICAgICAgIG9iakluZGV4Kys7XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgbmV3QXJyID0gW107XG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGRlZXAsIGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xuXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc01hcChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xuICAgIHZhciBzYW1lID0gKG9iajEgPT09IG9iajIpO1xuXG4gICAgaWYgKCFzYW1lKSB7XG4gICAgICAgIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltpbmRleF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1lO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc09iamVjdCh2YWx1ZSkgfHwgIXNvbWUodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG5cbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCkgKyBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcbn1cblxuZnVuY3Rpb24gam9pbihzZXBhcmF0b3IsIGFycikge1xuICAgIHZhciByZXN1bHQgPSAnJywgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXN1bHQgKz0gaXRlbTtcblxuICAgICAgICBpZiAoaW5kZXggKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc2VwYXJhdG9yO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQge1xuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzU2FtZSxcbiAgICBpc0VtcHR5LFxuICAgIGlzRm9ybURhdGEsXG4gICAgZGVidWcsXG4gICAgY29udGFpbnMsXG4gICAgY29udGFpbnNTdHIsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgdG9OdW1iZXIsXG4gICAgcmVtb3ZlLFxuICAgIGZvcm1hdCxcbiAgICBlc2NhcGVIdG1sLFxuICAgIGpvaW5cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IE9ic2VydmVyLCBoYW5kbGVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJCRyZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuJGluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgdGhpcy4kcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgIHRoaXMuJGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcyk7XG4gICAgdGhpcy5zbG90cyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAkc2V0U2xvdChzbG90cykge1xuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XG4gICAgfVxuXG4gICAgJHNldFN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZShwcm9wcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgICRnZXRGaWx0ZXIoZnVsbE5hbWUpIHtcbiAgICAgICAgdmFyIGlkZW50aWZpZXIgPSB0aGlzLiRpbmplY3Rvci5wYXJzZUZ1bGxOYW1lKGZ1bGxOYW1lLCB0aGlzLiRkYXRhLmFsaWFzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGluamVjdG9yLmNyZWF0ZUZpbHRlcihpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XG4gICAgfVxuXG4gICAgJGhhc1Byb3BlcnR5KGtleSkge1xuICAgICAgICAvLyByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGdldFByb3BlcnR5KGtleSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHRydWUpO1xuICAgIH1cblxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRldmFsKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmFsdWF0b3IuYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGRhdGE7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy4kJHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy4kJHJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHJlbmRlcmVyO1xuICAgIH1cblxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudDtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLiQkcmVuZGVyZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50IGNvbXBvbmVudCBpcyBub3QgcmVuZGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kJHJlbmRlcmVyLnZpZXcpO1xuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgJGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZC4kJHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkcmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgaWYodGhpcy4kJHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50LiRyZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1fSElERV9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG4gICAgLy8gYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudFxuICAgIHRoaXMuJGFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLiRwbGFjZWhvbGRlciA9IG51bGw7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAka2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLmtleTtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIubm9kZURhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcblxuICAgICAgICBpZih0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uJGtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGg/IHJlc3VsdFswXTogbnVsbDtcbiAgICB9XG5cbiAgICAkc2Vla0RpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkc2Vla1VwRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtLnBhcmVudE5vZGU7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoeWVzKSB7XG4gICAgICAgIGlmKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kZWxlbWVudCwgdGhpcy4kcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJHBsYWNlaG9sZGVyLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoaWRlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHllcykge1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRyZW5kZXIodGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy4kc2NvcGUsIHRlbXBsYXRlLCBsb2NhbHMpO1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZW5kZXJlcjtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBwYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGNvbXBvbmVudENsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZGlyZWN0aXZlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBmaWx0ZXJDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBzZXJ2aWNlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZpZXctYXBpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuXG4vLyBtZXRhZGF0YSBleGFtcGxlXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLnNlcnZpY2VTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIGdldENsYXNzQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG5cbiAgICBnZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlSWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIocm9sZUlkLCBrZXksIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gY29udGFpbmVyW2tleV0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyW2tleV0ucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIGhhcyhyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGFzQ29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzU2VydmljZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldChyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmNvbXBvbmVudCwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5maWx0ZXIsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5zZXJ2aWNlLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzcyBjb25zdHJ1Y3RvciBmb3Iga2V5ICcgKyBrZXlPckNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGlyZWN0aXZlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLmZpbHRlcik7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleU9yQ29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubm9uU2hhcmVkKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHBhcnNlRnVsbE5hbWUobmFtZSwgYWxpYXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtuczogJycsIGtleTogJyd9LFxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0LmtleSA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQua2V5ID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICByZXN1bHQubnMgPSBzZWdtZW50cy5qb2luKCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNvbWUoYWxpYXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUsIGZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG9ydE5hbWUgPT09IHJlc3VsdC5ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5zID0gZnVsbE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEsIGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZXJ2aWNlRnVsbE5hbWUsIGhhc0xvb3BEZXBlbmRlbmN5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYoY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBzZXJ2aWNlIGluc3RhbmNlIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICAgIHNlcnZpY2VGdWxsTmFtZSA9IHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG1ldGFkYXRhLm5hbWVzcGFjZSwgbWV0YWRhdGEua2V5KTtcbiAgICAgICAgICAgIGhhc0xvb3BEZXBlbmRlbmN5ID0gdGhpcy5zZXJ2aWNlU3RhY2suaW5kZXhPZihzZXJ2aWNlRnVsbE5hbWUpID09PSAtMTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucHVzaChzZXJ2aWNlRnVsbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaGFzTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBzZXJ2aWNlIGRlcGVuZGVuY3kgc3RhY2tcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIC8vIG9jY3VycyBsb29wIGRlcGVuZGVuY3lcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb29wIGRlcGVuZGVuY3k6IFwiICsgdGhpcy5zZXJ2aWNlU3RhY2suam9pbignLT4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhZGF0YS5pbmplY3QsIGZ1bmN0aW9uIChzZXJ2aWNlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGlmaWVyID0gc2VsZi5wYXJzZUZ1bGxOYW1lKHNlcnZpY2UsIG1ldGFkYXRhLmFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW1zW2V4cF07XHJcblxyXG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xyXG4gICAgICAgICAgICBwcm9ncmFtID0gcGFyc2VFeHAoZXhwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtc1tleHBdID0gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlVGVtcGxhdGUodHBsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVHBsKHRwbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHJvbGVzID0ge1xuICAgIGZpbHRlcjogMCxcbiAgICBzZXJ2aWNlOiAxLFxuICAgIGNvbXBvbmVudDogMixcbiAgICBkaXJlY3RpdmU6IDNcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBSb290ID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnLCB7XG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgIH0pO1xuICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcbiAgICBcbiAgICBkb20uY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbGVtZW50KTtcbiAgICByb290LiRyZW5kZXIoKTtcbiAgICByb290LiRtb3VudChlbGVtZW50KTtcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEZpbHRlcixcbiAgICBTZXJ2aWNlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGlzRGlyZWN0aXZlLFxuICAgIGlzRmlsdGVyLFxuICAgIGlzU2VydmljZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgcmVuZGVyLFxuICAgIGluamVjdG9yXG59OyJdLCJzb3VyY2VSb290IjoiIn0=