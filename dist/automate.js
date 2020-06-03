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
      this.buffer.forEach(function (list) {
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
      this.bindTranslateChanged();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hdXRvbWF0ZS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vYXV0b21hdGUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29tcG9uZW50L2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvbXBvbmVudC9zbG90LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvZXZlbnRzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2NvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY29yZS9sb2NhbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9jb3JlL21lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvY3NzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGVjb3JhdG9yL2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3IvZmlsdGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RlY29yYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kZWNvcmF0b3Ivc2VydmljZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvYmluZC1odG1sLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9iaW5kLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9oaWRlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9pZi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL21vZGVsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9yZXBlYXQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2NoZWNrZWQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL2Rpc2FibGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3RhdGUvcmVhZG9ubHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0YXRlL3NlbGVjdGVkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdGF0ZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3MtZXZlbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvY2xhc3Mtb2RkLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zdHlsZS9jbGFzcy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLWV2ZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N0eWxlL3N0eWxlLW9kZC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3R5bGUvc3R5bGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9kaXJlY3RpdmUvc3dpdGNoL3N3aXRjaC1kZWZhdWx0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2RpcmVjdGl2ZS9zd2l0Y2gvc3dpdGNoLXdoZW4uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZGlyZWN0aXZlL3N3aXRjaC9zd2l0Y2guanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9hbmFseXNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXZhbHVhdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYXBpLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtYnVpbGRlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvZXhwLWxleGVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtb3BlcmF0b3JzLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9leHAtcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2Fzc2lnbm1lbnQuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2FzdC1ub2RlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9hc3QuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2JpbmFyeS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY2FsbC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvY29uZGl0aW9uYWwuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2V4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2lkZW50aWZpZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9saXRlcmFsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9sb2dpY2FsLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9tb2RlbC9tZW1iZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL29iamVjdC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvZ3JhbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9leHAvbW9kZWwvcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvZXhwL21vZGVsL3VuYXJ5LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2V4cC9wYXJzZS1vcHRpb25zLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL29ic2VydmVyL2RlbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvb2JzZXJ2ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvcHJveHkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvb2JzZXJ2ZXIvd2F0Y2hlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvYmluZGluZy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvZXhwcmVzc2lvbi5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy9yZW5kZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvcmVuZGVyL3JlbmRlcmVyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3ZhdHRyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92Y21udC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdmVsbS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvbW9kZWwvdm5vZGUuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL21vZGVsL3Z0ZXh0LmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3RwbC9tb2RlbC92dHlwZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWFwaS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLWJ1aWxkZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdHBsL3RwbC1sZXhlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy90cGwvdHBsLXBhcnNlci5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2RpcmVjdGl2ZS5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2ZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly9hdXRvbWF0ZS8uL3NyYy92aWV3L2luamVjdG9yLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcGFyc2VyLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvcm9sZXMuanMiLCJ3ZWJwYWNrOi8vYXV0b21hdGUvLi9zcmMvdmlldy9zZXJ2aWNlLmpzIiwid2VicGFjazovL2F1dG9tYXRlLy4vc3JjL3ZpZXcvdmlldy1hcGkuanMiXSwibmFtZXMiOlsiU2xvdENvbXBvbmVudCIsImNvbXBvbmVudCIsIm5hbWVzcGFjZSIsImtleSIsInByb3BzIiwibmFtZSIsInNsb3RzIiwiJCRwYXJlbnQiLCJ0ZW1wbGF0ZSIsIiQkcmVuZGVyZXIiLCJSZW5kZXJlciIsInJlbmRlciIsIkNvbXBvbmVudCIsImlzTWVzc2FnZSIsIm9iaiIsIk1lc3NhZ2UiLCJldmVudHMiLCJwcm9wZXJ0eUNoYW5nZWQiLCJ0cmFuc2xhdGVDaGFuZ2VkIiwiTG9jYWwiLCJlIiwiZWxtIiwiJGV2ZW50IiwiJGVsZW1lbnQiLCJkYXRhIiwiaGFuZGxlcnMiLCJmbiIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJFcnJvciIsIm9mZiIsInNwbGljZSIsInNjb3BlIiwiZm9yRWFjaCIsImhhbmRsZXIiLCJjYWxsIiwiZG9tIiwiTV9DTVBfQ0xBU1MiLCJNX0hJREVfQ0xBU1MiLCJtZXRhZGF0YSIsInRhcmdldCIsInByb3RvdHlwZSIsIiQkbWV0YWRhdGEiLCJpbmplY3RvciIsInJlZ2lzdGVyQ29tcG9uZW50IiwiZGlyZWN0aXZlIiwicmVnaXN0ZXJEaXJlY3RpdmUiLCJmaWx0ZXIiLCJyZWdpc3RlckZpbHRlciIsInNlcnZpY2UiLCJyZWdpc3RlclNlcnZpY2UiLCJCaW5kSHRtbERpcmVjdGl2ZSIsInZhbHVlIiwiaW5uZXJIVE1MIiwiRGlyZWN0aXZlIiwiQmluZERpcmVjdGl2ZSIsImlubmVyVGV4dCIsIkhpZGVEaXJlY3RpdmUiLCIkaGlkZUVsZW1lbnQiLCJJZkRpcmVjdGl2ZSIsIiRwbGFjZWhvbGRlciIsImRvY3VtZW50IiwiY3JlYXRlQ29tbWVudCIsIiRyZW1vdmVFbGVtZW50IiwiTW9kZWxEaXJlY3RpdmUiLCJ2aWV3VmFsdWUiLCJtb2RlbFZhbHVlIiwicGFyc2VycyIsImZvcm1hdHRlcnMiLCJ2aWV3Q2hhbmdlTGlzdGVuZXJzIiwidmFsaWRhdG9ycyIsInN0YXR1cyIsImZlZWRiYWNrIiwicHJpc3RpbmUiLCJkaXJ0eSIsInZhbGlkIiwiaW52YWxpZCIsIm9wdGlvbnMiLCJjc3MiLCJjb21taXRNb2RlbFZhbHVlIiwiJHNjb3BlIiwic3RhdGUiLCIkY29tcG9uZW50IiwiJGJpbmQiLCJjb21taXRWaWV3VmFsdWUiLCJuZXd2YWx1ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJuZXdWYWx1ZSIsInNlbGYiLCJ2YWxpZGF0b3IiLCJmb3JtYXR0ZXIiLCIkc2V0UHJvcGVydHkiLCJ1cGRhdGVFbG1Dc3NDbGFzcyIsIm1hcmtEaXJ0eVN0YXR1cyIsImxpc3RlbmVyIiwicGFyc2VyIiwiJGJpbmRpbmciLCJhc3NpZ24iLCJlbGUiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJSZXBlYXREaXJlY3RpdmUiLCJpdGVtRXhwIiwiaXRlbXNFeHAiLCJpdGVtVGVtcGxhdGUiLCJidWZmZXIiLCJNYXAiLCJ1bndhdGNoQ29sbGVjdGlvbiIsInZlbG0iLCJ2YXR0ciIsImFyZyIsIm5vZGVWYWx1ZSIsInBhdHRlcm4iLCJyZXN1bHQiLCJleGVjIiwicmVtb3ZlQXR0ciIsImdldE91dGVyVHBsIiwiZnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiaGVhZGVyIiwiZm9vdGVyIiwiYXBwZW5kQ2hpbGQiLCIkd2F0Y2hDb2xsZWN0aW9uIiwicGFyZW50Tm9kZSIsImluc2VydEJlZm9yZSIsIml0ZW1zIiwiJGV2YWwiLCJuZXdCdWZmZXIiLCJ1dGlscyIsIml0ZW0iLCJyZW5kZXJlciIsImdldFJlbmRlcmVyRnJvbUJ1ZmZlciIsImxvY2FscyIsIiRyZW5kZXIiLCJzZXRSZW5kZXJlclRvQnVmZmVyIiwidmlldyIsImxpc3QiLCJkZXN0cm95IiwiZGF0YUl0ZW0iLCJoYXMiLCJnZXQiLCJsZW5ndGgiLCJzaGlmdCIsInNldCIsIlNob3dEaXJlY3RpdmUiLCJDaGVja2VkRGlyZWN0aXZlIiwiU3RhdGVEaXJlY3RpdmUiLCJEaXNhYmxlZERpcmVjdGl2ZSIsIlJlYWRvbmx5RGlyZWN0aXZlIiwiU2VsZWN0ZWREaXJlY3RpdmUiLCJzZWxlY3RvciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsIkNsYXNzRXZlbkRpcmVjdGl2ZSIsImV2YWx1YXRlIiwiQ2xhc3NEaXJlY3RpdmUiLCJDbGFzc09kZERpcmVjdGl2ZSIsIm5ld0NsYXNzIiwib2xkQ2xhc3MiLCJza2lwQ3VycmVudEVsbSIsImpvaW4iLCJTdHlsZUV2ZW5EaXJlY3RpdmUiLCJTdHlsZURpcmVjdGl2ZSIsIlN0eWxlT2RkRGlyZWN0aXZlIiwibmV3U3R5bGUiLCJvbGRTdHlsZSIsInN0eWxlIiwiU3dpdGNoRGVmYXVsdERpcmVjdGl2ZSIsInN3aXRjaEN0cmwiLCIkc2Vla1VwRGlyZWN0aXZlIiwibWF0Y2hEZWZhdWx0Iiwib24iLCJkZWZhdWx0TWF0Y2hlZCIsIlN3aXRjaFdoZW5EaXJlY3RpdmUiLCJtYXRjaGVkIiwiY2hhbmdlZCIsInBsdXNNYXRjaCIsIm1pbnVzTWF0Y2giLCJTd2l0Y2hEaXJlY3RpdmUiLCJtYXRjaENvdW50IiwiZmlyZSIsImNoZWNrRGVmYXVsdCIsImdldENoaWxkcmVuT2ZFbGVtZW50IiwiQXJyYXkiLCJzbGljZSIsImNoaWxkTm9kZXMiLCJjbGVhckNoaWxkcmVuT2ZFbGVtZW50IiwiY2hpbGQiLCJyZW1vdmVDaGlsZCIsInJlcGxhY2VFbGVtZW50IiwibmV3RWxtIiwicmVtb3ZlRWxlbWVudCIsInJlbW92ZUVsZW1lbnRzQmV0d2VlbiIsInN0YXJ0RWxtIiwiZW5kRWxtIiwicHJldmlvdXNTaWJsaW5nIiwibmV4dFNpYmxpbmciLCJhcHBlbmRFbGVtZW50IiwibGFzdENoaWxkIiwiYWRkQ2xhc3MiLCJjbHMiLCJ0cmltIiwic3BsaXQiLCJjIiwiY3VyIiwiZ2V0QXR0cmlidXRlIiwicmVtb3ZlQ2xhc3MiLCJ0YXIiLCJyZXBsYWNlIiwibG9hZFN0eWxlU3RyaW5nIiwiY3JlYXRlRWxlbWVudCIsImNyZWF0ZVRleHROb2RlIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJBY2Nlc3NvciIsImNhbGxlZSIsImV4cCIsImNoaWxkcmVuIiwiQW5hbHlzZXIiLCJwYXJzZUV4cHJlc3Npb24iLCJwYXJzZUV4cCIsInByb2dyYW0iLCJhY2Nlc3NvciIsImJ1aWxkZXIiLCJFeHBCdWlsZGVyIiwiYW5hbHlzZVByb2dyYW0iLCJhbmFseXNlTm9kZSIsIm5vZGUiLCJjb250ZXh0IiwidHlwZSIsIkFTVCIsIkV4cHJlc3Npb25TdGF0ZW1lbnQiLCJhbmFseXNlRXhwcmVzc2lvbiIsIkFzc2lnbm1lbnRFeHByZXNzaW9uIiwiYW5hbHlzZUFzc2lnbm1lbnQiLCJDb25kaXRpb25hbEV4cHJlc3Npb24iLCJhbmFseXNlQ29uZGl0aW9uIiwiTG9naWNhbEV4cHJlc3Npb24iLCJhbmFseXNlTG9naWMiLCJCaW5hcnlFeHByZXNzaW9uIiwiYW5hbHlzZUJpbmFyeSIsIlVuYXJ5RXhwcmVzc2lvbiIsImFuYWx5c2VVbmFyeSIsIkNhbGxFeHByZXNzaW9uIiwiYW5hbHlzZUNhbGwiLCJNZW1iZXJFeHByZXNzaW9uIiwiYW5hbHlzZU1lbWJlciIsIklkZW50aWZpZXIiLCJhbmFseXNlSWRlbnRpZmllciIsIkxpdGVyYWwiLCJhbmFseXNlTGl0ZXJhbCIsIkFycmF5RXhwcmVzc2lvbiIsImFuYWx5c2VBcnJheSIsIlByb3BlcnR5IiwiYW5hbHlzZVByb3BlcnR5IiwiT2JqZWN0RXhwcmVzc2lvbiIsImFuYWx5c2VPYmplY3QiLCJhc3NpZ25tZW50IiwicmlnaHQiLCJjb25kaXRpb24iLCJ0ZXN0IiwiYWx0ZXJuYXRlIiwiY29uc2VxdWVudCIsImxvZ2ljIiwibGVmdCIsImJpbmFyeSIsInVuYXJ5IiwiYXJncyIsIm1lbWJlciIsInBhcmVudCIsIm9iamVjdCIsImNvbXB1dGVkIiwicHJvcGVydHkiLCJjcmVhdGVDaGlsZCIsImJ1aWxkIiwiaWRlbnRpZmllciIsImNyZWF0ZUFjY2Vzc29yIiwibGl0ZXJhbCIsInByb3AiLCJwcm9wZXJ0aWVzIiwiYXJyIiwiYW5hbHlzZSIsIkV2YWx1YXRvciIsImFsbG93TnVsbCIsImFzc2lnbkludGVyY2VwdG9yIiwiJHBhcnNlciIsImV2YWx1YXRlUHJvZ3JhbSIsImV2YWx1YXRlTm9kZSIsIiRudWxsIiwiYXNzaWduUHJvZ3JhbSIsImV4cHJlc3Npb24iLCJwcm9wZXJ0eUtleSIsImV2YWx1YXRlRXhwcmVzc2lvbiIsImV2YWx1YXRlQXNzaWdubWVudCIsImV2YWx1YXRlQ29uZGl0aW9uIiwiZXZhbHVhdGVMb2dpYyIsImV2YWx1YXRlQmluYXJ5IiwiZXZhbHVhdGVVbmFyeSIsImV2YWx1YXRlQ2FsbCIsImV2YWx1YXRlTWVtYmVyIiwiZXZhbHVhdGVJZGVudGlmaWVyIiwiZXZhbHVhdGVMaXRlcmFsIiwiZXZhbHVhdGVBcnJheSIsImV2YWx1YXRlUHJvcGVydHkiLCJldmFsdWF0ZU9iamVjdCIsImFzc2lnbm1lbnRMZWZ0IiwibGVmdFZhbHVlIiwicmlnaHRWYWx1ZSIsIm9wZXJhdG9yIiwiYXJnVmFsdWVzIiwibWFwIiwiJGdldEZpbHRlciIsImV4ZWN1dGUiLCJhcHBseSIsIk51bGxFeHByZXNzaW9uTm9kZSIsInRhcmdldE5vZGUiLCJkZWYiLCJsZXhFeHAiLCJFeHBMZXhlciIsImxleCIsIkV4cFBhcnNlciIsInBhcnNlIiwiYnVpbGRFeHByZXNzaW9uIiwiYnVpbGRBc3NpZ25tZW50IiwiYnVpbGRDb25kaXRpb24iLCJidWlsZExvZ2ljIiwiYnVpbGRCaW5hcnkiLCJidWlsZFVuYXJ5IiwiYnVpbGRDYWxsIiwiYnVpbGRNZW1iZXIiLCJidWlsZElkZW50aWZpZXIiLCJidWlsZExpdGVyYWwiLCJidWlsZEFycmF5IiwiYnVpbGRQcm9wZXJ0eSIsImJ1aWxkT2JqZWN0IiwicmVzIiwicGFyc2VPcHRpb25zIiwidGV4dCIsInRva2VucyIsImNoIiwiY2hhckF0IiwicmVhZFN0cmluZyIsImlzTnVtYmVyIiwicGVlayIsInJlYWROdW1iZXIiLCJpc0lkZW50aWZpZXJTdGFydCIsInBlZWtNdWx0aWNoYXIiLCJyZWFkSWRlbnQiLCJpcyIsImlzV2hpdGVzcGFjZSIsImNoMiIsImNoMyIsIm9wMSIsIk9QRVJBVE9SUyIsIm9wMiIsIm9wMyIsInRva2VuIiwidGhyb3dFcnJvciIsImNoYXJzIiwiaSIsIm51bSIsImNvZGVQb2ludEF0IiwiaXNWYWxpZElkZW50aWZpZXJTdGFydCIsImlzSWRlbnRpZmllckNvbnRpbnVlIiwiaXNWYWxpZElkZW50aWZpZXJDb250aW51ZSIsImNwIiwiY2hhckNvZGVBdCIsImNwMSIsImNwMiIsImVycm9yIiwic3RhcnQiLCJlbmQiLCJjb2xTdHIiLCJzdWJzdHJpbmciLCJudW1iZXIiLCJwZWVrQ2giLCJpc0V4cE9wZXJhdG9yIiwiY29uc3RhbnQiLCJOdW1iZXIiLCJxdW90ZSIsInN0cmluZyIsInJhd1N0cmluZyIsImVzY2FwZSIsImhleCIsIm1hdGNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwicGFyc2VJbnQiLCJyZXAiLCJFU0NBUEUiLCJvcGVyYXRvclRleHQiLCJsZXhlciIsIm1zZyIsIlByb2dyYW1Ob2RlIiwiZXhwcmVzc2lvblN0YXRlbWVudCIsImV4cGVjdCIsIkV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIiwiZmlsdGVyQ2hhaW4iLCJhc3QiLCJ0ZXJuYXJ5IiwiaXNBc3NpZ25hYmxlIiwiQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlIiwibG9naWNhbE9SIiwiY29uc3VtZSIsIkNvbmRpdGlvbmFsRXhwcmVzc2lvbk5vZGUiLCJsb2dpY2FsQU5EIiwiTG9naWNhbEV4cHJlc3Npb25Ob2RlIiwiZXF1YWxpdHkiLCJyZWxhdGlvbmFsIiwiQmluYXJ5RXhwcmVzc2lvbk5vZGUiLCJhZGRpdGl2ZSIsIm11bHRpcGxpY2F0aXZlIiwiVW5hcnlFeHByZXNzaW9uTm9kZSIsInByaW1hcnkiLCJhcnJheURlY2xhcmF0aW9uIiwibGl0ZXJhbHMiLCJoYXNPd25Qcm9wZXJ0eSIsIkxpdGVyYWxOb2RlIiwibmV4dCIsInBlZWtBaGVhZCIsIkNhbGxFeHByZXNzaW9uTm9kZSIsInBhcnNlQXJndW1lbnRzIiwiTWVtYmVyRXhwcmVzc2lvbk5vZGUiLCJiYXNlRXhwcmVzc2lvbiIsImlkZW50aWZpZXJzIiwiZW50aXJlTmFtZSIsIklkZW50aWZpZXJOb2RlIiwicGVla1Rva2VuIiwiQXJyYXlFeHByZXNzaW9uTm9kZSIsIlByb3BlcnR5Tm9kZSIsIk9iamVjdEV4cHJlc3Npb25Ob2RlIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJ0IiwiQXN0Tm9kZSIsIlByb2dyYW0iLCJraW5kIiwicHJlZml4IiwidW5kZWZpbmVkIiwiRGVsYXllciIsInRpbWVvdXQiLCJkZWxheUlkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCIsIkxpc3RlbmVyIiwidmFsdWVDaGFuZ2VkIiwiY29sbGVjdGlvbkNoYW5nZWQiLCJvbGRWYWx1ZSIsIk9ic2VydmVyIiwiYWNjZXNzb3JzIiwibGlzdGVuZXJzIiwid2F0Y2hlciIsIldhdGNoZXIiLCJhbmFseXNlciIsImRlbGF5ZXIiLCJub3RpZnkiLCJldmFsdWF0b3IiLCJoYXNDaGFuZ2UiLCJzZXROZXdWYWx1ZSIsInNldENvbGxlY3Rpb25DaGFuZ2VkIiwiZ2V0QWNjZXNzb3IiLCJjcmVhdGVMaXN0ZW5lciIsInVud2F0Y2hBY2Nlc3NvcnMiLCJ1bndhdGNoIiwid2F0Y2hBY2Nlc3NvcnMiLCJ2YWx1ZXMiLCJ3YXRjaCIsIm5vdGlmeUNoYW5nZSIsInJlbW92ZUxpc3RlbmVyIiwidW53YXRjaFByb3BzIiwid2F0Y2hQcm9wcyIsInVud2F0Y2hFeHAiLCJhcmd1bWVudHMiLCJjb2xsZWN0aW9uIiwiaXNQcm94eVN5bWJvbCIsIlN5bWJvbCIsInRhcmdldFN5bWJvbCIsImdldFByb3h5Iiwic2V0UHJveHkiLCJPYmplY3QiLCJ0b1Byb3h5IiwiaXNQcm94eSIsIlByb3h5IiwicHJveHkiLCJnZXRUYXJnZXQiLCJtYWtlUHJveHkiLCJPYmplY3RMaXN0ZW5lciIsImtleXMiLCJnZXRIYW5kbGVycyIsIm9mZlByb3BlcnR5Q2hhbmdlZCIsImhhbmRsZVByb3BlcnR5Q2hhbmdlZCIsImdldExpc3RlbmVyIiwiZmlyZUtleSIsImZpbHRlcnMiLCJhY3Rpb24iLCJnZXRPckNyZWF0ZUxpc3RlbmVyIiwicmVnaXN0ZXJLZXkiLCJ1bnJlZ2lzdGVyS2V5IiwiQmluZGluZyIsImlzRXhwIiwibG9naWNhbCIsImF1dG9tYXRpb24iLCJzZWdtZW50cyIsImV4cHJlc3Npb25zIiwiRXhwcmVzc2lvbiIsImNyZWF0ZUV4cHJlc3Npb24iLCJsYXN0SW5kZXgiLCJzZWdtZW50IiwiZGV0ZWN0IiwicGF0Y2giLCJjb21wdXRlIiwicmVkdWNlIiwicHJldiIsImhhc1RyYW5zbGF0aW9uIiwiJGFzc2lnbiIsIiR3YXRjaCIsImV2ZW50VGV4dCIsImRvbUV2ZW50cyIsIiRpbmplY3RvciIsIiRkYXRhIiwiYWxpYXMiLCJlbG1zIiwidm5vZGVzIiwiY29tcG9uZW50cyIsImRpcmVjdGl2ZXMiLCJlbnRpdHkiLCJiaW5kaW5ncyIsImJpbmRpbmciLCJjcmVhdGVDb21wb25lbnQiLCIkYXBwZW5kQ2hpbGQiLCJjcmVhdGVEaXJlY3RpdmUiLCIkJHNjb3BlIiwibm9kZU5hbWUiLCJwYXJzZUZ1bGxOYW1lIiwibnNBbGlhcyIsImdldENvbXBvbmVudCIsIm5zIiwibm9kZURhdGEiLCJnZXREaXJlY3RpdmUiLCJ1bmJpbmRUcmFuc2xhdGVDaGFuZ2VkIiwicGFyc2VUZW1wbGF0ZSIsImNvbXBpbGVOb2RlcyIsImxpbmtOb2RlcyIsIiRwb3N0bGluayIsImJpbmRUcmFuc2xhdGVDaGFuZ2VkIiwidm5vZGUiLCJjb21waWxlTm9kZSIsImlzVlRleHQiLCJjb21waWxlVGV4dCIsImlzVkNvbW1lbnQiLCJjb21waWxlQ29tbWVudCIsImNvbXBpbGVFbG0iLCJsaW5rTm9kZSIsImxpbmtUZXh0IiwibGlua0NvbW1lbnQiLCJsaW5rRWxtIiwiZWxtRGF0YSIsInJlY29nbml6ZUNvbXBvbmVudCIsImN1c3RvbUxpbmtlciIsInZhdHRycyIsInNvbWUiLCJhdHRyRGF0YSIsImNvbXBpbGVBdHRyIiwibGlua2VyIiwiJHByaW9yaXR5Iiwic2Vla1Nsb3QiLCJhdHRyTmFtZSIsImF0dHJWYWx1ZSIsIm5ld0JpbmRpbmciLCJzdGFydHNXaXRoIiwiaXNFdmVudCIsInN1YnN0ciIsImlzRG9tRXZlbnQiLCJyZWNvZ25pemVEaXJlY3RpdmUiLCJuZXdEaXJlY3RpdmUiLCIkJHZhdHRyIiwiJGFzc2lnbm1lbnQiLCIkY29tcGlsZSIsInNldEh0bWxBdHRyIiwicmVnaXN0ZXJBdXRvbWF0aW9uIiwiJGhhc1Byb3BlcnR5IiwiY29tcGlsZSIsInZ0ZXh0IiwibmV3VGV4dE5vZGUiLCJ2Y21udCIsIiRsaW5rIiwiaW5zdGFuY2UiLCJuZXdDb21wb25lbnQiLCJsaW5rQXR0ciIsIiQkdmVsbSIsIiRzZXRTbG90IiwiJG1vdW50IiwibGluayIsIiRjaGFuZ2UiLCJpc1ZFbG0iLCJzbG90IiwiZ2V0QXR0ciIsImdldElubmVyVHBsIiwiJGRlc3Ryb3kiLCJWQXR0ciIsIm5vZGVUeXBlIiwiYXR0cmlidXRlIiwiVk5vZGUiLCJWQ21udCIsImNvbW1lbnQiLCJWRWxtIiwiZWxlbWVudCIsInNlbGZDbG9zZWQiLCJUcGxCdWlsZGVyIiwiYXR0ciIsIm1hdGNoZXMiLCJiZWxvbmdUbyIsInNldFZhbHVlIiwiY29tcGlsZU9wdGlvbnMiLCJ0cGwiLCJwYXJzZVRwbCIsImNsZWFyQ2hpbGROb2RlcyIsImNvcHkiLCJjbG9uZU5vZGUiLCJjZGF0YVNlY3Rpb24iLCJlbnRpdHlSZWZlcmVuY2UiLCJwcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJkb2N1bWVudFR5cGUiLCJkb2N1bWVudEZyYWdtZW50Iiwibm90YXRpb24iLCJmaXJzdENoaWxkIiwiYnVpbGRTaWJsaW5nIiwicmVmQ2hpbGQiLCJuZXdDaGlsZCIsImNsZWFyUGFyZW50QW5kU2libGluZyIsImRlZXAiLCJvbkNsb25lTm9kZSIsIm9uRGVzdHJveSIsIm93bmVyRG9jdW1lbnQiLCJWVGV4dCIsIlZUeXBlIiwibGV4VHBsIiwiVHBsTGV4ZXIiLCJUcGxQYXJzZXIiLCJpc1ZBdHRyIiwiYnVpbGRUZXh0IiwiYnVpbGRDb21tZW50IiwiYnVpbGRFbGVtZW50IiwiYXR0clRwbCIsImJ1aWxkQXR0cmlidXRlIiwiY2hpbGRUcGwiLCJzdHIiLCJiZWdpbiIsImV4cGVjdFN0cmluZyIsInRleHRUYWciLCJjbG9zaW5nIiwiZG9jdHlwZSIsInRhZyIsImVxdWFsIiwiYWxsb3dEb2NUeXBlIiwicmVhZENvbW1lbnQiLCJyZWFkVGFnIiwicmVhZFRleHQiLCJyb290IiwiY3VycmVudCIsImRvY1R5cGUiLCJhdHRycyIsInAiLCJwdXNoQXR0ciIsImNoaWxkRWxlbWVudHMiLCJwdXNoQ2hpbGQiLCJlbGVzIiwib3JpZ2luIiwiZGVidWdNb2RlIiwidG9TdHJpbmciLCJnZXRQcm90b3R5cGVPZiIsImlnbm9yZU93biIsImlzQXJyYXkiLCJpc09iamVjdCIsIm9iakluZGV4IiwiaXNCb29sZWFuIiwibmV3QXJyIiwibmV3T2JqIiwiZXh0ZW5kIiwiZGVlcE1lcmdlIiwicGxhaW5NZXJnZSIsIm1lcmdlIiwic291cmNlIiwibyIsIkYiLCJpbmhlcml0UHJvdG90eXBlIiwic3ViVHlwZSIsInN1cGVyVHlwZSIsImNvbnN0cnVjdG9yIiwiaW5oZXJpdCIsImxvd2VyY2FzZSIsImlzU3RyaW5nIiwidG9Mb3dlckNhc2UiLCJ1cHBlcmNhc2UiLCJ0b1VwcGVyQ2FzZSIsImlzVW5kZWZpbmVkIiwiaXNEZWZpbmVkIiwiaXNNYXAiLCJpc0JsYW5rT2JqZWN0IiwiaXNEYXRlIiwiaXNGdW5jdGlvbiIsImlzUmVnRXhwIiwiaXNGb3JtRGF0YSIsIkZvcm1EYXRhIiwiaXNTYW1lIiwib2JqMSIsIm9iajIiLCJzYW1lIiwiaXNFbXB0eSIsImRlYnVnIiwibG9nIiwiY29uc29sZSIsImNvbnRhaW5zIiwiY29udGFpbnNTdHIiLCJpZ25vcmVDYXNlIiwiaGFzUHJvcGVydHkiLCJrZXkyIiwiaGFzUHJvcCIsInZhbHVlMyIsImtleTMiLCJnZXRQcm9wZXJ0eSIsInNldFByb3BlcnR5IiwiY29uY2F0Iiwib3JkZXJCeSIsImdldHRlciIsImdldFZhbHVlIiwic29ydCIsImEiLCJiIiwib3JkZXJCeURlc2NlbmRpbmciLCJ0b051bWJlciIsIm4iLCJwYXJzZUZsb2F0IiwiaXNOYU4iLCJmb3JtYXQiLCJtYXRjaFRleHQiLCJlc2NhcGVIdG1sIiwiaHRtbCIsInNlcGFyYXRvciIsImNvbXBvbmVudENvbnN0cnVjdG9yIiwiJCRjaGlsZHJlbiIsIiQkb2JzZXJ2ZXIiLCJQYXJzZXIiLCIkZXZhbHVhdG9yIiwiJGRlbGVnYXRlIiwiaW5qZWN0U2VydmljZXMiLCJmdWxsTmFtZSIsImNyZWF0ZUZpbHRlciIsIiRnZXRQcm9wZXJ0eSIsIm1lc3NhZ2UiLCJ3YXRjaENvbGxlY3Rpb24iLCJ0ZW1wbGF0ZUlkIiwiZ2V0RWxlbWVudEJ5SWQiLCIkZ2V0VGVtcGxhdGUiLCJzZWxlY3Rvck9yRWxlbWVudCIsInF1ZXJ5U2VsZWN0b3IiLCIkcmVtb3ZlQ2hpbGQiLCJkaXJlY3RpdmVDb25zdHJ1Y3RvciIsIm9uQ29tcGlsZSIsIm9uTGluayIsImFmdGVyTGluayIsIm9uQ2hhbmdlIiwiJGtleSIsIiQkc2VhcmNoRGlyZWN0aXZlIiwieWVzIiwiY29tcG9uZW50Q2xhc3MiLCJkaXJlY3RpdmVDbGFzcyIsImZpbHRlckNsYXNzIiwiRmlsdGVyIiwiZmlsdGVyQ29uc3RydWN0b3IiLCJzZXJ2aWNlQ2xhc3MiLCJTZXJ2aWNlIiwic2VydmljZUNvbnN0cnVjdG9yIiwiRmFjdG9yeSIsInJvbGVJZCIsIm5ld05hbWUiLCJyb2xlcyIsImNvbmZpZyIsImNvbnN0cnVjdG9yTmFtZSIsInJlbmFtZSIsIm9uQ29uc3RydWN0IiwiY29uc3RydWN0IiwiRnVuY3Rpb24iLCJtYWtlIiwiZmFjdG9yeSIsIkluamVjdG9yIiwiY2xhc3NDb250YWluZXIiLCJpbnN0YW5jZUNvbnRhaW5lciIsInNlcnZpY2VTdGFjayIsImNvbnRhaW5lciIsImdldENsYXNzQ29udGFpbmVyIiwicmVnaXN0ZXIiLCJjb25zdHJ1Y3RvcnMiLCJtZXRhIiwibmFtZXNwYWNlcyIsImtleU9yQ29uc3RydWN0b3IiLCJjcmVhdGUiLCJnZXRJbnN0YW5jZUNvbnRhaW5lciIsImdldEZpbHRlciIsImdldFNlcnZpY2UiLCJub25TaGFyZWQiLCJwb3AiLCJzaG9ydE5hbWUiLCJjaGVja0xvb3BEZXBlbmRlbmN5Iiwic2VydmljZUZ1bGxOYW1lIiwiaGFzTG9vcERlcGVuZGVuY3kiLCJpbmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJwcml2YXRlS2V5IiwiY3JlYXRlU2VydmljZSIsInByb2dyYW1zIiwibWFrZUNvbXBvbmVudCIsIm1ha2VEaXJlY3RpdmUiLCJtYWtlRmlsdGVyIiwibWFrZVNlcnZpY2UiLCJpc0NvbXBvbmVudCIsImlzRGlyZWN0aXZlIiwiaXNGaWx0ZXIiLCJpc1NlcnZpY2UiLCJSb290Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlD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SEE7QUFJTnlCLGFBQVMsRUFBRUE7QUFKTDtBQUhZLENBQW5CLEM7Ozs7Ozs7Ozs7OztBQ0FQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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Q0FBcUJ4TyxRQUFyQixFQUErQjtBQUMzQixTQUFPQSxRQUFRLFlBQVl2aEIsb0RBQTNCO0FBQ0g7O0FBRUQsU0FBU2d3QixRQUFULENBQWtCek8sUUFBbEIsRUFBNEI7QUFDeEIsU0FBT0EsUUFBUSxZQUFZc0wsOENBQTNCO0FBQ0g7O0FBRUQsU0FBU29ELFNBQVQsQ0FBbUIxTyxRQUFuQixFQUE2QjtBQUN6QixTQUFPQSxRQUFRLFlBQVl5TCxnREFBM0I7QUFDSDs7QUFFRCxTQUFTNXZCLE1BQVQsQ0FBZ0I2SSxRQUFoQixFQUEwQnFuQixNQUExQixFQUFrQztBQUM5QixNQUFJM0ssT0FBTyxHQUFHcGlCLFFBQVEsQ0FBQ3lyQixhQUFULENBQXVCL2xCLFFBQXZCLENBQWQ7QUFDQSxNQUFJaXFCLElBQUksR0FBR3JDLGdEQUFPLENBQUM2QixhQUFSLENBQXNCLE1BQXRCLEVBQThCcEMsTUFBOUIsRUFBc0M7QUFDN0Nyd0IsWUFBUSxFQUFFMGxCLE9BQU8sQ0FBQzVpQjtBQUQyQixHQUF0QyxDQUFYO0FBR0EsTUFBSWdtQixJQUFJLEdBQUcsSUFBSW1LLElBQUosRUFBWDtBQUVBcHhCLDZEQUFBLENBQTJCNmpCLE9BQTNCO0FBQ0FvRCxNQUFJLENBQUMvZ0IsT0FBTDtBQUNBK2dCLE1BQUksQ0FBQ25FLE1BQUwsQ0FBWWUsT0FBWjtBQUNIIiwiZmlsZSI6ImF1dG9tYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiYXV0b21hdGVcIl0gPSBmYWN0b3J5KCk7XG59KSh3aW5kb3csIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9zbG90JzsiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICcuLi92aWV3JztcclxuaW1wb3J0IHsgY29tcG9uZW50IH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcclxuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xyXG5cclxuQGNvbXBvbmVudCh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdzbG90J1xyXG59KVxyXG5jbGFzcyBTbG90Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5uYW1lID0gJyc7XHJcbiAgICB9XHJcblxyXG4gICAgJHJlbmRlcigpIHtcclxuICAgICAgICB2YXIgc2xvdHMgPSB0aGlzLiQkcGFyZW50LnNsb3RzO1xyXG4gICAgICAgIHZhciB0ZW1wbGF0ZSA9IHNsb3RzW3RoaXMucHJvcHMubmFtZV07XHJcblxyXG4gICAgICAgIGlmICh0ZW1wbGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLiQkcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy4kJHBhcmVudCwgdGVtcGxhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLiQkcmVuZGVyZXIucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiQkcmVuZGVyZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNNZXNzYWdlKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIE1lc3NhZ2U7XHJcbn0iLCJpbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcclxuXHJcbi8vIGdsb2JhbCBldmVudHNcclxuZXhwb3J0IHZhciBldmVudHMgPSB7XHJcbiAgICBwcm9wZXJ0eUNoYW5nZWQ6IG5ldyBNZXNzYWdlKCksXHJcbiAgICB0cmFuc2xhdGVDaGFuZ2VkOiBuZXcgTWVzc2FnZSgpXHJcbn07IiwiZXhwb3J0ICogZnJvbSAnLi9sb2NhbCc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UnO1xuZXhwb3J0ICogZnJvbSAnLi9ldmVudHMnO1xuZXhwb3J0ICogZnJvbSAnLi9hcGknOyIsImV4cG9ydCBjbGFzcyBMb2NhbCB7XG4gICAgY29uc3RydWN0b3IoZSwgZWxtKSB7XG4gICAgICAgIHRoaXMuJGV2ZW50ID0gZTtcbiAgICAgICAgdGhpcy4kZWxlbWVudCA9IGVsbTtcbiAgICB9XG59IiwiZXhwb3J0IGNsYXNzIE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5oYW5kbGVycyA9IFtdO1xuICAgIH1cblxuICAgIG9uKGZuKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuaGFuZGxlcnMuaW5kZXhPZihmbik7XG5cbiAgICAgICAgLy8gbm90IGZvdW5kXG4gICAgICAgIGlmKGluZGV4ID09PSAtMSl7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjYW4gbm90IHJlZ2lzdGVyIHNhbWUgZXZlbnQgaGFuZGxlciBtb3JlIHRoYW4gb25jZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMub2ZmKGZuKTtcbiAgICB9XG5cbiAgICBvZmYoZm4pIHtcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5oYW5kbGVycy5pbmRleE9mKGZuKTtcblxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlKGRhdGEsIHNjb3BlKSB7XG4gICAgICAgIHNjb3BlID0gc2NvcGUgfHwgdGhpcztcbiAgICAgICAgLy8gYXR0YWNoIGV2ZW50IGRhdGFcbiAgICAgICAgdGhpcy5kYXRhID0gZGF0YSB8fCB7fTtcblxuICAgICAgICB0aGlzLmhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiBoYW5kbGVyLmNhbGwoc2NvcGUsIHRoaXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgZG9tIGZyb20gJy4vZG9tJztcclxuXHJcbmRvbS5sb2FkU3R5bGVTdHJpbmcoJy5tLWNvbXBvbmVudHtkaXNwbGF5OmluaGVyaXQ7fSAubS1oaWRle2Rpc3BsYXk6bm9uZSAhaW1wb3J0YW50O30nKTtcclxuXHJcbmV4cG9ydCB2YXIgTV9DTVBfQ0xBU1MgPSAnbS1jb21wb25lbnQnO1xyXG5leHBvcnQgdmFyIE1fSElERV9DTEFTUyA9ICdtLWhpZGUnOyIsImltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi4vdmlldyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnQobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJDb21wb25lbnQoa2V5LCB0YXJnZXQpO1xuICAgIH07XG59IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGl2ZShtZXRhZGF0YSkge1xuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgIHZhciBrZXkgPSBtZXRhZGF0YS5rZXkgfHwgdGFyZ2V0Lm5hbWU7XG4gICAgICAgIHRhcmdldC5wcm90b3R5cGUuJCRtZXRhZGF0YSA9IG1ldGFkYXRhO1xuICAgICAgICBpbmplY3Rvci5yZWdpc3RlckRpcmVjdGl2ZShrZXksIHRhcmdldCk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4uL3ZpZXcnO1xuXG5leHBvcnQgZnVuY3Rpb24gZmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGFkYXRhLmtleSB8fCB0YXJnZXQubmFtZTtcbiAgICAgICAgdGFyZ2V0LnByb3RvdHlwZS4kJG1ldGFkYXRhID0gbWV0YWRhdGE7XG4gICAgICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vZGlyZWN0aXZlJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsdGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZSc7IiwiaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuLi92aWV3JztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICB2YXIga2V5ID0gbWV0YWRhdGEua2V5IHx8IHRhcmdldC5uYW1lO1xuICAgICAgICB0YXJnZXQucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcbiAgICAgICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgdGFyZ2V0KTtcbiAgICB9O1xufSIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWJpbmQtaHRtbCdcclxufSlcclxuY2xhc3MgQmluZEh0bWxEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuJGVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLWJpbmQnXG59KVxuY2xhc3MgQmluZERpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1oaWRlJ1xufSlcbmNsYXNzIEhpZGVEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuJGhpZGVFbGVtZW50KHZhbHVlKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20taWYnXHJcbn0pXHJcbmNsYXNzIElmRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCduLWlmJyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcclxuICAgICAgICB0aGlzLiRyZW1vdmVFbGVtZW50KCF2YWx1ZSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgKiBmcm9tICcuL2JpbmQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5kLWh0bWwnO1xuZXhwb3J0ICogZnJvbSAnLi9yZXBlYXQnO1xuZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL2hpZGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zaG93JztcbmV4cG9ydCAqIGZyb20gJy4vc3RhdGUnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHlsZSc7XG5leHBvcnQgKiBmcm9tICcuL2lmJztcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJzsiLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLW1vZGVsJ1xufSlcbmNsYXNzIE1vZGVsRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLm1vZGVsVmFsdWUgPSBudWxsO1xuICAgICAgICB0aGlzLnBhcnNlcnMgPSBbXTtcbiAgICAgICAgdGhpcy5mb3JtYXR0ZXJzID0gW107XG4gICAgICAgIHRoaXMudmlld0NoYW5nZUxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLnZhbGlkYXRvcnMgPSBbXTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSB7XG4gICAgICAgICAgICBmZWVkYmFjazogJycsXG4gICAgICAgICAgICBwcmlzdGluZTogdHJ1ZSxcbiAgICAgICAgICAgIGRpcnR5OiBmYWxzZSxcbiAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgaW52YWxpZDogZmFsc2VcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgICAgICAgY3NzOiB7XG4gICAgICAgICAgICAgICAgcHJpc3RpbmU6ICduLXByaXN0aW5lJyxcbiAgICAgICAgICAgICAgICBkaXJ0eTogJ24tZGlydHknLFxuICAgICAgICAgICAgICAgIHZhbGlkOiAnbi12YWxpZCcsXG4gICAgICAgICAgICAgICAgaW52YWxpZDogJ24taW52YWxpZCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLmNvbW1pdE1vZGVsVmFsdWUodmFsdWUpO1xuICAgIH1cblxuICAgIGFmdGVyTGluaygpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLiRlbGVtZW50Lm5hbWU7XG5cbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICAgIHRoaXMuJHNjb3BlLnN0YXRlW25hbWVdID0gdGhpcy5zdGF0dXM7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy4kY29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNvbXBvbmVudC4kYmluZCgnY2hhbmdlJywgZSA9PiB0aGlzLmNvbW1pdFZpZXdWYWx1ZShlLmRhdGEubmV3dmFsdWUpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBlID0+IHRoaXMuY29tbWl0Vmlld1ZhbHVlKGUudGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG5cbiAgICB9XG5cbiAgICBjb21taXRNb2RlbFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLm1vZGVsVmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHRoaXMubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuZm9ybWF0dGVycy5mb3JFYWNoKGZ1bmN0aW9uIChmb3JtYXR0ZXIpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gZm9ybWF0dGVyLmNhbGwoc2VsZiwgbmV3VmFsdWUpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGhpcy52aWV3VmFsdWUgPT09IG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnZpZXdWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIGlmICh0aGlzLiRjb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kY29tcG9uZW50LiRzZXRQcm9wZXJ0eSgndmFsdWUnLCBuZXdWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLiRlbGVtZW50LnZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZUVsbUNzc0NsYXNzKCk7XG4gICAgfVxuXG4gICAgY29tbWl0Vmlld1ZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdWYWx1ZSA9PT0gbmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICB0aGlzLm1hcmtEaXJ0eVN0YXR1cyh0cnVlKTtcblxuICAgICAgICB0aGlzLnZpZXdDaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYudmlld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy52aWV3VmFsdWUgPSBuZXdWYWx1ZTtcblxuICAgICAgICB0aGlzLnBhcnNlcnMuZm9yRWFjaChmdW5jdGlvbiAocGFyc2VyKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlci5jYWxsKHNlbGYsIG5ld1ZhbHVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYodGhpcy5tb2RlbFZhbHVlID09PSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YWxpZGF0b3JzLmZvckVhY2goZnVuY3Rpb24gKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmNhbGwoc2VsZiwgbmV3VmFsdWUsIHNlbGYubW9kZWxWYWx1ZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMubW9kZWxWYWx1ZSA9IG5ld1ZhbHVlO1xuXG4gICAgICAgIHRoaXMuJGJpbmRpbmcuYXNzaWduKG5ld1ZhbHVlKTtcbiAgICB9XG5cbiAgICB1cGRhdGVFbG1Dc3NDbGFzcygpIHtcbiAgICAgICAgdmFyIGVsZSA9IHRoaXMuJGVsZW1lbnQsXG4gICAgICAgICAgICBjc3MgPSB0aGlzLm9wdGlvbnMuY3NzO1xuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy5kaXJ0eSkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLmRpcnR5KTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5wcmlzdGluZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChjc3MucHJpc3RpbmUpO1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5yZW1vdmUoY3NzLmRpcnR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnN0YXR1cy52YWxpZCkge1xuICAgICAgICAgICAgZWxlLmNsYXNzTGlzdC5hZGQoY3NzLnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QuYWRkKGNzcy5pbnZhbGlkKTtcbiAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKGNzcy52YWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrRGlydHlTdGF0dXMoZGlydHkpIHtcbiAgICAgICAgdGhpcy5zdGF0dXMuZGlydHkgPSBkaXJ0eTtcbiAgICAgICAgdGhpcy5zdGF0dXMucHJpc3RpbmUgPSAhZGlydHk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG5cbiAgICBtYXJrVmFsaWRTdGF0dXModmFsaWQsIGZlZWRiYWNrKSB7XG4gICAgICAgIHRoaXMuc3RhdHVzLnZhbGlkID0gdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmludmFsaWQgPSAhdmFsaWQ7XG4gICAgICAgIHRoaXMuc3RhdHVzLmZlZWRiYWNrID0gZmVlZGJhY2s7XG4gICAgICAgIHRoaXMudXBkYXRlRWxtQ3NzQ2xhc3MoKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi9kZWNvcmF0b3InO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlcGVhdCdcbn0pXG5jbGFzcyBSZXBlYXREaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLml0ZW1FeHAgPSAnJztcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9ICcnO1xuICAgICAgICB0aGlzLml0ZW1UZW1wbGF0ZSA9ICcnO1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy51bndhdGNoQ29sbGVjdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgb25Db21waWxlKHZlbG0sIHZhdHRyKSB7XG4gICAgICAgIHZhciBhcmcgPSB2YXR0ci5ub2RlVmFsdWU7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oW2Etel9dK1xcdyspXFxzK2luXFxzKyguKykkL2k7XG4gICAgICAgIHZhciByZXN1bHQgPSBwYXR0ZXJuLmV4ZWMoYXJnKTtcblxuICAgICAgICBpZiAocmVzdWx0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbS1yZXBlYXQ6IHBhcmFtZXRlciBpcyBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXRlbUV4cCA9IHJlc3VsdFsxXTtcbiAgICAgICAgdGhpcy5pdGVtc0V4cCA9IHJlc3VsdFsyXTtcbiAgICAgICAgdmVsbS5yZW1vdmVBdHRyKHZhdHRyKTtcbiAgICAgICAgdGhpcy5pdGVtVGVtcGxhdGUgPSB2ZWxtLmdldE91dGVyVHBsKCk7XG5cbiAgICAgICAgLy8gaWRlbnRpZnkgdGhpcyBkaXJlY3RpdmUgd291bGQgdGFrZSBvdmVyIGxpbmsgZnVuY3Rpb24gZm9yIHJlbGF0ZWQgdmlydHVhbCBlbGVtZW50IG5vZGUsIG9uTGluayBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZFxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBvbkxpbmsoc2NvcGUpIHtcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCgnc3RhcnQ6IG0tcmVwZWF0Jyk7XG4gICAgICAgIHZhciBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdlbmQ6IG0tcmVwZWF0Jyk7XG5cbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGhpcy5yZW5kZXIoc2NvcGUpKTtcbiAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoZm9vdGVyKTtcblxuICAgICAgICB0aGlzLnVud2F0Y2hDb2xsZWN0aW9uID0gc2NvcGUuJHdhdGNoQ29sbGVjdGlvbih0aGlzLml0ZW1zRXhwLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgZnJhZ21lbnQgPSB0aGlzLnJlbmRlcihzY29wZSk7XG4gICAgICAgICAgICBkb20ucmVtb3ZlRWxlbWVudHNCZXR3ZWVuKGhlYWRlciwgZm9vdGVyKTtcbiAgICAgICAgICAgIGZvb3Rlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmcmFnbWVudCwgZm9vdGVyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIGZyYWdtZW50O1xuICAgIH1cblxuICAgIHJlbmRlcihzY29wZSkge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHZhciBpdGVtcyA9IHNjb3BlLiRldmFsKHRoaXMuaXRlbXNFeHApO1xuICAgICAgICB2YXIgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHZhciBuZXdCdWZmZXIgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgdXRpbHMuZm9yRWFjaChpdGVtcywgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFyIHJlbmRlcmVyID0gc2VsZi5nZXRSZW5kZXJlckZyb21CdWZmZXIoc2VsZi5idWZmZXIsIGl0ZW0pO1xuXG4gICAgICAgICAgICBpZiAoIXJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxvY2FscyA9IHt9O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGtleSddID0ga2V5O1xuICAgICAgICAgICAgICAgIGxvY2Fsc1snJGluZGV4J10gPSBrZXk7XG4gICAgICAgICAgICAgICAgbG9jYWxzW3NlbGYuaXRlbUV4cF0gPSBpdGVtO1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyID0gc2VsZi4kcmVuZGVyKHNlbGYuaXRlbVRlbXBsYXRlLCBsb2NhbHMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLnNldFJlbmRlcmVyVG9CdWZmZXIobmV3QnVmZmVyLCBpdGVtLCByZW5kZXJlcik7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChyZW5kZXJlci52aWV3KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5idWZmZXIuZm9yRWFjaChmdW5jdGlvbiAobGlzdCkge1xuICAgICAgICAgICAgbGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChyZW5kZXJlcikge1xuICAgICAgICAgICAgICAgIHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJ1ZmZlciA9IG5ld0J1ZmZlcjtcblxuICAgICAgICByZXR1cm4gZnJhZ21lbnQ7XG4gICAgfVxuXG4gICAgZ2V0UmVuZGVyZXJGcm9tQnVmZmVyKGJ1ZmZlciwgZGF0YUl0ZW0pIHtcbiAgICAgICAgdmFyIHJlbmRlcmVyO1xuXG4gICAgICAgIGlmIChidWZmZXIuaGFzKGRhdGFJdGVtKSkge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSBidWZmZXIuZ2V0KGRhdGFJdGVtKTtcblxuICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyZXIgPSBsaXN0LnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJ1ZmZlci5kZWxldGUoZGF0YUl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcmVyO1xuICAgIH1cblxuICAgIHNldFJlbmRlcmVyVG9CdWZmZXIoYnVmZmVyLCBkYXRhSXRlbSwgcmVuZGVyZXIpIHtcbiAgICAgICAgdmFyIGxpc3Q7XG5cbiAgICAgICAgaWYgKGJ1ZmZlci5oYXMoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICBsaXN0ID0gYnVmZmVyLmdldChkYXRhSXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsaXN0ID0gW107XG4gICAgICAgICAgICBidWZmZXIuc2V0KGRhdGFJdGVtLCBsaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChyZW5kZXJlcik7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJ1ZmZlciA9IG51bGw7XG4gICAgICAgIHRoaXMudW53YXRjaENvbGxlY3Rpb24gJiYgdGhpcy51bndhdGNoQ29sbGVjdGlvbigpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4uL3ZpZXcnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tc2hvdydcbn0pXG5jbGFzcyBTaG93RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiRoaWRlRWxlbWVudCghdmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tY2hlY2tlZCdcbn0pXG5jbGFzcyBDaGVja2VkRGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcignY2hlY2tlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBTdGF0ZURpcmVjdGl2ZSB9IGZyb20gJy4vc3RhdGUnO1xuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcblxuQGRpcmVjdGl2ZSh7XG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxuICAgIGtleTogJ20tZGlzYWJsZWQnXG59KVxuY2xhc3MgRGlzYWJsZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdkaXNhYmxlZCcpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2NoZWNrZWQnXG5leHBvcnQgKiBmcm9tICcuL2Rpc2FibGVkJ1xuZXhwb3J0ICogZnJvbSAnLi9yZWFkb25seSdcbmV4cG9ydCAqIGZyb20gJy4vc2VsZWN0ZWQnIiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXJlYWRvbmx5J1xufSlcbmNsYXNzIFJlYWRvbmx5RGlyZWN0aXZlIGV4dGVuZHMgU3RhdGVEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigncmVhZG9ubHknKTtcbiAgICB9XG59IiwiaW1wb3J0IHsgU3RhdGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0YXRlJztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBzZWxlY3RvcjogJ20tc2VsZWN0ZWQnXG59KVxuY2xhc3MgU2VsZWN0ZWREaXJlY3RpdmUgZXh0ZW5kcyBTdGF0ZURpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCdzZWxlY3RlZCcpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcblxuZXhwb3J0IGNsYXNzIFN0YXRlRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcihrZXkpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5rZXkgPSBrZXk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuJGVsZW1lbnQuaGFzQXR0cmlidXRlKHRoaXMua2V5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMua2V5LCAnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5oYXNBdHRyaWJ1dGUodGhpcy5rZXkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUodGhpcy5rZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IENsYXNzRGlyZWN0aXZlIH0gZnJvbSAnLi9jbGFzcyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcblxyXG5AZGlyZWN0aXZlKHtcclxuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcclxuICAgIGtleTogJ20tY2xhc3MtZXZlbidcclxufSlcclxuY2xhc3MgQ2xhc3NFdmVuRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRiaW5kaW5nLmV2YWx1YXRlKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAxO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgQ2xhc3NEaXJlY3RpdmUgfSBmcm9tICcuL2NsYXNzJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1jbGFzcy1vZGQnXHJcbn0pXHJcbmNsYXNzIENsYXNzT2RkRGlyZWN0aXZlIGV4dGVuZHMgQ2xhc3NEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBza2lwQ3VycmVudEVsbSgpIHtcclxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiRiaW5kaW5nLmV2YWx1YXRlKCckaW5kZXgnKTtcclxuICAgICAgICByZXR1cm4gaW5kZXggJiAxID09PSAwO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XHJcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XHJcbmltcG9ydCAqIGFzIGRvbSBmcm9tICcuLi8uLi9kb20nO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLWNsYXNzJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2xhc3NEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShuZXdDbGFzcywgb2xkQ2xhc3MpIHtcclxuICAgICAgICBpZiAodGhpcy5za2lwQ3VycmVudEVsbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvbGRDbGFzcykge1xyXG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgb2xkQ2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChuZXdDbGFzcykge1xyXG4gICAgICAgICAgICBkb20uYWRkQ2xhc3ModGhpcy4kZWxlbWVudCwgbmV3Q2xhc3Muam9pbignICcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2tpcEN1cnJlbnRFbG0oKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vY2xhc3MnO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL2NsYXNzLW9kZCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vc3R5bGUnO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLWV2ZW4nO1xyXG5leHBvcnQgKiBmcm9tICcuL3N0eWxlLW9kZCc7IiwiaW1wb3J0IHsgU3R5bGVEaXJlY3RpdmUgfSBmcm9tICcuL3N0eWxlJztcclxuaW1wb3J0IHsgZGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGVjb3JhdG9yJztcclxuXHJcbkBkaXJlY3RpdmUoe1xyXG4gICAgbmFtZXNwYWNlOiAnYXV0b21hdGUnLFxyXG4gICAga2V5OiAnbS1zdHlsZS1ldmVuJ1xyXG59KVxyXG5jbGFzcyBTdHlsZUV2ZW5EaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGJpbmRpbmcuZXZhbHVhdGUoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBTdHlsZURpcmVjdGl2ZSB9IGZyb20gJy4vc3R5bGUnO1xyXG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xyXG5cclxuQGRpcmVjdGl2ZSh7XHJcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXHJcbiAgICBrZXk6ICdtLXN0eWxlLW9kZCdcclxufSlcclxuY2xhc3MgU3R5bGVPZGREaXJlY3RpdmUgZXh0ZW5kcyBTdHlsZURpcmVjdGl2ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNraXBDdXJyZW50RWxtKCkge1xyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuJGJpbmRpbmcuZXZhbHVhdGUoJyRpbmRleCcpO1xyXG4gICAgICAgIHJldHVybiBpbmRleCAmIDEgPT09IDA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi8uLi91dGlscyc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN0eWxlJ1xufSlcbmV4cG9ydCBjbGFzcyBTdHlsZURpcmVjdGl2ZSBleHRlbmRzIERpcmVjdGl2ZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgfVxuXG4gICAgb25DaGFuZ2UobmV3U3R5bGUsIG9sZFN0eWxlKSB7XG4gICAgICAgIGlmICh0aGlzLnNraXBDdXJyZW50RWxtKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAob2xkU3R5bGUpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gob2xkU3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gJyc7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc09iamVjdChuZXdTdHlsZSkpIHtcbiAgICAgICAgICAgIHV0aWxzLmZvckVhY2gobmV3U3R5bGUsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICAgICAgc2VsZi4kZWxlbWVudC5zdHlsZVtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNraXBDdXJyZW50RWxtKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vc3dpdGNoJ1xuZXhwb3J0ICogZnJvbSAnLi9zd2l0Y2gtZGVmYXVsdCdcbmV4cG9ydCAqIGZyb20gJy4vc3dpdGNoLXdoZW4nIiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zd2l0Y2gtZGVmYXVsdCdcbn0pXG5jbGFzcyBTd2l0Y2hEZWZhdWx0RGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hDdHJsID0gbnVsbDtcbiAgICAgICAgdGhpcy4kcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCdtLXN3aXRjaC1kZWZhdWx0Jyk7XG4gICAgfVxuXG4gICAgYWZ0ZXJMaW5rKCkge1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSB0aGlzLiRzZWVrVXBEaXJlY3RpdmUoJ20tc3dpdGNoJyk7XG5cbiAgICAgICAgaWYgKHRoaXMuc3dpdGNoQ3RybCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JlcXVpcmUgbS1zd2l0Y2ggZGlyZWN0aXZlJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnN3aXRjaEN0cmwubWF0Y2hEZWZhdWx0Lm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoIXRoaXMuc3dpdGNoQ3RybC5kZWZhdWx0TWF0Y2hlZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKCF0aGlzLnN3aXRjaEN0cmwuZGVmYXVsdE1hdGNoZWQpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vdmlldyc7XG5pbXBvcnQgeyBkaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kZWNvcmF0b3InO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uLy4uL2NvcmUnO1xuXG5AZGlyZWN0aXZlKHtcbiAgICBuYW1lc3BhY2U6ICdhdXRvbWF0ZScsXG4gICAga2V5OiAnbS1zd2l0Y2gtd2hlbidcbn0pXG5jbGFzcyBTd2l0Y2hXaGVuRGlyZWN0aXZlIGV4dGVuZHMgRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMubWF0Y2hlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnN3aXRjaEN0cmwgPSBudWxsO1xuICAgICAgICB0aGlzLmNoYW5nZWQgPSBuZXcgTWVzc2FnZSgpO1xuICAgICAgICB0aGlzLiRwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQoJ20tc3dpdGNoLXdoZW4nKTtcbiAgICB9XG5cbiAgICBhZnRlckxpbmsoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybCA9IHRoaXMuJHNlZWtVcERpcmVjdGl2ZSgnbS1zd2l0Y2gnKTtcblxuICAgICAgICBpZiAodGhpcy5zd2l0Y2hDdHJsID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVxdWlyZSBtLXN3aXRjaCBkaXJlY3RpdmUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3dpdGNoQ3RybC5jaGFuZ2VkLm9uKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHZhciBtYXRjaGVkID0gdGhpcy5zd2l0Y2hDdHJsLnZhbHVlID09PSB0aGlzLnZhbHVlO1xuXG4gICAgICAgIGlmKHRoaXMubWF0Y2hlZCAhPSBtYXRjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLm1hdGNoZWQgPSBtYXRjaGVkO1xuXG4gICAgICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ3RybC5wbHVzTWF0Y2goKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hDdHJsLm1pbnVzTWF0Y2goKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJHJlbW92ZUVsZW1lbnQoIW1hdGNoZWQpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi92aWV3JztcbmltcG9ydCB7IGRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RlY29yYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi4vLi4vY29yZSc7XG5cbkBkaXJlY3RpdmUoe1xuICAgIG5hbWVzcGFjZTogJ2F1dG9tYXRlJyxcbiAgICBrZXk6ICdtLXN3aXRjaCdcbn0pXG5jbGFzcyBTd2l0Y2hEaXJlY3RpdmUgZXh0ZW5kcyBEaXJlY3RpdmUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYXRjaENvdW50ID0gMDtcbiAgICAgICAgdGhpcy5jaGFuZ2VkID0gbmV3IE1lc3NhZ2UoKTtcbiAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IHRydWU7XG4gICAgICAgIHRoaXMubWF0Y2hEZWZhdWx0ID0gbmV3IE1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMuY2hhbmdlZC5maXJlKCk7XG4gICAgfVxuXG4gICAgcGx1c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQrKztcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBtaW51c01hdGNoKCkge1xuICAgICAgICB0aGlzLm1hdGNoQ291bnQtLTtcbiAgICAgICAgdGhpcy5jaGVja0RlZmF1bHQoKTtcbiAgICB9XG5cbiAgICBjaGVja0RlZmF1bHQoKSB7XG4gICAgICAgIHZhciBkZWZhdWx0TWF0Y2hlZCA9IHRoaXMubWF0Y2hDb3VudCA8PSAwO1xuXG4gICAgICAgIGlmICh0aGlzLmRlZmF1bHRNYXRjaGVkICE9PSBkZWZhdWx0TWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TWF0Y2hlZCA9IGRlZmF1bHRNYXRjaGVkO1xuICAgICAgICAgICAgdGhpcy5tYXRjaERlZmF1bHQuZmlyZSgpO1xuICAgICAgICB9XG4gICAgfVxufSIsIlxuZnVuY3Rpb24gZ2V0Q2hpbGRyZW5PZkVsZW1lbnQoZWxtKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGVsbS5jaGlsZE5vZGVzLCAwKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbG0pIHtcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudChlbG0pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIGVsbS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcbiAgICBpZiAocGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5ld0VsbSwgZWxtKTtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudChlbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGVsbS5wYXJlbnROb2RlO1xuICAgIGlmIChwYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbG0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlRWxlbWVudHNCZXR3ZWVuKHN0YXJ0RWxtLCBlbmRFbG0pIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IHN0YXJ0RWxtLnBhcmVudE5vZGU7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBnZXRDaGlsZHJlbk9mRWxlbWVudChwYXJlbnROb2RlKTtcblxuICAgIGNoaWxkTm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyA9PT0gc3RhcnRFbG0gJiYgY2hpbGQgIT09IGVuZEVsbSkge1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkLm5leHRTaWJsaW5nID09PSBlbmRFbG0gJiYgY2hpbGQgIT09IHN0YXJ0RWxtKSB7XG4gICAgICAgICAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRFbGVtZW50KGVsbSwgbmV3RWxtKSB7XG4gICAgdmFyIHBhcmVudE5vZGUgPSBlbG0ucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnROb2RlLmxhc3RDaGlsZCA9PT0gZWxtKSB7XG4gICAgICAgIHBhcmVudE5vZGUuYXBwZW5kQ2hpbGQobmV3RWxtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwYXJlbnROb2RlLmluc2VydEJlZm9yZShuZXdFbG0sIGVsbS5uZXh0U2libGluZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRDbGFzcyAoZWxtLCBjbHMpIHtcbiAgICBpZiAoIWNscyB8fCAhKGNscyA9IGNscy50cmltKCkpKSB7XG4gICAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChlbG0uY2xhc3NMaXN0KSB7XG4gICAgICAgIGlmIChjbHMuaW5kZXhPZignICcpID4gLTEpIHtcbiAgICAgICAgICAgIGNscy5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtLmNsYXNzTGlzdC5hZGQoYyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsbS5jbGFzc0xpc3QuYWRkKGNscyk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY3VyID0gXCIgXCIgKyAoZWxtLmdldEF0dHJpYnV0ZSgnY2xhc3MnKSB8fCAnJykgKyBcIiBcIjtcbiAgICAgICAgaWYgKGN1ci5pbmRleE9mKCcgJyArIGNscyArICcgJykgPCAwKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIChjdXIgKyBjbHMpLnRyaW0oKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUNsYXNzIChlbG0sIGNscykge1xuICAgIGlmICghY2xzIHx8ICEoY2xzID0gY2xzLnRyaW0oKSkpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKGVsbS5jbGFzc0xpc3QpIHtcbiAgICAgICAgaWYgKGNscy5pbmRleE9mKCcgJykgPiAtMSkge1xuICAgICAgICAgICAgY2xzLnNwbGl0KC9cXHMrLykuZm9yRWFjaChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbG0uY2xhc3NMaXN0LnJlbW92ZShjKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxtLmNsYXNzTGlzdC5yZW1vdmUoY2xzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWVsbS5jbGFzc0xpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGN1ciA9IFwiIFwiICsgKGVsbS5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJycpICsgXCIgXCI7XG4gICAgICAgIHZhciB0YXIgPSAnICcgKyBjbHMgKyAnICc7XG4gICAgICAgIHdoaWxlIChjdXIuaW5kZXhPZih0YXIpID49IDApIHtcbiAgICAgICAgICAgIGN1ciA9IGN1ci5yZXBsYWNlKHRhciwgJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBjdXIgPSBjdXIudHJpbSgpO1xuICAgICAgICBpZiAoY3VyKSB7XG4gICAgICAgICAgICBlbG0uc2V0QXR0cmlidXRlKCdjbGFzcycsIGN1cik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbG0ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBsb2FkU3R5bGVTdHJpbmcoY3NzKSB7XG4gICAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5leHBvcnQge1xuICAgIGFkZENsYXNzLFxuICAgIHJlbW92ZUNsYXNzLFxuICAgIGFwcGVuZEVsZW1lbnQsXG4gICAgcmVtb3ZlRWxlbWVudCxcbiAgICByZXBsYWNlRWxlbWVudCxcbiAgICBnZXRDaGlsZHJlbk9mRWxlbWVudCxcbiAgICByZW1vdmVFbGVtZW50c0JldHdlZW4sXG4gICAgY2xlYXJDaGlsZHJlbk9mRWxlbWVudCxcbiAgICBsb2FkU3R5bGVTdHJpbmdcbn07IiwiaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuaW1wb3J0IHsgRXhwQnVpbGRlciB9IGZyb20gJy4vZXhwLWJ1aWxkZXInO1xuXG5jbGFzcyBBY2Nlc3NvciB7XG4gICAgY29uc3RydWN0b3IoY2FsbGVlLCBleHApIHtcbiAgICAgICAgdGhpcy5jYWxsZWUgPSBjYWxsZWU7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmNoaWxkcmVuID0ge307XG4gICAgfVxuXG4gICAgY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUsIGV4cCkge1xuICAgICAgICBpZiAoIXRoaXMuY2hpbGRyZW5ba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltrZXldID0gbmV3IEFjY2Vzc29yKGNhbGxlZSwgZXhwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuW2tleV07XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQW5hbHlzZXIge1xuICAgIGNvbnN0cnVjdG9yKHBhcnNlcikge1xuICAgICAgICB0aGlzLnBhcnNlciA9IHBhcnNlciB8fCB7XG4gICAgICAgICAgICBwYXJzZUV4cHJlc3Npb246IHBhcnNlRXhwXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5idWlsZGVyID0gbmV3IEV4cEJ1aWxkZXIoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBY2Nlc3NvcihrZXksIGNhbGxlZSwgZXhwKSB7XG4gICAgICAgIGlmICghdGhpcy5hY2Nlc3NvcltrZXldKSB7XG4gICAgICAgICAgICB0aGlzLmFjY2Vzc29yW2tleV0gPSBuZXcgQWNjZXNzb3IoY2FsbGVlLCBleHApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWNjZXNzb3Jba2V5XTtcbiAgICB9XG5cbiAgICBhbmFseXNlKGV4cCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IHRoaXMucGFyc2VyLnBhcnNlRXhwcmVzc2lvbihleHApO1xuICAgICAgICByZXR1cm4gdGhpcy5hbmFseXNlUHJvZ3JhbShwcm9ncmFtKTtcbiAgICB9XG5cbiAgICBhbmFseXNlUHJvZ3JhbShwcm9ncmFtKSB7XG4gICAgICAgIHRoaXMuYWNjZXNzb3IgPSB7fTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcbiAgICAgICAgcHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlTm9kZShjaGlsZCkpO1xuICAgICAgICByZXR1cm4gdGhpcy5hY2Nlc3NvcjtcbiAgICB9XG5cbiAgICBhbmFseXNlTm9kZShub2RlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBudWxsO1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUV4cHJlc3Npb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUNvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHRoaXMuYW5hbHlzZUxvZ2ljKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQmluYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VDYWxsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTWVtYmVyRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmFuYWx5c2VNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUlkZW50aWZpZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZUxpdGVyYWwobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5BcnJheUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICB0aGlzLmFuYWx5c2VQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgdGhpcy5hbmFseXNlT2JqZWN0KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBhbmFseXNlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgZXhwLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB0aGlzLmFuYWx5c2VOb2RlKGNoaWxkKSk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGFzc2lnbm1lbnQucmlnaHQpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDb25kaXRpb24oY29uZGl0aW9uKSB7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5hbHRlcm5hdGUpO1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICB9XG5cbiAgICBhbmFseXNlTG9naWMobG9naWMpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5sZWZ0KTtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShsb2dpYy5yaWdodCk7XG4gICAgfVxuXG4gICAgYW5hbHlzZUJpbmFyeShiaW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZShiaW5hcnkubGVmdCk7XG4gICAgICAgIHRoaXMuYW5hbHlzZU5vZGUoYmluYXJ5LnJpZ2h0KTtcbiAgICB9XG5cbiAgICBhbmFseXNlVW5hcnkodW5hcnkpIHtcbiAgICAgICAgdGhpcy5hbmFseXNlTm9kZSh1bmFyeS5hcmcpO1xuICAgIH1cblxuICAgIGFuYWx5c2VDYWxsKGNhbGwpIHtcbiAgICAgICAgY2FsbC5hcmdzLmZvckVhY2goYXJnID0+IHRoaXMuYW5hbHlzZU5vZGUoYXJnKSk7XG5cbiAgICAgICAgaWYgKCFjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdGhpcy5hbmFseXNlTm9kZShjYWxsLmNhbGxlZSwgeyBjYWxsZWU6IHRydWUgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlTWVtYmVyKG1lbWJlciwgY29udGV4dCkge1xuICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5hbmFseXNlTm9kZShtZW1iZXIub2JqZWN0KTtcblxuICAgICAgICBpZiAobWVtYmVyLmNvbXB1dGVkKSB7XG4gICAgICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKG1lbWJlci5wcm9wZXJ0eSwge1xuICAgICAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChtZW1iZXIucHJvcGVydHkudHlwZSA9PT0gQVNULkxpdGVyYWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmNyZWF0ZUNoaWxkKG1lbWJlci5wcm9wZXJ0eS52YWx1ZSwgY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQobWVtYmVyLnByb3BlcnR5KTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhcmVudC5jcmVhdGVDaGlsZChrZXksIGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYW5hbHlzZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICBwYXJlbnQ6IHBhcmVudCxcbiAgICAgICAgICAgIGNhbGxlZTogY29udGV4dCAmJiBjb250ZXh0LmNhbGxlZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhbmFseXNlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoaWRlbnRpZmllciksXG4gICAgICAgICAgICBjYWxsZWUgPSBjb250ZXh0ICYmIGNvbnRleHQuY2FsbGVlO1xuXG4gICAgICAgIGlmIChjb250ZXh0ICYmIGNvbnRleHQucGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gY29udGV4dC5wYXJlbnQuY3JlYXRlQ2hpbGQoa2V5LCBjYWxsZWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjZXNzb3Ioa2V5LCBjYWxsZWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VMaXRlcmFsKGxpdGVyYWwsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGRlci5idWlsZChsaXRlcmFsKTtcblxuICAgICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0LnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbnRleHQucGFyZW50LmNyZWF0ZUNoaWxkKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbmFseXNlUHJvcGVydHkocHJvcCkge1xuICAgICAgICB0aGlzLmFuYWx5c2VOb2RlKHByb3AudmFsdWUpO1xuICAgIH1cblxuICAgIGFuYWx5c2VPYmplY3Qob2JqKSB7XG4gICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2goaXRlbSA9PiB0aGlzLmFuYWx5c2VOb2RlKGl0ZW0pKTtcbiAgICB9XG5cbiAgICBhbmFseXNlQXJyYXkoYXJyKSB7XG4gICAgICAgIGFyci5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdGhpcy5hbmFseXNlKGNoaWxkKSk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEFTVCwgTnVsbEV4cHJlc3Npb25Ob2RlIH0gZnJvbSAnLi9tb2RlbCc7XG5pbXBvcnQgeyBFeHBCdWlsZGVyIH0gZnJvbSAnLi9leHAtYnVpbGRlcic7XG5pbXBvcnQgeyBwYXJzZUV4cCB9ICBmcm9tICcuL2V4cC1hcGknO1xuXG5leHBvcnQgY2xhc3MgRXZhbHVhdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgICAgICAgICBhc3NpZ25JbnRlcmNlcHRvcjogbnVsbFxuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gbnVsbDtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBudWxsO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgRXhwQnVpbGRlcigpO1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXIgfHwgIHtcbiAgICAgICAgICAgIHBhcnNlRXhwcmVzc2lvbjogcGFyc2VFeHBcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBnZXQgdmFsdWUgZnJvbSBleHByZXNzaW9uXG4gICAgZXZhbHVhdGUoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnBhcnNlci5wYXJzZUV4cHJlc3Npb24oZXhwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9ncmFtKHByb2dyYW0sIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuXG4gICAgICAgIHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoY2hpbGQpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAocmVzdWx0ICYmIHJlc3VsdC4kbnVsbCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlIHRvIGV4cHJlc3Npb25cbiAgICBhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHZhciBwcm9ncmFtID0gdGhpcy5wYXJzZXIucGFyc2VFeHByZXNzaW9uKGV4cCk7XG4gICAgICAgIHJldHVybiB0aGlzLmFzc2lnblByb2dyYW0ocHJvZ3JhbSwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgYXNzaWduUHJvZ3JhbShwcm9ncmFtLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuXG4gICAgICAgIGlmICh0aGlzLnByb2dyYW0uY2hpbGROb2Rlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih1dGlscy5mb3JtYXQoJ3swfSBpcyBub3QgYSB2YWxpZCBhc3NpZ25tZW50JywgZXhwKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZXhwcmVzc2lvbiA9IHRoaXMucHJvZ3JhbS5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChleHByZXNzaW9uLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG5vdCBhIHZhbGlkIGFzc2lnbm1lbnQnLCBleHApKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBhc3NpZ25tZW50ID0gZXhwcmVzc2lvbi5jaGlsZE5vZGVzWzBdO1xuXG4gICAgICAgIGlmIChhc3NpZ25tZW50LnR5cGUgPT09IEFTVC5NZW1iZXJFeHByZXNzaW9uKSB7XG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5vYmplY3QpO1xuXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbnVsbCBvciB1bmRlZmluZWQnLCB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudC5vYmplY3QpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShhc3NpZ25tZW50LnByb3BlcnR5LCB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlLZXk6ICFhc3NpZ25tZW50LmNvbXB1dGVkXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGtleSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKHV0aWxzLmZvcm1hdCgnezB9IGlzIG51bGwgb3IgdW5kZWZpbmVkJywgdGhpcy5idWlsZGVyLmJ1aWxkKGFzc2lnbm1lbnQucHJvcGVydHkpKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IuY2FsbCh0aGlzLCB0YXJnZXQsIGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGFzc2lnbm1lbnQudHlwZSA9PT0gQVNULklkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLmJ1aWxkZXIuYnVpbGQoYXNzaWdubWVudCk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMuYXNzaWduSW50ZXJjZXB0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NvcGVba2V5XSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGhpcy5zY29wZSwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCd7MH0gaXMgbm90IGEgdmFsaWQgYXNzaWdubWVudCcsIGV4cCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGVOb2RlKG5vZGUsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBzd2l0Y2ggKG5vZGUudHlwZSkge1xuICAgICAgICAgICAgY2FzZSBBU1QuRXhwcmVzc2lvblN0YXRlbWVudDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlRXhwcmVzc2lvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVBc3NpZ25tZW50KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVDb25kaXRpb24obm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Mb2dpY2FsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTG9naWMobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5CaW5hcnlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVCaW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5VbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZVVuYXJ5KG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQ2FsbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5ldmFsdWF0ZUNhbGwobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5NZW1iZXJFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVNZW1iZXIobm9kZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5JZGVudGlmaWVyOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVJZGVudGlmaWVyKG5vZGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuTGl0ZXJhbDpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlTGl0ZXJhbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkFycmF5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlQXJyYXkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Qcm9wZXJ0eTpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmV2YWx1YXRlUHJvcGVydHkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5PYmplY3RFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVPYmplY3Qobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlRXhwcmVzc2lvbihleHApIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcblxuICAgICAgICBleHAuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZUFzc2lnbm1lbnQoYXNzaWdubWVudCkge1xuICAgICAgICB2YXIgdGFyZ2V0ID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5sZWZ0LCB7XG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYXNzaWdubWVudC5yaWdodCk7XG5cbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hc3NpZ25JbnRlcmNlcHRvciA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQub2JqW3RhcmdldC5wcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmFzc2lnbkludGVyY2VwdG9yLmNhbGwodGhpcywgdGFyZ2V0Lm9iaiwgdGFyZ2V0LnByb3AsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV2YWx1YXRlQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICBpZiAodGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLnRlc3QpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmFsdGVybmF0ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoY29uZGl0aW9uLmNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGV2YWx1YXRlTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGxvZ2ljLnJpZ2h0KTtcblxuICAgICAgICBzd2l0Y2ggKGxvZ2ljLm9wZXJhdG9yKSB7XG4gICAgICAgICAgICBjYXNlICcmJic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd8fCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICYmIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUoYmluYXJ5LmxlZnQpO1xuICAgICAgICB2YXIgcmlnaHRWYWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKGJpbmFyeS5yaWdodCk7XG5cbiAgICAgICAgLy8gJysnLCAnLScsICcqJywgJy8nLCAnJScsICc8JywgJz4nLCAnPD0nLCAnPj0nLCAnPT0nLCAnIT0nLCAnPT09JywgJyE9PSdcbiAgICAgICAgc3dpdGNoIChiaW5hcnkub3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJysnOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSArIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgLSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnKic6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICogcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy8nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSAvIHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICclJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBsZWZ0VmFsdWUgJSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnPCc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDwgcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJz4nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA+IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc8PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlIDw9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID49IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlID09IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchPSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9IHJpZ2h0VmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICc9PT0nOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGxlZnRWYWx1ZSA9PT0gcmlnaHRWYWx1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyE9PSc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gbGVmdFZhbHVlICE9PSByaWdodFZhbHVlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBldmFsdWF0ZVVuYXJ5KHVuYXJ5KSB7XG4gICAgICAgIHZhciByZXN1bHQsXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMuZXZhbHVhdGVOb2RlKHVuYXJ5LmFyZyk7XG5cbiAgICAgICAgc3dpdGNoICh1bmFyeS5vcGVyYXRvcikge1xuICAgICAgICAgICAgY2FzZSAnKyc6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICctJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAtdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICchJzpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAhdmFsdWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQ2FsbChjYWxsKSB7XG4gICAgICAgIHZhciBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUoYXJnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLmV2YWx1YXRlTm9kZShjYWxsLmNhbGxlZSwge1xuICAgICAgICAgICAgY2FsbGVlOiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjYWxsLmZpbHRlcikge1xuICAgICAgICAgICAgdmFyIGZpbHRlciA9IHRoaXMuc2NvcGUuJGdldEZpbHRlcihjb250ZXh0LnByb3ApO1xuXG4gICAgICAgICAgICBpZihmaWx0ZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmlsdGVyIFwiJyArIGNvbnRleHQucHJvcCArICdcIiBpcyBub3QgZGVmaW5lZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyLmV4ZWN1dGUuYXBwbHkoZmlsdGVyLCBhcmdWYWx1ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGZuID0gY29udGV4dC5vYmpbY29udGV4dC5wcm9wXTtcbiAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGZuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShjb250ZXh0Lm9iaiwgYXJnVmFsdWVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihjb250ZXh0LnByb3AgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBldmFsdWF0ZU1lbWJlcihtZW1iZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuZXZhbHVhdGVOb2RlKG1lbWJlci5vYmplY3QpO1xuXG4gICAgICAgIGlmIChvYmogPT0gbnVsbCAmJiAodGhpcy5vcHRpb25zLmFsbG93TnVsbCB8fCBtZW1iZXIub2JqZWN0LmFsbG93TnVsbCkpIHtcbiAgICAgICAgICAgIG9iaiA9IG5ldyBOdWxsRXhwcmVzc2lvbk5vZGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHZhciBwcm9wID0gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5KTtcbiAgICAgICAgICAgIHJldHVybiBvYmpbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5ldmFsdWF0ZU5vZGUobWVtYmVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgICB0YXJnZXQ6IG9iaixcbiAgICAgICAgICAgIHRhcmdldE5vZGU6IG1lbWJlci5vYmplY3QsXG4gICAgICAgICAgICBjYWxsZWU6IGNvbnRleHQgJiYgY29udGV4dC5jYWxsZWUsXG4gICAgICAgICAgICBhc3NpZ25tZW50TGVmdDogY29udGV4dCAmJiBjb250ZXh0LmFzc2lnbm1lbnRMZWZ0XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGV2YWx1YXRlSWRlbnRpZmllcihpZGVudGlmaWVyLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciB0YXJnZXQ7XG5cbiAgICAgICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XG5cbiAgICAgICAgaWYgKGNvbnRleHQudGFyZ2V0Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSB0aGlzLnNjb3BlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFyZ2V0ID0gY29udGV4dC50YXJnZXRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LmFzc2lnbm1lbnRMZWZ0IHx8IGNvbnRleHQuY2FsbGVlKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG9iajogdGFyZ2V0LFxuICAgICAgICAgICAgICAgIHByb3A6IGlkZW50aWZpZXIubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb250ZXh0LnByb3BlcnR5S2V5KSB7XG4gICAgICAgICAgICByZXR1cm4gaWRlbnRpZmllci5uYW1lO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IHRhcmdldFtpZGVudGlmaWVyLm5hbWVdO1xuXG4gICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCAmJiB0aGlzLmxvY2Fscykge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5sb2NhbHNbaWRlbnRpZmllci5uYW1lXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgcmV0dXJuIGxpdGVyYWwudmFsdWU7XG4gICAgfVxuXG4gICAgZXZhbHVhdGVQcm9wZXJ0eShwcm9wKSB7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmV2YWx1YXRlTm9kZShwcm9wLmtleSwge1xuICAgICAgICAgICAgcHJvcGVydHlLZXk6IHRydWVcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5ldmFsdWF0ZU5vZGUocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZXZhbHVhdGVPYmplY3Qob2JqKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBvYmoucHJvcGVydGllcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdmFyIGRlZiA9IHRoaXMuZXZhbHVhdGVOb2RlKGl0ZW0pO1xuICAgICAgICAgICAgcmVzdWx0W2RlZi5rZXldID0gZGVmLnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGV2YWx1YXRlQXJyYXkoYXJyKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBhcnIuY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuZXZhbHVhdGVOb2RlKGNoaWxkKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cExleGVyIH0gZnJvbSAnLi9leHAtbGV4ZXInO1xuaW1wb3J0IHsgRXhwUGFyc2VyIH0gZnJvbSAnLi9leHAtcGFyc2VyJztcblxuZnVuY3Rpb24gbGV4RXhwKGV4cCkge1xuICAgIHJldHVybiBuZXcgRXhwTGV4ZXIoKS5sZXgoZXhwKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VFeHAoZXhwKSB7XG4gICAgcmV0dXJuIG5ldyBFeHBQYXJzZXIobmV3IEV4cExleGVyKCkpLnBhcnNlKGV4cCk7XG59XG5cbmV4cG9ydCB7IGxleEV4cCwgcGFyc2VFeHAgfTsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL21vZGVsJztcblxuZXhwb3J0IGNsYXNzIEV4cEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQobm9kZSkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIHN3aXRjaCAobm9kZS50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEFTVC5FeHByZXNzaW9uU3RhdGVtZW50OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRFeHByZXNzaW9uKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXNzaWdubWVudEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEFzc2lnbm1lbnQobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5Db25kaXRpb25hbEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZENvbmRpdGlvbihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkxvZ2ljYWxFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMb2dpYyhub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULkJpbmFyeUV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZEJpbmFyeShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlVuYXJ5RXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkVW5hcnkobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5DYWxsRXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0aGlzLmJ1aWxkQ2FsbChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk1lbWJlckV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE1lbWJlcihub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULklkZW50aWZpZXI6XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZElkZW50aWZpZXIobm9kZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEFTVC5MaXRlcmFsOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRMaXRlcmFsKG5vZGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBBU1QuQXJyYXlFeHByZXNzaW9uOlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRBcnJheShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULlByb3BlcnR5OlxuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYnVpbGRQcm9wZXJ0eShub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgQVNULk9iamVjdEV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZE9iamVjdChub2RlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRFeHByZXNzaW9uKGV4cCkge1xuICAgICAgICB2YXIgcmVzdWx0O1xuXG4gICAgICAgIGV4cC5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgYnVpbGRBc3NpZ25tZW50KGFzc2lnbm1lbnQpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRoaXMuYnVpbGQoYXNzaWdubWVudC5sZWZ0KTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWlsZChhc3NpZ25tZW50LnJpZ2h0KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9PXsxfScsIHRhcmdldCwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQ29uZGl0aW9uKGNvbmRpdGlvbikge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMuYnVpbGQoY29uZGl0aW9uLnRlc3QpO1xuICAgICAgICB2YXIgYWx0ZXJuYXRlID0gdGhpcy5idWlsZChjb25kaXRpb24uYWx0ZXJuYXRlKTtcbiAgICAgICAgdmFyIGNvbnNlcXVlbnQgPSB0aGlzLmJ1aWxkKGNvbmRpdGlvbi5jb25zZXF1ZW50KTtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9P3sxfTp7Mn0nLCB0ZXN0LCBhbHRlcm5hdGUsIGNvbnNlcXVlbnQpO1xuICAgIH1cblxuICAgIGJ1aWxkTG9naWMobG9naWMpIHtcbiAgICAgICAgdmFyIGxlZnRWYWx1ZSA9IHRoaXMuYnVpbGQobG9naWMubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChsb2dpYy5yaWdodCk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfXsyfScsIGxlZnRWYWx1ZSwgbG9naWMub3BlcmF0b3IsIHJpZ2h0VmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkQmluYXJ5KGJpbmFyeSkge1xuICAgICAgICB2YXIgbGVmdFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkubGVmdCk7XG4gICAgICAgIHZhciByaWdodFZhbHVlID0gdGhpcy5idWlsZChiaW5hcnkucmlnaHQpO1xuICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCd7MH17MX17Mn0nLCBsZWZ0VmFsdWUsIGJpbmFyeS5vcGVyYXRvciwgcmlnaHRWYWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRVbmFyeSh1bmFyeSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1aWxkKHVuYXJ5LmFyZyk7XG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfXsxfScsIHVuYXJ5Lm9wZXJhdG9yLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgYnVpbGRDYWxsKGNhbGwpIHtcbiAgICAgICAgdmFyIHJlcyA9ICcnLCBhcmdWYWx1ZXMgPSBjYWxsLmFyZ3MubWFwKGFyZyA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChhcmcpO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZm4gPSB0aGlzLmJ1aWxkKGNhbGwuY2FsbGVlKTtcblxuICAgICAgICBpZiAoY2FsbC5maWx0ZXIpIHtcbiAgICAgICAgICAgIGlmIChhcmdWYWx1ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IGFyZ1ZhbHVlcy5zaGlmdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXMgKz0gJyB8ICcgKyBmbjtcblxuICAgICAgICAgICAgaWYgKGFyZ1ZhbHVlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcmVzICs9ICc6JyArIHV0aWxzLmpvaW4oJzonLCBhcmdWYWx1ZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmVzID0gdXRpbHMuZm9ybWF0KCd7MH0oezF9KScsIGZuLCB1dGlscy5qb2luKCcsICcsIGFyZ1ZhbHVlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG5cbiAgICBidWlsZE1lbWJlcihtZW1iZXIpIHtcbiAgICAgICAgdmFyIG9iaiA9IHRoaXMuYnVpbGQobWVtYmVyLm9iamVjdCk7XG4gICAgICAgIHZhciBwcm9wID0gdGhpcy5idWlsZChtZW1iZXIucHJvcGVydHkpO1xuXG4gICAgICAgIGlmIChtZW1iZXIuY29tcHV0ZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfVt7MX1dJywgb2JqLCBwcm9wKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5mb3JtYXQoJ3swfS57MX0nLCBvYmosIHByb3ApO1xuICAgIH1cblxuICAgIGJ1aWxkSWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gICAgICAgIHJldHVybiBpZGVudGlmaWVyLm5hbWU7XG4gICAgfVxuXG4gICAgYnVpbGRMaXRlcmFsKGxpdGVyYWwpIHtcbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGxpdGVyYWwudmFsdWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdXRpbHMuZm9ybWF0KCdcInswfVwiJywgbGl0ZXJhbC52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGl0ZXJhbC52YWx1ZTtcbiAgICB9XG5cbiAgICBidWlsZFByb3BlcnR5KHByb3ApIHtcbiAgICAgICAgdmFyIGtleSA9IHRoaXMuYnVpbGQocHJvcC5rZXksIHtcbiAgICAgICAgICAgIHByb3BlcnR5S2V5OiB0cnVlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuYnVpbGQocHJvcC52YWx1ZSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnezB9OnsxfScsIGtleSwgdmFsdWUpO1xuICAgIH1cblxuICAgIGJ1aWxkT2JqZWN0KG9iaikge1xuICAgICAgICB2YXIgcHJvcHMgPSBvYmoucHJvcGVydGllcy5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChpdGVtKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgne3swfX0nLCB1dGlscy5qb2luKCcsICcsIHByb3BzKSk7XG4gICAgfVxuXG4gICAgYnVpbGRBcnJheShhcnIpIHtcbiAgICAgICAgdmFyIGl0ZW1zID0gYXJyLmNoaWxkTm9kZXMubWFwKGNoaWxkID0+IHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHV0aWxzLmZvcm1hdCgnW3swfV0nLCB1dGlscy5qb2luKCcsJywgaXRlbXMpKTtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgT1BFUkFUT1JTIH0gZnJvbSAnLi9leHAtb3BlcmF0b3JzJztcbmltcG9ydCB7IHBhcnNlT3B0aW9ucyB9IGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5cbmV4cG9ydCBjbGFzcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB1dGlscy5tZXJnZShwYXJzZU9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJ1wiJyB8fCBjaCA9PT0gJ1xcJycpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRTdHJpbmcoY2gpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTnVtYmVyKGNoKSB8fCBjaCA9PT0gJy4nICYmIHRoaXMuaXNOdW1iZXIodGhpcy5wZWVrKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTnVtYmVyKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuaXNJZGVudGlmaWVyU3RhcnQodGhpcy5wZWVrTXVsdGljaGFyKCkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkSWRlbnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pcyhjaCwgJygpe31bXS4sOzo/JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6IGNoIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc1doaXRlc3BhY2UoY2gpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY2gyID0gY2ggKyB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgICAgICB2YXIgY2gzID0gY2gyICsgdGhpcy5wZWVrKDIpO1xuICAgICAgICAgICAgICAgIHZhciBvcDEgPSBPUEVSQVRPUlNbY2hdO1xuICAgICAgICAgICAgICAgIHZhciBvcDIgPSBPUEVSQVRPUlNbY2gyXTtcbiAgICAgICAgICAgICAgICB2YXIgb3AzID0gT1BFUkFUT1JTW2NoM107XG4gICAgICAgICAgICAgICAgaWYgKG9wMSB8fCBvcDIgfHwgb3AzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b2tlbiA9IG9wMyA/IGNoMyA6IChvcDIgPyBjaDIgOiBjaCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogdG9rZW4sIG9wZXJhdG9yOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHRva2VuLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ1VuZXhwZWN0ZWQgbmV4dCBjaGFyYWN0ZXIgJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxuXG4gICAgaXMoY2gsIGNoYXJzKSB7XG4gICAgICAgIHJldHVybiBjaGFycy5pbmRleE9mKGNoKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgcGVlayhpKSB7XG4gICAgICAgIHZhciBudW0gPSBpIHx8IDE7XG4gICAgICAgIHJldHVybiAodGhpcy5pbmRleCArIG51bSA8IHRoaXMudGV4dC5sZW5ndGgpID8gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4ICsgbnVtKSA6IGZhbHNlO1xuICAgIH1cblxuICAgIGlzTnVtYmVyKGNoKSB7XG4gICAgICAgIHJldHVybiAoJzAnIDw9IGNoICYmIGNoIDw9ICc5JykgJiYgdHlwZW9mIGNoID09PSAnc3RyaW5nJztcbiAgICB9XG5cbiAgICBpc1doaXRlc3BhY2UoY2gpIHtcbiAgICAgICAgLy8gSUUgdHJlYXRzIG5vbi1icmVha2luZyBzcGFjZSBhcyBcXHUwMEEwXG4gICAgICAgIHJldHVybiAoY2ggPT09ICcgJyB8fCBjaCA9PT0gJ1xccicgfHwgY2ggPT09ICdcXHQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ1xcbicgfHwgY2ggPT09ICdcXHYnIHx8IGNoID09PSAnXFx1MDBBMCcpO1xuICAgIH1cblxuICAgIGlzSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuaXNJZGVudGlmaWVyU3RhcnQgP1xuICAgICAgICAgICAgdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllclN0YXJ0KGNoLCB0aGlzLmNvZGVQb2ludEF0KGNoKSkgOlxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnKTtcbiAgICB9XG5cbiAgICBpc0lkZW50aWZpZXJDb250aW51ZShjaCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmlzSWRlbnRpZmllckNvbnRpbnVlID9cbiAgICAgICAgICAgIHRoaXMub3B0aW9ucy5pc0lkZW50aWZpZXJDb250aW51ZShjaCwgdGhpcy5jb2RlUG9pbnRBdChjaCkpIDpcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpO1xuICAgIH1cblxuICAgIGNvZGVQb2ludEF0KGNoKSB7XG4gICAgICAgIGlmIChjaC5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1iaXR3aXNlXG4gICAgICAgIHJldHVybiAoY2guY2hhckNvZGVBdCgwKSA8PCAxMCkgKyBjaC5jaGFyQ29kZUF0KDEpIC0gMHgzNUZEQzAwO1xuICAgIH1cblxuICAgIHBlZWtNdWx0aWNoYXIoKSB7XG4gICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgIHZhciBwZWVrID0gdGhpcy5wZWVrKCk7XG4gICAgICAgIGlmICghcGVlaykge1xuICAgICAgICAgICAgcmV0dXJuIGNoO1xuICAgICAgICB9XG4gICAgICAgIHZhciBjcDEgPSBjaC5jaGFyQ29kZUF0KDApO1xuICAgICAgICB2YXIgY3AyID0gcGVlay5jaGFyQ29kZUF0KDApO1xuICAgICAgICBpZiAoY3AxID49IDB4RDgwMCAmJiBjcDEgPD0gMHhEQkZGICYmIGNwMiA+PSAweERDMDAgJiYgY3AyIDw9IDB4REZGRikge1xuICAgICAgICAgICAgcmV0dXJuIGNoICsgcGVlaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2g7XG4gICAgfVxuXG4gICAgaXNFeHBPcGVyYXRvcihjaCkge1xuICAgICAgICByZXR1cm4gKGNoID09PSAnLScgfHwgY2ggPT09ICcrJyB8fCB0aGlzLmlzTnVtYmVyKGNoKSk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihlcnJvciwgc3RhcnQsIGVuZCkge1xuICAgICAgICBlbmQgPSBlbmQgfHwgdGhpcy5pbmRleDtcbiAgICAgICAgdmFyIGNvbFN0ciA9ICh1dGlscy5pc0RlZmluZWQoc3RhcnQpID8gJ3MgJyArIHN0YXJ0ICsgJy0nICsgdGhpcy5pbmRleCArICcgWycgKyB0aGlzLnRleHQuc3Vic3RyaW5nKHN0YXJ0LCBlbmQpICsgJ10nIDogJyAnICsgZW5kKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdMZXhlciBFcnJvcjogJyArIGVycm9yICsgJyBhdCBjb2x1bW4nICsgY29sU3RyICsgJyBpbiBleHByZXNzaW9uIFsnICsgdGhpcy50ZXh0ICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcmVhZE51bWJlcigpIHtcbiAgICAgICAgdmFyIG51bWJlciA9ICcnO1xuICAgICAgICB2YXIgc3RhcnQgPSB0aGlzLmluZGV4O1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHV0aWxzLmxvd2VyY2FzZSh0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpKTtcbiAgICAgICAgICAgIGlmIChjaCA9PT0gJy4nIHx8IHRoaXMuaXNOdW1iZXIoY2gpKSB7XG4gICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVla0NoID0gdGhpcy5wZWVrKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAnZScgJiYgdGhpcy5pc0V4cE9wZXJhdG9yKHBlZWtDaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICBwZWVrQ2ggJiYgdGhpcy5pc051bWJlcihwZWVrQ2gpICYmXG4gICAgICAgICAgICAgICAgICAgIG51bWJlci5jaGFyQXQobnVtYmVyLmxlbmd0aCAtIDEpID09PSAnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVyICs9IGNoO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5pc0V4cE9wZXJhdG9yKGNoKSAmJlxuICAgICAgICAgICAgICAgICAgICAoIXBlZWtDaCB8fCAhdGhpcy5pc051bWJlcihwZWVrQ2gpKSAmJlxuICAgICAgICAgICAgICAgICAgICBudW1iZXIuY2hhckF0KG51bWJlci5sZW5ndGggLSAxKSA9PT0gJ2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignSW52YWxpZCBleHBvbmVudCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IG51bWJlcixcbiAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlcihudW1iZXIpXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRJZGVudCgpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSB0aGlzLnBlZWtNdWx0aWNoYXIoKS5sZW5ndGg7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy5wZWVrTXVsdGljaGFyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNJZGVudGlmaWVyQ29udGludWUoY2gpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4ICs9IGNoLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgIGluZGV4OiBzdGFydCxcbiAgICAgICAgICAgIHRleHQ6IHRoaXMudGV4dC5zbGljZShzdGFydCwgdGhpcy5pbmRleCksXG4gICAgICAgICAgICBpZGVudGlmaWVyOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlYWRTdHJpbmcocXVvdGUpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB2YXIgc3RyaW5nID0gJyc7XG4gICAgICAgIHZhciByYXdTdHJpbmcgPSBxdW90ZTtcbiAgICAgICAgdmFyIGVzY2FwZSA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAoZXNjYXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGhleCA9IHRoaXMudGV4dC5zdWJzdHJpbmcodGhpcy5pbmRleCArIDEsIHRoaXMuaW5kZXggKyA1KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoZXgubWF0Y2goL1tcXGRhLWZdezR9L2kpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ0ludmFsaWQgdW5pY29kZSBlc2NhcGUgW1xcXFx1JyArIGhleCArICddJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChoZXgsIDE2KSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlcCA9IEVTQ0FQRVtjaF07XG4gICAgICAgICAgICAgICAgICAgIHN0cmluZyA9IHN0cmluZyArIChyZXAgfHwgY2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlc2NhcGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2ggPT09ICdcXFxcJykge1xuICAgICAgICAgICAgICAgIGVzY2FwZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoID09PSBxdW90ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByYXdTdHJpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0YW50OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RyaW5nXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbnRlcm1pbmF0ZWQgcXVvdGUnLCBzdGFydCk7XG4gICAgfVxufSIsImV4cG9ydCB2YXIgT1BFUkFUT1JTID0ge307XG5cbnZhciBvcGVyYXRvclRleHQgPSAnKyAtICogLyAlID09PSAhPT0gPT0gIT0gPCA+IDw9ID49ICYmIHx8ICEgPSB8JztcbnZhciBFU0NBUEUgPSB7ICduJzogJ1xcbicsICdmJzogJ1xcZicsICdyJzogJ1xccicsICd0JzogJ1xcdCcsICd2JzogJ1xcdicsICdcXCcnOiAnXFwnJywgJ1wiJzogJ1wiJyB9O1xuXG5vcGVyYXRvclRleHQuc3BsaXQoJyAnKS5mb3JFYWNoKGZ1bmN0aW9uIChvcGVyYXRvcikge1xuICAgIE9QRVJBVE9SU1tvcGVyYXRvcl0gPSB0cnVlO1xufSk7IiwiaW1wb3J0IHtcbiAgICBBU1QsXG4gICAgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlLFxuICAgIEJpbmFyeUV4cHJlc3Npb25Ob2RlLFxuICAgIENhbGxFeHByZXNzaW9uTm9kZSxcbiAgICBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlLFxuICAgIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlLFxuICAgIElkZW50aWZpZXJOb2RlLFxuICAgIExpdGVyYWxOb2RlLFxuICAgIExvZ2ljYWxFeHByZXNzaW9uTm9kZSxcbiAgICBNZW1iZXJFeHByZXNzaW9uTm9kZSxcbiAgICBPYmplY3RFeHByZXNzaW9uTm9kZSxcbiAgICBQcm9ncmFtTm9kZSxcbiAgICBQcm9wZXJ0eU5vZGUsXG4gICAgVW5hcnlFeHByZXNzaW9uTm9kZSxcbiAgICBBcnJheUV4cHJlc3Npb25Ob2RlXG59IGZyb20gJy4vbW9kZWwnO1xuaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuL2V4cC1sZXhlcic7XG5pbXBvcnQgeyBwYXJzZU9wdGlvbnMgfSBmcm9tICcuL3BhcnNlLW9wdGlvbnMnO1xuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuXG5leHBvcnQgY2xhc3MgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmxleGVyID0gbGV4ZXI7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHV0aWxzLm1lcmdlKHBhcnNlT3B0aW9ucywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgdGhyb3dFcnJvcihtc2csIHRva2VuKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3ludGF4IEVycm9yOiBUb2tlbiBcXCcnICsgdG9rZW4udGV4dCArICdcXCcnICsgbXNnICsgJyBhdCBjb2x1bW4gJyArICh0b2tlbi5pbmRleCArIDEpICtcbiAgICAgICAgICAgICcgb2YgdGhlIGV4cHJlc3Npb24gWycgKyB0aGlzLnRleHQgKyAnXSBzdGFydGluZyBhdCBbJyArIHRoaXMudGV4dC5zdWJzdHJpbmcodG9rZW4uaW5kZXgpICsgJ10uJyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnRva2VucyA9IHRoaXMubGV4ZXIubGV4KHRleHQpO1xuXG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMucHJvZ3JhbSgpO1xuXG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgYW4gdW5leHBlY3RlZCB0b2tlbicsIHRoaXMudG9rZW5zWzBdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBwcm9ncmFtKCkge1xuICAgICAgICB2YXIgcHJvZ3JhbSA9IG5ldyBQcm9ncmFtTm9kZSgpO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9rZW5zLmxlbmd0aCA+IDAgJiYgIXRoaXMucGVlaygnfScsICcpJywgJzsnLCAnXScpKSB7XG4gICAgICAgICAgICAgICAgcHJvZ3JhbS5hcHBlbmRDaGlsZCh0aGlzLmV4cHJlc3Npb25TdGF0ZW1lbnQoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZXhwZWN0KCc7JykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvZ3JhbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cHJlc3Npb25TdGF0ZW1lbnQoKSB7XG4gICAgICAgIHZhciBleHAgPSBuZXcgRXhwcmVzc2lvblN0YXRlbWVudE5vZGUoKTtcbiAgICAgICAgZXhwLmFwcGVuZENoaWxkKHRoaXMuZmlsdGVyQ2hhaW4oKSk7XG4gICAgICAgIHJldHVybiBleHA7XG4gICAgfVxuXG4gICAgZmlsdGVyQ2hhaW4oKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnfCcpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gdGhpcy5maWx0ZXIobGVmdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgZXhwcmVzc2lvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYXNzaWdubWVudCgpO1xuICAgIH1cblxuICAgIGlzQXNzaWduYWJsZShhc3QpIHtcbiAgICAgICAgcmV0dXJuIGFzdC50eXBlID09PSBBU1QuSWRlbnRpZmllciB8fCBhc3QudHlwZSA9PT0gQVNULk1lbWJlckV4cHJlc3Npb247XG4gICAgfVxuXG4gICAgYXNzaWdubWVudCgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMudGVybmFyeSgpO1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz0nKSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXNzaWduYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gYXNzaWduIGEgdmFsdWUgdG8gYSBub24gbC12YWx1ZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgQXNzaWdubWVudEV4cHJlc3Npb25Ob2RlKHJlc3VsdCwgdGhpcy5hc3NpZ25tZW50KCksICc9Jyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB0ZXJuYXJ5KCkge1xuICAgICAgICB2YXIgdGVzdCA9IHRoaXMubG9naWNhbE9SKCk7XG4gICAgICAgIHZhciBhbHRlcm5hdGU7XG4gICAgICAgIHZhciBjb25zZXF1ZW50O1xuICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgYWx0ZXJuYXRlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5jb25zdW1lKCc6JykpIHtcbiAgICAgICAgICAgICAgICBjb25zZXF1ZW50ID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb25kaXRpb25hbEV4cHJlc3Npb25Ob2RlKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRlc3Q7XG4gICAgfVxuXG4gICAgbG9naWNhbE9SKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMubG9naWNhbEFORCgpO1xuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJ3x8JykpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgTG9naWNhbEV4cHJlc3Npb25Ob2RlKCd8fCcsIGxlZnQsIHRoaXMubG9naWNhbEFORCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBsb2dpY2FsQU5EKCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMuZXF1YWxpdHkoKTtcbiAgICAgICAgd2hpbGUgKHRoaXMuZXhwZWN0KCcmJicpKSB7XG4gICAgICAgICAgICBsZWZ0ID0gbmV3IExvZ2ljYWxFeHByZXNzaW9uTm9kZSgnJiYnLCBsZWZ0LCB0aGlzLmVxdWFsaXR5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIGVxdWFsaXR5KCkge1xuICAgICAgICB2YXIgbGVmdCA9IHRoaXMucmVsYXRpb25hbCgpO1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIHdoaWxlICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnPT0nLCAnIT0nLCAnPT09JywgJyE9PScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnJlbGF0aW9uYWwoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxlZnQ7XG4gICAgfVxuXG4gICAgcmVsYXRpb25hbCgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLmFkZGl0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCc8JywgJz4nLCAnPD0nLCAnPj0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5hZGRpdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBhZGRpdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLm11bHRpcGxpY2F0aXZlKCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcrJywgJy0nKSkpIHtcbiAgICAgICAgICAgIGxlZnQgPSBuZXcgQmluYXJ5RXhwcmVzc2lvbk5vZGUodG9rZW4udGV4dCwgbGVmdCwgdGhpcy5tdWx0aXBsaWNhdGl2ZSgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbGVmdDtcbiAgICB9XG5cbiAgICBtdWx0aXBsaWNhdGl2ZSgpIHtcbiAgICAgICAgdmFyIGxlZnQgPSB0aGlzLnVuYXJ5KCk7XG4gICAgICAgIHZhciB0b2tlbjtcbiAgICAgICAgd2hpbGUgKCh0b2tlbiA9IHRoaXMuZXhwZWN0KCcqJywgJy8nLCAnJScpKSkge1xuICAgICAgICAgICAgbGVmdCA9IG5ldyBCaW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCBsZWZ0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsZWZ0O1xuICAgIH1cblxuICAgIHVuYXJ5KCkge1xuICAgICAgICB2YXIgdG9rZW47XG4gICAgICAgIGlmICgodG9rZW4gPSB0aGlzLmV4cGVjdCgnKycsICctJywgJyEnKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgVW5hcnlFeHByZXNzaW9uTm9kZSh0b2tlbi50ZXh0LCB0aGlzLnVuYXJ5KCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJpbWFyeSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpbWFyeSgpIHtcbiAgICAgICAgdmFyIHByaW1hcnk7XG4gICAgICAgIGlmICh0aGlzLmV4cGVjdCgnKCcpKSB7XG4gICAgICAgICAgICBwcmltYXJ5ID0gdGhpcy5maWx0ZXJDaGFpbigpO1xuICAgICAgICAgICAgdGhpcy5jb25zdW1lKCcpJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5leHBlY3QoJ1snKSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuYXJyYXlEZWNsYXJhdGlvbigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZXhwZWN0KCd7JykpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLm9iamVjdCgpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5saXRlcmFscy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnBlZWsoKS50ZXh0KSkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IG5ldyBMaXRlcmFsTm9kZSh0aGlzLm9wdGlvbnMubGl0ZXJhbHNbdGhpcy5jb25zdW1lKCkudGV4dF0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucGVlaygpLmlkZW50aWZpZXIpIHtcbiAgICAgICAgICAgIHByaW1hcnkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgcHJpbWFyeSA9IHRoaXMuY29uc3RhbnQoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignbm90IGEgcHJpbWFyeSBleHByZXNzaW9uJywgdGhpcy5wZWVrKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5leHQ7XG4gICAgICAgIHdoaWxlICh0aGlzLnBlZWsoJygnLCAnWycsICcuJykgfHwgKHRoaXMucGVlaygnPycpICYmIHRoaXMucGVla0FoZWFkKDEsICcuJykpKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3QoJz8nKSkge1xuICAgICAgICAgICAgICAgIHByaW1hcnkuYWxsb3dOdWxsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuZXhwZWN0KCcoJywgJ1snLCAnLicpO1xuXG4gICAgICAgICAgICBpZiAobmV4dC50ZXh0ID09PSAnKCcpIHtcbiAgICAgICAgICAgICAgICBwcmltYXJ5ID0gbmV3IENhbGxFeHByZXNzaW9uTm9kZShwcmltYXJ5LCB0aGlzLnBhcnNlQXJndW1lbnRzKCkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnKScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICdbJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5leHByZXNzaW9uKCksIHRydWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChuZXh0LnRleHQgPT09ICcuJykge1xuICAgICAgICAgICAgICAgIHByaW1hcnkgPSBuZXcgTWVtYmVyRXhwcmVzc2lvbk5vZGUocHJpbWFyeSwgdGhpcy5pZGVudGlmaWVyKCksIGZhbHNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdJTVBPU1NJQkxFJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByaW1hcnk7XG4gICAgfVxuXG4gICAgZmlsdGVyKGJhc2VFeHByZXNzaW9uKSB7XG4gICAgICAgIHZhciBhcmdzID0gW2Jhc2VFeHByZXNzaW9uXSwgaWRlbnRpZmllcnMgPSBbdGhpcy5pZGVudGlmaWVyKCldO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmV4cGVjdCgnLicpKSB7XG4gICAgICAgICAgICBpZGVudGlmaWVycy5wdXNoKHRoaXMuaWRlbnRpZmllcigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBsdXMgbmFtZXNwYWNlXG4gICAgICAgIHZhciBlbnRpcmVOYW1lID0gaWRlbnRpZmllcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbS5uYW1lO1xuICAgICAgICB9KS5qb2luKCcuJyk7XG5cbiAgICAgICAgdmFyIHJlc3VsdCA9IG5ldyBDYWxsRXhwcmVzc2lvbk5vZGUobmV3IElkZW50aWZpZXJOb2RlKGVudGlyZU5hbWUpLCBhcmdzKTtcblxuICAgICAgICByZXN1bHQuZmlsdGVyID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZSAodGhpcy5leHBlY3QoJzonKSkge1xuICAgICAgICAgICAgYXJncy5wdXNoKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcGFyc2VBcmd1bWVudHMoKSB7XG4gICAgICAgIHZhciBhcmdzID0gW107XG4gICAgICAgIGlmICh0aGlzLnBlZWtUb2tlbigpLnRleHQgIT09ICcpJykge1xuICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgIGFyZ3MucHVzaCh0aGlzLmZpbHRlckNoYWluKCkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcigpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jb25zdW1lKCk7XG4gICAgICAgIGlmICghdG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdpcyBub3QgYSB2YWxpZCBpZGVudGlmaWVyJywgdG9rZW4pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSWRlbnRpZmllck5vZGUodG9rZW4udGV4dCk7XG4gICAgfVxuXG4gICAgY29uc3RhbnQoKSB7XG4gICAgICAgIC8vIFRPRE8gY2hlY2sgdGhhdCBpdCBpcyBhIGNvbnN0YW50XG4gICAgICAgIHJldHVybiBuZXcgTGl0ZXJhbE5vZGUodGhpcy5jb25zdW1lKCkudmFsdWUpO1xuICAgIH1cblxuICAgIGFycmF5RGVjbGFyYXRpb24oKSB7XG4gICAgICAgIHZhciBhcnIgPSBuZXcgQXJyYXlFeHByZXNzaW9uTm9kZSgpO1xuICAgICAgICBpZiAodGhpcy5wZWVrVG9rZW4oKS50ZXh0ICE9PSAnXScpIHtcbiAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wZWVrKCddJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU3VwcG9ydCB0cmFpbGluZyBjb21tYXMgcGVyIEVTNS4xLlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYXJyLmFwcGVuZENoaWxkKHRoaXMuZXhwcmVzc2lvbigpKTtcbiAgICAgICAgICAgIH0gd2hpbGUgKHRoaXMuZXhwZWN0KCcsJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29uc3VtZSgnXScpO1xuXG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfVxuXG4gICAgb2JqZWN0KCkge1xuICAgICAgICB2YXIgcHJvcGVydGllcyA9IFtdLCBwcm9wZXJ0eTtcbiAgICAgICAgaWYgKHRoaXMucGVla1Rva2VuKCkudGV4dCAhPT0gJ30nKSB7XG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnfScpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFN1cHBvcnQgdHJhaWxpbmcgY29tbWFzIHBlciBFUzUuMS5cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb3BlcnR5ID0gbmV3IFByb3BlcnR5Tm9kZSgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBlZWsoKS5jb25zdGFudCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmNvbnN0YW50KCk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmNvbXB1dGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uc3VtZSgnOicpO1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCkuaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS5rZXkgPSB0aGlzLmlkZW50aWZpZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGVlaygnOicpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LnZhbHVlID0gdGhpcy5leHByZXNzaW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eS52YWx1ZSA9IHByb3BlcnR5LmtleTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wZWVrKCdbJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25zdW1lKCdbJyk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BlcnR5LmtleSA9IHRoaXMuZXhwcmVzc2lvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkuY29tcHV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnN1bWUoJzonKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcGVydHkudmFsdWUgPSB0aGlzLmV4cHJlc3Npb24oKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoJ2ludmFsaWQga2V5JywgdGhpcy5wZWVrKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzLnB1c2gocHJvcGVydHkpO1xuICAgICAgICAgICAgfSB3aGlsZSAodGhpcy5leHBlY3QoJywnKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb25zdW1lKCd9Jyk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBPYmplY3RFeHByZXNzaW9uTm9kZShwcm9wZXJ0aWVzKTtcbiAgICB9XG5cbiAgICBjb25zdW1lKGUxKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5leHBlY3RlZCBlbmQgb2YgZXhwcmVzc2lvbjogJyArIHRoaXMudGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmV4cGVjdChlMSk7XG4gICAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcignaXMgdW5leHBlY3RlZCwgZXhwZWN0aW5nIFsnICsgZTEgKyAnXScsIHRoaXMucGVlaygpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuXG4gICAgcGVla1Rva2VuKCkge1xuICAgICAgICBpZiAodGhpcy50b2tlbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuZXhwZWN0ZWQgZW5kIG9mIGV4cHJlc3Npb246ICcgKyB0aGlzLnRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1swXTtcbiAgICB9XG5cbiAgICBwZWVrKGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBlZWtBaGVhZCgwLCBlMSwgZTIsIGUzLCBlNCk7XG4gICAgfVxuXG4gICAgcGVla0FoZWFkKGksIGUxLCBlMiwgZTMsIGU0KSB7XG4gICAgICAgIGlmICh0aGlzLnRva2Vucy5sZW5ndGggPiBpKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLnRva2Vuc1tpXTtcbiAgICAgICAgICAgIHZhciB0ID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIGlmICh0ID09PSBlMSB8fCB0ID09PSBlMiB8fCB0ID09PSBlMyB8fCB0ID09PSBlNCB8fFxuICAgICAgICAgICAgICAgICghZTEgJiYgIWUyICYmICFlMyAmJiAhZTQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBleHBlY3QoZTEsIGUyLCBlMywgZTQpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdGhpcy5wZWVrKGUxLCBlMiwgZTMsIGU0KTtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICB0aGlzLnRva2Vucy5zaGlmdCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbiIsImV4cG9ydCAqIGZyb20gJy4vcGFyc2Utb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLWxleGVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwLXBhcnNlcic7XG5leHBvcnQgKiBmcm9tICcuL2V4cC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi9leHAtYnVpbGRlcic7XG5leHBvcnQgKiBmcm9tICcuL2V2YWx1YXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2FuYWx5c2VyJzsiLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBcnJheUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5BcnJheUV4cHJlc3Npb24pO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBBc3NpZ25tZW50RXhwcmVzc2lvbk5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihsZWZ0LCByaWdodCwgb3BlcmF0b3IpIHtcbiAgICAgICAgc3VwZXIoQVNULkFzc2lnbm1lbnRFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgICAgICB0aGlzLm9wZXJhdG9yID0gb3BlcmF0b3I7XG4gICAgfVxufSIsImV4cG9ydCBjbGFzcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih0eXBlKSB7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIHRoaXMuY2hpbGROb2RlcyA9IFtdO1xuICAgIH1cblxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5wdXNoKGNoaWxkKTtcbiAgICB9XG59IiwiZXhwb3J0IHZhciBBU1QgPSB7fTtcblxuQVNULlByb2dyYW0gPSAnUHJvZ3JhbSc7XG5BU1QuRXhwcmVzc2lvblN0YXRlbWVudCA9ICdFeHByZXNzaW9uU3RhdGVtZW50JztcbkFTVC5Bc3NpZ25tZW50RXhwcmVzc2lvbiA9ICdBc3NpZ25tZW50RXhwcmVzc2lvbic7XG5BU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uID0gJ0NvbmRpdGlvbmFsRXhwcmVzc2lvbic7XG5BU1QuTG9naWNhbEV4cHJlc3Npb24gPSAnTG9naWNhbEV4cHJlc3Npb24nO1xuQVNULkJpbmFyeUV4cHJlc3Npb24gPSAnQmluYXJ5RXhwcmVzc2lvbic7XG5BU1QuVW5hcnlFeHByZXNzaW9uID0gJ1VuYXJ5RXhwcmVzc2lvbic7XG5BU1QuQ2FsbEV4cHJlc3Npb24gPSAnQ2FsbEV4cHJlc3Npb24nO1xuQVNULk1lbWJlckV4cHJlc3Npb24gPSAnTWVtYmVyRXhwcmVzc2lvbic7XG5BU1QuSWRlbnRpZmllciA9ICdJZGVudGlmaWVyJztcbkFTVC5MaXRlcmFsID0gJ0xpdGVyYWwnO1xuQVNULkFycmF5RXhwcmVzc2lvbiA9ICdBcnJheUV4cHJlc3Npb24nO1xuQVNULlByb3BlcnR5ID0gJ1Byb3BlcnR5JztcbkFTVC5PYmplY3RFeHByZXNzaW9uID0gJ09iamVjdEV4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgTnVsbEV4cHJlc3Npb25Ob2RlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy4kbnVsbCA9IHRydWU7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEJpbmFyeUV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5CaW5hcnlFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIENhbGxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKGNhbGxlZSwgYXJncykge1xuICAgICAgICBzdXBlcihBU1QuQ2FsbEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLmNhbGxlZSA9IGNhbGxlZTtcbiAgICAgICAgdGhpcy5hcmdzID0gYXJncztcbiAgICAgICAgdGhpcy5maWx0ZXIgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgQ29uZGl0aW9uYWxFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHRlc3QsIGFsdGVybmF0ZSwgY29uc2VxdWVudCkge1xuICAgICAgICBzdXBlcihBU1QuQ29uZGl0aW9uYWxFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy50ZXN0ID0gdGVzdDtcbiAgICAgICAgdGhpcy5hbHRlcm5hdGUgPSBhbHRlcm5hdGU7XG4gICAgICAgIHRoaXMuY29uc2VxdWVudCA9IGNvbnNlcXVlbnQ7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIEV4cHJlc3Npb25TdGF0ZW1lbnROb2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEFTVC5FeHByZXNzaW9uU3RhdGVtZW50KTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllck5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKEFTVC5JZGVudGlmaWVyKTtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5hbGxvd051bGwgPSBmYWxzZTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9hc3QnO1xuZXhwb3J0ICogZnJvbSAnLi9hc3Qtbm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL2Fzc2lnbm1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9iaW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9jYWxsJztcbmV4cG9ydCAqIGZyb20gJy4vY29uZGl0aW9uYWwnO1xuZXhwb3J0ICogZnJvbSAnLi9leHByZXNzaW9uJztcbmV4cG9ydCAqIGZyb20gJy4vaWRlbnRpZmllcic7XG5leHBvcnQgKiBmcm9tICcuL2xpdGVyYWwnO1xuZXhwb3J0ICogZnJvbSAgJy4vbG9naWNhbCc7XG5leHBvcnQgKiBmcm9tICAnLi9tZW1iZXInO1xuZXhwb3J0ICogZnJvbSAgJy4vb2JqZWN0JztcbmV4cG9ydCAqIGZyb20gICcuL3Byb2dyYW0nO1xuZXhwb3J0ICogZnJvbSAgJy4vcHJvcGVydHknO1xuZXhwb3J0ICogZnJvbSAgJy4vdW5hcnknO1xuZXhwb3J0ICogZnJvbSAnLi9hcnJheSc7IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTGl0ZXJhbE5vZGUgZXh0ZW5kcyBBc3ROb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihBU1QuTGl0ZXJhbCk7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgTG9naWNhbEV4cHJlc3Npb25Ob2RlIGV4dGVuZHMgQXN0Tm9kZSB7XG4gICAgY29uc3RydWN0b3Iob3BlcmF0b3IsIGxlZnQsIHJpZ2h0KSB7XG4gICAgICAgIHN1cGVyKEFTVC5Mb2dpY2FsRXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMub3BlcmF0b3IgPSBvcGVyYXRvcjtcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcbiAgICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBNZW1iZXJFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9iamVjdCwgcHJvcGVydHksIGNvbXB1dGVkKSB7XG4gICAgICAgIHN1cGVyKEFTVC5NZW1iZXJFeHByZXNzaW9uKTtcbiAgICAgICAgdGhpcy5vYmplY3QgPSBvYmplY3Q7XG4gICAgICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICAgICAgdGhpcy5jb21wdXRlZCA9IGNvbXB1dGVkO1xuICAgICAgICB0aGlzLmFsbG93TnVsbCA9IGZhbHNlO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBPYmplY3RFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHByb3BlcnRpZXMpIHtcbiAgICAgICAgc3VwZXIoQVNULk9iamVjdEV4cHJlc3Npb24pO1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBBc3ROb2RlIH0gZnJvbSAnLi9hc3Qtbm9kZSc7XG5pbXBvcnQgeyBBU1QgfSBmcm9tICcuL2FzdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9ncmFtTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvZ3JhbSk7XG4gICAgfVxufSIsImltcG9ydCB7IEFzdE5vZGUgfSBmcm9tICcuL2FzdC1ub2RlJztcbmltcG9ydCB7IEFTVCB9IGZyb20gJy4vYXN0JztcblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5Tm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihBU1QuUHJvcGVydHkpO1xuICAgICAgICB0aGlzLmtpbmQgPSAnaW5pdCc7XG4gICAgICAgIHRoaXMua2V5ID0gbnVsbDtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY29tcHV0ZWQgPSBmYWxzZTtcbiAgICB9XG59IiwiaW1wb3J0IHsgQXN0Tm9kZSB9IGZyb20gJy4vYXN0LW5vZGUnO1xuaW1wb3J0IHsgQVNUIH0gZnJvbSAnLi9hc3QnO1xuXG5leHBvcnQgY2xhc3MgVW5hcnlFeHByZXNzaW9uTm9kZSBleHRlbmRzIEFzdE5vZGUge1xuICAgIGNvbnN0cnVjdG9yKG9wZXJhdG9yLCBhcmcpIHtcbiAgICAgICAgc3VwZXIoQVNULlVuYXJ5RXhwcmVzc2lvbik7XG4gICAgICAgIHRoaXMucHJlZml4ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5vcGVyYXRvciA9IG9wZXJhdG9yO1xuICAgICAgICB0aGlzLmFyZyA9IGFyZztcbiAgICB9XG59IiwiZXhwb3J0IHZhciBwYXJzZU9wdGlvbnMgPSB7XG4gICAgaXNJZGVudGlmaWVyQ29udGludWU6IGZhbHNlLFxuICAgIGlzSWRlbnRpZmllclN0YXJ0OiBmYWxzZSxcbiAgICBsaXRlcmFsczoge1xuICAgICAgICBmYWxzZTogZmFsc2UsXG4gICAgICAgIG51bGw6IG51bGwsXG4gICAgICAgIHRydWU6IHRydWUsXG4gICAgICAgIHVuZGVmaW5lZDogdW5kZWZpbmVkXG4gICAgfVxufTsiLCJleHBvcnQgKiBmcm9tICcuL3V0aWxzJztcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJztcbmV4cG9ydCAqIGZyb20gJy4vZXhwJztcbmV4cG9ydCAqIGZyb20gJy4vdHBsJztcbmV4cG9ydCAqIGZyb20gJy4vcmVuZGVyJztcbmV4cG9ydCAqIGZyb20gJy4vdmlldyc7XG5leHBvcnQgKiBmcm9tICcuL2RlY29yYXRvcic7XG5leHBvcnQgKiBmcm9tICcuL2RpcmVjdGl2ZSc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudCc7IiwiZXhwb3J0IGNsYXNzIERlbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKGhhbmRsZXIsIHRpbWVvdXQpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICB9XG5cbiAgICBleGVjdXRlKHNjb3BlKSB7XG4gICAgICAgIGlmKHRoaXMuZGVsYXlJZCAhPSBudWxsKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZGVsYXlJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kZWxheUlkID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlci5jYWxsKHNjb3BlKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICBpZiAodGhpcy5kZWxheUlkICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlbGF5SWQpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vcHJveHknO1xyXG5leHBvcnQgKiBmcm9tICcuL29ic2VydmVyJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBFdmFsdWF0b3IsIEFuYWx5c2VyIH0gZnJvbSAnLi4vZXhwJztcbmltcG9ydCB7IFdhdGNoZXIgfSBmcm9tICcuL3dhdGNoZXInO1xuaW1wb3J0IHsgRGVsYXllciB9IGZyb20gJy4vZGVsYXllcic7XG5cbmNsYXNzIExpc3RlbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZXhwID0gZXhwO1xuICAgICAgICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICAgICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb2xsZWN0aW9uQ2hhbmdlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldE5ld1ZhbHVlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMubmV3VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy52YWx1ZUNoYW5nZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHNldENvbGxlY3Rpb25DaGFuZ2VkKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuY29sbGVjdGlvbkNoYW5nZWQgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBoYXNDaGFuZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbHVlQ2hhbmdlZCB8fCB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuICAgIH1cblxuICAgIG5vdGlmeShzY29wZSkge1xuICAgICAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgbmV3VmFsdWUgPSB0aGlzLm5ld1ZhbHVlLFxuICAgICAgICAgICAgY29sbGVjdGlvbkNoYW5nZWQgPSB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkO1xuXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmNvbGxlY3Rpb25DaGFuZ2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVyLmNhbGwoc2NvcGUsIHtcbiAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgIG5ld1ZhbHVlOiBuZXdWYWx1ZSxcbiAgICAgICAgICAgIGNvbGxlY3Rpb25DaGFuZ2VkOiBjb2xsZWN0aW9uQ2hhbmdlZFxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBPYnNlcnZlciB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUpIHtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmFjY2Vzc29ycyA9IHt9O1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLndhdGNoZXIgPSBuZXcgV2F0Y2hlcigpO1xuICAgICAgICB0aGlzLmFuYWx5c2VyID0gbmV3IEFuYWx5c2VyKHNjb3BlLiRwYXJzZXIpO1xuICAgICAgICB0aGlzLmRlbGF5ZXIgPSBuZXcgRGVsYXllcih0aGlzLm5vdGlmeSwgMTYpO1xuICAgICAgICB0aGlzLmV2YWx1YXRvciA9ICBuZXcgRXZhbHVhdG9yKHRoaXMuc2NvcGUsIHtcbiAgICAgICAgICAgIGFsbG93TnVsbDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IG5ldyBMaXN0ZW5lcihleHAsIGhhbmRsZXIsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICB9XG5cbiAgICByZW1vdmVMaXN0ZW5lcihsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmxpc3RlbmVycy5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbm90aWZ5KCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKGxpc3RlbmVyID0+IHtcbiAgICAgICAgICAgIGlmKGxpc3RlbmVyLmhhc0NoYW5nZSgpKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIubm90aWZ5KHRoaXMuc2NvcGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBub3RpZnlDaGFuZ2UobGlzdGVuZXIsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuZXdWYWx1ZSkge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0TmV3VmFsdWUobmV3VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXIuc2V0Q29sbGVjdGlvbkNoYW5nZWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kZWxheWVyLmV4ZWN1dGUodGhpcyk7XG4gICAgfVxuXG4gICAgZ2V0QWNjZXNzb3IoZXhwKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmFjY2Vzc29yc1tleHBdO1xuXG4gICAgICAgIGlmKCFyZXN1bHQpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuYW5hbHlzZXIuYW5hbHlzZShleHApO1xuICAgICAgICAgICAgdGhpcy5hY2Nlc3NvcnNbZXhwXSA9IHJlc3VsdDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dGlscy5jb3B5KHRydWUsIHJlc3VsdCk7XG4gICAgfVxuXG4gICAgd2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgYWNjZXNzb3IgPSB0aGlzLmdldEFjY2Vzc29yKGV4cCk7XG4gICAgICAgIHZhciBldmFsdWF0b3IgPSAgdGhpcy5ldmFsdWF0b3I7XG4gICAgICAgIHZhciBsaXN0ZW5lciA9IHRoaXMuY3JlYXRlTGlzdGVuZXIoZXhwLCBoYW5kbGVyLCBldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpKTtcblxuICAgICAgICBmdW5jdGlvbiB1bndhdGNoQWNjZXNzb3JzKGFjY2Vzc29ycykge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oaXRlbS51bndhdGNoKSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnVud2F0Y2guY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd2F0Y2hBY2Nlc3NvcnMoYWNjZXNzb3JzLCB0YXJnZXQpIHtcbiAgICAgICAgICAgIGlmICghdXRpbHMuaXNPYmplY3QodGFyZ2V0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChhY2Nlc3NvcnMsIGZ1bmN0aW9uIChpdGVtLCBrZXkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVzID0gdGFyZ2V0O1xuXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZXhwKSB7XG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGV2YWx1YXRvci5ldmFsdWF0ZShrZXksIGxvY2Fscyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYodmFsdWVzID09PSBzZWxmLnNjb3BlICYmIGxvY2FscyAmJiBsb2NhbHNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSBsb2NhbHM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlbS51bndhdGNoID0gc2VsZi53YXRjaGVyLndhdGNoKHZhbHVlcywga2V5LCBmdW5jdGlvbiAoYXJncykge1xuICAgICAgICAgICAgICAgICAgICB1bndhdGNoQWNjZXNzb3JzKGl0ZW0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCBhcmdzLmRhdGEubmV3VmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vdGlmeUNoYW5nZShsaXN0ZW5lciwgZXZhbHVhdG9yLmV2YWx1YXRlKGV4cCwgbG9jYWxzKSk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB3YXRjaEFjY2Vzc29ycyhpdGVtLmNoaWxkcmVuLCB2YWx1ZXNba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdhdGNoQWNjZXNzb3JzKGFjY2Vzc29yLCB0aGlzLnNjb3BlKTtcblxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdW53YXRjaEFjY2Vzc29ycyhhY2Nlc3Nvcik7XG4gICAgICAgICAgICBzZWxmLnJlbW92ZUxpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICB3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAgICAgZXZhbHVhdG9yID0gIHRoaXMuZXZhbHVhdG9yO1xuICAgICAgICB2YXIgdW53YXRjaFByb3BzID0gd2F0Y2hQcm9wcygpO1xuICAgICAgICB2YXIgdW53YXRjaEV4cCA9IHRoaXMud2F0Y2goZXhwLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodW53YXRjaFByb3BzICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyA9IHdhdGNoUHJvcHMoKTtcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgfSwgbG9jYWxzKTtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihleHAsIGhhbmRsZXIsIGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2FscykpO1xuXG4gICAgICAgIGZ1bmN0aW9uIHdhdGNoUHJvcHMoKSB7XG4gICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IGV2YWx1YXRvci5ldmFsdWF0ZShleHAsIGxvY2Fscyk7XG5cbiAgICAgICAgICAgIGlmICh1dGlscy5pc09iamVjdChjb2xsZWN0aW9uKSB8fCB1dGlscy5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYud2F0Y2hlci53YXRjaChjb2xsZWN0aW9uLCAnKicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub3RpZnlDaGFuZ2UobGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHVud2F0Y2hFeHAuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHVud2F0Y2hQcm9wcyAmJiB1bndhdGNoUHJvcHMuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuZGVsYXllci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMud2F0Y2hlci5kZXN0cm95KCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBudWxsO1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcblxudmFyIGlzUHJveHlTeW1ib2wgPSBTeW1ib2woJ19faXNQcm94eScpLFxuICAgIHRhcmdldFN5bWJvbCA9IFN5bWJvbCgnX190YXJnZXQnKTtcblxudmFyIGhhbmRsZXIgPSB7XG4gICAgZ2V0OiBnZXRQcm94eSxcbiAgICBzZXQ6IHNldFByb3h5XG59O1xuXG4vLyBleHRlbmRzIG9iamVjdCBwcm90b3R5cGUsIGFkZCBmdW5jdGlvbiB0b1Byb3h5XG5PYmplY3QucHJvdG90eXBlLnRvUHJveHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGlzUHJveHkodGhpcykgPyB0aGlzIDogbmV3IFByb3h5KHRoaXMsIGhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gaXNQcm94eShwcm94eSkge1xuICAgIHJldHVybiB1dGlscy5pc09iamVjdChwcm94eSkgJiYgcHJveHlbaXNQcm94eVN5bWJvbF07XG59XG5cbmZ1bmN0aW9uIGdldFRhcmdldChwcm94eSkge1xuICAgIHJldHVybiBpc1Byb3h5KHByb3h5KSA/IHByb3h5W3RhcmdldFN5bWJvbF0gOiBwcm94eTtcbn1cblxuZnVuY3Rpb24gbWFrZVByb3h5KHZhbHVlKSB7XG4gICAgaWYgKHV0aWxzLmlzT2JqZWN0KHZhbHVlKSAmJiAhaXNQcm94eSh2YWx1ZSkpIHtcbiAgICAgICAgdXRpbHMuZm9yRWFjaCh2YWx1ZSwgZnVuY3Rpb24gKGl0ZW0sIGtleSkge1xuICAgICAgICAgICAgdmFsdWVba2V5XSA9IG1ha2VQcm94eShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodmFsdWUsIGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZ2V0UHJveHkodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAoa2V5ID09PSBpc1Byb3h5U3ltYm9sKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXkgPT09IHRhcmdldFN5bWJvbCkge1xuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXRba2V5XTtcbn1cblxuZnVuY3Rpb24gc2V0UHJveHkodGFyZ2V0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIG9sZFZhbHVlID0gZ2V0VGFyZ2V0KHRhcmdldFtrZXldKSxcbiAgICAgICAgbmV3VmFsdWUgPSBnZXRUYXJnZXQodmFsdWUpO1xuXG4gICAgaWYgKG9sZFZhbHVlICE9PSBuZXdWYWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IG1ha2VQcm94eSh2YWx1ZSk7XG4gICAgICAgIGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQuZmlyZSh7XG4gICAgICAgICAgICB0YXJnZXQ6IHRhcmdldCxcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIG9sZFZhbHVlOiBvbGRWYWx1ZSxcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZTogbmV3VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRhcmdldFtrZXldICE9PSB2YWx1ZSkge1xuICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufVxuXG5leHBvcnQge1xuICAgIGlzUHJveHksXG4gICAgZ2V0VGFyZ2V0LFxuICAgIGhhbmRsZXJcbn0iLCJpbXBvcnQgeyBldmVudHMgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IGdldFRhcmdldCB9IGZyb20gJy4vcHJveHknO1xuXG5jbGFzcyBPYmplY3RMaXN0ZW5lciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICB0aGlzLmtleXMgPSB7fTtcbiAgICB9XG5cbiAgICBnZXRIYW5kbGVycyhrZXkpIHtcbiAgICAgICAgaWYgKCF0aGlzLmtleXNba2V5XSkge1xuICAgICAgICAgICAgdGhpcy5rZXlzW2tleV0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmtleXNba2V5XTtcbiAgICB9XG5cbiAgICByZWdpc3RlcktleShrZXksIGhhbmRsZXIpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gdGhpcy5nZXRIYW5kbGVycyhrZXkpO1xuICAgICAgICBoYW5kbGVycy5wdXNoKGhhbmRsZXIpO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJLZXkoa2V5LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHRoaXMuZ2V0SGFuZGxlcnMoa2V5KTtcblxuICAgICAgICBpZiAoaGFuZGxlciA9PSBudWxsKSB7XG4gICAgICAgICAgICBoYW5kbGVycy5sZW5ndGggPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gaGFuZGxlcnMuaW5kZXhPZihoYW5kbGVyKTtcblxuICAgICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmaXJlS2V5KGtleSwgYXJncywgc2VsZikge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSB0aGlzLmdldEhhbmRsZXJzKGtleSk7XG4gICAgICAgIGhhbmRsZXJzLmZvckVhY2goaGFuZGxlciA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyLmNhbGwoc2VsZiwgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIFdhdGNoZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB0aGlzLm9mZlByb3BlcnR5Q2hhbmdlZCA9IGV2ZW50cy5wcm9wZXJ0eUNoYW5nZWQub24oZSA9PiB0aGlzLmhhbmRsZVByb3BlcnR5Q2hhbmdlZChlLmRhdGEpKTtcbiAgICB9XG5cbiAgICBoYW5kbGVQcm9wZXJ0eUNoYW5nZWQoZGF0YSkge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldExpc3RlbmVyKHRoaXMubGlzdGVuZXJzLCBkYXRhLnRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyICE9IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLmZpcmVLZXkoZGF0YS5rZXksIGRhdGEpO1xuICAgICAgICAgICAgbGlzdGVuZXIuZmlyZUtleSgnKicsIGRhdGEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0TGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyLCBmaWx0ZXJzID0gbGlzdGVuZXJzLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnRhcmdldCA9PT0gdGFyZ2V0O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoZmlsdGVycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGZpbHRlcnNbMF07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgY3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gbmV3IE9iamVjdExpc3RlbmVyKHRhcmdldCk7XG4gICAgICAgIGxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuIGxpc3RlbmVyO1xuICAgIH1cblxuICAgIGdldE9yQ3JlYXRlTGlzdGVuZXIobGlzdGVuZXJzLCB0YXJnZXQpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVyID0gdGhpcy5nZXRMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG5cbiAgICAgICAgaWYgKGxpc3RlbmVyID09IG51bGwpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gdGhpcy5jcmVhdGVMaXN0ZW5lcihsaXN0ZW5lcnMsIHRhcmdldCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgfVxuXG4gICAgd2F0Y2godGFyZ2V0LCBrZXksIGFjdGlvbikge1xuICAgICAgICB2YXIgbGlzdGVuZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGlzdGVuZXIodGhpcy5saXN0ZW5lcnMsIGdldFRhcmdldCh0YXJnZXQpKTtcblxuICAgICAgICBsaXN0ZW5lci5yZWdpc3RlcktleShrZXksIGFjdGlvbik7XG5cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyLnVucmVnaXN0ZXJLZXkoa2V5LCBhY3Rpb24pO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMub2ZmUHJvcGVydHlDaGFuZ2VkKCk7XG4gICAgfVxufSIsImltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IEV4cHJlc3Npb24gfSBmcm9tICcuL2V4cHJlc3Npb24nO1xuXG5leHBvcnQgY2xhc3MgQmluZGluZyB7XG4gICAgY29uc3RydWN0b3Ioc2NvcGUsIHRleHQsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMubG9jYWxzID0gbG9jYWxzO1xuICAgICAgICAvLyBpcyB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgIHRoaXMuaXNFeHAgPSBmYWxzZTtcbiAgICAgICAgLy8gaWYgdHJ1ZSwgYmluZGluZyB0ZXh0IGlzIGEgbG9naWNhbCBleHByZXNzaW9uXG4gICAgICAgIHRoaXMubG9naWNhbCA9IGZhbHNlO1xuICAgICAgICAvLyBpZiB0cnVlLCBiaW5kaW5nIHRleHQgaXMgYSBhc3NpZ25tZW50IGV4cHJlc3Npb25cbiAgICAgICAgdGhpcy5hc3NpZ25tZW50ID0gZmFsc2U7XG4gICAgICAgIC8vIGhhbmRsZXIgdG8gdXBkYXRlIHZpZXcgZnJvbSBtb2RlbCB2YWx1ZVxuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBudWxsO1xuICAgICAgICB0aGlzLnZhbHVlID0gbnVsbDtcbiAgICAgICAgdGhpcy5vbGRWYWx1ZSA9IG51bGw7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNlZ21lbnRzID0gW107XG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMgPSBbXTtcbiAgICB9XG5cbiAgICBjcmVhdGVFeHByZXNzaW9uKHRleHQpIHtcbiAgICAgICAgdmFyIGV4cCA9IG5ldyBFeHByZXNzaW9uKHRleHQpO1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLnB1c2goZXhwKTtcbiAgICAgICAgcmV0dXJuIGV4cDtcbiAgICB9XG5cbiAgICBjb21waWxlKCkge1xuICAgICAgICBpZiAodGhpcy5sb2dpY2FsIHx8IHRoaXMuYXNzaWdubWVudCkge1xuICAgICAgICAgICAgdGhpcy5pc0V4cCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5pc0V4cCkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGVFeHByZXNzaW9uKHRoaXMudGV4dCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC97eyhbXn1dKil9fS9nO1xuICAgICAgICAgICAgdmFyIGxhc3RJbmRleCA9IHBhdHRlcm4ubGFzdEluZGV4O1xuICAgICAgICAgICAgdmFyIHNlZ21lbnQsIG1hdGNoID0gcGF0dGVybi5leGVjKHRoaXMudGV4dCk7XG5cbiAgICAgICAgICAgIHdoaWxlIChtYXRjaCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoLmluZGV4ID4gbGFzdEluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLnRleHQuc3Vic3RyaW5nKGxhc3RJbmRleCwgbWF0Y2guaW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZ21lbnRzLnB1c2goc2VnbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5zZWdtZW50cy5wdXNoKHRoaXMuY3JlYXRlRXhwcmVzc2lvbihtYXRjaFsxXSkpO1xuXG4gICAgICAgICAgICAgICAgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG4gICAgICAgICAgICAgICAgbWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGhpcy50ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMudGV4dC5sZW5ndGggPiBsYXN0SW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy50ZXh0LnN1YnN0cmluZyhsYXN0SW5kZXgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VnbWVudHMucHVzaChzZWdtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmFzc2lnbm1lbnQgfHwgdGhpcy5sb2dpY2FsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmRldGVjdCgpO1xuXG4gICAgICAgIHRoaXMuZXhwcmVzc2lvbnMuZm9yRWFjaChleHAgPT4ge1xuICAgICAgICAgICAgZXhwLndhdGNoKHRoaXMuc2NvcGUsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRldGVjdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF0Y2goKTtcbiAgICAgICAgICAgIH0sIHRoaXMubG9jYWxzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGV0ZWN0KCkge1xuICAgICAgICB2YXIgbmV3VmFsdWUgPSB0aGlzLmNvbXB1dGUoKTtcblxuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSBuZXdWYWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG5cbiAgICAgICAgaWYgKHRoaXMuaXNFeHApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cHJlc3Npb25zWzBdLmNvbXB1dGUodGhpcy5zY29wZSwgbG9jYWxzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLnNlZ21lbnRzLnJlZHVjZSgocHJldiwgY3VyKSA9PiB7XG4gICAgICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoY3VyKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaXQgaXMgYSBleHByZXNzaW9uXG4gICAgICAgICAgICByZXR1cm4gcHJldiArIChjdXIuY29tcHV0ZSh0aGlzLnNjb3BlLCBsb2NhbHMpIHx8ICcnKTtcbiAgICAgICAgfSwgJycpO1xuICAgIH1cblxuICAgIC8vIHNldCB2YWx1ZVxuICAgIGFzc2lnbih2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIGxvY2FscyA9IHV0aWxzLm1lcmdlKHRoaXMubG9jYWxzLCBsb2NhbHMpO1xuXG4gICAgICAgIGlmICh0aGlzLmlzRXhwKSB7XG4gICAgICAgICAgICB0aGlzLmV4cHJlc3Npb25zWzBdLmFzc2lnbih0aGlzLnNjb3BlLCB2YWx1ZSwgbG9jYWxzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0aGlzLnRleHQgKyAnIGlzIG5vdCB2YWxpZCBleHByZXNzaW9uJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpc3RlckF1dG9tYXRpb24oYXV0b21hdGlvbikge1xuICAgICAgICB0aGlzLmF1dG9tYXRpb24gPSBhdXRvbWF0aW9uO1xuICAgIH1cblxuICAgIHVucmVnaXN0ZXJBdXRvbWF0aW9uKGF1dG9tYXRpb24pIHtcbiAgICAgICAgaWYgKHRoaXMuYXV0b21hdGlvbiA9PT0gYXV0b21hdGlvbikge1xuICAgICAgICAgICAgdGhpcy5hdXRvbWF0aW9uID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG1vZGlmeSB2aWV3IGFjY29yZGluZyB0byBtb2RlbFxuICAgIHBhdGNoKCkge1xuICAgICAgICBpZiAodGhpcy5jaGFuZ2VkICYmIHRoaXMuYXV0b21hdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNoYW5nZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYXV0b21hdGlvbi5jYWxsKHRoaXMsIHRoaXMudmFsdWUsIHRoaXMub2xkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZXZhbHVhdGUoZXhwLCBsb2NhbHMpIHtcbiAgICAgICAgbG9jYWxzID0gdXRpbHMubWVyZ2UodGhpcy5sb2NhbHMsIGxvY2Fscyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNjb3BlLiRldmFsKGV4cCwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLmV4cHJlc3Npb25zLmZvckVhY2goZXhwID0+IHtcbiAgICAgICAgICAgIGV4cC5kZXN0cm95KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn0iLCJleHBvcnQgY2xhc3MgRXhwcmVzc2lvbiB7XG4gICAgY29uc3RydWN0b3IodGV4dCkge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnByb2dyYW0gPSBudWxsO1xuICAgICAgICB0aGlzLnVud2F0Y2ggPSBudWxsO1xuICAgICAgICB0aGlzLmhhc1RyYW5zbGF0aW9uID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gZ2V0IHZhbHVlXG4gICAgY29tcHV0ZShzY29wZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiBzY29wZS4kZXZhbCh0aGlzLnRleHQsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgLy8gc2V0IHZhbHVlXG4gICAgYXNzaWduKHNjb3BlLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHNjb3BlLiRhc3NpZ24odGhpcy50ZXh0LCB2YWx1ZSwgbG9jYWxzKTtcbiAgICB9XG5cbiAgICB3YXRjaChzY29wZSwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHRoaXMudW53YXRjaCA9IHNjb3BlLiR3YXRjaCh0aGlzLnRleHQsIGhhbmRsZXIsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgaWYodGhpcy51bndhdGNoICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMudW53YXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxufSIsImV4cG9ydCAqIGZyb20gJy4vYmluZGluZyc7XG5leHBvcnQgKiBmcm9tICcuL2V4cHJlc3Npb24nO1xuZXhwb3J0ICogZnJvbSAnLi9yZW5kZXJlcic7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0ICogYXMgZG9tIGZyb20gJy4uL2RvbSc7XG5pbXBvcnQgeyBpc1ZUZXh0LCBpc1ZDb21tZW50LCBpc1ZFbG0gfSBmcm9tICcuLi90cGwnO1xuaW1wb3J0IHsgTG9jYWwsIGV2ZW50cyB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgQmluZGluZyB9IGZyb20gJy4vYmluZGluZyc7XG5pbXBvcnQgeyBNX0NNUF9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5cbi8vIFdpbmRvdyBFdmVudHNcbi8vIGNhc2UgJ29uLWxvYWQnOlxuLy8gY2FzZSAnb24tdW5sb2FkJzpcbi8vIEZvcm0gRWxlbWVudCBFdmVudHNcbi8vIGNhc2UgJ29uLWNoYW5nZSc6XG4vLyBjYXNlICdvbi1zdWJtaXQnOlxuLy8gY2FzZSAnb24tcmVzZXQnOlxuLy8gY2FzZSAnb24tc2VsZWN0Jzpcbi8vIGNhc2UgJ29uLWJsdXInOlxuLy8gY2FzZSAnb24tZm9jdXMnOlxuLy8gSW1hZ2UgRXZlbnRzXG4vLyBjYXNlICdvbi1hYm9ydCc6XG4vLyBLZXlib2FyZCBFdmVudHNcbi8vIGNhc2UgJ29uLWtleWRvd24nOlxuLy8gY2FzZSAnb24ta2V5cHJlc3MnOlxuLy8gY2FzZSAnb24ta2V5dXAnOlxuLy8gTW91c2UgRXZlbnRzXG4vLyBjYXNlICdvbi1jbGljayc6XG4vLyBjYXNlICdvbi1kYmxjbGljayc6XG4vLyBjYXNlICdvbi1tb3VzZWRvd24nOlxuLy8gY2FzZSAnb24tbW91c2Vtb3ZlJzpcbi8vIGNhc2UgJ29uLW1vdXNlb3V0Jzpcbi8vIGNhc2UgJ29uLW1vdXNlb3Zlcic6XG4vLyBjYXNlICdvbi1tb3VzZXVwJzpcbnZhciBldmVudFRleHQgPSAnbG9hZCB1bmxvYWQgY2hhbmdlIHN1Ym1pdCByZXNldCBzZWxlY3QgYmx1ciBmb2N1cyBhYm9ydCBrZXlkb3duIGtleXByZXNzIGtleXVwIGNsaWNrIGRibGNsaWNrIG1vdXNlZG93biBtb3VzZW1vdmUgbW91c2VvdXQgbW91c2VvdmVyIG1vdXNldXAnO1xudmFyIGRvbUV2ZW50cyA9IGV2ZW50VGV4dC5zcGxpdCgnICcpO1xuXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xuICAgIGdldCBpbmplY3RvcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NvcGUuJGluamVjdG9yO1xuICAgIH1cblxuICAgIGdldCBuc0FsaWFzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zY29wZS4kZGF0YS5hbGlhcztcbiAgICB9XG5cbiAgICBnZXQgdmlldygpIHtcbiAgICAgICAgdmFyIHZpZXcgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHRoaXMuZWxtcy5mb3JFYWNoKGVsbSA9PiB2aWV3LmFwcGVuZENoaWxkKGVsbSkpO1xuICAgICAgICByZXR1cm4gdmlldztcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZSwgdGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICAgICAgdGhpcy5sb2NhbHMgPSBsb2NhbHM7XG4gICAgICAgIHRoaXMuZWxtcyA9IFtdO1xuICAgICAgICB0aGlzLnZub2RlcyA9IFtdO1xuICAgICAgICB0aGlzLnR5cGUgPSB7XG4gICAgICAgICAgICBjb21wb25lbnRzOiB7fSxcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IHt9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZW50aXR5ID0ge1xuICAgICAgICAgICAgYmluZGluZ3M6IFtdLFxuICAgICAgICAgICAgY29tcG9uZW50czogW10sXG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnBhcnNlciA9IHNjb3BlLiRwYXJzZXI7XG4gICAgfVxuXG4gICAgbmV3QmluZGluZyh0ZXh0KSB7XG4gICAgICAgIHZhciBiaW5kaW5nID0gbmV3IEJpbmRpbmcodGhpcy5zY29wZSwgdGV4dCwgdGhpcy5sb2NhbHMpO1xuICAgICAgICB0aGlzLmVudGl0eS5iaW5kaW5ncy5wdXNoKGJpbmRpbmcpO1xuICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICB9XG5cbiAgICBuZXdDb21wb25lbnQoY2xzKSB7XG4gICAgICAgIHZhciBjaGlsZCA9IHRoaXMuaW5qZWN0b3IuY3JlYXRlQ29tcG9uZW50KGNscyk7XG5cbiAgICAgICAgdGhpcy5zY29wZS4kYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgICAgICB0aGlzLmVudGl0eS5jb21wb25lbnRzLnB1c2goY2hpbGQpO1xuXG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBuZXdEaXJlY3RpdmUoY2xzKSB7XG4gICAgICAgIHZhciBkaXJlY3RpdmUgPSB0aGlzLmluamVjdG9yLmNyZWF0ZURpcmVjdGl2ZShjbHMpO1xuXG4gICAgICAgIGRpcmVjdGl2ZS4kJHNjb3BlID0gdGhpcy5zY29wZTtcblxuICAgICAgICByZXR1cm4gZGlyZWN0aXZlO1xuICAgIH1cblxuICAgIHJlY29nbml6ZUNvbXBvbmVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBpZGVudGlmaWVyLCBjb21wb25lbnQsXG4gICAgICAgICAgICBuYW1lID0gdmVsbS5ub2RlTmFtZSxcbiAgICAgICAgICAgIGJ1ZmZlciA9IHRoaXMudHlwZS5jb21wb25lbnRzO1xuXG4gICAgICAgIGlmIChidWZmZXJbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgY29tcG9uZW50ID0gYnVmZmVyW25hbWVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaW5qZWN0b3IucGFyc2VGdWxsTmFtZShuYW1lLCB0aGlzLm5zQWxpYXMpO1xuICAgICAgICAgICAgY29tcG9uZW50ID0gdGhpcy5pbmplY3Rvci5nZXRDb21wb25lbnQoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gY29tcG9uZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmVsbS5ub2RlRGF0YS5pZGVudGlmaWVyID0gaWRlbnRpZmllcjtcblxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cblxuICAgIHJlY29nbml6ZURpcmVjdGl2ZSh2YXR0cikge1xuICAgICAgICB2YXIgaWRlbnRpZmllciwgZGlyZWN0aXZlLFxuICAgICAgICAgICAgbmFtZSA9IHZhdHRyLm5vZGVEYXRhLm5hbWUsXG4gICAgICAgICAgICBidWZmZXIgPSB0aGlzLnR5cGUuZGlyZWN0aXZlcztcblxuICAgICAgICBpZihidWZmZXJbbmFtZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gYnVmZmVyW25hbWVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWRlbnRpZmllciA9IHRoaXMuaW5qZWN0b3IucGFyc2VGdWxsTmFtZShuYW1lLCB0aGlzLm5zQWxpYXMpO1xuICAgICAgICAgICAgZGlyZWN0aXZlID0gdGhpcy5pbmplY3Rvci5nZXREaXJlY3RpdmUoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgICAgICAgICAgYnVmZmVyW25hbWVdID0gZGlyZWN0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdmF0dHIubm9kZURhdGEuaWRlbnRpZmllciA9IGlkZW50aWZpZXI7XG5cbiAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZTtcbiAgICB9XG5cbiAgICBiaW5kVHJhbnNsYXRlQ2hhbmdlZCgpIHtcbiAgICAgICAgdmFyIGJpbmRpbmdzID0gdGhpcy5lbnRpdHkuYmluZGluZ3M7XG5cbiAgICAgICAgaWYoIWJpbmRpbmdzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHRleHQgd2hpbGUgdHJhbnNsYXRlIGNoYW5nZWRcbiAgICAgICAgdGhpcy51bmJpbmRUcmFuc2xhdGVDaGFuZ2VkID0gZXZlbnRzLnRyYW5zbGF0ZUNoYW5nZWQub24oKCkgPT4ge1xuICAgICAgICAgICAgYmluZGluZ3MuZm9yRWFjaChiaW5kaW5nID0+IHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLmRldGVjdCgpO1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIG11c3Qgc2V0IGEgcm9vdCBlbGVtZW50IGZvciBkaXJlY3RpdmUgbGlmZSBjeWNsZSBcImFmdGVyTGlua1wiIGhvb3BzXG4gICAgICAgIHZhciB2aWV3ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXG4gICAgICAgIHRoaXMudm5vZGVzID0gdGhpcy5wYXJzZXIucGFyc2VUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlKTtcblxuICAgICAgICB0aGlzLmNvbXBpbGVOb2Rlcyh0aGlzLnZub2Rlcyk7XG5cbiAgICAgICAgLy8gdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGRpcmVjdGl2ZSA9PiBkaXJlY3RpdmUuJHByZWxpbmsoKSk7XG5cbiAgICAgICAgdGhpcy5saW5rTm9kZXModGhpcy52bm9kZXMpLmZvckVhY2goZWxtID0+IHZpZXcuYXBwZW5kQ2hpbGQoZWxtKSk7XG5cbiAgICAgICAgLy8gY2FsbCBkaXJlY3RpdmUgbGlmZSBjeWNsZSBob29wc1xuICAgICAgICB0aGlzLmVudGl0eS5kaXJlY3RpdmVzLmZvckVhY2goZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcG9zdGxpbmsoKSk7XG5cbiAgICAgICAgLy8gY2FjaGUgdGhlIGdlbmVyYXRlZCBlbGVtZW50c1xuICAgICAgICBkb20uZ2V0Q2hpbGRyZW5PZkVsZW1lbnQodmlldykuZm9yRWFjaChlbG0gPT4gdGhpcy5lbG1zLnB1c2goZWxtKSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVHJhbnNsYXRlQ2hhbmdlZCgpO1xuXG4gICAgICAgIHJldHVybiB2aWV3O1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2Rlcyh2bm9kZXMpIHtcbiAgICAgICAgdm5vZGVzLmZvckVhY2godm5vZGUgPT4gdGhpcy5jb21waWxlTm9kZSh2bm9kZSkpO1xuICAgIH1cblxuICAgIGNvbXBpbGVOb2RlKHZub2RlKSB7XG4gICAgICAgIGlmIChpc1ZUZXh0KHZub2RlKSkge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlVGV4dCh2bm9kZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZDb21tZW50KHZub2RlKSl7XG4gICAgICAgICAgICB0aGlzLmNvbXBpbGVDb21tZW50KHZub2RlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUVsbSh2bm9kZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaW5rTm9kZXModm5vZGVzKSB7XG4gICAgICAgIHJldHVybiB2bm9kZXMubWFwKHZub2RlID0+IHRoaXMubGlua05vZGUodm5vZGUpKTtcbiAgICB9XG5cbiAgICBsaW5rTm9kZSh2bm9kZSkge1xuICAgICAgICBpZiAoaXNWVGV4dCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmtUZXh0KHZub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzVkNvbW1lbnQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5saW5rQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5saW5rRWxtKHZub2RlKTtcbiAgICB9XG5cbiAgICBjb21waWxlRWxtKHZlbG0pIHtcbiAgICAgICAgdmFyIGVsbURhdGEgPSB2ZWxtLm5vZGVEYXRhO1xuXG4gICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gdGhpcy5yZWNvZ25pemVDb21wb25lbnQodmVsbSk7XG5cbiAgICAgICAgdmFyIGRpcmVjdGl2ZXMgPSBbXTtcbiAgICAgICAgdmFyIGN1c3RvbUxpbmtlciA9IHZlbG0udmF0dHJzLnNvbWUodmF0dHIgPT4ge1xuICAgICAgICAgICAgdmFyIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGE7XG5cbiAgICAgICAgICAgIHRoaXMuY29tcGlsZUF0dHIodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzLnB1c2goYXR0ckRhdGEuZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBlbG1EYXRhLmxpbmtlciA9IGF0dHJEYXRhLmxpbmtlcjtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxtRGF0YS5saW5rZXIgIT0gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBzb3J0IGRpcmVjdGl2ZSBhY2NvcmRpbmcgdG8gaXRzIHByaW9yaXR5XG4gICAgICAgIHV0aWxzLm9yZGVyQnkoZGlyZWN0aXZlcywgZGlyZWN0aXZlID0+IGRpcmVjdGl2ZS4kcHJpb3JpdHkpLmZvckVhY2goZGlyZWN0aXZlID0+IHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMucHVzaChkaXJlY3RpdmUpKTtcblxuICAgICAgICBlbG1EYXRhLmRpcmVjdGl2ZXMgPSBkaXJlY3RpdmVzO1xuXG4gICAgICAgIC8vIGRpcmVjdGl2ZSBkZWZpbmVzIGN1c3RvbSBsaW5rZXIgZm9yIHRoaXMgdmlydHVhbCBub2RlLCByZW5kZXIgZW5naW5lIHdpbGwgbm90IHJlbmRlciBpdCBhY2NvcmRpbmcgdG8gZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICBpZiAoY3VzdG9tTGlua2VyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxtRGF0YS5jb21wb25lbnQpIHtcbiAgICAgICAgICAgIGVsbURhdGEuc2xvdHMgPSB0aGlzLnNlZWtTbG90KHZlbG0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jb21waWxlTm9kZXModmVsbS5jaGlsZE5vZGVzKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBpbGVBdHRyKHZhdHRyKSB7XG4gICAgICAgIHZhciBhdHRyTmFtZSA9IHZhdHRyLm5vZGVOYW1lLCBhdHRyVmFsdWUgPSB2YXR0ci5ub2RlVmFsdWUsXG4gICAgICAgICAgICBhdHRyRGF0YSA9IHZhdHRyLm5vZGVEYXRhLCBiaW5kaW5nO1xuXG4gICAgICAgIGlmKGF0dHJWYWx1ZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBiaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKGF0dHJWYWx1ZSk7XG4gICAgICAgICAgICBhdHRyRGF0YS5iaW5kaW5nID0gYmluZGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyTmFtZS5zdGFydHNXaXRoKCdAJykpIHtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRXZlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYXR0ckRhdGEubmFtZSA9IGF0dHJOYW1lLnN1YnN0cigxKTtcbiAgICAgICAgICAgIGF0dHJEYXRhLmlzRG9tRXZlbnQgPSB1dGlscy5jb250YWlucyhkb21FdmVudHMsIGF0dHJEYXRhLm5hbWUpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5sb2dpY2FsID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoYXR0ck5hbWUuc3RhcnRzV2l0aCgnOicpKSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWUuc3Vic3RyKDEpO1xuICAgICAgICAgICAgYmluZGluZyAmJiAoYmluZGluZy5pc0V4cCA9IHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGF0dHJOYW1lLnN0YXJ0c1dpdGgoJyonKSkge1xuICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGF0dHJEYXRhLm5hbWUgPSBhdHRyTmFtZS5zdWJzdHIoMSk7XG4gICAgICAgICAgICBiaW5kaW5nICYmIChiaW5kaW5nLmlzRXhwID0gdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBhdHRyRGF0YS5uYW1lID0gYXR0ck5hbWU7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICB2YXIgZGlyZWN0aXZlID0gdGhpcy5yZWNvZ25pemVEaXJlY3RpdmUodmF0dHIpO1xuXG4gICAgICAgICAgICBpZiAoZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgYXR0ckRhdGEuZGlyZWN0aXZlID0gdGhpcy5uZXdEaXJlY3RpdmUoZGlyZWN0aXZlKTtcbiAgICAgICAgICAgICAgICBhdHRyRGF0YS5kaXJlY3RpdmUuJCR2YXR0ciA9IHZhdHRyO1xuXG4gICAgICAgICAgICAgICAgaWYoYmluZGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcuYXNzaWdubWVudCA9IGF0dHJEYXRhLmRpcmVjdGl2ZS4kYXNzaWdubWVudDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYXR0ckRhdGEuZGlyZWN0aXZlLiRjb21waWxlKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0ckRhdGEubGlua2VyID0gYXR0ckRhdGEuZGlyZWN0aXZlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdkaXJlY3RpdmUgJyArIGF0dHJEYXRhLm5hbWUgKyAnIGlzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKGF0dHJEYXRhLmlzRXZlbnQgfHwgYXR0ckRhdGEuZGlyZWN0aXZlKSkge1xuICAgICAgICAgICAgdmFyIHNldEh0bWxBdHRyID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGVsbSA9IHZhdHRyLnZlbG0uZWxtO1xuXG4gICAgICAgICAgICAgICAgaWYgKGF0dHJEYXRhLm5hbWUuc3RhcnRzV2l0aCgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICAgICAgICB1dGlscy5zZXRQcm9wZXJ0eShlbG0sIGF0dHJEYXRhLm5hbWUsIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGVsbS5zZXRBdHRyaWJ1dGUoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICh2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY29tcG9uZW50ID0gdmF0dHIudmVsbS5ub2RlRGF0YS5jb21wb25lbnQ7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbXBvbmVudC4kaGFzUHJvcGVydHkoYXR0ckRhdGEubmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC4kc2V0UHJvcGVydHkoYXR0ckRhdGEubmFtZSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SHRtbEF0dHIodmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbihzZXRIdG1sQXR0cik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBiaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlVGV4dCh2dGV4dCkge1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nID0gdGhpcy5uZXdCaW5kaW5nKHZ0ZXh0Lm5vZGVWYWx1ZSk7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcucmVnaXN0ZXJBdXRvbWF0aW9uKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdmFyIGVsbSwgbmV3VGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2YWx1ZSk7XG5cbiAgICAgICAgICAgIGlmICh2dGV4dC5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAodnRleHQuZWxtICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxtID0gdnRleHQuZWxtLnBhcmVudE5vZGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxtID0gdnRleHQucGFyZW50Tm9kZS5lbG07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmICh2dGV4dC5lbG0gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBlbG0uYXBwZW5kQ2hpbGQobmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHZ0ZXh0LmVsbSwgbmV3VGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdnRleHQuZWxtID0gbmV3VGV4dE5vZGU7XG4gICAgICAgIH0pO1xuICAgICAgICB2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLmNvbXBpbGUoKTtcbiAgICB9XG5cbiAgICBjb21waWxlQ29tbWVudCh2Y21udCkge1xuXG4gICAgfVxuXG4gICAgbGlua0VsbSh2ZWxtKSB7XG4gICAgICAgIHZhciBlbG1EYXRhID0gdmVsbS5ub2RlRGF0YTtcblxuICAgICAgICBpZiAoZWxtRGF0YS5saW5rZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGVsbURhdGEubGlua2VyLiRsaW5rKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2ZWxtLmVsbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodmVsbS5ub2RlTmFtZSk7XG5cbiAgICAgICAgaWYgKGVsbURhdGEuY29tcG9uZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLm5ld0NvbXBvbmVudChlbG1EYXRhLmNvbXBvbmVudCk7XG5cbiAgICAgICAgICAgIGVsbURhdGEuY29tcG9uZW50ID0gaW5zdGFuY2U7XG5cbiAgICAgICAgICAgIGRvbS5hZGRDbGFzcyh2ZWxtLmVsbSwgTV9DTVBfQ0xBU1MpO1xuXG4gICAgICAgICAgICB2ZWxtLnZhdHRycy5mb3JFYWNoKHZhdHRyID0+IHRoaXMubGlua0F0dHIodmF0dHIpKTtcblxuICAgICAgICAgICAgaW5zdGFuY2UuJCR2ZWxtID0gdmVsbTtcbiAgICAgICAgICAgIGluc3RhbmNlLiRzZXRTbG90KGVsbURhdGEuc2xvdHMpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJHJlbmRlcigpO1xuICAgICAgICAgICAgaW5zdGFuY2UuJG1vdW50KHZlbG0uZWxtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZlbG0udmF0dHJzLmZvckVhY2godmF0dHIgPT4gdGhpcy5saW5rQXR0cih2YXR0cikpO1xuICAgICAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4gdmVsbS5lbG0uYXBwZW5kQ2hpbGQodGhpcy5saW5rTm9kZShjaGlsZCkpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQXR0cih2YXR0cikge1xuICAgICAgICB2YXIgdmVsbSA9IHZhdHRyLnZlbG0sXG4gICAgICAgICAgICBlbG0gPSB2ZWxtLmVsbSxcbiAgICAgICAgICAgIGF0dHJEYXRhID0gdmF0dHIubm9kZURhdGEsXG4gICAgICAgICAgICBiaW5kaW5nID0gYXR0ckRhdGEuYmluZGluZztcblxuICAgICAgICBpZihiaW5kaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChhdHRyRGF0YS5pc0V2ZW50KSB7XG4gICAgICAgICAgICBpZiAoYXR0ckRhdGEuaXNEb21FdmVudCkge1xuICAgICAgICAgICAgICAgIGVsbS5hZGRFdmVudExpc3RlbmVyKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2ZWxtLm5vZGVEYXRhLmNvbXBvbmVudCkge1xuICAgICAgICAgICAgICAgIHZlbG0ubm9kZURhdGEuY29tcG9uZW50LiRiaW5kKGF0dHJEYXRhLm5hbWUsIGUgPT4gYmluZGluZy5jb21wdXRlKG5ldyBMb2NhbChlLCBlbG0pKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBiaW5kaW5nLmxpbmsoKTtcbiAgICAgICAgICAgIGJpbmRpbmcucGF0Y2goKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHJlZ2lzdGVyIGJpbmRpbmcgY2hhbmdlIGhhbmRsZXIgYWZ0ZXIgZmlyc3QgcGF0Y2hcbiAgICAgICAgaWYoYXR0ckRhdGEuZGlyZWN0aXZlKSB7XG4gICAgICAgICAgICBiaW5kaW5nLnJlZ2lzdGVyQXV0b21hdGlvbigobmV3VmFsdWUsIG9sZFZhbHVlKSA9PiBhdHRyRGF0YS5kaXJlY3RpdmUuJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxpbmtUZXh0KHZ0ZXh0KSB7XG4gICAgICAgIHZ0ZXh0Lm5vZGVEYXRhLmJpbmRpbmcubGluaygpO1xuICAgICAgICB2dGV4dC5lbG0gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2dGV4dC5ub2RlRGF0YS5iaW5kaW5nLnZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHZ0ZXh0LmVsbTtcbiAgICB9XG5cbiAgICBsaW5rQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnQuY3JlYXRlQ29tbWVudCh2Y21udC5ub2RlVmFsdWUpO1xuICAgIH1cblxuICAgIHNlZWtTbG90KHZlbG0pIHtcbiAgICAgICAgdmFyIHNsb3RzID0ge307XG5cbiAgICAgICAgdmVsbS5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgaWYoaXNWRWxtKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgIHZhciBzbG90ID0gY2hpbGQuZ2V0QXR0cignc2xvdCcpO1xuXG4gICAgICAgICAgICAgICAgaWYoc2xvdCkge1xuICAgICAgICAgICAgICAgICAgICBzbG90c1tzbG90Lm5vZGVWYWx1ZV0gPSBjaGlsZC5nZXRJbm5lclRwbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICBzbG90cztcbiAgICB9XG5cbiAgICBkZXN0cm95KCkge1xuICAgICAgICB0aGlzLnVuYmluZFRyYW5zbGF0ZUNoYW5nZWQoKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuY29tcG9uZW50cy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuZGlyZWN0aXZlcy5mb3JFYWNoKGl0ZW0gPT4gaXRlbS4kZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy5lbnRpdHkuYmluZGluZ3MuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcbiAgICAgICAgdGhpcy52bm9kZXMuZm9yRWFjaChpdGVtID0+IGl0ZW0uZGVzdHJveSgpKTtcblxuICAgICAgICB0aGlzLmVudGl0eS5jb21wb25lbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIHRoaXMuZW50aXR5LmRpcmVjdGl2ZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5lbnRpdHkuYmluZGluZ3MubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy52bm9kZXMubGVuZ3RoID0gMDtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9tb2RlbCc7XG5leHBvcnQgKiBmcm9tICcuL3RwbC1hcGknO1xuZXhwb3J0ICogZnJvbSAnLi90cGwtYnVpbGRlcic7IiwiZXhwb3J0ICogZnJvbSAnLi92bm9kZSc7XG5leHBvcnQgKiBmcm9tICcuL3ZhdHRyJztcbmV4cG9ydCAqIGZyb20gJy4vdmNtbnQnO1xuZXhwb3J0ICogZnJvbSAnLi92ZWxtJztcbmV4cG9ydCAqIGZyb20gJy4vdnRleHQnO1xuZXhwb3J0ICogZnJvbSAnLi92dHlwZSc7IiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQXR0ciBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5hdHRyaWJ1dGUsIG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy52ZWxtID0gbnVsbDtcbiAgICAgICAgdGhpcy5xdW90ZSA9ICdcIic7XG4gICAgfVxuXG4gICAgc2V0VmFsdWUodmFsdWUpIHtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBWQXR0cih0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG4gICAgfVxuXG4gICAgb25EZXN0cm95KCkge1xuXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgVk5vZGUsIG5vZGVUeXBlIH0gZnJvbSAnLi92bm9kZSc7XG5cbmV4cG9ydCBjbGFzcyBWQ21udCBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcih2YWx1ZSkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5jb21tZW50LCAnI2NvbW1lbnQnLCB2YWx1ZSk7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVkNtbnQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuaW1wb3J0IHsgVkF0dHIgfSBmcm9tICcuL3ZhdHRyJztcbmltcG9ydCB7IHBhcnNlVHBsIH0gZnJvbSAnLi4vdHBsLWFwaSc7XG5pbXBvcnQgeyBUcGxCdWlsZGVyIH0gZnJvbSAnLi4vdHBsLWJ1aWxkZXInO1xuXG5leHBvcnQgY2xhc3MgVkVsbSBleHRlbmRzIFZOb2RlIHtcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgICAgIHN1cGVyKG5vZGVUeXBlLmVsZW1lbnQsIG5hbWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgICAgIHRoaXMudmF0dHJzID0gW107XG4gICAgICAgIHRoaXMuc2VsZkNsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1aWxkZXIgPSBuZXcgVHBsQnVpbGRlcigpO1xuICAgIH1cblxuICAgIHB1c2hBdHRyKGF0dHIpIHtcbiAgICAgICAgYXR0ci52ZWxtID0gdGhpcztcbiAgICAgICAgdGhpcy52YXR0cnMucHVzaChhdHRyKTtcbiAgICB9XG5cbiAgICBoYXNBdHRyKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YXR0cnMubGVuZ3RoICE9PSAwO1xuICAgIH1cblxuICAgIGdldEF0dHIoa2V5KSB7XG4gICAgICAgIHZhciBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5ub2RlTmFtZSA9PT0ga2V5O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIW1hdGNoZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBtYXRjaGVzWzBdO1xuICAgIH1cblxuICAgIHNldEF0dHIoa2V5LCB2YWx1ZSkge1xuICAgICAgICB2YXIgdGFyZ2V0LCBtYXRjaGVzID0gdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICByZXR1cm4gYXR0ci5iZWxvbmdUbyhrZXkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAobWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0YXJnZXQgPSBtYXRjaGVzWzBdO1xuICAgICAgICAgICAgdGFyZ2V0LnNldFZhbHVlKHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhcmdldCA9IG5ldyBWQXR0cihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHRhcmdldC52ZWxtID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy52YXR0cnMucHVzaCh0YXJnZXQpO1xuXG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuXG4gICAgcmVtb3ZlQXR0cihrZXkpIHtcbiAgICAgICAgdmFyIHRhcmdldCA9IFtdLCBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAoa2V5IGluc3RhbmNlb2YgVkF0dHIpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMudmF0dHJzLmluZGV4T2Yoa2V5KTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBzZWxmLnZhdHRycy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy52YXR0cnMuZmlsdGVyKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGF0dHIuYmVsb25nVG8oa2V5KTtcbiAgICAgICAgICAgIH0pLmZvckVhY2goZnVuY3Rpb24gKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gc2VsZi52YXR0cnMuaW5kZXhPZihtYXRjaCk7XG4gICAgICAgICAgICAgICAgbWF0Y2guZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHNlbGYudmF0dHJzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0YXJnZXQubGVuZ3RoID4gMCA/IHRhcmdldFswXSA6IG51bGw7XG4gICAgfVxuXG4gICAgYXBwZW5kQXR0cihhdHRyKSB7XG4gICAgICAgIGlmIChhdHRyLnZlbG0gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ3VycmVudCBhdHRyaWJ1dGUgaXMgbm90IG5ldyFcIik7XG4gICAgICAgIH1cblxuICAgICAgICBhdHRyLnZlbG0gPSB0aGlzO1xuICAgICAgICBhdHRyLmNvbXBpbGUodGhpcy5jb21waWxlT3B0aW9ucyk7XG4gICAgICAgIHRoaXMudmF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIHJldHVybiBhdHRyO1xuICAgIH1cblxuICAgIGdldE91dGVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKHRoaXMpO1xuICAgIH1cblxuICAgIGdldElubmVyVHBsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLm1hcChjaGlsZCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZGVyLmJ1aWxkKGNoaWxkKTtcbiAgICAgICAgfSkuam9pbignJyk7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJUcGwodHBsKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcGFyc2VUcGwodHBsKS5mb3JFYWNoKGZ1bmN0aW9uICh2bm9kZSkge1xuICAgICAgICAgICAgdm5vZGUucGFyZW50Tm9kZSA9IG51bGw7XG4gICAgICAgICAgICBzZWxmLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYsIHZub2RlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNlbGYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmKTtcbiAgICB9XG5cbiAgICBzZXRJbm5lclRwbCh0cGwpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmNsZWFyQ2hpbGROb2RlcygpO1xuICAgICAgICBwYXJzZVRwbCh0cGwpLmZvckVhY2goZnVuY3Rpb24gKHZub2RlKSB7XG4gICAgICAgICAgICB2bm9kZS5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgICAgIHNlbGYuYXBwZW5kQ2hpbGQodm5vZGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsb25lTm9kZSgpIHtcbiAgICAgICAgdmFyIG5vZGUgPSBuZXcgVkVsbSh0aGlzLm5vZGVOYW1lLCB0aGlzLm5vZGVWYWx1ZSk7XG5cbiAgICAgICAgbm9kZS52YXR0cnMgPSB0aGlzLnZhdHRycy5tYXAoZnVuY3Rpb24gKHZhdHRyKSB7XG4gICAgICAgICAgICB2YXIgY29weSA9IHZhdHRyLmNsb25lTm9kZSgpO1xuICAgICAgICAgICAgY29weS52ZWxtID0gbm9kZTtcbiAgICAgICAgICAgIHJldHVybiBjb3B5O1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gbm9kZTtcbiAgICB9XG5cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMudmF0dHJzLmZvckVhY2goZnVuY3Rpb24gKGF0dHIpIHtcbiAgICAgICAgICAgIGF0dHIuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnZhdHRycy5sZW5ndGggPSAwO1xuICAgIH1cbn0iLCJleHBvcnQgdmFyIG5vZGVUeXBlID0ge1xuICAgIGVsZW1lbnQ6IDEsXG4gICAgYXR0cmlidXRlOiAyLFxuICAgIHRleHQ6IDMsXG4gICAgY2RhdGFTZWN0aW9uOiA0LFxuICAgIGVudGl0eVJlZmVyZW5jZTogNSxcbiAgICBlbnRpdHk6IDYsXG4gICAgcHJvY2Vzc2luZ0luc3RydWN0aW9uOiA3LFxuICAgIGNvbW1lbnQ6IDgsXG4gICAgZG9jdW1lbnQ6IDksXG4gICAgZG9jdW1lbnRUeXBlOiAxMCxcbiAgICBkb2N1bWVudEZyYWdtZW50OiAxMSxcbiAgICBub3RhdGlvbjogMTJcbn1cblxuLy8gdmlydHVhbCBub2RlXG5leHBvcnQgY2xhc3MgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKHR5cGUsIG5hbWUsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMubm9kZVR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLm5vZGVOYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5ub2RlVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzID0gW107XG4gICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG51bGw7XG4gICAgICAgIHRoaXMubGFzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5wcmV2aW91c1NpYmxpbmcgPSBudWxsO1xuICAgICAgICB0aGlzLm5leHRTaWJsaW5nID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlRGF0YSA9IHt9O1xuICAgIH1cblxuICAgIHB1c2hDaGlsZChjaGlsZCkge1xuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLnB1c2goY2hpbGQpO1xuICAgIH1cblxuICAgIGJ1aWxkU2libGluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY2hpbGROb2Rlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gdGhpcy5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0Q2hpbGQgPSB0aGlzLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IHRoaXMuY2hpbGROb2Rlc1t0aGlzLmNoaWxkTm9kZXMubGVuZ3RoIC0gMV07XG5cbiAgICAgICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaW5kZXggPT09IChzZWxmLmNoaWxkTm9kZXMubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gc2VsZi5jaGlsZE5vZGVzW2luZGV4IC0gMV07XG4gICAgICAgICAgICAgICAgY2hpbGQubmV4dFNpYmxpbmcgPSBzZWxmLmNoaWxkTm9kZXNbaW5kZXggKyAxXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICBjaGlsZC5idWlsZFNpYmxpbmcoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJQYXJlbnRBbmRTaWJsaW5nKCkge1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBudWxsO1xuICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZyA9IG51bGw7XG4gICAgICAgIHRoaXMubmV4dFNpYmxpbmcgPSBudWxsO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYXNDaGlsZE5vZGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAhPT0gMDtcbiAgICB9XG5cbiAgICBjbGVhckNoaWxkTm9kZXMoKSB7XG4gICAgICAgIHRoaXMuY2hpbGROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgYXBwZW5kQ2hpbGQoY2hpbGQpIHtcbiAgICAgICAgaWYgKGNoaWxkLnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgY2hpbGQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5wYXJlbnROb2RlID0gdGhpcztcblxuICAgICAgICBpZiAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gY2hpbGQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZC5uZXh0U2libGluZyA9IGNoaWxkO1xuICAgICAgICAgICAgY2hpbGQucHJldmlvdXNTaWJsaW5nID0gdGhpcy5sYXN0Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMucHVzaChjaGlsZCk7XG4gICAgICAgIHJldHVybiBjaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRCZWZvcmUocmVmQ2hpbGQsIG5ld0NoaWxkKSB7XG4gICAgICAgIGlmIChuZXdDaGlsZC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobmV3Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKHJlZkNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWYgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgbmV3Q2hpbGQucGFyZW50Tm9kZSA9IHRoaXM7XG5cbiAgICAgICAgaWYgKHJlZkNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgICAgICByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQ7XG4gICAgICAgIHJlZkNoaWxkLnByZXZpb3VzU2libGluZyA9IG5ld0NoaWxkO1xuXG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbmV3Q2hpbGQ7XG4gICAgICAgIH1cblxuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAwLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBpbnNlcnRBZnRlcihyZWZDaGlsZCwgbmV3Q2hpbGQpIHtcbiAgICAgICAgaWYgKHJlZkNoaWxkLm5leHRTaWJsaW5nID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmFwcGVuZENoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmluc2VydEJlZm9yZShyZWZDaGlsZC5uZXh0U2libGluZywgbmV3Q2hpbGQpO1xuICAgIH1cblxuICAgIHJlbW92ZUNoaWxkKGNoaWxkKSB7XG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKGNoaWxkKTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmUgbm9kZSBpcyBub3QgYSBjaGlsZCBvZiBzcGVjaWZpZWQgbm9kZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNoaWxkLnByZXZpb3VzU2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5wcmV2aW91c1NpYmxpbmcubmV4dFNpYmxpbmcgPSBjaGlsZC5uZXh0U2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjaGlsZC5uZXh0U2libGluZyAhPSBudWxsKSB7XG4gICAgICAgICAgICBjaGlsZC5uZXh0U2libGluZy5wcmV2aW91c1NpYmxpbmcgPSBjaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IGNoaWxkLm5leHRTaWJsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGluZGV4ID09PSAodGhpcy5jaGlsZE5vZGVzLmxlbmd0aCAtIDEpKSB7XG4gICAgICAgICAgICB0aGlzLmxhc3RDaGlsZCA9IGNoaWxkLnByZXZpb3VzU2libGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIGNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgcmVwbGFjZUNoaWxkKHJlZkNoaWxkLCBuZXdDaGlsZCkge1xuICAgICAgICBpZiAobmV3Q2hpbGQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBuZXdDaGlsZC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5ld0NoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLmNoaWxkTm9kZXMuaW5kZXhPZihyZWZDaGlsZCk7XG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignUmVmIG5vZGUgaXMgbm90IGEgY2hpbGQgb2Ygc3BlY2lmaWVkIG5vZGUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5ld0NoaWxkLnBhcmVudE5vZGUgPSB0aGlzO1xuICAgICAgICBuZXdDaGlsZC5wcmV2aW91c1NpYmxpbmcgPSByZWZDaGlsZC5wcmV2aW91c1NpYmxpbmc7XG4gICAgICAgIG5ld0NoaWxkLm5leHRTaWJsaW5nID0gcmVmQ2hpbGQubmV4dFNpYmxpbmc7XG5cbiAgICAgICAgaWYgKHRoaXMuZmlyc3RDaGlsZCA9PT0gcmVmQ2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyc3RDaGlsZCA9IG5ld0NoaWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRoaXMubGFzdENoaWxkID09PSByZWZDaGlsZCkge1xuICAgICAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBuZXdDaGlsZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJlZkNoaWxkLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICBuZXdDaGlsZC5jb21waWxlKHRoaXMuY29tcGlsZU9wdGlvbnMpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKGluZGV4LCAxLCBuZXdDaGlsZCk7XG4gICAgICAgIHJldHVybiBuZXdDaGlsZDtcbiAgICB9XG5cbiAgICBjbG9uZU5vZGUoZGVlcCkge1xuICAgICAgICB2YXIgbm9kZSA9IHRoaXMub25DbG9uZU5vZGUoZGVlcCk7XG5cbiAgICAgICAgaWYoZGVlcCkge1xuICAgICAgICAgICAgbm9kZS5jaGlsZE5vZGVzID0gdGhpcy5jaGlsZE5vZGVzLm1hcChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2hpbGQuY2xvbmVOb2RlKGRlZXApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBub2RlLmJ1aWxkU2libGluZygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuXG4gICAgZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5vbkRlc3Ryb3kgJiYgdGhpcy5vbkRlc3Ryb3koKTtcblxuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubWFwKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgY2hpbGQuZGVzdHJveSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB0aGlzLmNsZWFyUGFyZW50QW5kU2libGluZygpO1xuICAgICAgICB0aGlzLmNoaWxkTm9kZXMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5maXJzdENoaWxkID0gbnVsbDtcbiAgICAgICAgdGhpcy5sYXN0Q2hpbGQgPSBudWxsO1xuICAgICAgICB0aGlzLm93bmVyRG9jdW1lbnQgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIGhvb3BzXG5cbiAgICAvLyBlbmQgb2YgaG9vcHNcbn1cbiIsImltcG9ydCB7IFZOb2RlLCBub2RlVHlwZSB9IGZyb20gJy4vdm5vZGUnO1xuXG5leHBvcnQgY2xhc3MgVlRleHQgZXh0ZW5kcyBWTm9kZSB7XG4gICAgY29uc3RydWN0b3IodmFsdWUpIHtcbiAgICAgICAgc3VwZXIobm9kZVR5cGUudGV4dCwgJyN0ZXh0JywgdmFsdWUpO1xuICAgICAgICB0aGlzLmVsbSA9IG51bGw7XG4gICAgfVxuXG4gICAgb25DbG9uZU5vZGUoKSB7XG4gICAgICAgIHJldHVybiBuZXcgVlRleHQodGhpcy5ub2RlTmFtZSwgdGhpcy5ub2RlVmFsdWUpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBWTm9kZSwgbm9kZVR5cGUgfSBmcm9tICcuL3Zub2RlJztcblxuZXhwb3J0IGNsYXNzIFZUeXBlIGV4dGVuZHMgVk5vZGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihub2RlVHlwZS5kb2N1bWVudFR5cGUpO1xuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBUcGxMZXhlciB9IGZyb20gJy4vdHBsLWxleGVyJztcbmltcG9ydCB7IFRwbFBhcnNlciB9IGZyb20gJy4vdHBsLXBhcnNlcic7XG5pbXBvcnQgeyBub2RlVHlwZSB9IGZyb20gJy4vbW9kZWwnO1xuXG5mdW5jdGlvbiBsZXhUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsTGV4ZXIoKS5sZXgodHBsKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VUcGwodHBsKSB7XG4gICAgdHBsID0gdXRpbHMuZXNjYXBlSHRtbCh0cGwpO1xuICAgIHJldHVybiBuZXcgVHBsUGFyc2VyKG5ldyBUcGxMZXhlcigpKS5wYXJzZSh0cGwpO1xufVxuXG5mdW5jdGlvbiBpc1ZFbG0odm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmVsZW1lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzVkF0dHIodm5vZGUpIHtcbiAgICByZXR1cm4gdm5vZGUubm9kZVR5cGUgPT09IG5vZGVUeXBlLmF0dHJpYnV0ZTtcbn1cblxuZnVuY3Rpb24gaXNWVGV4dCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUudGV4dDtcbn1cblxuZnVuY3Rpb24gaXNWQ29tbWVudCh2bm9kZSkge1xuICAgIHJldHVybiB2bm9kZS5ub2RlVHlwZSA9PT0gbm9kZVR5cGUuY29tbWVudDtcbn1cblxuZXhwb3J0IHsgbGV4VHBsLCBwYXJzZVRwbCwgaXNWRWxtLCBpc1ZBdHRyLCBpc1ZUZXh0LCBpc1ZDb21tZW50IH07IiwiaW1wb3J0IHsgaXNWVGV4dCwgaXNWQ29tbWVudCB9IGZyb20gJy4vdHBsLWFwaSdcblxuZXhwb3J0IGNsYXNzIFRwbEJ1aWxkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgYnVpbGQodm5vZGUpIHtcbiAgICAgICAgaWYgKGlzVlRleHQodm5vZGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZFRleHQodm5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNWQ29tbWVudCh2bm9kZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQ29tbWVudCh2bm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5idWlsZEVsZW1lbnQodm5vZGUpO1xuICAgIH1cblxuICAgIGJ1aWxkRWxlbWVudCh2ZWxtKSB7XG4gICAgICAgIHZhciBhdHRyVHBsID0gdmVsbS52YXR0cnMubWFwKCh2YXR0cikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJ1aWxkQXR0cmlidXRlKHZhdHRyKTtcbiAgICAgICAgICAgIH0pLmpvaW4oJyAnKSxcbiAgICAgICAgICAgIGNoaWxkVHBsID0gdmVsbS5jaGlsZE5vZGVzLm1hcCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5idWlsZChjaGlsZCk7XG4gICAgICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICBpZihhdHRyVHBsKSB7XG4gICAgICAgICAgICBhdHRyVHBsID0gJyAnICsgYXR0clRwbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cGwgPSAnPCcgKyB2ZWxtLm5vZGVOYW1lICsgYXR0clRwbCArICc+JyArIGNoaWxkVHBsO1xuXG4gICAgICAgIGlmICghdmVsbS5zZWxmQ2xvc2VkKSB7XG4gICAgICAgICAgICB0cGwgKz0gKCc8LycgKyB2ZWxtLm5vZGVOYW1lICsgJz4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cGw7XG4gICAgfVxuXG4gICAgYnVpbGRBdHRyaWJ1dGUodmF0dHIpIHtcbiAgICAgICAgcmV0dXJuIHZhdHRyLm5vZGVOYW1lICsgKHZhdHRyLm5vZGVWYWx1ZSA9PSBudWxsID8gJycgOiAoJz0nICsgdmF0dHIucXVvdGUgKyB2YXR0ci5ub2RlVmFsdWUgKyB2YXR0ci5xdW90ZSkpO1xuICAgIH1cblxuICAgIGJ1aWxkVGV4dCh2dGV4dCkge1xuICAgICAgICByZXR1cm4gdnRleHQubm9kZVZhbHVlO1xuICAgIH1cblxuICAgIGJ1aWxkQ29tbWVudCh2Y21udCkge1xuICAgICAgICByZXR1cm4gdmNtbnQubm9kZVZhbHVlO1xuICAgIH1cbn1cblxuIiwiaW1wb3J0IHsgRXhwTGV4ZXIgfSBmcm9tICcuLi9leHAnO1xuXG5leHBvcnQgY2xhc3MgVHBsTGV4ZXIgZXh0ZW5kcyBFeHBMZXhlciB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICBzdXBlcihvcHRpb25zKTtcbiAgICB9XG5cbiAgICBpc1ZhbGlkSWRlbnRpZmllclN0YXJ0KGNoKSB7XG4gICAgICAgIHJldHVybiAoJ2EnIDw9IGNoICYmIGNoIDw9ICd6JyB8fFxuICAgICAgICAgICAgJ0EnIDw9IGNoICYmIGNoIDw9ICdaJyB8fFxuICAgICAgICAgICAgJ18nID09PSBjaCB8fCBjaCA9PT0gJyQnIHx8XG4gICAgICAgICAgICBjaCA9PT0gJ0AnIHx8IGNoID09PSAnOicgfHwgY2ggPT09ICcqJyk7XG4gICAgfVxuXG4gICAgaXNWYWxpZElkZW50aWZpZXJDb250aW51ZShjaCwgY3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNWYWxpZElkZW50aWZpZXJTdGFydChjaCwgY3ApIHx8IHRoaXMuaXNOdW1iZXIoY2gpIHx8IGNoID09PSAnLScgfHwgY2ggPT09ICcuJztcbiAgICB9XG5cbiAgICBleHBlY3RTdHJpbmcoc3RyKSB7XG4gICAgICAgIHZhciBudW0gPSBzdHIubGVuZ3RoO1xuICAgICAgICByZXR1cm4gKHRoaXMuaW5kZXggKyBudW0gPD0gdGhpcy50ZXh0Lmxlbmd0aCkgPyAoc3RyID09PSB0aGlzLnRleHQuc3Vic3RyKHRoaXMuaW5kZXgsIG51bSkpIDogZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gaHRtbCBjb21tZW50IFwiPCEtLWNvbW1lbnQtLT5cIlxuICAgIHJlYWRDb21tZW50KGJlZ2luLCBlbmQpIHtcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5pbmRleDtcbiAgICAgICAgdGhpcy5pbmRleCArPSBiZWdpbi5sZW5ndGg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgdmFyIHJhd1N0cmluZyA9IGJlZ2luO1xuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciBjaCA9IHRoaXMudGV4dC5jaGFyQXQodGhpcy5pbmRleCk7XG4gICAgICAgICAgICByYXdTdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoZW5kKSkge1xuICAgICAgICAgICAgICAgIHJhd1N0cmluZyArPSBlbmQ7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJhd1N0cmluZyxcbiAgICAgICAgICAgICAgICAgICAgY29tbWVudDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0cmluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3RyaW5nICs9IGNoO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudGhyb3dFcnJvcignVW50ZXJtaW5hdGVkIGNvbW1lbnQnLCBzdGFydCk7XG4gICAgfVxuXG4gICAgLy8gaHRtbCB0ZXh0XG4gICAgcmVhZFRleHQoKSB7XG4gICAgICAgIHZhciBzdGFydCA9IHRoaXMuaW5kZXg7XG4gICAgICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgY2ggPSB0aGlzLnRleHQuY2hhckF0KHRoaXMuaW5kZXgpO1xuICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgaWYgKChjaCA9PT0gJzwnICYmICh0aGlzLmlzSWRlbnRpZmllclN0YXJ0KGNoMikgfHwgY2gyID09PSAnLycpKSB8fCB0aGlzLmV4cGVjdFN0cmluZygnPCEtLScpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdHJpbmcgKz0gY2g7XG4gICAgICAgICAgICB0aGlzLmluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgICAgICBpbmRleDogc3RhcnQsXG4gICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXG4gICAgICAgICAgICB0ZXh0VGFnOiB0cnVlXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGh0bWwgdGFnXG4gICAgcmVhZFRhZyhiZWdpbiwgZW5kLCBjbG9zaW5nLCBkb2N0eXBlKSB7XG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goeyBpbmRleDogdGhpcy5pbmRleCwgdGV4dDogYmVnaW4sIHRhZzogdHJ1ZSwgY2xvc2luZzogY2xvc2luZywgYmVnaW46IHRydWUsIGRvY3R5cGU6IGRvY3R5cGUgfSk7XG4gICAgICAgIHRoaXMuaW5kZXggKz0gYmVnaW4ubGVuZ3RoO1xuICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuXG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcblxuICAgICAgICAgICAgaWYgKCFjbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoMiA9IHRoaXMucGVlaygpO1xuICAgICAgICAgICAgICAgIHZhciBzdHIgPSBjaCArIGNoMjtcbiAgICAgICAgICAgICAgICBpZiAoc3RyID09PSAnLycgKyBlbmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2tlbnMucHVzaCh7IGluZGV4OiB0aGlzLmluZGV4LCB0ZXh0OiBzdHIsIHRhZzogdHJ1ZSwgY2xvc2luZzogdHJ1ZSwgZW5kOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZGV4ICs9IHN0ci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNoID09PSBlbmQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVuZCxcbiAgICAgICAgICAgICAgICAgICAgdGFnOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjbG9zaW5nOiAhIWRvY3R5cGUgPyB0cnVlIDogY2xvc2luZyxcbiAgICAgICAgICAgICAgICAgICAgZW5kOiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCArPSBlbmQubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5pc0lkZW50aWZpZXJTdGFydCh0aGlzLnBlZWtNdWx0aWNoYXIoKSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRJZGVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoY2ggPT09ICdcIicgfHwgY2ggPT09ICdcXCcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkU3RyaW5nKGNoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuaXNXaGl0ZXNwYWNlKGNoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5kZXgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGNoID09PSAnPScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHsgaW5kZXg6IHRoaXMuaW5kZXgsIHRleHQ6ICc9JywgZXF1YWw6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdVbmV4cGVjdGVkIG5leHQgY2hhcmFjdGVyICcsIHRoaXMuaW5kZXgsIHRoaXMuaW5kZXggKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxleCh0ZXh0KSB7XG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgICAgIHRoaXMuaW5kZXggPSAwO1xuICAgICAgICB0aGlzLnRva2VucyA9IFtdO1xuXG4gICAgICAgIHZhciBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50ZXh0Lmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIGNoID0gdGhpcy50ZXh0LmNoYXJBdCh0aGlzLmluZGV4KTtcbiAgICAgICAgICAgIHZhciBjaDIgPSB0aGlzLnBlZWsoKTtcbiAgICAgICAgICAgIHZhciBjaDMgPSB0aGlzLnBlZWsoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwhLS0nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZENvbW1lbnQoJzwhLS0nLCAnLS0+Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjaCA9PT0gJzwnICYmIHRoaXMuaXNJZGVudGlmaWVyU3RhcnQoY2gyKSkge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCcsICc+JywgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5leHBlY3RTdHJpbmcoJzwvJykgJiYgdGhpcy5pc0lkZW50aWZpZXJTdGFydChjaDMpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkVGFnKCc8LycsICc+JywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmV4cGVjdFN0cmluZygnPCFET0NUWVBFJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhZFRhZygnPCEnLCAnPicsIHRydWUsIHRydWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKCdET0NUWVBFIGlzIG5vdCBhbGxvd2VkJywgdGhpcy5pbmRleCwgdGhpcy5pbmRleCArIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVhZFRleHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy50b2tlbnM7XG4gICAgfVxufSIsImltcG9ydCB7IEV4cFBhcnNlciB9IGZyb20gJy4uL2V4cCc7XG5pbXBvcnQge1xuICAgIFZFbG0sIFZBdHRyLCBWVGV4dCwgVkNtbnQsIFZUeXBlXG59IGZyb20gJy4vbW9kZWwnO1xuXG5leHBvcnQgY2xhc3MgVHBsUGFyc2VyIGV4dGVuZHMgRXhwUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihsZXhlciwgb3B0aW9ucykge1xuICAgICAgICBzdXBlcihsZXhlciwgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgcGFyc2UodGV4dCkge1xuICAgICAgICB0aGlzLmluZGV4ID0gMDtcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICAgICAgdGhpcy50b2tlbnMgPSB0aGlzLmxleGVyLmxleCh0ZXh0KTtcblxuICAgICAgICB2YXIgcm9vdCA9IG5ldyBWRWxtKCk7XG4gICAgICAgIHZhciBkb2N0eXBlLCBhbGxvd0RvY1R5cGUgPSAhIXRoaXMub3B0aW9ucy5hbGxvd0RvY1R5cGU7XG4gICAgICAgIHdoaWxlICh0aGlzLmluZGV4IDwgdGhpcy50b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICAgICAgaWYgKHRva2VuLmRvY3R5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWxsb3dEb2NUeXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZG9jdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9jdHlwZSA9IHRoaXMuZG9jdHlwZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2goZG9jdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCJET0NUWVBFIG9ubHkgYWxsb3cgb25lXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiRE9DVFlQRSBpcyBub3QgYWxsb3dlZFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4uY29tbWVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjb21tZW50ID0gbmV3IFZDbW50KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKGNvbW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGV4dFRhZykge1xuICAgICAgICAgICAgICAgIHZhciB0ZXh0ID0gbmV3IFZUZXh0KHRva2VuLnRleHQpO1xuICAgICAgICAgICAgICAgIHJvb3QuY2hpbGROb2Rlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgcm9vdC5jaGlsZE5vZGVzLnB1c2godGhpcy5lbGVtZW50KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiaW1wb3NzaWJsZVwiLCB0b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb290LmJ1aWxkU2libGluZygpO1xuXG4gICAgICAgIHJldHVybiByb290LmNoaWxkTm9kZXM7XG4gICAgfVxuXG4gICAgZG9jdHlwZSgpIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBkb2NUeXBlID0gbmV3IFZUeXBlKCk7XG4gICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLm5vZGVWYWx1ZSA9IHRva2VuLnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5hdHRycyhkb2NUeXBlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBkb2NUeXBlLmNoaWxkTm9kZXMucHVzaChhdHRyKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmVuZCAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZG9jVHlwZTtcbiAgICB9XG5cbiAgICBlbGVtZW50KHApIHtcbiAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgIHZhciBlbGUgPSBuZXcgVkVsbSgpO1xuICAgICAgICB2YXIgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcblxuICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgZWxlLm5vZGVOYW1lID0gdG9rZW4udGV4dDtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuYXR0cnMoZWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChhdHRyKSB7XG4gICAgICAgICAgICBlbGUucHVzaEF0dHIoYXR0cik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5lbmQpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgaWYgKGVsZS5ub2RlTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICAgICAgICAgIGVsZS5zZWxmQ2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZEVsZW1lbnRzKGVsZSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlLnB1c2hDaGlsZChjaGlsZCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgdG9rZW4gPSB0aGlzLmN1cnJlbnQoKTtcbiAgICAgICAgaWYgKHRva2VuLnRhZyAmJiB0b2tlbi5iZWdpbiAmJiB0b2tlbi5jbG9zaW5nKSB7XG4gICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICBpZiAodG9rZW4uaWRlbnRpZmllcikge1xuICAgICAgICAgICAgICAgIGlmIChlbGUubm9kZU5hbWUgPT09IHRva2VuLnRleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aHJvd0Vycm9yKFwiIFVuZXhwZWN0ZWQgXCIsIHRva2VuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGU7XG4gICAgfVxuXG4gICAgY2hpbGRFbGVtZW50cyhwKSB7XG4gICAgICAgIHZhciBlbGVzID0gW107XG5cbiAgICAgICAgd2hpbGUgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuXG4gICAgICAgICAgICBpZiAodG9rZW4udGFnICYmIHRva2VuLmNsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRva2VuLmNvbW1lbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29tbWVudCA9IG5ldyBWQ21udCh0b2tlbi50ZXh0KTtcbiAgICAgICAgICAgICAgICBlbGVzLnB1c2goY29tbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0b2tlbi50ZXh0VGFnKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRleHQgPSBuZXcgVlRleHQodG9rZW4udGV4dCk7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRleHQpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodG9rZW4udGFnICYmIHRva2VuLmJlZ2luKSB7XG4gICAgICAgICAgICAgICAgZWxlcy5wdXNoKHRoaXMuZWxlbWVudChwKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRocm93RXJyb3IoXCIgVW5leHBlY3RlZCBcIiwgdG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZXM7XG4gICAgfVxuXG4gICAgYXR0cnMocCkge1xuICAgICAgICB2YXIgYXR0cnMgPSBbXTtcblxuICAgICAgICB3aGlsZSAodGhpcy5pbmRleCA8IHRoaXMudG9rZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi50YWcgJiYgdG9rZW4uZW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhdHRyID0gbmV3IFZBdHRyKCk7XG5cbiAgICAgICAgICAgIGlmICh0b2tlbi5pZGVudGlmaWVyKSB7XG4gICAgICAgICAgICAgICAgYXR0ci5ub2RlTmFtZSA9IHRva2VuLnRleHQ7XG4gICAgICAgICAgICAgICAgYXR0ci5vcmlnaW4gPSB0b2tlbi50ZXh0O1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgIHRva2VuID0gdGhpcy5jdXJyZW50KCk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuLmVxdWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgICAgICAgICB0b2tlbiA9IHRoaXMuY3VycmVudCgpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4uY29uc3RhbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHIubm9kZVZhbHVlID0gdG9rZW4udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGhyb3dFcnJvcihcIiBVbmV4cGVjdGVkIFwiLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGF0dHJzLnB1c2goYXR0cik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXR0cnM7XG4gICAgfVxuXG4gICAgY3VycmVudCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXggPCB0aGlzLnRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRva2Vuc1t0aGlzLmluZGV4XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgbmV4dCgpIHtcbiAgICAgICAgdGhpcy5pbmRleCsrO1xuICAgIH1cbn0iLCJ2YXIgZGVidWdNb2RlID0gdHJ1ZSxcbiAgICB0b1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcsXG4gICAgZ2V0UHJvdG90eXBlT2YgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbmZ1bmN0aW9uIGZvckVhY2gob2JqLCBhY3Rpb24sIGlnbm9yZU93bikge1xuICAgIGlmIChpc0FycmF5KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IG9iai5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24ob2JqW2luZGV4XSwgaW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChpZ25vcmVPd24gfHwgb2JqLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbihvYmpbcF0sIHApKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNvbWUob2JqLCBhY3Rpb24pIHtcbiAgICBpZiAoaXNBcnJheShvYmopKSB7XG4gICAgICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBvYmoubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uKGluZGV4LCBvYmpbaW5kZXhdKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uKHAsIG9ialtwXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb3B5KCkge1xuICAgIHZhciBkZWVwID0gZmFsc2UsIG9iakluZGV4ID0gMCwgb2JqID0gYXJndW1lbnRzW29iakluZGV4XSwgZmlsdGVyO1xuXG4gICAgaWYgKGlzQm9vbGVhbihvYmopKSB7XG4gICAgICAgIGRlZXAgPSBvYmo7XG4gICAgICAgIG9iakluZGV4Kys7XG4gICAgICAgIG9iaiA9IGFyZ3VtZW50c1tvYmpJbmRleF07XG4gICAgfVxuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiBvYmpJbmRleCArIDEpIHtcbiAgICAgICAgZmlsdGVyID0gYXJndW1lbnRzW29iakluZGV4ICsgMV07XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkob2JqKSkge1xuICAgICAgICB2YXIgbmV3QXJyID0gW107XG4gICAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKGZpbHRlciA9PSBudWxsIHx8IGZpbHRlcihvYmosIGluZGV4LCBpdGVtKSkge1xuICAgICAgICAgICAgICAgIG5ld0Fyci5wdXNoKGRlZXAgPyBjb3B5KGRlZXAsIGl0ZW0pIDogaXRlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gbmV3QXJyO1xuICAgIH1cblxuICAgIGlmIChpc09iamVjdChvYmopKSB7XG4gICAgICAgIHZhciBuZXdPYmogPSBvYmplY3Qob2JqKTtcbiAgICAgICAgZm9yRWFjaChvYmosIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgICAgICBpZiAoZmlsdGVyID09IG51bGwgfHwgZmlsdGVyKG9iaiwga2V5LCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBuZXdPYmpba2V5XSA9IGRlZXAgPyBjb3B5KGRlZXAsIHZhbHVlKSA6IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ld09iajtcbiAgICB9XG5cbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBleHRlbmQoKSB7XG4gICAgdmFyIGRlZXAgPSBmYWxzZSwgaW5kZXggPSAwLCB0YXJnZXQgPSBhcmd1bWVudHNbaW5kZXhdO1xuXG4gICAgaWYgKGlzQm9vbGVhbih0YXJnZXQpKSB7XG4gICAgICAgIGRlZXAgPSB0YXJnZXQ7XG4gICAgICAgIHRhcmdldCA9IGFyZ3VtZW50c1srK2luZGV4XTtcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4ICsgMSkuZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgZGVlcE1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpbmRleCArIDEpLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHBsYWluTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZSgpIHtcbiAgICB2YXIgZGVlcCA9IGZhbHNlLCBpbmRleCA9IDAsIHRhcmdldCA9IHt9O1xuXG4gICAgaWYgKGlzQm9vbGVhbihhcmd1bWVudHNbaW5kZXhdKSkge1xuICAgICAgICBkZWVwID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICBpZiAoZGVlcCkge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0LCBpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluZGV4KS5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBwbGFpbk1lcmdlKHRhcmdldCwgaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmZ1bmN0aW9uIHBsYWluTWVyZ2UodGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBmb3JFYWNoKHNvdXJjZSwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgdGFyZ2V0W2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVlcE1lcmdlKHRhcmdldCwgc291cmNlKSB7XG4gICAgZm9yRWFjaChzb3VyY2UsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICAgIGlmICh0YXJnZXRba2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICB0YXJnZXRba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqZWN0KHRhcmdldFtrZXldKSAmJiBpc09iamVjdCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBkZWVwTWVyZ2UodGFyZ2V0W2tleV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldFtrZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0KG8pIHtcbiAgICBmdW5jdGlvbiBGKCkge1xuICAgIH1cblxuICAgIEYucHJvdG90eXBlID0gbztcbiAgICByZXR1cm4gbmV3IEYoKTtcbn1cblxuZnVuY3Rpb24gaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpIHtcbiAgICB2YXIgcHJvdG90eXBlID0gb2JqZWN0KHN1cGVyVHlwZS5wcm90b3R5cGUpO1xuICAgIHByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IHN1YlR5cGU7XG4gICAgc3ViVHlwZS5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG59XG5cbmZ1bmN0aW9uIGluaGVyaXQoc3ViVHlwZSwgc3VwZXJUeXBlKSB7XG4gICAgaW5oZXJpdFByb3RvdHlwZShzdWJUeXBlLCBzdXBlclR5cGUpO1xuICAgIHN1YlR5cGUuc3VwZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN1cGVyVHlwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIGxvd2VyY2FzZShzdHJpbmcpIHtcbiAgICByZXR1cm4gaXNTdHJpbmcoc3RyaW5nKSA/IHN0cmluZy50b0xvd2VyQ2FzZSgpIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiB1cHBlcmNhc2Uoc3RyaW5nKSB7XG4gICAgcmV0dXJuIGlzU3RyaW5nKHN0cmluZykgPyBzdHJpbmcudG9VcHBlckNhc2UoKSA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWQodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAndW5kZWZpbmVkJztcbn1cblxuZnVuY3Rpb24gaXNEZWZpbmVkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5cbmZ1bmN0aW9uIGlzQXJyYXkob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5O1xufVxuXG5mdW5jdGlvbiBpc01hcChvYmopIHtcbiAgICByZXR1cm4gb2JqIGluc3RhbmNlb2YgTWFwO1xufVxuXG5mdW5jdGlvbiBpc09iamVjdCh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnO1xufVxuXG5mdW5jdGlvbiBpc0JsYW5rT2JqZWN0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgIWdldFByb3RvdHlwZU9mKHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gaXNTdHJpbmcodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJztcbn1cblxuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJztcbn1cblxuZnVuY3Rpb24gaXNEYXRlKHZhbHVlKSB7XG4gICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsdWUpID09PSAnW29iamVjdCBEYXRlXSc7XG59XG5cbmZ1bmN0aW9uIGlzRnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ0V4cCh2YWx1ZSkge1xuICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gJ1tvYmplY3QgUmVnRXhwXSc7XG59XG5cbmZ1bmN0aW9uIGlzQm9vbGVhbih2YWx1ZSkge1xuICAgIHJldHVybiB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJztcbn1cblxuZnVuY3Rpb24gaXNGb3JtRGF0YSh2YWx1ZSkge1xuICAgIHJldHVybiAodHlwZW9mIEZvcm1EYXRhICE9PSAndW5kZWZpbmVkJykgJiYgKHZhbHVlIGluc3RhbmNlb2YgRm9ybURhdGEpO1xufVxuXG5mdW5jdGlvbiBpc1NhbWUob2JqMSwgb2JqMikge1xuICAgIHZhciBzYW1lID0gKG9iajEgPT09IG9iajIpO1xuXG4gICAgaWYgKCFzYW1lKSB7XG4gICAgICAgIGlmIChpc0FycmF5KG9iajEpICYmIGlzQXJyYXkob2JqMikpIHtcbiAgICAgICAgICAgIGlmIChvYmoxLmxlbmd0aCA9PT0gb2JqMi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzYW1lID0gIXNvbWUob2JqMSwgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gIWlzU2FtZSh2YWx1ZSwgb2JqMltpbmRleF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG9iajEpICYmIGlzT2JqZWN0KG9iajIpICYmIGdldFByb3RvdHlwZU9mKG9iajEpID09PSBnZXRQcm90b3R5cGVPZihvYmoyKSkge1xuICAgICAgICAgICAgc2FtZSA9ICFzb21lKG9iajEsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc1NhbWUodmFsdWUsIG9iajJba2V5XSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzYW1lO1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHZhbHVlKSB7XG4gICAgcmV0dXJuICFpc09iamVjdCh2YWx1ZSkgfHwgIXNvbWUodmFsdWUsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlYnVnKGxvZykge1xuICAgIGlmIChkZWJ1Z01vZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2cobG9nKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zKGFyciwgb2JqKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBvYmo7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNvbnRhaW5zU3RyKGFyciwgc3RyLCBpZ25vcmVDYXNlKSB7XG4gICAgcmV0dXJuIGFyci5zb21lKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtID09PSBzdHIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGl0ZW0pID09PSBsb3dlcmNhc2Uoc3RyKSk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGhhc1Byb3BlcnR5KG9iaiwga2V5LCBpZ25vcmVDYXNlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHZhciBrZXkyLCBoYXNQcm9wID0gdHJ1ZSwga2V5cyA9IGtleS5zcGxpdCgnLicpLCB0YXJnZXQgPSBvYmo7XG5cbiAgICB3aGlsZSAoaGFzUHJvcCAmJiBrZXlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAga2V5MiA9IGtleXMuc2hpZnQoKTtcbiAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICBmb3JFYWNoKHRhcmdldCwgZnVuY3Rpb24gKHZhbHVlMywga2V5Mykge1xuICAgICAgICAgICAgaGFzUHJvcCA9IChrZXkzID09PSBrZXkyIHx8IChpZ25vcmVDYXNlICYmIGxvd2VyY2FzZShrZXkzKSA9PT0gbG93ZXJjYXNlKGtleTIpKSk7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgIHRhcmdldCA9IHZhbHVlMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICB9LCB0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gaGFzUHJvcDtcbn1cblxuZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXksIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIga2V5MiwgaGFzUHJvcCA9IHRydWUsIGtleXMgPSBrZXkuc3BsaXQoJy4nKSwgdGFyZ2V0ID0gb2JqO1xuXG4gICAgd2hpbGUgKGhhc1Byb3AgJiYga2V5cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGtleTIgPSBrZXlzLnNoaWZ0KCk7XG4gICAgICAgIGhhc1Byb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgIGhhc1Byb3AgPSAoa2V5MyA9PT0ga2V5MiB8fCAoaWdub3JlQ2FzZSAmJiBsb3dlcmNhc2Uoa2V5MykgPT09IGxvd2VyY2FzZShrZXkyKSkpO1xuICAgICAgICAgICAgaWYgKGhhc1Byb3ApIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gaGFzUHJvcDtcbiAgICAgICAgfSwgdHJ1ZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGhhc1Byb3AgPyB0YXJnZXQgOiBudWxsO1xufVxuXG5mdW5jdGlvbiBzZXRQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUsIGlnbm9yZUNhc2UpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGtleTIsIGhhc1Byb3AgPSB0cnVlLCBrZXlzID0ga2V5LnNwbGl0KCcuJyksIHRhcmdldCA9IG9iajtcblxuICAgIHdoaWxlIChoYXNQcm9wICYmIGtleXMubGVuZ3RoID4gMCkge1xuICAgICAgICBrZXkyID0ga2V5cy5zaGlmdCgpO1xuICAgICAgICBpZiAoa2V5cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRhcmdldFtrZXkyXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaGFzUHJvcCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yRWFjaCh0YXJnZXQsIGZ1bmN0aW9uICh2YWx1ZTMsIGtleTMpIHtcbiAgICAgICAgICAgICAgICBoYXNQcm9wID0gKGtleTMgPT09IGtleTIgfHwgKGlnbm9yZUNhc2UgJiYgbG93ZXJjYXNlKGtleTMpID09PSBsb3dlcmNhc2Uoa2V5MikpKTtcbiAgICAgICAgICAgICAgICBpZiAoaGFzUHJvcCkge1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB2YWx1ZTM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBoYXNQcm9wO1xuICAgICAgICAgICAgfSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWhhc1Byb3ApIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGtleSArICc6IENhbiBub3Qgc2V0IHByb3BlcnR5IG9mIHVuZGVmaW5lZCcpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0KCkge1xuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuY29uY2F0LmFwcGx5KFtdLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvcmRlckJ5KGFyciwgZ2V0dGVyKSB7XG4gICAgdmFyIGdldFZhbHVlID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgaWYgKGdldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBnZXR0ZXIoaXRlbSk7XG4gICAgfTtcblxuICAgIHJldHVybiBhcnIuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPCBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA+IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMDtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gb3JkZXJCeURlc2NlbmRpbmcoYXJyLCBnZXR0ZXIpIHtcbiAgICB2YXIgZ2V0VmFsdWUgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoZ2V0dGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGdldHRlcihpdGVtKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIGFyci5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgIGlmIChnZXRWYWx1ZShhKSA8IGdldFZhbHVlKGIpKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0VmFsdWUoYSkgPiBnZXRWYWx1ZShiKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAwO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b051bWJlcih2YWx1ZSkge1xuICAgIHZhciBuID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTmFOKG4pID8gdmFsdWUgOiBuO1xufVxuXG5mdW5jdGlvbiByZW1vdmUoYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGluZGV4ID0gYXJyLmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gYXJyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdCgpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIG1hdGNoLCBtYXRjaFRleHQsIGluZGV4LCByZXN1bHQgPSAnJywgdGV4dCA9IGFyZ3VtZW50c1swXSxcbiAgICAgICAgcGF0dGVybiA9IC9cXHsoXFxkKylcXH0vZywgbGFzdEluZGV4ID0gcGF0dGVybi5sYXN0SW5kZXg7XG5cbiAgICB3aGlsZSAobWF0Y2ggPSBwYXR0ZXJuLmV4ZWModGV4dCkpIHtcbiAgICAgICAgbWF0Y2hUZXh0ID0gbWF0Y2hbMF07XG4gICAgICAgIGluZGV4ID0gTnVtYmVyLnBhcnNlSW50KG1hdGNoWzFdKSArIDE7XG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gaW5kZXgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignZm9ybWF0IGl0ZW0gJyArIGluZGV4ICsgJ2lzIG5vdCBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4LCBtYXRjaC5pbmRleCkgKyBhcmd1bWVudHNbaW5kZXhdO1xuICAgICAgICBsYXN0SW5kZXggPSBwYXR0ZXJuLmxhc3RJbmRleDtcbiAgICB9XG5cbiAgICByZXN1bHQgKz0gdGV4dC5zdWJzdHJpbmcobGFzdEluZGV4KTtcblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUh0bWwoaHRtbCkge1xuICAgIHJldHVybiBodG1sLnJlcGxhY2UoLyZndDsvZywgJz4nKS5yZXBsYWNlKC8mbHQ7L2csICc8JykucmVwbGFjZSgvJmFtcDsvZywgJyYnKS5yZXBsYWNlKC8mcXVvdGU7L2csICcnKTtcbn1cblxuZnVuY3Rpb24gam9pbihzZXBhcmF0b3IsIGFycikge1xuICAgIHZhciByZXN1bHQgPSAnJywgbGVuZ3RoID0gYXJyLmxlbmd0aDtcblxuICAgIGFyci5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXN1bHQgKz0gaXRlbTtcblxuICAgICAgICBpZiAoaW5kZXggKyAxIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gc2VwYXJhdG9yO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQge1xuICAgIGZvckVhY2gsXG4gICAgc29tZSxcbiAgICBjb3B5LFxuICAgIGV4dGVuZCxcbiAgICBtZXJnZSxcbiAgICBvYmplY3QsXG4gICAgaW5oZXJpdCxcbiAgICBsb3dlcmNhc2UsXG4gICAgdXBwZXJjYXNlLFxuICAgIGlzVW5kZWZpbmVkLFxuICAgIGlzRGVmaW5lZCxcbiAgICBpc09iamVjdCxcbiAgICBpc0JsYW5rT2JqZWN0LFxuICAgIGlzTnVtYmVyLFxuICAgIGlzRGF0ZSxcbiAgICBpc0Z1bmN0aW9uLFxuICAgIGlzUmVnRXhwLFxuICAgIGlzQm9vbGVhbixcbiAgICBpc0FycmF5LFxuICAgIGlzU3RyaW5nLFxuICAgIGlzU2FtZSxcbiAgICBpc0VtcHR5LFxuICAgIGlzRm9ybURhdGEsXG4gICAgZGVidWcsXG4gICAgY29udGFpbnMsXG4gICAgY29udGFpbnNTdHIsXG4gICAgaGFzUHJvcGVydHksXG4gICAgZ2V0UHJvcGVydHksXG4gICAgc2V0UHJvcGVydHksXG4gICAgY29uY2F0LFxuICAgIG9yZGVyQnksXG4gICAgb3JkZXJCeURlc2NlbmRpbmcsXG4gICAgdG9OdW1iZXIsXG4gICAgcmVtb3ZlLFxuICAgIGZvcm1hdCxcbiAgICBlc2NhcGVIdG1sLFxuICAgIGpvaW5cbn0iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyBpc01lc3NhZ2UgfSBmcm9tICcuLi9jb3JlJztcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gJy4vcGFyc2VyJztcbmltcG9ydCB7IE9ic2VydmVyLCBoYW5kbGVyIH0gZnJvbSAnLi4vb2JzZXJ2ZXInO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuLi9yZW5kZXInO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcbmltcG9ydCB7IEV2YWx1YXRvciB9IGZyb20gJy4uL2V4cCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wb25lbnRDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kJHZlbG0gPSBudWxsO1xuICAgIHRoaXMuJCRwYXJlbnQgPSBudWxsO1xuICAgIHRoaXMuJCRjaGlsZHJlbiA9IFtdO1xuICAgIHRoaXMuJCRyZW5kZXJlciA9IG51bGw7XG4gICAgdGhpcy4kJG9ic2VydmVyID0gbmV3IE9ic2VydmVyKHRoaXMpO1xuICAgIHRoaXMuJGluamVjdG9yID0gaW5qZWN0b3I7XG4gICAgdGhpcy4kcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgIHRoaXMuJGV2YWx1YXRvciA9IG5ldyBFdmFsdWF0b3IodGhpcyk7XG4gICAgdGhpcy5zbG90cyA9IHt9O1xuICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgdGhpcy5wcm9wcyA9IHRoaXMuJGRlbGVnYXRlKHt9KTtcbiAgICB0aGlzLnN0YXRlID0gdGhpcy4kZGVsZWdhdGUoe30pO1xuICAgIHRoaXMuJGRhdGEgPSB1dGlscy5tZXJnZSh0aGlzLiQkbWV0YWRhdGEsIGRhdGEpO1xuICAgIGluamVjdG9yLmluamVjdFNlcnZpY2VzKHRoaXMsIHRoaXMuJGRhdGEpO1xufVxuXG5leHBvcnQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICAkZGVsZWdhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGFyZ2V0LCBoYW5kbGVyKTtcbiAgICB9XG5cbiAgICAkc2V0U2xvdChzbG90cykge1xuICAgICAgICB0aGlzLnNsb3RzID0gc2xvdHMgfHwge307XG4gICAgfVxuXG4gICAgJHNldFN0YXRlKHN0YXRlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLiRkZWxlZ2F0ZShzdGF0ZSk7XG4gICAgfVxuXG4gICAgJHNldFByb3BzKHByb3BzKSB7XG4gICAgICAgIHRoaXMucHJvcHMgPSB0aGlzLiRkZWxlZ2F0ZShwcm9wcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBjb21wb25lbnRDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cblxuICAgICRnZXRGaWx0ZXIoZnVsbE5hbWUpIHtcbiAgICAgICAgdmFyIGlkZW50aWZpZXIgPSB0aGlzLiRpbmplY3Rvci5wYXJzZUZ1bGxOYW1lKGZ1bGxOYW1lLCB0aGlzLiRkYXRhLmFsaWFzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGluamVjdG9yLmNyZWF0ZUZpbHRlcihpZGVudGlmaWVyLmtleSwgaWRlbnRpZmllci5ucyk7XG4gICAgfVxuXG4gICAgJGhhc1Byb3BlcnR5KGtleSkge1xuICAgICAgICAvLyByZXR1cm4gdXRpbHMuaGFzUHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJGdldFByb3BlcnR5KGtleSkgIT09IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAkZ2V0UHJvcGVydHkoa2V5KSB7XG4gICAgICAgIHJldHVybiB1dGlscy5nZXRQcm9wZXJ0eSh0aGlzLnByb3BzLCBrZXksIHRydWUpO1xuICAgIH1cblxuICAgICRzZXRQcm9wZXJ0eShrZXksIHZhbHVlKSB7XG4gICAgICAgIHZhciBvbGRWYWx1ZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMucHJvcHMsIGtleSwgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG9sZFZhbHVlICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdXRpbHMuc2V0UHJvcGVydHkodGhpcy5wcm9wcywga2V5LCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkaGFzTWVzc2FnZShrZXkpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzLmhhc1Byb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuICAgIH1cblxuICAgICRiaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub24oaGFuZGxlcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IodXRpbHMuZm9ybWF0KCdcInswfVwiIGlzIG5vdCBhIHZhbGlkIGV2ZW50Jywga2V5KSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkdW5iaW5kKGtleSwgaGFuZGxlcikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IHV0aWxzLmdldFByb3BlcnR5KHRoaXMuZXZlbnRzLCBrZXksIHRydWUpO1xuXG4gICAgICAgIGlmIChpc01lc3NhZ2UobWVzc2FnZSkpIHtcbiAgICAgICAgICAgIG1lc3NhZ2Uub2ZmKGhhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJHdhdGNoKGV4cCwgaGFuZGxlciwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkb2JzZXJ2ZXIud2F0Y2goZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICR3YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRvYnNlcnZlci53YXRjaENvbGxlY3Rpb24oZXhwLCBoYW5kbGVyLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRldmFsKGV4cCwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmFsdWF0b3IuZXZhbHVhdGUoZXhwLCBsb2NhbHMpO1xuICAgIH1cblxuICAgICRhc3NpZ24oZXhwLCB2YWx1ZSwgbG9jYWxzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiRldmFsdWF0b3IuYXNzaWduKGV4cCwgdmFsdWUsIGxvY2Fscyk7XG4gICAgfVxuXG4gICAgJGdldFRlbXBsYXRlKCkge1xuICAgICAgICB2YXIgZGF0YSA9IHRoaXMuJGRhdGE7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGRhdGEudGVtcGxhdGUpKSB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1dGlscy5pc1N0cmluZyhkYXRhLnRlbXBsYXRlSWQpKSB7XG4gICAgICAgICAgICB2YXIgZWxtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZGF0YS50ZW1wbGF0ZUlkKTtcblxuICAgICAgICAgICAgaWYgKGVsbSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsbS5pbm5lckhUTUw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgJHJlbmRlcigpIHtcbiAgICAgICAgdmFyIHRlbXBsYXRlID0gdGhpcy4kZ2V0VGVtcGxhdGUoKTtcbiAgICAgICAgdGhpcy4kJHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKHRoaXMsIHRlbXBsYXRlKTtcbiAgICAgICAgdGhpcy4kJHJlbmRlcmVyLnJlbmRlcigpO1xuICAgICAgICByZXR1cm4gdGhpcy4kJHJlbmRlcmVyO1xuICAgIH1cblxuICAgICRtb3VudChzZWxlY3Rvck9yRWxlbWVudCkge1xuICAgICAgICB2YXIgZWxlbWVudDtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoc2VsZWN0b3JPckVsZW1lbnQpKSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvck9yRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50ID0gc2VsZWN0b3JPckVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZih0aGlzLiQkcmVuZGVyZXIgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjdXJyZW50IGNvbXBvbmVudCBpcyBub3QgcmVuZGVyZWQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy4kJHJlbmRlcmVyLnZpZXcpO1xuICAgIH1cblxuICAgICR1bm1vdW50KCkge1xuXG4gICAgfVxuXG4gICAgJGFwcGVuZENoaWxkKGNoaWxkKSB7XG4gICAgICAgIHRoaXMuJCRjaGlsZHJlbi5wdXNoKGNoaWxkKTtcbiAgICAgICAgY2hpbGQuJCRwYXJlbnQgPSB0aGlzO1xuICAgIH1cblxuICAgICRyZW1vdmVDaGlsZChjaGlsZCkge1xuICAgICAgICB2YXIgaW5kZXggPSB0aGlzLiQkY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG5cbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgdGhpcy4kJGNoaWxkcmVuLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICBjaGlsZC4kJHBhcmVudCA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkZGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy4kJG9ic2VydmVyLmRlc3Ryb3koKTtcblxuICAgICAgICBpZih0aGlzLiQkcmVuZGVyZXIgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy4kJHJlbmRlcmVyLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG5cbiAgICAgICAgaWYodGhpcy4kJHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLiQkcGFyZW50LiRyZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWxzJztcbmltcG9ydCB7IE1fSElERV9DTEFTUyB9IGZyb20gJy4uL2Nzcyc7XG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gJy4uL3JlbmRlcic7XG5pbXBvcnQgeyBpbmplY3RvciB9IGZyb20gJy4vaW5qZWN0b3InO1xuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0aXZlQ29uc3RydWN0b3IoZGF0YSkge1xuICAgIHRoaXMuJCRzY29wZSA9IG51bGw7XG4gICAgdGhpcy4kJHZhdHRyID0gbnVsbDtcbiAgICB0aGlzLiRwcmlvcml0eSA9IDk7XG4gICAgLy8gYmluZGluZyB0ZXh0IGlzIGEgYXNzaWdubWVudFxuICAgIHRoaXMuJGFzc2lnbm1lbnQgPSBmYWxzZTtcbiAgICB0aGlzLiRwbGFjZWhvbGRlciA9IG51bGw7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSk7XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RpdmUge1xuICAgIGdldCAka2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJG1ldGFkYXRhLmtleTtcbiAgICB9XG5cbiAgICBnZXQgJHNjb3BlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4kJHNjb3BlO1xuICAgIH1cblxuICAgIGdldCAkZWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLmVsbTtcbiAgICB9XG5cbiAgICBnZXQgJGJpbmRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiQkdmF0dHIubm9kZURhdGEuYmluZGluZztcbiAgICB9XG5cbiAgICBnZXQgJGNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCR2YXR0ci52ZWxtLm5vZGVEYXRhLmNvbXBvbmVudDtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgfVxuXG4gICAgLy8gd2hpbGUgY29tcGlsaW5nXG4gICAgJGNvbXBpbGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9uQ29tcGlsZSAmJiB0aGlzLm9uQ29tcGlsZSh0aGlzLiQkdmF0dHIudmVsbSwgdGhpcy4kJHZhdHRyKTtcbiAgICB9XG5cbiAgICAkbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub25MaW5rICYmIHRoaXMub25MaW5rKHRoaXMuJHNjb3BlKTtcbiAgICB9XG5cbiAgICAvLyBiZWZvcmUgbGlua2luZ1xuICAgIC8vICRwcmVsaW5rKCkge1xuICAgIC8vICAgICB0aGlzLmJlZm9yZUxpbmsgJiYgdGhpcy5iZWZvcmVMaW5rKCk7XG4gICAgLy8gfVxuXG4gICAgLy8gYWZ0ZXIgbGlua2luZ1xuICAgICRwb3N0bGluaygpIHtcbiAgICAgICAgdGhpcy5hZnRlckxpbmsgJiYgdGhpcy5hZnRlckxpbmsoKTtcblxuICAgICAgICBpZih0aGlzLiRiaW5kaW5nICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuJGNoYW5nZSh0aGlzLiRiaW5kaW5nLnZhbHVlLCB0aGlzLiRiaW5kaW5nLm9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRoZSBpbnB1dCB2YWx1ZSBpcyBjaGFuZ2VkXG4gICAgJGNoYW5nZShuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICAgICAgdGhpcy5vbkNoYW5nZSAmJiB0aGlzLm9uQ2hhbmdlKG5ld1ZhbHVlLCBvbGRWYWx1ZSk7XG4gICAgfVxuXG4gICAgJGRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMub25EZXN0cm95ICYmIHRoaXMub25EZXN0cm95KCk7XG4gICAgfVxuXG4gICAgJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB2ZWxtLm5vZGVEYXRhLmRpcmVjdGl2ZXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uJGtleSA9PT0ga2V5O1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5sZW5ndGg/IHJlc3VsdFswXTogbnVsbDtcbiAgICB9XG5cbiAgICAkc2Vla0RpcmVjdGl2ZShrZXkpIHtcbiAgICAgICAgdmFyIHZlbG0gPSB0aGlzLiQkdmF0dHIudmVsbTtcbiAgICAgICAgcmV0dXJuIHRoaXMuJCRzZWFyY2hEaXJlY3RpdmUodmVsbSwga2V5KTtcbiAgICB9XG5cbiAgICAkc2Vla1VwRGlyZWN0aXZlKGtleSkge1xuICAgICAgICB2YXIgdmVsbSA9IHRoaXMuJCR2YXR0ci52ZWxtLnBhcmVudE5vZGU7XG4gICAgICAgIHJldHVybiB0aGlzLiQkc2VhcmNoRGlyZWN0aXZlKHZlbG0sIGtleSk7XG4gICAgfVxuXG4gICAgJHJlbW92ZUVsZW1lbnQoeWVzKSB7XG4gICAgICAgIGlmKHRoaXMuJHBsYWNlaG9sZGVyID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigneW91IG11c3QgZGVmaW5lIGVsZW1lbnQgcGxhY2Vob2xkZXIhJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoeWVzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy4kZWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkb20ucmVwbGFjZUVsZW1lbnQodGhpcy4kZWxlbWVudCwgdGhpcy4kcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuJGVsZW1lbnQucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgZG9tLnJlcGxhY2VFbGVtZW50KHRoaXMuJHBsYWNlaG9sZGVyLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICRoaWRlRWxlbWVudCh5ZXMpIHtcbiAgICAgICAgaWYgKHllcykge1xuICAgICAgICAgICAgZG9tLmFkZENsYXNzKHRoaXMuJGVsZW1lbnQsIE1fSElERV9DTEFTUyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3ModGhpcy4kZWxlbWVudCwgTV9ISURFX0NMQVNTKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICRyZW5kZXIodGVtcGxhdGUsIGxvY2Fscykge1xuICAgICAgICB2YXIgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIodGhpcy4kc2NvcGUsIHRlbXBsYXRlLCBsb2NhbHMpO1xuXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlcigpO1xuXG4gICAgICAgIHJldHVybiByZW5kZXJlcjtcbiAgICB9XG59IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4uL2NvcmUnO1xuaW1wb3J0IHsgcm9sZXMgfSBmcm9tICcuL3JvbGVzJztcbmltcG9ydCB7IENvbXBvbmVudCwgY29tcG9uZW50Q29uc3RydWN0b3IgfSBmcm9tICcuL2NvbXBvbmVudCc7XG5pbXBvcnQgeyBEaXJlY3RpdmUsIGRpcmVjdGl2ZUNvbnN0cnVjdG9yIH0gZnJvbSAnLi9kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmlsdGVyLCBmaWx0ZXJDb25zdHJ1Y3RvciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UsIHNlcnZpY2VDb25zdHJ1Y3RvciB9IGZyb20gJy4vc2VydmljZSc7XG5cbnZhciBwYXR0ZXJuID0gL15bYS16X1xcJF1bXFx3XFwkLV0qL2k7XG5cbi8vIHN0YXJ0IG1ha2UgY29uc3RydWN0b3IgZnVuY3Rpb24gYmVjYXVzZSBjbGFzcyBjYW4ndCBiZSBjYWxsIHdpdGhvdXQgbmV3LlxudmFyIGNvbXBvbmVudENsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gQ29tcG9uZW50KG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbXBvbmVudENvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuY29tcG9uZW50Q2xhc3MucHJvdG90eXBlID0gQ29tcG9uZW50LnByb3RvdHlwZTtcblxudmFyIGRpcmVjdGl2ZUNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRGlyZWN0aXZlKG1ldGFkYXRhKSB7XG4gICAgICAgIGRpcmVjdGl2ZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZGlyZWN0aXZlQ2xhc3MucHJvdG90eXBlID0gRGlyZWN0aXZlLnByb3RvdHlwZTtcblxudmFyIGZpbHRlckNsYXNzID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gRmlsdGVyKG1ldGFkYXRhKSB7XG4gICAgICAgIGZpbHRlckNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpO1xuICAgIH07XG59KSgpO1xuZmlsdGVyQ2xhc3MucHJvdG90eXBlID0gRmlsdGVyLnByb3RvdHlwZTtcblxudmFyIHNlcnZpY2VDbGFzcyA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIFNlcnZpY2UobWV0YWRhdGEpIHtcbiAgICAgICAgc2VydmljZUNvbnN0cnVjdG9yLmNhbGwodGhpcywgbWV0YWRhdGEpXG4gICAgfTtcbn0pKCk7XG5zZXJ2aWNlQ2xhc3MucHJvdG90eXBlID0gU2VydmljZS5wcm90b3R5cGU7XG4vLyBlbmQgb2YgbWFrZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiBiZWNhdXNlIGNsYXNzIGNhbid0IGJlIGNhbGwgd2l0aG91dCBuZXcuXG5cbi8vIGNvbnN0cnVjdG9yIGZhY3RvcnksIGNyZWF0ZSBjb25zdHJ1Y3RvciBmb3IgY29tcG9uZW50LCBkaXJlY3RpdmUsIGZpbHRlciBhbmQgc2VydmljZVxuZXhwb3J0IGNsYXNzIEZhY3Rvcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgcmVuYW1lKHJvbGVJZCwgbmFtZSkge1xuICAgICAgICBpZiAocGF0dGVybi50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICB2YXIgbmV3TmFtZSA9ICcnO1xuICAgICAgICAgICAgdmFyIHNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLScpO1xuXG4gICAgICAgICAgICBzZWdtZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChzZWdtZW50KSB7XG4gICAgICAgICAgICAgICAgbmV3TmFtZSArPSB1dGlscy51cHBlcmNhc2Uoc2VnbWVudFswXSkgKyBzZWdtZW50LnN1YnN0cmluZygxKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKHJvbGVJZCkge1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuY29tcG9uZW50OlxuICAgICAgICAgICAgICAgICAgICBuZXdOYW1lICs9ICdDb21wb25lbnQnO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHJvbGVzLmRpcmVjdGl2ZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnRGlyZWN0aXZlJztcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSByb2xlcy5maWx0ZXI6XG4gICAgICAgICAgICAgICAgICAgIG5ld05hbWUgKz0gJ0ZpbHRlcic7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2Ugcm9sZXMuc2VydmljZTpcbiAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSArPSAnU2VydmljZSc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbmV3TmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihuYW1lICsgJ2lzIG5vdCBhIHZhbGlkIG5hbWUnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1ha2Uocm9sZUlkLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvciwgY29uc3RydWN0b3JOYW1lID0gdGhpcy5yZW5hbWUocm9sZUlkLCBuYW1lKSxcbiAgICAgICAgICAgIG9uQ29uc3RydWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbnN0cnVjdG9yLnN1cGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvci5zdXBlci5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgcHJvcGVydGllc1xuICAgICAgICAgICAgICAgIGlmICh1dGlscy5pc0Z1bmN0aW9uKGNvbmZpZy5jb25zdHJ1Y3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpZy5jb25zdHJ1Y3QuY2FsbCh0aGlzLCBNZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0cnVjdG9yID0gbmV3IEZ1bmN0aW9uKCdvbkNvbnN0cnVjdCcsICdcInVzZSBzdHJpY3RcIjtyZXR1cm4gZnVuY3Rpb24gJyArIGNvbnN0cnVjdG9yTmFtZSArICcoKXtvbkNvbnN0cnVjdC5jYWxsKHRoaXMpO307Jykob25Db25zdHJ1Y3QpO1xuXG4gICAgICAgIC8vIGV4dGVuZHMgY2xhc3NcbiAgICAgICAgaWYgKHV0aWxzLmlzRnVuY3Rpb24oY29uZmlnLmV4dGVuZHMpKSB7XG4gICAgICAgICAgICB1dGlscy5pbmhlcml0KGNvbnN0cnVjdG9yLCBjb25maWcuZXh0ZW5kcyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgbWV0aG9kc1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAoY29uZmlnLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9PSAnZXh0ZW5kcycgJiYga2V5ICE9PSAnY29uc3RydWN0Jykge1xuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yLnByb3RvdHlwZVtrZXldID0gY29uZmlnW2tleV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzdG9yZSBtZXRhZGF0YSB0byBwcm90b3R5cGVcbiAgICAgICAgbWV0YWRhdGEua2V5ID0gbmFtZTtcbiAgICAgICAgY29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEgPSBtZXRhZGF0YTtcblxuICAgICAgICByZXR1cm4gY29uc3RydWN0b3I7XG4gICAgfVxuXG4gICAgbWFrZUNvbXBvbmVudChuYW1lLCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgIGNvbmZpZyA9IHV0aWxzLm1lcmdlKHtcbiAgICAgICAgICAgIGV4dGVuZHM6IGNvbXBvbmVudENsYXNzXG4gICAgICAgIH0sIGNvbmZpZyk7XG4gICAgICAgIHJldHVybiB0aGlzLm1ha2Uocm9sZXMuY29tcG9uZW50LCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICBtYWtlRGlyZWN0aXZlKG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICAgICAgY29uZmlnID0gdXRpbHMubWVyZ2Uoe1xuICAgICAgICAgICAgZXh0ZW5kczogZGlyZWN0aXZlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5kaXJlY3RpdmUsIG5hbWUsIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIG1ha2VGaWx0ZXIobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBmaWx0ZXJDbGFzc1xuICAgICAgICB9LCBjb25maWcpO1xuICAgICAgICByZXR1cm4gdGhpcy5tYWtlKHJvbGVzLmZpbHRlciwgbmFtZSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgbWFrZVNlcnZpY2UobmFtZSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICBjb25maWcgPSB1dGlscy5tZXJnZSh7XG4gICAgICAgICAgICBleHRlbmRzOiBzZXJ2aWNlQ2xhc3NcbiAgICAgICAgfSwgY29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFrZShyb2xlcy5zZXJ2aWNlLCBuYW1lLCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICB9XG59XG5cbmV4cG9ydCB2YXIgZmFjdG9yeSA9IG5ldyBGYWN0b3J5KCk7IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGZpbHRlckNvbnN0cnVjdG9yKGRhdGEpIHtcbiAgICB0aGlzLiRkYXRhID0gdXRpbHMubWVyZ2UodGhpcy4kJG1ldGFkYXRhLCBkYXRhKTtcbiAgICBpbmplY3Rvci5pbmplY3RTZXJ2aWNlcyh0aGlzLCB0aGlzLiRkYXRhKTtcbn1cblxuZXhwb3J0IGNsYXNzIEZpbHRlciB7XG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICBmaWx0ZXJDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL3ZpZXctYXBpJzsiLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICcuLi91dGlscyc7XG5pbXBvcnQgeyByb2xlcyB9IGZyb20gJy4vcm9sZXMnO1xuXG4vLyBtZXRhZGF0YSBleGFtcGxlXG4vLyB7IGtleTogJycsIG5hbWVzcGFjZTogJycsIGV4dGVuZHM6IG51bGwsIGNvbnN0cnVjdDogZm4sIG1ldGhvZHM6IHt9IH1cbmV4cG9ydCBjbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2xhc3NDb250YWluZXIgPSB7fTtcbiAgICAgICAgdGhpcy5pbnN0YW5jZUNvbnRhaW5lciA9IHt9O1xuICAgICAgICB0aGlzLnNlcnZpY2VTdGFjayA9IFtdO1xuICAgIH1cblxuICAgIGdldENsYXNzQ29udGFpbmVyKHJvbGVJZCkge1xuICAgICAgICBpZiAoIXRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXSkge1xuICAgICAgICAgICAgdGhpcy5jbGFzc0NvbnRhaW5lcltyb2xlSWRdID0ge307XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2xhc3NDb250YWluZXJbcm9sZUlkXTtcbiAgICB9XG5cbiAgICBnZXRJbnN0YW5jZUNvbnRhaW5lcihyb2xlSWQpIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF0pIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFuY2VDb250YWluZXJbcm9sZUlkXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlQ29udGFpbmVyW3JvbGVJZF07XG4gICAgfVxuXG4gICAgcmVnaXN0ZXIocm9sZUlkLCBrZXksIGNvbnN0cnVjdG9yKSB7XG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpICE9PSAtMSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbGxlZ2FsIGNoYXJhY3RlciBcIi5cIicpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoY29udGFpbmVyW2tleV0gPT0gbnVsbCkge1xuICAgICAgICAgICAgY29udGFpbmVyW2tleV0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBtYXRjaGVzID0gY29udGFpbmVyW2tleV0uZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlID09PSBjb25zdHJ1Y3Rvci5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2U7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKG1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihrZXkgKyAnIGlzIGV4aXN0IHVuZGVyIG5hbWVzcGFjZSAnICsgbWF0Y2hlc1swXS5wcm90b3R5cGUuJCRtZXRhZGF0YS5uYW1lc3BhY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29udGFpbmVyW2tleV0ucHVzaChjb25zdHJ1Y3Rvcik7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb21wb25lbnQoa2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpIHtcbiAgICAgICAgdGhpcy5yZWdpc3Rlcihyb2xlcy5jb21wb25lbnQsIGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckRpcmVjdGl2ZShrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuZmlsdGVyLCBrZXksIGNvbnN0cnVjdG9yLCBtZXRhZGF0YSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IsIG1ldGFkYXRhKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXIocm9sZXMuc2VydmljZSwga2V5LCBjb25zdHJ1Y3RvciwgbWV0YWRhdGEpO1xuICAgIH1cblxuICAgIGhhcyhyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuYW1lc3BhY2UgJiYgY29uc3RydWN0b3JzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9ycyA9IGNvbnN0cnVjdG9ycy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICB2YXIgbWV0YSA9IGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ldGEubmFtZXNwYWNlICYmIHV0aWxzLmxvd2VyY2FzZShtZXRhLm5hbWVzcGFjZSkgPT09IHV0aWxzLmxvd2VyY2FzZShuYW1lc3BhY2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaGFzQ29tcG9uZW50KGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhyb2xlcy5jb21wb25lbnQsIGtleSwgdHJ1ZSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBoYXNEaXJlY3RpdmUoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzKHJvbGVzLmRpcmVjdGl2ZSwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGhhc0ZpbHRlcihrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuZmlsdGVyLCBrZXksIHRydWUsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgaGFzU2VydmljZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXMocm9sZXMuc2VydmljZSwga2V5LCB0cnVlLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldChyb2xlSWQsIGtleSwgaWdub3JlQ2FzZSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcnMsIGNvbnRhaW5lciA9IHRoaXMuZ2V0Q2xhc3NDb250YWluZXIocm9sZUlkKTtcblxuICAgICAgICBpZiAoaWdub3JlQ2FzZSkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gdXRpbHMuZ2V0UHJvcGVydHkoY29udGFpbmVyLCBrZXksIHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29udGFpbmVyW2tleV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29uc3RydWN0b3JzID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5hbWVzcGFjZSAmJiBjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29uc3RydWN0b3JzID0gY29uc3RydWN0b3JzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHZhciBtZXRhID0gaXRlbS5wcm90b3R5cGUuJCRtZXRhZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbWV0YS5uYW1lc3BhY2UgJiYgdXRpbHMubG93ZXJjYXNlKG1ldGEubmFtZXNwYWNlKSA9PT0gdXRpbHMubG93ZXJjYXNlKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGNvbnN0cnVjdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjb25zdHJ1Y3RvcnMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdmFyIG5hbWVzcGFjZXMgPSBjb25zdHJ1Y3RvcnMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW0ucHJvdG90eXBlLiQkbWV0YWRhdGEubmFtZXNwYWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25hbWVzcGFjZSAnICsgbmFtZXNwYWNlcy5qb2luKCd8JykgKyAnIGFsbCBoYXZlICcgKyBrZXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yc1swXTtcbiAgICB9XG5cbiAgICBnZXRDb21wb25lbnQoa2V5LCBuYW1lc3BhY2UpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0KHJvbGVzLmNvbXBvbmVudCwga2V5LCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGdldERpcmVjdGl2ZShrZXksIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXQocm9sZXMuZGlyZWN0aXZlLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgZ2V0RmlsdGVyKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5maWx0ZXIsIGtleSwgbmFtZXNwYWNlKTtcbiAgICB9XG5cbiAgICBnZXRTZXJ2aWNlKGtleSwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldChyb2xlcy5zZXJ2aWNlLCBrZXksIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlKHJvbGVJZCwga2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKSB7XG4gICAgICAgIHZhciBjb25zdHJ1Y3RvcjtcblxuICAgICAgICBpZiAodXRpbHMuaXNTdHJpbmcoa2V5T3JDb25zdHJ1Y3RvcikpIHtcbiAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gdGhpcy5nZXQocm9sZUlkLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuXG4gICAgICAgICAgICBpZiAoY29uc3RydWN0b3IgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbWlzcyBjb25zdHJ1Y3RvciBmb3Iga2V5ICcgKyBrZXlPckNvbnN0cnVjdG9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh1dGlscy5pc0Z1bmN0aW9uKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3RvciA9IGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgcGFyYW1ldGVyJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbmV3IGNvbnN0cnVjdG9yKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcG9uZW50KGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZShyb2xlcy5jb21wb25lbnQsIGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgfVxuXG4gICAgY3JlYXRlRGlyZWN0aXZlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGUocm9sZXMuZGlyZWN0aXZlLCBrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpbHRlcihrZXlPckNvbnN0cnVjdG9yLCBuYW1lc3BhY2UpIHtcbiAgICAgICAgdmFyIGluc3RhbmNlLCBjb250YWluZXIgPSB0aGlzLmdldEluc3RhbmNlQ29udGFpbmVyKHJvbGVzLmZpbHRlcik7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRGaWx0ZXIoa2V5T3JDb25zdHJ1Y3RvciwgbmFtZXNwYWNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZXN1bHQgPSBjb250YWluZXIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gaXRlbSBpbnN0YW5jZW9mIGtleU9yQ29uc3RydWN0b3I7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChyZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IHJlc3VsdFswXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlID0gbmV3IGtleU9yQ29uc3RydWN0b3IoKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5wdXNoKGluc3RhbmNlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG5cbiAgICBjcmVhdGVTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSkge1xuICAgICAgICB2YXIgaW5zdGFuY2UsIGNvbnRhaW5lciA9IHRoaXMuZ2V0SW5zdGFuY2VDb250YWluZXIocm9sZXMuc2VydmljZSk7XG5cbiAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKGtleU9yQ29uc3RydWN0b3IpKSB7XG4gICAgICAgICAgICBrZXlPckNvbnN0cnVjdG9yID0gdGhpcy5nZXRTZXJ2aWNlKGtleU9yQ29uc3RydWN0b3IsIG5hbWVzcGFjZSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWtleU9yQ29uc3RydWN0b3IucHJvdG90eXBlLiQkbWV0YWRhdGEubm9uU2hhcmVkKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0ID0gY29udGFpbmVyLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtIGluc3RhbmNlb2Yga2V5T3JDb25zdHJ1Y3RvcjtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gcmVzdWx0WzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcga2V5T3JDb25zdHJ1Y3RvcigpO1xuICAgICAgICAgICAgY29udGFpbmVyLnB1c2goaW5zdGFuY2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cblxuICAgIHBhcnNlRnVsbE5hbWUobmFtZSwgYWxpYXMpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHtuczogJycsIGtleTogJyd9LFxuICAgICAgICAgICAgc2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XG5cbiAgICAgICAgaWYgKHNlZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmVzdWx0LmtleSA9IG5hbWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQua2V5ID0gc2VnbWVudHMucG9wKCk7XG4gICAgICAgICAgICByZXN1bHQubnMgPSBzZWdtZW50cy5qb2luKCcuJyk7XG5cbiAgICAgICAgICAgIGlmIChhbGlhcykge1xuICAgICAgICAgICAgICAgIHV0aWxzLnNvbWUoYWxpYXMsIGZ1bmN0aW9uIChzaG9ydE5hbWUsIGZ1bGxOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaG9ydE5hbWUgPT09IHJlc3VsdC5ucykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0Lm5zID0gZnVsbE5hbWU7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBpbmplY3RTZXJ2aWNlcyhpbnN0YW5jZSwgbWV0YWRhdGEsIGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzLCBzZXJ2aWNlRnVsbE5hbWUsIGhhc0xvb3BEZXBlbmRlbmN5ID0gZmFsc2U7XG5cbiAgICAgICAgaWYoY2hlY2tMb29wRGVwZW5kZW5jeSkge1xuICAgICAgICAgICAgLy8gY3JlYXRpbmcgYSBzZXJ2aWNlIGluc3RhbmNlIGF0IHRoZSBtb21lbnRcbiAgICAgICAgICAgIHNlcnZpY2VGdWxsTmFtZSA9IHV0aWxzLmZvcm1hdCgnezB9LnsxfScsIG1ldGFkYXRhLm5hbWVzcGFjZSwgbWV0YWRhdGEua2V5KTtcbiAgICAgICAgICAgIGhhc0xvb3BEZXBlbmRlbmN5ID0gdGhpcy5zZXJ2aWNlU3RhY2suaW5kZXhPZihzZXJ2aWNlRnVsbE5hbWUpICE9PSAtMTtcblxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlU3RhY2sucHVzaChzZXJ2aWNlRnVsbE5hbWUpO1xuXG4gICAgICAgICAgICBpZiAoaGFzTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgICAgICAvLyBjbGVhciBzZXJ2aWNlIGRlcGVuZGVuY3kgc3RhY2tcbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VTdGFjay5sZW5ndGggPSAwO1xuICAgICAgICAgICAgICAgIC8vIG9jY3VycyBsb29wIGRlcGVuZGVuY3lcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb29wIGRlcGVuZGVuY3k6IFwiICsgdGhpcy5zZXJ2aWNlU3RhY2suam9pbignLT4nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0YWRhdGEgJiYgdXRpbHMuaXNPYmplY3QobWV0YWRhdGEuaW5qZWN0KSkge1xuICAgICAgICAgICAgdXRpbHMuZm9yRWFjaChtZXRhZGF0YS5pbmplY3QsIGZ1bmN0aW9uIChzZXJ2aWNlLCBrZXkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoaW5zdGFuY2UsIGtleSwge1xuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJpdmF0ZUtleSA9ICckJCcgKyBrZXk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZVtwcml2YXRlS2V5XSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHV0aWxzLmlzU3RyaW5nKHNlcnZpY2UpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpZGVudGlmaWVyID0gc2VsZi5wYXJzZUZ1bGxOYW1lKHNlcnZpY2UsIG1ldGFkYXRhLmFsaWFzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VbcHJpdmF0ZUtleV0gPSBzZWxmLmNyZWF0ZVNlcnZpY2UoaWRlbnRpZmllci5rZXksIGlkZW50aWZpZXIubnMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlW3ByaXZhdGVLZXldID0gc2VsZi5jcmVhdGVTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlW3ByaXZhdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGNoZWNrTG9vcERlcGVuZGVuY3kpIHtcbiAgICAgICAgICAgIHRoaXMuc2VydmljZVN0YWNrLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgdmFyIGluamVjdG9yID0gbmV3IEluamVjdG9yKCk7IiwiaW1wb3J0IHsgcGFyc2VFeHAgfSBmcm9tICcuLi9leHAnO1xyXG5pbXBvcnQgeyBwYXJzZVRwbCB9IGZyb20gJy4uL3RwbCc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbXMgPSB7fTtcclxuICAgIH1cclxuXHJcbiAgICBwYXJzZUV4cHJlc3Npb24oZXhwKSB7XHJcbiAgICAgICAgdmFyIHByb2dyYW0gPSB0aGlzLnByb2dyYW1zW2V4cF07XHJcblxyXG4gICAgICAgIGlmICghcHJvZ3JhbSkge1xyXG4gICAgICAgICAgICBwcm9ncmFtID0gcGFyc2VFeHAoZXhwKTtcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmFtc1tleHBdID0gcHJvZ3JhbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnNlVGVtcGxhdGUodHBsKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlVHBsKHRwbCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveSgpIHtcclxuXHJcbiAgICB9XHJcbn0iLCJleHBvcnQgdmFyIHJvbGVzID0ge1xuICAgIGZpbHRlcjogMCxcbiAgICBzZXJ2aWNlOiAxLFxuICAgIGNvbXBvbmVudDogMixcbiAgICBkaXJlY3RpdmU6IDNcbn07IiwiaW1wb3J0ICogYXMgdXRpbHMgZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgaW5qZWN0b3IgfSBmcm9tICcuL2luamVjdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNlcnZpY2VDb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgdGhpcy4kZGF0YSA9IHV0aWxzLm1lcmdlKHRoaXMuJCRtZXRhZGF0YSwgZGF0YSk7XG4gICAgaW5qZWN0b3IuaW5qZWN0U2VydmljZXModGhpcywgdGhpcy4kZGF0YSwgdHJ1ZSk7XG59XG5cbmV4cG9ydCBjbGFzcyBTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHNlcnZpY2VDb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyBmYWN0b3J5IH0gZnJvbSAnLi9mYWN0b3J5JztcbmltcG9ydCB7IGluamVjdG9yIH0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQgKiBhcyBkb20gZnJvbSAnLi4vZG9tJztcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50JztcbmltcG9ydCB7IERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlJztcbmltcG9ydCB7IEZpbHRlciB9IGZyb20gJy4vZmlsdGVyJztcbmltcG9ydCB7IFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UnO1xuXG5mdW5jdGlvbiBuYW1lc3BhY2UobmFtZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbXBvbmVudDogZnVuY3Rpb24gKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgICAgICAgICAgbWV0YWRhdGEubmFtZXNwYWNlID0gbmFtZTtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aXZlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXJ2aWNlOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIHNlcnZpY2Uoa2V5LCBjb25maWcsIG1ldGFkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyOiBmdW5jdGlvbiAoa2V5LCBjb25maWcsIG1ldGFkYXRhKSB7XG4gICAgICAgICAgICBtZXRhZGF0YS5uYW1lc3BhY2UgPSBuYW1lO1xuICAgICAgICAgICAgcmV0dXJuIGZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcG9uZW50KGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUNvbXBvbmVudChrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyQ29tcG9uZW50KGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZGlyZWN0aXZlKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZURpcmVjdGl2ZShrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRGlyZWN0aXZlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGtleSwgY29uZmlnLCBtZXRhZGF0YSkge1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IGZhY3RvcnkubWFrZUZpbHRlcihrZXksIGNvbmZpZywgbWV0YWRhdGEpO1xuICAgIGluamVjdG9yLnJlZ2lzdGVyRmlsdGVyKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gc2VydmljZShrZXksIGNvbmZpZywgbWV0YWRhdGEpIHtcbiAgICB2YXIgY29uc3RydWN0b3IgPSBmYWN0b3J5Lm1ha2VTZXJ2aWNlKGtleSwgY29uZmlnLCBtZXRhZGF0YSk7XG4gICAgaW5qZWN0b3IucmVnaXN0ZXJTZXJ2aWNlKGtleSwgY29uc3RydWN0b3IpO1xuICAgIHJldHVybiBjb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gaXNDb21wb25lbnQoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2UgaW5zdGFuY2VvZiBDb21wb25lbnQ7XG59XG5cbmZ1bmN0aW9uIGlzRGlyZWN0aXZlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgRGlyZWN0aXZlO1xufVxuXG5mdW5jdGlvbiBpc0ZpbHRlcihpbnN0YW5jZSkge1xuICAgIHJldHVybiBpbnN0YW5jZSBpbnN0YW5jZW9mIEZpbHRlcjtcbn1cblxuZnVuY3Rpb24gaXNTZXJ2aWNlKGluc3RhbmNlKSB7XG4gICAgcmV0dXJuIGluc3RhbmNlIGluc3RhbmNlb2YgU2VydmljZTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyKHNlbGVjdG9yLCBjb25maWcpIHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgIHZhciBSb290ID0gZmFjdG9yeS5tYWtlQ29tcG9uZW50KCdyb290JywgY29uZmlnLCB7XG4gICAgICAgIHRlbXBsYXRlOiBlbGVtZW50LmlubmVySFRNTFxuICAgIH0pO1xuICAgIHZhciByb290ID0gbmV3IFJvb3QoKTtcbiAgICBcbiAgICBkb20uY2xlYXJDaGlsZHJlbk9mRWxlbWVudChlbGVtZW50KTtcbiAgICByb290LiRyZW5kZXIoKTtcbiAgICByb290LiRtb3VudChlbGVtZW50KTtcbn1cblxuZXhwb3J0IHtcbiAgICBDb21wb25lbnQsXG4gICAgRGlyZWN0aXZlLFxuICAgIEZpbHRlcixcbiAgICBTZXJ2aWNlLFxuICAgIGlzQ29tcG9uZW50LFxuICAgIGlzRGlyZWN0aXZlLFxuICAgIGlzRmlsdGVyLFxuICAgIGlzU2VydmljZSxcbiAgICBuYW1lc3BhY2UsXG4gICAgcmVuZGVyLFxuICAgIGluamVjdG9yXG59OyJdLCJzb3VyY2VSb290IjoiIn0=